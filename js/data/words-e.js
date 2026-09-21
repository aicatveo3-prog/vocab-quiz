/**
 * 단어 데이터 — 수능 보카 E 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *
 * ⚠️ COL_POOLS 와 GLOSS 는 words.js 가 이미 만들어 둔 객체다.
 *    여기서 window.GLOSS = {...} 로 재대입하면 A~D 세트의 것이 통째로
 *    사라진다. 반드시 이 파일 맨 아래처럼 Object.assign 으로 병합할 것.
 *
 * ── 이 세트를 쓰면서 지키는 규약 (D 세트와 동일) ──
 *
 * meanings — 대표 2개까지만. 첫 뜻에는 괄호 설명을 넣지 않는다.
 *   4지선다 선택지와 짝 맞추기 카드에 그대로 찍히는 문자열이다.
 *
 * ex.f — 반드시 '규칙 변화'만 쓴다.  ★ 가장 중요한 함정
 *   불규칙이면 오답이 원형으로 남아 뜻을 몰라도 정답이 보인다.
 *   tools/words-e-audit.js 가 기계로 검사한다.
 *
 * syn — 문맥에서 실제로 바꿔 쓸 수 있는 말 3개, 아니면 아예 비운다.
 *   3개 미만이면 '아닌 것 고르기'가 출제되지 않으면서 데이터만 남는다.
 *
 *   ★ 유의어를 고른 뒤 반드시 GLOSS 에 이미 있는지, 그 뜻이 이 문맥에 맞는지
 *     확인할 것. 이미 있으면 '거기 적힌 뜻'이 화면에 뜬다. 1차에서 실제로
 *     걸러낸 것:
 *       edge 의 유의어 border → "(경계를) 접하다"(동사)  ✗ → boundary
 *       edge 의 유의어 margin → "여백; 차이"             ✗ → rim
 *       efface 의 유의어 wipe out → "전멸시키다"(과함)    ✗ → blot out
 *     node tools/pron-render-check.js --word <표제어> 로 확인한다.
 *
 * ant — 진짜 반대말만. 애매하면 '아닌 것 고르기'가 논쟁거리가 된다.
 *
 * pos·level — 오답 후보는 '같은 품사 · 레벨 ±1'로 걸러진다. 한쪽에 몰면
 *   후보가 3개 미만이 되어 그 단어가 조용히 출제에서 빠진다(에러도 안 난다).
 *
 * pron — 한글 발음. 표기 규칙은 js/data/pron.js 헤더에 정리돼 있다.
 *   표제어가 pron 을 가지면 PRON 사전의 같은 항목은 군더더기이므로 반드시
 *   지운다 (tools/pron-audit.js 가 중복을 오류로 잡는다).
 *
 * ── 원본 목록에서 바로잡은 것 ─────────────────
 *   emulate     '치솟다, 급등하다'  → 모방하다, 흉내내다   (escalate 의 뜻이 섞였다)
 *   erode       '밤에 일어나는'     → 침식하다, 부식시키다  (nocturnal 의 뜻)
 *   extrovert   '외향적인'(형용사)  → 외향적인 사람(명사)  (extroverted 와 혼동)
 *   evident     '눈의 띄는'         → 눈에 띄는           (오타)
 *   effortless  '힘들지 않는'       → 힘들지 않은         (어미)
 *   exemplary   '칭찬할만한'        → 칭찬할 만한         (띄어쓰기)
 *   earthly     '도대체, 조금도' 갈래 제거 — 부정문 관용 용법이라 카드에 못 싣는다.
 *               '지상의'를 앞으로 (heavenly·divine 의 반의어로 쓰이는 뜻이 세속적인 쪽)
 *   edge        '우위' 갈래 제거 — 기존 GLOSS "가장자리, 끝"을 그대로 유지해야
 *               blade·brink·competitiveness·core 의 기존 문제가 안 변한다
 *   ecology     '생태계'를 뒤로 — ecosystem 과 뜻이 겹쳐 짝 맞추기가 억울해진다
 *
 * ── 작업 현황 ─────────────────────────────────
 * 250단어 (e-commerce ~ eyesore) — 13챕터. 20개씩 13차에 나눠 쓴다.
 * 차수를 챕터 크기(20)에 맞췄다. 알파벳순으로 뒤에만 붙으므로 한 번 완성한
 * 챕터는 다음 차수가 건드리지 않는다 — 차수마다 챕터 하나가 확정된다.
 *
 *   1차  20개  e-commerce ~ efficient      ← 완료
 *   2차  20개  effortless ~ elevated       ← 완료
 *   3차  20개  elevation ~ eminent
 *   4차  20개  emission ~ encourage
 *   5차  20개  encouragement ~ enlighten
 *   6차  20개  enormous ~ environment-friendly
 *   7차  20개  envision ~ erratic
 *   8차  20개  erroneous ~ evaluate
 *   9차  20개  evaporate ~ excess
 *  10차  20개  excessive ~ exhibition
 *  11차  20개  exhilarating ~ explicit
 *  12차  20개  explicitly ~ extinct
 *  13차  10개  extinction ~ eyesore
 *
 * ── 1차 기록 ─────────────────────────────────
 * syn 을 비운 7개 (e-commerce·ebb·eclipse·ecological·ecology·ecosystem·
 * economics) 는 바꿔 쓸 낱말이 없는 기술 명사다. 알파벳 앞머리에 eco-·econ-
 * 이 몰려 우연히 한 차수에 겹쳤고, 뒤 차수는 동사·형용사가 많아 정상이다.
 * 억지로 채우면 틀린 유의어를 가르치게 되므로 비웠다. 그 단어는 '아닌 것
 * 고르기'에만 안 나오고 나머지 4개 모드는 정상 출제된다.
 *
 * 표제어가 되면서 사전에서 지운 항목 4개
 *   gloss.js   economical, ecstasy
 *   words-c.js earthly, edge
 *   pron.js    earthly, economical, ecstasy, edge
 *
 * ── 2차 기록 ─────────────────────────────────
 * syn 을 비운 2개 — electoral(선거의)·electromagnetic field(전자기장).
 * 1차의 7개에서 크게 줄었다. eco-·econ- 명사 무리를 지났기 때문이다.
 *
 * 표제어가 되면서 사전에서 지운 항목 5개
 *   gloss.js   elaborate, election, elevated
 *   words-c.js effortless, element
 *   pron.js    effortless, elaborate, election, element, elevated
 *
 * 기존 문제를 지키려고 원본과 달리 정한 것
 *   element   '성분' → '원소'. compound(화합물)의 반의어로 이미 쓰이고 있어
 *             원소 갈래를 버리면 그 문제가 무너진다 (Salt is a compound of…)
 *   elevated  기존 GLOSS "높은, 고상한"과 똑같이 둬서 aerial 의 유의어가 안 변한다
 *   elements  레벨을 C1 로 벌렸다. element(B1)와 '레벨 ±1' 필터로 갈라져
 *             철자가 s 하나 다른 두 낱말이 한 문제의 보기로 같이 뜨지 않는다
 *
 * 유의어에서 걸러낸 것 — GLOSS 뜻이 문맥과 어긋나는 경우
 *   electricity 의 current → "흐름, 현재의"   ✗ → electric current(전류)
 *   eject 의 admit          → "인정하다, 시인하다" ✗ → let in
 *   elegant 의 crude        → "대충의, 원유"   ✗ → inelegant
 *
 * 단어를 더 넣을 때 확인 방법:
 *   node tools/words-e-audit.js           검사 6종 + 출제 시뮬레이션
 *   node tools/words-e-audit.js --rules   검사별 수행 건수
 *   node tools/pron-audit.js              발음 커버리지
 *   node tools/pron-render-check.js --all 전수 점검
 *   node tools/d-impact.js                기존 세트 영향 측정
 *   node tools/match-order-check.js       짝 맞추기 보드 전수 검사
 */
window.VOCAB_E = [
  /* ── e-co ──────────────────────────────────── */
  { word:"e-commerce", pron:"이커머스", pos:"n", level:"B2", meanings:["전자 상거래"],
    ex:[{ s:"Small family shops moved into {{}} to survive the downturn.", f:"e-commerce", ko:"작은 가족 상점들은 불황을 견디려고 전자 상거래로 옮겨 갔다." }] },

  { word:"earnest", pron:"어니스트", pos:"adj", level:"B2", meanings:["성실한","진지한"],
    syn:["sincere","wholehearted","serious"], ant:["insincere"],
    ex:[{ s:"His {{}} concern for the workers finally won their trust.", f:"earnest", ko:"노동자들을 향한 그의 성실한 관심이 마침내 그들의 신뢰를 얻었다." }] },

  { word:"earthly", pron:"어슬리", pos:"adj", level:"C1", meanings:["지상의","세속적인"],
    syn:["worldly","terrestrial","mundane"], ant:["heavenly"],
    ex:[{ s:"He gave up his {{}} possessions and entered the monastery.", f:"earthly", ko:"그는 세속적인 재산을 포기하고 수도원에 들어갔다." }] },

  { word:"easygoing", pron:"이지고잉", pos:"adj", level:"B2", meanings:["태평한","느긋한"],
    syn:["relaxed","laid-back","tolerant"], ant:["uptight"],
    ex:[{ s:"Her {{}} manner quickly calmed the nervous applicants.", f:"easygoing", ko:"그녀의 느긋한 태도가 긴장한 지원자들을 금세 진정시켰다." }] },

  { word:"ebb", pron:"엡", pos:"n", level:"C1", meanings:["썰물"],
    ex:[{ s:"Wide flats of sand appear at {{}} twice a day.", f:"ebb", ko:"썰물 때면 하루 두 번 넓은 모래펄이 드러난다." }] },

  { word:"eccentric", pron:"익센트릭", pos:"adj", level:"B2", meanings:["유별난","괴상한"],
    syn:["odd","peculiar","unconventional"], ant:["conventional"],
    ex:[{ s:"The inventor's {{}} habits amused the whole village.", f:"eccentric", ko:"그 발명가의 유별난 습관은 마을 전체를 즐겁게 했다." }] },

  { word:"eclipse", pron:"이클립스", pos:"n", level:"C1", meanings:["일식","월식"],
    ex:[{ s:"Crowds filled the beach to watch the total {{}}.", f:"eclipse", ko:"개기 일식을 보려고 사람들이 해변을 가득 메웠다." }] },

  { word:"ecological", pron:"에컬라지컬", pos:"adj", level:"B2", meanings:["생태계의","생태학적인"],
    ex:[{ s:"Draining the wetland caused lasting {{}} damage.", f:"ecological", ko:"습지의 물을 빼내면서 지속적인 생태계 피해가 생겼다." }] },

  { word:"ecology", pron:"이칼러지", pos:"n", level:"B2", meanings:["생태학","생태계"],
    ex:[{ s:"She spent ten years studying the {{}} of coral reefs.", f:"ecology", ko:"그녀는 산호초 생태학을 연구하며 10년을 보냈다." }] },

  { word:"economical", pron:"에커나미컬", pos:"adj", level:"B2", meanings:["경제적인","실속 있는"],
    syn:["thrifty","frugal","cost-effective"], ant:["wasteful"],
    ex:[{ s:"A hybrid engine is far more {{}} on long drives.", f:"economical", ko:"하이브리드 엔진은 장거리 운전에서 훨씬 더 경제적이다." }] },

  { word:"economics", pron:"에커나믹스", pos:"n", level:"B2", meanings:["경제학"],
    ex:[{ s:"He dropped law and took up {{}} in his second year.", f:"economics", ko:"그는 2학년 때 법학을 그만두고 경제학을 시작했다." }] },

  { word:"ecosystem", pron:"이코시스템", pos:"n", level:"B2", meanings:["생태계"],
    ex:[{ s:"Removing one predator can unbalance an entire {{}}.", f:"ecosystem", ko:"포식자 하나를 없애는 것만으로 생태계 전체의 균형이 깨질 수 있다." }] },

  { word:"ecstasy", pron:"엑스터시", pos:"n", level:"C1", meanings:["황홀","환희"],
    syn:["rapture","bliss","elation"], ant:["misery"],
    ex:[{ s:"The fans screamed in {{}} as the band walked out.", f:"ecstasy", ko:"밴드가 걸어 나오자 팬들은 황홀경에 빠져 소리쳤다." }] },

  /* ── ed ────────────────────────────────────── */
  { word:"edge", pron:"에지", pos:"n", level:"B1", meanings:["가장자리","끝"],
    syn:["rim","brink","boundary"], ant:["center"],
    ex:[{ s:"He balanced the glass on the {{}} of the shelf.", f:"edge", ko:"그는 선반 가장자리에 유리잔을 아슬아슬하게 올려놓았다." }] },

  { word:"edible", pron:"에더블", pos:"adj", level:"B2", meanings:["식용의","먹을 수 있는"],
    syn:["eatable","fit to eat","safe to eat"], ant:["poisonous"],
    ex:[{ s:"Only a few of these wild mushrooms are actually {{}}.", f:"edible", ko:"이 야생 버섯들 중 실제로 식용인 것은 몇 개뿐이다." }] },

  { word:"editorial", pron:"에더토리얼", pos:"n", level:"B2", meanings:["사설","논설"],
    syn:["opinion piece","leading article","commentary"],
    ex:[{ s:"The paper ran a fierce {{}} against the new tax.", f:"editorial", ko:"그 신문은 새 세금에 반대하는 격렬한 사설을 실었다." }] },

  /* ── ef ────────────────────────────────────── */
  { word:"efface", pron:"이페이스", pos:"v", level:"C2", meanings:["지우다","말살하다"],
    syn:["erase","obliterate","blot out"], ant:["restore"],
    ex:[{ s:"Centuries of wind had begun to {{}} the inscription.", f:"efface", ko:"수백 년의 바람이 그 새긴 글귀를 지우기 시작했다." }] },

  { word:"effectiveness", pron:"이펙티브니스", pos:"n", level:"B2", meanings:["유효성","효과"],
    syn:["efficacy","potency","usefulness"], ant:["futility"],
    ex:[{ s:"The trial measured the {{}} of the new vaccine.", f:"effectiveness", ko:"그 임상시험은 새 백신의 유효성을 측정했다." }] },

  { word:"efficiency", pron:"이피션시", pos:"n", level:"B2", meanings:["능률","효율"],
    syn:["productivity","effectiveness","competence"], ant:["inefficiency"],
    ex:[{ s:"Automating the line raised {{}} by a third.", f:"efficiency", ko:"생산 라인을 자동화해 능률이 3분의 1 높아졌다." }] },

  { word:"efficient", pron:"이피션트", pos:"adj", level:"B2", meanings:["효율적인","능률적인"],
    syn:["effective","productive","streamlined"], ant:["wasteful"],
    ex:[{ s:"A more {{}} layout cut the walking distance in half.", f:"efficient", ko:"더 효율적인 배치로 이동 거리가 절반으로 줄었다." }] },

  { word:"effortless", pron:"에퍼틀리스", pos:"adj", level:"B2", meanings:["힘들지 않은","수월한"],
    syn:["easy","smooth","painless"], ant:["strenuous"],
    ex:[{ s:"She made the difficult passage sound completely {{}}.", f:"effortless", ko:"그녀는 그 어려운 악절을 완전히 수월하게 들리도록 연주했다." }] },

  /* ── eg ────────────────────────────────────── */
  { word:"ego", pron:"이고", pos:"n", level:"B2", meanings:["자아","자존심"],
    syn:["self","self-esteem","pride"], ant:["humility"],
    ex:[{ s:"Losing so badly bruised his {{}} for weeks.", f:"ego", ko:"그렇게 크게 진 것이 몇 주 동안 그의 자존심을 상하게 했다." }] },

  { word:"egocentric", pron:"이고센트릭", pos:"adj", level:"C1", meanings:["자기중심적인","이기적인"],
    syn:["selfish","self-centered","narcissistic"], ant:["altruistic"],
    ex:[{ s:"His {{}} account of the project ignored everyone else.", f:"egocentric", ko:"그 프로젝트에 대한 그의 자기중심적인 설명은 다른 모두를 무시했다." }] },

  /* ── ej · el ───────────────────────────────── */
  { word:"eject", pron:"이젝트", pos:"v", level:"B2", meanings:["몰아내다","쫓아내다"],
    syn:["expel","throw out","evict"], ant:["let in"],
    ex:[{ s:"Guards moved in to {{}} the noisy spectators.", f:"eject", ko:"경비원들이 시끄러운 관중을 몰아내려고 들어왔다." }] },

  { word:"elaborate", pron:"일래버릿", pos:"adj", level:"C1", meanings:["공들인","정교한"],
    syn:["intricate","detailed","painstaking"], ant:["simple"],
    ex:[{ s:"The wedding featured an {{}} ten-course dinner.", f:"elaborate", ko:"그 결혼식에는 공들인 10코스 만찬이 있었다." }] },

  { word:"elastic", pron:"일래스틱", pos:"adj", level:"B2", meanings:["탄력 있는","유연한"],
    syn:["flexible","stretchy","springy"], ant:["rigid"],
    ex:[{ s:"The waistband is {{}} enough to fit most sizes.", f:"elastic", ko:"그 허리 밴드는 대부분의 치수에 맞을 만큼 탄력이 있다." }] },

  { word:"elated", pron:"일레이티드", pos:"adj", level:"C1", meanings:["마냥 행복해하는","신이 난"],
    syn:["overjoyed","thrilled","jubilant"], ant:["dejected"],
    ex:[{ s:"The whole team looked {{}} after the final whistle.", f:"elated", ko:"경기 종료 휘슬이 울린 뒤 팀 전체가 신이 나 보였다." }] },

  { word:"elect", pron:"일렉트", pos:"v", level:"B2", meanings:["선출하다","선택하다"],
    syn:["choose","vote for","appoint"], ant:["dismiss"],
    ex:[{ s:"Members will {{}} a new chair at the spring meeting.", f:"elect", ko:"회원들은 봄 총회에서 새 의장을 선출할 것이다." }] },

  { word:"election", pron:"일렉션", pos:"n", level:"B2", meanings:["선거","선정"],
    syn:["vote","ballot","poll"],
    ex:[{ s:"Turnout in the local {{}} was unusually high.", f:"election", ko:"그 지방 선거의 투표율은 유난히 높았다." }] },

  { word:"electoral", pron:"일렉터럴", pos:"adj", level:"C1", meanings:["선거의"],
    ex:[{ s:"The new {{}} map clearly favors rural districts.", f:"electoral", ko:"새 선거 지도는 분명히 농촌 지역에 유리하다." }] },

  { word:"electorate", pron:"일렉터릿", pos:"n", level:"C1", meanings:["유권자"],
    syn:["voters","constituency","voting public"],
    ex:[{ s:"The entire {{}} was invited to comment on the plan.", f:"electorate", ko:"전체 유권자가 그 계획에 의견을 낼 수 있도록 초청되었다." }] },

  { word:"electricity", pron:"일렉트리서티", pos:"n", level:"B1", meanings:["전기"],
    syn:["electric power","electrical energy","electric current"],
    ex:[{ s:"The storm cut off {{}} to thousands of homes.", f:"electricity", ko:"폭풍이 수천 가구의 전기를 끊었다." }] },

  { word:"electromagnetic field", pron:"일렉트로마그네틱 필드", pos:"n", level:"C1", meanings:["전자기장"],
    ex:[{ s:"Sensitive instruments detect any shift in the {{}}.", f:"electromagnetic field", ko:"민감한 기기는 전자기장의 어떤 변화도 감지한다." }] },

  { word:"electronic", pron:"일렉트라닉", pos:"adj", level:"B1", meanings:["전자의"],
    syn:["digital","computerized","electrical"],
    ex:[{ s:"All {{}} devices must be switched off during takeoff.", f:"electronic", ko:"이륙 중에는 모든 전자 기기를 꺼야 한다." }] },

  { word:"elegant", pron:"엘러건트", pos:"adj", level:"B2", meanings:["우아한","고상한"],
    syn:["graceful","refined","stylish"], ant:["inelegant"],
    ex:[{ s:"She wore an {{}} black dress to the ceremony.", f:"elegant", ko:"그녀는 그 행사에 우아한 검은 드레스를 입었다." }] },

  /* element 는 '요소·원소'다. compound(화합물)의 반의어로 이미 쓰이고 있어
     '원소' 갈래를 버리면 그 문제가 무너진다 — 원본의 '성분'을 '원소'로 둔다. */
  { word:"element", pron:"엘러먼트", pos:"n", level:"B1", meanings:["요소","원소"],
    syn:["component","part","ingredient"], ant:["compound"],
    ex:[{ s:"Trust is the key {{}} in any lasting partnership.", f:"element", ko:"신뢰는 오래가는 모든 동업 관계의 핵심 요소다." }] },

  { word:"elementary", pron:"엘러멘터리", pos:"adj", level:"B1", meanings:["초등 교육의","기본의"],
    syn:["basic","fundamental","introductory"], ant:["advanced"],
    ex:[{ s:"The course covers only {{}} statistics.", f:"elementary", ko:"그 강좌는 기본적인 통계만 다룬다." }] },

  /* elements(악천후)는 element(요소)와 철자가 s 하나 차이다. 레벨을 C1 로 벌려
     두면 '레벨 ±1' 필터에 걸려 두 낱말이 한 문제의 보기로 같이 뜨지 않는다. */
  { word:"elements", pron:"엘러먼츠", pos:"n", level:"C1", meanings:["악천후","비바람"],
    syn:["bad weather","foul weather","rough weather"],
    ex:[{ s:"Left out in the {{}}, the paint began to peel.", f:"elements", ko:"악천후에 노출된 그 페인트는 벗겨지기 시작했다." }] },

  { word:"elevate", pron:"엘러베이트", pos:"v", level:"B2", meanings:["승격시키다","높이다"],
    syn:["raise","promote","lift"], ant:["lower"],
    ex:[{ s:"The board voted to {{}} her to senior partner.", f:"elevate", ko:"이사회는 그녀를 수석 파트너로 승격시키기로 의결했다." }] },

  { word:"elevated", pron:"엘러베이티드", pos:"adj", level:"C1", meanings:["높은","고상한"],
    syn:["lofty","raised","noble"], ant:["lowly"],
    ex:[{ s:"The house sits on {{}} ground above the river.", f:"elevated", ko:"그 집은 강 위 높은 땅에 자리하고 있다." }] }
];

/* ── E 세트가 쓰는 유의어·반의어의 뜻 ─────────────
   표제어(VOCAB~VOCAB_E)에 있는 낱말은 넣지 않는다 — 읽는 쪽이 표제어를 먼저
   찾으므로 죽은 항목이 되고, 뜻이 두 곳으로 갈라진다.
   bliss·boundary·brink·commentary·competence·conventional 은 표제어라서 없다.

   ⚠️ 재대입(=)이 아니라 Object.assign 으로 합쳐야 A~D 세트 것이 살아남는다. */
Object.assign(window.GLOSS, {
  /* ── 1차: earnest ~ efficient (28개) ───────────────── */
  "blot out":"지워 없애다, 가리다",
  "cost-effective":"비용 대비 효과가 좋은",
  "eatable":"먹을 수 있는",
  "efficacy":"효능",
  "elation":"의기양양, 들뜬 기쁨",
  "fit to eat":"먹기에 적합한",
  "futility":"무익함, 헛됨",
  "inefficiency":"비능률, 비효율",
  "insincere":"진심이 아닌, 겉치레의",
  "laid-back":"서두르지 않는, 태평한",
  "leading article":"주요 논설",
  "mundane":"평범한, 일상적인",
  "odd":"이상한, 색다른",
  "opinion piece":"의견 기고문",
  "poisonous":"유독한, 독이 있는",
  "potency":"효력, 위력",
  "productivity":"생산성",
  "rim":"테두리, 언저리",
  "safe to eat":"먹어도 안전한",
  "sincere":"진심의, 진실한",
  "streamlined":"간소화된, 군더더기 없는",
  "thrifty":"알뜰한, 돈을 아끼는",
  "tolerant":"너그러운, 관대한",
  "unconventional":"관습에 얽매이지 않는",
  "uptight":"긴장한, 신경이 날카로운",
  "usefulness":"유용성",
  "wasteful":"낭비하는, 헤픈",
  "wholehearted":"전심전력의, 진심을 다한",

  /* ── 2차: effortless ~ elevated (37개) ───────────────── */
  "advanced":"고급의, 진전된",
  "bad weather":"나쁜 날씨",
  "basic":"기본적인",
  "choose":"고르다, 선택하다",
  "computerized":"컴퓨터로 처리되는",
  "detailed":"상세한, 세밀한",
  "digital":"디지털의",
  "easy":"쉬운, 수월한",
  "electric current":"전류",
  "electric power":"전력",
  "electrical":"전기의",
  "electrical energy":"전기 에너지",
  "evict":"퇴거시키다",
  "foul weather":"험한 날씨",
  "inelegant":"품위 없는, 촌스러운",
  "introductory":"입문의, 소개하는",
  "jubilant":"환호하는, 승리에 들뜬",
  "lofty":"아주 높은, 우뚝한",
  "lower":"낮추다, 내리다",
  "lowly":"낮은, 미천한",
  "narcissistic":"자기도취적인",
  "painless":"고통 없는, 수고롭지 않은",
  "pride":"자랑, 자부심",
  "raised":"올려진, 돋운",
  "rough weather":"거친 날씨",
  "self":"자기 자신",
  "self-centered":"자기중심적인",
  "self-esteem":"자존감",
  "springy":"튀어 오르는, 반발력 있는",
  "stretchy":"잘 늘어나는",
  "stylish":"멋스러운, 세련된",
  "throw out":"내쫓다, 버리다",
  "vote for":"~에 투표하다",
  "voters":"유권자들",
  "voting public":"투표권을 가진 대중",
  "constituency":"선거구, 선거구민"
});
