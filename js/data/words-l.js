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
    /* ★ syn 의 "spring from" 을 "jump down from" 으로 바꿨다. 사전이
       '뛰어 벗어나다' 로 적어 두었지만 그것은 이 표제어(leap off) 쪽 뜻이다.
       spring from 의 실제 뜻은 '~에서 비롯되다' 여서 S 세트에서 그렇게 세웠다. */
    syn:["jump off","jump down from","bound off"] },

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
    ex:[{ s:"The museum displays a {{}} model of the ship.", f:"life-size", ko:"그 박물관은 배의 실물 크기 모형을 전시한다." }] },

  /* ── 챕터 4 ─────────────────────────────── */

  /* 승격 ① — GLOSS '올리다; 해제하다' 를 글자까지 지켰다.
     boost(syn)·elevate(syn) 두 문제가 참조한다.
     원본의 명사 갈래('승강기')는 pos 가 v 라 담지 못했다. */
  { word:"lift", pron:"리프트", pos:"v", level:"B1", meanings:["올리다","해제하다"],
    syn:["raise","elevate","hoist"],
    ex:[{ s:"The travel ban was finally {{}} in March.", f:"lifted", ko:"여행 금지는 3월에 마침내 해제되었다." }] },

  { word:"light", pron:"라이트", pos:"v", level:"B1", meanings:["빛을 비추다","불을 붙이다"],
    syn:["illuminate","ignite","kindle"],
    ex:[{ s:"She struck a match to {{}} the candle.", f:"light", ko:"그녀는 촛불을 붙이려고 성냥을 켰다." }] },

  /* lightning-fast·lightweight 는 앞 네 글자가 같고 품사도 둘 다 adj 라 같은
     보드에 올 수 있다. 다만 뜻이 '매우 빠른' 과 '가벼운' 으로 달라 무리가 없다. */
  { word:"lightning-fast", pron:"라이트닝 패스트", pos:"adj", level:"C1", meanings:["매우 빠른","전광석화의"],
    syn:["blistering","split-second","rapid-fire"],
    ex:[{ s:"His {{}} reflexes saved the goal.", f:"lightning-fast", ko:"그의 매우 빠른 반사 신경이 골을 막았다." }] },

  { word:"lightweight", pron:"라이트웨이트", pos:"adj", level:"B2", meanings:["가벼운","경량의"],
    syn:["featherweight","portable","easy to carry"], ant:["heavy"],
    ex:[{ s:"The tent is made of {{}} nylon.", f:"lightweight", ko:"그 텐트는 가벼운 나일론으로 만들어졌다." }] },

  { word:"likely", pron:"라이클리", pos:"adj", level:"B1", meanings:["~할 것 같은","아마도"],
    syn:["probable","expected","apt"], ant:["unlikely"],
    ex:[{ s:"Rain is {{}} later this evening.", f:"likely", ko:"오늘 저녁 늦게 비가 올 것 같다." }] },

  /* 원본 뜻 '활기찬, 열정적인' 은 틀렸다. like(비슷한) + minded(생각의) 로,
     생각이나 취향이 서로 맞는다는 뜻이다. '생각이 비슷한, 뜻이 맞는' 으로 고쳤다.
     (H 세트 작업 때도 hard-and-fast 의 유의어로 이 낱말이 잘못 들어가 고친 적이 있다.) */
  { word:"like-minded", pron:"라이크 마인디드", pos:"adj", level:"C1", meanings:["생각이 비슷한","뜻이 맞는"],
    syn:["kindred","agreeing","of one mind"],
    ex:[{ s:"She found a group of {{}} researchers online.", f:"like-minded", ko:"그녀는 온라인에서 생각이 비슷한 연구자 모임을 찾았다." }] },

  /* 승격 ① — GLOSS '마찬가지로' 와 같은 갈래다. 참조가 3곳(by contrast·
     by the same token·correspondingly)이라 갈래를 늘리지 않고 한 갈래로 두었다.
     원본 '또한, 똑같이' 도 같은 갈래다. */
  { word:"likewise", pron:"라이크와이즈", pos:"adv", level:"B2", meanings:["마찬가지로"],
    syn:["correspondingly","by the same token","equally"], ant:["by contrast"],
    ex:[{ s:"He nodded, and she did {{}}.", f:"likewise", ko:"그가 고개를 끄덕였고, 그녀도 마찬가지로 했다." }] },

  /* 승격 ② — GLOSS 는 '(나무의) 가지; 팔다리' 였다. 첫 뜻에 괄호 설명이 들어가면
     선택지 한 줄이 길어져 검사가 경고한다(words-*-audit 의 스키마 검사).
     괄호를 풀어 '나뭇가지' 로 적었다 — 참조하는 bough·branch 가 둘 다 가지 쪽이라
     갈래는 그대로다. */
  { word:"limb", pron:"림", pos:"n", level:"B2", meanings:["나뭇가지","팔다리"],
    syn:["bough","branch","appendage"],
    ex:[{ s:"A heavy {{}} snapped off in the storm.", f:"limb", ko:"폭풍에 무거운 나뭇가지가 부러져 떨어졌다." }] },

  /* 승격 ① — GLOSS '한정된, 제한된' 을 글자까지 지켰다.
     boundless(ant)·finite(syn) 두 문제가 참조한다.
     바로 뒤 limitless 와 뜻이 정반대여서 함께 익히기 좋은 쌍이다. */
  { word:"limited", pron:"리미티드", pos:"adj", level:"B1", meanings:["한정된","제한된"],
    syn:["finite","restricted","narrow"], ant:["boundless"],
    ex:[{ s:"Seats are {{}} to thirty per session.", f:"limited", ko:"좌석은 회당 30석으로 한정된다." }] },

  /* 승격 ① — GLOSS '무한한' 을 첫 자리에 지켰다. 참조가 4곳(boundless·endless·
     immeasurable·infinite)인데 뒤 둘은 바로 앞서 넣은 I 세트 표제어다.
     원본의 '방대한' 을 둘째 자리에 붙였다. */
  { word:"limitless", pron:"리미틀리스", pos:"adj", level:"B2", meanings:["무한한","방대한"],
    syn:["boundless","endless","infinite"], ant:["finite"],
    ex:[{ s:"The internet offers seemingly {{}} information.", f:"limitless", ko:"인터넷은 무한해 보이는 정보를 제공한다." }] },

  /* 챕터 1의 lame('절름발이의')과 품사가 달라(adj/v) 같은 보드에 안 온다.
     원본의 형용사 갈래('흐느적거리는')는 pos 가 v 라 담지 못했다. */
  { word:"limp", pron:"림프", pos:"v", level:"B2", meanings:["절뚝거리다","다리를 절다"],
    syn:["hobble","falter","walk lamely"],
    ex:[{ s:"He began to {{}} after twisting his ankle.", f:"limp", ko:"그는 발목을 삐고 나서 절뚝거리기 시작했다." }] },

  { word:"linear", pron:"리니어", pos:"adj", level:"C1", meanings:["직선 모양의","선으로 된"],
    syn:["straight","rectilinear","sequential"],
    ex:[{ s:"The graph shows a clear {{}} relationship.", f:"linear", ko:"그 그래프는 명확한 직선 관계를 보여 준다." }] },

  { word:"linger", pron:"링거", pos:"v", level:"C1", meanings:["오래 머무르다","떠나지 못하다"],
    syn:["dawdle","hang around","persist"],
    ex:[{ s:"The smell of smoke {{}} for days afterwards.", f:"lingered", ko:"연기 냄새가 그 후 며칠 동안 오래 머물렀다." }] },

  /* linger 와 앞 네 글자가 같지만 어원이 무관하고 품사도 달라(v/n)
     같은 보드에 안 온다. */
  { word:"linguistics", pron:"링귀스틱스", pos:"n", level:"C1", meanings:["어학","언어학"],
    syn:["language study","philology","science of language"],
    ex:[{ s:"She teaches {{}} at the university.", f:"linguistics", ko:"그녀는 대학에서 언어학을 가르친다." }] },

  /* 승격 ① — GLOSS '연결, 관련' 을 글자까지 지켰다. 참조가 6곳(associate·bond·
     bridge·causality·correlation·cross-reference)으로 이 세트에서 가장 많다.
     원본의 동사 갈래('연결하다')는 pos 가 n 이라 담지 못했다. */
  { word:"link", pron:"링크", pos:"n", level:"B1", meanings:["연결","관련"],
    syn:["bond","connection","tie"],
    ex:[{ s:"Scientists found a clear {{}} between diet and health.", f:"link", ko:"과학자들은 식사와 건강 사이의 명확한 연결을 발견했다." }] },

  /* 승격 ① — GLOSS '액체' 와 같은 갈래다. fluid(syn) 가 참조한다.
     원본의 형용사 갈래('액체 형태의')는 pos 가 n 이라 담지 못했다. */
  /* ★ ant 의 "solid" 를 "solid matter" 로 바꿨다. solid 는 S 세트에서 형용사
     '단단한, 입방의' 로 선다 — 명사인 이 표제어의 반의어 자리에 형용사가
     들어가게 된다. 뜻이 '고체' 인 명사 표현으로 갈았다. */
  { word:"liquid", pron:"리퀴드", pos:"n", level:"B1", meanings:["액체"],
    syn:["fluid","solution","watery substance"], ant:["solid matter"],
    ex:[{ s:"Pour the {{}} slowly into the flask.", f:"liquid", ko:"그 액체를 플라스크에 천천히 부으세요." }] },

  /* liquid 와 앞 네 글자가 같고 품사도 둘 다 n 이지만 뜻이 '액체' 와 '독한 술' 로
     달라 무리가 없다. */
  { word:"liquor", pron:"리커", pos:"n", level:"B2", meanings:["독한 술"],
    syn:["spirits","booze","hard drink"],
    ex:[{ s:"The corner shop is not allowed to sell {{}}.", f:"liquor", ko:"그 구석 가게는 독한 술을 팔 수 없다." }] },

  /* syn 을 비워 두었다. I 세트 illiteracy 와 같은 사정이다 — '글을 읽고 쓰는 능력' 을
     바꿔 쓸 낱말이 수능 수준 영어에 셋이 없다. 억지로 채우면 사전에 없는 말을
     정답으로 가르치게 된다. */
  { word:"literacy", pron:"리터러시", pos:"n", level:"C1", meanings:["글을 읽고 쓰는 능력"],
    ex:[{ s:"Adult {{}} programmes have expanded rapidly.", f:"literacy", ko:"성인 문해 프로그램이 빠르게 확대되었다." }] },

  /* 승격 ① — GLOSS '글자 그대로의' 를 첫 자리에 지켰다. figurative(ant) 가 참조한다.
     원본은 순서가 '문자의, 글자 그대로의' 인데 사전 쪽을 앞에 두었다. */
  { word:"literal", pron:"리터럴", pos:"adj", level:"B2", meanings:["글자 그대로의","문자의"],
    syn:["word-for-word","exact","verbatim"], ant:["figurative"],
    ex:[{ s:"The {{}} meaning differs from the idiom.", f:"literal", ko:"글자 그대로의 뜻은 관용구와 다르다." }] },

  /* literal 과 어근이 같지만 품사가 달라(adj/adv) 같은 보드에 안 온다. */
  { word:"literally", pron:"리터럴리", pos:"adv", level:"B2", meanings:["문자 그대로","말 그대로"],
    syn:["exactly","to the letter","word for word"],
    ex:[{ s:"He {{}} ran ten miles before breakfast.", f:"literally", ko:"그는 아침 전에 말 그대로 10마일을 뛰었다." }] },

  /* ── 챕터 5 ─────────────────────────────── */

  /* 승격 ① — GLOSS '문학의' 를 첫 자리에 지켰다. 참조는 없고 PRON 도 없었다.
     원본의 '문학적인' 을 둘째 자리에 붙였다. */
  { word:"literary", pron:"리터레리", pos:"adj", level:"B2", meanings:["문학의","문학적인"],
    syn:["bookish","written","highbrow"],
    ex:[{ s:"The magazine publishes serious {{}} criticism.", f:"literary", ko:"그 잡지는 본격적인 문학 비평을 게재한다." }] },

  /* literary 와 어근이 같지만 품사가 달라(adj/n) 같은 보드에 안 온다. */
  { word:"literature", pron:"리터러처", pos:"n", level:"B1", meanings:["문학","문헌"],
    syn:["writing","letters","written works"],
    ex:[{ s:"She majored in English {{}} at university.", f:"literature", ko:"그녀는 대학에서 영문학을 전공했다." }] },

  /* 원본 뜻은 '쓰레기' 였는데 J 세트의 junk 와 같았다. junk 는 버려진 물건·고물
     쪽, 이쪽은 아무 데나 흩어져 버려진 쓰레기 쪽이라 '버려진 쓰레기' 로 갈랐다.
     원본의 동사 갈래('쓰레기를 버리다')는 pos 가 n 이라 담지 못했다. */
  { word:"litter", pron:"리터", pos:"n", level:"B2", meanings:["버려진 쓰레기","어질러진 물건"],
    syn:["rubbish","trash","refuse"],
    ex:[{ s:"Please do not drop {{}} in the park.", f:"litter", ko:"공원에 쓰레기를 버리지 마세요." }] },

  { word:"livestock", pron:"라이브스탁", pos:"n", level:"B2", meanings:["가축"],
    syn:["farm animals","cattle","herd"],
    ex:[{ s:"Disease spread quickly through the {{}}.", f:"livestock", ko:"질병이 가축 사이로 빠르게 퍼졌다." }] },

  { word:"lizard", pron:"리저드", pos:"n", level:"B1", meanings:["도마뱀"],
    syn:["reptile","gecko","iguana"],
    ex:[{ s:"A small {{}} basked on the warm rock.", f:"lizard", ko:"작은 도마뱀이 따뜻한 바위에서 햇볕을 쬈다." }] },

  /* 승격 ① — GLOSS '대출, 빌려 주다' 와 같은 갈래다. 참조도 PRON 도 없어
     명사 쪽으로 정리했다. 원본의 '대출금' 은 '대출' 이 덮는다. */
  { word:"loan", pron:"론", pos:"n", level:"B1", meanings:["대출","대여"],
    syn:["credit","advance","lending"],
    ex:[{ s:"She took out a small {{}} to buy the van.", f:"loan", ko:"그녀는 밴을 사려고 소액 대출을 받았다." }] },

  /* 승격 ① — GLOSS '질색하다, 넌더리 내다' 를 글자까지 지켰다.
     abominate(syn)·detest(syn) 두 문제가 참조한다. 원본 '몹시 싫어하다' 를 쓰면
     그 두 낱말의 뜻과 첫 뜻이 같아지는데, 사전 쪽을 쓰면 그 문제도 함께 풀린다. */
  { word:"loathe", pron:"로드", pos:"v", level:"C1", meanings:["질색하다","넌더리 내다"],
    syn:["detest","recoil from","have an aversion to"],
    ex:[{ s:"He {{}} having to speak in public.", f:"loathes", ko:"그는 공개 연설을 해야 하는 것을 질색한다." }] },

  { word:"localize", pron:"로컬라이즈", pos:"v", level:"C1", meanings:["~을 국한시키다","국지화하다"],
    syn:["confine","restrict","pin down"],
    ex:[{ s:"Doctors managed to {{}} the infection quickly.", f:"localize", ko:"의사들은 감염을 빠르게 국한시키는 데 성공했다." }] },

  /* localize 와 어근이 같지만 품사가 달라(v/n) 같은 보드에 안 온다. */
  { word:"location", pron:"로케이션", pos:"n", level:"B1", meanings:["장소","위치"],
    /* ★ syn 의 "spot" 을 "particular place" 로 바꿨다. 사전이 '발견하다; 장소' 로
       동사와 명사를 섞어 두었는데, 참조 셋 중 둘(catch a glimpse of·detect) 이
       동사여서 S 세트에서는 동사 '발견하다' 로 선다. */
    syn:["site","particular place","position"],
    ex:[{ s:"The {{}} of the new school has not been decided.", f:"location", ko:"새 학교의 장소는 아직 정해지지 않았다." }] },

  /* 승격 ② — GLOSS '숙소; 제기하다' 로 명사와 동사가 섞여 있었다.
     accommodate(syn) 가 참조하는 갈래는 '숙소' 라 첫 자리에 지키고, 둘째는 원본의
     '산장' 으로 바꿨다 — 한 표제어에 명사와 동사를 섞지 않는 쪽이 읽기 낫다. */
  { word:"lodge", pron:"로지", pos:"n", level:"B2", meanings:["숙소","산장"],
    syn:["cabin","inn","guesthouse"],
    ex:[{ s:"We stayed in a mountain {{}} for two nights.", f:"lodge", ko:"우리는 이틀 밤 산장에 머물렀다." }] },

  /* 승격 ① — GLOSS '아주 높은, 우뚝한' 을 글자까지 지켰다. elevated(syn) 가
     참조한다. 원본 '높은' 을 쓰면 elevated 의 뜻과 첫 뜻이 같아지는데,
     사전 쪽을 쓰면 그 문제도 함께 풀린다. */
  { word:"lofty", pron:"로프티", pos:"adj", level:"C1", meanings:["아주 높은","우뚝한"],
    syn:["elevated","towering","soaring"],
    ex:[{ s:"The cathedral has a {{}} vaulted ceiling.", f:"lofty", ko:"그 대성당은 아주 높은 아치형 천장을 갖고 있다." }] },

  { word:"logic", pron:"라직", pos:"n", level:"B2", meanings:["논리학","논리"],
    syn:["reasoning","rationale","argumentation"],
    ex:[{ s:"There is a clear flaw in your {{}}.", f:"logic", ko:"당신의 논리에 명확한 결함이 있다." }] },

  /* 승격 ① — GLOSS '논리적인' 과 글자까지 같다. coherent(syn)·illogical(ant) 두
     문제가 참조한다. 원본도 한 갈래다.
     logic 과 어근이 같지만 품사가 달라(n/adj) 같은 보드에 안 온다. */
  { word:"logical", pron:"라지컬", pos:"adj", level:"B1", meanings:["논리적인"],
    syn:["coherent","rational","sound"], ant:["illogical"],
    ex:[{ s:"The next {{}} step is to test the theory.", f:"logical", ko:"다음 논리적인 단계는 그 이론을 검증하는 것이다." }] },

  { word:"lonely", pron:"론리", pos:"adj", level:"B1", meanings:["외로운","쓸쓸한"],
    syn:["solitary","friendless","forlorn"],
    ex:[{ s:"He felt {{}} in the unfamiliar city.", f:"lonely", ko:"그는 낯선 도시에서 외로움을 느꼈다." }] },

  { word:"long", pron:"롱", pos:"v", level:"B2", meanings:["애타게 바라다","갈망하다"],
    syn:["yearn","crave","pine"],
    ex:[{ s:"She {{}} for news from home.", f:"longed", ko:"그녀는 집에서 오는 소식을 애타게 바랐다." }] },

  /* longevity·longitude 는 앞 네 글자가 같고 품사도 둘 다 n 이지만 뜻이 '장수' 와
     '경도' 로 완전히 달라 무리가 없다. */
  { word:"longevity", pron:"란제버티", pos:"n", level:"C1", meanings:["장수"],
    syn:["long life","durability","endurance"],
    ex:[{ s:"Diet plays a large part in {{}}.", f:"longevity", ko:"식사는 장수에 큰 역할을 한다." }] },

  /* syn 을 비워 두었다. 챕터 1의 latitude('위도')와 같은 사정이다 — 좌표를 가리키는
     전문 명사여서 바꿔 쓸 낱말이 셋이 없다. */
  { word:"longitude", pron:"란저튜드", pos:"n", level:"B2", meanings:["경도","경선"],
    ex:[{ s:"The ship's {{}} was recorded every hour.", f:"longitude", ko:"그 배의 경도가 매시간 기록되었다." }] },

  { word:"long-term", pron:"롱 텀", pos:"adj", level:"B1", meanings:["장기간의","오랜"],
    syn:["extended","lasting","prolonged"], ant:["short-term"],
    ex:[{ s:"The drug has no known {{}} side effects.", f:"long-term", ko:"그 약은 알려진 장기간의 부작용이 없다." }] },

  { word:"look forward to", pron:"룩 포워드 투", pos:"phr", level:"B1", meanings:["~을 고대하다"],
    syn:["anticipate","await eagerly","be eager for"] },

  { word:"looking glass", pron:"루킹 글래스", pos:"phr", level:"C2", meanings:["거울"],
    syn:["reflector","reflecting surface","silvered glass"] },

  /* ── 챕터 6 ─────────────────────────────── */

  /* 승격 ① — GLOSS '느슨하게 하다' 를 첫 자리에 지켰다. bind(ant) 가 참조한다.
     원본의 '풀다' 를 둘째 자리에 붙였다. */
  { word:"loosen", pron:"루슨", pos:"v", level:"B2", meanings:["느슨하게 하다","풀다"],
    syn:["slacken","untie","relax"], ant:["bind"],
    ex:[{ s:"He tried in vain to {{}} the rusted bolt.", f:"loosen", ko:"그는 녹슨 볼트를 느슨하게 하려 헛되이 애썼다." }] },

  { word:"lore", pron:"로", pos:"n", level:"C2", meanings:["구전 지식"],
    syn:["folklore","oral knowledge","handed-down wisdom"],
    ex:[{ s:"Local {{}} says the well never runs dry.", f:"lore", ko:"지역 구전 지식에 따르면 그 우물은 마르지 않는다." }] },

  { word:"lorry", pron:"로리", pos:"n", level:"B2", meanings:["화물 자동차","트럭"],
    syn:["truck","van","heavy goods vehicle"],
    ex:[{ s:"A broken-down {{}} blocked the narrow lane.", f:"lorry", ko:"고장 난 화물 자동차가 좁은 길을 막았다." }] },

  { word:"lose one's temper", pron:"루즈 원스 템퍼", pos:"phr", level:"B2", meanings:["화내다","흥분하다"],
    syn:["blow up","lose control","fly into a rage"] },

  { word:"lot", pron:"랏", pos:"n", level:"B2", meanings:["제비뽑기","땅"],
    syn:["draw","parcel of land","plot"],
    ex:[{ s:"The winner was chosen by {{}}.", f:"lot", ko:"승자는 제비뽑기로 뽑혔다." }] },

  /* 승격 ① — GLOSS '형편없는, 지독한' 이 원본과 같은 갈래다. 참조는 없고
     PRON 도 없었다. */
  { word:"lousy", pron:"라우지", pos:"adj", level:"B2", meanings:["형편없는","지독한"],
    syn:["terrible","awful","dreadful"],
    ex:[{ s:"The weather stayed {{}} all week.", f:"lousy", ko:"날씨가 일주일 내내 형편없었다." }] },

  { word:"lowbrow", pron:"로브라우", pos:"adj", level:"C2", meanings:["이해가 쉬운","저급한"],
    syn:["unsophisticated","mass-market","undemanding"], ant:["highbrow"],
    ex:[{ s:"Critics dismissed the show as {{}} entertainment.", f:"lowbrow", ko:"비평가들은 그 쇼를 저급한 오락으로 일축했다." }] },

  { word:"low-budget", pron:"로 버짓", pos:"adj", level:"B2", meanings:["저예산의"],
    syn:["cheaply made","shoestring","inexpensive"],
    ex:[{ s:"The film was a {{}} independent production.", f:"low-budget", ko:"그 영화는 저예산 독립 제작물이었다." }] },

  /* 승격 ① — GLOSS '낮추다, 내리다' 를 글자까지 지켰다. elevate(ant) 가 참조하므로
     원본의 '떨어뜨리다' 대신 사전 쪽 '내리다' 를 남겼다. */
  { word:"lower", pron:"로워", pos:"v", level:"B1", meanings:["낮추다","내리다"],
    syn:["reduce","drop","bring down"], ant:["elevate"],
    ex:[{ s:"Please {{}} your voice in the reading room.", f:"lower", ko:"열람실에서는 목소리를 낮춰 주세요." }] },

  /* 승격 ① — GLOSS '명료한, 맑은' 을 글자까지 지켰다. 참조가 3곳(coherent·
     delirious·incoherent)이고 뒤 하나는 I 세트 표제어다. 원본('명확한, 맑은')과
     같은 갈래다. */
  { word:"lucid", pron:"루시드", pos:"adj", level:"C1", meanings:["명료한","맑은"],
    syn:["coherent","intelligible","clear-headed"], ant:["incoherent"],
    ex:[{ s:"She gave a {{}} account of the accident.", f:"lucid", ko:"그녀는 그 사고에 대해 명료한 설명을 했다." }] },

  { word:"luggage", pron:"러기지", pos:"n", level:"B1", meanings:["수화물","여행용 짐"],
    syn:["baggage","bags","suitcases"],
    ex:[{ s:"Please keep your {{}} with you at all times.", f:"luggage", ko:"항상 수화물을 소지해 주세요." }] },

  /* 승격 ① — GLOSS '덩어리' 와 글자까지 같다. chunk(syn) 가 참조한다. */
  { word:"lump", pron:"럼프", pos:"n", level:"B2", meanings:["덩어리"],
    syn:["chunk","clod","mass"],
    ex:[{ s:"Stir until no {{}} remains in the batter.", f:"lump", ko:"반죽에 덩어리가 남지 않을 때까지 저으세요." }] },

  /* 승격 ① — GLOSS '유혹하다; 미끼' 를 글자까지 지켰다. attract(syn) 가 참조하므로
     원본의 '꾀다, 유도하다' 대신 사전 쪽을 남겼다 — 같은 갈래다. */
  { word:"lure", pron:"루어", pos:"v", level:"B2", meanings:["유혹하다","미끼"],
    syn:["attract","entice","tempt"],
    ex:[{ s:"Bright colours {{}} insects to the flower.", f:"lure", ko:"밝은 색이 곤충을 그 꽃으로 유혹한다." }] },

  /* 승격 ① — GLOSS '숨어 있다, 도사리다' 가 원본과 글자까지 같다. 참조는 없고
     PRON 도 없었다. */
  { word:"lurk", pron:"러크", pos:"v", level:"C1", meanings:["숨어 있다","도사리다"],
    syn:["skulk","lie in wait","prowl"],
    ex:[{ s:"Danger can {{}} even in shallow water.", f:"lurk", ko:"위험은 얕은 물에도 숨어 있을 수 있다." }] },

  /* 승격 ① — 원본 뜻 '할당하다' 는 틀렸다(allot 과 혼동한 듯하다). lush 는 초목이
     우거졌다는 뜻이다. 사전이 이미 '우거진, 푸르른' 이고 fertile(syn) 이 참조하므로
     사전 쪽을 그대로 썼다 — 원본 오류가 승격으로 자동 교정된 자리다.
     바로 뒤 luxuriant 는 '무성한' 으로 갈래가 갈린다. */
  { word:"lush", pron:"러시", pos:"adj", level:"B2", meanings:["우거진","푸르른"],
    syn:["fertile","verdant","overgrown"],
    ex:[{ s:"The valley was {{}} after the spring rains.", f:"lush", ko:"그 골짜기는 봄비 뒤에 우거졌다." }] },

  /* luxurious 와 어근·품사가 다 같아 같은 보드에 올 수 있다. 영어에서도 흔히
     헷갈리는 쌍인데, 뜻이 '무성한' 과 '사치스러운' 으로 뚜렷이 갈려 오히려
     함께 익히기 좋다. */
  { word:"luxuriant", pron:"럭주리언트", pos:"adj", level:"C1", meanings:["무성한","잘 자라는"],
    syn:["lush","thriving","profuse"],
    ex:[{ s:"Her {{}} hair fell well past her shoulders.", f:"luxuriant", ko:"그녀의 무성한 머리카락이 어깨 아래로 한참 내려왔다." }] },

  /* 승격 ① — GLOSS 는 '호화로운' 인데 챕터 1의 lavish 가 그 뜻을 첫 자리로 쓴다.
     참조가 없어 자유롭게 정할 수 있었으므로 원본의 '사치스러운' 을 앞에 두어 갈랐다. */
  { word:"luxurious", pron:"럭주리어스", pos:"adj", level:"B2", meanings:["사치스러운","호화로운"],
    syn:["opulent","plush","deluxe"], ant:["plain"],
    ex:[{ s:"They stayed in a {{}} seaside hotel.", f:"luxurious", ko:"그들은 사치스러운 해변 호텔에 머물렀다." }] },

  { word:"lyric", pron:"리릭", pos:"n", level:"C1", meanings:["서정시","가사"],
    syn:["verse","song words","poem"],
    ex:[{ s:"The {{}} of the song is printed inside the sleeve.", f:"lyric", ko:"그 노래의 가사가 케이스 안에 인쇄되어 있다." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
  "abate": "잦아들다",
  "above board": "숨김 없이 정당한",
  "actual-size": "실제 크기의",
  "agreeing": "뜻을 같이하는",
  "amateur": "비전문가, 아마추어",
  "animal skin": "동물 가죽",
  "answerable": "책임을 져야 하는",
  "appendage": "몸에 붙은 부분",
  "arduous": "몹시 힘든",
  "argumentation": "논증 과정",
  "await eagerly": "간절히 기다리다",
  "baggage": "여행 가방류",
  "bags": "가방들",
  "be eager for": "~을 몹시 바라다",
  "be outpaced": "앞질리다",
  "be situated": "위치해 있다",
  "become void": "무효가 되다",
  "blistering": "맹렬히 빠른",
  "booby trap": "위장 폭탄",
  "book stock": "보유 도서",
  "bookish": "책에 기댄",
  "booze": "술",
  "bound": "껑충 뛰다",
  "bound off": "껑충 뛰어 내려가다",
  "bring down": "끌어내리다",
  "broad-minded": "아량이 넓은",
  "buried explosive": "땅에 묻은 폭발물",
  "cabin": "오두막",
  "cap": "마개",
  "cattle": "소 떼",
  "cheaply made": "싸게 만든",
  "clear-headed": "머리가 맑은",
  "clod": "흙덩이",
  "coating": "입힌 막",
  "composed": "차분한",
  "court case": "법정 사건",
  "crippled": "다리를 못 쓰는",
  "dawdle": "느릿느릿 꾸물대다",
  "decipherable": "판독할 수 있는",
  "deluxe": "특급의",
  "disappoint": "기대를 깨다",
  "dismissal": "해임",
  "drudgery": "고된 일",
  "durability": "오래 견딤",
  "easy to carry": "들고 다니기 쉬운",
  "emancipate": "속박에서 풀다",
  "equally": "똑같이",
  "erudite": "학문이 깊은",
  "exertion": "힘을 들임",
  "fabled": "이야기로 유명한",
  "farm animals": "농장 동물",
  "featherweight": "깃털처럼 가벼운",
  "flanking": "측면을 이루는",
  "flippancy": "경박한 말투",
  "fly into a rage": "벌컥 화를 내다",
  "flyer": "광고 쪽지",
  "folk tale": "민간 설화",
  "folklore": "민간 전승",
  "friendless": "벗이 없는",
  "frivolity": "시시한 짓",
  "gecko": "게코도마뱀",
  "guesthouse": "민박집",
  "guide": "안내하다",
  "handbill": "살포용 광고지",
  "handed-down wisdom": "대대로 전해진 지혜",
  "hang around": "어슬렁거리며 남다",
  "hard drink": "도수 높은 술",
  "have an aversion to": "~을 몹시 꺼리다",
  "heavy": "무거운",
  "heavy goods vehicle": "대형 화물차",
  "highbrow": "교양 수준이 높은",
  "hobble": "다리를 절며 걷다",
  "hobbling": "다리를 끌며 걷는",
  "hoist": "끌어올리다",
  "hurried": "서두른",
  "ignorant": "무지한",
  "iguana": "이구아나",
  "illegitimate": "정당하지 못한",
  "industrially behind": "산업이 뒤처진",
  "inn": "여관",
  "job cut": "일자리 감축",
  "jump off": "뛰어서 내려가다",
  "justifiable": "이유가 서는",
  "kick off": "시작하다",
  "kindle": "불붙이다",
  "kindred": "마음이 통하는",
  "lab": "실험실",
  "language study": "언어 연구",
  "lasting": "오래가는",
  "legal action": "법적 조치",
  "lending": "대여, 빌려 줌",
  "less advanced": "덜 발전한",
  "lessor": "임대인",
  "library holdings": "도서관 소장 자료",
  "lie in wait": "숨어서 기다리다",
  "lightheartedness": "마음 가벼움",
  "limping": "다리를 저는",
  "litigation": "소송 절차",
  "long life": "오랜 수명",
  "make redundant": "정리 해고하다",
  "mass-market": "대중 시장용의",
  "mine": "지뢰, 광산",
  "mostly": "대부분",
  "myth": "신화",
  "nonspecialist": "전문가가 아닌 사람",
  "of one mind": "한마음인",
  "opulent": "사치스러운",
  "oral knowledge": "입으로 전해진 지식",
  "ordinary person": "보통 사람",
  "overgrown": "웃자란",
  "parcel of land": "한 필지의 땅",
  "permissible": "허용되는",
  "philology": "문헌학",
  "pin down": "범위를 좁혀 짚다",
  "pine": "애타게 그리다",
  "plush": "푹신하고 고급스러운",
  "poem": "시",
  "predominantly": "주로, 대부분은",
  "profuse": "넘칠 만큼 많은",
  "property owner": "부동산 소유자",
  "proprietor": "소유주",
  "prowl": "살금살금 돌아다니다",
  "rapid-fire": "속사포 같은",
  "readable": "알아볼 수 있는",
  "recline": "몸을 뒤로 젖히다",
  "recoil from": "질려서 물러나다",
  "rectilinear": "직선으로 된",
  "redundancy": "정리 해고",
  "reflecting surface": "빛을 되비추는 면",
  "reflector": "반사기",
  "relax": "헐겁게 하다",
  "rent out": "세를 놓다",
  "research facility": "연구 시설",
  "rest": "놓여 있다",
  "saga": "긴 무훈담",
  "science of language": "언어 과학",
  "seep out": "스며 나오다",
  "seepage": "스며 나옴",
  "set down": "내려놓다",
  "set in motion": "움직이게 하다",
  "shoestring": "아주 적은 돈의",
  "short-term": "단기간의",
  "side-to-side": "좌우로의",
  "sideways": "옆쪽으로",
  "silvered glass": "은을 입힌 유리",
  "skulk": "몰래 숨어 다니다",
  "slacken": "늘어지게 하다",
  "slant": "비스듬해지다",
  "soaring": "치솟은",
  "song words": "노래 가사",
  "spearhead": "앞장서다",
  "spirits": "증류주",
  "stratum": "지층",
  "suede": "스웨이드 가죽",
  "suitcases": "여행용 가방",
  "sumptuous": "값비싸고 멋진",
  "tempt": "마음을 끌다",
  "tenant": "세입자",
  "testing room": "시험실",
  "time lag": "시간차",
  "tip": "쓰레기장",
  "to the letter": "한 글자도 틀리지 않게",
  "toil": "고생스러운 노동",
  "towering": "우뚝 솟은",
  "trash": "폐기물",
  "truck": "트럭",
  "true to size": "크기가 실제와 맞는",
  "tutorial": "개별 지도 수업",
  "undemanding": "머리를 안 써도 되는",
  "underdeveloped": "개발이 덜 된",
  "uneaten": "먹지 않은",
  "unflappable": "동요하지 않는",
  "unhurried": "서두르지 않는",
  "unlikely": "있을 것 같지 않은",
  "unsophisticated": "세련되지 않은",
  "untie": "매듭을 풀다",
  "van": "소형 화물차",
  "vault": "짚고 뛰어넘다",
  "verbatim": "한마디도 안 빼고",
  "verdant": "푸른 풀로 덮인",
  "verse": "운문",
  "walk lamely": "다리를 끌며 걷다",
  "waste site": "폐기물 처리장",
  "watery substance": "물기 있는 물질",
  "well-read": "책을 많이 읽은",
  "word for word": "낱말 하나하나",
  "word-for-word": "낱말 그대로의",
  "writing": "글, 저술",
  "written": "글로 쓴",
  "written works": "저술 작품"
});
