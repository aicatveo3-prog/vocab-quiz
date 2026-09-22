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
 * 진행 상황: 100 / 210단어 (fable ~ flawless) — 5차, 5챕터 완료.
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
    ex:[{ s:"Her delivery of the long speech was {{}}.", f:"flawless", ko:"그 긴 연설에 대한 그녀의 전달은 결점이 없었다." }] }
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
  "marvelous":"놀라운, 굉장한",
  "mental power":"정신적 능력",
  "outward appearance":"겉모습, 외관",
  "parable":"우화, 비유담",
  "phony":"허위의, 사이비의",
  "resort to":"~의 수단에 의지하다",
  "sham":"겉치레의, 거짓된",
  "steadfast":"확고한, 변함없는",
  "take into account":"고려하다, 참작하다",
  "terrific":"멋진, 대단한",
  "textile":"직물, 섬유 제품",
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
  "intrigue":"흥미를 돋우다",
  "loss of life":"인명 손실",
  "lose momentum":"기세를 잃다",
  "not measure up":"기준에 못 미치다",
  "passage money":"통행 요금",
  "positively":"긍정적으로",
  "predestination":"예정된 운명",
  "press on":"밀고 나아가다",
  "reverie":"몽상",
  "self-denial":"자기 절제",
  "shortcoming":"단점, 결점",
  "spigot":"주둥이, 꼭지",
  "starvation":"굶어 죽음, 기아",
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
  "lush":"우거진, 푸르른",
  "make a show of":"~하는 티를 내다",
  "masculine":"남성적인",
  "plant food":"식물 영양제",
  "plume":"깃털 장식",
  "pollinate":"수분시키다",
  "practicability":"실행할 수 있음",
  "practicable":"실행에 옮길 수 있는",
  "prenatal":"출생 전의",
  "pretend":"~인 척하다",
  "productiveness":"생산성",
  "quill":"큰 깃털, 깃대",
  "reproductive capacity":"번식 능력",
  "rich":"기름진, 풍부한",
  "richness":"풍부함",
  "service charge":"서비스 요금",
  "sickly":"골골하는",
  "simulate":"그런 양 꾸미다",
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
  "hectic":"몹시 바쁜",
  "high-resolution":"고해상도의",
  "invented tale":"허구의 이야기",
  "leak from":"~에서 새다",
  "literal":"글자 그대로의",
  "made-up story":"지어낸 이야기",
  "manorial":"영지의",
  "medieval":"중세의",
  "metaphorical":"은유적인",
  "monetary":"통화의, 금전상의",
  "monetary punishment":"금전적 처벌",
  "money-related":"돈에 관한",
  "made-up story":"지어낸 이야기",
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
  "screen out":"걸러 내어 막다",
  "seep out of":"~에서 스며 나오다",
  "smooth-textured":"결이 매끄러운",
  "spotless":"티 하나 없는",
  "squalid":"지저분한",
  "squalor":"불결한 상태",
  "statistic":"통계 수치",
  "strand":"한 가닥",
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
  "horizontal":"수평의",
  "impeccable":"나무랄 데 없는",
  "in good shape":"건강한 상태인",
  "inflammable":"불이 잘 붙는",
  "knuckles":"주먹의 관절",
  "level off":"고르게 하다",
  "light up briefly":"잠깐 빛나다",
  "measurable":"헤아릴 수 있는",
  "move to and fro":"앞뒤로 움직이다",
  "of the highest class":"최상급의",
  "perfect":"완벽한",
  "physical condition":"몸의 상태",
  "pocket light":"주머니용 조명",
  "praise insincerely":"마음에 없이 칭찬하다",
  "press flat":"눌러 납작하게 하다",
  "savor":"풍미",
  "shoot up":"급히 치솟다",
  "smooth out":"매끄럽게 펴다",
  "splitting":"쪼개짐",
  "suitability":"적합함",
  "superior":"더 뛰어난",
  "tang":"톡 쏘는 맛",
  "taste":"맛, 미각",
  "tax-related":"세금에 관한",
  "thrash about":"몸부림치다",
  "top-notch":"최고 수준의",
  "torch":"손전등",
  "unyielding":"굽히지 않는",
  "wave up and down":"위아래로 흔들다"
});
