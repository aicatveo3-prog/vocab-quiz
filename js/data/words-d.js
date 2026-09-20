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
 * 진행 상황: 30 / 333단어 (damp ~ deck) — 1차.
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
    ex:[{ s:"Passengers gathered on the upper {{}} to watch the harbor.", f:"deck", ko:"승객들이 항구를 보려고 상층 갑판에 모였다." }] }
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
  "decompose":"분해되다, 부패하다",
  "degeneracy":"퇴폐, 퇴화",
  "delegation":"위임; 대표단",
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
  "wreckage":"잔해, 난파"
});
