/**
 * 단어 데이터 — 수능 보카 J 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *
 * ⚠️ GLOSS 는 words.js 가 이미 만들어 둔 객체다. 여기서 window.GLOSS = {...} 로
 *    재대입하면 A~I 세트의 것이 통째로 사라진다. 반드시 이 파일 맨 아래처럼
 *    Object.assign 으로 병합할 것. 키는 소문자, 앞뒤 공백 없이.
 *
 * ── 이 세트의 승격 ──
 *
 * 14단어 중 8개가 이미 유의어 사전에 있었다 — 비율로는 이 저장소에서 가장 높다.
 * j 로 시작하는 낱말 자체가 적고, 그중 쓰이는 것(just·judge·justice·joint)은
 * 죄다 기본 낱말이어서 오래전부터 다른 문제의 유의어로 동원돼 왔기 때문이다.
 *
 * 그중 둘은 바로 앞서 넣은 I 세트가 참조한다 — justice←injustice(ant),
 * juvenile←immature(syn). 사전 뜻을 글자까지 지켜 그 화면을 보존했다.
 *
 * 원칙은 A~I 세트와 같다.
 *   ① 같은 갈래면 기존 뜻을 쓴다 (기존 문제 화면이 안 바뀐다)
 *   ② 다른 갈래면 기존 쪽 뜻을 첫 자리에 남긴다
 *   ③ 사전에만 있던 갈래는 뒤에 붙여 살린다
 * 판단 근거는 해당 단어 주석에 적는다.
 */
window.VOCAB_J = [
  { word:"jewelry", exams:["공무원"], pron:"주얼리", pos:"n", level:"B2", meanings:["보석류","장신구"], syn:["jewels","ornaments","trinkets"], ex:[{ s:"Evans found a trove of {{}} and pottery.", f:"jewelry", ko:"에번스는 보석류와 도기가 담긴 보물 더미를 발견했다." }] },
  { word:"journalist", exams:["공무원"], pron:"저널리스트", pos:"n", level:"B2", meanings:["기자","언론인"], syn:["reporter","correspondent","columnist"], ex:[{ s:"Foreign {{}} hope to cover as much news as possible.", f:"journalists", ko:"외국 기자들은 가능한 한 많은 뉴스를 취재하기를 바란다." }] },
  { word:"judgmental", exams:["공무원"], pron:"저지멘털", pos:"adj", level:"C1", meanings:["비판적인","쉽게 단정하는"], syn:["critical","disapproving","censorious"], ex:[{ s:"Try not to be {{}} when others share their problems.", f:"judgmental", ko:"다른 사람이 고민을 털어놓을 때 함부로 판단하지 않도록 하라." }] },
  { word:"just in case", exams:["공무원"], pron:"저스트 인 케이스", pos:"phr", level:"B1", meanings:["만일을 대비해","혹시 모르니"] },
  /* ── 챕터 1 ─────────────────────────────── */

  { word:"janitor", pron:"재너터", pos:"n", level:"B2", meanings:["경비","관리인"],
    syn:["caretaker","custodian","doorkeeper"],
    ex:[{ s:"The {{}} unlocks the building at six each morning.", f:"janitor", ko:"관리인이 매일 아침 6시에 건물 문을 연다." }] },

  { word:"jargon", pron:"자건", pos:"n", level:"C1", meanings:["용어","전문 용어"],
    syn:["terminology","lingo","technical language"],
    ex:[{ s:"The manual is full of impenetrable technical {{}}.", f:"jargon", ko:"그 설명서는 이해할 수 없는 전문 용어로 가득하다." }] },

  /* 승격 ① — GLOSS '질투하는' 을 첫 자리에 지켰다. envious(syn) 가 참조한다.
     원본 '질투심이 많은' 은 같은 갈래라 사전 쪽 표현을 쓰고, 원본의 '시샘하는' 을
     둘째 자리에 붙였다. */
  { word:"jealous", pron:"젤러스", pos:"adj", level:"B1", meanings:["질투하는","시샘하는"],
    syn:["envious","resentful","covetous"],
    ex:[{ s:"He gradually grew {{}} of his brother's success.", f:"jealous", ko:"그는 점차 형의 성공을 질투하게 되었다." }] },

  /* 승격 ① — GLOSS '위태롭게 하다' 가 원본 첫 뜻과 글자까지 같다.
     endanger(syn) 가 참조한다. 원본의 '위협하다' 를 둘째 자리에 붙였다. */
  { word:"jeopardize", pron:"제퍼다이즈", pos:"v", level:"C1", meanings:["위태롭게 하다","위협하다"],
    syn:["endanger","imperil","threaten"],
    ex:[{ s:"One careless remark could {{}} the whole deal.", f:"jeopardize", ko:"부주의한 말 한마디가 거래 전체를 위태롭게 할 수 있다." }] },

  /* jeopardize 와 어근이 같지만 품사가 달라(v/n) 같은 보드에 안 온다.
     첫 뜻 '위험' 이 H 세트 hazard 와 같지만, 뜻이 같은 표제어는 meaningsOverlap 이
     같은 보기에 함께 뜨지 못하게 막으므로 그대로 두었다. */
  { word:"jeopardy", pron:"제퍼디", pos:"n", level:"C1", meanings:["위험","위기"],
    syn:["peril","danger","risk"],
    ex:[{ s:"The entire project was suddenly in {{}}.", f:"jeopardy", ko:"사업 전체가 갑자기 위험에 빠졌다." }] },

  /* 승격 ① — GLOSS '공동의, 합동의' 가 원본 첫 갈래와 글자까지 같다.
     참조가 3곳(coed·collective·communal)이라 그대로 두었다.
     원본의 명사 갈래('이음매, 관절')는 pos 가 adj 라 담지 못했다. */
  { word:"joint", pron:"조인트", pos:"adj", level:"B2", meanings:["공동의","합동의"],
    syn:["communal","collective","shared"], ant:["individual"],
    ex:[{ s:"The two firms issued a {{}} statement on Friday.", f:"joint", ko:"두 회사는 금요일에 공동 성명을 발표했다." }] },

  { word:"journalism", pron:"저널리즘", pos:"n", level:"B2", meanings:["언론","저널리즘"],
    syn:["reporting","the press","news media"],
    ex:[{ s:"She won a national award for investigative {{}}.", f:"journalism", ko:"그녀는 탐사 언론 활동으로 전국 단위 상을 받았다." }] },

  /* 승격 ① — GLOSS '판단하다, 심사하다' 를 글자까지 지켰다. evaluate(syn) 가
     참조하므로 원본의 '판정하다' 대신 사전 쪽 '심사하다' 를 남겼다.
     원본의 명사 갈래('판사, 심판')는 pos 가 v 라 담지 못했다. */
  { word:"judge", pron:"저지", pos:"v", level:"B1", meanings:["판단하다","심사하다"],
    syn:["evaluate","assess","appraise"],
    ex:[{ s:"You should not {{}} a book by its cover.", f:"judge", ko:"표지로 책을 판단해서는 안 된다." }] },

  { word:"judicial", pron:"주디셜", pos:"adj", level:"C1", meanings:["사법의","재판의"],
    syn:["legal","juridical","court-related"],
    ex:[{ s:"The case is now subject to {{}} review.", f:"judicial", ko:"그 사건은 이제 사법 심사의 대상이다." }] },

  /* 원본 뜻은 '쓰레기' 였는데 L 세트의 litter 와 같았다. junk 는 버려진 물건·고물
     쪽이고 litter 는 흩어진 쓰레기 쪽이라 '폐물, 고물' 로 갈랐다. */
  /* ★ syn 의 "scrap" 을 "rubbish" 로 바꿨다. scrap 은 S 세트에서 동사
     '폐기하다, 버리다' 로 선다 — 참조 셋 중 call off·do away with 가 동사이고
     이 자리만 명사였다. 다수 쪽에 맞추고 이 한 곳을 명사 낱말로 갈았다. */
  { word:"junk", pron:"정크", pos:"n", level:"B2", meanings:["폐물","고물"],
    syn:["rubbish","odds and ends","castoffs"],
    ex:[{ s:"The garage was piled high with old {{}}.", f:"junk", ko:"그 차고는 낡은 폐물이 높이 쌓여 있었다." }] },

  /* 승격 ① — GLOSS '공정한; 바로' 를 글자까지 지켰다. 참조 둘이 서로 다른 갈래를
     쓴다 — fair(syn) 는 형용사 '공정한', barely(syn) 는 부사 '바로' 쪽이다.
     둘 다 살리려면 갈래를 함께 둬야 해서 pos 는 첫 갈래에 맞춰 adj 로 잡았다.
     원본 '올바른, 타당한; 방금, 단지' 와 같은 갈래다. */
  { word:"just", pron:"저스트", pos:"adj", level:"B1", meanings:["공정한","바로"],
    syn:["fair","equitable","rightful"],
    ex:[{ s:"They campaigned for a more {{}} society.", f:"just", ko:"그들은 더 공정한 사회를 위해 운동했다." }] },

  /* 승격 ① — GLOSS '정의' 를 첫 자리에 지켰다. I 세트 injustice 의 반의어로
     쓰이므로 이 갈래가 바뀌면 방금 넣은 문제 화면이 바뀐다.
     원본의 '정당성' 을 둘째 자리에 붙였다. */
  { word:"justice", pron:"저스티스", pos:"n", level:"B1", meanings:["정의","정당성"],
    syn:["fairness","equity","righteousness"], ant:["injustice"],
    ex:[{ s:"The verdict was seen as a victory for {{}}.", f:"justice", ko:"그 판결은 정의의 승리로 여겨졌다." }] },

  /* 승격 ① — GLOSS '정당화하다, 설명하다' 를 글자까지 지켰다. account for(syn) 가
     참조하므로 원본의 '해명하다' 대신 사전 쪽 '설명하다' 를 남겼다.
     justice 와 어근이 같지만 품사가 달라(n/v) 같은 보드에 안 온다. */
  { word:"justify", exams:["공무원"], pron:"저스터파이", pos:"v", level:"B2", meanings:["정당화하다","설명하다"],
    syn:["account for","defend","vindicate"],
    ex:[{ s:"Nothing can {{}} cruelty on that scale.", f:"justify", ko:"어떤 것도 그 정도 규모의 잔인함을 정당화할 수 없다." }] },

  /* 승격 ① — GLOSS '유치한, 청소년의' 를 글자까지 지켰다. I 세트 immature 의
     유의어로 쓰이는 갈래가 '유치한' 이라 원본('청소년의' 가 앞) 대신 사전 쪽을
     남겼다. 원본 '소년 소녀의' 는 '청소년의' 와 같은 갈래다. */
  { word:"juvenile", pron:"주버나일", pos:"adj", level:"B2", meanings:["유치한","청소년의"],
    syn:["immature","childish","adolescent"], ant:["mature"],
    ex:[{ s:"His {{}} behaviour annoyed the whole team.", f:"juvenile", ko:"그의 유치한 행동이 팀 전체를 짜증나게 했다." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 (세트 파일에 PRON
   블록을 두는 선례가 없다. pron.js 가 이 파일보다 뒤에 로드되므로 여기서
   Object.assign(window.PRON, ...) 을 하면 pron.js 쪽 값에 덮인다). */
Object.assign(window.GLOSS, {
  "adolescent": "사춘기의",
  "caretaker": "시설 관리인",
  "castoffs": "버려진 물건",
  "censorious": "비난하기 좋아하는",
  "court-related": "법정에 관한",
  "custodian": "관리 책임자",
  "doorkeeper": "문지기",
  "equity": "형평, 공평",
  "fairness": "공정함",
  "juridical": "법률상의",
  "lingo": "특수 용어",
  "news media": "보도 매체",
  "odds and ends": "잡동사니",
  "righteousness": "의로움",
  "rightful": "정당한 권리의",
  "technical language": "기술 언어",
  "the press": "언론계",
  "vindicate": "정당함을 입증하다"
});
