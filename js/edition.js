/**
 * edition.js — 시험별 버전(에디션) 필터
 *
 * 버전 하나를 고르면 학습 범위(진척도·정복·개별 연습·출제)가 그 버전 단어로
 * 좁혀진다. 'all'(종합)은 전체 단어이고, 나머지는 단어의 exams 태그로 거른다.
 *
 * 무엇이 버전을 가리고, 무엇이 공유되는가
 *   가린다 — 진척도(분모), 정복 세트·챕터, 개별 연습 출제 대상, 이어풀기 진행
 *   공유한다 — 오답 노트, 연속 학습일, 단어별 학습 기록 (store.js가 관리)
 *
 * 여기 한 줄(EDITIONS)에 추가하면 선택 화면과 필터가 함께 반영된다.
 * 아직 태그된 단어가 없는 버전(수능·토익)은 count()가 0이라 선택 화면에서
 * '준비중'으로 잠긴다 — 데이터가 쌓이면 자동으로 열린다.
 */
window.Edition = (function () {
  var KEY = 'vocabQuiz.edition';

  var EDITIONS = [
    { id: 'all',    label: '종합',   emoji: '📚',    tag: null,    desc: '전체 단어' },
    { id: '공무원', label: '공무원', emoji: '👨‍⚖️', tag: '공무원', desc: '공무원 기출' },
    { id: '수능',   label: '수능',   emoji: '🎓',    tag: '수능',   desc: '수능 기출' },
    { id: '토익',   label: '토익',   emoji: '💼',    tag: '토익',   desc: 'TOEIC 기출' }
  ];

  function byId(id) {
    for (var i = 0; i < EDITIONS.length; i++) if (EDITIONS[i].id === id) return EDITIONS[i];
    return null;
  }

  var current = null;
  try { current = localStorage.getItem(KEY) || null; } catch (e) { current = null; }
  // 등록부에 없는 값(오타·삭제된 버전)이 저장돼 있으면 미선택으로 되돌린다
  if (current && !byId(current)) current = null;

  function get() { return current; }
  function isChosen() { return !!current; }

  function set(id) {
    if (!byId(id)) return;
    current = id;
    try { localStorage.setItem(KEY, id); } catch (e) { /* 저장 실패해도 이번 세션은 동작 */ }
  }

  /** 지정(또는 현재) 버전의 태그. 종합·미선택이면 null. */
  function tagOf(id) {
    var ed = byId(id || current);
    return ed ? ed.tag : null;
  }

  /** 지정(또는 현재) 버전으로 단어 배열을 거른다. 종합·미선택이면 전체를 그대로. */
  function filter(words, id) {
    var tag = tagOf(id);
    if (!tag) return words || [];
    return (words || []).filter(function (w) {
      return w.exams && w.exams.indexOf(tag) !== -1;
    });
  }

  /** 지정(또는 현재) 버전의 단어 수 (전 세트 합집합 기준) */
  function count(id) {
    return filter(window.Quiz ? window.Quiz.ALL : [], id).length;
  }

  function label(id) {
    var ed = byId(id || current);
    return ed ? ed.label : '';
  }

  return {
    EDITIONS: EDITIONS,
    byId: byId,
    get: get,
    isChosen: isChosen,
    set: set,
    tagOf: tagOf,
    filter: filter,
    count: count,
    label: label
  };
})();
