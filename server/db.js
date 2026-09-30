import mysql from "mysql2/promise";

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
      connectionLimit: Number(process.env.DB_POOL_SIZE || 3),
      waitForConnections: true,
      enableKeepAlive: true,
      charset: "utf8mb4",
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
  if (storeCache.has(domain)) return storeCache.get(domain);
  await ensureSchema();

  const [res] = await db().query("INSERT IGNORE INTO stores (domain, name) VALUES (?, ?)", [domain, domain]);
  const [[store]] = await db().query("SELECT id, domain, name FROM stores WHERE domain = ?", [domain]);
  if (res.affectedRows === 1) await seedStore(store.id);
  else await ensureDefaults(store.id);

  storeCache.set(domain, store);
  return store;
}

async function ensureDefaults(storeId) {
  await db().query("INSERT IGNORE INTO settings (store_id, setting_key, setting_value) VALUES ?", [
    Object.entries(DEFAULT_SETTINGS).map(([k, v]) => [storeId, k, v]),
  ]);
  const [[{ n }]] = await db().query("SELECT COUNT(*) AS n FROM admins WHERE store_id = ?", [storeId]);
  if (!n) await db().query("INSERT INTO admins (store_id, username, password) VALUES (?, ?, ?)", [storeId, DEFAULT_ADMIN.username, DEFAULT_ADMIN.password]);
}

async function seedStore(storeId) {
  await ensureDefaults(storeId);
}

export { seedStore };
