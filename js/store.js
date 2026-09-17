/**
 * store.js — localStorage 기반 학습 기록 저장소
 *
 * 저장 항목
 *   words[word]  : { m: 숙련도 0~5, seen: 노출 횟수, ok: 정답 수, ng: 오답 수,
 *                    lastWrong: 타임스탬프|null, at: 마지막 수정 시각 }
 *   saved[word]  : { at: 시각, on: true|false }  저장(북마크)한 단어
 *   days[YYYY-MM-DD] : 그날 푼 문제 수
 *   streak       : 연속 학습일
 *   lastDay      : 마지막 학습 날짜
 *
 * at(마지막 수정 시각)은 기기 간 병합의 기준이다. mergeData()가 단어 하나하나에
 * 대해 at이 더 새로운 쪽을 택하기 때문에, 폰과 PC에서 서로 다른 단어를 공부해도
 * 양쪽이 모두 살아남는다. 기록 전체를 통째로 덮어쓰면 한쪽 공부가 사라진다.
 *
 * at이 없는 레코드(이 필드가 생기기 전에 만들어진 것)는 0으로 취급한다.
 * rec()은 기존 레코드에 필드를 덧붙이지 않으므로 읽는 쪽에서 방어해야 한다.
 */
window.Store = (function () {
  var KEY = 'vocabQuiz.v1';
  var MAX_MASTERY = 5;

  var state = load();

  /* 새 항목은 반드시 최상위에 둔다. load()가 최상위 키만 defaults로 메워주므로
     이 자리에 추가하면 기존 사용자 데이터가 깨지지 않는다. */
  function defaults() {
    return { words: {}, saved: {}, days: {}, streak: 0, lastDay: null, totalAnswered: 0 };
  }

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return defaults();
      var parsed = JSON.parse(raw);
      var base = defaults();
      Object.keys(base).forEach(function (k) {
        if (parsed[k] === undefined) parsed[k] = base[k];
      });
      return parsed;
    } catch (e) {
      return defaults();
    }
  }

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {
      /* 저장 실패(용량 초과 등)는 학습 진행을 막지 않는다 */
    }
  }

  function today() {
    var d = new Date();
    return d.getFullYear() + '-' +
      String(d.getMonth() + 1).padStart(2, '0') + '-' +
      String(d.getDate()).padStart(2, '0');
  }

  function dayKey(offsetDays) {
    var d = new Date();
    d.setDate(d.getDate() - offsetDays);
    return d.getFullYear() + '-' +
      String(d.getMonth() + 1).padStart(2, '0') + '-' +
      String(d.getDate()).padStart(2, '0');
  }

  function rec(word) {
    if (!state.words[word]) {
      state.words[word] = { m: 0, seen: 0, ok: 0, ng: 0, lastWrong: null, at: 0 };
    }
    return state.words[word];
  }

  /** 정답/오답 1건 기록 */
  function record(word, correct) {
    var r = rec(word);
    r.seen++;
    if (correct) {
      r.ok++;
      if (r.m < MAX_MASTERY) r.m++;
    } else {
      r.ng++;
      r.lastWrong = Date.now();
      if (r.m > 0) r.m--;
    }
    r.at = Date.now();      // 병합 기준 — 이 단어를 마지막으로 만진 시각
    touchDay();
    state.totalAnswered++;
    save();
  }

  /** 짝 맞추기에서 마지막 남은 쌍처럼 숙련도를 올리지 않고 노출만 기록할 때 */
  function recordExposureOnly(word) {
    var r = rec(word);
    r.seen++;
    r.at = Date.now();
    save();
  }

  function touchDay() {
    var t = today();
    state.days[t] = (state.days[t] || 0) + 1;
    if (state.lastDay !== t) {
      var yesterday = dayKey(1);
      state.streak = state.lastDay === yesterday ? state.streak + 1 : 1;
      state.lastDay = t;
    }
  }

  function mastery(word) {
    return state.words[word] ? state.words[word].m : 0;
  }

  function info(word) {
    return state.words[word] || { m: 0, seen: 0, ok: 0, ng: 0, lastWrong: null };
  }

  /** 오답 노트: 마지막에 틀렸고 아직 숙련도가 낮은 단어 목록 (최근 오답 우선) */
  function wrongList() {
    return Object.keys(state.words)
      .filter(function (w) {
        var r = state.words[w];
        return r.lastWrong && r.m < MAX_MASTERY;
      })
      .sort(function (a, b) {
        return state.words[b].lastWrong - state.words[a].lastWrong;
      });
  }

  function clearWrong(word) {
    if (state.words[word]) {
      state.words[word].lastWrong = null;
      state.words[word].at = Date.now();
      save();
    }
  }

  /* ── 저장(북마크)한 단어 ───────────────────────
     오답 노트는 틀리면 자동으로 들어가지만, 이건 직접 골라 담는 목록이다.

     해제할 때 항목을 지우지 않고 on:false로 남긴다. 지워 버리면 다른 기기의
     기록과 병합할 때 "이 기기엔 없다"와 "저기서 해제했다"를 구별할 수 없어
     해제한 단어가 되살아난다. */

  function isSaved(word) {
    var s = state.saved[word];
    return !!(s && s.on);
  }

  /** 저장 상태를 뒤집고 결과를 돌려준다 */
  function toggleSaved(word) {
    var on = !isSaved(word);
    state.saved[word] = { at: Date.now(), on: on };
    save();
    return on;
  }

  function setSaved(word, on) {
    state.saved[word] = { at: Date.now(), on: !!on };
    save();
  }

  /** 저장한 단어 목록 (최근 저장 우선) */
  function savedList() {
    return Object.keys(state.saved)
      .filter(function (w) { return state.saved[w].on; })
      .sort(function (a, b) { return (state.saved[b].at || 0) - (state.saved[a].at || 0); });
  }

  /** 오늘 푼 문제 수 */
  function todayCount() {
    return state.days[today()] || 0;
  }

  /** 최근 n일 학습량 (히트맵용, 오래된 날짜부터) */
  function recentDays(n) {
    var out = [];
    for (var i = n - 1; i >= 0; i--) {
      var k = dayKey(i);
      out.push({ date: k, count: state.days[k] || 0 });
    }
    return out;
  }

  /** 전체 진척도 요약 */
  /** 숙련도를 추가로 올린다 (정복 모드에서 4단계를 모두 통과했을 때의 보너스) */
  function boost(word, amount) {
    var r = rec(word);
    r.m = Math.min(MAX_MASTERY, r.m + (amount || 1));
    r.at = Date.now();
    save();
  }

  function summary(totalWords) {
    var studied = 0, mastered = 0, sumMastery = 0;
    Object.keys(state.words).forEach(function (w) {
      var r = state.words[w];
      if (r.seen > 0) studied++;
      if (r.m >= MAX_MASTERY) mastered++;
      sumMastery += r.m;
    });
    return {
      total: totalWords,
      studied: studied,
      mastered: mastered,
      streak: state.streak,
      today: todayCount(),
      totalAnswered: state.totalAnswered,
      avgMastery: studied ? (sumMastery / studied) : 0
    };
  }

  function reset() {
    state = defaults();
    save();
  }

  /* ── 내보내기 / 가져오기 · 병합 ──────────────────
     기기 간 기록을 합치는 로직. 지금은 파일로 주고받지만,
     서버 동기화를 붙일 때도 전송 방식만 바뀌고 mergeData는 그대로 쓴다.

     ⚠️ 전체를 통째로 덮어쓰면 안 된다.
     폰에서 30분 공부하고 PC를 열면, PC의 옛 기록이 폰 기록을 지워 버린다.
     단어 레코드는 서로 독립적이므로 단어 하나하나에 대해 at을 비교해
     새로운 쪽을 택하면 양쪽 공부가 모두 남는다. */

  var FORMAT = 1;

  function exportData() {
    return {
      format: FORMAT,
      exportedAt: Date.now(),
      data: JSON.parse(JSON.stringify(state))
    };
  }

  function atOf(r) {
    // at이 생기기 전 레코드는 0으로 본다 (있는 쪽이 항상 이긴다)
    return (r && typeof r.at === 'number') ? r.at : 0;
  }

  /**
   * 두 기록을 합친 새 객체를 돌려준다. 원본은 건드리지 않는다.
   * @param base    기준 기록 (보통 이 기기의 것)
   * @param incoming 합칠 기록 (파일이나 서버에서 온 것)
   */
  function mergeData(base, incoming) {
    var out = JSON.parse(JSON.stringify(base));
    if (!incoming || typeof incoming !== 'object') return out;

    // 단어별 — at이 더 새로운 쪽을 통째로 택한다
    var inWords = incoming.words || {};
    Object.keys(inWords).forEach(function (w) {
      if (atOf(inWords[w]) > atOf(out.words[w])) out.words[w] = inWords[w];
    });

    // 저장 목록 — 해제(on:false)도 시각으로 판정해야 되살아나지 않는다
    var inSaved = incoming.saved || {};
    Object.keys(inSaved).forEach(function (w) {
      if (atOf(inSaved[w]) > atOf(out.saved[w])) out.saved[w] = inSaved[w];
    });

    /* 날짜별 학습량 — 합산이 아니라 큰 쪽을 택한다.
       합산하면 같은 파일을 두 번 가져올 때 숫자가 부풀고, 히트맵과 연속일수는
       "그날 공부했는가"만 보므로 큰 쪽으로 충분하다. */
    var inDays = incoming.days || {};
    Object.keys(inDays).forEach(function (d) {
      out.days[d] = Math.max(out.days[d] || 0, inDays[d] || 0);
    });

    // 연속 학습일 — 마지막 학습이 더 최근인 쪽의 값을 따른다
    if ((incoming.lastDay || '') > (out.lastDay || '')) {
      out.lastDay = incoming.lastDay;
      out.streak = incoming.streak || 0;
    } else if (incoming.lastDay === out.lastDay) {
      out.streak = Math.max(out.streak || 0, incoming.streak || 0);
    }

    out.totalAnswered = Math.max(out.totalAnswered || 0, incoming.totalAnswered || 0);
    return out;
  }

  /**
   * 내보낸 기록을 현재 기록에 합친다.
   * @return { ok, merged, added, updated, reason }
   */
  function importData(payload) {
    var incoming;
    try {
      var obj = typeof payload === 'string' ? JSON.parse(payload) : payload;
      // exportData() 형태와 기록 자체(data) 형태를 모두 받는다
      incoming = obj && obj.data ? obj.data : obj;
      if (!incoming || typeof incoming.words !== 'object') {
        return { ok: false, reason: '학습 기록 파일이 아닙니다.' };
      }
    } catch (e) {
      return { ok: false, reason: '파일을 읽을 수 없습니다.' };
    }

    var before = state;
    var added = 0, updated = 0;
    Object.keys(incoming.words || {}).forEach(function (w) {
      if (!before.words[w]) added++;
      else if (atOf(incoming.words[w]) > atOf(before.words[w])) updated++;
    });

    var savedBefore = savedList().length;
    state = mergeData(before, incoming);
    save();
    return {
      ok: true,
      added: added,
      updated: updated,
      total: Object.keys(state.words).length,
      // 저장 목록만 담긴 파일을 가져왔을 때 "아무 일도 안 했다"로 보이지 않게 함께 알린다
      savedDelta: savedList().length - savedBefore,
      savedTotal: savedList().length
    };
  }

  /* ── 세션 진행 상태 저장/복원 ─────────────────
     문제를 풀다 새로고침하거나 나갔다 돌아와도 이어서 풀 수 있도록
     커서 위치 + 각 슬라이드의 답변 상태를 localStorage에 보관한다.
     문제 자체(선택지·정답)는 순서가 고정이라 재생성하므로 저장하지 않는다. */

  var SESS_PREFIX = 'vocabQuiz.sess.';

  /** 세션 키를 만든다. 개별 연습은 모드+세트, 정복은 세트+챕터. */
  function sessionKey(flow, modeId, setName, chapterIndex) {
    if (flow === 'conquer') return SESS_PREFIX + 'conq_' + setName + '_' + chapterIndex;
    return SESS_PREFIX + 'prac_' + modeId + '_' + setName;
  }

  /** 세션 상태를 저장한다. 문제를 풀 때마다 호출. */
  function saveSession(key, cursor, slides) {
    try {
      var correct = 0;
      var wrong = [];
      var answers = [];

      slides.forEach(function (s) {
        if (!s.answered) { answers.push(null); return; }
        answers.push({
          a: true,
          ch: s.chosen || null,
          ok: !!s.correct,
          bs: s.boardStats ? { m: s.boardStats.mistakes, c: !!s.boardStats.correct } : null
        });
        if (s.boardStats) {
          if (s.boardStats.correct) correct++;
          (s.boardStats.wrongWords || []).forEach(function (w) {
            if (wrong.indexOf(w) === -1) wrong.push(w);
          });
        } else {
          if (s.correct) correct++;
          else if (s.word && wrong.indexOf(s.word) === -1) wrong.push(s.word);
        }
      });

      localStorage.setItem(key, JSON.stringify({
        cursor: cursor,
        correct: correct,
        wrongWords: wrong,
        answers: answers
      }));
    } catch (e) { /* 용량 초과 등 무시 */ }
  }

  /** 저장된 세션 상태를 불러온다. 없으면 null. */
  function loadSession(key) {
    try {
      var raw = localStorage.getItem(key);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (e) { return null; }
  }

  /** 세션 상태를 slides 배열에 복원한다. */
  function restoreSession(saved, slides) {
    if (!saved || !saved.answers) return false;
    var restored = false;
    var len = Math.min(saved.answers.length, slides.length);
    for (var i = 0; i < len; i++) {
      var ans = saved.answers[i];
      if (!ans || !ans.a) continue;
      slides[i].answered = true;
      slides[i].chosen = ans.ch;
      slides[i].correct = ans.ok;
      if (ans.bs) {
        slides[i].boardStats = {
          mistakes: ans.bs.m,
          correct: ans.bs.c,
          wrongWords: []
        };
      }
      restored = true;
    }
    return restored;
  }

  /** 세션 저장을 삭제한다 (완료 후 정리). */
  function clearSession(key) {
    try { localStorage.removeItem(key); } catch (e) { /* noop */ }
  }

  return {
    MAX_MASTERY: MAX_MASTERY,
    record: record,
    recordExposureOnly: recordExposureOnly,
    boost: boost,
    mastery: mastery,
    info: info,
    wrongList: wrongList,
    clearWrong: clearWrong,
    isSaved: isSaved,
    toggleSaved: toggleSaved,
    setSaved: setSaved,
    savedList: savedList,
    exportData: exportData,
    importData: importData,
    mergeData: mergeData,
    todayCount: todayCount,
    recentDays: recentDays,
    summary: summary,
    reset: reset,
    sessionKey: sessionKey,
    saveSession: saveSession,
    loadSession: loadSession,
    restoreSession: restoreSession,
    clearSession: clearSession
  };
})();
