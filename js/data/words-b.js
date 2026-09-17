/**
 * 단어 데이터 — 수능 보카 B 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *   word / pos / level 은 필수, meanings 는 1개 이상 있어야 앱이 깨지지 않는다.
 *   syn 3개 → 아닌 것 고르기 / ex → 문장 빈칸 / col → 연어 고르기 해금.
 *
 * ⚠️ COL_POOLS 와 ANT_DICT 는 words.js 가 이미 만들어 둔 객체다.
 *    여기서 window.ANT_DICT = {...} 로 재대입하면 A 세트의 202개가 통째로
 *    사라진다. 반드시 이 파일 맨 아래처럼 Object.assign 으로 병합할 것.
 *
 * 진행 상황: 234단어 중 40단어 (babble ~ be consistent with).
 *   챕터는 20단어씩 잘리므로 현재 2챕터. 나머지는 이후 차수에서 채운다.
 */
window.VOCAB_B = [
  /* ── ba ────────────────────────────────────── */
  { word:"babble", pron:"배블", pos:"n", level:"C1", meanings:["옹알이","와글와글 떠드는 소리"],
    syn:["chatter","prattle","murmur"], ant:["silence"],
    ex:[{ s:"The {{}} of the crowd filled the great hall.", f:"babble", ko:"군중의 왁자지껄한 소리가 큰 홀을 가득 채웠다." }] },

  { word:"back-and-forth", pron:"백 앤 포스", pos:"adj", level:"B2", meanings:["오가는","주고받는"],
    syn:["alternating","reciprocal","two-way"], ant:["one-way"],
    ex:[{ s:"After a long {{}} debate, the two sides reached a deal.", f:"back-and-forth", ko:"오랜 공방 끝에 양측은 합의에 이르렀다." }] },

  { word:"backfire", pron:"백파이어", pos:"v", level:"B2", meanings:["역효과를 낳다","계획과 반대로 되다"],
    syn:["boomerang","misfire","rebound"], ant:["succeed"],
    ex:[{ s:"The marketing stunt {{}} and hurt sales instead.", f:"backfired", ko:"그 마케팅 이벤트는 역효과를 낳아 오히려 매출을 떨어뜨렸다." }] },

  { word:"bailout", pron:"베일아웃", pos:"n", level:"C1", meanings:["긴급 구제","구제 금융"],
    syn:["rescue","relief","subsidy"], ant:["bankruptcy"],
    ex:[{ s:"The failing bank received a government {{}}.", f:"bailout", ko:"부실 은행은 정부의 긴급 구제를 받았다." }] },

  { word:"balance sheet", pron:"밸런스 시트", pos:"n", level:"C1", meanings:["대차대조표"],
    syn:["statement","ledger","account"],
    ex:[{ s:"The company's {{}} showed a heavy load of debt.", f:"balance sheet", ko:"그 회사의 대차대조표는 막대한 부채를 보여주었다." }] },

  { word:"bald", pron:"볼드", pos:"adj", level:"B1", meanings:["대머리인","머리가 벗겨진"],
    syn:["hairless","bare","shaven"], ant:["hairy"],
    ex:[{ s:"He started going {{}} in his early thirties.", f:"bald", ko:"그는 삼십 대 초반에 머리가 벗겨지기 시작했다." }] },

  { word:"ballot", pron:"밸럿", pos:"n", level:"B2", meanings:["투표용지","투표"],
    syn:["vote","poll","election"],
    ex:[{ s:"Voters marked their choice on the {{}}.", f:"ballot", ko:"유권자들은 투표용지에 선택을 표시했다." }] },

  { word:"ban", pron:"밴", pos:"v", level:"B1", meanings:["금지하다","금지령"],
    syn:["prohibit","forbid","outlaw"], ant:["allow"],
    ex:[{ s:"The city council voted to {{}} plastic bags.", f:"ban", ko:"시의회는 비닐봉지를 금지하기로 표결했다." }],
    col:[{ p:"ban him {{}} driving", a:"from", pool:"prep", note:"ban A from B : A가 B하는 것을 금지하다" }] },

  { word:"banish", pron:"배니쉬", pos:"v", level:"C1", meanings:["추방하다","내쫓다"],
    syn:["expel","exile","deport"], ant:["admit"],
    ex:[{ s:"The king {{}} the rebel from the kingdom.", f:"banished", ko:"왕은 그 반역자를 왕국에서 추방했다." }] },

  { word:"bank", pron:"뱅크", pos:"n", level:"B1", meanings:["둑","제방"],
    syn:["embankment","levee","shore"],
    ex:[{ s:"We sat on the grassy {{}} of the river.", f:"bank", ko:"우리는 강의 풀이 난 둑에 앉았다." }] },

  { word:"bankrupt", pron:"뱅크럽트", pos:"adj", level:"B2", meanings:["파산한"],
    syn:["insolvent","ruined","penniless"], ant:["solvent"],
    ex:[{ s:"The airline went {{}} after years of losses.", f:"bankrupt", ko:"그 항공사는 수년간의 적자 끝에 파산했다." }] },

  { word:"banquet", pron:"뱅큇", pos:"n", level:"C1", meanings:["연회","진수성찬"],
    syn:["feast","reception","dinner"],
    ex:[{ s:"The hotel hosted a wedding {{}} for two hundred guests.", f:"banquet", ko:"그 호텔은 하객 200명을 위한 결혼 연회를 열었다." }] },

  { word:"bar", pron:"바", pos:"n", level:"C1", meanings:["법조계","변호사단","법정"],
    syn:["judiciary","court","tribunal"],
    ex:[{ s:"She was admitted to the {{}} after passing the exam.", f:"bar", ko:"그녀는 시험에 합격한 뒤 변호사 자격을 얻었다." }] },

  { word:"barbaric", pron:"바바릭", pos:"adj", level:"C1", meanings:["야만적인","이방인의"],
    syn:["savage","brutal","cruel"], ant:["civilized"],
    ex:[{ s:"The prisoners endured {{}} treatment for months.", f:"barbaric", ko:"수감자들은 몇 달 동안 야만적인 대우를 견뎠다." }] },

  { word:"barely", pron:"베어리", pos:"adv", level:"B1", meanings:["간신히","가까스로"],
    syn:["hardly","scarcely","just"], ant:["fully"],
    ex:[{ s:"He {{}} passed the exam by a single point.", f:"barely", ko:"그는 단 1점 차로 간신히 시험에 합격했다." }] },

  { word:"bargain", pron:"바건", pos:"n", level:"B2", meanings:["싼 물건","흥정"],
    syn:["deal","discount","reduction"],
    ex:[{ s:"This coat was a real {{}} at half price.", f:"bargain", ko:"이 코트는 반값이라 정말 싸게 산 물건이었다." }] },

  { word:"bargaining", pron:"바거닝", pos:"n", level:"B2", meanings:["협상","교섭"],
    syn:["negotiation","haggling","dealing"],
    ex:[{ s:"The union entered into {{}} with management.", f:"bargaining", ko:"노조는 경영진과 협상에 들어갔다." }] },

  { word:"barge", pron:"바지", pos:"v", level:"C1", meanings:["난입하다","밀치고 가다"],
    syn:["intrude","shove","push"], ant:["retreat"],
    ex:[{ s:"He tried to {{}} past the guard at the gate.", f:"barge", ko:"그는 문에서 경비원을 밀치고 지나가려 했다." }],
    col:[{ p:"barge {{}} the meeting", a:"into", pool:"prep", note:"barge into ~ : ~에 난입하다" }] },

  { word:"bark", pron:"바크", pos:"v", level:"B1", meanings:["짖다"],
    syn:["yelp","howl","yap"],
    ex:[{ s:"The dog began to {{}} at every stranger.", f:"bark", ko:"그 개는 낯선 사람마다 짖기 시작했다." }] },

  { word:"barn", pron:"반", pos:"n", level:"B1", meanings:["헛간","광"],
    syn:["shed","stable","storehouse"],
    ex:[{ s:"The farmer stored the hay in the {{}}.", f:"barn", ko:"농부는 건초를 헛간에 보관했다." }] },

  { word:"barometer", pron:"버라미터", pos:"n", level:"C1", meanings:["기압계","지표"],
    syn:["gauge","indicator","meter"],
    ex:[{ s:"The {{}} showed a sharp drop in pressure.", f:"barometer", ko:"기압계는 기압이 급격히 떨어졌음을 보여주었다." }] },

  { word:"barrel", pron:"배럴", pos:"n", level:"B2", meanings:["큰 통","배럴"],
    syn:["cask","keg","drum"],
    ex:[{ s:"They aged the wine in an oak {{}} for two years.", f:"barrel", ko:"그들은 그 와인을 오크 통에서 2년간 숙성시켰다." }] },

  { word:"barren", pron:"배런", pos:"adj", level:"C1", meanings:["불모의","임신을 못하는"],
    syn:["infertile","sterile","desolate"], ant:["fertile"],
    ex:[{ s:"Almost nothing grows in this {{}} land.", f:"barren", ko:"이 불모의 땅에서는 거의 아무것도 자라지 않는다." }] },

  { word:"barrier", pron:"배리어", pos:"n", level:"B2", meanings:["장벽","장애물"],
    syn:["obstacle","obstruction","blockade"],
    ex:[{ s:"Language can be a serious {{}} to friendship.", f:"barrier", ko:"언어는 우정에 심각한 장벽이 될 수 있다." }],
    col:[{ p:"a barrier {{}} entry", a:"to", pool:"prep", note:"a barrier to ~ : ~에 대한 장벽" }] },

  { word:"barter", pron:"바터", pos:"v", level:"C1", meanings:["물물교환하다","교역하다"],
    syn:["exchange","trade","swap"],
    ex:[{ s:"The villagers {{}} grain for cloth and salt.", f:"bartered", ko:"마을 사람들은 곡물을 천과 소금으로 물물교환했다." }],
    col:[{ p:"barter grain {{}} cloth", a:"for", pool:"prep", note:"barter A for B : A를 B와 물물교환하다" }] },

  { word:"basin", pron:"베이슨", pos:"n", level:"B2", meanings:["분지","대야"],
    syn:["bowl","hollow","valley"],
    ex:[{ s:"The Amazon {{}} spans several countries.", f:"basin", ko:"아마존 분지는 여러 나라에 걸쳐 있다." }] },

  { word:"battle", pron:"배틀", pos:"v", level:"B1", meanings:["싸우다","대결하다"],
    syn:["fight","combat","struggle"], ant:["surrender"],
    ex:[{ s:"Doctors {{}} for hours to save the patient.", f:"battled", ko:"의사들은 그 환자를 살리려고 몇 시간을 싸웠다." }],
    col:[{ p:"battle {{}} cancer", a:"against", pool:"prep", note:"battle against ~ : ~와 싸우다" }] },

  { word:"bay", pron:"베이", pos:"n", level:"B1", meanings:["만"],
    syn:["cove","inlet","gulf"],
    ex:[{ s:"Fishing boats rested in the quiet {{}}.", f:"bay", ko:"어선들이 고요한 만에 정박해 있었다." }] },

  /* ── be ~ (구·표현) ──────────────────────────
     구·표현은 문장 빈칸에 넣기 어려워 ex를 두지 않는다.
     같은 품사끼리만 오답으로 뽑히므로 표현은 표현끼리 경쟁한다. */
  { word:"be accustomed to", pron:"비 어커스텀드 투", pos:"phr", level:"B2", meanings:["~에 익숙하다"],
    syn:["be used to","be familiar with","be habituated to"], ant:["be unfamiliar with"] },

  { word:"be all for", pron:"비 올 포", pos:"phr", level:"C1", meanings:["~에 대찬성이다","~을 굳게 믿다"],
    syn:["strongly support","fully endorse","be in favor of"], ant:["be against"] },

  { word:"be apt to", pron:"비 앱트 투", pos:"phr", level:"C1", meanings:["~하는 경향이 있다","~하기 쉽다"],
    syn:["tend to","be liable to","be prone to"], ant:["be unlikely to"] },

  { word:"be attached to", pron:"비 어태치드 투", pos:"phr", level:"B2", meanings:["~에 애착을 가지다","~에 소속하다"],
    syn:["be fond of","be devoted to","cling to"], ant:["be indifferent to"] },

  { word:"be beyond one's control", pron:"비 비욘드 원스 컨트롤", pos:"phr", level:"B2", meanings:["제지할 수 없다"],
    syn:["be uncontrollable","be unmanageable","be out of hand"], ant:["be manageable"] },

  { word:"be bound to", pron:"비 바운드 투", pos:"phr", level:"B2", meanings:["반드시 ~하다"],
    syn:["be certain to","be sure to","be destined to"], ant:["be unlikely to"] },

  { word:"be caught up in", pron:"비 코트 업 인", pos:"phr", level:"B2", meanings:["~에 휘말려 들다","~에 사로잡히다"],
    syn:["be involved in","be entangled in","be absorbed in"], ant:["stay out of"] },

  { word:"be committed to", pron:"비 커미티드 투", pos:"phr", level:"B2", meanings:["~에 헌신하다","~에 전념하다"],
    syn:["be devoted to","be dedicated to","be pledged to"], ant:["neglect"] },

  { word:"be compelled to do", pron:"비 컴펠드 투 두", pos:"phr", level:"C1", meanings:["할 수 없이 ~하다"],
    syn:["be forced to","be obliged to","be made to"], ant:["be free to"] },

  { word:"be composed of", pron:"비 컴포즈드 오브", pos:"phr", level:"B2", meanings:["~로 구성되어 있다"],
    syn:["consist of","be made up of","comprise"], ant:["exclude"] },

  { word:"be concerned about", pron:"비 컨선드 어바웃", pos:"phr", level:"B1", meanings:["~을 걱정하다","~에 관심을 가지다"],
    syn:["worry about","care about","be anxious about"], ant:["ignore"] },

  { word:"be consistent with", pron:"비 컨시스턴트 위드", pos:"phr", level:"B2", meanings:["~와 일치하다","~와 일관되다"],
    syn:["agree with","correspond to","match"], ant:["contradict"] }
];


/* 아닌 것 고르기에서 반의어(정답)의 뜻을 보여주기 위한 사전 — B 세트 몫.
   words.js 가 만든 객체에 덧붙인다. 재대입하면 A 세트 202개가 사라진다. */
Object.assign(window.ANT_DICT, {
  "bankruptcy":"파산",
  "be against":"~에 반대하다",
  "be free to":"자유롭게 ~할 수 있다",
  "be indifferent to":"~에 무관심하다",
  "be manageable":"관리할 수 있다",
  "be unfamiliar with":"~에 익숙하지 않다",
  "be unlikely to":"~할 것 같지 않다",
  "civilized":"문명화된, 교양 있는",
  "contradict":"모순되다, 반박하다",
  "fertile":"비옥한, 다산의",
  "fully":"완전히, 충분히",
  "hairy":"털이 많은",
  "one-way":"일방통행의, 편도의",
  "penniless":"무일푼의",
  "retreat":"물러나다, 후퇴하다",
  "silence":"침묵, 정적",
  "solvent":"지급 능력이 있는",
  "stay out of":"~에 관여하지 않다",
  "succeed":"성공하다",
  "surrender":"항복하다, 굴복하다"
});
