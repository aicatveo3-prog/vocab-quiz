/**
 * 단어 데이터 — 수능 보카 D 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *
 * ⚠️ COL_POOLS 와 GLOSS 는 words.js 가 이미 만들어 둔 객체다.
 *    여기서 window.GLOSS = {...} 로 재대입하면 A·B·C 세트의 것이 통째로
 *    사라진다. 반드시 이 파일 맨 아래처럼 Object.assign 으로 병합할 것.
 *
 * ── 이 세트를 쓰면서 지키는 규약 ────────────────
 *
 * meanings — 대표 2개까지만.
 *   4지선다 선택지와 짝 맞추기 카드에 그대로 찍히는 문자열이다. 원본 단어장이
 *   뜻을 네 묶음 나열해도 두 개로 줄인다. 첫 뜻에는 괄호 설명을 넣지 않는다 —
 *   카드에서 가장 크게 보이는 자리다. (C 세트와 같은 방침)
 *
 * ex.f — 반드시 '규칙 변화'만 쓴다.  ★ 가장 중요한 함정
 *   문장 빈칸은 오답 보기를 정답과 같은 어형으로 바꿔서 낸다. 그런데 변환 규칙은
 *   원형 / +s·es / +d·ed / +ing / y→ied / e탈락+ing 뿐이다(quizgen.js
 *   detectInflection). 불규칙이면 변환을 포기하고 오답을 원형으로 남기므로
 *
 *       They had to ___ the project.
 *       보기: drew / consume / abandon / reduce      ← 하나만 과거형
 *
 *   뜻을 몰라도 정답이 보이는 문제가 된다. dig·draw·deal with·dwell on 처럼
 *   불규칙 변화를 하는 단어는 예문을 원형이나 -ing 으로 쓴다 (dug ✗ → dig ✓).
 *   tools/words-d-audit.js 가 이 조건을 기계로 검사한다.
 *
 * syn — 문맥에서 실제로 바꿔 쓸 수 있는 말 3개.
 *   뜻이 비슷한 것은 당연하다(유의어니까). 다만 GLOSS에 적는 뜻은 단어마다
 *   자기 뜻을 적는다. 세 개에 똑같은 문자열을 넣으면 피드백 세 줄이 같아지고,
 *   서로 다른 단어를 같은 말이라고 가르치게 된다.
 *   좋은 유의어 3개를 못 만들겠으면 syn 을 비워 둔다. 억지로 채우지 않는다
 *   (deaf·decade·decaffeinate 가 그런 경우다). 그 단어는 '아닌 것 고르기'에만
 *   안 나오고 나머지 모드는 정상으로 출제된다.
 *
 *   ★ 유의어를 고른 뒤 반드시 렌더 미리보기로 확인할 것.
 *     그 유의어가 이미 GLOSS에 있으면 '거기 적힌 뜻'이 화면에 뜬다. 품사나
 *     뜻갈래가 이 문맥과 어긋나면 엉뚱한 설명이 붙는다. 기계 검사는 통과한다.
 *       decadence 의 유의어 decline → "감소하다; 거절하다"(동사)  ✗ → immorality
 *       deduce    의 유의어 reason  → "이유; 이성"(명사)          ✗ → work out
 *     node tools/pron-render-check.js --word <표제어> 로 확인한다.
 *
 * ant — 진짜 반대말만. 느슨한 연관어는 넣지 않는다.
 *   '아닌 것 고르기'의 정답(바꿔 쓸 수 없는 것)으로 쓰이므로, 애매하면
 *   문제가 논쟁거리가 된다.
 *
 * pos·level — 오답 후보는 '같은 품사 · 레벨 ±1'로 걸러진다.
 *   한쪽에 몰아 배정하면 후보가 3개 미만이 되어 그 단어가 조용히 출제에서
 *   빠진다. 에러도 안 난다. audit 의 출제 시뮬레이션이 이걸 잡는다.
 *
 * pron — 한글 발음. 표기 규칙은 js/data/pron.js 헤더에 정리돼 있다.
 *   표제어가 pron 을 가지면 PRON 사전의 같은 항목은 군더더기가 되므로
 *   반드시 지운다 (tools/pron-audit.js 가 중복을 오류로 잡는다).
 *
 * ── 원본 목록에서 바로잡은 것 ─────────────────
 *   domesticate  '인식할 수 있는' → 길들이다        (recognizable 의 뜻이 섞였다)
 *   dumbfounded  '불균형; 차이'   → 말문이 막힌      (disparity 의 뜻)
 *   distasteful  '헤아릴 수 없는' → 불쾌한          (immeasurable 의 뜻)
 *   dreary       '지저분한'       → 음울한          (dingy 의 뜻)
 *   doctrine     교리를 앞으로,  detoxification 해독을 앞으로,
 *   deprivation  '파면' 제거,    drive off 쫓아버리다를 앞으로
 *   derive a from b 소문자로 (ascribe a to b 선례),  do-it-yourself 괄호 약어 제거
 *
 * ── 작업 현황 — 완료 ──────────────────────────
 * 333단어 전량 (damp ~ dynasty) — 17챕터. 9차에 나눠 작성했다.
 *   1차  30개  damp ~ deck              (배선·검사도구·규약 포함)
 *   2차  38개  declare ~ deliver
 *   3차  38개  delude ~ derived from
 *   4차  38개  desalinate ~ deviate
 *   5차  38개  device ~ direction
 *   6차  38개  directory ~ dismal
 *   7차  38개  dismay ~ disturbance
 *   8차  38개  ditch ~ downplay
 *   9차  37개  downpour ~ dynasty
 *
 * 데이터 밀도 — syn 3개 이상 95% / 예문 95% / 반의어 51% / 발음 100%
 * syn 을 비운 17개는 바꿔 쓸 낱말이 없는 기술 용어·합성어다. 억지로 채우면
 * 틀린 유의어를 가르치게 되므로 비웠고, 나머지 4개 모드는 정상 출제된다.
 *
 * 단어를 더 넣을 때 확인 방법:
 *   node tools/words-d-audit.js           검사 6종 + 출제 시뮬레이션
 *   node tools/words-d-audit.js --rules   검사별 수행 건수
 *   node tools/pron-audit.js              발음 커버리지
 *   node tools/pron-render-check.js --all 전수 점검
 *   node tools/pron-render-check.js --word <표제어>  유의어 문맥 확인
 *   node tools/d-impact.js                기존 세트 영향 측정
 */
window.VOCAB_D = [
  /* ── dam ───────────────────────────────────── */
  { word:"damp", pron:"댐프", pos:"adj", level:"B2", meanings:["축축한","습한"],
    syn:["moist","humid","clammy"], ant:["dry"],
    ex:[{ s:"The basement walls still felt {{}} a week after the flood.", f:"damp", ko:"홍수가 난 지 일주일이 지나도 지하실 벽은 여전히 축축했다." }] },

  { word:"dampen", pron:"댐펀", pos:"v", level:"C1", meanings:["약화시키다","적시다"],
    syn:["subdue","lessen","moisten"], ant:["intensify"],
    ex:[{ s:"Not even the rain could {{}} the crowd's excitement.", f:"dampen", ko:"비조차 군중의 흥분을 가라앉히지 못했다." }] },

  { word:"dangle", pron:"댕글", pos:"v", level:"B2", meanings:["매달리다","달랑거리다"],
    syn:["hang","suspend","swing"], ant:["secure"],
    ex:[{ s:"A set of keys {{}} from a hook beside the door.", f:"dangled", ko:"열쇠 한 묶음이 문 옆 고리에 매달려 있었다." }] },

  { word:"dare", pron:"데어", pos:"v", level:"B1", meanings:["감히 ~하다","무릅쓰다"],
    syn:["venture","risk","brave"], ant:["hesitate"],
    ex:[{ s:"Few employees would {{}} to question the director openly.", f:"dare", ko:"공개적으로 이사에게 감히 의문을 제기할 직원은 거의 없었다." }] },

  { word:"darken", pron:"다컨", pos:"v", level:"B2", meanings:["어둡게 하다","어두워지다"],
    /* ★ syn 의 "shade" 를 "cast a shadow on" 으로 바꿨다. shade 는 S 세트에서
       명사 '그늘, 빛 가리개' 로 선다 — 동사 자리에 명사가 들어가게 된다. */
    syn:["dim","cast a shadow on","blacken"], ant:["brighten"],
    ex:[{ s:"Storm clouds slowly {{}} the afternoon sky.", f:"darkened", ko:"폭풍 구름이 오후 하늘을 서서히 어둡게 했다." }] },

  { word:"date back to", pron:"데이트 백 투", pos:"phr", level:"B2", meanings:["~까지 거슬러 올라가다"],
    syn:["go back to","originate in","stem from"] },

  { word:"daunting", pron:"돈팅", pos:"adj", level:"C1", meanings:["벅찬","기가 죽게 하는"],
    syn:["intimidating","formidable","overwhelming"], ant:["reassuring"],
    ex:[{ s:"Rebuilding the whole system in a month was a {{}} task.", f:"daunting", ko:"한 달 안에 시스템 전체를 다시 만드는 것은 벅찬 과제였다." }] },

  { word:"dawn", pron:"돈", pos:"n", level:"B2", meanings:["새벽","시작"],
    syn:["daybreak","sunrise","outset"], ant:["dusk"],
    ex:[{ s:"The climbers set out at {{}} to reach the summit by noon.", f:"dawn", ko:"등반가들은 정오까지 정상에 오르려고 새벽에 출발했다." }] },

  /* ── dea ───────────────────────────────────── */
  { word:"deadline", pron:"데드라인", pos:"n", level:"B1", meanings:["기한","마감"],
    syn:["due date","time limit","cutoff"],
    ex:[{ s:"The team missed the {{}} for the final report by two days.", f:"deadline", ko:"팀은 최종 보고서 기한을 이틀 넘겼다." }] },

  { word:"deadly", pron:"데들리", pos:"adj", level:"B2", meanings:["치명적인","죽음을 초래하는"],
    syn:["fatal","lethal","mortal"], ant:["harmless"],
    ex:[{ s:"The venom of this snake is {{}} unless treated within hours.", f:"deadly", ko:"이 뱀의 독은 몇 시간 안에 치료하지 않으면 치명적이다." }] },

  /* deaf — 바꿔 쓸 수 있는 말 3개를 억지로 만들지 않고 비워 둔다 */
  { word:"deaf", pron:"데프", pos:"adj", level:"B1", meanings:["청각 장애가 있는","귀가 들리지 않는"],
    ex:[{ s:"The school has special programs for {{}} students.", f:"deaf", ko:"그 학교에는 청각 장애 학생을 위한 특별 과정이 있다." }] },

  { word:"deafen", pron:"데펀", pos:"v", level:"C1", meanings:["귀를 먹먹하게 하다","들리지 않게 하다"],
    syn:["drown out","muffle","stun"],
    ex:[{ s:"The roar of the engines seemed to {{}} everyone on the platform.", f:"deafen", ko:"엔진의 굉음이 플랫폼에 있던 모두의 귀를 먹먹하게 하는 듯했다." }] },

  { word:"deal in", pron:"딜 인", pos:"phr", level:"B2", meanings:["거래하다","취급하다"],
    /* ★ syn 의 "stock" 을 "keep goods for sale" 로 바꿨다. stock 이 S 세트에서
       명사 '재고, 주식' 으로 선다 — 동사 뜻을 늘어놓은 이 자리에 명사가 끼게 된다. */
    syn:["trade in","handle","keep goods for sale"] },

  { word:"deal with", pron:"딜 위드", pos:"phr", level:"B1", meanings:["처리하다","다루다"],
    syn:["handle","address","tackle"], ant:["ignore"] },

  /* 유의어 둘을 바꿨다. principal 이 P 세트 챕터 14 표제어(주요한, 으뜸의 · adj)로
     올라가면서 이 자리에 형용사 뜻이 떠 버린다 — '학장' 의 유의어로는 말이 안 된다.
     사전의 principal 값도 '주요한; 교장' 으로 품사가 섞여 있어 이미 어정쩡했다.
     head 도 사전값이 '이끌다; 머리' 여서 학장의 유의어로는 어긋나 있었다
     (lead·be in charge of 쪽에는 맞는 값이라 사전은 그대로 두었다). */
  { word:"dean", pron:"딘", pos:"n", level:"C1", meanings:["학장","학과장"],
    syn:["head of a college","one leading a faculty","chair"],
    ex:[{ s:"The {{}} announced sweeping changes to the curriculum.", f:"dean", ko:"학장이 교육과정의 대폭적인 변경을 발표했다." }] },

  { word:"debate", pron:"디베이트", pos:"n", level:"B1", meanings:["토론","논쟁"],
    syn:["discussion","argument","dispute"], ant:["agreement"],
    ex:[{ s:"The proposed bill sparked fierce {{}} in parliament.", f:"debate", ko:"발의된 법안은 의회에서 격렬한 논쟁을 불러일으켰다." }] },

  { word:"debris", pron:"더브리", pos:"n", level:"C1", meanings:["잔해","파편"],
    syn:["wreckage","rubble","remains"],
    ex:[{ s:"Rescue teams searched the {{}} for survivors all night.", f:"debris", ko:"구조대는 밤새 잔해를 뒤져 생존자를 찾았다." }] },

  { word:"debt", pron:"데트", pos:"n", level:"B1", meanings:["빚","부채"],
    syn:["liability","obligation","arrears"], ant:["asset"],
    ex:[{ s:"The company took years to pay off its remaining {{}}.", f:"debt", ko:"그 회사는 남은 부채를 갚는 데 여러 해가 걸렸다." }] },

  /* ── dec ───────────────────────────────────── */
  /* decade — 바꿔 쓸 수 있는 낱말이 사실상 없어 syn 을 비워 둔다 */
  { word:"decade", pron:"데케이드", pos:"n", level:"B1", meanings:["10년"],
    ex:[{ s:"The neighborhood has changed enormously over the past {{}}.", f:"decade", ko:"그 동네는 지난 10년간 엄청나게 변했다." }] },

  { word:"decadence", pron:"데커던스", pos:"n", level:"C2", meanings:["타락","퇴폐"],
    /* decline 은 GLOSS 뜻이 "감소하다; 거절하다"(동사)로 떠서 명사 '타락'과
       어긋난다. 명사로 분명한 immorality 로 바꿨다. */
    syn:["corruption","degeneracy","immorality"], ant:["virtue"],
    ex:[{ s:"The novel portrays the {{}} of a fading empire.", f:"decadence", ko:"그 소설은 쇠락하는 제국의 타락을 그린다." }] },

  /* decaffeinate — 대체할 낱말이 없어 syn 을 비워 둔다 */
  { word:"decaffeinate", pron:"디캐퍼네이트", pos:"v", level:"C2", meanings:["카페인을 제거하다"],
    ex:[{ s:"Producers {{}} the beans before roasting them.", f:"decaffeinate", ko:"생산자들은 볶기 전에 원두에서 카페인을 제거한다." }] },

  { word:"decay", pron:"디케이", pos:"v", level:"B2", meanings:["썩다","쇠퇴하다"],
    syn:["rot","decompose","deteriorate"], ant:["flourish"],
    ex:[{ s:"Sugar left on the teeth makes them {{}} far more quickly.", f:"decay", ko:"치아에 남은 설탕은 치아를 훨씬 빨리 썩게 한다." }] },

  { word:"deceit", pron:"디시트", pos:"n", level:"C1", meanings:["속임수","기만"],
    syn:["deception","fraud","trickery"], ant:["honesty"],
    ex:[{ s:"The whole scheme rested on {{}} from the very beginning.", f:"deceit", ko:"그 계획 전체가 처음부터 속임수에 기대고 있었다." }] },

  { word:"deceive", pron:"디시브", pos:"v", level:"B2", meanings:["속이다","기만하다"],
    syn:["mislead","delude","trick"], ant:["enlighten"],
    ex:[{ s:"He {{}} the investors with figures he had invented himself.", f:"deceived", ko:"그는 자신이 만들어낸 수치로 투자자들을 속였다." }] },

  { word:"decent", pron:"디선트", pos:"adj", level:"B2", meanings:["예의 바른","괜찮은"],
    syn:["respectable","proper","satisfactory"], ant:["indecent"],
    ex:[{ s:"She earns a {{}} living translating technical manuals.", f:"decent", ko:"그녀는 기술 설명서를 번역하며 괜찮은 생활을 한다." }] },

  { word:"decentralization", pron:"디센트럴라이제이션", pos:"n", level:"C2", meanings:["분권화","분산"],
    syn:["devolution","dispersal","delegation"], ant:["centralization"],
    ex:[{ s:"The reform aimed at the {{}} of decision-making power.", f:"decentralization", ko:"그 개혁은 의사결정 권한의 분권화를 목표로 했다." }] },

  { word:"deceptive", pron:"디셉티브", pos:"adj", level:"C1", meanings:["기만적인","오해를 일으키는"],
    syn:["misleading","deceitful","false"], ant:["genuine"],
    ex:[{ s:"The calm surface of the river proved highly {{}}.", f:"deceptive", ko:"그 강의 고요한 표면은 사람을 크게 속이는 것이었다." }] },

  { word:"decipher", pron:"디사이퍼", pos:"v", level:"C1", meanings:["해독하다","판독하다"],
    syn:["decode","interpret","unravel"], ant:["encode"],
    ex:[{ s:"Scholars worked for decades to {{}} the ancient script.", f:"decipher", ko:"학자들은 그 고대 문자를 해독하려고 수십 년간 애썼다." }] },

  { word:"decisive", pron:"디사이시브", pos:"adj", level:"B2", meanings:["결정적인","단호한"],
    syn:["conclusive","crucial","resolute"], ant:["indecisive"],
    ex:[{ s:"Her testimony turned out to be {{}} in the trial.", f:"decisive", ko:"그녀의 증언은 재판에서 결정적인 것으로 드러났다." }] },

  { word:"deck", pron:"덱", pos:"n", level:"B2", meanings:["갑판","바닥"],
    syn:["platform","floor","surface"],
    ex:[{ s:"Passengers gathered on the upper {{}} to watch the harbor.", f:"deck", ko:"승객들이 항구를 보려고 상층 갑판에 모였다." }] },

  { word:"declare", pron:"디클레어", pos:"v", level:"B2", meanings:["선언하다","공표하다"],
    syn:["announce","proclaim","assert"], ant:["deny"],
    ex:[{ s:"The government is expected to {{}} a state of emergency tonight.", f:"declare", ko:"정부가 오늘 밤 비상사태를 선포할 것으로 보인다." }] },

  { word:"decline", pron:"디클라인", pos:"v", level:"B2", meanings:["감소하다","거절하다"],
    syn:["decrease","diminish","refuse"], ant:["increase"],
    ex:[{ s:"Sales began to {{}} sharply after the product recall.", f:"decline", ko:"제품 회수 이후 매출이 급격히 감소하기 시작했다." }] },

  { word:"decompose", pron:"디컴포즈", pos:"v", level:"C1", meanings:["분해되다","부패하다"],
    syn:["rot","decay","break down"], ant:["preserve"],
    ex:[{ s:"Fallen leaves {{}} much faster in warm, wet soil.", f:"decompose", ko:"낙엽은 따뜻하고 습한 흙에서 훨씬 빨리 분해된다." }] },

  { word:"decoration", pron:"데커레이션", pos:"n", level:"B1", meanings:["장식","장식품"],
    syn:["ornament","adornment","trimming"],
    ex:[{ s:"The hall was covered in {{}} for the graduation ceremony.", f:"decorations", ko:"강당은 졸업식을 위해 장식으로 덮여 있었다." }] },

  { word:"decrease", pron:"디크리스", pos:"v", level:"B1", meanings:["줄다","감소시키다"],
    syn:["diminish","lessen","dwindle"], ant:["increase"],
    ex:[{ s:"Fuel consumption will {{}} noticeably if you drive more slowly.", f:"decrease", ko:"더 천천히 운전하면 연료 소비가 뚜렷하게 줄어든다." }] },

  { word:"decree", pron:"디크리", pos:"n", level:"C2", meanings:["법령","판결"],
    syn:["edict","ordinance","ruling"],
    ex:[{ s:"The king issued a {{}} banning all public gatherings.", f:"decree", ko:"왕은 모든 공개 집회를 금지하는 법령을 내렸다." }] },

  { word:"deduce", pron:"디두스", pos:"v", level:"C1", meanings:["추론하다","연역하다"],
    /* reason 은 GLOSS 뜻이 "이유; 이성"(명사)으로 떠서 '추론하다'와 어긋난다 */
    syn:["infer","conclude","work out"], ant:["guess"],
    ex:[{ s:"From the footprints we can {{}} that two people passed by.", f:"deduce", ko:"발자국으로 두 사람이 지나갔다고 추론할 수 있다." }] },

  { word:"deduct", pron:"디덕트", pos:"v", level:"C1", meanings:["공제하다","차감하다"],
    syn:["subtract","withhold","take off"], ant:["add"],
    ex:[{ s:"The company will {{}} income tax from your monthly pay.", f:"deduct", ko:"회사가 월급에서 소득세를 공제할 것이다." }] },

  { word:"deed", pron:"디드", pos:"n", level:"B2", meanings:["행위","행동"],
    syn:["act","action","feat"],
    ex:[{ s:"She was honored for a single brave {{}} that saved two lives.", f:"deed", ko:"그녀는 두 생명을 구한 한 번의 용감한 행동으로 표창받았다." }] },

  { word:"deface", pron:"디페이스", pos:"v", level:"C2", meanings:["훼손하다","외관을 망치다"],
    syn:["vandalize","mar","disfigure"], ant:["restore"],
    ex:[{ s:"Someone tried to {{}} the monument with spray paint.", f:"deface", ko:"누군가 스프레이 페인트로 그 기념비를 훼손하려 했다." }] },

  { word:"defect", pron:"디펙트", pos:"n", level:"B2", meanings:["결함","흠"],
    syn:["flaw","fault","imperfection"], ant:["perfection"],
    ex:[{ s:"The engine had a serious {{}} that forced a nationwide recall.", f:"defect", ko:"그 엔진에는 전국적 회수를 부른 심각한 결함이 있었다." }] },

  { word:"defend", pron:"디펜드", pos:"v", level:"B1", meanings:["방어하다","변호하다"],
    /* ★ syn 의 "shield" 를 "ward off" 로 바꿨다. shield 는 S 세트에서 사전
       첫 갈래인 '보호하다' 로 서는데, 그러면 같은 목록의 protect(보호하다) 와
       설명이 똑같아진다. 더 흔한 protect 를 남기는 쪽을 골랐다. */
    syn:["protect","guard","ward off"], ant:["attack"],
    ex:[{ s:"They built thick walls to {{}} the city from invaders.", f:"defend", ko:"그들은 침략자로부터 도시를 방어하려고 두꺼운 성벽을 쌓았다." }] },

  { word:"defer", pron:"디퍼", pos:"v", level:"C1", meanings:["미루다","연기하다"],
    syn:["postpone","put off","shelve"], ant:["hasten"],
    ex:[{ s:"The board voted to {{}} the decision until March.", f:"defer", ko:"이사회는 그 결정을 3월까지 미루기로 표결했다." }] },

  { word:"deficiency", pron:"디피션시", pos:"n", level:"C1", meanings:["결핍","부족"],
    syn:["shortage","lack","insufficiency"], ant:["abundance"],
    ex:[{ s:"A vitamin D {{}} can gradually weaken the bones.", f:"deficiency", ko:"비타민 D 결핍은 뼈를 서서히 약하게 할 수 있다." }] },

  { word:"deficient", pron:"디피션트", pos:"adj", level:"C1", meanings:["부족한","결핍된"],
    syn:["lacking","inadequate","insufficient"], ant:["sufficient"],
    ex:[{ s:"The soil in this valley is {{}} in nitrogen.", f:"deficient", ko:"이 골짜기의 흙은 질소가 부족하다." }] },

  { word:"deficit", pron:"데퍼싯", pos:"n", level:"C1", meanings:["적자","부족액"],
    syn:["shortfall","gap","arrears"], ant:["surplus"],
    ex:[{ s:"The city is struggling with a growing budget {{}}.", f:"deficit", ko:"그 도시는 늘어나는 예산 적자와 씨름하고 있다." }] },

  { word:"define", pron:"디파인", pos:"v", level:"B1", meanings:["정의하다","규정하다"],
    syn:["specify","clarify","characterize"],
    ex:[{ s:"It is surprisingly hard to {{}} happiness in one sentence.", f:"define", ko:"행복을 한 문장으로 정의하기는 놀랄 만큼 어렵다." }] },

  { word:"definite", pron:"데퍼닛", pos:"adj", level:"B2", meanings:["확실한","명확한"],
    syn:["certain","clear","specific"], ant:["vague"],
    ex:[{ s:"We need a {{}} answer from the supplier before Friday.", f:"definite", ko:"금요일 전에 공급업체로부터 확실한 답을 받아야 한다." }] },

  { word:"definitive", pron:"디피니티브", pos:"adj", level:"C2", meanings:["최종적인","확정적인"],
    syn:["conclusive","final","authoritative"], ant:["tentative"],
    ex:[{ s:"Researchers still lack a {{}} answer to that question.", f:"definitive", ko:"연구자들은 아직 그 질문에 대한 최종적인 답이 없다." }] },

  { word:"deforestation", pron:"디포리스테이션", pos:"n", level:"C1", meanings:["삼림 벌채","산림 파괴"],
    syn:["logging","clearing","tree felling"], ant:["reforestation"],
    ex:[{ s:"Rapid {{}} has driven many species out of the region.", f:"deforestation", ko:"급격한 삼림 벌채가 많은 종을 그 지역에서 내몰았다." }] },

  { word:"deform", pron:"디폼", pos:"v", level:"C1", meanings:["변형시키다","기형으로 만들다"],
    syn:["distort","warp","misshape"], ant:["straighten"],
    ex:[{ s:"Extreme heat can {{}} the metal frame within minutes.", f:"deform", ko:"극심한 열은 몇 분 안에 금속 틀을 변형시킬 수 있다." }] },

  { word:"defy", pron:"디파이", pos:"v", level:"C1", meanings:["거역하다","무시하다"],
    syn:["disobey","resist","flout"], ant:["obey"],
    ex:[{ s:"A few students chose to {{}} the new rule openly.", f:"defy", ko:"몇몇 학생이 새 규칙에 공개적으로 반항하기로 했다." }] },

  { word:"degenerate", pron:"디제너레이트", pos:"v", level:"C2", meanings:["퇴보하다","변질되다"],
    syn:["deteriorate","worsen","regress"], ant:["improve"],
    ex:[{ s:"The debate began to {{}} into personal attacks.", f:"degenerate", ko:"토론이 개인 공격으로 변질되기 시작했다." }] },

  { word:"degradation", pron:"데그러데이션", pos:"n", level:"C2", meanings:["저하","악화"],
    syn:["deterioration","debasement","decay"], ant:["improvement"],
    ex:[{ s:"Soil {{}} now threatens food production worldwide.", f:"degradation", ko:"토양 악화가 이제 전 세계 식량 생산을 위협한다." }] },

  { word:"degrade", pron:"디그레이드", pos:"v", level:"C1", meanings:["저하시키다","비하하다"],
    syn:["demean","impair","cheapen"], ant:["enhance"],
    ex:[{ s:"Constant criticism can {{}} a person's confidence.", f:"degrade", ko:"끊임없는 비판은 사람의 자신감을 떨어뜨릴 수 있다." }] },

  { word:"degree", pron:"디그리", pos:"n", level:"B1", meanings:["정도","학위"],
    syn:["extent","level","grade"],
    ex:[{ s:"The two cases differ in {{}} rather than in kind.", f:"degree", ko:"그 두 사례는 종류보다는 정도에서 다르다." }] },

  { word:"dehydrate", pron:"디하이드레이트", pos:"v", level:"C1", meanings:["탈수시키다","건조시키다"],
    syn:["dry out","desiccate","parch"], ant:["hydrate"],
    ex:[{ s:"Long hikes in the heat can quickly {{}} the body.", f:"dehydrate", ko:"더위 속 긴 산행은 몸을 빠르게 탈수시킬 수 있다." }] },

  { word:"delay", pron:"딜레이", pos:"n", level:"B1", meanings:["지연","연기"],
    syn:["postponement","holdup","lag"], ant:["acceleration"],
    ex:[{ s:"A two-hour {{}} left passengers stranded at the gate.", f:"delay", ko:"두 시간의 지연으로 승객들이 게이트에 발이 묶였다." }] },

  { word:"delegate", pron:"델리깃", pos:"n", level:"C1", meanings:["대표","대리인"],
    syn:["representative","envoy","deputy"],
    ex:[{ s:"Each member country sent one {{}} to the conference.", f:"delegate", ko:"각 회원국이 회의에 대표 한 명을 보냈다." }] },

  { word:"delegation", pron:"델리게이션", pos:"n", level:"C1", meanings:["대표단","위임"],
    syn:["deputation","mission","commission"],
    ex:[{ s:"A trade {{}} arrived from Brazil early last week.", f:"delegation", ko:"지난주 초 브라질에서 무역 대표단이 도착했다." }] },

  { word:"delete", pron:"딜리트", pos:"v", level:"B1", meanings:["삭제하다","지우다"],
    syn:["erase","remove","cancel"], ant:["insert"],
    ex:[{ s:"Please {{}} the old log files before the backup runs.", f:"delete", ko:"백업이 실행되기 전에 옛 기록 파일을 삭제해 주세요." }] },

  { word:"deliberate", pron:"딜리버릿", pos:"adj", level:"C1", meanings:["고의적인","의도적인"],
    syn:["intentional","calculated","premeditated"], ant:["accidental"],
    ex:[{ s:"The damage looked {{}} rather than careless.", f:"deliberate", ko:"그 손상은 부주의보다는 고의적으로 보였다." }] },

  { word:"deliberately", pron:"딜리버릿리", pos:"adv", level:"C1", meanings:["고의로","의도적으로"],
    syn:["intentionally","purposely","knowingly"], ant:["accidentally"],
    ex:[{ s:"He {{}} left the back door unlocked for her.", f:"deliberately", ko:"그는 그녀를 위해 뒷문을 고의로 잠그지 않았다." }] },

  { word:"delicate", pron:"델리킷", pos:"adj", level:"B2", meanings:["섬세한","연약한"],
    syn:["fragile","subtle","dainty"], ant:["sturdy"],
    ex:[{ s:"The lace was far too {{}} to wash by machine.", f:"delicate", ko:"그 레이스는 세탁기로 빨기엔 너무나 섬세했다." }] },

  { word:"delighted", pron:"딜라이티드", pos:"adj", level:"B1", meanings:["아주 기뻐하는","기쁜"],
    syn:["thrilled","pleased","overjoyed"], ant:["disappointed"],
    ex:[{ s:"She was {{}} to hear that her application had passed.", f:"delighted", ko:"그녀는 지원이 통과했다는 소식에 아주 기뻐했다." }] },

  { word:"delightful", pron:"딜라이트풀", pos:"adj", level:"B2", meanings:["유쾌한","즐거운"],
    syn:["charming","pleasant","enjoyable"], ant:["unpleasant"],
    ex:[{ s:"We spent a {{}} afternoon by the lake with old friends.", f:"delightful", ko:"우리는 오랜 친구들과 호숫가에서 즐거운 오후를 보냈다." }] },

  { word:"delirious", pron:"딜리리어스", pos:"adj", level:"C2", meanings:["정신이 혼미한","광란의"],
    syn:["incoherent","raving","frenzied"], ant:["lucid"],
    ex:[{ s:"The fever left him {{}} for two whole days.", f:"delirious", ko:"열 때문에 그는 이틀 내내 정신이 혼미했다." }] },

  { word:"deliver", pron:"딜리버", pos:"v", level:"B1", meanings:["배달하다","전달하다"],
    syn:["hand over","convey","distribute"], ant:["withhold"],
    ex:[{ s:"The courier promised to {{}} the package before noon.", f:"deliver", ko:"택배 기사가 정오 전에 소포를 배달하겠다고 했다." }] },

  { word:"delude", pron:"딜루드", pos:"v", level:"C1", meanings:["착각하게 하다","속이다"],
    syn:["mislead","deceive","fool"], ant:["enlighten"],
    ex:[{ s:"Do not {{}} yourself into thinking the problem has gone away.", f:"delude", ko:"문제가 사라졌다고 스스로를 속이지 마라." }] },

  { word:"delusion", pron:"딜루전", pos:"n", level:"C1", meanings:["망상","착각"],
    syn:["illusion","fallacy","misconception"], ant:["reality"],
    ex:[{ s:"He clung to the {{}} that the company was still profitable.", f:"delusion", ko:"그는 회사가 여전히 수익을 낸다는 착각에 매달렸다." }] },

  { word:"deluge", pron:"델류지", pos:"n", level:"C2", meanings:["대홍수","쇄도"],
    syn:["flood","torrent","onslaught"], ant:["drought"],
    ex:[{ s:"The office received a {{}} of complaints after the outage.", f:"deluge", ko:"정전 이후 사무실에 불만이 쇄도했다." }] },

  { word:"demand", pron:"디맨드", pos:"v", level:"B1", meanings:["요구하다","필요로 하다"],
    syn:["require","insist on","call for"], ant:["offer"],
    ex:[{ s:"The workers {{}} safer conditions and shorter hours.", f:"demand", ko:"노동자들은 더 안전한 환경과 더 짧은 노동 시간을 요구한다." }] },

  { word:"demanding", pron:"디맨딩", pos:"adj", level:"B2", meanings:["힘든","까다로운"],
    syn:["taxing","exacting","strenuous"], ant:["effortless"],
    ex:[{ s:"Nursing is a physically {{}} profession.", f:"demanding", ko:"간호는 육체적으로 힘든 직업이다." }] },

  { word:"demeanor", pron:"디미너", pos:"n", level:"C2", meanings:["태도","몸가짐"],
    syn:["manner","bearing","conduct"],
    ex:[{ s:"Her calm {{}} reassured everyone in the room.", f:"demeanor", ko:"그녀의 침착한 태도가 방 안의 모두를 안심시켰다." }] },

  { word:"democracy", pron:"디마크러시", pos:"n", level:"B2", meanings:["민주주의","민주 국가"],
    syn:["self-government","republic","popular rule"], ant:["tyranny"],
    ex:[{ s:"The country returned to {{}} after decades of military rule.", f:"democracy", ko:"그 나라는 수십 년의 군사 통치 끝에 민주주의로 돌아갔다." }] },

  /* demographics — 낱말로 바꿔 쓸 수 있는 유의어가 없어 syn 을 비워 둔다 */
  { word:"demographics", pron:"데머그래픽스", pos:"n", level:"C2", meanings:["인구 통계","인구 구성"],
    ex:[{ s:"The report analyzes the changing {{}} of rural areas.", f:"demographics", ko:"그 보고서는 농촌 지역의 변화하는 인구 구성을 분석한다." }] },

  { word:"demolish", pron:"디말리시", pos:"v", level:"B2", meanings:["철거하다","허물다"],
    syn:["raze","tear down","dismantle"], ant:["construct"],
    ex:[{ s:"The city plans to {{}} the old stadium next spring.", f:"demolish", ko:"시는 내년 봄에 옛 경기장을 철거할 계획이다." }] },

  { word:"demonstrate", pron:"데먼스트레이트", pos:"v", level:"B1", meanings:["입증하다","보여 주다"],
    syn:["prove","illustrate","exhibit"],
    ex:[{ s:"The study aims to {{}} a clear link between diet and sleep.", f:"demonstrate", ko:"그 연구는 식단과 수면 사이의 분명한 연관을 입증하려 한다." }] },

  { word:"demoralize", pron:"디모럴라이즈", pos:"v", level:"C2", meanings:["사기를 꺾다","의기소침하게 만들다"],
    syn:["dishearten","discourage","dispirit"], ant:["encourage"],
    ex:[{ s:"Repeated defeats began to {{}} the entire team.", f:"demoralize", ko:"반복된 패배가 팀 전체의 사기를 꺾기 시작했다." }] },

  { word:"denounce", pron:"디나운스", pos:"v", level:"C1", meanings:["비난하다","고발하다"],
    syn:["condemn","censure","decry"], ant:["praise"],
    ex:[{ s:"Several leaders publicly {{}} the new restrictions.", f:"denounced", ko:"여러 지도자가 새 규제를 공개적으로 비난했다." }] },

  { word:"dense", pron:"덴스", pos:"adj", level:"B2", meanings:["밀집한","짙은"],
    syn:["crowded","thick","compact"], ant:["sparse"],
    ex:[{ s:"The village sits in the middle of a {{}} forest.", f:"dense", ko:"그 마을은 우거진 숲 한가운데 있다." }] },

  { word:"density", pron:"덴서티", pos:"n", level:"C1", meanings:["밀도","농도"],
    syn:["concentration","thickness","compactness"],
    ex:[{ s:"Population {{}} in the capital has doubled since 1990.", f:"density", ko:"수도의 인구 밀도는 1990년 이후 두 배가 됐다." }] },

  { word:"deny", pron:"디나이", pos:"v", level:"B1", meanings:["부인하다","거부하다"],
    syn:["refute","contradict","reject"], ant:["admit"],
    ex:[{ s:"The minister continued to {{}} any knowledge of the deal.", f:"deny", ko:"장관은 그 거래를 전혀 몰랐다고 계속 부인했다." }] },

  { word:"depart", pron:"디파트", pos:"v", level:"B2", meanings:["출발하다","떠나다"],
    syn:["leave","set off","embark"], ant:["arrive"],
    ex:[{ s:"The last train will {{}} from platform three at midnight.", f:"depart", ko:"막차는 자정에 3번 플랫폼에서 출발한다." }] },

  { word:"department", pron:"디파트먼트", pos:"n", level:"B1", meanings:["부서","부문"],
    syn:["division","section","branch"],
    ex:[{ s:"She now heads the marketing {{}} of a large firm.", f:"department", ko:"그녀는 지금 대기업의 마케팅 부서를 이끈다." }] },

  { word:"depict", pron:"디픽트", pos:"v", level:"C1", meanings:["묘사하다","그려 내다"],
    syn:["portray","describe","represent"],
    ex:[{ s:"The mural {{}} scenes from the city's early history.", f:"depicts", ko:"그 벽화는 도시 초기 역사의 장면들을 묘사한다." }] },

  { word:"deplete", pron:"디플리트", pos:"v", level:"C1", meanings:["고갈시키다","소모시키다"],
    syn:["exhaust","use up","drain"], ant:["replenish"],
    ex:[{ s:"Overfishing can quickly {{}} local fish stocks.", f:"deplete", ko:"남획은 지역 어족 자원을 빠르게 고갈시킬 수 있다." }] },

  { word:"depletion", pron:"디플리션", pos:"n", level:"C1", meanings:["고갈","소모"],
    syn:["exhaustion","reduction","consumption"],
    ex:[{ s:"Rapid {{}} of groundwater has alarmed local farmers.", f:"depletion", ko:"지하수의 급격한 고갈이 지역 농민들을 불안하게 했다." }] },

  { word:"deplorable", pron:"디플로러블", pos:"adj", level:"C2", meanings:["개탄스러운","비참한"],
    syn:["appalling","disgraceful","lamentable"], ant:["admirable"],
    ex:[{ s:"The prison was kept in a {{}} state for years.", f:"deplorable", ko:"그 교도소는 여러 해 동안 개탄스러운 상태로 방치됐다." }] },

  { word:"deplore", pron:"디플로", pos:"v", level:"C2", meanings:["개탄하다","한탄하다"],
    syn:["lament","condemn","bemoan"], ant:["applaud"],
    ex:[{ s:"Many scholars {{}} the loss of the ancient archive.", f:"deplore", ko:"많은 학자가 그 고대 기록물의 소실을 개탄한다." }] },

  { word:"deploy", pron:"디플로이", pos:"v", level:"C1", meanings:["배치하다","전개하다"],
    syn:["station","put in place","mobilize"], ant:["withdraw"],
    ex:[{ s:"The agency will {{}} extra staff during the festival.", f:"deploy", ko:"그 기관은 축제 기간에 추가 인력을 배치할 것이다." }] },

  { word:"deport", pron:"디포트", pos:"v", level:"C1", meanings:["강제 추방하다","국외로 내보내다"],
    syn:["expel","banish","exile"], ant:["admit"],
    ex:[{ s:"The court ruled that the government could not {{}} him.", f:"deport", ko:"법원은 정부가 그를 추방할 수 없다고 판결했다." }] },

  { word:"depose", pron:"디포즈", pos:"v", level:"C2", meanings:["퇴위시키다","파면하다"],
    syn:["overthrow","oust","dethrone"], ant:["install"],
    ex:[{ s:"The generals moved to {{}} the president overnight.", f:"depose", ko:"장군들은 하룻밤에 대통령을 퇴위시키려 움직였다." }] },

  { word:"deposit", pron:"디파짓", pos:"n", level:"B2", meanings:["보증금","착수금"],
    syn:["down payment","advance","prepayment"],
    ex:[{ s:"Tenants must pay a one-month {{}} before moving in.", f:"deposit", ko:"세입자는 입주 전에 한 달치 보증금을 내야 한다." }] },

  { word:"depot", pron:"디포", pos:"n", level:"C2", meanings:["차고","창고"],
    syn:["warehouse","storehouse","terminal"],
    ex:[{ s:"Buses are serviced overnight at the central {{}}.", f:"depot", ko:"버스는 중앙 차고에서 밤새 정비된다." }] },

  { word:"depreciate", pron:"디프리시에이트", pos:"v", level:"C2", meanings:["가치가 떨어지다","가치를 떨어뜨리다"],
    syn:["devalue","lose value","mark down"], ant:["appreciate"],
    ex:[{ s:"New cars {{}} fastest during their first two years.", f:"depreciate", ko:"새 차는 처음 2년 동안 가치가 가장 빠르게 떨어진다." }] },

  { word:"depreciation", pron:"디프리시에이션", pos:"n", level:"C2", meanings:["가치 하락","감가상각"],
    syn:["devaluation","markdown","loss in value"],
    ex:[{ s:"The report includes {{}} of equipment over five years.", f:"depreciation", ko:"그 보고서는 5년간의 장비 감가상각을 포함한다." }] },

  { word:"depressed", pron:"디프레스트", pos:"adj", level:"B2", meanings:["우울한","침체된"],
    syn:["gloomy","despondent","dejected"], ant:["cheerful"],
    ex:[{ s:"He felt {{}} for weeks after losing the job.", f:"depressed", ko:"그는 일자리를 잃고 몇 주간 우울했다." }] },

  { word:"depression", pron:"디프레션", pos:"n", level:"B2", meanings:["우울증","경기 침체"],
    syn:["melancholy","slump","despondency"],
    ex:[{ s:"The country slid into a long economic {{}}.", f:"depression", ko:"그 나라는 오랜 경기 침체에 빠졌다." }] },

  { word:"deprivation", pron:"데프리베이션", pos:"n", level:"C2", meanings:["박탈","결핍"],
    /* want 는 흔히 '원하다'로 읽혀 '결핍' 뜻이 오해를 부른다 → privation */
    syn:["privation","hardship","destitution"], ant:["abundance"],
    ex:[{ s:"Years of sleep {{}} had badly damaged his health.", f:"deprivation", ko:"수년간의 수면 부족이 그의 건강을 크게 해쳤다." }] },

  { word:"deprive", pron:"디프라이브", pos:"v", level:"C1", meanings:["빼앗다","박탈하다"],
    syn:["dispossess","divest","rob"], ant:["grant"],
    ex:[{ s:"The new law could {{}} thousands of people of their benefits.", f:"deprive", ko:"그 새 법은 수천 명에게서 수급 자격을 빼앗을 수 있다." }] },

  { word:"depth", pron:"뎁스", pos:"n", level:"B1", meanings:["깊이","심도"],
    syn:["deepness","profundity","thoroughness"],
    ex:[{ s:"Divers measured the {{}} of the lake at sixty meters.", f:"depth", ko:"잠수부들은 그 호수의 깊이를 60미터로 측정했다." }] },

  { word:"deranged", pron:"디레인지드", pos:"adj", level:"C2", meanings:["정신이 나간","미친"],
    syn:["insane","unhinged","demented"], ant:["sane"],
    ex:[{ s:"The letter was clearly written by someone {{}}.", f:"deranged", ko:"그 편지는 분명히 정신이 나간 사람이 쓴 것이었다." }] },

  { word:"derive", pron:"디라이브", pos:"v", level:"C1", meanings:["얻다","비롯되다"],
    /* ★ syn 의 "stem" 을 "stem from" 으로 바꿨다. 사전이 stem 의 뜻을
       '유래하다, 생기다' 로 적어 두었지만 그것은 stem from 쪽 뜻이다. stem 은
       S 세트에서 명사 '줄기' 로 서고, 동사 뜻은 같은 챕터의 stem from 이 받는다. */
    syn:["obtain","gain","stem from"], ant:["give up"],
    ex:[{ s:"Many English words {{}} from Latin roots.", f:"derive", ko:"많은 영어 단어가 라틴어 어근에서 비롯된다." }] },

  /* 자리표시자 a·b 는 발음하지 않는다 (ascribe a to b 선례).
     구 전체를 대체할 만한 유의어가 없어 syn 을 비워 둔다. */
  { word:"derive a from b", pron:"디라이브 프럼", pos:"phr", level:"C1", meanings:["B에서 A를 끌어내다"] },

  { word:"derived from", pron:"디라이브드 프럼", pos:"phr", level:"B2", meanings:["~에서 비롯된","~에서 유래된"],
    syn:["stemming from","originating in","based on"] },

  /* desalinate·desertification·detoxification — 낱말로 대체할 유의어가 없는
     기술 용어라 syn 을 비워 둔다 */
  { word:"desalinate", pron:"디샐러네이트", pos:"v", level:"C2", meanings:["담수화하다","염분을 제거하다"],
    ex:[{ s:"Several coastal plants now {{}} seawater for drinking.", f:"desalinate", ko:"여러 해안 시설이 이제 식수용으로 바닷물을 담수화한다." }] },

  { word:"descend", pron:"디센드", pos:"v", level:"B2", meanings:["내려가다","하강하다"],
    syn:["go down","drop","sink"], ant:["ascend"],
    ex:[{ s:"The path begins to {{}} steeply just after the ridge.", f:"descend", ko:"그 길은 능선을 지나자마자 급하게 내려가기 시작한다." }] },

  { word:"descendant", pron:"디센던트", pos:"n", level:"C1", meanings:["자손","후손"],
    syn:["offspring","heir","successor"], ant:["ancestor"],
    ex:[{ s:"She is a direct {{}} of the village's founder.", f:"descendant", ko:"그녀는 그 마을 창건자의 직계 후손이다." }] },

  { word:"describe", pron:"디스크라이브", pos:"v", level:"B1", meanings:["묘사하다","설명하다"],
    syn:["depict","portray","recount"],
    ex:[{ s:"Witnesses could not clearly {{}} what they had seen.", f:"describe", ko:"목격자들은 자신들이 본 것을 분명히 묘사할 수 없었다." }] },

  { word:"desertification", pron:"디저티피케이션", pos:"n", level:"C2", meanings:["사막화"],
    ex:[{ s:"Overgrazing has accelerated {{}} across the region.", f:"desertification", ko:"과도한 방목이 그 지역 전역의 사막화를 가속시켰다." }] },

  { word:"deserve", pron:"디저브", pos:"v", level:"B2", meanings:["~할 자격이 있다","받을 만하다"],
    syn:["merit","earn","warrant"],
    ex:[{ s:"After such hard work they {{}} a proper holiday.", f:"deserve", ko:"그렇게 열심히 일했으니 그들은 제대로 된 휴가를 누릴 자격이 있다." }] },

  { word:"designate", pron:"데지그네이트", pos:"v", level:"C1", meanings:["지정하다","지명하다"],
    syn:["appoint","assign","nominate"],
    ex:[{ s:"The council voted to {{}} the area a nature reserve.", f:"designate", ko:"의회는 그 지역을 자연 보호구역으로 지정하기로 표결했다." }] },

  { word:"designation", pron:"데지그네이션", pos:"n", level:"C2", meanings:["지정","명칭"],
    syn:["appointment","title","classification"],
    ex:[{ s:"The site received official {{}} as a heritage landmark.", f:"designation", ko:"그 장소는 문화유산 명소로 공식 지정을 받았다." }] },

  { word:"desirable", pron:"디자이어러블", pos:"adj", level:"B2", meanings:["바람직한","탐나는"],
    syn:["advantageous","attractive","preferable"], ant:["undesirable"],
    ex:[{ s:"A quiet location is highly {{}} for a public library.", f:"desirable", ko:"조용한 위치는 공공 도서관에 매우 바람직하다." }] },

  { word:"desire", pron:"디자이어", pos:"n", level:"B1", meanings:["욕구","바람"],
    syn:["longing","craving","wish"], ant:["aversion"],
    ex:[{ s:"He felt a strong {{}} to return to his hometown.", f:"desire", ko:"그는 고향으로 돌아가고 싶은 강한 욕구를 느꼈다." }] },

  { word:"desolate", pron:"데설릿", pos:"adj", level:"C2", meanings:["황폐한","쓸쓸한"],
    syn:["barren","bleak","deserted"], ant:["thriving"],
    ex:[{ s:"The mine left a {{}} stretch of land behind it.", f:"desolate", ko:"그 광산은 황폐한 땅을 남겨 놓았다." }] },

  { word:"despair", pron:"디스페어", pos:"n", level:"C1", meanings:["절망","자포자기"],
    syn:["hopelessness","despondency","gloom"], ant:["hope"],
    ex:[{ s:"A note of {{}} crept into her voice as she spoke.", f:"despair", ko:"말하는 동안 그녀의 목소리에 절망의 기색이 스몄다." }] },

  { word:"despairing", pron:"디스페어링", pos:"adj", level:"C2", meanings:["절망적인","자포자기의"],
    syn:["hopeless","disconsolate","forlorn"],
    ex:[{ s:"He gave a {{}} look at the empty scoreboard.", f:"despairing", ko:"그는 텅 빈 점수판을 절망적인 눈빛으로 바라봤다." }] },

  { word:"desperate", pron:"데스퍼릿", pos:"adj", level:"B2", meanings:["필사적인","절박한"],
    syn:["frantic","urgent","reckless"], ant:["calm"],
    ex:[{ s:"They made a {{}} attempt to reach the shore before dark.", f:"desperate", ko:"그들은 어두워지기 전에 해안에 닿으려고 필사적인 시도를 했다." }] },

  { word:"desperately", pron:"데스퍼릿리", pos:"adv", level:"B2", meanings:["필사적으로","절박하게"],
    syn:["frantically","urgently","hopelessly"],
    ex:[{ s:"She was {{}} trying to finish before the deadline.", f:"desperately", ko:"그녀는 마감 전에 끝내려고 필사적으로 애쓰고 있었다." }] },

  { word:"desperation", pron:"데스퍼레이션", pos:"n", level:"C1", meanings:["자포자기","절박함"],
    syn:["frenzy","recklessness","hopelessness"],
    ex:[{ s:"In sheer {{}} he called every number on the list.", f:"desperation", ko:"순전한 절박함에 그는 명단의 모든 번호로 전화했다." }] },

  { word:"destination", pron:"데스터네이션", pos:"n", level:"B1", meanings:["목적지","도착지"],
    syn:["endpoint","terminus","goal"], ant:["origin"],
    ex:[{ s:"The final {{}} of the tour is a small mountain village.", f:"destination", ko:"그 여행의 최종 목적지는 작은 산골 마을이다." }] },

  { word:"destiny", pron:"데스터니", pos:"n", level:"B2", meanings:["운명","숙명"],
    syn:["fate","fortune","providence"],
    ex:[{ s:"He believed it was his {{}} to lead the company one day.", f:"destiny", ko:"그는 언젠가 회사를 이끄는 것이 자기 운명이라고 믿었다." }] },

  { word:"destroy", pron:"디스트로이", pos:"v", level:"B1", meanings:["파괴하다","부수다"],
    syn:["demolish","wreck","ruin"], ant:["build"],
    ex:[{ s:"The fire threatened to {{}} the entire warehouse.", f:"destroy", ko:"그 화재는 창고 전체를 파괴할 뻔했다." }] },

  { word:"destructive", pron:"디스트럭티브", pos:"adj", level:"B2", meanings:["파괴적인","해로운"],
    syn:["damaging","ruinous","harmful"], ant:["constructive"],
    ex:[{ s:"The storm was the most {{}} the coast had seen in fifty years.", f:"destructive", ko:"그 폭풍은 그 해안이 50년 만에 겪은 가장 파괴적인 것이었다." }] },

  { word:"detach", pron:"디태치", pos:"v", level:"C1", meanings:["분리하다","떼어 내다"],
    syn:["separate","disconnect","remove"], ant:["attach"],
    ex:[{ s:"Carefully {{}} the label before washing the shirt.", f:"detach", ko:"셔츠를 빨기 전에 라벨을 조심히 떼어 내라." }] },

  { word:"detail", pron:"디테일", pos:"n", level:"B1", meanings:["세부 사항","자세한 내용"],
    syn:["particular","specific","fine point"],
    ex:[{ s:"She explained every {{}} of the procedure twice.", f:"detail", ko:"그녀는 절차의 모든 세부 사항을 두 번 설명했다." }] },

  { word:"detect", pron:"디텍트", pos:"v", level:"B2", meanings:["감지하다","발견하다"],
    syn:["sense","discern","spot"], ant:["overlook"],
    ex:[{ s:"The alarm can {{}} smoke within a few seconds.", f:"detect", ko:"그 경보기는 몇 초 안에 연기를 감지할 수 있다." }] },

  { word:"detector", pron:"디텍터", pos:"n", level:"C1", meanings:["탐지기","감지기"],
    syn:["sensor","monitor","scanner"],
    ex:[{ s:"Every room in the building is fitted with a smoke {{}}.", f:"detector", ko:"그 건물의 모든 방에 연기 탐지기가 설치돼 있다." }] },

  { word:"detergent", pron:"디터전트", pos:"n", level:"B2", meanings:["세제","세정제"],
    syn:["cleanser","soap","cleaning agent"],
    ex:[{ s:"Use only a mild {{}} on delicate fabrics.", f:"detergent", ko:"섬세한 천에는 순한 세제만 쓰라." }] },

  { word:"deteriorate", pron:"디티리어레이트", pos:"v", level:"C1", meanings:["악화되다","나빠지다"],
    syn:["worsen","decline","degenerate"], ant:["improve"],
    ex:[{ s:"His health began to {{}} rapidly after the surgery.", f:"deteriorate", ko:"수술 후 그의 건강은 빠르게 악화되기 시작했다." }] },

  { word:"determinant", pron:"디터머넌트", pos:"n", level:"C2", meanings:["결정 요인","결정 인자"],
    syn:["factor","cause","influence"],
    ex:[{ s:"Household income is a major {{}} of educational outcomes.", f:"determinant", ko:"가계 소득은 교육 성과의 주요 결정 요인이다." }] },

  { word:"determination", pron:"디터머네이션", pos:"n", level:"B2", meanings:["결심","투지"],
    syn:["resolve","persistence","willpower"],
    ex:[{ s:"Her {{}} to finish the race impressed everyone watching.", f:"determination", ko:"경기를 완주하려는 그녀의 투지가 보던 모두를 감동시켰다." }] },

  { word:"determine", pron:"디터민", pos:"v", level:"B1", meanings:["결정하다","알아내다"],
    syn:["decide","establish","ascertain"],
    ex:[{ s:"Tests will {{}} whether the water is safe to drink.", f:"determine", ko:"검사로 그 물이 마셔도 안전한지 알아낼 것이다." }] },

  { word:"deterrent", pron:"디터런트", pos:"n", level:"C2", meanings:["억제책","제지하는 것"],
    /* check 는 흔히 '확인하다'로 읽혀 '억제' 뜻이 오해를 부른다 → curb */
    syn:["disincentive","obstacle","curb"],
    ex:[{ s:"Heavy fines act as a {{}} to illegal dumping.", f:"deterrent", ko:"무거운 벌금이 불법 투기에 대한 억제책으로 작용한다." }] },

  { word:"detest", pron:"디테스트", pos:"v", level:"C1", meanings:["몹시 싫어하다","혐오하다"],
    syn:["loathe","abhor","despise"], ant:["adore"],
    ex:[{ s:"She came to {{}} the long commute every single morning.", f:"detest", ko:"그녀는 매일 아침 긴 통근을 몹시 싫어하게 됐다." }] },

  { word:"detour", pron:"디투어", pos:"n", level:"B2", meanings:["우회","우회로"],
    syn:["diversion","bypass","roundabout route"],
    ex:[{ s:"Roadwork forced a long {{}} through the hills.", f:"detour", ko:"도로 공사로 언덕을 지나는 긴 우회를 해야 했다." }] },

  { word:"detoxification", pron:"디탁시피케이션", pos:"n", level:"C2", meanings:["해독","해독 작용"],
    ex:[{ s:"The liver plays a central role in {{}}.", f:"detoxification", ko:"간은 해독에서 핵심 역할을 한다." }] },

  { word:"detract", pron:"디트랙트", pos:"v", level:"C2", meanings:["떨어뜨리다","손상시키다"],
    syn:["diminish","lessen","devalue"], ant:["enhance"],
    ex:[{ s:"One weak chapter does not {{}} from the whole book.", f:"detract", ko:"약한 한 장이 책 전체의 가치를 떨어뜨리지는 않는다." }] },

  { word:"devastate", pron:"데버스테이트", pos:"v", level:"C1", meanings:["황폐화하다","큰 충격을 주다"],
    syn:["ravage","wreck","lay waste"],
    ex:[{ s:"A single storm can {{}} an entire year's harvest.", f:"devastate", ko:"단 한 번의 폭풍이 한 해 수확 전체를 황폐화할 수 있다." }] },

  { word:"develop", pron:"디벨럽", pos:"v", level:"B1", meanings:["개발하다","발전시키다"],
    syn:["evolve","expand","cultivate"],
    ex:[{ s:"The team took two years to {{}} the new engine.", f:"develop", ko:"팀은 새 엔진을 개발하는 데 2년이 걸렸다." }] },

  { word:"deviant", pron:"디비언트", pos:"adj", level:"C2", meanings:["일탈적인","정상에서 벗어난"],
    syn:["abnormal","aberrant","irregular"], ant:["conventional"],
    ex:[{ s:"The study focuses on {{}} behavior in large groups.", f:"deviant", ko:"그 연구는 큰 집단에서의 일탈적 행동에 주목한다." }] },

  { word:"deviate", pron:"디비에이트", pos:"v", level:"C1", meanings:["벗어나다","빗나가다"],
    syn:["diverge","stray","depart"], ant:["conform"],
    ex:[{ s:"Pilots must never {{}} from the agreed procedure.", f:"deviate", ko:"조종사는 합의된 절차에서 절대 벗어나면 안 된다." }] },

  { word:"device", pron:"디바이스", pos:"n", level:"B1", meanings:["장치","기구"],
    syn:["gadget","instrument","apparatus"],
    ex:[{ s:"The {{}} measures air quality every ten minutes.", f:"device", ko:"그 장치는 10분마다 공기 질을 측정한다." }] },

  { word:"devise", pron:"디바이즈", pos:"v", level:"C1", meanings:["고안하다","창안하다"],
    syn:["invent","formulate","conceive"],
    ex:[{ s:"Engineers had to {{}} a new way to cool the reactor.", f:"devise", ko:"기술자들은 원자로를 냉각하는 새 방법을 고안해야 했다." }] },

  { word:"devoid", pron:"디보이드", pos:"adj", level:"C2", meanings:["전혀 없는","결여된"],
    syn:["lacking","empty","bereft"], ant:["full"],
    ex:[{ s:"The report was almost entirely {{}} of real evidence.", f:"devoid", ko:"그 보고서에는 실질적인 증거가 거의 전혀 없었다." }] },

  { word:"devote", pron:"디보트", pos:"v", level:"B2", meanings:["바치다","전념하다"],
    syn:["dedicate","commit","give over"],
    ex:[{ s:"She decided to {{}} her evenings to learning Spanish.", f:"devote", ko:"그녀는 저녁 시간을 스페인어 배우는 데 바치기로 했다." }] },

  { word:"devotedly", pron:"디보티들리", pos:"adv", level:"C2", meanings:["헌신적으로","충실하게"],
    syn:["faithfully","loyally","selflessly"],
    ex:[{ s:"He cared for his mother {{}} for over a decade.", f:"devotedly", ko:"그는 10년 넘게 어머니를 헌신적으로 돌봤다." }] },

  { word:"devour", pron:"디바우어", pos:"v", level:"C1", meanings:["게걸스럽게 먹다","탐독하다"],
    syn:["gobble","wolf down","consume"],
    ex:[{ s:"The children {{}} the whole pizza in a matter of minutes.", f:"devoured", ko:"아이들이 몇 분 만에 피자 한 판을 게걸스럽게 먹어 치웠다." }] },

  /* dew point·diabetes·diaper·diarrhea·dimple — 낱말로 대체할 유의어가 없다 */
  { word:"dew point", pron:"듀 포인트", pos:"n", level:"C2", meanings:["이슬점"],
    ex:[{ s:"Fog forms when the air cools below the {{}}.", f:"dew point", ko:"공기가 이슬점 아래로 식으면 안개가 생긴다." }] },

  { word:"dexterity", pron:"덱스테러티", pos:"n", level:"C2", meanings:["손재주","민첩함"],
    syn:["nimbleness","skill","adroitness"], ant:["clumsiness"],
    ex:[{ s:"Microsurgery demands extraordinary manual {{}}.", f:"dexterity", ko:"미세 수술은 대단한 손재주를 요구한다." }] },

  { word:"diabetes", pron:"다이어비티스", pos:"n", level:"B2", meanings:["당뇨병"],
    ex:[{ s:"Regular exercise lowers the risk of {{}}.", f:"diabetes", ko:"규칙적인 운동은 당뇨병 위험을 낮춘다." }] },

  { word:"diagnose", pron:"다이어그노즈", pos:"v", level:"B2", meanings:["진단하다","원인을 밝혀내다"],
    syn:["identify","pinpoint","determine"],
    ex:[{ s:"Doctors were slow to {{}} the rare condition.", f:"diagnose", ko:"의사들은 그 희귀 질환을 진단하는 데 오래 걸렸다." }] },

  { word:"diagnosis", pron:"다이어그노시스", pos:"n", level:"B2", meanings:["진단","진단 결과"],
    syn:["identification","assessment","verdict"],
    ex:[{ s:"The {{}} came only after months of testing.", f:"diagnosis", ko:"그 진단은 몇 달의 검사 끝에야 나왔다." }] },

  { word:"diagram", pron:"다이어그램", pos:"n", level:"B1", meanings:["도표","도식"],
    syn:["chart","figure","schematic"],
    ex:[{ s:"The manual includes a clear {{}} of the wiring.", f:"diagram", ko:"설명서에 배선 도표가 분명히 들어 있다." }] },

  { word:"dialect", pron:"다이얼렉트", pos:"n", level:"B2", meanings:["방언","사투리"],
    syn:["vernacular","regional speech","local tongue"],
    ex:[{ s:"The northern {{}} differs sharply from the standard language.", f:"dialect", ko:"북부 방언은 표준어와 크게 다르다." }] },

  { word:"diameter", pron:"다이애머터", pos:"n", level:"B2", meanings:["직경","지름"],
    syn:["width","breadth","caliber"],
    ex:[{ s:"The pipe has a {{}} of thirty centimeters.", f:"diameter", ko:"그 관은 직경이 30센티미터다." }] },

  { word:"diaper", pron:"다이어퍼", pos:"n", level:"B1", meanings:["기저귀"],
    ex:[{ s:"He learned to change a {{}} in under a minute.", f:"diaper", ko:"그는 1분 안에 기저귀를 갈 수 있게 됐다." }] },

  { word:"diarrhea", pron:"다이어리아", pos:"n", level:"B2", meanings:["설사"],
    ex:[{ s:"Contaminated water often causes severe {{}}.", f:"diarrhea", ko:"오염된 물은 흔히 심한 설사를 일으킨다." }] },

  { word:"dictate", pron:"딕테이트", pos:"v", level:"C1", meanings:["좌우하다","받아쓰게 하다"],
    syn:["determine","impose","prescribe"],
    ex:[{ s:"Cost will largely {{}} which design we finally choose.", f:"dictate", ko:"비용이 우리가 최종적으로 어떤 설계를 고를지 크게 좌우할 것이다." }] },

  { word:"dictation", pron:"딕테이션", pos:"n", level:"C2", meanings:["받아쓰기","구술"],
    syn:["transcription","recitation","command"],
    ex:[{ s:"The class practiced French through {{}} every Friday.", f:"dictation", ko:"그 반은 금요일마다 받아쓰기로 프랑스어를 연습했다." }] },

  { word:"dietary", pron:"다이어테리", pos:"adj", level:"C1", meanings:["식이의","음식의"],
    syn:["nutritional","food-related","nutritive"],
    ex:[{ s:"The doctor suggested several simple {{}} changes.", f:"dietary", ko:"의사는 몇 가지 간단한 식이 변화를 제안했다." }] },

  { word:"differ", pron:"디퍼", pos:"v", level:"B1", meanings:["다르다","의견이 다르다"],
    syn:["diverge","vary","contrast"], ant:["match"],
    ex:[{ s:"The two accounts {{}} on several key points.", f:"differ", ko:"두 진술은 몇 가지 핵심에서 다르다." }] },

  { word:"differentiate", pron:"디퍼렌시에이트", pos:"v", level:"C1", meanings:["구별하다","차별화하다"],
    syn:["distinguish","tell apart","discriminate"],
    ex:[{ s:"Young children cannot always {{}} fantasy from reality.", f:"differentiate", ko:"어린 아이들은 환상과 현실을 늘 구별하지는 못한다." }] },

  { word:"diffuse", pron:"디퓨즈", pos:"v", level:"C2", meanings:["확산시키다","분산시키다"],
    syn:["scatter","disperse","spread"], ant:["concentrate"],
    ex:[{ s:"Warm air helps {{}} the scent through the whole room.", f:"diffuse", ko:"따뜻한 공기가 향을 방 전체로 확산시키는 데 도움이 된다." }] },

  /* ★ dig 는 불규칙 동사(dig-dug-dug)다. 예문 어형을 dug 으로 쓰면 오답이
     원형으로 남아 정답이 한눈에 튄다. 규약대로 원형을 쓴다. */
  { word:"dig", pron:"디그", pos:"v", level:"B1", meanings:["파다","채굴하다"],
    syn:["excavate","burrow","tunnel"],
    ex:[{ s:"Volunteers helped {{}} a well for the village.", f:"dig", ko:"자원봉사자들이 마을에 우물을 파는 것을 도왔다." }] },

  { word:"digest", pron:"다이제스트", pos:"v", level:"B2", meanings:["소화하다","소화시키다"],
    syn:["break down","absorb","assimilate"],
    ex:[{ s:"Some people cannot easily {{}} dairy products.", f:"digest", ko:"어떤 사람들은 유제품을 쉽게 소화하지 못한다." }] },

  { word:"digit", pron:"디짓", pos:"n", level:"B2", meanings:["한 자리 숫자","숫자"],
    syn:["figure","numeral","number"],
    ex:[{ s:"Enter the last four {{}} of your card number.", f:"digits", ko:"카드 번호의 마지막 네 자리 숫자를 입력하세요." }] },

  { word:"dignified", pron:"디그니파이드", pos:"adj", level:"C1", meanings:["위엄 있는","품위 있는"],
    syn:["stately","noble","poised"], ant:["undignified"],
    ex:[{ s:"She gave a {{}} reply to the rude question.", f:"dignified", ko:"그녀는 무례한 질문에 품위 있는 답을 했다." }] },

  { word:"dignity", pron:"디그너티", pos:"n", level:"B2", meanings:["위엄","품위"],
    syn:["stateliness","self-respect","honor"],
    ex:[{ s:"He accepted the defeat with quiet {{}}.", f:"dignity", ko:"그는 조용한 품위로 패배를 받아들였다." }] },

  { word:"dilemma", pron:"딜레마", pos:"n", level:"B2", meanings:["딜레마","진퇴양난"],
    syn:["quandary","predicament","tight spot"],
    ex:[{ s:"The company faced a real {{}} over the product recall.", f:"dilemma", ko:"그 회사는 제품 회수 문제로 진짜 딜레마에 빠졌다." }] },

  { word:"diligent", pron:"딜리전트", pos:"adj", level:"B2", meanings:["부지런한","근면한"],
    syn:["industrious","assiduous","hardworking"], ant:["lazy"],
    ex:[{ s:"A {{}} student rarely misses a deadline.", f:"diligent", ko:"부지런한 학생은 마감을 놓치는 일이 드물다." }] },

  { word:"dilute", pron:"다일루트", pos:"v", level:"C1", meanings:["희석하다","묽게 하다"],
    syn:["thin","water down","weaken"], ant:["concentrate"],
    ex:[{ s:"Always {{}} the acid thoroughly before pouring it away.", f:"dilute", ko:"산을 버리기 전에 항상 충분히 희석하라." }] },

  { word:"dimension", pron:"디멘션", pos:"n", level:"B2", meanings:["차원","치수"],
    syn:["aspect","measurement","extent"],
    ex:[{ s:"The problem clearly has an ethical {{}} as well.", f:"dimension", ko:"그 문제는 분명히 윤리적 차원도 있다." }] },

  { word:"diminish", pron:"디미니시", pos:"v", level:"C1", meanings:["줄어들다","감소시키다"],
    syn:["dwindle","lessen","shrink"], ant:["augment"],
    ex:[{ s:"Interest in the sport began to {{}} after the scandal.", f:"diminish", ko:"그 스캔들 이후 그 종목에 대한 관심이 줄어들기 시작했다." }] },

  { word:"dimple", pron:"딤플", pos:"n", level:"C2", meanings:["보조개","오목한 곳"],
    ex:[{ s:"A small {{}} appeared whenever she smiled.", f:"dimple", ko:"그녀가 웃을 때마다 작은 보조개가 생겼다." }] },

  { word:"dip into", pron:"딥 인투", pos:"phr", level:"C1", meanings:["살짝 담그다","조금씩 쓰다"],
    syn:["dunk","delve into","draw on"] },

  { word:"diploma", pron:"디플로마", pos:"n", level:"B2", meanings:["졸업장","학위증"],
    syn:["certificate","degree","credential"],
    ex:[{ s:"She framed her {{}} and hung it beside the desk.", f:"diploma", ko:"그녀는 졸업장을 액자에 넣어 책상 옆에 걸었다." }] },

  /* diplomatic — '요령 있는' 쪽 유의어(tactful 등)를 넣으면 이 표제어의 뜻
     '외교의'와 어긋난다. 외교 뜻의 대체 낱말이 없어 syn 을 비워 둔다. */
  { word:"diplomatic", pron:"디플러매틱", pos:"adj", level:"B2", meanings:["외교의","외교적인"],
    ex:[{ s:"The two countries restored {{}} relations last year.", f:"diplomatic", ko:"두 나라는 지난해 외교 관계를 복원했다." }] },

  { word:"direct", pron:"디렉트", pos:"adj", level:"B1", meanings:["직접적인","직행의"],
    syn:["immediate","straight","firsthand"], ant:["indirect"],
    ex:[{ s:"There is no {{}} flight between the two cities.", f:"direct", ko:"두 도시 사이에 직항편이 없다." }] },

  { word:"direction", pron:"디렉션", pos:"n", level:"B1", meanings:["방향","지시"],
    syn:["course","bearing","heading"],
    ex:[{ s:"We walked in the wrong {{}} for almost an hour.", f:"direction", ko:"우리는 거의 한 시간 동안 잘못된 방향으로 걸었다." }] },

  /* 유의어 register 를 roll of names 로 바꿨다 — register 가 동사 표제어로
     올라가기 때문이다(archive·index 도 같이 손질했다). */
  { word:"directory", pron:"디렉터리", pos:"n", level:"C1", meanings:["주소록","안내 책자"],
    syn:["index","listing","roll of names"],
    ex:[{ s:"Her name is missing from this year's telephone {{}}.", f:"directory", ko:"그녀의 이름이 올해 전화번호부에서 빠져 있다." }] },

  { word:"disability", pron:"디서빌러티", pos:"n", level:"B2", meanings:["장애","무능력"],
    syn:["impairment","handicap","incapacity"], ant:["ability"],
    ex:[{ s:"The building was redesigned for people with a {{}}.", f:"disability", ko:"그 건물은 장애가 있는 사람들을 위해 다시 설계됐다." }] },

  { word:"disable", pron:"디세이블", pos:"v", level:"C1", meanings:["무력화하다","작동을 멈추게 하다"],
    syn:["incapacitate","cripple","deactivate"], ant:["enable"],
    ex:[{ s:"A single power cut can {{}} the whole security system.", f:"disable", ko:"한 번의 정전이 보안 시스템 전체를 무력화할 수 있다." }] },

  { word:"disabled", pron:"디세이블드", pos:"adj", level:"B2", meanings:["장애가 있는","작동하지 않는"],
    syn:["impaired","handicapped","incapacitated"], ant:["able-bodied"],
    ex:[{ s:"The museum offers free entry to {{}} visitors.", f:"disabled", ko:"그 박물관은 장애가 있는 방문객에게 무료 입장을 제공한다." }] },

  { word:"disabling", pron:"디세이블링", pos:"adj", level:"C2", meanings:["장애를 초래하는","심신을 무력하게 하는"],
    syn:["crippling","incapacitating","debilitating"],
    ex:[{ s:"Chronic pain can be a deeply {{}} condition.", f:"disabling", ko:"만성 통증은 심신을 크게 무력하게 하는 질환일 수 있다." }] },

  { word:"disagree", pron:"디서그리", pos:"v", level:"B1", meanings:["동의하지 않다","일치하지 않다"],
    syn:["differ","dissent","object to"], ant:["agree"],
    ex:[{ s:"Experts still {{}} about the cause of the collapse.", f:"disagree", ko:"전문가들은 붕괴 원인에 대해 여전히 의견이 다르다." }] },

  { word:"disagreeable", pron:"디서그리어블", pos:"adj", level:"C1", meanings:["불쾌한","비위에 거슬리는"],
    syn:["unpleasant","offensive","obnoxious"], ant:["agreeable"],
    ex:[{ s:"There was a {{}} smell coming from the drain.", f:"disagreeable", ko:"배수구에서 불쾌한 냄새가 났다." }] },

  { word:"disappear", pron:"디서피어", pos:"v", level:"B1", meanings:["사라지다","없어지다"],
    syn:["vanish","fade","evaporate"], ant:["appear"],
    ex:[{ s:"The footprints {{}} completely after the heavy rain.", f:"disappeared", ko:"발자국은 폭우가 온 뒤 완전히 사라졌다." }] },

  { word:"disappointed", pron:"디서포인티드", pos:"adj", level:"B1", meanings:["실망한","낙담한"],
    syn:["let down","dismayed","disheartened"], ant:["pleased"],
    ex:[{ s:"Fans were deeply {{}} by the team's performance.", f:"disappointed", ko:"팬들은 그 팀의 경기력에 크게 실망했다." }] },

  { word:"disapprove", pron:"디서프루브", pos:"v", level:"B2", meanings:["못마땅해하다","반대하다"],
    syn:["object to","frown on","condemn"], ant:["approve"],
    ex:[{ s:"Her parents strongly {{}} of the whole plan.", f:"disapprove", ko:"그녀의 부모는 그 계획 전체를 강하게 못마땅해한다." }] },

  { word:"disassociate", pron:"디서소시에이트", pos:"v", level:"C2", meanings:["관계를 끊다","떼어 놓다"],
    syn:["dissociate","sever","break with"],
    ex:[{ s:"He tried to {{}} himself from the growing scandal.", f:"disassociate", ko:"그는 커지는 스캔들에서 자신을 떼어 놓으려 했다." }] },

  { word:"disastrous", pron:"디재스트러스", pos:"adj", level:"B2", meanings:["파멸적인","비참한"],
    syn:["catastrophic","calamitous","ruinous"], ant:["successful"],
    ex:[{ s:"The decision proved {{}} for the company's finances.", f:"disastrous", ko:"그 결정은 회사 재정에 파멸적인 것으로 드러났다." }] },

  { word:"discard", pron:"디스카드", pos:"v", level:"C1", meanings:["버리다","폐기하다"],
    syn:["throw away","dump","jettison"], ant:["keep"],
    ex:[{ s:"Please {{}} any packaging before entering the lab.", f:"discard", ko:"실험실에 들어가기 전에 포장재를 모두 버려 주세요." }] },

  { word:"discern", pron:"디선", pos:"v", level:"C1", meanings:["알아차리다","식별하다"],
    syn:["perceive","detect","make out"],
    ex:[{ s:"It was hard to {{}} any pattern in the raw data.", f:"discern", ko:"가공되지 않은 자료에서 어떤 유형도 알아차리기 어려웠다." }] },

  { word:"discharge", pron:"디스차지", pos:"v", level:"C1", meanings:["방출하다","내보내다"],
    syn:["release","emit","dismiss"],
    ex:[{ s:"The factory may not {{}} untreated waste into the river.", f:"discharge", ko:"그 공장은 처리되지 않은 폐기물을 강에 방출해서는 안 된다." }] },

  { word:"disciple", pron:"디사이플", pos:"n", level:"C2", meanings:["제자","문하생"],
    syn:["follower","pupil","adherent"],
    ex:[{ s:"He was the most devoted {{}} of the old master.", f:"disciple", ko:"그는 그 노스승의 가장 헌신적인 제자였다." }] },

  { word:"discipline", pron:"디서플린", pos:"n", level:"B2", meanings:["규율","훈육"],
    syn:["order","training","self-control"],
    ex:[{ s:"The school has long been known for its strict {{}}.", f:"discipline", ko:"그 학교는 오래전부터 엄격한 규율로 알려져 있다." }] },

  { word:"disclose", pron:"디스클로즈", pos:"v", level:"C1", meanings:["밝히다","공개하다"],
    syn:["reveal","divulge","make public"], ant:["conceal"],
    ex:[{ s:"The company refused to {{}} the terms of the deal.", f:"disclose", ko:"그 회사는 거래 조건을 공개하기를 거부했다." }] },

  { word:"discomfort", pron:"디스컴퍼트", pos:"n", level:"B2", meanings:["불편","불쾌감"],
    syn:["unease","soreness","inconvenience"], ant:["comfort"],
    ex:[{ s:"Patients reported only mild {{}} after the injection.", f:"discomfort", ko:"환자들은 주사 후 약한 불편만 보고했다." }] },

  { word:"discontent", pron:"디스컨텐트", pos:"n", level:"C1", meanings:["불만","불평"],
    syn:["dissatisfaction","resentment","unrest"], ant:["contentment"],
    ex:[{ s:"Growing {{}} among the workers led to a strike.", f:"discontent", ko:"노동자들 사이의 커지는 불만이 파업으로 이어졌다." }] },

  { word:"discord", pron:"디스코드", pos:"n", level:"C2", meanings:["불화","불일치"],
    syn:["conflict","friction","strife"], ant:["harmony"],
    ex:[{ s:"Years of {{}} eventually split the organization in two.", f:"discord", ko:"여러 해의 불화가 결국 그 조직을 둘로 갈라놓았다." }] },

  { word:"discount", pron:"디스카운트", pos:"n", level:"B1", meanings:["할인","할인액"],
    syn:["reduction","markdown","rebate"],
    ex:[{ s:"Members receive a ten percent {{}} on all books.", f:"discount", ko:"회원은 모든 도서에 10퍼센트 할인을 받는다." }] },

  { word:"discourse", pron:"디스코스", pos:"n", level:"C2", meanings:["담화","담론"],
    syn:["dialogue","discussion","dissertation"],
    ex:[{ s:"The book examines political {{}} in the digital age.", f:"discourse", ko:"그 책은 디지털 시대의 정치 담론을 살펴본다." }] },

  { word:"discover", pron:"디스커버", pos:"v", level:"B1", meanings:["발견하다","알아내다"],
    syn:["find","uncover","unearth"],
    ex:[{ s:"Researchers hope to {{}} a cure within a decade.", f:"discover", ko:"연구자들은 10년 안에 치료법을 발견하기를 바란다." }] },

  { word:"discreet", pron:"디스크리트", pos:"adj", level:"C2", meanings:["신중한","눈에 띄지 않는"],
    syn:["tactful","prudent","cautious"], ant:["indiscreet"],
    ex:[{ s:"She was always {{}} about her clients' private affairs.", f:"discreet", ko:"그녀는 고객의 사적인 일에 대해 늘 신중했다." }] },

  { word:"discrepancy", pron:"디스크레펀시", pos:"n", level:"C2", meanings:["불일치","차이"],
    syn:["inconsistency","disparity","mismatch"],
    ex:[{ s:"There is a clear {{}} between the two reports.", f:"discrepancy", ko:"두 보고서 사이에 분명한 불일치가 있다." }] },

  { word:"discriminate", pron:"디스크리머네이트", pos:"v", level:"C1", meanings:["차별하다","구분하다"],
    syn:["distinguish","differentiate","single out"],
    ex:[{ s:"No employer may {{}} on the basis of age.", f:"discriminate", ko:"어떤 고용주도 나이를 근거로 차별해서는 안 된다." }] },

  { word:"discrimination", pron:"디스크리머네이션", pos:"n", level:"B2", meanings:["차별","구별"],
    syn:["prejudice","bias","unfairness"], ant:["equality"],
    ex:[{ s:"The law bans {{}} in hiring and promotion.", f:"discrimination", ko:"그 법은 채용과 승진에서의 차별을 금지한다." }] },

  { word:"discuss", pron:"디스커스", pos:"v", level:"B1", meanings:["논의하다","의논하다"],
    syn:["debate","talk over","confer"],
    ex:[{ s:"The committee will {{}} the proposal again next week.", f:"discuss", ko:"위원회는 다음 주에 그 제안을 다시 논의할 것이다." }] },

  { word:"disease", pron:"디지즈", pos:"n", level:"B1", meanings:["질병","질환"],
    syn:["illness","ailment","malady"], ant:["health"],
    ex:[{ s:"The {{}} spreads mainly through contaminated water.", f:"disease", ko:"그 질병은 주로 오염된 물을 통해 퍼진다." }] },

  { word:"disgrace", pron:"디스그레이스", pos:"n", level:"C1", meanings:["불명예","망신"],
    syn:["shame","dishonor","humiliation"], ant:["honor"],
    ex:[{ s:"The scandal brought {{}} on the whole family.", f:"disgrace", ko:"그 스캔들은 가족 전체에 불명예를 안겼다." }] },

  { word:"disguise", pron:"디스가이즈", pos:"n", level:"B2", meanings:["변장","위장"],
    syn:["camouflage","cover","masquerade"],
    ex:[{ s:"He entered the palace in the {{}} of a merchant.", f:"disguise", ko:"그는 상인으로 변장해 궁에 들어갔다." }] },

  { word:"disgust", pron:"디스거스트", pos:"n", level:"C1", meanings:["역겨움","혐오감"],
    syn:["revulsion","loathing","distaste"], ant:["delight"],
    ex:[{ s:"She turned away in {{}} at the sight of the wound.", f:"disgust", ko:"그녀는 상처를 보고 역겨움을 느껴 돌아섰다." }] },

  { word:"disgusting", pron:"디스거스팅", pos:"adj", level:"B2", meanings:["역겨운","혐오스러운"],
    syn:["revolting","repulsive","sickening"], ant:["appealing"],
    ex:[{ s:"There was a {{}} smell in the abandoned kitchen.", f:"disgusting", ko:"버려진 주방에서 역겨운 냄새가 났다." }] },

  { word:"dish out", pron:"디시 아웃", pos:"phr", level:"C1", meanings:["나눠주다","퍼 주다"],
    syn:["hand out","distribute","dole out"] },

  { word:"dishonest", pron:"디스아니스트", pos:"adj", level:"B2", meanings:["부정직한","속이는"],
    syn:["deceitful","untruthful","crooked"], ant:["honest"],
    ex:[{ s:"It would be {{}} to hide those figures from investors.", f:"dishonest", ko:"그 수치를 투자자에게 숨기는 것은 부정직한 일일 것이다." }] },

  { word:"disinterested", pron:"디스인터레스티드", pos:"adj", level:"C2", meanings:["사심 없는","공정한"],
    syn:["impartial","unbiased","neutral"], ant:["biased"],
    ex:[{ s:"We need a {{}} observer to settle the dispute.", f:"disinterested", ko:"분쟁을 해결하려면 사심 없는 관찰자가 필요하다." }] },

  { word:"dismal", pron:"디즈멀", pos:"adj", level:"C1", meanings:["음울한","형편없는"],
    syn:["dreary","bleak","gloomy"], ant:["cheerful"],
    ex:[{ s:"The team endured another {{}} season without a win.", f:"dismal", ko:"그 팀은 승리 없이 또 한 번 형편없는 시즌을 보냈다." }] },

  { word:"dismay", pron:"디스메이", pos:"n", level:"C1", meanings:["경악","실망"],
    syn:["consternation","alarm","distress"], ant:["relief"],
    ex:[{ s:"To her {{}}, the entire file had already been deleted.", f:"dismay", ko:"그녀가 경악한 것은 파일 전체가 이미 삭제돼 있었다는 점이다." }] },

  { word:"dismiss", pron:"디스미스", pos:"v", level:"B2", meanings:["해고하다","일축하다"],
    syn:["fire","discharge","reject"], ant:["hire"],
    ex:[{ s:"The judge chose to {{}} the case entirely.", f:"dismiss", ko:"판사는 그 사건을 전부 기각하기로 했다." }] },

  { word:"disparage", pron:"디스패리지", pos:"v", level:"C2", meanings:["폄하하다","깎아내리다"],
    syn:["belittle","denigrate","decry"], ant:["praise"],
    ex:[{ s:"It is unfair to {{}} work you have never even read.", f:"disparage", ko:"읽어 본 적조차 없는 작업을 폄하하는 것은 부당하다." }] },

  { word:"disparity", pron:"디스패러티", pos:"n", level:"C1", meanings:["격차","차이"],
    syn:["inequality","gap","imbalance"], ant:["parity"],
    ex:[{ s:"The wage {{}} between the two regions has widened.", f:"disparity", ko:"두 지역 간 임금 격차가 벌어졌다." }] },

  { word:"dispatch", pron:"디스패치", pos:"v", level:"C1", meanings:["급파하다","발송하다"],
    syn:["send off","forward","transmit"],
    ex:[{ s:"The agency will {{}} a rescue team within the hour.", f:"dispatch", ko:"그 기관은 한 시간 안에 구조팀을 급파할 것이다." }] },

  { word:"dispense", pron:"디스펜스", pos:"v", level:"C1", meanings:["나누어 주다","제공하다"],
    syn:["distribute","hand out","supply"],
    ex:[{ s:"The machine can {{}} both coffee and tea.", f:"dispense", ko:"그 기계는 커피와 차를 모두 제공할 수 있다." }] },

  { word:"disperse", pron:"디스퍼스", pos:"v", level:"C1", meanings:["흩어지다","분산시키다"],
    syn:["scatter","diffuse","dispel"], ant:["gather"],
    ex:[{ s:"The crowd began to {{}} once the rain started.", f:"disperse", ko:"비가 오기 시작하자 군중이 흩어지기 시작했다." }] },

  { word:"display", pron:"디스플레이", pos:"v", level:"B1", meanings:["전시하다","드러내다"],
    syn:["exhibit","show","present"], ant:["hide"],
    ex:[{ s:"The gallery will {{}} the original sketches next month.", f:"display", ko:"그 갤러리는 다음 달에 원본 스케치를 전시할 것이다." }] },

  { word:"disposable", pron:"디스포저블", pos:"adj", level:"B2", meanings:["일회용의","쓰고 버리는"],
    syn:["throwaway","single-use","expendable"], ant:["reusable"],
    ex:[{ s:"The café stopped using {{}} cups last year.", f:"disposable", ko:"그 카페는 지난해 일회용 컵 사용을 중단했다." }] },

  { word:"dispositional", pron:"디스퍼지셔널", pos:"adj", level:"C2", meanings:["기질적인","성향의"],
    syn:["temperamental","innate","inborn"],
    ex:[{ s:"The study separates {{}} factors from situational ones.", f:"dispositional", ko:"그 연구는 기질적 요인을 상황적 요인과 구분한다." }] },

  { word:"disprove", pron:"디스프루브", pos:"v", level:"C1", meanings:["반증하다","틀렸음을 입증하다"],
    syn:["refute","rebut","invalidate"], ant:["prove"],
    ex:[{ s:"A single counterexample can {{}} the whole theory.", f:"disprove", ko:"반례 하나가 그 이론 전체를 반증할 수 있다." }] },

  { word:"dispute", pron:"디스퓨트", pos:"n", level:"B2", meanings:["분쟁","논쟁"],
    syn:["quarrel","controversy","disagreement"], ant:["accord"],
    ex:[{ s:"The border {{}} has lasted for several decades.", f:"dispute", ko:"그 국경 분쟁은 수십 년간 이어져 왔다." }] },

  { word:"disqualify", pron:"디스콸러파이", pos:"v", level:"C1", meanings:["실격시키다","자격을 박탈하다"],
    syn:["bar","rule out","debar"], ant:["qualify"],
    ex:[{ s:"A second false start will {{}} the runner immediately.", f:"disqualify", ko:"두 번째 부정 출발은 그 선수를 즉시 실격시킨다." }] },

  { word:"disregard", pron:"디스리가드", pos:"v", level:"C1", meanings:["무시하다","묵살하다"],
    syn:["ignore","overlook","brush aside"], ant:["heed"],
    ex:[{ s:"Drivers who {{}} the warning signs face heavy fines.", f:"disregard", ko:"경고 표지를 무시하는 운전자는 무거운 벌금을 받는다." }] },

  { word:"disrupt", pron:"디스럽트", pos:"v", level:"B2", meanings:["방해하다","중단시키다"],
    syn:["interrupt","upset","derail"],
    ex:[{ s:"Heavy snow will {{}} rail services across the region.", f:"disrupt", ko:"폭설이 그 지역 전역의 철도 운행을 중단시킬 것이다." }] },

  { word:"disruption", pron:"디스럽션", pos:"n", level:"B2", meanings:["중단","혼란"],
    syn:["interruption","upheaval","turmoil"],
    ex:[{ s:"The strike caused serious {{}} to deliveries.", f:"disruption", ko:"그 파업은 배송에 심각한 중단을 초래했다." }] },

  { word:"dissatisfaction", pron:"디새티스팩션", pos:"n", level:"C1", meanings:["불만","불평"],
    syn:["discontent","displeasure","frustration"], ant:["satisfaction"],
    ex:[{ s:"Survey results revealed widespread {{}} among staff.", f:"dissatisfaction", ko:"설문 결과 직원들 사이에 광범위한 불만이 드러났다." }] },

  { word:"disseminate", pron:"디세머네이트", pos:"v", level:"C2", meanings:["퍼뜨리다","전파하다"],
    syn:["spread","circulate","broadcast"],
    ex:[{ s:"The group used pamphlets to {{}} its ideas.", f:"disseminate", ko:"그 단체는 소책자로 자기 생각을 퍼뜨렸다." }] },

  { word:"dissent", pron:"디센트", pos:"n", level:"C1", meanings:["반대","이견"],
    syn:["objection","disagreement","opposition"], ant:["consent"],
    ex:[{ s:"There was little open {{}} at yesterday's meeting.", f:"dissent", ko:"어제 회의에서 공개적인 반대는 거의 없었다." }] },

  { word:"dissipate", pron:"디서페이트", pos:"v", level:"C2", meanings:["소멸되다","낭비하다"],
    syn:["disperse","vanish","squander"],
    ex:[{ s:"The morning fog began to {{}} by nine o'clock.", f:"dissipate", ko:"아침 안개가 9시쯤 사라지기 시작했다." }] },

  { word:"dissolve", pron:"디잘브", pos:"v", level:"B2", meanings:["녹다","해산하다"],
    syn:["melt","liquefy","disband"],
    ex:[{ s:"Stir until the sugar begins to {{}} completely.", f:"dissolve", ko:"설탕이 완전히 녹기 시작할 때까지 저어라." }] },

  { word:"dissonance", pron:"디서넌스", pos:"n", level:"C2", meanings:["불협화음","불일치"],
    syn:["discord","clash","disharmony"], ant:["harmony"],
    ex:[{ s:"There is a clear {{}} between what he says and what he does.", f:"dissonance", ko:"그가 말하는 것과 행동하는 것 사이에 분명한 불일치가 있다." }] },

  { word:"distance", pron:"디스턴스", pos:"n", level:"B1", meanings:["거리","간격"],
    syn:["gap","span","interval"],
    ex:[{ s:"The {{}} between the two villages is only three miles.", f:"distance", ko:"두 마을 사이의 거리는 3마일밖에 안 된다." }] },

  /* 원본 목록에 '헤아릴 수 없을 정도로 엄청난'(immeasurable 의 뜻)이 잘못
     들어와 있었다. 바로잡아 '불쾌한'으로 넣는다. */
  { word:"distasteful", pron:"디스테이스트풀", pos:"adj", level:"C1", meanings:["불쾌한","혐오스러운"],
    syn:["offensive","repugnant","objectionable"], ant:["agreeable"],
    ex:[{ s:"Many readers found the joke deeply {{}}.", f:"distasteful", ko:"많은 독자가 그 농담을 몹시 불쾌하게 여겼다." }] },

  /* 원본은 뜻을 다섯 묶음 나열했다(명예; 우수성; 차이; 구별; 특징).
     카드에 찍히는 문자열이므로 대표 2개로 줄인다. */
  { word:"distinction", pron:"디스팅션", pos:"n", level:"B2", meanings:["구별","뛰어남"],
    syn:["difference","contrast","excellence"],
    ex:[{ s:"She graduated with {{}} in mathematics.", f:"distinction", ko:"그녀는 수학에서 뛰어난 성적으로 졸업했다." }] },

  { word:"distinctive", pron:"디스팅티브", pos:"adj", level:"B2", meanings:["독특한","특색 있는"],
    syn:["characteristic","unique","unmistakable"],
    ex:[{ s:"The bird has a {{}} call you cannot possibly miss.", f:"distinctive", ko:"그 새는 도저히 놓칠 수 없는 독특한 울음소리를 낸다." }] },

  { word:"distinguish", pron:"디스팅귀시", pos:"v", level:"B2", meanings:["구별하다","식별하다"],
    syn:["differentiate","tell apart","discern"],
    ex:[{ s:"Colorblind people cannot always {{}} red from green.", f:"distinguish", ko:"색맹인 사람은 빨강과 초록을 늘 구별하지는 못한다." }] },

  { word:"distinguished", pron:"디스팅귀시트", pos:"adj", level:"C1", meanings:["저명한","뛰어난"],
    syn:["eminent","renowned","illustrious"], ant:["obscure"],
    ex:[{ s:"The lecture was given by a {{}} historian.", f:"distinguished", ko:"그 강연은 저명한 역사가가 했다." }] },

  { word:"distort", pron:"디스토트", pos:"v", level:"C1", meanings:["왜곡하다","비틀다"],
    syn:["twist","misrepresent","warp"],
    ex:[{ s:"Selective quoting can badly {{}} the original meaning.", f:"distort", ko:"선택적 인용은 원래 뜻을 심하게 왜곡할 수 있다." }] },

  { word:"distorted", pron:"디스토티드", pos:"adj", level:"C1", meanings:["왜곡된","비뚤어진"],
    syn:["twisted","misshapen","skewed"], ant:["accurate"],
    ex:[{ s:"The old mirror gave a {{}} image of the room.", f:"distorted", ko:"그 낡은 거울은 방을 왜곡된 모습으로 비췄다." }] },

  { word:"distortion", pron:"디스토션", pos:"n", level:"C1", meanings:["왜곡","뒤틀림"],
    syn:["misrepresentation","deformation","bias"],
    ex:[{ s:"The report contains a serious {{}} of the facts.", f:"distortion", ko:"그 보고서에는 사실에 대한 심각한 왜곡이 있다." }] },

  { word:"distract", pron:"디스트랙트", pos:"v", level:"B2", meanings:["주의를 흩뜨리다","산만하게 하다"],
    syn:["divert","sidetrack","unsettle"],
    ex:[{ s:"Noise from the street can easily {{}} younger students.", f:"distract", ko:"길거리 소음은 어린 학생들의 주의를 쉽게 흩뜨린다." }] },

  { word:"distraction", pron:"디스트랙션", pos:"n", level:"B2", meanings:["방해하는 것","기분 전환"],
    syn:["interruption","diversion","amusement"],
    ex:[{ s:"Phones are by far the biggest {{}} during lessons.", f:"distraction", ko:"수업 중 가장 큰 방해 요소는 단연 휴대폰이다." }] },

  { word:"distress", pron:"디스트레스", pos:"n", level:"B2", meanings:["고통","괴로움"],
    syn:["anguish","suffering","torment"], ant:["comfort"],
    ex:[{ s:"The family was in obvious {{}} after hearing the news.", f:"distress", ko:"그 가족은 소식을 듣고 분명히 고통스러워했다." }] },

  { word:"distribute", pron:"디스트리뷰트", pos:"v", level:"B1", meanings:["분배하다","배포하다"],
    syn:["hand out","allocate","share out"],
    ex:[{ s:"Volunteers helped {{}} blankets to the affected families.", f:"distribute", ko:"자원봉사자들이 피해 가족에게 담요를 배포하는 것을 도왔다." }] },

  { word:"distribution", pron:"디스트리뷰션", pos:"n", level:"B2", meanings:["분배","유통"],
    syn:["allocation","dispersal","circulation"],
    ex:[{ s:"The company handles {{}} across three countries.", f:"distribution", ko:"그 회사는 세 나라에 걸친 유통을 담당한다." }] },

  { word:"disturb", pron:"디스터브", pos:"v", level:"B1", meanings:["방해하다","어지럽히다"],
    syn:["bother","interrupt","unsettle"],
    ex:[{ s:"Please do not {{}} the birds while they are nesting.", f:"disturb", ko:"새들이 둥지를 틀 동안 방해하지 마세요." }] },

  { word:"disturbance", pron:"디스터번스", pos:"n", level:"C1", meanings:["방해","소란"],
    syn:["commotion","interruption","upheaval"],
    ex:[{ s:"Police were called to a {{}} outside the stadium.", f:"disturbance", ko:"경찰이 경기장 밖 소란 때문에 출동했다." }] },

  { word:"ditch", pron:"디치", pos:"n", level:"B2", meanings:["배수로","도랑"],
    syn:["trench","channel","gutter"],
    ex:[{ s:"Water drained slowly along the roadside {{}}.", f:"ditch", ko:"물이 길가 배수로를 따라 천천히 빠졌다." }] },

  { word:"diverge", pron:"다이버지", pos:"v", level:"C2", meanings:["갈라지다","벗어나다"],
    syn:["separate","branch off","deviate"], ant:["converge"],
    ex:[{ s:"The two paths {{}} just beyond the old bridge.", f:"diverge", ko:"두 길은 옛 다리를 지나 바로 갈라진다." }] },

  { word:"diverse", pron:"다이버스", pos:"adj", level:"B2", meanings:["다양한","여러 가지의"],
    syn:["varied","assorted","manifold"], ant:["uniform"],
    ex:[{ s:"The city has an unusually {{}} population.", f:"diverse", ko:"그 도시는 유난히 다양한 인구 구성을 갖고 있다." }] },

  { word:"diversify", pron:"다이버서파이", pos:"v", level:"C1", meanings:["다양화하다","다각화하다"],
    syn:["vary","branch out","expand"],
    ex:[{ s:"The firm decided to {{}} into renewable energy.", f:"diversify", ko:"그 회사는 재생 에너지로 사업을 다각화하기로 했다." }] },

  { word:"diversity", pron:"다이버서티", pos:"n", level:"B2", meanings:["다양성","다양함"],
    syn:["variety","range","multiplicity"],
    ex:[{ s:"Biological {{}} is declining across the whole region.", f:"diversity", ko:"그 지역 전역에서 생물 다양성이 줄고 있다." }] },

  { word:"divert", pron:"다이버트", pos:"v", level:"C1", meanings:["전환하다","딴 데로 돌리다"],
    syn:["redirect","reroute","distract"],
    ex:[{ s:"Police had to {{}} traffic away from the square.", f:"divert", ko:"경찰은 차량을 광장에서 다른 길로 돌려야 했다." }] },

  { word:"dividend", pron:"디비덴드", pos:"n", level:"C1", meanings:["배당금","이익 배당"],
    syn:["payout","share","return"],
    ex:[{ s:"Shareholders received only a modest {{}} this year.", f:"dividend", ko:"주주들은 올해 적은 배당금만 받았다." }] },

  { word:"divine", pron:"디바인", pos:"adj", level:"C1", meanings:["신의","신성한"],
    syn:["holy","sacred","heavenly"], ant:["earthly"],
    ex:[{ s:"The temple was believed to hold {{}} power.", f:"divine", ko:"그 신전은 신성한 힘을 지녔다고 여겨졌다." }] },

  { word:"division", pron:"디비전", pos:"n", level:"B2", meanings:["분할","부서"],
    syn:["separation","partition","department"], ant:["unity"],
    ex:[{ s:"The {{}} of the land caused decades of conflict.", f:"division", ko:"그 토지 분할은 수십 년의 갈등을 낳았다." }] },

  /* ★ syn 의 "split" 을 "legal end of a marriage" 로 바꿨다 — crack(C) 과 같은
     이유다. split 이 S 세트에서 동사로 선다. */
  { word:"divorce", pron:"디보스", pos:"n", level:"B1", meanings:["이혼","단절"],
    syn:["legal end of a marriage","dissolution","breakup"], ant:["marriage"],
    ex:[{ s:"They finally filed for {{}} after twelve years.", f:"divorce", ko:"그들은 12년 뒤에 마침내 이혼을 신청했다." }] },

  { word:"divulge", pron:"디벌지", pos:"v", level:"C2", meanings:["누설하다","폭로하다"],
    syn:["reveal","disclose","leak"], ant:["conceal"],
    ex:[{ s:"He refused to {{}} the source of the funds.", f:"divulge", ko:"그는 그 자금의 출처를 누설하기를 거부했다." }] },

  { word:"dizziness", pron:"디지니스", pos:"n", level:"B2", meanings:["현기증","어지럼증"],
    syn:["giddiness","vertigo","lightheadedness"],
    ex:[{ s:"Sudden {{}} forced her to sit down on the step.", f:"dizziness", ko:"갑작스러운 현기증에 그녀는 계단에 앉아야 했다." }] },

  { word:"dizzy", pron:"디지", pos:"adj", level:"B1", meanings:["어지러운","현기증이 나는"],
    syn:["giddy","lightheaded","faint"],
    ex:[{ s:"Standing up too quickly can make you {{}}.", f:"dizzy", ko:"너무 빨리 일어나면 어지러울 수 있다." }] },

  { word:"do away with", pron:"두 어웨이 위드", pos:"phr", level:"C1", meanings:["폐지하다","없애다"],
    syn:["abolish","get rid of","scrap"] },

  { word:"docile", pron:"다설", pos:"adj", level:"C2", meanings:["고분고분한","순한"],
    syn:["obedient","compliant","tame"], ant:["unruly"],
    ex:[{ s:"The pony was gentle and unusually {{}}.", f:"docile", ko:"그 조랑말은 순하고 유난히 고분고분했다." }] },

  /* 원본은 '공식적 외교 정책'을 앞에 뒀는데 교리·원칙이 주된 뜻이다 */
  { word:"doctrine", pron:"닥트린", pos:"n", level:"C1", meanings:["교리","원칙"],
    syn:["dogma","tenet","creed"],
    ex:[{ s:"The {{}} was openly challenged by younger scholars.", f:"doctrine", ko:"그 교리는 젊은 학자들의 공개적인 도전을 받았다." }] },

  { word:"document", pron:"다큐먼트", pos:"v", level:"B2", meanings:["기록하다","입증하다"],
    syn:["record","chronicle","detail"],
    ex:[{ s:"Researchers carefully {{}} every change in behavior.", f:"document", ko:"연구자들은 행동의 모든 변화를 꼼꼼히 기록한다." }] },

  { word:"dodge", pron:"다지", pos:"v", level:"B2", meanings:["피하다","회피하다"],
    syn:["evade","sidestep","duck"],
    ex:[{ s:"The minister tried to {{}} the awkward question.", f:"dodge", ko:"장관은 난처한 질문을 피하려 했다." }] },

  { word:"dogma", pron:"도그마", pos:"n", level:"C2", meanings:["교의","독단"],
    syn:["doctrine","creed","tenet"],
    ex:[{ s:"Science advances by questioning accepted {{}}.", f:"dogma", ko:"과학은 받아들여진 교의를 의심하며 발전한다." }] },

  /* 원본 표제어에 '(DIY)' 괄호 약어가 붙어 있었다 — 퀴즈 선택지에 그대로
     찍히므로 제거했다. 합성어라 대체할 유의어가 없어 syn 을 비워 둔다. */
  { word:"do-it-yourself", pron:"두 잇 유어셀프", pos:"n", level:"B2", meanings:["직접 만들기","자가 수리"],
    ex:[{ s:"The shop specializes in {{}} furniture kits.", f:"do-it-yourself", ko:"그 가게는 직접 조립하는 가구 세트를 전문으로 한다." }] },

  { word:"domain", pron:"도메인", pos:"n", level:"C1", meanings:["영역","분야"],
    syn:["field","sphere","realm"],
    ex:[{ s:"That question lies well outside my {{}} of expertise.", f:"domain", ko:"그 질문은 내 전문 영역에서 한참 벗어난다." }] },

  { word:"domestic", pron:"더메스틱", pos:"adj", level:"B2", meanings:["국내의","가정의"],
    syn:["internal","household","native"], ant:["foreign"],
    ex:[{ s:"The airline mainly serves {{}} routes.", f:"domestic", ko:"그 항공사는 주로 국내 노선을 운항한다." }] },

  /* ★ 원본에 '인식할 수 있는, 알아볼 수 있는'(recognizable 의 뜻)이 잘못
     들어와 있었다. 바로 다음 행의 domesticated 와 행이 밀린 것으로 보인다. */
  { word:"domesticate", pron:"더메스티케이트", pos:"v", level:"C2", meanings:["길들이다","사육하다"],
    /* ★ syn 의 "tame" 을 "make docile" 로 바꿨다. 사전이 tame 을 '길들이다;
       온순한' 으로 적어 두었는데 앞부분이 이 표제어 자신의 뜻이었다. tame 의
       실제 무게는 형용사 '유순한' 이고 참조 docile(고분고분한) 도 그쪽이라
       T 세트에서 형용사로 세웠다. */
    syn:["make docile","train","break in"], ant:["release"],
    ex:[{ s:"Humans began to {{}} wild grasses thousands of years ago.", f:"domesticate", ko:"인류는 수천 년 전에 야생 풀을 작물화하기 시작했다." }] },

  { word:"domesticated", pron:"더메스티케이티드", pos:"adj", level:"C1", meanings:["길든","가축화된"],
    syn:["tamed","trained","house-trained"], ant:["wild"],
    ex:[{ s:"Cats were {{}} much later than dogs.", f:"domesticated", ko:"고양이는 개보다 훨씬 늦게 길들여졌다." }] },

  { word:"dominant", pron:"다머넌트", pos:"adj", level:"B2", meanings:["지배적인","우세한"],
    syn:["prevailing","leading","predominant"], ant:["subordinate"],
    ex:[{ s:"English remains the {{}} language of science.", f:"dominant", ko:"영어는 여전히 과학의 지배적인 언어다." }] },

  { word:"dominate", pron:"다머네이트", pos:"v", level:"B2", meanings:["지배하다","압도하다"],
    syn:["control","rule","overshadow"],
    ex:[{ s:"One company came to {{}} the entire market.", f:"dominate", ko:"한 회사가 시장 전체를 지배하게 됐다." }] },

  { word:"dominating", pron:"다머네이팅", pos:"adj", level:"C2", meanings:["지배적인","우위를 차지하는"],
    syn:["commanding","overbearing","domineering"],
    ex:[{ s:"She had a {{}} presence in every single meeting.", f:"dominating", ko:"그녀는 모든 회의에서 지배적인 존재감을 보였다." }] },

  { word:"donate", pron:"도네이트", pos:"v", level:"B1", meanings:["기부하다","기증하다"],
    syn:["give","contribute","bestow"],
    ex:[{ s:"Readers were asked to {{}} books to the school library.", f:"donate", ko:"독자들에게 학교 도서관에 책을 기부해 달라고 요청했다." }] },

  { word:"donation", pron:"도네이션", pos:"n", level:"B2", meanings:["기부","기증품"],
    syn:["contribution","gift","offering"],
    ex:[{ s:"A generous {{}} funded the new reading room.", f:"donation", ko:"넉넉한 기부가 새 열람실 건립 자금이 됐다." }] },

  { word:"donor", pron:"도너", pos:"n", level:"B2", meanings:["기증자","기부자"],
    syn:["contributor","giver","benefactor"], ant:["recipient"],
    ex:[{ s:"The {{}} asked to remain completely anonymous.", f:"donor", ko:"그 기증자는 완전히 익명으로 남기를 요청했다." }] },

  /* 유의어 ruin 을 utter collapse 로 바꿨다. ruin 이 R 세트 챕터 14 표제어
     (파괴하다, 망치다 · v)로 올라가면 명사 표제어의 유의어 자리에 동사 뜻이 뜬다.
     사전의 ruin 값도 '파괴하다; 폐허' 로 품사가 섞여 있었다. */
  { word:"doom", pron:"둠", pos:"n", level:"C1", meanings:["파멸","비운"],
    syn:["utter collapse","downfall","destruction"],
    ex:[{ s:"A sense of {{}} hung over the whole village.", f:"doom", ko:"파멸의 기운이 마을 전체에 감돌았다." }] },

  { word:"dormant", pron:"도먼트", pos:"adj", level:"C2", meanings:["활동을 멈춘","잠든"],
    syn:["inactive","latent","asleep"], ant:["active"],
    ex:[{ s:"The volcano has been {{}} for nearly two centuries.", f:"dormant", ko:"그 화산은 거의 200년간 활동을 멈춰 왔다." }] },

  { word:"dormitory", pron:"도머토리", pos:"n", level:"B2", meanings:["기숙사"],
    ex:[{ s:"First-year students all live in the same {{}}.", f:"dormitory", ko:"1학년 학생은 모두 같은 기숙사에 산다." }] },

  { word:"dose", pron:"도스", pos:"n", level:"B2", meanings:["복용량","양"],
    syn:["amount","measure","portion"],
    ex:[{ s:"Take one {{}} every eight hours with water.", f:"dose", ko:"8시간마다 물과 함께 한 회분을 복용하세요." }] },

  { word:"doubt", pron:"다우트", pos:"n", level:"B1", meanings:["의심","의문"],
    syn:["uncertainty","skepticism","misgiving"], ant:["certainty"],
    ex:[{ s:"There is little {{}} about who wrote the letter.", f:"doubt", ko:"누가 그 편지를 썼는지에 대한 의심은 거의 없다." }] },

  { word:"down payment", pron:"다운 페이먼트", pos:"n", level:"B2", meanings:["계약금","착수금"],
    syn:["deposit","advance","initial payment"],
    ex:[{ s:"They saved for years to afford the {{}}.", f:"down payment", ko:"그들은 계약금을 마련하려고 여러 해 저축했다." }] },

  /* 유의어 ruin 을 fall from power 로 바꿨다 — ruin 을 동사로 세우기 때문이다
     (doom 도 같이 손질했다). */
  { word:"downfall", pron:"다운폴", pos:"n", level:"C1", meanings:["몰락","실각"],
    syn:["fall from power","collapse","undoing"], ant:["rise"],
    ex:[{ s:"Greed eventually proved to be his {{}}.", f:"downfall", ko:"탐욕이 결국 그의 몰락 원인이 됐다." }] },

  { word:"downplay", pron:"다운플레이", pos:"v", level:"C1", meanings:["경시하다","축소하다"],
    syn:["belittle","minimize","understate"], ant:["exaggerate"],
    ex:[{ s:"Officials tried to {{}} the scale of the leak.", f:"downplay", ko:"당국은 누출 규모를 축소하려 했다." }] },

  { word:"downpour", pron:"다운포", pos:"n", level:"C1", meanings:["호우","폭우"],
    syn:["deluge","cloudburst","heavy rain"],
    ex:[{ s:"A sudden {{}} flooded the lower streets within minutes.", f:"downpour", ko:"갑작스러운 호우가 몇 분 만에 아래쪽 거리를 침수시켰다." }] },

  { word:"downturn", pron:"다운턴", pos:"n", level:"C1", meanings:["침체","하락"],
    syn:["slump","decline","recession"], ant:["upturn"],
    ex:[{ s:"The industry has never fully recovered from the {{}}.", f:"downturn", ko:"그 산업은 침체에서 완전히 회복하지 못했다." }] },

  { word:"doze", pron:"도즈", pos:"v", level:"B2", meanings:["졸다","선잠 자다"],
    syn:["take a nap","snooze","drowse"],
    ex:[{ s:"He would often {{}} in the armchair after lunch.", f:"doze", ko:"그는 점심 후 안락의자에서 자주 졸았다." }] },

  /* dozen — 대체할 낱말이 없어 syn 을 비워 둔다 */
  { word:"dozen", pron:"더즌", pos:"n", level:"B1", meanings:["12개","한 다스"],
    ex:[{ s:"She bought half a {{}} eggs on the way home.", f:"dozen", ko:"그녀는 집에 오는 길에 달걀 여섯 개를 샀다." }] },

  { word:"draft", pron:"드래프트", pos:"n", level:"B2", meanings:["초안","원고"],
    syn:["outline","rough copy","sketch"],
    ex:[{ s:"The first {{}} of the report was far too long.", f:"draft", ko:"보고서 초안은 너무 길었다." }] },

  /* ★ drag 는 dragged 로 자음을 겹쳐 변화한다. quizgen 의 변환 규칙에 없어
     불규칙으로 처리되므로 예문 어형을 원형으로 쓴다. */
  { word:"drag", pron:"드래그", pos:"v", level:"B1", meanings:["끌다","질질 끌다"],
    syn:["haul","tug","pull"],
    ex:[{ s:"It took three of us to {{}} the boat ashore.", f:"drag", ko:"배를 물가로 끌어올리는 데 우리 셋이 필요했다." }] },

  { word:"drain", pron:"드레인", pos:"v", level:"B2", meanings:["빼내다","소모시키다"],
    /* empty 는 쓰지 않는다 — E 세트 표제어가 형용사("텅 빈, 공허한")라서
       동사 표제어 drain 의 유의어 자리에 상태를 나타내는 뜻이 뜬다. */
    syn:["empty out","siphon","deplete"], ant:["fill"],
    ex:[{ s:"Engineers had to {{}} the tunnel before starting repairs.", f:"drain", ko:"기술자들은 수리를 시작하기 전에 터널의 물을 빼내야 했다." }] },

  { word:"drainage", pron:"드레이니지", pos:"n", level:"C1", meanings:["배수","배수 시설"],
    syn:["runoff","outflow","sewerage"],
    ex:[{ s:"Poor {{}} left the field waterlogged for weeks.", f:"drainage", ko:"배수가 나빠 그 밭은 몇 주간 물에 잠겨 있었다." }] },

  { word:"dramatically", pron:"드러매티컬리", pos:"adv", level:"B2", meanings:["극적으로","급격히"],
    syn:["sharply","markedly","strikingly"],
    ex:[{ s:"Prices rose {{}} in the space of a single month.", f:"dramatically", ko:"한 달 사이에 물가가 급격히 올랐다." }] },

  { word:"dramatize", pron:"드래머타이즈", pos:"v", level:"C2", meanings:["각색하다","과장하다"],
    syn:["adapt","stage","overstate"],
    ex:[{ s:"The studio plans to {{}} the novel for television.", f:"dramatize", ko:"그 제작사는 소설을 텔레비전용으로 각색할 계획이다." }] },

  { word:"drastic", pron:"드래스틱", pos:"adj", level:"B2", meanings:["과감한","급격한"],
    syn:["extreme","radical","sweeping"], ant:["mild"],
    ex:[{ s:"The government took {{}} measures to cut spending.", f:"drastic", ko:"정부는 지출을 줄이려고 과감한 조치를 취했다." }] },

  /* ★ draw 는 draw-drew-drawn 으로 불규칙 변화한다. 예문 어형은 원형으로. */
  { word:"draw", pron:"드로", pos:"v", level:"B1", meanings:["끌어들이다","그리다"],
    syn:["attract","pull","sketch"],
    ex:[{ s:"The festival is expected to {{}} very large crowds.", f:"draw", ko:"그 축제는 아주 많은 인파를 끌어들일 것으로 예상된다." }] },

  { word:"draw on", pron:"드로 온", pos:"phr", level:"C1", meanings:["~에서 이끌어내다","활용하다"],
    syn:["utilize","tap into","fall back on"] },

  { word:"drawback", pron:"드로백", pos:"n", level:"B2", meanings:["결점","문제점"],
    syn:["disadvantage","flaw","snag"], ant:["advantage"],
    ex:[{ s:"The main {{}} of the plan is simply its cost.", f:"drawback", ko:"그 계획의 주된 결점은 그저 비용이다." }] },

  { word:"dread", pron:"드레드", pos:"v", level:"C1", meanings:["몹시 무서워하다","두려워하다"],
    syn:["fear","shrink from","be terrified of"], ant:["welcome"],
    ex:[{ s:"Many students {{}} the final oral examination.", f:"dread", ko:"많은 학생이 마지막 구술 시험을 몹시 무서워한다." }] },

  { word:"dreadful", pron:"드레드풀", pos:"adj", level:"B2", meanings:["끔찍한","무시무시한"],
    syn:["awful","terrible","appalling"], ant:["wonderful"],
    ex:[{ s:"The weather that whole weekend was simply {{}}.", f:"dreadful", ko:"그 주말 내내 날씨는 그저 끔찍했다." }] },

  /* ★ 원본에 '지저분한, 불결한'(dingy 의 뜻)이 잘못 들어와 있었다. */
  { word:"dreary", pron:"드리어리", pos:"adj", level:"C1", meanings:["음울한","쓸쓸한"],
    syn:["bleak","dismal","gloomy"], ant:["cheerful"],
    ex:[{ s:"They spent a {{}} afternoon indoors watching the rain.", f:"dreary", ko:"그들은 비를 보며 음울한 오후를 실내에서 보냈다." }] },

  { word:"drench", pron:"드렌치", pos:"v", level:"C1", meanings:["흠뻑 적시다","물에 잠기게 하다"],
    syn:["soak","saturate","douse"],
    ex:[{ s:"A sudden shower {{}} everyone at the bus stop.", f:"drenched", ko:"갑작스러운 소나기가 버스 정류장의 모두를 흠뻑 적셨다." }] },

  { word:"drift", pron:"드리프트", pos:"v", level:"B2", meanings:["표류하다","떠돌다"],
    syn:["float","wander","stray"],
    ex:[{ s:"The empty boat began to {{}} slowly out to sea.", f:"drift", ko:"빈 배가 천천히 바다로 떠내려가기 시작했다." }] },

  /* 원본은 '떠나다; 첫 타를 치다'였는데 쫓아버리다가 주된 뜻이다 */
  { word:"drive off", pron:"드라이브 오프", pos:"phr", level:"C1", meanings:["쫓아버리다","물리치다"],
    syn:["repel","chase away","fend off"] },

  { word:"drizzle", pron:"드리즐", pos:"n", level:"B2", meanings:["이슬비","가랑비"],
    /* ★ syn 의 "sprinkle" 을 "scattered droplets" 로 바꿨다. 사전이 '보슬비;
       뿌리다' 로 명사와 동사를 섞어 두었는데 S 세트에서는 동사 '뿌리다' 로 선다 —
       명사 목록에 동사가 끼게 된다. */
    syn:["light rain","mist","scattered droplets"],
    ex:[{ s:"A fine {{}} fell steadily all through the morning.", f:"drizzle", ko:"아침 내내 가랑비가 꾸준히 내렸다." }] },

  { word:"drop by", pron:"드랍 바이", pos:"phr", level:"B2", meanings:["잠깐 들르다","불시에 찾다"],
    syn:["stop by","call in","look in"] },

  { word:"drop out", pron:"드랍 아웃", pos:"phr", level:"B2", meanings:["중도에 그만두다","빠지다"],
    syn:["withdraw","quit","pull out"] },

  { word:"drown out", pron:"드라운 아웃", pos:"phr", level:"C1", meanings:["소리를 덮어 버리다","들리지 않게 하다"],
    syn:["muffle","deafen","overpower"] },

  { word:"drowsy", pron:"드라우지", pos:"adj", level:"B2", meanings:["졸리는","나른한"],
    syn:["sleepy","lethargic","sluggish"], ant:["alert"],
    ex:[{ s:"The medicine may make you feel rather {{}}.", f:"drowsy", ko:"그 약은 다소 졸리게 할 수 있다." }] },

  { word:"dual", pron:"듀얼", pos:"adj", level:"B2", meanings:["이중의","둘의"],
    syn:["twofold","double","binary"], ant:["single"],
    ex:[{ s:"She holds {{}} citizenship in two countries.", f:"dual", ko:"그녀는 두 나라의 이중 국적을 갖고 있다." }] },

  { word:"dubious", pron:"두비어스", pos:"adj", level:"C1", meanings:["의심스러운","수상한"],
    /* ★ syn 의 "suspect" 를 "open to doubt" 로 바꿨다. 사전이 '의심스러운;
       의심하다' 로 형용사와 동사를 섞어 두었는데 S 세트에서는 동사 '의심하다' 로
       선다 — 형용사 목록에 동사가 끼게 된다. */
    syn:["doubtful","questionable","open to doubt"], ant:["certain"],
    ex:[{ s:"The whole argument rests on a {{}} assumption.", f:"dubious", ko:"그 주장 전체가 의심스러운 가정에 기대고 있다." }] },

  { word:"due", pron:"듀", pos:"adj", level:"B2", meanings:["기일이 된","예정된"],
    syn:["owing","payable","expected"],
    ex:[{ s:"The final payment is {{}} at the end of March.", f:"due", ko:"최종 대금은 3월 말에 지급 기일이 된다." }] },

  { word:"due to", pron:"듀 투", pos:"phr", level:"B1", meanings:["~때문에","~로 인해"],
    syn:["because of","owing to","thanks to"] },

  { word:"dull", pron:"덜", pos:"adj", level:"B2", meanings:["따분한","흐릿한"],
    syn:["boring","tedious","drab"], ant:["lively"],
    ex:[{ s:"The lecture was long and rather {{}}.", f:"dull", ko:"그 강의는 길고 다소 따분했다." }] },

  /* ★ 원본에 '불균형; 눈에 띄는 차이'(disparity 의 뜻)가 잘못 들어와 있었다. */
  { word:"dumbfounded", pron:"덤파운디드", pos:"adj", level:"C2", meanings:["말문이 막힌","어안이 벙벙한"],
    syn:["speechless","astounded","flabbergasted"],
    ex:[{ s:"The audience sat {{}} after the announcement.", f:"dumbfounded", ko:"발표 후 관객은 말문이 막힌 채 앉아 있었다." }] },

  { word:"duplicate", pron:"듀플리케이트", pos:"v", level:"C1", meanings:["복제하다","되풀이하다"],
    syn:["copy","replicate","reproduce"],
    ex:[{ s:"It is hard to {{}} those results in another lab.", f:"duplicate", ko:"다른 실험실에서 그 결과를 재현하기는 어렵다." }] },

  { word:"duration", pron:"두레이션", pos:"n", level:"C1", meanings:["지속 기간","기간"],
    syn:["length","period","span"],
    ex:[{ s:"The {{}} of the treatment is about six weeks.", f:"duration", ko:"그 치료의 지속 기간은 약 6주다." }] },

  { word:"duty", pron:"듀티", pos:"n", level:"B1", meanings:["의무","임무"],
    syn:["obligation","responsibility","task"], ant:["privilege"],
    ex:[{ s:"Every citizen has a {{}} to vote in the election.", f:"duty", ko:"모든 시민은 선거에서 투표할 의무가 있다." }] },

  { word:"dwell on", pron:"드웰 온", pos:"phr", level:"C1", meanings:["곱씹다","되새기다"],
    syn:["brood over","harp on","linger on"] },

  { word:"dwindle", pron:"드윈들", pos:"v", level:"C1", meanings:["줄어들다","작아지다"],
    syn:["shrink","diminish","taper off"], ant:["grow"],
    ex:[{ s:"Supplies began to {{}} after the third week.", f:"dwindle", ko:"3주째가 지나자 물자가 줄어들기 시작했다." }] },

  { word:"dynasty", pron:"다이너스티", pos:"n", level:"C1", meanings:["왕조","왕가"],
    syn:["lineage","house","regime"],
    ex:[{ s:"The {{}} ruled the region for over four centuries.", f:"dynasty", ko:"그 왕조는 그 지역을 400년 넘게 통치했다." }] }
];


/* ── 영단어 → 한국어 뜻 사전 (D 세트 몫) ──────────────
   VOCAB 에 표제어로 없는 유의어·반의어의 뜻을 등록한다.
   ⚠️ 재대입(=)이 아니라 Object.assign 으로 합쳐야 A·B·C 세트 것이 살아남는다. */
Object.assign(window.GLOSS, {
  /* ── 1차 (damp ~ deck) 몫 66개 ───────────────── */
  "arrears":"연체금, 미납금",
  /* asset 은 이미 A~C 세트의 표제어다 — 사전에 넣으면 중복이다 */
  "brighten":"밝게 하다, 밝아지다",
  "centralization":"중앙 집권화",
  "chair":"의장; 의장을 맡다",
  "clammy":"축축하고 차가운, 끈적한",
  "conclusive":"결정적인, 확실한",
  "corruption":"부패, 타락",
  "cutoff":"마감 시한, 차단",
  "daybreak":"새벽, 동틀 무렵",
  "deceitful":"남을 속이는, 부정직한",
  "deception":"속임, 사기",
  "decode":"해독하다, 판독하다",
  "degeneracy":"퇴폐, 퇴화",
  "devolution":"권한 이양",
  "dim":"어둑하게 하다; 어스름한",
  "discussion":"논의, 토의",
  "dry":"마른, 건조한",
  "due date":"만기일, 예정일",
  "dusk":"황혼, 해질녘",
  "false":"거짓의, 잘못된",
  "formidable":"가공할, 만만치 않은",
  "go back to":"~까지 거슬러 올라가다",
  "hang":"걸다, 매달다",
  "honesty":"정직, 솔직함",
  "immorality":"부도덕, 패륜",
  "indecent":"무례한, 점잖지 못한",
  "intimidating":"겁을 주는, 위압적인",
  "moist":"촉촉한, 습기 있는",
  "moisten":"축이다, 적시다",
  "muffle":"소리를 죽이다, 감싸다",
  "obligation":"의무, 책무",
  "originate in":"~에서 비롯되다",
  "outset":"시초, 시작",
  "platform":"승강장; 발판",
  "reassuring":"안심시키는",
  "remains":"유물, 잔존물",
  "rot":"썩다, 부패하다",
  "rubble":"돌무더기, 파편",
  "sunrise":"해돋이, 일출",
  "swing":"흔들리다, 흔들다",
  "time limit":"제한 시간",
  "trade in":"~을 거래하다",
  "unravel":"풀다, 밝혀내다",
  "wreckage":"잔해, 난파",

  /* ── 2차 (declare ~ deliver) 몫 74개 ──────────── */
  "acceleration":"가속, 촉진",
  "accidentally":"우연히, 실수로",
  "adornment":"장식, 장식품",
  "break down":"분해되다; 고장 나다",
  "calculated":"계획적인, 의도된",
  "cheapen":"값을 떨어뜨리다, 하찮게 만들다",
  "clearing":"개간지, 벌채지",
  "dainty":"우아한, 정교한",
  "debasement":"저하, 하락",
  "demean":"비하하다, 깎아내리다",
  "deputation":"대표단, 파견",
  "deputy":"대리인, 부관",
  "desiccate":"건조시키다",
  "deterioration":"악화, 저하",
  "disfigure":"흉하게 만들다",
  "disobey":"불복종하다, 거역하다",
  "dry out":"말리다, 건조되다",
  "edict":"포고령, 칙령",
  "enjoyable":"즐거운, 재미있는",
  "erase":"지우다, 삭제하다",
  "feat":"공적, 위업",
  "final":"최종적인, 마지막의",
  "flout":"무시하다, 어기다",
  "frenzied":"광분한, 격앙된",
  "hand over":"건네주다, 인계하다",
  "holdup":"지연, 정체",
  "hydrate":"수분을 공급하다",
  "imperfection":"결함, 불완전함",
  "improve":"개선하다, 향상되다",
  "inadequate":"부적절한, 불충분한",
  "infer":"추론하다, 유추하다",
  "insufficiency":"불충분, 부족",
  "intentionally":"의도적으로, 고의로",
  "lacking":"부족한, 없는",
  "logging":"벌목, 삼림 채벌",
  "mar":"훼손하다, 망치다",
  "misshape":"모양을 망치다",
  "ordinance":"조례, 법령",
  "overjoyed":"매우 기뻐하는",
  "parch":"바싹 마르게 하다",
  "perfection":"완벽, 완전함",
  "postponement":"연기, 유예",
  "premeditated":"미리 계획된",
  "raving":"헛소리하는, 광란의",
  "reforestation":"재조림, 삼림 재생",
  "ruling":"판결, 결정",
  "shelve":"미루다, 보류하다",
  "shortfall":"부족액, 적자",
  "take off":"떼다, 공제하다",
  "thrilled":"아주 기쁜, 흥분한",
  "tree felling":"수목 벌채",
  "trimming":"장식, 테두리",
  "unpleasant":"불쾌한, 기분 나쁜",
  "vandalize":"파괴하다, 훼손하다",
  "warp":"휘게 하다, 뒤틀리다",
  "work out":"알아내다, 계산해 내다",

  /* ── 3차 (delude ~ derived from) 몫 81개 ────────── */
  "appalling":"충격적인, 개탄스러운",
  "arrive":"도착하다",
  "based on":"~에 근거한",
  "bearing":"태도, 처신",
  "bemoan":"한탄하다, 슬퍼하다",
  "cheerful":"명랑한, 기분 좋은",
  "compactness":"조밀함, 촘촘함",
  "crowded":"붐비는, 혼잡한",
  "decry":"매도하다, 깎아내리다",
  "deepness":"깊음, 깊이",
  "dejected":"낙심한, 풀이 죽은",
  "demented":"정신이 나간, 치매의",
  "despondency":"낙담, 의기소침",
  "despondent":"낙담한, 의기소침한",
  "destitution":"궁핍, 빈곤",
  "dethrone":"왕위에서 몰아내다",
  "devaluation":"평가 절하, 가치 하락",
  "devalue":"가치를 떨어뜨리다",
  "discourage":"의욕을 꺾다, 만류하다",
  "disgraceful":"수치스러운, 불명예스러운",
  "dishearten":"낙담시키다",
  "dismantle":"해체하다, 분해하다",
  "dispirit":"기를 죽이다",
  "dispossess":"소유권을 빼앗다",
  "divest":"박탈하다, 처분하다",
  "drought":"가뭄",
  "exacting":"엄격한, 힘든",
  "exhaustion":"고갈, 탈진",
  "exhibit":"드러내다; 전시하다",
  "fool":"속이다; 바보",
  "insist on":"~을 강력히 요구하다",
  "lament":"애통해하다, 한탄하다",
  "lose value":"가치가 떨어지다",
  "loss in value":"가치 손실",
  "mark down":"값을 내리다",
  "markdown":"가격 인하",
  "mobilize":"동원하다",
  "originating in":"~에서 비롯하는",
  "oust":"축출하다, 밀어내다",
  "overthrow":"전복시키다, 타도하다",
  "popular rule":"민중 통치",
  "prepayment":"선불, 선납",
  "privation":"결핍, 궁핍",
  "profundity":"심오함, 깊이",
  "raze":"완전히 파괴하다",
  "replenish":"다시 채우다, 보충하다",
  "republic":"공화국, 공화제",
  "self-government":"자치",
  "set off":"출발하다, 떠나다",
  "sparse":"드문, 희박한",
  "stemming from":"~에서 유래하는",
  "taxing":"부담이 큰, 힘겨운",
  "thick":"두꺼운; 빽빽한",
  "thickness":"두께, 진함",
  "thoroughness":"철저함, 빈틈없음",
  "unhinged":"정신이 이상해진",
  "use up":"다 써 버리다",
  "warehouse":"창고, 저장고",
  "withdraw":"철수하다, 회수하다",

  /* ── 4차 (desalinate ~ deviate) 몫 60개 ─────────── */
  "aberrant":"정상에서 벗어난, 이상한",
  "appoint":"임명하다, 정하다",
  "ascertain":"확인하다, 알아내다",
  "attractive":"매력적인, 마음을 끄는",
  "bypass":"우회로; 우회하다",
  "cleaning agent":"세정제",
  "cleanser":"세정제, 클렌저",
  "constructive":"건설적인, 유익한",
  "curb":"억제, 제약",
  "decide":"결정하다, 결심하다",
  "deserted":"인적이 없는, 버려진",
  "disconnect":"연결을 끊다, 분리하다",
  "disconsolate":"슬픔에 잠긴, 위로할 수 없는",
  "disincentive":"억제 요인, 방해 요소",
  "drop":"떨어지다; 하락",
  "endpoint":"종점, 최종 지점",
  "fine point":"세부 사항, 미세한 점",
  "forlorn":"쓸쓸한, 절망적인",
  "frantically":"미친 듯이, 정신없이",
  "frenzy":"광란, 격분",
  "gloom":"침울, 어둠",
  "go down":"내려가다, 하강하다",
  "goal":"목표, 골",
  "hope":"희망, 바람",
  "hopeless":"절망적인, 방법이 없는",
  "hopelessly":"절망적으로, 어찌할 수 없이",
  "hopelessness":"절망, 희망 없음",
  "lay waste":"황폐하게 만들다",
  "ravage":"파괴하다, 유린하다",
  "recklessness":"무모함, 부주의",
  "recount":"이야기하다, 상세히 말하다",
  "roundabout route":"우회로",
  "scanner":"스캐너, 판독기",
  "sense":"감지하다; 감각",
  "sensor":"감지기, 센서",
  "soap":"비누",
  "terminus":"종착지, 끝",
  "title":"명칭, 칭호",
  "undesirable":"바람직하지 않은",
  "urgently":"긴급히, 절박하게",
  "warrant":"정당화하다, ~할 만하다",
  "willpower":"의지력",
  "wish":"바람, 소망",

  /* ── 5차 (device ~ direction) 몫 57개 ──────────── */
  "adroitness":"능숙함, 솜씨",
  "assiduous":"근면한, 끈덕진",
  "augment":"늘리다, 증대시키다",
  "bereft":"잃은, 결여된",
  "caliber":"구경; 직경",
  "chart":"도표, 차트",
  "commit":"전념하다; 저지르다",
  "credential":"자격 증명, 증명서",
  "dedicate":"바치다, 전념하다",
  "delve into":"~을 깊이 파다",
  "dunk":"살짝 담그다",
  "faithfully":"충실하게, 성실히",
  "firsthand":"직접 얻은, 직접적인",
  "food-related":"음식 관련의",
  "formulate":"만들어 내다, 공식화하다",
  "give over":"내주다, 맡기다",
  "gobble":"급히 먹다, 꿀꺽 삼키다",
  "hardworking":"열심히 일하는",
  "industrious":"근면한, 부지런한",
  "lazy":"게으른, 나태한",
  "local tongue":"지역 말",
  "loyally":"충성스럽게",
  "number":"수, 숫자",
  "numeral":"숫자, 수사",
  "nutritive":"영양이 되는",
  "pinpoint":"정확히 찾아내다",
  "poised":"침착한, 태연한",
  "predicament":"곤경, 궁지",
  "quandary":"곤경, 난처함",
  "recitation":"암송, 낭독",
  "regional speech":"지역 말투",
  "schematic":"개략도, 도해",
  "self-respect":"자존감",
  "selflessly":"이타적으로, 헌신적으로",
  "stateliness":"위엄, 장엄함",
  "stately":"위엄 있는, 웅장한",
  "tell apart":"가려내다, 분간하다",
  "thin":"묽게 하다; 얇은",
  "tight spot":"궁지, 곤란한 처지",
  "transcription":"필기, 옮겨 적기",
  "undignified":"품위 없는, 체면 없는",
  "vernacular":"토착어, 일상어",
  "water down":"물을 타다, 희석하다",
  "wolf down":"허겁지겁 먹다",

  /* ── 6차 (directory ~ dismal) 몫 69개 ──────────── */
  "able-bodied":"신체가 건강한",
  "adherent":"지지자, 신봉자",
  "appealing":"매력적인, 마음을 끄는",
  "approve":"찬성하다, 승인하다",
  "bias":"편견, 편향",
  "break with":"~와 관계를 끊다",
  "calamitous":"재난을 초래하는, 비참한",
  "contentment":"만족, 자족",
  "crippling":"심각한 타격을 주는",
  "debilitating":"심신을 약화시키는",
  "dialogue":"대화, 담화",
  "disheartened":"낙담한",
  "dishonor":"불명예, 굴욕",
  "dismayed":"실망한, 경악한",
  "dissertation":"논문, 논설",
  "distaste":"싫음, 혐오",
  "dole out":"조금씩 나눠주다",
  "dump":"버리다, 내던지다",
  "equality":"평등, 균등",
  "follower":"추종자, 신봉자",
  "frown on":"~을 못마땅해하다",
  "handicap":"장애, 불리한 조건",
  "impaired":"손상된, 장애가 있는",
  "impairment":"손상, 장애",
  "incapacitated":"무력해진, 능력을 잃은",
  "incapacitating":"무력하게 만드는",
  "inconvenience":"불편, 애로",
  "indiscreet":"분별없는, 무분별한",
  "jettison":"던져 버리다, 포기하다",
  "listing":"목록, 명단",
  "loathing":"혐오, 질색",
  "make out":"알아보다, 식별하다",
  "make public":"공개하다",
  "malady":"병, 질환",
  "masquerade":"가면, 위장",
  "mismatch":"불일치, 부조화",
  "obnoxious":"아주 불쾌한, 몹시 기분 나쁜",
  "rebate":"환급금, 할인",
  "revolting":"역겨운, 구역질나는",
  "revulsion":"혐오, 역겨움",
  "self-control":"자제력",
  "sever":"끊다, 절단하다",
  "shame":"수치, 창피",
  "sickening":"역겹게 하는, 진저리나는",
  "soreness":"아픔, 쓰라림",
  "successful":"성공한, 성공적인",
  "tactful":"요령 있는, 사려 깊은",
  "talk over":"논의하다, 상의하다",
  "throw away":"버리다, 내버리다",
  "unbiased":"편견 없는, 공정한",
  "unfairness":"불공정, 부당함",
  "unrest":"불안, 소요",
  "untruthful":"진실하지 않은, 거짓의",

  /* ── 7차 (dismay ~ disturbance) 몫 51개 ─────────── */
  "alarm":"불안, 경악",
  "bother":"괴롭히다, 신경 쓰이게 하다",
  "brush aside":"무시하다, 제쳐 두다",
  "commotion":"소동, 소란",
  "consternation":"경악, 대경실색",
  "debar":"자격을 박탈하다",
  "deformation":"변형, 기형",
  "denigrate":"비방하다, 폄하하다",
  "derail":"탈선시키다, 틀어지게 하다",
  "disagreement":"불일치, 의견 차이",
  "disband":"해산하다, 해체하다",
  "disharmony":"부조화, 불화",
  "dispel":"없애다, 떨쳐 버리다",
  "displeasure":"불쾌, 불만",
  "excellence":"우수성, 탁월함",
  "expendable":"없애도 되는, 소모성의",
  "fire":"해고하다",
  "illustrious":"걸출한, 이름난",
  "imbalance":"불균형",
  "inborn":"타고난, 선천적인",
  "interval":"간격, 사이",
  "liquefy":"액화하다, 녹이다",
  "misrepresentation":"잘못된 표현, 허위 진술",
  "misshapen":"모양이 이상한, 일그러진",
  "objectionable":"불쾌한, 문제가 되는",
  "parity":"동등, 등가",
  /* refute 가 이미 '반박하다, 논박하다'다 — 글자까지 같으면 피드백 두 줄이
     같아지므로 rebut 은 '맞받아 반론하다' 쪽으로 구별한다 */
  "rebut":"반론하다, 맞받아치다",
  "repugnant":"혐오스러운, 아주 불쾌한",
  "reusable":"재사용 가능한",
  "satisfaction":"만족, 충족",
  "send off":"발송하다, 보내다",
  "share out":"나눠 주다, 분배하다",
  "sidetrack":"곁길로 빠지게 하다",
  "single-use":"일회용의",
  "skewed":"왜곡된, 편향된",
  "temperamental":"기질의, 변덕스러운",
  "throwaway":"일회용의, 쓰고 버리는",
  "unmistakable":"오해할 수 없는, 명백한",
  "unsettle":"불안하게 하다, 뒤흔들다",
  "upheaval":"격변, 대변동",

  /* ── 8차 (ditch ~ downplay) 몫 61개 ────────────── */
  "asleep":"잠든, 활동하지 않는",
  "assorted":"여러 가지의, 갖가지의",
  "branch off":"갈라져 나가다",
  "branch out":"사업을 확장하다",
  "break in":"길들이다; 침입하다",
  "breakup":"결별, 해체",
  "contribution":"기부, 기여",
  "contributor":"기부자, 기여자",
  "converge":"한데 모이다, 수렴하다",
  "destruction":"파괴, 말살",
  "dissolution":"해산, 해체",
  "domineering":"지배하려 드는, 오만한",
  "duck":"몸을 숙여 피하다",
  "faint":"어질한, 희미한",
  "field":"분야, 영역",
  "giddiness":"어지럼증, 현기증",
  "giddy":"어지러운, 아찔한",
  "gift":"선물, 기증품",
  "give":"주다, 기부하다",
  "giver":"주는 사람, 기부자",
  "gutter":"배수구, 시궁창",
  "house-trained":"집 안에서 길들여진",
  "inactive":"활동하지 않는, 비활성의",
  "initial payment":"초기 납입금",
  "leading":"주요한, 선도하는",
  "lightheaded":"어지러운, 멍한",
  "lightheadedness":"어지러움, 멍함",
  /* varied 가 '다양한, 여러 가지의'다 — 글자까지 같으면 안 되므로 구별한다 */
  "manifold":"여러 갈래의, 다방면의",
  "marriage":"결혼",
  "multiplicity":"다양성, 다수",
  "offering":"제공물, 기부",
  "overbearing":"위압적인, 거만한",
  "overshadow":"그늘지게 하다, 압도하다",
  "partition":"분할, 칸막이",
  "payout":"지급금, 배당",
  "redirect":"방향을 바꾸다",
  "reroute":"경로를 바꾸다",
  "tamed":"길들여진",
  "tenet":"교리, 신조",
  "train":"훈련시키다, 길들이다",
  "trained":"훈련된, 길들여진",
  "trench":"참호, 도랑",
  "understate":"축소해 말하다",
  "undoing":"파멸의 원인, 몰락",
  "unruly":"다루기 힘든, 제멋대로인",
  "vertigo":"현기증, 어지럼증",
  "wild":"야생의, 길들지 않은",

  /* ── 9차 (downpour ~ dynasty) 몫 68개 — 전량 완료 ─── */
  "astounded":"경악한, 크게 놀란",
  "be terrified of":"~을 몹시 두려워하다",
  "because of":"~때문에",
  "binary":"이진의, 두 부분의",
  "boring":"지루한, 재미없는",
  "brood over":"~을 곱씹다",
  "call in":"잠깐 들르다",
  "cloudburst":"갑작스러운 폭우",
  "disadvantage":"불리한 점, 약점",
  "double":"두 배의, 이중의",
  "douse":"물을 끼얹다, 흠뻑 젖게 하다",
  "drab":"칙칙한, 단조로운",
  "drowse":"졸다, 선잠 자다",
  "expected":"예상되는, 예정된",
  "extreme":"극단적인, 지나친",
  "fend off":"막아 내다, 물리치다",
  "flabbergasted":"몹시 놀란, 기가 막힌",
  "harp on":"~을 되풀이해 말하다",
  "haul":"끌어당기다, 운반하다",
  "heavy rain":"큰비",
  "lethargic":"무기력한, 축 처진",
  "light rain":"가벼운 비",
  "lineage":"혈통, 가계",
  "linger on":"오래 머무르다",
  "look in":"잠깐 들여다보다",
  "markedly":"현저히, 눈에 띄게",
  "mist":"안개, 옅은 안개비",
  "outflow":"유출, 흘러 나감",
  "owing":"지불해야 하는, 미납의",
  "owing to":"~로 인해",
  "payable":"지불해야 하는, 지불 가능한",
  "pull out":"물러나다, 손을 떼다",
  "questionable":"의심스러운, 문제가 있는",
  "rough copy":"초고, 초벌 원고",
  "sewerage":"하수 처리, 하수도",
  "shrink from":"~을 피하다, 꺼리다",
  "single":"하나의, 단일한",
  "siphon":"빨아내다, 유출시키다",
  "sketch":"밑그림, 개요",
  "sleepy":"졸린, 졸음이 오는",
  "snooze":"눈을 붙이다, 잠깐 자다",
  "speechless":"말을 잃은, 말이 안 나오는",
  "strikingly":"놀랄 만큼, 두드러지게",
  "sweeping":"전면적인, 대폭적인",
  "tap into":"~을 활용하다",
  "taper off":"점차 줄어들다",
  "thanks to":"~덕분에",
  "tug":"세게 당기다",
  "welcome":"반기다, 환영하다"
});
