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
  { word:"geopolitics", exams:["공무원"], pron:"지오폴리틱스", pos:"n", level:"C2", meanings:["지정학"], ex:[{ s:"Some things are undeniable: climate change and {{}}.", f:"geopolitics", ko:"부인할 수 없는 것들이 있다: 기후 변화와 지정학이다." }] },
  { word:"gill", exams:["공무원"], pron:"길", pos:"n", level:"C1", meanings:["아가미"], ex:[{ s:"The bodies of fish grow faster than their {{}}.", f:"gills", ko:"물고기의 몸은 아가미보다 빨리 자란다." }] },
  { word:"governor", exams:["공무원"], pron:"거버너", pos:"n", level:"B2", meanings:["주지사","총재"], syn:["administrator","leader","chief"], ex:[{ s:"The Regional {{}} would abide by the court's ruling.", f:"governor", ko:"지역 주지사는 법원의 판결을 따르겠다고 했다." }] },
  { word:"gravel", exams:["공무원"], pron:"그래블", pos:"n", level:"B2", meanings:["자갈"], syn:["pebbles","stones","grit"], ex:[{ s:"The rock stood out from a pile of {{}}.", f:"gravel", ko:"그 돌은 자갈 더미에서 눈에 띄었다." }] },
  { word:"gravitational", exams:["공무원"], pron:"그래비테이셔널", pos:"adj", level:"C1", meanings:["중력의"], ex:[{ s:"People can be exposed to {{}} force in different ways.", f:"gravitational", ko:"사람들은 여러 방식으로 중력에 노출될 수 있다." }] },
  { word:"guts", exams:["공무원"], pron:"것츠", pos:"n", level:"C1", meanings:["배짱","용기"], syn:["courage","nerve","boldness"], ant:["cowardice"], ex:[{ s:"She had the {{}} to go for what she wanted.", f:"guts", ko:"그녀는 원하는 것을 향해 나아갈 배짱이 있었다." }] },
  { word:"gullible", exams:["공무원"], pron:"걸러블", pos:"adj", level:"C1", meanings:["잘 속는","순진한"], syn:["naive","credulous","trusting"], ant:["skeptical"], ex:[{ s:"I think you are being {{}}.", f:"gullible", ko:"내 생각에 너는 잘 속고 있는 것 같다." }] },
  { word:"generation", exams:["공무원"], pron:"제너레이션", pos:"n", level:"B1", meanings:["세대"], syn:["age group","era","cohort"], ex:[{ s:"They ensure food for future {{}}.", f:"generations", ko:"그들은 미래 세대를 위한 식량을 보장한다." }] },
  { word:"generative", exams:["공무원"], pron:"제너러티브", pos:"adj", level:"C1", meanings:["생성적인","생성형의"], syn:["productive","creative","fertile"], ex:[{ s:"{{}} AI is advancing rapidly.", f:"Generative", ko:"생성형 AI가 빠르게 발전하고 있다." }] },
  { word:"globally", exams:["공무원"], pron:"글로벌리", pos:"adv", level:"B2", meanings:["세계적으로","전 세계에서"], syn:["worldwide","internationally","universally"], ex:[{ s:"The agency must engage {{}} to fulfill its mission.", f:"globally", ko:"그 기관은 사명을 완수하려 전 세계적으로 관여해야 한다." }] },
  { word:"gratification", exams:["공무원"], pron:"그래티피케이션", pos:"n", level:"C1", meanings:["만족","충족"], syn:["satisfaction","pleasure","fulfillment"], ex:[{ s:"Short-term {{}} can eclipse long-term focus.", f:"gratification", ko:"단기적 만족이 장기적 집중을 가릴 수 있다." }] },
  { word:"gap", exams:["공무원"], pron:"갭", pos:"n", level:"B1", meanings:["격차","틈"], syn:["difference","gulf","disparity"], ex:[{ s:"The {{}} had more to do with each school's resources.", f:"gap", ko:"그 격차는 각 학교의 자원과 더 관련이 있었다." }] },
  { word:"giraffe", exams:["공무원"], pron:"지래프", pos:"n", level:"B1", meanings:["기린"], ex:[{ s:"A baby {{}} has its own unique markings.", f:"giraffe", ko:"새끼 기린은 저마다 고유한 무늬를 지닌다." }] },
  { word:"greet", exams:["공무원"], pron:"그릿", pos:"v", level:"B1", meanings:["인사하다","맞이하다"], syn:["welcome","salute","receive"], ant:["ignore"], ex:[{ s:"Volunteers warmly {{}} and assist visitors.", f:"greet", ko:"자원봉사자들은 방문객을 따뜻하게 맞이하고 돕는다." }] },
  { word:"gain", exams:["공무원"], pron:"게인", pos:"v", level:"B1", meanings:["얻다","이득"], syn:["acquire","obtain","earn"], ant:["lose"], ex:[{ s:"You can {{}} valuable experience through volunteering.", f:"gain", ko:"자원봉사를 통해 귀중한 경험을 얻을 수 있다." }] },
  { word:"growth", exams:["공무원"], pron:"그로스", pos:"n", level:"B1", meanings:["성장","증가"], syn:["expansion","development","advancement"], ant:["decline"], ex:[{ s:"The new rules aim to stimulate economic {{}}.", f:"growth", ko:"새 규칙은 경제 성장을 촉진하는 것을 목표로 한다." }] },
  /* ── 챕터 1 ─────────────────────────────── */

  /* 승격 ① — GLOSS '은하' 와 같은 갈래다. constellation 의 유의어로 쓰인다. */
  { word:"galaxy", exams:["공무원"], pron:"갤럭시", pos:"n", level:"B2", meanings:["은하","은하계"],
    syn:["star system","nebula","cosmos"],
    ex:[{ s:"Our solar system sits on the edge of a spiral {{}}.", f:"galaxy", ko:"우리 태양계는 나선 은하의 가장자리에 있다." }] },

  { word:"gallop", pron:"갤럽", pos:"v", level:"B2", meanings:["질주하다","전속력으로 달리다"],
    /* ★ syn 의 "sprint" 를 "run flat out" 으로 바꿨다 — crawl(C) 과 같은 이유다.
       뜻('전력으로 달리다') 은 그대로다. */
    syn:["run flat out","dash","bolt"], ant:["trudge"],
    ex:[{ s:"The horses {{}} across the open field every morning.", f:"gallop", ko:"말들은 아침마다 열린 들판을 질주한다." }] },

  /* 승격 ① — GLOSS '도박하다; 모험' 과 같은 갈래다. bet 의 유의어로 쓰인다.
     stake 를 유의어로 쓰지 않았다 — 사전에 '지분; 말뚝' 으로 이미 등록돼 있어
     선택지에 그 뜻이 찍힌다. speculate('추측하다; 투기하다')로 바꿨다. */
  { word:"gamble", pron:"갬블", pos:"v", level:"B1", meanings:["도박하다","내기하다"],
    gov:{ prep:["on","with"], pat:"gamble {{}} the outcome", usage:"gamble on ~ : ~에 돈을 걸다" },
    syn:["bet","wager","speculate"],
    ex:[{ s:"He lost his savings after he began to {{}} online.", f:"gamble", ko:"그는 온라인으로 도박을 시작한 뒤 저축을 잃었다." }] },

  /* 첫 뜻 '차고' 는 기존 표제어 depot 과 같다. 다만 quizgen 의 distractorPool 이
     뜻이 겹치는 단어를 오답에서 빼므로 둘이 한 문제에서 만나지 않는다. */
  { word:"garage", exams:["공무원"], pron:"거라지", pos:"n", level:"B1", meanings:["차고","정비소"],
    syn:["carport","car park","parking space"],
    ex:[{ s:"She parked the car in the {{}} beside the house.", f:"garage", ko:"그녀는 집 옆 차고에 차를 세웠다." }] },

  { word:"garment", pron:"가먼트", pos:"n", level:"B2", meanings:["의류","옷"],
    syn:["clothing","attire","apparel"],
    ex:[{ s:"Every {{}} is inspected before it leaves the factory.", f:"garment", ko:"모든 의류는 공장을 떠나기 전에 검사를 받는다." }] },

  { word:"gasp", pron:"개스프", pos:"v", level:"B2", meanings:["헐떡거리다","숨이 차다"],
    gov:{ prep:["at","for","in","with"], pat:"gasp {{}} the sudden sight", usage:"gasp at ~ : ~에 숨이 막히다" },
    syn:["pant","wheeze","puff"],
    ex:[{ s:"He began to {{}} after running up six flights of stairs.", f:"gasp", ko:"그는 계단 여섯 층을 뛰어 올라간 뒤 헐떡거리기 시작했다." }] },

  /* 승격 ① — GLOSS '모으다, 수집하다' 와 같은 갈래다. 참조가 5곳으로 가장 많다
     (accumulate·assemble·compile·concentrate·convene). 뜻갈래가 같으므로
     원본 뜻을 그대로 쓴다. */
  { word:"gather", exams:["공무원"], pron:"개더", pos:"v", level:"B1", meanings:["모으다","모이다"],
    gov:{ prep:["around","at","in","from"], pat:"gather {{}} the campfire", usage:"gather around ~ : ~ 주위에 모이다" },
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
    gov:{ prep:["at","into","upon","on"], pat:"gaze {{}} the distant horizon", usage:"gaze at ~ : ~을 응시하다" },
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
  { word:"gene", exams:["공무원"], pron:"진", pos:"n", level:"B2", meanings:["유전자"],
    ex:[{ s:"Scientists located the {{}} responsible for the disorder.", f:"gene", ko:"과학자들은 그 질환을 일으키는 유전자를 찾아냈다." }] },

  { word:"genealogy", pron:"지니앨러지", pos:"n", level:"C1", meanings:["계보","족보"],
    syn:["ancestry","lineage","pedigree"],
    ex:[{ s:"He spent years tracing the family's {{}} through old records.", f:"genealogy", ko:"그는 오래된 기록으로 그 가문의 계보를 추적하는 데 여러 해를 보냈다." }] },

  /* 원본은 '일반의, 전반에 걸치는; 육군 장군' 이다. 두 갈래는 품사가 달라
     한 카드에 담으면 뜻이 흐려진다. 형용사 쪽으로 모았다. */
  { word:"general", exams:["공무원"], pron:"제너럴", pos:"adj", level:"B1", meanings:["일반의","전반적인"],
    syn:["overall","widespread","broad"], ant:["specific"],
    ex:[{ s:"There is {{}} agreement that the plan should go ahead.", f:"general", ko:"그 계획을 진행해야 한다는 데 전반적인 동의가 있다." }] },

  /* 승격 ① — GLOSS 가 '만들어 내다, 발생시키다' 다. 원본은 순서만 반대이므로
     사전 순서를 그대로 지켜 bring in 문제의 화면이 한 글자도 안 바뀌게 했다. */
  { word:"generate", exams:["공무원"], pron:"제너레이트", pos:"v", level:"B2", meanings:["만들어 내다","발생시키다"],
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
    gov:{ prep:["with","to","in","toward","of","about"], pat:"generous {{}} her own time", usage:"be generous with ~ : ~을 아끼지 않다" },
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
    syn:["begin","tackle","embark on"] },

  /* ── 챕터 3 ─────────────────────────────── */

  /* 기존 표제어 be fed up with(B 세트)와 뜻이 같다. 승인받은 대로 넣고 서로를
     유의어로 등록했다 — 유의어끼리는 오답 후보에서 빠지므로 한 문제에서
     복수 정답으로 만나지 않는다. */
  /* be sick of 를 쓰지 않았다 — 사전 뜻이 '~에 진저리가 나다' 로 be fed up with
     와 글자까지 같아 선택지 두 줄이 똑같아진다. be tired of('~에 싫증나다')로
     바꿨다. F 세트의 ban·candid 결함과 같은 종류를 audit 이 먼저 잡았다. */
  { word:"get fed up with", pron:"겟 페드 업 위드", pos:"phr", level:"B2", meanings:["~에 진저리가 나다"],
    syn:["be fed up with","be tired of","grow weary of"] },

  /* 원본 첫 뜻 '방해하다' 는 기존 표제어 disrupt·disturb 와 같다. 구답게
     '~을 가로막다' 를 앞에 두어 갈랐다. */
  { word:"get in the way of", pron:"겟 인 더 웨이 오브", pos:"phr", level:"B2", meanings:["~을 가로막다","방해가 되다"],
    syn:["hinder","obstruct","impede"] },

  { word:"get out of hand", pron:"겟 아웃 오브 핸드", pos:"phr", level:"B2", meanings:["걷잡을 수 없게 되다"],
    syn:["spiral","run wild","lose control"] },

  /* 승격 ① — GLOSS '~을 제거하다' 를 첫 자리에 지켰다.
     do away with·eliminate 두 문제가 이 단어를 유의어로 쓴다. */
  { word:"get rid of", pron:"겟 리드 오브", pos:"phr", level:"B1", meanings:["~을 제거하다","없애다"],
    syn:["do away with","eliminate","discard"] },

  { word:"get through", pron:"겟 스루", pos:"phr", level:"B2", meanings:["극복하다","겪어 내다"],
    syn:["endure","survive","pull through"] },

  { word:"gist", pron:"지스트", pos:"n", level:"C1", meanings:["요지","핵심"],
    syn:["essence","substance","crux"],
    ex:[{ s:"Just give me the {{}} of the report, not every detail.", f:"gist", ko:"모든 세부가 아니라 보고서의 요지만 말해 주세요." }] },

  { word:"give birth to", pron:"기브 버스 투", pos:"phr", level:"B1", meanings:["낳다","생겨나게 하다"],
    syn:["bear","spawn","bring forth"] },

  /* 승격 ① — GLOSS 가 '내뿜다, 발산하다' 다. 원본은 순서만 반대이므로 사전
     순서를 그대로 지켜 emit 문제의 화면이 안 바뀌게 했다. */
  /* 유의어 release 를 let out 으로 바꿨다. release 가 R 세트 챕터 6 표제어
     (석방하다 · v)로 올라가면 이 자리에 '석방하다' 가 떠 버린다 — '방출하다'
     뜻을 노린 자리였다. */
  { word:"give off", pron:"기브 오프", pos:"phr", level:"B2", meanings:["내뿜다","발산하다"],
    syn:["emit","let out","exude"] },

  { word:"give way to", pron:"기브 웨이 투", pos:"phr", level:"B2", meanings:["~에 굽히다","~로 바뀌다"],
    syn:["yield to","succumb to","make way for"] },

  /* 원본 '~을 고려하면' 은 기존 표제어 considering 과 같다. 첫 뜻을
     '~임을 감안하면' 으로 바꿔 갈랐다. */
  { word:"given that", pron:"기븐 댓", pos:"phr", level:"B2", meanings:["~임을 감안하면","~을 고려하면"],
    syn:["considering","in view of","seeing that"] },

  { word:"giving behavior", pron:"기빙 비헤이비어", pos:"phr", level:"C1", meanings:["기부 행위"],
    syn:["charitable giving","philanthropy","almsgiving"] },

  { word:"glacier", exams:["공무원"], pron:"글레이셔", pos:"n", level:"B2", meanings:["빙하"],
    syn:["ice sheet","ice field","icecap"],
    ex:[{ s:"The {{}} has retreated nearly a kilometre in ten years.", f:"glacier", ko:"그 빙하는 10년 만에 거의 1킬로미터 물러났다." }] },

  /* 승격 ① — GLOSS '흘끗 보다' 를 첫 자리에 지켰다.
     glimpse 와 함께 catch a glimpse of 의 유의어로 쓰이므로, 둘의 설명이
     같아지지 않게 glance 는 동사(보다), glimpse 는 명사(봄) 로 갈랐다. */
  { word:"glance", pron:"글랜스", pos:"v", level:"B1", meanings:["흘끗 보다","대충 보다"],
    gov:{ prep:["at","over","through"], pat:"glance {{}} the morning headlines", usage:"glance at ~ : ~을 흘끗 보다" },
    /* ★ "skim" 을 "run one's eye over" 로 바꿨다 — browse(B) 와 같은 이유다.
       scan·skim 이 S 세트에서 둘 다 '훑어보다' 가 된다. */
    syn:["peek","run one's eye over","scan"],
    ex:[{ s:"She stopped to {{}} at the headlines on her way out.", f:"glance", ko:"그녀는 나가는 길에 멈춰 서서 표제를 흘끗 보았다." }] },

  { word:"gland", exams:["공무원"], pron:"글랜드", pos:"n", level:"C1", meanings:["분비기관"],
    ex:[{ s:"The {{}} releases hormones directly into the bloodstream.", f:"gland", ko:"그 분비기관은 호르몬을 혈류로 직접 방출한다." }] },

  /* 승격 ① — GLOSS '힐끗 봄' 을 첫 자리에 지켰다. glance 와 달리 명사로 뒀다. */
  { word:"glimpse", pron:"글림프스", pos:"n", level:"B2", meanings:["힐끗 봄","잠깐 봄"],
    syn:["quick look","hasty glance","sighting"],
    ex:[{ s:"We caught a brief {{}} of the castle through the fog.", f:"glimpse", ko:"우리는 안개 속에서 그 성을 잠깐 보았다." }] },

  { word:"glitter", pron:"글리터", pos:"v", level:"B2", meanings:["반짝반짝 빛나다"],
    syn:["sparkle","shimmer","twinkle"],
    ex:[{ s:"Frost made the whole field {{}} in the morning sun.", f:"glitter", ko:"서리가 아침 햇살에 들판 전체를 반짝이게 했다." }] },

  { word:"globalization", pron:"글로벌라이제이션", pos:"n", level:"B2", meanings:["세계화"],
    ex:[{ s:"{{}} has reshaped how small firms find customers.", f:"Globalization", ko:"세계화는 작은 기업이 고객을 찾는 방식을 바꿔 놓았다." }] },

  /* 승격 ① — GLOSS '우울한, 침울한' 을 글자까지 지켰다. depressed·dismal·
     dreary 세 문제가 이 단어를 유의어로 쓴다. 원본은 '암울한, 울적한' 인데
     한국어로 거의 같은 말이고, 6차의 grim(암울한, 음침한)과 갈라두는 이점도 있다. */
  { word:"gloomy", pron:"글루미", pos:"adj", level:"B2", meanings:["우울한","침울한"],
    syn:["dreary","bleak","somber"], ant:["cheerful"],
    ex:[{ s:"The waiting room felt cold and {{}}.", f:"gloomy", ko:"대기실은 차갑고 우울한 느낌이었다." }] },

  { word:"glorify", pron:"글로리파이", pos:"v", level:"C1", meanings:["찬미하다","칭송하다"],
    syn:["exalt","extol","venerate"], ant:["belittle"],
    ex:[{ s:"The film was accused of trying to {{}} war.", f:"glorify", ko:"그 영화는 전쟁을 찬미하려 했다는 비난을 받았다." }] },

  /* 원본은 '은은한 빛; 홍조; 은은하게 빛나다; 상기되다, 빨개지다' 로 네 갈래다.
     동사 쪽 두 개로 모았다. GLOSS 에 '빛나다; 발광' 으로 있었으나 이 단어를
     유의어로 쓰는 기존 문제는 없어 갈래를 자유롭게 고를 수 있었다. */
  { word:"glow", pron:"글로우", pos:"v", level:"B2", meanings:["은은하게 빛나다","상기되다"],
    gov:{ prep:["with","in"], pat:"glow {{}} quiet pride", usage:"glow with ~ : ~으로 상기되다" },
    syn:["shine","radiate","gleam"],
    ex:[{ s:"Embers continued to {{}} long after the fire died down.", f:"glow", ko:"불이 잦아든 뒤에도 잉걸불이 계속 은은하게 빛났다." }] },

  /* ── 챕터 4 ─────────────────────────────── */

  /* 원본은 '(접착제로) 붙이다; 접착제, 풀' 이다. 동사 쪽으로 모았다 —
     첫 뜻에 괄호를 두지 않는다는 규약 때문이기도 하다. */
  { word:"glue", pron:"글루", pos:"v", level:"B1", meanings:["붙이다","접착하다"],
    gov:{ prep:["to","onto","on"], pat:"glue the label {{}} the box", usage:"glue A to B : A를 B에 붙이다" },
    syn:["paste","stick","bond"],
    ex:[{ s:"He tried to {{}} the broken handle back onto the cup.", f:"glue", ko:"그는 깨진 손잡이를 컵에 다시 붙이려 했다." }] },

  /* 승격 ① — GLOSS '뒤쫓다, 추구하다' 와 같은 갈래다. 참조하는 기존 문제는 없다. */
  { word:"go after", pron:"고 애프터", pos:"phr", level:"B1", meanings:["뒤쫓다","추구하다"],
    syn:["pursue","chase","seek"] },

  /* 원본 첫 뜻 '동의하다' 는 기존 표제어 accede 와 같다. '함께 가다' 를 앞에 두어 갈랐다. */
  { word:"go along", pron:"고 얼롱", pos:"phr", level:"B1", meanings:["함께 가다","동의하다"],
    syn:["accompany","concur","cooperate"] },

  /* 원본은 go broke 와 go out of business 가 둘 다 '파산하다' 였다. 실제 영어에서도
     쓰임이 다르다 — go broke 는 개인이 돈이 바닥나는 것, go out of business 는
     사업체가 문을 닫는 것이다. 그 차이로 갈랐고 서로를 유의어로 등록했다. */
  { word:"go broke", pron:"고 브로크", pos:"phr", level:"B2", meanings:["빈털터리가 되다","돈이 바닥나다"],
    syn:["go bankrupt","go under","go out of business"] },

  { word:"go for", pron:"고 포", pos:"phr", level:"B1", meanings:["~을 좋아하다","찬성하다"],
    syn:["favor","prefer","opt for"] },

  { word:"go out of business", pron:"고 아웃 오브 비즈니스", pos:"phr", level:"B2", meanings:["폐업하다","문을 닫다"],
    syn:["go bankrupt","shut down","go broke"] },

  /* go over 와 go through 가 원본에서 둘 다 '조사하다' 를 갖는다.
     go over 는 검토 쪽, go through 는 통과 쪽으로 첫 뜻을 갈랐다. */
  { word:"go over", pron:"고 오버", pos:"phr", level:"B1", meanings:["검토하다","훑어보다"],
    syn:["review","examine","inspect"] },

  { word:"go through", pron:"고 스루", pos:"phr", level:"B1", meanings:["통과하다","살펴보다"],
    syn:["pass","undergo","sift through"] },

  { word:"golden rule", pron:"골든 룰", pos:"phr", level:"B2", meanings:["황금률","철칙"],
    syn:["guiding principle","maxim","precept"] },

  { word:"gorgeous", pron:"고저스", pos:"adj", level:"B2", meanings:["화려한","호화스러운"],
    syn:["splendid","dazzling","resplendent"], ant:["drab"],
    ex:[{ s:"The hall looked absolutely {{}} once the lights came on.", f:"gorgeous", ko:"불이 켜지자 그 홀은 정말 화려해 보였다." }] },

  /* 원본은 '(음식이) 고급인, 값비싼, 미식가' 로 품사가 갈린다. 첫 뜻에 괄호를
     두지 않는 규약도 있어 명사(미식가) 쪽으로 모았다. */
  { word:"gourmet", pron:"고메이", pos:"n", level:"C1", meanings:["미식가"],
    syn:["epicure","connoisseur","food lover"],
    ex:[{ s:"Only a true {{}} could name every spice in the dish.", f:"gourmet", ko:"진정한 미식가만이 그 요리의 모든 향신료를 짚어낼 수 있었다." }] },

  { word:"govern", pron:"거번", pos:"v", level:"B2", meanings:["다스리다","지배하다"],
    syn:["rule","administer","preside over"],
    ex:[{ s:"A council of elders used to {{}} the village.", f:"govern", ko:"원로 회의가 그 마을을 다스리곤 했다." }] },

  /* grab·grip·grasp 세 단어가 원본에서 '움켜잡다' 계열로 뭉친다.
     grab 은 낚아채는 순간성, grip 은 꽉 쥐고 놓지 않는 힘, grasp 는 이해로
     갈랐다. grab 은 순간성 쪽이다. */
  { word:"grab", pron:"그랩", pos:"v", level:"B1", meanings:["잡아채다","움켜쥐다"],
    gov:{ prep:["at","for","onto"], pat:"grab {{}} the passing rope", usage:"grab at ~ : ~을 잡으려 하다" },
    syn:["snatch","seize","clutch"],
    ex:[{ s:"She had to {{}} the railing to keep from falling.", f:"grab", ko:"그녀는 넘어지지 않으려고 난간을 붙잡아야 했다." }] },

  /* 승격 ② — GLOSS 는 '우아한; 친절한' 이고 원본은 '상냥한, 우아한' 이다.
     원본의 '상냥한' 은 기존 표제어 amiable 과 같아 복수 정답이 되므로,
     사전 쪽 뜻을 그대로 써서 courteous 문제도 지키고 충돌도 피했다. */
  { word:"gracious", pron:"그레이셔스", pos:"adj", level:"B2", meanings:["우아한","친절한"],
    gov:{ prep:["to","about","in","toward","of"], pat:"gracious {{}} every guest", usage:"be gracious to ~ : ~에게 친절하다" },
    syn:["courteous","cordial","genial"], ant:["rude"],
    ex:[{ s:"Their host was unfailingly {{}} to every guest.", f:"gracious", ko:"그 주인은 모든 손님에게 한결같이 친절했다." }] },

  /* 승격 ② — GLOSS '등급, 단계' 를 글자까지 지켰다. degree 의 유의어로 쓰이는
     쪽이 명사라, 원본의 동사 뜻('등급을 나누다')을 쓰면 그 문제가 어긋난다. */
  { word:"grade", pron:"그레이드", pos:"n", level:"B1", meanings:["등급","단계"],
    syn:["rank","tier","degree"],
    ex:[{ s:"Eggs are sorted by size and {{}} before packing.", f:"grade", ko:"달걀은 포장 전에 크기와 등급으로 분류된다." }] },

  /* 승격 ① — GLOSS '점진적인' 을 첫 자리에 지켰다. abrupt 의 반의어로 쓰인다. */
  { word:"gradual", pron:"그래주얼", pos:"adj", level:"B2", meanings:["점진적인","단계적인"],
    syn:["incremental","steady","progressive"], ant:["abrupt"],
    ex:[{ s:"Recovery was slow but {{}} over several months.", f:"gradual", ko:"회복은 느렸지만 여러 달에 걸쳐 점진적이었다." }] },

  /* gradual 과 어근이 같지만 품사가 달라(adj/v) 같은 보드에 오지 않는다. */
  { word:"graduate", pron:"그래주에이트", pos:"v", level:"B1", meanings:["졸업하다"],
    syn:["finish school","complete studies","earn a degree"],
    ex:[{ s:"She hopes to {{}} with honours next spring.", f:"graduate", ko:"그녀는 내년 봄에 우등으로 졸업하기를 바란다." }] },

  { word:"grain", pron:"그레인", pos:"n", level:"B1", meanings:["곡물","곡류"],
    syn:["cereal","corn","kernel"],
    ex:[{ s:"The region exports more {{}} than any other province.", f:"grain", ko:"그 지역은 어느 주보다 많은 곡물을 수출한다." }] },

  /* 승격 ① — GLOSS '웅장한, 원대한' 과 같은 갈래다. 참조하는 기존 문제는 없어
     원본의 '웅장한, 장엄한' 을 그대로 썼다. */
  { word:"grand", exams:["공무원"], pron:"그랜드", pos:"adj", level:"B1", meanings:["웅장한","장엄한"],
    syn:["majestic","imposing","stately"], ant:["modest"],
    ex:[{ s:"Guests entered through a {{}} marble hall.", f:"grand", ko:"손님들은 웅장한 대리석 홀을 지나 들어왔다." }] },

  /* 승격 ② — GLOSS '수여하다; 보조금' 이다. bestow·concede 두 문제가 동사 쪽을
     쓰므로 '수여하다' 를 첫 자리에 남기고 원본의 명사 뜻을 둘째로 담았다. */
  { word:"grant", exams:["공무원"], pron:"그랜트", pos:"v", level:"B2", meanings:["수여하다","보조금"],
    gov:{ prep:["to"], pat:"grant the award {{}} her", usage:"grant A to B : A를 B에게 주다" },
    syn:["bestow","award","confer"], ant:["deny"],
    ex:[{ s:"The board agreed to {{}} her request for extra leave.", f:"grant", ko:"이사회는 추가 휴가 요청을 승인하기로 합의했다." }] },

  /* ── 챕터 5 ─────────────────────────────── */

  /* 원본은 '그래픽; 도표의; 생생한, 상세한' 으로 세 갈래다. 형용사 쪽으로 모았다. */
  { word:"graphic", pron:"그래픽", pos:"adj", level:"B2", meanings:["생생한","도표의"],
    syn:["vivid","explicit","lifelike"],
    ex:[{ s:"The witness gave a {{}} account of the accident.", f:"graphic", ko:"그 목격자는 사고를 생생하게 진술했다." }] },

  /* 승격 ① — GLOSS '잡다; 이해하다' 를 그대로 지켰다. comprehend 의 유의어로
     쓰이는 쪽이 '이해하다' 다. grab(잡아채다)·grip(꽉 붙잡다)과 함께
     원본에서 '움켜잡다' 계열로 뭉치던 셋 중 이해 쪽을 맡는다. */
  { word:"grasp", pron:"그래스프", pos:"v", level:"B2", meanings:["잡다","이해하다"],
    gov:{ prep:["at","for"], pat:"grasp {{}} any excuse", usage:"grasp at ~ : ~을 붙잡으려 하다" },
    syn:["comprehend","apprehend","fathom"],
    ex:[{ s:"It took her a while to {{}} what the diagram meant.", f:"grasp", ko:"그녀는 그 도표가 무슨 뜻인지 이해하는 데 시간이 좀 걸렸다." }] },

  { word:"gratify", pron:"그래티파이", pos:"v", level:"C1", meanings:["기쁘게 하다","만족시키다"],
    gov:{ prep:["with","by","at"], pat:"gratified {{}} the final result", usage:"be gratified with ~ : ~에 만족하다" },
    syn:["please","satisfy","delight"], ant:["frustrate"],
    ex:[{ s:"Nothing seemed to {{}} him more than a quiet evening.", f:"gratify", ko:"조용한 저녁만큼 그를 기쁘게 하는 것은 없어 보였다." }] },

  { word:"gratitude", exams:["공무원"], pron:"그래티튜드", pos:"n", level:"B2", meanings:["고마움","감사"],
    gov:{ prep:["to","for","toward","towards","of"], pat:"gratitude {{}} the night nurses", usage:"gratitude to ~ : ~에 대한 감사" },
    syn:["thankfulness","appreciation","indebtedness"], ant:["ingratitude"],
    ex:[{ s:"She wrote a short note to express her {{}}.", f:"gratitude", ko:"그녀는 고마움을 전하려고 짧은 쪽지를 썼다." }] },

  /* 승격 ① — GLOSS 는 '심각한; 묘지' 인데 참조하는 기존 문제가 없어 갈래를
     자유롭게 골랐다. 원본의 형용사 쪽(중대한, 근엄한)으로 모았다.
     원본의 '금엄한' 은 없는 말이라 '근엄한' 으로 고쳤다 (0차에 기록). */
  { word:"grave", pron:"그레이브", pos:"adj", level:"B2", meanings:["중대한","근엄한"],
    syn:["solemn","serious","weighty"], ant:["trivial"],
    ex:[{ s:"The committee treated the warning as a {{}} matter.", f:"grave", ko:"위원회는 그 경고를 중대한 사안으로 다루었다." }] },

  /* gravitation 과 gravity 는 어근이 같고 원본에서 뜻도 겹친다(둘 다 '중력').
     gravitation 은 끌어당기는 작용(인력), gravity 는 그 힘 자체로 갈랐고
     서로를 유의어로 등록해 한 문제·한 보드에서 만나지 않게 했다. */
  { word:"gravitation", pron:"그래비테이션", pos:"n", level:"C1", meanings:["인력","만유인력"],
    syn:["gravity","attraction","pull"],
    ex:[{ s:"Newton explained how {{}} keeps the planets in orbit.", f:"gravitation", ko:"뉴턴은 인력이 어떻게 행성을 궤도에 붙잡아 두는지 설명했다." }] },

  { word:"gravity", pron:"그래버티", pos:"n", level:"B2", meanings:["중력"],
    syn:["gravitation","weight force","downward pull"],
    ex:[{ s:"Objects fall at the same rate under {{}} in a vacuum.", f:"gravity", ko:"진공에서는 물체가 중력을 받아 같은 속도로 떨어진다." }] },

  { word:"graze", pron:"그레이즈", pos:"v", level:"B2", meanings:["풀을 뜯어먹다","방목하다"],
    gov:{ prep:["on","in","upon"], pat:"graze {{}} the fresh grass", usage:"graze on ~ : ~을 뜯어먹다" },
    syn:["put out to graze","browse","feed"],
    ex:[{ s:"Sheep {{}} on the hillside from spring to autumn.", f:"graze", ko:"양들은 봄부터 가을까지 언덕에서 풀을 뜯어먹는다." }] },

  /* 승격 ① — GLOSS '기름진' 을 첫 자리에 지켰다. 참조하는 기존 문제는 없다. */
  { word:"greasy", pron:"그리시", pos:"adj", level:"B2", meanings:["기름진","기름이 묻은"],
    syn:["oily","fatty","slick"],
    ex:[{ s:"He wiped his {{}} hands on an old towel.", f:"greasy", ko:"그는 기름 묻은 손을 낡은 수건에 닦았다." }] },

  /* 승격 ① — GLOSS '탐욕' 을 첫 자리에 지켰다. charity 문제의 반의어로 쓰인다. */
  { word:"greed", pron:"그리드", pos:"n", level:"B2", meanings:["탐욕","욕심"],
    syn:["avarice","covetousness","rapacity"], ant:["generosity"],
    ex:[{ s:"Unchecked {{}} was blamed for the collapse of the fund.", f:"greed", ko:"제어되지 않은 탐욕이 그 펀드의 붕괴 원인으로 지목됐다." }] },

  /* greed 와 어근이 같지만 품사가 달라(n/adj) 같은 보드에 오지 않는다. */
  { word:"greedy", pron:"그리디", pos:"adj", level:"B1", meanings:["탐욕스러운"],
    gov:{ prep:["for","of"], pat:"greedy {{}} political power", usage:"greedy for ~ : ~을 탐하는" },
    syn:["avaricious","grasping","insatiable"], ant:["selfless"],
    ex:[{ s:"The story warns children not to be {{}}.", f:"greedy", ko:"그 이야기는 아이들에게 탐욕스러워지지 말라고 경고한다." }] },

  { word:"greenhouse", exams:["공무원"], pron:"그린하우스", pos:"n", level:"B1", meanings:["온실"],
    syn:["hothouse","glasshouse","conservatory"],
    ex:[{ s:"Tomatoes ripen weeks earlier inside the {{}}.", f:"greenhouse", ko:"토마토는 온실 안에서 몇 주 더 일찍 익는다." }] },

  { word:"gregarious", pron:"그리게리어스", pos:"adj", level:"C2", meanings:["사교적인"],
    syn:["sociable","outgoing","convivial"], ant:["reclusive"],
    ex:[{ s:"His {{}} nature made him the centre of every party.", f:"gregarious", ko:"사교적인 성격 덕에 그는 모든 모임의 중심이 되었다." }] },

  /* 원본 첫 뜻이 '(지도의) 기준선망' 으로 괄호 설명이라 순서를 바꿨다. */
  { word:"grid", pron:"그리드", pos:"n", level:"B2", meanings:["격자무늬","기준선망"],
    syn:["lattice","mesh","network"],
    ex:[{ s:"City streets follow a strict {{}} in this district.", f:"grid", ko:"이 지구의 도로는 엄격한 격자무늬를 따른다." }] },

  /* 승격 ① — GLOSS 는 '비탄, 슬픔' 인데 참조하는 기존 문제가 없어 원본 순서를 썼다. */
  { word:"grief", exams:["공무원"], pron:"그리프", pos:"n", level:"B2", meanings:["슬픔","비탄"],
    syn:["sorrow","anguish","heartache"], ant:["joy"],
    ex:[{ s:"Time did little to ease her {{}}.", f:"grief", ko:"시간은 그녀의 슬픔을 거의 덜어 주지 못했다." }] },

  /* 원본의 '농장 관리인' 은 스코틀랜드 방언이라 삭제했다 (0차에 기록).
     grief 와 어근이 같지만 품사가 다르고(n/v) 표제어 길이도 달라 보드가 갈린다. */
  { word:"grieve", pron:"그리브", pos:"v", level:"B2", meanings:["비통해하다","애도하다"],
    gov:{ prep:["over","for","about","at"], pat:"grieve {{}} the sudden loss", usage:"grieve over ~ : ~을 슬퍼하다" },
    syn:["mourn","lament","sorrow over"],
    ex:[{ s:"The village gathered to {{}} for those lost at sea.", f:"grieve", ko:"마을 사람들은 바다에서 잃은 이들을 애도하려 모였다." }] },

  { word:"grievous", pron:"그리버스", pos:"adj", level:"C2", meanings:["통탄할","비통한"],
    syn:["egregious","dire","lamentable"],
    ex:[{ s:"The report described a {{}} failure of oversight.", f:"grievous", ko:"그 보고서는 통탄할 감독 실패를 기술했다." }] },

  /* 원본은 '엄숙한, 단호한; 암울한, 음침한' 이다. 3차의 gloomy 를 사전 뜻
     '우울한, 침울한' 으로 지켰으므로 여기서 암울한 쪽을 맡아 둘이 갈린다. */
  { word:"grim", pron:"그림", pos:"adj", level:"B2", meanings:["암울한","음침한"],
    syn:["forbidding","stark","dismal"], ant:["hopeful"],
    ex:[{ s:"The forecast for the harvest looked {{}}.", f:"grim", ko:"수확 전망은 암울해 보였다." }] },

  /* 승격 ② — GLOSS 가 '얼굴을 찡그리다' 인데 그 문자열은 기존 표제어 frown 과
     같다. 복수 정답이 되므로 '얼굴을 찌푸리다' 로 갈랐다. 참조하는 기존
     문제가 없어 바꿔도 안전하다. */
  { word:"grimace", pron:"그리머스", pos:"v", level:"C1", meanings:["얼굴을 찌푸리다","찡그린 표정"],
    syn:["wince","scowl","contort"],
    ex:[{ s:"He began to {{}} as the bandage was pulled away.", f:"grimace", ko:"붕대가 떼어지자 그는 얼굴을 찌푸리기 시작했다." }] },

  /* 원본의 '빵다' 는 오타라 '빻다' 로 고쳤다 (0차에 기록). */
  { word:"grind", pron:"그라인드", pos:"v", level:"B2", meanings:["갈다","빻다"],
    gov:{ prep:["into","to","with"], pat:"grind the beans {{}} fine powder", usage:"grind A into B : A를 갈아 B로 만들다" },
    syn:["crush","pulverize","mill"],
    ex:[{ s:"Machines {{}} the beans into a fine powder.", f:"grind", ko:"기계가 그 원두를 고운 가루로 갈아 낸다." }] },

  /* ── 챕터 6 (마지막 15단어) ─────────────────── */

  /* grab·grasp 와 갈라 '놓지 않는 힘' 쪽을 맡는다. 원본의 '통제' 는 장악으로 썼다. */
  { word:"grip", pron:"그립", pos:"v", level:"B2", meanings:["꽉 붙잡다","장악"],
    syn:["clasp","clutch","hold fast"],
    ex:[{ s:"He had to {{}} the rope with both hands.", f:"grip", ko:"그는 두 손으로 그 줄을 꽉 붙잡아야 했다." }] },

  /* 승격 ② — GLOSS '신음하다; 삐걱거리다' 를 글자까지 지켰다. creak 의 유의어로
     쓰이는 쪽이 '삐걱거리다' 라, 원본의 '끙 하는 소리를 내다' 로 바꾸면
     그 문제가 어긋난다. */
  { word:"groan", pron:"그론", pos:"v", level:"B2", meanings:["신음하다","삐걱거리다"],
    gov:{ prep:["about","at","with","under"], pat:"groan {{}} the extra workload", usage:"groan about ~ : ~에 대해 불평하다" },
    syn:["moan","creak","whine"],
    ex:[{ s:"The old floorboards {{}} under every step.", f:"groan", ko:"낡은 바닥판이 발걸음마다 삐걱거린다." }] },

  { word:"gross", pron:"그로스", pos:"adj", level:"B2", meanings:["모두 합친","전체의"],
    syn:["total","aggregate","overall"], ant:["net"],
    ex:[{ s:"The company reported a {{}} profit of two million.", f:"gross", ko:"그 회사는 200만의 총이익을 보고했다." }] },

  /* 승격 ② + 기존 결함 수정.
     사전에 ground 가 두 번 등록돼 있었다 — words.js 에 '지상의'(aerial 의
     반의어용), gloss.js 에 '근거, 근거지'. index.html 이 gloss.js 를 나중에
     읽으므로 '근거, 근거지' 가 이겨서, aerial(공중의)의 반의어가 화면에
     '근거, 근거지' 로 찍히고 있었다. 공중의 반의어로 말이 안 되는 문자열이다.
     기준선(main)에서 실제로 그렇게 나오는 것을 확인했다.

     ground 를 쓰는 기존 문제는 aerial 하나뿐이므로, 그 문제가 성립하도록
     '지면' 을 첫 자리에 두고 사전에 있던 '근거' 를 둘째로 남겼다.
     원본의 동사 뜻(토대가 되다, 외출 금지시키다)은 담지 않았다 — 기존 문제를
     지키는 명사 쪽이 우선이고, meanings 는 2개까지다. */
  { word:"ground", pron:"그라운드", pos:"n", level:"B1", meanings:["지면","근거"],
    syn:["basis","foundation","rationale"],
    ex:[{ s:"There is no {{}} for cancelling the contract.", f:"ground", ko:"그 계약을 취소할 근거가 없다." }] },

  { word:"groundbreaking", pron:"그라운드브레이킹", pos:"adj", level:"B2", meanings:["획기적인"],
    syn:["pioneering","innovative","trailblazing"],
    ex:[{ s:"Her {{}} study changed how doctors treat the illness.", f:"groundbreaking", ko:"그녀의 획기적인 연구는 의사들이 그 병을 치료하는 방식을 바꿨다." }] },

  { word:"groundless", pron:"그라운드리스", pos:"adj", level:"C1", meanings:["근거 없는"],
    syn:["unfounded","baseless","unwarranted"], ant:["justified"],
    ex:[{ s:"The court found the accusation entirely {{}}.", f:"groundless", ko:"법원은 그 고발이 전혀 근거 없다고 판단했다." }] },

  /* 승격 ② — GLOSS '자라다; 증가하다' 를 글자까지 지켰다. cultivate 의 유의어이고
     dwindle 문제의 반의어로도 쓰인다. */
  { word:"grow", pron:"그로우", pos:"v", level:"B1", meanings:["자라다","증가하다"],
    syn:["expand","develop","flourish"], ant:["shrink"],
    ex:[{ s:"Sales continued to {{}} through the winter months.", f:"grow", ko:"매출은 겨울 동안 계속 증가했다." }] },

  { word:"growl", pron:"그라울", pos:"v", level:"B2", meanings:["으르렁거리다"],
    syn:["snarl","rumble","grumble"],
    ex:[{ s:"The dog began to {{}} at the approaching stranger.", f:"growl", ko:"그 개는 다가오는 낯선 사람에게 으르렁거리기 시작했다." }] },

  { word:"grudge", pron:"그러지", pos:"n", level:"C1", meanings:["원한","앙심"],
    gov:{ prep:["against","toward","towards"], pat:"a grudge {{}} his former partner", usage:"a grudge against ~ : ~에 대한 원한" },
    syn:["resentment","rancor","bitterness"],
    ex:[{ s:"She held a {{}} against him for years.", f:"grudge", ko:"그녀는 여러 해 그에게 원한을 품었다." }] },

  /* 승격 ② — GLOSS '투덜거리다' 를 첫 자리에 지켰다. 원본 첫 뜻 '불평하다' 는
     기존 표제어 complain 과 글자까지 같아 복수 정답이 되므로 둘째로 내렸다. */
  { word:"grumble", pron:"그럼블", pos:"v", level:"B2", meanings:["투덜거리다","불평하다"],
    gov:{ prep:["about","at","over"], pat:"grumble {{}} the constant noise", usage:"grumble about ~ : ~에 대해 투덜거리다" },
    syn:["complain","gripe","carp"],
    ex:[{ s:"Staff began to {{}} about the new schedule.", f:"grumble", ko:"직원들은 새 일정에 대해 투덜거리기 시작했다." }] },

  /* 승격 ② — GLOSS '보장하다; 보증' 을 글자까지 지켰다. assure·ensure 두 문제가
     이 단어를 유의어로 쓴다. 첫 뜻이 기존 표제어 cover 와 같지만, quizgen 의
     distractorPool 이 뜻이 겹치는 단어를 오답에서 빼므로 한 문제에서 만나지 않는다. */
  { word:"guarantee", exams:["공무원"], pron:"개런티", pos:"v", level:"B2", meanings:["보장하다","보증"],
    gov:{ prep:["against","of","for"], pat:"guarantee {{}} manufacturing defects", usage:"guarantee against ~ : ~에 대해 보증하다" },
    syn:["assure","ensure","give one's word"],
    ex:[{ s:"We cannot {{}} delivery before the holiday.", f:"guarantee", ko:"우리는 연휴 전 배송을 보장할 수 없다." }] },

  /* 원본 첫 뜻 '조합' 은 기존 표제어 combination 과 같아 '길드' 를 앞에 두었다. */
  { word:"guild", pron:"길드", pos:"n", level:"C1", meanings:["길드","조합"],
    syn:["association","society","fellowship"],
    ex:[{ s:"Medieval weavers formed a powerful {{}}.", f:"guild", ko:"중세 직조공들은 강력한 길드를 결성했다." }] },

  /* 승격 ② — GLOSS '죄책감 드는, 유죄의' 를 글자까지 지켰다. ashamed 의 유의어다. */
  { word:"guilty", pron:"길티", pos:"adj", level:"B1", meanings:["죄책감 드는","유죄의"],
    gov:{ prep:["of","about","to"], pat:"guilty {{}} a serious offence", usage:"be guilty of ~ : ~의 죄를 짓다" },
    syn:["ashamed","remorseful","culpable"], ant:["innocent"],
    ex:[{ s:"He felt {{}} about forgetting her birthday.", f:"guilty", ko:"그는 그녀의 생일을 잊은 것에 죄책감을 느꼈다." }] },

  { word:"gust", pron:"거스트", pos:"n", level:"B2", meanings:["돌풍"],
    syn:["blast","squall","flurry"],
    ex:[{ s:"A sudden {{}} tore the umbrella from her hand.", f:"gust", ko:"갑작스러운 돌풍이 그녀의 손에서 우산을 빼앗았다." }] },

  { word:"gymnastics", pron:"짐내스틱스", pos:"n", level:"B1", meanings:["체조"],
    syn:["acrobatics","tumbling","calisthenics"],
    ex:[{ s:"She took up {{}} at the age of six.", f:"gymnastics", ko:"그녀는 여섯 살에 체조를 시작했다." }] }
];

/* 유의어 뜻 사전 병합 — 재대입(=)이 아니라 Object.assign 이다.
   키는 반드시 소문자, 앞뒤 공백 없이 (조회가 s.toLowerCase() 다). */
Object.assign(window.GLOSS, {
  "acrobatics":"곡예",
  "age gap":"연령 차이",
  "almsgiving":"자선을 베풂",
  "ancestry":"조상, 가계",
  "apparel":"의복, 의류",
  "appreciation":"감사, 고마움",
  "avarice":"금전욕",
  "avaricious":"돈을 탐하는",
  "bacterium":"박테리아",
  "baseless":"근거가 희박한",
  "be friendly with":"~와 친하게 지내다",
  "beckon":"손짓으로 부르다",
  "benevolence":"자애, 선행",
  "bioengineered":"생명공학으로 만든",
  "blanket":"일괄적인, 포괄적인",
  "bolt":"튀어 달아나다",
  "bring forth":"낳다, 생산하다",
  "calisthenics":"맨손 체조",
  "car park":"주차장",
  "carp":"트집을 잡다",
  "carport":"간이 차고",
  "cereal":"곡물, 시리얼",
  "charitable giving":"자선 기부",
  "clasp":"움켜 안다",
  "clutch":"꽉 붙잡다",
  "complete studies":"학업을 마치다",
  "congregation":"신도들, 모인 사람들",
  "connoisseur":"감식가",
  "conservatory":"유리 온실",
  "contort":"일그러뜨리다",
  "convivial":"유쾌하게 어울리는",
  "corn":"곡물, 낟알",
  "covetousness":"남의 것을 바람",
  "crease":"주름이 지다",
  "crux":"핵심, 관건",
  "culpable":"잘못이 있는",
  "culture clash":"문화 충돌",
  "dire":"극심한, 심각한",
  "downward pull":"아래로 끌는 힘",
  "dynamo":"발전기",
  "earn a degree":"학위를 받다",
  "egregious":"터무니없이 나쁜",
  "embark on":"~에 착수하다",
  "engineered":"인위적으로 조작된",
  "epicure":"식도락가",
  "escape blame":"책임을 면하다",
  "essence":"본질, 요체",
  "exalt":"칭송하다, 높이다",
  "extol":"극찬하다",
  "exude":"뿜어내다",
  "fatty":"지방이 많은",
  "finish school":"학교를 마치다",
  "flurry":"돌발적인 바람",
  "food lover":"음식을 즐기는 사람",
  "forbidding":"위압적인, 험악한",
  "gape":"입을 벌리고 보다",
  "gawk":"멍하니 바라보다",
  "generational divide":"세대 간 격차",
  "get on with":"~와 사이가 좋다",
  "glasshouse":"유리 재배실",
  "go bankrupt":"파산하다",
  "go under":"사업이 망하다",
  "grasping":"욕심 사나운",
  "gripe":"툴툴대다",
  "grow weary of":"~에 넌더리가 나다",
  "guiding principle":"지침이 되는 원칙",
  "heartache":"가슴앓이",
  "hit it off with":"~와 금방 친해지다",
  "hold fast":"단단히 붙들다",
  "hopeful":"희망적인",
  "hothouse":"난방 온실",
  "ice field":"빙원",
  "ice sheet":"대륙 빙상",
  "icecap":"만년설",
  "impede":"지체시키다",
  "imposing":"위풍당당한",
  "in view of":"~에 비추어",
  "incremental":"조금씩 늘어나는",
  "indebtedness":"은혜를 입음",
  "ingratitude":"배은망덕",
  "inherited":"물려받은",
  "justified":"정당한 근거가 있는",
  "kernel":"알맹이",
  "landscape":"풍경, 지형",
  "lattice":"격자 구조",
  "lifelike":"실물 같은",
  "lose control":"통제를 잃다",
  "magnanimity":"도량이 큼",
  "mesh":"그물망",
  "mill":"제분하다",
  "motion":"몸짓으로 신호하다",
  "nebula":"성운",
  "network":"망, 연결망",
  "nonspecific":"특정하지 않은",
  "opt for":"~을 택하다",
  "parking space":"주차 공간",
  "pass":"지나가다, 통과되다",
  "pathogen":"병원균",
  "pedigree":"가계, 혈통",
  "pioneering":"선구적인",
  "please":"흡족하게 하다",
  "power unit":"동력 장치",
  "precept":"계율, 가르침",
  "prefer":"더 좋아하다",
  "preside over":"~을 주재하다",
  "puff":"숨을 가쁘게 쉬다",
  "pull through":"이겨 내다",
  "pulverize":"가루로 만들다",
  "put across":"뜻을 전하다",
  "rapacity":"탐욕스러운 강탈",
  "rationale":"논리적 근거",
  "reclusive":"은둔하는",
  "regional":"지역의",
  "resplendent":"눈부시게 화려한",
  "rumble":"우르릉거리다",
  "run wild":"제멋대로 날뛰다",
  "seeing that":"~인 것을 보면",
  "shimmer":"희미하게 반짝이다",
  "shut down":"문을 닫다",
  "sift through":"자세히 살펴보다",
  "sighting":"목격",
  "slick":"매끄럽고 미끈한",
  "snarl":"이를 드러내고 으르렁대다",
  "solemn":"엄숙한",
  "somber":"침침한, 어두운",
  "sorrow over":"~을 애도하다",
  "sparkle":"불꽃처럼 반짝이다",
  "squall":"스콜, 돌풍",
  "star system":"항성계",
  "stark":"냉혹한, 황량한",
  "stick":"달라붙다",
  "style":"양식, 형식",
  "succumb to":"~에 무너지다",
  "thankfulness":"감사하는 마음",
  "tier":"층, 단",
  "topographic":"지형의",
  "topography":"지형, 지세",
  "trailblazing":"길을 개척하는",
  "transgenic":"유전자 이식된",
  "trudge":"터벅터벅 걷다",
  "tumbling":"공중 곡예",
  "turbine":"터빈",
  "twinkle":"깜박이며 빛나다",
  "unfounded":"사실 근거가 없는",
  "unwarranted":"부당한",
  "venerate":"숭상하다",
  "weight force":"무게로 작용하는 힘",
  "weighty":"중대한, 무거운",
  "wheeze":"쌕쌕거리다",
  "wince":"움찔하다",
  "yield to":"~에 양보하다"
});
