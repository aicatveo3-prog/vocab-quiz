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
    ex:[{ s:"Please {{}} the documents on my desk.", f:"lay", ko:"서류를 제 책상에 놓아 주세요." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
  "arduous": "몹시 힘든",
  "be outpaced": "앞질리다",
  "become void": "무효가 되다",
  "booby trap": "위장 폭탄",
  "buried explosive": "땅에 묻은 폭발물",
  "court case": "법정 사건",
  "crippled": "다리를 못 쓰는",
  "drudgery": "고된 일",
  "exertion": "힘을 들임",
  "flanking": "측면을 이루는",
  "hobbling": "다리를 끌며 걷는",
  "kick off": "시작하다",
  "lab": "실험실",
  "legal action": "법적 조치",
  "lessor": "임대인",
  "limping": "다리를 저는",
  "litigation": "소송 절차",
  "mine": "지뢰, 광산",
  "mostly": "대부분",
  "opulent": "사치스러운",
  "predominantly": "주로, 대부분은",
  "property owner": "부동산 소유자",
  "proprietor": "소유주",
  "regrettable": "유감스러운",
  "research facility": "연구 시설",
  "set down": "내려놓다",
  "set in motion": "움직이게 하다",
  "side-to-side": "좌우로의",
  "sideways": "옆쪽으로",
  "sumptuous": "값비싸고 멋진",
  "tenant": "세입자",
  "testing room": "시험실",
  "time lag": "시간차",
  "tip": "쓰레기장",
  "toil": "고생스러운 노동",
  "waste site": "폐기물 처리장"
});
