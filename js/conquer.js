/**
 * conquer.js — 정복 모드 엔진 (챕터 기반)
 *
 * 세트(A) → 챕터(20단어) → 드릴 구조.
 *
 *   미리보기  20단어를 뜻과 함께 훑어보기
 *   드릴     5개 모드를 섞어서 출제:
 *            1단계 4지선다 (영↔한)
 *            2단계 아닌 것 고르기 (syn≥3인 단어만)
 *            3단계 문장 빈칸 (예문 보유 단어만)
 *            4단계 연어 고르기 (col 보유 단어만)
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

  var SETS = [
    { id: 'A', label: 'A', words: window.VOCAB }
  ];

  function getSet(id) {
    for (var i = 0; i < SETS.length; i++) if (SETS[i].id === id) return SETS[i];
    return null;
  }

  function buildChapters(set) {
    var sorted = set.words.slice().sort(function (a, b) {
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
    var stages = [[], [], [], []];   // 0=4지선다, 1=아닌것, 2=문장빈칸, 3=연어
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

      // 4단계: 연어 고르기 (col 보유 단어만)
      if (w.col && w.col.length) {
        var q4 = tryBuild(function () { return window.Quiz.build.colloc(w, names); });
        if (q4) {
          q4.stageLabel = '4단계 · 연어 고르기';
          stages[3].push({ q: q4, word: w.word, stage: 4 });
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
        // 간격을 지킬 수 있는 게 없으면 가장 앞의 것을 강제 배치
        result.push(queue.shift());
      }
    }
    // 남은 게 있으면 끝에 붙인다
    while (queue.length) result.push(queue.shift());
    return result;
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

    for (var i = 0; i < ordered.length; i += pairsPerBoard) {
      var slice = ordered.slice(i, i + pairsPerBoard);
      if (slice.length < 2) break;
      var board = window.Quiz.buildMatchFrom(slice, 'normal');
      if (board) {
        board.boardTitle = '짝 맞추기 ' + (boards.length + 1) + ' / ' + BOARDS_PER_CHAPTER;
        boards.push(board);
      }
    }
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
   * 챕터 드릴과 동일한 구성(4지선다 → 아닌 것 → 문장 빈칸 → 연어 → 짝 맞추기)을
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
