/**
 * 단어 데이터 — 수능 보카 T 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *
 * ⚠️ GLOSS 는 words.js 가 이미 만들어 둔 객체다. 여기서 window.GLOSS = {...} 로
 *    재대입하면 앞선 세트의 것이 통째로 사라진다. 반드시 Object.assign 으로
 *    병합할 것. 키는 소문자, 앞뒤 공백 없이.
 *
 * ── 200단어 · 10챕터 (1차부터 열 차수에 걸쳐 붙인다) ──
 *
 * 승격이 90개(45%), 참조가 135곳이다. 확정한 뜻·품사·레벨은 tools/t-source.txt
 * 에 남겨 두었다. 원본(교재) 212단어에서 열둘을 빼고 뜻 오류 셋을 고친 결과다.
 *
 * ── 이 세트에서 가장 조심해야 하는 것 ─────────────────────
 * 이 구간의 사전값에는 **동사와 명사를 쌍반점으로 붙여 둔 낱말**이 특히 많다
 * (tie 묶다;유대 · torment 괴롭히다;고통 · trace 추적하다;흔적 · treasure
 * 소중히 하다;보물 · trigger 촉발하다;방아쇠 …). 승격할 때 한쪽을 골라야 하는데,
 * 그 낱말을 유의어로 쓰고 있는 기존 표제어가 버린 쪽 뜻을 노린 자리이면 화면이
 * 어긋난다. 감사 도구는 이것을 잡지 못한다 — 선택지에 품사 정보가 없기 때문이다.
 *
 * 그래서 차수를 시작하기 전에 200단어를 통째로 훑어 손질할 자리 여덟 곳을 미리
 * 뽑아 두었다. 각 자리에는 해당 표제어 위에 ★ 주석으로 이유를 남긴다.
 *
 * 또 하나. 뜻이 겹치는데 갈라 쓸 수 없으면 **글자를 똑같이 맞춘다.** quizgen 의
 * meaningsOverlap 이 글자가 같은 두 낱말을 서로의 오답에서 자동으로 뺀다.
 * 어설프게 다르게 적는 것이 가장 위험하다 — 앱이 둘을 다른 뜻으로 보고 같은
 * 문제에 나란히 내놓는다.
 *
 * 이 파일은 배선만 먼저 해 둔 것이다. app.js 가 단어 0개인 세트를 목록에서
 * 걸러내므로 화면에는 아직 T 세트가 뜨지 않는다.
 */
window.VOCAB_T = [

  /* ── 챕터 1 ────────────────────────────────────── */
  /* 스물 중 열여덟이 'take ~' 로 시작하는 구·표현이다. 구·표현에는 예문을 두지
     않으므로(빈칸 문제로 만들기 어렵다) 이 챕터는 문장빈칸이 거의 없다. 대신
     짝맞추기와 아닌 것 고르기로 채워진다.

     'take ~' 가 몰린 만큼 뜻이 서로 닿는 자리가 많았다. 이렇게 갈랐다.
       take charge  책임을 지다        ← '떠맡다' 를 버렸다
       take on      떠맡다, 고용하다    ← 사전값. shoulder(S 떠맡다) 와 맞물려 배제
       take up      차지하다, 받아들이다 (챕터 2)
     take back(취소하다) 은 cancel·revoke·annul·call off 와, take place(벌어지다) 는
     come about(일어나다) 와 각각 글자가 맞물려 자동 배제된다.

     ★ avail oneself of(A) 를 손질했다. 사전이 make use of 와 take advantage of 에
     똑같이 '~을 이용하다' 를 적어 두어 그 syn 목록에 설명이 완전히 같은 선택지가
     둘 있었다. take advantage of 가 표제어가 되면서 글자가 확정되므로 갈았다. */

  { word:"taboo", pron:"터부", pos:"n", level:"B2", meanings:["금기","금단"],
    syn:["forbidden thing","what must not be done","social ban"],
    ex:[{ s:"The subject was a strict {{}} there.", f:"taboo", ko:"그곳에서 그 주제는 엄한 금기였다." }] },

  /* 교재가 앞세운 '꾀' 는 드문 쪽이라 순서를 바꿨다. strategy(전략 · S) 와는
     '전술' 로 갈린다. */
  { word:"tactic", pron:"택틱", pos:"n", level:"B2", meanings:["전술","꾀"],
    syn:["scheme","plan of attack","move to win"],
    ex:[{ s:"They changed their {{}} at halftime.", f:"tactic", ko:"그들은 전반이 끝나고 전술을 바꿨다." }] },

  { word:"tactically", pron:"택티컬리", pos:"adv", level:"C1", meanings:["전술적으로"],
    syn:["in terms of tactics","with a plan in mind","by a shrewd move"],
    ex:[{ s:"The move was {{}} sound.", f:"tactically", ko:"그 조치는 전술적으로 타당했다." }] },

  /* 구·표현이라 예문은 두지 않는다. 사전의 'take for granted' 는 따로 남는
     선택지다 — 표제어와 열쇠가 달라 부딪히지 않는다. */
  { word:"take ~ for granted", pron:"테이크 포 그랜티드", pos:"phr", level:"B2", meanings:["당연하게 여기다","대수롭지 않게 여기다"],
    syn:["assume without asking","think it is owed","fail to value"] },

  /* 교재 '위험을 무릅쓰고 시도하다' 를 줄였다. */
  { word:"take a risk", pron:"테이크 어 리스크", pos:"phr", level:"B1", meanings:["위험을 무릅쓰다"],
    syn:["chance it","act despite danger","put oneself in danger"] },

  { word:"take a stand", pron:"테이크 어 스탠드", pos:"phr", level:"B2", meanings:["태도를 정하다","입장을 취하다"],
    syn:["declare one's position","come out for a side","make one's view plain"] },

  { word:"take action", pron:"테이크 액션", pos:"phr", level:"B1", meanings:["조치를 취하다"],
    syn:["do something about it","move to act","step in"] },

  /* 승격 ① — 사전 글자 유지. 참조 avail oneself of(A)·benefit from(B)·exploit(E)
     세 곳의 화면은 바뀌지 않는다. 교재의 '이용하다' 는 harness 자리다. */
  { word:"take advantage of", pron:"테이크 어드밴티지 오브", pos:"phr", level:"B1", meanings:["~을 이용하다"],
    syn:["avail oneself of","benefit from","exploit"] },

  { word:"take apart", pron:"테이크 어파트", pos:"phr", level:"B2", meanings:["분해하다"],
    syn:["dismantle","pull to pieces","break into parts"] },

  { word:"take back", pron:"테이크 백", pos:"phr", level:"B2", meanings:["취소하다","반품하다"],
    syn:["retract","return for a refund","withdraw what one said"] },

  /* '떠맡다' 는 아래 take on 자리라 버렸다. */
  { word:"take charge", pron:"테이크 차지", pos:"phr", level:"B2", meanings:["책임을 지다"],
    syn:["take the lead","assume control","be answerable for"] },

  { word:"take credit for", pron:"테이크 크레딧 포", pos:"phr", level:"C1", meanings:["~의 공을 인정받다"],
    syn:["claim the merit of","be praised for","accept the honour of"] },

  { word:"take exception to", pron:"테이크 익셉션 투", pos:"phr", level:"C1", meanings:["~에 반대하다"],
    syn:["object to","raise a protest at","refuse to accept"] },

  /* 교재 'take heart (from)' 의 괄호를 걷었다. */
  { word:"take heart", pron:"테이크 하트", pos:"phr", level:"C1", meanings:["용기를 내다","자신감을 갖다"],
    syn:["cheer up","gain courage","feel encouraged"] },

  /* 승격 ② — 사전 글자 유지(참조 factor in). 교재의 '계산에 넣다' 는 버렸다. */
  { word:"take into account", pron:"테이크 인투 어카운트", pos:"phr", level:"B2", meanings:["고려하다","참작하다"],
    syn:["factor in","allow for","weigh in the decision"] },

  /* 승격 ③ — 사전의 쌍반점만 쉼표로 갈랐다(참조 assume). shoulder(S 떠맡다) 와
     글자가 맞물려 자동 배제된다. 교재의 '태우다' 는 버렸다. */
  { word:"take on", pron:"테이크 온", pos:"phr", level:"B2", meanings:["떠맡다","고용하다"],
    syn:["assume","hire","agree to do"] },

  /* 승격 ④ — 사전 단일값 유지(참조 extract). 교재의 세 갈래 중 하나만 남겼다. */
  { word:"take out", pron:"테이크 아웃", pos:"phr", level:"B1", meanings:["꺼내다"],
    syn:["extract","draw out","pull from inside"] },

  /* 승격 ⑤ — 사전 단일값 유지(참조 inherit). 교재 '인수하다, 인계하다' 버림. */
  { word:"take over", pron:"테이크 오버", pos:"phr", level:"B2", meanings:["넘겨받다"],
    syn:["inherit","step into the role of","assume from another"] },

  /* 승격 ⑥ — 사전 글자 유지(참조 be engaged in). */
  { word:"take part in", pron:"테이크 파트 인", pos:"phr", level:"B1", meanings:["~에 참여하다"],
    syn:["be engaged in","join in","have a hand in"] },

  /* 승격 ⑦ — 사전 단일값 유지(참조 occur). 교재의 '일어나다' 는 come about
     자리여서 버렸고, 그 come about 을 선택지로 썼다. */
  { word:"take place", pron:"테이크 플레이스", pos:"phr", level:"B1", meanings:["벌어지다"],
    syn:["occur","come about","happen as planned"] }
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
  "accept the honour of": "~의 명예를 받아들이다",
  "act despite danger": "위험을 안고 움직이다",
  "agree to do": "하기로 응하다",
  "assume control": "통제를 맡다",
  "assume from another": "남에게서 맡아 오다",
  "assume without asking": "묻지 않고 그러리라 여기다",
  "be answerable for": "~에 답할 처지가 되다",
  "be praised for": "~로 칭찬을 받다",
  "break into parts": "여러 부분으로 나누다",
  "by a shrewd move": "약삭빠른 수로",
  "chance it": "운에 맡기고 해 보다",
  "cheer up": "기운을 차리다",
  "claim the merit of": "~의 공을 제 것이라 하다",
  "come out for a side": "한쪽 편을 드러내다",
  "declare one's position": "제 입장을 밝히다",
  "do something about it": "그것에 대해 손을 쓰다",
  "fail to value": "값지게 보지 못하다",
  "feel encouraged": "힘이 나다",
  "forbidden thing": "해서는 안 되는 것",
  "gain courage": "용기를 얻다",
  "happen as planned": "예정대로 일어나다",
  "in terms of tactics": "전술로 보아",
  "make one's view plain": "제 견해를 분명히 하다",
  "move to act": "행동에 나서다",
  "move to win": "이기려는 수",
  "plan of attack": "밀어붙일 계획",
  "pull from inside": "안에서 끌어내다",
  "pull to pieces": "조각으로 뜯어내다",
  "put oneself in danger": "스스로를 위험에 두다",
  "put to use": "써서 쓸모를 내다",
  "raise a protest at": "~에 항의를 내다",
  "refuse to accept": "받아들이기를 거부하다",
  "return for a refund": "환불을 받으려 돌려주다",
  "social ban": "사회가 금하는 것",
  "step into the role of": "~의 자리를 이어받다",
  "take the lead": "앞장서다",
  "think it is owed": "받아야 할 것이라 여기다",
  "weigh in the decision": "결정에 견주어 넣다",
  "what must not be done": "하지 말아야 할 일",
  "with a plan in mind": "계획을 두고",
  "withdraw what one said": "한 말을 거두어들이다"
});
