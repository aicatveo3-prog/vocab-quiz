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
 * 진행 상황: 180/466단어 (calamity ~ comet) — 3차.
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
  { word:"claim", pron:"클레임", pos:"v", level:"B1", meanings:["주장하다","요구하다"],
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

  { word:"classify", pron:"클래서파이", pos:"v", level:"B2", meanings:["분류하다","구분하다"],
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

  { word:"cluster", pron:"클러스터", pos:"n", level:"B2", meanings:["무리","덩어리"],
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
    ex:[{ s:"The {{}} returns every seventy-six years.", f:"comet", ko:"그 혜성은 76년마다 돌아온다." }] }
];

/* ── 반의어 뜻 사전 (병합) ──────────────────────
   '아닌 것 고르기'에서 반의어를 오답으로 낼 때 한국어 뜻을 함께 보여준다.
   ANT_DICT에 없는 반의어는 뜻 없이 영어만 떠서 무엇인지 알 수 없다.
   ⚠️ 재대입(=)이 아니라 Object.assign으로 합쳐야 A·B 세트 것이 살아남는다. */
Object.assign(window.ANT_DICT, {
  "acute":"급성의, 심각한",
  "barbarism":"야만, 미개",
  "blessing":"축복, 다행",
  "briefly":"잠깐, 짧게",
  "commence":"시작되다, 시작하다",
  "compete":"경쟁하다",
  "confirm":"확인하다, 확정하다",
  "continue":"계속하다",
  "counterclockwise":"시계 반대 방향으로",
  "design":"의도, 계획",
  "differ":"다르다",
  "direct":"직접적인",
  "disperse":"흩어지다, 분산시키다",
  "division":"분열, 분할",
  "doubt":"의심, 의문",
  "doubtful":"의심스러운, 불확실한",
  "earthly":"지상의, 세속의",
  "ease":"쉬움, 편안함",
  "effortless":"힘이 들지 않는",
  "emotional":"감정적인",
  "endure":"견디다, 지속되다",
  "escape":"벗어나다, 빠져나가다",
  "evasive":"회피하는, 둘러대는",
  "expert":"전문가",
  "exposure":"노출, 드러남",
  "flee":"도망치다",
  "floor":"바닥, 층",
  "formal":"격식을 갖춘, 공식적인",
  "fragmented":"조각난, 분열된",
  "free":"자유로운, 풀려난",
  "freedom":"자유",
  "fresh":"신선한, 갓 만든",
  "frown":"얼굴을 찡그리다",
  "graceful":"우아한, 매끄러운",
  "greed":"탐욕",
  "guess":"짐작하다, 추측",
  "guesswork":"어림짐작",
  "harmless":"해롭지 않은",
  "harmony":"조화, 화합",
  "herbivorous":"초식(성)의",
  "hush":"조용해지다, 잠잠해지다",
  "incapable":"~할 수 없는",
  "individual":"개인의, 개별의",
  "lag":"뒤처지다",
  "laity":"평신도",
  "military":"군사의, 군대의",
  "minor":"사소한, 작은",
  // celebrated(잘 알려지지 않은)와 clarify(모호하게 하다) 양쪽의 반의어로 쓰인다
  "obscure":"잘 알려지지 않은; 모호하게 하다",
  "occasional":"때때로의, 간간이 있는",
  "orderly":"정돈된, 질서 있는",
  "original":"원본, 원래의",
  "peripheral":"주변의, 부차적인",
  "permit":"허용하다",
  "private":"사적인, 민간의",
  "proceed":"진행하다, 계속하다",
  "public":"공개된, 공공의",
  "rambling":"산만한, 종횡무진인",
  "random":"무작위의",
  "reckless":"무모한, 부주의한",
  "refund":"환불하다, 환불",
  "repulsion":"혐오, 반발",
  "result":"결과",
  "rival":"경쟁자",
  "scattering":"흩어짐, 산재",
  "seek":"찾다, 구하다",
  "separation":"분리, 분할",
  "shortage":"부족, 결핍",
  "single-sex":"남녀를 구분한",
  "skinny":"깡마른",
  "soldier":"군인",
  "stagnate":"고이다, 정체되다",
  "stare":"응시하다, 빤히 보다",
  "steady":"한결같은, 안정된",
  "triumph":"승리, 대성공",
  "vagueness":"모호함",
  "vanish":"사라지다",
  "warm":"따뜻한"
});
