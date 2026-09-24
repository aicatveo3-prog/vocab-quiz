/**
 * 단어 데이터 — 수능 보카 M 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *
 * ⚠️ GLOSS 는 words.js 가 이미 만들어 둔 객체다. 여기서 window.GLOSS = {...} 로
 *    재대입하면 앞선 세트의 것이 통째로 사라진다. 반드시 이 파일 맨 아래처럼
 *    Object.assign 으로 병합할 것. 키는 소문자, 앞뒤 공백 없이.
 *    ⚠️ 또 gloss.js 에 같은 키가 있는지 먼저 확인할 것 — gloss.js 가 이 파일보다
 *    뒤에 로드되므로 여기 넣은 값이 조용히 덮인다.
 *
 * ── 이 세트의 승격: 212단어 중 97개(46%) ──
 *
 * 비율로는 이 저장소에서 가장 높다. m 으로 시작하는 낱말 중 쓰이는 것들이
 * (modest·merge·modify·mortal·measure·moral 같은) 기본 낱말이어서 오래전부터
 * 다른 문제의 유의어·반의어로 동원돼 왔기 때문이다. 참조는 모두 119곳이다.
 *
 * 그중 18개는 바로 앞서 넣은 I·J·K·L 세트가 참조한다.
 *   mature←immature(I)·juvenile(J)   mortal←immortal(I)·lethal(L)
 *   moral←immoral(I)·lesson(L)       mirror←looking glass(L)
 *   meddle←interfere(I)  mediate←intervene(I)  menace←intimidate(I)
 *   merge←incorporate(I) metaphor←imagery(I)   mimic←imitate(I)
 *   minor←incidental(I)  mishap←incident(I)    momentum←impetus(I)
 *   motivate←inspire(I)  motivation←incentive(I)
 *   multiracial←interracial(I)  meanwhile←in the meantime(I)  modest←impudent(I)
 *
 * 원칙은 A~L 세트와 같다.
 *   ① 같은 갈래면 기존 뜻을 쓴다 (기존 문제 화면이 안 바뀐다)
 *   ② 다른 갈래면 기존 쪽 뜻을 첫 자리에 남긴다
 *   ③ 사전에만 있던 갈래는 뒤에 붙여 살린다
 * 판단 근거는 해당 단어 주석에 적는다.
 *
 * ── 원본 뜻 오류를 아홉 고쳤다 ──
 *   marked      '유포적인' → '표시된'        (뜻이 안 통하는 말이었다)
 *   millennium  '천 년간의, 천년기의' → '천 년, 천년기' (명사인데 형용사로 적혔다)
 *   meadow      '녹초지' → '목초지'          (오타)
 *   mistress    '여왕' → '안주인'            (여왕은 queen)
 *   manned      '사람이 하는' → '유인의'      (사람이 타고 조작하는 쪽)
 *   marrow      '뼈골' → '골수, 뼛속'        (표준어가 아니었다)
 *   monologue   '1인 극' → '1인극'           (띄어쓰기)
 *   medieval    '중고의, 낡은' → '중세의'     ← 사전에 맞는 값이 있어 승격으로 교정
 *   menace      '위협적인' → '으르다'(동사)    ← 같음. '위협적인' 은 menacing
 *   multiracial '다문화의' → '여러 인종의'     ← 같음. '다문화의' 는 multicultural
 *
 * ── 뜻이 겹쳐 갈라 쓴 것 (7묶음) ──
 *   magnificent 웅장한 / majestic 장엄한          (사전 값이 이미 갈려 있었다)
 *   means 수단 / method 방법                      (사전 값)
 *   multicultural 다문화의 / multiracial 여러 인종의 (사전 값)
 *   misconception 잘못된 생각 / misinterpretation 오역 / misunderstanding 오해
 *   misconceive 잘못 생각하다 / misunderstand 오해하다
 *   mob 폭도 / multitude 다수
 *   mumble 중얼거리다(사전 값 유지) / mutter 투덜거리다
 */
window.VOCAB_M = [
  /* ── 챕터 1 ─────────────────────────────── */

  { word:"madden", pron:"매든", pos:"v", level:"C1", meanings:["몹시 화나게 만들다","격분시키다"],
    syn:["enrage","infuriate","exasperate"], ant:["soothe"],
    ex:[{ s:"The endless delays began to {{}} passengers.", f:"madden", ko:"끝없는 지연이 승객들을 몹시 화나게 만들기 시작했다." }] },

  { word:"magician", pron:"머지션", pos:"n", level:"B1", meanings:["마법사","마술사"],
    syn:["conjurer","wizard","illusionist"],
    ex:[{ s:"The {{}} pulled a rabbit from an empty hat.", f:"magician", ko:"그 마술사는 빈 모자에서 토끼를 꺼냈다." }] },

  { word:"magnetic", pron:"매그네틱", pos:"adj", level:"B2", meanings:["자석의","자기의"],
    syn:["magnetized","polarized","charged"],
    ex:[{ s:"The card has a {{}} strip on the back.", f:"magnetic", ko:"그 카드는 뒷면에 자기 띠가 있다." }] },

  /* magnificent 와 어근이 같지만 품사가 달라(n/adj) 같은 보드에 안 온다.
     원본 셋째 갈래 '장엄' 은 meanings 2개 제한에 걸려 뺐다. */
  { word:"magnificence", pron:"매그니피선스", pos:"n", level:"C1", meanings:["훌륭함","웅장"],
    syn:["splendor","grandeur","majesty"],
    ex:[{ s:"Visitors still marvel at the {{}} of the palace.", f:"magnificence", ko:"방문객들은 여전히 그 궁전의 웅장함에 감탄한다." }] },

  /* 승격 ① — GLOSS '웅장한, 훌륭한' 이 원본과 글자까지 같다. awesome(syn) 이 참조한다.
     바로 뒤 majestic 은 사전 값 '장엄한' 을 쓰므로 첫 뜻이 갈린다. */
  { word:"magnificent", pron:"매그니피선트", pos:"adj", level:"B2", meanings:["웅장한","훌륭한"],
    syn:["awesome","splendid","superb"],
    ex:[{ s:"The cathedral is a {{}} piece of architecture.", f:"magnificent", ko:"그 대성당은 웅장한 건축물이다." }] },

  /* 승격 ① — GLOSS '확대하다, 증폭시키다' 를 글자까지 지켰다.
     amplify(syn)·enlarge(syn)·exaggerate(syn) 세 문제가 참조하므로 원본의
     '과장하다' 대신 사전 쪽 '증폭시키다' 를 남겼다. */
  { word:"magnify", pron:"매그너파이", pos:"v", level:"B2", meanings:["확대하다","증폭시키다"],
    syn:["amplify","enlarge","exaggerate"],
    ex:[{ s:"The lens can {{}} the image fifty times.", f:"magnify", ko:"그 렌즈는 상을 50배 확대할 수 있다." }] },

  /* 승격 ① — GLOSS '규모, 크기' 와 같은 갈래다. 참조도 PRON 도 없어 사전 쪽
     표현을 그대로 썼다 — 원본 '엄청난 크기' 는 '엄청난' 이 뜻에 섞여 어색하다. */
  { word:"magnitude", pron:"매그너튜드", pos:"n", level:"C1", meanings:["규모","크기"],
    syn:["scale","extent","dimension"],
    ex:[{ s:"No one grasped the {{}} of the problem at first.", f:"magnitude", ko:"처음에는 아무도 그 문제의 규모를 파악하지 못했다." }] },

  /* 승격 ① — GLOSS '장엄한' 을 첫 자리에 지켰다. grand(syn) 이 참조한다.
     원본 첫 뜻 '웅장한' 은 바로 앞 magnificent 와 같아, 사전 쪽을 앞에 두고
     '위엄 있는' 을 붙여 갈랐다. */
  { word:"majestic", pron:"머제스틱", pos:"adj", level:"B2", meanings:["장엄한","위엄 있는"],
    syn:["grand","stately","imposing"],
    ex:[{ s:"The eagle made a {{}} sweep over the valley.", f:"majestic", ko:"그 독수리가 골짜기 위로 장엄하게 선회했다." }] },

  /* 승격 ① — GLOSS '대다수, 과반수' 를 글자까지 지켰다. bulk(syn) 이 참조하므로
     원본의 '대부분' 대신 사전 쪽을 남겼다.
     반의어 minority 는 7차에서 표제어가 되어 채워 넣었다. */
  { word:"majority", pron:"머조러티", pos:"n", level:"B1", meanings:["대다수","과반수"],
    syn:["bulk","most","greater part"], ant:["minority"],
    ex:[{ s:"A clear {{}} of voters backed the proposal.", f:"majority", ko:"유권자의 분명한 대다수가 그 제안을 지지했다." }] },

  /* 'make ~' 구가 여덟 개 이어진다. pos 가 phr 인 항목에는 ex 를 붙이지 않는다 —
     A~L 세트의 phr 248개 중 예문을 가진 것이 0개다. 구는 빈칸으로 파도 어형
     변화가 없어 문제가 성립하지 않는다. 대신 syn 3개로 '아닌 것 고르기' 를 덮는다. */
  { word:"make a fuss", pron:"메이크 어 퍼스", pos:"phr", level:"B2", meanings:["소란을 피우다"],
    syn:["kick up a row","complain loudly","make a scene"] },

  { word:"make a reservation", pron:"메이크 어 레저베이션", pos:"phr", level:"B1", meanings:["예약하다"],
    syn:["book","reserve","book ahead"] },

  { word:"make headway", pron:"메이크 헤드웨이", pos:"phr", level:"B2", meanings:["나아가다","진전을 보이다"],
    syn:["progress","gain ground","press forward"] },

  { word:"make it", pron:"메이크 잇", pos:"phr", level:"B2", meanings:["시간 약속을 지키다","이루다"],
    syn:["arrive in time","succeed","pull it off"] },

  { word:"make sense", pron:"메이크 센스", pos:"phr", level:"B1", meanings:["의미가 통하다","이해가 되다"],
    syn:["be logical","add up","hold water"] },

  /* 승격 ① — GLOSS '구성하다; 화해하다' 를 글자까지 지켰다. 참조가 3곳
     (account for·compensate for·constitute)이라 그대로 두었다.
     원본은 명사('구조, 구성; 화장')인데 그 읽기는 보통 makeup 으로 붙여 쓴다. */
  { word:"make up", pron:"메이크 업", pos:"phr", level:"B2", meanings:["구성하다","화해하다"],
    syn:["constitute","account for","compose"] },

  /* 승격 ① — GLOSS '보충하다, 만회하다' 를 글자까지 지켰다. 참조도 PRON 도 없다.
     원본 '보상하다' 를 쓰면 C 세트 compensate 와 첫 뜻이 같아지는데,
     사전 쪽을 쓰면 그 문제도 함께 풀린다. */
  { word:"make up for", pron:"메이크 업 포", pos:"phr", level:"B2", meanings:["보충하다","만회하다"],
    syn:["compensate for","offset","atone for"] },

  /* 승격 ① — GLOSS '~에 길을 내주다' 와 같은 갈래다. give way to(syn) 가 참조한다. */
  { word:"make way for", pron:"메이크 웨이 포", pos:"phr", level:"B2", meanings:["~에 길을 내주다"],
    syn:["give way to","step aside for","clear a path for"] },

  { word:"makeshift", pron:"메이크시프트", pos:"adj", level:"C1", meanings:["임시변통의","임시로 만든"],
    syn:["temporary","improvised","stopgap"], ant:["permanent"],
    ex:[{ s:"They built a {{}} shelter out of branches.", f:"makeshift", ko:"그들은 나뭇가지로 임시변통의 대피소를 만들었다." }] },

  { word:"malevolent", pron:"멀레벌런트", pos:"adj", level:"C2", meanings:["악의 있는","심술궂은"],
    syn:["spiteful","ill-natured","venomous"], ant:["benevolent"],
    ex:[{ s:"He shot her a {{}} look across the room.", f:"malevolent", ko:"그는 방 건너로 그녀에게 악의 있는 시선을 던졌다." }] },

  /* 승격 ① — GLOSS '고장, 오작동' 을 글자까지 지켰다. breakdown(syn) 이 참조한다.
     원본은 동사를 앞에 두지만('제대로 작동하지 않다'), 사전이 명사여서 pos 를
     n 으로 유지했다. */
  { word:"malfunction", pron:"맬펑션", pos:"n", level:"B2", meanings:["고장","오작동"],
    syn:["breakdown","fault","glitch"],
    ex:[{ s:"A software {{}} delayed the whole launch.", f:"malfunction", ko:"소프트웨어 고장이 발사 전체를 지연시켰다." }] },

  /* ── 챕터 2 ─────────────────────────────── */

  /* 원본 둘째 갈래 '심술궂은' 은 챕터 1의 malevolent 와 같다. 이쪽은 실제로 해를
     끼치려는 쪽이어서 '해를 끼치려는' 으로 갈랐다. */
  { word:"malicious", pron:"멀리셔스", pos:"adj", level:"C1", meanings:["악의적인","해를 끼치려는"],
    syn:["malevolent","vindictive","nasty"], ant:["kindly"],
    ex:[{ s:"The email contained {{}} software.", f:"malicious", ko:"그 이메일에는 악의적인 소프트웨어가 들어 있었다." }] },

  { word:"malnutrition", pron:"맬뉴트리션", pos:"n", level:"B2", meanings:["영양실조","영양 부족"],
    syn:["undernourishment","starvation","poor diet"],
    ex:[{ s:"Child {{}} fell sharply after the programme began.", f:"malnutrition", ko:"그 사업이 시작된 뒤 아동 영양실조가 급격히 줄었다." }] },

  { word:"malodorous", pron:"맬로더러스", pos:"adj", level:"C2", meanings:["고약한 냄새가 나는"],
    syn:["smelly","foul-smelling","reeking"], ant:["fragrant"],
    ex:[{ s:"A {{}} cloud drifted from the factory.", f:"malodorous", ko:"고약한 냄새가 나는 연무가 공장에서 흘러나왔다." }] },

  { word:"malpractice", pron:"맬프랙티스", pos:"n", level:"C1", meanings:["의료 사고","위법 행위"],
    syn:["negligence","misconduct","wrongdoing"],
    ex:[{ s:"The surgeon was sued for {{}}.", f:"malpractice", ko:"그 외과의는 의료 사고로 고소당했다." }] },

  /* 뒤 챕터의 mistreat('학대하다')와 첫 뜻이 갈리도록 둘째 갈래를
     '험하게 다루다' 로 했다 — 원본의 '학대하다' 는 mistreat 쪽에 남긴다. */
  { word:"maltreat", pron:"맬트리트", pos:"v", level:"C1", meanings:["거칠게 다루다","험하게 다루다"],
    syn:["abuse","ill-treat","mishandle"],
    ex:[{ s:"Staff who {{}} animals face prosecution.", f:"maltreat", ko:"동물을 거칠게 다루는 직원은 기소된다." }] },

  /* 승격 ① — GLOSS '의무적인, 필수의' 를 글자까지 지켰다. compulsory(syn) 가
     참조하므로 원본의 '강제적인' 대신 사전 쪽을 남겼다. */
  { word:"mandatory", pron:"맨더토리", pos:"adj", level:"B2", meanings:["의무적인","필수의"],
    syn:["compulsory","obligatory","required"], ant:["optional"],
    ex:[{ s:"Helmets are {{}} on all construction sites.", f:"mandatory", ko:"모든 공사 현장에서 안전모는 의무적이다." }] },

  { word:"maneuver", pron:"머누버", pos:"v", level:"C1", meanings:["능숙하게 움직이다","교묘히 다루다"],
    syn:["navigate","steer","work one's way"],
    ex:[{ s:"The driver had to {{}} the truck through a narrow gate.", f:"maneuver", ko:"운전자는 좁은 문으로 트럭을 능숙하게 움직여야 했다." }] },

  /* 승격 ① — GLOSS '열광, 광기' 를 글자까지 지켰다. craze(syn) 가 참조하므로
     원본의 '열중' 대신 사전 쪽 '광기' 를 남겼다. */
  { word:"mania", pron:"메이니어", pos:"n", level:"C1", meanings:["열광","광기"],
    syn:["craze","obsession","frenzy"],
    ex:[{ s:"A {{}} for tulips once swept the Netherlands.", f:"mania", ko:"한때 튤립 열광이 네덜란드를 휩쓸었다." }] },

  /* 원본 셋째 갈래 '분명한'(형용사)은 pos 가 v 라 담지 못했다. */
  { word:"manifest", pron:"매너페스트", pos:"v", level:"C1", meanings:["보이다","나타내다"],
    syn:["display","reveal","exhibit"],
    ex:[{ s:"Symptoms may {{}} themselves years later.", f:"manifest", ko:"증상은 몇 년 뒤에 나타날 수도 있다." }] },

  /* 승격 ① — GLOSS '조종하다, 조작하다' 가 원본과 글자까지 같다.
     brainwash(syn) 가 참조한다. */
  { word:"manipulate", pron:"머니퓰레이트", pos:"v", level:"B2", meanings:["조종하다","조작하다"],
    syn:["brainwash","exploit","control"],
    ex:[{ s:"Advertisers try to {{}} what we want.", f:"manipulate", ko:"광고주는 우리가 원하는 것을 조종하려 한다." }] },

  /* 승격 ① — GLOSS '인공적인' 과 같은 갈래다. artificial(syn) 이 참조한다.
     첫 뜻이 artificial 과 같은데 그쪽이 이 낱말을 유의어로 쓰므로 같은 갈래가 맞다.
     원본의 '인위적인' 은 같은 갈래라 한 갈래로 두었다. */
  { word:"man-made", pron:"맨 메이드", pos:"adj", level:"B2", meanings:["인공적인"],
    syn:["artificial","synthetic","human-made"], ant:["natural"],
    ex:[{ s:"The lake is entirely {{}}.", f:"man-made", ko:"그 호수는 전적으로 인공적이다." }] },

  /* 원본 뜻 '사람이 하는' 은 흐리다. manned spacecraft 처럼 사람이 타고 조작한다는
     뜻이어서 '유인의, 사람이 탑승한' 으로 고쳤다. */
  { word:"manned", pron:"맨드", pos:"adj", level:"C1", meanings:["유인의","사람이 탑승한"],
    syn:["crewed","staffed","human-operated"], ant:["unmanned"],
    ex:[{ s:"The first {{}} flight to the Moon was in 1969.", f:"manned", ko:"달로 향한 첫 유인 비행은 1969년이었다." }] },

  /* 승격 ② — GLOSS '방법, 태도' 다. 참조 둘(conduct·demeanor)이 쓰는 갈래는
     '태도' 쪽이라 둘째 자리에 지켰다. 첫 자리는 원본의 '방식' 으로 했다 —
     사전의 '방법' 을 그대로 쓰면 뒤 챕터의 method('방법, 수법')와 첫 뜻이 겹친다.
     manned 와 앞 네 글자가 같지만 품사가 달라(adj/n) 같은 보드에 안 온다. */
  { word:"manner", pron:"매너", pos:"n", level:"B1", meanings:["방식","태도"],
    syn:["conduct","demeanor","way"],
    ex:[{ s:"She answered in a very polite {{}}.", f:"manner", ko:"그녀는 아주 공손한 방식으로 대답했다." }] },

  /* 승격 ② — GLOSS '수공의; 설명서' 로 형용사와 명사가 섞여 있었다.
     automatic(ant) 이 참조하는 갈래는 형용사 '수공의' 라 첫 자리에 지키고,
     둘째를 원본의 '손으로 하는' 으로 바꿨다 — 한 표제어에 형용사와 명사를
     섞지 않는 쪽이 읽기 낫다. 원본의 '안내서' 는 그래서 뺐다. */
  { word:"manual", pron:"매뉴얼", pos:"adj", level:"B2", meanings:["수공의","손으로 하는"],
    syn:["hand-operated","non-automatic","hands-on"], ant:["automatic"],
    ex:[{ s:"Most of the work on this farm is still {{}}.", f:"manual", ko:"이 농장에서 대부분의 일은 아직 손으로 한다." }] },

  /* 승격 ① — GLOSS '제조하다; 제조' 와 같은 갈래다. 참조도 PRON 도 없어
     동사 쪽으로 정리했다. 원본의 '제조업' 은 명사 갈래라 뺐다. */
  { word:"manufacture", pron:"매뉴팩처", pos:"v", level:"B2", meanings:["제조하다","생산하다"],
    syn:["produce","fabricate","assemble"],
    ex:[{ s:"The plant will {{}} batteries for electric cars.", f:"manufacture", ko:"그 공장은 전기차용 배터리를 제조할 것이다." }] },

  /* 승격 ① — GLOSS '원고, 필사본' 을 글자까지 지켰다. handwritten(syn) 이 참조한다.
     manual·manufacture 와 어근이 같지만 품사가 셋 다 달라(adj/v/n) 같은 보드에
     안 온다. */
  { word:"manuscript", pron:"매뉴스크립트", pos:"n", level:"B2", meanings:["원고","필사본"],
    syn:["draft","typescript","original copy"],
    ex:[{ s:"The {{}} was rejected by three publishers.", f:"manuscript", ko:"그 원고는 세 출판사에서 거절당했다." }] },

  /* 승격 ① — GLOSS '여백; 차이' 와 같은 갈래다. 참조도 PRON 도 없다.
     원본 셋째 갈래 '판매 수익' 은 meanings 2개 제한에 걸려 뺐다. */
  { word:"margin", pron:"마진", pos:"n", level:"B2", meanings:["여백","차이"],
    syn:["border","edge","gap"],
    ex:[{ s:"She wrote notes in the {{}} of the page.", f:"margin", ko:"그녀는 페이지 여백에 메모를 썼다." }] },

  /* margin 과 어근이 같지만 품사가 달라(n/adj) 같은 보드에 안 온다. */
  { word:"marginal", pron:"마저널", pos:"adj", level:"C1", meanings:["가장자리의","중요하지 않은"],
    syn:["peripheral","slight","negligible"], ant:["central"],
    ex:[{ s:"The change had only a {{}} effect on sales.", f:"marginal", ko:"그 변화는 매출에 중요하지 않은 영향만 있었다." }] },

  { word:"marital", pron:"매러털", pos:"adj", level:"C1", meanings:["결혼의","부부의"],
    syn:["conjugal","matrimonial","wedded"],
    ex:[{ s:"The form asks for your {{}} status.", f:"marital", ko:"그 양식은 결혼 여부를 묻는다." }] },

  /* 원본 둘째 갈래 '유포적인' 은 뜻이 안 통하는 말이다. marked 는 눈에 띄게
     뚜렷하다는 뜻이고, 표시가 붙었다는 뜻도 있어 '표시된' 으로 고쳤다. */
  { word:"marked", pron:"마크트", pos:"adj", level:"B2", meanings:["뚜렷한","표시된"],
    syn:["noticeable","pronounced","conspicuous"], ant:["slight"],
    ex:[{ s:"There has been a {{}} improvement in air quality.", f:"marked", ko:"대기 질에 뚜렷한 개선이 있었다." }] },

  /* ── 챕터 3 ─────────────────────────────── */

  /* 원본 첫 뜻 '뼈골' 은 표준어가 아니어서 '골수, 뼛속' 으로 고쳤다. */
  { word:"marrow", pron:"매로", pos:"n", level:"C1", meanings:["골수","뼛속"],
    syn:["bone marrow","pith","innermost part"],
    ex:[{ s:"The transplant replaced the patient's bone {{}}.", f:"marrow", ko:"그 이식은 환자의 골수를 대체했다." }] },

  /* 고유명사다. 기존에 AI·Antarctic·CEO 선례가 있어 대문자로 시작해도 문제없다.
     syn 을 비워 두었다 — 행성 이름을 바꿔 쓸 낱말이 없다. */
  { word:"Mars", pron:"마즈", pos:"n", level:"B1", meanings:["화성"],
    ex:[{ s:"The rover sent back images from the surface of {{}}.", f:"Mars", ko:"그 탐사차는 화성 표면에서 영상을 보내왔다." }] },

  /* marshal 과 앞 다섯 글자가 같지만 품사가 달라(n/v) 같은 보드에 안 온다. */
  { word:"marsh", pron:"마시", pos:"n", level:"B2", meanings:["습지","늪"],
    syn:["swamp","wetland","bog"],
    ex:[{ s:"Rare birds nest in the coastal {{}}.", f:"marsh", ko:"희귀한 새들이 해안 습지에 둥지를 튼다." }] },

  { word:"marshal", pron:"마셜", pos:"v", level:"C2", meanings:["집결시키다","정렬시키다"],
    syn:["assemble","muster","line up"],
    ex:[{ s:"The general began to {{}} his forces at dawn.", f:"marshal", ko:"그 장군은 새벽에 병력을 집결시키기 시작했다." }] },

  { word:"martial", pron:"마셜", pos:"adj", level:"C1", meanings:["군사의","전쟁의"],
    syn:["military","warlike","combative"],
    ex:[{ s:"The government declared {{}} law that night.", f:"martial", ko:"정부는 그날 밤 계엄령을 선포했다." }] },

  { word:"martial art", pron:"마셜 아트", pos:"phr", level:"B2", meanings:["무술"],
    syn:["combat sport","self-defense skill","fighting art"] },

  /* marvelous 와 어근이 같지만 품사가 달라(n/adj) 같은 보드에 안 온다. */
  { word:"marvel", pron:"마벌", pos:"n", level:"B2", meanings:["경이","놀라운 일"],
    syn:["wonder","phenomenon","sensation"],
    ex:[{ s:"The bridge is a {{}} of modern engineering.", f:"marvel", ko:"그 다리는 현대 공학의 경이다." }] },

  /* 승격 ① — GLOSS '놀라운, 굉장한' 을 글자까지 지켰다. fabulous(syn) 가
     참조하므로 원본의 '멋진' 대신 사전 쪽을 남겼다. */
  { word:"marvelous", pron:"마벌러스", pos:"adj", level:"B2", meanings:["놀라운","굉장한"],
    syn:["fabulous","wondrous","stunning"],
    ex:[{ s:"She has a {{}} memory for names.", f:"marvelous", ko:"그녀는 이름을 기억하는 놀라운 능력이 있다." }] },

  /* 승격 ① — GLOSS '남성적인' 과 같은 갈래다. feminine(ant) 이 참조한다.
     원본 '남성의, 남자다운' 도 같은 갈래라 사전 쪽 한 갈래로 두었다. */
  { word:"masculine", pron:"매스큘린", pos:"adj", level:"B2", meanings:["남성적인"],
    syn:["manly","virile","male"], ant:["feminine"],
    ex:[{ s:"The design has a distinctly {{}} feel.", f:"masculine", ko:"그 디자인은 뚜렷하게 남성적인 느낌을 준다." }] },

  /* 승격 ① — GLOSS '다량; 질량' 을 글자까지 지켰다. bulk(syn)·lump(syn) 두 문제가
     참조한다. 원본 첫 뜻 '덩어리' 를 쓰면 L 세트 lump·C 세트 cluster 와 첫 뜻이
     같아지는데, 사전 쪽을 쓰면 그 문제도 함께 풀린다. */
  { word:"mass", pron:"매스", pos:"n", level:"B2", meanings:["다량","질량"],
    syn:["bulk","lump","quantity"],
    ex:[{ s:"A {{}} of paperwork arrived that morning.", f:"mass", ko:"그날 아침 다량의 서류가 도착했다." }] },

  { word:"mass produce", pron:"매스 프러두스", pos:"phr", level:"B2", meanings:["대량 생산하다"],
    syn:["turn out in bulk","churn out","manufacture at scale"] },

  /* 승격 ① — GLOSS '거대한, 대량의' 와 같은 갈래다. 참조도 PRON 도 없어
     원본 뜻을 그대로 썼다. */
  { word:"massive", pron:"매시브", pos:"adj", level:"B2", meanings:["거대한","매우 큰"],
    syn:["colossal","immense","hulking"], ant:["tiny"],
    ex:[{ s:"A {{}} oak stood at the centre of the lawn.", f:"massive", ko:"거대한 떡갈나무가 잔디밭 가운데 서 있었다." }] },

  /* 승격 ① — GLOSS '숙련자, 장인' 을 글자까지 지켰다.
     apprentice(ant)·expert(syn) 두 문제가 참조하므로 원본의 '대가, 거장' 대신
     사전 쪽을 남겼다 — 같은 갈래다. 원본의 동사 갈래('숙련하다')는 pos 가 n 이라 뺐다. */
  { word:"master", pron:"매스터", pos:"n", level:"B1", meanings:["숙련자","장인"],
    syn:["expert","virtuoso","adept"], ant:["apprentice"],
    ex:[{ s:"He trained for years under a {{}} of the craft.", f:"master", ko:"그는 그 공예의 숙련자 밑에서 여러 해 훈련했다." }] },

  /* master 와 어근이 같지만 품사가 둘 다 n 이라 같은 보드에 올 수 있다.
     다만 뜻이 '숙련자' 와 '걸작' 으로 완전히 달라 무리가 없다. */
  { word:"masterpiece", pron:"매스터피스", pos:"n", level:"B2", meanings:["걸작"],
    syn:["magnum opus","crowning work","classic"],
    ex:[{ s:"The novel is widely regarded as his {{}}.", f:"masterpiece", ko:"그 소설은 널리 그의 걸작으로 평가된다." }] },

  /* 원본은 동사를 앞에 두므로 pos 를 v 로 잡았다. 명사 갈래('친구, 짝')는 뺐다. */
  { word:"mate", pron:"메이트", pos:"v", level:"B2", meanings:["짝짓기하다","교배하다"],
    syn:["breed","pair off","couple"],
    ex:[{ s:"These birds {{}} for life.", f:"mate", ko:"이 새들은 평생 짝짓기한다." }] },

  /* 승격 ① — GLOSS '재료, 물질' 을 글자까지 지켰다. content(syn)·fabric(syn) 두
     문제가 참조하므로 원본의 '자료, 데이터' 대신 사전 쪽을 남겼다. */
  { word:"material", pron:"머티리얼", pos:"n", level:"B1", meanings:["재료","물질"],
    /* ★ syn 의 "stuff" 를 "raw stuff for making" 으로 바꿨다. stuff 는 S 세트에서
       동사 '채우다' 로 선다 — 명사 목록에 동사가 끼게 된다. 남은 "substance" 도
       S 세트 낱말이지만 명사 '물질, 본질' 로 서므로 그대로 두어도 맞는다. */
    syn:["fabric","substance","raw stuff for making"],
    ex:[{ s:"The jacket is made from recycled {{}}.", f:"material", ko:"그 재킷은 재활용 재료로 만들어졌다." }] },

  /* material 과 앞 다섯 글자가 같지만 어원이 갈리고 품사도 달라(n/adj)
     같은 보드에 안 온다. */
  { word:"maternal", pron:"머터널", pos:"adj", level:"C1", meanings:["모성의","어머니의"],
    syn:["motherly","nurturing","protective"], ant:["paternal"],
    ex:[{ s:"She felt a strong {{}} instinct from the first day.", f:"maternal", ko:"그녀는 첫날부터 강한 모성 본능을 느꼈다." }] },

  { word:"maternity", pron:"머터너티", pos:"adj", level:"C1", meanings:["출산의","임산부의"],
    syn:["prenatal","obstetric","childbearing"],
    ex:[{ s:"She took six months of {{}} leave.", f:"maternity", ko:"그녀는 6개월의 출산 휴가를 냈다." }] },

  /* 승격 ① — GLOSS '문제; 물질' 을 글자까지 지켰다. content(syn) 가 참조한다.
     원본의 '일' 은 '문제' 와 같은 갈래이고, 동사 갈래('중요하다')는 pos 가 n 이라 뺐다. */
  { word:"matter", pron:"매터", pos:"n", level:"B1", meanings:["문제","물질"],
    syn:["issue","affair","substance"],
    ex:[{ s:"We need to settle this {{}} before Friday.", f:"matter", ko:"우리는 금요일 전에 이 문제를 해결해야 한다." }] },

  /* 승격 ① — GLOSS '성숙한; 성숙하다' 를 글자까지 지켰다. I 세트 immature 와
     J 세트 juvenile 이 반의어로 참조하므로 이 갈래가 바뀌면 방금 넣은 문제 화면이
     바뀐다. 원본의 '다 자란' 은 '성숙한' 과 같은 갈래다. */
  { word:"mature", pron:"머추어", pos:"adj", level:"B2", meanings:["성숙한","성숙하다"],
    syn:["grown-up","developed","ripe"], ant:["immature"],
    ex:[{ s:"He is remarkably {{}} for his age.", f:"mature", ko:"그는 나이에 비해 놀랄 만큼 성숙하다." }] },

  /* ── 챕터 4 ─────────────────────────────── */

  /* 승격 ① — GLOSS '격언' 을 첫 자리에 지켰다. golden rule(syn) 이 참조한다.
     원본의 '좌우명' 을 둘째 자리에 붙였다. */
  { word:"maxim", pron:"맥심", pos:"n", level:"C1", meanings:["격언","좌우명"],
    syn:["golden rule","adage","saying"],
    ex:[{ s:"He lived by the old {{}} that haste makes waste.", f:"maxim", ko:"그는 서두르면 일을 망친다는 옛 격언대로 살았다." }] },

  /* maxim 과 어근이 같지만 품사가 달라(n/v) 같은 보드에 안 온다. */
  { word:"maximize", pron:"맥서마이즈", pos:"v", level:"B2", meanings:["극대화하다","최대화하다"],
    syn:["optimize","boost to the full","get the most out of"], ant:["minimize"],
    ex:[{ s:"The layout is designed to {{}} natural light.", f:"maximize", ko:"그 배치는 자연광을 극대화하도록 설계되었다." }] },

  /* 원본 둘째 갈래 '녹초지' 는 오타여서 '목초지' 로 고쳤다. */
  { word:"meadow", pron:"메도", pos:"n", level:"B1", meanings:["풀밭","목초지"],
    syn:["pasture","grassland","field"],
    ex:[{ s:"Wildflowers covered the upland {{}} in June.", f:"meadow", ko:"6월에 들꽃이 고지 풀밭을 덮었다." }] },

  /* 승격 ① — GLOSS '빈약한' 을 첫 자리에 지켰다. ample(ant) 이 참조한다.
     원본의 '야윈' 을 둘째 자리에 붙였다. */
  { word:"meager", pron:"미거", pos:"adj", level:"C1", meanings:["빈약한","야윈"],
    syn:["scant","paltry","sparse"], ant:["ample"],
    ex:[{ s:"They survived on a {{}} diet of rice and beans.", f:"meager", ko:"그들은 쌀과 콩의 빈약한 식사로 버텼다." }] },

  /* 승격 ① — GLOSS '비열한; 의미하다' 와 같은 갈래다. 참조도 PRON 도 없다.
     원본이 동사를 앞에 두므로 pos 를 v 로 잡고 '의미하다' 를 첫 자리에 두었다 —
     사전의 '비열한' 은 형용사라 둘째 갈래로 담기 어려워 원본의 '못된' 으로 적었다. */
  { word:"mean", pron:"민", pos:"v", level:"B1", meanings:["의미하다","뜻하다"],
    syn:["signify","denote","imply"],
    ex:[{ s:"What exactly does this symbol {{}}?", f:"mean", ko:"이 기호는 정확히 무엇을 의미합니까?" }] },

  /* 승격 ① — GLOSS '의미 없는' 과 같은 갈래다. 참조도 PRON 도 없어 원본 뜻을
     그대로 썼다. */
  { word:"meaningless", pron:"미닝리스", pos:"adj", level:"B2", meanings:["무의미한","중요하지 않은"],
    syn:["pointless","futile","empty"], ant:["significant"],
    ex:[{ s:"Without context the number is {{}}.", f:"meaningless", ko:"맥락이 없으면 그 숫자는 무의미하다." }] },

  /* 승격 ① — GLOSS '수단, 방법' 이 원본과 글자까지 같다. 참조도 PRON 도 없다.
     뒤 챕터의 method 는 '방법, 수법' 이라 첫 뜻이 갈린다. */
  { word:"means", pron:"민즈", pos:"n", level:"B1", meanings:["수단","방법"],
    syn:["method","way","instrument"],
    ex:[{ s:"Email became the main {{}} of contact.", f:"means", ko:"이메일이 주된 연락 수단이 되었다." }] },

  /* 승격 ② — GLOSS '한편으로는' 이다. I 세트 in the meantime 이 참조하는데,
     그쪽 뜻이 '그 사이에' 라 원본의 '그 동안에' 가 오히려 더 맞는다.
     원본 순서대로 두고 사전의 '한편' 을 둘째 자리에 지켰다. */
  { word:"meanwhile", pron:"민와일", pos:"adv", level:"B1", meanings:["그 동안에","한편"],
    syn:["in the meantime","at the same time","in the interim"],
    ex:[{ s:"{{}}, the rest of the team kept working.", f:"Meanwhile", ko:"그 동안에 나머지 팀원들은 계속 일했다." }] },

  { word:"measles", pron:"미절즈", pos:"n", level:"B2", meanings:["홍역"],
    syn:["rubeola","viral rash","childhood fever"],
    ex:[{ s:"A single shot protects most children from {{}}.", f:"measles", ko:"한 번의 주사가 대부분의 아이를 홍역에서 지켜 준다." }] },

  /* 승격 ② — GLOSS '헤아릴 수 있는' 이다. finite(syn) 가 참조한다. 원본의
     '측정할 수 있는' 은 같은 갈래라 사전 쪽을 첫 자리에 지키고, 원본의
     '주목할 만한' 을 둘째 자리에 붙였다. */
  { word:"measurable", pron:"메저러블", pos:"adj", level:"B2", meanings:["헤아릴 수 있는","주목할 만한"],
    syn:["finite","quantifiable","appreciable"],
    ex:[{ s:"The change produced a {{}} drop in emissions.", f:"measurable", ko:"그 변화는 배출량에 헤아릴 수 있는 감소를 낳았다." }] },

  /* 승격 ① — GLOSS '측정하다; 조치' 를 글자까지 지켰다. 참조가 3곳
     (criterion·dose·gauge)이라 그대로 두었다. 원본의 '척도' 는 '조치' 와 다른
     갈래지만 참조가 쓰는 쪽이 사전이라 사전을 따랐다. */
  { word:"measure", pron:"메저", pos:"v", level:"B1", meanings:["측정하다","조치"],
    syn:["gauge","quantify","assess"],
    ex:[{ s:"Scientists {{}} the ice thickness every spring.", f:"measure", ko:"과학자들은 매년 봄 얼음 두께를 측정한다." }] },

  { word:"measure up to", pron:"메저 업 투", pos:"phr", level:"C1", meanings:["~에 부합하다","들어맞다"],
    syn:["live up to","meet the standard of","match"] },

  /* 승격 ① — GLOSS '측정, 치수' 를 글자까지 지켰다. dimension(syn) 이 참조하므로
     원본의 '측량' 대신 사전 쪽을 남겼다.
     measurable·measure 와 어근이 같지만 품사가 셋 다 달라(adj/v/n) 같은 보드에
     안 온다. */
  { word:"measurement", pron:"메저먼트", pos:"n", level:"B1", meanings:["측정","치수"],
    syn:["dimension","reading","gauging"],
    ex:[{ s:"Take the {{}} twice before you cut.", f:"measurement", ko:"자르기 전에 치수를 두 번 재세요." }] },

  /* 승격 ① — GLOSS '기계적인, 자동의' 를 글자까지 지켰다. automatic(syn) 이
     참조하므로 원본의 '기계의' 대신 사전 쪽을 남겼다. */
  { word:"mechanical", pron:"머캐니컬", pos:"adj", level:"B2", meanings:["기계적인","자동의"],
    syn:["automatic","machine-driven","robotic"], ant:["manual"],
    ex:[{ s:"The failure turned out to be purely {{}}.", f:"mechanical", ko:"그 고장은 순전히 기계적인 것으로 드러났다." }] },

  /* 승격 ① — GLOSS '기제, 장치' 와 같은 갈래다. 참조도 PRON 도 없어 원본의
     '기계 장치' 를 첫 자리에 두고 '부품' 대신 사전의 '기제' 를 살렸다. */
  { word:"mechanism", pron:"메커니즘", pos:"n", level:"B2", meanings:["기계 장치","기제"],
    syn:["device","workings","contrivance"],
    ex:[{ s:"The locking {{}} had jammed completely.", f:"mechanism", ko:"잠금 기계 장치가 완전히 걸려 버렸다." }] },

  /* 승격 ① — GLOSS '쓸데없이 참견하다' 를 글자까지 지켰다. I 세트 interfere 가
     참조한다. 원본 '간섭하다' 를 쓰면 그 interfere 와 첫 뜻이 같아지는데,
     사전 쪽을 쓰면 그 문제도 함께 풀린다. */
  { word:"meddle", pron:"메들", pos:"v", level:"C1", meanings:["쓸데없이 참견하다","건드리다"],
    syn:["interfere","pry","tamper"],
    ex:[{ s:"He was warned not to {{}} in family disputes.", f:"meddle", ko:"그는 집안 분쟁에 쓸데없이 참견하지 말라고 경고받았다." }] },

  /* 승격 ① — GLOSS '중재하다' 를 첫 자리에 지켰다. I 세트 intervene 이 참조한다.
     원본의 '조정하다' 를 둘째 자리에 붙였다. */
  { word:"mediate", pron:"미디에이트", pos:"v", level:"C1", meanings:["중재하다","조정하다"],
    syn:["intervene","arbitrate","broker"],
    ex:[{ s:"A neutral party was asked to {{}} the dispute.", f:"mediate", ko:"중립적인 쪽에 그 분쟁을 중재해 달라는 요청이 갔다." }] },

  /* 승격 ① — GLOSS '약물 치료, 약' 을 글자까지 지켰다.
     antidepressant(syn)·chemotherapy(syn) 두 문제가 참조한다. */
  { word:"medication", pron:"메디케이션", pos:"n", level:"B2", meanings:["약물 치료","약"],
    syn:["antidepressant","chemotherapy","drug treatment"],
    ex:[{ s:"She takes daily {{}} for high blood pressure.", f:"medication", ko:"그녀는 고혈압으로 매일 약물 치료를 받는다." }] },

  /* 승격 ① — 원본의 '중고의, 낡은' 은 틀렸다(secondhand 쪽 오역). medieval 은
     중세를 뜻한다. 사전이 이미 '중세의' 이고 feudal(syn) 이 참조하므로 사전 쪽을
     첫 자리에 두고 원본의 '중세풍의' 를 붙였다 — 원본 오류가 승격으로 교정된 자리다. */
  { word:"medieval", pron:"메디이벌", pos:"adj", level:"B2", meanings:["중세의","중세풍의"],
    syn:["feudal","archaic","old-world"], ant:["modern"],
    ex:[{ s:"The town still has its {{}} walls.", f:"medieval", ko:"그 도시는 여전히 중세의 성벽을 갖고 있다." }] },

  /* 승격 ① — GLOSS '평범한, 그저 그런' 을 글자까지 지켰다. brilliant(ant) 이 참조하므로
     원본('평범한' 한 갈래) 대신 사전 쪽 두 갈래를 그대로 두었다. */
  { word:"mediocre", pron:"미디오커", pos:"adj", level:"C1", meanings:["평범한","그저 그런"],
    syn:["indifferent","run-of-the-mill","so-so"], ant:["brilliant"],
    ex:[{ s:"The food was expensive but distinctly {{}}.", f:"mediocre", ko:"음식은 비쌌지만 뚜렷하게 평범했다." }] },

  /* ── 챕터 5 ─────────────────────────────── */

  { word:"meditation", pron:"메더테이션", pos:"n", level:"B2", meanings:["명상","심사숙고"],
    syn:["contemplation","reflection","mindfulness"],
    ex:[{ s:"She begins each day with twenty minutes of {{}}.", f:"meditation", ko:"그녀는 매일 20분의 명상으로 하루를 시작한다." }] },

  /* 고유명사다. Mars 와 같이 기존 AI·Antarctic·CEO 선례를 따른다.
     syn 을 비워 두었다 — 바다 이름을 바꿔 쓸 낱말이 없다. */
  { word:"Mediterranean", pron:"메디터레이니언", pos:"n", level:"B2", meanings:["지중해"],
    ex:[{ s:"Olive trees grow all around the {{}}.", f:"Mediterranean", ko:"올리브 나무가 지중해 전역에 자란다." }] },

  /* 원본 셋째 갈래 '중간의'(형용사)는 pos 가 n 이라 담지 못했다. */
  { word:"medium", pron:"미디엄", pos:"n", level:"B1", meanings:["중간","매개물"],
    syn:["middle ground","channel","vehicle"],
    ex:[{ s:"Radio was once the main {{}} for news.", f:"medium", ko:"라디오는 한때 뉴스의 주된 매개물이었다." }] },

  /* 승격 ② — GLOSS '우울, 침울함' 으로 명사였다. depression(syn) 이 참조하는데
     그쪽도 명사라 pos 를 n 으로 유지했다. 원본은 형용사('우울한')인데 그대로 쓰면
     D 세트 depressed·G 세트 gloomy 와 첫 뜻이 같아지므로 사전 쪽이 낫다. */
  { word:"melancholy", pron:"멜런칼리", pos:"n", level:"C1", meanings:["우울","침울함"],
    syn:["depression","gloom","sadness"],
    ex:[{ s:"A deep {{}} settled over the household.", f:"melancholy", ko:"깊은 우울이 그 집안에 내려앉았다." }] },

  { word:"mellow", pron:"멜로", pos:"adj", level:"C1", meanings:["부드러운","감미로운"],
    syn:["smooth","soothing","rich"], ant:["harsh"],
    ex:[{ s:"The wine had a {{}} oaky flavour.", f:"mellow", ko:"그 포도주는 부드러운 오크 향이 났다." }] },

  /* 승격 ① — GLOSS '녹다, 녹이다' 를 글자까지 지켰다. dissolve(syn) 가 참조한다.
     첫 뜻이 dissolve 와 같은데 그쪽이 이 낱말을 유의어로 쓰므로 같은 갈래가 맞다. */
  { word:"melt", pron:"멜트", pos:"v", level:"B1", meanings:["녹다","녹이다"],
    syn:["dissolve","thaw","liquefy"], ant:["freeze"],
    ex:[{ s:"The glaciers {{}} faster every summer.", f:"melt", ko:"그 빙하는 해마다 여름에 더 빨리 녹는다." }] },

  /* 승격 ① — GLOSS '회고록' 을 첫 자리에 지켰다.
     autobiography(syn)·biography(syn) 두 문제가 참조한다.
     원본의 '자서전' 을 둘째 자리에 붙였다. */
  { word:"memoir", pron:"메무아", pos:"n", level:"C1", meanings:["회고록","자서전"],
    syn:["autobiography","biography","life story"],
    ex:[{ s:"His wartime {{}} became a bestseller.", f:"memoir", ko:"그의 전시 회고록은 베스트셀러가 되었다." }] },

  /* 승격 ② — GLOSS '기념물; 추모의' 였다. '추모의' 는 '추도의' 의 오기로 보이고
     참조도 PRON 도 없어, 원본의 '기념의, 추도의' 를 형용사로 정리했다.
     memoir 와 앞 네 글자가 같지만 품사가 달라(n/adj) 같은 보드에 안 온다. */
  { word:"memorial", pron:"머모리얼", pos:"adj", level:"B2", meanings:["기념의","추도의"],
    syn:["commemorative","remembrance","honoring"],
    ex:[{ s:"A {{}} service was held at the cathedral.", f:"memorial", ko:"대성당에서 추도 예배가 열렸다." }] },

  /* 승격 ① — GLOSS '으르다' 를 첫 자리에 지켰다. I 세트 intimidate 가 참조한다.
     원본 '위협적인' 은 형용사인데 menace 는 명사·동사다 — '위협적인' 은
     menacing 의 뜻이어서 원본이 틀렸다. 사전의 동사 갈래를 따르고 원본의
     '위협' 대신 '위협하다' 로 적었다. */
  { word:"menace", pron:"메너스", pos:"v", level:"C1", meanings:["으르다","위협하다"],
    syn:["intimidate","threaten","bully"],
    ex:[{ s:"Stray dogs began to {{}} the neighbourhood.", f:"menace", ko:"떠돌이 개들이 그 동네를 위협하기 시작했다." }] },

  /* 승격 ① — GLOSS '정신의, 인지의' 를 글자까지 지켰다. cognitive(syn) 가
     참조하므로 원본의 '마음의, 정신적인' 대신 사전 쪽을 남겼다. */
  { word:"mental", pron:"멘털", pos:"adj", level:"B1", meanings:["정신의","인지의"],
    syn:["cognitive","psychological","intellectual"], ant:["physical"],
    ex:[{ s:"The job places a heavy {{}} strain on staff.", f:"mental", ko:"그 일은 직원에게 큰 정신적 부담을 준다." }] },

  /* 승격 ① — GLOSS '언급하다' 를 첫 자리에 지켰다. cite(syn) 가 참조한다.
     원본의 명사 갈래('언급, 거론')는 pos 가 v 라 담지 못해 '거론하다' 로 적었다. */
  { word:"mention", pron:"멘션", pos:"v", level:"B1", meanings:["언급하다","거론하다"],
    syn:["cite","refer to","bring up"],
    ex:[{ s:"She did not {{}} the incident again.", f:"mention", ko:"그녀는 그 사건을 다시 언급하지 않았다." }] },

  /* mental·mention 과 앞 네 글자가 같지만 품사가 셋 다 달라(adj/v/n)
     같은 보드에 안 온다. */
  { word:"mentor", pron:"멘토", pos:"n", level:"B2", meanings:["조언자","스승"],
    syn:["adviser","guide","coach"],
    ex:[{ s:"She credits her old {{}} for the career change.", f:"mentor", ko:"그녀는 진로 변경을 옛 조언자의 공으로 돌린다." }] },

  { word:"merchant", pron:"머천트", pos:"n", level:"B2", meanings:["상인","무역상"],
    syn:["trader","dealer","vendor"],
    ex:[{ s:"A silk {{}} settled in the port town.", f:"merchant", ko:"한 비단 상인이 그 항구 도시에 정착했다." }] },

  /* 승격 ① — GLOSS '자비로운' 을 첫 자리에 지켰다. compassionate(syn) 가 참조한다.
     원본의 '인정 많은' 을 둘째 자리에 붙였다. */
  { word:"merciful", pron:"머시풀", pos:"adj", level:"B2", meanings:["자비로운","인정 많은"],
    syn:["compassionate","lenient","forgiving"], ant:["ruthless"],
    ex:[{ s:"The judge was unusually {{}} in sentencing.", f:"merciful", ko:"그 판사는 형을 정할 때 이례적으로 자비로웠다." }] },

  { word:"mercury", pron:"머큐리", pos:"n", level:"B2", meanings:["수은"],
    syn:["quicksilver","liquid metal","heavy metal"],
    ex:[{ s:"Old thermometers were filled with {{}}.", f:"mercury", ko:"옛 온도계에는 수은이 채워져 있었다." }] },

  { word:"mere", pron:"미어", pos:"adj", level:"B2", meanings:["겨우 ~에 불과한","단지"],
    syn:["nothing more than","bare","scant"],
    ex:[{ s:"The whole repair took a {{}} ten minutes.", f:"mere", ko:"수리 전체가 겨우 10분밖에 걸리지 않았다." }] },

  /* 승격 ① — GLOSS '합치다, 병합하다' 를 글자까지 지켰다. 참조가 4곳
     (blend·combine·consolidate·incorporate)이고 마지막은 I 세트 표제어다.
     원본의 '합병하다, 합체시키다' 도 같은 갈래다. */
  { word:"merge", pron:"머지", pos:"v", level:"B2", meanings:["합치다","병합하다"],
    syn:["blend","combine","consolidate"], ant:["separate"],
    ex:[{ s:"The two departments will {{}} next year.", f:"merge", ko:"두 부서는 내년에 합쳐질 것이다." }] },

  /* 원본 셋째 갈래 '난잡' 은 meanings 2개 제한에 걸려 뺐다. */
  { word:"mess", pron:"메스", pos:"n", level:"B1", meanings:["엉망","혼란"],
    syn:["muddle","disorder","clutter"],
    ex:[{ s:"The kitchen was left in a complete {{}}.", f:"mess", ko:"부엌이 완전히 엉망으로 남겨졌다." }] },

  /* mess 와 어근이 같지만 품사가 달라(n/adj) 같은 보드에 안 온다. */
  { word:"messy", pron:"메시", pos:"adj", level:"B1", meanings:["엉망인","지저분한"],
    syn:["untidy","cluttered","disorderly"], ant:["neat"],
    ex:[{ s:"His desk is always {{}} by Friday.", f:"messy", ko:"그의 책상은 금요일이면 늘 엉망이다." }] },

  { word:"metabolic", pron:"메터발릭", pos:"adj", level:"C1", meanings:["신진대사의"],
    syn:["biochemical","energy-processing","physiological"],
    ex:[{ s:"Cold weather raises the body's {{}} rate.", f:"metabolic", ko:"추운 날씨는 신체의 신진대사율을 높인다." }] },

  /* ── 챕터 6 ─────────────────────────────── */

  /* metabolic 과 어근이 같지만 품사가 달라(adj/n) 같은 보드에 안 온다. */
  { word:"metabolism", pron:"머태벌리즘", pos:"n", level:"C1", meanings:["신진대사"],
    syn:["energy turnover","body chemistry","metabolic rate"],
    ex:[{ s:"Exercise speeds up the body's {{}}.", f:"metabolism", ko:"운동은 신체의 신진대사를 빠르게 한다." }] },

  /* 승격 ① — GLOSS '은유, 비유' 를 글자까지 지켰다. I 세트 imagery 가 참조하므로
     원본의 '상징' 대신 사전 쪽 '비유' 를 남겼다. */
  { word:"metaphor", pron:"메터포", pos:"n", level:"B2", meanings:["은유","비유"],
    syn:["imagery","figure of speech","symbol"],
    ex:[{ s:"The poem uses the sea as a {{}} for memory.", f:"metaphor", ko:"그 시는 바다를 기억의 은유로 쓴다." }] },

  /* 승격 ① — GLOSS '유성' 을 첫 자리에 지켰다. comet(syn) 이 참조한다.
     원본의 '운석' 을 둘째 자리에 붙였다. */
  { word:"meteor", pron:"미티어", pos:"n", level:"B2", meanings:["유성","운석"],
    syn:["comet","shooting star","falling star"],
    ex:[{ s:"A bright {{}} streaked across the night sky.", f:"meteor", ko:"밝은 유성이 밤하늘을 가로질러 갔다." }] },

  { word:"meteorological", pron:"미티어럴라지컬", pos:"adj", level:"C1", meanings:["기상의","기상학의"],
    syn:["weather-related","atmospheric","climatic"],
    ex:[{ s:"The flight was delayed by {{}} conditions.", f:"meteorological", ko:"그 항공편은 기상 조건 때문에 지연되었다." }] },

  { word:"meteorologist", pron:"미티어랄러지스트", pos:"n", level:"C1", meanings:["기상학자"],
    syn:["weather scientist","forecaster","climatologist"],
    ex:[{ s:"The {{}} warned of heavy snow by evening.", f:"meteorologist", ko:"그 기상학자는 저녁까지 폭설을 경고했다." }] },

  { word:"meteorology", pron:"미티어랄러지", pos:"n", level:"C1", meanings:["기상학"],
    syn:["weather science","atmospheric science","climate study"],
    ex:[{ s:"She switched from physics to {{}}.", f:"meteorology", ko:"그녀는 물리학에서 기상학으로 전공을 바꿨다." }] },

  /* 승격 ① — GLOSS '방법, 수법' 이 원본과 글자까지 같다. 참조는 없다.
     4차에서 means 의 유의어로 쓰려고 PRON 을 임시로 넣어 두었는데, 여기서
     표제어가 되면서 그 항목이 지워지고 이 pron 필드가 대신한다.
     챕터 2의 manner('방식')·챕터 4의 means('수단')와 첫 뜻이 갈린다. */
  { word:"method", pron:"메써드", pos:"n", level:"B1", meanings:["방법","수법"],
    syn:["approach","technique","procedure"],
    ex:[{ s:"They developed a faster {{}} of testing.", f:"method", ko:"그들은 더 빠른 검사 방법을 개발했다." }] },

  /* method 와 어근이 같지만 품사가 달라(n/adj) 같은 보드에 안 온다. */
  { word:"methodological", pron:"메써덜라지컬", pos:"adj", level:"C2", meanings:["방법론의","방법론적인"],
    syn:["procedural","systematic","structural"],
    ex:[{ s:"The paper has a serious {{}} flaw.", f:"methodological", ko:"그 논문에는 심각한 방법론적 결함이 있다." }] },

  { word:"meticulously", pron:"머티큘러슬리", pos:"adv", level:"C1", meanings:["꼼꼼하게","좀스럽게"],
    syn:["painstakingly","scrupulously","with great care"],
    ex:[{ s:"Every joint was {{}} sanded by hand.", f:"meticulously", ko:"모든 이음새가 손으로 꼼꼼하게 사포질되었다." }] },

  { word:"metric", pron:"메트릭", pos:"adj", level:"B2", meanings:["미터법의"],
    syn:["decimal","metre-based","standardized"],
    ex:[{ s:"Most countries use the {{}} system.", f:"metric", ko:"대부분의 나라가 미터법 체계를 쓴다." }] },

  { word:"metropolitan", pron:"메트러팔러턴", pos:"adj", level:"B2", meanings:["대도시의","수도의"],
    syn:["urban","city-wide","municipal"],
    ex:[{ s:"The {{}} area holds nine million people.", f:"metropolitan", ko:"그 대도시권에는 900만 명이 산다." }] },

  /* 승격 ① — GLOSS '미생물' 을 첫 자리에 지켰다. germ(syn) 이 참조한다.
     원본의 '세균' 을 둘째 자리에 붙였다. */
  { word:"microbe", pron:"마이크로브", pos:"n", level:"B2", meanings:["미생물","세균"],
    syn:["germ","bacterium","micro-organism"],
    ex:[{ s:"A single {{}} can multiply within hours.", f:"microbe", ko:"한 마리 미생물이 몇 시간 안에 증식할 수 있다." }] },

  { word:"micronutrient", pron:"마이크로뉴트리언트", pos:"n", level:"C2", meanings:["미량 영양소"],
    syn:["trace nutrient","vitamin or mineral","trace element"],
    ex:[{ s:"Leafy greens supply several key {{}}.", f:"micronutrients", ko:"잎채소는 몇 가지 핵심 미량 영양소를 공급한다." }] },

  { word:"midwife", pron:"미드와이프", pos:"n", level:"B2", meanings:["산파","조산사"],
    syn:["birth attendant","obstetric nurse","delivery nurse"],
    ex:[{ s:"A {{}} stayed with her through the night.", f:"midwife", ko:"산파가 밤새 그녀와 함께 있었다." }] },

  { word:"mighty", pron:"마이티", pos:"adj", level:"B2", meanings:["강력한","위대한"],
    syn:["powerful","formidable","potent"], ant:["feeble"],
    ex:[{ s:"A {{}} river cuts through the canyon.", f:"mighty", ko:"강력한 강이 그 협곡을 가른다." }] },

  /* 승격 ① — GLOSS '중대한 사건, 분기점' 을 글자까지 지켰다. epoch(syn) 이
     참조하므로 원본의 '중요한 단계, 획기적인 사건' 대신 사전 쪽을 남겼다. */
  { word:"milestone", pron:"마일스톤", pos:"n", level:"B2", meanings:["중대한 사건","분기점"],
    syn:["epoch","turning point","landmark"],
    ex:[{ s:"The treaty was a {{}} in the peace process.", f:"milestone", ko:"그 조약은 평화 과정의 중대한 사건이었다." }] },

  { word:"milk", pron:"밀크", pos:"v", level:"B2", meanings:["젖을 짜다","최대한 뽑아내다"],
    syn:["draw off","exploit","squeeze dry"],
    ex:[{ s:"They still {{}} the cows by hand.", f:"milk", ko:"그들은 아직 손으로 소의 젖을 짠다." }] },

  /* 원본 뜻 '천 년간의, 천년기의' 는 형용사로 적혀 있었지만 millennium 은 명사다
     (형용사는 millennial). '천 년, 천년기' 로 고쳤다. */
  { word:"millennium", pron:"멀레니엄", pos:"n", level:"C1", meanings:["천 년","천년기"],
    syn:["thousand years","millennial period","ten centuries"],
    ex:[{ s:"The cathedral has stood for almost a {{}}.", f:"millennium", ko:"그 대성당은 거의 천 년 동안 서 있었다." }] },

  /* 승격 ① — GLOSS '흉내 내다, 모방하다' 를 글자까지 지켰다.
     emulate(syn)·imitate(syn) 두 문제가 참조하는데 뒤는 I 세트 표제어다.
     원본은 순서가 반대인데, 사전 쪽을 쓰면 그 두 낱말('모방하다')과 첫 뜻이
     같아지는 것도 함께 피할 수 있다. */
  { word:"mimic", pron:"미믹", pos:"v", level:"B2", meanings:["흉내 내다","모방하다"],
    syn:["emulate","imitate","impersonate"],
    ex:[{ s:"Some birds can {{}} human speech.", f:"mimic", ko:"어떤 새들은 사람의 말을 흉내 낼 수 있다." }] },

  { word:"mindful", pron:"마인드풀", pos:"adj", level:"C1", meanings:["의식하는","염두에 두는"],
    syn:["aware","heedful","attentive"], ant:["oblivious"],
    ex:[{ s:"Be {{}} of the time when you answer.", f:"mindful", ko:"대답할 때 시간을 의식하세요." }] },

  /* ── 챕터 7 ─────────────────────────────── */

  /* 승격 ① — GLOSS '사고방식, 태도' 를 글자까지 지켰다. attitude(syn) 가 참조하므로
     원본의 '심적 경향' 대신 사전 쪽 '태도' 를 남겼다.
     mindful 과 앞 네 글자가 같지만 품사가 달라(adj/n) 같은 보드에 안 온다. */
  { word:"mindset", pron:"마인드셋", pos:"n", level:"B2", meanings:["사고방식","태도"],
    syn:["attitude","outlook","frame of mind"],
    ex:[{ s:"Changing your {{}} is harder than changing habits.", f:"mindset", ko:"사고방식을 바꾸는 것은 습관을 바꾸는 것보다 어렵다." }] },

  /* 원본 첫 뜻 '미네랄' 은 외래어 그대로여서 뺐다. */
  { word:"mineral", pron:"미너럴", pos:"n", level:"B1", meanings:["무기물","광물"],
    syn:["inorganic substance","ore","rock element"],
    ex:[{ s:"The spring water is rich in dissolved {{}}.", f:"minerals", ko:"그 샘물은 용해된 무기물이 풍부하다." }] },

  { word:"mingle", pron:"밍글", pos:"v", level:"C1", meanings:["섞이다","어우러지다"],
    syn:["intermix","blend together","mix freely"],
    ex:[{ s:"Guests began to {{}} after the speeches.", f:"mingle", ko:"손님들은 연설이 끝난 뒤 섞이기 시작했다." }] },

  { word:"minimal", pron:"미너멀", pos:"adj", level:"B2", meanings:["최소의","아주 작은"],
    syn:["slightest","nominal","negligible"], ant:["maximal"],
    ex:[{ s:"The repair caused {{}} disruption to traffic.", f:"minimal", ko:"그 수리는 교통에 최소의 지장만 일으켰다." }] },

  /* 승격 ① — GLOSS '최소화하다, 축소하다' 를 글자까지 지켰다. downplay(syn) 가
     참조하므로 원본('최소화하다' 한 갈래) 대신 사전 쪽 두 갈래를 그대로 두었다.
     minimal 과 어근이 같지만 품사가 달라(adj/v) 같은 보드에 안 온다. */
  { word:"minimize", pron:"미너마이즈", pos:"v", level:"B2", meanings:["최소화하다","축소하다"],
    syn:["downplay","reduce","play down"], ant:["maximize"],
    ex:[{ s:"New rules aim to {{}} food waste in canteens.", f:"minimize", ko:"새 규정은 급식소의 음식물 쓰레기를 최소화하는 것을 목표로 한다." }] },

  /* 승격 ① — GLOSS '성직; 부처' 를 글자까지 지켰다. clergy(syn) 가 '성직' 갈래를
     참조하므로 원본('부처' 가 앞)이 아니라 사전 순서를 남겼다. */
  { word:"ministry", pron:"미니스트리", pos:"n", level:"B2", meanings:["성직","부처"],
    syn:["clergy","government department","priesthood"],
    ex:[{ s:"He left the {{}} after twenty years of service.", f:"ministry", ko:"그는 20년의 봉직 뒤 성직을 떠났다." }] },

  /* 승격 ① — GLOSS '사소한, 작은' 을 글자까지 지켰다. 참조가 3곳
     (cardinal(ant)·crucial(ant)·incidental)이고 마지막은 I 세트 표제어다.
     원본의 '미성년'(명사)은 pos 가 adj 라 담지 못했다. */
  { word:"minor", pron:"마이너", pos:"adj", level:"B1", meanings:["사소한","작은"],
    syn:["incidental","slight","trivial"], ant:["crucial"],
    ex:[{ s:"It turned out to be only a {{}} setback.", f:"minor", ko:"그것은 사소한 차질에 불과한 것으로 드러났다." }] },

  /* minor 와 어근이 같지만 품사가 달라(adj/n) 같은 보드에 안 온다.
     챕터 1의 majority 가 이 낱말을 반의어로 쓴다. */
  { word:"minority", pron:"마이노러티", pos:"n", level:"B2", meanings:["소수파","소수자"],
    syn:["smaller group","the few","underrepresented group"], ant:["majority"],
    ex:[{ s:"A vocal {{}} opposed the whole plan.", f:"minority", ko:"목소리 큰 소수파가 계획 전체에 반대했다." }] },

  /* 승격 ② — GLOSS 는 '거울' 로 명사였지만 원본은 동사('반영하다, 비추다')다.
     L 세트에 looking glass('거울')가 이미 있어 명사로 두면 표제어가 겹치는 셈이라
     원본을 따랐다. 그 대신 looking glass 의 유의어에서 mirror 를 빼고
     silvered glass 로 갈았다 — 명사 자리에 동사 표제어를 두면 설명이 어긋난다. */
  { word:"mirror", pron:"미러", pos:"v", level:"B2", meanings:["반영하다","비추다"],
    syn:["reflect","echo","match closely"],
    ex:[{ s:"The survey results {{}} national trends closely.", f:"mirror", ko:"그 조사 결과는 전국 추세를 가깝게 반영한다." }] },

  { word:"misbehave", pron:"미스비헤이브", pos:"v", level:"B2", meanings:["무례한 행동을 하다","버릇없이 굴다"],
    syn:["act up","play up","behave badly"],
    ex:[{ s:"Children who {{}} lose their screen time.", f:"misbehave", ko:"무례한 행동을 하는 아이는 화면 보는 시간을 잃는다." }] },

  /* 원본 첫 뜻 '부정행위' 는 챕터 2에서 malpractice 의 유의어로 쓴 misconduct
     ('부정 행위')와 띄어쓰기만 다르다. meaningsOverlap 은 글자가 완전히 같을 때만
     막으므로 '나쁜 행실' 을 앞으로 올렸다.
     misbehave 와 어근이 같지만 품사가 달라(v/n) 같은 보드에 안 온다. */
  { word:"misbehavior", pron:"미스비헤이비어", pos:"n", level:"B2", meanings:["나쁜 행실","버릇없는 짓"],
    syn:["misconduct","bad conduct","naughtiness"],
    ex:[{ s:"Repeated {{}} led to a week's suspension.", f:"misbehavior", ko:"반복된 나쁜 행실이 일주일 정학으로 이어졌다." }] },

  /* 원본 첫 뜻 '잘못' 은 뒤에 올 mistake('실수, 잘못')와 겹쳐 '장난' 을 앞에 두었다.
     셋째 갈래 '피해' 는 meanings 2개 제한에 걸려 뺐다. */
  { word:"mischief", pron:"미스치프", pos:"n", level:"B2", meanings:["장난","말썽"],
    syn:["naughtiness","prank","trouble"],
    ex:[{ s:"The kittens got into all sorts of {{}}.", f:"mischief", ko:"그 새끼 고양이들은 온갖 장난을 쳤다." }] },

  /* 원본은 '오해하다' 였는데 뒤에 올 misunderstand 와 같았다. 이쪽은 생각 자체가
     빗나갔다는 쪽이어서 '잘못 생각하다' 로 갈랐다. */
  { word:"misconceive", pron:"미스컨시브", pos:"v", level:"C2", meanings:["잘못 생각하다","잘못 알다"],
    syn:["misjudge","get wrong","misread"],
    ex:[{ s:"Critics {{}} the whole purpose of the reform.", f:"misconceive", ko:"비평가들은 그 개혁의 목적 전체를 잘못 생각한다." }] },

  /* 승격 ② — GLOSS '오해, 잘못된 생각' 이다. 그대로 쓰면 뒤에 올
     misunderstanding('오해, 착오')와 첫 뜻이 겹치므로 순서를 뒤집었다.
     참조하는 delusion('착각')·fallacy('오류')에도 '잘못된 생각' 이 오히려 더 맞는다.
     mischief·misconceive 와 앞 네 글자가 같은데 mischief 는 품사가 같지만(n)
     뜻이 '장난' 과 '잘못된 생각' 으로 달라 무리가 없다. */
  { word:"misconception", pron:"미스컨셉션", pos:"n", level:"B2", meanings:["잘못된 생각","오해"],
    syn:["delusion","fallacy","false belief"],
    ex:[{ s:"It is a common {{}} that lightning never strikes twice.", f:"misconception", ko:"번개가 같은 곳에 두 번 치지 않는다는 것은 흔한 잘못된 생각이다." }] },

  /* 원본 셋째 갈래 '범죄' 는 meanings 2개 제한에 걸려 뺐다. */
  { word:"misdeed", pron:"미스디드", pos:"n", level:"C1", meanings:["악행","비행"],
    syn:["wrongdoing","offence","transgression"],
    ex:[{ s:"He was eventually forgiven for his past {{}}.", f:"misdeeds", ko:"그는 결국 과거의 악행을 용서받았다." }] },

  { word:"miserable", pron:"미저러블", pos:"adj", level:"B1", meanings:["비참한","고약한"],
    syn:["wretched","dismal","unhappy"], ant:["cheerful"],
    ex:[{ s:"They spent a {{}} night out in the rain.", f:"miserable", ko:"그들은 빗속에서 비참한 밤을 보냈다." }] },

  /* 승격 ① — GLOSS '의심, 불안' 을 글자까지 지켰다. doubt(syn)·foreboding(syn) 두
     문제가 참조하므로 원본의 '의혹, 불안감' 대신 사전 쪽을 남겼다 — 같은 갈래다. */
  { word:"misgiving", pron:"미스기빙", pos:"n", level:"C1", meanings:["의심","불안"],
    syn:["doubt","foreboding","qualm"],
    ex:[{ s:"She had serious {{}} about the whole deal.", f:"misgivings", ko:"그녀는 그 거래 전체에 심각한 의심을 품었다." }] },

  /* 승격 ① — GLOSS '작은 사고' 와 같은 갈래다. I 세트 incident 가 참조한다.
     원본 '불상사, 불운' 도 같은 갈래라 사전 쪽 한 갈래로 두었다. */
  { word:"mishap", pron:"미스햅", pos:"n", level:"B2", meanings:["작은 사고"],
    syn:["incident","accident","setback"],
    ex:[{ s:"A minor {{}} delayed the opening ceremony.", f:"mishap", ko:"작은 사고가 개막식을 지연시켰다." }] },

  /* 원본은 '오해; 오역' 이었는데 '오해' 는 misconception·misunderstanding 과
     겹쳤다. 이 낱말은 해석을 잘못했다는 쪽이어서 '오역' 을 앞에 두었다. */
  { word:"misinterpretation", pron:"미스인터프러테이션", pos:"n", level:"C1", meanings:["오역","잘못된 해석"],
    syn:["mistranslation","misreading","wrong sense"],
    ex:[{ s:"The error came from a {{}} of the original text.", f:"misinterpretation", ko:"그 오류는 원문의 오역에서 비롯되었다." }] },

  /* 승격 ① — GLOSS '오해를 일으키는' 을 첫 자리에 지켰다. deceptive(syn) 가 참조한다.
     원본의 '오해의 소지가 있는' 을 둘째 자리에 붙였다. */
  { word:"misleading", pron:"미스리딩", pos:"adj", level:"B2", meanings:["오해를 일으키는","오해의 소지가 있는"],
    syn:["deceptive","confusing","ambiguous"],
    ex:[{ s:"The advert was eventually found to be {{}}.", f:"misleading", ko:"그 광고는 결국 오해를 일으키는 것으로 판정되었다." }] },

  /* ── 챕터 8 ─────────────────────────────── */

  { word:"misplace", pron:"미스플레이스", pos:"v", level:"B2", meanings:["제자리에 두지 않다","어디 뒀는지 잊다"],
    syn:["mislay","lose track of","put in the wrong place"],
    ex:[{ s:"He tends to {{}} his keys every morning.", f:"misplace", ko:"그는 매일 아침 열쇠를 제자리에 두지 않는 경향이 있다." }] },

  /* misplace 와 어근이 같지만 품사가 달라(v/adj) 같은 보드에 안 온다.
     첫 뜻이 I 세트 improper 와 같지만 meaningsOverlap 이 같은 보기에 함께 뜨지
     못하게 막으므로 그대로 두었다. */
  { word:"misplaced", pron:"미스플레이스트", pos:"adj", level:"C1", meanings:["부적절한","잘못된"],
    syn:["inappropriate","ill-judged","unwarranted"],
    ex:[{ s:"Her confidence in the plan proved {{}}.", f:"misplaced", ko:"그 계획에 대한 그녀의 자신감은 부적절한 것으로 드러났다." }] },

  /* 승격 ② — GLOSS '사절단; 임무' 다. delegation(syn) 이 쓰는 갈래는 '사절단' 이라
     첫 자리에 지켰다. 둘째는 원본의 '임무' 로 했다 — 원본 첫 뜻 '임무' 를 앞에 두면
     C 세트 commission 과 첫 뜻이 같아진다. 원본 셋째 갈래 '선교' 는 뺐다. */
  { word:"mission", pron:"미션", pos:"n", level:"B1", meanings:["사절단","임무"],
    syn:["delegation","assignment","errand"],
    ex:[{ s:"A trade {{}} flew out to Seoul last week.", f:"mission", ko:"통상 사절단이 지난주 서울로 떠났다." }] },

  /* 승격 ② — GLOSS '선교사; 전도의' 로 명사와 형용사가 섞여 있었다. 참조도 PRON 도
     없어 원본대로 명사로 정리했다.
     mission 과 어근이 같고 품사도 둘 다 n 이지만 뜻이 '사절단' 과 '선교사' 로
     갈려 무리가 없다. */
  { word:"missionary", pron:"미셔네리", pos:"n", level:"B2", meanings:["선교사","전도사"],
    syn:["evangelist","preacher","proselytizer"],
    ex:[{ s:"The {{}} spent thirty years in the region.", f:"missionary", ko:"그 선교사는 그 지역에서 30년을 보냈다." }] },

  { word:"misspell", pron:"미스스펠", pos:"v", level:"B2", meanings:["철자가 틀리다","철자를 잘못 쓰다"],
    syn:["spell wrongly","write incorrectly","garble the spelling"],
    ex:[{ s:"People often {{}} her surname.", f:"misspell", ko:"사람들은 그녀의 성을 자주 철자를 틀린다." }] },

  { word:"mistake", pron:"미스테이크", pos:"n", level:"B1", meanings:["실수","잘못"],
    syn:["error","blunder","slip"],
    ex:[{ s:"Signing without reading was a costly {{}}.", f:"mistake", ko:"읽지 않고 서명한 것은 값비싼 실수였다." }] },

  /* 승격 ② — GLOSS '잘못된, 틀린' 이다. correct(ant)·erroneous(syn) 두 문제가
     참조하는데, 그 갈래를 첫 자리에 지키면 바로 앞 mistake('실수, 잘못')와
     뜻이 너무 가까워진다. 원본의 '잘못 알고 있는' 을 앞에 두고 사전의 '틀린' 을
     둘째 자리에 남겼다 — 이쪽은 사람이 오해하고 있다는 쪽이다.
     mistake 와 어근이 같지만 품사가 달라(n/adj) 같은 보드에 안 온다. */
  { word:"mistaken", pron:"미스테이컨", pos:"adj", level:"B2", meanings:["잘못 알고 있는","틀린"],
    syn:["erroneous","misinformed","wide of the mark"], ant:["correct"],
    ex:[{ s:"You are {{}} about who sent the letter.", f:"mistaken", ko:"누가 그 편지를 보냈는지에 대해 당신은 잘못 알고 있다." }] },

  /* 챕터 2의 maltreat 를 '거칠게 다루다' 로 돌려 두어 이쪽이 '학대하다' 를 쓴다. */
  { word:"mistreat", pron:"미스트리트", pos:"v", level:"C1", meanings:["학대하다","혹사하다"],
    syn:["abuse","ill-use","victimize"],
    ex:[{ s:"Workers who {{}} livestock face heavy fines.", f:"mistreat", ko:"가축을 학대하는 일꾼은 무거운 벌금을 물게 된다." }] },

  /* 원본 둘째 갈래 '여왕' 은 queen 의 뜻이어서 '안주인' 으로 고쳤다. */
  { word:"mistress", pron:"미스트러스", pos:"n", level:"C1", meanings:["여주인","안주인"],
    syn:["lady of the house","female owner","matron"],
    ex:[{ s:"The {{}} of the house met us at the door.", f:"mistress", ko:"그 집의 여주인이 문에서 우리를 맞았다." }] },

  { word:"misunderstand", pron:"미스언더스탠드", pos:"v", level:"B1", meanings:["오해하다","잘못 받아들이다"],
    syn:["take wrongly","mishear","read too much into"],
    ex:[{ s:"Please do not {{}} what I am about to say.", f:"misunderstand", ko:"제가 하려는 말을 오해하지 마세요." }] },

  /* misunderstand 와 어근이 같지만 품사가 달라(v/n) 같은 보드에 안 온다.
     챕터 7의 misconception 을 '잘못된 생각' 으로 돌려 두어 이쪽이 '오해' 를 쓴다. */
  { word:"misunderstanding", pron:"미스언더스탠딩", pos:"n", level:"B1", meanings:["오해","착오"],
    syn:["mix-up","crossed wires","failure to grasp"],
    ex:[{ s:"The whole quarrel began with a simple {{}}.", f:"misunderstanding", ko:"그 다툼 전체가 단순한 오해에서 시작되었다." }] },

  /* 승격 ① — GLOSS '남용, 오용' 을 글자까지 지켰다. abuse(syn)·exploitation(syn) 두
     문제가 참조하므로 원본('오용, 남용')이 아니라 사전 순서를 남겼다.
     원본의 동사 갈래('오용하다')는 pos 가 n 이라 담지 못했다. */
  { word:"misuse", pron:"미스유스", pos:"n", level:"B2", meanings:["남용","오용"],
    syn:["abuse","exploitation","improper use"],
    ex:[{ s:"The report documents widespread {{}} of funds.", f:"misuse", ko:"그 보고서는 자금의 광범위한 남용을 기록한다." }] },

  /* 승격 ① — GLOSS '완화하다, 줄이다' 와 같은 갈래다. alleviate(syn) 가 참조한다.
     원본 '완화시키다, 누그러뜨리다' 도 같은 갈래라 사전 쪽을 남겼다. */
  { word:"mitigate", pron:"미터게이트", pos:"v", level:"C1", meanings:["완화하다","줄이다"],
    syn:["alleviate","lessen","take the edge off"], ant:["aggravate"],
    ex:[{ s:"Planting trees helps {{}} the heat in cities.", f:"mitigate", ko:"나무를 심는 것은 도시의 열을 완화하는 데 도움이 된다." }] },

  /* 승격 ① — GLOSS '앓는 소리를 내다' 를 글자까지 지켰다. groan(syn) 이 참조한다.
     원본 첫 뜻 '신음하다' 를 쓰면 그 groan 과 첫 뜻이 같아지는데, 사전 쪽을 쓰면
     그 문제도 함께 풀린다. */
  { word:"moan", pron:"몬", pos:"v", level:"B2", meanings:["앓는 소리를 내다","끙끙대다"],
    syn:["groan","whimper","wail"],
    ex:[{ s:"The patient began to {{}} in his sleep.", f:"moan", ko:"그 환자는 잠결에 앓는 소리를 내기 시작했다." }] },

  /* 승격 ② — GLOSS '군중, 무리' 다. 참조도 PRON 도 없어 자유롭게 정할 수 있었으므로
     원본의 '폭도' 를 앞에 두었다 — 뒤 챕터의 multitude 가 '다수, 군중' 을 쓴다. */
  { word:"mob", pron:"마브", pos:"n", level:"B2", meanings:["폭도","무리"],
    syn:["rabble","throng","horde"],
    ex:[{ s:"An angry {{}} gathered outside the courthouse.", f:"mob", ko:"분노한 폭도가 법원 밖에 모였다." }] },

  { word:"mobile", pron:"모발", pos:"adj", level:"B1", meanings:["이동할 수 있는","휴대가 용이한"],
    syn:["movable","portable","roving"], ant:["stationary"],
    ex:[{ s:"The clinic runs a {{}} unit for remote villages.", f:"mobile", ko:"그 진료소는 외딴 마을을 위해 이동할 수 있는 차량을 운영한다." }] },

  /* 승격 ① — GLOSS '이동성, 유동성' 이 원본과 글자까지 같다. 참조도 PRON 도 없다.
     mobile 과 어근이 같지만 품사가 달라(adj/n) 같은 보드에 안 온다. */
  { word:"mobility", pron:"모빌러티", pos:"n", level:"B2", meanings:["이동성","유동성"],
    syn:["movability","freedom of movement","fluidity"],
    ex:[{ s:"The injury limited his {{}} for months.", f:"mobility", ko:"그 부상은 몇 달간 그의 이동성을 제한했다." }] },

  { word:"mocking", pron:"마킹", pos:"adj", level:"C1", meanings:["조롱하는","흉내 내는"],
    syn:["derisive","scornful","taunting"],
    ex:[{ s:"He answered with a {{}} smile.", f:"mocking", ko:"그는 조롱하는 미소로 대답했다." }] },

  /* 승격 ② — GLOSS '적당한; 완화하다' 로 형용사와 동사가 섞여 있었다.
     excessive(ant) 이 참조하는 갈래는 형용사 '적당한' 쪽이라 그것을 지키고,
     원본의 '절제하는' 을 둘째 자리에 두었다 — 한 표제어에 두 품사를 섞지 않는다. */
  { word:"moderate", pron:"마더릿", pos:"adj", level:"B2", meanings:["적당한","절제하는"],
    syn:["reasonable","temperate","middling"], ant:["excessive"],
    ex:[{ s:"A {{}} amount of salt improves the flavour.", f:"moderate", ko:"적당한 양의 소금이 맛을 좋게 한다." }] },

  /* 승격 ① — GLOSS '검소한; 겸손한' 을 글자까지 지켰다. 참조가 6곳(big-headed·
     boastful·conceited·grand·humble·impudent)으로 이 세트에서 가장 많다.
     원본 첫 뜻 '보통의' 로 바꾸면 그 여섯 곳 화면이 다 바뀌므로 손대지 않았다.
     moderate 와 앞 세 글자가 같지만 어근이 갈리고, 뜻도 '적당한' 과 '검소한' 으로
     달라 무리가 없다. */
  { word:"modest", pron:"마디스트", pos:"adj", level:"B2", meanings:["검소한","겸손한"],
    syn:["humble","unpretentious","unassuming"], ant:["boastful"],
    ex:[{ s:"They live in a {{}} house near the harbour.", f:"modest", ko:"그들은 항구 근처의 검소한 집에 산다." }] },

  /* ── 챕터 9 ─────────────────────────────── */

  /* 승격 ① — GLOSS '수정하다, 변경하다' 를 글자까지 지켰다. 참조가 4곳
     (adapt·adjust·alter·amend)이라 원본의 '바꾸다' 대신 사전 쪽을 남겼다. */
  { word:"modify", pron:"마디파이", pos:"v", level:"B2", meanings:["수정하다","변경하다"],
    syn:["adapt","adjust","amend"],
    ex:[{ s:"Engineers had to {{}} the design twice.", f:"modify", ko:"기술자들은 설계를 두 번 수정해야 했다." }] },

  /* 승격 ② — GLOSS '틀, 거푸집; 형성하다' 로 명사와 동사가 섞여 있었다.
     한 표제어에 두 품사를 섞지 않으므로 수능에서 더 자주 묻는 명사 갈래만
     남겼다(원본 '모양, 주물').
     ※ 유일한 참조였던 cast(v, 주조하다)는 섞여 있던 동사 갈래를 쓰고 있었다.
       명사만 남기면 cast 의 선택지에 명사 뜻이 떠서 어긋나므로, cast 쪽 유의어를
       'shape in a mold' 로 바꿨다(words-c.js). */
  { word:"mold", pron:"몰드", pos:"n", level:"B2", meanings:["틀","주물"],
    syn:["casting frame","matrix","template"],
    ex:[{ s:"Hot metal was poured into the {{}}.", f:"mold", ko:"뜨거운 금속이 틀에 부어졌다." }] },

  { word:"molecule", pron:"말러큘", pos:"n", level:"B2", meanings:["분자"],
    syn:["particle","chemical unit","compound unit"],
    ex:[{ s:"A water {{}} has two hydrogen atoms.", f:"molecule", ko:"물 분자는 수소 원자 두 개를 갖는다." }] },

  { word:"momentary", pron:"모먼테리", pos:"adj", level:"B2", meanings:["순간의","잠깐의"],
    syn:["fleeting","brief","transient"], ant:["lasting"],
    ex:[{ s:"There was a {{}} pause before she answered.", f:"momentary", ko:"그녀가 대답하기 전에 순간의 멈춤이 있었다." }] },

  /* 첫 뜻이 G 세트 grave 와 같지만 meaningsOverlap 이 같은 보기에 함께 뜨지
     못하게 막으므로 그대로 두었다.
     momentary 와 앞 다섯 글자가 같고 품사도 둘 다 adj 인데, 뜻이 '순간의' 와
     '중대한' 으로 완전히 달라 무리가 없다 — 영어에서도 헷갈리는 쌍이다. */
  { word:"momentous", pron:"모멘터스", pos:"adj", level:"C1", meanings:["중대한","중차대한"],
    syn:["weighty","far-reaching","history-making"], ant:["trivial"],
    ex:[{ s:"The vote proved a {{}} turning point.", f:"momentous", ko:"그 투표는 중대한 전환점으로 드러났다." }] },

  /* 승격 ① — GLOSS '기세, 탄력' 을 글자까지 지켰다. I 세트 impetus 가 참조하므로
     원본의 '가속도' 대신 사전 쪽 '기세' 를 남겼다. */
  { word:"momentum", pron:"모멘텀", pos:"n", level:"B2", meanings:["기세","탄력"],
    syn:["impetus","drive","thrust"],
    ex:[{ s:"The campaign slowly gathered {{}}.", f:"momentum", ko:"그 운동은 천천히 기세를 모았다." }] },

  { word:"monarch", pron:"마나크", pos:"n", level:"B2", meanings:["군주","왕"],
    syn:["king or queen","ruler","crowned head"],
    ex:[{ s:"The {{}} opened parliament in person.", f:"monarch", ko:"그 군주가 직접 의회를 개회했다." }] },

  /* monarch 와 어근이 같지만 품사가 둘 다 n 이라 같은 보드에 올 수 있다.
     다만 뜻이 '군주'(사람)와 '군주제'(제도)로 갈려 무리가 없다. */
  { word:"monarchy", pron:"마나키", pos:"n", level:"B2", meanings:["군주제","군주국가"],
    syn:["kingship","royal rule","crown"], ant:["republic"],
    ex:[{ s:"The country became a constitutional {{}} in 1867.", f:"monarchy", ko:"그 나라는 1867년에 입헌 군주제가 되었다." }] },

  /* 승격 ① — GLOSS '통화의, 금전상의' 를 글자까지 지켰다.
     financial(syn)·fiscal(syn) 두 문제가 참조하므로 원본의 '화폐의, 재정의' 대신
     사전 쪽을 남겼다 — 같은 갈래다. */
  { word:"monetary", pron:"머너테리", pos:"adj", level:"B2", meanings:["통화의","금전상의"],
    syn:["financial","fiscal","pecuniary"],
    ex:[{ s:"The bank tightened {{}} policy in March.", f:"monetary", ko:"그 은행은 3월에 통화 정책을 조였다." }] },

  /* 승격 ① — GLOSS '감시 장치; 감시하다' 를 글자까지 지켰다. detector(syn) 가
     명사 갈래를 참조하므로 pos 를 n 으로 유지했다. 원본의 '감독자' 는 사람 쪽이라
     사전의 '감시 장치' 를 첫 자리에 두었다. */
  { word:"monitor", pron:"마니터", pos:"n", level:"B1", meanings:["감시 장치","감독자"],
    syn:["detector","watchdog","observer"],
    ex:[{ s:"A heart {{}} beeped steadily beside the bed.", f:"monitor", ko:"심장 감시 장치가 침대 옆에서 규칙적으로 삐 소리를 냈다." }] },

  { word:"monk", pron:"멍크", pos:"n", level:"B2", meanings:["수도승","수도자"],
    syn:["friar","cleric","hermit"],
    ex:[{ s:"A young {{}} showed us round the temple.", f:"monk", ko:"젊은 수도승이 우리에게 절을 둘러보게 해 주었다." }] },

  { word:"monogamy", pron:"머나거미", pos:"n", level:"C2", meanings:["일부일처"],
    syn:["single marriage","one-partner union","pair bonding"],
    ex:[{ s:"Some bird species practise strict {{}}.", f:"monogamy", ko:"어떤 새 종은 엄격한 일부일처를 지킨다." }] },

  /* 원본 '1인 극' 은 띄어쓰기를 붙여 '1인극' 으로 했다. */
  { word:"monologue", pron:"마널로그", pos:"n", level:"C1", meanings:["독백","1인극"],
    syn:["soliloquy","solo speech","one-man act"], ant:["dialogue"],
    ex:[{ s:"The play opens with a long {{}}.", f:"monologue", ko:"그 연극은 긴 독백으로 시작한다." }] },

  { word:"monopoly", pron:"머나펄리", pos:"n", level:"B2", meanings:["독점","전매"],
    syn:["sole control","exclusive rights","market corner"],
    ex:[{ s:"The firm held a near {{}} on rail freight.", f:"monopoly", ko:"그 회사는 철도 화물에 거의 독점을 쥐고 있었다." }] },

  { word:"monotonous", pron:"머나터너스", pos:"adj", level:"B2", meanings:["단조로운","변화 없는"],
    syn:["repetitive","tedious","unvarying"], ant:["varied"],
    ex:[{ s:"The work was safe but utterly {{}}.", f:"monotonous", ko:"그 일은 안전했지만 아주 단조로웠다." }] },

  /* 승격 ① — GLOSS '기념비, 기념물' 이 원본과 글자까지 같다. 참조도 PRON 도 없다. */
  { word:"monument", pron:"마뉴먼트", pos:"n", level:"B1", meanings:["기념비","기념물"],
    syn:["memorial stone","landmark","shrine"],
    ex:[{ s:"A stone {{}} marks the old battlefield.", f:"monument", ko:"돌 기념비가 옛 전장을 표시한다." }] },

  /* 승격 ① — GLOSS '기념비적인, 거대한' 을 글자까지 지켰다. historic(syn) 이
     참조하므로 원본의 '엄청난' 대신 사전 쪽 '거대한' 을 남겼다.
     monument 와 어근이 같지만 품사가 달라(n/adj) 같은 보드에 안 온다. */
  { word:"monumental", pron:"마뉴멘털", pos:"adj", level:"B2", meanings:["기념비적인","거대한"],
    syn:["historic","grand in scale","towering"],
    ex:[{ s:"Translating the whole archive was a {{}} task.", f:"monumental", ko:"그 기록 전체를 번역하는 일은 기념비적인 과업이었다." }] },

  { word:"moody", pron:"무디", pos:"adj", level:"B2", meanings:["언짢은","변덕스러운"],
    syn:["sullen","temperamental","sulky"], ant:["even-tempered"],
    ex:[{ s:"He turns {{}} when he skips breakfast.", f:"moody", ko:"그는 아침을 거르면 언짢아진다." }] },

  { word:"mop", pron:"마프", pos:"n", level:"B1", meanings:["대걸레"],
    syn:["floor swab","cleaning tool","squeegee"],
    ex:[{ s:"She fetched a bucket and a {{}}.", f:"mop", ko:"그녀는 물통과 대걸레를 가져왔다." }] },

  /* 승격 ① — GLOSS '도덕적인; 교훈' 을 글자까지 지켰다. 참조가 3곳
     (ethical·immoral(ant)·lesson)이고 뒤 둘은 I·L 세트 표제어다.
     원본은 '도덕적인' 한 갈래인데 갈래를 줄이면 그 세 곳이 바뀌므로 그대로 두었다. */
  { word:"moral", pron:"모럴", pos:"adj", level:"B1", meanings:["도덕적인","교훈"],
    syn:["ethical","principled","upright"], ant:["immoral"],
    ex:[{ s:"She felt a {{}} duty to speak up.", f:"moral", ko:"그녀는 목소리를 낼 도덕적 의무를 느꼈다." }] },

  /* ── 챕터 10 ────────────────────────────── */

  /* moral·morality 와 앞 다섯 글자가 같다. morality 와는 품사도 같지만(n)
     뜻이 '사기' 와 '도덕' 으로 완전히 달라 무리가 없다. */
  { word:"morale", pron:"머랠", pos:"n", level:"C1", meanings:["사기","의욕"],
    syn:["team spirit","fighting spirit","group confidence"],
    ex:[{ s:"Staff {{}} improved after the pay rise.", f:"morale", ko:"급여 인상 후 직원 사기가 좋아졌다." }] },

  /* 승격 ① — GLOSS '도덕, 도의' 를 글자까지 지켰다. conscience(syn) 가 참조하므로
     원본의 '윤리성' 대신 사전 쪽 '도의' 를 남겼다. */
  { word:"morality", pron:"머랠러티", pos:"n", level:"C1", meanings:["도덕","도의"],
    syn:["conscience","ethics","virtue"],
    ex:[{ s:"The debate soon turned on questions of {{}}.", f:"morality", ko:"그 토론은 곧 도덕의 문제로 옮겨 갔다." }] },

  { word:"more often than not", pron:"모어 오픈 댄 낫", pos:"phr", level:"B2", meanings:["자주","대개"],
    syn:["usually","as a rule","most of the time"] },

  /* 원본 첫 뜻 '약' 은 한 글자여서 뜻으로 읽히지 않는다. '대략' 을 앞에 두었다. */
  { word:"more or less", pron:"모어 오어 레스", pos:"phr", level:"B1", meanings:["대략","거의"],
    syn:["roughly","approximately","just about"] },

  /* 승격 ① — GLOSS '죽을 운명의; 치명적인' 을 글자까지 지켰다. 참조가 4곳
     (deadly·fatal·immortal(ant)·lethal)이고 뒤 둘은 I·L 세트 표제어다.
     원본 '영원히 살 수 없는' 은 같은 갈래인데 사전 쪽이 더 간결하다. */
  { word:"mortal", pron:"모털", pos:"adj", level:"B2", meanings:["죽을 운명의","치명적인"],
    syn:["deadly","fatal","lethal"], ant:["immortal"],
    ex:[{ s:"He suffered a {{}} wound in the final battle.", f:"mortal", ko:"그는 마지막 전투에서 치명적인 상처를 입었다." }] },

  /* mortal 과 앞 네 글자가 같지만 어근이 갈리고 품사도 달라(adj/n)
     같은 보드에 안 온다. 원본의 동사 갈래('담보로 넣다')는 pos 가 n 이라 뺐다. */
  { word:"mortgage", pron:"모기지", pos:"n", level:"C1", meanings:["융자","저당"],
    syn:["home loan","property loan","secured debt"],
    ex:[{ s:"They took out a thirty-year {{}} on the flat.", f:"mortgage", ko:"그들은 그 아파트에 30년 융자를 받았다." }] },

  { word:"mother-in-law", pron:"머더 인 로", pos:"n", level:"B2", meanings:["장모","시어머니"],
    syn:["wife's mother","husband's mother","in-law"],
    ex:[{ s:"His {{}} lives just two streets away.", f:"mother-in-law", ko:"그의 장모는 두 블록 떨어진 곳에 산다." }] },

  /* 승격 ① — GLOSS '동기를 부여하다' 를 첫 자리에 지켰다.
     encourage(syn)·inspire(syn) 두 문제가 참조하고 뒤는 I 세트 표제어다.
     원본의 '유도하다' 를 둘째 자리에 붙였다. */
  { word:"motivate", pron:"모터베이트", pos:"v", level:"B2", meanings:["동기를 부여하다","유도하다"],
    syn:["encourage","inspire","spur on"],
    ex:[{ s:"Good teachers {{}} without applying pressure.", f:"motivate", ko:"좋은 교사는 압박을 주지 않고 동기를 부여한다." }] },

  /* 승격 ① — GLOSS '동기 부여' 를 첫 자리에 지켰다. I 세트 incentive 가 참조한다.
     원본의 '자극' 을 둘째 자리에 붙였다. */
  { word:"motivation", pron:"모터베이션", pos:"n", level:"B2", meanings:["동기 부여","자극"],
    syn:["incentive","drive","impetus"],
    ex:[{ s:"Her main {{}} was curiosity, not money.", f:"motivation", ko:"그녀의 주된 동기 부여는 돈이 아니라 호기심이었다." }] },

  /* motivation·motive 와 품사가 다 n 이어서 같은 보드에 올 수 있다. 다만 뜻이
     '동기 부여'·'동기를 부여하는 사람'·'동기' 로 갈려 짝을 고르는 데 무리가 없다. */
  { word:"motivator", pron:"모터베이터", pos:"n", level:"C1", meanings:["동기를 부여하는 사람"],
    syn:["driving force","inspirer","prime mover"],
    ex:[{ s:"Fear is a poor long-term {{}}.", f:"motivator", ko:"두려움은 장기적으로 좋지 않은 동기 부여 요인이다." }] },

  /* 원본 셋째 갈래 '주제' 는 meanings 2개 제한에 걸려 뺐다. */
  { word:"motive", pron:"모티브", pos:"n", level:"B2", meanings:["동기","이유"],
    syn:["reason","grounds","rationale"],
    ex:[{ s:"Police could find no clear {{}} for the theft.", f:"motive", ko:"경찰은 그 절도의 명확한 동기를 찾을 수 없었다." }] },

  /* 챕터 4의 maxim 이 '격언, 좌우명' 을 쓰므로 이쪽은 '표어' 를 앞에 두었다. */
  { word:"motto", pron:"마토", pos:"n", level:"B2", meanings:["표어","좌우명"],
    syn:["slogan","watchword","catchphrase"],
    ex:[{ s:"Their {{}} is safety before speed.", f:"motto", ko:"그들의 표어는 속도보다 안전이다." }] },

  /* 승격 ① — GLOSS '애도하다, 슬퍼하다' 를 글자까지 지켰다. grieve(syn) 가
     참조하므로 원본의 순서('슬퍼하다' 가 앞)가 아니라 사전 쪽을 남겼다.
     챕터 8의 moan 과 한글 발음이 '몬' 으로 같다 — 영어 발음은 다르지만 한글
     표기로는 구별되지 않는다. 뜻과 철자가 달라 학습에 방해가 되지 않는다. */
  { word:"mourn", pron:"몬", pos:"v", level:"B2", meanings:["애도하다","슬퍼하다"],
    syn:["grieve","lament","bewail"],
    ex:[{ s:"The nation gathered to {{}} its losses.", f:"mourn", ko:"국민이 모여 그 손실을 애도했다." }] },

  /* 승격 ① — GLOSS '다문화의' 와 같은 갈래다. cross-cultural(syn) 이 참조한다.
     'multi-' 로 시작하는 낱말이 여기서 여덟 개 이어진다 — 알파벳 순이라 한 덩어리로
     붙는다. 품사가 adj/n/v 로 갈리고 뜻도 서로 달라 같은 보드에서 헷갈리지 않는다. */
  { word:"multicultural", pron:"멀티컬처럴", pos:"adj", level:"B2", meanings:["다문화의"],
    syn:["cross-cultural","diverse","pluralistic"],
    ex:[{ s:"The school serves a highly {{}} neighbourhood.", f:"multicultural", ko:"그 학교는 매우 다문화적인 동네를 담당한다." }] },

  /* 원본 둘째 갈래 '멀티미디어' 는 외래어 그대로여서 뺐다. */
  { word:"multimedia", pron:"멀티미디어", pos:"n", level:"B2", meanings:["다중매체"],
    syn:["mixed media","audio-visual","cross-format"],
    ex:[{ s:"The museum runs a {{}} exhibition this autumn.", f:"multimedia", ko:"그 박물관은 이번 가을 다중매체 전시를 운영한다." }] },

  /* 원본의 명사 갈래('다국적 기업')는 pos 가 adj 라 담지 못했다. */
  { word:"multinational", pron:"멀티내셔널", pos:"adj", level:"B2", meanings:["다국적의"],
    syn:["international","global","cross-border"],
    ex:[{ s:"A {{}} firm bought the local plant.", f:"multinational", ko:"다국적 회사가 그 지역 공장을 사들였다." }] },

  /* 승격 ① — GLOSS '다수의, 복합적인' 을 글자까지 지켰다. complex(syn) 가
     참조하므로 원본의 순서('복합의' 가 앞)가 아니라 사전 쪽을 남겼다.
     원본 셋째 갈래 '배수의' 는 뺐다. */
  { word:"multiple", pron:"멀티플", pos:"adj", level:"B2", meanings:["다수의","복합적인"],
    syn:["complex","numerous","manifold"], ant:["single"],
    ex:[{ s:"The patient suffered {{}} injuries in the crash.", f:"multiple", ko:"그 환자는 사고로 다수의 부상을 입었다." }] },

  { word:"multiply", pron:"멀터플라이", pos:"v", level:"B1", meanings:["증가시키다","곱하다"],
    syn:["increase","proliferate","grow in number"], ant:["divide"],
    ex:[{ s:"Bacteria {{}} rapidly in warm standing water.", f:"multiply", ko:"세균은 따뜻하게 고인 물에서 빠르게 증가한다." }] },

  /* 승격 ① — GLOSS '여러 인종의' 를 첫 자리에 지켰다. I 세트 interracial 이 참조한다.
     원본 첫 뜻 '다문화의' 는 multicultural 의 뜻이라 틀렸고, 원본의 '다인종의' 를
     둘째 자리에 붙였다. */
  { word:"multiracial", pron:"멀티레이셜", pos:"adj", level:"C1", meanings:["여러 인종의","다인종의"],
    syn:["interracial","mixed-race","ethnically diverse"],
    ex:[{ s:"The team is proudly {{}}.", f:"multiracial", ko:"그 팀은 자랑스럽게 여러 인종으로 이뤄져 있다." }] },

  { word:"multitask", pron:"멀티태스크", pos:"v", level:"C1", meanings:["동시에 여러 일을 하다"],
    syn:["juggle tasks","work in parallel","do several things at once"],
    ex:[{ s:"Few people truly {{}} well under pressure.", f:"multitask", ko:"압박 속에서 동시에 여러 일을 정말 잘하는 사람은 드물다." }] },

  /* ── 챕터 11 ────────────────────────────── */

  /* 챕터 8의 mob 을 '폭도' 로 돌려 두어 이쪽이 '다수, 군중' 을 쓴다. */
  { word:"multitude", pron:"멀터튜드", pos:"n", level:"C1", meanings:["다수","군중"],
    syn:["host","great number","large gathering"],
    ex:[{ s:"A {{}} of small details still needed checking.", f:"multitude", ko:"확인이 더 필요한 자잘한 사항이 다수 있었다." }] },

  /* 승격 ① — GLOSS '중얼거리다' 와 글자까지 같다. articulate(ant) 이 참조한다.
     원본도 한 갈래다. 뒤에 올 mutter 는 '투덜거리다' 로 돌려 첫 뜻이 갈린다. */
  { word:"mumble", pron:"멈블", pos:"v", level:"B2", meanings:["중얼거리다"],
    syn:["murmur","speak indistinctly","mouth quietly"], ant:["articulate"],
    ex:[{ s:"He tends to {{}} when he is nervous.", f:"mumble", ko:"그는 긴장하면 중얼거리는 경향이 있다." }] },

  /* 승격 ① — GLOSS '시의, 지방 자치의' 를 글자까지 지켰다. civic(syn) 이 참조하므로
     원본의 '시립의, 자치제의' 대신 사전 쪽을 남겼다 — 같은 갈래다. */
  { word:"municipal", pron:"뮤니서펄", pos:"adj", level:"B2", meanings:["시의","지방 자치의"],
    syn:["civic","city-run","local-government"],
    ex:[{ s:"The {{}} library opens on Sundays now.", f:"municipal", ko:"그 시립 도서관은 이제 일요일에도 문을 연다." }] },

  { word:"muscle", pron:"머슬", pos:"n", level:"B1", meanings:["근육"],
    syn:["sinew","flesh","tissue"],
    ex:[{ s:"Stretching keeps the {{}} from tightening.", f:"muscle", ko:"스트레칭은 근육이 굳는 것을 막아 준다." }] },

  /* 승격 ① — GLOSS '근육질의, 건장한' 을 글자까지 지켰다. athletic(syn) 이
     참조하므로 원본의 '근육의' 대신 사전 쪽을 남겼다.
     muscle 과 어근이 같지만 품사가 달라(n/adj) 같은 보드에 안 온다. */
  { word:"muscular", pron:"머스큘러", pos:"adj", level:"B2", meanings:["근육질의","건장한"],
    syn:["athletic","brawny","well-built"], ant:["frail"],
    ex:[{ s:"Years of rowing left him strong and {{}}.", f:"muscular", ko:"여러 해의 조정으로 그는 강하고 근육질이 되었다." }] },

  { word:"mutation", pron:"뮤테이션", pos:"n", level:"B2", meanings:["돌연변이","변화"],
    syn:["genetic change","variant","alteration"],
    ex:[{ s:"A single {{}} made the virus spread faster.", f:"mutation", ko:"단 한 번의 돌연변이가 그 바이러스를 더 빠르게 퍼지게 했다." }] },

  { word:"mute", pron:"뮤트", pos:"adj", level:"C1", meanings:["무언의","말이 없는"],
    syn:["silent","speechless","wordless"], ant:["vocal"],
    ex:[{ s:"The audience sat {{}} until the last note faded.", f:"mute", ko:"관객은 마지막 음이 사라질 때까지 무언으로 앉아 있었다." }] },

  /* 원본은 '중얼거리다' 가 앞이었는데 바로 앞 mumble 과 같았다. mutter 는 불만을
     섞어 낮게 말하는 쪽이어서 '투덜거리다' 로 갈랐다.
     첫 뜻이 G 세트 grumble 과 같지만 meaningsOverlap 이 같은 보기에 함께 뜨지
     못하게 막으므로 그대로 두었다. */
  { word:"mutter", pron:"머터", pos:"v", level:"B2", meanings:["투덜거리다","불평하다"],
    syn:["grumble","gripe","complain under one's breath"],
    ex:[{ s:"She began to {{}} about the long wait.", f:"mutter", ko:"그녀는 긴 기다림에 대해 투덜거리기 시작했다." }] },

  /* 승격 ① — GLOSS '상호의, 공동의' 를 글자까지 지켰다. bilateral(syn) 이
     참조하므로 원본의 '서로의, 상호관계가 있는' 대신 사전 쪽을 남겼다. */
  { word:"mutual", pron:"뮤추얼", pos:"adj", level:"B2", meanings:["상호의","공동의"],
    syn:["bilateral","reciprocal","shared"], ant:["one-sided"],
    ex:[{ s:"The deal rests on {{}} trust.", f:"mutual", ko:"그 거래는 상호 신뢰에 기반한다." }] },

  /* 승격 ① — GLOSS '신비로운, 불가사의한' 과 같은 갈래다. 참조도 PRON 도 없어
     원본의 '이해하기 힘든' 대신 사전 쪽 '신비로운' 을 첫 자리에 두었다. */
  { word:"mysterious", pron:"미스티리어스", pos:"adj", level:"B1", meanings:["신비로운","불가사의한"],
    syn:["baffling","enigmatic","inexplicable"],
    ex:[{ s:"A {{}} light appeared over the harbour.", f:"mysterious", ko:"신비로운 빛이 항구 위에 나타났다." }] },

  /* mythology 와 어근이 같지만 품사가 달라(adj/n) 같은 보드에 안 온다.
     원본 셋째 갈래 '가공의' 는 meanings 2개 제한에 걸려 뺐다. */
  { word:"mythical", pron:"미씨컬", pos:"adj", level:"B2", meanings:["신화 속에 나오는","전설상의"],
    syn:["legendary","fabled","imaginary"], ant:["actual"],
    ex:[{ s:"The unicorn is a {{}} creature.", f:"mythical", ko:"유니콘은 신화 속에 나오는 생물이다." }] },

  { word:"mythology", pron:"미쌀러지", pos:"n", level:"B2", meanings:["신화","근거 없는 믿음"],
    syn:["legend","folklore","body of myths"],
    ex:[{ s:"Greek {{}} still shapes modern storytelling.", f:"mythology", ko:"그리스 신화는 여전히 현대 이야기 짓기를 만든다." }] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
  "act up": "말을 안 듣다",
  "actual": "실제의",
  "adage": "오래된 격언",
  "add up": "앞뒤가 맞다",
  "adviser": "조언해 주는 사람",
  "appreciable": "느낄 만한",
  "arbitrate": "조정을 맡다",
  "archaic": "옛 시대의",
  "arrive in time": "시간에 맞춰 닿다",
  "as a rule": "보통은",
  "at the same time": "동시에",
  "atmospheric": "대기의",
  "atmospheric science": "대기 과학",
  "atone for": "~을 벌충하다",
  "audio-visual": "소리와 영상의",
  "aware": "알고 있는",
  "bad conduct": "나쁜 처신",
  "be logical": "논리에 맞다",
  "behave badly": "행동이 나쁘다",
  "bewail": "한탄하다",
  "biochemical": "생화학의",
  "birth attendant": "출산을 돕는 사람",
  "blend together": "서로 어우러지다",
  "blunder": "큰 실수",
  "body chemistry": "체내 화학 작용",
  "body of myths": "신화 전체",
  "bog": "늪지",
  "bone marrow": "뼈 속 골수",
  "book ahead": "미리 예약하다",
  "boost to the full": "최대로 끌어올리다",
  "brawny": "체격이 다진",
  "casting frame": "주조하는 틀",
  "catchphrase": "귀에 남는 문구",
  "charged": "전하를 띤",
  "chemical unit": "화학 단위",
  "childbearing": "아이를 낳는",
  "childhood fever": "소아 발열병",
  "churn out": "쏟아 내다",
  "city-run": "시가 운영하는",
  "city-wide": "도시 전역의",
  "classic": "고전적 명작",
  "cleaning tool": "청소 도구",
  "clear a path for": "~을 위해 길을 트다",
  "climate study": "기후 연구",
  "climatic": "기후상의",
  "climatologist": "기후학자",
  "clutter": "잡다하게 쌓인 것",
  "cluttered": "잡동사니로 찬",
  "coach": "지도해 주는 사람",
  "combat sport": "격투 종목",
  "commemorative": "기리기 위한",
  "complain loudly": "큰 소리로 불평하다",
  "complain under one's breath": "낮은 소리로 불평하다",
  "compound unit": "화합물 단위",
  "confusing": "헷갈리게 하는",
  "conjugal": "혼인 관계의",
  "conjurer": "요술쟁이",
  "contemplation": "깊이 헤아림",
  "contrivance": "고안된 장치",
  "couple": "짝을 이루다",
  "crewed": "승무원이 탄",
  "cross-border": "국경을 넘는",
  "cross-format": "여러 형식을 아우르는",
  "crossed wires": "말이 엇갈림",
  "crown": "왕권",
  "crowned head": "왕관을 쓴 이",
  "crowning work": "최고의 성취작",
  "decimal": "십진법의",
  "delivery nurse": "분만 담당 간호사",
  "derisive": "비웃는",
  "disorderly": "어수선한",
  "do several things at once": "여러 일을 한꺼번에 하다",
  "draw off": "빼내다",
  "drug treatment": "약물 요법",
  "echo": "되울리다",
  "energy turnover": "에너지 순환량",
  "energy-processing": "에너지를 처리하는",
  "enigmatic": "속을 알기 어려운",
  "enrage": "분노하게 하다",
  "error": "잘못된 것",
  "ethnically diverse": "민족 구성이 다양한",
  "evangelist": "복음 전도자",
  "even-tempered": "성정이 고른",
  "exasperate": "속을 뒤집어 놓다",
  "exclusive rights": "배타적 권리",
  "failure to grasp": "알아듣지 못함",
  "falling star": "떨어지는 별",
  "false belief": "틀린 믿음",
  "female owner": "여자 소유주",
  "fighting art": "싸움 기술",
  "fighting spirit": "싸울 기백",
  "figure of speech": "비유적 표현",
  "flesh": "살",
  "floor swab": "바닥 닦는 걸레",
  "fluidity": "흐르는 성질",
  "forecaster": "예보하는 사람",
  "forgiving": "너그럽게 용서하는",
  "foul-smelling": "역한 냄새의",
  "frame of mind": "마음가짐",
  "freedom of movement": "움직일 자유",
  "friar": "탁발 수도사",
  "gain ground": "기반을 넓히다",
  "garble the spelling": "철자를 뒤섞다",
  "gauging": "재는 일",
  "genetic change": "유전적 변화",
  "get the most out of": "~을 최대로 활용하다",
  "get wrong": "잘못 알아듣다",
  "glitch": "작은 결함",
  "government department": "정부 부서",
  "grand in scale": "규모가 웅장한",
  "grandeur": "장대함",
  "grassland": "초지",
  "great number": "많은 수",
  "greater part": "더 큰 쪽",
  "group confidence": "집단의 자신감",
  "grow in number": "수가 늘어나다",
  "grown-up": "다 자란",
  "hand-operated": "손으로 조작하는",
  "hands-on": "직접 손을 쓰는",
  "heavy metal": "중금속",
  "heedful": "주의를 기울이는",
  "hermit": "은수자",
  "history-making": "역사를 만드는",
  "hold water": "말이 성립하다",
  "home loan": "주택 대출",
  "honoring": "기려 받드는",
  "host": "아주 많은 수",
  "hulking": "덩치가 큰",
  "human-made": "사람이 만든",
  "human-operated": "사람이 조작하는",
  "husband's mother": "남편의 어머니",
  "ill-judged": "판단이 어긋난",
  "ill-natured": "성질이 나쁜",
  "ill-treat": "부당하게 대하다",
  "ill-use": "함부로 부려먹다",
  "illusionist": "환술사",
  "impersonate": "남을 흉내 내어 연기하다",
  "improper use": "옳지 않은 사용",
  "improvised": "즉석에서 만든",
  "in-law": "혼인으로 맺어진 친척",
  "inexplicable": "설명이 안 되는",
  "infuriate": "격노하게 하다",
  "innermost part": "가장 깊은 속",
  "inorganic substance": "무기 물질",
  "inspirer": "영감을 주는 이",
  "intermix": "서로 섞이다",
  "juggle tasks": "여러 일을 돌려 가며 하다",
  "just about": "거의",
  "kick up a row": "한바탕 소동을 벌이다",
  "king or queen": "왕이나 여왕",
  "kingship": "왕위",
  "lady of the house": "집안의 여주인",
  "large gathering": "많이 모인 무리",
  "liquid metal": "액체 금속",
  "local-government": "지방 정부의",
  "lose track of": "어디 있는지 놓치다",
  "machine-driven": "기계로 움직이는",
  "magnetized": "자기를 띤",
  "magnum opus": "대표 역작",
  "majesty": "위엄",
  "make a scene": "사람들 앞에서 난리를 치다",
  "male": "남성의",
  "manly": "남자다운",
  "manufacture at scale": "규모를 갖춰 제조하다",
  "market corner": "시장 독차지",
  "match closely": "꼭 맞아떨어지다",
  "matrimonial": "혼인상의",
  "matrix": "거푸집",
  "matron": "집안을 맡은 여성",
  "maximal": "최대의",
  "meet the standard of": "~의 기준을 채우다",
  "memorial stone": "기념 석물",
  "metabolic rate": "대사율",
  "metre-based": "미터를 기준으로 한",
  "micro-organism": "미소 생물",
  "middle ground": "중간 지점",
  "middling": "중간 정도의",
  "millennial period": "천년의 기간",
  "mindfulness": "마음을 살피는 일",
  "misconduct": "부정 행위",
  "mishandle": "잘못 다루다",
  "mishear": "잘못 듣다",
  "misinformed": "잘못 전해 들은",
  "misjudge": "잘못 판단하다",
  "mislay": "어디 뒀는지 잊다",
  "misreading": "잘못 읽어 냄",
  "mistranslation": "잘못된 번역",
  "mix freely": "자유롭게 섞이다",
  "mix-up": "뒤바뀜",
  "mixed media": "혼합 매체",
  "most": "대부분의 것",
  "most of the time": "대부분의 경우",
  "motherly": "어머니 같은",
  "mouth quietly": "입만 움직여 조용히 말하다",
  "movability": "움직일 수 있음",
  "movable": "옮길 수 있는",
  "muster": "소집하다",
  "naughtiness": "장난기",
  "navigate": "길을 찾아 나아가다",
  "neat": "깔끔한",
  "non-automatic": "자동이 아닌",
  "nothing more than": "~에 지나지 않는",
  "nurturing": "보살피는",
  "oblivious": "까맣게 모르는",
  "observer": "지켜보는 사람",
  "obsession": "집착",
  "obstetric": "산과의",
  "obstetric nurse": "산과 간호사",
  "old-world": "옛 정취의",
  "one-man act": "혼자 하는 공연",
  "one-partner union": "한 상대와의 결합",
  "optimize": "최적화하다",
  "ore": "광석",
  "original copy": "원본",
  "painstakingly": "공들여",
  "pair bonding": "짝 결속",
  "pair off": "둘씩 짝지다",
  "paltry": "쥐꼬리만 한",
  "paternal": "아버지의",
  "pecuniary": "금전에 관한",
  "pith": "속심",
  "play down": "대수롭지 않게 말하다",
  "play up": "말썽을 부리다",
  "pluralistic": "여러 갈래가 공존하는",
  "polarized": "극을 띤",
  "poor diet": "부실한 식사",
  "prank": "짓궂은 장난",
  "preacher": "설교하는 사람",
  "press forward": "밀고 나아가다",
  "prime mover": "일을 일으킨 주역",
  "procedural": "절차상의",
  "pronounced": "두드러진",
  "property loan": "부동산 대출",
  "proselytizer": "개종을 권하는 사람",
  "protective": "감싸려 하는",
  "pry": "엿보며 캐다",
  "pull it off": "끝내 해내다",
  "put in the wrong place": "엉뚱한 곳에 두다",
  "qualm": "꺼림칙함",
  "quantifiable": "수치로 잴 수 있는",
  "quicksilver": "수은",
  "rabble": "소란한 무리",
  "read too much into": "지나치게 해석하다",
  "reeking": "악취를 풍기는",
  "refer to": "~을 들어 말하다",
  "robotic": "로봇처럼 움직이는",
  "rock element": "암석 성분",
  "roving": "돌아다니는",
  "royal rule": "왕의 통치",
  "rubeola": "홍역 바이러스병",
  "run-of-the-mill": "흔해 빠진",
  "sadness": "슬픔",
  "saying": "속담",
  "scant": "간신히 되는",
  "scrupulously": "빈틈없이",
  "secured debt": "담보가 잡힌 빚",
  "self-defense skill": "호신 기술",
  "shape in a mold": "틀에 넣어 모양을 만들다",
  "shooting star": "별똥별",
  "signify": "나타내다",
  "silent": "소리를 내지 않는",
  "sinew": "힘줄",
  "single marriage": "한 사람과의 혼인",
  "slight": "미미한",
  "slightest": "아주 미미한",
  "slip": "사소한 잘못",
  "slogan": "구호",
  "smaller group": "더 작은 집단",
  "smelly": "냄새 나는",
  "so-so": "그저 그런",
  "sole control": "단독 지배",
  "soliloquy": "혼자 하는 말",
  "solo speech": "혼자 하는 말하기",
  "soothing": "마음을 누그러뜨리는",
  "speak indistinctly": "또렷하지 않게 말하다",
  "spell wrongly": "철자를 틀리게 쓰다",
  "spiteful": "앙심을 품은",
  "splendor": "화려함",
  "spur on": "몰아붙여 나아가게 하다",
  "squeegee": "물기 미는 도구",
  "squeeze dry": "짜낼 만큼 짜내다",
  "staffed": "인원이 배치된",
  "standardized": "표준으로 정해진",
  "stationary": "고정된",
  "step aside for": "~에게 자리를 비켜 주다",
  "stopgap": "임시로 메우는",
  "structural": "구조상의",
  "sulky": "뾰로통한",
  "sullen": "못마땅해 말이 없는",
  "systematic": "체계적인",
  "take the edge off": "날카로움을 덜다",
  "take wrongly": "잘못 받아들이다",
  "taunting": "놀려 대는",
  "team spirit": "단결심",
  "technique": "기법",
  "template": "본뜨는 판",
  "ten centuries": "10세기 동안",
  "thaw": "얼음이 풀리다",
  "the few": "소수의 사람들",
  "thousand years": "천 해",
  "tissue": "조직",
  "trace element": "미량 원소",
  "trace nutrient": "미량 영양 성분",
  "trader": "거래하는 사람",
  "transient": "오래 가지 않는",
  "turn out in bulk": "한꺼번에 많이 만들다",
  "typescript": "타자 원고",
  "undernourishment": "영양 부족",
  "underrepresented group": "대표성이 낮은 집단",
  "unhappy": "행복하지 않은",
  "unmanned": "무인의",
  "unpretentious": "잘난 척하지 않는",
  "untidy": "정돈되지 않은",
  "unvarying": "한결같이 똑같은",
  "urban": "도시의",
  "usually": "대개는",
  "variant": "변이형",
  "vendor": "판매하는 사람",
  "venomous": "독기 서린",
  "victimize": "부당하게 괴롭히다",
  "vindictive": "앙갚음하려는",
  "viral rash": "바이러스성 발진",
  "virile": "사내다운",
  "virtuoso": "명인",
  "vitamin or mineral": "비타민이나 무기물",
  "vocal": "목소리를 내는",
  "wail": "울부짖다",
  "warlike": "전쟁을 벌이려는",
  "watchdog": "감시 역할을 하는 것",
  "watchword": "표어처럼 쓰는 말",
  "way": "방식",
  "weather science": "날씨 과학",
  "weather scientist": "날씨를 연구하는 사람",
  "weather-related": "날씨와 관련된",
  "wedded": "혼인한",
  "well-built": "몸이 다져진",
  "wetland": "습지대",
  "whimper": "훌쩍이며 울다",
  "wide of the mark": "과녁에서 크게 벗어난",
  "wife's mother": "아내의 어머니",
  "with great care": "아주 조심스럽게",
  "wizard": "마법사",
  "wondrous": "경이로운",
  "wordless": "말이 없는",
  "work in parallel": "나란히 해내다",
  "work one's way": "힘써 나아가다",
  "workings": "작동 구조",
  "wretched": "처참한",
  "write incorrectly": "틀리게 적다",
  "wrong sense": "틀린 뜻",
  "wrongdoing": "비행, 부정"
});
