import mysql from "mysql2/promise";
import { PRODUCTS } from "../src/data/store.js";

let pool;

export function db() {
  if (!pool) {
    const missing = ["DB_HOST", "DB_USER", "DB_NAME"].filter((k) => !process.env[k]);
    if (missing.length) throw new Error(`Missing env: ${missing.join(", ")}`);
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT || 3306),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      // Serverless: every warm instance keeps its own pool, so keep it tiny.
      connectionLimit: Number(process.env.DB_POOL_SIZE || 5),
      waitForConnections: true,
      enableKeepAlive: true,
      charset: "utf8mb4",
      connectTimeout: 15000,
    });
    pool.on("error", (err) => {
      console.error("[db pool error]", err);
      if (err.code === "PROTOCOL_CONNECTION_LOST" || err.code === "ECONNRESET" || err.fatal) {
        pool = null;
      }
    });
  }
  return pool;
}

const SCHEMA = [
  `CREATE TABLE IF NOT EXISTS stores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    domain VARCHAR(191) NOT NULL UNIQUE,
    name VARCHAR(120) NOT NULL DEFAULT '',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4`,
  `CREATE TABLE IF NOT EXISTS admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    store_id INT NOT NULL,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY uniq_store_username (store_id, username),
    CONSTRAINT fk_admins_store FOREIGN KEY (store_id) REFERENCES stores(id) ON DELETE CASCADE
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4`,
  `CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    store_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    mrp INT NOT NULL,
    category VARCHAR(50) NOT NULL,
    tag VARCHAR(50) NOT NULL DEFAULT '',
    img VARCHAR(500) NOT NULL,
    images TEXT,
    description TEXT,
    rating DECIMAL(2,1) NOT NULL DEFAULT 4.0,
    reviews INT NOT NULL DEFAULT 0,
    sort_order INT NOT NULL DEFAULT 0,
    is_active TINYINT(1) NOT NULL DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    KEY idx_store_sort (store_id, sort_order),
    CONSTRAINT fk_products_store FOREIGN KEY (store_id) REFERENCES stores(id) ON DELETE CASCADE
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4`,
  `CREATE TABLE IF NOT EXISTS settings (
    store_id INT NOT NULL,
    setting_key VARCHAR(64) NOT NULL,
    setting_value TEXT,
    PRIMARY KEY (store_id, setting_key),
    CONSTRAINT fk_settings_store FOREIGN KEY (store_id) REFERENCES stores(id) ON DELETE CASCADE
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4`,
];

export const DEFAULT_SETTINGS = {
  upiId: "",
  isGpayEnable: "1",
  isPaytmEnable: "1",
  isPhonepeEnable: "1",
  paymentGateway: "upi",
  cashfreeAppId: "",
  cashfreeSecret: "",
  pixelId: "",
};

export const DEFAULT_ADMIN = { username: "admin", password: "admin" };

let schemaReady;
export function ensureSchema() {
  schemaReady ??= (async () => {
    for (const sql of SCHEMA) await db().query(sql);
  })().catch((e) => {
    schemaReady = undefined;
    throw e;
  });
  return schemaReady;
}

const storeCache = new Map();

// Returns the store row for a domain, creating + seeding it on first visit.
export async function getStore(domain) {
  const normDomain = String(domain || "localhost").toLowerCase().trim().replace(/^www\./, "").replace(/:\d+$/, "");
  if (storeCache.has(normDomain)) return storeCache.get(normDomain);
  await ensureSchema();

  await db().query("INSERT IGNORE INTO stores (domain, name) VALUES (?, ?)", [normDomain, normDomain]);
  const [[store]] = await db().query("SELECT id, domain, name FROM stores WHERE domain = ?", [normDomain]);
  
  if (store) {
    await seedStore(store.id);
    storeCache.set(normDomain, store);
    return store;
  }
  
  throw new Error(`Could not load or create store for domain: ${normDomain}`);
}

async function ensureDefaults(storeId) {
  const rows = Object.entries(DEFAULT_SETTINGS).map(([k, v]) => [storeId, k, String(v)]);
  if (rows.length) {
    await db().query("INSERT IGNORE INTO settings (store_id, setting_key, setting_value) VALUES ?", [rows]);
  }
  const [[{ n }]] = await db().query("SELECT COUNT(*) AS n FROM admins WHERE store_id = ?", [storeId]);
  if (!n) await db().query("INSERT INTO admins (store_id, username, password) VALUES (?, ?, ?)", [storeId, DEFAULT_ADMIN.username, DEFAULT_ADMIN.password]);
}

async function seedStore(storeId) {
  await ensureDefaults(storeId);

  const [[{ count }]] = await db().query("SELECT COUNT(*) AS count FROM products WHERE store_id = ?", [storeId]);
  if (Number(count) === 0 && Array.isArray(PRODUCTS) && PRODUCTS.length) {
    const values = PRODUCTS.map((p, i) => [
      storeId,
      p.name,
      p.price,
      p.mrp,
      p.category,
      p.tag || "",
      p.img,
      JSON.stringify(p.images || [p.img]),
      p.desc || "",
      p.rating || 4.0,
      p.reviews || 0,
      i,
      1,
    ]);
    if (values.length) {
      await db().query(
        "INSERT INTO products (store_id, name, price, mrp, category, tag, img, images, description, rating, reviews, sort_order, is_active) VALUES ?",
        [values]
      );
    }
  }
}

export { seedStore };
