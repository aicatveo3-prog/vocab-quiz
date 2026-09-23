/**
 * 단어 데이터 — 수능 보카 O 섹션
 *
 * 스키마는 words.js와 완전히 동일하다. 필드 설명은 그 파일 상단을 참고.
 *
 * ⚠️ GLOSS 는 words.js 가 이미 만들어 둔 객체다. 여기서 window.GLOSS = {...} 로
 *    재대입하면 앞선 세트의 것이 통째로 사라진다. 반드시 이 파일 맨 아래처럼
 *    Object.assign 으로 병합할 것. 키는 소문자, 앞뒤 공백 없이.
 *    ⚠️ 또 gloss.js 에 같은 키가 있는지 먼저 확인할 것 — gloss.js 가 이 파일보다
 *    뒤에 로드되므로 여기 넣은 값이 조용히 덮인다.
 *
 * ── 이 세트의 승격: 158단어 중 82개(52%) ──
 *
 * 저장소에서 승격 비율이 가장 높은 세트다. obvious·obtain·object·offer·observe
 * 처럼 기본적인 낱말이 많아 오래전부터 유의어·반의어로 동원돼 왔다.
 * 참조는 모두 132곳으로 이것도 가장 많다.
 *   object 5곳 · obscure 5곳 · offset 5곳 · overlook 5곳
 *   obey 4곳 · obstruct 4곳 · opponent 4곳
 *
 * 원칙은 A~N 세트와 같다.
 *   ① 같은 갈래면 기존 뜻을 쓴다 (기존 문제 화면이 안 바뀐다)
 *   ② 다른 갈래면 기존 쪽 뜻을 첫 자리에 남긴다
 *   ③ 사전에만 있던 갈래는 뒤에 붙여 살린다
 *   ④ 한 표제어에 두 품사를 섞지 않는다 — 참조가 쓰는 갈래를 남긴다
 *
 * ── 원본의 뜻 오류를 고친 것 ──
 *   offset          '능숙함, 능숙도' → '상쇄하다, 벌충하다'
 *                   competence(능숙함, 능력) 의 뜻이 들어와 있었다. 참조 5곳
 *                   (compensate·compensate for·counteract·counterbalance·make up for)
 *                   이 전부 상쇄 뜻을 쓴다.
 *   overpower       '견줄 데 없는' → '제압하다, 힘으로 누르다'
 *                   unrivaled 의 뜻이다. 참조 drown out(D) 은 제압 뜻을 쓴다.
 *   oblige          '주장하다, 강요하다' → '~하게 만들다, 강요하다'
 *                   '주장하다' 는 allege·argue 의 뜻이다. 참조 compel(C).
 *   opening         '공식, 개방' → '시작, 개막'
 *                   '공석' 의 오타로 보인다. 그대로 두면 formula(공식, F) 와 첫 뜻이
 *                   겹친다. 참조 initial(I)·conclusion(ant, C) 이 시작 뜻을 쓴다.
 *   outcome         '결과, 과정' → '결과, 성과'   ('성과' 의 오타로 보인다)
 *   organizational  '구조적인, 조직적인; 구조의' → '조직의, 조직적인'
 *                   '구조적인' 은 structural 의 뜻이다.
 *   occasional      '때때로; 임시의, 우연의' → '때때로의, 간간이 있는'
 *                   '때때로' 는 부사다. 형용사 자리이고 참조 ceaseless(ant, C) 도 형용사다.
 *
 * ── 겹침을 가른 것 ──
 *   objection '이의, 반감' / oppose '~에 반대하다' / opposite '반대편의, 맞은편의'(adj)
 *     / opposition '반대, 저항'    ↑ 네 낱말이 모두 '반대' 로 시작하고 있었다
 *   obligate '의무를 지우다' / obligatory '의무적인, 필수의' / oblige '~하게 만들다'
 *   optimal '최적의, 최선의' / optimum '최적 조건'(n)
 *   out of date '시대에 뒤진' / out of fashion '유행이 지난' / outdated '구식의, 낡은'
 *   outperform '더 나은 성과를 내다' / outstrip '앞지르다, 웃돌다'
 *   overpower '제압하다' / overwhelm '압도하다, 당황하게 하다' / overbear '억누르다'
 *   occupancy '점유, 사용' / occupation '직업, 점령'
 *   onset '개시, 발병' / opening '시작, 개막'
 *   organ '장기, 기관' / organization '조직, 단체'
 *   obvious '명백한, 뻔한'            ← apparent(분명한, A) 와 첫 뜻을 갈랐다
 *   ornate '정교하게 꾸민, 화려한'      ← gorgeous(화려한, G) 와 첫 뜻을 갈랐다
 *   occurrence '일어남, 사례'          ← incidence(발생, I) 와 갈랐다
 *   once and for all '최종적으로, 단번에' ← altogether(완전히, A) 와 갈랐다
 *   out of place '제자리에 있지 않은'    ← improper·misplaced(부적절한) 와 갈랐다
 *
 * ── 품사를 하나로 정리한 것 (참조가 쓰는 갈래를 남겼다) ──
 *   objective  adj 객관적인       impartial(I) 이 형용사 갈래를 쓴다. '목적, 목표' 는 버렸다.
 *   opposite   adj 반대편의       converse(C)·inverse(I) 둘 다 형용사. '반대'(n) 를 버리자
 *                                objection·opposition 과의 겹침도 함께 풀렸다.
 *   official   adj 공식적인       authoritative(A)·formal(F)
 *   offer      v   제안하다       demand(ant, D) 가 동사
 *   outlaw     v   비합법화하다    ban(B)·forbid(F) 둘 다 동사
 *   oval       adj 달걀 모양의     elliptical(E). 첫 뜻을 '달걀 모양의' 로 두어
 *                                elliptical(타원형의) 과 갈랐다.
 *   overall    adj 전반적인       general(G)·gross(G)
 *   occasional adj 때때로의       ceaseless(ant, C)
 *   obscure    adj 분명하지 않은   참조 다섯 중 셋이 형용사(apparent·celebrated·distinguished).
 *                                동사 자리였던 clarify(C)·block out(B) 쪽을 각각
 *                                'make unclear'·'hide from view' 로 바꿨다.
 *   observe    v   관찰하다, 준수하다  comply(C) 가 '준수하다' 를 쓴다. comment(C) 는
 *                                '논평하다' 갈래를 쓰고 있어서 그쪽 유의어를 N 세트의
 *                                'note' 로 바꿨다(words-c.js).
 *   object     n   물건, 물체     참조가 명사 2곳(artifact·item)·동사 3곳으로 갈렸다.
 *                                수능에서 명사가 압도적이고 '반대하다' 는 같은 세트의
 *                                oppose·objection 이 담으므로 명사로 세우고, 동사 참조
 *                                3곳(complain·disagree·disapprove) 의 유의어를
 *                                'object to' 로 바꿨다.
 *   ornament   n   장식, 장신구    decoration(D) 은 명사, adorn(A) 은 동사였다. 원본이
 *                                명사뿐이어서 명사로 세우고 adorn 쪽을 'deck out' 으로 바꿨다.
 *   optimum    n   최적 조건      참조가 없어 자유롭게 골랐다. 명사로 두니 optimal 과의
 *                                겹침이 저절로 풀렸다.
 *   orbit·orphan·outback·output·outrage·overdose·onstage  참조가 없어 한 갈래로 정리했다.
 */

window.VOCAB_O = [
];

/* 유의어 뜻 사전 병합 — 발음은 js/data/pron.js 에 넣는다 */
Object.assign(window.GLOSS, {
});
