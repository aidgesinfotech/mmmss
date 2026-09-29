import { CATEGORIES } from "../data/store";

// RFC 4180 style CSV: quoted cells, "" escapes, commas/newlines inside quotes, optional BOM.
export function parseCSV(text) {
  const src = text.replace(/^\uFEFF/, "");
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;

  for (let i = 0; i < src.length; i++) {
    const ch = src[i];
    if (quoted) {
      if (ch === '"') {
        if (src[i + 1] === '"') {
          cell += '"';
          i++;
        } else quoted = false;
      } else cell += ch;
    } else if (ch === '"') quoted = true;
    else if (ch === ",") {
      row.push(cell);
      cell = "";
    } else if (ch === "\n" || ch === "\r") {
      if (ch === "\r" && src[i + 1] === "\n") i++;
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else cell += ch;
  }
  if (cell !== "" || row.length) {
    row.push(cell);
    rows.push(row);
  }
  return rows;
}

// Stops spreadsheet apps from running cell text as a formula.
const FORMULA = /^[=+@\t\r]/;
const guard = (v) => (FORMULA.test(v) ? `'${v}` : v);
const unguard = (v) => (/^'[=+@\t\r]/.test(v) ? v.slice(1) : v);

function escapeCell(value) {
  const v = guard(value == null ? "" : String(value));
  return /[",\r\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v;
}

export const toCSV = (rows) => "\uFEFF" + rows.map((r) => r.map(escapeCell).join(",")).join("\r\n");

export function downloadFile(filename, content, type = "text/csv;charset=utf-8") {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const a = Object.assign(document.createElement("a"), { href: url, download: filename });
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// ---------- product CSV format ----------

export const PRODUCT_COLUMNS = ["id", "name", "price", "mrp", "category", "tag", "img", "images", "desc", "rating", "reviews", "active"];

const ALIASES = {
  id: "id", productid: "id",
  name: "name", productname: "name", title: "name",
  price: "price", sellingprice: "price", sellprice: "price", saleprice: "price",
  mrp: "mrp", originalprice: "mrp",
  category: "category",
  tag: "tag", label: "tag",
  img: "img", image: "img", mainimage: "img", imageurl: "img", mainimageurl: "img", thumbnail: "img",
  images: "images", gallery: "images", galleryimages: "images", galleryimageurls: "images",
  desc: "desc", description: "desc",
  rating: "rating",
  reviews: "reviews", reviewcount: "reviews", reviewscount: "reviews",
  active: "isActive", isactive: "isActive", status: "isActive", visible: "isActive",
};

const normHeader = (h) => h.toLowerCase().replace(/[^a-z]/g, "");
export const REQUIRED = ["name", "price", "mrp", "category", "img"];

export function productsToCSV(products) {
  return toCSV([
    PRODUCT_COLUMNS,
    ...products.map((p) => [p.id, p.name, p.price, p.mrp, p.category, p.tag, p.img, (p.images || []).join(" | "), p.desc, p.rating, p.reviews, p.isActive ? "yes" : "no"]),
  ]);
}

export const downloadSample = () => downloadFile("products-sample.csv", sampleCSV(CATEGORIES));

export const downloadProducts = (products, domain = window.location.hostname) =>
  downloadFile(`products-${domain}-${new Date().toISOString().slice(0, 10)}.csv`, productsToCSV(products));

export function sampleCSV(categories) {
  const c = (i) => categories[i % categories.length].id;
  return toCSV([
    PRODUCT_COLUMNS,
    ["", "Cotton Printed Kurti", 399, 999, c(0), "Trending", "https://example.com/kurti.jpg", "https://example.com/kurti-1.jpg | https://example.com/kurti-2.jpg", "Soft cotton kurti, perfect for daily wear.", 4.3, 128, "yes"],
    ["", "Wireless Earbuds", 899, 2499, c(1), "Best Seller", "https://example.com/earbuds.jpg", "", "Bluetooth 5.3 earbuds with 30 hours playback.", 4.1, 57, "yes"],
    ["", "Steel Water Bottle 1L", 249, 599, c(3), "", "https://example.com/bottle.jpg", "", "Leak-proof stainless steel bottle.", "", "", "no"],
  ]);
}

// Returns { rows, error }. Each row = object keyed by product field + __row (line number in the sheet).
export function readProductCSV(text) {
  const table = parseCSV(text)
    .map((cells, i) => ({ cells, line: i + 1 }))
    .filter((r) => r.cells.some((c) => c.trim() !== ""));
  if (!table.length) return { error: "The file is empty." };

  const headers = table[0].cells.map((h) => ALIASES[normHeader(h)] || null);
  const found = new Set(headers.filter(Boolean));
  const missing = REQUIRED.filter((k) => !found.has(k));
  if (missing.length) return { error: `Missing required column(s): ${missing.join(", ")}. Download the sample CSV to see the correct format.` };
  if (table.length < 2) return { error: "The file has a header but no product rows." };

  const rows = table.slice(1).map(({ cells, line }) => {
    const obj = { __row: line };
    headers.forEach((key, j) => {
      if (key && obj[key] === undefined) obj[key] = unguard((cells[j] ?? "").trim());
    });
    return obj;
  });
  return { rows, ignored: table[0].cells.filter((c, j) => !headers[j] && c.trim()) };
}
