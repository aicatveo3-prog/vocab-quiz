/**
 * 단어 데이터 — 수능 보카 U 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *
 * ⚠️ GLOSS 는 words.js 가 이미 만들어 둔 객체다. 여기서 window.GLOSS = {...} 로
 *    재대입하면 앞선 세트의 것이 통째로 사라진다. 반드시 Object.assign 으로
 *    병합할 것. 키는 소문자, 앞뒤 공백 없이.
 *
 * ── 80단어 · 4챕터 (11차부터 네 차수에 걸쳐 붙인다) ──
 *
 * 승격이 29개(36%), 참조가 45곳이다. 확정한 뜻·품사·레벨은 tools/u-source.txt
 * 에 남겨 두었다. 원본(교재) 82단어에서 둘을 빼 20으로 나누어떨어지게 맞췄고
 * 뜻 오류 다섯을 고쳤다.
 *
 * ── 이 세트의 성격 ───────────────────────────────────
 * 여든 개가 거의 다 un-·under-·up- 으로 시작하는 파생어다. 그래서 뜻이 서로
 * 가까운 낱말이 무더기로 몰린다.
 *   끊임없음   unceasing · uninterrupted · unhindered
 *   변함없음   unswerving · unwavering
 *   견줄 데 없음 unparalleled · unrivaled
 *   분명함     unambiguous · unequivocal
 *   약화       undercut · undermine
 * 이 자리들은 기존 표제어와도 맞물린다(ceaseless·steadfast·excessive·dampen …).
 * 사전값이 있으면 글자까지 지켜 meaningsOverlap 이 자동으로 배제하게 두었고,
 * 사전값이 없으면 서로 다른 갈래를 맡도록 갈라 썼다.
 *
 * 이 파일은 배선만 먼저 해 둔 것이다. app.js 가 단어 0개인 세트를 목록에서
 * 걸러내므로 화면에는 아직 U 세트가 뜨지 않는다.
 */
window.VOCAB_U = [
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
});
