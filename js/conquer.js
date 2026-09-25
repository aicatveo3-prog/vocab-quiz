/**
 * conquer.js — 정복 모드 엔진 (챕터 기반)
 *
 * 세트(A) → 챕터(20단어) → 드릴 구조.
 *
 *   미리보기  20단어를 뜻과 함께 훑어보기
 *   드릴     여러 형식을 섞어서 출제:
 *            1단계 4지선다 (영↔한)
 *            2단계 아닌 것 고르기 (syn≥3인 단어만)
 *            3단계 문장 빈칸 (예문 보유 단어만)
 *   보드     짝 맞추기 4~5쌍 × 4개 보드로 마무리
 *   결과
 *
 * 규칙
 *   · 강등 없음 — 틀려도 다음으로 넘어간다.
 *   · 건너뜀 없음 — 숙련도와 상관없이 모든 단어가 가능한 단계를 밟는다.
 *   · 큐 간격 유지 — 같은 단어가 재등장하기까지 최소 3문제를 둔다.
 *   · 자유 이동 — 이전/다음 + 스크러버.
 */
window.Conquer = (function () {
  var CHAPTER_SIZE = 20;
  var MIN_GAP = 3;
  var BOARDS_PER_CHAPTER = 4;

  /* ── 세트 & 챕터 ──────────────────────────── */

  /* 세트 레지스트리. 정복 모드와 개별 연습이 함께 쓴다.
     여기에 한 줄 추가하면 세트 목록·챕터 목록·개별 연습에 모두 반영된다. */
  var SETS = [
    { id: 'A', label: 'A', words: window.VOCAB },
    { id: 'B', label: 'B', words: window.VOCAB_B || [] },
    { id: 'C', label: 'C', words: window.VOCAB_C || [] },
    { id: 'D', label: 'D', words: window.VOCAB_D || [] },
    { id: 'E', label: 'E', words: window.VOCAB_E || [] },
    { id: 'F', label: 'F', words: window.VOCAB_F || [] },
    { id: 'G', label: 'G', words: window.VOCAB_G || [] },
    { id: 'H', label: 'H', words: window.VOCAB_H || [] },
    { id: 'I', label: 'I', words: window.VOCAB_I || [] },
    { id: 'J', label: 'J', words: window.VOCAB_J || [] },
    { id: 'K', label: 'K', words: window.VOCAB_K || [] },
    { id: 'L', label: 'L', words: window.VOCAB_L || [] },
    { id: 'M', label: 'M', words: window.VOCAB_M || [] },
    { id: 'N', label: 'N', words: window.VOCAB_N || [] },
    { id: 'O', label: 'O', words: window.VOCAB_O || [] },
    { id: 'P', label: 'P', words: window.VOCAB_P || [] },
    { id: 'Q', label: 'Q', words: window.VOCAB_Q || [] },
    { id: 'R', label: 'R', words: window.VOCAB_R || [] },
    { id: 'S', label: 'S', words: window.VOCAB_S || [] },
    { id: 'T', label: 'T', words: window.VOCAB_T || [] },
    { id: 'U', label: 'U', words: window.VOCAB_U || [] },
    { id: 'V', label: 'V', words: window.VOCAB_V || [] },
    { id: 'W', label: 'W', words: window.VOCAB_W || [] },
    /* X 로 시작하는 수능 낱말은 없어서 세트를 두지 않는다 */
    { id: 'Y', label: 'Y', words: window.VOCAB_Y || [] },
    { id: 'Z', label: 'Z', words: window.VOCAB_Z || [] }
  ];

  function getSet(id) {
    for (var i = 0; i < SETS.length; i++) if (SETS[i].id === id) return SETS[i];
    return null;
  }

  function buildChapters(set) {
    // 버전(에디션)이 종합이 아니면 이 버전에 속한 단어만 챕터로 묶는다.
    // 세트 목록·챕터 목록·챕터 세션이 모두 이 함수를 거치므로 한 곳만 걸러도
    // 정복 흐름 전체가 버전을 따른다.
    var src = (window.Edition ? window.Edition.filter(set.words) : set.words);
    var sorted = src.slice().sort(function (a, b) {
      return a.word.toLowerCase().localeCompare(b.word.toLowerCase());
    });
    var chapters = [];
    for (var i = 0; i < sorted.length; i += CHAPTER_SIZE) {
      var slice = sorted.slice(i, i + CHAPTER_SIZE);
      chapters.push({
        index: chapters.length,
        label: String(chapters.length + 1),
        from: slice[0].word,
        to: slice[slice.length - 1].word,
        rangeText: (i + 1) + '~' + Math.min(i + CHAPTER_SIZE, sorted.length),
        words: slice
      });
    }

    /* 마지막 챕터가 너무 짧으면 앞 챕터에 합친다.
       짝 맞추기 보드는 4쌍 이상이어야 소거법으로 풀리지 않는다.
       2~3단어 챕터는 보드가 2~3쌍이라 사실상 퍼즐이 안 된다.
       기준을 MIN_TAIL(4) 로 잡으면, 기존 A~G 세트의 나머지가
       전부 6 이상이라 하나도 영향받지 않는다. */
    var MIN_TAIL = 4;
    if (chapters.length >= 2) {
      var last = chapters[chapters.length - 1];
      if (last.words.length < MIN_TAIL) {
        var prev = chapters[chapters.length - 2];
        prev.words = prev.words.concat(last.words);
        prev.to = last.to;
        var prevStart = (prev.index) * CHAPTER_SIZE + 1;
        prev.rangeText = prevStart + '~' + (prevStart + prev.words.length - 1);
        chapters.pop();
      }
    }

    return chapters;
  }

  /* ── 드릴 세션 생성 ────────────────────────── */

  function tryBuild(fn) {
    for (var i = 0; i < 4; i++) { var q = fn(); if (q) return q; }
    return null;
  }

  /**
   * 챕터의 단어로 5개 모드 드릴을 만든다.
   * 각 단어는 데이터가 허용하는 만큼의 단계를 밟는다.
   */
  function buildDrill(chapterWords) {
    var names = chapterWords.map(function (w) { return w.word; });
    var stages = [[], [], []];   // 0=4지선다, 1=아닌것, 2=문장빈칸
    var dir = 'en-ko';

    chapterWords.forEach(function (w) {
      // 1단계: 4지선다 (모든 단어)
      var q1 = tryBuild(function () { return window.Quiz.build.mcq(w, dir, names); });
      if (q1) {
        q1.stageLabel = '1단계 · ' + (dir === 'en-ko' ? '단어 → 뜻' : '뜻 → 단어');
        stages[0].push({ q: q1, word: w.word, stage: 1 });
        dir = dir === 'en-ko' ? 'ko-en' : 'en-ko';
      }

      // 2단계: 아닌 것 고르기 (syn≥3인 단어만)
      if (w.syn && w.syn.length >= 3) {
        var q2 = tryBuild(function () { return window.Quiz.build.not(w, names); });
        if (q2) {
          q2.stageLabel = '2단계 · 아닌 것 고르기';
          stages[1].push({ q: q2, word: w.word, stage: 2 });
        }
      }



      // 3단계: 문장 빈칸 (예문 보유 단어만)
      if (w.ex && w.ex.length) {
        var q3 = tryBuild(function () { return window.Quiz.build.cloze(w, names); });
        if (q3) {
          q3.stageLabel = '3단계 · 문장 빈칸';
          stages[2].push({ q: q3, word: w.word, stage: 3 });
        }
      }

    });

    // 모든 단계의 문제를 합친 뒤, 같은 단어 사이 간격을 유지하면서 배치한다.
    // 단계 번호가 낮은 것이 먼저 나오도록 단계순 정렬 후 라운드 로빈으로 배분한다.
    var all = [];
    for (var s = 0; s < stages.length; s++) {
      stages[s].forEach(function (item) { all.push(item); });
    }
    // 단계순 정렬 (같은 단계 안에서는 알파벳순 고정)
    all.sort(function (a, b) {
      if (a.stage !== b.stage) return a.stage - b.stage;
      return a.word.toLowerCase().localeCompare(b.word.toLowerCase());
    });

    return spreadByGap(all, MIN_GAP);
  }

  /**
   * 문제 배열을 재배치해 같은 단어 사이 간격을 최소 gap으로 유지한다.
   * 단계 순서(낮은→높은)를 존중하면서 간격을 지킨다.
   */
  function spreadByGap(items, gap) {
    var result = [];
    var queue = items.slice();    // 아직 배치하지 않은 문제
    var maxPasses = queue.length * 3;
    var pass = 0;

    while (queue.length > 0 && pass < maxPasses) {
      pass++;
      var placed = false;
      for (var i = 0; i < queue.length; i++) {
        if (canPlace(result, queue[i].word, gap)) {
          result.push(queue.splice(i, 1)[0]);
          placed = true;
          break;
        }
      }
      if (!placed) {
        // 간격을 지킬 수 있는 게 없어도, 최소한 바로 앞 문제와 같은 단어는 피한다.
        // 같은 단어가 연달아 나오면 앞 문제에서 본 답이 그대로 힌트가 된다.
        var prev = result.length ? result[result.length - 1].word : null;
        var idx = 0;
        for (var k = 0; k < queue.length; k++) {
          if (queue[k].word !== prev) { idx = k; break; }
        }
        result.push(queue.splice(idx, 1)[0]);
      }
    }
    // 남은 게 있으면 끝에 붙인다
    while (queue.length) result.push(queue.shift());
    return fixAdjacent(result, gap);
  }

  /**
   * 같은 단어가 바로 연달아 놓인 자리를 교환으로 푼다.
   *
   * 배치 단계에서는 목록의 끝에 이르면 남은 문제가 하나뿐이라 간격을 지킬 수
   * 없다(챕터 5의 adverse가 아닌 것 → 문장 빈칸으로 붙어 있었다). 다 배치한 뒤
   * 자리를 바꾸면 해결된다. 가까운 자리부터 순서대로 시도하므로 결과가 매번 같다.
   */
  function fixAdjacent(list, gap) {
    /** 같은 단어가 바로 붙어 있는 첫 자리. 없으면 -1 */
    function firstAdjacency(l) {
      for (var k = 1; k < l.length; k++) {
        if (l[k].word === l[k - 1].word) return k;
      }
      return -1;
    }

    /** 모든 단어의 단계가 1 → 2 → 3 순서인지.
        자리를 옮기다 문장 빈칸(3단계)이 4지선다(1단계)보다 먼저 나오면 안 된다. */
    function stagesOk(l) {
      var prev = {};
      for (var k = 0; k < l.length; k++) {
        var w = l[k].word;
        var st = typeof l[k].stage === 'number' ? l[k].stage : 0;
        if (prev[w] !== undefined && st < prev[w]) return false;
        prev[w] = st;
      }
      return true;
    }

    /** from 자리의 문제를 빼서 to 자리에 넣은 새 배열 */
    function moved(l, from, to) {
      var next = l.slice();
      var item = next.splice(from, 1)[0];
      next.splice(to > from ? to - 1 : to, 0, item);
      return next;
    }

    var out = list;
    var i = firstAdjacency(out);
    var guard = 0;

    while (i !== -1 && guard++ < 40) {
      // 뒤쪽 문제를 더 뒤로, 앞쪽 문제를 더 앞으로 옮겨 본다.
      // 교환이 아니라 이동이라 단계 순서를 지킬 여지가 넓다.
      var plans = [];
      for (var t = i + gap; t <= out.length; t++) plans.push([i, t]);
      for (var t2 = i - 1 - gap; t2 >= 0; t2--) plans.push([i - 1, t2]);

      var fixed = null;
      for (var p = 0; p < plans.length && !fixed; p++) {
        var cand = moved(out, plans[p][0], plans[p][1]);
        if (firstAdjacency(cand) === -1 && stagesOk(cand)) fixed = cand;
      }
      if (!fixed) break;          // 어떻게 해도 안 되면 그대로 둔다
      out = fixed;
      i = firstAdjacency(out);
    }
    return out;
  }

  function canPlace(result, word, gap) {
    var start = Math.max(0, result.length - gap);
    for (var i = start; i < result.length; i++) {
      if (result[i].word === word) return false;
    }
    return true;
  }

  function buildBoards(chapterWords) {
    var ordered = chapterWords.slice().sort(function (a, b) {
      return a.word.toLowerCase().localeCompare(b.word.toLowerCase());
    });
    var boards = [];
    var pairsPerBoard = Math.ceil(ordered.length / BOARDS_PER_CHAPTER);
    if (pairsPerBoard < 4) pairsPerBoard = 4;
    if (pairsPerBoard > 6) pairsPerBoard = 5;

    // 알파벳순으로 5개씩 잘라 쓰면 챕터 6처럼 advertise·advertisement·advertising이
    // 한 보드에 몰린다. 번갈아 나눠줘야 어근이 겹치지 않는다.
    var groups = window.Quiz.dealEven(ordered, pairsPerBoard);

    // 뜻이 완전히 같은 단어끼리는 같은 보드에 두지 않는다
    groups = window.Quiz.separateClashes(groups);

    groups.forEach(function (slice) {
      var sorted = slice.slice().sort(function (a, b) {
        return a.word.toLowerCase().localeCompare(b.word.toLowerCase());
      });
      var board = window.Quiz.buildMatchFrom(sorted, 'normal');
      if (board) {
        board.boardTitle = '짝 맞추기 ' + (boards.length + 1) + ' / ' + groups.length;
        boards.push(board);
      }
    });
    return boards;
  }

  function createChapterSession(setId, chapterIndex) {
    var set = getSet(setId);
    if (!set) return null;
    var chapters = buildChapters(set);
    var ch = chapters[chapterIndex];
    if (!ch) return null;

    var drill = buildDrill(ch.words);
    var boards = buildBoards(ch.words);

    var slides = [];
    drill.forEach(function (item) {
      slides.push({
        q: item.q, word: item.word, stage: item.stage,
        answered: false, chosen: null, correct: null,
        headline: null, boardStats: null
      });
    });
    boards.forEach(function (board) {
      slides.push({
        q: board, word: null, stage: 'board',
        answered: false, chosen: null, correct: null,
        headline: null, boardStats: null
      });
    });

    return {
      setId: setId,
      chapter: ch,
      slides: slides,
      previewWords: ch.words,
      isReview: false,
      headTitle: '정복 · 챕터 ' + ch.label,
      previewTitle: '챕터 ' + ch.label + ' · ' + ch.words.length + '단어',
      previewNote: '충분히 훑어본 뒤 시작하세요',
      resultTitle: '챕터 ' + ch.label + ' 완료'
    };
  }

  /**
   * 오답 복습 세션 — 지정한 단어들만 정복 모드와 같은 방식으로 다시 출제한다.
   *
   * 챕터 드릴과 동일한 구성(4지선다 → 아닌 것 → 문장 빈칸 → 짝 맞추기)을
   * 쓰되, 대상이 챕터 20단어가 아니라 "틀린 단어 목록"이다.
   * 데이터가 없는 단계는 자연히 건너뛰므로 단어 수가 적어도 문제없이 만들어진다.
   *
   * @param wordObjs 복습 대상 단어 객체 배열
   * @param title    화면에 표시할 이름 (예: '챕터 3', '오답 노트')
   */
  function createReviewSession(wordObjs, title) {
    if (!wordObjs || !wordObjs.length) return null;

    var ordered = wordObjs.slice().sort(function (a, b) {
      return a.word.toLowerCase().localeCompare(b.word.toLowerCase());
    });

    var drill = buildDrill(ordered);
    // 짝 맞추기는 대상 단어가 빠짐없이 등장하는 복습 전용 보드를 쓴다
    var boards = window.Quiz.buildMatchReview(ordered);

    var slides = [];
    drill.forEach(function (item) {
      slides.push({
        q: item.q, word: item.word, stage: item.stage,
        answered: false, chosen: null, correct: null,
        headline: null, boardStats: null
      });
    });
    boards.forEach(function (board) {
      slides.push({
        q: board, word: null, stage: 'board',
        answered: false, chosen: null, correct: null,
        headline: null, boardStats: null
      });
    });

    if (!slides.length) return null;

    var label = title || '오답';
    return {
      setId: null,
      chapter: { label: label, words: ordered, index: -1 },
      slides: slides,
      previewWords: ordered,
      isReview: true,
      reviewWords: ordered.map(function (w) { return w.word; }),
      headTitle: '오답 복습 · ' + label,
      previewTitle: label + ' · ' + ordered.length + '단어',
      previewNote: '틀렸던 단어입니다. 뜻을 다시 확인한 뒤 시작하세요',
      resultTitle: label + ' 오답 복습 완료'
    };
  }

  return {
    SETS: SETS,
    CHAPTER_SIZE: CHAPTER_SIZE,
    getSet: getSet,
    buildChapters: buildChapters,
    createChapterSession: createChapterSession,
    createReviewSession: createReviewSession
  };
})();
