/**
 * 단어 데이터 — 수능 보카 Y 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *
 * ⚠️ GLOSS 는 words.js 가 이미 만들어 둔 객체다. 여기서 window.GLOSS = {...} 로
 *    재대입하면 앞선 세트의 것이 통째로 사라진다. 반드시 Object.assign 으로
 *    병합할 것. 키는 소문자, 앞뒤 공백 없이.
 *
 * ── 5단어 · 1챕터 ──
 *
 * 가장 작은 세트다. K(8단어)·J(14단어) 처럼 글자마다 한 세트를 두는 규칙을
 * 따랐다. 확정한 뜻·품사·레벨은 tools/y-source.txt 에 남겨 두었다.
 *
 * ★ yield 가 이 세트에서 가장 까다로웠다. 참조가 여섯 곳인데 품사가 셋으로
 * 갈린다 — bring in·cave in(phr) · concede·generate(v) · harvest·output(n).
 * 사전 첫 갈래가 동사('산출하다') 이고 concede·generate 가 동사여서 동사로
 * 세웠다. 그 대신 명사 쪽 둘의 유의어 칸을 손질했다.
 *   harvest(H · n 추수, 수확) yield → what is gathered in
 *   output(O · n 생산량, 산출) yield → amount turned out
 *
 * 이 파일은 배선만 먼저 해 둔 것이다. app.js 가 단어 0개인 세트를 목록에서
 * 걸러내므로 화면에는 아직 Y 세트가 뜨지 않는다.
 */
window.VOCAB_Y = [
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
});
