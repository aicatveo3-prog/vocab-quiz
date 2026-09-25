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
  { word:"retailer", exams:["공무원"], pron:"리테일러", pos:"n", level:"B2", meanings:["소매업체","소매상"], syn:["seller","merchant","vendor"], ex:[{ s:"The {{}} offers online grocery shopping.", f:"retailer", ko:"그 소매업체는 온라인 식료품 쇼핑을 제공한다." }] },
  { word:"reusable", exams:["공무원"], pron:"리유저블", pos:"adj", level:"B2", meanings:["재사용 가능한"], syn:["recyclable","washable","durable"], ant:["disposable"], ex:[{ s:"Opt for {{}} containers instead of plastic.", f:"reusable", ko:"플라스틱 대신 재사용 가능한 용기를 선택하라." }] },
  { word:"rearrange", exams:["공무원"], pron:"리어레인지", pos:"v", level:"B2", meanings:["재배치하다","재정리하다"], syn:["reorganize","reorder","shuffle"], ex:[{ s:"They began {{}} their environment to suit themselves.", f:"rearranging", ko:"그들은 환경을 자신에게 맞게 재배치하기 시작했다." }] },
  { word:"responsibility", exams:["공무원"], pron:"리스판서빌리티", pos:"n", level:"B1", meanings:["책임","책무"], syn:["duty","obligation","accountability"], ex:[{ s:"Society allocates positions of {{}} by merit.", f:"responsibility", ko:"사회는 능력에 따라 책임 있는 자리를 배분한다." }] },
  { word:"relegate", exams:["공무원"], pron:"렐리게이트", pos:"v", level:"C2", meanings:["격하하다","밀쳐두다"], syn:["demote","downgrade","consign"], ant:["promote"], ex:[{ s:"Schedule time to {{}} distractions to set times.", f:"relegate", ko:"방해 요소를 정해진 시간으로 밀쳐두도록 시간을 짜라." }] },
  { word:"risky", exams:["공무원"], pron:"리스키", pos:"adj", level:"B2", meanings:["위험한"], syn:["dangerous","hazardous","precarious"], ant:["safe"], ex:[{ s:"Farming is quite {{}} and uncertain.", f:"risky", ko:"농업은 꽤 위험하고 불확실하다." }] },
  { word:"ration", exams:["공무원"], pron:"래션", pos:"n", level:"B2", meanings:["배급량","정량"], syn:["allowance","portion","quota"], ex:[{ s:"A student's daily {{}} of cereal made little difference.", f:"ration", ko:"학생의 하루 시리얼 배급량은 거의 차이를 만들지 않았다." }] },
  { word:"recyclable", exams:["공무원"], pron:"리사이클러블", pos:"adj", level:"B2", meanings:["재활용 가능한"], syn:["reusable","reprocessable","salvageable"], ant:["disposable"], ex:[{ s:"Separate the {{}} materials from the trash.", f:"recyclable", ko:"재활용 가능한 물품을 쓰레기와 분리하세요." }] },
  { word:"regardless", exams:["공무원"], pron:"리가들리스", pos:"adv", level:"B2", meanings:["상관없이","개의치 않고"], syn:["nevertheless","anyway","nonetheless"], ex:[{ s:"Students behave better {{}} of their diet.", f:"regardless", ko:"학생들은 식단과 상관없이 더 잘 행동한다." }], gov:{ prep:["of"], usage:"regardless of ~ : ~에 상관없이" } },
  { word:"regional", exams:["공무원"], pron:"리저널", pos:"adj", level:"B2", meanings:["지역의"], syn:["local","territorial","provincial"], ant:["national"], ex:[{ s:"The rules vary by {{}} authority.", f:"regional", ko:"규정은 지역 당국마다 다르다." }] },
  { word:"regular", exams:["공무원"], pron:"레귤러", pos:"adj", level:"B1", meanings:["보통의","정규의","규칙적인"], syn:["ordinary","normal","routine"], ant:["irregular"], ex:[{ s:"Do not throw it out with {{}} trash.", f:"regular", ko:"그것을 일반 쓰레기와 함께 버리지 마라." }] },
  { word:"regulation", exams:["공무원"], pron:"레귤레이션", pos:"n", level:"B2", meanings:["규정","규제"], syn:["rule","directive","statute"], ex:[{ s:"I will comply with any rules and {{}}.", f:"regulations", ko:"어떤 규칙과 규정에도 따르겠습니다." }] },
  { word:"renovation", exams:["공무원"], pron:"레노베이션", pos:"n", level:"B2", meanings:["개조","보수"], syn:["refurbishment","remodeling","restoration"], ex:[{ s:"The {{}} projects will enable new research.", f:"renovation", ko:"그 보수 사업들은 새로운 연구를 가능하게 할 것이다." }] },
  { word:"reverence", exams:["공무원"], pron:"레버런스", pos:"n", level:"C2", meanings:["숭배","경외","존경"], syn:["respect","veneration","awe"], ant:["contempt"], ex:[{ s:"Westerners have a special {{}} for observed facts.", f:"reverence", ko:"서양인들은 관찰된 사실에 대해 특별한 경외심을 지닌다." }] },
  { word:"rewarding", exams:["공무원"], pron:"리워딩", pos:"adj", level:"B2", meanings:["보람 있는"], syn:["fulfilling","satisfying","gratifying"], ant:["thankless"], ex:[{ s:"Volunteering can be a {{}} experience.", f:"rewarding", ko:"자원봉사는 보람 있는 경험이 될 수 있다." }] },

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
  { word:"radical", exams:["공무원"], pron:"래디컬", pos:"adj", level:"B2", meanings:["급진적인"],
    syn:["drastic","far-reaching in change","going to the root"], ant:["conservative"],
    ex:[{ s:"They called for {{}} reform.", f:"radical", ko:"그들은 급진적인 개혁을 요구했다." }] },

  /* 원본은 '근본적으로; 완전히, 철저하게; 급진적으로, 과격하게' 로 다섯 갈래였다.
     두 갈래로 줄였다. */
  { word:"radically", pron:"래디컬리", pos:"adv", level:"C1", meanings:["근본적으로","급진적으로"],
    syn:["at the root","in a sweeping way","to the very base"],
    ex:[{ s:"The plan {{}} changed the city.", f:"radically", ko:"그 계획은 도시를 근본적으로 바꿨다." }] },

  /* ★ 원본은 '방사능의, 방사성의' 로 같은 말을 두 번 적은 셈이었다 — 한 갈래로. */
  { word:"radioactive", exams:["공무원"], pron:"레이디오액티브", pos:"adj", level:"B2", meanings:["방사능의"],
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
  { word:"realistic", exams:["공무원"], pron:"리얼리스틱", pos:"adj", level:"B1", meanings:["현실적인","사실적인"],
    syn:["true to life","keeping to what is possible","showing things as they are"],
    ex:[{ s:"We need a {{}} plan.", f:"realistic", ko:"우리에게는 현실적인 계획이 필요하다." }] },

  { word:"realize", pron:"리얼라이즈", pos:"v", level:"B1", meanings:["깨닫다","실현하다"],
    syn:["come to know","see at last","make real"],
    ex:[{ s:"She did not {{}} the time.", f:"realize", ko:"그녀는 시간을 깨닫지 못했다." }] },

  /* 승격 ⑮ — 사전의 쌍반점만 쉼표로 갈랐다(domain, D 한 곳). 원본의 괄호
     "(활동, 지식 등의)" 는 걷었다. */
  { word:"realm", exams:["공무원"], pron:"렐름", pos:"n", level:"C1", meanings:["영역","왕국"],
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
  { word:"reception", exams:["공무원"], pron:"리셉션", pos:"n", level:"B2", meanings:["접수","환영회"],
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
  { word:"recover", exams:["공무원"], pron:"리커버", pos:"v", level:"B1", meanings:["회복하다","되찾다"],
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
  { word:"refine", exams:["공무원"], pron:"리파인", pos:"v", level:"B2", meanings:["정제하다","세련되게 하다"],
    syn:["civilize","make pure","polish to a finer state"],
    ex:[{ s:"They {{}} sugar at the plant.", f:"refine", ko:"그들은 그 공장에서 설탕을 정제한다." }] },

  /* '개선' 은 improvement 의 첫 뜻과 같아 서로 오답에서 빠진다. */
  { word:"refinement", pron:"리파인먼트", pos:"n", level:"B2", meanings:["개선","세련됨"],
    syn:["a making better","polish of manner","touch that improves"],
    ex:[{ s:"The design needs one more {{}}.", f:"refinement", ko:"그 설계는 개선이 한 번 더 필요하다." }] },

  /* 승격 ㊴ — 사전의 쌍반점만 쉼표로 갈랐다(mirror, M). 원본의 '나타내다' 는
     represent(챕터 8) 자리다. */
  { word:"reflect", exams:["공무원"], pron:"리플렉트", pos:"v", level:"B1", meanings:["반영하다","반사하다"],
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
    ex:[{ s:"Steel bars {{}} the wall.", f:"reinforce", ko:"철근이 그 벽을 강화한다." }] },

  /* ── 챕터 6 ────────────────────────────────────── */
  /* ★ release 는 참조가 아홉 곳으로 R 세트 최다다. 사전값 '석방하다' 한 갈래를
     지켜 일곱 곳을 보존하고, 다른 뜻을 노리던 두 곳만 손질했다.
       give off(내뿜다)  syn release → let out      ('방출하다' 뜻을 노린 자리)
       issue(발표하다)   syn release → make public  ('발표하다' 뜻을 노린 자리)
     원본은 '발표, 개봉, 석방; 풀어주다; (대중에) 발표하다' 로 다섯 갈래였다.
     '발표하다' 는 announce·issue·publish(P) 가 이미 나눠 가진 자리다.
     relieve/relive 는 철자가 한 글자 차이인데 발음이 다르다 — 릴리브 / 리라이브. */

  /* 승격 53 — 사전의 쌍반점만 쉼표로 갈랐다(참조 여섯 곳). */
  { word:"reject", pron:"리젝트", pos:"v", level:"B1", meanings:["거절하다","배척하다"],
    syn:["deny","dismiss","turn down"], ant:["accept"],
    ex:[{ s:"They may {{}} the offer.", f:"reject", ko:"그들은 그 제안을 거절할 수도 있다." }] },

  /* 승격 54 — 사전 글자 유지(acceptance·adoption 반의어). */
  { word:"rejection", pron:"리젝션", pos:"n", level:"B2", meanings:["거부","거절"],
    syn:["a turning down","refusal to take","saying no"], ant:["acceptance"],
    ex:[{ s:"The {{}} came by letter.", f:"rejection", ko:"그 거부는 편지로 왔다." }] },

  { word:"rejoice", pron:"리조이스", pos:"v", level:"C1", meanings:["크게 기뻐하다"],
    syn:["be full of joy","take great delight","celebrate with joy"],
    ex:[{ s:"The whole town began to {{}}.", f:"rejoice", ko:"온 고을이 크게 기뻐하기 시작했다." }] },

  /* 승격 55 — 사전 글자 유지(correlation, C). rapport(친밀감, 교감 · 챕터 1) 와
     갈라 '관계' 를 이 자리에 두었다. */
  { word:"relationship", pron:"릴레이션십", pos:"n", level:"B1", meanings:["관계"],
    syn:["correlation","tie between two","way things stand between"],
    ex:[{ s:"Their {{}} grew closer.", f:"relationship", ko:"그들의 관계는 더 가까워졌다." }] },

  /* 승격 56 — 원본은 '상대적인; 친척' 으로 형용사와 명사가 섞여 있었다. 참조
     absolute·comparative 가 형용사여서 형용사로 세우고 사전 단일값을 지켰다.
     '상대적인' 은 comparative 의 첫 뜻과 같아 서로 오답에서 빠진다. */
  { word:"relative", exams:["공무원"], pron:"렐러티브", pos:"adj", level:"B2", meanings:["상대적인"],
    syn:["comparative","judged against something else","not absolute"], ant:["absolute"],
    ex:[{ s:"It is a {{}} matter.", f:"relative", ko:"그것은 상대적인 문제다." }] },

  { word:"relativity", pron:"렐러티버티", pos:"n", level:"C1", meanings:["상대성","관련성"],
    syn:["being judged by comparison","how things relate","dependence on a frame"],
    ex:[{ s:"He explained the theory of {{}}.", f:"relativity", ko:"그는 상대성 이론을 설명했다." }] },

  /* 승격 57 — 사전 글자 유지(anxious 반의어 · casual · easygoing · leisurely
     — 네 곳). 원본 '느긋한, 여유 있는, 편안한' 세 갈래를 사전값 둘로 줄였다. */
  { word:"relaxed", pron:"릴랙스트", pos:"adj", level:"B1", meanings:["편안한","느긋한"],
    syn:["casual","easygoing","at ease"], ant:["anxious"],
    ex:[{ s:"The mood was {{}}.", f:"relaxed", ko:"분위기가 편안했다." }] },

  /* 원본은 '말을 전달하다, 중계하다; 계주' 로 동사와 명사가 섞여 있었다. */
  { word:"relay", pron:"릴레이", pos:"v", level:"B2", meanings:["전달하다","중계하다"],
    syn:["pass along","hand on a message","send onward"],
    ex:[{ s:"He will {{}} the news to us.", f:"relay", ko:"그가 우리에게 그 소식을 전달할 것이다." }] },

  /* 승격 58 — ★ 참조 아홉 곳. 사전 단일값 '석방하다' 를 지키고 다른 뜻을
     노리던 give off·issue 두 곳을 손질했다. */
  { word:"release", exams:["공무원"], pron:"릴리스", pos:"v", level:"B1", meanings:["석방하다"],
    syn:["liberate","let go free","set at liberty"], ant:["imprison"],
    ex:[{ s:"They will {{}} him tomorrow.", f:"release", ko:"그들은 내일 그를 석방할 것이다." }] },

  /* 원본 '동의하다' 는 accede(A) 의 첫 뜻이라 누그러지는 쪽 갈래를 썼다. */
  { word:"relent", pron:"릴렌트", pos:"v", level:"C2", meanings:["누그러지다","마음을 굽히다"],
    syn:["soften one's stand","give way at last","let up"],
    ex:[{ s:"The father finally began to {{}}.", f:"relent", ko:"그 아버지는 마침내 누그러지기 시작했다." }] },

  /* 승격 59 — 사전 글자 유지(irrelevant 반의어, I). '적절한' 은 apt·proper(P) 와
     글자가 같아 서로 오답에서 빠진다. */
  { word:"relevant", exams:["공무원"], pron:"렐러번트", pos:"adj", level:"B2", meanings:["관련 있는","적절한"],
    syn:["bearing on the matter","to the point","having a link"], ant:["irrelevant"],
    ex:[{ s:"Only {{}} facts were read out.", f:"relevant", ko:"관련 있는 사실만 읽혔다." }] },

  /* 승격 60 — 사전 단일값 유지. 원본의 '확실성' 은 버렸다. 참조는 없다. */
  { word:"reliability", pron:"릴라이어빌러티", pos:"n", level:"B2", meanings:["신뢰성"],
    syn:["being able to be trusted","steadiness one can count on","soundness"],
    ex:[{ s:"The car is known for its {{}}.", f:"reliability", ko:"그 차는 신뢰성으로 알려져 있다." }] },

  /* 승격 61 — 사전 첫 갈래를 지키고 원본의 '의지가 되는' 을 붙였다. 참조 없음. */
  { word:"reliable", exams:["공무원"], pron:"릴라이어블", pos:"adj", level:"B1", meanings:["믿을 만한","의지가 되는"],
    syn:["to be counted on","sure not to fail","trustworthy"],
    ex:[{ s:"She is a {{}} worker.", f:"reliable", ko:"그녀는 믿을 만한 일꾼이다." }] },

  /* "(= dependence)" 표기를 걷었다. */
  { word:"reliance", pron:"릴라이언스", pos:"n", level:"B2", meanings:["의존","의지함"],
    syn:["leaning on another","putting trust in","need of support"],
    ex:[{ s:"Their {{}} on coal is falling.", f:"reliance", ko:"석탄에 대한 그들의 의존이 줄고 있다." }] },

  /* 승격 62 — 사전 글자 유지(antique, A · artifact, A). ruins(폐허 · 챕터 14) 와
     갈라 '유물, 유적' 을 이 자리에 두었다. */
  { word:"relic", pron:"렐릭", pos:"n", level:"C1", meanings:["유물","유적"],
    syn:["antique","artifact","thing left from the past"],
    ex:[{ s:"The museum holds a stone {{}}.", f:"relic", ko:"그 박물관은 돌 유물을 보관한다." }] },

  /* 승격 63 — 사전의 쌍반점만 쉼표로 갈랐다(alleviate, A). 원본의 괄호
     "(불쾌함 등을)" 를 걷었다. */
  { word:"relieve", pron:"릴리브", pos:"v", level:"B2", meanings:["완화하다","덜어 주다"],
    syn:["alleviate","ease a pain","take a load off"],
    ex:[{ s:"This will {{}} the ache.", f:"relieve", ko:"이것이 그 통증을 완화할 것이다." }] },

  { word:"relieved", pron:"릴리브드", pos:"adj", level:"B1", meanings:["안도하는"],
    syn:["freed from worry","glad it is over","easy in mind"],
    ex:[{ s:"She looked {{}} at the news.", f:"relieved", ko:"그녀는 그 소식에 안도하는 듯했다." }] },

  { word:"religious", pron:"릴리저스", pos:"adj", level:"B1", meanings:["종교적인"],
    syn:["to do with faith","of worship","bound to a creed"],
    ex:[{ s:"They hold {{}} services here.", f:"religious", ko:"그들은 이곳에서 종교적인 예배를 연다." }] },

  /* 승격 64 — 사전 글자 유지(abandon, A). renounce(버리고 물러나다) 와 갈랐다 —
     원본은 둘 다 '포기하다' 였다. */
  { word:"relinquish", pron:"릴링퀴시", pos:"v", level:"C2", meanings:["포기하다","양도하다"],
    syn:["abandon","hand over a claim","let go of a right"],
    ex:[{ s:"He had to {{}} the title.", f:"relinquish", ko:"그는 그 직위를 포기해야 했다." }] },

  { word:"relive", pron:"리라이브", pos:"v", level:"C1", meanings:["다시 체험하다"],
    syn:["live through again","feel it once more","go back through it"],
    ex:[{ s:"He does not want to {{}} that day.", f:"relive", ko:"그는 그날을 다시 체험하고 싶지 않다." }] },

  /* ── 챕터 7 ────────────────────────────────────── */
  /* remind·reminder·reminiscence 셋이 '떠올림' 자리에 몰려 있다 — 상기시키다 /
     상기시키는 것 / 추억담 으로 갈랐다. remorse(회한) 는 repentance(참회 · 챕터 8)
     와, renown(명성) 은 reputation(평판, 명성 · 챕터 9) 과 갈라 두었다. */

  { word:"relocate", pron:"릴로케이트", pos:"v", level:"B2", meanings:["이전하다","옮기다"],
    syn:["move to a new place","shift base","set up elsewhere"],
    ex:[{ s:"The firm will {{}} next year.", f:"relocate", ko:"그 회사는 내년에 이전할 것이다." }] },

  /* 승격 65 — 사전 글자 유지(hesitant, H). */
  { word:"reluctant", pron:"릴럭턴트", pos:"adj", level:"B2", meanings:["꺼리는","마지못한"],
    syn:["hesitant","unwilling to act","holding back"],
    ex:[{ s:"He was {{}} to answer.", f:"reluctant", ko:"그는 대답하기를 꺼렸다." }] },

  /* 승격 66 — 사전 글자 유지(be dependent on, B · fall back on, F). */
  { word:"rely on", pron:"릴라이 온", pos:"phr", level:"B1", meanings:["~에 의존하다"],
    syn:["be dependent on","fall back on","put one's trust in"] },

  /* 승격 67 — 사전의 쌍반점만 쉼표로 갈랐다. 참조는 없다. */
  { word:"remain", pron:"리메인", pos:"v", level:"B1", meanings:["남다","여전히 ~이다"],
    syn:["stay behind","be left over","go on being"],
    ex:[{ s:"Few trees {{}} on the hill.", f:"remain", ko:"그 언덕에 남은 나무는 얼마 없다." }] },

  /* 승격 68 — 사전은 '발언하다; 발언' 으로 동사와 명사가 섞여 있었다. 참조
     comment 가 동사여서 동사로 세웠다. 원본은 네 갈래였다. */
  { word:"remark", pron:"리마크", pos:"v", level:"B2", meanings:["발언하다","한마디 하다"],
    syn:["comment","say in passing","let fall a word"],
    ex:[{ s:"She did not {{}} on it.", f:"remark", ko:"그녀는 그것에 대해 발언하지 않았다." }] },

  /* 승격 69 — 사전 글자 유지(amazing·exceptional·extraordinary·impressive 네 곳).
     '뛰어난' 은 outstanding(O) 의 첫 뜻이라 사전값 '놀라운' 을 지켰다. */
  { word:"remarkable", pron:"리마커블", pos:"adj", level:"B1", meanings:["놀라운","주목할 만한"],
    syn:["amazing","exceptional","worth notice"],
    ex:[{ s:"It was a {{}} find.", f:"remarkable", ko:"그것은 놀라운 발견이었다." }] },

  /* 승격 70 — 사전의 쌍반점만 쉼표로 갈랐다(antidote, A · cure-all, C). */
  { word:"remedy", pron:"레머디", pos:"n", level:"B2", meanings:["치료법","해결책"],
    syn:["antidote","cure-all","means of putting right"],
    ex:[{ s:"There is no easy {{}}.", f:"remedy", ko:"쉬운 해결책은 없다." }] },

  { word:"remind", pron:"리마인드", pos:"v", level:"B1", meanings:["상기시키다","떠오르게 하다"],
    syn:["bring to mind","put in mind of","jog the memory"],
    ex:[{ s:"Please {{}} me later.", f:"remind", ko:"나중에 저에게 상기시켜 주세요." }] },

  { word:"reminder", pron:"리마인더", pos:"n", level:"B2", meanings:["상기시키는 것","일깨움"],
    syn:["something that prompts memory","note to jog one","nudge to recall"],
    ex:[{ s:"The scar is a {{}} of the fall.", f:"reminder", ko:"그 흉은 넘어진 일을 상기시키는 것이다." }] },

  /* "(=memory)(= recollection)" 표기를 걷고 네 갈래를 둘로 줄였다. */
  { word:"reminiscence", pron:"레머니선스", pos:"n", level:"C2", meanings:["추억담","회상"],
    syn:["tale of the past","looking back on old days","memory told aloud"],
    ex:[{ s:"His {{}} filled the evening.", f:"reminiscence", ko:"그의 추억담이 저녁을 채웠다." }] },

  /* repentance(참회, 뉘우침 · 챕터 8) 와 갈랐다 — 원본은 둘 다 '후회' 였다. */
  { word:"remorse", pron:"리모스", pos:"n", level:"C1", meanings:["회한","깊은 후회"],
    syn:["bitter regret","sting of guilt","sorrow for a wrong"],
    ex:[{ s:"He showed no {{}}.", f:"remorse", ko:"그는 회한을 보이지 않았다." }] },

  /* 승격 71 — 사전 글자 유지(inaccessible, I · isolated, I). */
  { word:"remote", pron:"리모트", pos:"adj", level:"B1", meanings:["먼","외딴"],
    syn:["inaccessible","isolated","far from anywhere"],
    ex:[{ s:"They live in a {{}} valley.", f:"remote", ko:"그들은 외딴 골짜기에 산다." }] },

  /* 승격 72 — 사전 단일값 유지(delete·detach·eliminate, install 반의어 — 네 곳).
     원본의 '지우다' 는 efface(E) 의 첫 뜻이라 붙이지 않았다. */
  { word:"remove", pron:"리무브", pos:"v", level:"B1", meanings:["제거하다"],
    syn:["delete","detach","take away"], ant:["install"],
    ex:[{ s:"Please {{}} your shoes.", f:"remove", ko:"신을 벗어 주세요." }] },

  /* 원본 '~이 되게 하다, ~로 만들다, ~을 주다' 세 갈래를 둘로 줄였다. */
  { word:"render", exams:["공무원"], pron:"렌더", pos:"v", level:"C1", meanings:["~이 되게 하다","~로 만들다"],
    syn:["cause to become","leave in a state","turn into"],
    ex:[{ s:"Heat can {{}} the metal soft.", f:"render", ko:"열은 그 금속을 부드럽게 만들 수 있다." }] },

  { word:"renew", pron:"리뉴", pos:"v", level:"B2", meanings:["재개하다","갱신하다"],
    syn:["start again","take up once more","make valid again"],
    ex:[{ s:"You must {{}} the licence.", f:"renew", ko:"당신은 그 면허를 갱신해야 한다." }] },

  { word:"renewable", pron:"리뉴어블", pos:"adj", level:"B2", meanings:["재생 가능한"],
    syn:["able to be replaced","that nature makes again","not running out"],
    ex:[{ s:"Wind is a {{}} source.", f:"renewable", ko:"바람은 재생 가능한 원천이다." }] },

  /* 승격 73 — 사전 단일값 유지(forgo, F). 원본 '포기하다, 끊다' 의 '포기하다' 는
     relinquish·abandon·forgo 자리라 사전값 쪽이 낫다. */
  { word:"renounce", pron:"리나운스", pos:"v", level:"C2", meanings:["버리고 물러나다"],
    syn:["forgo","give up formally","turn one's back on"],
    ex:[{ s:"He chose to {{}} the throne.", f:"renounce", ko:"그는 왕위를 버리고 물러나기로 했다." }] },

  { word:"renovate", pron:"레너베이트", pos:"v", level:"B2", meanings:["보수하다","개조하다"],
    syn:["do up anew","make over a building","restore to good order"],
    ex:[{ s:"They plan to {{}} the old school.", f:"renovate", ko:"그들은 그 낡은 학교를 보수할 계획이다." }] },

  /* reputation(평판, 명성 · 챕터 9) 과 '명성' 으로 맞물려 서로 오답에서 빠진다. */
  { word:"renown", pron:"리나운", pos:"n", level:"C1", meanings:["명성"],
    syn:["wide fame","name known far","great repute"],
    ex:[{ s:"The city has {{}} for its bridges.", f:"renown", ko:"그 도시는 다리로 명성이 있다." }] },

  /* 승격 74 — 사전 글자 유지(celebrated·distinguished·legendary 세 곳). */
  { word:"renowned", pron:"리나운드", pos:"adj", level:"B2", meanings:["유명한","명성 높은"],
    syn:["celebrated","distinguished","widely known"],
    ex:[{ s:"She is a {{}} pianist.", f:"renowned", ko:"그녀는 유명한 피아노 연주자다." }] },

  /* ── 챕터 8 ────────────────────────────────────── */
  /* repe-·repl-·repr- 어근이 한꺼번에 몰린 챕터다. 되풀이·복제 쪽이 특히 빽빽하다.
       repeatedly 여러 차례, 되풀이하여   repetitive 되풀이되는
       replicate 똑같이 재현하다          replication 복제, 사본
     ★ replication 은 원본이 '응답; 되풀이; 사본, 모사' 였다 — '응답' 은 법률
     용어라 replicate 의 명사형답게 '복제, 사본' 으로 바로잡았다.
     ★ repertoire 는 외래어 '레퍼토리' 를 걷었고, catalog(목록) 의 첫 뜻을 피해
     '연주 목록' 으로 좁혔다.
     억제 세 갈래도 여기서 마무리된다 — refrain 삼가다(챕터 4) / repress 억압하다 /
     restrain 억제하다, 제지하다(챕터 11). */

  /* 승격 75 — 사전은 '임대하다; 임대료' 로 동사와 명사가 섞여 있었다. 참조
     charter 가 동사여서 동사로 세웠다. */
  { word:"rent", pron:"렌트", pos:"v", level:"B1", meanings:["임대하다","빌리다"],
    syn:["charter","let for money","take on hire"],
    ex:[{ s:"They {{}} the flat by the year.", f:"rent", ko:"그들은 그 집을 해 단위로 임대한다." }] },

  /* 승격 76 — 사전 글자 유지(break 반의어, B). 원본은 '수리하다; 수리, 보수' 로
     동사와 명사가 섞여 있었는데 사전값이 동사라 그대로 따랐다. */
  { word:"repair", pron:"리페어", pos:"v", level:"B1", meanings:["고치다","수리하다"],
    syn:["mend","put right again","set in working order"], ant:["break"],
    ex:[{ s:"He can {{}} the roof himself.", f:"repair", ko:"그는 그 지붕을 혼자 고칠 수 있다." }] },

  { word:"repeatedly", pron:"리피티들리", pos:"adv", level:"B1", meanings:["여러 차례","되풀이하여"],
    syn:["again and again","time after time","over and over"],
    ex:[{ s:"She knocked {{}} on the door.", f:"repeatedly", ko:"그녀는 문을 여러 차례 두드렸다." }] },

  /* 승격 77 — 사전 글자 유지(attract·beguile·enchant 반의어, chase away·drive off
     — 다섯 곳). */
  { word:"repel", pron:"리펠", pos:"v", level:"C1", meanings:["쫓아내다","반발하게 하다"],
    syn:["chase away","push back an attack","turn away in disgust"], ant:["attract"],
    ex:[{ s:"The smoke will {{}} insects.", f:"repel", ko:"그 연기가 벌레를 쫓아낼 것이다." }] },

  /* 원본의 '방충제'(명사) 는 버렸다. '역겨운' 은 disgusting(D) 의 첫 뜻과 같아
     서로 오답에서 빠진다. */
  { word:"repellent", pron:"리펠런트", pos:"adj", level:"C1", meanings:["역겨운","혐오감을 주는"],
    syn:["driving one away","hard to stomach","stirring disgust"],
    ex:[{ s:"The smell was {{}}.", f:"repellent", ko:"그 냄새는 역겨웠다." }] },

  /* remorse(회한, 깊은 후회 · 챕터 7) 와 갈랐다 — 원본은 둘 다 '후회' 였다. */
  { word:"repentance", pron:"리펜턴스", pos:"n", level:"C2", meanings:["참회","뉘우침"],
    syn:["turning from a wrong","sorrow that changes one","confession of fault"],
    ex:[{ s:"His {{}} seemed real.", f:"repentance", ko:"그의 참회는 진짜인 듯했다." }] },

  /* ★ 외래어 '레퍼토리' 를 걷고 catalog(목록) 의 첫 뜻을 피해 좁혔다. */
  { word:"repertoire", pron:"레퍼트와", pos:"n", level:"C1", meanings:["연주 목록","익혀 둔 목록"],
    syn:["pieces one can play","stock of works ready","range one has mastered"],
    ex:[{ s:"The choir has a wide {{}}.", f:"repertoire", ko:"그 합창단은 폭넓은 연주 목록을 갖고 있다." }] },

  /* 승격 78 — 사전 단일값 유지(monotonous, M). */
  { word:"repetitive", pron:"리페터티브", pos:"adj", level:"B2", meanings:["되풀이되는"],
    syn:["monotonous","doing the same over","without change"],
    ex:[{ s:"The work is dull and {{}}.", f:"repetitive", ko:"그 일은 재미없고 되풀이된다." }] },

  { word:"replace", pron:"리플레이스", pos:"v", level:"B1", meanings:["대체하다","대신하다"],
    syn:["take the place of","put another in place","swap in for"],
    ex:[{ s:"Machines will {{}} the old line.", f:"replace", ko:"기계가 그 낡은 설비를 대체할 것이다." }] },

  { word:"replanting", pron:"리플랜팅", pos:"n", level:"B2", meanings:["다시 심기"],
    syn:["putting plants back","setting out new stock","planting over again"],
    ex:[{ s:"{{}} began after the fire.", f:"Replanting", ko:"불이 난 뒤 다시 심기가 시작되었다." }] },

  /* 승격 79 — 사전 단일값 유지(duplicate, D). 원본 '모방하다' 는 emulate·imitate·
     mimic 이 이미 쓰는 자리다. */
  { word:"replicate", pron:"레플리케이트", pos:"v", level:"C1", meanings:["똑같이 재현하다"],
    syn:["duplicate","copy exactly","do over with the same result"],
    ex:[{ s:"No one could {{}} the result.", f:"replicate", ko:"아무도 그 결과를 똑같이 재현할 수 없었다." }] },

  /* ★ 원본은 '응답; 되풀이; 사본, 모사' 였다 — '응답' 은 법률 용어다.
     바로 위 replicate 의 명사형답게 '복제, 사본' 으로 바로잡았다. */
  { word:"replication", pron:"레플리케이션", pos:"n", level:"C2", meanings:["복제","사본"],
    syn:["exact copy","making of a duplicate","repeat of a trial"],
    ex:[{ s:"The study called for a {{}}.", f:"replication", ko:"그 연구는 복제 실험을 요구했다." }] },

  /* 승격 80 — 사전은 '응답하다; 대답' 으로 동사와 명사가 섞여 있었다. 원본이
     동사여서 동사로 세우고, '응답하다' 는 respond(챕터 10) 에 넘겼다. */
  { word:"reply", pron:"리플라이", pos:"v", level:"B1", meanings:["대답하다","답장하다"],
    syn:["answer back","write back","give an answer"],
    ex:[{ s:"He did not {{}} to my note.", f:"reply", ko:"그는 내 쪽지에 답장하지 않았다." }] },

  /* 원본은 '휴식, 쉬다; 쉬게 하다, 누워 있다' 로 명사와 동사가 섞여 있었다.
     명사로 세우고 recess(휴식 시간 · 챕터 3) 와 갈랐다. */
  { word:"repose", pron:"리포즈", pos:"n", level:"C2", meanings:["편안한 쉼"],
    syn:["calm rest","lying at ease","stillness of body"],
    ex:[{ s:"Her face was in {{}}.", f:"repose", ko:"그녀의 얼굴은 편안한 쉼에 있었다." }] },

  /* 승격 81 — 사전 글자 유지(archive, A). */
  { word:"repository", pron:"리파지토리", pos:"n", level:"C1", meanings:["보관소","저장소"],
    syn:["archive","place things are kept","store for safekeeping"],
    ex:[{ s:"The library is a {{}} of old maps.", f:"repository", ko:"그 도서관은 옛 지도의 보관소다." }] },

  /* 승격 82 — 사전의 쌍반점만 쉼표로 갈랐다(constitute·depict·embody 세 곳). */
  { word:"represent", exams:["공무원"], pron:"레프리젠트", pos:"v", level:"B1", meanings:["대표하다","나타내다"],
    syn:["constitute","stand for a group","act in place of"],
    ex:[{ s:"Two members {{}} our town.", f:"represent", ko:"두 위원이 우리 고을을 대표한다." }] },

  /* 승격 83 — 사전은 '대표; 대표적인' 으로 명사와 형용사가 섞여 있었다. 참조
     agent·delegate 가 명사여서 원본대로 명사로 세웠다. '대리인' 은 delegate 의
     둘째 뜻과 글자가 같아 서로 오답에서 빠진다. */
  { word:"representative", pron:"레프리젠터티브", pos:"n", level:"B2", meanings:["대표자","대리인"],
    syn:["delegate","one sent to speak for others","stand-in for a body"],
    ex:[{ s:"Each class sends one {{}}.", f:"representative", ko:"학급마다 대표자 한 명을 보낸다." }] },

  /* 승격 84 — 사전 단일값 유지. 참조는 없다. refrain(삼가다)·restrain(억제하다) 와
     갈라 '억압하다' 를 이 자리에 두었다. */
  { word:"repress", pron:"리프레스", pos:"v", level:"C1", meanings:["억압하다"],
    syn:["hold down by force","put down a feeling","keep under"],
    ex:[{ s:"The state tried to {{}} the press.", f:"repress", ko:"국가는 언론을 억압하려 했다." }] },

  { word:"repressive", pron:"리프레시브", pos:"adj", level:"C1", meanings:["억압적인","탄압하는"],
    syn:["holding people down","harsh in rule","allowing no freedom"],
    ex:[{ s:"They lived under a {{}} law.", f:"repressive", ko:"그들은 억압적인 법 아래 살았다." }] },

  /* rebuke(질책하다, 꾸짖다 · 챕터 2) 와 갈랐다 — 원본은 둘 다 '꾸짖다' 였다. */
  { word:"reprimand", pron:"레프리맨드", pos:"v", level:"C2", meanings:["문책하다","엄하게 이르다"],
    syn:["call to account","give a formal warning","take to task"],
    ex:[{ s:"The officer was {{}} in public.", f:"reprimanded", ko:"그 관리는 공개적으로 문책받았다." }] },

  /* ── 챕터 9 ────────────────────────────────────── */
  /* resent 어근 셋(resent·resentful·resentment) 이 품사로 갈린다.
     ★ reserve 를 동사로 세우면서 inhibition(억제, 억압) 의 유의어 자리를 손질했다.
     사전값은 '비축; 보호구역' 이었는데 참조 셋 가운데 둘(book·make a reservation)
     이 '예약하다' 를 쓰고 원본도 동사여서다. */

  { word:"reproachful", pron:"리프로치풀", pos:"adj", level:"C2", meanings:["꾸짖는","나무라는"],
    syn:["full of blame","showing displeasure","casting fault on one"],
    ex:[{ s:"She gave him a {{}} look.", f:"reproachful", ko:"그녀는 그에게 꾸짖는 눈길을 보냈다." }] },

  /* 승격 85 — 사전의 쌍반점만 쉼표로 갈랐다(duplicate, D). 원본 '재생산하다;
     복사하다; 반복하다' 세 갈래는 replicate·repeatedly 와 부딪혀 사전값을 썼다. */
  { word:"reproduce", pron:"리프러두스", pos:"v", level:"B2", meanings:["재현하다","번식하다"],
    syn:["duplicate","bring forth young","make a copy of"],
    ex:[{ s:"Rabbits {{}} very fast.", f:"reproduce", ko:"토끼는 아주 빠르게 번식한다." }] },

  /* 승격 86 — 사전 글자 유지(breeding, B). */
  { word:"reproduction", pron:"리프러덕션", pos:"n", level:"B2", meanings:["생식","번식"],
    syn:["breeding","bringing forth young","carrying on the line"],
    ex:[{ s:"The book explains plant {{}}.", f:"reproduction", ko:"그 책은 식물의 생식을 설명한다." }] },

  /* 승격 87 — 사전 글자 유지(lizard, L). */
  { word:"reptile", pron:"렙타일", pos:"n", level:"B2", meanings:["파충류"],
    syn:["lizard","cold-blooded crawler","scaly land animal"],
    ex:[{ s:"A snake is a {{}}.", f:"reptile", ko:"뱀은 파충류다." }] },

  /* 승격 88 — 사전 글자 유지. 참조는 없다. renown(명성 · 챕터 7) 과 '명성' 으로
     맞물려 서로 오답에서 빠진다. */
  { word:"reputation", pron:"레퓨테이션", pos:"n", level:"B1", meanings:["평판","명성"],
    syn:["name one has","how one is thought of","standing with others"],
    ex:[{ s:"The shop has a good {{}}.", f:"reputation", ko:"그 가게는 좋은 평판을 갖고 있다." }] },

  /* 승격 89 — 사전 글자 유지(call for·demand·entail·necessitate 네 곳). */
  { word:"require", pron:"리콰이어", pos:"v", level:"B1", meanings:["요구하다","필요로 하다"],
    syn:["call for","demand","must have"],
    ex:[{ s:"The job will {{}} long hours.", f:"require", ko:"그 일은 긴 시간을 요구할 것이다." }] },

  /* 승격 90 — 사전 글자 유지(necessity, N). */
  { word:"requirement", pron:"리콰이어먼트", pos:"n", level:"B1", meanings:["요건","필요조건"],
    syn:["necessity","thing that must be met","standard one has to reach"],
    ex:[{ s:"Two years of work is a {{}}.", f:"requirement", ko:"2년의 경력이 요건이다." }] },

  /* 승격 91 — 사전 단일값 유지(analogy, A). P 세트에서 analogy 의 유의어를
     resemblance 로 고쳐 둔 자리가 이제 표제어가 되었다. */
  { word:"resemblance", pron:"리젬블런스", pos:"n", level:"B2", meanings:["서로 닮음"],
    syn:["analogy","likeness between two","look of being alike"],
    ex:[{ s:"There is a strong {{}} between them.", f:"resemblance", ko:"그들 사이에는 서로 닮음이 뚜렷하다." }] },

  /* 승격 92 — 사전 글자 유지. 참조는 없다. */
  { word:"resemble", pron:"리젬블", pos:"v", level:"B1", meanings:["닮다","유사하다"],
    syn:["look like","be much the same as","take after"],
    ex:[{ s:"He does not {{}} his brother.", f:"resemble", ko:"그는 형을 닮지 않았다." }] },

  { word:"resent", pron:"리젠트", pos:"v", level:"C1", meanings:["분개하다","원망하다"],
    syn:["feel anger at","take it ill","bear a grudge over"],
    ex:[{ s:"She began to {{}} the extra work.", f:"resent", ko:"그녀는 추가 업무에 분개하기 시작했다." }] },

  /* 승격 93 — 사전 글자 유지(aggrieved·indignant·jealous 세 곳). */
  { word:"resentful", pron:"리젠트풀", pos:"adj", level:"C1", meanings:["분한","원한을 품은"],
    syn:["indignant","sore about it","holding anger inside"],
    ex:[{ s:"He was {{}} at being left out.", f:"resentful", ko:"그는 빠진 것에 분해했다." }] },

  /* 승격 94 — 사전 글자 유지(bitterness·discontent·grudge 세 곳). */
  { word:"resentment", pron:"리젠트먼트", pos:"n", level:"C1", meanings:["분노","원한"],
    syn:["grudge","anger held in","bad feeling that lasts"],
    ex:[{ s:"Old {{}} broke out again.", f:"resentment", ko:"오래된 분노가 다시 터졌다." }] },

  /* 승격 95 — ★ 사전은 '비축; 보호구역'(명사) 이었는데 참조 셋 가운데 둘
     (book·make a reservation) 이 '예약하다' 를 쓰고 원본도 동사다. 동사로 세우고
     명사 뜻을 노렸던 inhibition(억제, 억압) 의 유의어 자리를 손질했다. */
  { word:"reserve", exams:["공무원"], pron:"리저브", pos:"v", level:"B1", meanings:["예약하다","따로 남겨 두다"],
    syn:["book","set aside for later","keep back for a purpose"],
    ex:[{ s:"I will {{}} a table for six.", f:"reserve", ko:"여섯 사람 자리를 예약하겠다." }] },

  /* 승격 96 — 사전 글자 유지. 원본의 괄호 "(성격이)" 를 걷었다. 참조는 없다. */
  { word:"reserved", pron:"리저브드", pos:"adj", level:"B2", meanings:["내성적인","과묵한"],
    syn:["keeping to oneself","slow to open up","sparing of words"],
    ex:[{ s:"He is polite but {{}}.", f:"reserved", ko:"그는 예의 바르지만 내성적이다." }] },

  { word:"reserved seat", pron:"리저브드 시트", pos:"phr", level:"B1", meanings:["예약석","지정석"],
    syn:["seat held for one","place booked ahead","named seat"] },

  { word:"reservoir", pron:"레저브와", pos:"n", level:"C1", meanings:["저수지","많은 보유량"],
    syn:["man-made lake","store of water","large hidden supply"],
    ex:[{ s:"The {{}} supplies the whole city.", f:"reservoir", ko:"그 저수지가 도시 전체에 물을 댄다." }] },

  { word:"reside", pron:"리자이드", pos:"v", level:"B2", meanings:["거주하다","살다"],
    syn:["make one's home","dwell in a place","have one's address at"],
    ex:[{ s:"They {{}} near the harbor.", f:"reside", ko:"그들은 항구 가까이 거주한다." }] },

  { word:"residence", pron:"레지던스", pos:"n", level:"B2", meanings:["거주","주거지"],
    syn:["living in a place","house one lives in","dwelling place"],
    ex:[{ s:"He took up {{}} in Seoul.", f:"residence", ko:"그는 서울에 거주를 시작했다." }] },

  /* 승격 97 — 원본은 '거주자, 거주하는, 고유의, 내재의' 로 네 갈래에 품사가
     섞여 있었다. 참조 civilian·inhabitant 가 명사여서 사전 단일값을 지켰다. */
  { word:"resident", exams:["공무원"], pron:"레지던트", pos:"n", level:"B2", meanings:["거주자"],
    syn:["inhabitant","one who lives there","dweller"],
    ex:[{ s:"Every {{}} got a notice.", f:"resident", ko:"모든 거주자가 통지를 받았다." }] },

  { word:"resignation", pron:"레지그네이션", pos:"n", level:"C1", meanings:["사직","사직서"],
    syn:["giving up a post","letter leaving a job","stepping down"],
    ex:[{ s:"He handed in his {{}}.", f:"resignation", ko:"그는 사직서를 냈다." }] },

  /* ── 챕터 10 ────────────────────────────────────── */
  /* respect 어근 여섯이 몰렸다 — respect·respectable·respected·respectful·
     respective·respectively. 품사와 뜻으로 촘촘히 갈라야 하는 자리다.
       respect      존경하다, 존중하다   (v)  ★ contempt·courtesy 두 곳을 손질
       respectable  존경할 만한, 훌륭한  (adj · 사전값)
       respected    높이 평가되는, 존경받는 (adj) ★ 원본 '소문난' 은 renowned 뜻
       respectful   공손한, 존경심을 보이는 (adj)
       respective   각각의              (adj)
       respectively 각각, 제각기        (adv)
     respire 어근 셋도 품사로 갈린다 — respiration(n)·respiratory(adj)·respire(v). */

  /* 승격 98 — 사전 글자 유지(adaptability, A). */
  { word:"resilience", pron:"리질리언스", pos:"n", level:"C1", meanings:["회복력","탄력"],
    syn:["adaptability","power to bounce back","spring that returns"],
    ex:[{ s:"The team showed great {{}}.", f:"resilience", ko:"그 팀은 큰 회복력을 보였다." }] },

  /* 승격 99 — 사전 단일값 유지(acclimate·cave in 반의어, counteract·defy — 네 곳).
     원본의 '견디다' 는 bear(B) 의 첫 뜻이라 붙이지 않았다. */
  { word:"resist", pron:"리지스트", pos:"v", level:"B1", meanings:["저항하다"],
    syn:["defy","stand against","hold out against"],
    ex:[{ s:"They chose to {{}} the order.", f:"resist", ko:"그들은 그 명령에 저항하기로 했다." }] },

  /* 승격 100 — 사전 글자 유지(friction, F · opposition, O). */
  { word:"resistance", exams:["공무원"], pron:"리지스턴스", pos:"n", level:"B2", meanings:["저항"],
    syn:["opposition","standing against","force that holds back"],
    ex:[{ s:"The plan met strong {{}}.", f:"resistance", ko:"그 계획은 강한 저항에 맞닥뜨렸다." }] },

  /* 승격 101 — 사전 단일값 유지(immune, I). */
  { word:"resistant", pron:"리지스턴트", pos:"adj", level:"B2", meanings:["저항력이 있는"],
    syn:["immune","able to withstand","not giving in to"],
    ex:[{ s:"The crop is {{}} to drought.", f:"resistant", ko:"그 작물은 가뭄에 저항력이 있다." }] },

  /* 승격 102 — 사전 글자 유지(decisive, D). */
  { word:"resolute", pron:"레절루트", pos:"adj", level:"C2", meanings:["단호한","확고한"],
    syn:["decisive","firm in purpose","not to be swayed"],
    ex:[{ s:"She was {{}} in her refusal.", f:"resolute", ko:"그녀는 거절에 단호했다." }] },

  /* 승격 103 — 사전의 쌍반점만 쉼표로 갈랐다(determination, D). 원본은 괄호
     "(문제를) 해결하다, 다짐하다" 였는데 사전 순서를 지켜 참조 쪽 뜻('결심') 을
     앞에 두었다. */
  { word:"resolve", exams:["공무원"], pron:"리잘브", pos:"v", level:"B2", meanings:["결심하다","해결하다"],
    syn:["make up one's mind","settle a problem","clear up a dispute"],
    ex:[{ s:"He {{}} to try once more.", f:"resolved", ko:"그는 한 번 더 해 보기로 결심했다." }] },

  { word:"resonance", pron:"레저넌스", pos:"n", level:"C2", meanings:["울림","공명"],
    syn:["ringing sound","echo that carries","sounding together"],
    ex:[{ s:"The hall gives a deep {{}}.", f:"resonance", ko:"그 강당은 깊은 울림을 준다." }] },

  /* 승격 104 — 사전 단일값 유지(asset, A). 원본의 '물자' 는 같은 자리다. */
  { word:"resource", exams:["공무원"], pron:"리소스", pos:"n", level:"B1", meanings:["자원"],
    syn:["asset","supply one can draw on","stock to use"],
    ex:[{ s:"Water is our most precious {{}}.", f:"resource", ko:"물은 우리의 가장 소중한 자원이다." }] },

  /* 승격 105 — 사전 단일값 유지(imaginative, I). */
  { word:"resourceful", pron:"리소스풀", pos:"adj", level:"C1", meanings:["기지가 뛰어난"],
    syn:["imaginative","quick to find a way","good at making do"],
    ex:[{ s:"The guide was calm and {{}}.", f:"resourceful", ko:"그 안내인은 차분하고 기지가 뛰어났다." }] },

  /* 승격 106 — ★ 사전값은 '존중, 존경'(명사) 이었고 참조가 2 대 2 로 갈렸다.
       동사 쪽 admire(존경하다)·comply with(따르다, 준수하다)
       명사 쪽 contempt(경멸) 반의어 · courtesy(공손함) 유의어
     원본이 동사('존경하다, 존중하다') 라 동사로 세우고 명사 쪽 두 곳을 손질했다.
     '존경하다' 는 admire·esteem(E) 의 첫 뜻과 같아 서로 오답에서 빠진다. */
  { word:"respect", pron:"리스펙트", pos:"v", level:"B1", meanings:["존경하다","존중하다"],
    syn:["admire","hold in high regard","think highly of"],
    ex:[{ s:"We all {{}} her judgment.", f:"respect", ko:"우리는 모두 그녀의 판단을 존중한다." }] },

  /* 승격 107 — 사전 글자 유지(decent, D). 바로 아래 respected 와 갈라야 하는
     자리다 — 원본은 둘 다 '훌륭한' 이었다. */
  { word:"respectable", pron:"리스펙터블", pos:"adj", level:"B2", meanings:["존경할 만한","훌륭한"],
    syn:["worthy of regard","good enough to be proud of","of fair standing"],
    ex:[{ s:"He makes a {{}} living.", f:"respectable", ko:"그는 훌륭한 벌이를 한다." }] },

  /* ★ 원본은 '훌륭한, 소문난, 높이 평가되는' 이었다. '훌륭한' 은 위 respectable
     자리이고 '소문난' 은 renowned(유명한) 쪽 뜻이다. 남은 갈래를 앞세웠다. */
  { word:"respected", pron:"리스펙티드", pos:"adj", level:"B2", meanings:["높이 평가되는","존경받는"],
    syn:["looked up to","held in esteem","honored by others"],
    ex:[{ s:"She is a {{}} scholar.", f:"respected", ko:"그녀는 높이 평가되는 학자다." }] },

  { word:"respectful", pron:"리스펙트풀", pos:"adj", level:"B2", meanings:["공손한","존경심을 보이는"],
    syn:["showing regard","polite in manner","mindful of others"],
    ex:[{ s:"He gave a {{}} bow.", f:"respectful", ko:"그는 공손한 인사를 했다." }] },

  /* 원본 '각각의, 각자의' 는 같은 말이라 한 갈래로 줄였다. */
  { word:"respective", pron:"리스펙티브", pos:"adj", level:"B2", meanings:["각각의"],
    syn:["belonging to each","of each one separately","own to each"],
    ex:[{ s:"They went to their {{}} rooms.", f:"respective", ko:"그들은 각각의 방으로 갔다." }] },

  { word:"respectively", pron:"리스펙티블리", pos:"adv", level:"B2", meanings:["각각","제각기"],
    syn:["each in turn","in the order named","one by one as listed"],
    ex:[{ s:"They finished first and third {{}}.", f:"respectively", ko:"그들은 각각 1위와 3위로 끝냈다." }] },

  { word:"respiration", pron:"레스퍼레이션", pos:"n", level:"C1", meanings:["호흡"],
    syn:["breathing in and out","taking in air","work of the lungs"],
    ex:[{ s:"The nurse checked his {{}}.", f:"respiration", ko:"간호사가 그의 호흡을 확인했다." }] },

  { word:"respiratory", pron:"레스퍼러토리", pos:"adj", level:"C1", meanings:["호흡의","호흡 기관의"],
    syn:["to do with breathing","of the lungs and airways","used in taking air"],
    ex:[{ s:"Smoke causes {{}} illness.", f:"respiratory", ko:"연기는 호흡 기관의 병을 일으킨다." }] },

  { word:"respire", pron:"리스파이어", pos:"v", level:"C1", meanings:["호흡하다"],
    syn:["draw breath","take air in and out","breathe"],
    ex:[{ s:"Leaves {{}} through tiny pores.", f:"respire", ko:"잎은 아주 작은 구멍으로 호흡한다." }] },

  /* 승격 108 — 사전은 '응답하다, 반응하다' 였다. '반응하다' 는 react(챕터 2) 에
     넘기고 '호응하다' 를 붙였다. 참조는 없다. */
  { word:"respond", exams:["공무원"], pron:"리스판드", pos:"v", level:"B1", meanings:["응답하다","호응하다"],
    syn:["answer a call","write or speak back","meet with a reply"],
    ex:[{ s:"Nobody would {{}} to the notice.", f:"respond", ko:"아무도 그 공지에 응답하려 하지 않았다." }] },

  /* 승격 109 — 사전 단일값 유지(irresponsible 반의어, I). */
  { word:"responsible", pron:"리스판서블", pos:"adj", level:"B1", meanings:["책임감 있는"],
    syn:["answerable for it","to be trusted with duty","carrying the blame or credit"],
    ant:["irresponsible"],
    ex:[{ s:"She is {{}} for the whole team.", f:"responsible", ko:"그녀는 팀 전체에 책임감 있게 임한다." }] },

  /* ── 챕터 11 ────────────────────────────────────── */
  /* rest-·retr- 어근이 몰렸다. 억제 세 갈래가 여기서 끝난다 —
     refrain 삼가다(챕터 4) / repress 억압하다(챕터 8) / restrain 억제하다, 제지하다.
     ★ retarded 는 영어에서 사람을 낮춰 부르는 말로 굳어진 낱말이다. 사전에 있던
     중립적인 값 '지연된' 을 그대로 쓰고 예문도 시간이 늦어지는 뜻으로 세웠다.
     résumé 는 악센트가 든 표제어다 — 조회는 소문자로 맞춰지므로 문제없다. */

  /* 승격 110 — 사전 단일값 유지(contented 반의어, C). */
  { word:"restless", pron:"레스틀리스", pos:"adj", level:"B2", meanings:["안절부절못하는"],
    syn:["unable to keep still","fidgety","never at rest"], ant:["contented"],
    ex:[{ s:"The child grew {{}}.", f:"restless", ko:"그 아이는 안절부절못하게 되었다." }] },

  /* 원본 '복원, 복구; 회복; 부활' 네 갈래를 둘로 줄였다. */
  { word:"restoration", pron:"레스터레이션", pos:"n", level:"B2", meanings:["복원","복구"],
    syn:["putting back as it was","work of mending","return to the old state"],
    ex:[{ s:"The {{}} of the temple took years.", f:"restoration", ko:"그 절의 복원은 여러 해가 걸렸다." }] },

  /* 승격 111 — 사전 글자 유지(confiscate·cripple·deface·efface 반의어 — 네 곳).
     rehabilitate(재활 치료를 하다 · 챕터 5) 와 갈라 두었다. */
  { word:"restore", pron:"리스토", pos:"v", level:"B1", meanings:["돌려주다","복원하다"],
    syn:["give back","bring back to what it was","set up again"], ant:["deface"],
    ex:[{ s:"They will {{}} the old painting.", f:"restore", ko:"그들은 그 낡은 그림을 복원할 것이다." }] },

  /* 승격 112 — 사전 글자 유지(hold back, H · inhibit, I). */
  { word:"restrain", pron:"리스트레인", pos:"v", level:"B2", meanings:["억제하다","제지하다"],
    syn:["hold back","inhibit","keep in check"],
    ex:[{ s:"He could not {{}} his anger.", f:"restrain", ko:"그는 화를 억제할 수 없었다." }] },

  /* 승격 113 — 사전 글자 유지(inhibition, I). 원본 다섯 갈래를 사전값 둘로 줄였다.
     '구속' 은 rein(고삐, 구속 · 챕터 5) 과 글자가 같아 서로 오답에서 빠진다. */
  { word:"restraint", pron:"리스트레인트", pos:"n", level:"C1", meanings:["절제","구속"],
    syn:["inhibition","holding oneself in","curb on action"],
    ex:[{ s:"She spoke with {{}}.", f:"restraint", ko:"그녀는 절제하며 말했다." }] },

  /* 승격 114 — 사전 단일값 유지(confine·constrain·localize 세 곳). 원본의
     '규제하다' 는 regulate(챕터 5) 자리다. */
  { word:"restrict", pron:"리스트릭트", pos:"v", level:"B1", meanings:["제한하다"],
    syn:["confine","constrain","set limits on"],
    ex:[{ s:"They may {{}} entry to members.", f:"restrict", ko:"그들은 입장을 회원으로 제한할 수도 있다." }] },

  { word:"result from", pron:"리절트 프롬", pos:"phr", level:"B1", meanings:["~에서 비롯되다"],
    syn:["come out of","arise because of","follow from a cause"] },

  /* 승격 115 — 사전 단일값 유지. 원본의 '결국 ~로 끝나다' 는 같은 자리다. */
  { word:"result in", pron:"리절트 인", pos:"phr", level:"B1", meanings:["~을 초래하다"],
    syn:["lead to","end up as","bring on as an outcome"] },

  { word:"resultant", pron:"리절턴트", pos:"adj", level:"C2", meanings:["그 결과로 생긴"],
    syn:["coming from it","following as an outcome","produced by the cause"],
    ex:[{ s:"The {{}} delay cost money.", f:"resultant", ko:"그 결과로 생긴 지연이 돈을 잡아먹었다." }] },

  /* 원본은 '요약, 개요; 이력서' 였다. 수능에서 쓰이는 쪽은 '이력서' 라 앞세웠다.
     악센트가 든 표제어다. */
  { word:"résumé", pron:"레주메", pos:"n", level:"B2", meanings:["이력서","요약"],
    syn:["record of one's career","short account of oneself","summary sheet"],
    ex:[{ s:"Send your {{}} by Friday.", f:"résumé", ko:"금요일까지 이력서를 보내세요." }] },

  /* revitalize(활력을 불어넣다 · 챕터 12) 와 갈랐다 — 원본은 둘 다 '소생시키다' 였다. */
  { word:"resuscitate", pron:"리서시테이트", pos:"v", level:"C2", meanings:["소생시키다"],
    syn:["bring back to life","revive the breathing","save from death"],
    ex:[{ s:"Medics tried to {{}} him.", f:"resuscitate", ko:"구급대원들이 그를 소생시키려 했다." }] },

  /* 원본은 '소매, 소매의' 로 명사와 형용사가 섞여 있었다. */
  { word:"retail", pron:"리테일", pos:"n", level:"B2", meanings:["소매"],
    syn:["selling to the public","trade in small lots","shop selling"],
    ex:[{ s:"The goods are sold at {{}}.", f:"retail", ko:"그 물건은 소매로 팔린다." }] },

  /* 승격 116 — 사전 단일값 유지(eliminate 반의어, E). */
  { word:"retain", exams:["공무원"], pron:"리테인", pos:"v", level:"B2", meanings:["그대로 유지하다"],
    syn:["keep as it is","keep in one's hands","not let go of"], ant:["eliminate"],
    ex:[{ s:"The soil can {{}} water.", f:"retain", ko:"그 흙은 물을 그대로 유지할 수 있다." }] },

  /* ★ 사전에 있던 중립적인 값 '지연된' 을 그대로 썼다. 원본의 '지능이 낮은' 은
     사람을 낮춰 부르는 말로 굳어진 쪽이어서 쓰지 않고, 예문도 시간이 늦어지는
     뜻으로 세웠다. */
  { word:"retarded", pron:"리타디드", pos:"adj", level:"C1", meanings:["지연된"],
    syn:["slowed down","held back in time","late in coming on"],
    ex:[{ s:"Growth was {{}} by the cold.", f:"retarded", ko:"자람이 추위로 지연되었다." }] },

  { word:"retention", pron:"리텐션", pos:"n", level:"C1", meanings:["보유","유지"],
    syn:["keeping of something","holding power","act of not letting go"],
    ex:[{ s:"Water {{}} in soil matters.", f:"retention", ko:"흙의 물 보유가 중요하다." }] },

  { word:"retire", exams:["공무원"], pron:"리타이어", pos:"v", level:"B1", meanings:["퇴직하다","은퇴하다"],
    syn:["leave one's work for good","step back from a job","give up work in old age"],
    ex:[{ s:"He will {{}} next spring.", f:"retire", ko:"그는 다음 봄에 퇴직할 것이다." }] },

  /* 승격 117 — 사전의 쌍반점만 쉼표로 갈랐다. 참조는 없다. */
  { word:"retirement", pron:"리타이어먼트", pos:"n", level:"B1", meanings:["은퇴","퇴직"],
    syn:["leaving work for good","years after one stops working","end of working life"],
    ex:[{ s:"She looks forward to {{}}.", f:"retirement", ko:"그녀는 은퇴를 기다린다." }] },

  /* revoke(취소하다, 철회하다 · 챕터 12) 와 '철회하다' 로 맞물려 서로 오답에서
     빠진다. recede(챕터 2) 에서도 '철회하다' 를 비켜 두었다. */
  { word:"retract", pron:"리트랙트", pos:"v", level:"C2", meanings:["한 말을 취소하다","철회하다"],
    syn:["take back what one said","draw in again","withdraw a claim"],
    ex:[{ s:"He had to {{}} the charge.", f:"retract", ko:"그는 그 고발을 취소해야 했다." }] },

  /* 승격 118 — 사전은 '후퇴, 후퇴하다' 로 명사와 동사가 섞여 있었다. 원본과 참조
     네 곳(advance·approach·barge·counterattack 반의어) 이 동사 쪽이라 동사로 세웠다. */
  { word:"retreat", exams:["공무원"], pron:"리트리트", pos:"v", level:"B2", meanings:["후퇴하다","멀어져 가다"],
    syn:["fall back","draw back from battle","move away"], ant:["advance"],
    ex:[{ s:"The troops began to {{}}.", f:"retreat", ko:"군대가 후퇴하기 시작했다." }] },

  { word:"retribution", pron:"레트리뷰션", pos:"n", level:"C2", meanings:["응징","징벌"],
    syn:["payback for a wrong","punishment deserved","just deserts"],
    ex:[{ s:"They feared divine {{}}.", f:"retribution", ko:"그들은 하늘의 응징을 두려워했다." }] },

  /* ── 챕터 12 ────────────────────────────────────── */
  /* rev- 어근이 여섯이다 — reveal·revenge·revenue·reverse·review·revise·revitalize·
     revoke·revolt·revolution·revolve. 철자가 닮아 선택지가 서로를 흐리기 쉬운
     자리라 뜻을 특히 멀리 벌렸다.
       revolt 봉기, 반기를 듦    ↔ rebellion 반란, 반항(챕터 2) · riot 폭동(챕터 13)
       revolution 혁명, 회전     ↔ rotation 순환, 교대(챕터 13) — '회전' 을 이쪽에 두었다
       revoke 취소하다, 철회하다 ↔ retract 한 말을 취소하다(챕터 11) — 글자를 맞춰 배제
       revitalize 활력을 불어넣다 ↔ resuscitate 소생시키다(챕터 11) */

  /* 승격 119 — 사전 글자 유지(fetch, F). recover·regain 과 '되찾다' 로 맞물린다. */
  { word:"retrieve", pron:"리트리브", pos:"v", level:"B2", meanings:["되찾다","회수하다"],
    syn:["fetch","get back and bring","recover an item"],
    ex:[{ s:"The dog can {{}} the ball.", f:"retrieve", ko:"그 개는 공을 되찾아 올 수 있다." }] },

  { word:"reunion", pron:"리유니언", pos:"n", level:"B2", meanings:["동창회","재회"],
    syn:["gathering of old friends","meeting again","coming back together"],
    ex:[{ s:"The class held a {{}}.", f:"reunion", ko:"그 학급은 동창회를 열었다." }] },

  /* 승격 120 — 사전 글자 유지(conceal 반의어, disclose·divulge·expose·manifest
     — 다섯 곳). */
  { word:"reveal", pron:"리빌", pos:"v", level:"B1", meanings:["드러내다","밝히다"],
    syn:["disclose","divulge","bring to light"], ant:["conceal"],
    ex:[{ s:"He would not {{}} the name.", f:"reveal", ko:"그는 그 이름을 밝히려 하지 않았다." }] },

  /* 승격 121 — 사전 단일값 유지. 원본은 '복수, 복수하다' 로 품사가 섞여 있었다. */
  { word:"revenge", pron:"리벤지", pos:"n", level:"B2", meanings:["복수"],
    syn:["paying back a wrong","act of getting even","settling a score"],
    ex:[{ s:"She wanted {{}}.", f:"revenge", ko:"그녀는 복수를 원했다." }] },

  /* 승격 122 — 사전 글자 유지. 원본의 '소득' 은 income 자리라 사전값을 지켰다. */
  { word:"revenue", exams:["공무원"], pron:"레버뉴", pos:"n", level:"B2", meanings:["수입","세입"],
    syn:["money coming in","income of a state","takings"],
    ex:[{ s:"Tax {{}} fell last year.", f:"revenue", ko:"세입이 지난해 줄었다." }] },

  /* 승격 123 — 사전은 '뒤바꾸다; 반대의' 로 동사와 형용사가 섞여 있었다. 참조
     converse 가 형용사여서 형용사로 세웠다. */
  { word:"reverse", pron:"리버스", pos:"adj", level:"B2", meanings:["반대의","거꾸로의"],
    syn:["converse","the other way round","turned back to front"],
    ex:[{ s:"The {{}} side is blank.", f:"reverse", ko:"반대의 면은 비어 있다." }] },

  /* 승격 124 — 사전의 쌍반점만 쉼표로 갈랐다. 참조가 여섯 곳(audit·brush up·
     commentary·course assessment·critique·go over) 이라 이 챕터에서 화면이 가장
     많이 바뀌는 자리다. 사전값이 명사라 명사로 세웠다. */
  { word:"review", pron:"리뷰", pos:"n", level:"B1", meanings:["검토","비평"],
    syn:["critique","going over again","written judgment"],
    ex:[{ s:"The book got a good {{}}.", f:"review", ko:"그 책은 좋은 비평을 받았다." }] },

  /* 승격 125 — 사전 글자 유지(amend, A). 원본의 괄호 두 개를 걷었다. */
  { word:"revise", pron:"리바이즈", pos:"v", level:"B2", meanings:["수정하다","고치다"],
    syn:["amend","go over and change","put right in a new version"],
    ex:[{ s:"We must {{}} the plan.", f:"revise", ko:"우리는 그 계획을 수정해야 한다." }] },

  { word:"revitalize", pron:"리바이털라이즈", pos:"v", level:"C1", meanings:["활력을 불어넣다"],
    syn:["put new life into","freshen up again","give fresh energy to"],
    ex:[{ s:"The grant will {{}} the town.", f:"revitalize", ko:"그 지원금이 고을에 활력을 불어넣을 것이다." }] },

  /* 승격 126 — 사전 글자 유지(cancel, C). */
  { word:"revoke", pron:"리보크", pos:"v", level:"C1", meanings:["취소하다","철회하다"],
    syn:["cancel","take away a right","call back an order"],
    ex:[{ s:"The court may {{}} the licence.", f:"revoke", ko:"법원이 그 면허를 취소할 수도 있다." }] },

  /* 승격 127 — 사전은 '반란, 봉기' 였다. '반란' 은 rebellion(챕터 2) 에 넘기고
     '봉기' 를 앞세웠다. 원본은 명사와 동사가 섞여 있었다. 참조는 없다. */
  { word:"revolt", pron:"리볼트", pos:"n", level:"C1", meanings:["봉기","반기를 듦"],
    syn:["rising up in arms","open break with rule","act of defiance"],
    ex:[{ s:"The {{}} lasted three days.", f:"revolt", ko:"그 봉기는 사흘 동안 이어졌다." }] },

  /* 승격 128 — 사전의 쌍반점만 쉼표로 갈랐다. '회전' 을 이쪽에 두고 rotation 은
     '순환, 교대' 로 비켜 세웠다. 참조는 없다. */
  { word:"revolution", exams:["공무원"], pron:"레벌루션", pos:"n", level:"B1", meanings:["혁명","회전"],
    syn:["overthrow of a rule","sweeping change","one full turn"],
    ex:[{ s:"The {{}} changed the country.", f:"revolution", ko:"그 혁명이 나라를 바꿨다." }] },

  { word:"revolve", pron:"리발브", pos:"v", level:"B2", meanings:["회전하다","공전하다"],
    syn:["turn on an axis","go round a center","spin in place"],
    ex:[{ s:"The earth {{}} around the sun.", f:"revolves", ko:"지구는 해 주위를 공전한다." }] },

  /* 승격 129 — 사전 단일값 유지(incentive, I). 원본은 '보상, 사례; 보상하다' 로
     명사와 동사가 섞여 있었다. */
  { word:"reward", exams:["공무원"], pron:"리워드", pos:"n", level:"B1", meanings:["보상"],
    syn:["incentive","prize for good work","return for effort"],
    ex:[{ s:"They offered a {{}} for the find.", f:"reward", ko:"그들은 그 발견에 보상을 내걸었다." }] },

  /* 원본 '수사법, 수사학; 미사여구' 에서 '수사학' 은 아래 rhetorical 과 겹쳐 뺐다. */
  { word:"rhetoric", pron:"레터릭", pos:"n", level:"C1", meanings:["수사법","미사여구"],
    syn:["art of persuasive speech","fine-sounding words","skill with language"],
    ex:[{ s:"His speech was pure {{}}.", f:"rhetoric", ko:"그의 연설은 미사여구뿐이었다." }] },

  { word:"rhetorical", pron:"리토리컬", pos:"adj", level:"C1", meanings:["수사학적인"],
    syn:["to do with persuasive speech","asked for effect","of fine speaking"],
    ex:[{ s:"That was a {{}} question.", f:"rhetorical", ko:"그것은 수사학적인 물음이었다." }] },

  /* 외래어 '리드미컬' 을 걷었다. */
  { word:"rhythmic", pron:"리드믹", pos:"adj", level:"B2", meanings:["율동적인"],
    syn:["moving to a beat","with a steady beat","swinging in time"],
    ex:[{ s:"The dance was slow and {{}}.", f:"rhythmic", ko:"그 춤은 느리고 율동적이었다." }] },

  { word:"ridge", pron:"리지", pos:"n", level:"B2", meanings:["산등성이","융기"],
    syn:["long crest of a hill","raised line","spine of high ground"],
    ex:[{ s:"They walked along the {{}}.", f:"ridge", ko:"그들은 산등성이를 따라 걸었다." }] },

  /* 승격 130 — 사전은 '조롱하다; 조롱' 으로 동사와 명사가 섞여 있었다. 원본이
     앞세운 동사로 세웠다. 참조는 없다. */
  { word:"ridicule", pron:"리디큘", pos:"v", level:"C1", meanings:["조롱하다","놀리다"],
    syn:["make fun of","hold up to scorn","laugh at cruelly"],
    ex:[{ s:"Do not {{}} his accent.", f:"ridicule", ko:"그의 말씨를 조롱하지 마라." }] },

  /* 승격 131 — 사전 단일값 유지(absurd, A). */
  { word:"ridiculous", pron:"리디큘러스", pos:"adj", level:"B1", meanings:["우스꽝스러운"],
    syn:["absurd","silly beyond words","fit to be laughed at"],
    ex:[{ s:"The hat looked {{}}.", f:"ridiculous", ko:"그 모자는 우스꽝스러워 보였다." }] },

  /* ── 챕터 13 ────────────────────────────────────── */
  /* ★ round 를 명사('한 차례') 로 세우면서 다른 뜻을 노리던 참조 두 곳을 손질했다.
       bullet(총탄)  syn round → shot fired      ('탄알 한 발' 뜻을 노린 자리)
       chubby(통통한) syn round → plump and curved ('둥근' 뜻을 노린 자리)
     ★ right 는 사전값 '옳은, 정확한'(형용사) 을 지켰다 — 참조 correct 가 형용사다.
     원본의 '권리'(명사) 는 아까운 자리지만 참조가 쓰는 갈래를 남기는 규칙을 따랐다.
     rigid 와 rigorous 는 '엄격한' 으로 글자를 맞춰 서로 오답에서 빠지게 했다. */

  /* 승격 132 — 사전 글자 유지(correct, C). 원본은 '권리, 올바른, 오른쪽의' 로
     명사와 형용사가 섞인 세 갈래였다. */
  { word:"right", pron:"라이트", pos:"adj", level:"B1", meanings:["옳은","정확한"],
    syn:["correct","free from error","just as it should be"],
    ex:[{ s:"That is the {{}} answer.", f:"right", ko:"그것이 옳은 답이다." }] },

  { word:"right angle", pron:"라이트 앵글", pos:"phr", level:"B2", meanings:["직각"],
    syn:["corner of ninety degrees","square corner","turn of a quarter circle"] },

  /* right(옳은) 와 갈랐다 — '옳은' 을 쓰지 않고 '정의로운, 떳떳한' 으로 세웠다. */
  { word:"righteous", pron:"라이처스", pos:"adj", level:"C1", meanings:["정의로운","떳떳한"],
    syn:["upright in conduct","morally sound","on the side of good"],
    ex:[{ s:"He felt {{}} anger.", f:"righteous", ko:"그는 정의로운 분노를 느꼤다." }] },

  /* 승격 133 — 사전의 쌍반점만 쉼표로 갈랐다(adaptive·elastic·flexible 반의어,
     hard-and-fast — 네 곳). 원본의 '완고한' 은 stubborn 자리다. */
  { word:"rigid", pron:"리지드", pos:"adj", level:"B2", meanings:["엄격한","단단한"],
    syn:["hard-and-fast","stiff and unbending","allowing no change"], ant:["flexible"],
    ex:[{ s:"The rules are {{}}.", f:"rigid", ko:"그 규칙은 엄격하다." }] },

  /* 승격 134 — 사전 글자 유지. 참조는 없다. 위 rigid 와 '엄격한' 으로 맞물려
     서로 오답에서 빠진다. */
  { word:"rigorous", pron:"리거러스", pos:"adj", level:"C1", meanings:["엄격한","철저한"],
    syn:["strict in every detail","thorough and exacting","leaving nothing out"],
    ex:[{ s:"The test is {{}}.", f:"rigorous", ko:"그 시험은 엄격하다." }] },

  /* ★ 원본은 '금전 등록기에 상품의 가격을 입력하다' 로 열일곱 자였다 —
     짝맞추기 카드에서 잘리므로 줄였다. */
  { word:"ring up", pron:"링 업", pos:"phr", level:"C2", meanings:["계산대에 값을 입력하다"],
    syn:["enter a price at the till","record a sale","key in the amount"] },

  /* 승격 135 — 사전 글자 유지. 참조는 없다. rebellion(반란)·revolt(봉기) 와 갈랐다. */
  { word:"riot", pron:"라이엇", pos:"n", level:"C1", meanings:["폭동","소란"],
    syn:["violent disorder","crowd running wild","uproar in the streets"],
    ex:[{ s:"A {{}} broke out at the gate.", f:"riot", ko:"문 앞에서 폭동이 일어났다." }] },

  /* 원본 '익다, 익히다; 숙성시키다' 의 '익히다' 는 배우다·요리하다 뜻과 헷갈려
     '여물다' 로 바꿨다. */
  { word:"ripen", pron:"라이픈", pos:"v", level:"B2", meanings:["익다","여물다"],
    syn:["come to full growth","grow ready to eat","turn ripe"],
    ex:[{ s:"The grapes {{}} in autumn.", f:"ripen", ko:"포도는 가을에 익는다." }] },

  /* 승격 136 — 사전 글자 유지(ceremony, C). '의식' 은 consciousness(의식) 과 글자가
     같다 — 한자가 다른 동음이의어다(儀式/意識). 글자가 같으니 서로 오답에서 빠진다. */
  { word:"ritual", exams:["공무원"], pron:"리추얼", pos:"n", level:"B2", meanings:["의식","의례"],
    syn:["ceremony","set form of worship","custom done the same way"],
    ex:[{ s:"The {{}} is repeated each spring.", f:"ritual", ko:"그 의식은 봄마다 되풀이된다." }] },

  { word:"roam", pron:"로움", pos:"v", level:"C1", meanings:["배회하다","떠돌아다니다"],
    syn:["wander with no aim","move about freely","range far and wide"],
    ex:[{ s:"Cattle {{}} across the plain.", f:"roam", ko:"소들이 들판을 떠돌아다닌다." }] },

  /* 원본의 괄호 "(큰 짐승이)" 를 걷었다. */
  { word:"roar", pron:"로어", pos:"v", level:"B2", meanings:["으르렁거리다","굉음을 내다"],
    syn:["give a deep cry","make a loud rumble","bellow"],
    ex:[{ s:"Lions {{}} at dawn.", f:"roar", ko:"사자들이 새벽에 으르렁거린다." }] },

  { word:"robbery", pron:"라버리", pos:"n", level:"B2", meanings:["강도 사건"],
    syn:["taking by force","holdup of a shop","theft with threat"],
    ex:[{ s:"The {{}} took place at noon.", f:"robbery", ko:"그 강도 사건은 정오에 일어났다." }] },

  { word:"rodent", pron:"로던트", pos:"n", level:"C1", meanings:["설치류"],
    syn:["gnawing animal","mouse or rat kind","animal that gnaws with front teeth"],
    ex:[{ s:"A squirrel is a {{}}.", f:"rodent", ko:"다람쥐는 설치류다." }] },

  /* 외래어 '역할 모델' 을 걷었다. */
  { word:"role model", pron:"롤 모델", pos:"phr", level:"B2", meanings:["본보기가 되는 사람"],
    syn:["one others look to","person set as an example","figure worth copying"] },

  /* 원본의 괄호 "(대량) 생산되다" 를 걷었다. */
  { word:"roll off", pron:"롤 오프", pos:"phr", level:"C2", meanings:["줄줄이 생산되다"],
    syn:["come off the line one after another","be turned out in numbers","stream out of a factory"] },

  /* 원본 '회전, 순환, 교대' 에서 '회전' 은 revolution(챕터 12) 에 넘겼다. */
  { word:"rotation", exams:["공무원"], pron:"로테이션", pos:"n", level:"B2", meanings:["순환","교대"],
    syn:["taking turns in order","cycle of change","going round in sequence"],
    ex:[{ s:"Crops are grown in {{}}.", f:"rotation", ko:"작물은 순환으로 재배된다." }] },

  { word:"rote instruction", pron:"로트 인스트럭션", pos:"phr", level:"C2", meanings:["암기식 교육"],
    syn:["teaching by memorizing","drilling without understanding","learning by heart only"] },

  /* 승격 137 — 사전의 쌍반점만 쉼표로 갈랐다(approximate·bumpy·coarse·crude
     — 네 곳). 원본의 '고르지 않은' 은 bumpy 자리라 사전값 '대략의' 를 살렸다. */
  { word:"rough", pron:"러프", pos:"adj", level:"B1", meanings:["거친","대략의"],
    syn:["coarse","not smooth","done in outline only"],
    ex:[{ s:"The road was {{}}.", f:"rough", ko:"그 길은 거칠었다." }] },

  /* 승격 138 — ★ 사전은 '둥근; 회전'(형용사+명사) 이었는데 원본은 '한 차례' 였다.
     원본대로 명사로 세우고 다른 뜻을 노리던 참조 두 곳을 손질했다. */
  { word:"round", pron:"라운드", pos:"n", level:"B1", meanings:["한 차례"],
    syn:["one turn in a series","single go at it","bout in a contest"],
    ex:[{ s:"He won the first {{}}.", f:"round", ko:"그는 첫 차례를 이겼다." }] },

  { word:"round-the-clock", pron:"라운드 더 클락", pos:"adj", level:"C1", meanings:["24시간 계속되는"],
    syn:["going on day and night","all hours without a break","never stopping"],
    ex:[{ s:"They kept a {{}} watch.", f:"round-the-clock", ko:"그들은 24시간 계속되는 경계를 이어 갔다." }] },

  /* ── 챕터 14 ────────────────────────────────────── */
  /* R 세트의 마지막 열아홉 자리다(279 = 20×13 + 19 라 이 챕터만 하나 적다).
     구·표현이 여섯으로 가장 많다 — run ~ 꼴이 넷이다.
     ★ routine 을 명사로 세우면서 customary(관례적인) 의 유의어 자리를 손질했다.
     ★ ruin 을 동사로 세우면서 명사 뜻을 노리던 doom·downfall 두 곳을 손질했다.
     ruins(폐허) 가 명사 쪽을 받는다. */

  /* 승격 139 — 사전은 '일상; 관례적인' 으로 명사와 형용사가 섞여 있었다. 원본과
     참조 둘(adventure 반의어 · comfort zone) 이 명사 쪽이라 명사로 세우고
     형용사 뜻을 노렸던 customary 를 손질했다. */
  { word:"routine", pron:"루틴", pos:"n", level:"B1", meanings:["일상","늘 하는 일"],
    syn:["comfort zone","set way of the day","habit one keeps to"],
    ex:[{ s:"He follows the same {{}}.", f:"routine", ko:"그는 똑같은 일상을 따른다." }] },

  /* 원본 '열, 줄, (극장 따위의) 좌석의 줄' 에서 괄호를 걷고 둘로 줄였다.
     '줄' 은 queue(대기 행렬 · Q)·rank(등급, 계급 · 챕터 1) 와 갈라 두었다. */
  { word:"row", pron:"로우", pos:"n", level:"B1", meanings:["열","좌석의 줄"],
    syn:["line side by side","bank of seats","string of things in a line"],
    ex:[{ s:"We sat in the front {{}}.", f:"row", ko:"우리는 앞 열에 앉았다." }] },

  { word:"rub", pron:"러브", pos:"v", level:"B1", meanings:["문지르다","비비다"],
    syn:["move back and forth on","scrub with the hand","chafe"],
    ex:[{ s:"He began to {{}} his eyes.", f:"rub", ko:"그는 눈을 비비기 시작했다." }] },

  { word:"rubber", pron:"러버", pos:"n", level:"B1", meanings:["고무"],
    syn:["stretchy stuff from trees","springy material for soles","elastic substance"],
    ex:[{ s:"The soles are made of {{}}.", f:"rubber", ko:"그 밑창은 고무로 만들어졌다." }] },

  /* 승격 140 — 사전 단일값 유지(litter, L · nonsense, N). 원본 '쓰레기' 보다
     좁은 사전값을 지켰다. */
  { word:"rubbish", pron:"러비시", pos:"n", level:"B2", meanings:["잡쓰레기"],
    syn:["litter","waste thrown out","stuff of no worth"],
    ex:[{ s:"Do not leave {{}} on the beach.", f:"rubbish", ko:"바닷가에 잡쓰레기를 두지 마라." }] },

  /* 승격 141 — ★ 사전은 '파괴하다; 폐허'(동사+명사) 였다. 동사로 세우고 명사 뜻을
     노리던 doom·downfall 두 곳을 손질했다 — 명사 쪽은 바로 아래 ruins 가 받는다. */
  { word:"ruin", pron:"루인", pos:"v", level:"B1", meanings:["파괴하다","망치다"],
    syn:["destroy","spoil beyond repair","bring to nothing"],
    ex:[{ s:"Rain will {{}} the crop.", f:"ruin", ko:"비가 그 작물을 망칠 것이다." }] },

  /* 원본 '폐허, 유적, 파멸' 에서 '유적' 은 relic(유물, 유적 · 챕터 6), '파멸' 은
     doom(파멸, 비운 · D) 자리라 '폐허' 만 남겼다. */
  { word:"ruins", exams:["공무원"], pron:"루인즈", pos:"n", level:"B2", meanings:["폐허"],
    syn:["broken remains of buildings","walls left standing","wreck of a town"],
    ex:[{ s:"They dug among the {{}}.", f:"ruins", ko:"그들은 폐허 사이를 파헤쳤다." }] },

  /* 승격 142 — 사전은 '규칙; 통치하다' 로 명사와 동사가 섞여 있었다. 참조
     dominate·govern 이 동사여서 동사로 세웠다. '지배하다' 는 dominate·govern 의
     뜻과 글자가 같아 서로 오답에서 빠진다. */
  { word:"rule", pron:"룰", pos:"v", level:"B2", meanings:["통치하다","지배하다"],
    syn:["govern","hold power over","have command of"],
    ex:[{ s:"A queen used to {{}} the island.", f:"rule", ko:"여왕이 그 섬을 통치하곤 했다." }] },

  /* 승격 143 — 사전 글자 유지(disqualify, D). */
  { word:"rule out", pron:"룰 아웃", pos:"phr", level:"B2", meanings:["배제하다","제외하다"],
    syn:["disqualify","shut out as impossible","take off the list"] },

  /* 승격 144 — 사전의 쌍반점만 쉼표로 갈랐다. 참조는 없다. 원본의 괄호
     "(사업체, 기관 등을)" 를 걷었다. */
  { word:"run", pron:"런", pos:"v", level:"B1", meanings:["운영하다","달리다"],
    syn:["manage a business","keep a place going","move fast on foot"],
    ex:[{ s:"They {{}} a small bakery.", f:"run", ko:"그들은 작은 빵집을 운영한다." }] },

  /* "(=stand for)" 표기를 걷었다. */
  { word:"run for", pron:"런 포", pos:"phr", level:"C1", meanings:["~에 출마하다"],
    syn:["stand for election","put oneself up for a post","seek office"] },

  /* 승격 145 — 사전 글자 유지(encounter, E). */
  { word:"run into", pron:"런 인투", pos:"phr", level:"B1", meanings:["우연히 만나다"],
    syn:["encounter","come across by chance","bump into"] },

  { word:"run out of", pron:"런 아웃 오브", pos:"phr", level:"B1", meanings:["~을 다 써 버리다"],
    syn:["use up all of","be left with none","exhaust the supply"] },

  { word:"run the risk of", pron:"런 더 리스크 오브", pos:"phr", level:"C1", meanings:["~의 위험을 무릅쓰다"],
    syn:["take a chance on harm","expose oneself to danger","chance a bad outcome"] },

  /* 승격 146 — 사전 글자 유지(drainage, D). 원본의 '결선 투표, 결승전' 은 버렸다. */
  { word:"runoff", pron:"런오프", pos:"n", level:"C2", meanings:["흘러내린 물","유출수"],
    syn:["drainage","water flowing off land","overflow from rain"],
    ex:[{ s:"Farm {{}} pollutes the river.", f:"runoff", ko:"농장에서 흘러내린 물이 강을 더럽힌다." }] },

  /* 승격 147 — 사전 글자 유지(built-up 반의어, B). 원본의 '지방의' 는 province
     (지방, 주 · P) 와 부딪혀 사전값을 지켰다. */
  { word:"rural", pron:"루럴", pos:"adj", level:"B1", meanings:["시골의","농촌의"],
    syn:["of the countryside","away from the city","farming in character"], ant:["built-up"],
    ex:[{ s:"They moved to a {{}} area.", f:"rural", ko:"그들은 시골의 지역으로 옮겼다." }] },

  /* 승격 148 — 사전 글자 유지(corrosion, C). 원본은 '녹; 녹슬다, 부식시키다' 로
     명사와 동사가 섞여 있었는데 참조 corrosion 이 명사여서 명사로 세웠다. */
  { word:"rust", pron:"러스트", pos:"n", level:"B2", meanings:["녹","부식"],
    syn:["corrosion","reddish coat on iron","eating away of metal"],
    ex:[{ s:"The gate is covered with {{}}.", f:"rust", ko:"그 문은 녹으로 덮여 있다." }] },

  { word:"rustle", pron:"러슬", pos:"v", level:"C1", meanings:["바스락거리다"],
    syn:["make a soft dry sound","whisper like dry leaves","swish faintly"],
    ex:[{ s:"Leaves {{}} in the wind.", f:"rustle", ko:"잎이 바람에 바스락거린다." }] },

  /* 승격 149 — 사전 단일값 유지(brutal, compassionate·merciful 반의어 — 세 곳).
     R 세트의 마지막 자리다. */
  { word:"ruthless", pron:"루스리스", pos:"adj", level:"C1", meanings:["무자비한"],
    syn:["brutal","showing no pity","hard without mercy"], ant:["merciful"],
    ex:[{ s:"The leader was {{}}.", f:"ruthless", ko:"그 지도자는 무자비했다." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
  "a looking-up": "찾아보는 일",
  "a making better": "더 낫게 만듦",
  "a turning down": "물리침",
  "able to be replaced": "다시 채울 수 있는",
  "able to withstand": "견뎌 낼 수 있는",
  "about the matter of": "~의 일에 대하여",
  "act in answer": "답으로 움직이다",
  "act in place of": "~을 대신해 나서다",
  "act of defiance": "맞서는 행동",
  "act of getting even": "앙갚음하는 일",
  "act of knowing again": "다시 알아봄",
  "act of not letting go": "놓지 않는 일",
  "act without thought": "생각 없이 나오는 움직임",
  "admit to be true": "참이라고 받아들이다",
  "again and again": "자꾸자꾸",
  "air again": "다시 내보내다",
  "all hours without a break": "쉼 없이 온 시간",
  "allowing no change": "바꿈을 허락하지 않는",
  "allowing no freedom": "자유를 주지 않는",
  "anger held in": "안에 담아 둔 화",
  "animal that gnaws with front teeth": "앞니로 갉아 먹는 짐승",
  "answer a call": "부름에 답하다",
  "answer back": "되받아 답하다",
  "answer with action": "행동으로 답하다",
  "answerable for it": "그 일을 떠맡는",
  "answering move": "되받아 내는 움직임",
  "arise because of": "~ 때문에 생기다",
  "art of persuasive speech": "말로 설득하는 기술",
  "as a preference": "더 좋아서",
  "as it happens": "일어나는 그대로",
  "ask to have back": "돌려 달라고 하다",
  "asked for effect": "효과를 노려 묻는",
  "at ease": "마음이 놓인",
  "at the root": "뿌리에서부터",
  "atomic pile": "원자로 더미",
  "automatic response": "저절로 나오는 반응",
  "away from the city": "도시에서 떨어진",
  "back up with more": "더 보태어 받치다",
  "bad feeling that lasts": "오래 남는 나쁜 마음",
  "balance between two": "둘 사이의 균형",
  "bank of seats": "나란한 자리 묶음",
  "be full of joy": "기쁨에 가득하다",
  "be left over": "남아 있다",
  "be left with none": "하나도 남지 않게 되다",
  "be much the same as": "~와 거의 같다",
  "be sorry for": "~을 안타깝게 여기다",
  "be turned out in numbers": "여럿이 만들어지다",
  "bear a grudge over": "~을 두고 앙심을 품다",
  "being able to be trusted": "믿을 수 있음",
  "being judged by comparison": "견주어 정해짐",
  "believer in racial superiority": "한 인종이 낫다고 믿는 이",
  "bellow": "우렁차게 울다",
  "belonging to each": "저마다에 딸린",
  "bitter regret": "쓰라린 후회",
  "book of records": "기록을 담은 책",
  "bound to a creed": "교리에 매인",
  "bout in a contest": "겨루기의 한 판",
  "break in the day": "하루 중의 쉼",
  "breathe": "숨쉬다",
  "breathing in and out": "숨을 들이고 내쉼",
  "bring back in another form": "다른 꼴로 되돌리다",
  "bring back into use": "다시 쓰이게 되돌리다",
  "bring back to life": "다시 살려 내다",
  "bring back to mind": "다시 머리에 떠올리다",
  "bring back to what it was": "본래 모습으로 되돌리다",
  "bring down in size": "크기를 낮추다",
  "bring forth young": "새끼를 낳다",
  "bring into accord": "서로 맞게 하다",
  "bring new life to": "새 생명을 주다",
  "bring on as an outcome": "결과로 불러오다",
  "bring to full growth": "다 자라게 하다",
  "bring to nothing": "아무것도 아니게 만들다",
  "bring up a child": "아이를 길러 내다",
  "bringing forth young": "새끼를 낳음",
  "broken remains of buildings": "부서져 남은 건물",
  "build again": "다시 세우다",
  "built-in reaction": "몸에 박힌 반응",
  "by chance": "우연히",
  "call back an order": "명령을 거두어들이다",
  "call in a faulty product": "흠 있는 물건을 거둬들이다",
  "call to account": "따져 묻다",
  "calling in new members": "새 사람을 불러 모음",
  "calm rest": "고요한 쉼",
  "carrying on the line": "핏줄을 이어 감",
  "carrying the blame or credit": "탓과 공을 함께 지는",
  "casting fault on one": "잘못을 씌우는",
  "cattle farm": "소를 기르는 농장",
  "cause to become": "~이 되게 하다",
  "celebrate with joy": "기뻐하며 기리다",
  "chafe": "쓸려 아프게 하다",
  "chance a bad outcome": "나쁜 결과를 무릅쓰다",
  "change for the better": "나은 쪽으로 바꿈",
  "check on freedom": "자유를 누르는 것",
  "clear up a dispute": "다툼을 풀어내다",
  "cold-blooded crawler": "찬피로 기어 다니는 것",
  "come across by chance": "우연히 마주치다",
  "come off the line one after another": "줄줄이 만들어져 나오다",
  "come out of": "~에서 나오다",
  "come round once more": "한 번 더 돌아오다",
  "come to full growth": "다 자라다",
  "come to have once more": "또 지니게 되다",
  "come to know": "알게 되다",
  "coming back together": "다시 한자리에 모임",
  "coming from it": "그것에서 나온",
  "confession of fault": "잘못을 털어놓음",
  "copy exactly": "똑같이 옮기다",
  "corner of ninety degrees": "구십 도로 꺾인 모",
  "course of health care": "몸을 돌보는 과정",
  "credit given": "인정해 주는 것",
  "crowd running wild": "날뛰는 무리",
  "curb on action": "움직임을 막는 테두리",
  "custom done the same way": "늘 같게 치르는 관습",
  "cycle of change": "돌고 도는 바뀜",
  "defier of authority": "권위를 거스르는 이",
  "dependence on a frame": "기준에 딸림",
  "do over with the same result": "같은 결과로 다시 해내다",
  "do up anew": "새로 손보다",
  "do without doing": "하지 않고 넘기다",
  "doing the same over": "같은 것을 거듭하는",
  "done as usual": "늘 하던 대로 하는",
  "done for fun": "즐기려고 하는",
  "done in outline only": "줄거리만 잡은",
  "draw away little by little": "조금씩 멀어지다",
  "draw back from battle": "싸움에서 뒤로 빼다",
  "draw breath": "숨을 들이켜다",
  "draw in again": "다시 안으로 당기다",
  "drilling without understanding": "뜻 없이 익히게 함",
  "driving one away": "멀어지게 하는",
  "dwell in a place": "한 곳에 머물러 살다",
  "dwelling place": "살림 자리",
  "each in turn": "차례차례 저마다",
  "ease a pain": "아픔을 눅이다",
  "easy bond": "편한 사이",
  "easy in mind": "마음이 편한",
  "eating away of metal": "쇠가 삭아 가는 것",
  "echo that carries": "멀리 가는 메아리",
  "elastic substance": "잘 늘어나는 물질",
  "emitting rays": "빛살을 뿜는",
  "end of working life": "일하는 삶의 끝",
  "end up as": "끝내 ~이 되다",
  "enter a price at the till": "계산대에 값을 넣다",
  "entry on a list": "명단에 오른 항목",
  "exact copy": "똑같은 것",
  "exhaust the supply": "가진 것을 바닥내다",
  "exile from home": "고향을 떠난 이",
  "expose oneself to danger": "스스로를 위험에 두다",
  "fair and sensible": "온당하고 슬기로운",
  "fall back": "뒤로 밀려나다",
  "fall from power": "권력에서 떨어짐",
  "fall in business": "장사가 떨어짐",
  "far from anywhere": "아무 데서나 멀리 떨어진",
  "far-reaching in change": "바꿈이 크게 미치는",
  "farming in character": "농사가 바탕인",
  "feel anger at": "~에 화를 느끼다",
  "feel it once more": "한 번 더 느끼다",
  "fidgety": "몸을 뒤척이는",
  "field of activity": "활동이 미치는 분야",
  "fighter against rule": "다스림에 맞서 싸우는 이",
  "figure worth copying": "따를 만한 인물",
  "find a meaning that is not there": "없는 뜻을 찾아내다",
  "fine-sounding words": "듣기 좋게 꾸민 말",
  "firm in purpose": "뜻이 굳은",
  "fit of temper": "울컥 치미는 화",
  "fit to be laughed at": "웃음거리가 될 만한",
  "follow from a cause": "원인에서 따라 나오다",
  "following as an outcome": "결과로 따라오는",
  "for rest and play": "쉬고 놀기 위한",
  "force that holds back": "막아 세우는 힘",
  "four-sided with right angles": "네 변에 직각인",
  "free from error": "틀림이 없는",
  "freed from worry": "걱정에서 벗어난",
  "freshen up again": "다시 생기 돌게 하다",
  "front desk": "맞이하는 창구",
  "full of blame": "나무람이 가득한",
  "full reach": "미치는 만큼 전부",
  "gather a crop": "곡식을 걷다",
  "gathering for a cause": "뜻을 위해 모임",
  "gathering of old friends": "옛 벗들이 모임",
  "get as a return": "보답으로 얻다",
  "get back again": "다시 손에 넣다",
  "get back and bring": "되찾아 가져오다",
  "get into one's hands": "손에 넣다",
  "get well again": "다시 낫다",
  "give a deep cry": "굵게 소리를 내다",
  "give a formal warning": "정식으로 경고하다",
  "give a new body to": "새 몸을 주다",
  "give an answer": "답을 주다",
  "give back": "되돌려 주다",
  "give fresh energy to": "새 힘을 주다",
  "give out heat": "열을 내보내다",
  "give the money back": "돈을 되돌려 주다",
  "give up formally": "정식으로 내놓다",
  "give up work in old age": "늙어 일을 놓다",
  "give way at last": "끝내 물러서다",
  "given to quiet thought": "조용히 생각에 잠기는",
  "giving off radiation": "방사선을 내는",
  "giving up a post": "자리를 내놓음",
  "glad it is over": "끝나서 반가운",
  "gnawing animal": "앞니로 갉는 짐승",
  "go back through it": "그 일을 되짚어 지나다",
  "go back to an earlier state": "앞선 상태로 돌아가다",
  "go on being": "계속 그러하다",
  "go over and change": "훑어보고 손보다",
  "go round a center": "가운데를 돌아가다",
  "go through it beforehand": "미리 한 번 해 보다",
  "going on day and night": "밤낮으로 이어지는",
  "going over again": "다시 훑어봄",
  "going round in sequence": "차례대로 돌아감",
  "going to the root": "뿌리까지 파고드는",
  "good at making do": "있는 것으로 잘 꾸리는",
  "good enough to be proud of": "자랑할 만큼 좋은",
  "government in power": "권력을 쥔 정부",
  "grazing estate": "풀 먹이는 넓은 땅",
  "great repute": "큰 평판",
  "grow back": "다시 자라나다",
  "grow ready to eat": "먹을 만하게 되다",
  "guided by reason": "이치를 따르는",
  "habit one keeps to": "지켜 오는 버릇",
  "hand on a message": "말을 건네 주다",
  "hand over a claim": "권리를 넘겨주다",
  "happen again": "또 일어나다",
  "hard to stomach": "견디기 어려운",
  "hard without mercy": "자비 없이 매서운",
  "harsh in rule": "다스림이 거친",
  "hater of other races": "다른 인종을 미워하는 이",
  "have command of": "~을 거느리다",
  "have one's address at": "~에 주소를 두다",
  "having a link": "이어진 데가 있는",
  "held back in time": "때가 늦춰진",
  "held in esteem": "높이 받들어지는 처지인",
  "help stand on one's own": "제 발로 서게 돕다",
  "high regard": "높이 받듦",
  "hiring drive": "사람 뽑기 운동",
  "hold down by force": "힘으로 눌러 두다",
  "hold off from": "~하지 않고 버티다",
  "hold out against": "~에 버텨 내다",
  "hold over another": "남을 붙잡아 두는 힘",
  "hold power over": "~을 손아귀에 두다",
  "hold sovereign power": "으뜸 권력을 쥐다",
  "hold to be": "~라고 붙들다",
  "hold up to scorn": "비웃음거리로 세우다",
  "holding anger inside": "화를 안에 품은",
  "holding back": "뒤로 물러서는",
  "holding back of feeling": "속마음을 드러내지 않음",
  "holding oneself in": "스스로를 누름",
  "holding people down": "사람을 짓누르는",
  "holding power": "붙들어 두는 힘",
  "holdup of a shop": "가게를 털는 일",
  "honored by others": "남들이 기리는",
  "house one lives in": "사는 집",
  "how many to how many": "몇 대 몇",
  "how one is thought of": "남들이 어떻게 보는지",
  "how things relate": "서로 얽힌 정도",
  "image thrown back": "되비친 모습",
  "in a sweeping way": "싹 쓸어내듯",
  "in the order named": "말한 차례대로",
  "income of a state": "나라에 들어오는 돈",
  "jog the memory": "기억을 건드리다",
  "joy that carries one away": "넋을 빼앗는 기쁨",
  "judged against something else": "다른 것에 대어 보아 정하는",
  "just as it should be": "마땅히 그러해야 하는 대로인",
  "just deserts": "받아야 할 값",
  "keep a place going": "가게를 돌아가게 하다",
  "keep back for a purpose": "쓸 데를 두고 남겨 두다",
  "keep in check": "다잡아 두다",
  "keep in one's hands": "손에 쥐고 있다",
  "keep in order by rule": "규칙으로 다잡다",
  "keep oneself from": "스스로 못 하게 하다",
  "keep under": "아래에 눌러 두다",
  "keeping of something": "무엇을 지니고 있음",
  "keeping to oneself": "제 안에만 머무는",
  "keeping to what is possible": "될 만한 데 머무는",
  "key in the amount": "금액을 눌러 넣다",
  "kingdom": "임금이 다스리는 나라",
  "know again on sight": "보고 다시 알아보다",
  "large hidden supply": "크게 감춰 둔 양",
  "large stock farm": "큰 가축 농장",
  "late in coming on": "더디게 나타나는",
  "laugh at cruelly": "모질게 비웃다",
  "lead to": "~로 이어지다",
  "leaning on another": "남에게 기댐",
  "learning by heart only": "외우기만 하는 배움",
  "leave in a state": "어떤 상태로 두다",
  "leave one's work for good": "일을 아주 그만두다",
  "leaving nothing out": "하나도 빠뜨리지 않는",
  "leaving work for good": "일을 아주 그만둠",
  "left over and useless": "남았는데 쓸 데 없는",
  "let fall a word": "한마디 떨어뜨리다",
  "let for money": "돈을 받고 내주다",
  "let go free": "놓아 주다",
  "let go of a right": "권리를 놓아 버리다",
  "let out": "내보내다",
  "let up": "기세가 꺾이다",
  "letter leaving a job": "일을 그만두는 글",
  "light food and drink": "가벼운 음식과 마실 것",
  "likeness between two": "둘 사이의 닮음",
  "line side by side": "나란히 늘어선 줄",
  "list of entries": "항목을 적은 목록",
  "list one by one": "하나씩 늘어놓다",
  "live as it goes": "되는 대로 바로 내보내는",
  "live through again": "다시 겪어 보다",
  "living in a place": "한 곳에 살고 있음",
  "long crest of a hill": "산의 길게 솟은 등",
  "look like": "~처럼 보이다",
  "look of being alike": "비슷해 보임",
  "look on as": "~로 보다",
  "look to for help": "도움을 찾아 보다",
  "looked up to": "우러러보게 되는",
  "looking back on old days": "옛날을 돌아봄",
  "lying at ease": "편히 누워 있음",
  "made in advance": "미리 만들어 둔",
  "make a copy of": "~의 사본을 만들다",
  "make a loud rumble": "크게 울리는 소리를 내다",
  "make a soft dry sound": "마른 잔소리를 내다",
  "make fun of": "놀림감으로 삼다",
  "make good the outlay": "들인 돈을 메워 주다",
  "make into something new": "새것으로 만들다",
  "make land fit for use": "땅을 쓸 수 있게 만들다",
  "make one's home": "집을 두고 살다",
  "make over a building": "건물을 고쳐 짓다",
  "make pure": "순수하게 만들다",
  "make real": "실제가 되게 하다",
  "make stronger": "더 튼튼하게 하다",
  "make two things agree": "둘을 들어맞게 하다",
  "make up one's mind": "마음을 정하다",
  "make valid again": "다시 유효하게 하다",
  "making of a duplicate": "같은 것을 만듦",
  "man-made lake": "사람이 만든 못",
  "manage a business": "사업을 꾸리다",
  "mark on a scale": "척도 위의 표시",
  "marsh plant": "늪에 자라는 풀",
  "mass meeting": "사람이 많이 모인 자리",
  "means of putting right": "바로잡는 수단",
  "measure per unit": "단위마다 재는 값",
  "meet with a reply": "답을 내놓다",
  "meeting again": "다시 만남",
  "memory told aloud": "소리 내어 들려주는 기억",
  "mend": "기워 고치다",
  "mention of a source": "출처를 밝힘",
  "mindful of others": "남을 헤아리는",
  "money coming in": "들어오는 돈",
  "morally sound": "도덕으로 흠이 없는",
  "more than is needed": "필요한 것보다 많은",
  "mouse or rat kind": "쥐 붙이",
  "move about freely": "마음대로 돌아다니다",
  "move away": "멀어져 가다",
  "move back": "뒤로 물러가다",
  "move back and forth on": "~ 위를 오가며 밀다",
  "move fast on foot": "발로 빠르게 가다",
  "move to a new place": "새 자리로 옮기다",
  "moving to a beat": "박자에 맞춰 움직이는",
  "must have": "반드시 있어야 하다",
  "name known far": "멀리까지 알려진 이름",
  "name one has": "지닌 이름",
  "named seat": "이름이 붙은 자리",
  "need of support": "받쳐 줄 것이 필요함",
  "never at rest": "도무지 쉬지 못하는",
  "never stopping": "멈추는 일이 없는",
  "not absolute": "딱 정해진 것이 아닌",
  "not giving in to": "~에 지지 않는",
  "not let go of": "놓지 않다",
  "not often seen": "자주 보이지 않는",
  "not running out": "바닥나지 않는",
  "not smooth": "매끄럽지 않은",
  "not to be swayed": "흔들리지 않는",
  "not too much": "지나치지 않은",
  "note pointing elsewhere": "다른 데를 가리키는 쪽지",
  "note to jog one": "일러 주려 남긴 쪽지",
  "nudge to recall": "떠올리도록 건드림",
  "nurse back to health": "돌봐 낫게 하다",
  "of atomic decay": "원자가 붕괴하는",
  "of each one separately": "하나하나 따로의",
  "of fair standing": "자리가 번듯한",
  "of fine speaking": "잘 꾸민 말솜씨의",
  "of one's race": "제 인종의",
  "of the countryside": "시골 쪽의",
  "of the lungs and airways": "허파와 숨길의",
  "of worship": "예배에 관한",
  "off the shelf": "선반에서 바로 꺼내 쓰는",
  "on the side of good": "옳은 편에 선",
  "on the subject of": "~을 두고",
  "one by one as listed": "적힌 대로 하나씩",
  "one full turn": "한 바퀴 돌기",
  "one others look to": "남들이 우러러보는 이",
  "one sent to speak for others": "남을 대신해 말하러 보낸 이",
  "one turn in a series": "이어지는 일의 한 번",
  "one who flees danger": "위험을 피해 온 이",
  "one who judges by race": "인종으로 사람을 가리는 이",
  "one who lives there": "거기 사는 이",
  "one who receives": "받는 이",
  "one who rises up": "일어나 맞서는 이",
  "open break with rule": "다스림과 드러내어 갈라섬",
  "open defiance": "드러낸 거스름",
  "over and over": "거듭거듭",
  "overflow from rain": "비로 넘쳐 나온 물",
  "overhaul of a system": "제도를 뜯어고침",
  "overthrow of a rule": "다스림을 뒤엎음",
  "own to each": "저마다 자기 것인",
  "pace at which it happens": "일이 일어나는 속도",
  "paper showing payment": "값을 치른 것을 보이는 종이",
  "pass along": "넘겨 주다",
  "pause in work": "일을 멈춘 동안",
  "pay back": "돈을 갚다",
  "pay one back for costs": "든 비용을 돌려주다",
  "payback for a wrong": "잘못에 대한 되갚음",
  "paying back a wrong": "당한 것을 되갚음",
  "person given something": "무엇을 받은 사람",
  "person seeking shelter": "몸 붙일 곳을 찾는 사람",
  "person set as an example": "보기로 세워진 사람",
  "picked at will": "되는 대로 골라",
  "piece together anew": "조각을 새로 이어 붙이다",
  "pieces one can play": "연주할 수 있는 곡들",
  "place booked ahead": "미리 잡아 둔 자리",
  "place in an order": "차례 속의 자리",
  "place of safety": "안전한 곳",
  "place on a list": "목록에서의 자리",
  "place things are kept": "물건을 두는 곳",
  "plant for atomic power": "원자력을 내는 설비",
  "planting over again": "다시 심어 놓음",
  "plump and curved": "살이 올라 둥그런",
  "polish of manner": "몸가짐의 세련",
  "polish to a finer state": "더 곱게 다듬다",
  "polite in manner": "몸가짐이 바른",
  "position held": "맡고 있는 자리",
  "power to bounce back": "되튀어 오르는 힘",
  "practice before the show": "공연 전에 익히기",
  "practice for a show": "무대에 앞서 익히다",
  "prize for good work": "잘한 일에 주는 상",
  "produced by the cause": "그 원인이 낳은",
  "punishment deserved": "마땅히 받을 벌",
  "push back an attack": "공격을 밀어내다",
  "put another in place": "다른 것을 대신 놓다",
  "put at ease": "마음을 놓게 하다",
  "put back into use": "다시 쓰이게 하다",
  "put back together": "다시 맞춰 놓다",
  "put down a feeling": "감정을 짓누르다",
  "put forward as good": "좋다고 내놓다",
  "put in mind of": "~을 떠올리게 하다",
  "put new life into": "새 기운을 넣다",
  "put on a list": "명단에 올리다",
  "put one's own sense into": "제 생각을 밀어 넣다",
  "put one's trust in": "~을 믿고 맡기다",
  "put oneself up for a post": "자리를 두고 나서다",
  "put right again": "다시 바로 하다",
  "put right in a new version": "새 판에서 바로잡다",
  "putting back as it was": "본래대로 되돌려 놓음",
  "putting plants back": "나무를 되돌려 심음",
  "putting trust in": "믿고 맡김",
  "quick to find a way": "길을 빨리 찾아내는",
  "quiet thought": "조용한 생각",
  "raise young": "새끼를 치다",
  "raised line": "도도록하게 솟은 줄",
  "range far and wide": "멀리까지 돌아다니다",
  "range one has mastered": "익혀 둔 폭",
  "read aloud by heart": "외워 소리 내어 읽다",
  "ready to take in": "받아들일 준비가 된",
  "record a sale": "판 것을 적어 넣다",
  "record of one's career": "지나온 일을 적은 글",
  "recover an item": "물건을 찾아 오다",
  "recover hold of": "다시 붙들다",
  "reddish coat on iron": "쇠에 앉은 붉은 껍질",
  "refusal to take": "받기를 마다함",
  "regard for others": "남을 받드는 마음",
  "relation in number": "수로 본 관계",
  "renew itself": "스스로 새로워지다",
  "repeat of a trial": "시험을 되풀이함",
  "response to something": "무엇에 대한 응답",
  "restore to good order": "멀쩡하게 되돌리다",
  "return for effort": "힘쓴 것에 대한 보답",
  "return in time": "때가 되면 되돌아오다",
  "return to the old state": "옛 상태로 돌아감",
  "return what was paid": "낸 것을 돌려주다",
  "revive the breathing": "숨을 되살리다",
  "revolt of the people": "백성이 일으킨 난",
  "ringing sound": "울려 나는 소리",
  "rise up against": "맞서 일어서다",
  "rising against rule": "다스림에 맞서 일어섬",
  "rising up in arms": "무기를 들고 일어섬",
  "roll of names": "이름을 적은 명부",
  "rue a choice": "고른 것을 애석해하다",
  "rule as a monarch": "임금으로서 다스리다",
  "rules for diet": "먹거리에 대한 규칙",
  "ruling set-up": "다스리는 틀",
  "run over it again": "다시 훑어 보다",
  "run-through": "처음부터 훑어 보기",
  "save from death": "죽음에서 건져 내다",
  "say from memory": "외운 것을 말하다",
  "say in passing": "지나가듯 말하다",
  "saying no": "아니라고 함",
  "saying the same twice": "같은 말을 두 번 하는",
  "scaly land animal": "비늘 있는 땅 짐승",
  "scold openly": "드러내어 꾸짖다",
  "score given": "매겨 준 점수",
  "scrub with the hand": "손으로 쓱쓱 밀다",
  "seat held for one": "누구를 위해 잡아 둔 자리",
  "see at last": "마침내 알아보다",
  "seek office": "공직을 노리다",
  "seldom found": "좀처럼 볼 수 없는",
  "selling to the public": "사람들에게 직접 팖",
  "send back to life": "다시 살아 오게 하다",
  "send onward": "앞으로 보내다",
  "send out in rays": "빛살로 내보내다",
  "send out once more": "한 번 더 내보내다",
  "set aside for later": "나중을 위해 따로 두다",
  "set at liberty": "자유롭게 풀어 주다",
  "set form of worship": "정해진 예배 꼴",
  "set in working order": "돌아가게 맞춰 놓다",
  "set limits on": "~에 한계를 두다",
  "set of cooking steps": "음식 만드는 차례",
  "set one's mind at rest": "걱정을 내려놓게 하다",
  "set plan for eating": "정해진 먹는 계획",
  "set to a standard": "기준에 맞춰 두다",
  "set up again": "다시 세워 놓다",
  "set up elsewhere": "다른 데에 자리 잡다",
  "set way of the day": "하루의 정해진 흐름",
  "setting out new stock": "새 모를 내놓음",
  "settle a problem": "문제를 가라앉히다",
  "settle a quarrel": "다툼을 가라앉히다",
  "settling a score": "묵은 셈을 치름",
  "shaped like a long box": "긴 상자 꼴인",
  "shelter from danger": "위험을 막아 주는 곳",
  "shift base": "터를 옮기다",
  "shop selling": "가게에서 하는 판매",
  "short account of oneself": "자기를 간추린 글",
  "shot fired": "쏜 한 발",
  "show a response": "반응을 보이다",
  "show a second time": "두 번째로 보여 주다",
  "show as in a glass": "거울처럼 비추다",
  "showing displeasure": "못마땅함을 드러내는",
  "showing no pity": "딱하게 여기지 않는",
  "showing regard": "받드는 마음을 보이는",
  "showing things as they are": "있는 대로 보여 주는",
  "shut out as impossible": "안 될 일로 잘라 두다",
  "signing up": "이름을 적어 넣음",
  "silly beyond words": "말도 못 하게 어리석은",
  "single go at it": "한 번의 시도",
  "sit on the throne": "왕좌에 앉다",
  "skill with language": "말을 다루는 솜씨",
  "slip back": "뒤로 미끄러지다",
  "slip for what one paid": "낸 값을 적은 쪽지",
  "slow to open up": "좀처럼 마음을 열지 않는",
  "slowed down": "더디게 된",
  "slump in trade": "거래가 주저앉음",
  "snacks served": "내놓는 간식",
  "soften one's stand": "태도를 누그러뜨리다",
  "something that prompts memory": "기억을 부르는 것",
  "sore about it": "그 일로 속이 쓰린",
  "sorrow for a wrong": "잘못을 두고 아파함",
  "sorrow that changes one": "사람을 바꾸는 슬픔",
  "sounding together": "함께 울림",
  "soundness": "탈 없음",
  "span from end to end": "끝에서 끝까지 걸침",
  "sparing of words": "말을 아끼는",
  "speak of": "입에 올리다",
  "speak well of": "좋게 말하다",
  "speed of change": "변하는 빠르기",
  "spin in place": "제자리에서 돌다",
  "spine of high ground": "높은 땅의 등뼈",
  "spoil beyond repair": "손댈 수 없게 망치다",
  "spot out of harm's way": "해가 미치지 않는 자리",
  "spring that returns": "돌아오는 탄력",
  "springy material for soles": "밑창에 쓰는 물렁한 감",
  "square corner": "네모지게 꺾인 모",
  "stalk by the water": "물가에 선 줄기",
  "stand against": "맞서 버티다",
  "stand for a group": "한 무리를 대신하다",
  "stand for election": "선거에 나서다",
  "stand-in for a body": "단체를 대신하는 이",
  "standard one has to reach": "닿아야 하는 기준",
  "standing against": "맞서 버팀",
  "standing with others": "남들 사이에서의 자리",
  "start again": "다시 시작하다",
  "stay behind": "뒤에 남다",
  "steadiness one can count on": "믿고 맡길 만한 한결같음",
  "step back from a job": "일자리에서 물러나다",
  "stepping down": "자리에서 내려옴",
  "stiff and unbending": "딱딱하고 굽지 않는",
  "stillness of body": "몸의 잠잠함",
  "sting of guilt": "죄스러움의 쓰림",
  "stirring disgust": "넌더리를 일으키는",
  "stock of works ready": "갖춰 둔 작품 목록",
  "stock to use": "쓸 밑감",
  "store for safekeeping": "안전하게 두는 창고",
  "store of water": "물을 모아 둔 곳",
  "strap for guiding a horse": "말을 끄는 줄",
  "stream out of a factory": "공장에서 쏟아져 나오다",
  "stretchy stuff from trees": "나무에서 얻는 늘어나는 것",
  "strict in every detail": "낱낱이 깐깐한",
  "string of things in a line": "한 줄로 이어진 것들",
  "stuff of no worth": "값어치 없는 것",
  "summary sheet": "간추려 적은 장",
  "supply one can draw on": "끌어다 쓸 수 있는 밑거리",
  "sure not to fail": "어긋남이 없을 만한",
  "swap in for": "바꿔 끼우다",
  "sweeping change": "싹 바뀜",
  "sweeping repair": "싹 손보는 일",
  "swinging in time": "장단에 맞춰 흔들리는",
  "swish faintly": "가늘게 스치는 소리를 내다",
  "take a chance on harm": "해를 볼 셈을 하고 하다",
  "take a load off": "짐을 덜어 내다",
  "take after": "~을 닮아 가다",
  "take air in and out": "공기를 들이고 내다",
  "take away": "치워 없애다",
  "take away a right": "권리를 거두어 가다",
  "take back what one said": "한 말을 거두어들이다",
  "take great delight": "크게 즐거워하다",
  "take in the harvest": "가을걷이를 들이다",
  "take it ill": "나쁘게 받아들이다",
  "take more from it than it says": "말한 것보다 더 읽어 내다",
  "take off the list": "목록에서 빼다",
  "take on hire": "빌려 쓰다",
  "take the place of": "~의 자리를 차지하다",
  "take to be so": "그러하다고 여기다",
  "take to task": "따끔하게 다루다",
  "take up once more": "다시 손에 들다",
  "take what is given": "주는 것을 받다",
  "taking by force": "힘으로 빼앗음",
  "taking in air": "공기를 들임",
  "taking on new people": "새 사람을 들임",
  "taking turns in order": "차례를 돌려 맡음",
  "takings": "벌어들인 액수",
  "tale of the past": "지난 일의 이야기",
  "tall water grass": "물가에 키 큰 풀",
  "tea and cakes": "차와 과자",
  "teaching by memorizing": "외우게 해서 가르침",
  "tell off sharply": "호되게 이르다",
  "that nature makes again": "자연이 다시 만드는",
  "that one would undo": "되돌리고 싶은",
  "the other way round": "거꾸로 된",
  "theft with threat": "위협을 끼운 도둑질",
  "thin on the ground": "드물게 흩어져 있는",
  "thing left from the past": "지난 시절에서 남은 것",
  "thing that must be met": "반드시 채워야 하는 것",
  "think highly of": "높이 여기다",
  "think of in a way": "어떻게 생각하다",
  "thinking things through": "끝까지 따져 보는",
  "thorough and exacting": "빈틈없고 까다로운",
  "throw back light": "빛을 되던지다",
  "tie between two": "둘을 잇는 끈",
  "time after time": "번번이",
  "time off between sessions": "수업 사이의 틈",
  "to be counted on": "믿고 맡길 만한",
  "to be sorry about": "안타까워할 만한",
  "to be trusted with duty": "일을 맡겨도 되는",
  "to do with breathing": "숨쉬기에 얽힌",
  "to do with faith": "믿음에 얽힌",
  "to do with leisure": "여가에 얽힌",
  "to do with persuasive speech": "설득하는 말에 얽힌",
  "to do with race": "인종에 얽힌",
  "to the very base": "바탕까지",
  "touch that improves": "나아지게 하는 손질",
  "trade in small lots": "조금씩 나눠 파는 거래",
  "trial run of a play": "연극을 미리 해 보기",
  "true to life": "실제와 꼭 같은",
  "turn away in disgust": "역겨워 등을 돌리게 하다",
  "turn into": "~으로 바꾸다",
  "turn of a quarter circle": "동그라미의 사분의 일 만큼 꺾임",
  "turn on an axis": "축을 두고 돌다",
  "turn ripe": "익어 가다",
  "turned back to front": "앞뒤가 뒤바뀐",
  "turning from a wrong": "잘못에서 돌아섬",
  "turning things over": "이리저리 헤아리는",
  "unable to keep still": "가만히 있지 못하는",
  "unwilling to act": "나서려 하지 않는",
  "upright in conduct": "행실이 곧은",
  "uproar in the streets": "거리의 소동",
  "use again": "다시 쓰다",
  "use up all of": "~을 모두 써 버리다",
  "used in taking air": "공기를 들이는 데 쓰는",
  "utter collapse": "아주 무너짐",
  "vessel where reaction runs": "반응이 일어나는 통",
  "violent anger": "거센 노여움",
  "violent disorder": "거친 난장",
  "walls left standing": "남아 선 벽",
  "wander with no aim": "갈 곳 없이 헤매다",
  "warm understanding": "따뜻한 이해",
  "waste thrown out": "내버린 것",
  "water flowing off land": "땅에서 흘러나가는 물",
  "way things stand between": "서로 놓인 사이",
  "way to make it": "만드는 방법",
  "welcoming party": "맞이하는 잔치",
  "what follows an act": "어떤 일 뒤에 따라오는 것",
  "whatever may be": "어떻든 간에",
  "whisper like dry leaves": "마른 잎처럼 속삭이다",
  "wide fame": "널리 퍼진 이름",
  "widely known": "널리 알려진",
  "win back": "되찾아 오다",
  "win back for use": "되찾아 쓰게 하다",
  "wish one had not": "하지 않았기를 바라다",
  "with a steady beat": "고른 박자를 지닌",
  "withdraw a claim": "주장을 물리다",
  "without a set order": "정해진 차례 없이",
  "without change": "달라짐이 없는",
  "without delay in reporting": "알리는 데 늦음이 없는",
  "without regard to": "~을 셈에 넣지 않고",
  "work of mending": "고쳐 놓는 일",
  "work of the lungs": "허파가 하는 일",
  "work out a number": "수를 셈해 내다",
  "worth notice": "눈길을 둘 만한",
  "worthy of regard": "받들 만한",
  "wreck of a town": "무너진 고을",
  "write back": "글로 답하다",
  "write or speak back": "글이나 말로 되답하다",
  "written judgment": "글로 내린 평가",
  "years after one stops working": "일을 놓은 뒤의 시절"
});

