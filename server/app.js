import { CATEGORIES } from "../src/data/store.js";
import { createToken, readToken } from "./auth.js";
import { cashfreeEnv, createOrder, customerFor, fetchOrder, orderIsPaid } from "./cashfree.js";
import { DEFAULT_SETTINGS, db, getStore, seedStore } from "./db.js";

class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

const fail = (status, message) => {
  throw new HttpError(status, message);
};

function domainOf(req) {
  try {
    const url = new URL(req.url, "http://x");
    const qDomain = url.searchParams.get("domain") || req.query?.domain;
    if (qDomain) return String(qDomain).trim().toLowerCase().replace(/:\d+$/, "").replace(/^www\./, "");
  } catch (e) {}
  const storeHeader = req.headers["x-store-domain"];
  if (storeHeader) return String(storeHeader).trim().toLowerCase().replace(/:\d+$/, "").replace(/^www\./, "");

  const raw = String(req.headers["x-forwarded-host"] || req.headers.host || "localhost").split(",")[0];
  return raw.trim().toLowerCase().replace(/:\d+$/, "").replace(/^www\./, "");
}

function routeOf(req) {
  const url = new URL(req.url, "http://x");
  const fromQuery = url.searchParams.get("path") ?? req.query?.path;
  const path = fromQuery != null ? String(fromQuery) : url.pathname.replace(/^\/api\/?/, "");
  return path.split("/").filter(Boolean);
}

async function readBody(req) {
  if (req.body !== undefined) return typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  let raw = "";
  for await (const chunk of req) raw += chunk;
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    fail(400, "Invalid JSON body");
  }
}

function send(res, status, data) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(data));
}

// ---------- mapping + validation ----------

const toProduct = (r) => ({
  id: r.id,
  name: r.name,
  price: r.price,
  mrp: r.mrp,
  category: r.category,
  tag: r.tag,
  img: r.img,
  images: safeJSON(r.images, [r.img]),
  desc: r.description || "",
  rating: Number(r.rating),
  reviews: r.reviews,
  sortOrder: r.sort_order,
  isActive: !!r.is_active,
});

function safeJSON(s, fallback) {
  try {
    const v = JSON.parse(s);
    return Array.isArray(v) && v.length ? v : fallback;
  } catch {
    return fallback;
  }
}

const CATEGORY_IDS = new Set(CATEGORIES.map((c) => c.id));
const isUrl = (s) => /^(https?:\/\/|\/)\S+$/.test(s);

const CATEGORY_BY_NAME = new Map(CATEGORIES.flatMap((c) => [[c.id.toLowerCase(), c.id], [c.name.toLowerCase(), c.id]]));
const blank = (v) => v == null || String(v).trim() === "";
const num = (v, fallback) => (blank(v) ? fallback : Number(String(v).replace(/[₹,\s]/g, "")));

function parseActive(v) {
  if (v === true || v === false) return v;
  if (blank(v)) return true;
  const s = String(v).trim().toLowerCase();
  if (["1", "true", "yes", "y", "active"].includes(s)) return true;
  if (["0", "false", "no", "n", "hidden", "inactive"].includes(s)) return false;
  return null;
}

// Collects every problem instead of stopping at the first, so CSV previews can show them all.
function validateProduct(b) {
  const errors = [];
  const name = String(b.name ?? "").trim();
  const price = Math.round(num(b.price, NaN));
  const mrp = Math.round(num(b.mrp, NaN));
  const category = CATEGORY_BY_NAME.get(String(b.category ?? "").trim().toLowerCase());
  const img = String(b.img ?? "").trim();
  const images = (Array.isArray(b.images) ? b.images : String(b.images ?? "").split(/\r?\n|\|/)).map((s) => String(s).trim()).filter(Boolean);
  const rating = num(b.rating, 4);
  const reviews = Math.round(num(b.reviews, 0));
  const active = parseActive(b.isActive);

  if (!name || name.length > 255) errors.push("Name is required (max 255 chars)");
  if (!(price > 0)) errors.push("Price must be a number greater than 0");
  if (!(mrp > 0)) errors.push("MRP must be a number greater than 0");
  else if (price > 0 && mrp < price) errors.push("MRP must be greater than or equal to price");
  if (!category) errors.push(`Invalid category "${b.category ?? ""}" (use: ${CATEGORIES.map((c) => c.id).join(", ")})`);
  if (!isUrl(img)) errors.push("Main image URL is required (must start with http:// or https://)");
  if (images.some((u) => !isUrl(u))) errors.push("Every gallery image must be a valid URL");
  if (!(rating >= 0 && rating <= 5)) errors.push("Rating must be between 0 and 5");
  if (!(reviews >= 0)) errors.push("Reviews must be 0 or more");
  if (active === null) errors.push('Active must be yes/no, true/false or 1/0');

  if (errors.length) return { errors };
  return {
    errors,
    value: {
      name,
      price,
      mrp,
      category,
      tag: String(b.tag ?? "").trim().slice(0, 50),
      img,
      images: JSON.stringify(images.length ? images : [img]),
      description: String(b.desc ?? "").trim(),
      rating: Math.round(rating * 10) / 10,
      reviews,
      is_active: active ? 1 : 0,
    },
  };
}

function productInput(b) {
  const { errors, value } = validateProduct(b);
  if (errors.length) fail(400, errors[0]);
  return value;
}

const IMPORT_MAX_ROWS = 5000;
const IMPORT_CHUNK = 300;
const UPSERT_COLS = ["name", "price", "mrp", "category", "tag", "img", "images", "description", "rating", "reviews", "is_active"];

// dryRun=true -> only validate & report. Otherwise saves every valid row (invalid rows are skipped).
async function importProducts(store, body) {
  const input = Array.isArray(body.rows) ? body.rows : fail(400, "No rows to import");
  if (!input.length) fail(400, "The file has no product rows");
  if (input.length > IMPORT_MAX_ROWS) fail(400, `Too many rows (max ${IMPORT_MAX_ROWS} per import)`);

  const [existing] = await db().query("SELECT id FROM products WHERE store_id = ?", [store.id]);
  const ownIds = new Set(existing.map((r) => r.id));
  const seen = new Set();

  const rows = input.map((raw, i) => {
    const rowNo = Number(raw?.__row) || i + 2;
    const { errors, value } = validateProduct(raw || {});
    let id = null;
    if (!blank(raw?.id)) {
      id = Number(raw.id);
      if (!Number.isInteger(id) || id <= 0) errors.push(`Invalid ID "${raw.id}"`);
      else if (!ownIds.has(id)) errors.push(`Product ID ${id} does not exist in this store (leave ID empty to create a new product)`);
      else if (seen.has(id)) errors.push(`Product ID ${id} appears more than once in the file`);
      seen.add(id);
    }
    return { row: rowNo, action: id ? "update" : "create", id, errors, value };
  });

  const valid = rows.filter((r) => !r.errors.length);
  const summary = {
    total: rows.length,
    valid: valid.length,
    invalid: rows.length - valid.length,
    create: valid.filter((r) => r.action === "create").length,
    update: valid.filter((r) => r.action === "update").length,
  };

  if (body.dryRun) {
    return {
      summary,
      rows: rows.map((r, i) => ({
        row: r.row,
        action: r.action,
        id: r.id,
        name: r.value?.name ?? String(input[i]?.name ?? ""),
        price: r.value?.price ?? input[i]?.price ?? "",
        mrp: r.value?.mrp ?? input[i]?.mrp ?? "",
        category: r.value?.category ?? input[i]?.category ?? "",
        img: r.value?.img ?? input[i]?.img ?? "",
        isActive: r.value ? !!r.value.is_active : null,
        errors: r.errors,
      })),
    };
  }

  if (!valid.length) fail(400, "No valid rows to import");

  const creates = valid.filter((r) => r.action === "create");
  const [[{ minSort }]] = await db().query("SELECT COALESCE(MIN(sort_order), 0) AS minSort FROM products WHERE store_id = ?", [store.id]);
  creates.forEach((r, i) => (r.sort = minSort - creates.length + i));
  const conn = await db().getConnection();
  try {
    await conn.beginTransaction();
    const updateSql = UPSERT_COLS.map((c) => `${c} = VALUES(${c})`).join(", ");
    for (let i = 0; i < valid.length; i += IMPORT_CHUNK) {
      const chunk = valid.slice(i, i + IMPORT_CHUNK).map((r) => [
        r.id,
        store.id,
        ...UPSERT_COLS.map((c) => r.value[c]),
        r.sort ?? 0,
      ]);
      await conn.query(
        `INSERT INTO products (id, store_id, ${UPSERT_COLS.join(", ")}, sort_order) VALUES ? ON DUPLICATE KEY UPDATE ${updateSql}`,
        [chunk]
      );
    }
    await conn.commit();
  } catch (e) {
    await conn.rollback();
    throw e;
  } finally {
    conn.release();
  }

  return { summary, imported: summary.valid, skipped: summary.invalid };
}

function adminInput(b, { requirePassword }) {
  const username = String(b.username ?? "").trim();
  const password = String(b.password ?? "");
  if (!/^[\w.@-]{3,100}$/.test(username)) fail(400, "Username: 3-100 chars, letters/numbers/._@- only");
  if (requirePassword && !password) fail(400, "Password is required");
  if (password && (password.length < 4 || password.length > 255)) fail(400, "Password must be 4-255 chars");
  return { username, password };
}

const BOOL_KEYS = ["isGpayEnable", "isPaytmEnable", "isPhonepeEnable"];

function settingsInput(b) {
  const out = {};
  if ("upiId" in b) {
    const upi = String(b.upiId ?? "").trim();
    if (upi && !/^[\w.-]{2,256}@[a-zA-Z][\w]{1,64}$/.test(upi)) fail(400, "Invalid UPI ID (example: name@okaxis)");
    out.upiId = upi;
  }
  for (const k of BOOL_KEYS) if (k in b) out[k] = b[k] === true || b[k] === "1" || b[k] === 1 ? "1" : "0";
  if ("paymentGateway" in b) {
    const gateway = String(b.paymentGateway);
    if (gateway !== "upi" && gateway !== "cashfree") fail(400, "Choose UPI or Cashfree");
    out.paymentGateway = gateway;
  }
  if ("cashfreeAppId" in b) {
    const appId = String(b.cashfreeAppId ?? "").trim();
    if (appId && !/^[A-Za-z0-9_-]{4,128}$/.test(appId)) fail(400, "Invalid Cashfree App ID");
    out.cashfreeAppId = appId;
  }
  if ("cashfreeSecret" in b) {
    const secret = String(b.cashfreeSecret ?? "").trim();
    if (secret && (secret.length < 8 || secret.length > 256 || /[\r\n]/.test(secret))) fail(400, "Invalid Cashfree secret");
    out.cashfreeSecret = secret;
  }
  if ("pixelId" in b) {
    out.pixelId = String(b.pixelId ?? "").trim();
  }
  return out;
}

async function loadSettings(storeId) {
  const [rows] = await db().query("SELECT setting_key, setting_value FROM settings WHERE store_id = ?", [storeId]);
  const s = { ...DEFAULT_SETTINGS, ...Object.fromEntries(rows.map((r) => [r.setting_key, r.setting_value ?? ""])) };
  const out = {
    upiId: s.upiId,
    ...Object.fromEntries(BOOL_KEYS.map((k) => [k, s[k] === "1"])),
    paymentGateway: s.paymentGateway === "cashfree" ? "cashfree" : "upi",
    cashfreeAppId: s.cashfreeAppId || "",
    cashfreeSecret: s.cashfreeSecret || "",
    pixelId: s.pixelId || "",
  };
  const keys = cashfreeKeys(out);
  out.cashfreeMode = keys ? cashfreeEnv(keys.appId, keys.secret) : "";
  return out;
}

// Cashfree keys are per store and come only from Admin > Settings.
function cashfreeKeys(s) {
  return s.cashfreeAppId && s.cashfreeSecret ? { appId: s.cashfreeAppId, secret: s.cashfreeSecret } : null;
}

function publicSettings(s) {
  const cashfree = s.paymentGateway === "cashfree";
  return {
    paymentGateway: cashfree ? "cashfree" : "upi",
    cashfreeReady: cashfree && Boolean(cashfreeKeys(s)),
    isGpayEnable: s.isGpayEnable,
    isPaytmEnable: s.isPaytmEnable,
    isPhonepeEnable: s.isPhonepeEnable,
    upiId: cashfree ? "" : s.upiId || "",
    pixelId: s.pixelId || "",
  };
}

// ---------- handlers ----------

async function requireAdmin(req, store) {
  const token = String(req.headers.authorization || "").replace(/^Bearer\s+/i, "");
  const t = readToken(token);
  if (!t || t.storeId !== store.id) fail(401, "Please login again");
  const [[admin]] = await db().query("SELECT id, store_id, username FROM admins WHERE id = ? AND store_id = ?", [t.adminId, store.id]);
  if (!admin) fail(401, "Please login again");
  return admin;
}

async function publicStore(store) {
  const [rows] = await db().query("SELECT * FROM products WHERE store_id = ? AND is_active = 1 ORDER BY sort_order, id", [store.id]);
  const s = await loadSettings(store.id);
  return {
    store: { domain: store.domain, name: store.name },
    products: rows.map(toProduct),
    settings: publicSettings(s),
  };
}

async function adminRoutes(req, method, parts, store) {
  const [resource, rawId] = parts;
  if (resource === "products" && rawId === "import" && method === "POST") {
    await requireAdmin(req, store);
    return importProducts(store, await readBody(req));
  }
  const id = rawId != null ? Number(rawId) : null;
  if (rawId != null && !Number.isInteger(id)) fail(404, "Not found");

  if (resource === "login" && method === "POST") {
    const b = await readBody(req);
    const [[admin]] = await db().query("SELECT id, store_id, username FROM admins WHERE store_id = ? AND username = ? AND BINARY password = BINARY ?", [
      store.id,
      String(b.username ?? "").trim(),
      String(b.password ?? ""),
    ]);
    if (!admin) fail(401, "Invalid username or password");
    return { token: createToken(admin), admin: { id: admin.id, username: admin.username }, store: { domain: store.domain } };
  }

  const me = await requireAdmin(req, store);

  if (resource === "me" && method === "GET") return { admin: { id: me.id, username: me.username }, store: { domain: store.domain } };

  if (resource === "products") {
    if (method === "GET" && id == null) {
      const [rows] = await db().query("SELECT * FROM products WHERE store_id = ? ORDER BY sort_order, id", [store.id]);
      return { products: rows.map(toProduct) };
    }
    if (method === "POST" && id == null) {
      const p = productInput(await readBody(req));
      const [[{ next }]] = await db().query("SELECT COALESCE(MIN(sort_order), 0) - 1 AS next FROM products WHERE store_id = ?", [store.id]);
      const [r] = await db().query("INSERT INTO products SET ?", [{ ...p, store_id: store.id, sort_order: next }]);
      const [[row]] = await db().query("SELECT * FROM products WHERE id = ?", [r.insertId]);
      return { product: toProduct(row) };
    }
    if (method === "PUT" && id != null) {
      const p = productInput(await readBody(req));
      const [r] = await db().query("UPDATE products SET ? WHERE id = ? AND store_id = ?", [p, id, store.id]);
      if (!r.affectedRows) fail(404, "Product not found");
      const [[row]] = await db().query("SELECT * FROM products WHERE id = ?", [id]);
      return { product: toProduct(row) };
    }
    if (method === "DELETE" && id != null) {
      const [r] = await db().query("DELETE FROM products WHERE id = ? AND store_id = ?", [id, store.id]);
      if (!r.affectedRows) fail(404, "Product not found");
      return { ok: true };
    }
  }

  if (resource === "admins") {
    if (method === "GET" && id == null) {
      const [rows] = await db().query("SELECT id, username, created_at AS createdAt FROM admins WHERE store_id = ? ORDER BY id", [store.id]);
      return { admins: rows, meId: me.id };
    }
    if (method === "POST" && id == null) {
      const a = adminInput(await readBody(req), { requirePassword: true });
      try {
        const [r] = await db().query("INSERT INTO admins (store_id, username, password) VALUES (?, ?, ?)", [store.id, a.username, a.password]);
        return { admin: { id: r.insertId, username: a.username } };
      } catch (e) {
        if (e.code === "ER_DUP_ENTRY") fail(409, "Username already exists");
        throw e;
      }
    }
    if (method === "PUT" && id != null) {
      const a = adminInput(await readBody(req), { requirePassword: false });
      const fields = a.password ? { username: a.username, password: a.password } : { username: a.username };
      try {
        const [r] = await db().query("UPDATE admins SET ? WHERE id = ? AND store_id = ?", [fields, id, store.id]);
        if (!r.affectedRows) fail(404, "Admin not found");
      } catch (e) {
        if (e.code === "ER_DUP_ENTRY") fail(409, "Username already exists");
        throw e;
      }
      return { admin: { id, username: a.username } };
    }
    if (method === "DELETE" && id != null) {
      if (id === me.id) fail(400, "You cannot delete your own account");
      const [[{ n }]] = await db().query("SELECT COUNT(*) AS n FROM admins WHERE store_id = ?", [store.id]);
      if (n <= 1) fail(400, "At least one admin is required");
      const [r] = await db().query("DELETE FROM admins WHERE id = ? AND store_id = ?", [id, store.id]);
      if (!r.affectedRows) fail(404, "Admin not found");
      return { ok: true };
    }
  }

  if (resource === "settings" && id == null) {
    if (method === "GET") return { settings: await loadSettings(store.id) };
    if (method === "PUT") {
      const patch = settingsInput(await readBody(req));
      const next = { ...(await loadSettings(store.id)), ...patch };
      if (next.paymentGateway === "cashfree" && !cashfreeKeys(next)) {
        fail(400, "Cashfree App ID and Secret Key are required");
      }
      const rows = Object.entries(patch).map(([k, v]) => [store.id, k, String(v)]);
      if (rows.length) {
        await db().query("INSERT INTO settings (store_id, setting_key, setting_value) VALUES ? ON DUPLICATE KEY UPDATE setting_value = VALUES(setting_value)", [rows]);
      }
      return { settings: await loadSettings(store.id) };
    }
  }

  // POST /admin/seed — delete all products for this store and re-seed from built-in catalog
  if (resource === "seed" && method === "POST" && id == null) {
    await db().query("DELETE FROM products WHERE store_id = ?", [store.id]);
    await seedStore(store.id);
    const [rows] = await db().query("SELECT * FROM products WHERE store_id = ? ORDER BY sort_order, id", [store.id]);
    return { seeded: rows.length, products: rows.map(toProduct) };
  }

  fail(404, "Not found");
}

const ORDER_ID = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function requestOrigin(req) {
  const host = String(req.headers["x-forwarded-host"] || req.headers.host || "").split(",")[0].trim();
  if (!host) return "";
  const forwarded = String(req.headers["x-forwarded-proto"] || "").split(",")[0].trim();
  const proto = forwarded || (/^(localhost|127\.0\.0\.1)(:\d+)?$/.test(host) ? "http" : "https");
  return `${proto}://${host}`;
}

async function cashfreeCreds(store) {
  const s = await loadSettings(store.id);
  if (s.paymentGateway !== "cashfree") fail(400, "Cashfree is turned off");
  return cashfreeKeys(s) || fail(400, "Cashfree App ID and Secret Key are not set");
}

async function startCashfree(req, store) {
  const { appId, secret } = await cashfreeCreds(store);
  const b = await readBody(req);
  const orderId = String(b.orderId ?? "");
  if (!ORDER_ID.test(orderId)) fail(400, "Invalid order");
  const amount = Math.round(Number(b.amount) * 100) / 100;
  if (!(amount >= 1 && amount <= 500000)) fail(400, "Amount must be between ₹1 and ₹5,00,000");
  const origin = requestOrigin(req);
  // Cashfree swaps {order_id} for the real id when it sends the customer back.
  const returnUrl = origin.startsWith("https://") ? `${origin}/payment/return/{order_id}` : "";
  try {
    return await createOrder({
      appId,
      secret,
      orderId,
      amount,
      customer: customerFor({ name: b.name, phone: b.phone }),
      returnUrl,
    });
  } catch (e) {
    fail(e.status || 502, e.message);
  }
}

async function cashfreeStatus(store, orderId) {
  if (!ORDER_ID.test(orderId)) fail(400, "Invalid order");
  const { appId, secret } = await cashfreeCreds(store);
  try {
    const order = await fetchOrder(appId, secret, orderId);
    if (!order) return { paid: false, status: "UNKNOWN" };
    return {
      paid: orderIsPaid(order),
      status: order.order_status || "",
      amount: Number(order.order_amount) || 0,
    };
  } catch (e) {
    fail(e.status || 502, e.message);
  }
}

export default async function handler(req, res) {
  try {
    const method = req.method.toUpperCase();
    const parts = routeOf(req);
    const store = await getStore(domainOf(req));

    if (parts[0] === "store" && parts.length === 1 && method === "GET") return send(res, 200, await publicStore(store));
    if (parts[0] === "pay" && parts[1] === "cashfree") {
      if (method === "POST" && parts.length === 2) return send(res, 200, await startCashfree(req, store));
      if (method === "GET" && parts.length === 3) return send(res, 200, await cashfreeStatus(store, parts[2]));
    }
    if (parts[0] === "admin") return send(res, 200, await adminRoutes(req, method, parts.slice(1), store));
    fail(404, "Not found");
  } catch (e) {
    if (e instanceof HttpError) return send(res, e.status, { error: e.message });
    console.error("[api]", e);
    send(res, 500, { error: "Server error. Please try again." });
  }
}
