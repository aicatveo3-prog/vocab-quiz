/**
 * 단어 데이터 — 수능 보카 L 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *
 * ⚠️ GLOSS 는 words.js 가 이미 만들어 둔 객체다. 여기서 window.GLOSS = {...} 로
 *    재대입하면 앞선 세트의 것이 통째로 사라진다. 반드시 이 파일 맨 아래처럼
 *    Object.assign 으로 병합할 것. 키는 소문자, 앞뒤 공백 없이.
 *
 * ── 이 세트의 승격 ──
 *
 * 118단어 중 51개가 이미 유의어 사전에 있었다. 그중 여럿은 바로 앞서 넣은
 * I 세트가 참조한다 — launch←initiate, lean←incline, legacy←inheritance,
 * legal←illegal, legendary←iconic, legible←illegible, limitless←immeasurable·infinite,
 * lucid←incoherent, logical←illogical. 사전 뜻을 지켜 그 화면을 보존했다.
 *
 * 원칙은 A~K 세트와 같다.
 *   ① 같은 갈래면 기존 뜻을 쓴다 (기존 문제 화면이 안 바뀐다)
 *   ② 다른 갈래면 기존 쪽 뜻을 첫 자리에 남긴다
 *   ③ 사전에만 있던 갈래는 뒤에 붙여 살린다
 * 판단 근거는 해당 단어 주석에 적는다.
 *
 * ── 원본 뜻 오류를 셋 고쳤다 ──
 *   leaflet     '작은 잎' → '전단, 광고지'   (사전이 이미 '전단, 소책자')
 *   lush        '할당하다' → '우거진, 푸르른' (allot 과 혼동한 듯하다)
 *   like-minded '활기찬, 열정적인' → '생각이 비슷한, 뜻이 맞는'
 */
window.VOCAB_L = [
  /* ── 챕터 1 ─────────────────────────────── */

  /* labor·laboratory 는 어근이 같고 품사도 둘 다 n 이라 같은 보드에 올 수 있다.
     다만 뜻이 '노동' 과 '실험실' 로 완전히 달라 무리가 없다.
     원본의 동사 갈래('일하다, 노력하다')는 pos 가 n 이라 담지 못했다. */
  { word:"labor", pron:"레이버", pos:"n", level:"B2", meanings:["노동","수고"],
    syn:["toil","exertion","drudgery"],
    ex:[{ s:"The factory still relies on cheap manual {{}}.", f:"labor", ko:"그 공장은 여전히 값싼 육체 노동에 의존한다." }] },

  { word:"laboratory", pron:"래브러토리", pos:"n", level:"B1", meanings:["실험실","연구실"],
    syn:["lab","research facility","testing room"],
    ex:[{ s:"Samples are analysed in the {{}} within hours.", f:"laboratory", ko:"시료는 몇 시간 안에 실험실에서 분석된다." }] },

  { word:"laborious", pron:"러보리어스", pos:"adj", level:"C1", meanings:["힘이 드는","부지런한"],
    syn:["arduous","painstaking","strenuous"], ant:["effortless"],
    ex:[{ s:"Copying the manuscript by hand was slow and {{}}.", f:"laborious", ko:"필사본을 손으로 베끼는 일은 느리고 힘이 들었다." }] },

  /* 승격 ① — GLOSS '결핍, 없음' 을 글자까지 지켰다.
     abound(ant)·deficiency(syn) 두 문제가 참조한다. 첫 뜻이 D 세트 deficiency 와
     같은데, 그쪽이 이 낱말을 유의어로 쓰므로 같은 갈래가 맞다.
     원본의 동사 갈래('부족하다')는 pos 가 n 이라 담지 못했다. */
  { word:"lack", pron:"랙", pos:"n", level:"B1", meanings:["결핍","없음"],
    syn:["deficiency","shortage","absence"], ant:["abundance"],
    ex:[{ s:"The whole plan failed for {{}} of funding.", f:"lack", ko:"계획 전체가 자금 결핍으로 실패했다." }] },

  /* 승격 ② — GLOSS 는 '뒤처지다' 로 동사였지만 원본은 '지체, 지연' 으로 명사다.
     바로 뒤 lag behind 가 동사 갈래를 따로 맡고 있어, 이쪽을 명사로 두면 두
     표제어가 뚜렷이 갈린다. 원본을 따랐다.
     그 대가로 참조 3곳(catch up with·delay·fall behind)의 선택지 설명이
     '뒤처지다' 에서 '지체, 지연' 으로 바뀐다 — delay 는 '지연' 이라 오히려 잘 맞고,
     나머지 둘은 품사가 어긋나지만 유의어 관계 자체는 그대로 읽힌다. */
  { word:"lag", pron:"래그", pos:"n", level:"B2", meanings:["지체","지연"],
    syn:["delay","holdup","time lag"],
    ex:[{ s:"There is a two-second {{}} in the video feed.", f:"lag", ko:"영상 전송에 2초의 지체가 있다." }] },

  /* 승격 ① — GLOSS '뒤처지다' 와 같은 갈래다. 참조하는 기존 문제가 없어
     원본 뜻을 그대로 썼다. PRON 에는 없었다. */
  { word:"lag behind", pron:"래그 비하인드", pos:"phr", level:"B2", meanings:["~보다 뒤떨어지다"],
    syn:["fall behind","trail","be outpaced"] },

  { word:"lame", pron:"레임", pos:"adj", level:"B2", meanings:["절름발이의","절뚝거리는"],
    syn:["crippled","limping","hobbling"],
    ex:[{ s:"The horse went {{}} shortly after the race.", f:"lame", ko:"그 말은 경주 직후 절게 되었다." }] },

  /* 승격 ① — GLOSS '통탄스러운, 한심한' 을 글자까지 지켰다.
     deplorable(syn)·grievous(syn) 두 문제가 참조하므로 원본('통탄할, 개탄스러운')
     대신 사전 쪽 표현을 남겼다 — 같은 갈래다. */
  { word:"lamentable", pron:"래먼터블", pos:"adj", level:"C2", meanings:["통탄스러운","한심한"],
    syn:["deplorable","grievous","regrettable"],
    ex:[{ s:"The condition of the old building was {{}}.", f:"lamentable", ko:"그 낡은 건물의 상태는 통탄스러웠다." }] },

  /* landfill·landlord·landmine 은 앞 네 글자가 같지만 뜻이 서로 완전히 달라
     같은 보드에 와도 짝을 고르는 데 무리가 없다. */
  { word:"landfill", pron:"랜드필", pos:"n", level:"B2", meanings:["쓰레기 매립지"],
    syn:["dump","waste site","tip"],
    ex:[{ s:"Most of the plastic ends up in a {{}}.", f:"landfill", ko:"플라스틱 대부분은 쓰레기 매립지로 간다." }] },

  { word:"landlord", pron:"랜드로드", pos:"n", level:"B1", meanings:["집주인","임대인"],
    syn:["property owner","lessor","proprietor"], ant:["tenant"],
    ex:[{ s:"The {{}} raised the rent without any warning.", f:"landlord", ko:"집주인이 아무 예고 없이 임대료를 올렸다." }] },

  { word:"landmine", pron:"랜드마인", pos:"n", level:"C1", meanings:["지뢰"],
    syn:["buried explosive","mine","booby trap"],
    ex:[{ s:"Clearing every {{}} took well over a decade.", f:"landmine", ko:"모든 지뢰를 제거하는 데 10년이 훨씬 넘게 걸렸다." }] },

  /* 승격 ① — GLOSS '효력을 잃다' 를 첫 자리에 지켰다. expire(syn) 가 참조한다.
     원본의 '소멸되다' 는 같은 갈래라 둘째 자리에 붙였다.
     원본 첫 갈래 '깜빡함'(명사)은 pos 가 v 라 담지 못했다. */
  { word:"lapse", pron:"랩스", pos:"v", level:"C1", meanings:["효력을 잃다","소멸되다"],
    syn:["expire","run out","become void"],
    ex:[{ s:"Your membership will {{}} at the end of March.", f:"lapse", ko:"귀하의 회원 자격은 3월 말에 효력을 잃습니다." }] },

  /* 승격 ① — GLOSS '대체로, 주로' 가 원본과 글자까지 같다. 참조는 없고 PRON 도
     없었다. 손댈 것이 없었다. */
  { word:"largely", pron:"라지리", pos:"adv", level:"B2", meanings:["대체로","주로"],
    syn:["mostly","predominantly","on the whole"],
    ex:[{ s:"The restoration was {{}} successful.", f:"largely", ko:"그 복원은 대체로 성공적이었다." }] },

  /* 승격 ① — GLOSS '잠재된, 숨어 있는' 을 글자까지 지켰다. dormant(syn) 가
     참조하므로 원본('잠재하는') 대신 사전 쪽을 남겼다 — 같은 갈래다. */
  { word:"latent", pron:"레이턴트", pos:"adj", level:"C1", meanings:["잠재된","숨어 있는"],
    syn:["dormant","hidden","underlying"], ant:["active"],
    ex:[{ s:"The virus can remain {{}} for many years.", f:"latent", ko:"그 바이러스는 여러 해 동안 잠재된 상태로 있을 수 있다." }] },

  { word:"lateral", pron:"래터럴", pos:"adj", level:"C1", meanings:["옆의","측면의"],
    syn:["sideways","side-to-side","flanking"],
    ex:[{ s:"The plant sends out {{}} roots near the surface.", f:"lateral", ko:"그 식물은 표면 근처로 측면 뿌리를 뻗는다." }] },

  /* syn 을 비워 두었다. '위도' 를 바꿔 쓸 수 있는 낱말이 수능 수준 영어에 셋이
     없다(parallel 은 다른 뜻으로 먼저 읽힌다). 억지로 채우면 사전에 없는 말을
     정답으로 가르치게 된다 — illiteracy·in mid-career 와 같은 판단이다.
     4지선다·문장빈칸·짝맞추기 세 모드로 출제된다. */
  { word:"latitude", pron:"래터튜드", pos:"n", level:"B2", meanings:["위도"],
    ex:[{ s:"Singapore lies close to zero degrees {{}}.", f:"latitude", ko:"싱가포르는 위도 0도에 가깝게 있다." }] },

  /* 승격 ② — GLOSS '시작하다, 착수하다' 다. initiate(syn) 가 참조하는데, 그쪽
     I 세트 표제어의 뜻이 '시작하다, 착수하다' 로 글자까지 같다. 사전 값을 그대로
     쓰면 두 표제어의 뜻이 완전히 같아져 4지선다에서 서로 오답 후보가 되지 못한다.
     참조가 쓰는 '착수하다' 를 첫 자리에 지키고, 원본의 '발사하다' 를 붙여 갈랐다. */
  { word:"launch", pron:"론치", pos:"v", level:"B2", meanings:["착수하다","발사하다"],
    syn:["initiate","set in motion","kick off"],
    ex:[{ s:"The agency will {{}} the satellite next month.", f:"launch", ko:"그 기관은 다음 달에 위성을 발사할 것이다." }] },

  /* 승격 ① — GLOSS '호화로운' 을 첫 자리에 지켰다.
     extravagant(syn)·generous(syn) 두 문제가 참조한다. 원본의 '풍성한' 을
     둘째 자리에 붙였다. */
  { word:"lavish", pron:"래비시", pos:"adj", level:"C1", meanings:["호화로운","풍성한"],
    syn:["extravagant","opulent","sumptuous"], ant:["frugal"],
    ex:[{ s:"They threw a {{}} party for the anniversary.", f:"lavish", ko:"그들은 기념일에 호화로운 파티를 열었다." }] },

  { word:"lawsuit", pron:"로숫", pos:"n", level:"B2", meanings:["소송","고소"],
    syn:["legal action","litigation","court case"],
    ex:[{ s:"The company faces a {{}} over the patent.", f:"lawsuit", ko:"그 회사는 특허를 두고 소송에 직면했다." }] },

  { word:"lay", pron:"레이", pos:"v", level:"B1", meanings:["놓다","낳다"],
    syn:["place","set down","deposit"],
    ex:[{ s:"Please {{}} the documents on my desk.", f:"lay", ko:"서류를 제 책상에 놓아 주세요." }] },

  /* ── 챕터 2 ─────────────────────────────── */

  /* 첫 뜻이 D 세트 dismiss 와 같지만, 뜻이 같은 표제어는 meaningsOverlap 이
     같은 보기에 함께 뜨지 못하게 막으므로 그대로 두었다.
     바로 뒤 lay-off(명사)와 품사가 달라(phr/n) 같은 보드에 안 온다. */
  { word:"lay off", pron:"레이 오프", pos:"phr", level:"B2", meanings:["해고하다","일시 해고하다"],
    syn:["dismiss","let go","make redundant"] },

  /* 승격 ① — GLOSS '층, 겹' 을 글자까지 지켰다. crust(syn) 가 참조한다.
     원본의 동사 갈래('층을 이루다')는 pos 가 n 이라 담지 못했다. */
  { word:"layer", pron:"레이어", pos:"n", level:"B1", meanings:["층","겹"],
    syn:["crust","stratum","coating"],
    ex:[{ s:"A thin {{}} of dust covered the top shelf.", f:"layer", ko:"얇은 먼지 층이 맨 위 선반을 덮고 있었다." }] },

  { word:"layman", pron:"레이먼", pos:"n", level:"C1", meanings:["비전문가","일반인"],
    syn:["nonspecialist","amateur","ordinary person"], ant:["expert"],
    ex:[{ s:"The book explains quantum physics for the {{}}.", f:"layman", ko:"그 책은 비전문가를 위해 양자물리학을 설명한다." }] },

  { word:"lay-off", pron:"레이오프", pos:"n", level:"B2", meanings:["해고","강제 휴업"],
    syn:["dismissal","redundancy","job cut"],
    ex:[{ s:"The factory announced a mass {{}} in October.", f:"lay-off", ko:"그 공장은 10월에 대규모 해고를 발표했다." }] },

  /* 승격 ① — GLOSS '배치, 설계' 를 글자까지 지켰다. format(syn) 이 참조하므로
     원본의 '레이아웃'(외래어) 대신 사전 쪽 '설계' 를 남겼다. */
  { word:"layout", pron:"레이아웃", pos:"n", level:"B2", meanings:["배치","설계"],
    syn:["format","arrangement","design"],
    ex:[{ s:"The {{}} of the page makes it easy to scan.", f:"layout", ko:"그 페이지의 배치는 훑어보기 쉽게 만든다." }] },

  /* 승격 ① — GLOSS '이끌다; 납' 이 원본과 글자까지 같다. head start(syn) 가
     참조한다. 동사와 명사가 섞였지만 사전이 이미 그렇게 쓰고 있어 그대로 두고
     pos 는 첫 갈래에 맞춰 v 로 잡았다. */
  { word:"lead", pron:"리드", pos:"v", level:"B1", meanings:["이끌다","납"],
    syn:["guide","head","spearhead"],
    ex:[{ s:"She will {{}} the research team from May.", f:"lead", ko:"그녀는 5월부터 연구팀을 이끌 것이다." }] },

  /* 승격 ① — 원본 뜻 '작은 잎' 은 틀렸다. leaflet 은 전단·소책자를 뜻한다
     (식물의 '작은 잎' 뜻은 거의 쓰이지 않는다). 사전이 이미 '전단, 소책자' 이고
     booklet(syn) 이 '소책자' 갈래를 참조하므로 사전 쪽을 그대로 썼다. */
  { word:"leaflet", pron:"리플릿", pos:"n", level:"B2", meanings:["전단","소책자"],
    syn:["booklet","flyer","handbill"],
    ex:[{ s:"Volunteers handed out a {{}} at the station.", f:"leaflet", ko:"자원봉사자들이 역에서 전단을 나눠 주었다." }] },

  /* 승격 ① — GLOSS '누설하다; 누출' 을 글자까지 지켰다. divulge(syn) 가
     '누설하다' 갈래를 참조하므로 원본의 '새게 하다' 대신 사전 쪽을 남겼다. */
  { word:"leak", pron:"리크", pos:"v", level:"B2", meanings:["누설하다","누출"],
    syn:["divulge","disclose","seep out"],
    ex:[{ s:"Someone must have {{}} the document to the press.", f:"leaked", ko:"누군가 그 문서를 언론에 누설했음이 분명하다." }] },

  /* leak 의 둘째 갈래가 '누출' 이라 이쪽은 '유출' 을 앞에 두었다. 품사도 달라
     (v/n) 같은 보드에 오지 않는다. */
  { word:"leakage", pron:"리키지", pos:"n", level:"C1", meanings:["유출","누출"],
    syn:["escape","seepage","discharge"],
    ex:[{ s:"Engineers traced the gas {{}} to a cracked pipe.", f:"leakage", ko:"기술자들은 가스 유출을 갈라진 관에서 찾아냈다." }] },

  /* 승격 ① — GLOSS '기울다; 여윈' 을 글자까지 지켰다. I 세트 incline 이
     '기울다' 갈래를 유의어로 참조하므로 원본('기대다; 날씬한') 대신 사전 쪽을
     남겼다 — 같은 갈래다. */
  { word:"lean", pron:"린", pos:"v", level:"B2", meanings:["기울다","여윈"],
    syn:["incline","tilt","slant"],
    ex:[{ s:"The old tower began to {{}} to one side.", f:"lean", ko:"그 낡은 탑은 한쪽으로 기울기 시작했다." }] },

  { word:"leap", pron:"리프", pos:"v", level:"B2", meanings:["뛰다","도약하다"],
    syn:["bound","spring","vault"],
    ex:[{ s:"The dancer can {{}} higher than anyone on the stage.", f:"leap", ko:"그 무용수는 무대 위 누구보다 높이 뛸 수 있다." }] },

  { word:"leap off", pron:"리프 오프", pos:"phr", level:"B2", meanings:["뛰어내리다"],
    syn:["jump off","spring from","bound off"] },

  { word:"learned", pron:"러닛", pos:"adj", level:"C1", meanings:["학식이 있는","박식한"],
    syn:["scholarly","erudite","well-read"], ant:["ignorant"],
    ex:[{ s:"He was a {{}} man who read six languages.", f:"learned", ko:"그는 여섯 개 언어를 읽는 학식 있는 사람이었다." }] },

  /* 승격 ① — GLOSS '임대하다; 임대' 를 글자까지 지켰다. charter(syn) 가
     동사 갈래를 참조하므로 pos 를 v 로 유지했다.
     원본 '임대 계약' 은 같은 개념의 명사 읽기라 둘째 갈래 '임대' 가 덮는다. */
  { word:"lease", pron:"리스", pos:"v", level:"B2", meanings:["임대하다","임대"],
    syn:["charter","rent out","let"],
    ex:[{ s:"They decided to {{}} the building for ten years.", f:"lease", ko:"그들은 그 건물을 10년간 임대하기로 결정했다." }] },

  { word:"leather", pron:"레더", pos:"n", level:"B1", meanings:["가죽","가죽 제품"],
    syn:["hide","suede","animal skin"],
    ex:[{ s:"The jacket is made of genuine {{}}.", f:"leather", ko:"그 재킷은 진짜 가죽으로 만들어졌다." }] },

  { word:"leave out", pron:"리브 아웃", pos:"phr", level:"B1", meanings:["빼다","생략하다"],
    syn:["omit","exclude","skip"] },

  { word:"leftover", pron:"레프트오버", pos:"adj", level:"B2", meanings:["먹다 남은","남은"],
    syn:["remaining","surplus","uneaten"],
    ex:[{ s:"We had {{}} rice for breakfast.", f:"leftover", ko:"우리는 아침으로 먹다 남은 밥을 먹었다." }] },

  /* 승격 ① — GLOSS '유산, 유증' 을 글자까지 지켰다.
     heritage(syn)·inheritance(syn) 두 문제가 참조한다. 첫 뜻이 그 둘과 같은데,
     그쪽이 이 낱말을 유의어로 쓰므로 같은 갈래가 맞다. */
  { word:"legacy", pron:"레거시", pos:"n", level:"B2", meanings:["유산","유증"],
    syn:["heritage","inheritance","bequest"],
    ex:[{ s:"The museum was a {{}} from a local collector.", f:"legacy", ko:"그 박물관은 지역 수집가가 남긴 유산이었다." }] },

  /* 승격 ① — GLOSS '합법적인, 법의' 를 글자까지 지켰다. 참조가 둘인데 그중
     judicial 은 바로 앞 J 세트에서 넣은 표제어다(illegal 은 I 세트).
     뒤에 올 legitimate 은 '정당한' 으로 돌려 첫 뜻이 갈린다. */
  { word:"legal", pron:"리걸", pos:"adj", level:"B1", meanings:["합법적인","법의"],
    syn:["lawful","permissible","above board"], ant:["illegal"],
    ex:[{ s:"Gambling is {{}} in only a handful of states.", f:"legal", ko:"도박은 소수의 주에서만 합법적이다." }] },

  { word:"legend", pron:"레전드", pos:"n", level:"B1", meanings:["전설","설화"],
    syn:["myth","folk tale","saga"],
    ex:[{ s:"Every village has its own {{}} about the lake.", f:"legend", ko:"모든 마을은 그 호수에 대한 자기만의 전설을 갖고 있다." }] },

  /* ── 챕터 3 ─────────────────────────────── */

  /* 승격 ① — GLOSS '전설적인' 을 첫 자리에 지켰다. I 세트 iconic 이 참조한다.
     원본의 '아주 유명한' 을 둘째 자리에 붙였다. */
  { word:"legendary", pron:"레전데리", pos:"adj", level:"B2", meanings:["전설적인","아주 유명한"],
    syn:["iconic","fabled","renowned"],
    ex:[{ s:"His generosity was {{}} in the village.", f:"legendary", ko:"그의 너그러움은 그 마을에서 전설적이었다." }] },

  /* 승격 ① — GLOSS '읽기 쉬운' 을 첫 자리에 지켰다. I 세트 illegible 의 반의어다.
     원본의 '명료한' 을 둘째 자리에 붙였다.
     legitimate 과 어근·품사가 같아 같은 보드에 올 수 있지만 뜻이 '읽기 쉬운' 과
     '정당한' 으로 완전히 달라 무리가 없다. */
  { word:"legible", pron:"레저블", pos:"adj", level:"C1", meanings:["읽기 쉬운","명료한"],
    syn:["readable","decipherable","clear-cut"], ant:["illegible"],
    ex:[{ s:"His handwriting is only just {{}}.", f:"legible", ko:"그의 필체는 간신히 읽을 수 있을 정도다." }] },

  /* 승격 ① — GLOSS '법률, 법규' 를 글자까지 지켰다. act(syn)·bill(syn) 두 문제가
     참조하므로 원본('법률 제정, 입법') 대신 사전 쪽을 남겼다. */
  { word:"legislation", pron:"레지슬레이션", pos:"n", level:"B2", meanings:["법률","법규"],
    syn:["act","bill","statute"],
    ex:[{ s:"New {{}} on data privacy takes effect in January.", f:"legislation", ko:"개인정보에 관한 새 법률이 1월에 발효된다." }] },

  /* 원본 뜻은 '합법적인, 적법의' 로 legal 과 첫 뜻이 같았다. legal 이 '합법적인' 을
     가져가고 이쪽은 '정당한' 으로 돌렸다 — 근거가 옳다는 쪽이다. */
  { word:"legitimate", pron:"리지터멋", pos:"adj", level:"B2", meanings:["정당한","적법한"],
    syn:["valid","justifiable","well-founded"], ant:["illegitimate"],
    ex:[{ s:"She had a {{}} reason for missing the meeting.", f:"legitimate", ko:"그녀는 회의에 빠진 데 정당한 이유가 있었다." }] },

  { word:"leisurely", pron:"리저리", pos:"adj", level:"B2", meanings:["느긋한","여유 있는"],
    syn:["unhurried","relaxed","easygoing"], ant:["hurried"],
    ex:[{ s:"They took a {{}} walk along the river.", f:"leisurely", ko:"그들은 강을 따라 느긋한 산책을 했다." }] },

  /* 승격 ① — GLOSS '기간; 길이' 를 글자까지 지켰다. duration(syn) 이 '기간' 갈래를
     참조하므로 원본('길이')이 아니라 사전 순서를 남겼다. */
  { word:"length", pron:"렝스", pos:"n", level:"B1", meanings:["기간","길이"],
    syn:["duration","extent","span"],
    ex:[{ s:"The {{}} of the course is twelve weeks.", f:"length", ko:"그 과정의 기간은 12주다." }] },

  { word:"less developed", pron:"레스 디벨럽트", pos:"phr", level:"C1", meanings:["저개발의"],
    syn:["underdeveloped","less advanced","industrially behind"] },

  /* 승격 ① — GLOSS '줄이다, 줄어들다' 를 글자까지 지켰다. 참조가 5곳
     (cut back on·dampen·decrease·detract·diminish)으로 이 세트에서 가장 많다.
     원본('줄이다, 감소시키다')과 같은 갈래다.
     바로 뒤 lesson 과 한글 발음이 '레슨' 으로 같다 — 영어에서도 동음이의어
     쌍이고 품사가 달라(v/n) 같은 보드에 오지 않는다. */
  { word:"lessen", pron:"레슨", pos:"v", level:"B2", meanings:["줄이다","줄어들다"],
    syn:["diminish","decrease","abate"], ant:["increase"],
    ex:[{ s:"Painkillers will {{}} the discomfort for a while.", f:"lessen", ko:"진통제가 한동안 불편함을 줄여 줄 것이다." }] },

  { word:"lesson", pron:"레슨", pos:"n", level:"B1", meanings:["교훈","수업"],
    syn:["moral","class","tutorial"],
    ex:[{ s:"The failure taught him a valuable {{}}.", f:"lesson", ko:"그 실패는 그에게 값진 교훈을 가르쳤다." }] },

  /* 승격 ① — GLOSS '실망시키다' 를 첫 자리에 지켰다. disappointed(syn) 가 참조한다.
     원본의 '낙담시키다' 를 둘째 자리에 붙였다. */
  { word:"let down", pron:"렛 다운", pos:"phr", level:"B2", meanings:["실망시키다","낙담시키다"],
    syn:["disappoint","dishearten","fail"] },

  /* 승격 ① — GLOSS '치사의, 죽음에 이르는' 을 글자까지 지켰다.
     deadly(syn)·fatal(syn) 두 문제가 참조하므로 원본의 '치명적인' 대신 사전 쪽을
     남겼다 — 같은 갈래다. */
  { word:"lethal", pron:"리설", pos:"adj", level:"B2", meanings:["치사의","죽음에 이르는"],
    syn:["deadly","fatal","mortal"], ant:["harmless"],
    ex:[{ s:"The dose was high enough to be {{}}.", f:"lethal", ko:"그 투여량은 치사에 이를 만큼 높았다." }] },

  { word:"level-headed", pron:"레벌 헤딧", pos:"adj", level:"C1", meanings:["침착한","분별력 있는"],
    syn:["composed","sensible","unflappable"], ant:["rash"],
    ex:[{ s:"In a crisis she stays remarkably {{}}.", f:"level-headed", ko:"위기에서 그녀는 놀랍게 침착하다." }] },

  { word:"levity", pron:"레버티", pos:"n", level:"C2", meanings:["가벼움","경솔"],
    syn:["frivolity","flippancy","lightheartedness"], ant:["gravity"],
    ex:[{ s:"A moment of {{}} eased the tension in the room.", f:"levity", ko:"잠깐의 가벼움이 방 안의 긴장을 풀었다." }] },

  { word:"liable", pron:"라이어블", pos:"adj", level:"C1", meanings:["~하기 쉬운","책임이 있는"],
    syn:["prone","susceptible","answerable"],
    ex:[{ s:"Metal parts are {{}} to rust in damp air.", f:"liable", ko:"금속 부품은 습한 공기에서 녹이 슬기 쉽다." }] },

  /* 승격 ② — GLOSS '후한, 너그러운' 이다. generous(syn) 가 참조하는 갈래가 '후한'
     이라 첫 자리에 지켰다. 둘째는 원본의 핵심 뜻 '진보적인' 으로 바꿨다 —
     사전의 '너그러운' 은 I 세트 indulgent('너그러운, 관대한')와 거의 같은 글자여서
     비켜 둘 이유도 있었다. */
  { word:"liberal", pron:"리버럴", pos:"adj", level:"B2", meanings:["후한","진보적인"],
    syn:["generous","broad-minded","progressive"], ant:["conservative"],
    ex:[{ s:"He was known for his {{}} donations to the school.", f:"liberal", ko:"그는 학교에 후한 기부로 알려져 있었다." }] },

  /* 승격 ① — GLOSS '해방하다, 풀어 주다' 를 글자까지 지켰다. constrain(ant) 이
     참조한다. 원본('해방시키다, 자유롭게 하다')과 같은 갈래다.
     liberal 과 어근이 같지만 품사가 달라(adj/v) 같은 보드에 안 온다. */
  { word:"liberate", pron:"리버레이트", pos:"v", level:"B2", meanings:["해방하다","풀어 주다"],
    syn:["free","release","emancipate"], ant:["constrain"],
    ex:[{ s:"The troops moved in to {{}} the city.", f:"liberate", ko:"군대가 그 도시를 해방하기 위해 진입했다." }] },

  { word:"library collection", pron:"라이브레리 컬렉션", pos:"phr", level:"C1", meanings:["도서관 장서"],
    syn:["library holdings","book stock","archive"] },

  { word:"lid", pron:"리드", pos:"n", level:"B1", meanings:["뚜껑"],
    syn:["cover","cap","top"],
    ex:[{ s:"Screw the {{}} on tightly before shaking.", f:"lid", ko:"흔들기 전에 뚜껑을 꽉 돌려 닫으세요." }] },

  /* 원본 셋째 갈래 '놓여 있다' 는 '있다' 와 같은 갈래라 뺐다. */
  { word:"lie", pron:"라이", pos:"v", level:"B1", meanings:["있다","눕다"],
    syn:["be situated","recline","rest"],
    ex:[{ s:"The village {{}} at the foot of the mountain.", f:"lies", ko:"그 마을은 산 밑에 있다." }] },

  /* 승격 ① — GLOSS '실물과 같은 크기의' 를 글자까지 지켰다. full-scale(syn) 이
     참조한다. 첫 뜻이 full-scale 과 같은데 그쪽이 이 낱말을 유의어로 쓰므로
     같은 갈래가 맞다. */
  { word:"life-size", pron:"라이프 사이즈", pos:"adj", level:"C1", meanings:["실물과 같은 크기의"],
    syn:["full-scale","actual-size","true to size"],
    ex:[{ s:"The museum displays a {{}} model of the ship.", f:"life-size", ko:"그 박물관은 배의 실물 크기 모형을 전시한다." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
  "abate": "잦아들다",
  "above board": "숨김 없이 정당한",
  "actual-size": "실제 크기의",
  "amateur": "비전문가, 아마추어",
  "animal skin": "동물 가죽",
  "answerable": "책임을 져야 하는",
  "arduous": "몹시 힘든",
  "be outpaced": "앞질리다",
  "be situated": "위치해 있다",
  "become void": "무효가 되다",
  "booby trap": "위장 폭탄",
  "book stock": "보유 도서",
  "bound": "껑충 뛰다",
  "bound off": "껑충 뛰어 내려가다",
  "broad-minded": "아량이 넓은",
  "buried explosive": "땅에 묻은 폭발물",
  "cap": "마개",
  "coating": "입힌 막",
  "composed": "차분한",
  "court case": "법정 사건",
  "crippled": "다리를 못 쓰는",
  "decipherable": "판독할 수 있는",
  "disappoint": "기대를 깨다",
  "dismissal": "해임",
  "drudgery": "고된 일",
  "emancipate": "속박에서 풀다",
  "erudite": "학문이 깊은",
  "exertion": "힘을 들임",
  "fabled": "이야기로 유명한",
  "flanking": "측면을 이루는",
  "flippancy": "경박한 말투",
  "flyer": "광고 쪽지",
  "folk tale": "민간 설화",
  "frivolity": "시시한 짓",
  "guide": "안내하다",
  "handbill": "살포용 광고지",
  "hobbling": "다리를 끌며 걷는",
  "hurried": "서두른",
  "ignorant": "무지한",
  "illegitimate": "정당하지 못한",
  "industrially behind": "산업이 뒤처진",
  "job cut": "일자리 감축",
  "jump off": "뛰어서 내려가다",
  "justifiable": "이유가 서는",
  "kick off": "시작하다",
  "lab": "실험실",
  "legal action": "법적 조치",
  "less advanced": "덜 발전한",
  "lessor": "임대인",
  "library holdings": "도서관 소장 자료",
  "lightheartedness": "마음 가벼움",
  "limping": "다리를 저는",
  "litigation": "소송 절차",
  "make redundant": "정리 해고하다",
  "mine": "지뢰, 광산",
  "mostly": "대부분",
  "myth": "신화",
  "nonspecialist": "전문가가 아닌 사람",
  "omit": "빠뜨리다",
  "opulent": "사치스러운",
  "ordinary person": "보통 사람",
  "permissible": "허용되는",
  "predominantly": "주로, 대부분은",
  "property owner": "부동산 소유자",
  "proprietor": "소유주",
  "readable": "알아볼 수 있는",
  "recline": "몸을 뒤로 젖히다",
  "redundancy": "정리 해고",
  "regrettable": "유감스러운",
  "rent out": "세를 놓다",
  "research facility": "연구 시설",
  "rest": "놓여 있다",
  "saga": "긴 무훈담",
  "seep out": "스며 나오다",
  "seepage": "스며 나옴",
  "set down": "내려놓다",
  "set in motion": "움직이게 하다",
  "side-to-side": "좌우로의",
  "sideways": "옆쪽으로",
  "skip": "건너뛰다",
  "slant": "비스듬해지다",
  "spearhead": "앞장서다",
  "spring from": "뛰어 벗어나다",
  "stratum": "지층",
  "suede": "스웨이드 가죽",
  "sumptuous": "값비싸고 멋진",
  "tenant": "세입자",
  "testing room": "시험실",
  "time lag": "시간차",
  "tip": "쓰레기장",
  "toil": "고생스러운 노동",
  "true to size": "크기가 실제와 맞는",
  "tutorial": "개별 지도 수업",
  "underdeveloped": "개발이 덜 된",
  "uneaten": "먹지 않은",
  "unflappable": "동요하지 않는",
  "unhurried": "서두르지 않는",
  "vault": "짚고 뛰어넘다",
  "waste site": "폐기물 처리장",
  "well-read": "책을 많이 읽은"
});
