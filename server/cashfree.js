// Cashfree Payment Links. Checkout runs on payments.cashfree.com,
// so the store domain does not need to be whitelisted — only the API key and secret.

const HOSTS = {
  production: "https://api.cashfree.com",
  sandbox: "https://sandbox.cashfree.com",
};

const API_VERSION = "2025-01-01";

function hostFor(env) {
  return HOSTS[env] || HOSTS.production;
}

async function cashfree(env, appId, secret, path, { method = "GET", body } = {}) {
  const res = await fetch(`${hostFor(env)}${path}`, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-api-version": API_VERSION,
      "x-client-id": appId,
      "x-client-secret": secret,
    },
    body: body ? JSON.stringify(body) : undefined,
    signal: AbortSignal.timeout(20000),
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, data };
}

function cashfreeMessage(data) {
  return data?.message || data?.error || "Cashfree could not start the payment";
}

function returnUrlRejected(data) {
  const text = `${data?.message || ""} ${data?.code || ""} ${data?.type || ""}`.toLowerCase();
  return /return.?url|whitelist|domain/.test(text);
}

export function linkIsPaid(link) {
  if (!link) return false;
  if (String(link.link_status).toUpperCase() === "PAID") return true;
  const due = Number(link.link_amount);
  const got = Number(link.link_amount_paid);
  return due > 0 && got >= due;
}

export async function fetchPaymentLink(env, appId, secret, linkId) {
  const { ok, status, data } = await cashfree(env, appId, secret, `/pg/links/${encodeURIComponent(linkId)}`);
  if (status === 404) return null;
  if (!ok) {
    const err = new Error(cashfreeMessage(data));
    err.status = status === 401 || status === 403 ? 400 : 502;
    throw err;
  }
  return data;
}

// Creates a hosted payment link. If Cashfree refuses return_url (domain rules),
// the link is created again without it — payment still happens on Cashfree's page.
export async function createPaymentLink({ env, appId, secret, linkId, amount, name, phone, returnUrl }) {
  const payload = {
    link_id: linkId,
    link_amount: amount,
    link_currency: "INR",
    link_purpose: "Order payment",
    link_partial_payments: false,
    link_auto_reminders: false,
    customer_details: { customer_phone: phone, customer_name: name },
    link_notify: { send_sms: false, send_email: false },
    ...(returnUrl ? { link_meta: { return_url: returnUrl } } : {}),
  };

  let result = await cashfree(env, appId, secret, "/pg/links", { method: "POST", body: payload });
  let returns = Boolean(returnUrl);

  if (!result.ok && returnUrl && returnUrlRejected(result.data)) {
    const { link_meta, ...withoutReturn } = payload;
    void link_meta;
    result = await cashfree(env, appId, secret, "/pg/links", { method: "POST", body: withoutReturn });
    returns = false;
  }

  if (result.status === 409) {
    const existing = await fetchPaymentLink(env, appId, secret, linkId);
    if (existing?.link_url) {
      return {
        url: existing.link_url,
        returns: Boolean(existing.link_meta?.return_url),
        paid: linkIsPaid(existing),
        amount: Number(existing.link_amount),
      };
    }
  }

  if (!result.ok || !result.data?.link_url) {
    const err = new Error(cashfreeMessage(result.data));
    err.status = result.status === 401 || result.status === 403 ? 400 : 502;
    throw err;
  }

  return { url: result.data.link_url, returns, paid: false, amount };
}
