import { STORE } from "../data/store";
import { findProduct } from "./shop";

export { findProduct };

export const money = (n) => STORE.currency + Number(n).toLocaleString("en-IN");
export const moneyExact = (n) =>
  STORE.currency + Number(n).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// Buy 2 Get 1 Free: for every 3 units in the cart, the cheapest unit is free.
export function cartSummary(cart) {
  const lines = cart.filter((i) => findProduct(i.id));
  const units = lines.flatMap((i) => Array(i.qty).fill(findProduct(i.id)));

  const freeCount = Math.floor(units.length / 3);
  const freeUnits = [...units].sort((a, b) => a.price - b.price).slice(0, freeCount);
  const freeById = {};
  freeUnits.forEach((p) => (freeById[p.id] = (freeById[p.id] || 0) + 1));

  const mrpTotal = units.reduce((s, p) => s + p.mrp, 0);
  const subtotal = units.reduce((s, p) => s + p.price, 0);
  const offerDiscount = freeUnits.reduce((s, p) => s + p.price, 0);

  return {
    lines,
    units: units.length,
    freeCount,
    freeById,
    mrpTotal,
    subtotal,
    offerDiscount,
    total: subtotal - offerDiscount,
  };
}
