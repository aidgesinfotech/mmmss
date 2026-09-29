import { CATEGORY_MENU } from "../data/categoryMenu";
import { CATEGORIES } from "../data/store";
import { getProducts } from "./shop";

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export function productsFor(item) {
  const words = item.keywords?.length ? new RegExp(`\\b(${item.keywords.map(escape).join("|")})`, "i") : null;
  return getProducts().filter((p) => (!item.category || p.category === item.category) && (!words || words.test(p.name)));
}

const categoryNames = new Map(CATEGORIES.map((c) => [c.id, c.name]));
const categoryOrder = new Map(CATEGORIES.map((c, i) => [c.id, i]));

const categoryLabel = (id) =>
  categoryNames.get(id) ?? String(id).replace(/[-_]+/g, " ").replace(/\b\w/g, (ch) => ch.toUpperCase());

const categoryItem = (id) => ({ id, name: categoryLabel(id), category: id });

const itemMap = new Map();
for (const c of CATEGORIES) itemMap.set(c.id, categoryItem(c.id));
for (const g of CATEGORY_MENU) for (const s of g.sections) for (const it of s.items) itemMap.set(it.id, it);

export const findMenuItem = (id) =>
  itemMap.get(id) ?? (getProducts().some((p) => p.category === id) ? categoryItem(id) : undefined);

// Every category that currently has at least one product, in store.js order.
export function allCategories() {
  const ids = [...new Set(getProducts().map((p) => p.category).filter(Boolean))];
  ids.sort((a, b) => (categoryOrder.get(a) ?? 1e9) - (categoryOrder.get(b) ?? 1e9));
  return ids.map(categoryItem);
}

export const itemImage = (item) => productsFor(item)[0]?.img || item.img || "/logo.png";

export const itemLink = (item) => item.to || `/category/${item.id}`;

export const isImage = (icon) => /^(https?:|\/)/.test(icon);

export function groupIcon(g) {
  for (const s of g.sections) for (const it of s.items) {
    const img = productsFor(it)[0]?.img;
    if (img) return img;
  }
  return g.icon || "/logo.png";
}
