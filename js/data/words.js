/**
 * 단어 데이터 — 수능 보카 A 섹션
 *
 * 필드 구성 — 있는 필드에 따라 퀴즈 모드가 자동으로 해금됩니다.
 *   word     : 영단어 또는 표현                            (필수)
 *   pos      : 품사 v / n / adj / adv / phr(구·표현)        (필수)
 *   level    : CEFR 레벨 B1 / B2 / C1 / C2                 (필수)
 *   meanings : 한국어 뜻 배열      → 모드 ①(4지선다) ⑤(짝맞추기) 해금
 *   syn      : 유의어 3개 이상     → 모드 ④(아닌 것 고르기) 해금
 *   ant      : 반의어              → 모드 ①의 오답 품질 향상, ④의 오답으로 사용
 *   ex       : 예문 배열           → 모드 ⑬(문장 빈칸) 해금
 *              { s: "{{}} 자리가 빈칸", f: 문장에 들어갈 실제 어형, ko: 번역 }
 *   gov      : 어법(지배) 정보     → 정답 화면에 어법 한 줄, 짝 맞추기 카드에
 *                                   전치사를 붙인다
 *              { prep: 받을 수 있는 전치사 전부, usage: 해설 }
 *
 * ── gov 는 문항을 만들지 않는다 ─────────────────
 *
 * 읽는 곳이 두 군데다.
 *   usage    4지선다·아닌것·문장빈칸의 정답 화면에 한 줄로 뜬다
 *   prep[0]  짝 맞추기 카드 라벨에 붙는다 (absent → absent from)
 *
 * 한때 '아닌 것 고르기' 안에 "빈칸에 to 를 쓸 수 없는 것은?" 문항을 두었다가
 * 걷어냈다. 측정해 보니 평가로 작동하지 않았다 — 오답 후보가 한 문항당 평균
 * 6.2개뿐이어서 같은 오답이 계속 돌아왔고, "넷 중 처음 보는 걸 찍는다" 는
 * 규칙이 61% 맞았다(무작위는 25%). 자세한 근거는 quizgen.js 머리주석에 있다.
 * 어법 노출은 위 두 경로와 문장 빈칸(빈칸 뒤에 지배 전치사가 온다)이 맡는다.
 *
 * prep[1..] 와 pat 은 지금 읽는 코드가 없다. 검증된 언어 사실이고 usage 가
 * 대표 전치사를 제대로 가리키는지 확인하는 근거로 써서 남겨 두었다.
 *
 * 전치사 지배가 아닌 어법(win acclaim 처럼 동사+명사 연어)은 prep 을 비우고
 * usage 만 채운다. 그러면 카드 라벨에는 붙지 않고 해설만 노출된다.
 *
 * 구·표현(pos:"phr")은 문장 빈칸에 넣기 어려워 ex를 두지 않습니다.
 * 같은 품사끼리만 오답으로 뽑히므로 표현은 표현끼리 경쟁합니다.
 */
window.VOCAB = [
  { word:"abide by", exams:["공무원"], pron:"어바이드 바이", pos:"phr", level:"C1", meanings:["준수하다","따르다"], syn:["comply with","observe","obey"], ex:[{ s:"He said he would {{}} the court's decision.", f:"abide by", ko:"그는 법원의 결정을 따르겠다고 말했다." }] },
  { word:"adulteration", exams:["공무원"], pron:"어덜터레이션", pos:"n", level:"C2", meanings:["불순물 혼입","변질"], syn:["contamination","debasement","tampering"], ex:[{ s:"The {{}} of the coins drove good money out of circulation.", f:"adulteration", ko:"주화의 변질이 좋은 화폐를 유통에서 몰아냈다." }] },
  { word:"adrenaline", exams:["공무원"], pron:"아드레날린", pos:"n", level:"B2", meanings:["아드레날린"], ex:[{ s:"The glands pump out {{}}, the body's stress hormone.", f:"adrenaline", ko:"그 분비샘은 몸의 스트레스 호르몬인 아드레날린을 분비한다." }] },
  { word:"aggressively", exams:["공무원"], pron:"어그레시블리", pos:"adv", level:"B2", meanings:["공격적으로","적극적으로"], syn:["forcefully","assertively","fiercely"], ant:["passively"], ex:[{ s:"Smart money is moving {{}} in this direction.", f:"aggressively", ko:"똑똑한 자금이 이 방향으로 적극적으로 움직이고 있다." }] },
  { word:"amendment", exams:["공무원"], pron:"어멘드먼트", pos:"n", level:"C1", meanings:["수정안","개정"], syn:["revision","alteration","modification"], ex:[{ s:"They proposed an {{}} to the constitution.", f:"amendment", ko:"그들은 헌법 개정안을 제안했다." }] },
  { word:"anonymity", exams:["공무원"], pron:"애너니미티", pos:"n", level:"C1", meanings:["익명","익명성"], syn:["namelessness","obscurity","secrecy"], ant:["fame"], ex:[{ s:"Online, {{}} may be more desirable than fame.", f:"anonymity", ko:"온라인에서는 익명성이 명성보다 더 바람직할 수 있다." }] },
  { word:"appease", exams:["공무원"], pron:"어피즈", pos:"v", level:"C1", meanings:["달래다","진정시키다"], syn:["soothe","placate","pacify"], ant:["provoke"], ex:[{ s:"To {{}} critics, the industry launched a campaign.", f:"appease", ko:"비판을 달래려고 업계는 캠페인을 시작했다." }] },
  { word:"arena", exams:["공무원"], pron:"어리나", pos:"n", level:"B2", meanings:["경기장","활동 무대"], syn:["stadium","ground","sphere"], ex:[{ s:"Interest in stars goes beyond their performances in the {{}}.", f:"arena", ko:"스타에 대한 관심은 경기장에서의 활약을 넘어선다." }] },
  { word:"arid", exams:["공무원"], pron:"애리드", pos:"adj", level:"C1", meanings:["건조한","메마른"], syn:["dry","parched","barren"], ant:["humid"], ex:[{ s:"Water rights are traded in {{}} areas of the globe.", f:"arid", ko:"물 권리는 지구의 건조한 지역에서 거래된다." }] },
  { word:"assimilate", exams:["공무원"], pron:"어시밀레이트", pos:"v", level:"C1", meanings:["동화되다","흡수하다"], syn:["absorb","integrate","incorporate"], ex:[{ s:"Immigrants gradually {{}} into the new culture.", f:"assimilate", ko:"이민자들은 서서히 새 문화에 동화된다." }] },
  { word:"axiom", exams:["공무원"], pron:"액시엄", pos:"n", level:"C2", meanings:["공리","자명한 이치"], syn:["principle","truism","maxim"], ex:[{ s:"It is an {{}} of economics that prices rise as demand grows.", f:"axiom", ko:"수요가 늘면 가격이 오른다는 것은 경제학의 자명한 이치다." }] },
  { word:"acceptable", exams:["공무원"], pron:"억셉터블", pos:"adj", level:"B2", meanings:["받아들일 수 있는","용인되는"], syn:["satisfactory","adequate","permissible"], ant:["unacceptable"], ex:[{ s:"All travelers must carry {{}} identification.", f:"acceptable", ko:"모든 여행자는 인정되는 신분증을 소지해야 한다." }] },
  { word:"accuse", exams:["공무원"], pron:"어큐즈", pos:"v", level:"B2", meanings:["비난하다","고발하다"], syn:["blame","charge","indict"], ant:["defend"], ex:[{ s:"They {{}} him of stealing the funds.", f:"accuse", ko:"그들은 그가 자금을 훔쳤다고 고발한다." }], gov:{ prep:["of"], usage:"accuse A of B : A를 B의 이유로 비난/고발하다" } },
  { word:"achievement", exams:["공무원"], pron:"어치브먼트", pos:"n", level:"B2", meanings:["성취","업적"], syn:["accomplishment","feat","success"], ant:["failure"], ex:[{ s:"We celebrate the artistic {{}} of each participant.", f:"achievements", ko:"우리는 각 참가자의 예술적 성취를 축하한다." }] },
  { word:"advancement", exams:["공무원"], pron:"어드밴스먼트", pos:"n", level:"B2", meanings:["발전","진보","승진"], syn:["progress","development","growth"], ex:[{ s:"Rapid {{}} in AI is reshaping work.", f:"advancements", ko:"AI의 급속한 발전이 일을 재편하고 있다." }] },
  { word:"availability", exams:["공무원"], pron:"어베일러빌리티", pos:"n", level:"B2", meanings:["이용 가능성","가용성"], syn:["accessibility","obtainability","readiness"], ex:[{ s:"There is increased {{}} of AI-skilled workers.", f:"availability", ko:"AI 숙련 인력의 가용성이 높아졌다." }] },
  { word:"appealing", exams:["공무원"], pron:"어필링", pos:"adj", level:"B2", meanings:["매력적인","호소력 있는"], syn:["attractive","tempting","engaging"], ant:["unappealing"], ex:[{ s:"The idea is {{}} for several reasons.", f:"appealing", ko:"그 생각은 여러 이유로 매력적이다." }] },
  { word:"ambulance", exams:["공무원"], pron:"앰뷸런스", pos:"n", level:"B1", meanings:["구급차"], ex:[{ s:"The {{}} arrived within a few minutes.", f:"ambulance", ko:"구급차가 몇 분 안에 도착했다." }] },
  { word:"agency", exams:["공무원"], pron:"에이전시", pos:"n", level:"B1", meanings:["기관","대행사"], syn:["bureau","organization","office"], ex:[{ s:"Check with your local waste management {{}}.", f:"agency", ko:"지역 폐기물 관리 기관에 확인하세요." }] },
  { word:"authorization", exams:["공무원"], pron:"오써라이제이션", pos:"n", level:"C1", meanings:["허가","승인"], syn:["permission","approval","consent"], ant:["prohibition"], ex:[{ s:"Using the facilities requires proper {{}}.", f:"authorization", ko:"시설을 이용하려면 적절한 허가가 필요하다." }] },
  { word:"automated", exams:["공무원"], pron:"오토메이티드", pos:"adj", level:"B2", meanings:["자동화된"], syn:["automatic","mechanized","computerized"], ant:["manual"], ex:[{ s:"The bot acts as an {{}} agent for users.", f:"automated", ko:"그 봇은 사용자를 위한 자동화된 대리자 역할을 한다." }] },
  { word:"academia", exams:["공무원"], pron:"애커디미아", pos:"n", level:"C1", meanings:["학계","학문의 세계"], ex:[{ s:"The agency works with government, industry, and {{}}.", f:"academia", ko:"그 기관은 정부, 산업계, 학계와 협력한다." }] },
  { word:"accordingly", exams:["공무원"], pron:"어코딩리", pos:"adv", level:"B2", meanings:["그에 따라","그에 맞게"], syn:["correspondingly","consequently","therefore"], ex:[{ s:"If more guests come, we will adjust the budget {{}}.", f:"accordingly", ko:"손님이 더 오면 그에 맞게 예산을 조정할 것이다." }] },
  { word:"amid", exams:["공무원"], pron:"어미드", pos:"phr", level:"C1", meanings:["~의 한가운데에","~하는 와중에"], syn:["in the midst of","amidst","during"] },
  { word:"approve", exams:["공무원"], pron:"어프루브", pos:"v", level:"B1", meanings:["승인하다","찬성하다"], syn:["endorse","ratify","authorize"], ant:["disapprove","reject"], ex:[{ s:"Most residents {{}} of the new recycling rules.", f:"approve", ko:"대부분의 주민은 새 재활용 규칙에 찬성한다." }], gov:{ prep:["of"], usage:"approve of ~ : ~에 찬성하다 (approve ~ : ~을 승인하다)" } },
  { word:"analytical", exams:["공무원"], pron:"애널리티컬", pos:"adj", level:"C1", meanings:["분석적인","분석의"], syn:["logical","rational","systematic"], ex:[{ s:"Good managers need strong {{}} skills.", f:"analytical", ko:"유능한 관리자에게는 뛰어난 분석 능력이 필요하다." }] },
  { word:"attendee", exams:["공무원"], pron:"어텐디", pos:"n", level:"B2", meanings:["참석자","출석자"], ant:["absentee"], ex:[{ s:"We printed enough copies for every {{}} of the seminar.", f:"attendee", ko:"세미나 참석자 모두에게 돌아갈 만큼 사본을 인쇄했다." }] },
  { word:"adulthood", exams:["공무원"], pron:"어덜트후드", pos:"n", level:"B2", meanings:["성인기","성년"], ant:["adolescence"], ex:[{ s:"Some of them are still in early {{}}.", f:"adulthood", ko:"그들 중 일부는 아직 성인기 초반에 있다." }] },
  { word:"authorize", exams:["공무원"], pron:"오서라이즈", pos:"v", level:"B2", meanings:["허가하다","권한을 주다"], syn:["approve","permit","allow"], ant:["prohibit"], ex:[{ s:"Only the manager can {{}} this payment.", f:"authorize", ko:"관리자만 이 지불을 허가할 수 있다." }] },
  /* ── a ─────────────────────────────────────── */
  { word:"a host of", pron:"어 호스트 오브", pos:"phr", level:"B2", meanings:["다수의","많은"],
    syn:["many","numerous","plenty of"], ant:["a few"] },

  { word:"abandon", exams:["공무원"], pron:"어밴던", pos:"v", level:"B1", meanings:["버리다","포기하다"],
    syn:["desert","forsake","relinquish"], ant:["keep"],
    ex:[{ s:"The crew had to {{}} the sinking ship.", f:"abandon", ko:"승무원들은 가라앉는 배를 버려야 했다." }] },

  { word:"abatement", pron:"어베이트먼트", pos:"n", level:"C1", meanings:["감소","완화"],
    syn:["reduction","decrease","decline"], ant:["increase"],
    ex:[{ s:"There has been no {{}} in the noise from the site.", f:"abatement", ko:"현장의 소음은 조금도 줄지 않았다." }] },

  { word:"abbreviation", pron:"어브리비에이션", pos:"n", level:"B2", meanings:["축약형","약어"],
    syn:["shortening","acronym","contraction"], ant:["expansion"],
    ex:[{ s:"\"Dr.\" is an {{}} of \"Doctor.\"", f:"abbreviation", ko:"'Dr.'은 'Doctor'의 약어이다." }] },

  { word:"abnormal", pron:"앱노멀", pos:"adj", level:"B2", meanings:["비정상적인","이상한"],
    syn:["unusual","atypical","irregular"], ant:["normal"],
    ex:[{ s:"The test revealed an {{}} level of iron in his blood.", f:"abnormal", ko:"검사에서 그의 혈액 내 철분이 비정상적인 수치로 나타났다." }] },

  { word:"abolish", pron:"어발리쉬", pos:"v", level:"B2", meanings:["폐지하다","철폐하다"],
    syn:["eliminate","repeal","annul"], ant:["establish"],
    ex:[{ s:"The country voted to {{}} the death penalty.", f:"abolish", ko:"그 나라는 사형제를 폐지하기로 표결했다." }] },

  { word:"abolition", pron:"애벌리션", pos:"n", level:"C1", meanings:["폐지","철폐"],
    syn:["elimination","repeal","cancellation"], ant:["establishment"],
    ex:[{ s:"She devoted her life to the {{}} of slavery.", f:"abolition", ko:"그녀는 노예제 폐지에 일생을 바쳤다." }] },

  { word:"abominate", pron:"어바미네이트", pos:"v", level:"C2", meanings:["몹시 싫어하다","혐오하다"],
    syn:["detest","loathe","abhor"], ant:["adore"],
    ex:[{ s:"He came to {{}} every form of cruelty.", f:"abominate", ko:"그는 모든 형태의 잔혹함을 몹시 싫어하게 되었다." }] },

  { word:"aboriginal", pron:"애버리지널", pos:"adj", level:"C1", meanings:["원주민의","토착의"],
    syn:["indigenous","native","original"], ant:["foreign"],
    ex:[{ s:"The museum preserves {{}} art from the region.", f:"aboriginal", ko:"그 박물관은 그 지역의 토착 미술을 보존한다." }] },

  { word:"abortion", pron:"어보션", pos:"n", level:"B2", meanings:["낙태","유산"],
    syn:["termination","miscarriage","ending"], ant:["birth"],
    ex:[{ s:"The law on {{}} remains highly controversial.", f:"abortion", ko:"낙태에 관한 법은 여전히 대단히 논쟁적이다." }] },

  { word:"abound", pron:"어바운드", pos:"v", level:"C1", meanings:["풍부하다","많이 있다"],
    syn:["teem","proliferate","swarm"], ant:["lack"],
    ex:[{ s:"Rumors {{}} whenever the company stays silent.", f:"abound", ko:"회사가 침묵할 때마다 소문이 무성하다." }] },

  { word:"above all", pron:"어버브 올", pos:"phr", level:"B1", meanings:["무엇보다도","특히"],
    syn:["especially","primarily","most importantly"] },

  { word:"abrupt", pron:"어브럽트", pos:"adj", level:"B2", meanings:["갑작스러운","뜻밖의"],
    syn:["sudden","unexpected","hasty"], ant:["gradual"],
    ex:[{ s:"The meeting came to an {{}} end.", f:"abrupt", ko:"회의는 갑작스럽게 끝났다." }] },

  { word:"abruptly", pron:"어브럽틀리", pos:"adv", level:"B2", meanings:["갑자기","불쑥"],
    syn:["suddenly","unexpectedly","sharply"], ant:["gradually"],
    ex:[{ s:"The music stopped {{}} in the middle of the song.", f:"abruptly", ko:"음악이 노래 중간에 갑자기 멈췄다." }] },

  /* 반의어를 present 에서 in attendance 로 바꿨다. present 가 P 세트 챕터 12
     표제어(제시하다, 주다 · v)로 올라가면서 이 자리의 뜻풀이가 '제시하다, 주다'
     로 바뀌어 버린다 — 결석한의 반의어로는 말이 안 된다. 사전에만 있던 동안에도
     '제시하다; 현재의' 로 떠서 이미 어긋나 있던 자리다. */
  { word:"absent", pron:"앱센트", pos:"adj", level:"B1", meanings:["결석한","부재한"],
    syn:["away","missing","gone"], ant:["in attendance"],
    ex:[{ s:"Three students were {{}} from class today.", f:"absent", ko:"오늘 세 명의 학생이 수업에 결석했다." }],
    gov:{ prep:["from"], pat:"absent {{}} class", usage:"absent from ~ : ~에 결석한" } },

  { word:"absentee", pron:"앱센티", pos:"n", level:"C1", meanings:["결석자","부재자"],
    syn:["truant","no-show","nonattendee"], ant:["attendee"],
    ex:[{ s:"The teacher recorded the name of each {{}}.", f:"absentee", ko:"교사는 결석자 각각의 이름을 기록했다." }] },

  { word:"absent-minded", pron:"앱센트 마인디드", pos:"adj", level:"C1", meanings:["건망증이 심한","넋이 나간"],
    syn:["forgetful","inattentive","distracted"], ant:["attentive"],
    ex:[{ s:"My {{}} uncle left his keys in the fridge.", f:"absent-minded", ko:"건망증이 심한 삼촌은 열쇠를 냉장고에 두었다." }] },

  { word:"absolute", pron:"앱설루트", pos:"adj", level:"B2", meanings:["완전한","절대적인"],
    syn:["complete","total","utter"], ant:["relative"],
    ex:[{ s:"The king once held {{}} power over his subjects.", f:"absolute", ko:"그 왕은 한때 백성에 대해 절대적인 권력을 쥐고 있었다." }] },

  { word:"absolutely", pron:"앱설루틀리", pos:"adv", level:"B2", meanings:["절대적으로","전적으로"],
    syn:["completely","totally","utterly"], ant:["partially"],
    ex:[{ s:"You are {{}} right about the deadline.", f:"absolutely", ko:"마감일에 대해 네가 전적으로 옳다." }] },

  { word:"absorb", exams:["공무원"], pron:"업소브", pos:"v", level:"B1", meanings:["흡수하다","받아들이다"],
    syn:["soak up","take in","assimilate"], ant:["emit"],
    ex:[{ s:"Plants {{}} carbon dioxide from the air.", f:"absorb", ko:"식물은 공기에서 이산화탄소를 흡수한다." }] },

  { word:"absorbed", pron:"업소브드", pos:"adj", level:"B2", meanings:["열중한","몰두한"],
    syn:["engrossed","immersed","preoccupied"], ant:["distracted"],
    ex:[{ s:"She was so {{}} in her book that she missed her stop.", f:"absorbed", ko:"그녀는 책에 너무 몰두해서 내릴 정류장을 놓쳤다." }],
    gov:{ prep:["in","by","into"], pat:"absorbed {{}} her work", usage:"be absorbed in ~ : ~에 몰두하다" } },

  { word:"abstain from ~ing", pron:"업스테인 프럼", pos:"phr", level:"C1", meanings:["~을 삼가다","~을 그만두다"],
    syn:["refrain from","avoid","give up"], ant:["indulge in"] },

  { word:"abstract", exams:["공무원"], pron:"앱스트랙트", pos:"adj", level:"B2", meanings:["추상적인","관념적인"],
    syn:["theoretical","conceptual","intangible"], ant:["concrete"],
    ex:[{ s:"Children struggle with {{}} ideas like justice.", f:"abstract", ko:"아이들은 정의처럼 추상적인 개념을 어려워한다." }] },

  { word:"absurd", pron:"업서드", pos:"adj", level:"B2", meanings:["불합리한","어리석은"],
    syn:["ridiculous","ludicrous","preposterous"], ant:["sensible"],
    ex:[{ s:"It seems {{}} to blame the weather for the loss.", f:"absurd", ko:"패배를 날씨 탓으로 돌리는 것은 어리석어 보인다." }] },

  { word:"abundance", pron:"어번던스", pos:"n", level:"B2", meanings:["풍부","풍요"],
    syn:["plenty","profusion","surplus"], ant:["scarcity"],
    ex:[{ s:"The valley is known for an {{}} of wildflowers.", f:"abundance", ko:"그 계곡은 야생화가 풍부한 것으로 유명하다." }],
    gov:{ prep:["of"], pat:"an abundance {{}} evidence", usage:"an abundance of ~ : 풍부한 ~" } },

  { word:"abundant", exams:["공무원"], pron:"어번던트", pos:"adj", level:"B2", meanings:["풍부한","많은"],
    syn:["plentiful","ample","copious"], ant:["scarce"],
    ex:[{ s:"Rainfall is {{}} in this region all year.", f:"abundant", ko:"이 지역은 일 년 내내 강우가 풍부하다." }] },

  { word:"abuse", pron:"어뷰스", pos:"n", level:"B2", meanings:["학대","남용"],
    syn:["mistreatment","misuse","maltreatment"], ant:["care"],
    ex:[{ s:"The report exposed the {{}} of public funds.", f:"abuse", ko:"그 보고서는 공적 자금의 남용을 폭로했다." }] },

  { word:"accede", pron:"억시드", pos:"v", level:"C2", meanings:["동의하다","응하다"],
    syn:["consent","assent","agree"], ant:["refuse"],
    gov:{ prep:["to"], pat:"accede {{}} their demands", usage:"accede to ~ : ~에 응하다" } },

  { word:"accelerate", exams:["공무원"], pron:"악셀러레이트", pos:"v", level:"B2", meanings:["가속화하다","빨라지다"],
    syn:["speed up","hasten","quicken"], ant:["decelerate"],
    ex:[{ s:"Warm water can {{}} the melting of the ice.", f:"accelerate", ko:"따뜻한 물은 얼음이 녹는 것을 가속화할 수 있다." }] },

  { word:"accentuate", pron:"악센추에이트", pos:"v", level:"C1", meanings:["강조하다","두드러지게 하다"],
    syn:["emphasize","highlight","underline"], ant:["downplay"],
    ex:[{ s:"The lighting was chosen to {{}} the sculpture's shape.", f:"accentuate", ko:"조명은 조각의 형태를 두드러지게 하도록 선택되었다." }] },

  { word:"accept", pron:"억셉트", pos:"v", level:"B1", meanings:["받아들이다","수락하다"],
    syn:["receive","take","agree to"], ant:["reject"],
    ex:[{ s:"She decided to {{}} the offer from the university.", f:"accept", ko:"그녀는 그 대학의 제안을 받아들이기로 했다." }] },

  { word:"acceptance", pron:"억셉턴스", pos:"n", level:"B2", meanings:["수락","수용"],
    syn:["approval","agreement","consent"], ant:["rejection"],
    ex:[{ s:"His {{}} of the award surprised everyone.", f:"acceptance", ko:"그가 그 상을 수락한 것은 모두를 놀라게 했다." }] },

  { word:"access", exams:["공무원"], pron:"액세스", pos:"n", level:"B1", meanings:["접근","이용"],
    syn:["entry","admission","entrance"], ant:["exclusion"],
    ex:[{ s:"Students have free {{}} to the online library.", f:"access", ko:"학생들은 온라인 도서관을 무료로 이용할 수 있다." }],
    gov:{ prep:["to","for"], pat:"access {{}} clean water", usage:"access to ~ : ~에 대한 접근" } },

  { word:"accessible", exams:["공무원"], pron:"억세서블", pos:"adj", level:"B2", meanings:["접근할 수 있는","이용 가능한"],
    syn:["reachable","available","obtainable"], ant:["inaccessible"],
    ex:[{ s:"The trail is easily {{}} by bus.", f:"accessible", ko:"그 산길은 버스로 쉽게 접근할 수 있다." }] },

  { word:"accidental", pron:"액시덴틀", pos:"adj", level:"B2", meanings:["우연한","고의가 아닌"],
    syn:["unintentional","inadvertent","chance"], ant:["deliberate"],
    ex:[{ s:"The discovery of penicillin was largely {{}}.", f:"accidental", ko:"페니실린의 발견은 대체로 우연이었다." }] },


  { word:"acclaim", pron:"어클레임", pos:"n", level:"C1", meanings:["환호","찬사"],
    syn:["praise","applause","commendation"], ant:["criticism"],
    ex:[{ s:"Her first novel won critical {{}}.", f:"acclaim", ko:"그녀의 첫 소설은 비평계의 찬사를 받았다." }],
    gov:{ usage:"win acclaim : 찬사를 받다" } },

  { word:"acclimate", pron:"애클러메이트", pos:"v", level:"C1", meanings:["적응하다","순응시키다"],
    syn:["adapt","adjust","acclimatize"], ant:["resist"],
    ex:[{ s:"Climbers need a week to {{}} to the thin air.", f:"acclimate", ko:"등반가들은 희박한 공기에 적응하는 데 일주일이 필요하다." }] },

  { word:"accommodate", pron:"어카머데이트", pos:"v", level:"B2", meanings:["수용하다","숙박시키다"],
    syn:["house","lodge","hold"], ant:["exclude"],
    ex:[{ s:"The new hall can {{}} up to 500 guests.", f:"accommodate", ko:"새 강당은 최대 500명의 손님을 수용할 수 있다." }] },

  { word:"accommodation", exams:["공무원"], pron:"어카머데이션", pos:"n", level:"B2", meanings:["숙박 시설","편의"],
    syn:["lodging","housing","quarters"],
    ex:[{ s:"The fee includes meals and {{}}.", f:"accommodation", ko:"그 요금에는 식사와 숙박이 포함된다." }] },

  { word:"accompany", pron:"어컴퍼니", pos:"v", level:"B2", meanings:["동행하다","동반되다"],
    syn:["escort","attend","go with"], ant:["leave"],
    ex:[{ s:"Heavy rain will {{}} the strong winds tonight.", f:"accompany", ko:"오늘 밤 강한 바람에 폭우가 동반될 것이다." }] },

  { word:"accomplish", exams:["공무원"], pron:"어컴플리쉬", pos:"v", level:"B2", meanings:["성취하다","이루다"],
    syn:["achieve","attain","fulfill"], ant:["fail"],
    ex:[{ s:"The team managed to {{}} the goal ahead of schedule.", f:"accomplish", ko:"그 팀은 예정보다 앞서 목표를 이루어 냈다." }] },

  /* profile 을 user identity 로 바꿨다. profile 이 P 세트 챕터 15 표제어
     (약력, 인물 소개 · n)로 올라가면 '계좌, 계정' 의 유의어가 '약력' 이 되어
     버린다. 이 자리가 노린 것은 '쓰는 이의 계정' 쪽 뜻이었다. 사전값도
     '프로필, 약력' 로 외래어가 섞여 있었다. */
  { word:"account", pron:"어카운트", pos:"n", level:"B1", meanings:["계좌","계정"],
    syn:["record","ledger","user identity"],
    ex:[{ s:"He opened a savings {{}} at the local bank.", f:"account", ko:"그는 동네 은행에 저축 계좌를 열었다." }] },

  { word:"account for", pron:"어카운트 포", pos:"phr", level:"B2", meanings:["설명하다","차지하다"],
    syn:["explain","justify","make up"] },

  { word:"accountant", pron:"어카운턴트", pos:"n", level:"B2", meanings:["회계사"],
    syn:["auditor","bookkeeper","comptroller"],
    ex:[{ s:"An {{}} reviewed the company's yearly records.", f:"accountant", ko:"회계사가 그 회사의 연간 기록을 검토했다." }] },

  { word:"accumulate", pron:"어큐뮬레이트", pos:"v", level:"B2", meanings:["축적하다","모으다"],
    syn:["amass","gather","stockpile"], ant:["disperse"],
    ex:[{ s:"Dust began to {{}} on the unused shelves.", f:"accumulate", ko:"쓰지 않는 선반에 먼지가 쌓이기 시작했다." }] },

  { word:"accumulation", pron:"어큐뮬레이션", pos:"n", level:"C1", meanings:["축적","누적"],
    syn:["buildup","collection","hoard"], ant:["dispersal"],
    ex:[{ s:"The {{}} of snow closed the mountain road.", f:"accumulation", ko:"눈이 쌓여 산길이 폐쇄되었다." }] },

  { word:"accurate", exams:["공무원"], pron:"애큐릿", pos:"adj", level:"B1", meanings:["정확한","틀림없는"],
    syn:["precise","exact","correct"], ant:["inaccurate"],
    ex:[{ s:"We need an {{}} count before we order.", f:"accurate", ko:"주문하기 전에 정확한 수량이 필요하다." }] },

  { word:"achieve", exams:["공무원"], pron:"어치브", pos:"v", level:"B1", meanings:["성취하다","달성하다"],
    syn:["attain","accomplish","reach"], ant:["fail"],
    ex:[{ s:"She worked hard to {{}} her personal best.", f:"achieve", ko:"그녀는 개인 최고 기록을 달성하려고 열심히 노력했다." }] },

  /* ★ syn 의 "solvent" 를 "dissolving agent" 로 바꿨다. 원본(교재) 이 solvent 를
     '용액' 으로 적어 두었지만 그것은 solution 의 뜻이다. solvent 의 실제 뜻은
     형용사 '지급 능력이 있는' 이어서 S 세트에서 그렇게 세웠다 — 참조 bankrupt·
     insolvent 도 그쪽이다. 여기만 화학 쪽 표현으로 갈았다. */
  { word:"acid", pron:"애시드", pos:"n", level:"B2", meanings:["산","산성 물질"],
    syn:["corrosive","dissolving agent","etchant"], ant:["base"],
    ex:[{ s:"Rainwater mixed with pollution becomes a weak {{}}.", f:"acid", ko:"오염 물질과 섞인 빗물은 약한 산이 된다." }] },

  { word:"acknowledge", pron:"어크널리지", pos:"v", level:"B2", meanings:["인정하다","승인하다"],
    syn:["admit","concede","recognize"], ant:["deny"],
    ex:[{ s:"The minister refused to {{}} any mistake.", f:"acknowledge", ko:"그 장관은 어떤 잘못도 인정하기를 거부했다." }] },

  { word:"acoustic", pron:"어쿠스틱", pos:"adj", level:"C1", meanings:["음향의","청각의"],
    syn:["sonic","auditory","aural"],
    ex:[{ s:"The hall was praised for its {{}} design.", f:"acoustic", ko:"그 강당은 음향 설계로 호평받았다." }] },

  { word:"acquaintance", pron:"어퀘인턴스", pos:"n", level:"B2", meanings:["아는 사람","지인"],
    syn:["associate","contact","colleague"], ant:["stranger"],
    ex:[{ s:"He is an {{}} rather than a close friend.", f:"acquaintance", ko:"그는 가까운 친구라기보다 아는 사람이다." }] },

  { word:"acquire", exams:["공무원"], pron:"어콰이어", pos:"v", level:"B2", meanings:["얻다","습득하다"],
    syn:["obtain","gain","procure"], ant:["lose"],
    ex:[{ s:"Children {{}} language faster than adults do.", f:"acquire", ko:"아이들은 성인보다 언어를 더 빨리 습득한다." }] },

  { word:"acquisition", pron:"애퀴지션", pos:"n", level:"C1", meanings:["습득","취득"],
    syn:["attainment","procurement","purchase"], ant:["loss"],
    ex:[{ s:"Language {{}} begins long before school.", f:"acquisition", ko:"언어 습득은 학교에 들어가기 훨씬 전에 시작된다." }] },

  { word:"acquit", pron:"어퀴트", pos:"v", level:"C2", meanings:["무죄를 선고하다","혐의를 벗기다"],
    syn:["absolve","exonerate","clear"], ant:["convict"],
    ex:[{ s:"The jury voted to {{}} the defendant.", f:"acquit", ko:"배심원단은 피고에게 무죄를 선고하기로 표결했다." }] },

  { word:"acreage", pron:"에이커리지", pos:"n", level:"C1", meanings:["토지 면적","경작지"],
    syn:["area","expanse","land"],
    ex:[{ s:"The farm doubled its {{}} last spring.", f:"acreage", ko:"그 농장은 지난 봄에 경작 면적을 두 배로 늘렸다." }] },

  { word:"act", pron:"액트", pos:"n", level:"B2", meanings:["법률","법령"],
    syn:["statute","law","legislation"],
    ex:[{ s:"Congress passed the Clean Air {{}} that year.", f:"Act", ko:"의회는 그해 대기 정화법을 통과시켰다." }] },

  { word:"act on", pron:"액트 온", pos:"phr", level:"B2", meanings:["~에 따라 행동하다","조치하다"],
    syn:["follow","implement","carry out"], ant:["ignore"] },

  { word:"activate", pron:"액티베이트", pos:"v", level:"B2", meanings:["작동시키다","활성화시키다"],
    syn:["trigger","start","switch on"], ant:["deactivate"],
    ex:[{ s:"Smoke will {{}} the alarm within seconds.", f:"activate", ko:"연기는 몇 초 안에 경보를 작동시킬 것이다." }] },

  { word:"active", pron:"액티브", pos:"adj", level:"B1", meanings:["활동적인","적극적인"],
    syn:["energetic","lively","dynamic"], ant:["passive"],
    ex:[{ s:"My grandmother stays {{}} by gardening daily.", f:"active", ko:"할머니는 매일 정원을 돌보며 활동적으로 지낸다." }] },

  { word:"actively", pron:"액티블리", pos:"adv", level:"B2", meanings:["적극적으로","활발히"],
    syn:["energetically","vigorously","eagerly"], ant:["passively"],
    ex:[{ s:"The school {{}} encourages students to volunteer.", f:"actively", ko:"그 학교는 학생들이 자원봉사하도록 적극적으로 장려한다." }] },

  { word:"actuality", pron:"액추앨러티", pos:"n", level:"C1", meanings:["현실","실재"],
    syn:["reality","fact","truth"], ant:["fantasy"],
    ex:[{ s:"In {{}}, the process takes far longer than promised.", f:"actuality", ko:"실제로 그 절차는 약속된 것보다 훨씬 오래 걸린다." }] },

  { word:"acupuncture", pron:"애큐펑처", pos:"n", level:"C1", meanings:["침술","침 요법"],
    syn:["needling","acupressure","therapy"],
    ex:[{ s:"She tried {{}} to relieve her back pain.", f:"acupuncture", ko:"그녀는 허리 통증을 덜기 위해 침술을 시도했다." }] },

  { word:"acute", pron:"어큐트", pos:"adj", level:"C1", meanings:["심한","격렬한"],
    syn:["severe","intense","sharp"], ant:["mild"],
    ex:[{ s:"The region faces an {{}} shortage of drinking water.", f:"acute", ko:"그 지역은 심각한 식수 부족에 직면해 있다." }] },

  { word:"adapt", exams:["공무원"], pron:"어댑트", pos:"v", level:"B2", meanings:["적응시키다","각색하다"],
    syn:["adjust","modify","alter"], ant:["preserve"],
    ex:[{ s:"Animals must {{}} quickly to a changing climate.", f:"adapt", ko:"동물들은 변하는 기후에 빠르게 적응해야 한다." }] },

  { word:"adaptability", pron:"어댑터빌러티", pos:"n", level:"C1", meanings:["적응성","융통성"],
    syn:["flexibility","versatility","resilience"], ant:["rigidity"],
    ex:[{ s:"Employers value {{}} more than experience alone.", f:"adaptability", ko:"고용주들은 경력만보다 적응력을 더 중시한다." }] },

  { word:"adaptation", exams:["공무원"], pron:"애댑테이션", pos:"n", level:"B2", meanings:["각색","적응"],
    syn:["adjustment","modification","version"],
    ex:[{ s:"The film is a loose {{}} of a classic novel.", f:"adaptation", ko:"그 영화는 고전 소설을 자유롭게 각색한 것이다." }] },

  { word:"adaptive", pron:"어댑티브", pos:"adj", level:"C1", meanings:["적응적인","순응성의"],
    syn:["flexible","adjustable","responsive"], ant:["rigid"],
    ex:[{ s:"Thick fur is an {{}} trait in cold climates.", f:"adaptive", ko:"두꺼운 털은 추운 기후에서 적응적인 형질이다." }] },

  { word:"add up to", pron:"애드 업 투", pos:"phr", level:"B2", meanings:["합계 ~이 되다","~을 의미하다"],
    syn:["total","amount to","come to"] },

  { word:"addict", pron:"애딕트", pos:"n", level:"B2", meanings:["중독자"],
    syn:["abuser","user","junkie"],
    ex:[{ s:"The clinic treats every {{}} without charge.", f:"addict", ko:"그 병원은 모든 중독자를 무료로 치료한다." }] },

  { word:"additional", exams:["공무원"], pron:"어디셔널", pos:"adj", level:"B1", meanings:["추가의","부가적인"],
    syn:["extra","supplementary","further"],
    ex:[{ s:"There is an {{}} charge for late delivery.", f:"additional", ko:"늦은 배송에는 추가 요금이 있다." }] },


  { word:"additionally", pron:"어디셔널리", pos:"adv", level:"B2", meanings:["게다가","추가적으로"],
    syn:["moreover","furthermore","besides"],
    ex:[{ s:"{{}}, the report ignores rural households.", f:"Additionally", ko:"게다가 그 보고서는 농촌 가구를 무시한다." }] },

  { word:"additive", pron:"애디티브", pos:"n", level:"C1", meanings:["첨가물","첨가제"],
    syn:["preservative","supplement","agent"],
    ex:[{ s:"The label lists every {{}} used in the sauce.", f:"additive", ko:"라벨에는 그 소스에 쓰인 모든 첨가물이 적혀 있다." }] },

  { word:"address", exams:["공무원"], pron:"어드레스", pos:"v", level:"B2", meanings:["다루다","고심하다"],
    syn:["tackle","handle","confront"], ant:["ignore"],
    ex:[{ s:"The council must {{}} the housing shortage soon.", f:"address", ko:"의회는 주택 부족 문제를 곧 다루어야 한다." }] },

  { word:"adept", pron:"어뎁트", pos:"adj", level:"C1", meanings:["능숙한","숙련된"],
    syn:["skilled","proficient","expert"], ant:["clumsy"],
    ex:[{ s:"She is {{}} at solving problems under pressure.", f:"adept", ko:"그녀는 압박 속에서 문제를 해결하는 데 능숙하다." }] },

  { word:"adequate", exams:["공무원"], pron:"애디퀴트", pos:"adj", level:"B2", meanings:["적합한","충분한"],
    syn:["sufficient","satisfactory","ample"], ant:["insufficient"],
    ex:[{ s:"The shelter offers {{}} protection from the cold.", f:"adequate", ko:"그 대피소는 추위로부터 충분한 보호를 제공한다." }] },

  { word:"adhere", pron:"애드히어", pos:"v", level:"C1", meanings:["고수하다","들러붙다"],
    syn:["comply","conform","abide"], ant:["deviate"],
    gov:{ prep:["to"], pat:"adhere {{}} the rules", usage:"adhere to ~ : ~을 준수하다" } },

  { word:"adjacent", pron:"어제이슨트", pos:"adj", level:"C1", meanings:["인접한","가까운"],
    syn:["neighboring","adjoining","nearby"], ant:["distant"],
    ex:[{ s:"Our office is {{}} to the train station.", f:"adjacent", ko:"우리 사무실은 기차역에 인접해 있다." }],
    gov:{ prep:["to"], pat:"adjacent {{}} the park", usage:"adjacent to ~ : ~에 인접한" } },

  { word:"adjoin", pron:"어조인", pos:"v", level:"C1", meanings:["붙어 있다","인접하다"],
    syn:["border","abut","touch"], ant:["separate"],
    ex:[{ s:"The garden {{}} an old stone wall.", f:"adjoins", ko:"그 정원은 오래된 돌담과 붙어 있다." }] },

  { word:"adjust", exams:["공무원"], pron:"어저스트", pos:"v", level:"B1", meanings:["조절하다","적응하다"],
    syn:["modify","adapt","regulate"],
    ex:[{ s:"Please {{}} the seat before you start driving.", f:"adjust", ko:"운전을 시작하기 전에 좌석을 조절하세요." }] },

  { word:"adjust to", pron:"어저스트 투", pos:"phr", level:"B2", meanings:["~에 적응하다"],
    syn:["get used to","adapt to","acclimate to"] },

  { word:"adjustment", pron:"어저스트먼트", pos:"n", level:"B2", meanings:["조정","적응"],
    syn:["modification","alteration","tweak"],
    ex:[{ s:"A small {{}} to the schedule solved the conflict.", f:"adjustment", ko:"일정을 약간 조정하니 충돌이 해결되었다." }] },

  { word:"administer", exams:["공무원"], pron:"어드미니스터", pos:"v", level:"C1", meanings:["관리하다","집행하다"],
    syn:["manage","oversee","direct"], ant:["neglect"],
    ex:[{ s:"A trustee will {{}} the fund until 2030.", f:"administer", ko:"수탁자가 2030년까지 그 기금을 관리할 것이다." }] },

  { word:"administration", pron:"어드미니스트레이션", pos:"n", level:"B2", meanings:["행정","경영"],
    syn:["management","governance","direction"],
    ex:[{ s:"He works in the {{}} of a public hospital.", f:"administration", ko:"그는 공공 병원의 행정 부서에서 일한다." }] },

  { word:"administrative", pron:"어드미니스트러티브", pos:"adj", level:"B2", meanings:["관리의","행정의"],
    syn:["managerial","executive","organizational"],
    ex:[{ s:"Most of her day is spent on {{}} tasks.", f:"administrative", ko:"그녀의 하루 대부분은 행정 업무에 쓰인다." }] },

  { word:"admirable", pron:"애드머러블", pos:"adj", level:"B2", meanings:["감탄스러운","훌륭한"],
    syn:["praiseworthy","commendable","laudable"], ant:["deplorable"],
    ex:[{ s:"His honesty under pressure was {{}}.", f:"admirable", ko:"압박 속에서도 정직했던 그의 모습은 훌륭했다." }] },

  { word:"admiral", pron:"애드머럴", pos:"n", level:"C1", meanings:["해군 대장","제독"],
    syn:["commander","flag officer","naval chief"],
    ex:[{ s:"The {{}} ordered the fleet to withdraw.", f:"admiral", ko:"제독은 함대에 철수를 명령했다." }] },

  { word:"admire", exams:["공무원"], pron:"애드마이어", pos:"v", level:"B1", meanings:["존경하다","감탄하다"],
    syn:["respect","esteem","look up to"], ant:["despise"],
    ex:[{ s:"I {{}} her patience with difficult customers.", f:"admire", ko:"나는 까다로운 손님을 대하는 그녀의 인내심에 감탄한다." }] },

  { word:"admission", exams:["공무원"], pron:"애드미션", pos:"n", level:"B2", meanings:["입학 허가","입장"],
    syn:["entry","entrance","access"], ant:["refusal"],
    ex:[{ s:"{{}} to the museum is free on Sundays.", f:"Admission", ko:"일요일에는 박물관 입장이 무료이다." }] },

  { word:"admit", pron:"애드밋", pos:"v", level:"B1", meanings:["인정하다","시인하다"],
    syn:["confess","concede","acknowledge"], ant:["deny"],
    ex:[{ s:"He would not {{}} that he had been wrong.", f:"admit", ko:"그는 자신이 틀렸다는 것을 인정하려 하지 않았다." }] },

  { word:"adolescence", pron:"애덜레슨스", pos:"n", level:"B2", meanings:["사춘기","청소년기"],
    syn:["youth","teens","puberty"], ant:["adulthood"],
    ex:[{ s:"Sleep patterns change greatly during {{}}.", f:"adolescence", ko:"수면 양상은 청소년기에 크게 변한다." }] },

  { word:"adopt", pron:"어답트", pos:"v", level:"B2", meanings:["채택하다","입양하다"],
    syn:["embrace","take up","assume"], ant:["reject"],
    ex:[{ s:"The city plans to {{}} a stricter recycling rule.", f:"adopt", ko:"그 도시는 더 엄격한 재활용 규칙을 채택할 계획이다." }] },

  { word:"adoption", pron:"어답션", pos:"n", level:"B2", meanings:["채택","입양"],
    syn:["acceptance","embrace","selection"], ant:["rejection"],
    ex:[{ s:"The {{}} of electric buses cut city emissions.", f:"adoption", ko:"전기 버스의 채택은 도시 배출량을 줄였다." }] },

  { word:"adorable", pron:"어도러블", pos:"adj", level:"B2", meanings:["귀여운","사랑스러운"],
    syn:["charming","lovable","delightful"], ant:["repulsive"],
    ex:[{ s:"The puppies were absolutely {{}}.", f:"adorable", ko:"그 강아지들은 정말 사랑스러웠다." }] },

  { word:"adorn", pron:"어돈", pos:"v", level:"C1", meanings:["꾸미다","장식하다"],
    syn:["decorate","embellish","deck out"], ant:["strip"],
    ex:[{ s:"Fresh flowers {{}} every table in the hall.", f:"adorn", ko:"생화가 강당의 모든 탁자를 장식한다." }] },

  { word:"advance", exams:["공무원"], pron:"어드밴스", pos:"v", level:"B2", meanings:["전진하다","발전시키다"],
    syn:["progress","proceed","further"], ant:["retreat"],
    ex:[{ s:"New tools helped {{}} our understanding of the brain.", f:"advance", ko:"새로운 도구는 뇌에 대한 우리의 이해를 발전시키는 데 도움이 되었다." }] },

  { word:"advent", exams:["공무원"], pron:"애드벤트", pos:"n", level:"C1", meanings:["출현","도래"],
    syn:["arrival","emergence","onset"], ant:["departure"],
    ex:[{ s:"The {{}} of the smartphone changed daily life.", f:"advent", ko:"스마트폰의 출현은 일상을 바꿨다." }] },

  { word:"adventure", pron:"어드벤처", pos:"n", level:"B1", meanings:["모험"],
    /* exploit 은 쓰지 않는다 — E 세트 표제어가 동사("착취하다, 부당하게 이용하다")
       라서 명사 표제어 adventure 의 유의어 자리에 동사 뜻이 뜬다. */
    syn:["risky undertaking","escapade","quest"], ant:["routine"],
    ex:[{ s:"Their trip across the desert became a real {{}}.", f:"adventure", ko:"사막을 횡단한 그들의 여행은 진짜 모험이 되었다." }] },

  { word:"adversary", pron:"애드버서리", pos:"n", level:"C1", meanings:["상대방","적"],
    syn:["opponent","rival","enemy"], ant:["ally"],
    ex:[{ s:"She faced a tough {{}} in the final round.", f:"adversary", ko:"그녀는 마지막 라운드에서 강한 상대와 맞섰다." }] },

  { word:"adverse", pron:"애드버스", pos:"adj", level:"B2", meanings:["불리한","부정적인"],
    syn:["unfavorable","detrimental","harmful"], ant:["favorable"],
    ex:[{ s:"The drug was withdrawn after {{}} effects appeared.", f:"adverse", ko:"부작용이 나타난 후 그 약은 회수되었다." }],
    gov:{ prep:["to"], pat:"adverse {{}} health", usage:"adverse to ~ : ~에 불리한" } },

  { word:"adversity", pron:"애드버시티", pos:"n", level:"C1", meanings:["역경","불운"],
    syn:["hardship","misfortune","trouble"], ant:["prosperity"],
    ex:[{ s:"He kept his humor even in great {{}}.", f:"adversity", ko:"그는 큰 역경 속에서도 유머를 잃지 않았다." }] },

  { word:"advert", pron:"애드버트", pos:"n", level:"B2", meanings:["광고"],
    syn:["commercial","promotion","notice"],
    ex:[{ s:"A short {{}} played before the video.", f:"advert", ko:"영상 앞에 짧은 광고가 재생되었다." }] },

  { word:"advertise", exams:["공무원"], pron:"애드버타이즈", pos:"v", level:"B1", meanings:["광고하다","선전하다"],
    syn:["promote","publicize","market"], ant:["conceal"],
    ex:[{ s:"They chose to {{}} the concert on the radio.", f:"advertise", ko:"그들은 라디오로 그 공연을 광고하기로 했다." }] },

  { word:"advertisement", pron:"애드버타이즈먼트", pos:"n", level:"B1", meanings:["광고","선전"],
    syn:["commercial","promotion","notice"],
    ex:[{ s:"The {{}} promised results in two weeks.", f:"advertisement", ko:"그 광고는 2주 안에 효과가 있다고 약속했다." }] },

  { word:"advertising", pron:"애드버타이징", pos:"n", level:"B2", meanings:["광고업","광고 활동"],
    syn:["marketing","publicity","promotion"],
    ex:[{ s:"She built a career in digital {{}}.", f:"advertising", ko:"그녀는 디지털 광고 분야에서 경력을 쌓았다." }] },

  { word:"advise", pron:"어드바이즈", pos:"v", level:"B1", meanings:["조언하다","권고하다"],
    syn:["counsel","recommend","suggest"],
    ex:[{ s:"Doctors {{}} patients to walk every day.", f:"advise", ko:"의사들은 환자에게 매일 걷기를 권고한다." }] },

  { word:"advisory", pron:"어드바이저리", pos:"adj", level:"C1", meanings:["자문의","조언의"],
    syn:["consultative","counseling","recommending"],
    ex:[{ s:"He serves on an {{}} board for the ministry.", f:"advisory", ko:"그는 그 부처의 자문 위원회에서 일한다." }] },


  { word:"advocate", exams:["공무원"], pron:"애드버킷", pos:"v", level:"B2", meanings:["지지하다","옹호하다"],
    syn:["support","champion","endorse"], ant:["oppose"],
    ex:[{ s:"Many economists {{}} raising rates gradually.", f:"advocate", ko:"많은 경제학자가 금리를 점진적으로 올리는 것을 지지한다." }] },

  { word:"aerial", pron:"에어리얼", pos:"adj", level:"C1", meanings:["공중의","항공의"],
    syn:["airborne","overhead","elevated"], ant:["ground"],
    ex:[{ s:"An {{}} photograph revealed the buried walls.", f:"aerial", ko:"항공 사진이 묻혀 있던 벽을 드러냈다." }] },

  { word:"aerobic", pron:"에어로빅", pos:"adj", level:"C1", meanings:["유산소의"],
    syn:["cardiovascular","cardio","endurance"], ant:["anaerobic"],
    ex:[{ s:"Swimming is an excellent {{}} exercise.", f:"aerobic", ko:"수영은 훌륭한 유산소 운동이다." }] },

  { word:"aesthetic", exams:["공무원"], pron:"에스세틱", pos:"adj", level:"C1", meanings:["미적인","심미적인"],
    syn:["artistic","tasteful","stylistic"],
    ex:[{ s:"The bridge was praised on {{}} grounds alone.", f:"aesthetic", ko:"그 다리는 미적인 이유만으로 호평받았다." }] },

  { word:"affect", exams:["공무원"], pron:"어펙트", pos:"v", level:"B1", meanings:["영향을 미치다","작용하다"],
    syn:["influence","impact","shape"],
    ex:[{ s:"Lack of sleep can seriously {{}} memory.", f:"affect", ko:"수면 부족은 기억력에 심각한 영향을 미칠 수 있다." }] },

  { word:"affection", pron:"어펙션", pos:"n", level:"B2", meanings:["애정","애착"],
    syn:["fondness","warmth","tenderness"], ant:["dislike"],
    ex:[{ s:"He speaks of his hometown with great {{}}.", f:"affection", ko:"그는 고향을 큰 애정을 담아 이야기한다." }] },

  { word:"affectionate", pron:"어펙셔닛", pos:"adj", level:"B2", meanings:["다정한","애정 어린"],
    syn:["loving","tender","warm"], ant:["cold"],
    ex:[{ s:"She gave her son an {{}} hug at the gate.", f:"affectionate", ko:"그녀는 문 앞에서 아들을 다정하게 안아 주었다." }] },

  { word:"affinity", pron:"어피니티", pos:"n", level:"C1", meanings:["친밀감","관련성"],
    syn:["rapport","kinship","similarity"], ant:["antipathy"],
    ex:[{ s:"He felt an instant {{}} with the coastal village.", f:"affinity", ko:"그는 그 해안 마을에 즉각적인 친밀감을 느꼈다." }],
    gov:{ prep:["for","with","between","to"], pat:"an affinity {{}} old maps", usage:"an affinity for ~ : ~에 대한 애착" } },

  { word:"affirmative", pron:"어퍼머티브", pos:"adj", level:"C1", meanings:["긍정적인","동의하는"],
    syn:["positive","approving","assenting"], ant:["negative"],
    ex:[{ s:"The committee gave an {{}} reply within a day.", f:"affirmative", ko:"위원회는 하루 안에 긍정적인 답을 주었다." }] },

  { word:"affix", pron:"어픽스", pos:"v", level:"C1", meanings:["붙이다","첨부하다"],
    syn:["attach","fasten","append"], ant:["detach"],
    ex:[{ s:"Please {{}} a stamp to the top right corner.", f:"affix", ko:"우표를 오른쪽 위 모서리에 붙여 주세요." }] },

  { word:"afflict", pron:"어플릭트", pos:"v", level:"C1", meanings:["괴롭히다","시달리게 하다"],
    /* ★ syn 의 "torment" 을 "cause suffering to" 로 바꿨다. torment 은 T 세트에서
       명사 '고통, 고뇌' 로 선다 — 참조 다섯 중 agony·anguish·distress 셋이 명사여서
       명사를 골랐고, 동사 쪽을 쓰던 이 자리를 갈았다. */
    syn:["trouble","cause suffering to","plague"], ant:["comfort"],
    ex:[{ s:"Drought continues to {{}} farmers in the south.", f:"afflict", ko:"가뭄이 남부 농민들을 계속 괴롭히고 있다." }] },

  { word:"affluent", pron:"애플루언트", pos:"adj", level:"C1", meanings:["풍족한","부유한"],
    syn:["wealthy","prosperous","well-off"], ant:["poor"],
    ex:[{ s:"The school serves a largely {{}} neighborhood.", f:"affluent", ko:"그 학교는 대체로 부유한 지역을 담당한다." }] },

  { word:"afford", pron:"어포드", pos:"v", level:"B1", meanings:["~할 여유가 있다","감당하다"],
    syn:["manage","bear","sustain"],
    ex:[{ s:"We cannot {{}} to lose another week.", f:"afford", ko:"우리는 또 한 주를 잃을 여유가 없다." }] },

  { word:"affordable", exams:["공무원"], pron:"어포더블", pos:"adj", level:"B2", meanings:["값이 알맞은","감당할 수 있는"],
    syn:["reasonable","inexpensive","economical"], ant:["costly"],
    ex:[{ s:"The city needs more {{}} housing near transit.", f:"affordable", ko:"그 도시는 대중교통 근처에 더 많은 저렴한 주택이 필요하다." }] },

  /* 원본의 "나중에, 그 뒤에"는 afterwards의 뜻이 잘못 들어간 것이라 바로잡았습니다 */
  { word:"afterlife", pron:"애프터라이프", pos:"n", level:"C1", meanings:["사후 세계","저승"],
    syn:["hereafter","next world","eternity"],
    ex:[{ s:"The tomb paintings show beliefs about the {{}}.", f:"afterlife", ko:"그 무덤 벽화는 사후 세계에 대한 믿음을 보여 준다." }] },

  { word:"afterwards", pron:"애프터워즈", pos:"adv", level:"B1", meanings:["나중에","그 뒤에"],
    syn:["later","subsequently","then"], ant:["beforehand"],
    ex:[{ s:"We ate first and walked home {{}}.", f:"afterwards", ko:"우리는 먼저 먹고 그 뒤에 걸어서 집에 갔다." }] },

  { word:"agenda", exams:["공무원"], pron:"어젠다", pos:"n", level:"B2", meanings:["안건","의제"],
    syn:["schedule","program","plan"],
    ex:[{ s:"Climate policy topped the {{}} at the summit.", f:"agenda", ko:"정상회담에서 기후 정책이 의제의 첫 순위였다." }] },

  { word:"agent", pron:"에이전트", pos:"n", level:"B1", meanings:["대리인","중개인"],
    syn:["representative","broker","intermediary"],
    ex:[{ s:"Her {{}} negotiated the contract for her.", f:"agent", ko:"그녀의 대리인이 그녀를 위해 계약을 협상했다." }] },

  { word:"aggravate", pron:"애그러베이트", pos:"v", level:"C1", meanings:["악화시키다","심화시키다"],
    syn:["worsen","exacerbate","intensify"], ant:["alleviate"],
    ex:[{ s:"Running on the injury will only {{}} it.", f:"aggravate", ko:"부상을 안고 달리면 상태를 악화시킬 뿐이다." }] },

  { word:"aggregate", pron:"애그리깃", pos:"adj", level:"C1", meanings:["총계의","종합한"],
    syn:["combined","total","collective"], ant:["individual"],
    ex:[{ s:"The {{}} score decided the championship.", f:"aggregate", ko:"합산 점수가 우승을 결정했다." }] },

  { word:"aggregation", pron:"애그리게이션", pos:"n", level:"C2", meanings:["집합","집단"],
    syn:["collection","cluster","assemblage"], ant:["dispersal"],
    ex:[{ s:"The study tracked the {{}} of birds at dusk.", f:"aggregation", ko:"그 연구는 해질 무렵 새들의 군집을 추적했다." }] },

  { word:"aggression", pron:"어그레션", pos:"n", level:"B2", meanings:["공격성","침략"],
    syn:["hostility","belligerence","assault"], ant:["peace"],
    ex:[{ s:"The film links crowded housing to rising {{}}.", f:"aggression", ko:"그 영화는 밀집 주거를 공격성 증가와 연결한다." }] },

  { word:"aggressive", exams:["공무원"], pron:"어그레시브", pos:"adj", level:"B2", meanings:["공격적인","적극적인"],
    syn:["hostile","combative","forceful"], ant:["passive"],
    ex:[{ s:"The company took an {{}} approach to expansion.", f:"aggressive", ko:"그 회사는 확장에 공격적인 방식을 취했다." }] },

  /* 원본의 "화난"은 뜻이 부족해 보완했습니다 */
  { word:"aggrieved", pron:"어그리브드", pos:"adj", level:"C2", meanings:["억울한","권리를 침해당한"],
    syn:["wronged","resentful","offended"], ant:["satisfied"],
    ex:[{ s:"The {{}} tenants filed a joint complaint.", f:"aggrieved", ko:"억울한 세입자들이 공동으로 진정을 제출했다." }] },

  { word:"agile", pron:"애자일", pos:"adj", level:"C1", meanings:["민첩한","재빠른"],
    syn:["nimble","quick","spry"], ant:["clumsy"],
    ex:[{ s:"Goats are surprisingly {{}} on steep rock.", f:"agile", ko:"산양은 급경사 바위에서 놀랄 만큼 민첩하다." }] },

  { word:"agility", pron:"어질러티", pos:"n", level:"C1", meanings:["민첩성","명민함"],
    syn:["nimbleness","dexterity","quickness"], ant:["clumsiness"],
    ex:[{ s:"The drill tests speed as well as {{}}.", f:"agility", ko:"그 훈련은 속도뿐 아니라 민첩성도 시험한다." }] },

  { word:"aging", pron:"에이징", pos:"n", level:"B2", meanings:["노화","나이 먹음"],
    syn:["maturing","growing older","senescence"],
    ex:[{ s:"Sunlight speeds up the {{}} of the skin.", f:"aging", ko:"햇빛은 피부의 노화를 빠르게 한다." }] },

  { word:"agitate", pron:"애지테이트", pos:"v", level:"C1", meanings:["동요시키다","선동하다"],
    syn:["disturb","upset","stir"], ant:["calm"],
    ex:[{ s:"The rumor began to {{}} the whole village.", f:"agitate", ko:"그 소문이 마을 전체를 동요시키기 시작했다." }] },

  { word:"agonize", pron:"애거나이즈", pos:"v", level:"C1", meanings:["고민하다","고뇌하다"],
    syn:["fret","brood","struggle"],
    ex:[{ s:"She continued to {{}} over the decision for weeks.", f:"agonize", ko:"그녀는 몇 주 동안 그 결정을 두고 계속 고민했다." }] },

  { word:"agonizing", pron:"애거나이징", pos:"adj", level:"C1", meanings:["고통스러운","괴로운"],
    syn:["excruciating","painful","harrowing"], ant:["pleasant"],
    ex:[{ s:"They faced an {{}} wait for the results.", f:"agonizing", ko:"그들은 결과를 기다리는 괴로운 시간을 보냈다." }] },

  { word:"agony", pron:"애거니", pos:"n", level:"B2", meanings:["극도의 고통","괴로움"],
    syn:["torment","anguish","suffering"], ant:["comfort"],
    ex:[{ s:"He was in {{}} until the medicine took effect.", f:"agony", ko:"그는 약이 효과를 낼 때까지 극심한 고통에 시달렸다." }] },

  { word:"agriculturalist", pron:"애그리컬처럴리스트", pos:"n", level:"C2", meanings:["농업 종사자","농업 전문가"],
    syn:["farmer","agronomist","grower"],
    ex:[{ s:"An {{}} advised the village on crop rotation.", f:"agriculturalist", ko:"한 농업 전문가가 마을에 윤작을 조언했다." }] },

  { word:"agriculture", exams:["공무원"], pron:"애그리컬처", pos:"n", level:"B1", meanings:["농업"],
    syn:["farming","cultivation","husbandry"],
    ex:[{ s:"{{}} still employs most people in the region.", f:"Agriculture", ko:"농업은 여전히 그 지역 대부분의 사람을 고용한다." }] },

  { word:"ahead of", pron:"어헤드 오브", pos:"phr", level:"B1", meanings:["~보다 앞에","~보다 빨리"],
    syn:["before","in front of","prior to"], ant:["behind"] },

  { word:"AI", pron:"에이아이", pos:"n", level:"B2", meanings:["인공지능"],
    ex:[{ s:"Hospitals now use {{}} to read medical scans.", f:"AI", ko:"병원들은 이제 의료 영상을 판독하는 데 인공지능을 사용한다." }] },

  { word:"ailment", pron:"에일먼트", pos:"n", level:"C1", meanings:["질환","(가벼운) 병"],
    syn:["illness","disorder","complaint"], ant:["health"],
    ex:[{ s:"The clinic treats minor {{}} without appointments.", f:"ailments", ko:"그 병원은 예약 없이 가벼운 질환을 치료한다." }] },


  { word:"aim", exams:["공무원"], pron:"에임", pos:"v", level:"B1", meanings:["겨누다","목표로 하다"],
    syn:["target","intend","strive"],
    ex:[{ s:"The program {{}} to cut waste by half.", f:"aims", ko:"그 사업은 폐기물을 절반으로 줄이는 것을 목표로 한다." }] },

  { word:"airborne", pron:"에어본", pos:"adj", level:"C1", meanings:["공기로 전파되는","비행 중인"],
    syn:["flying","aloft","in flight"], ant:["grounded"],
    ex:[{ s:"The virus turned out to be {{}} rather than waterborne.", f:"airborne", ko:"그 바이러스는 수인성이 아니라 공기로 전파되는 것으로 드러났다." }] },

  { word:"airtight", pron:"에어타이트", pos:"adj", level:"C1", meanings:["밀폐된","빈틈없는"],
    syn:["sealed","impermeable","hermetic"], ant:["leaky"],
    ex:[{ s:"Store the beans in an {{}} container.", f:"airtight", ko:"콩은 밀폐 용기에 보관하세요." }] },

  { word:"aisle", pron:"아일", pos:"n", level:"B2", meanings:["통로","복도"],
    syn:["passage","corridor","walkway"],
    ex:[{ s:"She prefers an {{}} seat on long flights.", f:"aisle", ko:"그녀는 장거리 비행에서 통로 쪽 좌석을 선호한다." }] },

  { word:"alchemy", pron:"앨커미", pos:"n", level:"C2", meanings:["연금술"],
    ex:[{ s:"Medieval {{}} slowly gave way to chemistry.", f:"alchemy", ko:"중세의 연금술은 서서히 화학으로 대체되었다." }] },

  { word:"alert", pron:"얼러트", pos:"adj", level:"B2", meanings:["경계하는","방심하지 않는"],
    syn:["watchful","vigilant","attentive"], ant:["careless"],
    ex:[{ s:"Guards must stay {{}} throughout the night.", f:"alert", ko:"경비원들은 밤새 경계를 유지해야 한다." }] },

  { word:"algebra", pron:"앨지브라", pos:"n", level:"B2", meanings:["대수학"],
    ex:[{ s:"He finally understood {{}} in his second year.", f:"algebra", ko:"그는 2학년이 되어서야 대수학을 이해했다." }] },

  { word:"alien", pron:"에일리언", pos:"adj", level:"B2", meanings:["이질적인","생소한"],
    syn:["foreign","unfamiliar","strange"], ant:["familiar"],
    ex:[{ s:"The customs felt completely {{}} to the newcomers.", f:"alien", ko:"그 관습은 새로 온 사람들에게 완전히 생소하게 느껴졌다." }] },

  { word:"alienate", pron:"에일리에네이트", pos:"v", level:"C1", meanings:["멀어지게 하다","소외시키다"],
    syn:["estrange","isolate","distance"], ant:["unite"],
    ex:[{ s:"His harsh tone began to {{}} his own supporters.", f:"alienate", ko:"그의 거친 어조는 자기 지지자들마저 멀어지게 만들기 시작했다." }] },

  { word:"alienation", pron:"에일리에네이션", pos:"n", level:"C2", meanings:["소외","멀어짐"],
    syn:["estrangement","isolation","detachment"], ant:["belonging"],
    ex:[{ s:"The novel explores the {{}} of city workers.", f:"alienation", ko:"그 소설은 도시 노동자의 소외를 탐구한다." }] },

  { word:"align", pron:"얼라인", pos:"v", level:"C1", meanings:["일치시키다","가지런히 하다"],
    syn:["line up","coordinate","match"], ant:["misalign"],
    ex:[{ s:"We must {{}} the budget with our real goals.", f:"align", ko:"우리는 예산을 실제 목표와 일치시켜야 한다." }],
    gov:{ prep:["with","to"], pat:"align {{}} our values", usage:"align with ~ : ~와 일치시키다" } },

  { word:"all at once", pron:"올 앳 원스", pos:"phr", level:"B1", meanings:["갑자기","한꺼번에"],
    syn:["suddenly","abruptly","all of a sudden"] },

  { word:"all of a sudden", pron:"올 오브 어 서든", pos:"phr", level:"B1", meanings:["느닷없이","불쑥"],
    syn:["suddenly","abruptly","all at once"] },

  { word:"allege", pron:"얼레지", pos:"v", level:"C1", meanings:["주장하다","혐의를 제기하다"],
    syn:["claim","assert","charge"], ant:["deny"],
    ex:[{ s:"Reporters {{}} that the funds were misused.", f:"allege", ko:"기자들은 그 자금이 부당하게 쓰였다고 주장한다." }] },

  { word:"alleged", pron:"얼레지드", pos:"adj", level:"C1", meanings:["(증거 없이) 주장된","혐의를 받는"],
    syn:["supposed","claimed","reputed"], ant:["proven"],
    ex:[{ s:"The {{}} theft occurred late at night.", f:"alleged", ko:"주장된 그 절도는 밤늦게 일어났다." }] },

  { word:"alleviate", pron:"얼리비에이트", pos:"v", level:"C1", meanings:["완화하다","덜다"],
    syn:["ease","relieve","mitigate"], ant:["aggravate"],
    ex:[{ s:"The grant aims to {{}} rural poverty.", f:"alleviate", ko:"그 보조금은 농촌 빈곤을 완화하는 것을 목표로 한다." }] },

  { word:"alliance", pron:"얼라이언스", pos:"n", level:"B2", meanings:["동맹","연합"],
    syn:["coalition","partnership","union"], ant:["rivalry"],
    ex:[{ s:"The two parties formed a fragile {{}}.", f:"alliance", ko:"두 정당은 취약한 동맹을 결성했다." }] },

  { word:"allocate", exams:["공무원"], pron:"앨러케이트", pos:"v", level:"B2", meanings:["배분하다","할당하다"],
    syn:["assign","distribute","apportion"], ant:["withhold"],
    ex:[{ s:"The city will {{}} more funds to public transit.", f:"allocate", ko:"그 도시는 대중교통에 더 많은 자금을 배분할 것이다." }] },

  { word:"allot", pron:"얼랏", pos:"v", level:"C1", meanings:["할당하다","배정하다"],
    syn:["assign","allocate","apportion"], ant:["withhold"],
    ex:[{ s:"Each speaker was {{}} ten minutes.", f:"allotted", ko:"각 발표자에게 10분이 배정되었다." }] },

  { word:"allow", pron:"얼라우", pos:"v", level:"B1", meanings:["허용하다","허락하다"],
    syn:["permit","let","authorize"], ant:["forbid"],
    ex:[{ s:"The library does not {{}} food in the reading room.", f:"allow", ko:"도서관은 열람실에서 음식을 허용하지 않는다." }] },

  { word:"allowance", pron:"얼라운스", pos:"n", level:"B2", meanings:["수당","용돈"],
    syn:["stipend","subsidy","pocket money"],
    ex:[{ s:"His monthly {{}} barely covers transport.", f:"allowance", ko:"그의 월 수당은 교통비를 겨우 충당한다." }] },

  { word:"allure", pron:"얼루어", pos:"n", level:"C1", meanings:["매력","매혹"],
    syn:["appeal","charm","attraction"], ant:["repulsion"],
    ex:[{ s:"The {{}} of city life drew them from the farm.", f:"allure", ko:"도시 생활의 매력이 그들을 농장에서 이끌어 냈다." }] },

  { word:"along with", pron:"얼롱 위드", pos:"phr", level:"B1", meanings:["~와 함께","~에 덧붙여"],
    syn:["together with","as well as","in addition to"] },

  { word:"aloof", pron:"얼루프", pos:"adj", level:"C1", meanings:["냉담한","거리를 두는"],
    syn:["distant","detached","standoffish"], ant:["sociable"],
    ex:[{ s:"He remained {{}} from office gossip.", f:"aloof", ko:"그는 사내 험담과 거리를 두었다." }] },

  { word:"altar", exams:["공무원"], pron:"올터", pos:"n", level:"C1", meanings:["제단"],
    syn:["shrine","sanctuary","chancel"],
    ex:[{ s:"Candles burned on the stone {{}} all night.", f:"altar", ko:"돌 제단 위에서 촛불이 밤새 타올랐다." }] },

  { word:"alter", exams:["공무원"], pron:"올터", pos:"v", level:"B2", meanings:["바꾸다","변경하다"],
    syn:["change","modify","amend"], ant:["preserve"],
    ex:[{ s:"One small detail could {{}} the whole result.", f:"alter", ko:"작은 세부 하나가 전체 결과를 바꿀 수 있다." }] },

  { word:"alternate", pron:"올터닛", pos:"adj", level:"B2", meanings:["번갈아 하는","교대의"],
    syn:["rotating","successive","every other"],
    ex:[{ s:"Classes meet on {{}} Fridays this term.", f:"alternate", ko:"이번 학기 수업은 격주 금요일에 열린다." }] },

  { word:"alternative", exams:["공무원"], pron:"올터너티브", pos:"n", level:"B1", meanings:["대안","선택지"],
    syn:["option","substitute","choice"],
    ex:[{ s:"Solar power became a real {{}} to coal.", f:"alternative", ko:"태양광은 석탄의 진정한 대안이 되었다." }] },

  { word:"alternatively", pron:"올터너티블리", pos:"adv", level:"B2", meanings:["그 대신에","그렇지 않으면"],
    syn:["instead","otherwise","conversely"],
    ex:[{ s:"{{}}, you can submit the form online.", f:"Alternatively", ko:"그 대신에 온라인으로 서류를 제출할 수 있습니다." }] },

  { word:"altitude", pron:"앨티튜드", pos:"n", level:"B2", meanings:["고도","높이"],
    syn:["elevation","height","level"], ant:["depth"],
    ex:[{ s:"Breathing grows harder at high {{}}.", f:"altitude", ko:"고도가 높아지면 숨쉬기가 더 힘들어진다." }] },

  { word:"altogether", exams:["공무원"], pron:"올투게더", pos:"adv", level:"B2", meanings:["완전히","전적으로"],
    syn:["completely","entirely","wholly"], ant:["partly"],
    ex:[{ s:"The plan was {{}} too expensive to approve.", f:"altogether", ko:"그 계획은 승인하기에 전적으로 너무 비쌌다." }] },

  { word:"altruistic", pron:"앨트루이스틱", pos:"adj", level:"C1", meanings:["이타적인"],
    /* ★ syn 의 "unselfish" 를 "giving without reward" 로 바꿨다. 사전이
       unselfish 와 selfless 에 똑같이 '이타적인' 을 적어 두어 설명이 완전히 같은
       선택지가 둘 있었다. selfless 가 S 세트에서 표제어가 되면서(챕터 5) 그 글자가
       확정되므로 이 자리를 갈았다. */
    syn:["selfless","giving without reward","charitable"], ant:["selfish"],
    ex:[{ s:"Her motives were genuinely {{}}, not commercial.", f:"altruistic", ko:"그녀의 동기는 상업적이 아니라 진정으로 이타적이었다." }] },


  { word:"amazing", pron:"어메이징", pos:"adj", level:"B1", meanings:["놀라운","굉장한"],
    syn:["astonishing","incredible","remarkable"], ant:["ordinary"],
    ex:[{ s:"The view from the summit was {{}}.", f:"amazing", ko:"정상에서 본 경관은 굉장했다." }] },

  { word:"ambassador", pron:"앰배서더", pos:"n", level:"B2", meanings:["대사","대표"],
    syn:["envoy","diplomat","emissary"],
    ex:[{ s:"The {{}} met the president on Monday.", f:"ambassador", ko:"그 대사는 월요일에 대통령을 만났다." }] },

  { word:"ambiguity", pron:"앰비규어티", pos:"n", level:"C1", meanings:["애매모호함","중의성"],
    syn:["vagueness","obscurity","uncertainty"], ant:["clarity"],
    ex:[{ s:"The {{}} of the clause led to a lawsuit.", f:"ambiguity", ko:"그 조항의 모호함이 소송으로 이어졌다." }] },

  { word:"ambiguous", pron:"앰비규어스", pos:"adj", level:"B2", meanings:["애매한","확실치 않은"],
    syn:["unclear","equivocal","vague"], ant:["explicit"],
    ex:[{ s:"His answer was deliberately {{}}.", f:"ambiguous", ko:"그의 대답은 의도적으로 애매했다." }] },

  { word:"ambitious", pron:"앰비셔스", pos:"adj", level:"B2", meanings:["야심적인","의욕적인"],
    syn:["aspiring","driven","enterprising"], ant:["unmotivated"],
    ex:[{ s:"They set an {{}} target for next year.", f:"ambitious", ko:"그들은 내년에 대해 야심적인 목표를 세웠다." }] },

  { word:"ambivalent", pron:"앰비벌런트", pos:"adj", level:"C2", meanings:["엇갈린 감정의","반신반의하는"],
    syn:["conflicted","undecided","torn"], ant:["certain"],
    ex:[{ s:"Voters remain {{}} about the merger.", f:"ambivalent", ko:"유권자들은 그 합병에 대해 엇갈린 감정을 지니고 있다." }] },

  { word:"amend", pron:"어멘드", pos:"v", level:"C1", meanings:["개정하다","수정하다"],
    syn:["revise","modify","rectify"],
    ex:[{ s:"Parliament voted to {{}} the tax law.", f:"amend", ko:"의회는 세법을 개정하기로 표결했다." }] },

  { word:"amenity", exams:["공무원"], pron:"어메니티", pos:"n", level:"C1", meanings:["생활 편의 시설"],
    syn:["facility","convenience","comfort"],
    ex:[{ s:"The building's best {{}} is its rooftop garden.", f:"amenity", ko:"그 건물의 최고 편의 시설은 옥상 정원이다." }] },

  { word:"amiable", pron:"에이미어블", pos:"adj", level:"C1", meanings:["상냥한","호감을 주는"],
    syn:["friendly","genial","affable"], ant:["unfriendly"],
    ex:[{ s:"Our new neighbor is remarkably {{}}.", f:"amiable", ko:"새 이웃은 놀랄 만큼 상냥하다." }] },

  { word:"amicable", pron:"애미커블", pos:"adj", level:"C1", meanings:["우호적인","원만한"],
    syn:["friendly","cordial","amiable"], ant:["hostile"],
    ex:[{ s:"The dispute ended in an {{}} settlement.", f:"amicable", ko:"그 분쟁은 원만한 합의로 끝났다." }] },

  { word:"amnesia", pron:"앰니지아", pos:"n", level:"C1", meanings:["기억 상실증","건망증"],
    syn:["memory loss","forgetfulness","blackout"],
    ex:[{ s:"The patient suffered temporary {{}} after the fall.", f:"amnesia", ko:"그 환자는 넘어진 후 일시적인 기억 상실을 겪었다." }] },

  { word:"amnesty", pron:"앰네스티", pos:"n", level:"C1", meanings:["사면","특사"],
    syn:["pardon","reprieve","clemency"], ant:["punishment"],
    ex:[{ s:"The government offered {{}} to political prisoners.", f:"amnesty", ko:"정부는 정치범들에게 사면을 제안했다." }] },

  { word:"amount", pron:"어마운트", pos:"n", level:"B1", meanings:["액수","양"],
    syn:["quantity","sum","total"],
    ex:[{ s:"A small {{}} of salt improves the flavor.", f:"amount", ko:"소량의 소금이 맛을 좋게 한다." }] },

  { word:"amount to", pron:"어마운트 투", pos:"phr", level:"B2", meanings:["(합계가) ~에 이르다","~에 해당하다"],
    syn:["total","come to","add up to"] },

  { word:"ample", pron:"앰플", pos:"adj", level:"C1", meanings:["충분한","풍부한"],
    syn:["plentiful","sufficient","generous"], ant:["meager"],
    ex:[{ s:"There is {{}} time to finish before dark.", f:"ample", ko:"어두워지기 전에 끝낼 충분한 시간이 있다." }] },

  { word:"amplify", pron:"앰플리파이", pos:"v", level:"C1", meanings:["증폭시키다","확대하다"],
    syn:["magnify","boost","intensify"], ant:["reduce"],
    ex:[{ s:"Social media can {{}} even a small rumor.", f:"amplify", ko:"소셜 미디어는 작은 소문조차 증폭시킬 수 있다." }] },

  { word:"amusement", pron:"어뮤즈먼트", pos:"n", level:"B2", meanings:["재미","즐거움"],
    syn:["entertainment","enjoyment","diversion"], ant:["boredom"],
    ex:[{ s:"She watched the puppies with obvious {{}}.", f:"amusement", ko:"그녀는 강아지들을 뚜렷한 즐거움으로 바라보았다." }] },

  { word:"analogy", pron:"어낼러지", pos:"n", level:"C1", meanings:["비유","유사점"],
    syn:["comparison","close likeness","resemblance"], ant:["contrast"],
    ex:[{ s:"He drew an {{}} between the brain and a city.", f:"analogy", ko:"그는 뇌와 도시 사이의 비유를 이끌어 냈다." }] },

  { word:"analysis", pron:"어낼러시스", pos:"n", level:"B1", meanings:["분석","분해"],
    syn:["examination","study","breakdown"], ant:["synthesis"],
    ex:[{ s:"A careful {{}} revealed two separate causes.", f:"analysis", ko:"신중한 분석이 두 개의 별개 원인을 드러냈다." }] },

  { word:"analyze", exams:["공무원"], pron:"애널라이즈", pos:"v", level:"B1", meanings:["분석하다","해석하다"],
    syn:["examine","study","dissect"],
    ex:[{ s:"Researchers will {{}} the samples next week.", f:"analyze", ko:"연구자들은 다음 주에 시료를 분석할 것이다." }] },

  { word:"anarchy", pron:"애너키", pos:"n", level:"C1", meanings:["무정부 상태","혼란"],
    syn:["lawlessness","chaos","disorder"], ant:["order"],
    ex:[{ s:"The collapse of the police led to near {{}}.", f:"anarchy", ko:"경찰의 붕괴는 거의 무정부 상태로 이어졌다." }] },

  { word:"anatomy", pron:"어내터미", pos:"n", level:"C1", meanings:["해부학적 구조","해부학"],
    syn:["structure","physiology","framework"],
    ex:[{ s:"Art students study human {{}} in detail.", f:"anatomy", ko:"미술 전공 학생들은 인체 구조를 상세히 공부한다." }] },

  { word:"ancestor", pron:"앤세스터", pos:"n", level:"B2", meanings:["조상","선조"],
    syn:["forefather","forebear","predecessor"], ant:["descendant"],
    ex:[{ s:"His {{}} arrived on the island in 1820.", f:"ancestor", ko:"그의 조상은 1820년에 그 섬에 도착했다." }] },

  { word:"anchor", pron:"앵커", pos:"n", level:"B2", meanings:["닻","고정 장치"],
    syn:["mooring","ballast","weight"],
    ex:[{ s:"They dropped the {{}} in the shallow bay.", f:"anchor", ko:"그들은 얕은 만에 닻을 내렸다." }] },

  /* 원본의 "현대의"는 반대되는 뜻이라 삭제했습니다 */
  { word:"ancient", exams:["공무원"], pron:"에인션트", pos:"adj", level:"B1", meanings:["고대의","옛날의"],
    syn:["antique","archaic","age-old"], ant:["modern"],
    ex:[{ s:"The valley hides an {{}} burial ground.", f:"ancient", ko:"그 계곡은 고대의 매장지를 숨기고 있다." }] },

  { word:"and so forth", pron:"앤드 소 포스", pos:"phr", level:"B2", meanings:["~등등","기타 등등"],
    syn:["and so on","et cetera","and the like"] },

  { word:"anecdote", pron:"애닉도트", pos:"n", level:"C1", meanings:["일화","짧은 이야기"],
    syn:["story","tale","account"],
    ex:[{ s:"He opened the lecture with a funny {{}}.", f:"anecdote", ko:"그는 재미있는 일화로 강연을 시작했다." }] },

  { word:"anesthetic", pron:"애너스세틱", pos:"n", level:"C1", meanings:["마취제"],
    syn:["painkiller","sedative","numbing agent"],
    ex:[{ s:"The dentist used a local {{}} first.", f:"anesthetic", ko:"치과의사는 먼저 국소 마취제를 사용했다." }] },

  { word:"anguish", pron:"앵귀쉬", pos:"n", level:"C1", meanings:["고뇌","심적 고통"],
    syn:["agony","torment","distress"], ant:["relief"],
    ex:[{ s:"Her face showed the {{}} of a long wait.", f:"anguish", ko:"그녀의 얼굴에는 긴 기다림의 고뇌가 드러났다." }] },

  { word:"annihilate", pron:"어나일레이트", pos:"v", level:"C2", meanings:["전멸시키다","완전히 파괴하다"],
    syn:["destroy","obliterate","wipe out"], ant:["preserve"],
    ex:[{ s:"One storm could {{}} the entire harvest.", f:"annihilate", ko:"한 번의 폭풍이 수확물 전체를 없애 버릴 수 있다." }] },

  { word:"anniversary", exams:["공무원"], pron:"애니버서리", pos:"n", level:"B1", meanings:["기념일"],
    syn:["commemoration","jubilee","remembrance"],
    ex:[{ s:"They celebrated their tenth {{}} quietly.", f:"anniversary", ko:"그들은 10주년 기념일을 조용히 축하했다." }] },

  { word:"announce", pron:"어나운스", pos:"v", level:"B1", meanings:["발표하다","알리다"],
    syn:["declare","proclaim","report"], ant:["conceal"],
    ex:[{ s:"The airline will {{}} new routes in June.", f:"announce", ko:"그 항공사는 6월에 신규 노선을 발표할 것이다." }] },

  { word:"annoyance", pron:"어노이언스", pos:"n", level:"B2", meanings:["짜증","골칫거리"],
    syn:["irritation","nuisance","frustration"], ant:["delight"],
    ex:[{ s:"The constant beeping was a real {{}}.", f:"annoyance", ko:"끊임없는 삐 소리는 진짜 골칫거리였다." }] },

  { word:"annoyed", pron:"어노이드", pos:"adj", level:"B1", meanings:["짜증난","불쾌한"],
    syn:["irritated","displeased","vexed"], ant:["pleased"],
    ex:[{ s:"He looked {{}} when the meeting ran late.", f:"annoyed", ko:"회의가 늦어지자 그는 짜증난 표정을 지었다." }] },

  { word:"annual", pron:"애뉴얼", pos:"adj", level:"B1", meanings:["매년의","연간의"],
    syn:["yearly","once-a-year","perennial"],
    ex:[{ s:"The club holds an {{}} dinner in May.", f:"annual", ko:"그 동아리는 5월에 연례 만찬을 연다." }] },

  { word:"annul", pron:"어널", pos:"v", level:"C2", meanings:["무효화하다","취소하다"],
    syn:["invalidate","cancel","void"], ant:["ratify"],
    ex:[{ s:"The court moved to {{}} the contract.", f:"annul", ko:"법원은 그 계약을 무효화하는 쪽으로 움직였다." }] },

  { word:"anonymous", pron:"어나니머스", pos:"adj", level:"B2", meanings:["익명의","신원 불명의"],
    syn:["unnamed","unidentified","nameless"], ant:["named"],
    ex:[{ s:"An {{}} donor paid the hospital bill.", f:"anonymous", ko:"익명의 기부자가 병원비를 지불했다." }] },

  { word:"antagonize", pron:"앤태거나이즈", pos:"v", level:"C2", meanings:["적대감을 일으키다","반감을 사다"],
    syn:["provoke","offend","alienate"], ant:["appease"],
    ex:[{ s:"Blunt criticism may {{}} the very people you need.", f:"antagonize", ko:"직설적인 비판은 정작 필요한 사람들의 반감을 살 수 있다." }] },

  { word:"Antarctic", pron:"앤탁틱", pos:"adj", level:"B2", meanings:["남극의"],
    ex:[{ s:"The {{}} ice sheet is thinning each decade.", f:"Antarctic", ko:"남극의 빙상은 10년마다 얇아지고 있다." }] },

  { word:"antecedent", pron:"앤티시던트", pos:"n", level:"C2", meanings:["선례","전례"],
    syn:["precedent","forerunner","predecessor"],
    ex:[{ s:"The ruling had no clear {{}} in law.", f:"antecedent", ko:"그 판결은 법에 명확한 선례가 없었다." }] },


  { word:"anterior", pron:"앤티리어", pos:"adj", level:"C2", meanings:["앞쪽의","전방의"],
    syn:["front","forward","fore"], ant:["posterior"],
    ex:[{ s:"The muscle runs along the {{}} part of the thigh.", f:"anterior", ko:"그 근육은 허벅지 앞쪽을 따라 이어진다." }] },

  { word:"anthropology", pron:"앤스로폴러지", pos:"n", level:"C1", meanings:["인류학"],
    syn:["ethnology","social science","humanities"],
    ex:[{ s:"She teaches cultural {{}} at the university.", f:"anthropology", ko:"그녀는 대학에서 문화 인류학을 가르친다." }] },

  { word:"antibiotic", pron:"앤티바이아틱", pos:"n", level:"B2", meanings:["항생제"],
    syn:["antibacterial","medicine","drug"],
    ex:[{ s:"Doctors warn against overusing every {{}}.", f:"antibiotic", ko:"의사들은 항생제 남용을 경고한다." }] },

  { word:"antibody", pron:"앤티바디", pos:"n", level:"C1", meanings:["항체"],
    syn:["immunoglobulin","defense protein","immune agent"],
    ex:[{ s:"The vaccine helps the body make each {{}}.", f:"antibody", ko:"백신은 몸이 항체를 만들도록 돕는다." }] },

  { word:"anticipate", exams:["공무원"], pron:"앤티서페이트", pos:"v", level:"B2", meanings:["기대하다","예상하다"],
    syn:["expect","foresee","predict"], ant:["overlook"],
    ex:[{ s:"We {{}} heavy traffic during the holiday.", f:"anticipate", ko:"우리는 연휴 동안 극심한 교통 정체를 예상한다." }] },

  { word:"antidepressant", pron:"앤티디프레선트", pos:"n", level:"C1", meanings:["항우울제"],
    syn:["mood stabilizer","medication","drug"],
    ex:[{ s:"The doctor prescribed a mild {{}}.", f:"antidepressant", ko:"의사는 약한 항우울제를 처방했다." }] },

  { word:"antidote", pron:"앤티도트", pos:"n", level:"C1", meanings:["해독제","해결책"],
    syn:["remedy","cure","countermeasure"], ant:["poison"],
    ex:[{ s:"Laughter can be an {{}} to daily stress.", f:"antidote", ko:"웃음은 일상적 스트레스의 해독제가 될 수 있다." }] },

  { word:"antioxidant", pron:"앤티악서던트", pos:"n", level:"C1", meanings:["항산화제"],
    syn:["free-radical scavenger","preservative","nutrient"],
    ex:[{ s:"Berries are rich in every kind of {{}}.", f:"antioxidant", ko:"베리류는 온갖 항산화제가 풍부하다." }] },

  { word:"antipathy", pron:"앤티퍼시", pos:"n", level:"C2", meanings:["반감","혐오"],
    syn:["hostility","aversion","dislike"], ant:["affinity"],
    ex:[{ s:"There was clear {{}} between the two rivals.", f:"antipathy", ko:"두 경쟁자 사이에는 뚜렷한 반감이 있었다." }] },

  { word:"antique", pron:"앤틱", pos:"n", level:"B2", meanings:["골동품"],
    syn:["relic","collectible","heirloom"],
    ex:[{ s:"The clock is a valuable {{}} from the 1800s.", f:"antique", ko:"그 시계는 1800년대의 값진 골동품이다." }] },

  { word:"antiquity", exams:["공무원"], pron:"앤티퀴티", pos:"n", level:"C2", meanings:["고대","아주 오래됨"],
    syn:["ancient times","old age","the past"], ant:["modernity"],
    ex:[{ s:"The site has been sacred since {{}}.", f:"antiquity", ko:"그 장소는 고대부터 신성하게 여겨졌다." }] },

  { word:"antisocial", pron:"앤티소셜", pos:"adj", level:"C1", meanings:["반사회적인","비사교적인"],
    syn:["unsociable","disruptive","withdrawn"], ant:["sociable"],
    ex:[{ s:"Late-night noise counts as {{}} behavior here.", f:"antisocial", ko:"이곳에서 심야 소음은 반사회적 행동으로 간주된다." }] },

  { word:"anxiety", exams:["공무원"], pron:"앵자이어티", pos:"n", level:"B2", meanings:["불안","염려"],
    syn:["worry","unease","apprehension"], ant:["calm"],
    ex:[{ s:"Exam {{}} affects many capable students.", f:"anxiety", ko:"시험 불안은 유능한 많은 학생에게 영향을 준다." }] },

  { word:"anxious", exams:["공무원"], pron:"앵셔스", pos:"adj", level:"B1", meanings:["불안해하는","걱정하는"],
    syn:["worried","nervous","uneasy"], ant:["relaxed"],
    ex:[{ s:"She felt {{}} before the interview.", f:"anxious", ko:"그녀는 면접 전에 불안했다." }] },

  { word:"apart from", pron:"어파트 프럼", pos:"phr", level:"B1", meanings:["~을 제외하고","~외에는"],
    syn:["except for","besides","aside from"] },

  { word:"apathy", pron:"애퍼시", pos:"n", level:"C1", meanings:["무관심","냉담"],
    syn:["indifference","unconcern","detachment"], ant:["enthusiasm"],
    ex:[{ s:"Voter {{}} led to a record low turnout.", f:"apathy", ko:"유권자의 무관심이 사상 최저 투표율로 이어졌다." }] },

  { word:"apologetic", pron:"어팔러제틱", pos:"adj", level:"B2", meanings:["사과하는","미안해하는"],
    syn:["remorseful","regretful","contrite"], ant:["unrepentant"],
    ex:[{ s:"He sent an {{}} note for missing the meeting.", f:"apologetic", ko:"그는 회의에 빠진 것에 대해 사과하는 쪽지를 보냈다." }] },

  { word:"apologetically", pron:"어팔러제티컬리", pos:"adv", level:"C1", meanings:["사과하듯이","미안해하며"],
    syn:["regretfully","remorsefully","ruefully"],
    ex:[{ s:"She smiled {{}} and explained the delay.", f:"apologetically", ko:"그녀는 미안해하며 웃고는 지연을 설명했다." }] },

  { word:"apologize", pron:"어팔러자이즈", pos:"v", level:"B1", meanings:["사과하다"],
    syn:["say sorry","express regret","atone"],
    ex:[{ s:"He refused to {{}} for the remark.", f:"apologize", ko:"그는 그 발언에 대해 사과하기를 거부했다." }],
    gov:{ prep:["for","to"], pat:"apologize {{}} the delay", usage:"apologize for ~ : ~에 대해 사과하다" } },

  { word:"apparatus", pron:"애퍼래터스", pos:"n", level:"C1", meanings:["장치","기구"],
    syn:["equipment","device","machinery"],
    ex:[{ s:"The lab installed new breathing {{}}.", f:"apparatus", ko:"실험실은 새 호흡 장치를 설치했다." }] },

  { word:"apparent", pron:"어패런트", pos:"adj", level:"B2", meanings:["명백한","분명한"],
    syn:["obvious","evident","clear"], ant:["obscure"],
    ex:[{ s:"It soon became {{}} that the plan had failed.", f:"apparent", ko:"그 계획이 실패했다는 것이 곧 분명해졌다." }] },

  { word:"appeal", pron:"어필", pos:"v", level:"B2", meanings:["호소하다","관심을 끌다"],
    syn:["plead","attract","entreat"],
    ex:[{ s:"The design should {{}} to younger buyers.", f:"appeal", ko:"그 디자인은 젊은 구매자의 관심을 끌어야 한다." }],
    gov:{ prep:["to","for","against"], pat:"appeal {{}} younger buyers", usage:"appeal to ~ : ~의 관심을 끌다" } },

  { word:"appearance", pron:"어피어런스", pos:"n", level:"B1", meanings:["외모","출현"],
    syn:["look","aspect","arrival"], ant:["disappearance"],
    ex:[{ s:"Do not judge people by their {{}} alone.", f:"appearance", ko:"외모만으로 사람을 판단하지 마라." }] },

  { word:"appendix", pron:"어펜딕스", pos:"n", level:"C1", meanings:["부록","부속물"],
    syn:["supplement","addendum","attachment"],
    ex:[{ s:"Full data appear in the {{}} at the end.", f:"appendix", ko:"전체 데이터는 끝의 부록에 나온다." }] },

  { word:"appetite", pron:"애피타이트", pos:"n", level:"B2", meanings:["식욕","욕구"],
    syn:["hunger","craving","desire"], ant:["aversion"],
    ex:[{ s:"The long walk gave us a huge {{}}.", f:"appetite", ko:"긴 산책은 우리에게 엄청난 식욕을 주었다." }] },

  { word:"appliance", exams:["공무원"], pron:"어플라이언스", pos:"n", level:"B2", meanings:["(가정용) 기구","전자제품"],
    syn:["device","gadget","machine"],
    ex:[{ s:"Every kitchen {{}} here saves energy.", f:"appliance", ko:"이곳의 모든 주방 기구는 에너지를 절약한다." }] },

  { word:"applicant", exams:["공무원"], pron:"애플리컨트", pos:"n", level:"B2", meanings:["지원자","신청자"],
    syn:["candidate","petitioner","aspirant"],
    ex:[{ s:"Each {{}} must submit two references.", f:"applicant", ko:"각 지원자는 추천서 두 통을 제출해야 한다." }] },

  { word:"application", exams:["공무원"], pron:"애플리케이션", pos:"n", level:"B1", meanings:["지원(서)","적용"],
    syn:["request","use","implementation"],
    ex:[{ s:"Her {{}} for the grant was approved.", f:"application", ko:"그녀의 보조금 신청이 승인되었다." }] },

  { word:"apply", exams:["공무원"], pron:"어플라이", pos:"v", level:"B1", meanings:["지원하다","적용하다"],
    syn:["request","use","implement"],
    ex:[{ s:"You can {{}} the same rule to both cases.", f:"apply", ko:"두 경우 모두에 같은 규칙을 적용할 수 있다." }] },

  { word:"apply for", pron:"어플라이 포", pos:"phr", level:"B1", meanings:["~에 지원하다","~을 신청하다"],
    syn:["request","seek","put in for"] },

  { word:"apply to", pron:"어플라이 투", pos:"phr", level:"B2", meanings:["~에 적용되다","~에 해당하다"],
    syn:["pertain to","relate to","concern"] },

  { word:"appointment", exams:["공무원"], pron:"어포인트먼트", pos:"n", level:"B1", meanings:["약속","임명"],
    syn:["meeting","engagement","nomination"],
    ex:[{ s:"I have a dental {{}} at three o'clock.", f:"appointment", ko:"나는 3시에 치과 예약이 있다." }] },

  { word:"appraise", pron:"어프레이즈", pos:"v", level:"C1", meanings:["평가하다","감정하다"],
    syn:["assess","evaluate","value"],
    ex:[{ s:"An expert came to {{}} the old painting.", f:"appraise", ko:"전문가가 그 오래된 그림을 감정하러 왔다." }] },

  { word:"appreciate", exams:["공무원"], pron:"어프리시에이트", pos:"v", level:"B1", meanings:["감사하다","감상하다"],
    syn:["value","cherish","recognize"], ant:["disregard"],
    ex:[{ s:"We truly {{}} all your help this week.", f:"appreciate", ko:"우리는 이번 주 당신의 모든 도움에 진심으로 감사한다." }] },

  { word:"appreciative", pron:"어프리시어티브", pos:"adj", level:"C1", meanings:["감사하는","높이 평가하는"],
    syn:["grateful","thankful","admiring"], ant:["ungrateful"],
    ex:[{ s:"The crowd was warmly {{}} of the performance.", f:"appreciative", ko:"관중은 그 공연에 따뜻한 찬사를 보냈다." }] },

  { word:"apprehend", pron:"애프리헨드", pos:"v", level:"C2", meanings:["체포하다","파악하다"],
    syn:["arrest","capture","seize"], ant:["release"],
    ex:[{ s:"Police managed to {{}} the suspect at dawn.", f:"apprehend", ko:"경찰은 새벽에 용의자를 체포하는 데 성공했다." }] },


  { word:"apprehensive", pron:"애프리헨시브", pos:"adj", level:"C1", meanings:["걱정하는","염려하는"],
    syn:["anxious","uneasy","worried"], ant:["confident"],
    ex:[{ s:"Staff felt {{}} about the coming merger.", f:"apprehensive", ko:"직원들은 다가오는 합병에 대해 걱정했다." }],
    gov:{ prep:["about","of"], pat:"apprehensive {{}} the outcome", usage:"apprehensive about ~ : ~을 걱정하는" } },

  { word:"apprentice", pron:"어프렌티스", pos:"n", level:"C1", meanings:["수습생","도제"],
    syn:["trainee","learner","novice"], ant:["master"],
    ex:[{ s:"He started as an {{}} in a print shop.", f:"apprentice", ko:"그는 인쇄소에서 수습생으로 시작했다." }] },

  { word:"apprenticeship", pron:"어프렌티스쉽", pos:"n", level:"C1", meanings:["수습 기간","도제살이"],
    syn:["traineeship","internship","training"],
    ex:[{ s:"She completed a four-year {{}} as an electrician.", f:"apprenticeship", ko:"그녀는 전기공으로 4년의 수습 과정을 마쳤다." }] },

  { word:"approach", exams:["공무원"], pron:"어프로치", pos:"v", level:"B1", meanings:["접근하다","다가가다"],
    syn:["near","advance","come toward"], ant:["retreat"],
    ex:[{ s:"Do not {{}} the animals during feeding.", f:"approach", ko:"먹이를 줄 때 동물에게 다가가지 마세요." }] },

  { word:"appropriate", exams:["공무원"], pron:"어프로프리엇", pos:"adj", level:"B2", meanings:["적합한","적절한"],
    syn:["suitable","fitting","proper"], ant:["inappropriate"],
    ex:[{ s:"Choose clothing {{}} for the weather.", f:"appropriate", ko:"날씨에 적절한 옷을 고르세요." }] },

  { word:"approval", pron:"어프루벌", pos:"n", level:"B2", meanings:["승인","찬성"],
    syn:["consent","endorsement","sanction"], ant:["disapproval"],
    ex:[{ s:"The plan still needs the board's {{}}.", f:"approval", ko:"그 계획은 아직 이사회의 승인이 필요하다." }] },

  { word:"approving", pron:"어프루빙", pos:"adj", level:"C1", meanings:["찬성하는","승인하는"],
    syn:["favorable","supportive","admiring"], ant:["disapproving"],
    ex:[{ s:"She gave an {{}} nod at the proposal.", f:"approving", ko:"그녀는 그 제안에 찬성하는 뜻으로 고개를 끄덕였다." }] },

  { word:"approximate", exams:["공무원"], pron:"어프락시밋", pos:"adj", level:"B2", meanings:["대략의","가까운"],
    syn:["rough","estimated","near"], ant:["exact"],
    ex:[{ s:"Give me an {{}} cost before we start.", f:"approximate", ko:"시작하기 전에 대략적인 비용을 알려 주세요." }] },

  { word:"approximately", pron:"어프락시밋리", pos:"adv", level:"B2", meanings:["대략","약"],
    syn:["roughly","about","around"], ant:["exactly"],
    ex:[{ s:"The trip takes {{}} three hours.", f:"approximately", ko:"그 여행은 대략 세 시간이 걸린다." }] },

  { word:"apt", pron:"앱트", pos:"adj", level:"C1", meanings:["적절한","~하기 쉬운"],
    syn:["fitting","suitable","prone"], ant:["unsuitable"],
    ex:[{ s:"That was an {{}} description of the problem.", f:"apt", ko:"그것은 그 문제에 대한 적절한 묘사였다." }] },

  { word:"aptitude", pron:"앱티튜드", pos:"n", level:"C1", meanings:["적성","소질"],
    syn:["talent","flair","knack"], ant:["inability"],
    ex:[{ s:"She showed an early {{}} for numbers.", f:"aptitude", ko:"그녀는 일찍부터 숫자에 소질을 보였다." }],
    gov:{ prep:["for"], pat:"an aptitude {{}} languages", usage:"an aptitude for ~ : ~에 대한 소질" } },

  { word:"aquatic", pron:"어쿼틱", pos:"adj", level:"C1", meanings:["수생의","물속의"],
    syn:["marine","water-dwelling","underwater"], ant:["terrestrial"],
    ex:[{ s:"The pond supports many {{}} plants.", f:"aquatic", ko:"그 연못은 많은 수생 식물을 품고 있다." }] },

  { word:"arbitrary", pron:"아비트레리", pos:"adj", level:"C1", meanings:["임의의","제멋대로인"],
    syn:["random","capricious","subjective"], ant:["reasoned"],
    ex:[{ s:"The deadline felt entirely {{}} to the team.", f:"arbitrary", ko:"그 마감일은 팀에게 완전히 제멋대로로 느껴졌다." }] },

  { word:"archaeological", exams:["공무원"], pron:"아키얼라지컬", pos:"adj", level:"C1", meanings:["고고학의"],
    syn:["excavational","antiquarian","historical"],
    ex:[{ s:"The dam would flood an important {{}} site.", f:"archaeological", ko:"그 댐은 중요한 고고학 유적지를 수몰시킬 것이다." }] },

  { word:"archaeologist", exams:["공무원"], pron:"아키알러지스트", pos:"n", level:"C1", meanings:["고고학자"],
    syn:["excavator","antiquarian","researcher"],
    ex:[{ s:"An {{}} identified the coins as Roman.", f:"archaeologist", ko:"한 고고학자가 그 동전들을 로마 시대의 것으로 밝혀냈다." }] },

  { word:"archaeology", pron:"아키알러지", pos:"n", level:"C1", meanings:["고고학"],
    syn:["antiquities study","excavation science","prehistory"],
    ex:[{ s:"He switched from history to {{}}.", f:"archaeology", ko:"그는 역사학에서 고고학으로 전공을 바꿨다." }] },

  { word:"architect", pron:"아키텍트", pos:"n", level:"B2", meanings:["건축가","설계자"],
    syn:["designer","planner","builder"],
    ex:[{ s:"The {{}} unveiled a bold new library.", f:"architect", ko:"그 건축가는 대담한 새 도서관을 공개했다." }] },

  { word:"architecture", pron:"아키텍처", pos:"n", level:"B2", meanings:["건축(학)","건축 양식"],
    syn:["design","construction","structure"],
    ex:[{ s:"The city is famous for its baroque {{}}.", f:"architecture", ko:"그 도시는 바로크 건축으로 유명하다." }] },

  /* 유의어 register 를 book of records 로 바꿨다. register 가 R 세트 챕터 5
     표제어(등록하다, 감지하다 · v)로 올라가면 명사 표제어의 유의어 자리에 동사
     뜻이 뜬다. 사전의 register 값도 '등록하다; 감지하다' 로 명사 뜻이 없었다. */
  { word:"archive", exams:["공무원"], pron:"아카이브", pos:"n", level:"C1", meanings:["기록 보관소","기록물"],
    syn:["record","repository","book of records"],
    ex:[{ s:"The photos are kept in the national {{}}.", f:"archive", ko:"그 사진들은 국가 기록 보관소에 보관되어 있다." }] },

  { word:"ardent", pron:"아던트", pos:"adj", level:"C2", meanings:["열렬한","열정적인"],
    syn:["fervent","passionate","zealous"], ant:["indifferent"],
    ex:[{ s:"He is an {{}} supporter of the reform.", f:"ardent", ko:"그는 그 개혁의 열렬한 지지자이다." }] },

  { word:"argue", exams:["공무원"], pron:"아규", pos:"v", level:"B1", meanings:["주장하다","논쟁하다"],
    syn:["contend","claim","dispute"],
    ex:[{ s:"Critics {{}} that the policy costs too much.", f:"argue", ko:"비평가들은 그 정책이 너무 많은 비용을 든다고 주장한다." }] },

  { word:"argument", exams:["공무원"], pron:"아규먼트", pos:"n", level:"B1", meanings:["주장","논쟁"],
    syn:["reasoning","dispute","debate"], ant:["agreement"],
    ex:[{ s:"Her {{}} rested on solid evidence.", f:"argument", ko:"그녀의 주장은 탄탄한 근거에 기반했다." }] },

  { word:"argumentative", pron:"아규멘터티브", pos:"adj", level:"C1", meanings:["논쟁적인","따지기 좋아하는"],
    syn:["quarrelsome","combative","disputatious"], ant:["agreeable"],
    ex:[{ s:"He grew {{}} whenever money came up.", f:"argumentative", ko:"그는 돈 얘기만 나오면 따지기 시작했다." }] },

  { word:"arise", exams:["공무원"], pron:"어라이즈", pos:"v", level:"B2", meanings:["생기다","발생하다"],
    syn:["emerge","occur","crop up"], ant:["disappear"],
    ex:[{ s:"Problems may {{}} if the schedule slips.", f:"arise", ko:"일정이 밀리면 문제가 생길 수 있다." }] },

  { word:"arithmetic", pron:"어리스메틱", pos:"n", level:"B2", meanings:["산수","셈"],
    syn:["computation","calculation","mathematics"],
    ex:[{ s:"Simple {{}} shows the plan cannot work.", f:"arithmetic", ko:"간단한 셈만 해봐도 그 계획이 안 된다는 걸 알 수 있다." }] },

  { word:"armament", pron:"아머먼트", pos:"n", level:"C2", meanings:["군비","무장"],
    syn:["weaponry","arms","munitions"], ant:["disarmament"],
    ex:[{ s:"The treaty limits naval {{}} on both sides.", f:"armament", ko:"그 조약은 양측의 해군 무장을 제한한다." }] },

  { word:"aroma", pron:"어로마", pos:"n", level:"B2", meanings:["향기","방향"],
    syn:["scent","fragrance","smell"], ant:["stench"],
    ex:[{ s:"The {{}} of fresh bread filled the shop.", f:"aroma", ko:"갓 구운 빵 향기가 가게에 가득했다." }] },

  { word:"arrange", pron:"어레인지", pos:"v", level:"B1", meanings:["정리하다","처리하다"],
    syn:["organize","order","set up"], ant:["disarrange"],
    ex:[{ s:"Please {{}} the chairs in a circle.", f:"arrange", ko:"의자를 원형으로 배치해 주세요." }] },

  { word:"array", pron:"어레이", pos:"n", level:"C1", meanings:["무리","집합"],
    syn:["range","assortment","collection"],
    ex:[{ s:"The store offers a wide {{}} of tools.", f:"array", ko:"그 가게는 다양한 도구를 갖추고 있다." }] },

  { word:"arrival", pron:"어라이벌", pos:"n", level:"B1", meanings:["도착","도래"],
    syn:["coming","appearance","advent"], ant:["departure"],
    ex:[{ s:"His {{}} was delayed by the storm.", f:"arrival", ko:"그의 도착은 폭풍으로 지연되었다." }] },

  { word:"arrogant", exams:["공무원"], pron:"애러건트", pos:"adj", level:"B2", meanings:["오만한","거만한"],
    syn:["haughty","conceited","proud"], ant:["humble"],
    ex:[{ s:"His {{}} tone offended the whole panel.", f:"arrogant", ko:"그의 오만한 어조는 심사단 전체를 불쾌하게 했다." }] },

  { word:"art exhibition", pron:"아트 엑시비션", pos:"phr", level:"B2", meanings:["미술 전시회"],
    syn:["art show","gallery show","display"] },

  { word:"artful", pron:"아트풀", pos:"adj", level:"C1", meanings:["교묘한","솜씨 있는"],
    syn:["cunning","skillful","crafty"], ant:["clumsy"],
    ex:[{ s:"With one {{}} move she won the argument.", f:"artful", ko:"교묘한 한 수로 그녀는 논쟁에서 이겼다." }] },

  { word:"article", pron:"아티클", pos:"n", level:"B1", meanings:["기사","품목"],
    syn:["piece","item","report"],
    ex:[{ s:"She wrote an {{}} on urban farming.", f:"article", ko:"그녀는 도시 농업에 관한 기사를 썼다." }] },

  { word:"articulate", pron:"아티큘레이트", pos:"v", level:"C1", meanings:["분명히 표현하다","또렷이 말하다"],
    syn:["express","voice","enunciate"], ant:["mumble"],
    ex:[{ s:"He struggled to {{}} his fears.", f:"articulate", ko:"그는 자신의 두려움을 분명히 표현하기 힘들어했다." }] },

  { word:"artifact", exams:["공무원"], pron:"아티팩트", pos:"n", level:"C1", meanings:["공예품","유물"],
    syn:["relic","object","artefact"],
    ex:[{ s:"Each {{}} was labeled and photographed.", f:"artifact", ko:"각 유물에는 라벨이 붙고 사진이 찍혔다." }] },

  { word:"artificial", exams:["공무원"], pron:"아티피셜", pos:"adj", level:"B1", meanings:["인공적인","인위적인"],
    syn:["synthetic","man-made","fake"], ant:["natural"],
    ex:[{ s:"The lake is {{}}, built for the city's water.", f:"artificial", ko:"그 호수는 도시의 물을 위해 만든 인공 호수다." }] },


  { word:"as a whole", pron:"애즈 어 홀", pos:"phr", level:"B2", meanings:["전체적으로","대체로"],
    syn:["overall","in general","on the whole"] },

  { word:"as opposed to", pron:"애즈 어포즈드 투", pos:"phr", level:"B2", meanings:["~와는 대조적으로","~이 아니라"],
    syn:["rather than","in contrast to","instead of"] },

  { word:"ascend", pron:"어센드", pos:"v", level:"C1", meanings:["오르다","상승하다"],
    syn:["climb","rise","mount"], ant:["descend"],
    ex:[{ s:"The path {{}} steeply toward the peak.", f:"ascends", ko:"그 길은 정상을 향해 가파르게 오른다." }] },

  { word:"ascribe", pron:"어스크라이브", pos:"v", level:"C2", meanings:["~의 탓으로 돌리다","~에 귀속시키다"],
    syn:["attribute","credit","assign"],
    gov:{ prep:["to"], pat:"ascribe the delay {{}} bad weather", usage:"ascribe A to B : A를 B의 탓으로 돌리다" } },

  { word:"ashamed", pron:"어셰임드", pos:"adj", level:"B1", meanings:["부끄러운","창피한"],
    syn:["embarrassed","guilty","mortified"], ant:["proud"],
    ex:[{ s:"He felt {{}} of his rude reply.", f:"ashamed", ko:"그는 무례한 대답이 부끄러웠다." }] },

  { word:"aspect", exams:["공무원"], pron:"애스펙트", pos:"n", level:"B2", meanings:["측면","양상"],
    syn:["facet","feature","angle"],
    ex:[{ s:"Cost is only one {{}} of the decision.", f:"aspect", ko:"비용은 그 결정의 한 측면일 뿐이다." }] },

  { word:"aspire", pron:"어스파이어", pos:"v", level:"C1", meanings:["열망하다","포부를 갖다"],
    syn:["yearn","strive","seek"],
    gov:{ prep:["to"], pat:"aspire {{}} a leadership role", usage:"aspire to ~ : ~을 열망하다" } },

  { word:"aspiring", pron:"어스파이어링", pos:"adj", level:"C1", meanings:["장차 ~가 되려는","포부 있는"],
    syn:["would-be","ambitious","budding"],
    ex:[{ s:"The course is aimed at {{}} writers.", f:"aspiring", ko:"그 강좌는 장차 작가가 되려는 사람들을 위한 것이다." }] },

  { word:"assail", pron:"어세일", pos:"v", level:"C2", meanings:["공격하다","괴롭히다"],
    syn:["attack","assault","beset"], ant:["defend"],
    ex:[{ s:"Doubts began to {{}} her at midnight.", f:"assail", ko:"자정이 되자 의심이 그녀를 괴롭히기 시작했다." }] },

  { word:"assassinate", pron:"어새시네이트", pos:"v", level:"C1", meanings:["암살하다"],
    syn:["murder","kill","eliminate"],
    ex:[{ s:"Rebels plotted to {{}} the general.", f:"assassinate", ko:"반군은 그 장군을 암살하려는 음모를 꾸몄다." }] },

  { word:"assault", pron:"어솔트", pos:"n", level:"B2", meanings:["습격","폭행"],
    syn:["attack","onslaught","aggression"], ant:["defense"],
    ex:[{ s:"The dawn {{}} took the fort by surprise.", f:"assault", ko:"새벽의 습격은 요새를 기습했다." }] },

  { word:"assemble", exams:["공무원"], pron:"어셈블", pos:"v", level:"B2", meanings:["모으다","조립하다"],
    syn:["gather","collect","build"], ant:["disperse"],
    ex:[{ s:"Crowds began to {{}} outside the hall.", f:"assemble", ko:"군중이 강당 밖에 모이기 시작했다." }] },

  { word:"assembly", pron:"어셈블리", pos:"n", level:"B2", meanings:["집회","의회"],
    syn:["gathering","congress","meeting"],
    ex:[{ s:"The {{}} voted to delay the new law.", f:"assembly", ko:"의회는 새 법을 미루기로 표결했다." }] },

  { word:"assert", pron:"어서트", pos:"v", level:"C1", meanings:["단언하다","주장하다"],
    syn:["declare","affirm","maintain"], ant:["deny"],
    ex:[{ s:"She continued to {{}} her innocence.", f:"assert", ko:"그녀는 계속 자신의 결백을 주장했다." }] },

  { word:"assertive", pron:"어서티브", pos:"adj", level:"C1", meanings:["확신에 찬","적극적인"],
    syn:["confident","forceful","self-assured"], ant:["timid"],
    ex:[{ s:"A good leader must be {{}} but fair.", f:"assertive", ko:"좋은 지도자는 적극적이되 공정해야 한다." }] },

  { word:"assertiveness", pron:"어서티브니스", pos:"n", level:"C2", meanings:["자기주장","적극성"],
    syn:["confidence","forcefulness","firmness"], ant:["passivity"],
    ex:[{ s:"The workshop teaches {{}} without aggression.", f:"assertiveness", ko:"그 워크숍은 공격성 없는 자기주장을 가르친다." }] },

  { word:"assess", exams:["공무원"], pron:"어세스", pos:"v", level:"B2", meanings:["평가하다","가늠하다"],
    syn:["evaluate","gauge","appraise"],
    ex:[{ s:"Judges will {{}} each entry on originality.", f:"assess", ko:"심사위원들은 각 출품작을 독창성으로 평가할 것이다." }] },


  { word:"assessment", exams:["공무원"], pron:"어세스먼트", pos:"n", level:"B2", meanings:["평가","사정"],
    syn:["evaluation","appraisal","judgment"],
    ex:[{ s:"The teacher's {{}} of his work was fair.", f:"assessment", ko:"그의 작업에 대한 교사의 평가는 공정했다." }] },

  { word:"asset", pron:"애셋", pos:"n", level:"B2", meanings:["자산","이점"],
    syn:["resource","advantage","holding"], ant:["liability"],
    ex:[{ s:"Her calm under pressure is a real {{}}.", f:"asset", ko:"압박 속에서의 침착함은 그녀의 진정한 자산이다." }] },

  { word:"assign", exams:["공무원"], pron:"어사인", pos:"v", level:"B2", meanings:["배정하다","할당하다"],
    syn:["allocate","allot","designate"],
    ex:[{ s:"The editor will {{}} each writer a topic.", f:"assign", ko:"편집장은 각 작가에게 주제를 배정할 것이다." }] },

  { word:"assignment", pron:"어사인먼트", pos:"n", level:"B1", meanings:["과제","임무"],
    syn:["task","duty","project"],
    ex:[{ s:"The history {{}} is due on Friday.", f:"assignment", ko:"역사 과제는 금요일까지이다." }] },

  { word:"assimilation", pron:"어시밀레이션", pos:"n", level:"C2", meanings:["동화","흡수"],
    syn:["integration","absorption","incorporation"], ant:["segregation"],
    ex:[{ s:"The film studies the {{}} of immigrants.", f:"assimilation", ko:"그 영화는 이민자들의 동화를 다룬다." }] },

  { word:"assist", exams:["공무원"], pron:"어시스트", pos:"v", level:"B1", meanings:["돕다","보조하다"],
    syn:["help","aid","support"], ant:["hinder"],
    ex:[{ s:"Volunteers {{}} the staff during festivals.", f:"assist", ko:"자원봉사자들은 축제 동안 직원을 돕는다." }] },

  { word:"assistant director", pron:"어시스턴트 디렉터", pos:"phr", level:"B2", meanings:["조감독","부책임자"],
    syn:["deputy director","second-in-command","aide"] },

  { word:"associate", pron:"어소시에이트", pos:"v", level:"B2", meanings:["연관 짓다","결부하다"],
    syn:["link","connect","relate"], ant:["dissociate"],
    ex:[{ s:"People often {{}} the color red with danger.", f:"associate", ko:"사람들은 흔히 빨간색을 위험과 연관 짓는다." }],
    gov:{ prep:["with"], pat:"associate red {{}} danger", usage:"associate A with B : A를 B와 연관 짓다" } },

  { word:"association", pron:"어소시에이션", pos:"n", level:"B2", meanings:["협회","연관"],
    syn:["organization","connection","alliance"],
    ex:[{ s:"She joined a local writers' {{}}.", f:"association", ko:"그녀는 지역 작가 협회에 가입했다." }] },

  { word:"assort", pron:"어소트", pos:"v", level:"C2", meanings:["분류하다","구분하다"],
    syn:["classify","sort","categorize"], ant:["mix"],
    ex:[{ s:"Workers {{}} the fruit by size and color.", f:"assort", ko:"인부들은 과일을 크기와 색으로 분류한다." }] },

  { word:"assume", pron:"어슘", pos:"v", level:"B2", meanings:["추정하다","(책임을) 지다"],
    /* ★ syn 의 "presume" 을 "take for granted" 로 바꿨다. presume(P) 은 표제어이고
       그 뜻이 '추정하다, 가정하다' 인데, 사전이 suppose 에도 똑같은 글자를 적어
       두어 이 목록에 설명이 완전히 같은 선택지가 둘 있었다. suppose 가 S 세트에서
       표제어가 되면서 그 글자가 확정되므로 이 자리를 갈았다. */
    syn:["suppose","take for granted","take on"],
    ex:[{ s:"Do not {{}} that silence means agreement.", f:"assume", ko:"침묵이 동의를 뜻한다고 추정하지 마라." }] },

  { word:"assumption", pron:"어섬션", pos:"n", level:"B2", meanings:["추정","가정"],
    syn:["presumption","supposition","premise"],
    ex:[{ s:"The plan rests on one shaky {{}}.", f:"assumption", ko:"그 계획은 하나의 불안정한 가정에 기대고 있다." }] },

  { word:"assure", pron:"어슈어", pos:"v", level:"B2", meanings:["장담하다","보장하다"],
    syn:["guarantee","reassure","promise"],
    ex:[{ s:"I can {{}} you that the data is safe.", f:"assure", ko:"데이터가 안전하다는 것을 장담할 수 있습니다." }] },

  { word:"assured", pron:"어슈어드", pos:"adj", level:"C1", meanings:["자신 있는","보장된"],
    syn:["confident","certain","guaranteed"], ant:["uncertain"],
    ex:[{ s:"She gave an {{}} answer to every question.", f:"assured", ko:"그녀는 모든 질문에 자신 있는 대답을 했다." }] },

  { word:"asteroid", pron:"애스터로이드", pos:"n", level:"C1", meanings:["소행성"],
    syn:["minor planet","space rock","planetoid"],
    ex:[{ s:"A small {{}} passed close to Earth last night.", f:"asteroid", ko:"작은 소행성이 어젯밤 지구 가까이를 지나갔다." }] },

  { word:"asthma", pron:"애즈마", pos:"n", level:"B2", meanings:["천식"],
    syn:["respiratory condition","wheezing disorder","bronchial illness"],
    ex:[{ s:"Air pollution can worsen a child's {{}}.", f:"asthma", ko:"대기 오염은 아이의 천식을 악화시킬 수 있다." }] },

  { word:"astonish", pron:"어스타니쉬", pos:"v", level:"B2", meanings:["놀라게 하다"],
    syn:["amaze","astound","stun"],
    ex:[{ s:"The results will {{}} even the experts.", f:"astonish", ko:"그 결과는 전문가들조차 놀라게 할 것이다." }] },

  { word:"astonishment", exams:["공무원"], pron:"어스타니쉬먼트", pos:"n", level:"C1", meanings:["깜짝 놀람","경악"],
    syn:["amazement","surprise","wonder"],
    ex:[{ s:"To our {{}}, the old engine started at once.", f:"astonishment", ko:"놀랍게도 그 낡은 엔진은 단번에 시동이 걸렸다." }] },

  { word:"astound", pron:"어스타운드", pos:"v", level:"C1", meanings:["경악시키다","큰 충격을 주다"],
    syn:["amaze","astonish","stun"],
    ex:[{ s:"The scale of the fraud {{}} investigators.", f:"astounded", ko:"그 사기의 규모는 조사관들을 경악시켰다." }] },

  { word:"astrology", pron:"어스트랄러지", pos:"n", level:"C1", meanings:["점성술","점성학"],
    syn:["horoscopy","star reading","zodiac study"],
    ex:[{ s:"She reads about {{}} for fun, not belief.", f:"astrology", ko:"그녀는 믿어서가 아니라 재미로 점성술을 읽는다." }] },

  { word:"astronaut", pron:"애스트로넛", pos:"n", level:"B1", meanings:["우주비행사"],
    syn:["cosmonaut","spacefarer","space traveler"],
    ex:[{ s:"The {{}} spent six months on the station.", f:"astronaut", ko:"그 우주비행사는 정거장에서 6개월을 보냈다." }] },

  { word:"astronomical", pron:"애스트로나미컬", pos:"adj", level:"C1", meanings:["천문학적인","어마어마한"],
    syn:["enormous","immense","colossal"], ant:["tiny"],
    ex:[{ s:"The repair costs were simply {{}}.", f:"astronomical", ko:"수리 비용은 그야말로 천문학적이었다." }] },

  { word:"astronomy", pron:"어스트라너미", pos:"n", level:"B2", meanings:["천문학"],
    syn:["stargazing","cosmology","space science"],
    ex:[{ s:"His interest in {{}} began with a cheap telescope.", f:"astronomy", ko:"천문학에 대한 그의 관심은 값싼 망원경에서 시작됐다." }] },

  { word:"at a loss", pron:"앳 어 로스", pos:"phr", level:"B2", meanings:["어쩔 줄 모르는","당황한"],
    syn:["baffled","puzzled","perplexed"] },

  { word:"at all costs", pron:"앳 올 코스츠", pos:"phr", level:"B2", meanings:["무슨 수를 써서라도","기필코"],
    syn:["by any means","whatever happens","no matter what"] },

  { word:"at hand", exams:["공무원"], pron:"앳 핸드", pos:"phr", level:"B2", meanings:["가까이 있는","임박한"],
    syn:["nearby","close","imminent"] },

  { word:"at large", pron:"앳 라지", pos:"phr", level:"C1", meanings:["일반적으로","(범인이) 잡히지 않은"],
    syn:["in general","as a whole","free"] },

  { word:"at length", pron:"앳 렝스", pos:"phr", level:"C1", meanings:["마침내","상세히"],
    syn:["finally","in detail","at last"] },

  { word:"at risk", pron:"앳 리스크", pos:"phr", level:"B2", meanings:["위험에 처한"],
    syn:["endangered","vulnerable","in danger"] },

  { word:"at second hand", pron:"앳 세컨드 핸드", pos:"phr", level:"C1", meanings:["간접적으로","전해 들어"],
    syn:["indirectly","secondhand","via others"] },

  { word:"at the edge", pron:"앳 디 에지", pos:"phr", level:"B2", meanings:["가장자리에","벼랑 끝에"],
    syn:["on the brink","at the verge","on the margin"] },

  { word:"at the expense of", pron:"앳 디 익스펜스 오브", pos:"phr", level:"C1", meanings:["~을 희생하면서","~을 대가로"],
    syn:["at the cost of","to the detriment of","by sacrificing"] },

  /* 원본의 "규칙·법률에 맞추어"는 뜻이 틀려 바로잡았습니다 */
  { word:"at the mercy of", pron:"앳 더 머시 오브", pos:"phr", level:"C1", meanings:["~에 좌우되는","~의 처분에 맡겨진"],
    syn:["subject to","controlled by","at the whim of"] },

  { word:"at the moment", pron:"앳 더 모먼트", pos:"phr", level:"B1", meanings:["바로 지금","현재"],
    syn:["right now","currently","presently"] },

  { word:"at wit's end", pron:"앳 위츠 엔드", pos:"phr", level:"C1", meanings:["어찌할 바를 모르는","속수무책인"],
    syn:["desperate","stumped","at a loss"] },

  { word:"atheist", pron:"에이시이스트", pos:"n", level:"C1", meanings:["무신론자"],
    syn:["nonbeliever","freethinker","skeptic"], ant:["believer"],
    ex:[{ s:"As an {{}}, he rarely visits temples.", f:"atheist", ko:"무신론자로서 그는 사원에 거의 가지 않는다." }] },


  { word:"athlete", pron:"애슬릿", pos:"n", level:"B1", meanings:["운동선수"],
    syn:["sportsperson","competitor","player"],
    ex:[{ s:"Every {{}} trained hard before the games.", f:"athlete", ko:"모든 선수가 대회 전에 열심히 훈련했다." }] },

  { word:"athletic", pron:"애슬레틱", pos:"adj", level:"B2", meanings:["운동의","몸이 튼튼한"],
    syn:["fit","muscular","sporty"], ant:["frail"],
    ex:[{ s:"He has a lean, {{}} build.", f:"athletic", ko:"그는 날씬하고 탄탄한 체격을 지녔다." }] },

  { word:"atmosphere", pron:"앳머스피어", pos:"n", level:"B1", meanings:["분위기","대기"],
    syn:["mood","ambience","air"],
    ex:[{ s:"The cafe has a relaxed {{}}.", f:"atmosphere", ko:"그 카페는 편안한 분위기를 지녔다." }] },

  { word:"atomic", pron:"어타믹", pos:"adj", level:"B2", meanings:["원자의","원자력의"],
    syn:["nuclear","subatomic","molecular"],
    ex:[{ s:"The museum explains {{}} energy simply.", f:"atomic", ko:"그 박물관은 원자력 에너지를 쉽게 설명한다." }] },

  { word:"attach", pron:"어태치", pos:"v", level:"B1", meanings:["첨부하다","붙이다"],
    syn:["fasten","affix","append"], ant:["detach"],
    ex:[{ s:"Please {{}} your resume to the email.", f:"attach", ko:"이메일에 이력서를 첨부해 주세요." }] },

  { word:"attack", pron:"어택", pos:"v", level:"B1", meanings:["공격하다"],
    syn:["assault","strike","assail"], ant:["defend"],
    ex:[{ s:"Critics were quick to {{}} the new tax.", f:"attack", ko:"비평가들은 새 세금을 재빨리 공격했다." }] },

  { word:"attain", exams:["공무원"], pron:"어테인", pos:"v", level:"C1", meanings:["얻다","성취하다"],
    syn:["achieve","reach","accomplish"], ant:["lose"],
    ex:[{ s:"Few runners {{}} such a fast time.", f:"attain", ko:"그렇게 빠른 기록을 달성하는 주자는 드물다." }] },

  { word:"attainment", pron:"어테인먼트", pos:"n", level:"C1", meanings:["성취","달성"],
    syn:["achievement","accomplishment","success"], ant:["failure"],
    ex:[{ s:"The award honors lifetime {{}} in science.", f:"attainment", ko:"그 상은 과학 분야의 평생 업적을 기린다." }] },

  { word:"attempt", pron:"어템트", pos:"v", level:"B1", meanings:["시도하다","노력하다"],
    syn:["try","endeavor","strive"],
    ex:[{ s:"She will {{}} the exam again next month.", f:"attempt", ko:"그녀는 다음 달에 그 시험에 다시 도전할 것이다." }] },

  { word:"attend to", pron:"어텐드 투", pos:"phr", level:"B2", meanings:["처리하다","돌보다"],
    syn:["deal with","see to","take care of"] },

  { word:"attendance", pron:"어텐던스", pos:"n", level:"B2", meanings:["출석","참석"],
    syn:["presence","turnout","appearance"], ant:["absence"],
    ex:[{ s:"{{}} at the lecture was surprisingly high.", f:"Attendance", ko:"그 강연의 참석률은 놀랄 만큼 높았다." }] },

  { word:"attention", pron:"어텐션", pos:"n", level:"B1", meanings:["주목","주의"],
    syn:["notice","focus","concentration"], ant:["inattention"],
    ex:[{ s:"The poster is designed to grab {{}}.", f:"attention", ko:"그 포스터는 주목을 끌도록 디자인되었다." }] },

  { word:"attentive", pron:"어텐티브", pos:"adj", level:"C1", meanings:["주의를 기울이는","배려하는"],
    syn:["alert","observant","considerate"], ant:["inattentive"],
    ex:[{ s:"The staff were {{}} to every guest.", f:"attentive", ko:"직원들은 모든 손님에게 세심하게 신경 썼다." }] },

  { word:"attest", pron:"어테스트", pos:"v", level:"C2", meanings:["증명하다","증언하다"],
    syn:["confirm","verify","certify"], ant:["deny"],
    ex:[{ s:"The scars {{}} to a hard childhood.", f:"attest", ko:"그 흉터들이 고된 어린 시절을 증언한다." }] },

  { word:"attic", pron:"애틱", pos:"n", level:"B2", meanings:["다락방"],
    syn:["loft","garret","upper room"], ant:["basement"],
    ex:[{ s:"Old letters were stored in the {{}}.", f:"attic", ko:"오래된 편지들은 다락방에 보관되어 있었다." }] },

  { word:"attire", pron:"어타이어", pos:"n", level:"C1", meanings:["의복","복장"],
    syn:["clothing","dress","garb"],
    ex:[{ s:"Formal {{}} is required at the ceremony.", f:"attire", ko:"그 행사에는 정장 복장이 요구된다." }] },

  { word:"attitude", pron:"애티튜드", pos:"n", level:"B1", meanings:["태도","사고방식"],
    syn:["outlook","stance","mindset"],
    ex:[{ s:"A positive {{}} makes hard work easier.", f:"attitude", ko:"긍정적인 태도는 힘든 일을 수월하게 만든다." }] },

  { word:"attorney", pron:"어터니", pos:"n", level:"B2", meanings:["변호사","대리인"],
    syn:["lawyer","counsel","advocate"],
    ex:[{ s:"Her {{}} advised her to stay silent.", f:"attorney", ko:"그녀의 변호사는 침묵을 지키라고 조언했다." }] },

  { word:"attract", pron:"어트랙트", pos:"v", level:"B1", meanings:["끌다","매혹하다"],
    syn:["draw","lure","entice"], ant:["repel"],
    ex:[{ s:"Bright flowers {{}} bees and butterflies.", f:"attract", ko:"화려한 꽃은 벌과 나비를 끌어들인다." }] },

  { word:"attraction", pron:"어트랙션", pos:"n", level:"B2", meanings:["명소","매력"],
    syn:["appeal","allure","draw"], ant:["repulsion"],
    ex:[{ s:"The old bridge is the town's main {{}}.", f:"attraction", ko:"그 오래된 다리는 마을의 주요 명소이다." }] },

  { word:"attribute", exams:["공무원"], pron:"어트리뷰트", pos:"v", level:"C1", meanings:["~의 결과로 여기다","덕분으로 돌리다"],
    syn:["ascribe","credit","assign"],
    ex:[{ s:"Experts {{}} the change to warmer seas.", f:"attribute", ko:"전문가들은 그 변화를 더 따뜻해진 바다 탓으로 본다." }] },

  { word:"attribute A to B", pron:"어트리뷰트 에이 투 비", pos:"phr", level:"C1", meanings:["A를 B의 탓으로 돌리다"],
    syn:["ascribe A to B","credit A to B","blame B for A"] },

  { word:"auction", pron:"옥션", pos:"n", level:"B2", meanings:["경매"],
    syn:["sale","bidding","public sale"],
    ex:[{ s:"The painting sold at {{}} for a record price.", f:"auction", ko:"그 그림은 경매에서 기록적인 가격에 팔렸다." }] },

  { word:"audible", pron:"오더블", pos:"adj", level:"C1", meanings:["들리는","들을 수 있는"],
    syn:["perceptible","clear","discernible"], ant:["inaudible"],
    ex:[{ s:"Her voice was barely {{}} over the wind.", f:"audible", ko:"그녀의 목소리는 바람 소리에 거의 들리지 않았다." }] },

  { word:"audience", pron:"오디언스", pos:"n", level:"B1", meanings:["관객","청중"],
    syn:["spectators","viewers","listeners"],
    ex:[{ s:"The {{}} clapped for a full minute.", f:"audience", ko:"관객은 꼬박 1분간 박수를 쳤다." }] },

  { word:"audit", pron:"오딧", pos:"v", level:"C1", meanings:["회계 감사하다","점검하다"],
    syn:["inspect","examine","review"],
    ex:[{ s:"An outside firm will {{}} the accounts.", f:"audit", ko:"외부 회사가 그 회계를 감사할 것이다." }] },

  { word:"auditory", pron:"오디토리", pos:"adj", level:"C1", meanings:["청각의"],
    syn:["hearing","acoustic","aural"], ant:["visual"],
    ex:[{ s:"The test measures {{}} response to sound.", f:"auditory", ko:"그 검사는 소리에 대한 청각 반응을 측정한다." }] },

  { word:"aura", pron:"오라", pos:"n", level:"C1", meanings:["기운","분위기"],
    syn:["atmosphere","air","ambience"],
    ex:[{ s:"The ruins have an {{}} of mystery.", f:"aura", ko:"그 유적에는 신비로운 기운이 감돈다." }] },

  { word:"aural", pron:"오럴", pos:"adj", level:"C2", meanings:["청각의","귀의"],
    syn:["auditory","hearing","acoustic"], ant:["visual"],
    ex:[{ s:"The exam includes an {{}} comprehension task.", f:"aural", ko:"그 시험에는 청취 이해 과제가 포함된다." }] },

  { word:"authentic", exams:["공무원"], pron:"어센틱", pos:"adj", level:"B2", meanings:["진짜의","믿을 만한"],
    syn:["genuine","real","bona fide"], ant:["fake"],
    ex:[{ s:"The restaurant serves {{}} regional food.", f:"authentic", ko:"그 식당은 진짜 지역 음식을 낸다." }] },

  { word:"authenticity", exams:["공무원"], pron:"오센티시티", pos:"n", level:"C1", meanings:["진짜임","정통성"],
    syn:["genuineness","legitimacy","validity"], ant:["fakeness"],
    ex:[{ s:"Experts confirmed the {{}} of the letter.", f:"authenticity", ko:"전문가들은 그 편지의 진위를 확인했다." }] },

  { word:"author", pron:"오서", pos:"n", level:"B1", meanings:["저자","작가"],
    syn:["writer","novelist","creator"],
    ex:[{ s:"The {{}} signed copies after the talk.", f:"author", ko:"저자는 강연 후 책에 사인을 해 주었다." }] },

  { word:"authoritative", pron:"어소리테이티브", pos:"adj", level:"C1", meanings:["권위 있는","권위적인"],
    syn:["definitive","official","commanding"], ant:["unreliable"],
    ex:[{ s:"Her book is the most {{}} on the subject.", f:"authoritative", ko:"그녀의 책은 그 주제에 관해 가장 권위 있다." }] },

  { word:"authority", exams:["공무원"], pron:"어소리티", pos:"n", level:"B2", meanings:["권한","당국"],
    syn:["power","control","jurisdiction"],
    ex:[{ s:"Only the manager has the {{}} to sign.", f:"authority", ko:"오직 관리자만 서명할 권한이 있다." }] },


  { word:"autobiography", pron:"오토바이아그래피", pos:"n", level:"B2", meanings:["자서전"],
    syn:["memoir","life story","personal history"],
    ex:[{ s:"His {{}} covers his years in exile.", f:"autobiography", ko:"그의 자서전은 망명 시절을 다룬다." }] },

  { word:"autocracy", pron:"오타크러시", pos:"n", level:"C2", meanings:["독재 정치","절대 권력"],
    syn:["dictatorship","despotism","tyranny"], ant:["democracy"],
    ex:[{ s:"The reforms slowly replaced the old {{}}.", f:"autocracy", ko:"그 개혁은 낡은 독재 체제를 서서히 대체했다." }] },

  { word:"automatic", exams:["공무원"], pron:"오토매틱", pos:"adj", level:"B1", meanings:["자동의"],
    syn:["self-acting","mechanical","automated"], ant:["manual"],
    ex:[{ s:"The doors are fully {{}}.", f:"automatic", ko:"그 문은 완전히 자동이다." }] },

  { word:"automobile", pron:"오토모빌", pos:"n", level:"B1", meanings:["자동차"],
    syn:["car","vehicle","motorcar"],
    ex:[{ s:"The {{}} industry faces a shift to electric power.", f:"automobile", ko:"자동차 산업은 전기 동력으로의 전환에 직면해 있다." }] },

  { word:"automotive", pron:"오토모티브", pos:"adj", level:"C1", meanings:["자동차의"],
    syn:["car-related","vehicular","motor"],
    ex:[{ s:"She works in {{}} design.", f:"automotive", ko:"그녀는 자동차 디자인 분야에서 일한다." }] },

  { word:"autonomous", exams:["공무원"], pron:"오타너머스", pos:"adj", level:"C1", meanings:["자율적인","자치의"],
    syn:["independent","self-governing","self-ruling"], ant:["dependent"],
    ex:[{ s:"The region became largely {{}} after the treaty.", f:"autonomous", ko:"그 지역은 조약 이후 대체로 자치를 이루게 되었다." }] },

  { word:"autonomy", exams:["공무원"], pron:"오타너미", pos:"n", level:"C1", meanings:["자율성","자치권"],
    syn:["independence","self-rule","freedom"], ant:["dependence"],
    ex:[{ s:"Teachers want more {{}} over the curriculum.", f:"autonomy", ko:"교사들은 교육과정에 대한 더 많은 자율성을 원한다." }] },

  { word:"autopsy", pron:"오탑시", pos:"n", level:"C1", meanings:["부검","검시"],
    syn:["postmortem","examination","dissection"],
    ex:[{ s:"The {{}} revealed the true cause of death.", f:"autopsy", ko:"부검은 진짜 사인을 밝혀냈다." }] },

  /* 원본의 "선례를 따르다"는 뜻이 틀려 바로잡았습니다 */
  { word:"avail oneself of", pron:"어베일 원셀프 오브", pos:"phr", level:"C2", meanings:["~을 이용하다","~을 활용하다"],
    /* ★ syn 의 "make use of" 를 "put to use" 로 바꿨다. 사전이 make use of 와
       take advantage of 에 똑같이 '~을 이용하다' 를 적어 두어, 이 목록에 설명이
       완전히 같은 선택지가 둘 있었다. take advantage of 가 T 세트에서 표제어가
       되면서 그 글자가 확정되므로 이 자리를 갈았다.
       make use of 는 employ(E) 에도 참조가 있어 발음만 남는 유령 키가 되지 않는다. */
    syn:["put to use","utilize","take advantage of"] },

  { word:"available", exams:["공무원"], pron:"어베일러블", pos:"adj", level:"B1", meanings:["이용 가능한","시간이 있는"],
    syn:["obtainable","accessible","free"], ant:["unavailable"],
    ex:[{ s:"A doctor is {{}} around the clock.", f:"available", ko:"의사가 24시간 대기하고 있다." }] },

  { word:"avalanche", pron:"애벌랜치", pos:"n", level:"C1", meanings:["눈사태","쇄도"],
    syn:["snowslide","landslide","flood"],
    ex:[{ s:"An {{}} blocked the mountain pass for days.", f:"avalanche", ko:"눈사태가 며칠 동안 고갯길을 막았다." }] },

  { word:"averse to", pron:"어버스 투", pos:"phr", level:"C1", meanings:["~을 싫어하는","~을 꺼리는"],
    syn:["opposed to","reluctant to","disinclined to"] },

  { word:"avert", pron:"어버트", pos:"v", level:"C1", meanings:["막다","외면하다"],
    syn:["prevent","avoid","deflect"], ant:["cause"],
    ex:[{ s:"Quick action helped {{}} a disaster.", f:"avert", ko:"신속한 조치가 재앙을 막는 데 도움이 되었다." }] },

  { word:"aviation", exams:["공무원"], pron:"에이비에이션", pos:"n", level:"C1", meanings:["항공","비행"],
    syn:["flying","aeronautics","air travel"],
    ex:[{ s:"The museum traces the history of {{}}.", f:"aviation", ko:"그 박물관은 항공의 역사를 추적한다." }] },

  { word:"avid", pron:"애비드", pos:"adj", level:"C1", meanings:["열심인","열렬한"],
    syn:["keen","enthusiastic","eager"], ant:["indifferent"],
    ex:[{ s:"She is an {{}} reader of detective novels.", f:"avid", ko:"그녀는 추리 소설을 열심히 읽는 독자이다." }] },

  { word:"avoid", pron:"어보이드", pos:"v", level:"B1", meanings:["피하다"],
    syn:["evade","shun","sidestep"], ant:["confront"],
    ex:[{ s:"Drivers should {{}} the flooded road.", f:"avoid", ko:"운전자들은 침수된 도로를 피해야 한다." }] },

  { word:"award", exams:["공무원"], pron:"어워드", pos:"n", level:"B1", meanings:["상","수상"],
    syn:["prize","honor","accolade"],
    ex:[{ s:"She received an {{}} for her research.", f:"award", ko:"그녀는 연구로 상을 받았다." }] },

  { word:"awareness", exams:["공무원"], pron:"어웨어니스", pos:"n", level:"B2", meanings:["인식","알고 있음"],
    syn:["consciousness","recognition","understanding"], ant:["ignorance"],
    ex:[{ s:"The campaign raised {{}} of ocean plastic.", f:"awareness", ko:"그 캠페인은 해양 플라스틱에 대한 인식을 높였다." }] },

  { word:"awesome", pron:"어썸", pos:"adj", level:"B1", meanings:["굉장한","엄청난"],
    syn:["amazing","stunning","magnificent"], ant:["dreadful"],
    ex:[{ s:"The canyon at sunrise was truly {{}}.", f:"awesome", ko:"해돋이 때의 협곡은 정말 굉장했다." }] },

  { word:"awful", pron:"오풀", pos:"adj", level:"B1", meanings:["끔찍한","형편없는"],
    syn:["terrible","dreadful","horrible"], ant:["wonderful"],
    ex:[{ s:"The soup tasted {{}} without salt.", f:"awful", ko:"그 수프는 소금이 없어 끔찍한 맛이었다." }] },

  { word:"awkward", pron:"어쿼드", pos:"adj", level:"B2", meanings:["어색한","불편한"],
    syn:["clumsy","uncomfortable","embarrassing"], ant:["graceful"],
    ex:[{ s:"There was an {{}} silence after his joke.", f:"awkward", ko:"그의 농담 뒤에 어색한 침묵이 흘렀다." }] }
];





/* ── 영단어 → 한국어 뜻 사전 ──────────────────────
   VOCAB에 표제어로 없는 영단어의 뜻을 여기에 등록한다.
   '아닌 것 고르기'가 선택지(유의어·반의어 양쪽)의 뜻을 보여줄 때 쓴다.

   예전 이름은 ANT_DICT였다. 반의어 전용으로 만들었는데 유의어 뜻도 필요해지면서
   사전을 하나 더 두려 했더니, bare·agreement처럼 양쪽에 다 쓰이는 단어가 129개나
   되었다. 사전이 둘이면 같은 단어의 뜻이 두 곳에 갈라져 한쪽만 고치는 사고가
   난다. 그래서 유의어·반의어를 구별하지 않는 하나의 사전으로 합쳤다.

   ⚠️ 표제어(VOCAB)에 있는 단어는 여기에 넣지 않는다. 읽는 쪽이 VOCAB을 먼저
      찾으므로 죽은 항목이 되고, 뜻이 두 곳으로 갈라진다. */
window.GLOSS = {
  "a few":"소수의, 약간의",
  "absence":"부재, 결석",
  "accessibility": "접근성, 이용 편의",
  "adore":"숭배하다, 아주 좋아하다",
  "agreeable":"쾌적한, 기분 좋은",
  "agreement":"동의, 합의",
  "ally":"동맹, 아군",
  "amidst": "~의 가운데에서",
  "anaerobic":"무산소의",
  "appease":"달래다, 진정시키다",
  "assertively": "단호하게, 적극적으로",
  "aversion":"혐오, 반감",
  "base":"염기, 알칼리",
  "basement":"지하실",
  "behind":"뒤에",
  "believer":"신자, 믿는 사람",
  "belonging":"소속감",
  "birth":"출생, 탄생",
  "blame": "탓하다, 비난하다",
  "calm":"차분한, 침착한",
  "care":"돌봄, 보살핌",
  "careless":"부주의한",
  "clumsiness":"서투름",
  "cold":"차가운, 냉담한",
  "comfort":"편안함, 위안",
  "confident":"자신 있는",
  "criticism":"비판, 비평",
  "deactivate":"비활성화하다",
  "decelerate":"감속하다",
  "delight":"기쁨, 즐거움",
  "departure":"출발, 떠남",
  "dependent":"의존하는",
  "despise":"경멸하다",
  "disappearance":"실종, 사라짐",
  "disapproval":"불찬성",
  "disapproving":"못마땅해하는",
  "disarmament":"군축, 무장 해제",
  "disarrange":"어지르다",
  "dislike":"싫어함",
  "dispersal":"분산, 해산",
  "dissociate":"분리하다, 관계를 끊다",
  "distant":"먼, 거리가 있는",
  "distracted":"산만한",
  "during": "~동안에",
  "engaging": "매력 있는, 호감을 주는",
  "establishment":"설립, 기관",
  "exact":"정확한",
  "exactly":"정확히",
  "exclude":"제외하다",
  "fail":"실패하다",
  "failure":"실패",
  "fakeness":"가짜임",
  "fiercely": "맹렬하게",
  "forcefully": "힘차게, 강력하게",
  "foreign":"외국의",
  "graceful":"우아한",
  "grounded":"지상에 있는, 이륙하지 못한",
  "health":"건강",
  "inability":"무능력",
  "inappropriate":"부적절한",
  "inattentive":"부주의한",
  "inaudible":"들리지 않는",
  "indict": "기소하다",
  "indulge in":"~에 탐닉하다",
  "keep":"유지하다, 보관하다",
  "leaky":"새는, 구멍 난",
  "leave":"떠나다",
  "liability":"부채, 책임",
  "lose":"잃다",
  "loss":"손실, 상실",
  "mild":"가벼운, 온화한",
  "misalign":"어긋나게 하다",
  "mix":"섞다",
  "modern":"현대의",
  "modernity":"현대성",
  "named":"이름이 밝혀진",
  "natural":"자연의, 천연의",
  "normal":"정상적인",
  "order":"질서",
  "ordinary":"평범한",
  "partially":"부분적으로",
  "partly":"부분적으로",
  "passively":"수동적으로",
  "passivity":"수동성",
  "peace":"평화",
  "pleasant":"쾌적한, 즐거운",
  "poison":"독",
  "poor":"가난한",
  "proud":"자랑스러운",
  "proven":"입증된",
  "ratify":"비준하다",
  "reasoned":"합리적인",
  "refusal":"거절",
  "refuse":"거절하다",
  "relief":"안도, 구제",
  "repulsion":"혐오감, 반발",
  "repulsive":"혐오스러운",
  "rigidity":"경직성",
  "rivalry":"경쟁, 라이벌 관계",
  "satisfied":"만족한",
  "scarcity":"희소, 드묾",
  "selfish":"이기적인",
  "stench":"악취",
  "stranger":"낯선 사람",
  "terrestrial":"육지의, 지상의",
  "tiny":"아주 작은",
  "unavailable":"이용할 수 없는",
  "uncertain":"불확실한",
  "unfriendly":"불친절한",
  "ungrateful":"감사할 줄 모르는",
  "unmotivated":"의욕 없는",
  "unreliable":"신뢰할 수 없는",
  "unrepentant":"뉘우치지 않는",
  "unsuitable":"부적합한",
  "wonderful":"훌륭한, 멋진"
};
