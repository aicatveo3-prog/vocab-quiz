/**
 * conquer.js — 정복 모드 엔진
 *
 * 단어 5개를 한 묶음으로 잡고, 그 묶음이 단계를 차례로 통과하게 만든다.
 *
 *     1단계  4지선다 (영↔한 양방향)
 *     2단계  문장 빈칸        (문맥 적용)
 *   [마지막] 짝 맞추기 보드 — 묶음 전체 마무리 확인
 *
 * 미리보기가 첫 노출을 담당하므로 도입 보드는 두지 않고,
 * 짝 맞추기는 묶음의 마지막 관문으로만 쓴다.
 *
 * 핵심 설계
 *   · 큐 기반 간격 배치 — 같은 단어가 재등장하기까지 최소 3문제를 둔다.
 *     단계를 연달아 물으면 직전 답이 단기기억에 남아 그냥 풀리고 학습이 안 된다.
 *   · 틀리면 한 단계 강등 — 다시 통과해야 올라간다. 모르는 단어가 자동으로 반복된다.
 *   · 이미 아는 단어는 1단계를 건너뛴다 (숙련도 4↑ → 2단계부터).
 *   · 묶음은 예문을 가진 단어로 구성해 2단계까지 온전히 진행되게 한다.
 */
window.Conquer = (function () {
  var MAX_STAGE = 2;
  var MIN_GAP = 3;   // 같은 단어 재등장 최소 간격 (문제 수)
  var DEMOTE = 1;    // 오답 시 내려가는 단계 수

  var STAGES = {
    1: { label: '4지선다' },
    2: { label: '문장 빈칸' }
  };

  /** 4지선다는 방향에 따라 난이도가 크게 달라지므로 라벨에 방향을 밝힌다 */
  function stageLabel(stage, dir) {
    if (stage === 1) return '1단계 · ' + (dir === 'en-ko' ? '단어 → 뜻' : '뜻 → 단어');
    return stage + '단계 · ' + STAGES[stage].label;
  }

  /** 숙련도가 높은 단어는 1단계를 건너뛴다 */
  function startStage(word) {
    return window.Store.mastery(word) >= 4 ? 2 : 1;
  }

  /** 2단계(문장 빈칸)까지 진행 가능한 단어만 후보로 삼는다 */
  function blockCandidates() {
    return window.VOCAB.filter(function (w) {
      return w.ex && w.ex.length;
    });
  }

  /**
   * 묶음 구성 — 같은 품사, 레벨 ±1, 서로 뜻이 겹치지 않는 단어끼리 모은다.
   * 뜻이 겹치는 단어를 같이 넣으면 짝 맞추기 보드가 모호해진다.
   */
  function pickBlock(size) {
    var iv = window.Quiz._internals;
    var ranked = window.Quiz.rankByPriority(blockCandidates());

    function tryFill(seed, samePos) {
      var chosen = [seed];
      for (var j = 0; j < ranked.length && chosen.length < size; j++) {
        var c = ranked[j];
        if (c === seed) continue;
        if (samePos && c.pos !== seed.pos) continue;
        // 레벨 차이는 이미 뽑은 모든 단어와 비교한다.
        // seed와만 비교하면 B2와 C2가 한 보드에 섞여 2단계 차이가 벌어진다.
        var clash = chosen.some(function (x) {
          return iv.levelGap(x, c) > 1 ||
            iv.meaningsOverlap(x, c) || iv.areSynonyms(x, c);
        });
        if (clash) continue;
        chosen.push(c);
      }
      return chosen;
    }

    // 같은 품사로 채워보고, 안 되면 품사 제약을 푼다
    for (var pass = 0; pass < 2; pass++) {
      var samePos = pass === 0;
      for (var i = 0; i < Math.min(ranked.length, 40); i++) {
        var got = tryFill(ranked[i], samePos);
        if (got.length === size) return got;
      }
    }
    return ranked.slice(0, size);
  }

  /* ── 묶음 인스턴스 ─────────────────────────── */

  function createBlock(size) {
    size = size || 5;
    var picked = pickBlock(size);
    if (picked.length < 2) return null;

    var words = picked.map(function (o, i) {
      var st = startStage(o.word);
      return {
        word: o.word, obj: o, stage: st, start: st, done: false, wrong: 0,
        // 4지선다 방향을 단어마다 번갈아 배정해 한 묶음에 양방향이 섞이게 한다
        dir: i % 2 === 0 ? 'en-ko' : 'ko-en'
      };
    });
    var names = words.map(function (w) { return w.word; });
    var queue = window.Quiz.shuffle(names.slice());

    var phase = 'preview';        // preview → drill → outro → done
    var asked = 0;
    var maxAsked = size * 5;      // 계속 틀려도 세션이 끝없이 늘어나지 않게
    var pending = null;           // 아직 답하지 않은 문제
    var history = [];             // 출제된 단어 순서 (간격 검사용)
    var fillers = 0;
    var maxFillers = size * 2;

    function entryOf(name) {
      for (var i = 0; i < words.length; i++) if (words[i].word === name) return words[i];
      return null;
    }

    function remaining() {
      return words.filter(function (w) { return !w.done; }).length;
    }

    function objs() {
      return words.map(function (w) { return w.obj; });
    }

    /** 최소 간격을 두고 큐에 되넣는다 */
    function reinsert(name) {
      var pos = queue.length <= MIN_GAP
        ? queue.length
        : MIN_GAP + Math.floor(Math.random() * (queue.length - MIN_GAP + 1));
      queue.splice(pos, 0, name);
    }

    function conquer(e) {
      e.done = true;
      // 4단계를 서로 다른 각도로 모두 통과한 것은 진짜 아는 것이므로 보너스를 준다
      window.Store.boost(e.word, 1);
    }

    /** 최근 MIN_GAP개 안에 이미 나왔는가 */
    function tooSoon(name) {
      return history.slice(-MIN_GAP).indexOf(name) !== -1;
    }

    /**
     * 묶음 후반에는 남은 단어가 적어 큐가 짧아지고 간격이 무너진다.
     * 그때 이미 정복한 단어를 복습 문제로 끼워 넣어 간격을 유지한다.
     * 복습 문제는 정복 상태를 되돌리지 않고 숙련도에만 반영된다.
     */
    function pickFiller() {
      var pool = words.filter(function (w) {
        return w.done && !tooSoon(w.word);
      });
      if (!pool.length) return null;
      return pool[Math.floor(Math.random() * pool.length)];
    }

    /**
     * 빌더는 선택지가 우연히 중복되면 null을 반환한다. 한 번 실패하면 단계를
     * 건너뛰게 되므로 몇 번 재시도해 조용한 학습 손실을 막는다.
     */
    function buildStage(stage, e) {
      for (var i = 0; i < 4; i++) {
        var q = stage === 1
          ? window.Quiz.build.mcq(e.obj, e.dir, names)
          : window.Quiz.build.cloze(e.obj, names);
        if (q) return q;
      }
      return null;
    }

    function buildFillerQuestion(e) {
      // 회상 부담이 큰 문장 빈칸을 우선 쓰고, 안 되면 4지선다로 복습한다
      var order = [2, 1];
      for (var i = 0; i < order.length; i++) {
        var q = buildStage(order[i], e);
        if (q) {
          q.stageLabel = '복습 · ' + (order[i] === 1 ? '4지선다' : STAGES[2].label);
          return q;
        }
      }
      return null;
    }

    /** 다음 단계로 올린다. 끝까지 갔으면 정복 처리 */
    function promote(e) {
      e.stage++;
      if (e.stage > MAX_STAGE) conquer(e);
      else reinsert(e.word);
    }

    /**
     * 진행 현황 — 단어 이름은 정복한 뒤에만 공개한다.
     * 아직 출제될 단어를 화면에 띄우면 선택지와 대조해 정답을 골라낼 수 있다.
     */
    function grid() {
      return words.map(function (w, i) {
        return {
          n: i + 1,
          passed: Math.min(MAX_STAGE, w.stage - 1),
          total: MAX_STAGE,
          skipped: w.start - 1,
          done: w.done,
          word: w.done ? w.word : null,
          stage: w.stage
        };
      });
    }

    function stats() {
      return {
        size: words.length,
        conquered: words.filter(function (w) { return w.done; }).length,
        asked: asked,
        demotions: words.reduce(function (n, w) { return n + w.wrong; }, 0),
        words: words.map(function (w) {
          return {
            word: w.word,
            meanings: w.obj.meanings,
            level: w.obj.level,
            done: w.done,
            wrong: w.wrong,
            skipped: w.start - 1
          };
        })
      };
    }

    /** 다음에 보여줄 것 — 문제는 답하기 전까지 같은 것을 반복해 반환한다 */
    function next() {
      if (phase === 'preview') return { type: 'preview', words: objs() };

      if (phase === 'drill') {
        if (pending) return pending;
        if (remaining() === 0 || asked >= maxAsked) { phase = 'outro'; return next(); }

        var guard = 0;
        while (guard++ < queue.length + words.length + 4) {
          var name = queue.shift();
          if (name === undefined) break;
          var e = entryOf(name);
          if (!e || e.done) continue;

          // 간격이 부족하면 정복한 단어의 복습 문제를 먼저 끼워 넣는다
          if (tooSoon(name) && fillers < maxFillers) {
            var f = pickFiller();
            if (f) {
              var fq = buildFillerQuestion(f);
              if (fq) {
                queue.unshift(name);          // 원래 단어는 바로 다음 차례
                fillers++;
                asked++;
                history.push(f.word);
                pending = { type: 'question', q: fq, entry: f, stage: null, isFiller: true };
                return pending;
              }
            }
          }

          var q = buildStage(e.stage, e);
          if (!q) {
            // 이 단계는 문제를 만들 수 없다 → 통과로 처리하고 다음 단계로 넘긴다
            promote(e);
            continue;
          }
          q.stageLabel = stageLabel(e.stage, e.dir);
          asked++;
          history.push(e.word);
          pending = { type: 'question', q: q, entry: e, stage: e.stage };
          return pending;
        }
        phase = 'outro';
        return next();
      }

      if (phase === 'outro') {
        return {
          type: 'board', which: 'outro',
          q: window.Quiz.buildMatchFrom(objs(), 'normal')
        };
      }
      return { type: 'done', stats: stats() };
    }

    return {
      /* 상태 조회 */
      grid: grid,
      stats: stats,
      phase: function () { return phase; },
      remaining: remaining,
      asked: function () { return asked; },
      totalStages: function () {
        return words.reduce(function (n, w) { return n + (MAX_STAGE - w.start + 1); }, 0);
      },
      passedStages: function () {
        return words.reduce(function (n, w) { return n + (w.stage - w.start); }, 0);
      },

      /* 진행 */
      next: next,
      startDrill: function () { phase = 'drill'; },
      onBoardDone: function () { phase = 'done'; },
      onAnswer: function (correct) {
        if (!pending) return null;
        var e = pending.entry;
        var isFiller = pending.isFiller;
        pending = null;
        window.Store.record(e.word, correct);

        // 복습 문제는 정복 상태를 되돌리지 않는다
        if (isFiller) return { word: e.word, done: e.done, filler: true };

        if (correct) {
          promote(e);
          return { word: e.word, done: e.done, stage: e.stage, demoted: false };
        }

        e.wrong++;
        var before = e.stage;
        e.stage = Math.max(1, e.stage - DEMOTE);
        reinsert(e.word);
        // 1단계에서 틀리면 더 내려갈 곳이 없다. 실제로 내려갔을 때만 알린다.
        return { word: e.word, done: false, stage: e.stage, demoted: e.stage < before };
      }
    };
  }

  return {
    MAX_STAGE: MAX_STAGE,
    MIN_GAP: MIN_GAP,
    STAGES: STAGES,
    createBlock: createBlock,
    candidateCount: function () { return blockCandidates().length; }
  };
})();
