/**
 * 단어 데이터 — 수능 보카 V 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *
 * ⚠️ GLOSS 는 words.js 가 이미 만들어 둔 객체다. 여기서 window.GLOSS = {...} 로
 *    재대입하면 앞선 세트의 것이 통째로 사라진다. 반드시 Object.assign 으로
 *    병합할 것. 키는 소문자, 앞뒤 공백 없이.
 *
 * ── 75단어 · 4챕터 (마지막 챕터 15단어) ──
 *
 * 승격이 37개(49%)다. 절반이 이미 선택지로 쓰이던 낱말이라, 표제어로 올리면
 * 기존 표제어 여러 곳의 화면이 함께 움직인다. 확정한 뜻·품사·레벨은
 * tools/v-source.txt 에 남겨 두었다. 원본(교재) 76단어에서 vengeance 하나를
 * 뺐다 — 기존 표제어 revenge(복수) 와 같은 말이다.
 *
 * ── 이 세트에서 조심한 것 ─────────────────────────────
 * ① vari- 무리가 여섯이다. variability·variable·variation·varied·variety·various.
 *    짝 맞추기 보드는 공통 접두사 여섯 글자부터 가르므로 variability↔variable 은
 *    저절로 갈리지만 varied↔variety(5글자) 는 안 걸린다. 뜻으로 갈랐다.
 *      varied  다양한, 변화가 많은   varies 와 various 는 '다양한' 을 글자까지
 *      various 다양한, 여러 가지의   맞춰 두었다 — 갈라 쓸 수 없는 말이어서
 *                                    앱이 자동으로 서로의 오답에서 뺀다.
 * ② virtu- 무리가 넷이다. virtual·virtually·virtue·virtuous. 넷 다 뜻이 아주
 *    달라 그대로 두었다.
 * ③ 품사로 가른 자리가 넷이다.
 *      vegan(adj 엄격한 채식의)   ↔ vegetarian(n 채식주의자)
 *      ventilate(v 환기하다)      ↔ ventilation(n 통풍, 환기)
 *      voluntary(adj 자발적인)    ↔ volunteer(n 자원봉사자)
 *      vigorous(adj 격렬한)       ↔ vigorously(adv 힘차게)
 * ④ 교재 오류를 둘 고쳤다.
 *      vegetation 식물 → 초목      '식물' 은 plant 의 뜻이다
 *      vandalism  '반달리즘' 걷음  낱말을 한글로 되풀이한 것이다
 *    version 의 사전값 '버전' 과 venture 의 교재 뜻 '벤처(사업)' 도 같은
 *    까닭으로 걷었다.
 *
 * 이 파일은 배선만 먼저 해 둔 것이다. app.js 가 단어 0개인 세트를 목록에서
 * 걸러내므로 화면에는 아직 V 세트가 뜨지 않는다.
 */
window.VOCAB_V = [
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
});
