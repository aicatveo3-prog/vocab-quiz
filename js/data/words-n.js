/**
 * 단어 데이터 — 수능 보카 N 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *
 * ⚠️ GLOSS 는 words.js 가 이미 만들어 둔 객체다. 여기서 window.GLOSS = {...} 로
 *    재대입하면 앞선 세트의 것이 통째로 사라진다. 반드시 이 파일 맨 아래처럼
 *    Object.assign 으로 병합할 것. 키는 소문자, 앞뒤 공백 없이.
 *    ⚠️ 또 gloss.js 에 같은 키가 있는지 먼저 확인할 것 — gloss.js 가 이 파일보다
 *    뒤에 로드되므로 여기 넣은 값이 조용히 덮인다.
 *
 * ── 이 세트의 승격: 80단어 중 38개(48%) ──
 *
 * n 으로 시작하는 낱말 중 쓰이는 것들이 (neglect·notice·nurture·numerous·native
 * 같은) 기본 낱말이어서 오래전부터 다른 문제의 유의어·반의어로 동원돼 왔다.
 * 참조는 모두 55곳이다. 가장 많이 쓰이는 것은 neglect(7곳)로, 그중 여섯이
 * 반의어 자리다 — cherish·cultivate·attention·administer·be committed to·brush up.
 *
 * 원칙은 A~M 세트와 같다.
 *   ① 같은 갈래면 기존 뜻을 쓴다 (기존 문제 화면이 안 바뀐다)
 *   ② 다른 갈래면 기존 쪽 뜻을 첫 자리에 남긴다
 *   ③ 사전에만 있던 갈래는 뒤에 붙여 살린다
 *   ④ 한 표제어에 두 품사를 섞지 않는다 — 참조가 쓰는 갈래를 남긴다
 *
 * ── 원본의 뜻 오류를 고친 것 ──
 *   nasty     '풀로 덮인, 무성한' → '고약한, 못된'
 *             grassy 의 뜻이 들어와 있었다. M 세트 malicious 가 유의어로 쓴다.
 *   numerous  '많은' → '수많은, 다수의'
 *             두 글자는 선택지에서 뜻으로 읽기 빠듯하다. 사전값을 썼다.
 *
 * ── 겹침을 가른 것 ──
 *   narration '서술, 해설' / narrative '이야기, 서사'
 *   neural '신경의, 신경계의' / neurological '신경학의, 신경 질환의'
 *   nevertheless '그럼에도 불구하고' / nonetheless '그렇기는 하지만'
 *   notable '주목할 만한, 중요한' / noticeable '눈에 띄는, 뚜렷한' / notably '특히'
 *   nourish '영양분을 공급하다' / nurture '양육하다, 보살펴 키우다'
 *   nutrient '영양소' / nutrition '영양, 영양 섭취' / nutritious '영양이 풍부한'
 *     ↑ 이 여섯은 손대지 않으면 챕터 4 안에서 여덟 번 서로 물린다.
 *       meaningsOverlap 이 부분 문자열까지 잡기 때문이다.
 *   necessarily '필연적으로, 반드시'  ← by all means(반드시, B) 와 첫 뜻을 갈랐다
 *   nerve '신경, 긴장'               ← anxiety(불안, A) 와 첫 뜻을 갈랐다
 *   nimble '날렵한, 민첩한'          ← agile(민첩한, A) 와 첫 뜻을 갈랐다
 *
 * ── 품사를 하나로 정리한 것 (참조가 쓰는 갈래를 남겼다) ──
 *   notice  n  통지, 안내문      참조 4곳이 모두 명사(advert·advertisement·attention·bulletin)
 *   novel   adj 참신한, 신기한    conventional(ant, C) 이 형용사 갈래를 쓴다. '소설' 은 버렸다.
 *   nap     n  낮잠             doze(D) 가 동사 갈래를 쓰고 있었다 — doze 쪽 유의어를
 *                              'take a nap' 으로 바꿔 어긋남을 고쳤다(words-d.js).
 *   narrow  adj 폭이 좁은        constrict(C) 가 동사 갈래를 쓰고 있었다 — constrict 쪽
 *                              유의어를 이 세트의 'narrow down' 으로 바꿨다(words-c.js).
 *   neglect v  방치하다          참조 일곱 중 여섯이 동사다. attention(A) 만 명사 자리여서
 *                              그쪽 반의어를 'inattention' 으로 바꿨다(words.js).
 */

window.VOCAB_N = [
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
});
