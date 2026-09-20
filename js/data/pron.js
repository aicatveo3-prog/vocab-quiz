/**
 * 한글 발음 사전 — window.PRON
 *
 * '아닌 것 고르기'의 선택지(유의어·반의어)에 한글 발음을 보여주기 위한 사전이다.
 *
 *   demand          = 디맨드 · 요구, 요구하다
 *
 * ── 왜 별도 파일인가 ─────────────────────────
 * GLOSS는 값이 평범한 문자열("요구, 요구하다")이고 3,288항목이 세 파일에 흩어져
 * 있다. 값을 객체로 바꾸면 전 항목과 모든 조회 지점을 함께 고쳐야 한다.
 * 발음은 뜻과 수명이 다르므로 사전을 따로 둔다.
 *
 * ── 조회 순서 (modes.js와 동일) ───────────────
 *   1) 표제어(VOCAB)면 그 단어의 pron 을 쓴다 — 이미 1,096개 전부 있다
 *   2) 아니면 PRON[소문자] 을 쓴다
 *   3) 둘 다 없으면 발음 없이 뜻만 보여준다
 * 그래서 이 사전에는 표제어가 아닌 단어만 담는다. 표제어에 중복 등록하면
 * tools/pron-audit.js 가 잡아낸다.
 *
 * ── 표기 규칙 ───────────────────────────────
 * 기존 표제어 1,096개의 pron 표기를 그대로 따른다. 앱 안에서 같은 단어가
 * 화면 위치에 따라 다르게 적히면 안 된다.
 *
 *   강세          표기하지 않는다 (protest 명사/동사 모두 "프로테스트")
 *   슈와 ə        "어"                 abandon  → 어밴던
 *   -tion         "션"                 abolition → 애벌리션
 *   -ture         "처"                 adventure → 어드벤처
 *   -ment         "먼트"               abatement → 어베이트먼트
 *   -ble          "블"                 audible  → 오더블
 *   -ous          "어스 / 셔스"        anxious  → 앵셔스
 *   -ity          "러티 / 시티"        agility  → 어질러티
 *   -er/-or/-ar   "어"                 altar    → 올터
 *   -ful          "풀"                 harmful  → 함풀
 *   th            "ㅅ" 무성 / "ㄷ" 유성  apathy → 애퍼시,  with → 위드
 *   f / v         "ㅍ" / "ㅂ"
 *   과거분사 -ed  "드 / 트 / 티드"      forced → 포스트, fated → 페이티드
 *
 *   -ate 는 품사로 갈린다 — 기존 표제어가 이미 구별하고 있다
 *       동사        "에이트"           activate → 액티베이트
 *       명사·형용사  "릿 / 잇"          accurate → 애큐릿, advocate → 애드버킷
 *
 *   구·숙어는 띄어쓰기를 유지한다      ahead of → 어헤드 오브
 *       of 오브 / from 프럼 / for 포 / to 투 / with 위드 / as 애즈
 *       at 앳 / on 온 / in 인 / by 바이 / a 어 / and 앤드 / be 비
 *   하이픈은 공백으로 바꾼다            absent-minded → 앱센트 마인디드
 *   A·B 자리표시자는 발음하지 않는다     ascribe a to b → 어스크라이브 투
 *                                    (abstain from ~ing → "업스테인 프럼" 선례)
 *
 * ── 뜻이 둘로 갈리는 단어 ─────────────────────
 * 철자 하나에 발음이 둘인 단어(refuse 리퓨즈/레퓨스)는 GLOSS가 적어 둔 뜻에
 * 맞는 발음 하나만 쓴다. 발음은 뜻 옆에 붙어 나오므로 그 뜻의 발음이어야 한다.
 *   "refuse":"거절하다"          → 동사   → 리퓨즈
 *   "elaborate":"정교한; 상세한"  → 형용사 → 일래버릿
 * 강세만 다른 짝(protest·progress·contest 등)은 한글로 같게 적히므로 문제가 없다.
 *
 * ── 지어내지 않는다 ───────────────────────────
 * 확신이 없는 단어는 키를 넣지 않는다. 빈 문자열도 넣지 않는다.
 * 발음이 없으면 화면에 뜻만 나오므로 앱은 정상 동작한다.
 * 틀린 발음을 가르치는 것보다 발음을 비워 두는 편이 낫다.
 *
 * ── 작업 현황 ────────────────────────────────
 * 알파벳 순으로 채운다. 진행 확인: node tools/pron-audit.js
 * 다음 차수 목록:        node tools/pron-audit.js --next 400
 */
window.PRON = window.PRON || {};

Object.assign(window.PRON, {
  /* ── 1차: a few ~ be integral to (200개) ───────────────── */
  "a few": "어 퓨",
  "abdomen": "앱더먼",
  "abhor": "업호",
  "abide": "어바이드",
  "ability": "어빌러티",
  "able": "에이블",
  "abo type": "에이비오 타입",
  "about": "어바우트",
  "abridge": "어브리지",
  "absence": "앱선스",
  "absolve": "업잘브",
  "absorption": "업소프션",
  "abuser": "어뷰저",
  "abut": "어벗",
  "accident": "액시던트",
  "acclaimed": "어클레임드",
  "acclimate to": "애클러메이트 투",
  "acclimatize": "어클라이머타이즈",
  "accolade": "애컬레이드",
  "accomplishment": "어캄플리시먼트",
  "accord": "어코드",
  "accordingly": "어코딩리",
  "achievement": "어치브먼트",
  "acrid": "애크리드",
  "acrimony": "애크리머니",
  "acronym": "애크러님",
  "action": "액션",
  "acupressure": "애큐프레셔",
  "adapt to": "어댑트 투",
  "adaptable": "어댑터블",
  "add": "애드",
  "addendum": "어덴덤",
  "addictive": "어딕티브",
  "addition": "어디션",
  "adjoining": "어조이닝",
  "adjourn": "어전",
  "adjustable": "어저스터블",
  "admiring": "어드마이어링",
  "adore": "어도",
  "adored": "어도드",
  "adulthood": "어덜트후드",
  "advantage": "어드밴티지",
  "advantageous": "애드번테이저스",
  "aeronautics": "에어러노틱스",
  "affable": "애퍼블",
  "affirm": "어펌",
  "afterward": "애프터워드",
  "against": "어겐스트",
  "age-old": "에이지 올드",
  "agency": "에이전시",
  "agree": "어그리",
  "agree to": "어그리 투",
  "agree with": "어그리 위드",
  "agreeable": "어그리어블",
  "agreement": "어그리먼트",
  "agronomist": "어그라너미스트",
  "ahead of time": "어헤드 오브 타임",
  "aid": "에이드",
  "aide": "에이드",
  "air": "에어",
  "air travel": "에어 트래블",
  "akin": "어킨",
  "allocation": "앨러케이션",
  "allowing for": "얼라우잉 포",
  "alloy": "앨로이",
  "ally": "앨라이",
  "aloft": "얼로프트",
  "alteration": "올터레이션",
  "alternate-year": "올터닛 이어",
  "alternating": "올터네이팅",
  "amass": "어매스",
  "amaze": "어메이즈",
  "amazement": "어메이즈먼트",
  "ambience": "앰비언스",
  "amendment": "어멘드먼트",
  "anaerobic": "애너로빅",
  "ancient times": "에인션트 타임스",
  "and so on": "앤드 소 온",
  "and the like": "앤드 더 라이크",
  "angle": "앵글",
  "animal": "애니멀",
  "animator": "애니메이터",
  "annals": "애널스",
  "announcement": "어나운스먼트",
  "annoying": "어노잉",
  "antibacterial": "앤티백티리얼",
  "anticlockwise": "앤티클록와이즈",
  "antiquarian": "앤티퀘리언",
  "antiquities study": "앤티퀴티스 스터디",
  "appear": "어피어",
  "appease": "어피즈",
  "append": "어펜드",
  "applaud": "어플로드",
  "applause": "어플로즈",
  "apportion": "어포션",
  "appraisal": "어프레이절",
  "apprehension": "애프리헨션",
  "arc": "아크",
  "archaic": "아케이익",
  "area": "에리어",
  "arms": "암스",
  "around": "어라운드",
  "arrangement": "어레인지먼트",
  "arrest": "어레스트",
  "art show": "아트 쇼",
  "artefact": "아티팩트",
  "artistic": "아티스틱",
  "artistry": "아티스트리",
  "as well as": "애즈 웰 애즈",
  "ascribe a to b": "어스크라이브 투",
  "aside from": "어사이드 프럼",
  "ask": "애스크",
  "aspirant": "애스퍼런트",
  "assemblage": "어셈블리지",
  "assent": "어센트",
  "assenting": "어센팅",
  "assets": "애셋츠",
  "assimilate": "어시멀레이트",
  "assortment": "어소트먼트",
  "assurance": "어슈어런스",
  "astonishing": "어스타니싱",
  "at last": "앳 라스트",
  "at the cost of": "앳 더 코스트 오브",
  "at the verge": "앳 더 버지",
  "at the whim of": "앳 더 윔 오브",
  "atone": "어톤",
  "attachment": "어태치먼트",
  "attend": "어텐드",
  "attendee": "어텐디",
  "atypical": "에이티피컬",
  "audacious": "오데이셔스",
  "auditor": "오디터",
  "authorize": "오서라이즈",
  "automated": "오터메이티드",
  "aversion": "어버전",
  "away": "어웨이",
  "awe-inspiring": "오 인스파이어링",
  "background": "백그라운드",
  "backward": "백워드",
  "baffle": "배플",
  "baffled": "배플드",
  "baffling": "배플링",
  "balance": "밸런스",
  "ballast": "밸러스트",
  "banality": "버낼러티",
  "bang": "뱅",
  "bankruptcy": "뱅크럽시",
  "barbarism": "바버리즘",
  "bare": "베어",
  "barrage": "버라지",
  "base": "베이스",
  "basement": "베이스먼트",
  "basilica": "버실리커",
  "batch": "배치",
  "be absorbed in": "비 업소브드 인",
  "be adept at": "비 어뎁트 앳",
  "be afflicted with": "비 어플릭티드 위드",
  "be against": "비 어겐스트",
  "be anxious about": "비 앵셔스 어바우트",
  "be awarded": "비 어워디드",
  "be barred from": "비 바드 프럼",
  "be beneficial to": "비 베너피셜 투",
  "be bursting": "비 버스팅",
  "be capable of": "비 케이퍼블 오브",
  "be capped at": "비 캡트 앳",
  "be cautious": "비 코셔스",
  "be certain to": "비 서튼 투",
  "be clumsy at": "비 클럼지 앳",
  "be compelled to": "비 컴펠드 투",
  "be confined to": "비 컨파인드 투",
  "be considered": "비 컨시더드",
  "be dedicated to": "비 데디케이티드 투",
  "be denied": "비 디나이드",
  "be devoted to": "비 디보티드 투",
  "be dismissed as": "비 디스미스트 애즈",
  "be disposed to": "비 디스포즈드 투",
  "be entangled in": "비 인탱글드 인",
  "be essential to": "비 이센셜 투",
  "be expected to": "비 익스펙티드 투",
  "be exposed to": "비 익스포즈드 투",
  "be familiar with": "비 퍼밀리어 위드",
  "be famous for": "비 페이머스 포",
  "be fated to": "비 페이티드 투",
  "be finished with": "비 피니시트 위드",
  "be fixated on": "비 픽세이티드 온",
  "be fond of": "비 판드 오브",
  "be forced to": "비 포스트 투",
  "be free to": "비 프리 투",
  "be given": "비 기븐",
  "be good at": "비 굿 앳",
  "be habituated to": "비 허비추에이티드 투",
  "be harmful to": "비 함풀 투",
  "be idle": "비 아이들",
  "be ignorant of": "비 이그너런트 오브",
  "be impressed by": "비 임프레스트 바이",
  "be in favor of": "비 인 페이버 오브",
  "be independent of": "비 인디펜던트 오브",
  "be indifferent to": "비 인디퍼런트 투",
  "be inherent in": "비 인히어런트 인",
  "be integral to": "비 인테그럴 투"
});
