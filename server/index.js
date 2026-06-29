// 해커스 영어 단어 퀴즈 — backend.
// Serves the static front-end and provides real Google sign-in + per-account
// cross-device sync. Run with `npm start`. Configure via environment variables
// (see .env.example / README_SETUP.md).
import express from "express";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import crypto from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { OAuth2Client } from "google-auth-library";
import { upsertProfile, getData, setData } from "./store.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, "..", "public");

const PORT = process.env.PORT || 3000;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "";
// A stable secret keeps sessions valid across restarts; a random fallback keeps
// dev secure (logs everyone out on restart, which is fine for local testing).
const SESSION_SECRET = process.env.SESSION_SECRET || crypto.randomBytes(32).toString("hex");
const COOKIE = "vq_session";
const SESSION_DAYS = 30;

const oauth = new OAuth2Client(GOOGLE_CLIENT_ID);
const app = express();
// Behind a hosting proxy (Render/Railway/etc.) so req.secure reflects HTTPS,
// which lets the secure session cookie be issued correctly in production.
app.set("trust proxy", 1);
app.use(express.json({ limit: "256kb" }));
app.use(cookieParser());

// --- auth helpers ----------------------------------------------------------
function issueSession(res, profile) {
  const token = jwt.sign(profile, SESSION_SECRET, { expiresIn: `${SESSION_DAYS}d` });
  res.cookie(COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: SESSION_DAYS * 24 * 60 * 60 * 1000,
  });
}
function currentUser(req) {
  const token = req.cookies?.[COOKIE];
  if (!token) return null;
  try {
    return jwt.verify(token, SESSION_SECRET);
  } catch {
    return null;
  }
}
function requireUser(req, res, next) {
  const u = currentUser(req);
  if (!u) return res.status(401).json({ error: "로그인이 필요합니다" });
  req.user = u;
  next();
}

// --- config / auth routes --------------------------------------------------
// The front-end pulls the client ID from here so it's never hard-coded.
app.get("/api/config", (req, res) => {
  res.json({ googleClientId: GOOGLE_CLIENT_ID, loginEnabled: !!GOOGLE_CLIENT_ID });
});

app.get("/api/me", (req, res) => {
  res.json({ user: currentUser(req) });
});

// Exchange a Google ID token (from Google Identity Services on the client) for
// our own session cookie. We verify the token's signature + audience server-side.
app.post("/api/auth/google", async (req, res) => {
  if (!GOOGLE_CLIENT_ID) {
    return res.status(503).json({ error: "서버에 GOOGLE_CLIENT_ID가 설정되지 않았습니다" });
  }
  const credential = req.body?.credential;
  if (!credential) return res.status(400).json({ error: "credential 누락" });
  try {
    const ticket = await oauth.verifyIdToken({ idToken: credential, audience: GOOGLE_CLIENT_ID });
    const p = ticket.getPayload();
    const profile = {
      sub: p.sub,
      name: p.name || p.email || "사용자",
      email: p.email || "",
      picture: p.picture || "",
    };
    await upsertProfile(profile.sub, { name: profile.name, email: profile.email, picture: profile.picture });
    issueSession(res, profile);
    res.json({ user: profile });
  } catch (e) {
    console.error("[auth] token verification failed:", e.message);
    res.status(401).json({ error: "구글 인증에 실패했습니다" });
  }
});

app.post("/api/logout", (req, res) => {
  res.clearCookie(COOKIE);
  res.json({ ok: true });
});

// --- sync routes (per Google account) --------------------------------------
app.get("/api/data", requireUser, async (req, res) => {
  const data = await getData(req.user.sub);
  res.json({ data });
});

app.put("/api/data", requireUser, async (req, res) => {
  const body = req.body || {};
  const saved = await setData(req.user.sub, {
    saved: body.saved,
    completed: body.completed,
    best: body.best,
  });
  res.json({ data: saved });
});

// --- static front-end ------------------------------------------------------
app.use(express.static(PUBLIC_DIR, { extensions: ["html"] }));
app.get("*", (req, res) => res.sendFile(join(PUBLIC_DIR, "index.html")));

app.listen(PORT, () => {
  console.log(`\n  단어 퀴즈 서버 실행 중 → http://localhost:${PORT}`);
  console.log(`  구글 로그인: ${GOOGLE_CLIENT_ID ? "사용 가능" : "비활성 (GOOGLE_CLIENT_ID 미설정)"}\n`);
});
