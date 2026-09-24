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

  /* ── 챕터 1 ────────────────────────────────────── */
  /* 원본에서 가장 심하게 물린 챕터다 — 네 번이다.
       rank ↔ rate ↔ rating   ("등급" 3중)
       rate ↔ ratio           ("비율")
     넷을 이렇게 갈랐다.
       rank   등급, 계급        ← grade(등급, 단계 · G) 와 첫 뜻을 맞춰 배제
       rate   속도, 비율        ← 원본의 '등급' 을 버렸다
       rating 평점, 순위        ← 원본의 '평가·등급' 을 버렸다(assessment·grade 자리)
       ratio  비율, 두 수의 비  ← rate 와 '비율' 로 맞물려 배제
     '줄' 자리도 Q 세트 queue(대기 행렬) · 이 세트 row(열, 좌석의 줄) 와 갈랐다.

     rather 는 '오히려, 차라리' 만 남겼다. 원본의 '상당히, 꽤' 는 pretty(P)·
     quite(Q) 가 이미 갖고 있어서다 — 부사 셋이 서로를 흐리지 않게 한 것이다. */

  /* 승격 ① — 사전 단일값을 지켰다(원본 '종족의' 는 같은 자리 · ethnic, E 보존). */
  { word:"racial", pron:"레이셜", pos:"adj", level:"B2", meanings:["인종의"],
    syn:["ethnic","of one's race","to do with race"],
    ex:[{ s:"The city has a mix of {{}} groups.", f:"racial", ko:"그 도시에는 여러 인종의 집단이 섞여 있다." }] },

  { word:"racist", pron:"레이시스트", pos:"n", level:"B2", meanings:["인종차별주의자"],
    syn:["one who judges by race","believer in racial superiority","hater of other races"],
    ex:[{ s:"He was exposed as a {{}}.", f:"racist", ko:"그는 인종차별주의자로 드러났다." }] },

  /* 승격 ② — 사전 표현을 글자까지 지켰다(glow, G). 원본의 '내뿜다, 방출하다' 는
     emit·exhale·give off 가 이미 쓰는 자리다. */
  { word:"radiate", pron:"레이디에이트", pos:"v", level:"B2", meanings:["발산하다","내비치다"],
    syn:["glow","send out in rays","give out heat"],
    ex:[{ s:"The stove began to {{}} heat.", f:"radiate", ko:"난로가 열을 발산하기 시작했다." }] },

  /* 승격 ③ — 원본은 '급진적인, 급진주의자' 로 형용사와 명사가 섞여 있었다.
     참조 conservative·drastic 이 형용사여서 형용사로 세우고 사전 단일값을 지켰다. */
  { word:"radical", pron:"래디컬", pos:"adj", level:"B2", meanings:["급진적인"],
    syn:["drastic","far-reaching in change","going to the root"], ant:["conservative"],
    ex:[{ s:"They called for {{}} reform.", f:"radical", ko:"그들은 급진적인 개혁을 요구했다." }] },

  /* 원본은 '근본적으로; 완전히, 철저하게; 급진적으로, 과격하게' 로 다섯 갈래였다.
     두 갈래로 줄였다. */
  { word:"radically", pron:"래디컬리", pos:"adv", level:"C1", meanings:["근본적으로","급진적으로"],
    syn:["at the root","in a sweeping way","to the very base"],
    ex:[{ s:"The plan {{}} changed the city.", f:"radically", ko:"그 계획은 도시를 근본적으로 바꿨다." }] },

  /* ★ 원본은 '방사능의, 방사성의' 로 같은 말을 두 번 적은 셈이었다 — 한 갈래로. */
  { word:"radioactive", pron:"레이디오액티브", pos:"adj", level:"B2", meanings:["방사능의"],
    syn:["giving off radiation","of atomic decay","emitting rays"],
    ex:[{ s:"The site stores {{}} waste.", f:"radioactive", ko:"그 부지는 방사능의 폐기물을 보관한다." }] },

  /* 승격 ④ — 사전 표현을 글자까지 지켰다. 참조는 없다. 사전의 'fury' 항목이
     '격분, 격노' 로 글자가 같아 유의어로는 쓰지 않았다 — 되풀이가 되기 때문이다. */
  { word:"rage", pron:"레이지", pos:"n", level:"C1", meanings:["격분","격노"],
    syn:["violent anger","fit of temper","burning anger"],
    ex:[{ s:"He shook with {{}}.", f:"rage", ko:"그는 격분에 떨었다." }] },

  /* 승격 ⑤ — 원본은 '모금하다; 기르다; 들어 올리다; 인상' 으로 네 갈래였다.
     사전의 두 갈래를 쓰고 쌍반점만 쉼표로 갈랐다 — 참조가 다섯 곳(boost·breed·
     elevate·foster·lift) 이라 이 챕터에서 화면이 가장 많이 바뀌는 자리다.
     '기르다' 는 foster 의 첫 뜻과 같아 서로 오답에서 빠진다. */
  { word:"raise", pron:"레이즈", pos:"v", level:"B1", meanings:["올리다","기르다"],
    syn:["lift","boost","bring up a child"],
    ex:[{ s:"They will {{}} the price next month.", f:"raise", ko:"그들은 다음 달에 가격을 올릴 것이다." }] },

  /* 원본은 '대규모 집회; 다시 모으다, 불러 모으다' 로 명사와 동사가 섞여 있었다.
     참조가 없어 원본이 앞세운 명사로 세웠다. */
  { word:"rally", pron:"랠리", pos:"n", level:"B2", meanings:["대규모 집회","결집"],
    syn:["mass meeting","gathering for a cause","coming together"],
    ex:[{ s:"Thousands joined the {{}}.", f:"rally", ko:"수천 명이 그 대규모 집회에 참여했다." }] },

  { word:"ranch", pron:"랜치", pos:"n", level:"B2", meanings:["대목장"],
    syn:["large stock farm","cattle farm","grazing estate"],
    ex:[{ s:"He grew up on a {{}} in Texas.", f:"ranch", ko:"그는 텍사스의 대목장에서 자랐다." }] },

  { word:"randomly", pron:"랜덤리", pos:"adv", level:"B2", meanings:["무작위로"],
    syn:["by chance","without a set order","picked at will"],
    ex:[{ s:"Names were drawn {{}}.", f:"randomly", ko:"이름은 무작위로 뽑혔다." }] },

  /* 승격 ⑥ — 원본은 '범위; 범위가 ~이다; 정렬시키다' 로 명사와 동사가 섞여
     있었다. 참조 넷(array·coverage·diversity·extent) 이 모두 명사여서 명사로
     세우고 쌍반점만 쉼표로 갈랐다. '범위' 는 extent 의 첫 뜻과 같아 배제된다. */
  { word:"range", pron:"레인지", pos:"n", level:"B1", meanings:["범위","다양함"],
    syn:["extent","span from end to end","full reach"],
    ex:[{ s:"The {{}} of prices is wide.", f:"range", ko:"가격의 범위가 넓다." }] },

  /* 승격 ⑦ — 원본은 '~로서 지위를 차지하다; 열, 줄, 등급' 으로 동사와 명사가
     섞여 있었다. 참조 grade(G) 가 명사여서 명사로 세웠다. 첫 뜻을 '등급' 으로
     두면 grade(등급, 단계) 와 글자가 같아 서로 오답에서 빠진다. */
  { word:"rank", pron:"랭크", pos:"n", level:"B2", meanings:["등급","계급"],
    syn:["grade","place in an order","position held"],
    ex:[{ s:"He rose to the {{}} of captain.", f:"rank", ko:"그는 대위 계급으로 올랐다." }] },

  /* 승격 ⑧ — 사전 표현을 글자까지 지켰다(affinity, A). 원본의 "(좋은) 관계" 는
     괄호가 있고 relationship(관계) 과 부딪혀서 사전값 쪽이 낫다. */
  { word:"rapport", pron:"래포", pos:"n", level:"C1", meanings:["친밀감","교감"],
    syn:["affinity","warm understanding","easy bond"],
    ex:[{ s:"She built a quick {{}} with the class.", f:"rapport", ko:"그녀는 학급과 빠르게 친밀감을 쌓았다." }] },

  /* 승격 ⑨ — 사전 표현을 글자까지 지켰다(bliss, B · ecstasy, E). "(= delight)"
     표기를 걷었다. '황홀' 은 ecstasy 의 첫 뜻과 같아 서로 오답에서 빠진다. */
  { word:"rapture", pron:"랩처", pos:"n", level:"C2", meanings:["황홀","큰 기쁨"],
    syn:["ecstasy","bliss","joy that carries one away"],
    ex:[{ s:"The crowd listened in {{}}.", f:"rapture", ko:"군중은 황홀에 빠져 들었다." }] },

  /* 승격 ⑩ — 사전 표현을 글자까지 지켰다(원본은 순서가 거꾸로였다). 참조는 없다. */
  { word:"rare", pron:"레어", pos:"adj", level:"B1", meanings:["드문","희귀한"],
    syn:["seldom found","not often seen","thin on the ground"], ant:["common"],
    ex:[{ s:"This bird is {{}} in winter.", f:"rare", ko:"이 새는 겨울에 드물다." }] },

  /* 원본은 '속도, 비율, 등급' 세 갈래였다. '등급' 은 바로 위 rank 와 grade 의
     자리라 버렸다. '비율' 은 아래 ratio 와 글자가 같아 서로 오답에서 빠진다. */
  { word:"rate", pron:"레이트", pos:"n", level:"B1", meanings:["속도","비율"],
    syn:["speed of change","measure per unit","pace at which it happens"],
    ex:[{ s:"The birth {{}} has fallen.", f:"rate", ko:"출생률이 떨어졌다." }] },

  /* ★ 원본은 '상당히, 꽤; 오히려, 차라리' 였다. 앞 갈래는 pretty(P 꽤, 상당히)·
     quite(Q 꽤, 전적으로) 가 이미 갖고 있어서 뒤 갈래만 남겼다. 부사 셋이 서로를
     흐리지 않게 가른 것이다. */
  { word:"rather", pron:"래더", pos:"adv", level:"B1", meanings:["오히려","차라리"],
    syn:["instead","as a preference","on the contrary"],
    ex:[{ s:"I would {{}} walk than drive.", f:"rather", ko:"나는 운전하기보다 차라리 걷겠다." }] },

  /* 원본은 '평가, 평점, 순위, 등급' 네 갈래였다. '평가' 는 assessment,
     '등급' 은 grade·rank 자리라 버리고 둘만 남겼다. */
  { word:"rating", pron:"레이팅", pos:"n", level:"B2", meanings:["평점","순위"],
    syn:["score given","mark on a scale","place on a list"],
    ex:[{ s:"The film got a high {{}}.", f:"rating", ko:"그 영화는 높은 평점을 받았다." }] },

  /* 원본의 '비' 한 글자는 카드에서 너무 짧아 '두 수의 비' 로 적었다.
     '비율' 은 rate·proportion(P)·percentage(P) 와 맞물려 서로 오답에서 빠진다. */
  { word:"ratio", pron:"레이시오", pos:"n", level:"B2", meanings:["비율","두 수의 비"],
    syn:["relation in number","how many to how many","balance between two"],
    ex:[{ s:"The {{}} of boys to girls is even.", f:"ratio", ko:"남녀 비율이 고르다." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
  "as a preference": "더 좋아서",
  "at the root": "뿌리에서부터",
  "balance between two": "둘 사이의 균형",
  "believer in racial superiority": "한 인종이 낫다고 믿는 이",
  "bring up a child": "아이를 길러 내다",
  "by chance": "우연히",
  "cattle farm": "소를 기르는 농장",
  "easy bond": "편한 사이",
  "emitting rays": "빛살을 뿜는",
  "far-reaching in change": "바꿈이 크게 미치는",
  "fit of temper": "울컥 치미는 화",
  "full reach": "미치는 만큼 전부",
  "gathering for a cause": "뜻을 위해 모임",
  "give out heat": "열을 내보내다",
  "giving off radiation": "방사선을 내는",
  "going to the root": "뿌리까지 파고드는",
  "grazing estate": "풀 먹이는 넓은 땅",
  "hater of other races": "다른 인종을 미워하는 이",
  "how many to how many": "몇 대 몇",
  "in a sweeping way": "싹 쓸어내듯",
  "joy that carries one away": "넋을 빼앗는 기쁨",
  "large stock farm": "큰 가축 농장",
  "mark on a scale": "척도 위의 표시",
  "mass meeting": "사람이 많이 모인 자리",
  "measure per unit": "단위마다 재는 값",
  "not often seen": "자주 보이지 않는",
  "of atomic decay": "원자가 붕괴하는",
  "of one's race": "제 인종의",
  "one who judges by race": "인종으로 사람을 가리는 이",
  "pace at which it happens": "일이 일어나는 속도",
  "picked at will": "되는 대로 골라",
  "place in an order": "차례 속의 자리",
  "place on a list": "목록에서의 자리",
  "position held": "맡고 있는 자리",
  "relation in number": "수로 본 관계",
  "score given": "매겨 준 점수",
  "seldom found": "좀처럼 볼 수 없는",
  "send out in rays": "빛살로 내보내다",
  "span from end to end": "끝에서 끝까지 걸침",
  "speed of change": "변하는 빠르기",
  "thin on the ground": "드물게 흩어져 있는",
  "to do with race": "인종에 얽힌",
  "to the very base": "바탕까지",
  "violent anger": "거센 노여움",
  "warm understanding": "따뜻한 이해",
  "without a set order": "정해진 차례 없이"
});

