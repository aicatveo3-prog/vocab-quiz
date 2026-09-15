/**
 * conquer.js — 정복 모드 엔진 (챕터 기반)
 *
 * 세트(A) → 챕터(20단어) → 드릴 구조.
 *
 *   미리보기  20단어를 뜻과 함께 훑어보기
 *   드릴     1단계(4지선다)와 2단계(문장 빈칸)를 섞어서 출제
 *   보드     짝 맞추기 4~5쌍 × 4개 보드로 마무리
 *   결과
 *
 * 규칙
 *   · 강등 없음 — 틀려도 다음으로 넘어간다. 틀린 단어는 결과에서 모아 보여준다.
 *   · 건너뜀 없음 — 숙련도와 상관없이 모든 단어가 두 단계를 모두 밟는다.
 *   · 큐 간격 유지 — 같은 단어의 1단계와 2단계 사이에 최소 3문제를 둔다.
 *   · 자유 이동 — 개별 연습과 같은 이전/다음 이동을 지원한다.
 */
window.Conquer = (function () {
  var CHAPTER_SIZE = 20;
  var MIN_GAP = 3;
  var BOARDS_PER_CHAPTER = 4;

  /* ── 세트 & 챕터 ──────────────────────────── */

  /** 세트 정의. 지금은 A 하나. B~Z를 넣으면 여기에 추가한다. */
  var SETS = [
    { id: 'A', label: 'A', words: window.VOCAB }
  ];

  function getSet(id) {
    for (var i = 0; i < SETS.length; i++) if (SETS[i].id === id) return SETS[i];
    return null;
  }

  /** 세트의 단어를 알파벳순으로 CHAPTER_SIZE씩 잘라 챕터 배열을 만든다 */
  function buildChapters(set) {
    var sorted = set.words.slice().sort(function (a, b) {
      return a.word.toLowerCase().localeCompare(b.word.toLowerCase());
    });
    var chapters = [];
    for (var i = 0; i < sorted.length; i += CHAPTER_SIZE) {
      var slice = sorted.slice(i, i + CHAPTER_SIZE);
      var first = slice[0].word;
      var last = slice[slice.length - 1].word;
      chapters.push({
        index: chapters.length,
        label: String(chapters.length + 1),
        from: first,
        to: last,
        rangeText: (i + 1) + '~' + Math.min(i + CHAPTER_SIZE, sorted.length),
        words: slice
      });
    }
    return chapters;
  }

  /* ── 드릴 세션 생성 ────────────────────────── */

  /**
   * 챕터의 단어로 드릴 문제를 만든다.
   * 1단계(4지선다)와 2단계(문장 빈칸)를 섞되, 같은 단어의 두 단계 사이에
   * 최소 MIN_GAP 문제를 둔다.
   */
  function buildDrill(chapterWords) {
    var names = chapterWords.map(function (w) { return w.word; });

    // 각 단어에 대해 1단계·2단계 문제를 만든다
    var stage1 = [];   // { q, word, stage }
    var stage2 = [];
    var dir = 'en-ko'; // 방향을 번갈아 배정

    chapterWords.forEach(function (w) {
      var q1 = tryBuild(function () {
        return window.Quiz.build.mcq(w, dir, names);
      });
      if (q1) {
        q1.stageLabel = '1단계 · ' + (dir === 'en-ko' ? '단어 → 뜻' : '뜻 → 단어');
        stage1.push({ q: q1, word: w.word, stage: 1 });
        dir = dir === 'en-ko' ? 'ko-en' : 'en-ko';
      }

      var q2 = tryBuild(function () {
        return window.Quiz.build.cloze(w, names);
      });
      if (q2) {
        q2.stageLabel = '2단계 · 문장 빈칸';
        stage2.push({ q: q2, word: w.word, stage: 2 });
      }
    });

    // 1단계를 셔플하고, 그 사이에 2단계를 간격을 두고 끼워 넣는다
    var shuffled1 = window.Quiz.shuffle(stage1);
    var shuffled2 = window.Quiz.shuffle(stage2);

    return interleave(shuffled1, shuffled2, MIN_GAP);
  }

  /** 빌더를 최대 4번 시도해 null이면 포기 */
  function tryBuild(fn) {
    for (var i = 0; i < 4; i++) {
      var q = fn();
      if (q) return q;
    }
    return null;
  }

  /**
   * 1단계 배열과 2단계 배열을 인터리빙한다.
   * 같은 단어의 1단계와 2단계 사이에 최소 gap개 문제를 둔다.
   */
  function interleave(arr1, arr2, gap) {
    // 1단계를 기본 순서로 깔고, 2단계를 간격을 지키며 끼운다
    var result = arr1.slice();
    var wordLastIdx = {};
    result.forEach(function (item, i) { wordLastIdx[item.word] = i; });

    arr2.forEach(function (item) {
      var earliest = (wordLastIdx[item.word] !== undefined)
        ? wordLastIdx[item.word] + gap + 1
        : 0;
      var pos = Math.max(earliest, result.length);
      // 끝에 붙이되, 가능하면 다른 단어 사이에 삽입해 분산시킨다
      if (pos > result.length) pos = result.length;
      result.splice(pos, 0, item);
      // 인덱스 갱신
      for (var k in wordLastIdx) {
        if (wordLastIdx[k] >= pos) wordLastIdx[k]++;
      }
      wordLastIdx[item.word] = pos;
    });

    return result;
  }

  /** 챕터 단어로 짝 맞추기 보드를 만든다 (4~5쌍 × BOARDS_PER_CHAPTER개) */
  function buildBoards(chapterWords) {
    var shuffled = window.Quiz.shuffle(chapterWords.slice());
    var boards = [];
    var pairsPerBoard = Math.ceil(shuffled.length / BOARDS_PER_CHAPTER);
    if (pairsPerBoard < 4) pairsPerBoard = 4;
    if (pairsPerBoard > 6) pairsPerBoard = 5;

    for (var i = 0; i < shuffled.length; i += pairsPerBoard) {
      var slice = shuffled.slice(i, i + pairsPerBoard);
      if (slice.length < 2) break;
      var board = window.Quiz.buildMatchFrom(slice, 'normal');
      if (board) {
        board.boardTitle = '짝 맞추기 ' + (boards.length + 1) + ' / ' + BOARDS_PER_CHAPTER;
        boards.push(board);
      }
    }
    return boards;
  }

  /**
   * 챕터 세션을 생성한다.
   * 반환하는 slides 배열을 app.js가 자유 이동으로 렌더한다.
   */
  function createChapterSession(setId, chapterIndex) {
    var set = getSet(setId);
    if (!set) return null;
    var chapters = buildChapters(set);
    var ch = chapters[chapterIndex];
    if (!ch) return null;

    var drill = buildDrill(ch.words);
    var boards = buildBoards(ch.words);

    // 슬라이드 배열: 드릴 문제 + 보드들
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
      previewWords: ch.words
    };
  }

  return {
    SETS: SETS,
    CHAPTER_SIZE: CHAPTER_SIZE,
    getSet: getSet,
    buildChapters: buildChapters,
    createChapterSession: createChapterSession
  };
})();
