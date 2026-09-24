/**
 * 단어 데이터 — 수능 보카 S 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *
 * ⚠️ GLOSS 는 words.js 가 이미 만들어 둔 객체다. 여기서 window.GLOSS = {...} 로
 *    재대입하면 앞선 세트의 것이 통째로 사라진다. 반드시 Object.assign 으로
 *    병합할 것. 키는 소문자, 앞뒤 공백 없이.
 *
 * ── 439단어 · 22챕터 (1차부터 스물두 차수에 걸쳐 붙인다) ──
 *
 * C(466) 에 이어 두 번째로 큰 세트다. 승격이 240개(55%), 참조가 383곳으로
 * 저장소 최다다 — separate·specific 이 각 6곳, seek·seize·smooth·span·substance·
 * suppress 가 각 5곳이다.
 *
 * 확정한 뜻·품사·레벨은 tools/s-source.txt 에 남겨 두었다. 원본(교재) 444단어에서
 * 다섯을 빼고(sub-hourly·stage-set·seed improvement·school calendar·single issue)
 * 뜻 오류 여섯을 고친 결과다.
 *
 * 이 파일은 배선만 먼저 해 둔 것이다. app.js 가 단어 0개인 세트를 목록에서
 * 걸러내므로 화면에는 아직 S 세트가 뜨지 않는다.
 */
window.VOCAB_S = [
];
