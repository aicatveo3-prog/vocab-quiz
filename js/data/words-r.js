/**
 * 단어 데이터 — 수능 보카 R 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *
 * ⚠️ GLOSS 는 words.js 가 이미 만들어 둔 객체다. 여기서 window.GLOSS = {...} 로
 *    재대입하면 앞선 세트의 것이 통째로 사라진다. 반드시 Object.assign 으로
 *    병합할 것. 키는 소문자, 앞뒤 공백 없이.
 *
 * ── 279단어 · 14챕터 (2차부터 열네 차수에 걸쳐 붙인다) ──
 *
 * C(466) · A(396) · P(343) 에 이어 네 번째로 큰 세트다. 승격이 150개(54%),
 * 참조가 248곳으로 저장소 최다다 — reduce·reject·release·review·raise 처럼
 * 다른 낱말의 선택지로 이미 널리 쓰이던 기본 낱말이 r 에 몰려 있어서다.
 *
 *   release  9곳   reduce 7곳   reject 6곳   review 6곳
 *   raise    5곳   register 5곳 repel  5곳   reveal 5곳
 *
 * 이 파일은 배선만 먼저 해 둔 것이다. app.js 가 단어 0개인 세트를 목록에서
 * 걸러내므로 화면에는 아직 R 세트가 뜨지 않는다.
 */
window.VOCAB_R = [
];
