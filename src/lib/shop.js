import { FEED_ORDER, PRODUCTS as BUILT_IN } from "../data/store";

// Products + public settings for the current domain, loaded once before the app renders.
let products = [];
let byId = new Map();
let settings = {
  paymentGateway: "upi",
  cashfreeReady: false,
  isGpayEnable: true,
  isPaytmEnable: true,
  isPhonepeEnable: true,
  upiId: "",
};

function setProducts(list) {
  products = list;
  byId = new Map(list.map((p) => [p.id, p]));
}

function builtInCatalog() {
  const order = new Map(FEED_ORDER.map((id, i) => [id, i]));
  return [...BUILT_IN].sort((a, b) => (order.get(a.id) ?? 1e9) - (order.get(b.id) ?? 1e9));
}

export async function loadShop() {
  try {
    const res = await fetch("/api/store", { headers: { Accept: "application/json" } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    setProducts(data.products);
    settings = { ...settings, ...data.settings };
  } catch (e) {
    console.warn("Store API unavailable, using built-in catalog.", e);
    setProducts(builtInCatalog());
  }
}

export const getProducts = () => products;
export const findProduct = (id) => byId.get(Number(id));
export const getSettings = () => settings;
