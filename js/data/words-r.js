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
    ex:[{ s:"The {{}} of boys to girls is even.", f:"ratio", ko:"남녀 비율이 고르다." }] },

  /* ── 챕터 2 ────────────────────────────────────── */
  /* rational ↔ reasonable 이 '합리적인' 으로 물렸다. 사전값이 마침 둘을
     '합리적인, 이성적인' / '합리적인, 적당한' 으로 갈라 주어 첫 뜻만 글자를
     맞췄다 — 그러면 quizgen 이 서로를 오답 후보에서 뺀다.
     rebel 은 명사로 세우면서 conform(따르다, 순응하다 · C) 의 반의어 자리를
     손질했다. 동사 뜻을 노린 자리였는데 명사가 올라오면 어긋난다. */

  /* 승격 ⑪ — 사전 글자 유지(cognitive, C · irrational 반의어, I · logical, L). */
  { word:"rational", pron:"래셔널", pos:"adj", level:"B2", meanings:["합리적인","이성적인"],
    syn:["logical","guided by reason","thinking things through"], ant:["irrational"],
    ex:[{ s:"She gave a {{}} explanation.", f:"rational", ko:"그녀는 합리적인 설명을 했다." }] },

  /* respond(응답하다, 호응하다)·reply(대답하다, 답장하다) 와 갈라 '반응하다' 만
     맡겼다 — 세 낱말이 챕터 10·8 에 흩어져 있어 뜻으로 구분해 두어야 한다. */
  { word:"react", pron:"리액트", pos:"v", level:"B1", meanings:["반응하다"],
    syn:["act in answer","show a response","answer with action"],
    ex:[{ s:"How did they {{}} to the news?", f:"react", ko:"그들은 그 소식에 어떻게 반응했나요?" }] },

  /* 승격 ⑫ — 사전 글자 유지(chemistry, C). */
  { word:"reaction", pron:"리액션", pos:"n", level:"B1", meanings:["반응"],
    syn:["response to something","what follows an act","answering move"],
    ex:[{ s:"His first {{}} was to laugh.", f:"reaction", ko:"그의 첫 반응은 웃는 것이었다." }] },

  { word:"reactor", pron:"리액터", pos:"n", level:"C1", meanings:["반응 장치","원자로"],
    syn:["plant for atomic power","vessel where reaction runs","atomic pile"],
    ex:[{ s:"The {{}} was shut down for checks.", f:"reactor", ko:"그 원자로는 점검을 위해 멈췄다." }] },

  /* 대문자가 든 표제어다(Pacific·Protestant 선례). 구·표현이라 예문은 두지 않는다. */
  { word:"read A into B", pron:"리드 에이 인투 비", pos:"phr", level:"C2", meanings:["B에 A의 뜻을 부여하다"],
    syn:["find a meaning that is not there","put one's own sense into","take more from it than it says"] },

  /* 승격 ⑬ — 사전 단일값 유지(instant, I). 원본 '기성품의' 는 같은 자리다. */
  { word:"ready-made", pron:"레디 메이드", pos:"adj", level:"B2", meanings:["미리 만들어진"],
    syn:["instant","made in advance","off the shelf"],
    ex:[{ s:"They sell {{}} curtains.", f:"ready-made", ko:"그들은 미리 만들어진 커튼을 판다." }] },

  /* 승격 ⑭ — 사전은 '현실적인' 한 갈래였고 참조가 없어 '사실적인' 을 붙였다.
     '현실적인' 은 pragmatic(P) 의 첫 뜻과 같아 서로 오답에서 빠진다. */
  { word:"realistic", pron:"리얼리스틱", pos:"adj", level:"B1", meanings:["현실적인","사실적인"],
    syn:["true to life","keeping to what is possible","showing things as they are"],
    ex:[{ s:"We need a {{}} plan.", f:"realistic", ko:"우리에게는 현실적인 계획이 필요하다." }] },

  { word:"realize", pron:"리얼라이즈", pos:"v", level:"B1", meanings:["깨닫다","실현하다"],
    syn:["come to know","see at last","make real"],
    ex:[{ s:"She did not {{}} the time.", f:"realize", ko:"그녀는 시간을 깨닫지 못했다." }] },

  /* 승격 ⑮ — 사전의 쌍반점만 쉼표로 갈랐다(domain, D 한 곳). 원본의 괄호
     "(활동, 지식 등의)" 는 걷었다. */
  { word:"realm", pron:"렐름", pos:"n", level:"C1", meanings:["영역","왕국"],
    syn:["domain","field of activity","kingdom"],
    ex:[{ s:"That lies outside my {{}}.", f:"realm", ko:"그것은 내 영역 밖의 일이다." }] },

  /* ★ 원본은 '실시간' 으로 형용사인데 명사 뜻이 달려 있었다 — '실시간의' 로 고쳤다. */
  { word:"real-time", pron:"리얼 타임", pos:"adj", level:"C1", meanings:["실시간의"],
    syn:["as it happens","without delay in reporting","live as it goes"],
    ex:[{ s:"The app gives {{}} traffic data.", f:"real-time", ko:"그 앱은 실시간의 교통 정보를 준다." }] },

  { word:"reap", pron:"리프", pos:"v", level:"C1", meanings:["수확하다","거두다"],
    syn:["gather a crop","take in the harvest","get as a return"],
    ex:[{ s:"Farmers {{}} the wheat in July.", f:"reap", ko:"농부들은 7월에 밀을 수확한다." }] },

  /* 승격 ⑯ — 원본은 '뒤쪽; 기르다, 양육하다' 로 명사와 동사가 섞여 있었다.
     참조 breed·nurture 가 동사여서 동사로 세웠다. '기르다' 는 raise(챕터 1)·
     foster 와, '양육하다' 는 nurture 와 글자가 같아 서로 오답에서 빠진다. */
  { word:"rear", pron:"리어", pos:"v", level:"C1", meanings:["기르다","양육하다"],
    syn:["nurture","bring to full growth","raise young"],
    ex:[{ s:"They {{}} sheep on the hillside.", f:"rear", ko:"그들은 언덕에서 양을 기른다." }] },

  /* 승격 ⑰ — 사전의 쌍반점만 쉼표로 갈랐다(affordable·commonsense·moderate
     세 곳). 첫 뜻 '합리적인' 은 바로 위 rational 과 글자가 같아 배제된다. */
  { word:"reasonable", pron:"리즈너블", pos:"adj", level:"B1", meanings:["합리적인","적당한"],
    syn:["moderate","fair and sensible","not too much"],
    ex:[{ s:"The price seems {{}}.", f:"reasonable", ko:"그 값은 적당해 보인다." }] },

  /* 승격 ⑱ — 사전 단일값 유지(assure, A · console, C). */
  { word:"reassure", pron:"리어슈어", pos:"v", level:"B2", meanings:["안심시키다"],
    syn:["console","put at ease","set one's mind at rest"],
    ex:[{ s:"He tried to {{}} the children.", f:"reassure", ko:"그는 아이들을 안심시키려 했다." }] },

  /* 승격 ⑲ — 사전은 '반항하다, 반란자' 로 동사와 명사가 섞여 있었다. 원본이
     명사('반역자, 반항자') 라 명사로 세우고, 동사 뜻을 노렸던 conform 의 반의어
     자리를 rise up against 로 손질했다. */
  { word:"rebel", pron:"리벨", pos:"n", level:"C1", meanings:["반역자","반항자"],
    syn:["one who rises up","fighter against rule","defier of authority"],
    ex:[{ s:"The {{}} was caught at the border.", f:"rebel", ko:"그 반역자는 국경에서 잡혔다." }] },

  /* revolt(봉기, 반기를 듦)·riot(폭동, 소란) 와 갈라 '반란, 반항' 을 맡겼다. */
  { word:"rebellion", pron:"리벨리언", pos:"n", level:"C1", meanings:["반란","반항"],
    syn:["rising against rule","open defiance","revolt of the people"],
    ex:[{ s:"The {{}} spread to three towns.", f:"rebellion", ko:"그 반란은 세 고을로 퍼졌다." }] },

  { word:"rebroadcast", pron:"리브로드캐스트", pos:"v", level:"B2", meanings:["재방송하다"],
    syn:["air again","send out once more","show a second time"],
    ex:[{ s:"They will {{}} the match tonight.", f:"rebroadcast", ko:"그들은 오늘 밤 그 경기를 재방송할 것이다." }] },

  /* 승격 ⑳ — 사전 글자 유지(censure, C). reprimand(문책하다 · 챕터 8) 와 갈랐다. */
  { word:"rebuke", pron:"리뷰크", pos:"v", level:"C2", meanings:["질책하다","꾸짖다"],
    syn:["censure","tell off sharply","scold openly"],
    ex:[{ s:"The judge began to {{}} the lawyer.", f:"rebuke", ko:"판사는 그 변호사를 질책하기 시작했다." }] },

  /* 승격 ㉑ — 사전 첫 갈래를 지키고 쌍반점을 쉼표로 갈랐다(conjure up 한 곳).
     원본은 '기억해내다; 취소하다; 회수하다' 세 갈래였다. '취소하다' 는
     revoke(챕터 12) 자리라 '회수하다' 를 남겼다. */
  { word:"recall", pron:"리콜", pos:"v", level:"B1", meanings:["회상하다","회수하다"],
    syn:["conjure up","bring back to mind","call in a faulty product"],
    ex:[{ s:"I cannot {{}} his name.", f:"recall", ko:"나는 그의 이름을 회상할 수 없다." }] },

  /* 원본은 '물러나다, 철회하다' 였다. '철회하다' 는 retract·revoke(챕터 12) 자리라
     물이 빠지는 쪽 갈래를 남겼다. */
  { word:"recede", pron:"리시드", pos:"v", level:"C1", meanings:["물러나다","차츰 빠지다"],
    syn:["move back","draw away little by little","fall back"],
    ex:[{ s:"The floodwater began to {{}}.", f:"recede", ko:"홍수 물이 물러나기 시작했다." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
  "act in answer": "답으로 움직이다",
  "air again": "다시 내보내다",
  "answer with action": "행동으로 답하다",
  "answering move": "되받아 내는 움직임",
  "as a preference": "더 좋아서",
  "as it happens": "일어나는 그대로",
  "at the root": "뿌리에서부터",
  "atomic pile": "원자로 더미",
  "balance between two": "둘 사이의 균형",
  "believer in racial superiority": "한 인종이 낫다고 믿는 이",
  "bring back to mind": "다시 머리에 떠올리다",
  "bring to full growth": "다 자라게 하다",
  "bring up a child": "아이를 길러 내다",
  "by chance": "우연히",
  "call in a faulty product": "흠 있는 물건을 거둬들이다",
  "cattle farm": "소를 기르는 농장",
  "come to know": "알게 되다",
  "defier of authority": "권위를 거스르는 이",
  "draw away little by little": "조금씩 멀어지다",
  "easy bond": "편한 사이",
  "emitting rays": "빛살을 뿜는",
  "fair and sensible": "온당하고 슬기로운",
  "fall back": "뒤로 밀려나다",
  "far-reaching in change": "바꿈이 크게 미치는",
  "field of activity": "활동이 미치는 분야",
  "fighter against rule": "다스림에 맞서 싸우는 이",
  "find a meaning that is not there": "없는 뜻을 찾아내다",
  "fit of temper": "울컥 치미는 화",
  "full reach": "미치는 만큼 전부",
  "gather a crop": "곡식을 걷다",
  "gathering for a cause": "뜻을 위해 모임",
  "get as a return": "보답으로 얻다",
  "give out heat": "열을 내보내다",
  "giving off radiation": "방사선을 내는",
  "going to the root": "뿌리까지 파고드는",
  "grazing estate": "풀 먹이는 넓은 땅",
  "guided by reason": "이치를 따르는",
  "hater of other races": "다른 인종을 미워하는 이",
  "how many to how many": "몇 대 몇",
  "in a sweeping way": "싹 쓸어내듯",
  "joy that carries one away": "넋을 빼앗는 기쁨",
  "keeping to what is possible": "될 만한 데 머무는",
  "kingdom": "임금이 다스리는 나라",
  "large stock farm": "큰 가축 농장",
  "live as it goes": "되는 대로 바로 내보내는",
  "made in advance": "미리 만들어 둔",
  "make real": "실제가 되게 하다",
  "mark on a scale": "척도 위의 표시",
  "mass meeting": "사람이 많이 모인 자리",
  "measure per unit": "단위마다 재는 값",
  "move back": "뒤로 물러가다",
  "not often seen": "자주 보이지 않는",
  "not too much": "지나치지 않은",
  "of atomic decay": "원자가 붕괴하는",
  "of one's race": "제 인종의",
  "off the shelf": "선반에서 바로 꺼내 쓰는",
  "one who judges by race": "인종으로 사람을 가리는 이",
  "one who rises up": "일어나 맞서는 이",
  "open defiance": "드러낸 거스름",
  "pace at which it happens": "일이 일어나는 속도",
  "picked at will": "되는 대로 골라",
  "place in an order": "차례 속의 자리",
  "place on a list": "목록에서의 자리",
  "plant for atomic power": "원자력을 내는 설비",
  "position held": "맡고 있는 자리",
  "put at ease": "마음을 놓게 하다",
  "put one's own sense into": "제 생각을 밀어 넣다",
  "raise young": "새끼를 치다",
  "relation in number": "수로 본 관계",
  "response to something": "무엇에 대한 응답",
  "revolt of the people": "백성이 일으킨 난",
  "rise up against": "맞서 일어서다",
  "rising against rule": "다스림에 맞서 일어섬",
  "scold openly": "드러내어 꾸짖다",
  "score given": "매겨 준 점수",
  "see at last": "마침내 알아보다",
  "seldom found": "좀처럼 볼 수 없는",
  "send out in rays": "빛살로 내보내다",
  "send out once more": "한 번 더 내보내다",
  "set one's mind at rest": "걱정을 내려놓게 하다",
  "show a response": "반응을 보이다",
  "show a second time": "두 번째로 보여 주다",
  "showing things as they are": "있는 대로 보여 주는",
  "span from end to end": "끝에서 끝까지 걸침",
  "speed of change": "변하는 빠르기",
  "take in the harvest": "가을걷이를 들이다",
  "take more from it than it says": "말한 것보다 더 읽어 내다",
  "tell off sharply": "호되게 이르다",
  "thin on the ground": "드물게 흩어져 있는",
  "thinking things through": "끝까지 따져 보는",
  "to do with race": "인종에 얽힌",
  "to the very base": "바탕까지",
  "true to life": "실제와 꼭 같은",
  "vessel where reaction runs": "반응이 일어나는 통",
  "violent anger": "거센 노여움",
  "warm understanding": "따뜻한 이해",
  "what follows an act": "어떤 일 뒤에 따라오는 것",
  "without a set order": "정해진 차례 없이",
  "without delay in reporting": "알리는 데 늦음이 없는"
});

