/**
 * 단어 데이터 — 수능 보카 F 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *
 * ⚠️ COL_POOLS 와 GLOSS 는 words.js 가 이미 만들어 둔 객체다.
 *    여기서 window.GLOSS = {...} 로 재대입하면 A~E 세트의 것이 통째로
 *    사라진다. 반드시 이 파일 맨 아래처럼 Object.assign 으로 병합할 것.
 *
 * ── 이 세트를 쓰면서 지키는 규약 (D·E 세트와 동일) ──
 *
 * meanings — 대표 2개까지만. 첫 뜻에는 괄호 설명을 넣지 않는다.
 *   4지선다 선택지와 짝 맞추기 카드에 그대로 찍히는 문자열이다.
 *
 * ex.f — 반드시 '규칙 변화'만 쓴다.  ★ 가장 중요한 함정
 *   불규칙이면 오답이 원형으로 남아 뜻을 몰라도 정답이 보인다.
 *   tools/words-f-audit.js 가 기계로 검사한다.
 *
 * syn — 문맥에서 실제로 바꿔 쓸 수 있는 말 3개, 아니면 아예 비운다.
 *   3개 미만이면 '아닌 것 고르기'가 출제되지 않으면서 데이터만 남는다.
 *
 *   ★ 유의어를 고른 뒤 반드시 GLOSS 에 이미 있는지, 그 뜻이 이 문맥에 맞는지
 *     확인할 것. 이미 있으면 '거기 적힌 뜻'이 화면에 뜬다.
 *     node tools/pron-render-check.js --word <표제어> 로 확인한다.
 *
 * ant — 진짜 반대말만. 애매하면 '아닌 것 고르기'가 논쟁거리가 된다.
 *
 * pos·level — 오답 후보는 '같은 품사 · 레벨 ±1'로 걸러진다. 한쪽에 몰면
 *   후보가 3개 미만이 되어 그 단어가 조용히 출제에서 빠진다(에러도 안 난다).
 *
 * pron — 한글 발음. 표기 규칙은 js/data/pron.js 헤더에 정리돼 있다.
 *   표제어가 pron 을 가지면 PRON 사전의 같은 항목은 군더더기이므로 반드시
 *   지운다 (tools/pron-audit.js 가 중복을 오류로 잡는다).
 *
 * ── 원본 목록에서 바로잡은 것 (0차에서 tools/f-source.txt 에 반영) ──
 *   filthy      '(피해, 상처를) 가하다, 입히다' → 더러운, 불결한
 *                                               (inflict 의 뜻이 섞였다)
 *   fragrance   '(부피, 크기 등이) 늘다'        → 향기, 방향
 *                                               (swell 의 뜻이 섞였다)
 *   follow suit '수확량, 수익량'                → 선례를 따르다
 *                                               (yield 의 뜻이 섞였다)
 *   frustrated  '좌절시키는'                    → 좌절한, 낙담한
 *                                               (능동/수동이 뒤집혀 있었다)
 *   flit        '동성애의'                      → 훌쩍 날다, 스치듯 지나가다
 *                                               (폐어적 속어 뜻이 올라와 있었다)
 *   fragrance·follow suit 는 이 저장소의 GLOSS 가 이미 옳은 뜻을 갖고 있었다.
 *   flavor perception(향미 지각)은 수능 보카 어휘가 아니라 목록에서 뺐다.
 *   furnish A with B · feel free to do · for one's sake 는 템플릿형 그대로 둔다.
 *
 * ── 1차 기록: 승격한 낱말의 첫 뜻을 고른 근거 ──
 *   사전(GLOSS)에 있던 낱말을 표제어로 올리면, 그 낱말을 유의어로 쓰던 기존
 *   문제의 설명이 '사전 뜻'에서 '표제어 뜻'으로 바뀐다. 1차에서 7개를 올렸다.
 *
 *   fake  ★ meanings 를 ["가짜의"] 한 개로 둔 이유
 *     counterfeit 의 유의어가 ["fake","forged","bogus"] 이고 bogus 의 뜻이
 *     이미 "가짜의, 위조의" 다. fake 를 ["가짜의","위조의"] 로 올리면 한
 *     문제 안에서 두 선택지의 뜻이 한 글자도 다르지 않게 되어 audit 이
 *     오류로 잡는다(그리고 사람이 풀 수 없는 문제가 된다).
 *     ["가짜의"] 는 기존 GLOSS 와 똑같아서 counterfeit·artificial·authentic
 *     세 문제가 한 글자도 바뀌지 않는다. 원본의 '위조의' 는 버렸다.
 *   fad           ["일시적 유행"]  기존 GLOSS 와 동일 → craze 문제 무변
 *   fall back on  ["~에 의지하다"] 기존 GLOSS 와 동일 → draw on 문제 무변
 *   facility      "시설, 기관" → ["시설","설비"]  amenity 문제의 설명이
 *                 바뀌지만 더 정확하다('기관'은 institution 쪽 뜻이다)
 *   factor        "요인, 요소" → ["요인","인자"]  determinant 문제 무해
 *   fade          "바래다, 사라지다" → ["바래다","서서히 사라지다"]
 *                 disappear 의 첫 뜻이 "사라지다" 라서 그대로 두면 짝 맞추기
 *                 카드에 같은 글자가 겹칠 수 있다. 한 단계 더 좁혔다
 *   faith         "신뢰, 신앙" → ["믿음","신앙심"]  conviction 문제 무해
 *
 * ── 1차에서 유의어로 쓰지 않은 것과 이유 ──
 *   make up   → fabricate 의 유의어로 쓰려 했으나 GLOSS 가 "구성하다;
 *               화해하다" 다. 날조 문맥이 아니다. concoct·trump up·falsify 로
 *   ease      → facilitate 의 유의어로 쓰려 했으나 GLOSS 가 "쉬움, 편안함"
 *               (명사)이다. 동사 자리에 맞지 않는다. assist·expedite 로
 *   capacity  → faculty 의 유의어로 쓰려 했으나 표제어 뜻이 "수용력, 용량"
 *               이다. '능력' 뜻이 아니다. ability·aptitude 로
 *   dim       → fade 의 유의어로 쓰려 했으나 GLOSS 가 "어둑하게 하다"(타동)
 *               다. fade 는 자동사다. wither·die away·lose color 로
 *   bogus     → fake 의 유의어로 쓰려 했으나 위 counterfeit 문제와 겹친다
 *
 * ── 2차 기록: 승격한 9개의 첫 뜻 ──
 *   2차는 기존 사전 항목 9개를 표제어로 올렸다. 그중 8개는 기존 뜻을 그대로
 *   가져와 기존 문제가 한 글자도 바뀌지 않게 했다.
 *     fallacy·fantasy·fascinate·fatality·fate·fault·favorable — 기존 뜻 유지
 *     favorable 은 adverse·approving·beneficial·conducive 넷이 참조하는 자리라
 *     원본 순서('호의적인' 먼저)를 버리고 기존 순서를 지켰다
 *     fatal  기존 뜻이 표제어 deadly 의 뜻과 글자까지 같았다. 표제어 둘이
 *            같은 뜻 문자열을 갖지 않도록 ["치명적인","돌이킬 수 없는"] 로
 *     fare   기존 '요리, 음식' 과 원본 '(교통) 요금' 이 아예 다른 갈래다.
 *            둘을 모두 담았다(["요금","음식"]). cuisine 의 선택지 설명이
 *            '요리, 음식' → '요금, 음식' 으로 바뀐다 — 음식 갈래는 그대로
 *            남으므로 틀린 설명이 되지는 않는다
 *
 * ── 2차에서 유의어로 쓰지 않은 것과 이유 ──
 *   charge       fare 의 유의어로 쓰려 했으나 표제어 뜻이 '청구하다'(동사)다
 *   acquaintance familiarity 의 유의어로 쓰려 했으나 뜻이 '아는 사람, 지인'
 *                으로 사람을 가리켜 '익숙함' 문맥에 맞지 않는다
 *   flaw         fault 의 유의어로 쓰려 했으나 뜻 '결함, 흠' 이 표제어 defect
 *                의 뜻과 글자까지 같아 한 문제에서 두 선택지가 구별되지 않는다
 *
 * ── 3차 기록 ──
 *   승격 5개. 넷은 기존 뜻을 그대로 가져와 기존 문제를 그대로 뒀다.
 *     feast·feature·fertile·fertilizer — 기존 뜻 유지
 *       feature 는 aspect·characteristic·column 셋이 참조하는 자리다
 *       feast 는 원본이 '축제, 축하연' 이지만 feast 는 festival 이 아니라
 *         잔치를 가리킨다. 기존 '연회, 잔치' 가 더 정확하다
 *       fertile 은 원본 첫 뜻에 괄호가 있어('(토지가) 비옥한') 기존 뜻을 썼다
 *     fear  ★ 품사를 동사로 정했다
 *       원본은 '공포, 두려움; 두려워하다, 염려하다' 로 명사가 먼저다. 그런데
 *       기존 표제어 dread 의 유의어 자리에 쓰이고 형제 선택지가 shrink from·
 *       be terrified of 로 모두 동사다. 명사로 올리면 한 문제 안에서 품사가
 *       어긋난 선택지가 섞인다. 기존 뜻 ["두려워하다","겁내다"] 를 지켰다.
 *
 *   fertil 계열 4개가 한 챕터에 몰렸다 — 0차 보드 예비검사가 짚은 자리다.
 *   fertile(adj B2)·fertilize(v B2) 는 품사로, fertility(n C1)·
 *   fertilizer(n B1) 는 레벨을 두 단계 벌려 4지선다에서 갈라 놓았다.
 *
 *   fee 는 뜻 순서를 원본('요금; 수수료')과 바꿔 ["수수료","요금"] 으로 했다.
 *   2차의 fare 가 ["요금","음식"] 이라 첫 뜻이 겹치면 짝 맞추기 카드에 같은
 *   글자가 뜬다.
 *
 *   federal 은 syn 을 비웠다. 제도 용어여서 바꿔 쓸 수 있는 말이 셋이 안 된다.
 *
 * ── 3차에서 유의어로 쓰지 않은 것과 이유 ──
 *   apprehend  fear 의 유의어로 쓰려 했으나 표제어 뜻이 '체포하다, 파악하다'다
 *   attribute  feature 의 유의어로 쓰려 했으나 동사 표제어('~의 결과로 여기다')
 *   central    federal 의 유의어로 쓰려 했으나 '중심의, 중앙의' 로 연방제와 다르다
 *   put on     feign 의 유의어로 쓰려 했으나 뜻이 '입다, 올리다'다
 *   brew·culture  ferment 의 유의어로 쓰려 했으나 '음료; 끓이다'·'문화, 문명'이다
 *   levy       fee 의 유의어로 쓰려 했으나 '부과하다'(동사)가 먼저다
 *   spread     feast 의 유의어로 쓰려 했으나 '퍼지다'(동사)가 먼저다
 *   frail·fruitful  feeble·fertile 의 유의어로 쓰려 했으나 둘 다 뒤 차수의
 *              표제어다. 사전에 넣었다가 곧 지우는 일을 피했다
 *   down       feather 의 유의어로 쓰려 했으나 '아래로' 로 읽히기 쉬워
 *              soft plumage 로 바꿨다
 *
 * ── 4차 기록 ──
 *   승격 4개.
 *     무변  fiction ["허구","소설"]   ← biography(ant)
 *           fill    ["채우다","메우다"] ← drain(ant)
 *           figure  ["수치","도형"]   ← diagram(syn)·digit(syn)
 *     변경  finding "결론, 발견" → ["조사 결과","발견"]
 *
 *   figure ★ 두 갈래를 모두 남긴 이유
 *     원본은 뜻이 아홉 갈래다. 기존 사전 뜻은 '수치; 도형' 인데, 이 낱말을
 *     digit 은 숫자 쪽으로, diagram 은 도형 쪽으로 각각 유의어로 쓰고 있다.
 *     한 갈래만 남기면 다른 쪽 문제가 어긋난다. 그래서 ["수치","도형"] 으로
 *     두 갈래를 옮겼다. 유의어는 숫자 쪽으로만 모았다 — 한 문제의 선택지에
 *     두 갈래가 섞이면 무엇을 묻는지 흐려진다.
 *
 *   finding 은 기존 뜻 '결론' 이 틀리지는 않지만 finding 은 결론 자체보다
 *     조사·연구로 얻은 결과를 가리킨다. 원본에 맞춰 좁혔고, conclusion 의
 *     유의어 자리에서도 여전히 옳다.
 *
 * ── 4차에서 유의어로 쓰지 않은 것과 이유 ──
 *   result + outcome  둘을 finding 의 유의어로 함께 쓰려 했으나 사전 뜻이
 *              둘 다 "결과" 로 글자까지 같다. 한 문제에서 두 선택지가
 *              구별되지 않는다 → result 만 쓰고 research outcome 을 새로 썼다
 *   refuse     filth 의 유의어로 쓰려 했으나 뜻이 '거절하다'(동사)다
 *   strain     filter 의 유의어로 쓰려 했으나 '긴장, 압박'(명사)이다
 *   load       fill 의 유의어로 쓰려 했으나 '짐, 부하'(명사)다
 *   invention  fiction 의 유의어로 쓰려 했으나 '발명, 창작' 으로 허구 뜻이 없다
 *   frantic·fiscal·forfeit  각각 feverish·financial·fine 의 유의어로 쓰려
 *              했으나 9차·5차·8차의 표제어다. 사전에 넣었다가 곧 지우는 일을
 *              피했다
 *
 * ── 5차 기록 ──
 *   승격 6개. 0차 f-plan ⑧ 이 짚은 자리 둘(firm·fit)이 모두 이 챕터에 있었다.
 *     무변  finite     ["유한한","한계가 있는"] ← endless(ant)
 *           first-rate ["일류의"]              ← exemplary(syn)
 *     변경  firm  "회사; 단단한"  → ["단단한","회사"]  (순서만)
 *           fit   "맞다; 적합한"  → ["알맞은","건강이 좋은"]
 *           flare "타오르다; 불빛" → ["확 타오르다","치솟다"]
 *           flaw  "결함, 흠"      → ["흠","결함"]      (순서만)
 *
 *   firm ★ 두 갈래를 한 낱말에 담았다 (2차 fare 와 같은 처리)
 *     corporation 은 회사 쪽으로, crunchy 는 단단한 쪽으로 이 낱말을 유의어로
 *     쓴다. 한 갈래만 남기면 다른 쪽 문제의 선택지가 틀린 설명이 된다.
 *     pos 는 하나만 고를 수 있어 형용사로 두었다(원본도 형용사 뜻이 먼저다).
 *
 *   fit ★ 세 갈래가 참조한다
 *     athletic 은 '건강한' 쪽, compatibility 는 '적합' 쪽, correspond to 는
 *     '들어맞다' 쪽으로 쓴다. 원본이 전부 형용사 뜻이라 형용사로 두고 세 자리
 *     모두에서 읽히도록 ["알맞은","건강이 좋은"] 으로 했다. 기존 뜻
 *     '맞다; 적합한' 은 athletic(몸이 튼튼한) 자리에서 오히려 약했다.
 *
 *   flare 기존 뜻은 동사와 명사가 섞여 있었다('타오르다; 불빛'). blaze 의
 *     유의어 자리이고 형제가 flame·burn 으로 모두 동사라 동사로 모았다.
 *
 *   flaw  표제어 defect 의 뜻이 ["결함","흠"] 이라 원본 순서를 그대로 쓰면
 *     표제어 둘의 뜻 문자열이 같아진다(2차 fatal·deadly 와 같은 경우).
 *     순서를 바꿔 갈랐다.
 *
 * ── 5차 계열·레벨 배치 ──
 *   flatten·flatter 는 둘 다 동사이고 앞 여섯 글자가 같다. 뜻이 전혀 달라
 *   뜻겹침으로 갈라지지 않으므로 레벨을 두 단계 벌렸다(B1 · C1).
 *   fiscal(C1)은 4차의 financial(B1)과 뜻이 겹치는 형용사여서 역시 두 단계
 *   벌렸다. flat(adj)·flash(v)/flashlight(n)·flaw(n)/flawless(adj)·
 *   fit(adj)/fitness(n) 은 품사가 달라 저절로 갈라진다.
 *
 * ── 5차에서 유의어로 쓰지 않은 것과 이유 ──
 *   beat   flap 의 유의어로 쓰려 했으나 표제어 뜻이 '이기다, 치다' 로 '이기다'가
 *          앞에 와 문맥이 흐려진다
 *   even   flat 의 유의어로 쓰려 했으나 표제어 뜻이 '같은, 짝수의' 다
 *   level  flat 의 유의어로 쓰려 했으나 뜻이 '수준, 높이'(명사)다
 *   flutter flap 의 유의어로 쓰려 했으나 7차의 표제어다
 *
 * ── 6차 기록 ──
 *   승격 9개. 이 차수에서 가장 많이 올렸다. 여덟은 기존 뜻을 그대로 가져왔다.
 *     무변  flee        ["도망치다"]           ← chase(ant)·escape(syn)
 *           flexibility ["유연성","적응성"]     ← adaptability(syn)
 *           flexible    ["잘 휘는","유연한"]    ← adaptive·brittle·convertible·
 *                                              elastic 넷이 참조한다
 *           float       ["떠다니다","뜨다"]     ← drift(syn)
 *           flourish    ["번성하다","활짝 피다"] ← blossom(syn)·decay(ant)
 *           flow        ["흐름","흐르다"]       ← circulate·circulation·
 *                                              congestion·current 넷이 참조한다
 *           fluency     ["유창함"]             ← eloquence(syn)
 *           flush       ["붉어지다","물을 내리다"] ← blush(syn)
 *     변경  flex "구부리다" → ["관절을 구부리다","움직이다"]
 *
 *   flow ★ 기존 사전 뜻이 두 갈래를 함께 담고 있어 그대로 옮기면 네 문제가
 *     모두 무변이 된다. circulate 는 동사 쪽, circulation·congestion·current 는
 *     명사 쪽으로 쓰므로 pos 는 참조가 셋인 명사로 두었다
 *     (firm·fare 와 같은 처리다).
 *
 *   flex 기존 뜻 '구부리다' 는 표제어 bend 의 첫 뜻과 글자까지 같았다.
 *     flex 는 특히 관절·근육을 구부리는 것이라 원본에 맞춰 좁혔다.
 *     bend 의 유의어 자리에서도 여전히 옳다.
 *
 * ── 6차 계열·레벨 배치 ──
 *   flick·flicker 는 앞 다섯 글자가 같다. separateClashes 는 여섯 글자를 보므로
 *   갈라 주지 않고 4지선다에는 애초에 그 장치가 없다. 오타처럼 보이지 않게
 *   레벨을 두 단계 벌렸다(B1 · C1).
 *   flex(v)·flexibility(n)·flexible(adj) 은 품사가 달라 저절로 갈라진다.
 *
 * ── 6차에서 원본을 고친 것 ──
 *   fluffy  '보풀의, 솜털의' → 솜털의, 푹신한
 *           '보풀의' 는 옷감에 이는 보풀을 가리켜 fluffy 의 뜻이 아니다
 *   flick·float·fluid 는 첫 뜻에 있던 괄호 설명을 뺐다
 *
 * ── 6차에서 유의어로 쓰지 않은 것과 이유 ──
 *   waver   flicker·fluctuate 의 유의어로 쓰려 했으나 2차에 넣은 뜻이
 *           '흔들리다, 주저하다' 로 '주저하다' 가 문맥에 섞인다
 *   flutter flit·flicker 의 유의어로 쓰려 했으나 7차의 표제어다
 *   current flow 의 유의어로 쓰려 했으나 표제어 뜻이 '흐름, 현재의' 로
 *           '현재의' 가 섞인다 → stream·steady movement·running water 로
 *
 * ── 7차 기록 ──
 *   승격은 셋뿐이었다. 그중 하나는 기존 결함을 함께 고쳤다.
 *     무변  follow suit ["선례를 따르다"] ← break new ground(ant)
 *     변경  foe    "적"       → ["원수","적"]
 *           forbid "금지하다" → ["금지하다","못하게 하다"]
 *
 *   forbid ★ 기존 결함을 고친 자리다
 *     표제어 ban 의 유의어가 prohibit·forbid·outlaw 인데 prohibit 의 뜻도
 *     '금지하다' 여서 그 문제에서는 두 선택지의 설명이 글자까지 같았다.
 *     한쪽을 골라야 할 근거가 화면에 없는 상태다. words-b.js 에는 세트별
 *     audit 이 없어(D·E 세트만 있다) 지금까지 걸리지 않던 자리다.
 *     '못하게 하다' 를 더해 두 선택지를 갈랐다.
 *
 *   foe 기존 뜻 '적' 은 표제어 enemy 의 첫 뜻과 같았다. 원본의 '원수' 를 앞에
 *     두어 갈랐다. comrade·enemy 두 자리에서 여전히 옳다.
 *
 * ── 7차에서 같은 세트 안 겹침을 피한 것 ──
 *   flutter  원본 '날개 치다, 퍼덕거리다' 의 둘째 뜻이 5차 표제어 flap 의 뜻과
 *            글자까지 같다 → '파르르 떨다' 로 갈랐다
 *   flux     원본 '(물의) 흐름' 의 첫 뜻이 6차 표제어 flow 와 같다. flux 는
 *            오늘날 'in flux' 처럼 끊임없는 변화를 가리키는 쪽으로 더 쓰이므로
 *            ["끊임없는 변화","유동"] 으로 적었다
 *
 * ── 7차 계열 ──
 *   forbid(v)·forbidden(adj) 은 품사가 달라 저절로 갈라진다.
 *   fore- 로 시작하는 다섯 낱말(foreboding·forecast·foregone·forehead·
 *   foremost)은 다섯째 글자부터 갈라져 여섯 글자 가족이 아니다. 0차 보드
 *   예비검사에서도 걸리지 않았다.
 *
 * ── 8차 기록 ──
 *   승격 11개. 가장 많이 올린 차수다.
 *     무변  foresee ["예견하다","내다보다"] ← anticipate(syn)·expect(syn)
 *           formal  ["격식을 갖춘","공식적인"] ← casual(ant)
 *           former  ["이전의","전자의"]      ← bygone(syn)
 *           fortune ["운","행운"]           ← destiny(syn)
 *           format·formation·formula 는 사전에만 있고 참조가 없던 항목이라
 *           무엇으로 정해도 기존 문제에 영향이 없다
 *     변경  form       "구성하다; 형태"     → ["형성시키다","구성하다"]
 *           forsake    "버리다, 포기하다"    → ["버리다","떠나다"]
 *           forthright "솔직한, 거리낌없는"  → ["솔직 담백한","거리낌없는"]
 *           found      "창립하다"           → ["설립하다","창립하다"]
 *
 *   form ★ 네 곳이 참조하고 넷 다 동사 자리다(come into existence·compose·
 *     constitute·crystallize). 기존 뜻에 섞여 있던 명사 '형태' 는 네 자리
 *     어디에도 쓰이지 않는 군더더기였다. 동사로만 모아 네 문제의 설명을
 *     또렷하게 했다. flow(6차)는 명사 자리가 셋이라 두 갈래를 남겼지만
 *     여기는 넷 다 동사여서 갈래를 하나로 좁히는 것이 옳다.
 *
 *   forsake 기존 뜻이 표제어 abandon 의 뜻과 글자까지 같았다.
 *   forthright 기존 뜻의 첫 마디가 표제어 candid 의 첫 뜻과 같고, 유의어
 *     frank 의 뜻과도 글자까지 같았다. 원본의 '솔직 담백한' 으로 셋을 갈랐다.
 *   fortune 2차의 fate 가 ["운명","숙명"] 이고 destiny 는 fate 와 fortune 을
 *     함께 유의어로 쓴다. 원본의 '운명' 을 첫 뜻으로 쓰면 한 문제에서 두
 *     선택지가 같은 글자로 시작한다. 기존 뜻을 그대로 두어 갈랐다.
 *
 * ── 8차 계열·레벨 배치 ──
 *   format·formation 이 앞 여섯 글자가 같은 가족이고 둘 다 명사다. 레벨을 두
 *   단계 벌리고(B1 · C1) 첫 뜻도 겹치지 않게 골랐다(형식 / 형성).
 *   form(v)·formal(adj)·former(adj)·formula(n) 은 formatN 계열과 다섯째
 *   글자에서 갈라져 여섯 글자 가족이 아니다. forge(v)·forgery(n) 도 다섯
 *   글자까지만 같고 품사가 다르다. foresee(v)·foresight(n) 도 같다.
 *
 * ── 8차에서 유의어로 쓰지 않은 것과 이유 ──
 *   counterfeit·fake  forge 의 유의어로 쓰려 했으나 둘 다 형용사 표제어여서
 *                     동사 자리에 '가짜의' 가 뜬다
 *   shape   form 의 유의어로 쓰려 했으나 뜻이 '형태; 영향을 미치다' 로 명사가
 *           먼저 온다
 *   blunt   forthright 의 유의어로 쓰려 했으나 표제어 뜻이 '무딘' 이다
 *   past    former 의 유의어로 쓰려 했으나 뜻이 '~을 지나서; 과거' 로 전치사가
 *           먼저 온다
 *   spring  fountain 의 유의어로 쓰려 했으나 뜻이 '튀다; 봄' 이다
 *   prosperity  fortune 의 유의어로 쓰려 했으나 뜻이 '번영, 번창' 이다
 *   creation    formation 의 유의어로 쓰려 했으나 표제어 뜻이 '창작물, 창작'이다
 *
 * ── 9차 기록 ──
 *   승격 10개.
 *     무변  fragile  ["깨지기 쉬운","허약한"] ← brittle(syn)·delicate(syn)
 *           frantic  ["미친 듯한","정신없는"]  ← desperate(syn)
 *           fraud    ["사기꾼","사기"]        ← charlatan(syn)·deceit(syn)
 *           friction ["마찰","갈등"]          ← conflict(syn)·discord(syn)
 *           fragment·free of charge·frigid 는 사전에만 있고 참조가 없던 항목이라
 *           무엇으로 정해도 기존 문제에 영향이 없다 (셋 다 PRON 도 없던 항목이다)
 *     변경  fracture  "골절; 부수다"   → ["부러지다","부수다"]
 *           fragrance "향기, 방향"     → ["향기","좋은 냄새"]
 *           frail     "허약한"         → ["무른","허약한"]
 *
 *   fraud·friction 은 기존 사전 뜻이 두 갈래를 함께 담고 있어 그대로 옮기니
 *     참조하는 두 자리가 모두 무변이 되었다 (fraud 는 charlatan 쪽이 '사기꾼',
 *     deceit 쪽이 '사기' / friction 은 conflict·discord 쪽이 '갈등').
 *
 *   fracture 원본이 '골절; 부러지다' 로 명사와 동사가 섞여 있다. break 의
 *     유의어 자리이고 형제가 shatter·smash 로 모두 동사라 동사로 모았다.
 *   fragrance 기존 뜻이 표제어 aroma 의 뜻과 글자까지 같았다 → 둘째 뜻을
 *     '좋은 냄새' 로 갈랐다.
 *   frail 기존 뜻 '허약한' 이 3차 표제어 feeble 의 첫 뜻과 같았다. 같은 세트에서
 *     카드가 겹치지 않도록 원본의 '무른' 을 앞에 두었다.
 *
 * ── 9차 계열 ──
 *   fragrance(n)·fragrant(adj) 은 앞 일곱 글자가 같은 가족이지만 품사가 달라
 *   갈라진다. frequency(n)·frequent(adj), fright(n)·frighten(v) 도 같다.
 *   fraction(n)·fracture(v) 는 다섯 글자까지만 같고 품사도 다르다.
 *
 * ── 9차에서 유의어로 쓰지 않은 것과 이유 ──
 *   crack  fracture 의 유의어로 쓰려 했으나 표제어인데 품사가 명사여서 동사
 *          자리에 '갈라진 틈' 이 뜬다
 *   wild   frantic 의 유의어로 쓰려 했으나 뜻이 '야생의, 길들지 않은' 이다
 *
 * ── 10차 기록 ──
 *   승격 6개. 여섯 모두 기존 뜻을 그대로 가져와 기존 문제를 그대로 뒀다.
 *     frown       ["얼굴을 찡그리다"]    ← chuckle(ant)
 *     frugal      ["검소한","절약하는"]   ← economical(syn)
 *     fulfill     ["이행하다","달성하다"] ← accomplish(syn)
 *     fundamental ["근본적인","기초적인"] ← cardinal(syn)·elementary(syn)
 *     fuel·function 은 사전에만 있고 참조가 없던 항목이다(둘 다 PRON 도 없었다)
 *
 *   fuel  원본이 '연료를 넣다; 악화시키다; 부채질하다; 연료' 로 동사와 명사가
 *     섞여 있다. 기존 사전 뜻도 '연료; 부추기다' 로 두 갈래였고 참조하는
 *     표제어가 없어 자유롭게 정할 수 있었다. 두 갈래 모두 수능에 나오므로
 *     함께 담았다 (2차 fare·5차 firm 과 같은 처리다).
 *
 * ── 10차 계열 ──
 *   0차 f-plan 이 짚은 이 챕터의 여섯 글자 가족 둘은 모두 품사가 달라 저절로
 *   갈라진다 — frustrate(v)/frustrated(adj), function(n)/functional(adj).
 *   fruitful(adj)/fruition(n) 은 다섯 글자까지만 같고 품사도 다르다.
 *   fund-raising(n)/fundamental(adj) 은 네 글자까지만 같다.
 *
 * ── 0차에서 바로잡은 낱말 ──
 *   frustrated  원본에 '좌절시키는' 으로 적혀 있던 것을 '좌절한, 낙담한' 으로
 *               넣었다 — 능동과 수동이 뒤집혀 있었다(그것은 frustrating 의 뜻)
 *
 * ── 10차에서 유의어로 쓰지 않은 것과 이유 ──
 *   discharge  fulfill  ← 표제어 뜻이 '방출하다, 내보내다' 로 '이행하다' 뜻이 없다
 *   exhaust    fume     ← 표제어 뜻이 '고갈시키다, 기진맥진하게 만들다' 다
 *   pelt       fur      ← 뜻이 '세게 던지다; 퍼붓다' 로 동사다
 *   mold       fungus   ← 뜻이 '틀, 거푸집' 이다
 *   let down   frustrated ← 뜻이 '실망시키다' 로 형용사 자리에 사역동사가 온다
 *
 * ── 11차 기록 (마지막) ──
 *   승격 3개.
 *     무변  fuzzy ["흐릿한","애매한"] ← blurry(syn)
 *           furnish 는 사전에만 있고 참조가 없던 항목이다(PRON 도 없었다)
 *     변경  further "추가의; 더 멀리" → ["추가의","촉진하다"]
 *
 *   further ★ 기존 결함을 고친 자리다
 *     두 곳이 참조하는데 필요한 갈래가 서로 다르다 — additional 은 '추가의'
 *     (형용사) 쪽, advance 는 '촉진하다'(동사) 쪽이다. 기존 사전 뜻에는 동사
 *     갈래가 아예 없어서, advance 문제에서는 progress·proceed 라는 동사 선택지
 *     사이에 형용사 뜻이 섞여 있었다. '유의어가 아닌 것' 을 찾는 학생에게
 *     잘못된 단서를 준다. words.js 는 세트별 audit 이 없어(D·E 세트만 있다)
 *     걸리지 않던 자리다. 두 갈래를 담아 양쪽을 모두 살렸다.
 *     원본의 '더 나아가'(부사)는 두 참조 어디에도 쓰이지 않아 내려놓았다.
 *
 *   fuzzy 원본은 '흐린, 솜털 있는' 인데 '솜털 있는' 은 6차 표제어 fluffy
 *     (솜털의)와 겹친다. 기존 사전 뜻을 그대로 두어 blurry 문제도 그대로 남겼다.
 *
 * ── 11차 계열 ──
 *   furnish(v)·furnish A with B(phr) 은 앞 여섯 글자가 같은 가족이지만 품사가
 *   달라 갈라진다. 10차의 fur(n)과 furry(adj)도 품사가 다르다.
 *   furrow·furry 는 네 글자까지만 같다.
 *
 * ── F 세트를 마치며 ──
 *   210단어 11챕터. 0차에 규모를 재고 1~11차에 20단어씩(마지막 10단어) 넣었다.
 *
 *   원본 목록에서 바로잡은 뜻 5개 — filthy·fragrance·follow suit·frustrated·flit.
 *   그중 fragrance·follow suit 는 이 저장소의 기존 사전이 이미 옳은 뜻을 갖고
 *   있어, 원본 쪽이 틀렸다는 근거가 저장소 안에 있었다.
 *
 *   기존 문제의 결함 3개를 함께 고쳤다. 모두 '한 문제의 두 선택지가 구별되지
 *   않거나 품사가 어긋난' 갈래이고, A·B·C 세트에는 세트별 audit 이 없어
 *   지금까지 걸리지 않던 자리다.
 *     7차  ban 의 prohibit·forbid 가 둘 다 '금지하다'
 *     8차  candid 의 frank·forthright 가 둘 다 '솔직한, 거리낌없는'
 *     11차 advance 의 further 에 동사 갈래가 없었다
 *   승격할 때 '그 낱말을 유의어로 쓰는 기존 표제어의 형제 선택지' 를 함께 읽는
 *   습관이 이 셋을 찾아냈다. 다음 세트(G)에서도 같은 순서로 볼 것.
 *
 *   승격은 모두 73개였다. 기존 뜻을 그대로 옮길 수 있으면 그렇게 해서 기존
 *   문제를 건드리지 않았고, 옮길 수 없는 자리만 아래 세 가지로 풀었다.
 *     ① 두 갈래를 meanings 에 함께 담기 — 참조하는 자리들이 서로 다른 갈래를
 *        쓸 때. fare·figure·firm·fit·flow·fraud·friction·fuel·further
 *     ② 한 갈래로 좁히기 — 참조가 모두 같은 품사일 때.
 *        form(넷 다 동사)·fracture·fear·ferment·foster
 *     ③ 순서 바꾸기 — 다른 표제어와 뜻 문자열이 글자까지 같아질 때.
 *        fatal/deadly·flaw/defect·flex/bend·foe/enemy·forsake/abandon·
 *        fragrance/aroma·frail/feeble
 *
 *   같은 F 세트 안에서 첫 뜻이 겹치지 않게도 살폈다 — 짝 맞추기 카드에 같은
 *   글자가 두 장 뜨면 고를 근거가 없어진다.
 *     fee/fare·flutter/flap·flux/flow·format/formation·frail/feeble·fuzzy/fluffy
 *
 *   계열(앞 여섯 글자가 같은 낱말)은 20묶음이었다. 대부분 품사가 달라 저절로
 *   갈라졌고, 품사까지 같은 넷만 레벨을 두 단계 벌렸다 —
 *   fertility/fertilizer·flatten/flatter·fiscal/financial·flick/flicker·
 *   format/formation.
 *
 *   syn 을 비운 낱말은 federal 하나다. '연방제의' 는 제도 용어여서 문맥에서
 *   바꿔 쓸 수 있는 말이 셋이 안 된다.
 *
 * 진행 상황: 210 / 210단어 (fable ~ fuzzy) — 11차, 11챕터. F 세트 완료.
 *
 * 단어를 더 넣을 때 확인 방법:
 *   node tools/words-f-audit.js           검사 6종 + 출제 시뮬레이션
 *   node tools/words-f-audit.js --rules   검사별 수행 건수
 *   node tools/pron-audit.js              발음 커버리지
 *   node tools/pron-render-check.js --all 전수 점검
 *   node tools/d-impact.js                기존 세트 영향 측정 (지문 무변화 확인)
 *   node tools/match-order-check.js       짝 맞추기 보드 전수 검사
 *   node tools/f-plan.js                  남은 목록의 함정 재확인
 */
window.VOCAB_F = [
  /* ── 1차: fable ~ fall off (20개) ─────────────── */

  /* ── fab ───────────────────────────────────── */
  { word:"fable", pron:"페이블", pos:"n", level:"B2", meanings:["우화","설화"],
    syn:["parable","allegory","folktale"],
    ex:[{ s:"Every child knows the {{}} of the tortoise and the hare.", f:"fable", ko:"아이들은 누구나 거북과 토끼의 우화를 안다." }] },

  { word:"fabric", pron:"패브릭", pos:"n", level:"B2", meanings:["직물","천"],
    syn:["cloth","textile","material"],
    ex:[{ s:"The dress is cut from a light cotton {{}}.", f:"fabric", ko:"그 원피스는 얇은 면직물로 재단되었다." }] },

  /* 원본은 '날조하다, 조작하다; 제작하다, 조립하다' 인데 두 갈래를 함께 담으면
     짝 맞추기 카드의 뜻이 흐려진다. 유의어가 붙는 날조 쪽으로 모았다. */
  { word:"fabricate", pron:"패브러케이트", pos:"v", level:"C1", meanings:["날조하다","조작하다"],
    syn:["concoct","trump up","falsify"],
    ex:[{ s:"Reporters proved that the witness had {{}} the entire story.", f:"fabricated", ko:"기자들은 그 증인이 이야기 전체를 날조했음을 밝혀냈다." }] },

  { word:"fabulous", pron:"패뷸러스", pos:"adj", level:"B2", meanings:["기막히게 멋진","굉장한"],
    syn:["marvelous","superb","terrific"],
    ex:[{ s:"The view from the summit was simply {{}}.", f:"fabulous", ko:"정상에서 보는 경치는 그저 기막히게 멋졌다." }] },

  /* ── fac ───────────────────────────────────── */
  { word:"facade", pron:"퍼사드", pos:"n", level:"C1", meanings:["정면","허울"],
    syn:["frontage","outward appearance","veneer"],
    ex:[{ s:"The bank kept its old stone {{}} when the inside was rebuilt.", f:"facade", ko:"그 은행은 내부를 다시 지으면서도 오래된 석조 정면을 남겼다." }] },

  { word:"facilitate", pron:"퍼실러테이트", pos:"v", level:"C1", meanings:["쉽게 하다","촉진하다"],
    syn:["assist","expedite","make easier"],
    ex:[{ s:"A shared language can {{}} trade between neighbors.", f:"facilitate", ko:"공통 언어는 이웃 나라 사이의 교역을 쉽게 할 수 있다." }] },

  { word:"facility", pron:"퍼실러티", pos:"n", level:"B2", meanings:["시설","설비"],
    syn:["installation","amenity","establishment"],
    ex:[{ s:"The town opened a new sports {{}} beside the river.", f:"facility", ko:"그 도시는 강가에 새 체육 시설을 열었다." }] },

  { word:"factor", pron:"팩터", pos:"n", level:"B2", meanings:["요인","인자"],
    syn:["element","cause","determinant"],
    ex:[{ s:"Cost was the deciding {{}} in their final choice.", f:"factor", ko:"비용이 그들의 최종 선택을 가른 요인이었다." }] },

  /* phr 은 문장 빈칸에 넣기 어려워 ex 를 두지 않는다 (기존 phr 151개 모두 같다). */
  { word:"factor in", pron:"팩터 인", pos:"phr", level:"B2", meanings:["~을 고려하다"],
    syn:["take into account","allow for","bear in mind"] },

  { word:"factual", pron:"팩추얼", pos:"adj", level:"C1", meanings:["사실에 근거한"],
    syn:["accurate","truthful","verifiable"], ant:["fictional"],
    ex:[{ s:"The report must stay {{}} and leave out guesswork.", f:"factual", ko:"그 보고서는 사실에 근거해야 하고 추측은 빼야 한다." }] },

  { word:"faculty", pron:"패컬티", pos:"n", level:"C1", meanings:["능력","학부"],
    syn:["ability","aptitude","mental power"],
    ex:[{ s:"Age had not dulled her {{}} for quick reasoning.", f:"faculty", ko:"나이는 빠르게 추론하는 그녀의 능력을 무디게 하지 못했다." }] },

  /* ── fad ~ fak ──────────────────────────────── */
  { word:"fad", pron:"패드", pos:"n", level:"B2", meanings:["일시적 유행"],
    syn:["craze","trend","vogue"],
    ex:[{ s:"The diet proved to be nothing more than a passing {{}}.", f:"fad", ko:"그 식이법은 지나가는 일시적 유행에 지나지 않는 것으로 드러났다." }] },

  { word:"fade", pron:"페이드", pos:"v", level:"B1", meanings:["바래다","서서히 사라지다"],
    syn:["wither","die away","lose color"], ant:["intensify"],
    ex:[{ s:"Bright curtains {{}} quickly in direct sunlight.", f:"fade", ko:"밝은 색 커튼은 직사광선에서 빨리 바랜다." }] },

  { word:"fair", pron:"페어", pos:"adj", level:"B1", meanings:["공정한","타당한"],
    syn:["just","impartial","even-handed"], ant:["biased"],
    ex:[{ s:"Both sides called the referee's ruling {{}}.", f:"fair", ko:"양쪽 모두 심판의 판정을 공정하다고 했다." }] },

  { word:"faith", pron:"페이스", pos:"n", level:"B1", meanings:["믿음","신앙심"],
    syn:["trust","belief","confidence"], ant:["doubt"],
    ex:[{ s:"She kept her {{}} in the team through a losing season.", f:"faith", ko:"그녀는 연패하는 시즌 내내 팀에 대한 믿음을 지켰다." }] },

  { word:"faithful", pron:"페이스풀", pos:"adj", level:"B2", meanings:["충실한","헌신적인"],
    syn:["loyal","devoted","steadfast"], ant:["disloyal"],
    ex:[{ s:"He stayed {{}} to the promise he had made years earlier.", f:"faithful", ko:"그는 몇 해 전에 한 약속에 충실했다." }] },

  /* meanings 가 한 개인 이유는 이 파일 헤더 '1차 기록' 에 적었다. */
  { word:"fake", pron:"페이크", pos:"adj", level:"B1", meanings:["가짜의"],
    syn:["counterfeit","phony","sham"], ant:["genuine"],
    ex:[{ s:"Customs officers seized a crate of {{}} watches.", f:"fake", ko:"세관원들이 가짜 시계 한 상자를 압수했다." }] },

  /* ── fall ──────────────────────────────────── */
  { word:"fall back on", pron:"폴 백 온", pos:"phr", level:"B2", meanings:["~에 의지하다"],
    syn:["resort to","turn to","rely on"] },

  { word:"fall behind", pron:"폴 비하인드", pos:"phr", level:"B1", meanings:["늦어지다","낙오하다"],
    syn:["lag","trail","drop back"] },

  { word:"fall off", pron:"폴 오프", pos:"phr", level:"B2", meanings:["줄다","떨어지다"],
    syn:["decline","decrease","dwindle"] },

  /* ── 2차: fall short of ~ favorably (20개) ─────── */

  { word:"fall short of", pron:"폴 숏 오브", pos:"phr", level:"B2", meanings:["~이 부족하다"],
    syn:["fail to reach","come up short","not measure up"] },

  { word:"fallacy", pron:"팰러시", pos:"n", level:"C1", meanings:["오류","잘못된 생각"],
    syn:["misconception","false notion","faulty reasoning"], ant:["truth"],
    ex:[{ s:"The whole argument rests on a simple {{}} about averages.", f:"fallacy", ko:"그 논증 전체가 평균에 관한 단순한 오류에 기대고 있다." }] },

  { word:"falter", pron:"폴터", pos:"v", level:"C1", meanings:["불안정해지다","머뭇거리다"],
    syn:["waver","hesitate","lose momentum"], ant:["press on"],
    ex:[{ s:"His voice began to {{}} as he read the verdict aloud.", f:"falter", ko:"판결문을 소리내어 읽는 동안 그의 목소리가 떨리기 시작했다." }] },

  /* 유의어로 acquaintance 를 쓰려 했으나 표제어 뜻이 '아는 사람, 지인' 이다.
     '익숙함' 이 아니라 사람을 가리켜 문맥이 어긋난다. */
  { word:"familiarity", pron:"퍼밀리애러티", pos:"n", level:"B2", meanings:["익숙함","친근함"],
    syn:["intimacy","closeness","working knowledge"],
    ex:[{ s:"Years at the bench gave her a deep {{}} with the machine.", f:"familiarity", ko:"작업대에서 보낸 여러 해가 그 기계에 대한 깊은 익숙함을 그녀에게 주었다." }] },

  { word:"famine", pron:"패민", pos:"n", level:"B2", meanings:["굶주림","기아"],
    syn:["starvation","hunger","food shortage"], ant:["abundance"],
    ex:[{ s:"Three years of drought brought {{}} to the northern villages.", f:"famine", ko:"3년에 걸친 가뭄이 북부 마을들에 굶주림을 불러왔다." }] },

  { word:"fanatic", pron:"퍼내틱", pos:"n", level:"C1", meanings:["광신자","열광자"],
    syn:["zealot","extremist","devotee"],
    ex:[{ s:"Only a true {{}} would camp outside for three nights.", f:"fanatic", ko:"진짜 열광자만이 사흘 밤을 밖에서 야영할 것이다." }] },

  { word:"fantasy", pron:"팬터시", pos:"n", level:"B2", meanings:["환상","공상"],
    syn:["daydream","illusion","reverie"], ant:["reality"],
    ex:[{ s:"As a child he escaped into a {{}} of distant planets.", f:"fantasy", ko:"어릴 때 그는 먼 행성들의 환상 속으로 도피했다." }] },

  /* 원본은 '(교통) 요금' 이고 기존 GLOSS 는 '요리, 음식' 이었다. cuisine 의
     유의어로 쓰이던 자리라 한쪽을 버리면 기존 문제나 원본 중 하나가 어긋난다.
     두 갈래를 모두 담았다. 유의어는 요금 쪽으로만 모았다 — charge 를 쓰려
     했으나 표제어 뜻이 '청구하다'(동사)여서 명사 자리에 맞지 않는다. */
  { word:"fare", pron:"페어", pos:"n", level:"B2", meanings:["요금","음식"],
    syn:["ticket price","transport cost","passage money"],
    ex:[{ s:"The bus {{}} went up by twenty cents this month.", f:"fare", ko:"이번 달 버스 요금이 20센트 올랐다." }] },

  { word:"fascinate", pron:"패서네이트", pos:"v", level:"C1", meanings:["매혹하다","흥미를 끌다"],
    syn:["captivate","intrigue","enthrall"], ant:["bore"],
    ex:[{ s:"Deep-sea creatures {{}} children more than dinosaurs do.", f:"fascinate", ko:"심해 생물은 공룡보다 더 아이들을 매혹한다." }] },

  { word:"fascinating", pron:"패서네이팅", pos:"adj", level:"B2", meanings:["매력적인","대단히 흥미로운"],
    syn:["captivating","gripping","absorbing"], ant:["dull"],
    ex:[{ s:"She gave a {{}} talk on the earliest maps of the coast.", f:"fascinating", ko:"그녀는 그 해안의 최초 지도들에 관해 대단히 흥미로운 강연을 했다." }] },

  /* 원본은 '단식, 금식, 절식; 단식의, 금식의' 로 명사와 형용사가 섞여 있다.
     명사 쪽으로 정했다. */
  { word:"fasting", pron:"패스팅", pos:"n", level:"B2", meanings:["단식","금식"],
    syn:["abstinence","self-denial","going without food"],
    ex:[{ s:"Many traditions set aside a period of {{}} before a festival.", f:"fasting", ko:"많은 전통이 축제 전에 단식 기간을 따로 둔다." }] },

  /* 기존 GLOSS 는 '치명적인, 죽음을 초래하는' 이었는데 그것은 표제어 deadly 의
     뜻과 글자까지 똑같다. 표제어 둘이 같은 뜻 문자열을 갖지 않도록 원본의
     '돌이킬 수 없는' 을 둘째 뜻으로 삼았다. */
  { word:"fatal", pron:"페이털", pos:"adj", level:"B2", meanings:["치명적인","돌이킬 수 없는"],
    syn:["deadly","lethal","mortal"], ant:["harmless"],
    ex:[{ s:"A single careless step proved {{}} on the icy ridge.", f:"fatal", ko:"얼어붙은 능선에서 부주의한 한 걸음이 치명적이었다." }] },

  { word:"fatality", pron:"페이탤러티", pos:"n", level:"B2", meanings:["사망자","치사율"],
    syn:["death","casualty","loss of life"],
    ex:[{ s:"Not a single {{}} was reported in the derailment.", f:"fatality", ko:"그 탈선 사고에서 사망자는 한 명도 보고되지 않았다." }] },

  { word:"fate", pron:"페이트", pos:"n", level:"B2", meanings:["운명","숙명"],
    syn:["destiny","providence","predestination"], ant:["chance"],
    ex:[{ s:"He accepted his {{}} without a word of complaint.", f:"fate", ko:"그는 불평 한마디 없이 자기 운명을 받아들였다." }] },

  { word:"fatigue", pron:"퍼티그", pos:"n", level:"B2", meanings:["피로"],
    syn:["exhaustion","weariness","tiredness"], ant:["vigor"],
    ex:[{ s:"Back-to-back shifts left the crew in deep {{}}.", f:"fatigue", ko:"연달아 이어진 근무가 승무원들을 깊은 피로에 빠뜨렸다." }] },

  { word:"faucet", pron:"포싯", pos:"n", level:"B2", meanings:["수도꼭지"],
    syn:["tap","spigot","valve"],
    ex:[{ s:"Water dripped from the kitchen {{}} all night.", f:"faucet", ko:"밤새 부엌 수도꼭지에서 물이 똑똑 떨어졌다." }] },

  /* 유의어에 flaw 를 넣지 않았다. flaw 의 뜻 '결함, 흠' 이 표제어 defect 의
     뜻과 글자까지 똑같아, 한 문제에서 두 선택지가 구별되지 않는다. */
  { word:"fault", pron:"폴트", pos:"n", level:"B2", meanings:["결점","잘못"],
    syn:["defect","shortcoming","blemish"],
    ex:[{ s:"The report blamed the delay on a design {{}}.", f:"fault", ko:"보고서는 그 지연을 설계 결점 탓으로 돌렸다." }] },

  /* 원본은 '호의; 지지, 선호하다' 로 명사와 동사가 섞여 있다. 명사로 정했다. */
  { word:"favor", pron:"페이버", pos:"n", level:"B2", meanings:["호의","은혜"],
    syn:["kindness","goodwill","good turn"],
    ex:[{ s:"She asked one small {{}} before she left.", f:"favor", ko:"그녀는 떠나기 전에 작은 호의 하나를 부탁했다." }] },

  { word:"favorable", pron:"페이버러블", pos:"adj", level:"B2", meanings:["유리한","호의적인"],
    syn:["advantageous","approving","beneficial"], ant:["adverse"],
    ex:[{ s:"The committee returned a {{}} report on the plan.", f:"favorable", ko:"위원회는 그 계획에 유리한 보고서를 냈다." }] },

  /* 전체 adv 가 27개뿐이라 한쪽 레벨로 몰면 오답 후보가 3개 미만이 된다.
     B2 로 두어 B1·B2·C1 을 후보로 쓸 수 있게 했다. */
  { word:"favorably", pron:"페이버러블리", pos:"adv", level:"B2", meanings:["호의적으로","유리하게"],
    syn:["approvingly","positively","in a good light"],
    ex:[{ s:"The critics spoke {{}} of her first novel.", f:"favorably", ko:"비평가들은 그녀의 첫 소설을 호의적으로 말했다." }] },

  /* ── 3차: fear ~ fetal (20개) ─────────────────── */

  /* 원본은 '공포, 두려움; 두려워하다, 염려하다' 로 명사와 동사가 섞여 있다.
     동사로 정했다 — 기존 표제어 dread 의 유의어 자리에 쓰이고 그 형제 선택지가
     shrink from·be terrified of 로 모두 동사다. 명사로 올리면 한 문제에서
     품사가 어긋난 선택지가 섞인다(#116 이 그 갈래의 버그였다). */
  { word:"fear", pron:"피어", pos:"v", level:"B1", meanings:["두려워하다","겁내다"],
    syn:["dread","be afraid of","be terrified of"],
    ex:[{ s:"Many first-time flyers {{}} takeoff more than landing.", f:"fear", ko:"처음 비행하는 사람들은 착륙보다 이륙을 더 두려워한다." }] },

  { word:"feasibility", pron:"피저빌러티", pos:"n", level:"C1", meanings:["실행 가능성","타당성"],
    syn:["practicability","viability","workability"],
    ex:[{ s:"The council ordered a study on the {{}} of the tunnel.", f:"feasibility", ko:"의회는 그 터널의 실행 가능성에 관한 조사를 지시했다." }] },

  { word:"feasible", pron:"피저블", pos:"adj", level:"B2", meanings:["실행 가능한","그럴듯한"],
    syn:["practicable","viable","achievable"], ant:["unworkable"],
    ex:[{ s:"The plan is only {{}} if the funding arrives by June.", f:"feasible", ko:"그 계획은 자금이 6월까지 들어와야만 실행 가능하다." }] },

  /* 원본은 '축제, 축하연' 인데 feast 는 축제(festival)보다 잔치를 가리킨다.
     기존 사전 뜻 '연회, 잔치' 가 더 정확하고, banquet 문제도 그대로 남는다. */
  { word:"feast", pron:"피스트", pos:"n", level:"C1", meanings:["연회","잔치"],
    syn:["banquet","celebration dinner","lavish meal"],
    ex:[{ s:"The village held a {{}} to mark the end of the harvest.", f:"feast", ko:"마을은 수확이 끝난 것을 기념해 잔치를 열었다." }] },

  { word:"feather", pron:"페더", pos:"n", level:"B1", meanings:["깃털"],
    syn:["plume","quill","soft plumage"],
    ex:[{ s:"A single white {{}} drifted down onto the water.", f:"feather", ko:"흰 깃털 하나가 물 위로 떠내려왔다." }] },

  { word:"feature", pron:"피처", pos:"n", level:"B2", meanings:["특징","특색"],
    syn:["trait","hallmark","distinguishing mark"],
    ex:[{ s:"The clearest {{}} of the new engine is its silence.", f:"feature", ko:"새 엔진의 가장 뚜렷한 특징은 조용함이다." }] },

  /* syn 을 비워 뒀다. federal 은 '연방제의' 라는 제도 용어여서 문맥에서
     바꿔 쓸 수 있는 말이 셋이 안 된다. 억지로 채우면 '아닌 것 고르기'가
     논쟁거리가 된다. */
  { word:"federal", pron:"페더럴", pos:"adj", level:"B2", meanings:["연방제의","연방 정부의"],
    ex:[{ s:"The dispute moved to a {{}} court last spring.", f:"federal", ko:"그 분쟁은 지난 봄 연방 법원으로 넘어갔다." }] },

  /* 뜻 순서를 원본('요금; 수수료')과 바꿨다. 2차의 fare 가 이미
     ["요금","음식"] 이라 첫 뜻이 겹치면 짝 맞추기 카드에 같은 글자가 뜬다. */
  { word:"fee", pron:"피", pos:"n", level:"B1", meanings:["수수료","요금"],
    syn:["payment","service charge","dues"],
    ex:[{ s:"The museum dropped its entrance {{}} for students.", f:"fee", ko:"그 박물관은 학생 입장료를 없앴다." }] },

  { word:"feeble", pron:"피블", pos:"adj", level:"C1", meanings:["허약한","연약한"],
    syn:["weak","infirm","sickly"], ant:["robust"],
    ex:[{ s:"His voice had grown {{}} after the long illness.", f:"feeble", ko:"긴 병을 앓은 뒤 그의 목소리는 허약해졌다." }] },

  { word:"feel free to do", pron:"필 프리 투 두", pos:"phr", level:"B1", meanings:["마음대로 ~하다"],
    syn:["do not hesitate to","be welcome to","go ahead and"] },

  { word:"feign", pron:"페인", pos:"v", level:"C2", meanings:["~인 체하다","가장하다"],
    syn:["pretend","simulate","make a show of"],
    ex:[{ s:"He tried to {{}} surprise when the guests walked in.", f:"feign", ko:"손님들이 들어올 때 그는 놀란 체하려 했다." }] },

  { word:"feminine", pron:"페머닌", pos:"adj", level:"B2", meanings:["여성스러운","여자 같은"],
    syn:["womanly","ladylike","girlish"], ant:["masculine"],
    ex:[{ s:"The design uses soft, {{}} curves throughout.", f:"feminine", ko:"그 디자인은 전체에 부드럽고 여성스러운 곡선을 쓴다." }] },

  { word:"feminist", pron:"페머니스트", pos:"n", level:"B2", meanings:["여권신장론자"],
    syn:["women's rights advocate","suffragist","equality campaigner"],
    ex:[{ s:"She was a leading {{}} of her generation.", f:"feminist", ko:"그녀는 자기 세대를 이끈 여권신장론자였다." }] },

  /* 원본은 '발효시키다; (정치, 사회적) 동요, 소란' 으로 동사와 명사가 섞여
     있다. 동사로 정했다. 발음은 동사 ferment 가 -ment 에 강세를 받아 '퍼멘트'
     다 — 기존 torment("토멘트")·lament("러멘트")·augment("오그멘트")와 같은
     갈래다. 그 셋은 PRON 사전에 있어 pron-audit 의 '-ment → 먼트' 규칙에
     경고로 잡히지만, 표제어의 pron 은 그 규칙이 보지 않으므로 여기서는
     경고가 늘지 않는다(검사 757건, 경고 3건 그대로). */
  { word:"ferment", pron:"퍼멘트", pos:"v", level:"C1", meanings:["발효시키다"],
    syn:["turn sour","let rise","undergo fermentation"],
    ex:[{ s:"Cabbage will {{}} in salt water within a week.", f:"ferment", ko:"양배추는 소금물에서 일주일 안에 발효된다." }] },

  /* ── fertil 계열 4개 ────────────────────────────
     0차 보드 예비검사가 '챕터 3 의 fertil* 4개' 를 최대 위험으로 짚었다.
     짝 맞추기는 separateClashes 가 갈라 주지만 4지선다에는 그 장치가 없어
     품사·레벨로 떼어 놓아야 한다.
       fertile    adj B2      fertilize  v  B2   → 품사가 다르다
       fertility  n   C1      fertilizer n  B1   → 둘 다 명사라 레벨을 두
                                                   단계 벌렸다(후보 ±1 밖) */
  { word:"fertile", pron:"퍼틀", pos:"adj", level:"B2", meanings:["비옥한","다산의"],
    syn:["productive","rich","lush"], ant:["barren"],
    ex:[{ s:"The valley floor is {{}} enough for two harvests a year.", f:"fertile", ko:"그 골짜기 바닥은 한 해 두 번 수확할 만큼 비옥하다." }] },

  { word:"fertility", pron:"퍼틸러티", pos:"n", level:"C1", meanings:["비옥함","생식력"],
    syn:["richness","productiveness","reproductive capacity"],
    ex:[{ s:"Adding compost slowly restored the soil's {{}}.", f:"fertility", ko:"퇴비를 넣자 흙의 비옥함이 서서히 되살아났다." }] },

  { word:"fertilize", pron:"퍼털라이즈", pos:"v", level:"B2", meanings:["비옥하게 하다","수정시키다"],
    syn:["enrich","feed","pollinate"],
    ex:[{ s:"Farmers {{}} the field before the spring planting.", f:"fertilize", ko:"농부들은 봄 파종 전에 밭을 비옥하게 한다." }] },

  { word:"fertilizer", pron:"퍼털라이저", pos:"n", level:"B1", meanings:["비료"],
    syn:["compost","manure","plant food"],
    ex:[{ s:"They spread {{}} across the young rows.", f:"fertilizer", ko:"그들은 갓 자란 줄들 위에 비료를 뿌렸다." }] },

  { word:"fervor", pron:"퍼버", pos:"n", level:"C2", meanings:["열정","열렬함"],
    syn:["zeal","ardor","passion"],
    ex:[{ s:"She spoke with a {{}} that silenced the whole room.", f:"fervor", ko:"그녀는 방 전체를 조용하게 만드는 열정으로 말했다." }] },

  { word:"fetal", pron:"피틀", pos:"adj", level:"C1", meanings:["태아의"],
    syn:["unborn","prenatal","embryonic"],
    ex:[{ s:"The scan tracks {{}} growth week by week.", f:"fetal", ko:"그 초음파는 태아의 성장을 주 단위로 추적한다." }] },

  /* ── 4차: fetch ~ fine-grained (20개) ─────────── */

  { word:"fetch", pron:"페치", pos:"v", level:"B1", meanings:["가지고 오다"],
    syn:["bring","go and get","retrieve"],
    ex:[{ s:"Could you {{}} the spare key from the drawer?", f:"fetch", ko:"서랍에서 여분 열쇠를 가지고 와 줄래?" }] },

  { word:"fetus", pron:"피터스", pos:"n", level:"C1", meanings:["태아"],
    syn:["unborn child","embryo","developing baby"],
    ex:[{ s:"By week twelve the {{}} can already move its fingers.", f:"fetus", ko:"12주가 되면 태아는 이미 손가락을 움직일 수 있다." }] },

  { word:"feudal", pron:"퓨들", pos:"adj", level:"C1", meanings:["봉건 시대의","중세의"],
    syn:["medieval","manorial","of the Middle Ages"],
    ex:[{ s:"The village still follows boundaries drawn in {{}} times.", f:"feudal", ko:"그 마을은 아직 봉건 시대에 그어진 경계를 따른다." }] },

  { word:"feverish", pron:"피버리시", pos:"adj", level:"B2", meanings:["열광적인","열띤"],
    syn:["frenzied","hectic","overexcited"],
    ex:[{ s:"The last hour before the deadline was {{}}.", f:"feverish", ko:"마감 직전 한 시간은 열광적이었다." }] },

  { word:"fiber", pron:"파이버", pos:"n", level:"B2", meanings:["섬유","실"],
    syn:["thread","strand","filament"],
    ex:[{ s:"The rope is woven from a tough plant {{}}.", f:"fiber", ko:"그 밧줄은 질긴 식물 섬유로 짜여 있다." }] },

  { word:"fiction", pron:"픽션", pos:"n", level:"B2", meanings:["허구","소설"],
    syn:["fabrication","made-up story","invented tale"], ant:["fact"],
    ex:[{ s:"The novel blends real history with pure {{}}.", f:"fiction", ko:"그 소설은 실제 역사와 순전한 허구를 섞는다." }] },

  { word:"fierce", pron:"피어스", pos:"adj", level:"B2", meanings:["사나운","흉포한"],
    syn:["ferocious","savage","violent"], ant:["gentle"],
    ex:[{ s:"A {{}} wind tore the canvas from its frame.", f:"fierce", ko:"사나운 바람이 천을 틀에서 찢어 갔다." }] },

  { word:"figurative", pron:"피규러티브", pos:"adj", level:"C1", meanings:["비유적인","상징적인"],
    syn:["metaphorical","symbolic","non-literal"], ant:["literal"],
    ex:[{ s:"Here the word 'storm' is {{}}, not a weather report.", f:"figurative", ko:"여기서 'storm' 은 날씨 보도가 아니라 비유적인 표현이다." }] },

  /* 원본은 뜻이 아홉 갈래다('숫자, 수, 모양, 형태, 모습, 외관, 명사, 거물,
     역사상의 인물'). 기존 사전 뜻 '수치; 도형' 을 그대로 두 갈래로 옮겼다 —
     digit 은 숫자 쪽으로, diagram 은 도형 쪽으로 이 낱말을 유의어로 쓰고
     있어서 한 갈래만 남기면 다른 쪽 문제가 어긋난다. 유의어는 숫자 쪽으로만
     모았다(두 갈래를 섞으면 '아닌 것 고르기'가 헷갈린다). */
  { word:"figure", pron:"피거", pos:"n", level:"B2", meanings:["수치","도형"],
    syn:["numerical value","statistic","amount"],
    ex:[{ s:"The final {{}} was higher than anyone had expected.", f:"figure", ko:"최종 수치는 누구도 예상하지 못한 만큼 높았다." }] },

  { word:"figure out", pron:"피거 아웃", pos:"phr", level:"B1", meanings:["이해하다","생각해 내다"],
    syn:["work out","make sense of","puzzle out"] },

  { word:"fill", pron:"필", pos:"v", level:"B1", meanings:["채우다","메우다"],
    syn:["pack","stuff","top up"], ant:["empty out"],
    ex:[{ s:"Volunteers {{}} the sandbags before the river rises.", f:"fill", ko:"자원봉사자들이 강물이 오르기 전에 모래주머니를 채운다." }] },

  { word:"filler", pron:"필러", pos:"n", level:"C1", meanings:["충전재"],
    syn:["packing material","padding","stuffing"],
    ex:[{ s:"The gap around the pipe was closed with a soft {{}}.", f:"filler", ko:"관 주위의 틈은 부드러운 충전재로 막았다." }] },

  { word:"filter", pron:"필터", pos:"v", level:"B2", meanings:["여과하다","거르다"],
    syn:["purify","sift","screen out"],
    ex:[{ s:"Reeds help {{}} the water before it reaches the pond.", f:"filter", ko:"갈대는 물이 못에 이르기 전에 여과하는 것을 돕는다." }] },

  { word:"filter out of", pron:"필터 아웃 오브", pos:"phr", level:"C1", meanings:["~에서 새어 나오다"],
    syn:["seep out of","trickle out of","leak from"] },

  { word:"filth", pron:"필스", pos:"n", level:"C1", meanings:["오물","쓰레기"],
    syn:["grime","muck","squalor"],
    ex:[{ s:"Years of {{}} had blackened the tall windows.", f:"filth", ko:"여러 해 쌓인 오물이 높은 창들을 검게 만들었다." }] },

  /* 원본 목록에는 '(피해, 상처를) 가하다, 입히다' 로 적혀 있었다. inflict 의
     뜻이 밀려 들어온 것이라 0차에서 '더러운, 불결한' 으로 바로잡았다. */
  { word:"filthy", pron:"필시", pos:"adj", level:"B2", meanings:["더러운","불결한"],
    syn:["grimy","squalid","unclean"], ant:["spotless"],
    ex:[{ s:"They refused to work in such a {{}} kitchen.", f:"filthy", ko:"그들은 그렇게 더러운 부엌에서 일하기를 거부했다." }] },

  { word:"financial", pron:"파이낸셜", pos:"adj", level:"B1", meanings:["재정적인","재무의"],
    syn:["monetary","money-related","budgetary"],
    ex:[{ s:"The club ran into serious {{}} trouble that winter.", f:"financial", ko:"그 클럽은 그해 겨울 심각한 재정적 곤란에 빠졌다." }] },

  /* 기존 사전 뜻은 '결론, 발견' 이었다. finding 은 결론 자체보다 조사·연구로
     얻은 결과를 가리키므로 원본('조사 결과, 연구 결과')에 맞춰 좁혔다.
     conclusion 의 유의어 자리에서도 여전히 옳다. */
  { word:"finding", pron:"파인딩", pos:"n", level:"B2", meanings:["조사 결과","발견"],
    syn:["result","conclusion","research outcome"],
    ex:[{ s:"The main {{}} of the study surprised its own authors.", f:"finding", ko:"그 연구의 주요 조사 결과는 저자들 자신을 놀라게 했다." }] },

  { word:"fine", pron:"파인", pos:"n", level:"B2", meanings:["벌금"],
    syn:["penalty","monetary punishment","surcharge"],
    ex:[{ s:"He paid a small {{}} for parking beside the curb.", f:"fine", ko:"그는 인도 옆에 주차한 일로 적은 벌금을 냈다." }] },

  { word:"fine-grained", pron:"파인 그레인드", pos:"adj", level:"C1", meanings:["결이 고운","정밀한"],
    syn:["finely detailed","smooth-textured","high-resolution"], ant:["coarse"],
    ex:[{ s:"The report gives a {{}} picture of local spending.", f:"fine-grained", ko:"그 보고서는 지역 지출을 정밀하게 보여 준다." }] },

  /* ── 5차: finite ~ flawless (20개) ────────────── */

  { word:"finite", pron:"파이나이트", pos:"adj", level:"B2", meanings:["유한한","한계가 있는"],
    syn:["limited","bounded","measurable"], ant:["endless"],
    ex:[{ s:"Fresh water is a {{}} resource, not an endless one.", f:"finite", ko:"담수는 무한한 자원이 아니라 유한한 자원이다." }] },

  /* ★ 두 갈래를 한 낱말에 담았다 — 2차의 fare 와 같은 경우다.
     기존 사전 뜻이 '회사; 단단한' 인데, corporation 은 회사 쪽으로, crunchy 는
     단단한 쪽으로 각각 이 낱말을 유의어로 쓴다. 한 갈래만 남기면 다른 쪽
     문제의 선택지가 틀린 설명이 된다. pos 는 하나만 고를 수 있어 형용사로
     두고(원본도 형용사 뜻이 먼저다) 유의어도 형용사로 모았다. */
  { word:"firm", pron:"펌", pos:"adj", level:"B2", meanings:["단단한","회사"],
    syn:["solid","sturdy","unyielding"],
    ex:[{ s:"Press the soil until it feels {{}} around the stem.", f:"firm", ko:"줄기 주위의 흙이 단단해질 때까지 눌러라." }] },

  { word:"first-rate", pron:"퍼스트 레이트", pos:"adj", level:"C1", meanings:["일류의"],
    syn:["top-notch","superior","of the highest class"],
    ex:[{ s:"The orchestra gave a {{}} performance that night.", f:"first-rate", ko:"그 관현악단은 그날 밤 일류의 연주를 했다." }] },

  /* financial(4차)은 B1 이다. 뜻이 겹치는 형용사라 레벨을 두 단계 벌려
     4지선다에서 서로의 오답으로 뜨지 않게 했다. */
  { word:"fiscal", pron:"피스컬", pos:"adj", level:"C1", meanings:["재정의","회계의"],
    syn:["budgetary","monetary","tax-related"],
    ex:[{ s:"The city closed the {{}} year with a small surplus.", f:"fiscal", ko:"그 시는 회계 연도를 약간의 흑자로 마감했다." }] },

  { word:"fishery", pron:"피셔리", pos:"n", level:"C1", meanings:["어업","어장"],
    syn:["fishing ground","fishing industry","fish farm"],
    ex:[{ s:"The northern {{}} was closed for two seasons.", f:"fishery", ko:"북부 어장은 두 계절 동안 폐쇄되었다." }] },

  { word:"fission", pron:"피션", pos:"n", level:"C2", meanings:["분열"],
    syn:["splitting","division","breaking apart"],
    ex:[{ s:"Nuclear {{}} releases energy by breaking heavy atoms.", f:"fission", ko:"핵분열은 무거운 원자를 쪼개어 에너지를 낸다." }] },

  { word:"fist", pron:"피스트", pos:"n", level:"B1", meanings:["주먹"],
    syn:["clenched hand","knuckles","balled hand"],
    ex:[{ s:"He banged his {{}} on the table once and stopped.", f:"fist", ko:"그는 주먹으로 탁자를 한 번 치고 멈췄다." }] },

  /* ★ 세 갈래가 참조하는 낱말이다 — athletic 은 '건강한' 쪽, compatibility 는
     '적합' 쪽, correspond to 는 '들어맞다' 쪽으로 이 낱말을 유의어로 쓴다.
     원본이 전부 형용사 뜻('~하기에 적당한, 알맞은; 건강이 좋은; 어울리는')이라
     형용사로 두고, 세 자리 모두에서 읽히도록 ["알맞은","건강이 좋은"] 으로
     했다. 기존 사전 뜻 '맞다; 적합한' 은 athletic(몸이 튼튼한) 자리에서
     오히려 약했으므로 이 편이 낫다. */
  { word:"fit", pron:"핏", pos:"adj", level:"B2", meanings:["알맞은","건강이 좋은"],
    syn:["suitable","appropriate","in good shape"],
    ex:[{ s:"The old barn is no longer {{}} for storing grain.", f:"fit", ko:"그 낡은 헛간은 더 이상 곡물 보관에 알맞지 않다." }] },

  { word:"fitness", pron:"피트니스", pos:"n", level:"B2", meanings:["신체 단련","적합함"],
    syn:["physical condition","good health","suitability"],
    ex:[{ s:"She tracks her {{}} with a simple notebook.", f:"fitness", ko:"그녀는 간단한 공책으로 자기 신체 단련을 기록한다." }] },

  { word:"flammable", pron:"플래머블", pos:"adj", level:"C1", meanings:["가연성의"],
    syn:["combustible","inflammable","easily burned"], ant:["fireproof"],
    ex:[{ s:"Keep {{}} liquids away from the workbench.", f:"flammable", ko:"가연성 액체는 작업대에서 멀리 두어라." }] },

  { word:"flap", pron:"플랩", pos:"v", level:"B2", meanings:["퍼덕거리다"],
    syn:["wave up and down","thrash about","move to and fro"],
    ex:[{ s:"Geese {{}} hard to lift off from still water.", f:"flap", ko:"거위는 잔잔한 물에서 날아오르려고 힘껏 퍼덕거린다." }] },

  /* 기존 사전 뜻은 '타오르다; 불빛' 로 동사와 명사가 섞여 있었다. blaze 의
     유의어 자리이고 그 형제가 flame·burn 으로 모두 동사라 동사로 모았다. */
  { word:"flare", pron:"플레어", pos:"v", level:"B2", meanings:["확 타오르다","치솟다"],
    syn:["blaze up","flame up","shoot up"],
    ex:[{ s:"The candle will {{}} when the door lets in a draft.", f:"flare", ko:"문으로 바람이 들면 촛불이 확 타오른다." }] },

  { word:"flash", pron:"플래시", pos:"v", level:"B2", meanings:["비치다","번쩍이다"],
    syn:["gleam","glint","light up briefly"],
    ex:[{ s:"Lightning began to {{}} above the far ridge.", f:"flash", ko:"먼 능선 위로 번개가 번쩍이기 시작했다." }] },

  { word:"flashlight", pron:"플래시라이트", pos:"n", level:"B1", meanings:["손전등"],
    syn:["torch","hand lamp","pocket light"],
    ex:[{ s:"Take a {{}} — the cellar has no wiring.", f:"flashlight", ko:"손전등을 가져가라 — 지하실에는 전선이 없다." }] },

  /* ── flat 계열 ─────────────────────────────────
     flatten 과 flatter 는 둘 다 동사이고 앞 여섯 글자가 같다. 뜻이 전혀
     달라서 뜻겹침으로는 갈라지지 않으므로 레벨을 두 단계 벌렸다
     (flatten B1 · flatter C1). flat 은 형용사라 저절로 갈라진다. */
  { word:"flat", pron:"플랫", pos:"adj", level:"B1", meanings:["납작한","편평한"],
    syn:["smooth","horizontal","evenly surfaced"], ant:["bumpy"],
    ex:[{ s:"Roll the dough until it is thin and {{}}.", f:"flat", ko:"반죽을 얇고 납작해질 때까지 밀어라." }] },

  { word:"flatten", pron:"플래튼", pos:"v", level:"B1", meanings:["평평하게 하다"],
    syn:["level off","press flat","smooth out"],
    ex:[{ s:"Heavy rollers {{}} the track before each race.", f:"flatten", ko:"무거운 롤러가 경기마다 트랙을 평평하게 한다." }] },

  { word:"flatter", pron:"플래터", pos:"v", level:"C1", meanings:["아첨하다"],
    syn:["compliment excessively","butter up","praise insincerely"],
    ex:[{ s:"He tried to {{}} the judges before the vote.", f:"flatter", ko:"그는 투표 전에 심사위원들에게 아첨하려 했다." }] },

  { word:"flavor", pron:"플레이버", pos:"n", level:"B1", meanings:["맛"],
    syn:["taste","savor","tang"],
    ex:[{ s:"A little salt brings out the {{}} of the melon.", f:"flavor", ko:"소금을 조금 넣으면 멜론의 맛이 살아난다." }] },

  /* 뜻 순서를 원본('결함, 흠')과 바꿨다. 표제어 defect 의 뜻이 ["결함","흠"]
     로 글자까지 같아지면 표제어 둘이 구별되지 않는다(2차의 fatal·deadly 와
     같은 경우다). defect·drawback 의 유의어 자리에서는 여전히 옳다. */
  { word:"flaw", pron:"플로", pos:"n", level:"B2", meanings:["흠","결함"],
    syn:["defect","imperfection","blemish"],
    ex:[{ s:"A hairline {{}} in the glaze ruined the bowl.", f:"flaw", ko:"유약의 머리카락 같은 흠이 그 그릇을 망쳤다." }] },

  { word:"flawless", pron:"플로리스", pos:"adj", level:"C1", meanings:["결점이 없는","완벽한"],
    syn:["perfect","impeccable","faultless"], ant:["defective"],
    ex:[{ s:"Her delivery of the long speech was {{}}.", f:"flawless", ko:"그 긴 연설에 대한 그녀의 전달은 결점이 없었다." }] },

  /* ── 6차: flee ~ flush (20개) ─────────────────── */

  { word:"flee", pron:"플리", pos:"v", level:"B1", meanings:["도망치다"],
    syn:["run away","escape","take flight"], ant:["chase"],
    ex:[{ s:"Hundreds began to {{}} the valley as the water rose.", f:"flee", ko:"물이 오르자 수백 명이 골짜기를 떠나 도망치기 시작했다." }] },

  { word:"fleet", pron:"플리트", pos:"n", level:"B2", meanings:["함대"],
    syn:["armada","naval force","group of ships"],
    ex:[{ s:"The whole {{}} sailed at first light.", f:"fleet", ko:"함대 전체가 새벽 첫 빛에 출항했다." }] },

  /* 기존 사전 뜻은 '구부리다' 였는데 그것은 표제어 bend 의 첫 뜻과 글자까지
     같다. flex 는 특히 관절·근육을 구부리는 것이라 원본에 맞춰 좁혔다.
     bend 의 유의어 자리에서도 여전히 옳다. */
  { word:"flex", pron:"플렉스", pos:"v", level:"B2", meanings:["관절을 구부리다","움직이다"],
    syn:["bend","crook","work the joint"],
    ex:[{ s:"Patients learn to {{}} the knee a little more each day.", f:"flex", ko:"환자들은 날마다 무릎을 조금씩 더 구부리는 법을 배운다." }] },

  { word:"flexibility", pron:"플렉서빌러티", pos:"n", level:"C1", meanings:["유연성","적응성"],
    syn:["suppleness","adaptability","pliancy"],
    ex:[{ s:"Daily stretching restored some {{}} to his back.", f:"flexibility", ko:"매일의 스트레칭이 그의 등에 어느 정도 유연성을 되돌려 주었다." }] },

  { word:"flexible", pron:"플렉서블", pos:"adj", level:"B2", meanings:["잘 휘는","유연한"],
    syn:["pliable","bendable","adaptable"], ant:["rigid"],
    ex:[{ s:"Copper pipe is {{}} enough to shape by hand.", f:"flexible", ko:"구리 관은 손으로 모양을 낼 만큼 잘 휜다." }] },

  /* ── flick 과 flicker ───────────────────────────
     앞 다섯 글자가 같다. separateClashes 는 여섯 글자를 보므로 갈라 주지 않고
     4지선다에는 애초에 그 장치가 없다. 오타처럼 보이지 않게 레벨을 두 단계
     벌렸다(B1 · C1). 원본 첫 뜻에 있던 괄호 설명은 뺐다. */
  { word:"flick", pron:"플릭", pos:"v", level:"B1", meanings:["튀기다","가볍게 치다"],
    syn:["snap","jerk","give a quick tap"],
    ex:[{ s:"He would {{}} the switch twice out of old habit.", f:"flick", ko:"그는 오래된 습관으로 스위치를 두 번 튀기곤 했다." }] },

  { word:"flicker", pron:"플리커", pos:"v", level:"C1", meanings:["깜빡거리다"],
    syn:["blink","glimmer","go on and off"],
    ex:[{ s:"The old bulb began to {{}} just before it died.", f:"flicker", ko:"낡은 전구가 꺼지기 직전에 깜빡거리기 시작했다." }] },

  { word:"flip", pron:"플립", pos:"v", level:"B2", meanings:["뒤집다"],
    syn:["turn over","toss","invert"],
    ex:[{ s:"Wait for bubbles to form before you {{}} the pancake.", f:"flip", ko:"팬케이크를 뒤집기 전에 기포가 생길 때까지 기다려라." }] },

  /* 원본 목록에는 '동성애의, 동성애자인' 으로 적혀 있었다. 사전의 폐어적
     속어 뜻이 표제 뜻으로 올라온 것이라 0차에서 바로잡았다. */
  { word:"flit", pron:"플릿", pos:"v", level:"C1", meanings:["훌쩍 날다","스치듯 지나가다"],
    syn:["dart","skim by","move lightly"],
    ex:[{ s:"Small birds {{}} between the hedges all morning.", f:"flit", ko:"작은 새들이 아침 내내 산울타리 사이를 훌쩍 날아다닌다." }] },

  { word:"float", pron:"플로트", pos:"v", level:"B1", meanings:["떠다니다","뜨다"],
    syn:["drift","bob","stay on the surface"],
    ex:[{ s:"Cork will {{}} even in very rough water.", f:"float", ko:"코르크는 아주 거친 물에서도 떠 있다." }] },

  { word:"flock", pron:"플락", pos:"n", level:"B1", meanings:["떼"],
    syn:["herd","swarm","group of birds"],
    ex:[{ s:"A {{}} of geese crossed the field at dusk.", f:"flock", ko:"거위 떼가 해질녘에 밭을 건너갔다." }] },

  { word:"flood into", pron:"플러드 인투", pos:"phr", level:"B2", meanings:["몰려들다"],
    syn:["pour into","stream into","rush into"] },

  { word:"flourish", pron:"플러리시", pos:"v", level:"B2", meanings:["번성하다","활짝 피다"],
    syn:["thrive","prosper","do well"], ant:["decay"],
    ex:[{ s:"Olive trees {{}} on this dry hillside.", f:"flourish", ko:"올리브 나무는 이 건조한 산비탈에서 번성한다." }] },

  /* ★ 네 곳이 참조하는 낱말이다 — circulate 는 동사 쪽, circulation·
     congestion·current 는 명사 쪽으로 쓴다. 기존 사전 뜻이 '흐름, 흐르다' 로
     두 갈래를 함께 담고 있었고, 그대로 옮기면 네 문제가 모두 무변이 된다.
     pos 는 하나만 고를 수 있어 참조가 셋인 명사로 두었다. */
  { word:"flow", pron:"플로", pos:"n", level:"B1", meanings:["흐름","흐르다"],
    syn:["stream","steady movement","running water"],
    ex:[{ s:"Engineers measured the {{}} of the river every week.", f:"flow", ko:"기술자들은 매주 그 강의 흐름을 측정했다." }] },

  { word:"fluctuate", pron:"플럭추에이트", pos:"v", level:"C1", meanings:["변동하다","오르내리다"],
    syn:["vary","rise and fall","swing up and down"],
    ex:[{ s:"Prices {{}} sharply during the dry season.", f:"fluctuate", ko:"건기에는 물가가 크게 변동한다." }] },

  { word:"fluency", pron:"플루언시", pos:"n", level:"C1", meanings:["유창함"],
    syn:["articulacy","command of a language","smooth delivery"],
    ex:[{ s:"Two years abroad gave her real {{}}.", f:"fluency", ko:"외국에서 보낸 2년이 그녀에게 진짜 유창함을 주었다." }] },

  /* 원본은 '보풀의, 솜털의' 인데 '보풀의' 는 옷감에 이는 보풀을 가리켜
     fluffy 의 뜻이 아니다. '솜털의, 푹신한' 으로 적었다. */
  { word:"fluffy", pron:"플러피", pos:"adj", level:"B2", meanings:["솜털의","푹신한"],
    syn:["downy","soft and light","fleecy"],
    ex:[{ s:"The chicks were still small and {{}}.", f:"fluffy", ko:"병아리들은 아직 작고 솜털이 보송했다." }] },

  { word:"fluid", pron:"플루이드", pos:"n", level:"C1", meanings:["체액","유동체"],
    syn:["liquid","bodily liquid","flowing substance"],
    ex:[{ s:"The doctor drained the {{}} from his swollen knee.", f:"fluid", ko:"의사가 부어오른 그의 무릎에서 체액을 빼냈다." }] },

  { word:"flunk", pron:"플렁크", pos:"v", level:"C1", meanings:["낙제하다"],
    syn:["fail","not pass","get a failing grade"],
    ex:[{ s:"He was afraid he would {{}} the final examination.", f:"flunk", ko:"그는 기말시험에서 낙제할까 두려웠다." }] },

  { word:"flush", pron:"플러시", pos:"v", level:"B2", meanings:["붉어지다","물을 내리다"],
    syn:["redden","blush","go red"],
    ex:[{ s:"Her cheeks began to {{}} in the cold wind.", f:"flush", ko:"찬 바람에 그녀의 뺨이 붉어지기 시작했다." }] },

  /* ── 7차: flutter ~ foremost (20개) ───────────── */

  /* 원본은 '날개 치다, 퍼덕거리다' 인데 '퍼덕거리다' 는 5차 표제어 flap 의
     뜻과 글자까지 같다. 같은 세트 안에서 짝 맞추기 카드가 겹치지 않도록
     둘째 뜻을 '파르르 떨다' 로 갈랐다. */
  { word:"flutter", pron:"플러터", pos:"v", level:"B2", meanings:["날개 치다","파르르 떨다"],
    syn:["flap about","quiver","beat the wings"],
    ex:[{ s:"Moths began to {{}} around the porch light.", f:"flutter", ko:"나방들이 현관 등 주위에서 날개 치기 시작했다." }] },

  /* 원본은 '(물의) 흐름' 이지만 flux 는 오늘날 'in flux' 처럼 끊임없는 변화를
     가리키는 쪽으로 더 쓰인다. 6차 표제어 flow 의 첫 뜻이 '흐름' 이라 그대로
     두면 같은 세트에서 카드가 겹치기도 한다. */
  { word:"flux", pron:"플럭스", pos:"n", level:"C2", meanings:["끊임없는 변화","유동"],
    syn:["constant change","instability","state of flow"],
    ex:[{ s:"The whole industry is in {{}} right now.", f:"flux", ko:"업계 전체가 지금 끊임없는 변화 속에 있다." }] },

  /* 기존 사전 뜻은 '적' 한 마디였는데 그것은 표제어 enemy 의 첫 뜻과 같다.
     원본의 '원수' 를 앞에 두어 갈랐다. */
  { word:"foe", pron:"포", pos:"n", level:"C1", meanings:["원수","적"],
    syn:["adversary","opponent","enemy"],
    ex:[{ s:"He treated every rival as a personal {{}}.", f:"foe", ko:"그는 모든 경쟁자를 개인적인 원수로 대했다." }] },

  { word:"foliage", pron:"폴리이지", pos:"n", level:"C1", meanings:["잎"],
    syn:["leaves","greenery","leafage"],
    ex:[{ s:"Dense {{}} hid the path completely.", f:"foliage", ko:"빽빽한 잎이 길을 완전히 가렸다." }] },

  { word:"folk", pron:"포크", pos:"n", level:"B1", meanings:["사람들","가족"],
    syn:["people","ordinary people","kinfolk"],
    ex:[{ s:"Local {{}} still gather at the old mill.", f:"folk", ko:"그 지역 사람들은 아직 낡은 방앗간에 모인다." }] },

  /* 원본 목록에는 '수확량, 수익량' 으로 적혀 있었다. yield 의 뜻이 밀려 들어온
     것이라 0차에서 바로잡았다. 기존 사전 뜻도 '선례를 따르다' 였다. */
  { word:"follow suit", pron:"팔로 수트", pos:"phr", level:"C1", meanings:["선례를 따르다"],
    syn:["do the same","copy the example","fall in line"] },

  { word:"food chain", pron:"푸드 체인", pos:"n", level:"B2", meanings:["먹이 사슬"],
    syn:["feeding order","trophic chain","predator chain"],
    ex:[{ s:"Removing one predator upsets the whole {{}}.", f:"food chain", ko:"포식자 하나를 없애면 먹이 사슬 전체가 흐트러진다." }] },

  { word:"food poisoning", pron:"푸드 포이즈닝", pos:"n", level:"B2", meanings:["식중독"],
    syn:["foodborne illness","gastric infection","stomach upset from food"],
    ex:[{ s:"Twenty guests came down with {{}} after the picnic.", f:"food poisoning", ko:"소풍이 끝난 뒤 손님 스무 명이 식중독에 걸렸다." }] },

  { word:"footnote", pron:"풋노트", pos:"n", level:"C1", meanings:["각주"],
    syn:["note at the bottom","annotation","side note"],
    ex:[{ s:"The whole claim rests on a single {{}} in the report.", f:"footnote", ko:"그 주장 전체가 보고서의 각주 하나에 기대고 있다." }] },

  { word:"footstep", pron:"풋스텝", pos:"n", level:"B1", meanings:["발자국","발소리"],
    syn:["tread","footfall","sound of walking"],
    ex:[{ s:"A single {{}} echoed down the empty hall.", f:"footstep", ko:"발소리 하나가 빈 복도에 울렸다." }] },

  { word:"for one's sake", pron:"포 원스 세이크", pos:"phr", level:"B2", meanings:["~을 위해서"],
    syn:["for the benefit of","on behalf of","out of regard for"] },

  { word:"forage", pron:"포리지", pos:"v", level:"C1", meanings:["먹이를 찾다"],
    syn:["search for food","scavenge","hunt for provisions"],
    ex:[{ s:"Deer come down to {{}} in the orchard at dusk.", f:"forage", ko:"사슴은 해질녘에 과수원으로 내려와 먹이를 찾는다." }] },

  /* ★ 둘째 뜻을 넣은 이유 — 기존 사전 뜻은 '금지하다' 한 마디였다. 그런데
     표제어 ban 의 유의어가 prohibit·forbid·outlaw 이고 prohibit 의 뜻도
     '금지하다' 여서, 그 문제에서는 두 선택지의 설명이 글자까지 같았다.
     words-b.js 에는 세트별 audit 이 없어(D·E 세트만 있다) 지금까지 걸리지
     않던 자리다. '못하게 하다' 를 더해 두 선택지를 갈랐다. */
  { word:"forbid", pron:"퍼비드", pos:"v", level:"B1", meanings:["금지하다","못하게 하다"],
    syn:["prohibit","ban","outlaw"], ant:["allow"],
    ex:[{ s:"Some schools {{}} phones during class hours.", f:"forbid", ko:"어떤 학교들은 수업 시간에 휴대전화를 금지한다." }] },

  { word:"forbidden", pron:"퍼비든", pos:"adj", level:"B2", meanings:["금지된"],
    syn:["prohibited","off-limits","not allowed"], ant:["permitted"],
    ex:[{ s:"Swimming is {{}} beyond the yellow buoys.", f:"forbidden", ko:"노란 부표 밖에서는 수영이 금지된다." }] },

  { word:"force up", pron:"포스 업", pos:"phr", level:"C1", meanings:["상승시키다"],
    syn:["drive up","push higher","send up"] },

  { word:"foreboding", pron:"포보딩", pos:"n", level:"C2", meanings:["불길한 예감"],
    syn:["sense of dread","premonition","misgiving"],
    ex:[{ s:"A strange {{}} kept her awake that night.", f:"foreboding", ko:"이상한 불길한 예감이 그날 밤 그녀를 깨어 있게 했다." }] },

  { word:"forecast", pron:"포캐스트", pos:"n", level:"B1", meanings:["예측","예보"],
    syn:["prediction","outlook","projection"],
    ex:[{ s:"The weather {{}} promised a dry weekend.", f:"forecast", ko:"일기 예보는 건조한 주말을 예고했다." }] },

  { word:"foregone", pron:"포곤", pos:"adj", level:"C2", meanings:["미리 정해진","불가피한"],
    syn:["predetermined","inevitable","settled in advance"],
    ex:[{ s:"With two players injured the result was {{}}.", f:"foregone", ko:"두 선수가 부상해 결과는 미리 정해진 것이었다." }] },

  { word:"forehead", pron:"포헤드", pos:"n", level:"B1", meanings:["이마"],
    syn:["brow","front of the head","temple area"],
    ex:[{ s:"She pressed a cool cloth to his {{}}.", f:"forehead", ko:"그녀는 차가운 천을 그의 이마에 댔다." }] },

  { word:"foremost", pron:"포모스트", pos:"adj", level:"C1", meanings:["가장 중요한","주요한"],
    syn:["leading","principal","chief"],
    ex:[{ s:"She is the {{}} authority on coastal birds.", f:"foremost", ko:"그녀는 해안 조류에 관한 가장 중요한 권위자다." }] },

  /* ── 8차: foresee ~ fountain (20개) ───────────── */

  { word:"foresee", pron:"포시", pos:"v", level:"C1", meanings:["예견하다","내다보다"],
    syn:["predict","see ahead","look ahead to"],
    ex:[{ s:"No one could {{}} how quickly the rules would change.", f:"foresee", ko:"규칙이 얼마나 빨리 바뀔지는 아무도 예견할 수 없었다." }] },

  { word:"foresight", pron:"포사이트", pos:"n", level:"C1", meanings:["예지력","선견지명"],
    syn:["prudence","far-sightedness","advance planning"],
    ex:[{ s:"The tunnel was built with unusual {{}}.", f:"foresight", ko:"그 터널은 드문 선견지명으로 지어졌다." }] },

  { word:"forfeit", pron:"포핏", pos:"v", level:"C2", meanings:["몰수되다","박탈당하다"],
    syn:["lose by default","give up as a penalty","be deprived of"],
    ex:[{ s:"Teams that arrive late {{}} their place in the draw.", f:"forfeit", ko:"늦게 도착한 팀은 대진에서 자리를 박탈당한다." }] },

  /* 유의어에 counterfeit·fake 를 쓰지 않았다. 둘 다 표제어인데 품사가 형용사라
     동사 자리에 형용사 뜻('가짜의')이 뜬다. */
  { word:"forge", pron:"포지", pos:"v", level:"C1", meanings:["위조하다"],
    syn:["falsify","fabricate","imitate fraudulently"],
    ex:[{ s:"He was caught trying to {{}} his supervisor's signature.", f:"forge", ko:"그는 상사의 서명을 위조하려다 붙잡혔다." }] },

  { word:"forgery", pron:"포저리", pos:"n", level:"C1", meanings:["위조","모조"],
    syn:["fake copy","counterfeit item","forged document"],
    ex:[{ s:"Experts declared the painting a clever {{}}.", f:"forgery", ko:"전문가들은 그 그림을 교묘한 위조라고 선언했다." }] },

  { word:"forgo", pron:"포고", pos:"v", level:"C2", meanings:["포기하다"],
    syn:["do without","give up","renounce"],
    ex:[{ s:"She chose to {{}} a salary in the first year.", f:"forgo", ko:"그녀는 첫해에 급여를 포기하기로 했다." }] },

  /* ★ 네 곳이 참조하는 낱말이고 넷 다 동사 자리다 — come into existence·
     compose·constitute·crystallize. 기존 사전 뜻은 '구성하다; 형태' 로 명사
     뜻이 섞여 있었는데, 그 '형태' 는 네 자리 어디에도 쓰이지 않는 군더더기였다.
     원본 첫 뜻 '형성시키다' 를 앞에 두고 동사로만 모았다 — 네 문제 모두
     설명이 더 또렷해진다. */
  { word:"form", pron:"폼", pos:"v", level:"B1", meanings:["형성시키다","구성하다"],
    syn:["create","constitute","bring into being"],
    ex:[{ s:"Ice will {{}} on the pond after two cold nights.", f:"form", ko:"추운 밤이 이틀 지나면 못에 얼음이 형성된다." }] },

  { word:"formal", pron:"포멀", pos:"adj", level:"B2", meanings:["격식을 갖춘","공식적인"],
    syn:["official","ceremonial","proper"], ant:["casual"],
    ex:[{ s:"The invitation asked for {{}} dress.", f:"formal", ko:"그 초대장은 격식을 갖춘 복장을 요청했다." }] },

  /* ── format 과 formation ────────────────────────
     앞 여섯 글자가 같은 가족이고 둘 다 명사다. 0차 보드 예비검사가 짚은
     가족 가운데 이 챕터에 해당하는 자리다. 뜻으로는 갈라지지 않으므로
     레벨을 두 단계 벌렸다(B1 · C1). 첫 뜻도 겹치지 않게 골랐다
     (format '형식' / formation '형성'). */
  { word:"format", pron:"포맷", pos:"n", level:"B1", meanings:["형식","방식"],
    syn:["layout","arrangement","design"],
    ex:[{ s:"The report follows the same {{}} every quarter.", f:"format", ko:"그 보고서는 분기마다 같은 형식을 따른다." }] },

  { word:"formation", pron:"포메이션", pos:"n", level:"C1", meanings:["형성","구성"],
    syn:["development","coming together","taking shape"],
    ex:[{ s:"Scientists study the {{}} of coral reefs.", f:"formation", ko:"과학자들은 산호초의 형성을 연구한다." }] },

  { word:"former", pron:"포머", pos:"adj", level:"B1", meanings:["이전의","전자의"],
    syn:["previous","earlier","one-time"], ant:["current"],
    ex:[{ s:"A {{}} student now runs the whole department.", f:"former", ko:"이전의 학생이 지금 그 학과 전체를 운영한다." }] },

  { word:"formula", pron:"포뮬러", pos:"n", level:"B2", meanings:["공식","방법"],
    syn:["equation","recipe","set procedure"],
    ex:[{ s:"There is no simple {{}} for a good lesson.", f:"formula", ko:"좋은 수업을 위한 간단한 공식은 없다." }] },

  /* 기존 사전 뜻 '버리다, 포기하다' 는 표제어 abandon 의 뜻과 글자까지 같다.
     원본의 '떠나다' 를 둘째 뜻으로 삼아 갈랐다. */
  { word:"forsake", pron:"포세이크", pos:"v", level:"C1", meanings:["버리다","떠나다"],
    syn:["abandon","desert","turn one's back on"],
    ex:[{ s:"He would never {{}} the people who raised him.", f:"forsake", ko:"그는 자기를 키운 사람들을 결코 버리지 않을 것이다." }] },

  /* 기존 사전 뜻 '솔직한, 거리낌없는' 의 첫 마디는 표제어 candid 의 첫 뜻과
     같고, 유의어 frank 의 뜻과도 글자까지 같다. 원본의 '솔직 담백한' 을 앞에
     두어 셋을 갈랐다. */
  { word:"forthright", pron:"포스라이트", pos:"adj", level:"C1", meanings:["솔직 담백한","거리낌없는"],
    syn:["frank","plain-spoken","outspoken"], ant:["evasive"],
    ex:[{ s:"His {{}} answer surprised the whole panel.", f:"forthright", ko:"그의 솔직 담백한 대답이 심사위원 전원을 놀라게 했다." }] },

  { word:"fortress", pron:"포트리스", pos:"n", level:"B2", meanings:["요새"],
    syn:["stronghold","citadel","fortified place"],
    ex:[{ s:"The hilltop {{}} guarded the valley for centuries.", f:"fortress", ko:"언덕 위 요새가 수백 년 동안 골짜기를 지켰다." }] },

  /* 2차의 fate 가 ["운명","숙명"] 이고 destiny 는 fate 와 fortune 을 함께
     유의어로 쓴다. 원본의 '운명' 을 첫 뜻으로 쓰면 한 문제에서 두 선택지가
     같은 글자로 시작한다. 기존 사전 뜻 '운, 행운' 을 그대로 두어 갈랐다. */
  { word:"fortune", pron:"포천", pos:"n", level:"B2", meanings:["운","행운"],
    syn:["luck","windfall","stroke of luck"],
    ex:[{ s:"A little {{}} turned the whole season around.", f:"fortune", ko:"작은 운이 그 시즌 전체를 뒤바꿨다." }] },

  { word:"fossilize", pron:"파설라이즈", pos:"v", level:"C2", meanings:["화석이 되다"],
    syn:["turn to stone","petrify","harden into rock"],
    ex:[{ s:"Shells {{}} slowly in fine river mud.", f:"fossilize", ko:"조개껍데기는 고운 강 진흙 속에서 천천히 화석이 된다." }] },

  /* 원본은 '양육하는, 기르는; 양육하다, 기르다' 로 형용사와 동사가 섞여 있다.
     동사로 정했다. 유의어 nurture 의 뜻이 '양육하다, 기르다' 라서 첫 뜻이
     겹치지 않도록 둘째 뜻을 '육성하다' 로 골랐다. */
  { word:"foster", pron:"포스터", pos:"v", level:"B2", meanings:["기르다","육성하다"],
    syn:["nurture","bring up","raise"],
    ex:[{ s:"Small grants can {{}} new research in the field.", f:"foster", ko:"작은 보조금이 그 분야의 새 연구를 육성할 수 있다." }] },

  { word:"found", pron:"파운드", pos:"v", level:"B2", meanings:["설립하다","창립하다"],
    syn:["establish","set up","start up"],
    ex:[{ s:"Two teachers helped {{}} the school in 1920.", f:"found", ko:"교사 두 명이 1920년에 그 학교를 설립하는 데 힘을 보탰다." }] },

  { word:"fountain", pron:"파운튼", pos:"n", level:"B1", meanings:["분수","샘"],
    syn:["water jet","spout","wellspring"],
    ex:[{ s:"Children played around the stone {{}} all afternoon.", f:"fountain", ko:"아이들이 오후 내내 돌 분수 주위에서 놀았다." }] },

  /* ── 9차: fraction ~ from scratch (20개) ───────── */

  { word:"fraction", pron:"프랙션", pos:"n", level:"B2", meanings:["분수","일부"],
    syn:["small part","portion","tiny amount"],
    ex:[{ s:"Only a tiny {{}} of the seeds ever sprouted.", f:"fraction", ko:"씨앗 가운데 아주 적은 일부만 싹을 냈다." }] },

  /* 원본은 '골절; 부러지다' 로 명사와 동사가 섞여 있다. 기존 표제어 break 의
     유의어 자리이고 형제가 shatter·smash 로 모두 동사라 동사로 모았다
     (3차 ferment·8차 foster 와 같은 판단이다). 유의어에 crack 을 쓰지 않았다 —
     표제어인데 품사가 명사여서 동사 자리에 '갈라진 틈' 이 뜬다. */
  { word:"fracture", pron:"프랙처", pos:"v", level:"B2", meanings:["부러지다","부수다"],
    syn:["shatter","smash","break apart"],
    ex:[{ s:"A hard fall can {{}} the small bones of the wrist.", f:"fracture", ko:"세게 넘어지면 손목의 작은 뼈가 부러질 수 있다." }] },

  { word:"fragile", pron:"프래절", pos:"adj", level:"B2", meanings:["깨지기 쉬운","허약한"],
    syn:["breakable","delicate","easily damaged"],
    ex:[{ s:"Label the box {{}} before you send it.", f:"fragile", ko:"보내기 전에 상자에 깨지기 쉬움 표시를 하라." }] },

  { word:"fragment", pron:"프래그먼트", pos:"n", level:"B2", meanings:["파편","조각"],
    syn:["shard","chip","broken piece"],
    ex:[{ s:"A {{}} of pottery told the whole story of the site.", f:"fragment", ko:"토기 조각 하나가 그 유적의 이야기 전부를 말해 주었다." }] },

  /* 원본 목록에는 '(부피, 크기 등이) 늘다, 증가하다' 로 적혀 있었다. swell 의
     뜻이 밀려 들어온 것이라 0차에서 바로잡았다.
     기존 사전 뜻 '향기, 방향' 은 표제어 aroma 의 뜻과 글자까지 같아서 둘째 뜻을
     '좋은 냄새' 로 갈랐다. */
  { word:"fragrance", pron:"프레이그런스", pos:"n", level:"B2", meanings:["향기","좋은 냄새"],
    syn:["scent","aroma","perfume"],
    ex:[{ s:"The whole room held the {{}} of cut lilies.", f:"fragrance", ko:"방 전체에 자른 백합의 향기가 감돌았다." }] },

  { word:"fragrant", pron:"프레이그런트", pos:"adj", level:"B2", meanings:["향기로운"],
    syn:["sweet-smelling","perfumed","aromatic"],
    ex:[{ s:"Warm bread makes the kitchen {{}} all morning.", f:"fragrant", ko:"따뜻한 빵이 아침 내내 부엌을 향기롭게 만든다." }] },

  /* 기존 사전 뜻은 '허약한' 한 마디였는데 3차 표제어 feeble 의 첫 뜻과 같다.
     같은 세트에서 카드가 겹치지 않도록 원본의 '무른' 을 앞에 두었다. */
  { word:"frail", pron:"프레일", pos:"adj", level:"C1", meanings:["무른","허약한"],
    syn:["weak","infirm","not robust"], ant:["athletic"],
    ex:[{ s:"The oldest chair was too {{}} to sit on.", f:"frail", ko:"가장 오래된 의자는 앉기에 너무 무른 상태였다." }] },

  { word:"frantic", pron:"프랜틱", pos:"adj", level:"C1", meanings:["미친 듯한","정신없는"],
    syn:["frenzied","beside oneself","wildly agitated"],
    ex:[{ s:"There was a {{}} search for the missing keys.", f:"frantic", ko:"잃어버린 열쇠를 찾는 정신없는 수색이 있었다." }] },

  { word:"fraud", pron:"프로드", pos:"n", level:"C1", meanings:["사기꾼","사기"],
    syn:["impostor","swindler","deception"],
    ex:[{ s:"The investment turned out to be an outright {{}}.", f:"fraud", ko:"그 투자는 완전한 사기로 드러났다." }] },

  { word:"free of charge", pron:"프리 오브 차지", pos:"phr", level:"B2", meanings:["무료로"],
    syn:["at no cost","without payment","for nothing"] },

  { word:"free will", pron:"프리 윌", pos:"n", level:"C1", meanings:["자유 의지"],
    syn:["own choice","self-determination","freedom to choose"],
    ex:[{ s:"Philosophers still argue about whether {{}} exists.", f:"free will", ko:"철학자들은 자유 의지가 있는지를 아직도 논쟁한다." }] },

  { word:"freeze", pron:"프리즈", pos:"v", level:"B1", meanings:["얼다","얼리다"],
    syn:["ice over","turn to ice","chill solid"],
    ex:[{ s:"The shallow pond will {{}} before the river does.", f:"freeze", ko:"얕은 못이 강보다 먼저 언다." }] },

  { word:"freight", pron:"프레이트", pos:"n", level:"C1", meanings:["화물"],
    syn:["cargo","goods","shipment"],
    ex:[{ s:"The night train carries only {{}}, no passengers.", f:"freight", ko:"그 야간 열차는 승객 없이 화물만 실어 나른다." }] },

  { word:"frequency", pron:"프리퀀시", pos:"n", level:"B2", meanings:["빈도","주파수"],
    syn:["rate of occurrence","how often","recurrence"],
    ex:[{ s:"They measured the {{}} of storms over fifty years.", f:"frequency", ko:"그들은 50년에 걸친 폭풍의 빈도를 측정했다." }] },

  { word:"frequent", pron:"프리퀀트", pos:"adj", level:"B1", meanings:["빈번한","잦은"],
    syn:["repeated","recurring","common"],
    ex:[{ s:"{{}} delays finally drove passengers away.", f:"Frequent", ko:"잦은 지연이 결국 승객들을 떠나게 했다." }] },

  { word:"friction", pron:"프릭션", pos:"n", level:"B2", meanings:["마찰","갈등"],
    syn:["rubbing","resistance","abrasion"],
    ex:[{ s:"A drop of oil removes most of the {{}}.", f:"friction", ko:"기름 한 방울이 마찰의 대부분을 없앤다." }] },

  { word:"fright", pron:"프라이트", pos:"n", level:"B2", meanings:["공포","두려움"],
    syn:["terror","alarm","sudden fear"],
    ex:[{ s:"The sudden bang gave the whole class a {{}}.", f:"fright", ko:"갑작스러운 소리가 반 전체에 공포를 주었다." }] },

  { word:"frighten", pron:"프라이튼", pos:"v", level:"B1", meanings:["놀라게 만들다"],
    syn:["scare","startle","terrify"],
    ex:[{ s:"Loud fireworks {{}} the horses every year.", f:"frighten", ko:"요란한 불꽃놀이가 매년 말들을 놀라게 만든다." }] },

  { word:"frigid", pron:"프리지드", pos:"adj", level:"C1", meanings:["몹시 추운","냉랭한"],
    syn:["freezing","icy","bitterly cold"],
    ex:[{ s:"They crossed the pass in {{}} weather.", f:"frigid", ko:"그들은 몹시 추운 날씨에 그 고개를 넘었다." }] },

  { word:"from scratch", pron:"프럼 스크래치", pos:"phr", level:"C1", meanings:["맨 처음부터"],
    syn:["from the beginning","from nothing","starting over"] },

  /* ── 10차: frontiersman ~ fur (20개) ──────────── */

  { word:"frontiersman", pron:"프런티어즈먼", pos:"n", level:"C2", meanings:["개척자"],
    syn:["pioneer","settler","trailblazer"],
    ex:[{ s:"The diary of one {{}} survives from that winter.", f:"frontiersman", ko:"그 겨울에서 개척자 한 사람의 일기가 남아 있다." }] },

  { word:"frost", pron:"프로스트", pos:"n", level:"B1", meanings:["서리"],
    syn:["frozen dew","hoarfrost","ice crystals"],
    ex:[{ s:"A light {{}} covered the field before sunrise.", f:"frost", ko:"해가 뜨기 전 밭에 옅은 서리가 덮였다." }] },

  { word:"frown", pron:"프라운", pos:"v", level:"B2", meanings:["얼굴을 찡그리다"],
    syn:["scowl","knit the brows","look displeased"], ant:["chuckle"],
    ex:[{ s:"She began to {{}} as she read the last line.", f:"frown", ko:"그녀는 마지막 줄을 읽으며 얼굴을 찡그리기 시작했다." }] },

  { word:"frugal", pron:"프루걸", pos:"adj", level:"C1", meanings:["검소한","절약하는"],
    syn:["thrifty","sparing","careful with money"], ant:["wasteful"],
    ex:[{ s:"They lived a {{}} life on a single wage.", f:"frugal", ko:"그들은 한 사람의 급여로 검소한 생활을 했다." }] },

  { word:"fruitful", pron:"프루트풀", pos:"adj", level:"B2", meanings:["생산적인","유익한"],
    syn:["productive","rewarding","worthwhile"],
    ex:[{ s:"The two days of talks proved unusually {{}}.", f:"fruitful", ko:"이틀에 걸친 회담은 유난히 생산적이었다." }] },

  { word:"fruition", pron:"프루이션", pos:"n", level:"C2", meanings:["결실","성취"],
    syn:["realization","coming to pass","successful outcome"],
    ex:[{ s:"The plan came to {{}} after eleven years.", f:"fruition", ko:"그 계획은 11년이 지나 결실을 맺었다." }] },

  { word:"frustrate", pron:"프러스트레이트", pos:"v", level:"B2", meanings:["좌절시키다"],
    syn:["thwart","foil","block the plans of"],
    ex:[{ s:"Heavy snow will {{}} any attempt on the summit.", f:"frustrate", ko:"폭설은 정상 등반 시도를 좌절시킬 것이다." }] },

  /* 원본 목록에는 '좌절시키는' 으로 적혀 있었다. 능동과 수동이 뒤집힌 것이라
     (그것은 frustrating 의 뜻이다) 0차에서 '좌절한, 낙담한' 으로 바로잡았다.
     같은 챕터의 frustrate(동사)와는 품사로 갈라진다. */
  { word:"frustrated", pron:"프러스트레이티드", pos:"adj", level:"B2", meanings:["좌절한","낙담한"],
    syn:["discouraged","disheartened","dispirited"],
    ex:[{ s:"Players looked {{}} after the third missed chance.", f:"frustrated", ko:"선수들은 세 번째 기회를 놓친 뒤 좌절한 표정이었다." }] },

  /* 원본은 '연료를 넣다; 악화시키다; 부채질하다; 연료' 로 동사와 명사가 섞여
     있다. 기존 사전 뜻도 '연료; 부추기다' 로 두 갈래였고 참조하는 표제어가 없어
     자유롭게 정할 수 있었다. 두 갈래 모두 수능에 나오므로 함께 담았다
     (2차 fare·5차 firm 과 같은 처리다). */
  { word:"fuel", pron:"퓨얼", pos:"n", level:"B1", meanings:["연료","부채질하다"],
    syn:["gasoline","combustible material","power source"],
    ex:[{ s:"The tractor runs on the same {{}} as the truck.", f:"fuel", ko:"그 트랙터는 트럭과 같은 연료로 움직인다." }] },

  { word:"fugitive", pron:"퓨저티브", pos:"n", level:"C1", meanings:["도망자"],
    syn:["runaway","escapee","person on the run"],
    ex:[{ s:"The {{}} was found in a barn two counties away.", f:"fugitive", ko:"그 도망자는 두 군 떨어진 헛간에서 발견되었다." }] },

  { word:"fulfill", pron:"풀필", pos:"v", level:"B2", meanings:["이행하다","달성하다"],
    syn:["carry out","achieve","live up to"],
    ex:[{ s:"The company failed to {{}} its side of the contract.", f:"fulfill", ko:"그 회사는 계약에서 자기 쪽 의무를 이행하지 못했다." }] },

  { word:"full-scale", pron:"풀 스케일", pos:"adj", level:"C1", meanings:["실물 크기의"],
    syn:["life-size","complete in scale","actual size"],
    ex:[{ s:"They built a {{}} model of the cabin in the hall.", f:"full-scale", ko:"그들은 강당에 그 선실의 실물 크기 모형을 지었다." }] },

  { word:"fumble", pron:"펌블", pos:"v", level:"C1", meanings:["더듬어 찾다"],
    syn:["grope","feel about","handle clumsily"],
    ex:[{ s:"He had to {{}} for the light switch in the dark.", f:"fumble", ko:"그는 어둠 속에서 전등 스위치를 더듬어 찾아야 했다." }] },

  { word:"fume", pron:"퓸", pos:"n", level:"C1", meanings:["증기","가스"],
    syn:["vapor","noxious gas","exhaust gas"],
    ex:[{ s:"Thick {{}} from the engine filled the shed.", f:"fume", ko:"엔진에서 나온 짙은 증기가 창고를 채웠다." }] },

  /* function(n)·functional(adj) 은 앞 여섯 글자가 같은 가족이지만 품사가 달라
     갈라진다. 참조하는 표제어가 없어 뜻은 기존 사전 것을 그대로 옮겼다. */
  { word:"function", pron:"펑션", pos:"n", level:"B1", meanings:["기능","역할"],
    syn:["purpose","role","use"],
    ex:[{ s:"Each key on the panel has a single clear {{}}.", f:"function", ko:"패널의 각 키는 하나의 분명한 기능을 갖는다." }] },

  { word:"functional", pron:"펑셔널", pos:"adj", level:"B2", meanings:["기능적인","실용적인"],
    syn:["practical","usable","serviceable"],
    ex:[{ s:"The furniture is plain but entirely {{}}.", f:"functional", ko:"그 가구는 소박하지만 완전히 기능적이다." }] },

  { word:"fund-raising", pron:"펀드 레이징", pos:"n", level:"C1", meanings:["자선 모금"],
    syn:["money collecting","charity drive","soliciting donations"],
    ex:[{ s:"The school relies on {{}} to keep the library open.", f:"fund-raising", ko:"그 학교는 도서관을 열어 두려고 자선 모금에 기댄다." }] },

  { word:"fundamental", pron:"펀더멘털", pos:"adj", level:"B2", meanings:["근본적인","기초적인"],
    syn:["basic","essential","underlying"],
    ex:[{ s:"There is a {{}} difference between the two methods.", f:"fundamental", ko:"두 방법 사이에는 근본적인 차이가 있다." }] },

  { word:"fungus", pron:"펑거스", pos:"n", level:"C1", meanings:["균류","버섯"],
    syn:["mushroom","toadstool","mildew"],
    ex:[{ s:"A grey {{}} spread across the damp wall.", f:"fungus", ko:"회색 균류가 축축한 벽을 따라 퍼졌다." }] },

  { word:"fur", pron:"퍼", pos:"n", level:"B1", meanings:["털","모피"],
    syn:["animal hair","coat of hair","hairy skin"],
    ex:[{ s:"Arctic foxes grow thicker {{}} before winter.", f:"fur", ko:"북극여우는 겨울 전에 더 두꺼운 털이 자란다." }] },

  /* ── 11차: furious ~ fuzzy (10개, 마지막) ──────── */

  { word:"furious", pron:"퓨리어스", pos:"adj", level:"B2", meanings:["성난","격렬한"],
    syn:["enraged","irate","very angry"], ant:["calm"],
    ex:[{ s:"Neighbors were {{}} about the all-night noise.", f:"furious", ko:"이웃들은 밤새 이어진 소음에 성이 났다." }] },

  { word:"furnish", pron:"퍼니시", pos:"v", level:"B2", meanings:["가구를 비치하다","제공하다"],
    syn:["equip","fit out","supply"],
    ex:[{ s:"They had to {{}} the whole flat on a small budget.", f:"furnish", ko:"그들은 적은 예산으로 집 전체에 가구를 비치해야 했다." }] },

  /* 템플릿형 표제어다. 원본 그대로 두었다 — 다듬지 않는다는 방침이다.
     furnish(v)와 앞 여섯 글자가 같지만 품사가 달라 갈라진다.
     사전 키는 소문자로 적어야 조회에 닿는다(GLOSS[s.toLowerCase()]). 그래서
     이 낱말의 유의어 provide A with B 등은 아래 블록에서 소문자 키로 넣었다. */
  { word:"furnish A with B", pron:"퍼니시 에이 위드 비", pos:"phr", level:"B2", meanings:["A에게 B를 제공하다"],
    syn:["provide A with B","supply A with B","give A B"] },

  { word:"furrow", pron:"퍼로", pos:"n", level:"C1", meanings:["고랑","깊은 주름"],
    syn:["plow line","deep groove","wrinkle"],
    ex:[{ s:"Rain collected in every {{}} across the field.", f:"furrow", ko:"비가 밭의 고랑마다 고였다." }] },

  { word:"furry", pron:"퍼리", pos:"adj", level:"B2", meanings:["털로 덮인"],
    syn:["hairy","fuzzy-coated","covered in fur"],
    ex:[{ s:"A small {{}} animal darted under the porch.", f:"furry", ko:"털로 덮인 작은 동물이 현관 밑으로 쏜살같이 들어갔다." }] },

  /* ★ 두 곳이 참조하는데 필요한 갈래가 서로 다르다 — additional 은 '추가의'
     (형용사) 쪽, advance 는 '촉진하다'(동사) 쪽이다. 기존 사전 뜻은
     '추가의; 더 멀리' 로 동사 갈래가 아예 없었다. 그래서 advance 문제에서는
     progress·proceed 라는 동사 선택지 사이에 형용사 뜻이 섞여 있었다 —
     '유의어가 아닌 것' 을 찾는 학생에게 잘못된 단서를 준다.
     words.js 는 세트별 audit 이 없어(D·E 세트만 있다) 걸리지 않던 자리다.
     ["추가의","촉진하다"] 로 두 갈래를 담아 양쪽을 모두 살렸다.
     원본의 '더 나아가'(부사)는 두 참조 어디에도 쓰이지 않아 내려놓았다. */
  { word:"further", pron:"퍼더", pos:"adj", level:"B1", meanings:["추가의","촉진하다"],
    syn:["extra","supplementary","more"],
    ex:[{ s:"The council asked for {{}} details before deciding.", f:"further", ko:"의회는 결정 전에 추가 세부 사항을 요청했다." }] },

  { word:"fusion", pron:"퓨전", pos:"n", level:"C1", meanings:["융합","용해"],
    syn:["merging","blending","coming together"],
    ex:[{ s:"The dish is a {{}} of two regional styles.", f:"fusion", ko:"그 요리는 두 지역 양식의 융합이다." }] },

  { word:"fuss", pron:"퍼스", pos:"n", level:"B2", meanings:["호들갑","야단"],
    syn:["commotion","to-do","needless bother"],
    ex:[{ s:"He made a great {{}} over a tiny scratch.", f:"fuss", ko:"그는 작은 흠 하나에 큰 호들갑을 떨었다." }] },

  { word:"futile", pron:"퓨틀", pos:"adj", level:"C1", meanings:["헛된","소용없는"],
    syn:["pointless","useless","in vain"],
    ex:[{ s:"All their efforts to restart the engine were {{}}.", f:"futile", ko:"엔진을 다시 걸려는 그들의 모든 노력이 헛되었다." }] },

  /* 원본은 '흐린, 솜털 있는' 인데 '솜털 있는' 은 6차 표제어 fluffy(솜털의)와
     겹친다. 기존 사전 뜻 '흐릿한, 애매한' 을 그대로 두어 blurry 문제도
     그대로 남겼다. F 세트의 마지막 낱말이다. */
  { word:"fuzzy", pron:"퍼지", pos:"adj", level:"B2", meanings:["흐릿한","애매한"],
    syn:["indistinct","hazy","unclear"],
    ex:[{ s:"The label had gone {{}} in the wash.", f:"fuzzy", ko:"그 상표는 세탁에서 흐릿해졌다." }] }
];

/* ── F 세트가 쓰는 유의어·반의어의 뜻 ─────────────
   표제어(VOCAB~VOCAB_F)에 있는 낱말은 넣지 않는다 — 읽는 쪽이 표제어를 먼저
   찾으므로 죽은 항목이 되고, 뜻이 두 곳으로 갈라진다.
   1차에서 쓴 유의어 중 accurate·amenity·aptitude·assist·biased·cause·
   confidence·counterfeit·craze·decline·decrease·determinant·doubt·dwindle·
   element 는 표제어라서 여기에 없다.
   material·superb·ability·trend·wither·intensify·just·impartial·trust·
   belief·rely on·lag·genuine·establishment 는 이미 GLOSS 에 있어서 없다.

   ⚠️ 재대입(=)이 아니라 Object.assign 으로 합쳐야 A~E 세트 것이 살아남는다. */
Object.assign(window.GLOSS, {
  /* ── 1차: fable ~ fall off (37개) ───────────────── */
  "allegory":"풍유, 비유",
  "allow for":"~을 감안하다",
  "bear in mind":"명심하다, 유념하다",
  "cloth":"천, 옷감",
  "concoct":"꾸며내다, 조작하다",
  "devoted":"헌신적인, 열성적인",
  "die away":"차츰 사라지다",
  "disloyal":"불충한, 배신하는",
  "drop back":"뒤로 처지다",
  "even-handed":"공평한",
  "expedite":"신속히 처리하다",
  "falsify":"위조하다, 변조하다",
  "fictional":"허구의, 소설의",
  "folktale":"민간 설화, 옛이야기",
  "frontage":"건물 정면",
  "installation":"설비, 시설물",
  "lose color":"색이 바래다",
  "loyal":"충성스러운",
  "make easier":"더 쉽게 하다",
  "mental power":"정신적 능력",
  "outward appearance":"겉모습, 외관",
  "parable":"우화, 비유담",
  "resort to":"~의 수단에 의지하다",
  "sham":"겉치레의, 거짓된",
  "trail":"뒤처져 따라가다",
  "trump up":"날조하다",
  "truthful":"진실한, 사실대로의",
  "turn to":"~에 도움을 청하다",
  "veneer":"겉치장, 허울",
  "verifiable":"검증할 수 있는",
  "vogue":"유행, 인기",

  /* ── 2차: fall short of ~ favorably (46개) ───────────────── */
  "absorbing":"몰두하게 하는",
  "abstinence":"절제, 금욕",
  "approvingly":"찬성하여",
  "blemish":"흠, 오점",
  "bore":"지루하게 하다",
  "captivating":"매혹적인",
  "closeness":"가까움, 친밀함",
  "come up short":"모자라다",
  "daydream":"백일몽, 공상",
  "death":"죽음",
  "devotee":"열렬한 지지자",
  "enthrall":"마음을 온통 빼앗다",
  "extremist":"극단주의자",
  "fail to reach":"이르지 못하다",
  "false notion":"틀린 관념",
  "faulty reasoning":"잘못된 추론",
  "food shortage":"식량 부족",
  "going without food":"음식을 끊는 것",
  "good turn":"선행",
  "goodwill":"호의, 선의",
  "gripping":"몰입시키는",
  "in a good light":"좋게",
  "intimacy":"친밀함",
  "loss of life":"인명 손실",
  "lose momentum":"기세를 잃다",
  "not measure up":"기준에 못 미치다",
  "passage money":"통행 요금",
  "positively":"긍정적으로",
  "predestination":"예정된 운명",
  "press on":"밀고 나아가다",
  "reverie":"몽상",
  "self-denial":"자기 절제",
  "spigot":"주둥이, 꼭지",
  "tap":"수도꼭지",
  "ticket price":"승차 요금",
  "tiredness":"피곤함",
  "transport cost":"교통비",
  "valve":"밸브",
  "vigor":"활력, 기운",
  "waver":"흔들리다, 주저하다",
  "weariness":"지침, 피곤",
  "working knowledge":"실용적 지식",
  "zealot":"열성분자",

  /* ── 3차: fear ~ fetal (47개) ───────────────── */
  "achievable":"달성할 수 있는",
  "ardor":"열렬함, 격정",
  "be afraid of":"무서워하다",
  "be welcome to":"~해도 좋다",
  "celebration dinner":"축하 만찬",
  "distinguishing mark":"구별되는 표시",
  "do not hesitate to":"주저 없이 ~하다",
  "dues":"회비",
  "embryonic":"배아의, 초기의",
  "equality campaigner":"평등 운동가",
  "feed":"양분을 주다",
  "girlish":"소녀 같은",
  "go ahead and":"거리낌 없이 ~하다",
  "hallmark":"전형적 특징",
  "infirm":"병약한, 노쇠한",
  "ladylike":"숙녀다운",
  "lavish meal":"성찬",
  "let rise":"부풀게 하다",
  "make a show of":"~하는 티를 내다",
  "plant food":"식물 영양제",
  "plume":"깃털 장식",
  "practicability":"실행할 수 있음",
  "prenatal":"출생 전의",
  "pretend":"~인 척하다",
  "productiveness":"생산성",
  "quill":"큰 깃털, 깃대",
  "reproductive capacity":"번식 능력",
  "rich":"기름진, 풍부한",
  "richness":"풍부함",
  "service charge":"서비스 요금",
  "sickly":"골골하는",
  "soft plumage":"부드러운 깃",
  "suffragist":"여성 참정권론자",
  "turn sour":"쉬다, 산패하다",
  "unborn":"아직 태어나지 않은",
  "undergo fermentation":"발효를 거치다",
  "unworkable":"실행할 수 없는",
  "viability":"실현 가능성",
  "viable":"실행 가능한",
  "womanly":"여자다운",
  "women's rights advocate":"여성 권리 옹호자",
  "workability":"작동 가능성",

  /* ── 4차: fetch ~ fine-grained (49개) ───────────────── */
  "bring":"가져오다",
  "budgetary":"예산상의",
  "developing baby":"자라는 아기",
  "embryo":"배아",
  "fabrication":"날조",
  "ferocious":"흉포한",
  "filament":"가느다란 실",
  "finely detailed":"세밀하게 다듬은",
  "go and get":"가서 가져오다",
  "grime":"묵은 때",
  "grimy":"때가 낀",
  "high-resolution":"고해상도의",
  "invented tale":"허구의 이야기",
  "leak from":"~에서 새다",
  "made-up story":"지어낸 이야기",
  "manorial":"영지의",
  "metaphorical":"은유적인",
  "monetary punishment":"금전적 처벌",
  "money-related":"돈에 관한",
  "make sense of":"~을 이해하다",
  "muck":"거름, 더러운 것",
  "non-literal":"글자 그대로가 아닌",
  "numerical value":"숫자로 나타낸 값",
  /* 사전 조회는 소문자로 한다(GLOSS[s.toLowerCase()]). 표제어 쪽 syn 문자열은
     'of the Middle Ages' 처럼 고유명사를 살려 적지만 키는 반드시 소문자다. */
  "of the middle ages":"중세 시대의",
  "overexcited":"지나치게 흥분한",
  "packing material":"포장 충전물",
  "padding":"속을 채우는 것",
  "puzzle out":"궁리해 알아내다",
  "research outcome":"연구 결과",
  "seep out of":"~에서 스며 나오다",
  "smooth-textured":"결이 매끄러운",
  "spotless":"티 하나 없는",
  "squalid":"지저분한",
  "squalor":"불결한 상태",
  "statistic":"통계 수치",
  "stuffing":"속을 채운 것",
  "surcharge":"추가 요금",
  "symbolic":"상징하는",
  "thread":"실",
  "top up":"가득 채우다",
  "trickle out of":"~에서 방울져 흐르다",
  "unborn child":"아직 태어나지 않은 아이",
  "unclean":"깨끗하지 않은",
  "violent":"폭력적인, 격렬한",

  /* ── 5차: finite ~ flawless (48개) ─────────────────
     limited·solid·sturdy·smooth·gleam·imperfection·crisp 은 이미 GLOSS 에
     있어서 여기에 없다. division·appropriate·bumpy·brittle·even 은 표제어다. */
  "balled hand":"움켜쥔 손",
  "blaze up":"확 타오르다",
  "bounded":"경계가 있는",
  "breaking apart":"쪼개져 갈라짐",
  "butter up":"비위를 맞추다",
  "clenched hand":"꽉 쥔 손",
  "combustible":"불에 타기 쉬운",
  "compliment excessively":"지나치게 칭찬하다",
  "defective":"결함이 있는",
  "easily burned":"쉽게 타는",
  "evenly surfaced":"표면이 고른",
  "faultless":"흠 하나 없는",
  "fireproof":"불에 타지 않는",
  "fish farm":"양어장",
  "fishing ground":"어장",
  "fishing industry":"수산업",
  "flame up":"불길이 치솟다",
  "glint":"반짝이다",
  "good health":"좋은 건강",
  "hand lamp":"손에 드는 등",
  "impeccable":"나무랄 데 없는",
  "in good shape":"건강한 상태인",
  "inflammable":"불이 잘 붙는",
  "knuckles":"주먹의 관절",
  "level off":"고르게 하다",
  "light up briefly":"잠깐 빛나다",
  "move to and fro":"앞뒤로 움직이다",
  "of the highest class":"최상급의",
  "perfect":"완벽한",
  "physical condition":"몸의 상태",
  "pocket light":"주머니용 조명",
  "praise insincerely":"마음에 없이 칭찬하다",
  "press flat":"눌러 납작하게 하다",
  "shoot up":"급히 치솟다",
  "smooth out":"매끄럽게 펴다",
  "splitting":"쪼개짐",
  "suitability":"적합함",
  "tang":"톡 쏘는 맛",
  "taste":"맛, 미각",
  "tax-related":"세금에 관한",
  "thrash about":"몸부림치다",
  "torch":"손전등",
  "unyielding":"굽히지 않는",
  "wave up and down":"위아래로 흔들다",

  /* ── 6차: flee ~ flush (48개) ─────────────────────
     adaptable·rigid·swarm·stream·vary·articulacy·fail·redden 은 이미 GLOSS 에
     있어서 여기에 없다. escape·chase·bend·adaptability·drift·decay·blush 는
     표제어다. */
  "armada":"함대",
  "bendable":"휘어지는",
  "blink":"깜박이다",
  "bob":"물에서 위아래로 움직이다",
  "bodily liquid":"몸속의 액체",
  "command of a language":"언어 구사력",
  "crook":"굽히다",
  "dart":"쏜살같이 움직이다",
  "do well":"잘 되어 가다",
  "downy":"솜털로 덮인",
  "fleecy":"양털 같은",
  "flowing substance":"흐르는 물질",
  "get a failing grade":"낙제 점수를 받다",
  "give a quick tap":"가볍게 한 번 치다",
  "glimmer":"희미하게 반짝이다",
  "go on and off":"켜졌다 꺼졌다 하다",
  "go red":"빨갛게 되다",
  "group of birds":"새 무리",
  "group of ships":"배의 무리",
  "herd":"가축의 떼",
  "invert":"거꾸로 하다",
  "jerk":"홱 움직이다",
  "move lightly":"가볍게 움직이다",
  "naval force":"해군 병력",
  "not pass":"통과하지 못하다",
  "pliable":"잘 휘어지는",
  "pliancy":"휘기 쉬움",
  "pour into":"쏟아져 들어가다",
  "prosper":"번창하다",
  "rise and fall":"오르내리다",
  "run away":"달아나 버리다",
  "running water":"흐르는 물",
  "rush into":"급히 들어가다",
  "skim by":"스쳐 지나가다",
  "smooth delivery":"막힘 없는 말솜씨",
  "soft and light":"부드럽고 가벼운",
  "stay on the surface":"수면에 머물다",
  "steady movement":"꾸준한 움직임",
  "stream into":"줄지어 들어가다",
  "suppleness":"나긋함",
  "swing up and down":"위아래로 흔들리다",
  "take flight":"달아나다",
  "thrive":"잘 자라다",
  "toss":"던져 올리다",
  "turn over":"돌려 뒤집다",
  "work the joint":"관절을 움직이다",

  /* ── 7차: flutter ~ foremost (49개) ───────────────
     opponent·prohibit·outlaw·misgiving·prediction·outlook·leading·principal·
     chief 은 이미 GLOSS 에 있어서 여기에 없다. adversary·enemy·ban·allow 는
     표제어다. */
  "annotation":"주석",
  "beat the wings":"날개를 치다",
  "brow":"이마, 눈썹",
  "constant change":"끊임없는 변화",
  "copy the example":"본을 그대로 따르다",
  "do the same":"똑같이 하다",
  "drive up":"밀어 올리다",
  "fall in line":"뒤따라 맞추다",
  "feeding order":"먹이 순서",
  "flap about":"퍼덕이며 움직이다",
  "foodborne illness":"음식으로 옮는 병",
  "footfall":"발 딛는 소리",
  "for the benefit of":"~의 이익을 위해",
  "front of the head":"머리의 앞쪽",
  "gastric infection":"위장 감염",
  "greenery":"푸른 잎",
  "hunt for provisions":"먹을 것을 찾아다니다",
  "kinfolk":"친족",
  "leafage":"잎의 무성함",
  "leaves":"나뭇잎",
  "not allowed":"허용되지 않는",
  "note at the bottom":"아래쪽에 다는 설명",
  "off-limits":"출입이 금지된",
  "ordinary people":"보통 사람들",
  "out of regard for":"~을 생각해서",
  "people":"사람들",
  "permitted":"허용된",
  "predator chain":"포식 관계의 사슬",
  "premonition":"미리 드는 느낌",
  "prohibited":"금지된",
  "projection":"추정치",
  "push higher":"더 높이 밀다",
  "scavenge":"버려진 먹이를 찾다",
  "search for food":"먹을 것을 찾다",
  "send up":"위로 올려 보내다",
  "sense of dread":"두려운 느낌",
  "settled in advance":"사전에 결정된",
  "side note":"곁들인 설명",
  "sound of walking":"걷는 소리",
  "state of flow":"흘러 움직이는 상태",
  "stomach upset from food":"음식으로 생긴 배앓이",
  "temple area":"관자놀이 쪽",
  "tread":"발걸음",
  "trophic chain":"영양 단계의 사슬",

  /* ── 8차: foresee ~ fountain (39개) ───────────────
     predict·falsify·give up·create·recipe·layout·arrangement·design·
     development·desert·frank·evasive·official·proper·nurture·raise·set up 은
     이미 GLOSS 에 있어서 여기에 없다. fabricate·constitute·equation·abandon·
     establish·current 는 표제어다. */
  "advance planning":"미리 세운 계획",
  "be deprived of":"~을 빼앗기다",
  "bring into being":"생겨나게 하다",
  "bring up":"길러 내다",
  "ceremonial":"의례적인",
  "citadel":"성채",
  "coming together":"모여 이루어짐",
  "counterfeit item":"위조된 물건",
  "do without":"없이 지내다",
  "earlier":"더 앞선",
  "fake copy":"가짜 사본",
  "far-sightedness":"멀리 보는 눈",
  "forged document":"위조된 문서",
  "fortified place":"방비를 갖춘 곳",
  "give up as a penalty":"벌로 내놓다",
  "harden into rock":"굳어 돌이 되다",
  "imitate fraudulently":"속일 목적으로 흉내내다",
  "look ahead to":"앞일을 헤아리다",
  "lose by default":"기권으로 잃다",
  "luck":"운수",
  "one-time":"한때의",
  "outspoken":"거침없이 말하는",
  "petrify":"돌처럼 굳히다",
  "plain-spoken":"꾸밈없이 말하는",
  "prudence":"앞을 내다보는 신중함",
  "see ahead":"앞을 내다보다",
  "set procedure":"정해진 절차",
  "spout":"물이 뿜어 나오는 주둥이",
  "start up":"일으켜 시작하다",
  "stroke of luck":"운 좋은 일",
  "stronghold":"굳게 지키는 거점",
  "taking shape":"모양을 갖추어 감",
  "turn one's back on":"등을 돌리다",
  "turn to stone":"돌로 바뀌다",
  "water jet":"솟구치는 물줄기",
  "wellspring":"물이 솟는 근원",
  "windfall":"뜻밖의 횡재",

  /* ── 9차: fraction ~ from scratch (46개) ───────────
     portion·shatter·smash·scent·weak·infirm·frenzied·impostor·deception·
     goods·resistance·alarm 은 이미 GLOSS 에 있어서 여기에 없다.
     delicate·athletic·crack 은 표제어다. */
  "abrasion":"쓸림, 마모",
  "aromatic":"향이 나는",
  "at no cost":"비용 없이",
  "beside oneself":"제정신이 아닌",
  "bitterly cold":"살을 에듯 추운",
  "break apart":"쪼개어 부수다",
  "breakable":"깨질 수 있는",
  "broken piece":"깨진 조각",
  "cargo":"배나 비행기의 짐",
  "chill solid":"단단하게 얼리다",
  "chip":"떨어져 나온 부스러기",
  "common":"흔한",
  "easily damaged":"쉽게 상하는",
  "for nothing":"공짜로",
  "freedom to choose":"고를 수 있는 자유",
  "freezing":"얼어붙을 듯한",
  "from nothing":"아무것도 없는 데서",
  "from the beginning":"처음부터",
  "how often":"얼마나 자주인가",
  "ice over":"얼음으로 덮이다",
  "icy":"얼음처럼 찬",
  "not robust":"튼튼하지 못한",
  "own choice":"스스로의 선택",
  "perfume":"향수",
  "perfumed":"향을 입힌",
  "rate of occurrence":"일어나는 비율",
  "recurrence":"되풀이됨",
  "recurring":"되풀이되는",
  "repeated":"거듭되는",
  "rubbing":"비벼 닿음",
  "scare":"겁주다",
  "self-determination":"스스로 정함",
  "shard":"깨진 사금파리",
  "shipment":"실어 보낸 짐",
  "small part":"작은 부분",
  "starting over":"처음부터 다시 함",
  "sudden fear":"갑작스러운 무서움",
  "sweet-smelling":"좋은 냄새가 나는",
  "swindler":"남을 속여 뺏는 사람",
  "terror":"극심한 공포",
  "tiny amount":"아주 적은 양",
  "turn to ice":"얼음으로 바뀌다",
  "wildly agitated":"몹시 흥분한",
  "without payment":"돈을 내지 않고",

  /* ── 10차: frontiersman ~ fur (49개) ───────────────
     pioneer·thrifty·wasteful·productive·disheartened·role·use·practical·basic 은
     이미 GLOSS 에 있어서 여기에 없다. carry out·achieve·essential 은 표제어다. */
  "actual size":"실제 크기의",
  "animal hair":"짐승의 털",
  "block the plans of":"~의 계획을 막다",
  "careful with money":"돈을 아껴 쓰는",
  "charity drive":"자선 모금 운동",
  "coat of hair":"몸을 덮은 털",
  "coming to pass":"실제로 이루어짐",
  "combustible material":"태울 수 있는 물질",
  "complete in scale":"크기를 그대로 맞춘",
  "discouraged":"기가 꺾인",
  "dispirited":"풀이 죽은",
  "escapee":"탈출한 사람",
  "exhaust gas":"배기 가스",
  "feel about":"손으로 더듬다",
  "foil":"계획을 어그러뜨리다",
  "frozen dew":"얼어붙은 이슬",
  "gasoline":"휘발유",
  "grope":"손으로 짚어 가다",
  "hairy skin":"털이 난 가죽",
  "handle clumsily":"서투르게 만지다",
  "hoarfrost":"흰 서리",
  "ice crystals":"얼음 결정",
  "knit the brows":"눈살을 모으다",
  "live up to":"~에 걸맞게 하다",
  "look displeased":"못마땅한 표정을 짓다",
  "mildew":"흰곰팡이",
  "money collecting":"돈을 모으는 일",
  "mushroom":"버섯",
  "noxious gas":"해로운 기체",
  "person on the run":"쫓기는 사람",
  "power source":"동력을 내는 것",
  "realization":"실현",
  "rewarding":"보람 있는",
  "runaway":"달아난 사람",
  "serviceable":"쓸 만한",
  "settler":"정착민",
  "scowl":"노려보며 찡그리다",
  "soliciting donations":"기부를 청하는 일",
  "sparing":"아껴 쓰는",
  "successful outcome":"좋은 결말",
  "thwart":"뜻을 꺾다",
  "toadstool":"독버섯",
  "trailblazer":"길을 처음 낸 사람",
  "underlying":"밑바탕에 있는",
  "usable":"쓸 수 있는",
  "vapor":"김, 수증기",
  "worthwhile":"할 만한 값이 있는",

  /* ── 11차: furious ~ fuzzy (21개, 마지막) ───────────
     calm·supply·hairy·extra·supplementary·coming together·commotion·
     indistinct·hazy·unclear 은 이미 GLOSS 에 있어서 여기에 없다.
     ⚠️ provide A with B 처럼 대문자가 든 낱말도 키는 소문자로 적는다 —
        조회가 GLOSS[s.toLowerCase()] 이기 때문이다. 표제어 쪽 syn 문자열은
        'provide A with B' 로 대문자를 살린다. */
  "blending":"섞여 어우러짐",
  "covered in fur":"털로 덮인",
  "deep groove":"깊게 팬 골",
  "enraged":"격노한",
  "equip":"장비를 갖추다",
  "fit out":"필요한 것을 갖춰 주다",
  "fuzzy-coated":"솜털이 난",
  "give a b":"A에게 B를 주다",
  "in vain":"헛되이",
  "irate":"몹시 화난",
  "merging":"하나로 합쳐짐",
  "more":"더 많은",
  "needless bother":"쓸데없는 수고",
  "plow line":"쟁기가 낸 줄",
  "pointless":"의미 없는",
  "provide a with b":"A에게 B를 마련해 주다",
  "supply a with b":"A에게 B를 공급하다",
  "to-do":"부산한 소란",
  "useless":"쓸모없는",
  "very angry":"매우 화가 난",
  "wrinkle":"주름"
});
