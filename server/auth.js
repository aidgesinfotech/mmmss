import crypto from "node:crypto";

const TTL_MS = 7 * 24 * 60 * 60 * 1000;
const secret = () => process.env.AUTH_SECRET || process.env.JWT_SECRET || `kishoo:${process.env.DB_PASSWORD || ""}:${process.env.DB_NAME || ""}`;
const sign = (data) => crypto.createHmac("sha256", secret()).update(data).digest("base64url");

export function createToken(admin) {
  const body = Buffer.from(JSON.stringify({ a: admin.id, s: admin.store_id, e: Date.now() + TTL_MS })).toString("base64url");
  return `${body}.${sign(body)}`;
}

export function readToken(token) {
  const [body, sig] = String(token || "").split(".");
  if (!body || !sig) return null;
  const expected = sign(body);
  if (sig.length !== expected.length || !crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null;
  try {
    const data = JSON.parse(Buffer.from(body, "base64url").toString());
    return data.e > Date.now() ? { adminId: data.a, storeId: data.s } : null;
  } catch {
    return null;
  }
}
