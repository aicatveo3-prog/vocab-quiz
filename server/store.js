// User data store with two interchangeable backends.
//
//  • Postgres  — used automatically when DATABASE_URL is set (e.g. Neon /
//    Supabase / Railway Postgres). Data survives server restarts, so it is the
//    right choice for production hosting on ephemeral disks.
//  • JSON file — the zero-dependency fallback used for local development when no
//    DATABASE_URL is configured. One JSON file holds a map of
//    googleSub -> { profile, data, updatedAt }.
//
// Both backends expose the same three functions (upsertProfile / getData /
// setData) so the rest of the app never needs to know which one is active.
import { readFile, writeFile, rename, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const DATABASE_URL = process.env.DATABASE_URL || "";

// Normalise a stored learning payload into a predictable shape.
function normalizeData(data) {
  data = data || {};
  return {
    saved: data.saved && typeof data.saved === "object" ? data.saved : {},
    completed: data.completed && typeof data.completed === "object" ? data.completed : {},
    best: Number.isFinite(data.best) ? data.best : 0,
  };
}

// ---------------------------------------------------------------------------
// Postgres backend
// ---------------------------------------------------------------------------
function createPgBackend(connectionString) {
  let poolPromise = null;

  // Lazily create the connection pool + ensure the table exists. Doing this on
  // first use (instead of import time) keeps startup resilient and avoids a hard
  // dependency on `pg` when the file backend is used.
  async function getPool() {
    if (poolPromise) return poolPromise;
    poolPromise = (async () => {
      const { default: pg } = await import("pg");
      const pool = new pg.Pool({
        connectionString,
        // Managed Postgres (Neon/Supabase/Railway) requires TLS. We don't pin a
        // CA here, which is standard for these providers.
        ssl: { rejectUnauthorized: false },
        max: 5,
      });
      await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
          sub        TEXT PRIMARY KEY,
          profile    JSONB NOT NULL DEFAULT '{}'::jsonb,
          data       JSONB,
          updated_at BIGINT NOT NULL DEFAULT 0
        )
      `);
      return pool;
    })().catch((e) => {
      // Reset so a later call can retry instead of caching the failure forever.
      poolPromise = null;
      throw e;
    });
    return poolPromise;
  }

  return {
    async upsertProfile(sub, profile) {
      const pool = await getPool();
      const { rows } = await pool.query(
        `INSERT INTO users (sub, profile)
         VALUES ($1, $2::jsonb)
         ON CONFLICT (sub) DO UPDATE
           SET profile = users.profile || EXCLUDED.profile
         RETURNING profile, data, updated_at`,
        [sub, JSON.stringify(profile || {})]
      );
      const row = rows[0];
      return { profile: row.profile, data: row.data, updatedAt: Number(row.updated_at) || 0 };
    },

    async getData(sub) {
      const pool = await getPool();
      const { rows } = await pool.query(
        `SELECT data, updated_at FROM users WHERE sub = $1`,
        [sub]
      );
      const row = rows[0];
      if (!row || row.data == null) return null;
      return { ...normalizeData(row.data), updatedAt: Number(row.updated_at) || 0 };
    },

    async setData(sub, data) {
      const pool = await getPool();
      const clean = normalizeData(data);
      const updatedAt = Date.now();
      await pool.query(
        `INSERT INTO users (sub, data, updated_at)
         VALUES ($1, $2::jsonb, $3)
         ON CONFLICT (sub) DO UPDATE
           SET data = EXCLUDED.data, updated_at = EXCLUDED.updated_at`,
        [sub, JSON.stringify(clean), updatedAt]
      );
      return { ...clean, updatedAt };
    },
  };
}

// ---------------------------------------------------------------------------
// JSON file backend (local-dev fallback)
// ---------------------------------------------------------------------------
function createFileBackend() {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const DATA_DIR = process.env.VQ_DATA_DIR || join(__dirname, "..", ".data");
  const DB_FILE = join(DATA_DIR, "users.json");

  let cache = null;
  let writeChain = Promise.resolve();

  async function load() {
    if (cache) return cache;
    if (!existsSync(DATA_DIR)) await mkdir(DATA_DIR, { recursive: true });
    if (existsSync(DB_FILE)) {
      try {
        cache = JSON.parse(await readFile(DB_FILE, "utf8")) || {};
      } catch {
        cache = {};
      }
    } else {
      cache = {};
    }
    return cache;
  }

  function persist() {
    // Serialize writes; each write snapshots the current cache.
    writeChain = writeChain.then(async () => {
      const tmp = DB_FILE + ".tmp";
      await writeFile(tmp, JSON.stringify(cache, null, 2), "utf8");
      await rename(tmp, DB_FILE);
    }).catch((e) => console.error("[store] write failed", e));
    return writeChain;
  }

  return {
    async upsertProfile(sub, profile) {
      const db = await load();
      const row = db[sub] || (db[sub] = { profile: {}, data: null, updatedAt: 0 });
      row.profile = { ...row.profile, ...profile };
      await persist();
      return row;
    },

    async getData(sub) {
      const db = await load();
      const row = db[sub];
      if (!row || row.data == null) return null;
      return { ...normalizeData(row.data), updatedAt: row.updatedAt || 0 };
    },

    async setData(sub, data) {
      const db = await load();
      const row = db[sub] || (db[sub] = { profile: {}, data: null, updatedAt: 0 });
      row.data = normalizeData(data);
      row.updatedAt = Date.now();
      await persist();
      return { ...row.data, updatedAt: row.updatedAt };
    },
  };
}

// ---------------------------------------------------------------------------
// Pick a backend once at startup and re-export its functions.
// ---------------------------------------------------------------------------
const backend = DATABASE_URL ? createPgBackend(DATABASE_URL) : createFileBackend();
console.log(`  데이터 저장소: ${DATABASE_URL ? "Postgres (영구 보관)" : "JSON 파일 (.data/users.json)"}`);

/** Upsert the user's Google profile (called on every successful login). */
export const upsertProfile = (sub, profile) => backend.upsertProfile(sub, profile);

/** The synced learning payload: { saved, completed, best, updatedAt } or null. */
export const getData = (sub) => backend.getData(sub);

/** Replace the user's learning payload; returns the stored payload + updatedAt. */
export const setData = (sub, data) => backend.setData(sub, data);
