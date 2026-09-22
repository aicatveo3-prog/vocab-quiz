/**
 * quizgen.js — 문제 생성 엔진
 *
 * 모드
 *   mcq    ① 4지선다 (영→한 / 한→영 양방향 교대)
 *   not    ④ 아닌 것 고르기 — 두 갈래
 *            · 유의어 3 + 비유의어 1        (makeNot)
 *            · 같은 전치사 3 + 다른 것 1    (makeGov)
 *   match  ⑤ 짝 맞추기 (5~6쌍 — 소거법 방지)
 *   cloze  ⑬ 문장 빈칸
 *
 * 오답 선택지 원칙
 *   - 같은 품사, CEFR 레벨 차이 ±1 이내 (레벨이 튀면 정답이 드러남)
 *   - 정답과 뜻이 겹치는 단어, 정답의 유의어는 오답에서 제외
 *   - 영→한은 반의어를 1개 의도적으로 포함 (뜻의 경계를 검증)
 *   - 한→영·문장 빈칸은 철자가 닮은 단어를 우선 (형태 구별 훈련)
 */
window.Quiz = (function () {
  var LEVELS = { B1: 0, B2: 1, C1: 2, C2: 3 };

  /* 전 세트 합집합.
     출제 대상은 세트로 갈리지만(B 연습에서는 B 단어만 문제로 나온다),
     오답 후보·단어 조회는 합집합을 쓴다. 세트 안에서만 오답을 뽑으면
     부사·구표현처럼 수가 적은 품사에서 후보 3개를 못 채워 그 단어가
     문제에서 통째로 빠진다. 세트를 늘릴 때는 여기에 추가한다. */
  var ALL = (window.VOCAB || [])
    .concat(window.VOCAB_B || [])
    .concat(window.VOCAB_C || [])
    .concat(window.VOCAB_D || [])
    .concat(window.VOCAB_E || [])
    .concat(window.VOCAB_F || []);

  var MODES = [
    { id: 'mcq',    label: '4지선다',      sub: '영↔한 양방향' },
    { id: 'not',    label: '아닌 것 고르기', sub: '유의어·전치사 구별' },
    { id: 'match',  label: '짝 맞추기',     sub: '5~6쌍 보드' },
    { id: 'cloze',  label: '문장 빈칸',     sub: '문맥 속 구별' }
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
    return ALL.filter(function (w) {
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
    for (var i = 0; i < ALL.length; i++) {
      if (ALL[i].word.toLowerCase() === lower) return ALL[i];
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

  /**
   * 해당 모드로 출제 가능한 단어 목록.
   * @param words 출제 대상을 특정 세트로 제한할 때 그 세트의 단어 배열.
   *   생략하면 전 세트(오답 노트처럼 세트를 가리지 않는 자리).
   */
  function eligible(modeId, words) {
    return (words || ALL).filter(function (w) {
      switch (modeId) {
        /* '아닌 것 고르기'는 유의어 문항과 전치사 문항 두 갈래다.
           어느 한쪽이라도 만들 수 있으면 출제 대상이다. */
        case 'not':    return (w.syn && w.syn.length >= 3) || !!govOf(w);
        case 'cloze':  return w.ex && w.ex.length > 0;
        default:       return w.meanings && w.meanings.length > 0;
      }
    });
  }

  /** 낮을수록 먼저 출제 */
  function priorityScore(w) {
    var info = window.Store.info(w.word);
    // 오답 노트 차수가 높은 단어(잘 안 외워지는 단어)를 먼저 낸다
    var score = -(window.Store.tier(w.word) * 10);
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

  function pickWords(modeId, count, restrictTo, words) {
    var pool = eligible(modeId, words);
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
        note: answer.meanings.join(', '),
        usage: usageOf(answer)
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
      note: answer.word + ' — ' + answer.meanings.join(', '),
      usage: usageOf(answer)
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
      note: answer.word + '의 유의어: ' + syns.join(', '),
      usage: usageOf(answer)
    };
  }

  /** ⑤ 짝 맞추기 — 5~6쌍. 같은 품사·비슷한 레벨로 묶어 소거법을 어렵게 만든다 */
  function makeMatch(seed) {
    // 크기와 동료 선택을 고정한다. 같은 seed면 항상 같은 보드가 나온다.
    var size = 5;
    var pool = ALL.filter(function (w) {
      return w.word !== seed.word && w.pos === seed.pos && levelGap(w, seed) <= 1;
    }).sort(function (a, b) {
      return a.word.toLowerCase().localeCompare(b.word.toLowerCase());
    });
    // 뜻이 서로 겹치는 단어끼리는 같은 보드에 올리지 않는다
    var chosen = [seed];
    pool.forEach(function (cand) {
      if (chosen.length >= size) return;
      var clash = chosen.some(function (c) {
        return meaningsOverlap(c, cand) || areSynonyms(c, cand);
      });
      if (!clash) chosen.push(cand);
    });
    if (chosen.length < 4) return null;

    return {
      mode: 'match',
      pairs: boardPairs(chosen),
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
      note: answer.word + ' — ' + answer.meanings.join(', '),
      usage: usageOf(answer)
    };
  }

  /* ── 전치사 구별 ('아닌 것 고르기'의 두 번째 갈래) ──────────
   *
   * "빈칸에 to 가 들어갈 수 없는 것은?"
   *     adverse ___ health          (to)
   *     beneficial ___ health       (to)
   *     central ___ the whole plan  (to)
   *   ★ absent ___ class            (from)   ← 정답
   *
   * 답으로 누르는 것은 전치사가 아니라 구(句)다. 이것이 예전 '연어 고르기'와
   * 결정적으로 다른 점이다. 옛 모드는 to/with/from/about 중에서 고르게 했고,
   * 정답이 to 인 문항이 30%여서 "to 찍기"가 무작위(25%)보다 유리했다.
   * 답이 놓이는 공간을 전치사 14개에서 구(句)로 옮기면 그 경로가 막힌다.
   *
   * 선택지를 단어가 아니라 구로 쓰는 이유 — 단어만 보여주면 to-부정사로
   * 읽힌다. "to 를 쓰지 않는 것은? → curious" 는 curious to know 가 맞는
   * 영어이므로 반박당한다. 뒤에 명사구가 오는 형태로 보여주면 막힌다.
   *
   * 정답 자리와 오답 자리의 안전성이 다르다.
   *   오답 "X 는 to 를 받는다"      → 기록된 대로. 항상 참
   *   정답 "Y 는 to 를 받지 않는다" → prep 목록에 빠진 게 있으면 거짓
   * 그래서 정답 후보는 prep 에 그 전치사가 없어야 한다는 것만으로는 부족하고,
   * prep 자체가 빠짐없이 적혀 있어야 한다(words.js 머리주석 참고).
   */
  function govOf(w) {
    return (w.gov && w.gov.prep && w.gov.prep.length && w.gov.pat) ? w.gov : null;
  }

  /* 어법 해설 한 줄. 모드를 가리지 않고 정답 화면에 띄운다.
     예전에는 이 한 줄을 보려면 '연어 고르기' 모드를 일부러 골라야 해서
     사실상 아무도 못 봤다. 전 모드에 얹으면 노출이 오히려 늘어난다. */
  function usageOf(w) { return (w.gov && w.gov.usage) || null; }

  /** 전치사 구별 문항을 만들 수 있는 단어 목록 */
  function govPool(words) {
    return (words || ALL).filter(govOf);
  }

  function fillBlank(pat) { return pat.replace('{{}}', '___'); }

  /**
   * @param answer  정답이 될 단어 (= 그 전치사를 쓰지 않는 단어)
   * @param exclude 오답으로 쓰지 않을 단어 이름 배열 (정복 모드의 같은 챕터)
   */
  function makeGov(answer, exclude) {
    var g = govOf(answer);
    if (!g) return null;
    var skip = {};
    (exclude || []).forEach(function (w) { skip[String(w).toLowerCase()] = true; });

    // 대표 전치사별로 묶는다. 오답은 "대표가 P" 인 단어만 쓴다 —
    // 두 번째 이후 전치사는 쓸 수 있다는 뜻일 뿐 대표 용법이 아니다.
    var groups = {};
    govPool().forEach(function (w) {
      var wg = govOf(w);
      (groups[wg.prep[0]] = groups[wg.prep[0]] || []).push(w);
    });

    var best = null;
    Object.keys(groups).forEach(function (P) {
      // ★ 정답이 P 를 받을 수 있으면 그 문항은 성립하지 않는다
      if (g.prep.indexOf(P) !== -1) return;
      var mates = groups[P].filter(function (m) {
        return m.word !== answer.word
          && m.pos === answer.pos
          && levelGap(m, answer) <= 1
          && !skip[m.word.toLowerCase()];
      });
      if (mates.length >= 3 && (!best || mates.length > best.mates.length)) {
        best = { prep: P, mates: mates };
      }
    });
    if (!best) return null;

    // 알파벳순 고정 — 같은 단어면 같은 문항이 나온다
    var picked = best.mates.slice().sort(byAlpha).slice(0, 3);
    var rows = picked.concat([answer]).map(function (w) {
      var wg = govOf(w);
      return { opt: fillBlank(wg.pat), prep: wg.prep[0], usage: wg.usage };
    });

    return {
      mode: 'gov', word: answer.word,
      prompt: best.prep,
      promptSub: answer.pos + ' · ' + answer.level,
      options: shuffle(rows.map(function (r) { return r.opt; })),
      answer: fillBlank(g.pat),
      rows: rows,
      /* usage 는 여기서 얹지 않는다 — rows 가 네 선택지의 어법을 각각
         보여주므로(정답 것까지) 같은 줄이 두 번 나온다. */
      note: answer.word + ' — ' + answer.meanings.join(', ')
    };
  }

  /* ── 세션 구성 ────────────────────────────── */

  var BUILDERS = {
    /* 유의어가 3개 미만이면 전치사 문항으로 대신한다.
       오답 복습처럼 단어가 정해진 자리에서 그 단어가 조용히 빠지지 않게 한다. */
    not: function (w, exclude) { return makeNot(w, exclude) || makeGov(w, exclude); },
    match: makeMatch,
    cloze: makeCloze
  };

  /**
   * 세션 생성
   * @param modeId  'mcq' | 'not' | 'match' | 'cloze'
   * @param count   문제 수 (match는 보드 수)
   * @param restrictTo 특정 단어 목록으로 제한 (오답 노트 복습용)
   */
  /**
   * 세션 생성
   * @param modeId  'mcq' | 'not' | 'match' | 'cloze'
   * @param count   문제 수 (match는 보드 수)
   * @param restrictTo 특정 단어 목록으로 제한 (오답 노트 복습용)
   * @param ordered true면 알파벳순 고정 출제 (개별 연습용)
   * @param words 출제 대상을 특정 세트로 제한할 때 그 세트의 단어 배열.
   *   오답 후보는 이것과 무관하게 늘 전 세트에서 뽑는다.
   */
  function buildSession(modeId, count, restrictTo, ordered, words) {
    var out = [];
    var used = {};
    var attempts = 0;
    var mcqDir = 'en-ko';  // ordered일 때 교대 시작을 고정

    // 짝 맞추기 복습은 "대상 단어가 모두 등장"해야 하므로 전용 경로를 쓴다.
    // 일반 출제는 seed 하나를 고르면 나머지 4개를 전체 단어에서 채우기 때문에
    // 복습 대상이 한 보드에 몰리거나 아예 빠지는 일이 생긴다.
    if (modeId === 'match' && restrictTo && restrictTo.length) {
      var targets = restrictTo.map(byWord).filter(Boolean);
      return buildMatchReview(targets);
    }

    // 짝 맞추기 세트 전체 출제 — 단어를 알파벳순으로 나눠 보드를 만든다.
    //
    // seed마다 makeMatch를 부르면 동료 4개를 전체 단어에서 알파벳순으로 뽑기
    // 때문에 앞쪽 단어만 계속 뽑혀 나온다. 실제로 80보드 400슬롯에 등장하는
    // 단어가 81개뿐이었고(abbreviation은 25번), 315단어는 한 번도 나오지 않았다.
    // 목록을 그대로 잘라 쓰면 모든 단어가 정확히 한 번씩 나온다.
    if (modeId === 'match' && ordered) {
      var mPool = eligible('match', words).slice().sort(byAlpha);
      return separateClashes(dealEven(mPool, 5))
        .map(function (slice) {
          return buildMatchFrom(slice.slice().sort(byAlpha), 'normal');
        })
        .filter(Boolean);
    }

    /* '아닌 것 고르기' 세트 전체 출제 — 유의어 문항 뒤에 전치사 문항을 붙인다.
     *
     * 왜 중간에 끼우지 않고 뒤에 붙이나 — 이어풀기 스냅샷이 슬라이드 인덱스로
     * 저장된다(Store.restoreSession). 중간에 넣으면 이미 푼 사람의 답이 다른
     * 문제에 붙는다. 뒤에 붙이면 기존 인덱스가 그대로 살아 있다.
     * 프롬프트 문구가 아예 다르므로("빈칸에 to 가 들어갈 수 없는 것은?")
     * 섞이지 않고 어법 구간으로 읽힌다. */
    if (modeId === 'not' && ordered && !(restrictTo && restrictTo.length)) {
      var synPool = (words || ALL).filter(function (w) {
        return w.syn && w.syn.length >= 3;
      }).slice().sort(byAlpha);
      var out2 = [];
      synPool.forEach(function (w) {
        var q = null;
        for (var a = 0; a < 8 && !q; a++) q = makeNot(w);
        if (q) out2.push(q);
      });
      govPool(words).slice().sort(byAlpha).forEach(function (w) {
        var q = makeGov(w);
        if (q) out2.push(q);
      });
      return out2;
    }

    // ordered 모드: 알파벳순으로 단어를 정렬해 순서대로 문제를 만든다
    if (ordered) {
      var pool = eligible(modeId, words);
      if (restrictTo && restrictTo.length) {
        var allow = {};
        restrictTo.forEach(function (w) { allow[w] = true; });
        pool = pool.filter(function (w) { return allow[w.word]; });
      }
      pool.sort(function (a, b) {
        return a.word.toLowerCase().localeCompare(b.word.toLowerCase());
      });

      for (var i = 0; i < pool.length && out.length < count; i++) {
        var w = pool[i];
        var q = null;

        // 빌더는 오답 선택지를 무작위로 고르다 실패할 수 있다(뽑은 오답의 뜻이
        // 정답과 문자열로 겹치면 문제를 버린다). 한 번만 시도하면 그 단어가 조용히
        // 빠져 세션 길이가 395/396으로 흔들리고, 저장된 답이 인덱스 기준이라
        // 다른 문제에 붙는다. 여러 번 시도해 길이를 고정한다.
        for (var attempt = 0; attempt < 8 && !q; attempt++) {
          q = modeId === 'mcq' ? makeMcq(w, mcqDir) : BUILDERS[modeId](w);
        }
        if (q && modeId === 'mcq') {
          mcqDir = mcqDir === 'en-ko' ? 'ko-en' : 'en-ko';
        }

        if (q) {
          out.push(q);
          if (modeId === 'match') {
            q.words.forEach(function (x) { used[x] = true; });
          }
        }
      }
      return out;
    }

    // 기존 랜덤 모드 (오답 복습 등)
    while (out.length < count && attempts < count * 12) {
      attempts++;
      var need = count - out.length;
      var candidates = pickWords(modeId, need + 8, restrictTo, words);
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
      if (Object.keys(used).length >= eligible(modeId, words).length) break;
    }
    return out;
  }

  function availableCount(modeId, words) {
    return eligible(modeId, words).length;
  }

  /**
   * 지정한 단어들로 짝 맞추기 보드를 만든다 (정복 모드의 도입·졸업 보드).
   * @param wordObjs   보드에 올릴 단어 객체 배열
   * @param recordMode 'none'이면 숙련도를 올리지 않고 노출만 기록한다.
   *                   도입 보드는 뜻을 처음 보여주는 자리이므로 'none'을 쓴다.
   */
  /**
   * 보드에 올릴 단어-뜻 쌍을 만든다.
   *
   * 같은 뜻이 두 번 표시되면 어느 쪽에 연결해도 맞아야 하는데 코드는 한쪽만
   * 정답으로 보기 때문에 문제가 성립하지 않는다 (advert·advertisement 둘 다 "광고",
   * auditory·aural 둘 다 "청각의"). 그래서 이미 쓰인 뜻은 피하고 다음 뜻을 쓴다.
   *
   * 뜻 후보가 적은 단어부터 고르게 한다. 선택지가 하나뿐인 쪽을 먼저 배정해야
   * 충돌을 피할 수 있다. 표시 순서는 renderMatch가 알파벳순으로 다시 잡으므로
   * 여기서의 배정 순서는 화면에 영향을 주지 않는다.
   */
  function boardPairs(wordObjs) {
    var order = wordObjs.map(function (w, i) { return { w: w, i: i }; })
      .sort(function (a, b) {
        var d = a.w.meanings.length - b.w.meanings.length;
        if (d) return d;
        return a.w.word.toLowerCase().localeCompare(b.w.word.toLowerCase());
      });

    var taken = {};
    var chosen = {};
    order.forEach(function (item) {
      var ms = item.w.meanings || [];
      var pick = null;
      for (var k = 0; k < ms.length; k++) {
        var key = normalizeMeaning(ms[k]);
        if (!taken[key]) { pick = ms[k]; taken[key] = true; break; }
      }
      if (pick === null) {
        // 가진 뜻이 전부 이미 쓰였다 — 품사를 덧붙여 구별한다
        pick = (ms[0] || item.w.word) + ' (' + item.w.pos + ')';
        taken[normalizeMeaning(pick)] = true;
      }
      chosen[item.i] = pick;
    });

    return wordObjs.map(function (w, i) {
      var g = govOf(w);
      return {
        word: w.word,
        /* 카드에 찍히는 글자. 지배 전치사가 있으면 함께 보여준다 —
           absent 가 아니라 'absent from' 을 외워야 쓸 수 있다.
           word 는 기록 키(Store.record)이므로 표제어 그대로 두어야 한다. */
        label: g ? w.word + ' ' + g.prep[0] : w.word,
        meaning: chosen[i],
        level: w.level
      };
    });
  }

  function buildMatchFrom(wordObjs, recordMode) {
    if (!wordObjs || wordObjs.length < 2) return null;
    return {
      mode: 'match',
      recordMode: recordMode || 'normal',
      pairs: boardPairs(wordObjs),
      words: wordObjs.map(function (w) { return w.word; })
    };
  }

  /**
   * 첫 번째 뜻이 완전히 같은 단어를 서로 다른 보드로 갈라놓는다.
   *
   * all at once와 all of a sudden은 둘 다 "갑자기"다. 한 보드에 같이 올리면
   * boardPairs가 한쪽을 "불쑥"으로 바꿔 표시는 구별되지만, 사용자가 어느 쪽에
   * 연결해도 뜻으로는 맞기 때문에 억울하게 틀린다. 같은 처지가 advert·advertisement,
   * auditory·aural로 396단어 중 세 쌍이다.
   *
   * 철자만 닮은 단어(amiable·amicable, apply·apply for)는 갈라놓지 않는다.
   * 표시되는 뜻이 분명히 다르고, 오히려 형태를 구별하는 훈련이 된다.
   *
   * 교환은 앞쪽 보드부터 순서대로 훑어 결정하므로 결과가 매번 같다.
   */
  function separateClashes(groups) {
    /**
     * 한 보드에 같이 두면 안 되는 사이인가.
     *
     * 예전에는 "첫 뜻이 완전히 같을 때"만 갈랐다. C 섹션을 넣으면서 그 기준이
     * 너무 좁다는 것이 드러났다. concentrate(집중하다)·concentration(집중),
     * calculate(계산하다)·calculation(계산)처럼 어근이 같은 파생어가 40가족쯤
     * 되는데, 뜻 문자열이 정확히 같지는 않아 그대로 통과한다. 두 카드가 나란히
     * 놓이면 어느 쪽에 연결해도 뜻으로는 맞아 억울하게 틀린다.
     *
     * 그래서 세 가지로 넓힌다.
     *   ① 뜻이 겹친다        집중하다 ↔ 집중
     *   ② 서로 유의어다      cancel ↔ call off
     *   ③ 어근이 같다        calculate ↔ calculation
     *
     * ③은 공통 접두사 6글자 이상만 본다. amiable·amicable(4글자)처럼 철자만
     * 닮은 단어는 그대로 한 보드에 둔다 — 뜻이 분명히 다르고 형태를 구별하는
     * 훈련이 되기 때문이다. 6글자면 우연이 아니라 같은 어근이다.
     *
     * 가를 상대를 못 찾으면 그대로 둔다(아래 교환 루프가 건너뛴다). 즉 이 기준을
     * 넓혀도 보드가 만들어지지 않는 일은 없다.
     */
    function sameStem(a, b) {
      var x = a.word.toLowerCase(), y = b.word.toLowerCase();
      var n = 0;
      while (n < x.length && n < y.length && x[n] === y[n]) n++;
      return n >= 6;
    }
    function sameConcept(a, b) {
      if (a === b) return false;
      if (normalizeMeaning(a.meanings[0]) === normalizeMeaning(b.meanings[0])) return true;
      return meaningsOverlap(a, b) || areSynonyms(a, b) || sameStem(a, b);
    }
    function hasClash(list, w) {
      for (var i = 0; i < list.length; i++) {
        if (sameConcept(list[i], w)) return true;
      }
      return false;
    }

    for (var g = 0; g < groups.length; g++) {
      for (var i = 0; i < groups[g].length; i++) {
        var w = groups[g][i];
        var rest = groups[g].filter(function (x) { return x !== w; });
        if (!hasClash(rest, w)) continue;

        var swapped = false;
        // 가까운 보드부터 교환 상대를 찾는다
        for (var off = 1; off < groups.length && !swapped; off++) {
          var targets = [g + off, g - off];
          for (var t = 0; t < targets.length && !swapped; t++) {
            var h = targets[t];
            if (h < 0 || h >= groups.length) continue;
            for (var j = 0; j < groups[h].length; j++) {
              var v = groups[h][j];
              var hRest = groups[h].filter(function (x) { return x !== v; });
              // 교환 후 양쪽 보드 모두 충돌이 없어야 한다
              if (hasClash(hRest, w) || hasClash(rest, v)) continue;
              groups[g][i] = v;
              groups[h][j] = w;
              swapped = true;
              break;
            }
          }
        }
      }
    }
    return groups;
  }

  /**
   * 알파벳순 목록을 보드(4~6쌍)로 나눈다. 자르지 않고 카드처럼 번갈아 나눠준다.
   *
   * 앞에서 5개씩 잘라 쓰면 알파벳이 붙어 있는 파생어가 한 보드에 몰린다.
   * 실제로 accommodate·accommodation·accompany·accomplish가 한 보드에 있었고,
   * abrupt·abruptly, absent·absent-minded, abolish·abolition처럼 어근이 같은
   * 조합이 개별 연습 130쌍, 정복 모드 138쌍이었다. 뜻은 서로 달라도 화면에서는
   * 거의 같은 단어가 여러 줄 늘어선 것처럼 보여 문제가 지저분해진다.
   *
   * 번갈아 나눠주면 한 보드의 단어가 알파벳 전체에 흩어져 겹치는 어근이 없어진다.
   * 목록 순서가 고정이므로 결과도 매번 같다.
   *
   *   자르기: [1 2 3 4 5][6 7 8 9 10]   ← 이웃끼리 뭉친다
   *   딜링:   [1 3 5 7 9][2 4 6 8 10]   ← 흩어진다
   */
  function dealEven(list, target) {
    var n = list.length;
    if (n < 2) return [];
    if (n <= 6) return [list.slice()];

    var count = Math.max(1, Math.round(n / target));
    while (count > 1 && n / count < 4) count--;
    while (count < n && n / count > 6) count++;

    var out = [];
    for (var i = 0; i < count; i++) out.push([]);
    for (var j = 0; j < n; j++) out[j % count].push(list[j]);
    return out;
  }

  function byAlpha(a, b) {
    return a.word.toLowerCase().localeCompare(b.word.toLowerCase());
  }

  /**
   * 오답 복습용 짝 맞추기 보드를 만든다.
   *
   * 일반 출제와 달리 "대상 단어가 빠짐없이 한 번씩 등장"하는 것이 목적이다.
   * 그래서 대상 단어를 알파벳순으로 5개씩 끊어 보드를 만들고,
   * 마지막 조각이 4쌍에 못 미치면 같은 품사·비슷한 레벨의 단어로 채운다.
   * (2~3쌍 보드는 소거법으로 그냥 풀려 복습 효과가 없다)
   *
   * @param wordObjs 복습 대상 단어 객체 배열
   */
  function buildMatchReview(wordObjs) {
    if (!wordObjs || !wordObjs.length) return [];
    var ordered = wordObjs.slice().sort(byAlpha);
    var boards = [];

    // 이미 어느 보드에든 올라간 단어. 복습 대상은 모두 미리 예약해 둔다.
    // 그러지 않으면 보드를 채우는 단어가 다른 보드의 대상과 겹쳐
    // 같은 단어가 두 보드에 나온다.
    var usedAll = {};
    ordered.forEach(function (w) { usedAll[w.word] = true; });

    var groups = dealEven(ordered, 5);
    if (!groups.length) groups = [ordered.slice()];
    groups = separateClashes(groups);

    groups.forEach(function (slice) {
      if (slice.length < 4) {
        // 4쌍에 못 미치면 같은 품사·비슷한 레벨의 단어로 채운다
        var seed = slice[0];
        var base = slice.slice();
        var fillers = ALL.filter(function (w) {
          if (usedAll[w.word]) return false;
          if (w.pos !== seed.pos) return false;
          if (levelGap(w, seed) > 1) return false;
          for (var k = 0; k < base.length; k++) {
            if (meaningsOverlap(base[k], w) || areSynonyms(base[k], w)) return false;
          }
          return true;
        }).sort(byAlpha);
        while (slice.length < 4 && fillers.length) {
          var f = fillers.shift();
          usedAll[f.word] = true;
          slice.push(f);
        }
      }

      if (slice.length < 2) return;
      var board = buildMatchFrom(slice.slice().sort(byAlpha), 'normal');
      if (board) boards.push(board);
    });

    boards.forEach(function (b, idx) {
      b.boardTitle = '짝 맞추기 ' + (idx + 1) + ' / ' + boards.length;
    });
    return boards;
  }

  return {
    MODES: MODES,
    /* 전 세트 합집합 — 단어 조회·오답 후보의 기준.
       세트와 무관하게 "모든 단어"를 봐야 하는 곳에서 쓴다. */
    ALL: ALL,
    buildSession: buildSession,
    availableCount: availableCount,
    eligible: eligible,
    shuffle: shuffle,
    rankByPriority: rankByPriority,
    buildMatchFrom: buildMatchFrom,
    buildMatchReview: buildMatchReview,
    separateClashes: separateClashes,
    dealEven: dealEven,
    /* 정복 모드가 단계별로 직접 호출하는 개별 빌더 */
    build: {
      mcq: makeMcq,
      not: makeNot,
      cloze: makeCloze,
      gov: makeGov,
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
