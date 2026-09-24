/**
 * 단어 데이터 — 수능 보카 H 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *
 * ⚠️ GLOSS 는 words.js 가 이미 만들어 둔 객체다. 여기서 window.GLOSS = {...} 로
 *    재대입하면 A~G 세트의 것이 통째로 사라진다. 반드시 이 파일 맨 아래처럼
 *    Object.assign 으로 병합할 것. 키는 소문자, 앞뒤 공백 없이.
 *
 * ── 이 세트의 승격 (GLOSS 에 있던 단어를 표제어로 올리는 일) ──
 *
 * 43개가 이미 유의어 사전에 있었고, 그 단어를 유의어·반의어로 쓰는 기존 문제가
 * 54곳이다. 승격할 때마다 사전에 있던 뜻갈래를 먼저 확인하고,
 *   ① 같은 갈래면 기존 뜻을 쓴다 (기존 문제 화면이 안 바뀐다)
 *   ② 다른 갈래면 기존 쪽 뜻을 첫 자리에 남긴다 (기존 문제를 지킨다)
 * 판단 근거는 해당 단어 주석에 적는다.
 */
window.VOCAB_H = [
  /* ── 챕터 1 ─────────────────────────────── */

  /* 승격 ① — GLOSS '서식지' 와 같은 갈래다. environment 의 유의어로 쓰인다. */
  { word:"habitat", pron:"해비탯", pos:"n", level:"B2", meanings:["서식지","거주지"],
    syn:["environment","dwelling","territory"],
    ex:[{ s:"The wetland provides a natural {{}} for migratory birds.", f:"habitat", ko:"그 습지는 철새에게 자연 서식지를 제공한다." }] },

  /* 원본은 '우박, 우박이 내리다, 환호하다' 로 세 갈래다. 동사 쪽으로 모았다 —
     명사 '우박' 은 바꿔 쓸 수 있는 유의어 3개를 만들기 어렵다. */
  { word:"hail", pron:"헤일", pos:"v", level:"B2", meanings:["환호하다","칭찬하다"],
    syn:["acclaim","applaud","salute"],
    ex:[{ s:"Critics {{}} the film as a masterpiece of modern cinema.", f:"hail", ko:"비평가들은 그 영화를 현대 영화의 걸작이라고 환호했다." }] },

  { word:"halfway", pron:"해프웨이", pos:"adv", level:"B1", meanings:["중간에","부분적으로"],
    syn:["midway","partially","incompletely"],
    ex:[{ s:"We were only {{}} through the project when funding ran out.", f:"halfway", ko:"자금이 떨어졌을 때 우리는 프로젝트를 겨우 절반 진행한 상태였다." }] },

  /* 승격 ① — GLOSS '복도' 와 같은 갈래다. corridor 의 유의어로 쓰인다.
     원본 첫 뜻 '통로' 는 기존 표제어 aisle 과 같아, '복도' 를 앞에 두었다. */
  { word:"hallway", pron:"홀웨이", pos:"n", level:"B1", meanings:["복도","통로"],
    syn:["corridor","passage","foyer"],
    ex:[{ s:"Shoes lined the narrow {{}} from the front door.", f:"hallway", ko:"현관문부터 좁은 복도를 따라 신발이 늘어서 있었다." }] },

  /* 승격 ① — GLOSS '멈추다, 중지' 를 첫 자리에 지켰다. cease 의 유의어로 쓰인다. */
  { word:"halt", pron:"홀트", pos:"v", level:"B2", meanings:["멈추다","중단시키다"],
    syn:["cease","stop","suspend"], ant:["resume"],
    ex:[{ s:"Heavy rain forced organisers to {{}} the outdoor concert.", f:"halt", ko:"폭우로 주최 측은 야외 콘서트를 중단시켜야 했다." }] },

  /* 승격 ① — GLOSS '방해하다' 와 같은 갈래다. constrain 의 유의어로 쓰인다.
     hinder 도 이 목록에 있어서 뜻을 갈랐다 — hamper '방해하다, 저해하다',
     hinder '저지하다, 가로막다'. constrain 문맥은 hamper 쪽이 더 가깝다. */
  { word:"hamper", pron:"햄퍼", pos:"v", level:"B2", meanings:["방해하다","저해하다"],
    syn:["hinder","impede","obstruct"],
    ex:[{ s:"Bad weather continued to {{}} the rescue effort.", f:"hamper", ko:"악천후가 구조 작업을 계속 방해했다." }],
    gov:{ prep:["by","with"], usage:"be hampered by ~ : ~에 의해 방해받다" } },

  /* 승격 ① — GLOSS '장애가 있는' 과 같은 갈래다. disabled 의 유의어로 쓰인다. */
  { word:"handicapped", pron:"핸디캡트", pos:"adj", level:"B2", meanings:["장애가 있는"],
    syn:["disabled","impaired","incapacitated"],
    ex:[{ s:"The new ramp makes the building accessible to {{}} visitors.", f:"handicapped", ko:"새 경사로 덕에 장애가 있는 방문객도 건물에 접근할 수 있다." }] },

  /* 승격 ① — GLOSS '수공예품' 과 같은 갈래다. 참조하는 기존 문제는 없다. */
  { word:"handicraft", pron:"핸디크래프트", pos:"n", level:"B2", meanings:["수공예품","손재주"],
    syn:["craft","handiwork","artisanship"],
    ex:[{ s:"Local artisans sell traditional {{}} at the weekend market.", f:"handicraft", ko:"지역 장인들이 주말 시장에서 전통 수공예품을 판다." }] },

  { word:"handwritten", pron:"핸드리튼", pos:"adj", level:"B2", meanings:["손으로 쓴","친필의"],
    syn:["manuscript","hand-penned","longhand"],
    ex:[{ s:"She treasured the {{}} letter from her grandmother.", f:"handwritten", ko:"그녀는 할머니가 쓴 친필 편지를 소중히 간직했다." }] },

  { word:"hang on", pron:"행 온", pos:"phr", level:"B1", meanings:["꽉 붙잡다","잠깐 기다리다"],
    syn:["hold on","cling to","wait"] },

  { word:"hang out with", pron:"행 아웃 위드", pos:"phr", level:"B1", meanings:["~와 어울리다"],
    syn:["socialize with","spend time with","mix with"] },

  /* 원본은 '(배를) 항구에 정박시키다; ~에 장소[거처]를 제공하다' 다.
     첫 뜻에 괄호를 두지 않는 규약 때문에 순서를 바꿨다.
     동사 쪽으로 모았다 — 명사 '항구' 는 port 로 충분히 다뤄진다. */
  /* ★ syn 의 "shelter" 를 "take in and hide" 로 바꿨다. 사전이 '피난처;
     보호하다' 로 명사와 동사를 섞어 두었는데, 원본이 명사 쪽이라 S 세트에서는
     명사 '피난처' 로 선다 — 동사 목록에 명사가 끼게 된다. */
  { word:"harbor", pron:"하버", pos:"v", level:"B2", meanings:["품다","숨겨 주다"],
    syn:["conceal","nurture","take in and hide"],
    ex:[{ s:"He continued to {{}} doubts about the plan.", f:"harbor", ko:"그는 그 계획에 대한 의심을 계속 품었다." }] },

  { word:"hard-wired", pron:"하드 와이어드", pos:"adj", level:"C1", meanings:["타고난","고정된"],
    syn:["innate","built-in","ingrained"],
    ex:[{ s:"Some researchers believe the fear of snakes is {{}}.", f:"hard-wired", ko:"일부 연구자는 뱀에 대한 두려움이 타고난 것이라고 믿는다." }] },

  /* 원본 오류 — '비슷한 의견을 가진' 은 like-minded 의 뜻이다. 명백한 오류.
     a hard-and-fast rule = 엄격한·변경 불가한 규칙이다. */
  { word:"hard-and-fast", pron:"하드 앤드 패스트", pos:"adj", level:"C1", meanings:["엄격한","변경할 수 없는"],
    syn:["rigid","inflexible","unalterable"], ant:["flexible"],
    ex:[{ s:"There are no {{}} rules about how long the meeting should last.", f:"hard-and-fast", ko:"회의가 얼마나 길어야 하는지에 대한 엄격한 규칙은 없다." }] },

  /* 승격 ① — GLOSS '굳히다, 단단해지다' 와 같은 갈래다. crystallize 의 유의어로 쓰인다. */
  { word:"harden", pron:"하든", pos:"v", level:"B2", meanings:["굳히다","단단해지다"],
    syn:["solidify","stiffen","toughen"], ant:["soften"],
    ex:[{ s:"Leave the mixture to cool and {{}} overnight.", f:"harden", ko:"혼합물을 하룻밤 식혀 굳힌다." }],
    gov:{ prep:["into","against"], usage:"harden into ~ : ~로 굳어지다" } },

  { word:"hardness", pron:"하드니스", pos:"n", level:"B2", meanings:["단단함","경도"],
    syn:["firmness","rigidity","toughness"], ant:["softness"],
    ex:[{ s:"Diamond is famous for its extreme {{}}.", f:"hardness", ko:"다이아몬드는 극도의 단단함으로 유명하다." }] },

  /* 승격 ① — GLOSS '고난, 역경' 과 같은 갈래다. adversity·deprivation 의 유의어로 쓰인다. */
  { word:"hardship", pron:"하드십", pos:"n", level:"B2", meanings:["고난","역경"],
    syn:["adversity","deprivation","privation"],
    ex:[{ s:"Many families faced severe {{}} during the drought.", f:"hardship", ko:"가뭄 동안 많은 가정이 극심한 고난을 겪었다." }] },

  /* 승격 ② — GLOSS '해롭지 않은' 이다. catastrophic·deadly·fatal 세 문제의
     반의어로 쓰인다. '치명적인' 의 반대말이므로 '해롭지 않은' 을 첫 자리에 지켰다.
     원본의 '무해한' 은 뜻이 같으니 둘째에 두었다. */
  { word:"harmless", pron:"하믈리스", pos:"adj", level:"B1", meanings:["해롭지 않은","무해한"],
    syn:["innocuous","benign","inoffensive"], ant:["harmful"],
    ex:[{ s:"The spider looks scary but is completely {{}}.", f:"harmless", ko:"그 거미는 무섭게 보이지만 완전히 무해하다." }] },

  { word:"harmonious", pron:"하모니어스", pos:"adj", level:"B2", meanings:["조화로운"],
    syn:["balanced","compatible","concordant"],
    ex:[{ s:"The two departments maintained a {{}} working relationship.", f:"harmonious", ko:"두 부서는 조화로운 업무 관계를 유지했다." }] },

  /* ── 챕터 2 ─────────────────────────────── */

  /* 원본은 '(자원 등을) 이용하다, 통제하다' 다. 첫 뜻에 괄호를 두지 않는다. */
  { word:"harness", pron:"하니스", pos:"v", level:"B2", meanings:["이용하다","활용하다"],
    syn:["utilize","exploit","channel"],
    ex:[{ s:"Engineers found a way to {{}} solar energy more efficiently.", f:"harness", ko:"기술자들은 태양 에너지를 더 효율적으로 이용하는 방법을 찾았다." }] },

  /* 승격 ② — GLOSS '거친, 가혹한' 이다. bitter 는 '가혹한' 쪽, coarse 는 '거친' 쪽.
     양쪽을 다 지키려면 둘 다 담아야 한다. 사전 순서를 그대로 지켰다. */
  { word:"harsh", pron:"하쉬", pos:"adj", level:"B2", meanings:["거친","가혹한"],
    syn:["severe","brutal","stern"], ant:["mild"],
    ex:[{ s:"Winters here are long and {{}}.", f:"harsh", ko:"이곳의 겨울은 길고 혹독하다." }] },

  /* 승격 ② — GLOSS '수확하다; 수확' 이다. 품사가 갈린다.
     참조하는 기존 문제가 없어 자유롭게 골랐다. 원본의 명사 쪽으로 모았다. */
  { word:"harvest", pron:"하비스트", pos:"n", level:"B1", meanings:["추수","수확"],
    syn:["crop","yield","reaping"],
    ex:[{ s:"This year's wheat {{}} was the largest on record.", f:"harvest", ko:"올해 밀 수확은 기록상 최대였다." }] },

  { word:"hatch", pron:"해치", pos:"v", level:"B2", meanings:["부화하다"],
    syn:["incubate","emerge","breed"],
    ex:[{ s:"The eggs will {{}} in about three weeks.", f:"hatch", ko:"알은 약 3주 뒤에 부화할 것이다." }] },

  { word:"hate crime", pron:"헤이트 크라임", pos:"phr", level:"B2", meanings:["증오 범죄"],
    syn:["bias crime","prejudice attack","hate offense"] },

  { word:"hateful", pron:"헤이트풀", pos:"adj", level:"B2", meanings:["혐오스러운","불쾌한"],
    syn:["loathsome","abhorrent","odious"], ant:["lovable"],
    ex:[{ s:"She received a stream of {{}} messages online.", f:"hateful", ko:"그녀는 온라인에서 쏟아지는 혐오스러운 메시지를 받았다." }] },

  /* 승격 ① — GLOSS '증오, 혐오' 와 같은 갈래다. 참조하는 기존 문제는 없다. */
  { word:"hatred", pron:"헤이트리드", pos:"n", level:"B2", meanings:["증오","혐오"],
    syn:["animosity","hostility","loathing"], ant:["love"],
    ex:[{ s:"Years of conflict bred deep {{}} between the two groups.", f:"hatred", ko:"수년간의 갈등이 두 집단 사이에 깊은 증오를 낳았다." }] },

  /* 원본 오류 수정 — '유령이 나타나다' 에 타동사 뜻을 추가했다 (0차 기록). */
  { word:"haunt", pron:"혼트", pos:"v", level:"B2", meanings:["머릿속을 떠나지 않다","귀신이 나타나다"],
    syn:["plague","torment","obsess"],
    ex:[{ s:"Memories of the accident still {{}} him at night.", f:"haunt", ko:"그 사고의 기억이 아직도 밤마다 그를 괴롭힌다." }] },

  { word:"have ~ in common", pron:"해브 인 커먼", pos:"phr", level:"B1", meanings:["~을 공통으로 지니다"],
    syn:["share","have in common","resemble in"] },

  /* 원본 첫 뜻 '~할 수밖에 없다' 는 기존 표제어 be obliged to 와 같다.
     '어쩔 수 없이 ~하다' 를 앞에 두어 갈랐다. */
  { word:"have no choice but to", pron:"해브 노 초이스 벗 투", pos:"phr", level:"B2", meanings:["어쩔 수 없이 ~하다"],
    syn:["be forced to","be compelled to","have no option but to"] },

  { word:"have nothing to do with", pron:"해브 너싱 투 두 위드", pos:"phr", level:"B2", meanings:["~와 전혀 관계가 없다"],
    syn:["be unrelated to","be irrelevant to","bear no relation to"] },

  { word:"have relevance to", pron:"해브 렐러번스 투", pos:"phr", level:"B2", meanings:["~와 관련이 있다"],
    syn:["be relevant to","pertain to","relate to"] },

  { word:"have to do with", pron:"해브 투 두 위드", pos:"phr", level:"B1", meanings:["~와 관계가 있다"],
    syn:["concern","relate to","involve"] },

  { word:"hazard", pron:"해저드", pos:"n", level:"B2", meanings:["위험","위험 요소"],
    syn:["danger","risk","peril"],
    ex:[{ s:"Slippery floors are a common {{}} in the workplace.", f:"hazard", ko:"미끄러운 바닥은 직장에서 흔한 위험 요소이다." }] },

  /* 승격 ① — GLOSS '위험한' 과 같은 갈래다. 참조하는 기존 문제는 없다.
     원본 첫 뜻에 괄호('(안전, 건강에)')가 있어 순서를 바꿨다. */
  { word:"hazardous", pron:"해저더스", pos:"adj", level:"B2", meanings:["유해한","위험한"],
    syn:["dangerous","perilous","toxic"], ant:["safe"],
    ex:[{ s:"Workers must wear protective gear when handling {{}} chemicals.", f:"hazardous", ko:"근로자는 유해 화학 물질을 다룰 때 보호 장비를 착용해야 한다." }],
    gov:{ prep:["to","for"], usage:"hazardous to ~ : ~에 유해한" } },

  /* 원본 '(남보다 일찍 시작해서 갖게 되는) 유리함' — 괄호가 첫 뜻에 있다. */
  { word:"head start", pron:"헤드 스타트", pos:"phr", level:"B2", meanings:["유리한 출발","앞서기"],
    syn:["advantage","edge","lead"] },

  /* 승격 ② — GLOSS '방향; 제목' 이다. direction 의 유의어로 쓰이는 뜻은 '방향' 이다.
     원본은 '표제, 제목' 이라 갈래가 다르다. direction 문제를 지키기 위해
     '방향' 을 첫 자리에 두고 원본의 '제목' 을 둘째로 남겼다. */
  { word:"heading", pron:"헤딩", pos:"n", level:"B2", meanings:["방향","제목"],
    syn:["title","direction","caption"],
    ex:[{ s:"Each section of the report has a clear {{}}.", f:"heading", ko:"보고서의 각 절에는 명확한 제목이 있다." }] },

  { word:"headquarters", pron:"헤드쿼터즈", pos:"n", level:"B2", meanings:["본부","본사"],
    syn:["main office","central office","base"],
    ex:[{ s:"The company moved its {{}} to a larger building.", f:"headquarters", ko:"회사는 본사를 더 큰 건물로 옮겼다." }] },

  /* ── 챕터 3 ─────────────────────────────── */

  { word:"hear from", pron:"히어 프롬", pos:"phr", level:"B1", meanings:["~로부터 연락을 받다"],
    syn:["get word from","receive news from","be contacted by"] },

  { word:"heartfelt", pron:"하트펠트", pos:"adj", level:"B2", meanings:["진심에서 우러난"],
    syn:["sincere","genuine","wholehearted"],
    ex:[{ s:"She offered a {{}} apology for the misunderstanding.", f:"heartfelt", ko:"그녀는 그 오해에 대해 진심에서 우러난 사과를 했다." }] },

  { word:"heartland", pron:"하트랜드", pos:"n", level:"C1", meanings:["중심지","핵심 지역"],
    syn:["core region","interior","hub"],
    ex:[{ s:"The party draws most support from the rural {{}}.", f:"heartland", ko:"그 정당은 농촌 중심지에서 가장 많은 지지를 얻는다." }] },

  { word:"heartwarming", pron:"하트워밍", pos:"adj", level:"B2", meanings:["마음이 따뜻해지는"],
    syn:["touching","uplifting","moving"],
    ex:[{ s:"The audience loved the {{}} ending of the play.", f:"heartwarming", ko:"관객들은 그 연극의 훈훈한 결말을 좋아했다." }] },

  /* 원본 '뜨겁게 하다, 데우다; 열' — 동사 쪽으로 모았다. */
  { word:"heat", pron:"히트", pos:"v", level:"B1", meanings:["데우다","가열하다"],
    syn:["warm","reheat","scorch"], ant:["cool"],
    ex:[{ s:"Please {{}} the soup for five minutes before serving.", f:"heat", ko:"내기 전에 수프를 5분간 데워 주세요." }] },

  /* 승격 ① — hectic 은 PRON 만 있고 GLOSS 는 없다. feverish 의 유의어로 쓰인다.
     feverish 의 뜻은 '열이 나는, 흥분한' 이니 '몹시 바쁜' 은 같은 갈래다. */
  { word:"hectic", pron:"헥틱", pos:"adj", level:"B2", meanings:["몹시 바쁜"],
    syn:["frantic","frenetic","bustling"],
    ex:[{ s:"December is always the most {{}} month at the office.", f:"hectic", ko:"12월은 늘 사무실에서 가장 바쁜 달이다." }] },

  /* 승격 ② — GLOSS '높이, 고도' 이다. altitude 와 elevation 이 이 뜻을 쓴다.
     둘 다 '고도' 가 핵심이므로 사전 순서를 그대로 지켰다. */
  { word:"height", pron:"하이트", pos:"n", level:"B1", meanings:["높이","고도"],
    syn:["altitude","loftiness","stature"],
    ex:[{ s:"The {{}} of the building exceeds fifty metres.", f:"height", ko:"그 건물의 높이는 50미터를 넘는다." }] },

  /* 승격 ① — heighten 은 PRON 만 있고 GLOSS 는 없다. enhance 의 유의어로 쓰인다.
     heighten 과 height 는 어근이 같지만 품사가 달라(v/n) 같은 보드에 안 온다. */
  { word:"heighten", pron:"하이튼", pos:"v", level:"B2", meanings:["높이다","고조시키다"],
    syn:["intensify","amplify","elevate"],
    ex:[{ s:"The report only served to {{}} public concern.", f:"heighten", ko:"그 보고서는 대중의 우려를 고조시키기만 했다." }] },

  /* 승격 ① — GLOSS '상속인' 과 글자까지 같다. beneficiary·descendant 의 유의어. */
  { word:"heir", pron:"에어", pos:"n", level:"B2", meanings:["상속인","계승자"],
    syn:["successor","beneficiary","inheritor"],
    ex:[{ s:"The eldest son was named {{}} to the entire estate.", f:"heir", ko:"장남이 전 재산의 상속인으로 지명됐다." }],
    gov:{ prep:["to"], usage:"heir to ~ : ~의 상속인" } },

  { word:"helpless", pron:"헬프리스", pos:"adj", level:"B2", meanings:["무력한"],
    syn:["powerless","defenseless","vulnerable"], ant:["capable"],
    ex:[{ s:"Without electricity the hospital felt utterly {{}}.", f:"helpless", ko:"전기 없이 병원은 완전히 무력하게 느껴졌다." }] },

  /* ── 챕터 4 ─────────────────────────────── */

  { word:"hemisphere", pron:"헤미스피어", pos:"n", level:"B2", meanings:["반구"],
    syn:["half-globe","half","zone"],
    ex:[{ s:"Most of the world's population lives in the northern {{}}.", f:"hemisphere", ko:"세계 인구의 대부분은 북반구에 산다." }] },

  /* 승격 ① — GLOSS '그러므로, 따라서' 와 같은 갈래다. consequently 의 유의어. */
  { word:"hence", pron:"헨스", pos:"adv", level:"B2", meanings:["그러므로","따라서"],
    syn:["therefore","consequently","thus"],
    ex:[{ s:"Sales fell sharply; {{}} the company cut costs.", f:"hence", ko:"매출이 급감했다. 그러므로 회사는 비용을 줄였다." }] },

  { word:"herbivore", pron:"허비보어", pos:"n", level:"B2", meanings:["초식동물"],
    syn:["plant-eater","grazer","ruminant"],
    ex:[{ s:"A {{}} needs vast amounts of vegetation each day.", f:"herbivore", ko:"초식동물은 매일 막대한 양의 식물을 필요로 한다." }] },

  /* 승격 ② — GLOSS '내세, 이후' 이다. afterlife·eternity 가 쓰는 뜻은 '내세' 이다.
     원본의 '이후내용에서' 는 한국어 표현이 아니어서 삭제했다(0차 기록).
     afterlife·eternity 문제를 지키기 위해 '내세' 를 첫 자리에 두었다. */
  { word:"hereafter", pron:"히어래프터", pos:"adv", level:"C1", meanings:["내세","이후"],
    syn:["afterlife","future","beyond"],
    ex:[{ s:"Many religions teach about rewards in the {{}}.", f:"hereafter", ko:"많은 종교가 내세에서의 보상을 가르친다." }] },

  /* 승격 ① — GLOSS '유전' 과 같은 갈래다. 참조 없음. */
  { word:"heredity", pron:"허레디티", pos:"n", level:"C1", meanings:["유전","상속"],
    syn:["genetics","inheritance","lineage"],
    ex:[{ s:"Both environment and {{}} shape a child's temperament.", f:"heredity", ko:"환경과 유전이 모두 아이의 기질을 형성한다." }] },

  /* 승격 ① — GLOSS '유산, 전통' 과 같은 갈래다. 참조 없음. */
  { word:"heritage", pron:"헤리티지", pos:"n", level:"B2", meanings:["유산","전통"],
    syn:["legacy","tradition","birthright"],
    ex:[{ s:"The town's rich cultural {{}} attracts many tourists.", f:"heritage", ko:"그 마을의 풍부한 문화유산은 많은 관광객을 끌어들인다." }] },

  { word:"hesitant", pron:"헤지턴트", pos:"adj", level:"B2", meanings:["머뭇거리는","주저하는"],
    syn:["reluctant","uncertain","indecisive"], ant:["decisive"],
    ex:[{ s:"She felt {{}} about accepting the overseas position.", f:"hesitant", ko:"그녀는 해외 직위를 수락하는 것에 주저했다." }],
    gov:{ prep:["about","to","over"], usage:"hesitant about ~ : ~에 대해 주저하는" } },

  /* 승격 ① — PRON 만 있고 GLOSS 는 없다. dare(ant)·falter(syn) 가 쓴다.
     hesitant 와 어근이 같지만 품사가 달라(adj/v) 같은 보드에 안 온다. */
  { word:"hesitate", pron:"헤지테이트", pos:"v", level:"B2", meanings:["주저하다","망설이다"],
    syn:["falter","waver","dither"], ant:["dare"],
    ex:[{ s:"Do not {{}} to ask if you need any help.", f:"hesitate", ko:"도움이 필요하면 주저하지 말고 부탁하세요." }],
    gov:{ prep:["to","about","over"], usage:"hesitate to ~ : ~하기를 망설이다" } },

  { word:"hibernate", pron:"하이버네이트", pos:"v", level:"B2", meanings:["동면하다"],
    syn:["sleep","lie dormant","overwinter"],
    ex:[{ s:"Bears {{}} through the coldest months of the year.", f:"hibernate", ko:"곰은 일 년 중 가장 추운 달에 동면한다." }] },

  { word:"hideous", pron:"히디어스", pos:"adj", level:"C1", meanings:["흉측한","무시무시한"],
    syn:["grotesque","repulsive","ghastly"],
    ex:[{ s:"The mask had a {{}} grin that frightened the children.", f:"hideous", ko:"그 가면은 아이들을 겁먹게 하는 흉측한 웃음을 짓고 있었다." }] },

  { word:"hierarchy", pron:"하이어라키", pos:"n", level:"B2", meanings:["계층 구조","지배층"],
    syn:["ranking","pecking order","class system"],
    ex:[{ s:"Decisions flow down through a rigid corporate {{}}.", f:"hierarchy", ko:"의사결정은 엄격한 기업 계층 구조를 따라 내려간다." }] },

  /* 반의어를 budget 에서 low-grade 로 바꿨다. budget 은 표제어(예산 · n)라서
     이 자리에 '예산' 이 떠 있었다 — '최고급의' 의 반대말로는 말이 안 된다.
     budget 의 형용사 뜻(저가의)을 노린 자리였는데 명사 표제어가 가로챈 것이다. */
  { word:"high-end", pron:"하이 엔드", pos:"adj", level:"B2", meanings:["최고급의","최고가인"],
    syn:["premium","upscale","luxury"], ant:["low-grade"],
    ex:[{ s:"The brand is known for its {{}} audio equipment.", f:"high-end", ko:"그 브랜드는 최고급 음향 장비로 유명하다." }] },

  /* 승격 ① — GLOSS '강조하다; 하이라이트' 와 같은 갈래다. accentuate·emphasize
     두 문제가 이 단어를 유의어로 쓴다. */
  { word:"highlight", pron:"하이라이트", pos:"v", level:"B2", meanings:["강조하다"],
    syn:["emphasize","underline","spotlight"],
    ex:[{ s:"The report aims to {{}} the key findings.", f:"highlight", ko:"그 보고서는 핵심 발견을 강조하는 것을 목표로 한다." }] },

  { word:"high-pitched", pron:"하이 피치드", pos:"adj", level:"C1", meanings:["음조가 높은"],
    syn:["shrill","piercing","squeaky"], ant:["low-pitched"],
    ex:[{ s:"A {{}} alarm echoed through the empty hallway.", f:"high-pitched", ko:"높은 음조의 경보가 빈 복도에 울려 퍼졌다." }] },

  /* 승격 ② — GLOSS '방해하다' 이다. assist(ant)·get in the way of(syn) 가 쓴다.
     hamper(1차)와 갈랐다 — hinder '저지하다, 가로막다'. assist 가 반의어로
     쓰이는 건 '방해↔돕다' 라서 '저지하다' 도 반의 관계가 유지된다. */
  { word:"hinder", pron:"힌더", pos:"v", level:"B2", meanings:["저지하다","가로막다"],
    syn:["hamper","obstruct","impede"], ant:["assist"],
    ex:[{ s:"Heavy fog continued to {{}} search operations.", f:"hinder", ko:"짙은 안개가 수색 작업을 계속 저지했다." }] },

  /* 승격 ② — GLOSS '고용하다; 빌리다' 를 글자까지 지켰다.
     charter 는 '빌리다' 쪽, employ 는 '고용하다' 쪽, dismiss 는 반의어.
     양쪽을 다 지키려면 사전 순서를 그대로 쓰면 된다. */
  { word:"hire", pron:"하이어", pos:"v", level:"B1", meanings:["고용하다","빌리다"],
    syn:["employ","recruit","engage"], ant:["dismiss"],
    ex:[{ s:"The factory plans to {{}} fifty new workers next month.", f:"hire", ko:"그 공장은 다음 달에 새 근로자 50명을 고용할 계획이다." }],
    gov:{ prep:["as","for"], usage:"hire A as B : A를 B로 고용하다" } },

  { word:"historic", pron:"히스토릭", pos:"adj", level:"B1", meanings:["역사적인"],
    syn:["landmark","epochal","monumental"],
    ex:[{ s:"The signing of the treaty was a truly {{}} event.", f:"historic", ko:"그 조약의 서명은 진정으로 역사적인 사건이었다." }] },

  /* 승격 ① — GLOSS '억제하다, 방해하다' 와 같은 갈래다. 참조 없음.
     원본 첫 뜻 '망설이다' 는 hesitate 와 같아, '억제하다' 를 앞에 두었다. */
  { word:"hold back", pron:"홀드 백", pos:"phr", level:"B2", meanings:["억제하다","저지하다"],
    syn:["restrain","suppress","withhold"] },

  { word:"hold down", pron:"홀드 다운", pos:"phr", level:"B2", meanings:["~을 억제하다"],
    syn:["suppress","keep down","contain"] },

  /* 원본 첫 뜻 '매달리다' 는 기존 표제어 dangle 과 같다. '의지하다' 를 앞에 두었다. */
  { word:"hold on to", pron:"홀드 온 투", pos:"phr", level:"B1", meanings:["의지하다","매달리다"],
    syn:["cling to","grip","keep hold of"],
    gov:{ prep:["to"], usage:"hold on to ~ : ~에 매달리다" } },

  /* ── 챕터 5 (4차에서 빠진 7단어 + 나머지 22단어 = 29단어) ──── */

  { word:"holdout", pron:"홀다웃", pos:"n", level:"C1", meanings:["동의하지 않는 사람"],
    syn:["dissenter","objector","resister"],
    ex:[{ s:"He was the last {{}} on the committee.", f:"holdout", ko:"그는 위원회에서 마지막까지 동의하지 않은 사람이었다." }] },

  /* 승격 ② — 4곳(basin·cavity·concave·crater)이 이 단어를 유의어로 쓴다.
     쓰는 쪽이 전부 '움푹한 곳' 이라 GLOSS 는 없지만 기존 뜻이 '속이 빈; 움푹한 곳'
     이었다. 명사 쪽(움푹한 곳)을 첫 자리에 두어 네 문제를 지킨다. */
  { word:"hollow", pron:"홀로우", pos:"n", level:"B2", meanings:["움푹한 곳","속이 빈"],
    syn:["cavity","dip","depression"], ant:["mound"],
    ex:[{ s:"Rainwater collected in a shallow {{}} near the path.", f:"hollow", ko:"빗물이 길 근처 얕은 움푹한 곳에 고였다." }] },

  /* 승격 ① — divine 의 유의어로 쓰인다. */
  { word:"holy", pron:"홀리", pos:"adj", level:"B1", meanings:["신성한","경건한"],
    syn:["sacred","divine","blessed"], ant:["profane"],
    ex:[{ s:"Pilgrims travel great distances to visit the {{}} site.", f:"holy", ko:"순례자들은 성지를 방문하기 위해 먼 거리를 여행한다." }] },

  { word:"homey", pron:"호미", pos:"adj", level:"B2", meanings:["아늑한","포근한"],
    syn:["cozy","snug","homely"], ant:["bleak"],
    ex:[{ s:"The café has a warm and {{}} feel.", f:"homey", ko:"그 카페는 따뜻하고 아늑한 느낌이다." }] },

  { word:"homicide", pron:"하미사이드", pos:"n", level:"C1", meanings:["살인"],
    syn:["murder","killing","manslaughter"],
    ex:[{ s:"Police are investigating the case as a possible {{}}.", f:"homicide", ko:"경찰은 이 사건을 살인 가능성으로 수사하고 있다." }] },

  { word:"homogeneous", pron:"호모지니어스", pos:"adj", level:"C1", meanings:["동질의","균일한"],
    syn:["uniform","consistent","identical"], ant:["diverse"],
    ex:[{ s:"The mixture must be completely {{}} before heating.", f:"homogeneous", ko:"가열하기 전에 혼합물이 완전히 균일해야 한다." }],
    gov:{ prep:["with","in"], usage:"homogeneous with ~ : ~와 동질의" } },

  { word:"hook", pron:"훅", pos:"n", level:"B1", meanings:["갈고리","걸이"],
    syn:["peg","clasp","fastener"],
    ex:[{ s:"Hang your coat on the {{}} behind the door.", f:"hook", ko:"문 뒤의 걸이에 외투를 걸어 두세요." }] },

  /* 승격 ① — flat 의 유의어로 쓰인다. */
  { word:"horizontal", pron:"호리존틀", pos:"adj", level:"B2", meanings:["수평의"],
    syn:["flat","level","even"], ant:["vertical"],
    ex:[{ s:"Draw a {{}} line across the middle of the page.", f:"horizontal", ko:"페이지 가운데에 수평선을 그어라." }] },

  { word:"horrendous", pron:"허렌더스", pos:"adj", level:"C1", meanings:["충격적인","끔찍한"],
    syn:["appalling","dreadful","atrocious"],
    ex:[{ s:"Traffic jams were {{}} during the holiday weekend.", f:"horrendous", ko:"연휴 주말 동안 교통 체증이 끔찍했다." }] },

  { word:"horrific", pron:"호리픽", pos:"adj", level:"B2", meanings:["무시무시한"],
    syn:["terrifying","gruesome","nightmarish"],
    ex:[{ s:"Witnesses described the accident as {{}}.", f:"horrific", ko:"목격자들은 그 사고를 무시무시했다고 묘사했다." }] },

  { word:"hospitable", pron:"하스피터블", pos:"adj", level:"B2", meanings:["환대하는","호의적인"],
    syn:["welcoming","generous","warm"], ant:["inhospitable"],
    ex:[{ s:"The villagers were remarkably {{}} to the visitors.", f:"hospitable", ko:"마을 사람들은 방문객에게 놀라울 정도로 친절했다." }],
    gov:{ prep:["to","toward"], usage:"hospitable to ~ : ~에게 환대하는" } },

  { word:"hospitality", pron:"하스피탤러티", pos:"n", level:"B2", meanings:["환대","접대"],
    syn:["welcome","reception","generosity"],
    ex:[{ s:"We were overwhelmed by the {{}} of our hosts.", f:"hospitality", ko:"우리는 주최자들의 환대에 감동했다." }] },

  { word:"hostage", pron:"하스티지", pos:"n", level:"B2", meanings:["인질"],
    syn:["captive","prisoner","detainee"],
    ex:[{ s:"The hijackers released the {{}} after twelve hours.", f:"hostage", ko:"납치범들은 12시간 만에 인질을 석방했다." }] },

  /* 승격 ① — aggressive(syn)·amicable(ant) 가 쓴다. */
  { word:"hostile", pron:"하스틀", pos:"adj", level:"B2", meanings:["적대적인"],
    syn:["aggressive","antagonistic","belligerent"], ant:["friendly"],
    ex:[{ s:"The crowd turned {{}} after the announcement.", f:"hostile", ko:"발표 후 군중은 적대적으로 변했다." }],
    gov:{ prep:["to","toward"], usage:"hostile to ~ : ~에 적대적인" } },

  /* 승격 ① — aggression·antipathy 가 쓴다. hostile 과 어근이 같지만
     품사가 달라(adj/n) 같은 보드에 안 온다. */
  { word:"hostility", pron:"하스틸리티", pos:"n", level:"B2", meanings:["적개심","적대감"],
    syn:["animosity","enmity","antagonism"], ant:["goodwill"],
    ex:[{ s:"Years of {{}} between the two nations finally ended.", f:"hostility", ko:"두 나라 사이의 수년간의 적대감이 마침내 끝났다." }] },

  /* 승격 ② — GLOSS '수용하다; 집' 이다. accommodate 는 '수용하다' 쪽,
     dynasty 는 '집, 가문' 쪽을 쓴다. 양쪽을 다 지키려면 둘 다 담아야 한다.
     수용하다를 첫 자리에 두고 accommodate 문맥을 지킨다. */
  { word:"house", pron:"하우스", pos:"v", level:"B1", meanings:["수용하다","보관하다"],
    syn:["accommodate","contain","store"],
    ex:[{ s:"The library can {{}} over a million volumes.", f:"house", ko:"그 도서관은 100만 권 이상을 수용할 수 있다." }],
    gov:{ prep:["in"], usage:"house A in B : A를 B에 수용하다" } },

  /* 승격 ② — GLOSS '가정의, 가정용의' 이다. domestic 이 형용사를 쓴다.
     원본은 '가정' (명사)인데 domestic 문맥을 지키려면 형용사로 둬야 한다. */
  { word:"household", pron:"하우스홀드", pos:"adj", level:"B1", meanings:["가정의","가정용의"],
    syn:["domestic","family","residential"],
    ex:[{ s:"{{}} waste is collected twice a week.", f:"Household", ko:"가정 폐기물은 주 2회 수거된다." }] },

  /* 원본은 '인류; 인간성' 이다. humankind 와 첫 뜻이 같다(둘 다 '인류').
     실측으로 앱이 같은 문제에 안 넣는 것을 확인했다(meaningsOverlap=true). */
  { word:"humanity", pron:"휴매너티", pos:"n", level:"B2", meanings:["인류","인간성"],
    syn:["humankind","mankind","human race"],
    ex:[{ s:"The discovery could benefit all of {{}}.", f:"humanity", ko:"그 발견은 인류 전체에 이로울 수 있다." }] },

  { word:"humankind", pron:"휴먼카인드", pos:"n", level:"B2", meanings:["인류","인간"],
    syn:["humanity","mankind","human race"],
    ex:[{ s:"{{}} has always sought to understand the stars.", f:"Humankind", ko:"인류는 항상 별을 이해하려 했다." }] },

  /* 승격 ① — arrogant 의 반의어로 쓰인다. */
  { word:"humble", pron:"험블", pos:"adj", level:"B2", meanings:["겸손한","비천한"],
    syn:["modest","meek","unassuming"], ant:["arrogant"],
    ex:[{ s:"Despite his fame, he remained {{}} and approachable.", f:"humble", ko:"명성에도 그는 겸손하고 다가가기 쉬운 사람이었다." }] },

  /* 승격 ① — damp 의 유의어로 쓰인다. */
  { word:"humid", pron:"휴미드", pos:"adj", level:"B2", meanings:["습한","눅눅한"],
    syn:["damp","muggy","steamy"], ant:["dry"],
    ex:[{ s:"The greenhouse was hot and extremely {{}}.", f:"humid", ko:"온실은 덥고 극도로 습했다." }] },

  { word:"humidity", pron:"휴미디티", pos:"n", level:"B2", meanings:["습도","습기"],
    syn:["moisture","dampness","mugginess"],
    ex:[{ s:"High {{}} can make even moderate heat feel unbearable.", f:"humidity", ko:"높은 습도는 적당한 더위도 견딜 수 없게 만든다." }] },

  /* 승격 ① — embarrass 의 유의어로 쓰인다. */
  { word:"humiliate", pron:"휴밀리에이트", pos:"v", level:"B2", meanings:["모욕하다","창피를 주다"],
    syn:["embarrass","degrade","demean"],
    ex:[{ s:"No teacher should ever {{}} a student in front of the class.", f:"humiliate", ko:"어떤 교사도 반 앞에서 학생에게 모욕을 주어서는 안 된다." }],
    gov:{ prep:["in","by"], usage:"humiliated in ~ : ~에서 모욕당하다" } },

  /* 승격 ① — disgrace 의 유의어로 쓰인다. humiliate 와 어근이 같지만
     품사가 달라(v/n) 같은 보드에 안 온다. */
  { word:"humiliation", pron:"휴밀리에이션", pos:"n", level:"B2", meanings:["굴욕","창피"],
    syn:["disgrace","shame","indignity"],
    ex:[{ s:"The defeat was a national {{}}.", f:"humiliation", ko:"그 패배는 국가적 굴욕이었다." }] },

  /* 승격 ① — ego 의 반의어로 쓰인다. humble·humiliate·humiliation 과 어근이
     같지만 품사가 명사라 다른 품사와 같은 보드에 안 온다. */
  { word:"humility", pron:"휴밀리티", pos:"n", level:"B2", meanings:["겸손"],
    syn:["modesty","meekness","humbleness"], ant:["pride"],
    ex:[{ s:"True strength lies in showing {{}} when you succeed.", f:"humility", ko:"진정한 강인함은 성공했을 때 겸손을 보이는 데 있다." }] },

  /* 승격 ② — appetite·crave 는 '갈망' 쪽, famine 은 '굶주림' 쪽을 쓴다.
     양쪽을 다 지키려면 둘 다 담아야 한다. */
  { word:"hunger", pron:"헝거", pos:"n", level:"B1", meanings:["굶주림","갈망"],
    syn:["starvation","famine","craving"], ant:["satiety"],
    ex:[{ s:"Millions still suffer from {{}} in the region.", f:"hunger", ko:"그 지역에서는 아직도 수백만 명이 굶주림에 시달린다." }],
    gov:{ prep:["for"], usage:"hunger for ~ : ~을 갈망하다" } },

  /* 승격 ① — cast 의 유의어로 쓰인다. */
  { word:"hurl", pron:"헐", pos:"v", level:"B2", meanings:["세게 던지다","퍼붓다"],
    syn:["fling","cast","lob"],
    ex:[{ s:"Protesters began to {{}} stones at the barricade.", f:"hurl", ko:"시위대가 바리케이드에 돌을 던지기 시작했다." }],
    gov:{ prep:["at","into","against"], usage:"hurl A at B : A를 B에게 던지다" } },

  /* 승격 ① — GLOSS '혼종의, 잡종' 과 같은 갈래다. 참조 없음. */
  { word:"hybrid", pron:"하이브리드", pos:"n", level:"B2", meanings:["잡종","혼합물"],
    syn:["crossbreed","mixture","blend"],
    ex:[{ s:"The car is a {{}} that runs on both petrol and electricity.", f:"hybrid", ko:"그 차는 휘발유와 전기 둘 다로 달리는 하이브리드이다." }] },

  { word:"hydroelectric", pron:"하이드로일렉트릭", pos:"adj", level:"C1", meanings:["수력 전기의"],
    ex:[{ s:"The dam generates enough {{}} power for the whole valley.", f:"hydroelectric", ko:"그 댐은 계곡 전체에 충분한 수력 전기를 생산한다." }] },

  { word:"hydrogen", pron:"하이드로전", pos:"n", level:"B2", meanings:["수소"],
    ex:[{ s:"Water is made up of {{}} and oxygen atoms.", f:"hydrogen", ko:"물은 수소 원자와 산소 원자로 이루어져 있다." }] },

  { word:"hygiene", pron:"하이진", pos:"n", level:"B1", meanings:["위생"],
    syn:["cleanliness","sanitation","healthfulness"],
    ex:[{ s:"Good hand {{}} can prevent many infections.", f:"hygiene", ko:"올바른 손 위생은 많은 감염을 예방할 수 있다." }] },

  { word:"hypocrisy", pron:"히파크러시", pos:"n", level:"C1", meanings:["위선"],
    syn:["insincerity","duplicity","pretense"], ant:["sincerity"],
    ex:[{ s:"Voters accused the senator of blatant {{}}.", f:"hypocrisy", ko:"유권자들은 상원의원을 노골적인 위선으로 비난했다." }] },

  /* hypocritical 과 어근이 같지만 품사가 달라(n/adj) 같은 보드에 안 온다. */
  { word:"hypocritical", pron:"히포크리티컬", pos:"adj", level:"C1", meanings:["위선적인"],
    syn:["insincere","two-faced","deceitful"], ant:["sincere"],
    ex:[{ s:"It would be {{}} to preach honesty while lying.", f:"hypocritical", ko:"거짓말을 하면서 정직을 설교하는 것은 위선적일 것이다." }] },

  { word:"hypothesis", pron:"하이파씨시스", pos:"n", level:"B2", meanings:["가설","가정"],
    syn:["theory","conjecture","premise"],
    ex:[{ s:"The scientist tested her {{}} with a series of experiments.", f:"hypothesis", ko:"그 과학자는 일련의 실험으로 자신의 가설을 검증했다." }] },

  /* hypothesis 와 어근이 같지만 품사가 달라(n/v) 같은 보드에 안 온다. */
  { word:"hypothesize", pron:"하이파써사이즈", pos:"v", level:"C1", meanings:["가설을 세우다"],
    syn:["theorize","speculate","postulate"],
    ex:[{ s:"Researchers {{}} that stress weakens the immune system.", f:"hypothesize", ko:"연구자들은 스트레스가 면역 체계를 약화시킨다는 가설을 세웠다." }] }
];

/* 유의어 뜻 사전 병합 */
Object.assign(window.GLOSS, {
  "abhorrent":"혐오스러운",
  "animosity":"적의, 앙심",
  "antagonism":"적대, 대립",
  "antagonistic":"적대적인",
  "artisanship":"장인 기술",
  "atrocious":"끔찍한",
  "balanced":"균형 잡힌",
  "be contacted by":"~로부터 연락받다",
  "be relevant to":"~와 관련되다",
  "be unrelated to":"~와 전혀 관계없다",
  "bear no relation to":"~와 관계가 없다",
  "belligerent":"호전적인",
  "benign":"무해한, 양성의",
  "bias crime":"편견 범죄",
  "birthright":"생득권",
  "blessed":"신성한, 축복받은",
  "built-in":"내장된",
  "bustling":"북적이는",
  "caption":"캡션, 설명문",
  "central office":"중앙 사무소",
  "class system":"계급 제도",
  "cleanliness":"청결",
  "concordant":"조화하는",
  "conjecture":"추측",
  "core region":"핵심 지역",
  "crop":"수확, 농작물",
  "dampness":"습기",
  "danger":"위험, 위험성",
  "dangerous":"위험한",
  "defenseless":"무방비의",
  "degraded":"품위가 떨어진",
  "detainee":"억류자",
  "dip":"움푹 꺼진 곳",
  "dissenter":"반대자",
  "dither":"망설이다",
  "duplicity":"이중성",
  "dwelling":"거주지, 주거",
  "enmity":"원한",
  "epochal":"획기적인(시대를 가르는)",
  "fastener":"잠금장치",
  "fling":"세게 던지다",
  "foyer":"현관 로비",
  "frenetic":"열광적인, 광란의",
  "future":"미래, 앞날",
  "get word from":"~에게서 소식을 듣다",
  "ghastly":"소름끼치는",
  "grazer":"방목 동물",
  "grotesque":"기괴한",
  "gruesome":"섬뜩한",
  "half":"절반",
  "half-globe":"반구",
  "hand-penned":"손으로 쓴",
  "hate offense":"증오 범죄",
  "have in common":"공통으로 가지다",
  "have no option but to":"~할 수밖에 없다 (선택의 여지 없이)",
  "healthfulness":"건강에 좋음",
  "hold on":"붙잡다, 기다리다",
  "hub":"중심지, 허브",
  "human race":"인류(전체)",
  "humbleness":"겸허",
  "incompletely":"불완전하게",
  "indignity":"모욕",
  "inflexible":"융통성 없는",
  "ingrained":"깊이 뿌리 박힌",
  "inheritor":"상속인, 계승자",
  "inhospitable":"불친절한",
  "innocuous":"해롭지 않은",
  "inoffensive":"불쾌하지 않은",
  "insincerity":"불성실",
  "interior":"내부, 내륙",
  "keep down":"억누르다",
  "keep hold of":"~을 잡고 놓지 않다",
  "landmark":"기념비적인",
  "lie dormant":"휴면 상태에 있다",
  "loathsome":"역겨운",
  "lob":"높이 던지다",
  "longhand":"필기체",
  "love":"사랑",
  "low-pitched":"저음의",
  "luxury":"호화스러운",
  "main office":"본사, 본부",
  "mankind":"인류",
  "manslaughter":"과실치사",
  "meek":"순한, 온순한",
  "meekness":"유순함",
  "midway":"중간에",
  "mix with":"~와 어울리다",
  "modesty":"겸허, 소박함",
  "moisture":"수분",
  "mound":"둔덕",
  "mugginess":"무더움",
  "muggy":"무더운",
  "nightmarish":"악몽 같은",
  "objector":"이의를 제기하는 사람",
  "obsess":"사로잡다, 강박적으로 생각하다",
  "odious":"불쾌하고 미운",
  "overwinter":"겨울을 나다",
  "pecking order":"서열",
  "peg":"못, 걸이",
  "perilous":"위태로운",
  "piercing":"찌르는 듯한",
  "plant-eater":"초식동물",
  "powerless":"무력한",
  "prejudice attack":"편견에 의한 공격",
  "profane":"세속적인",
  "ranking":"순위",
  "reaping":"수확",
  "receive news from":"~로부터 소식을 받다",
  "reheat":"다시 데우다",
  "resemble in":"~에서 닮다",
  "residential":"주거의",
  "resister":"저항하는 사람",
  "resume":"다시 시작하다",
  "ruminant":"반추동물",
  "satiety":"포만감",
  "scorch":"그슬리다, 태우다",
  "shrill":"귀가 찢어지는 듯한",
  "sincerity":"진심",
  "sleep":"잠들다",
  "socialize with":"~와 사교하다",
  "soften":"부드럽게 하다",
  "softness":"부드러움",
  "spend time with":"~와 시간을 보내다",
  "spotlight":"주목하다",
  "squeaky":"삐걱거리는",
  "stature":"키, 신장",
  "steamy":"후텁지근한",
  "stiffen":"뻣뻣하게 하다",
  "terrifying":"공포스러운",
  "theorize":"이론을 세우다",
  "theory":"이론",
  "touching":"감동적인",
  "toughen":"질기게 하다",
  "toughness":"강인함, 질김",
  "toxic":"유독한",
  "tradition":"전통",
  "two-faced":"이중적인",
  "unalterable":"바꿀 수 없는",
  "unassuming":"겸손한",
  "uplifting":"기분을 북돋우는",
  "upscale":"상류층 대상의",
  "vertical":"수직의",
  "wait":"기다리다",
  "welcoming":"환영하는",
  "zone":"지역, 구역"
});
