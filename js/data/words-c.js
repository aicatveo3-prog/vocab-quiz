/**
 * 단어 데이터 — 수능 보카 C 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *   word / pos / level 은 필수, meanings 는 1개 이상 있어야 앱이 깨지지 않는다.
 *   syn 3개 → 아닌 것 고르기 / ex → 문장 빈칸 / col → 연어 고르기 해금.
 *
 * ⚠️ COL_POOLS 와 ANT_DICT 는 words.js 가 이미 만들어 둔 객체다.
 *    여기서 window.ANT_DICT = {...} 로 재대입하면 A·B 세트의 것이 통째로
 *    사라진다. 반드시 이 파일 맨 아래처럼 Object.assign 으로 병합할 것.
 *
 * ── 뜻을 2개로 줄인 이유 ──────────────────────
 * 원문 단어장은 다의어를 전부 나열한다(character = 특징, 특성; 성격, 개성;
 * 글자, 문자, 기호; 등장인물). 그런데 meanings는 4지선다 선택지와 짝 맞추기
 * 카드에 그대로 찍히는 문자열이다. 네 묶음을 다 넣으면 카드 한 장이 화면을
 * 넘고, 보기 넷을 늘어놓으면 읽을 수 없다. 그래서 대표 뜻 2개만 남긴다.
 * 첫 뜻에는 괄호 설명을 넣지 않는다 — 카드에서 가장 크게 보이는 자리다.
 *
 * 진행 상황: 120/466단어 (calamity ~ cite) — 2차.
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

  { word:"call for", pron:"콜 포", pos:"phr", level:"B2", meanings:["요구하다","필요로 하다"],
    syn:["demand","require","necessitate"], ant:["refuse"] },

  { word:"call it a day", pron:"콜 잇 어 데이", pos:"phr", level:"B2", meanings:["일을 그만하다","하루 일을 마치다"],
    syn:["finish","quit","wrap up"], ant:["continue"] },

  { word:"call off", pron:"콜 오프", pos:"phr", level:"B2", meanings:["취소하다","중단하다"],
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

  { word:"ceremony", pron:"세러모니", pos:"n", level:"B1", meanings:["의식","의례"],
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

  { word:"certify", pron:"서티파이", pos:"v", level:"B2", meanings:["증명하다","보증하다"],
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

  { word:"channel", pron:"채널", pos:"n", level:"B1", meanings:["통로","해협"],
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
    ex:[{ s:"The judge went on to {{}} three earlier rulings.", f:"cite", ko:"판사는 이어 이전 판결 세 건을 인용했다." }] }
];

/* ── 반의어 뜻 사전 (병합) ──────────────────────
   '아닌 것 고르기'에서 반의어를 오답으로 낼 때 한국어 뜻을 함께 보여준다.
   ANT_DICT에 없는 반의어는 뜻 없이 영어만 떠서 무엇인지 알 수 없다.
   ⚠️ 재대입(=)이 아니라 Object.assign으로 합쳐야 A·B 세트 것이 살아남는다. */
Object.assign(window.ANT_DICT, {
  "acute":"급성의, 심각한",
  "blessing":"축복, 다행",
  "briefly":"잠깐, 짧게",
  "direct":"직접적인",
  "disperse":"흩어지다, 분산시키다",
  "doubt":"의심, 의문",
  "doubtful":"의심스러운, 불확실한",
  "earthly":"지상의, 세속의",
  "ease":"쉬움, 편안함",
  "effortless":"힘이 들지 않는",
  "expert":"전문가",
  "flee":"도망치다",
  "freedom":"자유",
  "frown":"얼굴을 찡그리다",
  "greed":"탐욕",
  "permit":"허용하다",
  "random":"무작위의",
  "refund":"환불하다, 환불",
  "orderly":"정돈된, 질서 있는",
  "peripheral":"주변의, 부차적인",
  "repulsion":"혐오, 반발",
  "skinny":"깡마른",
  "stagnate":"고이다, 정체되다",
  "warm":"따뜻한",
  "confirm":"확인하다, 확정하다",
  "continue":"계속하다",
  "evasive":"회피하는, 둘러대는",
  "exposure":"노출, 드러남",
  "floor":"바닥, 층",
  "formal":"격식을 갖춘, 공식적인",
  "free":"자유로운, 풀려난",
  "fresh":"신선한, 갓 만든",
  "guess":"짐작하다, 추측",
  "harmless":"해롭지 않은",
  "minor":"사소한, 작은",
  "reckless":"무모한, 부주의한",
  "result":"결과",
  "steady":"한결같은, 안정된",
  "guesswork":"어림짐작",
  "herbivorous":"초식(성)의",
  "incapable":"~할 수 없는",
  "lag":"뒤처지다",
  "obscure":"잘 알려지지 않은",
  "occasional":"때때로의, 간간이 있는",
  "proceed":"진행하다, 계속하다",
  "shortage":"부족, 결핍",
  "stare":"응시하다, 빤히 보다",
  "triumph":"승리, 대성공"
});
