/**
 * 단어 데이터 — 수능 보카 C 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *   word / pos / level 은 필수, meanings 는 1개 이상 있어야 앱이 깨지지 않는다.
 *   syn 3개 → 아닌 것 고르기 / ex → 문장 빈칸 / col → 연어 고르기 해금.
 *
 * ⚠️ COL_POOLS 와 GLOSS 는 words.js 가 이미 만들어 둔 객체다.
 *    여기서 window.GLOSS = {...} 로 재대입하면 A·B 세트의 것이 통째로
 *    사라진다. 반드시 이 파일 맨 아래처럼 Object.assign 으로 병합할 것.
 *
 * ── 뜻을 2개로 줄인 이유 ──────────────────────
 * 원문 단어장은 다의어를 전부 나열한다(character = 특징, 특성; 성격, 개성;
 * 글자, 문자, 기호; 등장인물). 그런데 meanings는 4지선다 선택지와 짝 맞추기
 * 카드에 그대로 찍히는 문자열이다. 네 묶음을 다 넣으면 카드 한 장이 화면을
 * 넘고, 보기 넷을 늘어놓으면 읽을 수 없다. 그래서 대표 뜻 2개만 남긴다.
 * 첫 뜻에는 괄호 설명을 넣지 않는다 — 카드에서 가장 크게 보이는 자리다.
 *
 * 진행 상황: 466단어 전량 완료 (calamity ~ cynicism) — 24챕터.
 */
window.VOCAB_C = [
  /* ── cal ───────────────────────────────────── */
  { word:"calamity", pron:"컬래머티", pos:"n", level:"C1", meanings:["재난","재해"],
    syn:["disaster","catastrophe","misfortune"], ant:["blessing"],
    ex:[{ s:"The flood was the worst {{}} in the region's history.", f:"calamity", ko:"그 홍수는 그 지역 역사상 최악의 재난이었다." }] },

  { word:"calculate", pron:"캘큘레이트", pos:"v", level:"B1", meanings:["계산하다","산출하다"],
    syn:["compute","reckon","estimate"], ant:["guess"],
    ex:[{ s:"We need to {{}} the total cost before ordering.", f:"calculate", ko:"주문하기 전에 총비용을 계산해야 한다." }] },

  { word:"calculation", pron:"캘큘레이션", pos:"n", level:"B2", meanings:["계산","추산"],
    syn:["computation","reckoning","estimation"], ant:["guesswork"],
    ex:[{ s:"A single error ruined the whole {{}}.", f:"calculation", ko:"단 하나의 오류가 계산 전체를 망쳤다." }] },

  { word:"call for", pron:"콜 포", pos:"phr", level:"B2", meanings:["필요로 하다","요구하다"],
    syn:["demand","require","necessitate"], ant:["refuse"] },

  { word:"call it a day", pron:"콜 잇 어 데이", pos:"phr", level:"B2", meanings:["일을 그만하다","하루 일을 마치다"],
    syn:["finish","quit","wrap up"], ant:["continue"] },

  { word:"call off", pron:"콜 오프", pos:"phr", level:"B2", meanings:["철회하다","취소하다"],
    syn:["cancel","abandon","scrap"], ant:["proceed"] },

  { word:"call out", pron:"콜 아웃", pos:"phr", level:"B2", meanings:["호명하다","큰 소리로 부르다"],
    syn:["summon","shout","announce"], ant:["whisper"] },

  { word:"caloric value", pron:"컬로릭 밸류", pos:"n", level:"C1", meanings:["열량","칼로리 값"],
    ex:[{ s:"Nuts have a high {{}} for their size.", f:"caloric value", ko:"견과류는 크기에 비해 열량이 높다." }] },

  /* ── cam · can ─────────────────────────────── */
  { word:"camouflage", pron:"캐머플라지", pos:"n", level:"C1", meanings:["위장","눈속임"],
    syn:["disguise","concealment","cover"], ant:["exposure"],
    ex:[{ s:"The insect's {{}} makes it look like a dead leaf.", f:"camouflage", ko:"그 곤충의 위장은 자신을 마른 잎처럼 보이게 한다." }] },

  { word:"canal", pron:"커낼", pos:"n", level:"B2", meanings:["운하","수로"],
    syn:["waterway","channel","duct"],
    ex:[{ s:"Goods once moved through the city by {{}}.", f:"canal", ko:"한때 물자는 운하를 통해 도시를 지나갔다." }] },

  { word:"cancel", pron:"캔슬", pos:"v", level:"B1", meanings:["취소하다","무효로 하다"],
    syn:["revoke","annul","call off"], ant:["confirm"],
    ex:[{ s:"Heavy snow forced the airline to {{}} the flight.", f:"cancel", ko:"폭설로 항공사는 그 항공편을 취소해야 했다." }] },

  { word:"candid", pron:"캔디드", pos:"adj", level:"C1", meanings:["솔직한","숨김없는"],
    syn:["frank","honest","forthright"], ant:["evasive"],
    ex:[{ s:"She gave a {{}} account of her own mistakes.", f:"candid", ko:"그녀는 자신의 실수를 솔직하게 이야기했다." }] },

  { word:"candidate", pron:"캔디데이트", pos:"n", level:"B1", meanings:["후보","지원자"],
    syn:["applicant","nominee","contender"],
    ex:[{ s:"Only one {{}} met every requirement for the post.", f:"candidate", ko:"그 자리의 모든 요건을 갖춘 지원자는 한 명뿐이었다." }] },

  { word:"canned", pron:"캔드", pos:"adj", level:"B2", meanings:["통조림으로 된","통조림의"],
    syn:["tinned","preserved","bottled"], ant:["fresh"],
    ex:[{ s:"They lived on {{}} soup for a week.", f:"canned", ko:"그들은 일주일 동안 통조림 수프로 지냈다." }] },

  /* ── cap ───────────────────────────────────── */
  { word:"capability", pron:"케이퍼빌리티", pos:"n", level:"B2", meanings:["능력","역량"],
    syn:["ability","competence","skill"], ant:["inability"],
    ex:[{ s:"The team lacks the {{}} to finish on time.", f:"capability", ko:"그 팀은 제때 끝낼 역량이 없다." }] },

  { word:"capable", pron:"케이퍼블", pos:"adj", level:"B1", meanings:["~을 할 수 있는","유능한"],
    syn:["able","competent","skilled"], ant:["incapable"],
    ex:[{ s:"She is {{}} of solving much harder problems.", f:"capable", ko:"그녀는 훨씬 더 어려운 문제도 풀 수 있다." }],
    col:[{ p:"capable {{}} solving it alone", a:"of", pool:"prep", note:"be capable of + -ing : ~할 수 있다" }] },

  { word:"capacity", pron:"커패시티", pos:"n", level:"B2", meanings:["수용력","용량"],
    syn:["volume","room","size"], ant:["shortage"],
    ex:[{ s:"The hall was filled to {{}} an hour before the show.", f:"capacity", ko:"공연 한 시간 전에 그 홀은 정원까지 가득 찼다." }],
    col:[{ p:"a great capacity {{}} change", a:"for", pool:"prep", note:"capacity for : ~에 대한 수용력·능력" }] },

  { word:"capital", pron:"캐피털", pos:"n", level:"B1", meanings:["자본","수도"],
    syn:["funds","assets","wealth"],
    ex:[{ s:"The startup raised enough {{}} to hire ten engineers.", f:"capital", ko:"그 스타트업은 엔지니어 열 명을 뽑을 만큼의 자본을 모았다." }] },

  { word:"capricious", pron:"커프리셔스", pos:"adj", level:"C2", meanings:["변덕스러운","변하기 쉬운"],
    syn:["fickle","whimsical","erratic"], ant:["steady"],
    ex:[{ s:"Mountain weather is famously {{}} in spring.", f:"capricious", ko:"산의 봄 날씨는 변덕스럽기로 유명하다." }] },

  { word:"capsize", pron:"캡사이즈", pos:"v", level:"C1", meanings:["뒤집히다","전복되다"],
    syn:["overturn","upset","topple"], ant:["steady"],
    ex:[{ s:"A sudden wave made the small boat {{}}.", f:"capsize", ko:"갑작스러운 파도가 작은 배를 뒤집히게 했다." }] },

  { word:"captive", pron:"캡티브", pos:"adj", level:"C1", meanings:["사로잡힌","억류된"],
    syn:["imprisoned","confined","caged"], ant:["free"],
    ex:[{ s:"The birds were kept {{}} in a small cage.", f:"captive", ko:"그 새들은 작은 우리에 갇혀 있었다." }] },

  { word:"capture", pron:"캡처", pos:"v", level:"B1", meanings:["포착하다","포획하다"],
    syn:["seize","catch","apprehend"], ant:["release"],
    ex:[{ s:"The photograph {{}} the exact moment of impact.", f:"captured", ko:"그 사진은 충돌의 순간을 정확히 포착했다." }] },

  /* ── car ───────────────────────────────────── */
  { word:"carbohydrate", pron:"카보하이드레이트", pos:"n", level:"B2", meanings:["탄수화물"],
    syn:["starch","sugar","carb"],
    ex:[{ s:"Rice is a major source of {{}} in many diets.", f:"carbohydrate", ko:"쌀은 많은 식단에서 탄수화물의 주요 공급원이다." }] },

  { word:"carbon", pron:"카본", pos:"n", level:"B1", meanings:["탄소"],
    ex:[{ s:"Burning coal releases {{}} into the air.", f:"carbon", ko:"석탄을 태우면 탄소가 공기 중으로 방출된다." }] },

  { word:"cardiac", pron:"카디액", pos:"adj", level:"C1", meanings:["심장의"],
    syn:["coronary","cardiovascular","heart"],
    ex:[{ s:"The patient was moved to the {{}} unit.", f:"cardiac", ko:"그 환자는 심장 병동으로 옮겨졌다." }] },

  { word:"cardinal", pron:"카디널", pos:"adj", level:"C1", meanings:["가장 중요한","추기경"],
    syn:["fundamental","principal","chief"], ant:["minor"],
    ex:[{ s:"Honesty was the {{}} rule of the household.", f:"cardinal", ko:"정직이 그 집안의 가장 중요한 규칙이었다." }] },

  { word:"career", pron:"커리어", pos:"n", level:"B1", meanings:["경력","직업"],
    syn:["profession","occupation","vocation"],
    ex:[{ s:"He gave up a safe {{}} to open a bakery.", f:"career", ko:"그는 안정적인 직업을 포기하고 빵집을 열었다." }] },

  { word:"carnivorous", pron:"카니버러스", pos:"adj", level:"C1", meanings:["육식의","고기를 먹는"],
    syn:["predatory","meat-eating","flesh-eating"], ant:["herbivorous"],
    ex:[{ s:"Sharks are {{}} and hunt alone.", f:"carnivorous", ko:"상어는 육식성이며 혼자 사냥한다." }] },

  { word:"carrier", pron:"캐리어", pos:"n", level:"B2", meanings:["전달자","보균자"],
    syn:["bearer","transmitter","courier"],
    ex:[{ s:"A healthy {{}} can spread the virus without knowing.", f:"carrier", ko:"건강한 보균자는 모르는 채로 바이러스를 퍼뜨릴 수 있다." }] },

  { word:"carry out", pron:"캐리 아웃", pos:"phr", level:"B1", meanings:["수행하다","실행하다"],
    syn:["perform","execute","conduct"], ant:["abandon"] },

  { word:"cartographic", pron:"카토그래픽", pos:"adj", level:"C2", meanings:["지도 제작의"],
    ex:[{ s:"The library holds a rare {{}} collection.", f:"cartographic", ko:"그 도서관은 희귀한 지도 제작 자료를 소장하고 있다." }] },

  { word:"cartooning", pron:"카투닝", pos:"n", level:"C1", meanings:["만화 제작"],
    syn:["illustration","sketching","drawing"],
    ex:[{ s:"He taught {{}} at a small art school.", f:"cartooning", ko:"그는 작은 미술 학교에서 만화 제작을 가르쳤다." }] },

  { word:"cartoonist", pron:"카투니스트", pos:"n", level:"B2", meanings:["만화가"],
    syn:["illustrator","caricaturist","animator"],
    ex:[{ s:"The {{}} drew the mayor with an enormous hat.", f:"cartoonist", ko:"그 만화가는 시장을 거대한 모자를 쓴 모습으로 그렸다." }] },

  { word:"carve", pron:"카브", pos:"v", level:"B2", meanings:["조각하다","새기다"],
    syn:["sculpt","engrave","chisel"],
    ex:[{ s:"The artist began to {{}} a face out of the oak.", f:"carve", ko:"그 예술가는 참나무에서 얼굴을 조각하기 시작했다." }] },

  { word:"carving", pron:"카빙", pos:"n", level:"B2", meanings:["조각품","조각술"],
    syn:["sculpture","engraving","statue"],
    ex:[{ s:"A wooden {{}} of a bear stood by the door.", f:"carving", ko:"곰을 새긴 나무 조각품이 문가에 서 있었다." }] },

  /* ── cas · cat ─────────────────────────────── */
  { word:"cash crop", pron:"캐시 크롭", pos:"n", level:"C1", meanings:["환금 작물"],
    ex:[{ s:"Coffee became the island's main {{}}.", f:"cash crop", ko:"커피는 그 섬의 주요 환금 작물이 되었다." }] },

  { word:"cash register", pron:"캐시 레지스터", pos:"n", level:"B2", meanings:["계산대","금전 등록기"],
    syn:["till","checkout","counter"],
    ex:[{ s:"She counted the coins in the {{}} after closing.", f:"cash register", ko:"그녀는 문을 닫은 뒤 계산대의 동전을 세었다." }] },

  { word:"cast", pron:"캐스트", pos:"v", level:"B2", meanings:["주조하다","던지다"],
    syn:["mold","throw","hurl"],
    ex:[{ s:"The statue was {{}} in bronze.", f:"cast", ko:"그 조각상은 청동으로 주조되었다." }] },

  { word:"cast doubt on", pron:"캐스트 다웃 온", pos:"phr", level:"C1", meanings:["~을 의심하다","의문을 제기하다"],
    syn:["question","challenge","dispute"], ant:["confirm"] },

  { word:"casual", pron:"캐주얼", pos:"adj", level:"B1", meanings:["평상시의","격식 없는"],
    syn:["informal","relaxed","offhand"], ant:["formal"],
    ex:[{ s:"The office allows {{}} clothes on Fridays.", f:"casual", ko:"그 회사는 금요일에 평상복을 허용한다." }] },

  { word:"casualty", pron:"캐주얼티", pos:"n", level:"B2", meanings:["사상자","피해자"],
    syn:["victim","fatality","loss"],
    ex:[{ s:"There was not a single {{}} in the accident.", f:"casualty", ko:"그 사고에서 사상자는 한 명도 없었다." }] },

  { word:"catalog", pron:"카탈로그", pos:"n", level:"B2", meanings:["목록","카탈로그"],
    syn:["list","index","catalogue"],
    ex:[{ s:"Every item in the museum appears in the {{}}.", f:"catalog", ko:"박물관의 모든 소장품은 목록에 실려 있다." }] },

  { word:"catastrophe", pron:"커태스트러피", pos:"n", level:"C1", meanings:["대참사","큰 재앙"],
    syn:["disaster","calamity","tragedy"], ant:["triumph"],
    ex:[{ s:"One small leak turned into an environmental {{}}.", f:"catastrophe", ko:"작은 누출 하나가 환경 대참사로 번졌다." }] },

  { word:"catastrophic", pron:"캐터스트로픽", pos:"adj", level:"C1", meanings:["파멸적인","재앙과 같은"],
    syn:["disastrous","devastating","ruinous"], ant:["harmless"],
    ex:[{ s:"The dam's failure had {{}} results downstream.", f:"catastrophic", ko:"그 댐의 붕괴는 하류에 파멸적인 결과를 낳았다." }] },

  { word:"catch a glimpse of", pron:"캐치 어 글림스 오브", pos:"phr", level:"B2", meanings:["~을 힐끗 보다"],
    syn:["glimpse","spot","glance"], ant:["stare"] },

  { word:"catch up with", pron:"캐치 업 위드", pos:"phr", level:"B1", meanings:["따라잡다","뒤따라가다"],
    syn:["overtake","reach","gain"], ant:["lag"] },

  { word:"categorization", pron:"캐터고라이제이션", pos:"n", level:"C1", meanings:["범주화","분류"],
    syn:["classification","grouping","sorting"],
    ex:[{ s:"The {{}} of the samples took three weeks.", f:"categorization", ko:"표본의 분류에 3주가 걸렸다." }] },

  { word:"category", pron:"캐터고리", pos:"n", level:"B1", meanings:["범주","부류"],
    syn:["class","group","type"],
    ex:[{ s:"This film does not fit any usual {{}}.", f:"category", ko:"이 영화는 흔한 어떤 범주에도 들어맞지 않는다." }] },

  { word:"caterpillar", pron:"캐터필러", pos:"n", level:"B2", meanings:["유충","애벌레"],
    syn:["larva","grub","maggot"],
    ex:[{ s:"A striped {{}} was eating the cabbage leaves.", f:"caterpillar", ko:"줄무늬 애벌레가 양배추 잎을 먹고 있었다." }] },

  { word:"cathedral", pron:"커시드럴", pos:"n", level:"B2", meanings:["대성당"],
    syn:["minster","basilica","church"],
    ex:[{ s:"The {{}} took two centuries to build.", f:"cathedral", ko:"그 대성당은 짓는 데 두 세기가 걸렸다." }] },

  /* ── cau · cav ─────────────────────────────── */
  { word:"causality", pron:"코잘리티", pos:"n", level:"C2", meanings:["인과관계"],
    syn:["causation","connection","link"],
    ex:[{ s:"Correlation alone does not prove {{}}.", f:"causality", ko:"상관관계만으로는 인과관계가 증명되지 않는다." }] },

  { word:"cause", pron:"코즈", pos:"n", level:"B1", meanings:["원인","대의"],
    syn:["reason","origin","source"], ant:["result"],
    ex:[{ s:"Investigators never found the {{}} of the fire.", f:"cause", ko:"조사관들은 화재의 원인을 끝내 찾지 못했다." }],
    col:[{ p:"the cause {{}} the accident", a:"of", pool:"prep", note:"the cause of : ~의 원인" }] },

  { word:"cautious", pron:"코셔스", pos:"adj", level:"B2", meanings:["조심스러운","신중한"],
    syn:["careful","wary","prudent"], ant:["reckless"],
    ex:[{ s:"Be {{}} about promising what you cannot deliver.", f:"cautious", ko:"지킬 수 없는 것을 약속하는 데는 조심해야 한다." }],
    col:[{ p:"cautious {{}} making promises", a:"about", pool:"prep", note:"be cautious about : ~에 조심하다" }] },

  { word:"cave in", pron:"케이브 인", pos:"phr", level:"C1", meanings:["굴복하다","내려앉다"],
    syn:["yield","submit","collapse"], ant:["resist"] },

  { word:"cavity", pron:"캐비티", pos:"n", level:"B2", meanings:["충치","구멍"],
    syn:["hole","hollow","decay"],
    ex:[{ s:"The dentist found one small {{}} in her back tooth.", f:"cavity", ko:"치과의사는 그녀의 어금니에서 작은 충치 하나를 발견했다." }] },

  /* ── cea · cei · cel ───────────────────────── */
  { word:"cease", pron:"시스", pos:"v", level:"B2", meanings:["중단하다","그치다"],
    syn:["stop","halt","discontinue"], ant:["begin"],
    ex:[{ s:"The rain did not {{}} until midnight.", f:"cease", ko:"비는 자정이 되도록 그치지 않았다." }] },

  { word:"ceaseless", pron:"시슬리스", pos:"adj", level:"C1", meanings:["끊임없는","부단한"],
    syn:["constant","incessant","endless"], ant:["occasional"],
    ex:[{ s:"The {{}} noise from the street kept him awake.", f:"ceaseless", ko:"거리에서 끊임없이 들려오는 소음이 그를 깨어 있게 했다." }] },

  { word:"ceiling", pron:"실링", pos:"n", level:"B1", meanings:["천장","상한"],
    syn:["roof","top","limit"], ant:["floor"],
    ex:[{ s:"Water stains spread across the {{}}.", f:"ceiling", ko:"물 얼룩이 천장 전체로 퍼졌다." }] },

  { word:"celebrated", pron:"셀러브레이티드", pos:"adj", level:"B2", meanings:["유명한","저명한"],
    syn:["famous","renowned","acclaimed"], ant:["obscure"],
    ex:[{ s:"The town is {{}} for its cherry trees.", f:"celebrated", ko:"그 마을은 벚나무로 유명하다." }] },

  { word:"celebrity", pron:"셀레브리티", pos:"n", level:"B1", meanings:["유명 인사","명성"],
    syn:["star","personality","fame"],
    ex:[{ s:"Sudden {{}} made her private life impossible.", f:"celebrity", ko:"갑작스러운 명성은 그녀의 사생활을 불가능하게 만들었다." }] },

  { word:"celestial", pron:"설레스셜", pos:"adj", level:"C2", meanings:["천체의","하늘의"],
    syn:["heavenly","astronomical","stellar"], ant:["earthly"],
    ex:[{ s:"Ancient sailors navigated by {{}} bodies alone.", f:"celestial", ko:"고대 선원들은 천체만으로 항로를 잡았다." }] },

  { word:"cell", pron:"셀", pos:"n", level:"B1", meanings:["세포","감방"],
    syn:["unit","chamber","compartment"],
    ex:[{ s:"A single {{}} can divide into two within hours.", f:"cell", ko:"하나의 세포는 몇 시간 안에 둘로 나뉠 수 있다." }] },

  { word:"celluloid", pron:"셀룰로이드", pos:"n", level:"C2", meanings:["영화 필름","셀룰로이드"],
    syn:["film","plastic","reel"],
    ex:[{ s:"Early movies survive only on brittle {{}}.", f:"celluloid", ko:"초기 영화는 부서지기 쉬운 필름으로만 남아 있다." }] },

  /* ── cen · cer ─────────────────────────────── */
  { word:"censor", pron:"센서", pos:"v", level:"C1", meanings:["검열하다","검열관"],
    syn:["edit","suppress","expurgate"], ant:["permit"],
    ex:[{ s:"The regime tried to {{}} every foreign newspaper.", f:"censor", ko:"그 정권은 모든 외국 신문을 검열하려 했다." }] },

  { word:"censorship", pron:"센서십", pos:"n", level:"C1", meanings:["검열","검열 제도"],
    syn:["suppression","restriction","control"], ant:["freedom"],
    ex:[{ s:"Writers fled the country to escape {{}}.", f:"censorship", ko:"작가들은 검열을 피해 그 나라를 떠났다." }] },

  { word:"censure", pron:"센셔", pos:"v", level:"C2", meanings:["비난하다","책망"],
    syn:["condemn","rebuke","reproach"], ant:["praise"],
    ex:[{ s:"The committee voted to {{}} its own chairman.", f:"censure", ko:"위원회는 자기 위원장을 비난하기로 표결했다." }] },

  { word:"centennial", pron:"센테니얼", pos:"adj", level:"C2", meanings:["100주년의","100년마다의"],
    syn:["hundredth","anniversary","centenary"],
    ex:[{ s:"The city planned a {{}} parade for its founding.", f:"centennial", ko:"그 도시는 건립 100주년 행진을 계획했다." }] },

  { word:"central", pron:"센트럴", pos:"adj", level:"B1", meanings:["중심의","중앙의"],
    syn:["main","chief","core"], ant:["peripheral"],
    ex:[{ s:"Trust is {{}} to any lasting friendship.", f:"central", ko:"신뢰는 오래가는 우정의 핵심이다." }],
    col:[{ p:"central {{}} the whole plan", a:"to", pool:"prep", note:"be central to : ~에 핵심적이다" }] },

  { word:"centralize", pron:"센트럴라이즈", pos:"v", level:"C1", meanings:["중앙집권화하다","한곳에 모으다"],
    syn:["concentrate","consolidate","unify"], ant:["disperse"],
    ex:[{ s:"The company decided to {{}} all of its buying.", f:"centralize", ko:"그 회사는 모든 구매를 한곳으로 모으기로 했다." }] },

  { word:"CEO", pron:"씨이오", pos:"n", level:"B2", meanings:["최고경영자"],
    syn:["executive","president","chief"],
    ex:[{ s:"The board named a new {{}} within a week.", f:"CEO", ko:"이사회는 일주일 안에 새 최고경영자를 임명했다." }] },

  { word:"ceramic", pron:"서래믹", pos:"n", level:"B2", meanings:["도자기"],
    syn:["pottery","porcelain","earthenware"],
    ex:[{ s:"She sells hand-painted {{}} at the market.", f:"ceramics", ko:"그녀는 시장에서 손으로 그린 도자기를 판다." }] },

  { word:"ceremony", pron:"세러모니", pos:"n", level:"B1", meanings:["예식","의례"],
    syn:["ritual","rite","service"],
    ex:[{ s:"The graduation {{}} lasted barely an hour.", f:"ceremony", ko:"졸업식은 겨우 한 시간 만에 끝났다." }] },

  { word:"certain", pron:"서튼", pos:"adj", level:"B1", meanings:["확실한","특정한"],
    syn:["sure","definite","positive"], ant:["doubtful"],
    ex:[{ s:"Nothing is {{}} until the contract is signed.", f:"certain", ko:"계약서에 서명하기 전까지는 아무것도 확실하지 않다." }],
    col:[{ p:"certain {{}} the outcome", a:"of", pool:"prep", note:"be certain of : ~을 확신하다" }] },

  { word:"certainty", pron:"서튼티", pos:"n", level:"B2", meanings:["확실성","확신"],
    syn:["assurance","conviction","surety"], ant:["doubt"],
    ex:[{ s:"No one can predict the weather with {{}}.", f:"certainty", ko:"누구도 날씨를 확실하게 예측할 수는 없다." }] },

  { word:"certificate", pron:"서티피킷", pos:"n", level:"B1", meanings:["증서","자격증"],
    syn:["diploma","document","license"],
    ex:[{ s:"You must show a birth {{}} to apply.", f:"certificate", ko:"신청하려면 출생 증명서를 제시해야 한다." }] },

  { word:"certify", pron:"서티파이", pos:"v", level:"B2", meanings:["보증하다","증명하다"],
    syn:["verify","attest","confirm"], ant:["deny"],
    ex:[{ s:"A doctor must {{}} that the patient is fit to fly.", f:"certify", ko:"의사가 그 환자가 비행에 적합하다고 증명해야 한다." }] },

  /* ── cha ───────────────────────────────────── */
  { word:"challenge", pron:"챌린지", pos:"n", level:"B1", meanings:["도전","난관"],
    syn:["difficulty","test","obstacle"], ant:["ease"],
    ex:[{ s:"Feeding the city was the mayor's first {{}}.", f:"challenge", ko:"도시를 먹여 살리는 것이 시장의 첫 난관이었다." }] },

  { word:"challenging", pron:"챌린징", pos:"adj", level:"B2", meanings:["힘든","도전적인"],
    syn:["demanding","testing","tough"], ant:["effortless"],
    ex:[{ s:"The course is {{}} but never unfair.", f:"challenging", ko:"그 과정은 힘들지만 결코 불공정하지 않다." }] },

  { word:"chamber", pron:"체임버", pos:"n", level:"B2", meanings:["방","응접실"],
    syn:["room","hall","compartment"],
    ex:[{ s:"The king received guests in the inner {{}}.", f:"chamber", ko:"왕은 안쪽 방에서 손님을 맞았다." }] },

  { word:"channel", pron:"채널", pos:"n", level:"B1", meanings:["경로","해협"],
    syn:["route","passage","strait"],
    ex:[{ s:"Swimmers cross the {{}} between the two coasts each July.", f:"channel", ko:"수영 선수들은 매년 7월 두 해안 사이의 해협을 건넌다." }] },

  { word:"chaos", pron:"케이아스", pos:"n", level:"B2", meanings:["혼돈","무질서"],
    syn:["disorder","confusion","turmoil"], ant:["order"],
    ex:[{ s:"The blackout threw the airport into {{}}.", f:"chaos", ko:"정전은 공항을 혼돈에 빠뜨렸다." }] },

  { word:"chaotic", pron:"케이아틱", pos:"adj", level:"B2", meanings:["무질서한","혼란스러운"],
    syn:["disordered","confused","turbulent"], ant:["orderly"],
    ex:[{ s:"His desk is {{}} but he finds everything at once.", f:"chaotic", ko:"그의 책상은 무질서하지만 그는 무엇이든 단번에 찾는다." }] },

  { word:"chapel", pron:"채펄", pos:"n", level:"B2", meanings:["예배실","부속 예배당"],
    syn:["sanctuary","oratory","shrine"],
    ex:[{ s:"A tiny {{}} stands at the end of the garden.", f:"chapel", ko:"아주 작은 예배실이 정원 끝에 서 있다." }] },

  { word:"character", pron:"캐릭터", pos:"n", level:"B1", meanings:["특징","등장인물"],
    syn:["nature","personality","quality"],
    ex:[{ s:"The narrow streets give the town its {{}}.", f:"character", ko:"좁은 골목들이 그 마을에 특색을 준다." }] },

  { word:"characteristic", pron:"캐릭터리스틱", pos:"n", level:"B2", meanings:["특성","특유의"],
    syn:["trait","feature","attribute"],
    ex:[{ s:"Patience is the {{}} that made her a good teacher.", f:"characteristic", ko:"인내는 그녀를 좋은 교사로 만든 특성이었다." }] },

  { word:"characterize", pron:"캐릭터라이즈", pos:"v", level:"B2", meanings:["특징짓다","묘사하다"],
    syn:["define","distinguish","typify"],
    ex:[{ s:"Long silences {{}} his later music.", f:"characterize", ko:"긴 침묵이 그의 후기 음악을 특징짓는다." }] },

  { word:"charge", pron:"차지", pos:"v", level:"B1", meanings:["청구하다","충전하다"],
    syn:["bill","demand","levy"], ant:["refund"],
    ex:[{ s:"The garage did not {{}} us for the inspection.", f:"charge", ko:"그 정비소는 점검 비용을 우리에게 청구하지 않았다." }],
    col:[{ p:"charge you {{}} the repair", a:"for", pool:"prep", note:"charge A for B : A에게 B의 값을 청구하다" }] },

  { word:"charity", pron:"채러티", pos:"n", level:"B1", meanings:["자선","자선 단체"],
    syn:["philanthropy","generosity","aid"], ant:["greed"],
    ex:[{ s:"All ticket money goes to a local {{}}.", f:"charity", ko:"모든 입장료는 지역 자선 단체로 간다." }] },

  { word:"charlatan", pron:"샬러턴", pos:"n", level:"C2", meanings:["사기꾼","돌팔이"],
    syn:["fraud","impostor","quack"], ant:["expert"],
    ex:[{ s:"The so-called doctor turned out to be a {{}}.", f:"charlatan", ko:"이른바 그 의사는 돌팔이로 드러났다." }] },

  { word:"charm", pron:"참", pos:"n", level:"B1", meanings:["매력"],
    syn:["appeal","allure","attraction"], ant:["repulsion"],
    ex:[{ s:"The old hotel has a faded {{}} about it.", f:"charm", ko:"그 낡은 호텔에는 퇴색한 매력이 있다." }] },

  { word:"charter", pron:"차터", pos:"v", level:"C1", meanings:["전세 내다","헌장"],
    syn:["hire","lease","rent"],
    ex:[{ s:"The team decided to {{}} a bus for the trip.", f:"charter", ko:"그 팀은 여행을 위해 버스를 전세 내기로 했다." }] },

  { word:"chase", pron:"체이스", pos:"v", level:"B1", meanings:["뒤쫓다","추격"],
    syn:["pursue","follow","hunt"], ant:["flee"],
    ex:[{ s:"The dog loves to {{}} birds across the lawn.", f:"chase", ko:"그 개는 잔디밭에서 새를 뒤쫓는 것을 좋아한다." }] },

  { word:"chase away", pron:"체이스 어웨이", pos:"phr", level:"B2", meanings:["~을 쫓아내다"],
    syn:["repel","banish","scatter"], ant:["attract"] },

  { word:"chase down", pron:"체이스 다운", pos:"phr", level:"C1", meanings:["끝까지 쫓다","추적하다"],
    syn:["track","hunt","trace"], ant:["abandon"] },

  /* ── che · chi ─────────────────────────────── */
  { word:"chef", pron:"셰프", pos:"n", level:"B1", meanings:["주방장","요리사"],
    syn:["cook","caterer","culinarian"],
    ex:[{ s:"The {{}} refused to change a single item on the menu.", f:"chef", ko:"주방장은 메뉴의 어떤 항목도 바꾸기를 거부했다." }] },

  { word:"chemical", pron:"케미컬", pos:"n", level:"B1", meanings:["화학 물질","화학의"],
    syn:["substance","compound","agent"],
    ex:[{ s:"The factory dumped a toxic {{}} into the river.", f:"chemical", ko:"그 공장은 유독 화학 물질을 강에 버렸다." }] },

  { word:"chemistry", pron:"케미스트리", pos:"n", level:"B1", meanings:["화학","화학적 성질"],
    syn:["science","composition","reaction"],
    ex:[{ s:"She switched from physics to {{}} in her second year.", f:"chemistry", ko:"그녀는 2학년에 물리학에서 화학으로 전공을 바꿨다." }] },

  { word:"chemotherapy", pron:"키모테라피", pos:"n", level:"C1", meanings:["화학 요법"],
    syn:["treatment","therapy","medication"],
    ex:[{ s:"He lost his hair during six months of {{}}.", f:"chemotherapy", ko:"그는 6개월간의 화학 요법 동안 머리카락을 잃었다." }] },

  { word:"cherish", pron:"체리시", pos:"v", level:"B2", meanings:["소중히 하다","아끼다"],
    syn:["treasure","prize","value"], ant:["neglect"],
    ex:[{ s:"She still {{}} the letters her father sent.", f:"cherishes", ko:"그녀는 아버지가 보낸 편지들을 여전히 소중히 여긴다." }] },

  { word:"chest", pron:"체스트", pos:"n", level:"B1", meanings:["가슴","상자"],
    syn:["thorax","breast","trunk"],
    ex:[{ s:"A sharp pain ran across his {{}}.", f:"chest", ko:"날카로운 통증이 그의 가슴을 스쳤다." }] },

  { word:"chilly", pron:"칠리", pos:"adj", level:"B1", meanings:["쌀쌀한","으스스한"],
    syn:["cool","crisp","frosty"], ant:["warm"],
    ex:[{ s:"The evening turned {{}} as soon as the sun set.", f:"chilly", ko:"해가 지자마자 저녁이 쌀쌀해졌다." }] },

  { word:"chimney", pron:"침니", pos:"n", level:"B1", meanings:["굴뚝"],
    syn:["flue","stack","vent"],
    ex:[{ s:"Smoke rose straight from the {{}} in the still air.", f:"chimney", ko:"고요한 공기 속에서 연기가 굴뚝에서 곧게 올라갔다." }] },

  { word:"choke", pron:"초크", pos:"v", level:"B2", meanings:["질식시키다","숨이 막히다"],
    syn:["suffocate","strangle","stifle"],
    ex:[{ s:"Thick smoke began to {{}} the trapped miners.", f:"choke", ko:"짙은 연기가 갇힌 광부들을 질식시키기 시작했다." }] },

  { word:"chop", pron:"찹", pos:"v", level:"B1", meanings:["잘게 썰다","자르다"],
    syn:["dice","mince","hack"],
    ex:[{ s:"First {{}} the onions as finely as you can.", f:"chop", ko:"먼저 양파를 할 수 있는 만큼 잘게 썰어라." }] },

  { word:"chore", pron:"초어", pos:"n", level:"B2", meanings:["잡일","따분한 일"],
    syn:["task","duty","errand"],
    ex:[{ s:"Washing the dishes is his least favorite {{}}.", f:"chore", ko:"설거지는 그가 가장 싫어하는 잡일이다." }] },

  /* ── chr · chu ─────────────────────────────── */
  { word:"chromosome", pron:"크로머솜", pos:"n", level:"C1", meanings:["염색체"],
    syn:["gene","genome","DNA"],
    ex:[{ s:"A single extra {{}} causes the condition.", f:"chromosome", ko:"단 하나의 여분 염색체가 그 질환을 일으킨다." }] },

  { word:"chronic", pron:"크라닉", pos:"adj", level:"B2", meanings:["만성의","고질적인"],
    syn:["persistent","lingering","habitual"], ant:["acute"],
    ex:[{ s:"She has lived with {{}} back pain for years.", f:"chronic", ko:"그녀는 수년간 만성 허리 통증을 안고 살아왔다." }] },

  { word:"chronically", pron:"크라니컬리", pos:"adv", level:"C1", meanings:["만성적으로"],
    syn:["persistently","constantly","habitually"], ant:["briefly"],
    ex:[{ s:"The hospital is {{}} short of nurses.", f:"chronically", ko:"그 병원은 만성적으로 간호사가 부족하다." }] },

  { word:"chronicle", pron:"크라니클", pos:"n", level:"C1", meanings:["연대기","역사 기록"],
    syn:["record","account","annals"],
    ex:[{ s:"A monk's {{}} is the only source for that year.", f:"chronicle", ko:"어느 수도사의 연대기가 그 해의 유일한 기록이다." }] },

  { word:"chronological", pron:"크라널라지컬", pos:"adj", level:"C1", meanings:["연대순의","시간 순서대로 된"],
    syn:["sequential","consecutive","ordered"], ant:["random"],
    ex:[{ s:"Arrange the photographs in {{}} order.", f:"chronological", ko:"사진을 시간 순서대로 배열하라." }] },

  { word:"chronology", pron:"크러날러지", pos:"n", level:"C2", meanings:["연대학","연대기"],
    syn:["sequence","timeline","order"],
    ex:[{ s:"Scholars still argue over the {{}} of these events.", f:"chronology", ko:"학자들은 이 사건들의 연대 순서를 두고 여전히 다툰다." }] },

  { word:"chubby", pron:"처비", pos:"adj", level:"B2", meanings:["통통한","토실토실한"],
    syn:["plump","stout","round"], ant:["skinny"],
    ex:[{ s:"The baby waved a {{}} hand at the camera.", f:"chubby", ko:"아기가 통통한 손을 카메라에 흔들었다." }] },

  { word:"chuckle", pron:"처클", pos:"v", level:"B2", meanings:["낄낄 웃다","혼자 기뻐하다"],
    syn:["giggle","snicker","laugh"], ant:["frown"],
    ex:[{ s:"He began to {{}} at his own mistake.", f:"chuckle", ko:"그는 자신의 실수에 낄낄 웃기 시작했다." }] },

  { word:"chunk", pron:"청크", pos:"n", level:"B2", meanings:["큰 덩어리","상당한 양"],
    syn:["lump","block","hunk"],
    ex:[{ s:"A huge {{}} of ice broke off the glacier.", f:"chunk", ko:"거대한 얼음 덩어리가 빙하에서 떨어져 나왔다." }] },

  /* ── cir · cit ─────────────────────────────── */
  { word:"circulate", pron:"서큘레이트", pos:"v", level:"B2", meanings:["순환하다","유포하다"],
    syn:["flow","spread","distribute"], ant:["stagnate"],
    ex:[{ s:"Warm air needs room to {{}} through the house.", f:"circulate", ko:"따뜻한 공기가 집 안을 돌 공간이 필요하다." }] },

  { word:"circulation", pron:"서큘레이션", pos:"n", level:"B2", meanings:["발행 부수","유통"],
    syn:["distribution","spread","flow"],
    ex:[{ s:"The magazine's {{}} fell by half in two years.", f:"circulation", ko:"그 잡지의 발행 부수는 2년 만에 절반으로 떨어졌다." }] },

  { word:"circumference", pron:"서컴퍼런스", pos:"n", level:"C1", meanings:["둘레","원주"],
    syn:["perimeter","boundary","girth"],
    ex:[{ s:"He measured the {{}} of the tree with a string.", f:"circumference", ko:"그는 끈으로 나무의 둘레를 재었다." }] },

  { word:"circumstance", pron:"서컴스턴스", pos:"n", level:"B2", meanings:["상황","환경"],
    syn:["situation","condition","context"],
    ex:[{ s:"Under no {{}} should you open that door.", f:"circumstance", ko:"어떤 상황에서도 그 문을 열어서는 안 된다." }] },

  { word:"circumstantial", pron:"서컴스탠셜", pos:"adj", level:"C2", meanings:["정황적인","부수적인"],
    syn:["indirect","inferred","incidental"], ant:["direct"],
    ex:[{ s:"The case rested on {{}} evidence alone.", f:"circumstantial", ko:"그 사건은 정황 증거만에 의지하고 있었다." }] },

  { word:"cite", pron:"사이트", pos:"v", level:"B2", meanings:["인용하다","언급하다"],
    syn:["quote","mention","reference"],
    ex:[{ s:"The judge went on to {{}} three earlier rulings.", f:"cite", ko:"판사는 이어 이전 판결 세 건을 인용했다." }] },

  { word:"citizenship", pron:"시티즌십", pos:"n", level:"B2", meanings:["시민권"],
    syn:["nationality","residency","status"],
    ex:[{ s:"He applied for {{}} after ten years abroad.", f:"citizenship", ko:"그는 10년간 외국에 산 뒤 시민권을 신청했다." }] },

  /* ── civ ───────────────────────────────────── */
  { word:"civic", pron:"시빅", pos:"adj", level:"C1", meanings:["시민의","시의"],
    syn:["municipal","public","communal"], ant:["private"],
    ex:[{ s:"Voting is treated as a basic {{}} duty here.", f:"civic", ko:"이곳에서 투표는 기본적인 시민의 의무로 여겨진다." }] },

  { word:"civil", pron:"시빌", pos:"adj", level:"B2", meanings:["민간의","정중한"],
    syn:["civilian","domestic","nonmilitary"], ant:["military"],
    ex:[{ s:"The airport now handles only {{}} flights.", f:"civil", ko:"그 공항은 이제 민간 항공편만 취급한다." }] },

  { word:"civilian", pron:"서빌리언", pos:"n", level:"B2", meanings:["민간인","일반 시민"],
    syn:["noncombatant","resident","citizen"], ant:["soldier"],
    ex:[{ s:"No {{}} was allowed within a mile of the base.", f:"civilian", ko:"기지에서 1마일 안으로는 민간인이 들어갈 수 없었다." }] },

  { word:"civilization", pron:"시벌라이제이션", pos:"n", level:"B2", meanings:["문명"],
    syn:["culture","society","development"], ant:["barbarism"],
    ex:[{ s:"The valley gave rise to an early farming {{}}.", f:"civilization", ko:"그 계곡에서 초기 농경 문명이 일어났다." }] },

  { word:"civilize", pron:"시벌라이즈", pos:"v", level:"C1", meanings:["교화하다","세련되게 하다"],
    syn:["refine","cultivate","enlighten"],
    ex:[{ s:"The empire claimed a mission to {{}} distant lands.", f:"civilize", ko:"그 제국은 먼 땅을 교화한다는 사명을 내세웠다." }] },

  /* ── cla · cle · cli ───────────────────────── */
  { word:"claim", pron:"클레임", pos:"v", level:"B1", meanings:["요구하다","주장하다"],
    syn:["assert","maintain","demand"], ant:["deny"],
    ex:[{ s:"Two groups {{}} responsibility for the fire.", f:"claimed", ko:"두 단체가 그 화재에 대한 책임을 주장했다." }],
    col:[{ p:"claim responsibility {{}} the attack", a:"for", pool:"prep", note:"claim responsibility for : ~에 대한 책임을 주장하다" }] },

  { word:"clan", pron:"클랜", pos:"n", level:"C1", meanings:["씨족","부족"],
    syn:["tribe","family","kin"],
    ex:[{ s:"Every {{}} sent one elder to the council.", f:"clan", ko:"각 씨족은 원로 한 명을 회의에 보냈다." }] },

  { word:"clarify", pron:"클래러파이", pos:"v", level:"B2", meanings:["명확하게 하다","분명히 하다"],
    syn:["explain","elucidate","specify"], ant:["obscure"],
    ex:[{ s:"Let me {{}} what I meant earlier.", f:"clarify", ko:"앞서 내가 뜻한 바를 분명히 하겠다." }] },

  { word:"clarity", pron:"클래러티", pos:"n", level:"B2", meanings:["명확성","명료성"],
    syn:["lucidity","precision","transparency"], ant:["vagueness"],
    ex:[{ s:"The report lacks {{}} on where the money went.", f:"clarity", ko:"그 보고서는 돈이 어디로 갔는지가 명확하지 않다." }] },

  { word:"clash", pron:"클래시", pos:"n", level:"B2", meanings:["충돌","대립"],
    syn:["conflict","confrontation","collision"], ant:["harmony"],
    ex:[{ s:"A {{}} between rival fans stopped the match.", f:"clash", ko:"라이벌 팬들 사이의 충돌로 경기가 중단되었다." }] },

  { word:"classified", pron:"클래서파이드", pos:"adj", level:"B2", meanings:["기밀의","분류된"],
    syn:["secret","confidential","restricted"], ant:["public"],
    ex:[{ s:"The file stays {{}} for another fifty years.", f:"classified", ko:"그 파일은 앞으로 50년 더 기밀로 유지된다." }] },

  { word:"classify", pron:"클래서파이", pos:"v", level:"B2", meanings:["구분하다","분류하다"],
    syn:["categorize","sort","group"],
    ex:[{ s:"Botanists {{}} these plants as ferns.", f:"classify", ko:"식물학자들은 이 식물을 양치류로 분류한다." }] },

  { word:"clatter", pron:"클래터", pos:"v", level:"C1", meanings:["달가닥거리다","덜컹거리다"],
    syn:["rattle","clank","bang"], ant:["hush"],
    ex:[{ s:"The pans {{}} onto the tiled floor.", f:"clattered", ko:"냄비들이 타일 바닥으로 달가닥거리며 떨어졌다." }] },

  { word:"clear one's throat", pron:"클리어 원스 스로트", pos:"phr", level:"B2", meanings:["목청을 가다듬다","헛기침을 하다"],
    syn:["cough","hem","rasp"] },

  { word:"clergy", pron:"클러지", pos:"n", level:"C1", meanings:["성직자","목사"],
    syn:["priesthood","ministry","cleric"], ant:["laity"],
    ex:[{ s:"Local {{}} joined the march for housing.", f:"clergy", ko:"지역 성직자들이 주거 문제 행진에 참여했다." }] },

  { word:"cliche", pron:"클리셰", pos:"n", level:"C1", meanings:["상투적인 어구","진부한 표현"],
    syn:["platitude","banality","truism"],
    ex:[{ s:"The speech was built out of tired {{}}.", f:"cliches", ko:"그 연설은 낡은 상투적 표현으로 짜여 있었다." }] },

  { word:"client", pron:"클라이언트", pos:"n", level:"B1", meanings:["의뢰인","고객"],
    syn:["customer","patron","buyer"],
    ex:[{ s:"Every {{}} gets the same first meeting.", f:"client", ko:"모든 의뢰인은 똑같은 첫 상담을 받는다." }] },

  { word:"clinical", pron:"클리니컬", pos:"adj", level:"B2", meanings:["임상의","냉정한"],
    syn:["medical","diagnostic","detached"],
    ex:[{ s:"The drug passed its first {{}} trial.", f:"clinical", ko:"그 약은 첫 임상 시험을 통과했다." }] },

  { word:"clipping", pron:"클리핑", pos:"n", level:"B2", meanings:["오려낸 기사","스크랩"],
    syn:["cutting","excerpt","extract"],
    ex:[{ s:"She kept a yellowed {{}} from the local paper.", f:"clipping", ko:"그녀는 지역 신문에서 오려낸 누런 기사를 보관했다." }] },

  { word:"clique", pron:"클리크", pos:"n", level:"C2", meanings:["파벌","패거리"],
    syn:["faction","coterie","circle"],
    ex:[{ s:"A small {{}} controlled every decision.", f:"clique", ko:"작은 파벌이 모든 결정을 통제했다." }] },

  { word:"clockwise", pron:"클락와이즈", pos:"adv", level:"B2", meanings:["시계 방향으로"],
    syn:["rightward","around","circularly"], ant:["counterclockwise"],
    ex:[{ s:"Turn the dial {{}} to lock the door.", f:"clockwise", ko:"문을 잠그려면 손잡이를 시계 방향으로 돌려라." }] },

  { word:"clone", pron:"클론", pos:"n", level:"B2", meanings:["복제 생물","클론"],
    syn:["duplicate","copy","replica"], ant:["original"],
    ex:[{ s:"The lamb was the first {{}} of its kind.", f:"clone", ko:"그 양은 그 종류로는 첫 복제 생물이었다." }] },

  { word:"clumsy", pron:"클럼지", pos:"adj", level:"B1", meanings:["서투른","어설픈"],
    syn:["awkward","inept","ungainly"], ant:["graceful"],
    ex:[{ s:"His {{}} apology only made things worse.", f:"clumsy", ko:"그의 어설픈 사과는 상황을 더 나쁘게 만들었다." }] },

  { word:"cluster", pron:"클러스터", pos:"n", level:"B2", meanings:["덩어리","무리"],
    syn:["bunch","batch","clump"], ant:["scattering"],
    ex:[{ s:"A {{}} of small islands lies just offshore.", f:"cluster", ko:"작은 섬 무리가 해안 바로 앞에 있다." }] },

  /* ── coa · coc · cod · coe ─────────────────── */
  { word:"coarse", pron:"코스", pos:"adj", level:"B2", meanings:["거친","조잡한"],
    syn:["rough","crude","harsh"], ant:["smooth"],
    ex:[{ s:"The blanket felt {{}} against her skin.", f:"coarse", ko:"그 담요는 그녀의 피부에 거칠게 느껴졌다." }] },

  { word:"cocoon", pron:"커쿤", pos:"n", level:"C1", meanings:["고치","보호막"],
    syn:["casing","shell","wrap"],
    ex:[{ s:"The larva spins a {{}} of fine silk.", f:"cocoon", ko:"유충은 고운 실로 고치를 짓는다." }] },

  { word:"cod", pron:"카드", pos:"n", level:"B2", meanings:["대구"],
    syn:["fish","haddock","pollock"],
    ex:[{ s:"Fishermen once landed {{}} here by the ton.", f:"cod", ko:"어부들은 한때 여기서 대구를 톤 단위로 잡아 올렸다." }] },

  { word:"coed", pron:"코에드", pos:"adj", level:"C1", meanings:["남녀공학의","남녀공용의"],
    syn:["mixed","joint","integrated"], ant:["single-sex"],
    ex:[{ s:"It became a {{}} school in the seventies.", f:"coed", ko:"그곳은 70년대에 남녀공학 학교가 되었다." }] },

  { word:"coeducation", pron:"코에듀케이션", pos:"n", level:"C1", meanings:["남녀 공학"],
    syn:["integration","mixing","inclusion"],
    ex:[{ s:"The college debated {{}} for a decade.", f:"coeducation", ko:"그 대학은 10년간 남녀 공학을 두고 논쟁했다." }] },

  { word:"coexist", pron:"코이그지스트", pos:"v", level:"C1", meanings:["공존하다"],
    syn:["cohabit","accompany","survive"], ant:["clash"],
    ex:[{ s:"The two species {{}} in the same shallow lake.", f:"coexist", ko:"그 두 종은 같은 얕은 호수에서 공존한다." }] },

  /* ── cog · coh · coi ───────────────────────── */
  { word:"cognitive", pron:"카그니티브", pos:"adj", level:"C1", meanings:["인지의","인식의"],
    syn:["mental","intellectual","rational"], ant:["emotional"],
    ex:[{ s:"Puzzles sharpen {{}} skills in young children.", f:"cognitive", ko:"퍼즐은 어린 아이의 인지 능력을 날카롭게 한다." }] },

  { word:"coherent", pron:"코히런트", pos:"adj", level:"C1", meanings:["일관성 있는","논리정연한"],
    syn:["logical","consistent","lucid"], ant:["rambling"],
    ex:[{ s:"He could not give a {{}} account of that night.", f:"coherent", ko:"그는 그날 밤에 대해 논리정연한 설명을 하지 못했다." }] },

  { word:"cohesion", pron:"코히전", pos:"n", level:"C1", meanings:["화합","결속"],
    syn:["unity","solidarity","bonding"], ant:["division"],
    ex:[{ s:"Shared hardship built {{}} within the crew.", f:"cohesion", ko:"함께 겪은 고난이 승무원들 사이에 화합을 만들었다." }] },

  { word:"cohesive", pron:"코히시브", pos:"adj", level:"C2", meanings:["결합력 있는","화합하는"],
    syn:["united","integrated","tight-knit"], ant:["fragmented"],
    ex:[{ s:"A {{}} group resists pressure from outside.", f:"cohesive", ko:"결합력 있는 집단은 외부의 압력에 잘 버틴다." }] },

  { word:"coin", pron:"코인", pos:"n", level:"B1", meanings:["동전","새 말을 만들다"],
    syn:["change","currency","token"],
    ex:[{ s:"He found an old {{}} under the floorboards.", f:"coin", ko:"그는 바닥 판자 아래에서 오래된 동전을 발견했다." }] },

  { word:"coincide", pron:"코인사이드", pos:"v", level:"C1", meanings:["동시에 일어나다","일치하다"],
    syn:["overlap","concur","match"], ant:["differ"],
    ex:[{ s:"Her visit will {{}} with the harvest festival.", f:"coincide", ko:"그녀의 방문은 추수 축제와 겹칠 것이다." }],
    col:[{ p:"coincide {{}} the holiday", a:"with", pool:"prep", note:"coincide with : ~와 겹치다·일치하다" }] },

  { word:"coincidence", pron:"코인시던스", pos:"n", level:"B2", meanings:["우연의 일치"],
    syn:["chance","accident","fluke"], ant:["design"],
    ex:[{ s:"Meeting him twice in one day was pure {{}}.", f:"coincidence", ko:"하루에 그를 두 번 만난 것은 순전히 우연이었다." }] },

  /* ── col ───────────────────────────────────── */
  { word:"collaborate", pron:"컬래버레이트", pos:"v", level:"B2", meanings:["공동으로 일하다","협동하다"],
    syn:["cooperate","partner","team up"], ant:["compete"],
    ex:[{ s:"Rival labs agreed to {{}} on one vaccine.", f:"collaborate", ko:"경쟁하던 연구소들이 하나의 백신을 두고 협력하기로 했다." }],
    col:[{ p:"collaborate {{}} a rival firm", a:"with", pool:"prep", note:"collaborate with : ~와 협력하다" }] },

  { word:"collapse", pron:"컬랩스", pos:"v", level:"B2", meanings:["무너지다","붕괴"],
    syn:["crumble","fall","cave in"], ant:["endure"],
    ex:[{ s:"The roof began to {{}} under the weight of snow.", f:"collapse", ko:"지붕이 눈의 무게에 무너지기 시작했다." }] },

  { word:"colleague", pron:"칼리그", pos:"n", level:"B1", meanings:["동료"],
    syn:["coworker","associate","peer"], ant:["rival"],
    ex:[{ s:"A {{}} offered to cover his night shift.", f:"colleague", ko:"동료 한 명이 그의 야간 근무를 대신해 주겠다고 했다." }] },

  { word:"collect on", pron:"컬렉트 온", pos:"phr", level:"C2", meanings:["~을 상환받다","수령하다"],
    syn:["recover","claim","redeem"] },

  { word:"collective", pron:"컬렉티브", pos:"adj", level:"B2", meanings:["집단의","공동의"],
    syn:["joint","shared","communal"], ant:["individual"],
    ex:[{ s:"The vote was a {{}} decision, not the chair's.", f:"collective", ko:"그 표결은 의장이 아니라 집단의 결정이었다." }] },

  { word:"collide", pron:"컬라이드", pos:"v", level:"B2", meanings:["충돌하다","상충하다"],
    syn:["clash","crash","hit"], ant:["avoid"],
    ex:[{ s:"Two trains almost {{}} near the old bridge.", f:"collided", ko:"두 기차가 낡은 다리 근처에서 거의 충돌할 뻔했다." }] },

  { word:"collide with", pron:"컬라이드 위드", pos:"phr", level:"B2", meanings:["~와 충돌하다"],
    syn:["strike","ram","bump"], ant:["avoid"] },

  { word:"collision", pron:"컬리전", pos:"n", level:"B2", meanings:["충돌 사고","부딪침"],
    syn:["crash","impact","wreck"],
    ex:[{ s:"The {{}} crumpled both front doors.", f:"collision", ko:"그 충돌 사고로 앞문 두 짝이 찌그러졌다." }] },

  { word:"colony", pron:"칼러니", pos:"n", level:"B1", meanings:["식민지","군집"],
    syn:["settlement","territory","outpost"],
    ex:[{ s:"The island was once a French {{}}.", f:"colony", ko:"그 섬은 한때 프랑스 식민지였다." }] },

  { word:"column", pron:"칼럼", pos:"n", level:"B1", meanings:["칼럼","기고란"],
    syn:["article","feature","piece"],
    ex:[{ s:"She writes a weekly {{}} about street food.", f:"column", ko:"그녀는 길거리 음식에 대한 주간 칼럼을 쓴다." }] },

  /* ── com ───────────────────────────────────── */
  { word:"combination", pron:"캄비네이션", pos:"n", level:"B1", meanings:["조합","배합"],
    syn:["mixture","blend","pairing"], ant:["separation"],
    ex:[{ s:"The lock opens with a three-digit {{}}.", f:"combination", ko:"그 자물쇠는 세 자리 조합으로 열린다." }] },

  { word:"combine", pron:"컴바인", pos:"v", level:"B1", meanings:["결합하다","합치다"],
    syn:["merge","unite","blend"], ant:["separate"],
    ex:[{ s:"{{}} the dry ingredients before adding milk.", f:"Combine", ko:"우유를 넣기 전에 가루 재료를 섞어라." }] },

  { word:"combustion", pron:"컴버스천", pos:"n", level:"C1", meanings:["연소","발화"],
    syn:["burning","ignition","oxidation"],
    ex:[{ s:"Incomplete {{}} fills the room with smoke.", f:"combustion", ko:"불완전 연소는 방을 연기로 채운다." }] },

  { word:"come about", pron:"컴 어바웃", pos:"phr", level:"B2", meanings:["일어나다","발생하다"],
    syn:["happen","occur","arise"] },

  { word:"come across", pron:"컴 어크로스", pos:"phr", level:"B1", meanings:["우연히 마주치다","발견하다"],
    syn:["encounter","find","stumble on"], ant:["seek"] },

  { word:"come into existence", pron:"컴 인투 이그지스턴스", pos:"phr", level:"C1", meanings:["탄생하다","생겨나다"],
    syn:["emerge","originate","form"], ant:["vanish"] },

  { word:"come into sight", pron:"컴 인투 사이트", pos:"phr", level:"B2", meanings:["보이기 시작하다","시야에 들어오다"],
    syn:["appear","emerge","surface"], ant:["disappear"] },

  { word:"come to an end", pron:"컴 투 언 엔드", pos:"phr", level:"B1", meanings:["끝나다","막을 내리다"],
    syn:["finish","conclude","terminate"], ant:["commence"] },

  { word:"come to mind", pron:"컴 투 마인드", pos:"phr", level:"B2", meanings:["생각나다","떠오르다"],
    syn:["occur","strike","register"], ant:["escape"] },

  { word:"come to pass", pron:"컴 투 패스", pos:"phr", level:"C2", meanings:["발생하다","생기다"],
    syn:["happen","transpire","unfold"] },

  { word:"come up with", pron:"컴 업 위드", pos:"phr", level:"B1", meanings:["찾아내다","제안하다"],
    syn:["devise","invent","propose"], ant:["abandon"] },

  { word:"comet", pron:"카밋", pos:"n", level:"B2", meanings:["혜성"],
    syn:["meteor","asteroid","fireball"],
    ex:[{ s:"The {{}} returns every seventy-six years.", f:"comet", ko:"그 혜성은 76년마다 돌아온다." }] },

  { word:"comfort zone", pron:"컴포트 존", pos:"n", level:"B2", meanings:["안전지대"],
    syn:["routine","habit","security"],
    ex:[{ s:"Real learning happens outside your {{}}.", f:"comfort zone", ko:"진짜 배움은 안전지대 밖에서 일어난다." }] },

  { word:"comic strip", pron:"카믹 스트립", pos:"n", level:"B2", meanings:["연재 만화"],
    syn:["cartoon","strip","funnies"],
    ex:[{ s:"He read the {{}} before anything else in the paper.", f:"comic strip", ko:"그는 신문에서 연재 만화를 무엇보다 먼저 읽었다." }] },

  /* ── comm ──────────────────────────────────── */
  { word:"command", pron:"커맨드", pos:"n", level:"B1", meanings:["명령","지휘"],
    syn:["order","directive","instruction"], ant:["request"],
    ex:[{ s:"The captain gave the {{}} to turn back.", f:"command", ko:"선장은 되돌아가라는 명령을 내렸다." }] },

  { word:"commandeer", pron:"카먼디어", pos:"v", level:"C2", meanings:["징발하다","강제로 빼앗다"],
    syn:["seize","appropriate","requisition"], ant:["return"],
    ex:[{ s:"Troops began to {{}} private trucks for the retreat.", f:"commandeer", ko:"군대는 후퇴를 위해 민간 트럭을 징발하기 시작했다." }] },

  { word:"commander", pron:"커맨더", pos:"n", level:"B2", meanings:["사령관","지휘자"],
    syn:["chief","leader","officer"], ant:["subordinate"],
    ex:[{ s:"The {{}} ordered a full retreat before dawn.", f:"commander", ko:"사령관은 새벽 전에 전면 후퇴를 명령했다." }] },

  { word:"commemorate", pron:"커메머레이트", pos:"v", level:"C1", meanings:["기념하다","추모하다"],
    syn:["honor","celebrate","memorialize"], ant:["forget"],
    ex:[{ s:"A statue was raised to {{}} the victims.", f:"commemorate", ko:"희생자들을 기념하기 위해 조각상이 세워졌다." }] },

  { word:"commence", pron:"커멘스", pos:"v", level:"C1", meanings:["시작되다","착수하다"],
    syn:["begin","start","initiate"], ant:["conclude"],
    ex:[{ s:"The trial will {{}} in early March.", f:"commence", ko:"재판은 3월 초에 시작될 것이다." }] },

  { word:"comment", pron:"카멘트", pos:"v", level:"B1", meanings:["견해를 밝히다","논평"],
    syn:["remark","observe","state"],
    ex:[{ s:"He refused to {{}} on the rumour.", f:"comment", ko:"그는 그 소문에 대해 견해를 밝히기를 거부했다." }] },

  { word:"commentary", pron:"카먼터리", pos:"n", level:"B2", meanings:["해설","논평"],
    syn:["analysis","narration","review"],
    ex:[{ s:"Her {{}} made a dull match worth watching.", f:"commentary", ko:"그녀의 해설은 지루한 경기를 볼 만하게 만들었다." }] },

  { word:"commentate", pron:"카먼테이트", pos:"v", level:"C2", meanings:["실황 방송을 하다","중계하다"],
    syn:["narrate","describe","broadcast"],
    ex:[{ s:"He was invited to {{}} on the final.", f:"commentate", ko:"그는 결승전 중계를 맡아 달라는 요청을 받았다." }] },

  { word:"commerce", pron:"카머스", pos:"n", level:"B2", meanings:["무역","상거래"],
    syn:["trade","business","dealing"],
    ex:[{ s:"The river once carried most of the region's {{}}.", f:"commerce", ko:"그 강은 한때 이 지역 무역의 대부분을 실어 옮겼다." }] },

  { word:"commercial", pron:"커머셜", pos:"adj", level:"B1", meanings:["상업의","광고방송"],
    syn:["business","profitable","mercantile"], ant:["nonprofit"],
    ex:[{ s:"The film was a {{}} success but a critical failure.", f:"commercial", ko:"그 영화는 상업적으로는 성공했지만 비평에서는 실패했다." }] },

  { word:"commission", pron:"커미션", pos:"n", level:"B2", meanings:["임무","위원회"],
    syn:["assignment","task","mandate"],
    ex:[{ s:"She accepted a {{}} to paint the city hall.", f:"commission", ko:"그녀는 시청을 그리는 임무를 받아들였다." }] },

  { word:"commitment", pron:"커미트먼트", pos:"n", level:"B2", meanings:["헌신","약속"],
    syn:["pledge","dedication","devotion"], ant:["indifference"],
    ex:[{ s:"Her {{}} to the team never wavered.", f:"commitment", ko:"팀에 대한 그녀의 헌신은 흔들린 적이 없다." }],
    col:[{ p:"a commitment {{}} reform", a:"to", pool:"prep", note:"commitment to : ~에 대한 전념·약속" }] },

  { word:"committee", pron:"커미티", pos:"n", level:"B1", meanings:["위원회","위원"],
    syn:["board","panel","council"],
    ex:[{ s:"The {{}} meets on the first Monday of each month.", f:"committee", ko:"그 위원회는 매달 첫째 월요일에 모인다." }] },

  { word:"commodity", pron:"커마더티", pos:"n", level:"B2", meanings:["상품","물자"],
    syn:["goods","product","merchandise"],
    ex:[{ s:"Clean water is a scarce {{}} in the region.", f:"commodity", ko:"깨끗한 물은 그 지역에서 희소한 물자다." }] },

  { word:"common assessment", pron:"카먼 어세스먼트", pos:"n", level:"C1", meanings:["공통 평가"],
    syn:["standard test","benchmark","evaluation"],
    ex:[{ s:"Every school in the district now uses a {{}}.", f:"common assessment", ko:"그 학군의 모든 학교는 이제 공통 평가를 사용한다." }] },

  { word:"common good", pron:"카먼 굿", pos:"n", level:"C1", meanings:["공익"],
    syn:["public interest","welfare","benefit"],
    ex:[{ s:"Taxes are meant to serve the {{}}.", f:"common good", ko:"세금은 공익에 쓰이기 위한 것이다." }] },

  { word:"commonality", pron:"카머낼리티", pos:"n", level:"C2", meanings:["공통점"],
    syn:["similarity","likeness","overlap"], ant:["difference"],
    ex:[{ s:"The two cases share one striking {{}}.", f:"commonality", ko:"그 두 사건은 놀라운 공통점 하나를 공유한다." }] },

  { word:"commoner", pron:"카머너", pos:"n", level:"C2", meanings:["평민"],
    syn:["citizen","peasant","layperson"], ant:["noble"],
    ex:[{ s:"A {{}} could not enter the inner palace.", f:"commoner", ko:"평민은 궁궐 안쪽에 들어갈 수 없었다." }] },

  { word:"commonsense", pron:"카먼센스", pos:"adj", level:"B2", meanings:["상식적인"],
    syn:["sensible","practical","reasonable"], ant:["absurd"],
    ex:[{ s:"This is a {{}} rule, not a legal one.", f:"commonsense", ko:"이것은 법이 아니라 상식적인 규칙이다." }] },

  { word:"communal", pron:"커뮤널", pos:"adj", level:"C1", meanings:["공동의","집단의"],
    syn:["shared","collective","joint"], ant:["personal"],
    ex:[{ s:"The building has one {{}} kitchen per floor.", f:"communal", ko:"그 건물에는 층마다 공동 주방이 하나 있다." }] },

  { word:"community", pron:"커뮤니티", pos:"n", level:"B1", meanings:["사회","공동체"],
    syn:["society","population","neighborhood"],
    ex:[{ s:"The whole {{}} turned out to rebuild the bridge.", f:"community", ko:"온 마을이 다리를 다시 세우러 나왔다." }] },

  { word:"commute", pron:"커뮤트", pos:"v", level:"B1", meanings:["통근하다","통학하다"],
    syn:["travel","journey","shuttle"],
    ex:[{ s:"He {{}} two hours in each direction.", f:"commutes", ko:"그는 편도 두 시간씩 통근한다." }] },

  /* ── compa · compe ─────────────────────────── */
  { word:"compact", pron:"컴팩트", pos:"adj", level:"B2", meanings:["소형의","밀집한"],
    syn:["small","dense","condensed"], ant:["bulky"],
    ex:[{ s:"The {{}} camera fits in a coat pocket.", f:"compact", ko:"그 소형 카메라는 외투 주머니에 들어간다." }] },

  { word:"companion", pron:"컴패니언", pos:"n", level:"B1", meanings:["동반자","친구"],
    syn:["partner","comrade","escort"],
    ex:[{ s:"A dog makes a loyal {{}} on long walks.", f:"companion", ko:"개는 긴 산책에서 충실한 동반자가 된다." }] },

  { word:"companionship", pron:"컴패니언십", pos:"n", level:"C1", meanings:["교우관계","교제"],
    syn:["friendship","fellowship","company"], ant:["loneliness"],
    ex:[{ s:"She missed the {{}} of her old workmates.", f:"companionship", ko:"그녀는 옛 동료들과의 교제를 그리워했다." }] },

  { word:"comparable", pron:"캄퍼러블", pos:"adj", level:"B2", meanings:["비슷한","비교할 만한"],
    syn:["similar","equivalent","akin"], ant:["unlike"],
    ex:[{ s:"Their salaries are roughly {{}}.", f:"comparable", ko:"그들의 급여는 대체로 비슷하다." }] },

  { word:"comparative", pron:"컴패러티브", pos:"adj", level:"C1", meanings:["상대적인","비교의"],
    syn:["relative","proportional","parallel"], ant:["absolute"],
    ex:[{ s:"In {{}} terms, the risk is very small.", f:"comparative", ko:"상대적으로 보면 그 위험은 아주 작다." }] },

  { word:"compare", pron:"컴페어", pos:"v", level:"B1", meanings:["비교하다"],
    syn:["contrast","weigh","liken"],
    ex:[{ s:"It is unfair to {{}} the two systems directly.", f:"compare", ko:"두 체계를 직접 비교하는 것은 부당하다." }],
    col:[{ p:"compare this one {{}} that", a:"with", pool:"prep", note:"compare A with B : A를 B와 비교하다" }] },

  { word:"compartment", pron:"컴파트먼트", pos:"n", level:"B2", meanings:["칸막이 방","객실"],
    syn:["section","division","bay"],
    ex:[{ s:"He stored his bag in the overhead {{}}.", f:"compartment", ko:"그는 머리 위 칸에 가방을 넣었다." }] },

  { word:"compassion", pron:"컴패션", pos:"n", level:"B2", meanings:["동정","연민"],
    syn:["sympathy","pity","mercy"], ant:["cruelty"],
    ex:[{ s:"She spoke about the refugees with real {{}}.", f:"compassion", ko:"그녀는 난민들에 대해 진심 어린 연민으로 말했다." }] },

  { word:"compassionate", pron:"컴패셔닛", pos:"adj", level:"C1", meanings:["연민 어린","인정 많은"],
    syn:["merciful","humane","kind"], ant:["ruthless"],
    ex:[{ s:"A {{}} judge cut the sentence in half.", f:"compassionate", ko:"인정 많은 판사가 형을 절반으로 줄였다." }] },

  { word:"compatibility", pron:"컴패터빌리티", pos:"n", level:"C1", meanings:["호환성","양립 가능성"],
    syn:["consistency","harmony","fit"], ant:["conflict"],
    ex:[{ s:"Check {{}} before you install the driver.", f:"compatibility", ko:"드라이버를 설치하기 전에 호환성을 확인하라." }] },

  { word:"compatible", pron:"컴패터블", pos:"adj", level:"B2", meanings:["호환되는","양립될 수 있는"],
    syn:["suited","consistent","matching"], ant:["incompatible"],
    ex:[{ s:"The new part is not {{}} with older models.", f:"compatible", ko:"새 부품은 구형 모델과 호환되지 않는다." }],
    col:[{ p:"compatible {{}} the old model", a:"with", pool:"prep", note:"be compatible with : ~와 호환되다" }] },

  { word:"compel", pron:"컴펠", pos:"v", level:"B2", meanings:["강요하다","~하게 만들다"],
    syn:["force","oblige","coerce"], ant:["allow"],
    ex:[{ s:"Nothing on earth could {{}} him to sign it.", f:"compel", ko:"세상 어떤 것도 그에게 서명을 강요할 수 없었다." }] },

  { word:"compelling", pron:"컴펠링", pos:"adj", level:"C1", meanings:["강력한","설득력 있는"],
    syn:["persuasive","convincing","forceful"], ant:["weak"],
    ex:[{ s:"The evidence against him was simply {{}}.", f:"compelling", ko:"그에게 불리한 증거는 그야말로 강력했다." }] },

  { word:"compensate", pron:"캄펜세이트", pos:"v", level:"B2", meanings:["보상하다","배상하다"],
    syn:["repay","reimburse","offset"],
    ex:[{ s:"The airline offered to {{}} every passenger.", f:"compensate", ko:"항공사는 모든 승객에게 보상하겠다고 제안했다." }] },

  { word:"compensate for", pron:"캄펜세이트 포", pos:"phr", level:"B2", meanings:["~를 보충하다","메우다"],
    syn:["offset","balance","make up"] },

  { word:"compete", pron:"컴피트", pos:"v", level:"B1", meanings:["경쟁하다","겨루다"],
    syn:["contend","vie","rival"], ant:["cooperate"],
    ex:[{ s:"Small shops cannot {{}} on price alone.", f:"compete", ko:"작은 가게들은 가격만으로 경쟁할 수 없다." }] },

  { word:"compete for", pron:"컴피트 포", pos:"phr", level:"B2", meanings:["~을 두고 경쟁하다"],
    syn:["contest","pursue","seek"] },

  { word:"competence", pron:"캄피턴스", pos:"n", level:"C1", meanings:["능숙함","능력"],
    syn:["proficiency","skill","mastery"], ant:["incompetence"],
    ex:[{ s:"The job demands technical {{}}, not charm.", f:"competence", ko:"그 일은 매력이 아니라 기술적 능숙함을 요구한다." }] },

  { word:"competent", pron:"캄피턴트", pos:"adj", level:"B2", meanings:["유능한","능력이 있는"],
    syn:["capable","qualified","proficient"], ant:["inept"],
    ex:[{ s:"She proved a quietly {{}} manager.", f:"competent", ko:"그녀는 조용히 유능한 관리자임을 증명했다." }] },

  { word:"competitive", pron:"컴페터티브", pos:"adj", level:"B2", meanings:["경쟁력 있는","경쟁심이 강한"],
    syn:["rivalrous","aggressive","ambitious"], ant:["cooperative"],
    ex:[{ s:"The market here is fiercely {{}}.", f:"competitive", ko:"이곳 시장은 경쟁이 치열하다." }] },

  { word:"competitiveness", pron:"컴페터티브니스", pos:"n", level:"C1", meanings:["경쟁력"],
    syn:["edge","strength","rivalry"],
    ex:[{ s:"Training raised the firm's {{}} within a year.", f:"competitiveness", ko:"교육은 1년 만에 그 회사의 경쟁력을 높였다." }] },

  /* ── compi · compl ─────────────────────────── */
  { word:"compile", pron:"컴파일", pos:"v", level:"B2", meanings:["수집하다","편집하다"],
    syn:["gather","assemble","collate"], ant:["scatter"],
    ex:[{ s:"He spent thirty years to {{}} the dictionary.", f:"compile", ko:"그는 그 사전을 편찬하는 데 30년을 썼다." }] },

  { word:"complacent", pron:"컴플레이선트", pos:"adj", level:"C2", meanings:["현실에 안주하는","자기만족적인"],
    syn:["smug","contented","unconcerned"], ant:["anxious"],
    ex:[{ s:"One easy win made the team {{}}.", f:"complacent", ko:"한 번의 쉬운 승리가 그 팀을 안주하게 만들었다." }] },

  { word:"complain", pron:"컴플레인", pos:"v", level:"B1", meanings:["불평하다","항의하다"],
    syn:["protest","grumble","object"], ant:["praise"],
    ex:[{ s:"Guests began to {{}} about the noise upstairs.", f:"complain", ko:"손님들은 위층 소음에 대해 불평하기 시작했다." }],
    col:[{ p:"complain {{}} the noise", a:"about", pool:"prep", note:"complain about : ~에 대해 불평하다" }] },

  { word:"complement", pron:"캄플러먼트", pos:"n", level:"C1", meanings:["보충","보완물"],
    syn:["addition","supplement","counterpart"],
    ex:[{ s:"The wine is a perfect {{}} to the fish.", f:"complement", ko:"그 와인은 생선과 완벽하게 어울리는 보완물이다." }] },

  { word:"complementary", pron:"캄플러멘터리", pos:"adj", level:"C1", meanings:["상호 보완적인"],
    syn:["reciprocal","matching","interdependent"], ant:["conflicting"],
    ex:[{ s:"Their two skills are entirely {{}}.", f:"complementary", ko:"그들의 두 기술은 완전히 상호 보완적이다." }] },

  { word:"complex", pron:"컴플렉스", pos:"adj", level:"B1", meanings:["복합적인","복잡한"],
    syn:["intricate","involved","multiple"], ant:["simple"],
    ex:[{ s:"The problem is far more {{}} than it looks.", f:"complex", ko:"그 문제는 보이는 것보다 훨씬 복합적이다." }] },

  { word:"compliant", pron:"컴플라이언트", pos:"adj", level:"C2", meanings:["순응하는","준수하는"],
    syn:["obedient","yielding","conforming"], ant:["defiant"],
    ex:[{ s:"The building is now fully {{}} with fire rules.", f:"compliant", ko:"그 건물은 이제 소방 규정을 완전히 준수한다." }] },

  { word:"complicated", pron:"캄플리케이티드", pos:"adj", level:"B1", meanings:["복잡한","뒤얽힌"],
    syn:["complex","tangled","elaborate"], ant:["straightforward"],
    ex:[{ s:"The rules are needlessly {{}}.", f:"complicated", ko:"그 규칙들은 불필요하게 복잡하다." }] },

  { word:"complication", pron:"캄플리케이션", pos:"n", level:"B2", meanings:["합병증","문제"],
    syn:["difficulty","snag","setback"],
    ex:[{ s:"A rare {{}} kept him in hospital for weeks.", f:"complication", ko:"드문 합병증 때문에 그는 몇 주간 병원에 있었다." }] },

  { word:"compliment", pron:"캄플러먼트", pos:"n", level:"B1", meanings:["칭찬","찬사"],
    syn:["praise","tribute","flattery"], ant:["insult"],
    ex:[{ s:"She blushed at the unexpected {{}}.", f:"compliment", ko:"그녀는 뜻밖의 칭찬에 얼굴을 붉혔다." }] },

  { word:"complimentary", pron:"캄플러멘터리", pos:"adj", level:"B2", meanings:["무료의","칭찬하는"],
    syn:["free","gratis","flattering"],
    ex:[{ s:"Breakfast is {{}} for every guest.", f:"complimentary", ko:"아침 식사는 모든 손님에게 무료다." }] },

  { word:"comply", pron:"컴플라이", pos:"v", level:"B2", meanings:["응하다","준수하다"],
    syn:["obey","observe","submit"], ant:["defy"],
    ex:[{ s:"Drivers must {{}} or lose their licence.", f:"comply", ko:"운전자는 따르지 않으면 면허를 잃는다." }] },

  { word:"comply with", pron:"컴플라이 위드", pos:"phr", level:"B2", meanings:["순응하다","지키다"],
    syn:["follow","respect","heed"], ant:["violate"] },

  /* ── compo ─────────────────────────────────── */
  { word:"component", pron:"컴포넌트", pos:"n", level:"B2", meanings:["성분","구성 요소"],
    syn:["element","part","ingredient"], ant:["whole"],
    ex:[{ s:"Each {{}} is tested before assembly.", f:"component", ko:"각 부품은 조립 전에 시험을 거친다." }] },

  { word:"compose", pron:"컴포즈", pos:"v", level:"B1", meanings:["구성하다","작곡하다"],
    syn:["form","constitute","create"],
    ex:[{ s:"Water is {{}} of hydrogen and oxygen.", f:"composed", ko:"물은 수소와 산소로 구성되어 있다." }] },

  { word:"composition", pron:"캄포지션", pos:"n", level:"B2", meanings:["작문","구성"],
    syn:["essay","arrangement","makeup"],
    ex:[{ s:"The class wrote a short {{}} about winter.", f:"composition", ko:"학급은 겨울에 대한 짧은 작문을 썼다." }] },

  { word:"compost", pron:"캄포스트", pos:"n", level:"C1", meanings:["퇴비"],
    syn:["manure","fertilizer","humus"],
    ex:[{ s:"She turns kitchen scraps into {{}}.", f:"compost", ko:"그녀는 음식 찌꺼기를 퇴비로 만든다." }] },

  { word:"compound", pron:"캄파운드", pos:"n", level:"B2", meanings:["화합물","혼합물"],
    syn:["mixture","blend","alloy"], ant:["element"],
    ex:[{ s:"Salt is a {{}} of sodium and chlorine.", f:"compound", ko:"소금은 나트륨과 염소의 화합물이다." }] },

  { word:"comprehend", pron:"캄프리헨드", pos:"v", level:"B2", meanings:["이해하다","파악하다"],
    syn:["grasp","understand","fathom"], ant:["misread"],
    ex:[{ s:"No one could fully {{}} the scale of the loss.", f:"comprehend", ko:"누구도 그 손실의 규모를 온전히 이해할 수 없었다." }] },

  { word:"comprehensible", pron:"캄프리헨서블", pos:"adj", level:"C1", meanings:["이해되는","알기 쉬운"],
    syn:["clear","intelligible","plain"], ant:["baffling"],
    ex:[{ s:"He rewrote the manual to make it {{}}.", f:"comprehensible", ko:"그는 설명서를 알기 쉽게 다시 썼다." }] },

  { word:"comprehensive", pron:"캄프리헨시브", pos:"adj", level:"B2", meanings:["포괄적인","종합적인"],
    syn:["thorough","complete","extensive"], ant:["partial"],
    ex:[{ s:"The report gives a {{}} view of the industry.", f:"comprehensive", ko:"그 보고서는 업계를 종합적으로 조망한다." }] },

  { word:"compress", pron:"컴프레스", pos:"v", level:"B2", meanings:["압축하다","요약하다"],
    syn:["squeeze","condense","compact"], ant:["expand"],
    ex:[{ s:"The software can {{}} a film into one file.", f:"compress", ko:"그 소프트웨어는 영화 한 편을 파일 하나로 압축할 수 있다." }] },

  { word:"comprise", pron:"컴프라이즈", pos:"v", level:"C1", meanings:["~으로 구성되다","차지하다"],
    syn:["consist","include","contain"], ant:["exclude"],
    ex:[{ s:"Women {{}} nearly half the workforce.", f:"comprise", ko:"여성이 노동 인구의 거의 절반을 차지한다." }] },

  { word:"compromise", pron:"캄프러마이즈", pos:"n", level:"B2", meanings:["타협","절충"],
    syn:["settlement","deal","concession"], ant:["stalemate"],
    ex:[{ s:"Both sides settled on an awkward {{}}.", f:"compromise", ko:"양측은 어색한 타협에 이르렀다." }] },

  { word:"compulsive", pron:"컴펄시브", pos:"adj", level:"C1", meanings:["강박적인","억제하기 힘든"],
    syn:["obsessive","uncontrollable","addictive"],
    ex:[{ s:"He is a {{}} checker of locks and windows.", f:"compulsive", ko:"그는 강박적으로 문과 창문을 확인한다." }] },

  { word:"compulsory", pron:"컴펄서리", pos:"adj", level:"B2", meanings:["의무적인","강제적인"],
    syn:["mandatory","required","obligatory"], ant:["optional"],
    ex:[{ s:"Helmets became {{}} for all riders.", f:"compulsory", ko:"헬멧은 모든 탑승자에게 의무가 되었다." }] },

  { word:"comrade", pron:"캄래드", pos:"n", level:"C1", meanings:["동지","전우"],
    syn:["companion","ally","fellow"], ant:["foe"],
    ex:[{ s:"He carried a wounded {{}} for two miles.", f:"comrade", ko:"그는 다친 전우를 2마일이나 업고 갔다." }] },

  /* ── conc ──────────────────────────────────── */
  { word:"concave", pron:"칸케이브", pos:"adj", level:"C2", meanings:["오목한","움푹한"],
    syn:["hollow","sunken","curved"], ant:["convex"],
    ex:[{ s:"The mirror's {{}} surface gathers the light.", f:"concave", ko:"그 거울의 오목한 면이 빛을 모은다." }] },

  { word:"conceal", pron:"컨실", pos:"v", level:"B2", meanings:["숨기다","비밀로 하다"],
    syn:["hide","mask","cover"], ant:["reveal"],
    ex:[{ s:"He could not {{}} his disappointment.", f:"conceal", ko:"그는 실망을 숨길 수 없었다." }] },

  { word:"concede", pron:"컨시드", pos:"v", level:"C1", meanings:["시인하다","양보하다"],
    syn:["admit","grant","yield"], ant:["deny"],
    ex:[{ s:"She was forced to {{}} that the plan had failed.", f:"concede", ko:"그녀는 그 계획이 실패했음을 시인해야 했다." }] },

  { word:"conceited", pron:"컨시티드", pos:"adj", level:"C1", meanings:["건방진","자만하는"],
    syn:["arrogant","vain","boastful"], ant:["modest"],
    ex:[{ s:"Success made him insufferably {{}}.", f:"conceited", ko:"성공은 그를 참기 힘들 만큼 오만하게 만들었다." }] },

  { word:"conceive", pron:"컨시브", pos:"v", level:"C1", meanings:["마음속에 품다","구상하다"],
    syn:["imagine","devise","envision"],
    ex:[{ s:"She first {{}} the idea on a night train.", f:"conceived", ko:"그녀는 야간 열차에서 처음 그 착상을 떠올렸다." }] },

  { word:"concentrate", pron:"칸선트레이트", pos:"v", level:"B1", meanings:["집중하다","모으다"],
    syn:["focus","fixate","gather"], ant:["wander"],
    ex:[{ s:"It is hard to {{}} with the radio on.", f:"concentrate", ko:"라디오를 켜 두고는 집중하기 어렵다." }],
    col:[{ p:"concentrate {{}} one task at a time", a:"on", pool:"prep", note:"concentrate on : ~에 집중하다" }] },

  { word:"concentration", pron:"칸선트레이션", pos:"n", level:"B2", meanings:["집중","농도"],
    syn:["attention","focus","density"], ant:["distraction"],
    ex:[{ s:"One shout broke her {{}} completely.", f:"concentration", ko:"한 번의 외침이 그녀의 집중을 완전히 깨뜨렸다." }] },

  { word:"concern", pron:"컨선", pos:"n", level:"B1", meanings:["걱정","우려"],
    syn:["worry","anxiety","unease"], ant:["indifference"],
    ex:[{ s:"Rising costs are a real {{}} for farmers.", f:"concern", ko:"오르는 비용은 농민들에게 실질적인 걱정이다." }],
    col:[{ p:"concerned {{}} safety", a:"about", pool:"prep", note:"be concerned about : ~를 걱정하다" }] },

  { word:"concert goer", pron:"칸서트 고어", pos:"n", level:"C1", meanings:["콘서트 관객"],
    syn:["listener","attendee","spectator"],
    ex:[{ s:"Every {{}} was handed a paper programme.", f:"concert goer", ko:"모든 콘서트 관객이 종이 프로그램을 받았다." }] },

  { word:"concession", pron:"컨세션", pos:"n", level:"C1", meanings:["양보","용인"],
    syn:["allowance","compromise","surrender"], ant:["demand"],
    ex:[{ s:"The union won one small {{}} on hours.", f:"concession", ko:"노조는 근무 시간에서 작은 양보를 얻어냈다." }] },

  { word:"conclusion", pron:"컨클루전", pos:"n", level:"B1", meanings:["결론","결말"],
    syn:["ending","finding","verdict"], ant:["opening"],
    ex:[{ s:"He reached the same {{}} by a different route.", f:"conclusion", ko:"그는 다른 경로로 같은 결론에 이르렀다." }] },

  { word:"concrete", pron:"칸크리트", pos:"adj", level:"B2", meanings:["구체적인","실체가 있는"],
    syn:["definite","tangible","specific"], ant:["abstract"],
    ex:[{ s:"We need {{}} proposals, not vague hopes.", f:"concrete", ko:"우리에게는 막연한 희망이 아니라 구체적인 제안이 필요하다." }] },

  /* 첫 뜻을 '동의하다'로 두면 A 세트 accede와 카드 문구가 똑같아진다 */
  { word:"concur", pron:"컨커", pos:"v", level:"C2", meanings:["의견이 일치하다","동의하다"],
    syn:["agree","assent","coincide"], ant:["dissent"],
    ex:[{ s:"Two of the three judges {{}} with the ruling.", f:"concurred", ko:"세 판사 중 둘이 그 판결에 동의했다." }] },

  /* ── cond · condu ──────────────────────────── */
  { word:"condemn", pron:"컨뎀", pos:"v", level:"B2", meanings:["규탄하다","유죄를 선고하다"],
    syn:["denounce","censure","convict"], ant:["applaud"],
    ex:[{ s:"World leaders were quick to {{}} the attack.", f:"condemn", ko:"세계 지도자들은 그 공격을 즉각 규탄했다." }] },

  { word:"condense", pron:"컨덴스", pos:"v", level:"C1", meanings:["농축하다","요약하다"],
    syn:["thicken","reduce","abridge"], ant:["dilute"],
    ex:[{ s:"He had to {{}} the lecture into ten minutes.", f:"condense", ko:"그는 강의를 10분으로 압축해야 했다." }] },

  { word:"condone", pron:"컨돈", pos:"v", level:"C2", meanings:["용납하다","묵인하다"],
    syn:["excuse","overlook","pardon"], ant:["punish"],
    ex:[{ s:"The school will not {{}} cheating of any kind.", f:"condone", ko:"학교는 어떤 형태의 부정행위도 용납하지 않는다." }] },

  { word:"conducive", pron:"컨두시브", pos:"adj", level:"C2", meanings:["~에 좋은","도움이 되는"],
    syn:["helpful","favorable","beneficial"], ant:["harmful"],
    ex:[{ s:"A cool dark room is {{}} to deep sleep.", f:"conducive", ko:"시원하고 어두운 방은 깊은 잠에 좋다." }],
    col:[{ p:"conducive {{}} good sleep", a:"to", pool:"prep", note:"be conducive to : ~에 도움이 되다" }] },

  { word:"conduct", pron:"칸덕트", pos:"n", level:"B2", meanings:["행동","수행"],
    syn:["behavior","manner","action"],
    ex:[{ s:"His {{}} during the trial impressed no one.", f:"conduct", ko:"재판 중 그의 행동은 누구에게도 인상을 주지 못했다." }] },

  { word:"conductor", pron:"컨덕터", pos:"n", level:"B2", meanings:["도체","지휘자"],
    syn:["transmitter","leader","director"], ant:["insulator"],
    ex:[{ s:"Copper is a far better {{}} than iron.", f:"conductor", ko:"구리는 철보다 훨씬 나은 도체다." }] },

  { word:"cone", pron:"콘", pos:"n", level:"B1", meanings:["원뿔"],
    syn:["funnel","taper","spire"],
    ex:[{ s:"Road crews set a orange {{}} at each corner.", f:"cone", ko:"도로 작업반이 각 모서리에 주황색 원뿔을 놓았다." }] },

  /* ── conf ──────────────────────────────────── */
  { word:"conference", pron:"칸퍼런스", pos:"n", level:"B1", meanings:["회의","회담"],
    syn:["meeting","convention","summit"],
    ex:[{ s:"She presented the data at a medical {{}}.", f:"conference", ko:"그녀는 의학 회의에서 그 자료를 발표했다." }] },

  { word:"confess", pron:"컨페스", pos:"v", level:"B2", meanings:["고백하다","자백하다"],
    syn:["admit","disclose","own up"], ant:["deny"],
    ex:[{ s:"He finally {{}} to taking the money.", f:"confessed", ko:"그는 결국 돈을 가져갔다고 자백했다." }] },

  { word:"confessional", pron:"컨페셔널", pos:"n", level:"C2", meanings:["고해실"],
    syn:["booth","cubicle","chamber"],
    ex:[{ s:"A curtain hung across the old {{}}.", f:"confessional", ko:"낡은 고해실에 커튼이 드리워져 있었다." }] },

  { word:"confidence", pron:"칸피던스", pos:"n", level:"B1", meanings:["신뢰","자신감"],
    syn:["assurance","trust","belief"], ant:["doubt"],
    ex:[{ s:"Losing twice shook his {{}} badly.", f:"confidence", ko:"두 번의 패배는 그의 자신감을 크게 흔들었다." }] },

  { word:"confidential", pron:"칸피덴셜", pos:"adj", level:"B2", meanings:["비밀의","기밀의"],
    syn:["private","secret","classified"], ant:["open"],
    ex:[{ s:"Please treat these figures as {{}}.", f:"confidential", ko:"이 수치는 기밀로 취급해 주십시오." }] },

  { word:"confine", pron:"컨파인", pos:"v", level:"C1", meanings:["국한시키다","가두다"],
    syn:["restrict","limit","imprison"], ant:["release"],
    ex:[{ s:"Please {{}} your answer to one page.", f:"confine", ko:"답변을 한 페이지로 국한해 주십시오." }] },

  { word:"confirm", pron:"컨펌", pos:"v", level:"B1", meanings:["확인하다","확실히 하다"],
    syn:["verify","validate","certify"], ant:["refute"],
    ex:[{ s:"Two witnesses {{}} his version of events.", f:"confirmed", ko:"두 증인이 그의 진술을 확인해 주었다." }] },

  { word:"confiscate", pron:"칸피스케이트", pos:"v", level:"C2", meanings:["몰수하다","압수하다"],
    syn:["seize","impound","appropriate"], ant:["restore"],
    ex:[{ s:"Guards will {{}} any glass bottle at the gate.", f:"confiscate", ko:"경비원은 정문에서 유리병을 모두 압수한다." }] },

  { word:"conflict", pron:"칸플릭트", pos:"n", level:"B1", meanings:["갈등","분쟁"],
    syn:["dispute","struggle","friction"], ant:["peace"],
    ex:[{ s:"The border {{}} lasted eleven years.", f:"conflict", ko:"그 국경 분쟁은 11년간 이어졌다." }] },

  { word:"conflicting", pron:"컨플릭팅", pos:"adj", level:"B2", meanings:["모순되는","상반되는"],
    syn:["contradictory","opposing","clashing"], ant:["consistent"],
    ex:[{ s:"Witnesses gave {{}} accounts of the crash.", f:"conflicting", ko:"증인들은 그 충돌에 대해 상반되는 진술을 했다." }] },

  { word:"conform", pron:"컨폼", pos:"v", level:"B2", meanings:["따르다","순응하다"],
    syn:["obey","adapt","fit in"], ant:["rebel"],
    ex:[{ s:"New buildings must {{}} to the fire code.", f:"conform", ko:"새 건물은 소방 규정을 따라야 한다." }],
    col:[{ p:"conform {{}} the standard", a:"to", pool:"prep", note:"conform to : ~에 맞추다·순응하다" }] },

  { word:"confront", pron:"컨프런트", pos:"v", level:"B2", meanings:["직면하다","맞서다"],
    syn:["face","tackle","challenge"], ant:["evade"],
    ex:[{ s:"She decided to {{}} him about the missing files.", f:"confront", ko:"그녀는 사라진 파일에 대해 그와 맞서기로 했다." }] },

  { word:"confuse", pron:"컨퓨즈", pos:"v", level:"B1", meanings:["혼동하다","헷갈리게 하다"],
    syn:["muddle","mix up","bewilder"], ant:["clarify"],
    ex:[{ s:"People often {{}} the two brothers.", f:"confuse", ko:"사람들은 종종 그 두 형제를 혼동한다." }] },

  { word:"confused", pron:"컨퓨즈드", pos:"adj", level:"B1", meanings:["혼란스러워 하는","갈피를 못 잡는"],
    syn:["puzzled","bewildered","disoriented"], ant:["certain"],
    ex:[{ s:"The new rules left everyone {{}}.", f:"confused", ko:"새 규칙은 모두를 혼란스럽게 했다." }] },

  /* ── cong · conj · conn ────────────────────── */
  { word:"congest", pron:"컨제스트", pos:"v", level:"C2", meanings:["혼잡하게 하다","정체시키다"],
    syn:["clog","block","crowd"], ant:["clear"],
    ex:[{ s:"Roadworks {{}} the whole city centre.", f:"congested", ko:"도로 공사가 도심 전체를 혼잡하게 했다." }] },

  { word:"congestion", pron:"컨제스천", pos:"n", level:"B2", meanings:["혼잡","정체"],
    syn:["jam","crowding","blockage"], ant:["flow"],
    ex:[{ s:"A new tunnel eased the worst of the {{}}.", f:"congestion", ko:"새 터널이 최악의 정체를 완화했다." }] },

  { word:"congress", pron:"캉그레스", pos:"n", level:"B1", meanings:["의회","국회"],
    syn:["parliament","assembly","legislature"],
    ex:[{ s:"The bill passed {{}} by a single vote.", f:"congress", ko:"그 법안은 단 한 표 차이로 의회를 통과했다." }] },

  { word:"conjure up", pron:"칸저 업", pos:"phr", level:"C1", meanings:["~을 상기시키다","떠올리게 하다"],
    syn:["evoke","summon","recall"] },

  { word:"connotation", pron:"카너테이션", pos:"n", level:"C2", meanings:["함축","내포된 의미"],
    syn:["implication","overtone","nuance"], ant:["denotation"],
    ex:[{ s:"The word carries a faintly hostile {{}}.", f:"connotation", ko:"그 단어는 희미하게 적대적인 함축을 지닌다." }] },

  /* ── conq · cons ───────────────────────────── */
  { word:"conquer", pron:"캉커", pos:"v", level:"B2", meanings:["정복하다","이기다"],
    syn:["defeat","subdue","overcome"], ant:["surrender"],
    ex:[{ s:"No army managed to {{}} the mountain kingdom.", f:"conquer", ko:"어떤 군대도 그 산악 왕국을 정복하지 못했다." }] },

  { word:"conqueror", pron:"캉커러", pos:"n", level:"C1", meanings:["정복자"],
    syn:["victor","invader","champion"], ant:["captive"],
    ex:[{ s:"The city opened its gates to the {{}}.", f:"conqueror", ko:"그 도시는 정복자에게 성문을 열었다." }] },

  { word:"conscience", pron:"칸션스", pos:"n", level:"B2", meanings:["양심"],
    syn:["morality","scruples","principle"],
    ex:[{ s:"A guilty {{}} kept him awake all night.", f:"conscience", ko:"죄책감이 든 양심이 그를 밤새 깨어 있게 했다." }] },

  { word:"consciously", pron:"칸셔슬리", pos:"adv", level:"B2", meanings:["의식적으로"],
    syn:["deliberately","knowingly","purposely"], ant:["unwittingly"],
    ex:[{ s:"She {{}} slowed her breathing.", f:"consciously", ko:"그녀는 의식적으로 호흡을 늦췄다." }] },

  { word:"consciousness", pron:"칸셔스니스", pos:"n", level:"B2", meanings:["의식","자각"],
    syn:["awareness","sentience","perception"], ant:["oblivion"],
    ex:[{ s:"He lost {{}} for nearly a minute.", f:"consciousness", ko:"그는 거의 1분간 의식을 잃었다." }] },

  { word:"consecutive", pron:"컨세큐티브", pos:"adj", level:"B2", meanings:["연속적인","잇따른"],
    syn:["successive","sequential","unbroken"], ant:["intermittent"],
    ex:[{ s:"It rained for nine {{}} days.", f:"consecutive", ko:"아흐레 연속으로 비가 내렸다." }] },

  { word:"consensus", pron:"컨센서스", pos:"n", level:"B2", meanings:["의견 일치","합의"],
    syn:["agreement","accord","unanimity"], ant:["dispute"],
    ex:[{ s:"The panel reached no {{}} after six hours.", f:"consensus", ko:"위원단은 여섯 시간이 지나도 합의에 이르지 못했다." }] },

  { word:"consent", pron:"컨센트", pos:"n", level:"B2", meanings:["승낙","동의"],
    syn:["permission","approval","assent"], ant:["refusal"],
    ex:[{ s:"No surgery goes ahead without written {{}}.", f:"consent", ko:"서면 승낙 없이는 어떤 수술도 진행되지 않는다." }],
    col:[{ p:"consent {{}} the operation", a:"to", pool:"prep", note:"consent to : ~에 동의하다" }] },

  { word:"consequence", pron:"칸서퀀스", pos:"n", level:"B1", meanings:["결과","영향"],
    syn:["outcome","result","effect"], ant:["cause"],
    ex:[{ s:"He never thought about the {{}} of lying.", f:"consequence", ko:"그는 거짓말의 결과를 한 번도 생각하지 않았다." }] },

  { word:"consequent", pron:"칸서퀀트", pos:"adj", level:"C1", meanings:["결과로서 생기는","뒤따르는"],
    syn:["resulting","ensuing","subsequent"],
    ex:[{ s:"The drought and {{}} crop failure ruined the village.", f:"consequent", ko:"가뭄과 그로 인한 흉작이 그 마을을 망쳤다." }] },

  { word:"consequently", pron:"칸서퀀틀리", pos:"adv", level:"B2", meanings:["그 결과","따라서"],
    syn:["therefore","thus","hence"],
    ex:[{ s:"He missed the train and {{}} lost the job.", f:"consequently", ko:"그는 기차를 놓쳐서 그 결과 일자리를 잃었다." }] },

  /* ── conserv · consid · consist ────────────── */
  { word:"conservation", pron:"칸서베이션", pos:"n", level:"B2", meanings:["보존","보호"],
    syn:["preservation","protection","upkeep"], ant:["waste"],
    ex:[{ s:"The park funds wildlife {{}} in the valley.", f:"conservation", ko:"그 공원은 계곡의 야생동물 보호에 자금을 댄다." }] },

  { word:"conservative", pron:"컨서버티브", pos:"adj", level:"B2", meanings:["보수적인","전통적인"],
    syn:["traditional","cautious","conventional"], ant:["radical"],
    ex:[{ s:"Her taste in music is surprisingly {{}}.", f:"conservative", ko:"그녀의 음악 취향은 놀랍도록 보수적이다." }] },

  { word:"conserve", pron:"컨서브", pos:"v", level:"B2", meanings:["아끼다","보호하다"],
    syn:["save","preserve","husband"], ant:["squander"],
    ex:[{ s:"Turn off the taps to {{}} water.", f:"conserve", ko:"물을 아끼려면 수도를 잠가라." }] },

  { word:"considerable", pron:"컨시더러블", pos:"adj", level:"B2", meanings:["상당한","꽤 많은"],
    syn:["substantial","sizable","significant"], ant:["trivial"],
    ex:[{ s:"The repair took a {{}} amount of time.", f:"considerable", ko:"그 수리에는 상당한 시간이 걸렸다." }] },

  { word:"considerate", pron:"컨시더릿", pos:"adj", level:"B2", meanings:["사려 깊은","인정이 있는"],
    syn:["thoughtful","kind","attentive"], ant:["selfish"],
    ex:[{ s:"It was {{}} of him to call ahead.", f:"considerate", ko:"미리 전화를 준 것은 그의 사려 깊은 처사였다." }] },

  { word:"considering", pron:"컨시더링", pos:"phr", level:"B2", meanings:["~을 고려하면"],
    syn:["given","regarding","allowing for"] },

  { word:"consist", pron:"컨시스트", pos:"v", level:"B1", meanings:["~로 이루어져 있다","구성되다"],
    syn:["comprise","contain","include"],
    ex:[{ s:"The kit {{}} of six small tools.", f:"consists", ko:"그 세트는 작은 도구 여섯 개로 이루어져 있다." }],
    col:[{ p:"consist {{}} three parts", a:"of", pool:"prep", note:"consist of : ~로 이루어져 있다" }] },

  { word:"consistency", pron:"컨시스턴시", pos:"n", level:"B2", meanings:["일관성","한결같음"],
    syn:["steadiness","uniformity","regularity"], ant:["variability"],
    ex:[{ s:"Her results show remarkable {{}} year after year.", f:"consistency", ko:"그녀의 성적은 해마다 놀라운 일관성을 보인다." }] },

  { word:"consistent", pron:"컨시스턴트", pos:"adj", level:"B2", meanings:["한결같은","일치하는"],
    syn:["steady","uniform","unchanging"], ant:["erratic"],
    ex:[{ s:"His story has stayed {{}} through three interviews.", f:"consistent", ko:"그의 진술은 세 차례 면담을 거쳐도 한결같았다." }] },

  { word:"console", pron:"컨솔", pos:"v", level:"B2", meanings:["위로하다","달래다"],
    syn:["comfort","soothe","reassure"], ant:["upset"],
    ex:[{ s:"Nothing anyone said could {{}} her that evening.", f:"console", ko:"그날 저녁 누구의 말도 그녀를 위로할 수 없었다." }] },

  { word:"consolidate", pron:"컨살리데이트", pos:"v", level:"C1", meanings:["강화하다","통합하다"],
    syn:["strengthen","merge","unify"], ant:["weaken"],
    ex:[{ s:"The firm moved to {{}} its two city offices.", f:"consolidate", ko:"그 회사는 도심의 두 사무소를 통합하기로 했다." }] },

  /* ── conspi · const ───────────────────────── */
  { word:"conspicuous", pron:"컨스피큐어스", pos:"adj", level:"C1", meanings:["눈에 잘 띄는","두드러진"],
    syn:["noticeable","obvious","prominent"], ant:["inconspicuous"],
    ex:[{ s:"A red coat made her {{}} in the grey crowd.", f:"conspicuous", ko:"빨간 외투가 회색 군중 속에서 그녀를 눈에 띄게 했다." }] },

  { word:"conspiracy", pron:"컨스피러시", pos:"n", level:"C1", meanings:["음모","공모"],
    syn:["plot","scheme","collusion"],
    ex:[{ s:"Police uncovered a {{}} to fix ticket prices.", f:"conspiracy", ko:"경찰은 표 값을 조작하려는 음모를 밝혀냈다." }] },

  { word:"conspire", pron:"컨스파이어", pos:"v", level:"C1", meanings:["음모를 꾸미다","공모하다"],
    syn:["plot","scheme","connive"],
    ex:[{ s:"The pair began to {{}} against their own captain.", f:"conspire", ko:"그 둘은 자기 주장을 상대로 음모를 꾸미기 시작했다." }] },

  /* 첫 뜻을 '끊임없는'으로 두면 ceaseless(2차)와 카드 문구가 똑같아진다 */
  { word:"constant", pron:"칸스턴트", pos:"adj", level:"B1", meanings:["일정한","끊임없는"],
    syn:["steady","unchanging","perpetual"], ant:["variable"],
    ex:[{ s:"The engine held a {{}} speed for hours.", f:"constant", ko:"엔진은 몇 시간이나 일정한 속도를 유지했다." }] },

  { word:"constellation", pron:"칸스털레이션", pos:"n", level:"C1", meanings:["별자리","성운"],
    syn:["cluster","galaxy","group"],
    ex:[{ s:"He pointed out a {{}} just above the roof.", f:"constellation", ko:"그는 지붕 바로 위의 별자리를 가리켰다." }] },

  { word:"constitute", pron:"칸스티튜트", pos:"v", level:"C1", meanings:["~으로 여겨지다","구성하다"],
    syn:["form","make up","represent"],
    ex:[{ s:"Twelve members {{}} a quorum.", f:"constitute", ko:"열두 명이 정족수를 구성한다." }] },

  { word:"constitution", pron:"칸스티튜션", pos:"n", level:"B2", meanings:["헌법","체질"],
    syn:["charter","statute","makeup"],
    ex:[{ s:"The {{}} limits the president to two terms.", f:"constitution", ko:"헌법은 대통령을 두 번의 임기로 제한한다." }] },

  /* 첫 뜻을 '강요하다'로 두면 compel(4차)과 똑같아진다 */
  { word:"constrain", pron:"컨스트레인", pos:"v", level:"C1", meanings:["제약하다","못하게 하다"],
    syn:["restrict","hamper","inhibit"], ant:["liberate"],
    ex:[{ s:"A tight budget will {{}} the whole design.", f:"constrain", ko:"빡빡한 예산이 설계 전체를 제약할 것이다." }] },

  { word:"constrict", pron:"컨스트릭트", pos:"v", level:"C2", meanings:["수축시키다","조이다"],
    syn:["tighten","narrow","squeeze"], ant:["dilate"],
    ex:[{ s:"Cold air can {{}} the airways.", f:"constrict", ko:"찬 공기는 기도를 수축시킬 수 있다." }] },

  { word:"construct", pron:"컨스트럭트", pos:"v", level:"B1", meanings:["건설하다","만들다"],
    syn:["build","erect","assemble"], ant:["demolish"],
    ex:[{ s:"Engineers plan to {{}} a second bridge.", f:"construct", ko:"공학자들은 두 번째 다리를 건설할 계획이다." }] },

  { word:"construction", pron:"컨스트럭션", pos:"n", level:"B1", meanings:["건설","구축"],
    syn:["building","assembly","erection"], ant:["demolition"],
    ex:[{ s:"The {{}} of the tunnel took eight years.", f:"construction", ko:"그 터널의 건설에는 8년이 걸렸다." }] },

  /* ── consult · consum ─────────────────────── */
  { word:"consult", pron:"컨설트", pos:"v", level:"B1", meanings:["참고하다","상담하다"],
    syn:["refer","ask","confer"],
    ex:[{ s:"You should {{}} a lawyer before signing.", f:"consult", ko:"서명하기 전에 변호사와 상담해야 한다." }] },

  { word:"consume", pron:"컨슘", pos:"v", level:"B1", meanings:["소비하다","먹다"],
    syn:["use","expend","devour"], ant:["produce"],
    ex:[{ s:"These lamps {{}} very little power.", f:"consume", ko:"이 램프들은 전력을 거의 쓰지 않는다." }] },

  { word:"consumer", pron:"컨슈머", pos:"n", level:"B1", meanings:["소비자"],
    syn:["buyer","shopper","user"], ant:["producer"],
    ex:[{ s:"The average {{}} never reads the label.", f:"consumer", ko:"보통 소비자는 라벨을 결코 읽지 않는다." }] },

  { word:"consumption", pron:"컨섬션", pos:"n", level:"B2", meanings:["소비","소비량"],
    syn:["use","intake","expenditure"], ant:["production"],
    ex:[{ s:"Meat {{}} has fallen steadily since 2010.", f:"consumption", ko:"육류 소비는 2010년 이후 꾸준히 줄었다." }] },

  /* ── conta · contem · conten ──────────────── */
  { word:"contagious", pron:"컨테이저스", pos:"adj", level:"B2", meanings:["전염성의","잘 옮는"],
    syn:["infectious","catching","transmissible"],
    ex:[{ s:"Measles is highly {{}} in crowded rooms.", f:"contagious", ko:"홍역은 붐비는 방에서 전염성이 매우 높다." }] },

  { word:"contain", pron:"컨테인", pos:"v", level:"B1", meanings:["~이 들어 있다","억제하다"],
    syn:["hold","include","enclose"], ant:["exclude"],
    ex:[{ s:"The box may {{}} fragile items.", f:"contain", ko:"그 상자에는 깨지기 쉬운 물건이 들어 있을 수 있다." }] },

  { word:"contaminate", pron:"컨태머네이트", pos:"v", level:"B2", meanings:["오염시키다","더럽히다"],
    syn:["pollute","taint","infect"], ant:["purify"],
    ex:[{ s:"One leak could {{}} the whole well.", f:"contaminate", ko:"누출 한 번이 우물 전체를 오염시킬 수 있다." }] },

  { word:"contamination", pron:"컨태머네이션", pos:"n", level:"B2", meanings:["오염","오염물"],
    syn:["pollution","infection","impurity"],
    ex:[{ s:"Tests found no {{}} in the soil.", f:"contamination", ko:"검사에서 토양의 오염은 발견되지 않았다." }] },

  { word:"contemplate", pron:"칸템플레이트", pos:"v", level:"C1", meanings:["심사숙고하다","깊이 생각하다"],
    syn:["ponder","consider","muse"],
    ex:[{ s:"He sat by the window and began to {{}} his options.", f:"contemplate", ko:"그는 창가에 앉아 선택지를 심사숙고하기 시작했다." }] },

  { word:"contemporary", pron:"컨템퍼러리", pos:"adj", level:"B2", meanings:["현대의","동시대의"],
    syn:["modern","current","present-day"], ant:["ancient"],
    ex:[{ s:"The gallery shows only {{}} art.", f:"contemporary", ko:"그 갤러리는 현대 미술만 전시한다." }] },

  { word:"contempt", pron:"컨템트", pos:"n", level:"C1", meanings:["경멸","무시"],
    syn:["scorn","disdain","derision"], ant:["respect"],
    ex:[{ s:"She looked at him with open {{}}.", f:"contempt", ko:"그녀는 드러내 놓고 경멸하는 눈으로 그를 보았다." }] },

  { word:"content", pron:"칸텐트", pos:"n", level:"B1", meanings:["내용물","함량"],
    syn:["substance","material","matter"],
    ex:[{ s:"Check the fat {{}} printed on the label.", f:"content", ko:"라벨에 적힌 지방 함량을 확인하라." }] },

  { word:"contented", pron:"컨텐티드", pos:"adj", level:"B2", meanings:["만족하는","흡족한"],
    syn:["satisfied","pleased","serene"], ant:["restless"],
    ex:[{ s:"A {{}} cat slept beside the stove.", f:"contented", ko:"만족한 고양이가 난로 옆에서 잠들어 있었다." }] },

  { word:"context", pron:"칸텍스트", pos:"n", level:"B1", meanings:["문맥","맥락"],
    syn:["setting","background","framework"],
    ex:[{ s:"The quote makes no sense out of {{}}.", f:"context", ko:"그 인용구는 문맥을 벗어나면 뜻이 통하지 않는다." }] },

  { word:"continent", pron:"칸티넌트", pos:"n", level:"B1", meanings:["대륙","육지"],
    syn:["landmass","mainland","territory"],
    ex:[{ s:"No other {{}} is so dry.", f:"continent", ko:"그만큼 건조한 대륙은 없다." }] },

  { word:"continuous", pron:"컨티뉴어스", pos:"adj", level:"B1", meanings:["계속되는","끊이지 않는"],
    syn:["unbroken","ongoing","incessant"], ant:["sporadic"],
    ex:[{ s:"The machine gave off a {{}} hum.", f:"continuous", ko:"그 기계는 계속되는 웅웅 소리를 냈다." }] },

  /* ── contra · contri ──────────────────────── */
  { word:"contract", pron:"칸트랙트", pos:"n", level:"B1", meanings:["계약","약정"],
    syn:["agreement","deal","pact"],
    ex:[{ s:"They signed a three-year {{}} in May.", f:"contract", ko:"그들은 5월에 3년 계약을 맺었다." }] },

  { word:"contradict", pron:"칸트러딕트", pos:"v", level:"B2", meanings:["반박하다","부정하다"],
    syn:["dispute","deny","oppose"], ant:["confirm"],
    ex:[{ s:"The new data {{}} the earlier study.", f:"contradicts", ko:"새 자료는 앞선 연구를 반박한다." }] },

  { word:"contradiction", pron:"칸트러딕션", pos:"n", level:"B2", meanings:["모순","상반되는 것"],
    syn:["inconsistency","conflict","paradox"], ant:["agreement"],
    ex:[{ s:"His two claims are a flat {{}}.", f:"contradiction", ko:"그의 두 주장은 완전한 모순이다." }] },

  { word:"contrary to", pron:"칸트레리 투", pos:"phr", level:"B2", meanings:["~에 반해"],
    syn:["against","despite","unlike"] },

  { word:"contrast", pron:"칸트래스트", pos:"n", level:"B1", meanings:["대비","차이"],
    syn:["difference","distinction","disparity"], ant:["similarity"],
    ex:[{ s:"The {{}} between the twins is striking.", f:"contrast", ko:"그 쌍둥이 사이의 차이는 놀랍다." }] },

  { word:"contravene", pron:"칸트러빈", pos:"v", level:"C2", meanings:["위반하다","거스르다"],
    syn:["breach","infringe","defy"], ant:["obey"],
    ex:[{ s:"The new fence may {{}} local rules.", f:"contravene", ko:"새 울타리는 지역 규정을 위반할 수 있다." }] },

  { word:"contribute", pron:"컨트리뷰트", pos:"v", level:"B1", meanings:["기여하다","기부하다"],
    syn:["donate","supply","add"], ant:["withhold"],
    ex:[{ s:"Everyone was asked to {{}} one story.", f:"contribute", ko:"모두가 이야기 하나를 내놓으라는 요청을 받았다." }],
    col:[{ p:"contribute {{}} the relief fund", a:"to", pool:"prep", note:"contribute to : ~에 기여하다·기부하다" }] },

  { word:"contrive", pron:"컨트라이브", pos:"v", level:"C2", meanings:["꾀하다","고안하다"],
    syn:["devise","engineer","plot"],
    ex:[{ s:"They managed to {{}} an escape by night.", f:"contrive", ko:"그들은 밤에 탈출을 꾀하는 데 성공했다." }] },

  { word:"controversial", pron:"칸트러버셜", pos:"adj", level:"B2", meanings:["논쟁의 여지가 있는","말이 많은"],
    syn:["disputed","debatable","divisive"], ant:["undisputed"],
    ex:[{ s:"The ruling proved deeply {{}}.", f:"controversial", ko:"그 판결은 대단히 논쟁적인 것으로 드러났다." }] },

  { word:"controversy", pron:"칸트러버시", pos:"n", level:"B2", meanings:["논란","논쟁"],
    syn:["debate","dispute","quarrel"], ant:["consensus"],
    ex:[{ s:"The painting stirred real {{}} at the time.", f:"controversy", ko:"그 그림은 당시 상당한 논란을 일으켰다." }] },

  /* ── conv ─────────────────────────────────── */
  { word:"convene", pron:"컨빈", pos:"v", level:"C1", meanings:["소집하다","모이다"],
    syn:["assemble","gather","summon"], ant:["adjourn"],
    ex:[{ s:"The board will {{}} again on Friday.", f:"convene", ko:"이사회는 금요일에 다시 모인다." }] },

  { word:"conventional", pron:"컨벤셔널", pos:"adj", level:"B2", meanings:["관습적인","전통적인"],
    syn:["standard","orthodox","customary"], ant:["novel"],
    ex:[{ s:"He rejected {{}} teaching methods entirely.", f:"conventional", ko:"그는 관습적인 교수법을 완전히 거부했다." }] },

  { word:"converse", pron:"컨버스", pos:"adj", level:"C2", meanings:["정반대의","거꾸로인"],
    syn:["opposite","reverse","inverse"], ant:["identical"],
    ex:[{ s:"The {{}} is also true in cold weather.", f:"converse", ko:"추운 날씨에서는 그 반대도 성립한다." }] },

  { word:"conversely", pron:"컨버슬리", pos:"adv", level:"C1", meanings:["거꾸로","반대로"],
    syn:["contrarily","oppositely","instead"],
    ex:[{ s:"{{}}, warm water holds less oxygen.", f:"Conversely", ko:"거꾸로, 따뜻한 물은 산소를 덜 담는다." }] },

  { word:"convert", pron:"컨버트", pos:"v", level:"B1", meanings:["전환하다","바꾸다"],
    syn:["change","transform","adapt"],
    ex:[{ s:"They plan to {{}} the barn into flats.", f:"convert", ko:"그들은 그 헛간을 아파트로 바꿀 계획이다." }],
    col:[{ p:"convert the attic {{}} a study", a:"into", pool:"prep", note:"convert A into B : A를 B로 바꾸다" }] },

  { word:"convertible", pron:"컨버터블", pos:"adj", level:"C1", meanings:["바꿀 수 있는","개조할 수 있는"],
    syn:["adaptable","changeable","flexible"], ant:["fixed"],
    ex:[{ s:"The sofa is {{}} into a double bed.", f:"convertible", ko:"그 소파는 2인용 침대로 바꿀 수 있다." }] },

  { word:"convey", pron:"컨베이", pos:"v", level:"B2", meanings:["전달하다","전하다"],
    syn:["communicate","carry","impart"],
    ex:[{ s:"Words cannot {{}} how tired he looked.", f:"convey", ko:"말로는 그가 얼마나 지쳐 보였는지 전할 수 없다." }] },

  { word:"convict", pron:"칸빅트", pos:"n", level:"C1", meanings:["죄수","유죄를 선고하다"],
    syn:["prisoner","inmate","felon"],
    ex:[{ s:"The {{}} served nine years before release.", f:"convict", ko:"그 죄수는 석방 전까지 9년을 복역했다." }] },

  { word:"conviction", pron:"컨빅션", pos:"n", level:"B2", meanings:["신념","확신"],
    syn:["belief","certainty","faith"], ant:["hesitation"],
    ex:[{ s:"She spoke with quiet {{}} about the plan.", f:"conviction", ko:"그녀는 그 계획에 대해 조용한 신념으로 말했다." }] },

  { word:"convince", pron:"컨빈스", pos:"v", level:"B1", meanings:["납득시키다","설득하다"],
    syn:["persuade","assure","satisfy"], ant:["dissuade"],
    ex:[{ s:"Nothing will {{}} him to change his mind.", f:"convince", ko:"어떤 것도 그가 마음을 바꾸도록 납득시키지 못할 것이다." }],
    col:[{ p:"convince him {{}} the risk", a:"of", pool:"prep", note:"convince A of B : A에게 B를 납득시키다" }] },

  { word:"convincing", pron:"컨빈싱", pos:"adj", level:"B2", meanings:["납득이 가는","설득력 있는"],
    syn:["persuasive","credible","plausible"], ant:["dubious"],
    ex:[{ s:"His alibi was not remotely {{}}.", f:"convincing", ko:"그의 알리바이는 조금도 납득이 가지 않았다." }] },

  /* ── coop · coor · cop · cor ───────────────── */
  { word:"cooperate", pron:"코아퍼레이트", pos:"v", level:"B1", meanings:["협력하다","협동하다"],
    syn:["collaborate","assist","unite"], ant:["obstruct"],
    ex:[{ s:"Both towns agreed to {{}} on the new bridge.", f:"cooperate", ko:"두 도시는 새 다리를 두고 협력하기로 합의했다." }],
    col:[{ p:"cooperate {{}} the police", a:"with", pool:"prep", note:"cooperate with : ~와 협력하다" }] },

  { word:"cooperation", pron:"코아퍼레이션", pos:"n", level:"B1", meanings:["협력","협조"],
    syn:["teamwork","collaboration","support"], ant:["rivalry"],
    ex:[{ s:"The work needs close {{}} between departments.", f:"cooperation", ko:"그 일은 부서 간의 긴밀한 협력을 필요로 한다." }] },

  { word:"coordinate", pron:"코오디네이트", pos:"v", level:"B2", meanings:["조정하다","조화를 이루게 하다"],
    syn:["organize","harmonize","align"],
    ex:[{ s:"Someone must {{}} the three rescue teams.", f:"coordinate", ko:"누군가 세 구조대를 조정해야 한다." }] },

  { word:"cope with", pron:"코프 위드", pos:"phr", level:"B1", meanings:["대처하다","극복하다"],
    syn:["manage","handle","endure"], ant:["succumb"] },

  { word:"copper", pron:"카퍼", pos:"n", level:"B1", meanings:["구리"],
    syn:["metal","bronze","brass"],
    ex:[{ s:"The old pipes were made of {{}}.", f:"copper", ko:"낡은 배관은 구리로 만들어져 있었다." }] },

  { word:"copyright", pron:"카피라이트", pos:"n", level:"B2", meanings:["저작권","판권"],
    syn:["patent","ownership","license"],
    ex:[{ s:"The song is still under {{}}.", f:"copyright", ko:"그 노래는 여전히 저작권 보호를 받는다." }] },

  { word:"cordial", pron:"코디얼", pos:"adj", level:"C2", meanings:["진심의","따뜻한"],
    syn:["warm","genial","affable"], ant:["frosty"],
    ex:[{ s:"They exchanged {{}} greetings at the door.", f:"cordial", ko:"그들은 문간에서 진심 어린 인사를 나눴다." }] },

  { word:"core", pron:"코어", pos:"n", level:"B1", meanings:["중심","핵심"],
    syn:["center","heart","nucleus"], ant:["edge"],
    ex:[{ s:"Fairness lies at the {{}} of the whole rule.", f:"core", ko:"공정함이 그 규칙 전체의 핵심에 있다." }] },

  { word:"corporal", pron:"코퍼럴", pos:"adj", level:"C2", meanings:["육체의","신체의"],
    syn:["physical","bodily","carnal"], ant:["spiritual"],
    ex:[{ s:"The school banned {{}} punishment in 1987.", f:"corporal", ko:"그 학교는 1987년에 체벌을 금지했다." }] },

  { word:"corporation", pron:"코퍼레이션", pos:"n", level:"B2", meanings:["회사","기업"],
    syn:["company","firm","business"],
    ex:[{ s:"A large {{}} bought the land last spring.", f:"corporation", ko:"큰 기업이 지난봄에 그 땅을 샀다." }] },

  { word:"correct", pron:"커렉트", pos:"adj", level:"B1", meanings:["옳은","바로잡다"],
    syn:["right","accurate","proper"], ant:["mistaken"],
    ex:[{ s:"Only one of the four answers is {{}}.", f:"correct", ko:"네 답 중 하나만 옳다." }] },

  { word:"correction", pron:"커렉션", pos:"n", level:"B2", meanings:["정정","수정"],
    syn:["amendment","revision","fix"],
    ex:[{ s:"She made one small {{}} in pencil.", f:"correction", ko:"그녀는 연필로 작은 정정 하나를 했다." }] },

  { word:"correlate", pron:"코럴레이트", pos:"v", level:"C1", meanings:["상관관계가 있다","연관되다"],
    syn:["relate","associate","match"],
    ex:[{ s:"Height does not {{}} with talent.", f:"correlate", ko:"키는 재능과 상관관계가 없다." }],
    col:[{ p:"correlate closely {{}} income", a:"with", pool:"prep", note:"correlate with : ~와 상관관계가 있다" }] },

  /* 원문은 '인과관계'를 함께 적었지만, 상관관계와 인과관계를 구별하는 것이
     이 단어의 핵심이므로(causality의 예문이 바로 그 이야기다) 넣지 않는다 */
  { word:"correlation", pron:"코럴레이션", pos:"n", level:"B2", meanings:["상관관계","연관성"],
    syn:["connection","link","relationship"],
    ex:[{ s:"There is only a weak {{}} between the two.", f:"correlation", ko:"그 둘 사이에는 약한 상관관계만 있다." }] },

  /* ── correspond 5형제 ──────────────────────
     공통 접두사 10글자로 서로 갈라야 하는데 한 챕터의 보드는 4개뿐이다.
     5개를 4개에 나누면 한 보드는 반드시 둘을 받는다(검증이 최소치로 확인). */
  { word:"correspond to", pron:"코러스판드 투", pos:"phr", level:"B2", meanings:["~에 일치하다","들어맞다"],
    syn:["match","equal","fit"], ant:["differ"] },

  { word:"correspondence", pron:"코러스판던스", pos:"n", level:"C1", meanings:["서신","편지"],
    syn:["letters","mail","communication"],
    ex:[{ s:"Their {{}} lasted nearly forty years.", f:"correspondence", ko:"그들의 서신 교환은 거의 40년간 이어졌다." }] },

  { word:"correspondent", pron:"코러스판던트", pos:"n", level:"C1", meanings:["특파원","통신원"],
    syn:["reporter","journalist","writer"],
    ex:[{ s:"Our {{}} in Rome filed the story overnight.", f:"correspondent", ko:"로마 특파원이 밤새 기사를 보냈다." }] },

  { word:"corresponding", pron:"코러스판딩", pos:"adj", level:"B2", meanings:["상응하는","해당하는"],
    syn:["equivalent","matching","parallel"], ant:["unrelated"],
    ex:[{ s:"Sales rose in the {{}} month last year.", f:"corresponding", ko:"작년 같은 달에도 매출이 올랐다." }] },

  { word:"correspondingly", pron:"코러스판딩리", pos:"adv", level:"C1", meanings:["상응하여","그에 맞춰"],
    syn:["accordingly","proportionally","likewise"],
    ex:[{ s:"Costs fell and prices dropped {{}}.", f:"correspondingly", ko:"비용이 내려가자 가격도 그에 맞춰 떨어졌다." }] },

  { word:"corridor", pron:"코리더", pos:"n", level:"B2", meanings:["복도"],
    syn:["hallway","passage","aisle"],
    ex:[{ s:"A long {{}} led to the back office.", f:"corridor", ko:"긴 복도가 뒤쪽 사무실로 이어졌다." }] },

  { word:"corrosion", pron:"커로전", pos:"n", level:"C1", meanings:["부식","녹"],
    syn:["rust","decay","erosion"],
    ex:[{ s:"Salt air speeds up {{}} on the bridge.", f:"corrosion", ko:"염분 있는 공기가 다리의 부식을 가속한다." }] },

  { word:"corrupt", pron:"커럽트", pos:"adj", level:"B2", meanings:["부패한","타락시키다"],
    syn:["dishonest","crooked","venal"], ant:["honest"],
    ex:[{ s:"The inspector turned out to be {{}}.", f:"corrupt", ko:"그 조사관은 부패한 것으로 드러났다." }] },

  { word:"cosmopolitan", pron:"카즈모폴리턴", pos:"adj", level:"C2", meanings:["국제적인","시야가 넓은"],
    syn:["worldly","international","urbane"], ant:["provincial"],
    ex:[{ s:"The port grew into a {{}} city.", f:"cosmopolitan", ko:"그 항구는 국제적인 도시로 성장했다." }] },

  { word:"cosmos", pron:"카즈모스", pos:"n", level:"C1", meanings:["우주","천지만물"],
    syn:["universe","creation","space"],
    ex:[{ s:"Ancient people mapped the {{}} by eye alone.", f:"cosmos", ko:"고대인들은 맨눈으로 우주를 지도에 담았다." }] },

  /* ── coun ─────────────────────────────────── */
  { word:"council", pron:"카운슬", pos:"n", level:"B1", meanings:["협의회","심의회"],
    syn:["board","assembly","panel"],
    ex:[{ s:"The city {{}} rejected the plan twice.", f:"council", ko:"시 협의회는 그 계획을 두 번 거부했다." }] },

  { word:"count on", pron:"카운트 온", pos:"phr", level:"B1", meanings:["~을 믿다","기대하다"],
    syn:["rely","trust","depend"], ant:["doubt"] },

  /* ── counter 9형제 ────────────────────────
     20챕터에 이 아홉 개가 모두 들어간다. 보드 4개에 나누면
     [3,2,2,2]가 최선이고 같은 보드 쌍이 6개 남는다 — 알파벳 순서로
     챕터를 자르는 구조상 피할 수 없다. */
  { word:"counter", pron:"카운터", pos:"adj", level:"C1", meanings:["반대의","거꾸로"],
    syn:["opposing","contrary","adverse"], ant:["parallel"],
    ex:[{ s:"His view runs {{}} to all the evidence.", f:"counter", ko:"그의 견해는 모든 증거와 반대로 간다." }] },

  { word:"counteract", pron:"카운터랙트", pos:"v", level:"C1", meanings:["대응하다","중화하다"],
    syn:["offset","neutralize","resist"], ant:["reinforce"],
    ex:[{ s:"Lime is used to {{}} soil acidity.", f:"counteract", ko:"석회는 토양의 산성을 중화하는 데 쓰인다." }] },

  { word:"counterattack", pron:"카운터어택", pos:"n", level:"C1", meanings:["역습","반격"],
    syn:["retaliation","reprisal","comeback"], ant:["retreat"],
    ex:[{ s:"The army launched a {{}} at dawn.", f:"counterattack", ko:"군대는 새벽에 역습을 시작했다." }] },

  { word:"counterbalance", pron:"카운터밸런스", pos:"v", level:"C2", meanings:["균형을 잡아 주다","상쇄하다"],
    syn:["offset","compensate","equalize"],
    ex:[{ s:"Fuel savings {{}} the higher purchase price.", f:"counterbalance", ko:"연료 절감이 더 높은 구매 가격을 상쇄한다." }] },

  { word:"counterclockwise", pron:"카운터클락와이즈", pos:"adv", level:"B2", meanings:["시계 반대 방향으로"],
    syn:["leftward","anticlockwise","backward"], ant:["clockwise"],
    ex:[{ s:"Loosen the cap by turning it {{}}.", f:"counterclockwise", ko:"뚜껑을 시계 반대 방향으로 돌려 풀어라." }] },

  { word:"counterexample", pron:"카운터이그잼플", pos:"n", level:"C2", meanings:["반증","반례"],
    syn:["exception","refutation","contradiction"],
    ex:[{ s:"A single {{}} is enough to break the rule.", f:"counterexample", ko:"반례 하나면 그 규칙을 깨기에 충분하다." }] },

  { word:"counterfeit", pron:"카운터핏", pos:"adj", level:"C1", meanings:["가짜의","위조의"],
    syn:["fake","forged","bogus"], ant:["genuine"],
    ex:[{ s:"The notes turned out to be {{}}.", f:"counterfeit", ko:"그 지폐들은 위조된 것으로 드러났다." }] },

  { word:"counterpart", pron:"카운터파트", pos:"n", level:"C1", meanings:["대응물","상대방"],
    syn:["equivalent","peer","match"],
    ex:[{ s:"She met her {{}} from the Paris office.", f:"counterpart", ko:"그녀는 파리 지사의 상대방을 만났다." }] },

  { word:"counterproductive", pron:"카운터프러덕티브", pos:"adj", level:"C1", meanings:["역효과를 내는"],
    syn:["harmful","damaging","self-defeating"], ant:["effective"],
    ex:[{ s:"Shouting proved entirely {{}}.", f:"counterproductive", ko:"소리치는 것은 완전히 역효과였다." }] },

  { word:"countless", pron:"카운틀리스", pos:"adj", level:"B1", meanings:["셀 수 없이 많은","무수한"],
    syn:["innumerable","myriad","endless"], ant:["few"],
    ex:[{ s:"He tried {{}} times before it worked.", f:"countless", ko:"그는 성공하기까지 수없이 시도했다." }] },

  /* ── cour · cov ───────────────────────────── */
  { word:"courageous", pron:"커레이저스", pos:"adj", level:"B2", meanings:["용감한","담대한"],
    syn:["brave","bold","valiant"], ant:["cowardly"],
    ex:[{ s:"It was a {{}} decision to speak up.", f:"courageous", ko:"목소리를 낸 것은 용감한 결정이었다." }] },

  { word:"course assessment", pron:"코스 어세스먼트", pos:"n", level:"C1", meanings:["강의 평가"],
    syn:["review","evaluation","feedback"],
    ex:[{ s:"Students fill in a {{}} each term.", f:"course assessment", ko:"학생들은 학기마다 강의 평가를 작성한다." }] },

  { word:"courteous", pron:"커티어스", pos:"adj", level:"B2", meanings:["예의 바른","공손한"],
    syn:["polite","civil","gracious"], ant:["rude"],
    ex:[{ s:"The staff stayed {{}} under real pressure.", f:"courteous", ko:"직원들은 큰 압박 속에서도 예의를 지켰다." }] },

  { word:"courtesy", pron:"커터시", pos:"n", level:"B2", meanings:["공손함","정중함"],
    syn:["politeness","manners","respect"], ant:["rudeness"],
    ex:[{ s:"He held the door open out of plain {{}}.", f:"courtesy", ko:"그는 순전히 예의로 문을 잡아 주었다." }] },

  { word:"cover", pron:"커버", pos:"v", level:"B1", meanings:["보장하다","다루다"],
    syn:["include","insure","handle"], ant:["exclude"],
    ex:[{ s:"Does the policy {{}} flood damage?", f:"cover", ko:"그 보험이 홍수 피해를 보장합니까?" }] },

  { word:"coverage", pron:"커버리지", pos:"n", level:"B2", meanings:["취재","적용 범위"],
    syn:["reporting","range","scope"],
    ex:[{ s:"The trial got heavy news {{}}.", f:"coverage", ko:"그 재판은 뉴스에서 대대적으로 취재되었다." }] },

  { word:"cowardly", pron:"카워들리", pos:"adj", level:"B2", meanings:["겁이 많은","비겁한"],
    syn:["timid","craven","spineless"], ant:["courageous"],
    ex:[{ s:"Running away felt {{}} to him afterwards.", f:"cowardly", ko:"나중에 그는 도망친 것이 비겁하게 느껴졌다." }] },

  { word:"cozy", pron:"코지", pos:"adj", level:"B1", meanings:["아늑한","편안한"],
    syn:["snug","comfortable","homely"], ant:["bleak"],
    ex:[{ s:"The attic room is small but {{}}.", f:"cozy", ko:"그 다락방은 작지만 아늑하다." }] },

  /* ── cra · cre ────────────────────────────── */
  { word:"crack", pron:"크랙", pos:"n", level:"B1", meanings:["갈라진 틈","금"],
    syn:["fissure","split","gap"],
    ex:[{ s:"A thin {{}} ran across the glass.", f:"crack", ko:"얇은 금이 유리를 가로질러 갔다." }] },

  { word:"crack down on", pron:"크랙 다운 온", pos:"phr", level:"C1", meanings:["~에 단호한 조치를 취하다"],
    syn:["suppress","clamp","police"], ant:["tolerate"] },

  { word:"craft", pron:"크래프트", pos:"n", level:"B2", meanings:["공예","기능"],
    syn:["trade","skill","handiwork"],
    ex:[{ s:"Basket weaving is a dying {{}} here.", f:"craft", ko:"바구니 짜기는 이곳에서 사라져 가는 공예다." }] },

  { word:"craftsmanship", pron:"크래프츠먼십", pos:"n", level:"C1", meanings:["손재주","솜씨"],
    syn:["workmanship","artistry","skill"],
    ex:[{ s:"The cabinet shows remarkable {{}}.", f:"craftsmanship", ko:"그 장은 놀라운 솜씨를 보여 준다." }] },

  { word:"cram", pron:"크램", pos:"v", level:"B2", meanings:["밀어 넣다","벼락치기로 공부하다"],
    syn:["stuff","jam","pack"],
    ex:[{ s:"He tried to {{}} a week of study into one night.", f:"cram", ko:"그는 일주일치 공부를 하룻밤에 밀어 넣으려 했다." }],
    col:[{ p:"cram everything {{}} one bag", a:"into", pool:"prep", note:"cram A into B : A를 B에 밀어 넣다" }] },

  /* 첫 뜻을 '충돌'로 두면 clash·collision(3차)과 카드 문구가 겹친다 */
  { word:"crash", pron:"크래시", pos:"v", level:"B1", meanings:["부서지다","추락하다"],
    syn:["smash","wreck","collide"],
    ex:[{ s:"The old plane began to {{}} into the trees.", f:"crash", ko:"낡은 비행기가 나무들 속으로 부서져 들어갔다." }],
    col:[{ p:"crash {{}} a parked van", a:"into", pool:"prep", note:"crash into : ~에 충돌하다" }] },

  { word:"crater", pron:"크레이터", pos:"n", level:"B2", meanings:["분화구","움푹 팬 곳"],
    syn:["hollow","pit","basin"],
    ex:[{ s:"Rain filled the {{}} with green water.", f:"crater", ko:"비가 분화구를 초록빛 물로 채웠다." }] },

  { word:"crave", pron:"크레이브", pos:"v", level:"C1", meanings:["갈망하다","열망하다"],
    syn:["yearn","desire","hunger"], ant:["dislike"],
    ex:[{ s:"Runners often {{}} salt after a long race.", f:"crave", ko:"주자들은 긴 경기 뒤에 소금을 갈망하곤 한다." }] },

  /* crave와 카드에서 겹치지 않게 '강한 욕구'로 세운다 */
  { word:"craving", pron:"크레이빙", pos:"n", level:"C1", meanings:["강한 욕구","열망"],
    syn:["longing","urge","appetite"], ant:["aversion"],
    ex:[{ s:"A sudden {{}} for sugar hit her at midnight.", f:"craving", ko:"자정에 갑작스러운 단것에 대한 욕구가 그녀를 덮쳤다." }] },

  { word:"crawl", pron:"크롤", pos:"v", level:"B1", meanings:["기어가다","서행하다"],
    syn:["creep","inch","slither"], ant:["sprint"],
    ex:[{ s:"The baby began to {{}} at seven months.", f:"crawl", ko:"그 아기는 7개월에 기기 시작했다." }] },

  { word:"craze", pron:"크레이즈", pos:"n", level:"C1", meanings:["대유행","열풍"],
    syn:["fad","trend","mania"],
    ex:[{ s:"Roller skating became a national {{}}.", f:"craze", ko:"롤러스케이트는 전국적인 대유행이 되었다." }] },

  { word:"creak", pron:"크리크", pos:"v", level:"B2", meanings:["삐걱거리다"],
    syn:["squeak","groan","grate"],
    ex:[{ s:"The floorboards {{}} under his weight.", f:"creaked", ko:"바닥 판자가 그의 무게에 삐걱거렸다." }] },

  { word:"creation", pron:"크리에이션", pos:"n", level:"B1", meanings:["창작물","창작"],
    syn:["work","invention","product"],
    ex:[{ s:"The garden is entirely her own {{}}.", f:"creation", ko:"그 정원은 전적으로 그녀 자신의 창작물이다." }] },

  { word:"creativity", pron:"크리에이티비티", pos:"n", level:"B1", meanings:["창조력","독창성"],
    syn:["imagination","originality","inventiveness"],
    ex:[{ s:"The job rewards {{}} over speed.", f:"creativity", ko:"그 일은 속도보다 창조력에 보답한다." }] },

  { word:"creator", pron:"크리에이터", pos:"n", level:"B1", meanings:["창작자"],
    syn:["author","maker","designer"],
    ex:[{ s:"The {{}} of the series never explained the ending.", f:"creator", ko:"그 시리즈의 창작자는 결말을 끝내 설명하지 않았다." }] },

  /* 첫 뜻을 '신념'으로 두면 conviction(6차)과 카드 문구가 똑같아진다 */
  { word:"creed", pron:"크리드", pos:"n", level:"C2", meanings:["신조","교리"],
    syn:["doctrine","belief","dogma"],
    ex:[{ s:"The group has never had a written {{}}.", f:"creed", ko:"그 단체는 한 번도 문서로 된 신조를 가진 적이 없다." }] },

  { word:"creek", pron:"크리크", pos:"n", level:"B2", meanings:["개울","시내"],
    syn:["stream","brook","rivulet"],
    ex:[{ s:"They waded across a shallow {{}}.", f:"creek", ko:"그들은 얕은 개울을 걸어서 건넜다." }] },

  { word:"creep", pron:"크리프", pos:"v", level:"B2", meanings:["천천히 움직이다","기어오르다"],
    syn:["crawl","inch","slink"], ant:["dash"],
    ex:[{ s:"Ivy began to {{}} up the north wall.", f:"creep", ko:"담쟁이가 북쪽 벽을 타고 오르기 시작했다." }] },

  /* ── cri · cro · cru ──────────────────────── */
  /* culprit(범인)과 겹치지 않게 '범죄자'로 세운다 */
  { word:"criminal", pron:"크리미널", pos:"n", level:"B1", meanings:["범죄자","범죄의"],
    syn:["offender","felon","lawbreaker"], ant:["victim"],
    ex:[{ s:"The {{}} was caught just two days later.", f:"criminal", ko:"그 범죄자는 불과 이틀 뒤에 잡혔다." }] },

  { word:"cripple", pron:"크리플", pos:"v", level:"C1", meanings:["심각한 손상을 주다","마비시키다"],
    syn:["disable","paralyze","incapacitate"], ant:["restore"],
    ex:[{ s:"A long strike could {{}} the whole port.", f:"cripple", ko:"장기 파업은 항구 전체를 마비시킬 수 있다." }] },

  { word:"criterion", pron:"크라이티리언", pos:"n", level:"C1", meanings:["기준","표준"],
    syn:["standard","benchmark","measure"],
    ex:[{ s:"Price was not the only {{}} they used.", f:"criterion", ko:"가격이 그들이 쓴 유일한 기준은 아니었다." }] },

  { word:"critical", pron:"크리티컬", pos:"adj", level:"B1", meanings:["중요한","비판적인"],
    syn:["vital","crucial","disapproving"], ant:["trivial"],
    ex:[{ s:"The next hour is {{}} for the patient.", f:"critical", ko:"다음 한 시간이 그 환자에게 중요하다." }] },

  { word:"critique", pron:"크리틱", pos:"n", level:"C1", meanings:["비평","평론"],
    syn:["review","analysis","appraisal"],
    ex:[{ s:"She wrote a sharp {{}} of the film.", f:"critique", ko:"그녀는 그 영화에 대한 날카로운 비평을 썼다." }] },

  { word:"crooked", pron:"크루키드", pos:"adj", level:"B2", meanings:["구불구불한","곧지 않은"],
    syn:["bent","winding","twisted"], ant:["straight"],
    ex:[{ s:"A {{}} path wound up the hillside.", f:"crooked", ko:"구불구불한 길이 언덕을 따라 올라갔다." }] },

  { word:"crossbreed", pron:"크로스브리드", pos:"v", level:"C2", meanings:["교배하다","잡종을 만들다"],
    syn:["hybridize","interbreed","mix"],
    ex:[{ s:"Farmers began to {{}} the two varieties.", f:"crossbreed", ko:"농부들은 두 품종을 교배하기 시작했다." }] },

  { word:"cross-cultural", pron:"크로스 컬처럴", pos:"adj", level:"C1", meanings:["문화간의"],
    syn:["intercultural","multicultural","comparative"],
    ex:[{ s:"The study is a {{}} comparison of diets.", f:"cross-cultural", ko:"그 연구는 식단에 대한 문화간 비교다." }] },

  { word:"cross-reference", pron:"크로스 레퍼런스", pos:"n", level:"C1", meanings:["상호 참조"],
    syn:["citation","pointer","link"],
    ex:[{ s:"Each entry carries a {{}} to the map.", f:"cross-reference", ko:"각 항목에는 지도로 가는 상호 참조가 달려 있다." }] },

  { word:"crucial", pron:"크루셜", pos:"adj", level:"B2", meanings:["결정적인","매우 중요한"],
    syn:["decisive","vital","pivotal"], ant:["minor"],
    ex:[{ s:"Timing was {{}} to the whole rescue.", f:"crucial", ko:"타이밍이 구조 전체에 결정적이었다." }],
    col:[{ p:"crucial {{}} our success", a:"to", pool:"prep", note:"be crucial to : ~에 결정적이다" }] },

  { word:"crude", pron:"크루드", pos:"adj", level:"B2", meanings:["대충의","원유"],
    syn:["rough","raw","unrefined"], ant:["refined"],
    ex:[{ s:"He made a {{}} sketch on a napkin.", f:"crude", ko:"그는 냅킨에 대충 스케치를 했다." }] },

  { word:"cruel", pron:"크루얼", pos:"adj", level:"B1", meanings:["잔인한","잔혹한"],
    syn:["brutal","savage","heartless"], ant:["humane"],
    ex:[{ s:"It seems {{}} to keep birds in cages.", f:"cruel", ko:"새를 우리에 두는 것은 잔인해 보인다." }] },

  { word:"cruise", pron:"크루즈", pos:"v", level:"B2", meanings:["순항하다","선박 여행"],
    syn:["sail","voyage","glide"],
    ex:[{ s:"The ship will {{}} past three small islands.", f:"cruise", ko:"그 배는 작은 섬 세 개를 지나 순항할 것이다." }] },

  /* 원문의 '빨다'는 '빻다'의 오기로 보인다. 첫 뜻은 crash(부서지다)와
     겹치지 않게 '바스러지다'로 세운다 */
  { word:"crumble", pron:"크럼블", pos:"v", level:"B2", meanings:["바스러지다","빻다"],
    syn:["disintegrate","crush","collapse"],
    ex:[{ s:"The dry soil began to {{}} in his hand.", f:"crumble", ko:"마른 흙이 그의 손에서 바스러지기 시작했다." }] },

  { word:"crunchy", pron:"크런치", pos:"adj", level:"B1", meanings:["바삭바삭한"],
    syn:["crisp","brittle","firm"], ant:["soggy"],
    ex:[{ s:"The salad needs something {{}} on top.", f:"crunchy", ko:"그 샐러드는 위에 바삭한 것이 필요하다." }] },

  { word:"crust", pron:"크러스트", pos:"n", level:"B2", meanings:["지각","껍질"],
    syn:["shell","layer","rind"],
    ex:[{ s:"The Earth's {{}} is thinnest under the sea.", f:"crust", ko:"지구의 지각은 바다 아래가 가장 얇다." }] },

  { word:"crutch", pron:"크러치", pos:"n", level:"B2", meanings:["목발"],
    syn:["support","prop","cane"],
    ex:[{ s:"He walked in with a single {{}}.", f:"crutch", ko:"그는 목발 하나를 짚고 들어왔다." }] },

  { word:"crystal-clear", pron:"크리스털 클리어", pos:"adj", level:"B2", meanings:["아주 투명한","수정같이 맑은"],
    syn:["transparent","limpid","obvious"], ant:["murky"],
    ex:[{ s:"The water in the pool is {{}}.", f:"crystal-clear", ko:"그 못의 물은 아주 투명하다." }] },

  { word:"crystallize", pron:"크리스털라이즈", pos:"v", level:"C2", meanings:["확고해지다","구체화되다"],
    syn:["solidify","harden","form"], ant:["dissolve"],
    ex:[{ s:"Her vague doubts slowly began to {{}}.", f:"crystallize", ko:"그녀의 막연한 의심이 서서히 구체화되기 시작했다." }] },

  /* ── cu ───────────────────────────────────── */
  { word:"cube", pron:"큐브", pos:"n", level:"B1", meanings:["정육면체"],
    syn:["block","dice","square"],
    ex:[{ s:"Drop one {{}} of ice into the glass.", f:"cube", ko:"유리잔에 얼음 한 조각을 넣어라." }] },

  { word:"cubic", pron:"큐빅", pos:"adj", level:"B2", meanings:["입방의","3제곱의"],
    syn:["volumetric","solid","three-dimensional"],
    ex:[{ s:"The tank holds two {{}} metres of water.", f:"cubic", ko:"그 탱크는 물 2세제곱미터를 담는다." }] },

  { word:"cue", pron:"큐", pos:"n", level:"B2", meanings:["신호","단서"],
    syn:["signal","hint","prompt"],
    ex:[{ s:"A short nod was the {{}} to begin.", f:"cue", ko:"짧은 고갯짓이 시작하라는 신호였다." }] },

  { word:"cuisine", pron:"퀴진", pos:"n", level:"B2", meanings:["요리법","음식"],
    syn:["cooking","food","fare"],
    ex:[{ s:"The region is known for its simple {{}}.", f:"cuisine", ko:"그 지역은 소박한 요리법으로 유명하다." }] },

  /* come to an end(끝나다)와 겹치지 않게 '정점에 이르다'로 세운다 */
  { word:"culminate", pron:"컬머네이트", pos:"v", level:"C1", meanings:["정점에 이르다","~으로 끝나다"],
    syn:["climax","conclude","peak"],
    ex:[{ s:"Weeks of rehearsal {{}} in one long night.", f:"culminated", ko:"몇 주간의 연습이 긴 하룻밤으로 정점에 이르렀다." }],
    col:[{ p:"culminate {{}} a final concert", a:"in", pool:"prep", note:"culminate in : ~으로 막을 내리다" }] },

  { word:"culprit", pron:"컬프릿", pos:"n", level:"C1", meanings:["장본인","범인"],
    syn:["offender","cause","perpetrator"],
    ex:[{ s:"Damp was the real {{}} all along.", f:"culprit", ko:"습기가 처음부터 진짜 장본인이었다." }] },

  { word:"cultivate", pron:"컬티베이트", pos:"v", level:"B2", meanings:["재배하다","가꾸다"],
    syn:["grow","farm","nurture"], ant:["neglect"],
    ex:[{ s:"They {{}} rice on the lower slopes.", f:"cultivate", ko:"그들은 아래쪽 경사면에서 쌀을 재배한다." }] },

  { word:"cunning", pron:"커닝", pos:"adj", level:"B2", meanings:["교활한","간사한"],
    syn:["sly","crafty","devious"], ant:["naive"],
    ex:[{ s:"A {{}} fox learned to lift the latch.", f:"cunning", ko:"교활한 여우가 걸쇠를 들어 올리는 법을 익혔다." }] },

  { word:"cure-all", pron:"큐어올", pos:"n", level:"C1", meanings:["만병통치약"],
    syn:["panacea","remedy","fix"],
    ex:[{ s:"There is no {{}} for rural poverty.", f:"cure-all", ko:"농촌 빈곤에 만병통치약은 없다." }] },

  { word:"curfew", pron:"커퓨", pos:"n", level:"C1", meanings:["통행금지령"],
    syn:["restriction","ban","lockdown"],
    ex:[{ s:"A nightly {{}} was imposed for a month.", f:"curfew", ko:"한 달간 야간 통행금지령이 내려졌다." }] },

  { word:"curious", pron:"큐리어스", pos:"adj", level:"B1", meanings:["호기심이 많은","궁금한"],
    syn:["inquisitive","interested","nosy"], ant:["indifferent"],
    ex:[{ s:"She was {{}} about the locked room upstairs.", f:"curious", ko:"그녀는 위층 잠긴 방에 대해 궁금해했다." }],
    col:[{ p:"curious {{}} the outcome", a:"about", pool:"prep", note:"be curious about : ~를 궁금해하다" }] },

  { word:"curl up", pron:"컬 업", pos:"phr", level:"B1", meanings:["몸을 웅크리다"],
    syn:["huddle","coil","nestle"], ant:["stretch"] },

  { word:"currency", pron:"커런시", pos:"n", level:"B2", meanings:["통화","유통"],
    syn:["money","cash","legal tender"],
    ex:[{ s:"The country changed its {{}} in 2002.", f:"currency", ko:"그 나라는 2002년에 통화를 바꿨다." }] },

  { word:"current", pron:"커런트", pos:"n", level:"B1", meanings:["흐름","현재의"],
    syn:["flow","stream","tide"],
    ex:[{ s:"A strong {{}} pulled the boat sideways.", f:"current", ko:"강한 물살이 배를 옆으로 끌었다." }] },

  { word:"curriculum", pron:"커리큘럼", pos:"n", level:"B2", meanings:["교육 과정","이수 과정"],
    syn:["syllabus","program","course"],
    ex:[{ s:"The {{}} leaves almost no room for art.", f:"curriculum", ko:"그 교육 과정은 미술에 거의 자리를 주지 않는다." }] },

  { word:"curse", pron:"커스", pos:"n", level:"B2", meanings:["저주","욕설"],
    syn:["hex","oath","damnation"], ant:["blessing"],
    ex:[{ s:"He muttered a {{}} under his breath.", f:"curse", ko:"그는 숨죽여 욕설을 중얼거렸다." }] },

  { word:"curtail", pron:"커테일", pos:"v", level:"C2", meanings:["줄이다","제한하다"],
    syn:["shorten","reduce","trim"], ant:["extend"],
    ex:[{ s:"Heavy rain forced them to {{}} the trip.", f:"curtail", ko:"폭우 때문에 그들은 여행을 줄여야 했다." }] },

  { word:"curtained", pron:"커튼드", pos:"adj", level:"C1", meanings:["커튼이 쳐진"],
    syn:["screened","veiled","draped"], ant:["bare"],
    ex:[{ s:"A {{}} alcove hid the back stairs.", f:"curtained", ko:"커튼이 쳐진 벽감이 뒤쪽 계단을 가리고 있었다." }] },

  { word:"curve", pron:"커브", pos:"v", level:"B1", meanings:["곡선으로 나아가다","곡선"],
    syn:["bend","arc","turn"], ant:["straighten"],
    ex:[{ s:"The road begins to {{}} near the bridge.", f:"curve", ko:"그 길은 다리 근처에서 휘기 시작한다." }] },

  { word:"customary", pron:"커스터머리", pos:"adj", level:"C1", meanings:["습관적인","관례적인"],
    syn:["usual","traditional","routine"], ant:["unusual"],
    ex:[{ s:"It is {{}} to bow slightly on arrival.", f:"customary", ko:"도착할 때 살짝 고개를 숙이는 것이 관례다." }] },

  { word:"customize", pron:"커스터마이즈", pos:"v", level:"B2", meanings:["주문 제작하다","맞춤화하다"],
    syn:["tailor","adapt","personalize"],
    ex:[{ s:"You can {{}} the handle length.", f:"customize", ko:"손잡이 길이를 주문 제작할 수 있다." }] },

  { word:"cut back on", pron:"컷 백 온", pos:"phr", level:"B1", meanings:["~을 줄이다"],
    syn:["reduce","lessen","trim"], ant:["increase"] },

  { word:"cynical", pron:"시니컬", pos:"adj", level:"B2", meanings:["냉소적인","비관적인"],
    syn:["skeptical","sardonic","jaded"], ant:["idealistic"],
    ex:[{ s:"Years in politics left him deeply {{}}.", f:"cynical", ko:"정치권에서 보낸 세월이 그를 깊이 냉소적으로 만들었다." }] },

  /* cynical(냉소적인)과 겹치지 않게 '냉소주의'로 세운다 */
  { word:"cynicism", pron:"시니시즘", pos:"n", level:"C1", meanings:["냉소주의","비꼬는 버릇"],
    syn:["skepticism","distrust","pessimism"], ant:["idealism"],
    ex:[{ s:"His {{}} hid a real disappointment.", f:"cynicism", ko:"그의 냉소주의는 진짜 실망을 감추고 있었다." }] }
];

/* ── 뜻 사전 (병합) ────────────────────────────
   C 섹션 단어의 반의어 중 표제어가 아닌 것들의 한국어 뜻.
   GLOSS에 없으면 뜻 없이 영어만 떠서 무엇인지 알 수 없다.
   ⚠️ 재대입(=)이 아니라 Object.assign으로 합쳐야 A·B 세트 것이 살아남는다. */
Object.assign(window.GLOSS, {
  "adjourn":"산회하다, 휴회하다",
  "applaud":"칭찬하다, 박수를 보내다",
  "aversion":"혐오, 질색",
  "baffling":"당혹스러운, 알 수 없는",
  "barbarism":"야만, 미개",
  "bare":"헐벗은, 아무것도 없는",
  "bleak":"황량한, 쓸쓸한",
  "briefly":"잠깐, 짧게",
  "bulky":"부피가 큰, 커서 다루기 힘든",
  "clear":"트이게 하다, 치우다",
  "conclude":"끝내다, 결론을 내리다",
  "continue":"계속하다",
  "convex":"볼록한",
  "cooperative":"협력하는",
  "cruelty":"잔혹함",
  "dash":"돌진하다, 급히 가다",
  "defiant":"반항하는",
  "demand":"요구, 요구하다",
  "demolish":"철거하다, 허물다",
  "demolition":"철거, 파괴",
  "denotation":"명시적 의미, 지시",
  "design":"의도, 계획",
  "differ":"다르다",
  "difference":"차이",
  "dilate":"확장되다, 넓히다",
  "dilute":"희석하다, 묽게 하다",
  "direct":"직접적인",
  "dislike":"싫어하다",
  "disperse":"흩어지다, 분산시키다",
  "dispute":"논쟁, 분쟁",
  "dissent":"반대하다, 이견",
  "dissolve":"녹다, 해산하다",
  "dissuade":"말리다, 단념시키다",
  "distraction":"주의 산만, 방해",
  "division":"분열, 분할",
  "doubt":"의심, 의문",
  "doubtful":"의심스러운, 불확실한",
  "dubious":"의심스러운, 수상한",
  "earthly":"지상의, 세속의",
  "ease":"쉬움, 편안함",
  "edge":"가장자리, 끝",
  "effective":"효과적인",
  "effortless":"힘이 들지 않는",
  "element":"원소, 요소",
  "emotional":"감정적인",
  "endure":"견디다, 지속되다",
  "erratic":"불규칙한, 변덕스러운",
  "escape":"벗어나다, 빠져나가다",
  "evade":"회피하다, 피하다",
  "evasive":"회피하는, 둘러대는",
  "expand":"확장하다, 늘리다",
  "expert":"전문가",
  "exposure":"노출, 드러남",
  "extend":"늘리다, 연장하다",
  "few":"거의 없는, 소수의",
  "fixed":"고정된",
  "flee":"도망치다",
  "floor":"바닥, 층",
  "flow":"흐름, 흐르다",
  "foe":"적",
  "forget":"잊다",
  "formal":"격식을 갖춘, 공식적인",
  "fragmented":"조각난, 분열된",
  "free":"자유로운, 풀려난",
  "freedom":"자유",
  "fresh":"신선한, 갓 만든",
  "frosty":"쌀쌀한, 냉랭한",
  "frown":"얼굴을 찡그리다",
  "genuine":"진짜의, 진품의",
  "graceful":"우아한, 매끄러운",
  "greed":"탐욕",
  "guess":"짐작하다, 추측",
  "guesswork":"어림짐작",
  "harmless":"해롭지 않은",
  "harmony":"조화, 화합",
  "herbivorous":"초식(성)의",
  "hesitation":"주저, 망설임",
  "honest":"정직한",
  "humane":"인도적인, 자비로운",
  "hush":"조용해지다, 잠잠해지다",
  "idealism":"이상주의",
  "idealistic":"이상주의적인",
  "identical":"똑같은, 동일한",
  "incapable":"~할 수 없는",
  "incompatible":"양립할 수 없는, 호환되지 않는",
  "incompetence":"무능함",
  "inconspicuous":"눈에 띄지 않는",
  "indifference":"무관심",
  "indifferent":"무관심한",
  "individual":"개인의, 개별의",
  "inept":"서투른, 무능한",
  "insulator":"절연체",
  "insult":"모욕, 모욕하다",
  "intermittent":"간헐적인, 이따금의",
  "lag":"뒤처지다",
  "laity":"평신도",
  "liberate":"해방하다, 풀어 주다",
  "loneliness":"외로움",
  "military":"군사의, 군대의",
  "minor":"사소한, 작은",
  "misread":"잘못 읽다, 오해하다",
  "mistaken":"잘못된, 틀린",
  "murky":"흐린, 탁한",
  "naive":"순진한, 어수룩한",
  "noble":"귀족, 고귀한",
  "nonprofit":"비영리의",
  "novel":"새로운, 신기한",
  "obey":"따르다, 복종하다",
  "oblivion":"망각, 무의식",
  // celebrated(잘 알려지지 않은)와 clarify(모호하게 하다) 양쪽의 반의어로 쓰인다
  "obscure":"잘 알려지지 않은; 모호하게 하다",
  "obstruct":"방해하다, 막다",
  "occasional":"때때로의, 간간이 있는",
  "open":"공개된, 열린",
  "opening":"시작, 개막",
  "optional":"선택적인",
  "orderly":"정돈된, 질서 있는",
  "original":"원본, 원래의",
  "parallel":"평행한, 유사한",
  "partial":"부분적인, 편향된",
  "peripheral":"주변의, 부차적인",
  "permit":"허용하다",
  "personal":"개인적인",
  "private":"사적인, 민간의",
  "proceed":"진행하다, 계속하다",
  "produce":"생산하다",
  "producer":"생산자",
  "production":"생산, 생산량",
  "provincial":"지방의, 편협한",
  "public":"공개된, 공공의",
  "punish":"처벌하다",
  "purify":"정화하다",
  "radical":"급진적인",
  "rambling":"산만한, 종횡무진인",
  "random":"무작위의",
  "rebel":"반항하다, 반란자",
  "reckless":"무모한, 부주의한",
  "refined":"정제된, 세련된",
  "refund":"환불하다, 환불",
  "refute":"반박하다, 논박하다",
  "reinforce":"강화하다",
  "repulsion":"혐오, 반발",
  "request":"요청, 요청하다",
  "respect":"존중, 존경",
  "restless":"안절부절못하는",
  "restore":"돌려주다, 복원하다",
  "result":"결과",
  "retreat":"후퇴, 후퇴하다",
  "return":"돌려주다, 반환",
  "reveal":"드러내다, 밝히다",
  "rival":"경쟁자",
  "rivalry":"경쟁, 대립",
  "rude":"무례한",
  "rudeness":"무례함",
  "ruthless":"무자비한",
  "scatter":"흩뿌리다",
  "scattering":"흩어짐, 산재",
  "seek":"찾다, 구하다",
  "separation":"분리, 분할",
  "shortage":"부족, 품귀",
  "similarity":"유사함, 닮은 점",
  "simple":"단순한",
  "single-sex":"남녀를 구분한",
  "skinny":"깡마른",
  "soggy":"축축한, 질척한",
  "soldier":"군인",
  "spiritual":"정신적인, 영적인",
  "sporadic":"산발적인, 이따금의",
  "sprint":"전력으로 달리다",
  "squander":"낭비하다",
  "stagnate":"고이다, 정체되다",
  "stalemate":"교착 상태",
  "stare":"응시하다, 빤히 보다",
  "steady":"한결같은, 안정된",
  "straight":"곧은, 똑바른",
  "straightforward":"단순명료한, 쉬운",
  "stretch":"뻗다, 늘이다",
  "subordinate":"부하, 하급자",
  "succumb":"굴복하다, 쓰러지다",
  "tolerate":"용인하다, 참다",
  "triumph":"승리, 대성공",
  "trivial":"사소한",
  "undisputed":"논란의 여지가 없는",
  "unlike":"~와 달리, 다른",
  "unrelated":"관련 없는",
  "unusual":"흔하지 않은",
  "unwittingly":"무심코, 자기도 모르게",
  "upset":"속상하게 하다",
  "vagueness":"모호함",
  "vanish":"사라지다",
  "variability":"변동성, 가변성",
  "variable":"변하기 쉬운, 가변적인",
  "victim":"피해자, 희생자",
  "violate":"위반하다",
  "wander":"헤매다, 산만해지다",
  "warm":"따뜻한",
  "waste":"낭비, 폐기물",
  "weak":"약한",
  "weaken":"약화시키다",
  "whole":"전체"
});
