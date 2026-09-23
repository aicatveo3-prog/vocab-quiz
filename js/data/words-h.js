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
  { word:"harbor", pron:"하버", pos:"v", level:"B2", meanings:["품다","숨겨 주다"],
    syn:["shelter","conceal","nurture"],
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
    ex:[{ s:"The two departments maintained a {{}} working relationship.", f:"harmonious", ko:"두 부서는 조화로운 업무 관계를 유지했다." }] }
];

/* 유의어 뜻 사전 병합 */
Object.assign(window.GLOSS, {
  "artisanship":"장인 기술",
  "balanced":"균형 잡힌",
  "benign":"무해한, 양성의",
  "built-in":"내장된",
  "concordant":"조화하는",
  "dwelling":"거주지, 주거",
  "foyer":"현관 로비",
  "hand-penned":"손으로 쓴",
  "hold on":"붙잡다, 기다리다",
  "incompletely":"불완전하게",
  "inflexible":"융통성 없는",
  "ingrained":"깊이 뿌리 박힌",
  "innocuous":"해롭지 않은",
  "inoffensive":"불쾌하지 않은",
  "longhand":"필기체",
  "midway":"중간에",
  "mix with":"~와 어울리다",
  "resume":"다시 시작하다",
  "salute":"경의를 표하다",
  "socialize with":"~와 사교하다",
  "soften":"부드럽게 하다",
  "softness":"부드러움",
  "spend time with":"~와 시간을 보내다",
  "stiffen":"뻣뻣하게 하다",
  "toughen":"질기게 하다",
  "toughness":"강인함, 질김",
  "unalterable":"바꿀 수 없는",
  "wait":"기다리다"
});
