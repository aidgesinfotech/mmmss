// Cashfree PG Orders API — same flow as cashfree-code/create_order.php + return.php.
// Version 2022-01-01 returns a hosted `payment_link`, so checkout needs only the
// App ID and Secret Key: no JS SDK, no payment session, no domain whitelist.

const HOSTS = {
  production: "https://api.cashfree.com/pg",
  sandbox: "https://sandbox.cashfree.com/pg",
};

const API_VERSION = "2022-01-01";

// Test credentials look like "TEST…" (App ID) or "cfsk_ma_test_…" (secret); everything else is live.
export function cashfreeEnv(appId, secret) {
  const id = String(appId || "");
  const key = String(secret || "").toLowerCase();
  return /^test/i.test(id) || key.includes("_test_") ? "sandbox" : "production";
}

async function cashfree(appId, secret, path, { method = "GET", body } = {}) {
  const res = await fetch(`${HOSTS[cashfreeEnv(appId, secret)]}${path}`, {
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

function cashfreeError(status, data) {
  const err = new Error(data?.message || data?.error || "Cashfree could not start the payment");
  err.status = status === 401 || status === 403 ? 400 : 502;
  return err;
}

function returnUrlRejected(data) {
  const text = `${data?.message || ""} ${data?.code || ""} ${data?.type || ""}`.toLowerCase();
  return /return.?url|whitelist|domain/.test(text);
}

// ---------- random customer (port of generateRandomIndianCustomer) ----------

const NAMES = [
  "Aarav", "Aditya", "Akshay", "Aman", "Amit", "Anand", "Aniket", "Ankit", "Arjun", "Arnav", "Aryan", "Ashish",
  "Ayush", "Bharat", "Chetan", "Deepak", "Dhruv", "Dinesh", "Gaurav", "Harsh", "Hemant", "Ishan", "Jatin", "Karan",
  "Kartik", "Krishna", "Kunal", "Manoj", "Mayank", "Mohan", "Naveen", "Nikhil", "Nitin", "Pankaj", "Parth", "Pranav",
  "Prashant", "Rahul", "Rajesh", "Rakesh", "Ravi", "Rohit", "Sachin", "Sahil", "Sandeep", "Sanjay", "Saurabh",
  "Shivam", "Siddharth", "Sumit", "Sunil", "Suraj", "Tushar", "Varun", "Vikram", "Vinay", "Vishal", "Vivek", "Yash",
  "Aditi", "Ananya", "Anjali", "Divya", "Diya", "Isha", "Kavya", "Khushi", "Kriti", "Meera", "Megha", "Neha",
  "Nidhi", "Pooja", "Priya", "Priyanka", "Riya", "Sakshi", "Sanjana", "Shreya", "Sneha", "Tanvi", "Vaishnavi",
];

const EMAIL_DOMAINS = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "rediffmail.com", "yahoo.co.in", "icloud.com"];

const pick = (list) => list[Math.floor(Math.random() * list.length)];
const rand = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

function randomEmail(name) {
  const base = name.toLowerCase().replace(/[^a-z]/g, "") || "customer";
  const patterns = [
    () => `${base}${rand(100, 999)}`,
    () => `${base.slice(0, 3)}${rand(10, 99)}`,
    () => `${base}${pick(["", ".", "_"])}${rand(1000, 9999)}`,
    () => `${base}.${new Date().getFullYear()}`,
  ];
  return `${pick(patterns)()}@${pick(EMAIL_DOMAINS)}`;
}

// Real name/phone from checkout are used when valid; anything missing is filled in randomly.
export function customerFor({ name, phone } = {}) {
  const cleanName = String(name ?? "").replace(/[^\p{L}\s.]/gu, "").trim().slice(0, 100);
  const cleanPhone = String(phone ?? "").replace(/\D/g, "").slice(-10);
  const customerName = cleanName || pick(NAMES);
  const customerPhone = /^[6-9]\d{9}$/.test(cleanPhone) ? cleanPhone : `${pick([6, 7, 8, 9])}${String(rand(0, 999999999)).padStart(9, "0")}`;
  return {
    customer_id: customerPhone,
    customer_name: customerName,
    customer_email: randomEmail(customerName),
    customer_phone: customerPhone,
  };
}

// ---------- orders ----------

export function orderIsPaid(order) {
  return String(order?.order_status || "").toUpperCase() === "PAID";
}

export async function fetchOrder(appId, secret, orderId) {
  const { ok, status, data } = await cashfree(appId, secret, `/orders/${encodeURIComponent(orderId)}`);
  if (status === 404) return null;
  if (!ok) throw cashfreeError(status, data);
  return data;
}

// Creates the order and returns Cashfree's hosted payment page. If Cashfree refuses
// return_url (domain rules), the order is created without it and the store polls instead.
export async function createOrder({ appId, secret, orderId, amount, customer, returnUrl }) {
  const payload = {
    order_id: orderId,
    order_amount: amount,
    order_currency: "INR",
    customer_details: customer,
    ...(returnUrl ? { order_meta: { return_url: returnUrl } } : {}),
  };

  let result = await cashfree(appId, secret, "/orders", { method: "POST", body: payload });
  let returns = Boolean(returnUrl);

  if (!result.ok && returnUrl && returnUrlRejected(result.data)) {
    const { order_meta, ...withoutReturn } = payload;
    void order_meta;
    result = await cashfree(appId, secret, "/orders", { method: "POST", body: withoutReturn });
    returns = false;
  }

  if (result.status === 409) {
    const existing = await fetchOrder(appId, secret, orderId);
    if (existing?.payment_link) {
      return {
        url: existing.payment_link,
        returns: Boolean(existing.order_meta?.return_url),
        paid: orderIsPaid(existing),
        amount: Number(existing.order_amount),
      };
    }
  }

  if (!result.ok || !result.data?.payment_link) throw cashfreeError(result.status, result.data);

  return { url: result.data.payment_link, returns, paid: orderIsPaid(result.data), amount };
}
