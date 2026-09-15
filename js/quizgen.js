/**
 * quizgen.js — 문제 생성 엔진
 *
 * 모드
 *   mcq    ① 4지선다 (영→한 / 한→영 양방향 교대)
 *   not    ④ 아닌 것 고르기 (유의어 3 + 비유의어 1)
 *   match  ⑤ 짝 맞추기 (5~6쌍 — 소거법 방지)
 *   cloze  ⑬ 문장 빈칸
 *   colloc ⑯ 연어 고르기
 *
 * 오답 선택지 원칙
 *   - 같은 품사, CEFR 레벨 차이 ±1 이내 (레벨이 튀면 정답이 드러남)
 *   - 정답과 뜻이 겹치는 단어, 정답의 유의어는 오답에서 제외
 *   - 영→한은 반의어를 1개 의도적으로 포함 (뜻의 경계를 검증)
 *   - 한→영·문장 빈칸은 철자가 닮은 단어를 우선 (형태 구별 훈련)
 */
window.Quiz = (function () {
  var LEVELS = { B2: 0, C1: 1, C2: 2 };

  var MODES = [
    { id: 'mcq',    label: '4지선다',      sub: '영↔한 양방향' },
    { id: 'not',    label: '아닌 것 고르기', sub: '유의어 구별' },
    { id: 'match',  label: '짝 맞추기',     sub: '5~6쌍 보드' },
    { id: 'cloze',  label: '문장 빈칸',     sub: '문맥 속 구별' },
    { id: 'colloc', label: '연어 고르기',   sub: '전치사·동사 조합' }
  ];

  /* ── 공통 유틸 ─────────────────────────────── */

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function sample(arr, n) {
    return shuffle(arr).slice(0, n);
  }

  function levelIdx(w) {
    var i = LEVELS[w.level];
    // 0(B2)을 falsy로 잘못 걸러내면 B2가 C1으로 취급되어
    // B2와 C2가 같은 문항에 섞인다. undefined만 기본값으로 보낸다.
    return i === undefined ? 1 : i;
  }

  function levelGap(a, b) {
    return Math.abs(levelIdx(a) - levelIdx(b));
  }

  function normalizeMeaning(s) {
    return String(s).replace(/\s+/g, '');
  }

  /** 두 단어의 한국어 뜻이 겹치는지 (겹치면 오답으로 쓸 수 없다) */
  function meaningsOverlap(a, b) {
    var A = (a.meanings || []).map(normalizeMeaning);
    var B = (b.meanings || []).map(normalizeMeaning);
    for (var i = 0; i < A.length; i++) {
      for (var j = 0; j < B.length; j++) {
        if (A[i] === B[j]) return true;
        if (A[i].length >= 3 && B[j].length >= 3 &&
            (A[i].indexOf(B[j]) !== -1 || B[j].indexOf(A[i]) !== -1)) return true;
      }
    }
    return false;
  }

  /** 서로 유의어 관계인지 (유의어는 오답이 될 수 없다) */
  function areSynonyms(a, b) {
    var as = (a.syn || []).map(function (s) { return s.toLowerCase(); });
    var bs = (b.syn || []).map(function (s) { return s.toLowerCase(); });
    return as.indexOf(b.word.toLowerCase()) !== -1 ||
           bs.indexOf(a.word.toLowerCase()) !== -1;
  }

  /** 철자 유사도 — 공통 접두사 길이 기준 */
  function spellingScore(a, b) {
    var x = a.toLowerCase(), y = b.toLowerCase(), n = 0;
    while (n < x.length && n < y.length && x[n] === y[n]) n++;
    var score = n * 2;
    if (Math.abs(x.length - y.length) <= 2) score += 1;
    return score;
  }

  /**
   * 오답 후보: 같은 품사 · 레벨 ±1 · 뜻 겹침/유의어 제외
   * @param exclude 추가로 배제할 단어 이름 배열.
   *   정복 모드에서 같은 묶음의 단어가 서로의 오답으로 등장하지 않게 쓴다.
   */
  function distractorPool(answer, exclude) {
    var skip = {};
    (exclude || []).forEach(function (w) { skip[String(w).toLowerCase()] = true; });
    return window.VOCAB.filter(function (w) {
      if (w.word === answer.word) return false;
      if (skip[w.word.toLowerCase()]) return false;
      if (w.pos !== answer.pos) return false;
      if (levelGap(w, answer) > 1) return false;
      if (meaningsOverlap(w, answer)) return false;
      if (areSynonyms(w, answer)) return false;
      return true;
    });
  }

  function byWord(name) {
    if (!name) return null;
    var lower = String(name).toLowerCase();
    for (var i = 0; i < window.VOCAB.length; i++) {
      if (window.VOCAB[i].word.toLowerCase() === lower) return window.VOCAB[i];
    }
    return null;
  }

  /* ── 어형 변화 (문장 빈칸에서 오답을 정답과 같은 어형으로 맞춘다) ── */

  function detectInflection(base, form) {
    var b = base.toLowerCase(), f = form.toLowerCase();
    if (b === f) return '';
    if (f === b + 's') return 's';
    if (f === b + 'es') return 'es';
    if (f === b + 'd') return 'd';
    if (f === b + 'ed') return 'ed';
    if (f === b + 'ing') return 'ing';
    if (b.slice(-1) === 'e' && f === b.slice(0, -1) + 'ing') return 'ing';
    if (b.slice(-1) === 'y' && f === b.slice(0, -1) + 'ied') return 'ed';
    return null; // 알 수 없는 변화 — 오답도 원형으로 둔다
  }

  function applyInflection(base, kind) {
    var b = base;
    var last = b.slice(-1), prev = b.slice(-2, -1);
    var isVowel = function (c) { return 'aeiou'.indexOf(c) !== -1; };
    switch (kind) {
      case '':
        return b;
      case 's':
      case 'es':
        if (/(s|x|z|ch|sh)$/.test(b)) return b + 'es';
        if (last === 'y' && !isVowel(prev)) return b.slice(0, -1) + 'ies';
        return b + 's';
      case 'd':
      case 'ed':
        if (last === 'e') return b + 'd';
        if (last === 'y' && !isVowel(prev)) return b.slice(0, -1) + 'ied';
        return b + 'ed';
      case 'ing':
        if (last === 'e' && b.slice(-2) !== 'ee') return b.slice(0, -1) + 'ing';
        return b + 'ing';
      default:
        return b;
    }
  }

  function matchCase(sample, word) {
    if (sample && sample[0] === sample[0].toUpperCase() && /[a-z]/i.test(sample[0])) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return word;
  }

  /* ── 출제 대상 단어 선정 ───────────────────────
     사용자가 모드를 직접 고르되, 어떤 단어를 낼지는
     숙련도가 낮거나 최근 틀린 단어를 우선한다. */

  function eligible(modeId) {
    return window.VOCAB.filter(function (w) {
      switch (modeId) {
        case 'not':    return w.syn && w.syn.length >= 3;
        case 'cloze':  return w.ex && w.ex.length > 0;
        case 'colloc': return w.col && w.col.length > 0;
        default:       return w.meanings && w.meanings.length > 0;
      }
    });
  }

  /** 낮을수록 먼저 출제 */
  function priorityScore(w) {
    var info = window.Store.info(w.word);
    var score = info.m * 10;                         // 숙련도 낮은 단어 우선
    if (info.seen === 0) score -= 3;                 // 아직 안 본 단어 약간 우선
    if (info.lastWrong && Date.now() - info.lastWrong < 7 * 864e5) score -= 15; // 최근 오답 강하게 우선
    score += Math.random() * 12;                     // 매번 같은 순서가 되지 않게
    return score;
  }

  /** 출제 우선순위대로 정렬한 새 배열 */
  function rankByPriority(list) {
    return list.map(function (w) { return { w: w, s: priorityScore(w) }; })
      .sort(function (a, b) { return a.s - b.s; })
      .map(function (x) { return x.w; });
  }

  function pickWords(modeId, count, restrictTo) {
    var pool = eligible(modeId);
    if (restrictTo && restrictTo.length) {
      var allow = {};
      restrictTo.forEach(function (w) { allow[w] = true; });
      var filtered = pool.filter(function (w) { return allow[w.word]; });
      if (filtered.length) pool = filtered;
    }
    return rankByPriority(pool).slice(0, count);
  }

  /* ── 모드별 문제 생성 ─────────────────────────── */

  /** ① 4지선다 — dir: 'en-ko' | 'ko-en' */
  function makeMcq(answer, dir, exclude) {
    var pool = distractorPool(answer, exclude);
    if (pool.length < 3) return null;

    if (dir === 'en-ko') {
      var picks = [];
      // 반의어를 1개 의도적으로 넣어 뜻의 경계를 검증
      var antWord = (answer.ant || []).map(byWord).filter(Boolean)[0];
      if (antWord && pool.indexOf(antWord) !== -1) picks.push(antWord);
      var rest = shuffle(pool.filter(function (w) { return picks.indexOf(w) === -1; }));
      while (picks.length < 3 && rest.length) picks.push(rest.shift());
      if (picks.length < 3) return null;

      var opts = shuffle([answer.meanings[0]].concat(
        picks.map(function (w) { return w.meanings[0]; })
      ));
      // 오답 뜻이 정답 뜻과 문자열로 겹치면 문제를 버린다
      if (new Set(opts).size !== opts.length) return null;

      return {
        mode: 'mcq', dir: dir, word: answer.word,
        prompt: answer.word,
        promptSub: answer.pos + ' · ' + answer.level,
        options: opts,
        answer: answer.meanings[0],
        note: answer.meanings.join(', ')
      };
    }

    // 한→영: 철자가 닮은 단어를 오답으로 우선 선택
    var ranked = pool.slice().sort(function (a, b) {
      return spellingScore(b.word, answer.word) - spellingScore(a.word, answer.word);
    });
    var top = ranked.slice(0, 8);
    var chosen = sample(top, 3);
    if (chosen.length < 3) return null;

    var words = shuffle([answer.word].concat(chosen.map(function (w) { return w.word; })));
    return {
      mode: 'mcq', dir: dir, word: answer.word,
      prompt: answer.meanings.join(' / '),
      promptSub: answer.pos + ' · ' + answer.level,
      options: words,
      answer: answer.word,
      note: answer.word + ' — ' + answer.meanings.join(', ')
    };
  }

  /** ④ 아닌 것 고르기 — 유의어 3개 + 비유의어 1개(정답) */
  function makeNot(answer, exclude) {
    if (!answer.syn || answer.syn.length < 3) return null;
    var syns = sample(answer.syn, 3);
    var skip = {};
    (exclude || []).forEach(function (w) { skip[String(w).toLowerCase()] = true; });

    // 정답(= 바꿔 쓸 수 없는 것)은 반의어를 우선 사용
    var oddWord = (answer.ant || [])[0];
    if (oddWord && skip[oddWord.toLowerCase()]) oddWord = null;
    if (!oddWord) {
      var pool = distractorPool(answer, exclude);
      if (!pool.length) return null;
      oddWord = pool[Math.floor(Math.random() * pool.length)].word;
    }
    var lowerSyns = syns.map(function (s) { return s.toLowerCase(); });
    if (lowerSyns.indexOf(oddWord.toLowerCase()) !== -1) return null;

    return {
      mode: 'not', word: answer.word,
      prompt: answer.word,
      promptSub: answer.meanings.join(', ') + ' · ' + answer.pos,
      options: shuffle(syns.concat([oddWord])),
      answer: oddWord,
      note: answer.word + '의 유의어: ' + syns.join(', ')
    };
  }

  /** ⑤ 짝 맞추기 — 5~6쌍. 같은 품사·비슷한 레벨로 묶어 소거법을 어렵게 만든다 */
  function makeMatch(seed) {
    var size = Math.random() < 0.5 ? 5 : 6;
    var pool = window.VOCAB.filter(function (w) {
      return w.word !== seed.word && w.pos === seed.pos && levelGap(w, seed) <= 1;
    });
    // 뜻이 서로 겹치는 단어끼리는 같은 보드에 올리지 않는다
    var chosen = [seed];
    shuffle(pool).forEach(function (cand) {
      if (chosen.length >= size) return;
      var clash = chosen.some(function (c) {
        return meaningsOverlap(c, cand) || areSynonyms(c, cand);
      });
      if (!clash) chosen.push(cand);
    });
    if (chosen.length < 4) return null;

    return {
      mode: 'match',
      pairs: chosen.map(function (w) {
        return { word: w.word, meaning: w.meanings[0], level: w.level };
      }),
      words: chosen.map(function (w) { return w.word; })
    };
  }

  /** ⑬ 문장 빈칸 — 오답은 정답과 같은 어형으로 변환해 제시 */
  function makeCloze(answer, exclude) {
    if (!answer.ex || !answer.ex.length) return null;
    var ex = answer.ex[Math.floor(Math.random() * answer.ex.length)];
    var pool = distractorPool(answer, exclude);
    if (pool.length < 3) return null;

    // 절반은 철자 유사형, 절반은 무작위(의미 인접형)
    var chosen;
    if (Math.random() < 0.5) {
      var ranked = pool.slice().sort(function (a, b) {
        return spellingScore(b.word, answer.word) - spellingScore(a.word, answer.word);
      });
      chosen = sample(ranked.slice(0, 8), 3);
    } else {
      chosen = sample(pool, 3);
    }
    if (chosen.length < 3) return null;

    var kind = detectInflection(answer.word, ex.f);
    var forms = chosen.map(function (w) {
      var f = kind === null ? w.word : applyInflection(w.word, kind);
      return matchCase(ex.f, f);
    });
    var opts = shuffle([ex.f].concat(forms));
    if (new Set(opts.map(function (o) { return o.toLowerCase(); })).size !== opts.length) return null;

    return {
      mode: 'cloze', word: answer.word,
      sentence: ex.s,
      promptSub: answer.pos + ' · ' + answer.level,
      options: opts,
      answer: ex.f,
      ko: ex.ko,
      note: answer.word + ' — ' + answer.meanings.join(', ')
    };
  }

  /** ⑯ 연어 고르기 */
  function makeColloc(answer) {
    if (!answer.col || !answer.col.length) return null;
    var c = answer.col[Math.floor(Math.random() * answer.col.length)];
    var opts;

    if (c.opts && c.opts.length >= 4) {
      opts = sample(c.opts.filter(function (o) { return o !== c.a; }), 3).concat([c.a]);
    } else if (c.pool === 'prep' || c.pool === 'verb') {
      var pool = window.COL_POOLS[c.pool].filter(function (o) { return o !== c.a; });
      opts = sample(pool, 3).concat([c.a]);
    } else { // auto — 정답이 표제어 자신인 경우
      var dp = distractorPool(answer);
      if (dp.length < 3) return null;
      opts = sample(dp, 3).map(function (w) { return w.word; }).concat([c.a]);
    }
    if (opts.length < 4) return null;

    return {
      mode: 'colloc', word: answer.word,
      pattern: c.p,
      promptSub: answer.word + ' — ' + answer.meanings.join(', '),
      options: shuffle(opts),
      answer: c.a,
      note: c.note || ''
    };
  }

  /* ── 세션 구성 ────────────────────────────── */

  var BUILDERS = {
    not: makeNot,
    match: makeMatch,
    cloze: makeCloze,
    colloc: makeColloc
  };

  /**
   * 세션 생성
   * @param modeId  'mcq' | 'not' | 'match' | 'cloze' | 'colloc'
   * @param count   문제 수 (match는 보드 수)
   * @param restrictTo 특정 단어 목록으로 제한 (오답 노트 복습용)
   */
  function buildSession(modeId, count, restrictTo) {
    var out = [];
    var used = {};
    var attempts = 0;
    var mcqDir = Math.random() < 0.5 ? 'en-ko' : 'ko-en';

    while (out.length < count && attempts < count * 12) {
      attempts++;
      var need = count - out.length;
      var candidates = pickWords(modeId, need + 8, restrictTo);
      if (!candidates.length) break;

      for (var i = 0; i < candidates.length && out.length < count; i++) {
        var w = candidates[i];
        if (used[w.word]) continue;
        var q = null;
        if (modeId === 'mcq') {
          q = makeMcq(w, mcqDir);
          if (q) mcqDir = mcqDir === 'en-ko' ? 'ko-en' : 'en-ko'; // 양방향 교대
        } else {
          q = BUILDERS[modeId](w);
        }
        if (q) {
          out.push(q);
          used[w.word] = true;
          if (modeId === 'match') {
            q.words.forEach(function (x) { used[x] = true; });
          }
        }
      }
      if (Object.keys(used).length >= eligible(modeId).length) break;
    }
    return out;
  }

  function availableCount(modeId) {
    return eligible(modeId).length;
  }

  /**
   * 지정한 단어들로 짝 맞추기 보드를 만든다 (정복 모드의 도입·졸업 보드).
   * @param wordObjs   보드에 올릴 단어 객체 배열
   * @param recordMode 'none'이면 숙련도를 올리지 않고 노출만 기록한다.
   *                   도입 보드는 뜻을 처음 보여주는 자리이므로 'none'을 쓴다.
   */
  function buildMatchFrom(wordObjs, recordMode) {
    if (!wordObjs || wordObjs.length < 2) return null;
    return {
      mode: 'match',
      recordMode: recordMode || 'normal',
      pairs: wordObjs.map(function (w) {
        return { word: w.word, meaning: w.meanings[0], level: w.level };
      }),
      words: wordObjs.map(function (w) { return w.word; })
    };
  }

  return {
    MODES: MODES,
    buildSession: buildSession,
    availableCount: availableCount,
    eligible: eligible,
    shuffle: shuffle,
    rankByPriority: rankByPriority,
    buildMatchFrom: buildMatchFrom,
    /* 정복 모드가 단계별로 직접 호출하는 개별 빌더 */
    build: {
      mcq: makeMcq,
      not: makeNot,
      cloze: makeCloze,
      colloc: makeColloc,
      match: makeMatch
    },
    _internals: {
      distractorPool: distractorPool,
      detectInflection: detectInflection,
      applyInflection: applyInflection,
      meaningsOverlap: meaningsOverlap,
      areSynonyms: areSynonyms,
      levelGap: levelGap
    }
  };
})();
