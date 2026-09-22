/**
 * 단어 데이터 — 수능 보카 G 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *
 * ⚠️ GLOSS 는 words.js 가 이미 만들어 둔 객체다. 여기서 window.GLOSS = {...} 로
 *    재대입하면 A~F 세트의 것이 통째로 사라진다. 반드시 이 파일 맨 아래처럼
 *    Object.assign 으로 병합할 것. 키는 소문자, 앞뒤 공백 없이.
 *
 * ── 이 세트를 쓰면서 지키는 규약 (D·E·F 세트와 동일) ──
 *
 * meanings — 대표 2개까지만. 첫 뜻에는 괄호 설명을 넣지 않는다.
 *   4지선다 선택지와 짝 맞추기 카드에 그대로 찍히는 문자열이다.
 *
 * ex.f — 반드시 '규칙 변화'만 쓴다.  ★ 가장 중요한 함정
 *   불규칙이면 오답이 원형으로 남아 뜻을 몰라도 정답이 보인다.
 *   tools/words-g-audit.js 가 기계로 검사한다.
 *
 * syn — 문맥에서 실제로 바꿔 쓸 수 있는 말 3개, 아니면 아예 비운다.
 *   3개 미만이면 '아닌 것 고르기'가 출제되지 않으면서 데이터만 남는다.
 *   선택지로 뜨는 모든 낱말은 뜻(GLOSS)과 발음(PRON)을 둘 다 가져야 한다.
 *
 * pos:"phr" — 구·표현은 ex 를 두지 않는다. 기존 166개 전부 ex 가 없다.
 *   빈칸에 구를 넣으면 문장이 어색해지고 어형 변화도 판정할 수 없다.
 *
 * ── G 세트의 승격 (GLOSS 에 있던 단어를 표제어로 올리는 일) ──
 *
 * 37개가 이미 유의어 사전에 있었고, 그 단어를 유의어로 쓰는 기존 문제가
 * 36곳이다. 표제어가 되면 선택지 아래 설명이 '사전 뜻' 에서 '표제어 뜻' 으로
 * 바뀐다. 뜻갈래가 다르면 기존 문제가 조용히 틀린 문제가 된다.
 *
 * 그래서 승격할 때마다 사전에 있던 뜻갈래를 먼저 확인하고,
 *   ① 같은 갈래면 원본 뜻을 쓴다 (설명이 조금 자세해지는 것은 개선이다)
 *   ② 다른 갈래면 사전 쪽 뜻을 첫 자리에 남긴다 (기존 문제를 지킨다)
 * 판단 근거는 해당 단어 주석에 적는다.
 */
window.VOCAB_G = [
  /* ── 챕터 1 ─────────────────────────────── */

  /* 승격 ① — GLOSS '은하' 와 같은 갈래다. constellation 의 유의어로 쓰인다. */
  { word:"galaxy", pron:"갤럭시", pos:"n", level:"B2", meanings:["은하","은하계"],
    syn:["star system","nebula","cosmos"],
    ex:[{ s:"Our solar system sits on the edge of a spiral {{}}.", f:"galaxy", ko:"우리 태양계는 나선 은하의 가장자리에 있다." }] },

  { word:"gallop", pron:"갤럽", pos:"v", level:"B2", meanings:["질주하다","전속력으로 달리다"],
    syn:["sprint","dash","bolt"], ant:["trudge"],
    ex:[{ s:"The horses {{}} across the open field every morning.", f:"gallop", ko:"말들은 아침마다 열린 들판을 질주한다." }] },

  /* 승격 ① — GLOSS '도박하다; 모험' 과 같은 갈래다. bet 의 유의어로 쓰인다.
     stake 를 유의어로 쓰지 않았다 — 사전에 '지분; 말뚝' 으로 이미 등록돼 있어
     선택지에 그 뜻이 찍힌다. speculate('추측하다; 투기하다')로 바꿨다. */
  { word:"gamble", pron:"갬블", pos:"v", level:"B1", meanings:["도박하다","내기하다"],
    syn:["bet","wager","speculate"],
    ex:[{ s:"He lost his savings after he began to {{}} online.", f:"gamble", ko:"그는 온라인으로 도박을 시작한 뒤 저축을 잃었다." }] },

  /* 첫 뜻 '차고' 는 기존 표제어 depot 과 같다. 다만 quizgen 의 distractorPool 이
     뜻이 겹치는 단어를 오답에서 빼므로 둘이 한 문제에서 만나지 않는다. */
  { word:"garage", pron:"거라지", pos:"n", level:"B1", meanings:["차고","정비소"],
    syn:["carport","car park","parking space"],
    ex:[{ s:"She parked the car in the {{}} beside the house.", f:"garage", ko:"그녀는 집 옆 차고에 차를 세웠다." }] },

  { word:"garment", pron:"가먼트", pos:"n", level:"B2", meanings:["의류","옷"],
    syn:["clothing","attire","apparel"],
    ex:[{ s:"Every {{}} is inspected before it leaves the factory.", f:"garment", ko:"모든 의류는 공장을 떠나기 전에 검사를 받는다." }] },

  { word:"gasp", pron:"개스프", pos:"v", level:"B2", meanings:["헐떡거리다","숨이 차다"],
    syn:["pant","wheeze","puff"],
    ex:[{ s:"He began to {{}} after running up six flights of stairs.", f:"gasp", ko:"그는 계단 여섯 층을 뛰어 올라간 뒤 헐떡거리기 시작했다." }] },

  /* 승격 ① — GLOSS '모으다, 수집하다' 와 같은 갈래다. 참조가 5곳으로 가장 많다
     (accumulate·assemble·compile·concentrate·convene). 뜻갈래가 같으므로
     원본 뜻을 그대로 쓴다. */
  { word:"gather", pron:"개더", pos:"v", level:"B1", meanings:["모으다","모이다"],
    syn:["collect","assemble","amass"], ant:["disperse"],
    ex:[{ s:"Please {{}} all the documents before the meeting starts.", f:"gather", ko:"회의가 시작되기 전에 모든 서류를 모아 주세요." }] },

  /* 원본의 '주름살이 늘다'. 구로 다루므로 ex 를 두지 않는다. */
  { word:"gather line", pron:"개더 라인", pos:"phr", level:"C1", meanings:["주름이 생기다"],
    syn:["wrinkle","crease","furrow"] },

  /* 승격 ① — GLOSS '모임, 집회' 와 글자까지 같다. assembly 의 유의어로 쓰인다. */
  { word:"gathering", pron:"개더링", pos:"n", level:"B2", meanings:["모임","집회"],
    syn:["assembly","congregation","turnout"],
    ex:[{ s:"The annual {{}} drew over five hundred members this year.", f:"gathering", ko:"올해 연례 모임에는 500명이 넘는 회원이 모였다." }] },

  /* 승격 ② — 참조가 assess(동사)와 barometer(명사) 로 품사가 갈린다.
     한쪽으로 좁히면 다른 쪽 문제의 설명이 어긋나므로 두 갈래를 함께 담았다.
     pos 는 더 자주 쓰이는 동사로 둔다. */
  { word:"gauge", pron:"게이지", pos:"v", level:"B2", meanings:["측정하다","측정기"],
    syn:["measure","assess","estimate"],
    ex:[{ s:"Engineers used sensors to {{}} the water level in the tank.", f:"gauge", ko:"기술자들은 센서로 탱크의 수위를 측정했다." }] },

  /* 승격 ① — GLOSS '응시하다' 와 같은 갈래다. 참조하는 기존 문제는 없다.
     peer 를 유의어로 쓰지 않았다 — 사전에 '또래; 동료' 로 이미 등록돼 있어
     응시하다의 유의어 자리에 그 뜻이 찍히면 완전히 다른 말이 된다. */
  { word:"gaze", pron:"게이즈", pos:"v", level:"B2", meanings:["응시하다","바라보다"],
    syn:["stare","gape","gawk"],
    ex:[{ s:"She stood at the window and began to {{}} at the sea.", f:"gaze", ko:"그녀는 창가에 서서 바다를 응시하기 시작했다." }] },

  /* 승격 ② — GLOSS 는 '장구, 용품' 인데 원본은 '기어, 톱니바퀴 장치' 로 갈래가
     다르다. equipment 의 유의어로 쓰이므로 장비 쪽 뜻을 첫 자리에 남겼다.
     영어에서도 gear 는 장비 쪽으로 더 자주 쓴다. */
  { word:"gear", pron:"기어", pos:"n", level:"B1", meanings:["장비","기어"],
    syn:["equipment","apparatus","outfit"],
    ex:[{ s:"Climbers must check their {{}} before the final ascent.", f:"gear", ko:"등반가들은 마지막 등반 전에 장비를 점검해야 한다." }] },

  /* syn 을 비웠다 — sex 하나뿐이고 3개를 채우려면 억지 낱말을 넣어야 한다. */
  { word:"gender", pron:"젠더", pos:"n", level:"B1", meanings:["성별","성"],
    ex:[{ s:"The survey recorded age, {{}}, and occupation for each person.", f:"gender", ko:"그 조사는 각 사람의 나이, 성별, 직업을 기록했다." }] },

  /* 승격 ① — GLOSS '유전자' 와 글자까지 같다. chromosome 의 유의어로 쓰인다.
     syn 은 비웠다 — 유전자의 동의어라 할 만한 낱말이 없다. */
  { word:"gene", pron:"진", pos:"n", level:"B2", meanings:["유전자"],
    ex:[{ s:"Scientists located the {{}} responsible for the disorder.", f:"gene", ko:"과학자들은 그 질환을 일으키는 유전자를 찾아냈다." }] },

  { word:"genealogy", pron:"지니앨러지", pos:"n", level:"C1", meanings:["계보","족보"],
    syn:["ancestry","lineage","pedigree"],
    ex:[{ s:"He spent years tracing the family's {{}} through old records.", f:"genealogy", ko:"그는 오래된 기록으로 그 가문의 계보를 추적하는 데 여러 해를 보냈다." }] },

  /* 원본은 '일반의, 전반에 걸치는; 육군 장군' 이다. 두 갈래는 품사가 달라
     한 카드에 담으면 뜻이 흐려진다. 형용사 쪽으로 모았다. */
  { word:"general", pron:"제너럴", pos:"adj", level:"B1", meanings:["일반의","전반적인"],
    syn:["overall","widespread","broad"], ant:["specific"],
    ex:[{ s:"There is {{}} agreement that the plan should go ahead.", f:"general", ko:"그 계획을 진행해야 한다는 데 전반적인 동의가 있다." }] },

  /* 승격 ① — GLOSS 가 '만들어 내다, 발생시키다' 다. 원본은 순서만 반대이므로
     사전 순서를 그대로 지켜 bring in 문제의 화면이 한 글자도 안 바뀌게 했다. */
  { word:"generate", pron:"제너레이트", pos:"v", level:"B2", meanings:["만들어 내다","발생시키다"],
    syn:["produce","create","yield"],
    ex:[{ s:"Solar panels {{}} enough power for the whole building.", f:"generate", ko:"태양 전지판이 건물 전체에 쓸 충분한 전력을 만들어 낸다." }] },

  { word:"generation gap", pron:"제너레이션 갭", pos:"phr", level:"B2", meanings:["세대 차이"],
    syn:["age gap","generational divide","culture clash"] },

  { word:"generator", pron:"제너레이터", pos:"n", level:"B2", meanings:["발전기"],
    syn:["dynamo","turbine","power unit"],
    ex:[{ s:"The hospital switched to a backup {{}} during the blackout.", f:"generator", ko:"병원은 정전 동안 예비 발전기로 전환했다." }] },

  /* 첫 뜻 '포괄적인' 은 기존 표제어 comprehensive 와 같다. 순서를 바꿔
     '통칭하는' 을 앞에 두었다 — generic 의 고유한 뜻은 이쪽이다. */
  { word:"generic", pron:"제네릭", pos:"adj", level:"C1", meanings:["통칭하는","포괄적인"],
    syn:["nonspecific","universal","blanket"], ant:["specific"],
    ex:[{ s:"Most shoppers picked the cheaper {{}} brand off the shelf.", f:"generic", ko:"대부분의 구매자는 선반에서 더 싼 통칭 브랜드를 골랐다." }] },

  /* ── 챕터 2 ─────────────────────────────── */

  /* 승격 ① — GLOSS 가 '관대함, 너그러움' 이다. 원본은 순서만 반대이므로
     사전 순서를 그대로 지켜 charity 문제의 화면이 안 바뀌게 했다. */
  { word:"generosity", pron:"제너라서티", pos:"n", level:"B2", meanings:["관대함","너그러움"],
    syn:["benevolence","magnanimity","goodwill"], ant:["greed"],
    ex:[{ s:"Her {{}} toward complete strangers surprised everyone.", f:"generosity", ko:"낯선 사람들에게 보인 그녀의 관대함은 모두를 놀라게 했다." }] },

  /* 승격 ① — GLOSS 가 '관대한; 너그러운' 이다. 순서를 지켜 ample 문제를 보존했다.
     generosity 와 어근이 같지만 품사가 달라 같은 보드에 오지 않는다. */
  { word:"generous", pron:"제너러스", pos:"adj", level:"B2", meanings:["관대한","너그러운"],
    syn:["ample","lavish","liberal"], ant:["stingy"],
    ex:[{ s:"He made a {{}} donation to the local library last year.", f:"generous", ko:"그는 지난해 지역 도서관에 관대한 기부를 했다." }] },

  { word:"genetic", pron:"저네틱", pos:"adj", level:"B2", meanings:["유전의","유전자의"],
    syn:["hereditary","inherited","inborn"],
    ex:[{ s:"The condition has a strong {{}} component.", f:"genetic", ko:"그 질환은 유전적 요인이 강하다." }] },

  /* 원본 표제어는 'genetically modified(GM)' 이었다. (GM) 은 구의 일부가 아니라
     약어 주석이고, 표제어에 괄호가 든 전례가 0건이며 24자로 기존 최장(23자)을
     넘어 짝 맞추기 카드를 흔든다. 괄호를 뺐다. */
  { word:"genetically modified", pron:"저네티컬리 마디파이드", pos:"phr", level:"C1", meanings:["유전자 변형된"],
    syn:["engineered","transgenic","bioengineered"] },

  /* syn 을 비웠다 — 학문 이름은 바꿔 쓸 수 있는 말이 없다. genetic 과 어근이
     같지만 품사가 달라(adj/n) 같은 보드에 오지 않는다. */
  { word:"genetics", pron:"저네틱스", pos:"n", level:"B2", meanings:["유전학"],
    ex:[{ s:"She studies {{}} at a government research institute.", f:"genetics", ko:"그녀는 정부 연구소에서 유전학을 연구한다." }] },

  { word:"genre", pron:"장르", pos:"n", level:"B2", meanings:["장르","유형"],
    syn:["category","style","classification"],
    ex:[{ s:"Science fiction has long been his favourite {{}}.", f:"genre", ko:"공상과학은 오랫동안 그가 가장 좋아하는 장르였다." }] },

  /* 승격 ① — GLOSS '진짜의, 진품의' 를 글자까지 지켰다. authentic 의 유의어이고
     counterfeit·deceptive·fake 세 문제의 반의어로도 쓰인다. */
  { word:"genuine", pron:"제뉴인", pos:"adj", level:"B2", meanings:["진짜의","진품의"],
    syn:["authentic","real","bona fide"], ant:["fake"],
    ex:[{ s:"Experts confirmed that the painting was {{}}.", f:"genuine", ko:"전문가들은 그 그림이 진품임을 확인했다." }] },

  /* 원본은 geographic 과 geographical 이 둘 다 '지리적인; 지리학의' 였다.
     뜻 문자열이 같으면 4지선다에서 정답이 둘이 되고 짝 맞추기 소거법이 무너진다.
     뜻을 갈라 쓰고(지리의 / 지리학의) 서로를 유의어로 등록했다 —
     quizgen 의 distractorPool 과 makeMatch 가 유의어 관계를 보고
     둘을 한 문제·한 보드에 넣지 않는다. */
  { word:"geographic", pron:"지오그래픽", pos:"adj", level:"B2", meanings:["지리의","지리적인"],
    syn:["geographical","regional","spatial"],
    ex:[{ s:"The survey covers a very wide {{}} area.", f:"geographic", ko:"그 조사는 매우 넓은 지리적 범위를 다룬다." }] },

  { word:"geographical", pron:"지오그래피컬", pos:"adj", level:"B2", meanings:["지리학의","지리학적인"],
    syn:["geographic","topographic","cartographic"],
    ex:[{ s:"He published a {{}} study of the northern region.", f:"geographical", ko:"그는 북부 지역에 대한 지리학 연구를 발표했다." }] },

  { word:"geography", pron:"지오그래피", pos:"n", level:"B1", meanings:["지리","지형"],
    syn:["terrain","topography","landscape"],
    ex:[{ s:"The {{}} of the island makes large-scale farming difficult.", f:"geography", ko:"그 섬의 지형은 대규모 농사를 어렵게 한다." }] },

  { word:"geology", pron:"지올러지", pos:"n", level:"B2", meanings:["지질학"],
    ex:[{ s:"He has taught {{}} at the university for twenty years.", f:"geology", ko:"그는 20년간 그 대학에서 지질학을 가르쳤다." }] },

  { word:"geometry", pron:"지아머트리", pos:"n", level:"B2", meanings:["기하학"],
    ex:[{ s:"Students learn basic {{}} in middle school.", f:"geometry", ko:"학생들은 중학교에서 기초 기하학을 배운다." }] },

  { word:"geothermal", pron:"지오서멀", pos:"adj", level:"C1", meanings:["지열의"],
    ex:[{ s:"Iceland draws much of its power from {{}} sources.", f:"geothermal", ko:"아이슬란드는 전력의 상당 부분을 지열원에서 얻는다." }] },

  /* 승격 ② — GLOSS 는 '세균; 싹' 인데 원본은 '세균, 병균' 이다. bud 의 유의어로
     쓰이는 쪽은 '싹' 이라, 병균 대신 싹을 둘째 자리에 남겨 bud 문제를 지켰다. */
  { word:"germ", pron:"점", pos:"n", level:"B2", meanings:["세균","싹"],
    syn:["bacterium","microbe","pathogen"],
    ex:[{ s:"A single {{}} can multiply into millions within hours.", f:"germ", ko:"단 하나의 세균이 몇 시간 안에 수백만 개로 늘어날 수 있다." }] },

  { word:"gesticulate", pron:"제스티큘레이트", pos:"v", level:"C2", meanings:["몸짓으로 이야기하다"],
    syn:["gesture","signal","motion"],
    ex:[{ s:"He began to {{}} wildly to make his point clear.", f:"gesticulate", ko:"그는 요점을 분명히 하려고 격렬하게 몸짓을 했다." }] },

  /* 원본은 '몸짓을 하다; (몸짓으로) 가리키다; 몸짓, 제스처' 다. 동사 쪽으로
     모았다 — gesticulate 의 유의어로 쓰이므로 품사가 맞아야 설명이 자연스럽다. */
  { word:"gesture", pron:"제스처", pos:"v", level:"B1", meanings:["몸짓을 하다","몸짓으로 가리키다"],
    syn:["gesticulate","signal","beckon"],
    ex:[{ s:"She began to {{}} toward the empty seat beside her.", f:"gesture", ko:"그녀는 옆의 빈자리를 몸짓으로 가리켰다." }] },

  { word:"get across", pron:"겟 어크로스", pos:"phr", level:"B2", meanings:["전달되다","이해되다"],
    syn:["communicate","convey","put across"] },

  { word:"get along with", pron:"겟 얼롱 위드", pos:"phr", level:"B1", meanings:["~와 잘 지내다"],
    syn:["get on with","hit it off with","be friendly with"] },

  { word:"get away with", pron:"겟 어웨이 위드", pos:"phr", level:"B2", meanings:["~을 모면하다"],
    syn:["escape blame","evade","dodge"] },

  /* 첫 뜻을 '착수하다' 로 뒀다 — 원본의 '대처하다' 는 기존 표제어 cope with 와
     같아 복수 정답이 된다. */
  { word:"get down to", pron:"겟 다운 투", pos:"phr", level:"B2", meanings:["착수하다","본격적으로 시작하다"],
    syn:["begin","tackle","embark on"] }
];

/* 유의어 뜻 사전 병합 — 재대입(=)이 아니라 Object.assign 이다.
   키는 반드시 소문자, 앞뒤 공백 없이 (조회가 s.toLowerCase() 다). */
Object.assign(window.GLOSS, {
  "age gap":"연령 차이",
  "ancestry":"조상, 가계",
  "apparel":"의복, 의류",
  "bacterium":"박테리아",
  "be friendly with":"~와 친하게 지내다",
  "beckon":"손짓으로 부르다",
  "benevolence":"자애, 선행",
  "bioengineered":"생명공학으로 만든",
  "blanket":"일괄적인, 포괄적인",
  "bolt":"튀어 달아나다",
  "car park":"주차장",
  "carport":"간이 차고",
  "congregation":"신도들, 모인 사람들",
  "crease":"주름이 지다",
  "culture clash":"문화 충돌",
  "dynamo":"발전기",
  "embark on":"~에 착수하다",
  "engineered":"인위적으로 조작된",
  "escape blame":"책임을 면하다",
  "gape":"입을 벌리고 보다",
  "gawk":"멍하니 바라보다",
  "generational divide":"세대 간 격차",
  "get on with":"~와 사이가 좋다",
  "hit it off with":"~와 금방 친해지다",
  "inherited":"물려받은",
  "landscape":"풍경, 지형",
  "liberal":"후한, 너그러운",
  "magnanimity":"도량이 큼",
  "microbe":"미생물",
  "motion":"몸짓으로 신호하다",
  "nebula":"성운",
  "nonspecific":"특정하지 않은",
  "outfit":"장비 한 벌",
  "pant":"숨을 헐떡이다",
  "parking space":"주차 공간",
  "pathogen":"병원균",
  "pedigree":"가계, 혈통",
  "power unit":"동력 장치",
  "puff":"숨을 가쁘게 쉬다",
  "put across":"뜻을 전하다",
  "regional":"지역의",
  "spatial":"공간의",
  "star system":"항성계",
  "stingy":"인색한",
  "style":"양식, 형식",
  "terrain":"지형, 지대",
  "topographic":"지형의",
  "topography":"지형, 지세",
  "transgenic":"유전자 이식된",
  "trudge":"터벅터벅 걷다",
  "turbine":"터빈",
  "universal":"보편적인",
  "wheeze":"쌕쌕거리다",
  "widespread":"널리 퍼진"
});
