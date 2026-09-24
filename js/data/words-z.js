/**
 * 단어 데이터 — 수능 보카 Z 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *
 * ⚠️ GLOSS 는 words.js 가 이미 만들어 둔 객체다. 여기서 window.GLOSS = {...} 로
 *    재대입하면 앞선 세트의 것이 통째로 사라진다. 반드시 Object.assign 으로
 *    병합할 것. 키는 소문자, 앞뒤 공백 없이.
 *
 * ── 3단어 · 1챕터 — 마지막 세트다 ──
 *
 * 이 세 낱말로 A~Z 가 찬다(X 로 시작하는 수능 낱말은 목록에 없다).
 * 확정한 뜻·품사·레벨은 tools/z-source.txt 에 남겨 두었다.
 *
 * 챕터가 세 낱말뿐이지만 문제는 만들어진다. 짝 맞추기 보드와 4지선다의 오답은
 * 세트 안에서가 아니라 **전체 표제어**에서 골라 오기 때문이다(quizgen 의
 * distractorPool 이 Quiz.ALL 을 훑는다). 정복 모드에서 같은 챕터 낱말끼리만
 * 서로의 오답에서 빠진다.
 *
 * zeal(n 열의, 열성) 과 zealous(adj 열의에 찬, 열성적인) 는 공통 접두사가 네
 * 글자('zeal') 뿐이어서 짝 맞추기 보드의 어근 검사(여섯 글자)에 걸리지 않는다.
 * 품사가 달라 같은 보드에 오지 않으므로 그대로 두었다.
 *
 * 이 파일은 배선만 먼저 해 둔 것이다. app.js 가 단어 0개인 세트를 목록에서
 * 걸러내므로 화면에는 아직 Z 세트가 뜨지 않는다.
 */
window.VOCAB_Z = [

  /* ══ 1차 · zeal ~ zoom in on (3단어) — Z 세트 전부, A~Z 마지막 ════════════
     승격 2 · 신규 1

     이 세 낱말로 알파벳이 찬다.

     zeal(n 열의, 열성) 과 zealous(adj 열의에 찬, 열성적인) 는 공통 접두사가 네
     글자('zeal') 뿐이어서 짝 맞추기 보드의 어근 검사(여섯 글자) 에 안 걸린다.
     품사가 달라 같은 보드에 오지 않으므로 그대로 뒀다. '열의' 는 두 글자여서
     '열의에 찬' 안에 있어도 자동 배제가 안 되지만, 품사가 갈려 문제가 되지
     않는다.

     ★ zealous 의 사전값은 원래 '열정적인, 열렬한' 이었는데, A·B·C 세트의 유의어
     겹침을 정리하면서 '열의에 찬, 열성적인' 으로 바꿔 두었다. 그 덕에 지금
     ardent(열렬한, 열정적인)·enthusiastic(열정적인, 열심인) 과 부딪치지 않는다.
     참조 둘이 바로 그 ardent·enthusiastic 이다.

     zoom in on 은 '확대하다' 를 글자째 품어 amplify(증폭시키다, 확대하다)·
     enlarge(확대하다, 확장하다)·magnify(확대하다, 증폭시키다) 셋과 맞물려
     배제된다. */

  /* 승격 ① — 사전 글자 유지. 참조 enthusiasm(E)·fervor(F) 두 곳의 화면은
     바뀌지 않는다. enthusiasm(열정, 열의) 과 '열의' 가 맞물려 배제된다. */
  { word:"zeal", pron:"질", pos:"n", level:"C1", meanings:["열의","열성"],
    syn:["enthusiasm","fervor","burning keenness"],
    ex:[{ s:"She worked with great {{}}.", f:"zeal", ko:"그녀는 큰 열의로 일했다." }] },

  /* 승격 ② — 사전 글자 유지. 참조 ardent(A)·enthusiastic(E) 두 곳의 화면은
     바뀌지 않는다. 위 zeal(명사) 과 품사로 갈랐다. */
  { word:"zealous", pron:"젤러스", pos:"adj", level:"C2", meanings:["열의에 찬","열성적인"],
    syn:["ardent","enthusiastic","full of keen spirit"],
    ex:[{ s:"He is a {{}} supporter.", f:"zealous", ko:"그는 열의에 찬 지지자다." }] },

  /* '확대하다' 를 품어 amplify·enlarge·magnify 셋과 맞물려 배제된다. */
  { word:"zoom in on", pron:"줌 인 온", pos:"phr", level:"C1", meanings:["서서히 확대하다"],
    syn:["draw slowly closer on","make larger bit by bit","bring into close view"] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
});
