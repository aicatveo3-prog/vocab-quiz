/**
 * store.js — localStorage 기반 학습 기록 저장소
 *
 * 저장 항목
 *   words[word]  : { m: 숙련도 0~5, seen: 노출 횟수, ok: 정답 수, ng: 오답 수, lastWrong: 타임스탬프|null }
 *   days[YYYY-MM-DD] : 그날 푼 문제 수
 *   streak       : 연속 학습일
 *   lastDay      : 마지막 학습 날짜
 */
window.Store = (function () {
  var KEY = 'vocabQuiz.v1';
  var MAX_MASTERY = 5;

  var state = load();

  function defaults() {
    return { words: {}, days: {}, streak: 0, lastDay: null, totalAnswered: 0 };
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
      state.words[word] = { m: 0, seen: 0, ok: 0, ng: 0, lastWrong: null };
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
    touchDay();
    state.totalAnswered++;
    save();
  }

  /** 짝 맞추기에서 마지막 남은 쌍처럼 숙련도를 올리지 않고 노출만 기록할 때 */
  function recordExposureOnly(word) {
    var r = rec(word);
    r.seen++;
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
      save();
    }
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
