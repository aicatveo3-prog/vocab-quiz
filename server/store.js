// Tiny file-backed JSON store — zero native dependencies so it runs anywhere.
// One JSON file holds a map of  googleSub -> { profile, data, updatedAt }.
// Writes are atomic (write temp + rename) and serialized through a promise chain
// so concurrent requests never corrupt the file. For heavier production load you
// would swap this module for Postgres/SQLite — the call sites only use get/set.
import { readFile, writeFile, rename, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

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

/** Upsert the user's Google profile (called on every successful login). */
export async function upsertProfile(sub, profile) {
  const db = await load();
  const row = db[sub] || (db[sub] = { profile: {}, data: null, updatedAt: 0 });
  row.profile = { ...row.profile, ...profile };
  await persist();
  return row;
}

/** The synced learning payload: { saved, completed, best, updatedAt } or null. */
export async function getData(sub) {
  const db = await load();
  const row = db[sub];
  if (!row || row.data == null) return null;
  return { ...row.data, updatedAt: row.updatedAt || 0 };
}

/** Replace the user's learning payload. `clientUpdatedAt` is echoed back so the
 *  client can detect whether a newer write landed elsewhere. */
export async function setData(sub, data) {
  const db = await load();
  const row = db[sub] || (db[sub] = { profile: {}, data: null, updatedAt: 0 });
  row.data = {
    saved: data.saved && typeof data.saved === "object" ? data.saved : {},
    completed: data.completed && typeof data.completed === "object" ? data.completed : {},
    best: Number.isFinite(data.best) ? data.best : 0,
  };
  row.updatedAt = Date.now();
  await persist();
  return { ...row.data, updatedAt: row.updatedAt };
}
