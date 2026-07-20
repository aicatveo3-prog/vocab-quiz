// App shell — Day 1 / Day 2 / ★저장 support + persistent page progress
(function () {
  var React = window.React, ReactDOM = window.ReactDOM;
  function h() { return React.createElement.apply(null, arguments); }

  var api = {
    config: function () { return fetch("/api/config").then(function (r) { return r.json(); }); },
    me: function () { return fetch("/api/me", { credentials: "same-origin" }).then(function (r) { return r.json(); }); },
    login: function (credential) {
      return fetch("/api/auth/google", {
        method: "POST", credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ credential: credential }),
      }).then(function (r) { return r.json().then(function (j) { return { ok: r.ok, body: j }; }); });
    },
    logout: function () { return fetch("/api/logout", { method: "POST", credentials: "same-origin" }); },
    getData: function () {
      return fetch("/api/data", { credentials: "same-origin" })
        .then(function (r) { return r.ok ? r.json() : { data: null }; })
        .then(function (j) { return j.data; })["catch"](function () { return null; });
    },
    putData: function (payload) {
      return fetch("/api/data", {
        method: "PUT", credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })["catch"](function () {});
    },
  };

  function readJSON(k, fb) { try { return JSON.parse(localStorage.getItem(k) || "") || fb; } catch (e) { return fb; } }

  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        stage: "day1", page: 0, mode: "exam", round: 0,
        streak: 0, best: 0, completed: {}, saved: {},
        // pageProgress: { "day1-0-exam": {ans: {...}}, "day2-3-match": {matched: [0,2]} }
        pageProgress: {},
        account: null, googleClientId: "", loginEnabled: false,
        showLoginInfo: false, ready: false, syncing: false,
        dragging: false, dragPage: 0,
        showProgress: true, showStreak: true, persistProgress: true,
      };
      this._scrub = { total: 1, goPage: function () {} };
      this._setTrack = this._setTrack.bind(this);
      this._onDown = this._onDown.bind(this);
      this._onMove = this._onMove.bind(this);
      this._onUp = this._onUp.bind(this);
      this._pageFromX = this._pageFromX.bind(this);
      this._onCredential = this._onCredential.bind(this);
      this._login = this._login.bind(this);
      this._logout = this._logout.bind(this);
    }

    componentDidMount() {
      var self = this;
      Promise.all([api.config(), api.me()]).then(function (res) {
        var cfg = res[0] || {}, me = res[1] || {};
        self.setState({ googleClientId: cfg.googleClientId || "", loginEnabled: !!cfg.loginEnabled, account: me.user || null });
      })["catch"](function () {}).then(function () { self._ensure(); });
    }
    componentWillUnmount() { if (this._iv) clearInterval(this._iv); if (this._syncT) clearTimeout(this._syncT); }

    _ensure() {
      var self = this;
      if (window.VOCAB) { this._init(); return; }
      this._iv = setInterval(function () {
        if (window.VOCAB) { clearInterval(self._iv); self._iv = null; self._init(); }
      }, 40);
    }

    _acctId() { return this.state.account ? this.state.account.sub : "local"; }
    _k(name) { var id = this._acctId(); return id === "local" ? name : name + "::" + id; }

    _init() {
      var V = window.VOCAB;
      this.W = V.W;
      this.W2 = V.W2 || [];
      this.s1 = V.extractSA(V.W);
      this.s2 = V.extractSA(this.W2);
      this.day1 = this.W.concat(this.s1);
      this.day2 = this.W2.concat(this.s2);
      this.pages1 = V.chunk(this.day1, V.PS);
      this.pages2 = V.chunk(this.day2, V.PS);
      this._all = this.day1.concat(this.day2);
      this.setState({ ready: true }, this._loadData.bind(this));
    }

    _readLocal() {
      return {
        best: parseInt(localStorage.getItem(this._k("vq_best")) || "0", 10) || 0,
        completed: readJSON(this._k("vq_completed"), {}),
        saved: readJSON(this._k("vq_saved"), {}),
      };
    }
    _writeLocal(best, completed, saved) {
      try { localStorage.setItem(this._k("vq_best"), String(best)); } catch (e) {}
      try { localStorage.setItem(this._k("vq_completed"), JSON.stringify(completed)); } catch (e) {}
      if (saved !== undefined) { try { localStorage.setItem(this._k("vq_saved"), JSON.stringify(saved)); } catch (e) {} }
    }

    _loadData() {
      var self = this;
      if (this.state.account) {
        this.setState({ syncing: true });
        api.getData().then(function (server) {
          if (server && (countKeys(server.saved) || countKeys(server.completed) || server.best)) {
            self.setState({ best: server.best || 0, completed: server.completed || {}, saved: server.saved || {}, streak: 0, syncing: false });
            self._writeLocal(server.best || 0, server.completed || {}, server.saved || {});
          } else {
            var local = self._readLocal();
            var guest = { best: parseInt(localStorage.getItem("vq_best") || "0", 10) || 0, completed: readJSON("vq_completed", {}), saved: readJSON("vq_saved", {}) };
            var seed = (countKeys(local.saved) || countKeys(local.completed) || local.best) ? local : guest;
            self.setState({ best: seed.best, completed: seed.completed, saved: seed.saved, streak: 0, syncing: false });
            if (countKeys(seed.saved) || countKeys(seed.completed) || seed.best) {
              self._writeLocal(seed.best, seed.completed, seed.saved);
              api.putData({ best: seed.best, completed: seed.completed, saved: seed.saved });
            }
          }
        });
      } else {
        var local = this._readLocal();
        this.setState({ best: local.best, completed: local.completed, saved: local.saved, streak: 0, syncing: false });
      }
    }

    _persist() { return this.state.persistProgress !== false; }

    _save(best, completed, saved) {
      if (this.state.account) {
        this._writeLocal(best, completed, saved);
        this._syncUp(best, completed, saved);
      } else if (this._persist()) {
        this._writeLocal(best, completed, saved);
      }
    }
    _syncUp(best, completed, saved) {
      var self = this;
      if (this._syncT) clearTimeout(this._syncT);
      this._syncT = setTimeout(function () { api.putData({ best: best, completed: completed, saved: saved }); }, 500);
    }

    _onCredential(resp) {
      var self = this;
      api.login(resp.credential).then(function (r) {
        if (r.ok && r.body && r.body.user) {
          self.setState({ account: r.body.user, showLoginInfo: false }, self._loadData.bind(self));
        } else {
          console.error("login failed", r.body);
          self.setState({ showLoginInfo: true });
        }
      });
    }
    _gisLogin(cid) {
      var self = this;
      var go = function () {
        try {
          window.google.accounts.id.initialize({ client_id: cid, callback: self._onCredential });
          window.google.accounts.id.prompt();
        } catch (e) { console.error("GIS init failed", e); self.setState({ showLoginInfo: true }); }
      };
      if (window.google && window.google.accounts && window.google.accounts.id) { go(); return; }
      if (this._gisLoading) return; this._gisLoading = true;
      var s = document.createElement("script");
      s.src = "https://accounts.google.com/gsi/client"; s.async = true; s.defer = true;
      s.onload = function () { self._gisLoading = false; go(); };
      s.onerror = function () { self._gisLoading = false; self.setState({ showLoginInfo: true }); };
      document.head.appendChild(s);
    }
    _login() {
      var cid = (this.state.googleClientId || "").trim();
      if (!cid || !this.state.loginEnabled) { this.setState({ showLoginInfo: true }); return; }
      this._gisLogin(cid);
    }
    _logout() {
      var self = this;
      api.logout().then(function () {
        try { if (window.google && window.google.accounts && window.google.accounts.id) window.google.accounts.id.disableAutoSelect(); } catch (e) {}
        self.setState({ account: null }, self._loadData.bind(self));
      });
    }

    _pageFromX(clientX) {
      var el = this._trackEl, sc = this._scrub; if (!el || !sc) return 0;
      var r = el.getBoundingClientRect();
      var ratio = r.width ? (clientX - r.left) / r.width : 0;
      ratio = Math.max(0, Math.min(1, ratio));
      return Math.round(ratio * (sc.total - 1));
    }
    _onDown(e) {
      var el = this._trackEl; if (!el) return;
      try { el.setPointerCapture(e.pointerId); } catch (_) {}
      this.setState({ dragging: true, dragPage: this._pageFromX(e.clientX) });
      el.addEventListener("pointermove", this._onMove);
      el.addEventListener("pointerup", this._onUp);
      el.addEventListener("pointercancel", this._onUp);
    }
    _onMove(e) {
      if (!this.state.dragging) return;
      var p = this._pageFromX(e.clientX);
      if (p !== this.state.dragPage) this.setState({ dragPage: p });
    }
    _onUp() {
      var el = this._trackEl;
      if (el) { el.removeEventListener("pointermove", this._onMove); el.removeEventListener("pointerup", this._onUp); el.removeEventListener("pointercancel", this._onUp); }
      if (!this.state.dragging) return;
      var p = this.state.dragPage;
      this.setState({ dragging: false });
      if (this._scrub) this._scrub.goPage(p);
    }
    _setTrack(el) {
      this._trackEl = el;
      if (el && !el.__vqBound) { el.__vqBound = true; el.addEventListener("pointerdown", this._onDown); }
    }

    render() {
      var V = window.VOCAB;
      var wrap = { minHeight: "100vh", background: "#F2F2F7", padding: "20px 16px 40px", fontFamily: "-apple-system,'SF Pro Display',system-ui,sans-serif" };
      var inner = { maxWidth: 420, margin: "0 auto" };
      if (!this.state.ready || !V) {
        return h("div", { style: wrap }, h("div", { style: inner }));
      }

      var blue = V.blue, t1 = V.t1, t2 = V.t2, t3 = V.t3, sep = V.sep, font = V.font;
      var s = this.state, stage = s.stage;
      var self = this;

      var resolveSaved = function (key) {
        var i = key.indexOf("::"); if (i < 0) return null;
        var sNum = key.slice(0, i), wTxt = key.slice(i + 2);
        var src = self._all;
        if (!src) return null;
        var f = src.find(function (x) { return x.w === wTxt; });
        return f ? Object.assign({}, f, { _key: key, _stage: sNum }) : null;
      };
      var savedWords = Object.keys(s.saved || {}).map(resolveSaved).filter(Boolean);

      var pages, pool, stageKeyStr, dayLabel;
      if (stage === "saved") {
        pages = V.chunk(savedWords, V.PS);
        pool = this._all;
        stageKeyStr = "saved";
        dayLabel = "저장함";
      } else if (stage === "day2") {
        pages = this.pages2;
        pool = this.day2;
        stageKeyStr = "day2";
        dayLabel = "Day 2";
      } else {
        pages = this.pages1;
        pool = this.day1;
        stageKeyStr = "day1";
        dayLabel = "Day 1";
      }
      var total = pages.length;
      var pIdx = Math.max(0, Math.min(s.page, total - 1));
      var words = total ? (pages[pIdx] || pages[0]) : [];
      words = words.map(function (w) { return w._key ? w : Object.assign({}, w, { _key: stageKeyStr + "::" + w.w, _stage: stageKeyStr }); });
      var hasFill = words && words.some(function (v) { return v.ex; });
      var modeDefs = [{ id: "exam", n: "시험지" }].concat(hasFill ? [{ id: "fill", n: "빈칸" }] : [], [{ id: "match", n: "매칭" }]);
      var mode = modeDefs.some(function (m) { return m.id === s.mode; }) ? s.mode : "exam";
      var showEmpty = stage === "saved" && savedWords.length === 0;
      var showQuiz = !showEmpty;

      var goStage = function (st) { self.setState({ stage: st, page: 0, mode: "exam" }); };
      var goPage = function (p) { self.setState({ page: Math.max(0, Math.min(total - 1, p)) }); };
      var setMode = function (m) { self.setState({ mode: m }); };
      var replay = function () {
        // Clear progress for this page+mode so it starts fresh
        var pk = stageKeyStr + "-" + pIdx + "-" + mode;
        self.setState(function (st) {
          var pp = Object.assign({}, st.pageProgress);
          delete pp[pk];
          return { round: st.round + 1, pageProgress: pp };
        });
      };
      var onResult = function (ok, key) {
        self.setState(function (st) {
          var ns = ok ? st.streak + 1 : 0; var nb = Math.max(st.best, ns);
          var saved = st.saved;
          if (!ok && key && !saved[key]) { saved = Object.assign({}, st.saved); saved[key] = true; }
          self._save(nb, st.completed, saved);
          return { streak: ns, best: nb, saved: saved };
        });
      };
      var onComplete = function () {
        self.setState(function (st) {
          var key = stageKeyStr + "-" + pIdx;
          if (st.completed[key]) return null;
          var completed = Object.assign({}, st.completed); completed[key] = true;
          self._save(st.best, completed, st.saved);
          return { completed: completed };
        });
      };
      var onToggleSave = function (key) {
        self.setState(function (st) {
          var saved = Object.assign({}, st.saved);
          if (saved[key]) delete saved[key]; else saved[key] = true;
          self._save(st.best, st.completed, saved);
          return { saved: saved };
        });
      };

      // Progress key for current page + mode
      var progressKey = stageKeyStr + "-" + pIdx + "-" + mode;
      var currentProgress = s.pageProgress[progressKey] || {};
      var onProgress = function (prog) {
        self.setState(function (st) {
          var pp = Object.assign({}, st.pageProgress);
          pp[progressKey] = Object.assign({}, pp[progressKey] || {}, prog);
          return { pageProgress: pp };
        });
      };

      var segBtn = function (active) { return { flex: 1, padding: "7px 0", borderRadius: 7, border: "none", background: active ? "#fff" : "transparent", color: active ? t1 : t2, fontSize: 12, fontWeight: active ? 600 : 400, cursor: "pointer", transition: "all 0.2s", boxShadow: active ? "0 1px 4px rgba(0,0,0,0.08)" : "none", fontFamily: font }; };
      var modeBtn = function (active) { return { padding: "5px 12px", borderRadius: 6, border: "none", background: active ? "#fff" : "transparent", color: active ? t1 : t2, fontSize: 11, fontWeight: active ? 600 : 400, cursor: "pointer", boxShadow: active ? "0 0.5px 2px rgba(0,0,0,0.06)" : "none", fontFamily: font }; };
      var navStyle = function (on) { return { border: "none", background: "none", fontSize: 20, lineHeight: 1, color: on ? blue : t3, cursor: on ? "pointer" : "default", padding: "0 4px", fontFamily: font }; };

      var completedCount = Object.keys(s.completed).filter(function (k) { return k.indexOf(stageKeyStr + "-") === 0; }).length;
      var pct = total ? Math.min(100, completedCount / total * 100) : 0;

      this._scrub = { total: total, goPage: goPage };
      var dragging = s.dragging;
      var activePage = dragging ? Math.max(0, Math.min(total - 1, s.dragPage)) : pIdx;
      var posPct = total > 1 ? (activePage / (total - 1)) * 100 : 0;
      var streak = s.streak, best = s.best, sActive = streak > 0;

      var header = h("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", margin: "2px 0 14px" } },
        h("span", { style: { fontSize: 17, fontWeight: 700, color: "#1C1C1E", letterSpacing: "-0.3px" } }, "단어 퀴즈"),
        s.account
          ? h("div", { style: { display: "flex", alignItems: "center", gap: 8 } },
              s.account.picture
                ? h("img", { src: s.account.picture, alt: "", style: { width: 26, height: 26, borderRadius: 13, flex: "none", objectFit: "cover" } })
                : h("span", { style: { width: 26, height: 26, borderRadius: 13, background: "#007AFF", color: "#fff", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flex: "none" } }, (s.account.name || "U").trim().charAt(0).toUpperCase()),
              h("span", { style: { fontSize: 12, color: "#1C1C1E", fontWeight: 500, maxWidth: 88, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, s.account.name),
              h("button", { onClick: this._logout, style: { border: "none", background: "none", color: "#8E8E93", fontSize: 12, cursor: "pointer", padding: "2px 4px", fontFamily: font } }, "로그아웃"))
          : h("button", { onClick: this._login, style: { display: "flex", alignItems: "center", gap: 7, border: "1px solid #DADCE0", background: "#fff", borderRadius: 18, padding: "6px 14px 6px 11px", cursor: "pointer", fontFamily: font, boxShadow: "0 1px 2px rgba(0,0,0,0.04)" } },
              h("span", { style: { width: 15, height: 15, borderRadius: 8, background: "conic-gradient(from -45deg,#EA4335,#FBBC05,#34A853,#4285F4,#EA4335)", display: "inline-block", flex: "none" } }),
              h("span", { style: { fontSize: 12.5, fontWeight: 600, color: "#3C4043" } }, "Google 로그인"))
      );

      var stageBtns = h("div", { style: { display: "flex", background: "rgba(118,118,128,0.12)", borderRadius: 9, padding: 2, margin: "0 0 14px" } },
        h("button", { onClick: function () { goStage("day1"); }, style: segBtn(stage === "day1") }, "Day 1"),
        h("button", { onClick: function () { goStage("day2"); }, style: segBtn(stage === "day2") }, "Day 2"),
        h("button", { onClick: function () { goStage("saved"); }, style: segBtn(stage === "saved") }, "★ 저장 " + savedWords.length)
      );

      var emptyCard = showEmpty ? h("div", { style: { background: "#fff", borderRadius: 12, padding: "38px 22px", textAlign: "center", boxShadow: "0 0.5px 0 rgba(0,0,0,0.04)" } },
        h("p", { style: { fontSize: 38, margin: "0 0 10px", color: "#FF9F0A", lineHeight: 1 } }, "★"),
        h("p", { style: { fontSize: 15, fontWeight: 600, color: "#1C1C1E", margin: "0 0 6px" } }, "저장한 단어가 없어요"),
        h("p", { style: { fontSize: 12.5, color: "#8E8E93", margin: 0, lineHeight: 1.7 } }, "문제 단어 옆 별(☆)을 누르면 여기에 모여요.", h("br"), "틀린 단어는 자동으로 저장됩니다.")
      ) : null;

      var progressBlock = s.showProgress ? h("div", { style: { flex: 1 } },
        h("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 7 } },
          h("span", { style: { fontSize: 11, color: "#8E8E93", fontWeight: 600, letterSpacing: "0.2px" } }, completedCount + "/" + total + " 페이지 완료"),
          h("span", { style: { fontSize: 11, color: dragging ? blue : "#8E8E93", fontWeight: dragging ? 700 : 400, fontVariantNumeric: "tabular-nums" } }, dragging ? (activePage + 1) + " 페이지로" : Math.round(pct) + "%")),
        h("div", { ref: this._setTrack, style: { position: "relative", height: 22, display: "flex", alignItems: "center", cursor: "pointer", touchAction: "none", WebkitUserSelect: "none", userSelect: "none" } },
          h("div", { style: { position: "absolute", left: 0, right: 0, height: 6, borderRadius: 3, background: "rgba(118,118,128,0.16)", overflow: "hidden" } },
            h("div", { style: { height: "100%", width: pct + "%", borderRadius: 3, background: "linear-gradient(90deg,#007AFF,#34C759)", transition: "width 0.45s cubic-bezier(.2,.8,.2,1)" } })),
          Array.from({ length: total }, function (_, i) {
            return h("div", { key: "tk" + i, style: { position: "absolute", left: (total > 1 ? (i / (total - 1)) * 100 : 0) + "%", transform: "translateX(-50%)", width: 3, height: 3, borderRadius: 2, background: i <= completedCount - 1 ? "rgba(255,255,255,0.85)" : "rgba(118,118,128,0.45)", pointerEvents: "none", zIndex: 1 } });
          }),
          h("div", { style: { position: "absolute", left: posPct + "%", transform: "translateX(-50%)", width: 14, height: 14, borderRadius: 7, background: "#fff", border: "2px solid " + blue, boxShadow: "0 1px 4px rgba(0,0,0,0.28)", pointerEvents: "none", zIndex: 2 } }))
      ) : null;

      var streakChip = s.showStreak ? h("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minWidth: 54, padding: "5px 10px", borderRadius: 11, background: sActive ? "#FFF1E6" : "rgba(118,118,128,0.10)", transition: "all 0.2s" } },
        h("span", { style: { fontSize: 9.5, fontWeight: 600, letterSpacing: "0.4px", color: sActive ? "#FF8A00" : t3 } }, "연속"),
        h("span", { style: { fontSize: 17, fontWeight: 700, lineHeight: 1.05, color: sActive ? "#FF8A00" : t3, fontVariantNumeric: "tabular-nums" } }, streak),
        best > 0 ? h("span", { style: { fontSize: 9, color: "#B0B0B5", marginTop: 1 } }, "최고 " + best) : null
      ) : null;

      var progressRow = h("div", { style: { display: "flex", alignItems: "flex-end", gap: 12, marginBottom: 16 } }, progressBlock, streakChip);

      var navRow = h("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 } },
        h("div", { style: { display: "flex", alignItems: "center", gap: 8 } },
          h("button", { onClick: function () { goPage(pIdx - 1); }, style: navStyle(pIdx > 0) }, "‹"),
          h("span", { style: { fontSize: 12, color: "#8E8E93", fontVariantNumeric: "tabular-nums", minWidth: 50, textAlign: "center" } }, (pIdx + 1) + " / " + total),
          h("button", { onClick: function () { goPage(pIdx + 1); }, style: navStyle(pIdx < total - 1) }, "›")),
        h("div", { style: { display: "flex", background: "rgba(118,118,128,0.12)", borderRadius: 7, padding: 2 } },
          modeDefs.map(function (m) { return h("button", { key: m.id, onClick: function () { setMode(m.id); }, style: modeBtn(mode === m.id) }, m.n); }))
      );

      var sig = stage + "-" + pIdx + "-" + mode + "-" + s.round;
      var quizBody = h(window.QuizBody, {
        key: sig,
        mode: mode,
        words: words,
        pool: pool,
        savedMap: s.saved,
        onToggleSave: onToggleSave,
        onResult: onResult,
        onComplete: onComplete,
        progress: currentProgress,
        onProgress: onProgress
      });

      var primaryStyle = { width: "100%", padding: 14, borderRadius: 12, border: "none", background: blue, color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer", marginTop: 16, fontFamily: font };
      var replayStyle = { width: "100%", padding: 13, borderRadius: 12, border: "1px solid " + sep, background: "#fff", color: blue, fontSize: 14, fontWeight: 600, cursor: "pointer", marginTop: 16, fontFamily: font, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 };

      var showReplay = !!s.completed[stageKeyStr + "-" + pIdx];
      var showNext = total > 0 && pIdx < total - 1;
      var showDone = total > 0 && pIdx === total - 1 && (stage === "day1" || stage === "day2" || stage === "saved");

      var footer = [
        showReplay ? h("button", { key: "replay", onClick: replay, style: replayStyle }, h("span", { style: { fontSize: 15 } }, "↻"), h("span", null, "다시 풀기")) : null,
        showNext ? h("button", { key: "next", onClick: function () { goPage(pIdx + 1); }, style: primaryStyle }, "다음 페이지") : null,
        showDone ? h("div", { key: "done", style: { background: "#fff", borderRadius: 12, padding: "20px 16px", marginTop: 16, textAlign: "center", boxShadow: "0 0.5px 0 rgba(0,0,0,0.04)" } },
          h("p", { style: { fontSize: 15, fontWeight: 600, color: "#1C1C1E", margin: "0 0 4px" } }, dayLabel + " 학습 완료"),
          h("p", { style: { fontSize: 12, color: "#8E8E93", margin: 0 } }, stage === "saved" ? ("저장한 " + savedWords.length + "개 단어 학습 완료") : ("메인 60개 + 유의어·반의어 통합"))) : null,
      ];

      var quizSection = showQuiz ? h("div", null, progressRow, navRow, quizBody, footer) : null;

      var modal = s.showLoginInfo ? h("div", { onClick: function () { self.setState({ showLoginInfo: false }); }, style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, zIndex: 50 } },
        h("div", { onClick: function (e) { e.stopPropagation(); }, style: { background: "#fff", borderRadius: 16, maxWidth: 344, width: "100%", padding: "22px 20px", boxShadow: "0 20px 50px rgba(0,0,0,0.25)" } },
          h("p", { style: { fontSize: 16, fontWeight: 700, color: "#1C1C1E", margin: "0 0 10px" } }, "Google 로그인 안내"),
          h("p", { style: { fontSize: 13, color: "#3C3C43", lineHeight: 1.65, margin: "0 0 12px" } }, "실제 Google 로그인을 켜려면 서버에 설정이 필요해요:"),
          h("div", { style: { fontSize: 12.5, color: "#3C3C43", lineHeight: 1.8, margin: "0 0 14px" } },
            h("p", { style: { margin: "0 0 6px" } }, "1. Google Cloud에서 OAuth 클라이언트 ID 발급"),
            h("p", { style: { margin: "0 0 6px" } }, "2. 서버 환경변수 GOOGLE_CLIENT_ID 에 입력"),
            h("p", { style: { margin: 0 } }, "3. 서버 재시작 후 로그인 (README_SETUP.md 참고)")),
          h("p", { style: { fontSize: 12, color: "#8E8E93", lineHeight: 1.6, margin: "0 0 16px", padding: "11px 13px", background: "#F2F2F7", borderRadius: 10 } }, "로그인 전에도 학습 기록과 저장한 단어는 이 기기에 안전하게 보관돼요."),
          h("button", { onClick: function () { self.setState({ showLoginInfo: false }); }, style: { width: "100%", padding: 12, border: "none", borderRadius: 11, background: "#007AFF", color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: font } }, "확인"))
      ) : null;

      return h("div", { style: wrap }, h("div", { style: inner }, header, stageBtns, emptyCard, quizSection, modal));
    }
  };

  function countKeys(o) { return o ? Object.keys(o).length : 0; }

  function boot() {
    if (!window.React || !window.ReactDOM) { setTimeout(boot, 30); return; }
    var el = document.getElementById("root");
    if (window.ReactDOM.createRoot) window.ReactDOM.createRoot(el).render(h(App));
    else window.ReactDOM.render(h(App), el);
  }
  boot();
})();
