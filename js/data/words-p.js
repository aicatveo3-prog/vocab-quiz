/**
 * 단어 데이터 — 수능 보카 P 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *
 * ⚠️ GLOSS 는 words.js 가 이미 만들어 둔 객체다. 여기서 window.GLOSS = {...} 로
 *    재대입하면 앞선 세트의 것이 통째로 사라진다. 반드시 이 파일 맨 아래처럼
 *    Object.assign 으로 병합할 것. 키는 소문자, 앞뒤 공백 없이.
 *    ⚠️ 또 다른 파일에 같은 키가 있는지 먼저 확인할 것 — gloss.js 에 있으면 여기
 *    넣은 값이 죽고(gloss.js 가 뒤에 로드된다), 앞선 세트 파일에 있으면 여기 값이
 *    그쪽을 덮어 기존 문제의 화면이 바뀐다.
 *
 * ── 이 세트는 한 번에 붙인 것 중 가장 크다: 343단어 · 17챕터 ──
 *
 * 승격이 178개(52%)로 O 세트와 같은 비율이지만 절대 수가 두 배 넘는다.
 * 참조는 239곳으로 저장소 최다다 — O 세트(132곳) 의 거의 두 배다.
 * p 로 시작하는 낱말에 proper·preserve·produce·prompt·plain·predict 같은
 * 기본 낱말이 몰려 있어서다.
 *
 *   preserve 5곳(adapt·alter·annihilate 반의어, conserve, decompose 반의어)
 *   proper   5곳(appropriate·correct·decent·formal, improper 반의어)
 *   parallel 4곳 · passage 4곳 · pleased 4곳 · plot 4곳
 *   produce  4곳 · prompt  4곳 · provoke 4곳
 *
 * 원칙은 A~O 세트와 같다.
 *   ① 같은 갈래면 기존 뜻을 쓴다 (기존 문제 화면이 안 바뀐다)
 *   ② 다른 갈래면 기존 쪽 뜻을 첫 자리에 남긴다
 *   ③ 사전에만 있던 갈래는 뒤에 붙여 살린다
 *   ④ 한 표제어에 두 품사를 섞지 않는다 — 참조가 쓰는 갈래를 남긴다
 *   ⑤ 뜻은 두 갈래까지만 담는다
 *
 * ── 원본의 뜻 오류를 고친 것 (6건) ──
 *   peek        '(법 등을) 개정하다' → '살짝 들여다보다'
 *               amend 의 뜻이 들어와 있었다. 참조 glance·glimpse 가 '흘끗 보다' 다.
 *   product     '생산(수단)' → '제품, 산물'
 *   production  '생산물' → '생산, 생산량'
 *               ↑ 이 둘은 서로 뜻이 바뀌어 있었다. 사전값과 참조가 모두 그렇게 말한다
 *                 (product ← commodity·creation, production ← consumption 반의어).
 *   pillar      '주석, 중추' → '기둥, 중추'   ('주석' 은 '주축' 의 오타로 보인다)
 *   plunge      '거꾸로지다, 급락하다' → '뛰어들다, 급락하다'   (오타 + 사전값)
 *   predator    '포식 동물, 약탈자,' → 끝에 남은 쉼표를 걷었다
 *
 * ── 형식을 다듬은 것 ──
 *   괄호 34곳, "=" 표기 5곳(petty·planetwide·point of view·ponder·postulate),
 *   뜻이 3갈래 이상인 86개를 두 갈래로 줄였다.
 *   외래어를 그대로 옮긴 것은 뺐다 — paradigm '패러다임' · portal '포털' ·
 *   profile '프로필' · promoter '프로모터' (M 세트 multimedia 와 같은 처리다).
 *
 * ── 겹침을 가른 것 ──
 *   partake 함께하다 / participate 참여하다 / participate in ~에 가담하다   ← 3중
 *   practicable 실행에 옮길 수 있는 / practical 실용적인 / pragmatic 현실적인  ← 3중
 *   potential 잠재적인(adj) / potentiality 잠재력(n)
 *   procedure 절차, 순서 / process 과정, 경과
 *   point 요점, 점수 / point out 지적하다
 *   parasite 기생충 / parasitic 기생성의
 *   paycheck 월급, 봉급 / payment 지불, 납부
 *   prevailing 우세한, 지배적인 / prevalent 널리 퍼진, 흔한
 *   penalty 벌금, 과태료 / punishment 처벌, 형벌
 *   precondition 미리 갖춰야 할 조건 / prerequisite 전제 조건
 *   predetermined 미리 정해진 / preselected 미리 골라 둔
 *   prerogative 고유 권한 / privilege 특권, 명예
 *   penetrate 꿰뚫다 / pierce 찌르다
 *   기존 표제어와 갈라 둔 것 — paramount(cardinal·foremost) · peculiar(bizarre·odd) ·
 *   peril(hazard·jeopardy) · petty(minor) · plight(adversity) · pitch(degree) ·
 *   posterity(descendant) · postpone·procrastinate(defer) · precise(accurate) ·
 *   predominant(dominant) · prevent(avert) · previous(former) · priceless(invaluable) ·
 *   priest(clergy) · proclaim(declare)
 */

window.VOCAB_P = [
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
});
