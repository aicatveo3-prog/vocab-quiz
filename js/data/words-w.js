/**
 * 단어 데이터 — 수능 보카 W 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *
 * ⚠️ GLOSS 는 words.js 가 이미 만들어 둔 객체다. 여기서 window.GLOSS = {...} 로
 *    재대입하면 앞선 세트의 것이 통째로 사라진다. 반드시 Object.assign 으로
 *    병합할 것. 키는 소문자, 앞뒤 공백 없이.
 *
 * ── 73단어 · 4챕터 (마지막 챕터 13단어) ──
 *
 * 승격이 32개(44%)다. 확정한 뜻·품사·레벨은 tools/w-source.txt 에 남겨 두었다.
 * 원본(교재) 76단어에서 셋을 뺐다.
 *   well-timed  기존 표제어 timely(시기적절한, 때맞춘) 와 거의 같은 말이다
 *   whizz·whizzy  수능에 거의 안 나오고, 둘이 서로 다섯 글자만 같아 갈리지도 않는다
 *
 * ── 이 세트에서 조심한 것 ─────────────────────────────
 * ① well- 무리가 넷이다. well-grounded·well-meaning·well-rounded·well-to-do.
 *    넷이 서로 다섯 글자만 같아 짝 맞추기 보드에서 안 걸린다(여섯 글자부터
 *    가른다). 갈래를 하나씩만 남겨 뜻으로 갈랐다.
 *      well-grounded  정당한 근거가 있는
 *      well-meaning   선의의
 *      well-rounded   균형이 잡힌      ← '다재다능한' 은 versatile 에 넘겼다
 *      well-to-do     유복한, 부유한    ← '부유한' 을 둘째로 남겨 wealthy 와 맞물리게 했다
 * ② with- 무리가 넷이다. withdraw·wither·withhold·withstand. 공통 접두사가
 *    'with' 네 글자뿐이라 보드에서 안 갈리지만 뜻이 아주 달라 그대로 두었다.
 * ③ 품사로 가른 자리가 셋이다.
 *      weaken(v 약화시키다)   ↔ weakness(n 약점, 약함)
 *      willing(adj 기꺼이 ~하는) ↔ willingness(n 기꺼이 하는 마음)
 *      wander(v 헤매다)       ↔ wander around(phr 이리저리 헤매다)
 * ④ 교재 오류를 셋 고쳤다.
 *      watchdog  (증거 없이) 추정된, 주장된 → 감시 역할을 하는 것
 *                ★교재가 alleged 의 뜻을 잘못 붙였다. 실제로 기존 표제어
 *                alleged 가 '(증거 없이) 주장된, 혐의를 받는' 이다
 *      waver     약하다, 약해지다 → 흔들리다, 주저하다
 *      wander around  이리저리 헤메다 → 헤매다 (맞춤법)
 *
 * 이 파일은 배선만 먼저 해 둔 것이다. app.js 가 단어 0개인 세트를 목록에서
 * 걸러내므로 화면에는 아직 W 세트가 뜨지 않는다.
 */
window.VOCAB_W = [
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
});
