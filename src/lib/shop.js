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
  pixelId: "",
};

function injectPixel(pixelId) {
  if (!pixelId || window._pixelInjected) return;
  const cleanId = String(pixelId).trim();
  if (!cleanId) return;
  window._pixelInjected = true;

  if (/^\d+$/.test(cleanId)) {
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', cleanId);
    window.fbq('track', 'PageView');
  } else {
    try {
      const container = document.createElement("div");
      container.innerHTML = cleanId;
      Array.from(container.childNodes).forEach((node) => {
        if (node.nodeName === "SCRIPT") {
          const script = document.createElement("script");
          if (node.src) script.src = node.src;
          else script.textContent = node.textContent;
          document.head.appendChild(script);
        } else if (node.nodeType === 1) {
          document.head.appendChild(node.cloneNode(true));
        }
      });
    } catch (e) {
      console.error("[pixel error]", e);
    }
  }
}

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
    if (settings.pixelId) {
      injectPixel(settings.pixelId);
    }
  } catch (e) {
    console.warn("Store API unavailable, using built-in catalog.", e);
    setProducts(builtInCatalog());
  }
}

export const getProducts = () => products;
export const findProduct = (id) => byId.get(Number(id));
export const getSettings = () => settings;
