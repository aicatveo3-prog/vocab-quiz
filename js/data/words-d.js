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
 * 진행 상황: 68 / 333단어 (damp ~ deliver) — 2차.
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
    syn:["dim","shade","blacken"], ant:["brighten"],
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
    syn:["trade in","handle","stock"] },

  { word:"deal with", pron:"딜 위드", pos:"phr", level:"B1", meanings:["처리하다","다루다"],
    syn:["handle","address","tackle"], ant:["ignore"] },

  { word:"dean", pron:"딘", pos:"n", level:"C1", meanings:["학장","학과장"],
    syn:["head","principal","chair"],
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
    syn:["protect","guard","shield"], ant:["attack"],
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
    ex:[{ s:"The courier promised to {{}} the package before noon.", f:"deliver", ko:"택배 기사가 정오 전에 소포를 배달하겠다고 했다." }] }
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
  "delude":"착각하게 하다, 속이다",
  "deteriorate":"악화되다, 나빠지다",
  "devolution":"권한 이양",
  "dim":"어둑하게 하다; 어스름한",
  "discussion":"논의, 토의",
  "drown out":"소리를 덮어 버리다",
  "dry":"마른, 건조한",
  "due date":"만기일, 예정일",
  "dusk":"황혼, 해질녘",
  "encode":"암호화하다, 부호화하다",
  "false":"거짓의, 잘못된",
  "fatal":"치명적인, 죽음을 초래하는",
  "formidable":"가공할, 만만치 않은",
  "go back to":"~까지 거슬러 올라가다",
  "hang":"걸다, 매달다",
  "hesitate":"망설이다, 주저하다",
  "honesty":"정직, 솔직함",
  "humid":"습한, 후덥지근한",
  "immorality":"부도덕, 패륜",
  "indecent":"무례한, 점잖지 못한",
  "indecisive":"결단력 없는, 우유부단한",
  "interpret":"해석하다, 통역하다",
  "intimidating":"겁을 주는, 위압적인",
  "lethal":"치사의, 죽음에 이르는",
  "misleading":"오해를 일으키는",
  "moist":"촉촉한, 습기 있는",
  "moisten":"축이다, 적시다",
  "mortal":"죽을 운명의; 치명적인",
  "muffle":"소리를 죽이다, 감싸다",
  "obligation":"의무, 책무",
  "originate in":"~에서 비롯되다",
  "outset":"시초, 시작",
  "overwhelming":"압도적인, 너무도 강력한",
  "platform":"승강장; 발판",
  "reassuring":"안심시키는",
  "remains":"유물, 잔존물",
  "resolute":"단호한, 확고한",
  "respectable":"존경할 만한, 훌륭한",
  "rot":"썩다, 부패하다",
  "rubble":"돌무더기, 파편",
  "shade":"그늘지게 하다; 그늘",
  "stem from":"~에서 유래하다",
  "sunrise":"해돋이, 일출",
  "swing":"흔들리다, 흔들다",
  "time limit":"제한 시간",
  "trade in":"~을 거래하다",
  "trick":"속이다; 속임수",
  "trickery":"속임수, 사기",
  "unravel":"풀다, 밝혀내다",
  "venture":"과감히 하다; 모험",
  "virtue":"미덕, 덕목",
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
  "diminish":"줄이다, 감소하다",
  "disappointed":"실망한, 낙담한",
  "disfigure":"흉하게 만들다",
  "disobey":"불복종하다, 거역하다",
  "distort":"왜곡하다, 비틀다",
  "dry out":"말리다, 건조되다",
  "dwindle":"줄어들다, 작아지다",
  "edict":"포고령, 칙령",
  "enhance":"높이다, 향상시키다",
  "enjoyable":"즐거운, 재미있는",
  "erase":"지우다, 삭제하다",
  "fault":"결점, 잘못",
  "feat":"공적, 위업",
  "final":"최종적인, 마지막의",
  "flaw":"결함, 흠",
  "flout":"무시하다, 어기다",
  "frenzied":"광분한, 격앙된",
  "grade":"등급, 단계",
  "hand over":"건네주다, 인계하다",
  "holdup":"지연, 정체",
  "hydrate":"수분을 공급하다",
  "impair":"손상시키다, 약화시키다",
  "imperfection":"결함, 불완전함",
  "improve":"개선하다, 향상되다",
  "improvement":"개선, 향상",
  "inadequate":"부적절한, 불충분한",
  "incoherent":"일관성 없는, 앞뒤가 안 맞는",
  "infer":"추론하다, 유추하다",
  "insert":"삽입하다, 끼워 넣다",
  "insufficiency":"불충분, 부족",
  "intentional":"의도적인, 고의의",
  "intentionally":"의도적으로, 고의로",
  "lacking":"부족한, 없는",
  "logging":"벌목, 삼림 채벌",
  "mar":"훼손하다, 망치다",
  "misshape":"모양을 망치다",
  "mission":"사절단; 임무",
  "ordinance":"조례, 법령",
  "overjoyed":"매우 기뻐하는",
  "parch":"바싹 마르게 하다",
  "perfection":"완벽, 완전함",
  "postponement":"연기, 유예",
  "premeditated":"미리 계획된",
  "raving":"헛소리하는, 광란의",
  "reforestation":"재조림, 삼림 재생",
  "regress":"퇴행하다, 되돌아가다",
  "ruling":"판결, 결정",
  "shelve":"미루다, 보류하다",
  "shield":"보호하다; 방패",
  "shortfall":"부족액, 적자",
  "sturdy":"튼튼한, 견고한",
  "subtract":"빼다, 공제하다",
  "take off":"떼다, 공제하다",
  "tentative":"잠정적인, 임시의",
  "thrilled":"아주 기쁜, 흥분한",
  "tree felling":"수목 벌채",
  "trimming":"장식, 테두리",
  "unpleasant":"불쾌한, 기분 나쁜",
  "vandalize":"파괴하다, 훼손하다",
  "warp":"휘게 하다, 뒤틀리다",
  "work out":"알아내다, 계산해 내다"
});
