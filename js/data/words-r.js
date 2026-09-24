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
    ex:[{ s:"The floodwater began to {{}}.", f:"recede", ko:"홍수 물이 물러나기 시작했다." }] },

  /* ── 챕터 3 ────────────────────────────────────── */
  /* 승격이 열셋으로 많지만 열한 자리는 사전 표현을 글자까지 지켰다.
     recession 은 ★ 원본이 '퇴거, 후퇴' 로 적어 둔 자리다 — 거의 안 쓰는 뜻이고
     사전값과 참조 downturn(침체, 하락) 이 모두 경기 뜻이라 사전값으로 바로잡았다.
     '되찾다' 네 낱말(reclaim·recover·regain·retrieve) 가운데 reclaim 을 이 챕터에서
     '개간하다' 쪽으로 비켜 세웠다. */

  /* 승격 ㉒ — 사전 글자 유지(invoice, I). */
  { word:"receipt", pron:"리싯", pos:"n", level:"B1", meanings:["영수증"],
    syn:["invoice","paper showing payment","slip for what one paid"],
    ex:[{ s:"Keep the {{}} in a safe place.", f:"receipt", ko:"영수증을 안전한 곳에 보관하라." }] },

  /* 승격 ㉓ — 사전 글자 유지(accept, A · be presented with, B). */
  { word:"receive", pron:"리시브", pos:"v", level:"B1", meanings:["받다","수령하다"],
    syn:["accept","take what is given","get into one's hands"],
    ex:[{ s:"Did you {{}} my letter?", f:"receive", ko:"내 편지를 받았나요?" }] },

  /* 승격 ㉔ — 사전의 쌍반점만 쉼표로 갈랐다(banquet, B · hospitality, H).
     원본 '받아들임, 수신, 환영회' 세 갈래를 둘로 줄인 셈이다. */
  { word:"reception", pron:"리셉션", pos:"n", level:"B2", meanings:["접수","환영회"],
    syn:["banquet","welcoming party","front desk"],
    ex:[{ s:"The wedding {{}} was held outdoors.", f:"reception", ko:"결혼 환영회는 밖에서 열렸다." }] },

  /* 승격 ㉕ — 사전 단일값 유지(open-minded, O). */
  { word:"receptive", pron:"리셉티브", pos:"adj", level:"C1", meanings:["받아들일 자세가 된"],
    syn:["open-minded","ready to take in","willing to listen"],
    ex:[{ s:"She was {{}} to new ideas.", f:"receptive", ko:"그녀는 새 생각을 받아들일 자세가 되어 있었다." }] },

  /* 원본의 괄호 "휴식 (시간)" 을 걷었다. repose(편안한 쉼 · 챕터 8) 와 갈랐다. */
  { word:"recess", pron:"리세스", pos:"n", level:"B2", meanings:["휴식 시간"],
    syn:["break in the day","pause in work","time off between sessions"],
    ex:[{ s:"The children ran out at {{}}.", f:"recess", ko:"아이들이 휴식 시간에 뛰어나갔다." }] },

  /* 승격 ㉖ — ★ 원본은 '퇴거, 후퇴' 였다. 사전값과 참조 downturn 이 모두 경기
     뜻이라 사전 표현을 글자까지 지켰다. */
  { word:"recession", pron:"리세션", pos:"n", level:"B2", meanings:["경기 후퇴","불황"],
    syn:["downturn","slump in trade","fall in business"],
    ex:[{ s:"The country slid into {{}}.", f:"recession", ko:"그 나라는 불황에 빠져들었다." }] },

  /* 승격 ㉗ — 사전 글자 유지(formula, F). 원본 '비법' 대신 사전의 '비결' 이다. */
  { word:"recipe", pron:"레서피", pos:"n", level:"B1", meanings:["조리법","비결"],
    syn:["formula","set of cooking steps","way to make it"],
    ex:[{ s:"She followed her mother's {{}}.", f:"recipe", ko:"그녀는 어머니의 조리법을 따랐다." }] },

  /* 승격 ㉘ — 사전 글자 유지(beneficiary, B · donor 반의어, D). 원본은 순서가
     거꾸로였다. '수혜자' 는 beneficiary 와 글자가 같아 서로 오답에서 빠진다. */
  { word:"recipient", pron:"리시피언트", pos:"n", level:"C1", meanings:["수령인","수혜자"],
    syn:["beneficiary","one who receives","person given something"], ant:["donor"],
    ex:[{ s:"The {{}} signed for the parcel.", f:"recipient", ko:"수령인이 소포에 서명했다." }] },

  /* 원본은 '암송하다, 낭송하다, 열거하다' 세 갈래였다. '낭송하다' 는 '암송하다' 와
     같은 자리라 버렸다. */
  { word:"recite", pron:"리사이트", pos:"v", level:"C1", meanings:["암송하다","열거하다"],
    syn:["say from memory","read aloud by heart","list one by one"],
    ex:[{ s:"He can {{}} the whole poem.", f:"recite", ko:"그는 그 시 전체를 암송할 수 있다." }] },

  /* 승격 ㉙ — 사전의 쌍반점만 쉼표로 갈랐다(calculate, C · estimate, E).
     '계산하다' 는 calculate 의 첫 뜻과 같아 서로 오답에서 빠진다. */
  { word:"reckon", pron:"레컨", pos:"v", level:"B2", meanings:["계산하다","생각하다"],
    syn:["calculate","work out a number","take to be so"],
    ex:[{ s:"I {{}} it will rain tonight.", f:"reckon", ko:"오늘 밤 비가 올 것으로 생각한다." }] },

  /* 승격 ㉚ — 사전은 '되찾다; 개간하다' 였다. '되찾다' 는 recover·regain·retrieve
     세 낱말이 이미 나눠 가진 자리라 둘째 갈래를 앞세웠다. 참조가 없어 자유롭다. */
  { word:"reclaim", pron:"리클레임", pos:"v", level:"C1", meanings:["개간하다","반환을 요구하다"],
    syn:["make land fit for use","ask to have back","win back for use"],
    ex:[{ s:"They plan to {{}} the marsh.", f:"reclaim", ko:"그들은 그 습지를 개간할 계획이다." }] },

  /* 승격 ㉛ — 사전 글자 유지(awareness, A · identification, I). '인식' 은
     awareness·perception(P) 과 글자가 같아 서로 오답에서 빠진다. */
  { word:"recognition", pron:"레커그니션", pos:"n", level:"B2", meanings:["인식","인정"],
    syn:["awareness","act of knowing again","credit given"],
    ex:[{ s:"The work won wide {{}}.", f:"recognition", ko:"그 작품은 널리 인정을 받았다." }] },

  /* 승격 ㉜ — 사전의 쌍반점만 쉼표로 갈랐다(acknowledge·appreciate·identify 세 곳). */
  { word:"recognize", pron:"레커그나이즈", pos:"v", level:"B1", meanings:["인식하다","인정하다"],
    syn:["acknowledge","know again on sight","admit to be true"],
    ex:[{ s:"I did not {{}} her at first.", f:"recognize", ko:"나는 처음에 그녀를 인식하지 못했다." }] },

  /* 승격 ㉝ — 사전 글자 유지(advise, A). */
  { word:"recommend", pron:"레커멘드", pos:"v", level:"B1", meanings:["추천하다"],
    syn:["advise","speak well of","put forward as good"],
    ex:[{ s:"Can you {{}} a good dentist?", f:"recommend", ko:"좋은 치과 의사를 추천해 주시겠어요?" }] },

  { word:"reconcile", pron:"레컨사일", pos:"v", level:"C1", meanings:["조화시키다","화해시키다"],
    syn:["bring into accord","settle a quarrel","make two things agree"],
    ex:[{ s:"It is hard to {{}} the two accounts.", f:"reconcile", ko:"두 진술을 조화시키기는 어렵다." }] },

  /* regenerate(재생하다 · 챕터 5) 에서 '재건하다' 를 빼고 이 자리에 두었다. */
  { word:"reconstruct", pron:"리컨스트럭트", pos:"v", level:"B2", meanings:["재건하다","재구성하다"],
    syn:["build again","put back together","piece together anew"],
    ex:[{ s:"They will {{}} the old bridge.", f:"reconstruct", ko:"그들은 그 낡은 다리를 재건할 것이다." }] },

  /* 승격 ㉞ — 사전의 쌍반점만 쉼표로 갈랐다(collect on, C). '되찾다' 는
     retrieve·regain 과 글자가 같아 셋이 서로의 오답에서 빠진다. */
  { word:"recover", pron:"리커버", pos:"v", level:"B1", meanings:["회복하다","되찾다"],
    syn:["collect on","get well again","win back"],
    ex:[{ s:"It took a month to {{}}.", f:"recover", ko:"회복하는 데 한 달이 걸렸다." }] },

  { word:"recreational", pron:"레크리에이셔널", pos:"adj", level:"B2", meanings:["휴양의","오락의"],
    syn:["for rest and play","done for fun","to do with leisure"],
    ex:[{ s:"The town built a {{}} center.", f:"recreational", ko:"그 고을은 휴양의 시설을 지었다." }] },

  /* 원본 '채용, 신규 모집; 보충' 세 갈래에서 '보충' 을 버렸다. */
  { word:"recruitment", pron:"리크루트먼트", pos:"n", level:"B2", meanings:["채용","신규 모집"],
    syn:["taking on new people","hiring drive","calling in new members"],
    ex:[{ s:"The firm slowed its {{}}.", f:"recruitment", ko:"그 회사는 채용을 늦췄다." }] },

  { word:"rectangular", pron:"렉탱귤러", pos:"adj", level:"B2", meanings:["직사각형의"],
    syn:["shaped like a long box","four-sided with right angles","oblong"],
    ex:[{ s:"The table is {{}}.", f:"rectangular", ko:"그 탁자는 직사각형이다." }] },

  /* ── 챕터 4 ────────────────────────────────────── */
  /* reflect 어근 넷이 한 챕터에 모였다 — reflect·reflection·reflective·reflex.
     원본은 reflex 를 '반사 작용, 반영' 으로 적어 두었는데 '반영' 은 reflection 의
     뜻이다(★ 고쳤다). 품사로도 갈린다 — 동사/명사/형용사/명사.
     reduce 는 참조가 일곱 곳이라 저장소에서 가장 널리 쓰이는 선택지 가운데 하나다.
     사전 표현을 글자까지 지켜 일곱 곳을 모두 보존했다. */

  { word:"recur", pron:"리커", pos:"v", level:"C1", meanings:["다시 일어나다","반복되다"],
    syn:["happen again","come round once more","return in time"],
    ex:[{ s:"The fault may {{}} next winter.", f:"recur", ko:"그 고장은 다음 겨울에 다시 일어날 수 있다." }] },

  { word:"recycle", pron:"리사이클", pos:"v", level:"B1", meanings:["재활용하다"],
    syn:["use again","make into something new","put back into use"],
    ex:[{ s:"We {{}} paper and glass.", f:"recycle", ko:"우리는 종이와 유리를 재활용한다." }] },

  /* 승격 ㉟ — 사전 글자 유지. 참조가 일곱 곳(amplify·boost 반의어, condense·
     curtail·cut back on·lower·minimize) 이라 R 세트에서 가장 조심한 자리다.
     원본의 '낮추다' 는 lower 의 첫 뜻이라 붙이지 않았다. */
  { word:"reduce", pron:"리두스", pos:"v", level:"B1", meanings:["줄이다","감소시키다"],
    syn:["curtail","lower","bring down in size"],
    ex:[{ s:"They will {{}} the staff.", f:"reduce", ko:"그들은 직원을 줄일 것이다." }] },

  { word:"redundant", pron:"리던던트", pos:"adj", level:"C1", meanings:["여분의","쓸데없이 많은"],
    syn:["more than is needed","left over and useless","saying the same twice"],
    ex:[{ s:"The last line is {{}}.", f:"redundant", ko:"마지막 줄은 여분이다." }] },

  { word:"reed", pron:"리드", pos:"n", level:"C1", meanings:["갈대"],
    syn:["tall water grass","stalk by the water","marsh plant"],
    ex:[{ s:"He cut a {{}} by the pond.", f:"reed", ko:"그는 못가에서 갈대를 꺾었다." }] },

  /* 승격 ㊱ — 사전의 쌍반점만 쉼표로 갈랐다(consult, C). '언급하다' 는
     mention(M) 의 첫 뜻과 같아 서로 오답에서 빠진다. */
  { word:"refer", pron:"리퍼", pos:"v", level:"B1", meanings:["참조하다","언급하다"],
    syn:["consult","look to for help","speak of"],
    ex:[{ s:"Please {{}} to page ten.", f:"refer", ko:"10쪽을 참조하세요." }] },

  /* 승격 ㊲ — 사전의 쌍반점만 쉼표로 갈랐다(cite, C). 원본의 '인용 문헌' 은
     버렸다. 참조 cite 는 동사라 유의어로는 쓰지 않고 구로 적었다. */
  { word:"reference", pron:"레퍼런스", pos:"n", level:"B1", meanings:["참조","언급"],
    syn:["a looking-up","mention of a source","note pointing elsewhere"],
    ex:[{ s:"The book has no {{}} to that war.", f:"reference", ko:"그 책에는 그 전쟁에 대한 언급이 없다." }] },

  /* 승격 ㊳ — 사전의 쌍반점만 쉼표로 갈랐다(civilize, C). 원본 '개선하다' 는
     바로 아래 refinement·improvement 자리라 사전값 쪽이 낫다. */
  { word:"refine", pron:"리파인", pos:"v", level:"B2", meanings:["정제하다","세련되게 하다"],
    syn:["civilize","make pure","polish to a finer state"],
    ex:[{ s:"They {{}} sugar at the plant.", f:"refine", ko:"그들은 그 공장에서 설탕을 정제한다." }] },

  /* '개선' 은 improvement 의 첫 뜻과 같아 서로 오답에서 빠진다. */
  { word:"refinement", pron:"리파인먼트", pos:"n", level:"B2", meanings:["개선","세련됨"],
    syn:["a making better","polish of manner","touch that improves"],
    ex:[{ s:"The design needs one more {{}}.", f:"refinement", ko:"그 설계는 개선이 한 번 더 필요하다." }] },

  /* 승격 ㊴ — 사전의 쌍반점만 쉼표로 갈랐다(mirror, M). 원본의 '나타내다' 는
     represent(챕터 8) 자리다. */
  { word:"reflect", pron:"리플렉트", pos:"v", level:"B1", meanings:["반영하다","반사하다"],
    syn:["mirror","throw back light","show as in a glass"],
    ex:[{ s:"Prices {{}} demand.", f:"reflect", ko:"가격은 수요를 반영한다." }] },

  /* 승격 ㊵ — 사전 글자 유지(introspection, I · meditation, M). */
  { word:"reflection", pron:"리플렉션", pos:"n", level:"B2", meanings:["돌아봄","반영"],
    syn:["introspection","quiet thought","image thrown back"],
    ex:[{ s:"After some {{}} he agreed.", f:"reflection", ko:"얼마간 돌아본 뒤 그는 동의했다." }] },

  /* 승격 ㊶ — 사전 단일값 유지(introspective, I). */
  { word:"reflective", pron:"리플렉티브", pos:"adj", level:"C1", meanings:["되돌아보는"],
    syn:["introspective","given to quiet thought","turning things over"],
    ex:[{ s:"He was in a {{}} mood.", f:"reflective", ko:"그는 되돌아보는 마음가짐이었다." }] },

  /* ★ 원본은 '반사 작용, 반영' 이었다. '반영' 은 바로 위 reflection 의 뜻이라
     '반사 신경' 으로 바꿨다. */
  { word:"reflex", pron:"리플렉스", pos:"n", level:"C1", meanings:["반사 작용","반사 신경"],
    syn:["automatic response","act without thought","built-in reaction"],
    ex:[{ s:"The doctor tested his {{}}.", f:"reflex", ko:"의사가 그의 반사 작용을 확인했다." }] },

  /* 승격 ㊷ — 사전은 '개혁; 개선하다' 로 명사와 동사가 섞여 있었다. 참조가 없어
     원본이 앞세운 명사로 세웠다. */
  { word:"reform", pron:"리폼", pos:"n", level:"B2", meanings:["개혁","쇄신"],
    syn:["change for the better","overhaul of a system","sweeping repair"],
    ex:[{ s:"The party promised land {{}}.", f:"reform", ko:"그 정당은 토지 개혁을 약속했다." }] },

  /* ★ 첫 갈래를 '삼가다' 로 잡았다. 원본의 '억제하다' 는 inhibit·hold back 이
     이미 쓰는 자리이고, repress(억압하다)·restrain(억제하다, 제지하다) 와도
     부딪힌다. 넷을 삼가다 / 억압하다 / 억제하다 로 갈랐다. */
  { word:"refrain", pron:"리프레인", pos:"v", level:"B2", meanings:["삼가다","참고 하지 않다"],
    syn:["hold off from","keep oneself from","do without doing"],
    ex:[{ s:"Please {{}} from smoking.", f:"refrain", ko:"흡연을 삼가 주세요." }] },

  /* 원본 '가벼운 식사, 다과; 원기회복, 기분상쾌' 네 갈래를 둘로 줄였다. */
  { word:"refreshments", pron:"리프레시먼츠", pos:"n", level:"B2", meanings:["가벼운 식사","다과"],
    syn:["light food and drink","snacks served","tea and cakes"],
    ex:[{ s:"{{}} will be served after the talk.", f:"Refreshments", ko:"강연 뒤에 다과가 나올 것이다." }] },

  { word:"refuge", pron:"레퓨지", pos:"n", level:"B2", meanings:["피난처"],
    syn:["place of safety","shelter from danger","spot out of harm's way"],
    ex:[{ s:"They sought {{}} in the church.", f:"refuge", ko:"그들은 교회에서 피난처를 찾았다." }] },

  { word:"refugee", pron:"레퓨지이", pos:"n", level:"B2", meanings:["피난민","망명자"],
    syn:["one who flees danger","person seeking shelter","exile from home"],
    ex:[{ s:"The {{}} crossed the border at night.", f:"refugee", ko:"그 피난민은 밤에 국경을 넘었다." }] },

  /* 승격 ㊸ — 사전은 '환불하다, 환불' 로 동사와 명사가 섞여 있었다. 참조
     charge(청구하다) 가 동사여서 동사로 세웠다. 원본의 괄호 '환불(금)' 도 걷혔다. */
  { word:"refund", pron:"리펀드", pos:"v", level:"B2", meanings:["환불하다","돈을 돌려주다"],
    syn:["pay back","give the money back","return what was paid"], ant:["charge"],
    ex:[{ s:"The shop will {{}} the price.", f:"refund", ko:"그 가게는 값을 환불해 줄 것이다." }] },

  /* '되찾다' 를 recover·retrieve 와 글자까지 맞췄다 — 셋이 서로의 오답에서 빠진다. */
  { word:"regain", pron:"리게인", pos:"v", level:"B2", meanings:["되찾다","다시 얻다"],
    syn:["get back again","recover hold of","come to have once more"],
    ex:[{ s:"She began to {{}} her strength.", f:"regain", ko:"그녀는 기운을 되찾기 시작했다." }] },

  /* ── 챕터 5 ────────────────────────────────────── */
  /* ★ register 를 동사로 세우면서 명사 뜻('기록부') 을 노리던 참조 세 곳을
     손질했다 — archive·directory·index 다. 사전값과 원본 첫 갈래가 모두 동사고,
     참조 다섯 곳 가운데 enroll(등록하다)·come to mind(생각나다) 두 곳이 동사
     쪽이어서다.
     ★ rein 은 원본이 '구속; 고삐' 로 순서가 거꾸로였다 — 고삐가 본뜻이다.
     ★ rehearse 는 원본 '반복하다' 가 reproduce 자리라 '예행연습하다' 로 바꿨고
     외래어 '리허설' 도 걷었다(rehearsal 도 함께).
     reign 은 '지배하다' 를 rule·dominate 에 넘기고 '군림하다' 를 받았다. */

  { word:"regard", pron:"리가드", pos:"v", level:"B1", meanings:["여기다","간주하다"],
    syn:["look on as","think of in a way","hold to be"],
    ex:[{ s:"We {{}} him as a friend.", f:"regard", ko:"우리는 그를 친구로 여긴다." }] },

  /* 승격 ㊹ — 사전 단일값 유지(considering, C · in terms of, I). */
  { word:"regarding", pron:"리가딩", pos:"phr", level:"B2", meanings:["~에 관하여"],
    syn:["about the matter of","with respect to","on the subject of"] },

  { word:"regardless of", pron:"리가드리스 오브", pos:"phr", level:"B2", meanings:["~에 상관없이"],
    syn:["no matter what","without regard to","whatever may be"] },

  /* 원본 '재생하다, 재건하다' 에서 '재건하다' 는 reconstruct(챕터 3) 에 넘겼다. */
  { word:"regenerate", pron:"리제너레이트", pos:"v", level:"C1", meanings:["재생하다","되살아나게 하다"],
    syn:["grow back","bring new life to","renew itself"],
    ex:[{ s:"The forest will {{}} in time.", f:"regenerate", ko:"그 숲은 때가 되면 재생할 것이다." }] },

  /* 승격 ㊺ — 사전 글자 유지(dynasty, D). 원본의 괄호 '통치 (방식)' 는 걷고
     '통치' 는 reign 쪽에 두어 둘을 갈랐다. */
  { word:"regime", pron:"레짐", pos:"n", level:"C1", meanings:["정권","체제"],
    syn:["dynasty","ruling set-up","government in power"],
    ex:[{ s:"The old {{}} fell in a week.", f:"regime", ko:"그 낡은 정권은 한 주 만에 무너졌다." }] },

  /* regime(정권) 과 철자가 한 글자 차이다 — 뜻이 전혀 다름을 예문으로 못박았다. */
  { word:"regimen", pron:"레지먼", pos:"n", level:"C2", meanings:["식이 요법"],
    syn:["set plan for eating","rules for diet","course of health care"],
    ex:[{ s:"The doctor put him on a strict {{}}.", f:"regimen", ko:"의사는 그에게 엄격한 식이 요법을 시켰다." }] },

  /* 승격 ㊻ — ★ 사전·원본 모두 동사다. 명사 뜻('기록부, 명부') 을 노리던 참조
     세 곳(archive·directory·index) 을 손질하고 동사로 세웠다. 쌍반점만 쉼표로
     바뀌어 enroll·come to mind 두 곳은 구두점만 달라진다. */
  { word:"register", pron:"레지스터", pos:"v", level:"B1", meanings:["등록하다","감지하다"],
    syn:["enroll","put on a list","take note of"],
    ex:[{ s:"You must {{}} before Friday.", f:"register", ko:"금요일 전에 등록해야 한다." }] },

  /* 승격 ㊼ — 사전 글자 유지(enrollment, E). 원본의 괄호 '(출생, 사망 등의) 신고'
     는 걷고 사전의 '기재' 를 썼다. */
  { word:"registration", pron:"레지스트레이션", pos:"n", level:"B2", meanings:["등록","기재"],
    syn:["enrollment","signing up","entry on a list"],
    ex:[{ s:"{{}} closes at noon.", f:"Registration", ko:"등록은 정오에 마감된다." }] },

  /* 승격 ㊽ — 사전 글자 유지(degenerate, D). */
  { word:"regress", pron:"리그레스", pos:"v", level:"C2", meanings:["퇴행하다","되돌아가다"],
    syn:["degenerate","slip back","go back to an earlier state"],
    ex:[{ s:"Without care the patient may {{}}.", f:"regress", ko:"돌보지 않으면 그 환자는 퇴행할 수 있다." }] },

  /* 둘째 갈래를 '유감스러워하다' 로 다듬었다 — '유감으로 여기다' 로 두면 바로 위
     regard(여기다) 와 글자가 겹친다. */
  { word:"regret", pron:"리그렛", pos:"v", level:"B1", meanings:["후회하다","유감스러워하다"],
    syn:["be sorry for","wish one had not","rue a choice"],
    ex:[{ s:"You will {{}} that later.", f:"regret", ko:"너는 나중에 그것을 후회할 것이다." }] },

  /* 승격 ㊾ — 사전 단일값 유지(lamentable, L). */
  { word:"regrettable", pron:"리그레터블", pos:"adj", level:"C1", meanings:["유감스러운"],
    syn:["lamentable","to be sorry about","that one would undo"],
    ex:[{ s:"The delay was {{}}.", f:"regrettable", ko:"그 지연은 유감스러웠다." }] },

  /* 승격 ㊿ — 사전 글자 유지(adjust, A). restrict(제한하다) 와 갈랐다. */
  { word:"regulate", pron:"레귤레이트", pos:"v", level:"B2", meanings:["규제하다","조절하다"],
    syn:["adjust","keep in order by rule","set to a standard"],
    ex:[{ s:"The law will {{}} online ads.", f:"regulate", ko:"그 법은 온라인 광고를 규제할 것이다." }] },

  /* restore(돌려주다, 복원하다) 와 갈랐다 — 원본의 '회복시키다' 는 쓰지 않았다. */
  { word:"rehabilitate", pron:"리허빌리테이트", pos:"v", level:"C2", meanings:["재활 치료를 하다","제구실을 하게 돕다"],
    syn:["nurse back to health","help stand on one's own","bring back into use"],
    ex:[{ s:"The center will {{}} injured birds.", f:"rehabilitate", ko:"그 센터는 다친 새들에게 재활 치료를 할 것이다." }] },

  /* 외래어 '리허설' 을 걷었다. */
  { word:"rehearsal", pron:"리허설", pos:"n", level:"B2", meanings:["예행연습"],
    syn:["practice before the show","trial run of a play","run-through"],
    ex:[{ s:"The last {{}} ran late.", f:"rehearsal", ko:"마지막 예행연습이 늦게까지 이어졌다." }] },

  /* ★ 원본은 '반복하다; 리허설을 하다' 였다. '반복하다' 는 reproduce(챕터 8) 자리라
     '예행연습하다' 를 앞세우고 외래어도 걷었다. */
  { word:"rehearse", pron:"리허스", pos:"v", level:"B2", meanings:["예행연습하다","되짚어 보다"],
    syn:["practice for a show","go through it beforehand","run over it again"],
    ex:[{ s:"They {{}} twice a week.", f:"rehearse", ko:"그들은 주에 두 번 예행연습한다." }] },

  /* 원본은 '지배하다, 주권을 잡다; 통치, 지배' 로 동사와 명사가 섞여 있었다.
     동사로 세우고 '지배하다' 는 rule·dominate 에 넘겨 '군림하다' 를 썼다. */
  { word:"reign", pron:"레인", pos:"v", level:"C1", meanings:["군림하다","주권을 잡다"],
    syn:["sit on the throne","hold sovereign power","rule as a monarch"],
    ex:[{ s:"She went on to {{}} for forty years.", f:"reign", ko:"그녀는 이어서 40년을 군림했다." }] },

  /* 승격 51 — 사전 글자 유지(compensate, C). */
  { word:"reimburse", pron:"리임버스", pos:"v", level:"C2", meanings:["상환하다","배상하다"],
    syn:["compensate","pay one back for costs","make good the outlay"],
    ex:[{ s:"The firm will {{}} your travel costs.", f:"reimburse", ko:"회사가 당신의 여행 비용을 상환할 것이다." }] },

  /* ★ 원본은 '구속; 고삐' 로 순서가 거꾸로였다 — 고삐가 본뜻이고 '구속' 은
     비유다. '구속' 은 restraint(절제, 구속 · 챕터 11) 와 글자가 같아 배제된다. */
  { word:"rein", pron:"레인", pos:"n", level:"C1", meanings:["고삐","구속"],
    syn:["strap for guiding a horse","check on freedom","hold over another"],
    ex:[{ s:"He pulled the {{}} to stop the horse.", f:"rein", ko:"그는 말을 세우려 고삐를 당겼다." }] },

  { word:"reincarnate", pron:"리인카네이트", pos:"v", level:"C2", meanings:["환생시키다","다시 태어나게 하다"],
    syn:["give a new body to","bring back in another form","send back to life"],
    ex:[{ s:"The tale says the gods {{}} the hero.", f:"reincarnate", ko:"그 이야기는 신들이 그 영웅을 환생시킨다고 한다." }] },

  /* 승격 52 — 사전 단일값 유지(bolster, B · counteract 반의어, C). */
  { word:"reinforce", pron:"리인포스", pos:"v", level:"B2", meanings:["강화하다"],
    syn:["bolster","make stronger","back up with more"],
    ex:[{ s:"Steel bars {{}} the wall.", f:"reinforce", ko:"철근이 그 벽을 강화한다." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
  "a looking-up": "찾아보는 일",
  "a making better": "더 낫게 만듦",
  "about the matter of": "~의 일에 대하여",
  "act in answer": "답으로 움직이다",
  "act of knowing again": "다시 알아봄",
  "act without thought": "생각 없이 나오는 움직임",
  "admit to be true": "참이라고 받아들이다",
  "air again": "다시 내보내다",
  "answer with action": "행동으로 답하다",
  "answering move": "되받아 내는 움직임",
  "as a preference": "더 좋아서",
  "as it happens": "일어나는 그대로",
  "ask to have back": "돌려 달라고 하다",
  "at the root": "뿌리에서부터",
  "atomic pile": "원자로 더미",
  "automatic response": "저절로 나오는 반응",
  "back up with more": "더 보태어 받치다",
  "balance between two": "둘 사이의 균형",
  "be sorry for": "~을 안타깝게 여기다",
  "believer in racial superiority": "한 인종이 낫다고 믿는 이",
  "book of records": "기록을 담은 책",
  "break in the day": "하루 중의 쉼",
  "bring back in another form": "다른 꼴로 되돌리다",
  "bring back into use": "다시 쓰이게 되돌리다",
  "bring back to mind": "다시 머리에 떠올리다",
  "bring down in size": "크기를 낮추다",
  "bring into accord": "서로 맞게 하다",
  "bring new life to": "새 생명을 주다",
  "bring to full growth": "다 자라게 하다",
  "bring up a child": "아이를 길러 내다",
  "build again": "다시 세우다",
  "built-in reaction": "몸에 박힌 반응",
  "by chance": "우연히",
  "call in a faulty product": "흠 있는 물건을 거둬들이다",
  "calling in new members": "새 사람을 불러 모음",
  "cattle farm": "소를 기르는 농장",
  "change for the better": "나은 쪽으로 바꿈",
  "check on freedom": "자유를 누르는 것",
  "come round once more": "한 번 더 돌아오다",
  "come to have once more": "또 지니게 되다",
  "come to know": "알게 되다",
  "course of health care": "몸을 돌보는 과정",
  "credit given": "인정해 주는 것",
  "defier of authority": "권위를 거스르는 이",
  "do without doing": "하지 않고 넘기다",
  "done for fun": "즐기려고 하는",
  "draw away little by little": "조금씩 멀어지다",
  "easy bond": "편한 사이",
  "emitting rays": "빛살을 뿜는",
  "entry on a list": "명단에 오른 항목",
  "exile from home": "고향을 떠난 이",
  "fair and sensible": "온당하고 슬기로운",
  "fall back": "뒤로 밀려나다",
  "fall in business": "장사가 떨어짐",
  "far-reaching in change": "바꿈이 크게 미치는",
  "field of activity": "활동이 미치는 분야",
  "fighter against rule": "다스림에 맞서 싸우는 이",
  "find a meaning that is not there": "없는 뜻을 찾아내다",
  "fit of temper": "울컥 치미는 화",
  "for rest and play": "쉬고 놀기 위한",
  "four-sided with right angles": "네 변에 직각인",
  "front desk": "맞이하는 창구",
  "full reach": "미치는 만큼 전부",
  "gather a crop": "곡식을 걷다",
  "gathering for a cause": "뜻을 위해 모임",
  "get as a return": "보답으로 얻다",
  "get back again": "다시 손에 넣다",
  "get into one's hands": "손에 넣다",
  "get well again": "다시 낫다",
  "give a new body to": "새 몸을 주다",
  "give out heat": "열을 내보내다",
  "give the money back": "돈을 되돌려 주다",
  "given to quiet thought": "조용히 생각에 잠기는",
  "giving off radiation": "방사선을 내는",
  "go back to an earlier state": "앞선 상태로 돌아가다",
  "go through it beforehand": "미리 한 번 해 보다",
  "going to the root": "뿌리까지 파고드는",
  "government in power": "권력을 쥔 정부",
  "grazing estate": "풀 먹이는 넓은 땅",
  "grow back": "다시 자라나다",
  "guided by reason": "이치를 따르는",
  "happen again": "또 일어나다",
  "hater of other races": "다른 인종을 미워하는 이",
  "help stand on one's own": "제 발로 서게 돕다",
  "hiring drive": "사람 뽑기 운동",
  "hold off from": "~하지 않고 버티다",
  "hold over another": "남을 붙잡아 두는 힘",
  "hold sovereign power": "으뜸 권력을 쥐다",
  "hold to be": "~라고 붙들다",
  "how many to how many": "몇 대 몇",
  "image thrown back": "되비친 모습",
  "in a sweeping way": "싹 쓸어내듯",
  "joy that carries one away": "넋을 빼앗는 기쁨",
  "keep in order by rule": "규칙으로 다잡다",
  "keep oneself from": "스스로 못 하게 하다",
  "keeping to what is possible": "될 만한 데 머무는",
  "kingdom": "임금이 다스리는 나라",
  "know again on sight": "보고 다시 알아보다",
  "large stock farm": "큰 가축 농장",
  "left over and useless": "남았는데 쓸 데 없는",
  "light food and drink": "가벼운 음식과 마실 것",
  "list of entries": "항목을 적은 목록",
  "list one by one": "하나씩 늘어놓다",
  "live as it goes": "되는 대로 바로 내보내는",
  "look on as": "~로 보다",
  "look to for help": "도움을 찾아 보다",
  "made in advance": "미리 만들어 둔",
  "make good the outlay": "들인 돈을 메워 주다",
  "make into something new": "새것으로 만들다",
  "make land fit for use": "땅을 쓸 수 있게 만들다",
  "make pure": "순수하게 만들다",
  "make real": "실제가 되게 하다",
  "make stronger": "더 튼튼하게 하다",
  "make two things agree": "둘을 들어맞게 하다",
  "mark on a scale": "척도 위의 표시",
  "marsh plant": "늪에 자라는 풀",
  "mass meeting": "사람이 많이 모인 자리",
  "measure per unit": "단위마다 재는 값",
  "mention of a source": "출처를 밝힘",
  "more than is needed": "필요한 것보다 많은",
  "move back": "뒤로 물러가다",
  "not often seen": "자주 보이지 않는",
  "not too much": "지나치지 않은",
  "note pointing elsewhere": "다른 데를 가리키는 쪽지",
  "nurse back to health": "돌봐 낫게 하다",
  "of atomic decay": "원자가 붕괴하는",
  "of one's race": "제 인종의",
  "off the shelf": "선반에서 바로 꺼내 쓰는",
  "on the subject of": "~을 두고",
  "one who flees danger": "위험을 피해 온 이",
  "one who judges by race": "인종으로 사람을 가리는 이",
  "one who receives": "받는 이",
  "one who rises up": "일어나 맞서는 이",
  "open defiance": "드러낸 거스름",
  "overhaul of a system": "제도를 뜯어고침",
  "pace at which it happens": "일이 일어나는 속도",
  "paper showing payment": "값을 치른 것을 보이는 종이",
  "pause in work": "일을 멈춘 동안",
  "pay back": "돈을 갚다",
  "pay one back for costs": "든 비용을 돌려주다",
  "person given something": "무엇을 받은 사람",
  "person seeking shelter": "몸 붙일 곳을 찾는 사람",
  "picked at will": "되는 대로 골라",
  "piece together anew": "조각을 새로 이어 붙이다",
  "place in an order": "차례 속의 자리",
  "place of safety": "안전한 곳",
  "place on a list": "목록에서의 자리",
  "plant for atomic power": "원자력을 내는 설비",
  "polish of manner": "몸가짐의 세련",
  "polish to a finer state": "더 곱게 다듬다",
  "position held": "맡고 있는 자리",
  "practice before the show": "공연 전에 익히기",
  "practice for a show": "무대에 앞서 익히다",
  "put at ease": "마음을 놓게 하다",
  "put back into use": "다시 쓰이게 하다",
  "put back together": "다시 맞춰 놓다",
  "put forward as good": "좋다고 내놓다",
  "put on a list": "명단에 올리다",
  "put one's own sense into": "제 생각을 밀어 넣다",
  "quiet thought": "조용한 생각",
  "raise young": "새끼를 치다",
  "read aloud by heart": "외워 소리 내어 읽다",
  "ready to take in": "받아들일 준비가 된",
  "recover hold of": "다시 붙들다",
  "relation in number": "수로 본 관계",
  "renew itself": "스스로 새로워지다",
  "response to something": "무엇에 대한 응답",
  "return in time": "때가 되면 되돌아오다",
  "return what was paid": "낸 것을 돌려주다",
  "revolt of the people": "백성이 일으킨 난",
  "rise up against": "맞서 일어서다",
  "rising against rule": "다스림에 맞서 일어섬",
  "roll of names": "이름을 적은 명부",
  "rue a choice": "고른 것을 애석해하다",
  "rule as a monarch": "임금으로서 다스리다",
  "rules for diet": "먹거리에 대한 규칙",
  "ruling set-up": "다스리는 틀",
  "run over it again": "다시 훑어 보다",
  "run-through": "처음부터 훑어 보기",
  "say from memory": "외운 것을 말하다",
  "saying the same twice": "같은 말을 두 번 하는",
  "scold openly": "드러내어 꾸짖다",
  "score given": "매겨 준 점수",
  "see at last": "마침내 알아보다",
  "seldom found": "좀처럼 볼 수 없는",
  "send back to life": "다시 살아 오게 하다",
  "send out in rays": "빛살로 내보내다",
  "send out once more": "한 번 더 내보내다",
  "set of cooking steps": "음식 만드는 차례",
  "set one's mind at rest": "걱정을 내려놓게 하다",
  "set plan for eating": "정해진 먹는 계획",
  "set to a standard": "기준에 맞춰 두다",
  "settle a quarrel": "다툼을 가라앉히다",
  "shaped like a long box": "긴 상자 꼴인",
  "shelter from danger": "위험을 막아 주는 곳",
  "show a response": "반응을 보이다",
  "show a second time": "두 번째로 보여 주다",
  "show as in a glass": "거울처럼 비추다",
  "showing things as they are": "있는 대로 보여 주는",
  "signing up": "이름을 적어 넣음",
  "sit on the throne": "왕좌에 앉다",
  "slip back": "뒤로 미끄러지다",
  "slip for what one paid": "낸 값을 적은 쪽지",
  "slump in trade": "거래가 주저앉음",
  "snacks served": "내놓는 간식",
  "span from end to end": "끝에서 끝까지 걸침",
  "speak of": "입에 올리다",
  "speak well of": "좋게 말하다",
  "speed of change": "변하는 빠르기",
  "spot out of harm's way": "해가 미치지 않는 자리",
  "stalk by the water": "물가에 선 줄기",
  "strap for guiding a horse": "말을 끄는 줄",
  "sweeping repair": "싹 손보는 일",
  "take in the harvest": "가을걷이를 들이다",
  "take more from it than it says": "말한 것보다 더 읽어 내다",
  "take to be so": "그러하다고 여기다",
  "take what is given": "주는 것을 받다",
  "taking on new people": "새 사람을 들임",
  "tall water grass": "물가에 키 큰 풀",
  "tea and cakes": "차와 과자",
  "tell off sharply": "호되게 이르다",
  "that one would undo": "되돌리고 싶은",
  "thin on the ground": "드물게 흩어져 있는",
  "think of in a way": "어떻게 생각하다",
  "thinking things through": "끝까지 따져 보는",
  "throw back light": "빛을 되던지다",
  "time off between sessions": "수업 사이의 틈",
  "to be sorry about": "안타까워할 만한",
  "to do with leisure": "여가에 얽힌",
  "to do with race": "인종에 얽힌",
  "to the very base": "바탕까지",
  "touch that improves": "나아지게 하는 손질",
  "trial run of a play": "연극을 미리 해 보기",
  "true to life": "실제와 꼭 같은",
  "turning things over": "이리저리 헤아리는",
  "use again": "다시 쓰다",
  "vessel where reaction runs": "반응이 일어나는 통",
  "violent anger": "거센 노여움",
  "warm understanding": "따뜻한 이해",
  "way to make it": "만드는 방법",
  "welcoming party": "맞이하는 잔치",
  "what follows an act": "어떤 일 뒤에 따라오는 것",
  "whatever may be": "어떻든 간에",
  "win back": "되찾아 오다",
  "win back for use": "되찾아 쓰게 하다",
  "wish one had not": "하지 않았기를 바라다",
  "without a set order": "정해진 차례 없이",
  "without delay in reporting": "알리는 데 늦음이 없는",
  "without regard to": "~을 셈에 넣지 않고",
  "work out a number": "수를 셈해 내다"
});

