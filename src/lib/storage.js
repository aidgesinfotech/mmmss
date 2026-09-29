export const KEYS = {
  cart: "kishoo_cart",
  orders: "kishoo_orders",
  address: "kishoo_address",
  profile: "kishoo_profile",
  wishlist: "kishoo_wishlist",
};

export function readJSON(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

export function writeJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent("kishoo-storage", { detail: key }));
}
