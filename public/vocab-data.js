// Vocabulary data + helpers
(function(){
const W=[
  {w:"maintain",m:"유지하다",s:["preserve 보존하다","sustain 지탱하다","retain 보유하다"],a:["abandon 포기하다","neglect 방치하다"],h:"메인+테인→유지",ex:"It is important to _____ a balanced diet.",ek:"균형 잡힌 식단을 [유지하는] 것이 중요하다"},
  {w:"reveal",m:"드러내다, 폭로하다",s:["disclose 공개하다","expose 폭로하다","uncover 밝혀내다"],a:["conceal 숨기다","hide 감추다"],h:"re+veil→베일 벗기다",ex:"The investigation helped to _____ the truth.",ek:"그 조사는 진실을 [드러내는] 데 도움이 되었다"},
  {w:"aggressive",m:"공격적인, 난폭한",s:["hostile 적대적인","violent 폭력적인","combative 호전적인"],a:["passive 수동적인","gentle 온화한"],h:"어! 그래 시비!",ex:"The dog became _____ when strangers approached.",ek:"그 개는 낯선 사람이 다가오자 [공격적으로] 변했다"},
  {w:"medium",m:"수단, 매체; 중간의",s:["channel 경로","moderate 적당한","average 평균적인"],a:["extreme 극단적인"],h:"미디어 단수형",ex:"Television is a powerful _____ for advertising.",ek:"텔레비전은 강력한 광고 [매체]이다"},
  {w:"exposure",m:"노출; 폭로, 탄로",s:["revelation 폭로","disclosure 공개"],a:["protection 보호","concealment 은폐"],h:"ex+pose→드러냄",ex:"Prolonged _____ to the sun can cause skin damage.",ek:"햇빛에 장시간 [노출]되면 피부 손상을 일으킬 수 있다"},
  {w:"fair",m:"공정한, 타당한",s:["just 정의로운","impartial 편파없는","equitable 형평있는"],a:["unfair 불공정한","biased 편향된"],h:"페어플레이",ex:"The teacher gave a _____ grade to every student.",ek:"선생님은 모든 학생에게 [공정한] 성적을 주었다"},
  {w:"vast",m:"방대한, 어마어마한",s:["enormous 거대한","immense 엄청난","extensive 광범위한"],a:["tiny 아주작은","narrow 좁은","limited 제한된"],h:"배 스트레치~",ex:"She has _____ experience in international business.",ek:"그녀는 국제 비즈니스에서 [어마어마한] 경험을 갖고 있다"},
  {w:"yield",m:"산출하다; 양도하다",s:["produce 생산하다","generate 발생시키다","surrender 항복하다"],a:["consume 소비하다","resist 저항하다"],h:"필드에서 열매를 내다",ex:"This investment is expected to _____ a high return.",ek:"이 투자는 높은 수익을 [산출할] 것으로 기대된다"},
  {w:"particle",m:"입자, 작은 조각",s:["fragment 파편","speck 작은점","grain 알갱이"],a:["mass 덩어리","bulk 대량"],h:"파티에 뿌리는 가루",ex:"There isn't a _____ of evidence against him.",ek:"그에 대한 증거가 [조금도] 없다"},
  {w:"boast",m:"뽐내다, 자랑하다",s:["brag 허풍떨다","show off 과시하다","flaunt 내보이다"],a:["humble 겸손한","downplay 축소하다"],h:"보스처럼 뽐내다",ex:"He always likes to _____ about his wealth.",ek:"그는 항상 자기 재산을 [자랑하기를] 좋아한다"},
  {w:"indifferent",m:"무관심한, 냉담한",s:["apathetic 무감각한","unconcerned 개의치않는","detached 초연한"],a:["passionate 열정적인","enthusiastic 열광적인"],h:"in+different→무관심",ex:"He seemed _____ to the suffering of others.",ek:"그는 다른 사람들의 고통에 [무관심해] 보였다"},
  {w:"temporary",m:"일시적인",s:["provisional 잠정적인","transient 순간적인","fleeting 찰나의"],a:["permanent 영구적인","lasting 오래가는"],h:"템포→시간 한정",ex:"This is only a _____ solution to the problem.",ek:"이것은 [일시적인] 해결책일 뿐이다"},
  {w:"breed",m:"종, 유형; 사육하다",s:["species 종","raise 기르다","reproduce 번식하다"],a:["exterminate 박멸하다"],h:"브리더→사육/번식",ex:"They _____ horses on their farm.",ek:"그들은 농장에서 말을 [사육한다]"},
  {w:"accuse",m:"비난하다; 고발하다",s:["blame 탓하다","charge 기소하다","denounce 공개비난하다"],a:["defend 변호하다","acquit 무죄선고","praise 칭찬하다"],h:"어! 너 그거 했지!",ex:"They began to _____ him of being dishonest.",ek:"그들은 그가 정직하지 못하다고 [비난하기] 시작했다"},
  {w:"unfamiliar",m:"익숙하지 않은, 낯선",s:["strange 낯선","unknown 알려지지않은","novel 참신한"],a:["familiar 익숙한","accustomed 적응한"],h:"un+familiar",ex:"I am _____ with this neighborhood.",ek:"나는 이 동네가 [낯설다]"},
  {w:"contemplate",m:"생각하다, 고려하다",s:["consider 고려하다","ponder 숙고하다","reflect 되돌아보다"],a:["ignore 무시하다","disregard 경시하다"],h:"con+temple→사원에서 생각",ex:"She is starting to _____ a career change.",ek:"그녀는 직업 전환을 [고려하기] 시작했다"},
  {w:"excel",m:"(남을) 능가하다",s:["surpass 초월하다","outperform 더나은성과","exceed 초과하다"],a:["fail 실패하다","lag 뒤처지다"],h:"엑셀→남보다 뛰어난",ex:"She continues to _____ in mathematics and science.",ek:"그녀는 수학과 과학에서 계속 [뛰어나다]"},
  {w:"suitable",m:"적합한",s:["appropriate 적절한","fitting 어울리는","proper 올바른"],a:["unsuitable 부적합한","inappropriate 부적절한"],h:"suit+able→맞출수있는",ex:"This movie is not _____ for children.",ek:"이 영화는 어린이에게 [적합하지] 않다"},
  {w:"penetrate",m:"관통하다, 뚫다",s:["pierce 찌르다","perforate 구멍뚫다","infiltrate 침투하다"],a:["block 막다","repel 밀어내다"],h:"펜으로 뚫다",ex:"Sunlight could not _____ the thick forest.",ek:"햇빛이 울창한 숲을 [뚫고 들어갈] 수 없었다"},
  {w:"masterpiece",m:"걸작, 명작",s:["classic 고전","gem 보석같은작품"],a:["failure 실패작","mediocrity 범작"],h:"master+piece→걸작",ex:"The painting is considered a _____ of Renaissance art.",ek:"그 그림은 르네상스 미술의 [걸작]으로 여겨진다"},
  {w:"according to",m:"~에 따르면",s:["based on ~에근거하여","in accordance with ~에따라서"],a:["contrary to ~에반하여","regardless of ~에상관없이"],h:"accord+to→따르면",ex:"_____ the report, sales increased by 20%.",ek:"보고서[에 따르면] 매출이 20% 증가했다"},
  {w:"pick up",m:"집다; 태우다; 포착하다",s:["collect 데리러가다","grab 움켜잡다","detect 탐지하다"],a:["drop off 내려주다","put down 내려놓다"],h:"pick+up→집어올리다",ex:"Can you _____ the book from the floor?",ek:"바닥에서 책을 [집어 올려] 줄래?"},
  {w:"take care of",m:"돌보다, 신경 쓰다",s:["look after 돌보다","attend to 처리하다","tend 돌보다"],a:["neglect 방치하다","ignore 무시하다"],h:"care를 take→돌보다",ex:"Don't worry, I'll _____ everything.",ek:"걱정 마, 내가 모든 것을 [처리할게]"},
  {w:"call for",m:"요구하다, 필요로 하다",s:["demand 요구하다","require 필요로하다"],a:["offer 제안하다"],h:"call+for→요구",ex:"The situation may _____ immediate action.",ek:"이 상황은 즉각적인 조치를 [요구할] 수 있다"},
  {w:"defy",m:"반항하다, 거역하다",s:["resist 저항하다","disobey 불복종하다","rebel 반란일으키다"],a:["obey 복종하다","comply 준수하다","submit 굴복하다"],h:"de+fy→거역하다",ex:"The teenager continued to _____ his parents' rules.",ek:"그 십대는 계속 부모님의 규칙에 [반항했다]"},
  {w:"exquisite",m:"매우 아름다운, 정교한",s:["elegant 우아한","refined 세련된","delicate 섬세한"],a:["crude 투박한","ugly 추한","rough 거친"],h:"X급 퀄리티",ex:"The jewelry was of _____ craftsmanship.",ek:"그 보석은 [매우 정교한] 장인 솜씨였다"},
  {w:"belittle",m:"얕보다, 과소평가하다",s:["underestimate 과소평가하다","disparage 폄하하다","diminish 줄이다"],a:["praise 칭찬하다","exalt 찬양하다"],h:"be+little→작게만들다",ex:"Don't _____ her achievements.",ek:"그녀의 업적을 [과소평가하지] 마라"},
  {w:"counteract",m:"대응하다, 상쇄하다",s:["neutralize 중화하다","offset 상쇄하다","counter 대항하다"],a:["support 지지하다","enhance 강화하다"],h:"counter+act→반대행동",ex:"Exercise can _____ the effects of stress.",ek:"운동은 스트레스의 영향을 [상쇄할] 수 있다"},
  {w:"quarantine",m:"격리",s:["isolation 격리","confinement 감금","seclusion 은둔"],a:["release 해제","freedom 자유"],h:"40일 격리 유래",ex:"The patient was placed in _____ for two weeks.",ek:"환자는 2주간 [격리] 조치되었다"},
  {w:"rupture",m:"파열; 파열되다",s:["burst 터지다","fracture 골절","crack 갈라지다"],a:["mend 고치다","repair 수리하다","heal 치유하다"],h:"럽! 하고 터짐",ex:"There is a risk of _____ in the gas line.",ek:"가스관에 [파열] 위험이 있다"},
  {w:"savvy",m:"요령 있는",s:["shrewd 빈틈없는","astute 예리한","clever 영리한"],a:["naive 순진한","ignorant 무지한"],h:"save→돈 아끼는 요령",ex:"She is a _____ businesswoman.",ek:"그녀는 [빈틈없는] 사업가다"},
  {w:"pale",m:"창백한, 옅은",s:["faint 희미한","wan 핼쓱한","light 옅은"],a:["vivid 선명한","rosy 발그레한","dark 진한"],h:"fail→실패하면 창백",ex:"She looked _____ after hearing the bad news.",ek:"그녀는 나쁜 소식을 듣고 [창백해] 보였다"},
  {w:"irregular",m:"불규칙적인",s:["inconsistent 일관성없는","erratic 변덕스러운","sporadic 산발적인"],a:["regular 규칙적인","consistent 일관된","steady 꾸준한"],h:"ir+regular",ex:"The bus runs at _____ intervals.",ek:"버스가 [불규칙적인] 간격으로 운행한다"},
  {w:"grief",m:"깊은 슬픔, 비탄",s:["sorrow 슬픔","mourning 애도","anguish 극심한고통"],a:["joy 기쁨","happiness 행복","delight 큰기쁨"],h:"그리움+프→슬픔",ex:"She was overcome with _____ after the loss.",ek:"그녀는 상실 후 깊은 [슬픔]에 빠졌다"},
  {w:"rebellious",m:"반항적인, 반체제적인",s:["defiant 반항적인","unruly 통제안되는","disobedient 불순종하는"],a:["obedient 순종하는","submissive 복종적인"],h:"rebel+ious",ex:"The _____ students refused to follow the rules.",ek:"[반항적인] 학생들은 규칙을 따르기를 거부했다"},
  {w:"municipal",m:"지방 자치의, 시의",s:["civic 시민의","local 지역의","urban 도시의"],a:["national 국가의","federal 연방의","rural 시골의"],h:"muni+cipal→시의",ex:"The _____ government approved the new park project.",ek:"[시] 정부는 새 공원 사업을 승인했다"},
  {w:"certify",m:"증명하다, 보증하다",s:["verify 확인하다","confirm 확인하다","validate 유효성확인"],a:["deny 부인하다","disprove 반증하다"],h:"cert+fy→확실하게 만들다",ex:"This product has been officially _____ as organic.",ek:"이 제품은 유기농으로 공식 [인증되었다]"},
  {w:"meddle",m:"간섭하다, 참견하다",s:["interfere 간섭하다","intrude 침입하다","tamper 함부로손대다"],a:["abstain 자제하다"],h:"me+들→남의 일에 들어가다",ex:"Don't _____ in other people's affairs.",ek:"다른 사람의 일에 [참견하지] 마라"},
  {w:"barely",m:"간신히, 거의 ~않게",s:["hardly 거의~않다","scarcely 거의~않다","narrowly 가까스로"],a:["easily 쉽게","abundantly 풍부하게"],h:"bare+ly→최소한으로",ex:"I could _____ hear what she was saying.",ek:"나는 그녀가 하는 말을 [간신히] 들을 수 있었다"},
  {w:"friction",m:"마찰; 충돌, 불화",s:["resistance 저항","conflict 갈등","tension 긴장"],a:["harmony 조화","agreement 합의"],h:"fric+션→문지르면 마찰",ex:"There is growing _____ between the two departments.",ek:"두 부서 사이에 [불화]가 커지고 있다"},
  {w:"principal",m:"주요한, 주된; 교장",s:["main 주된","chief 으뜸의","primary 주요한"],a:["minor 사소한","secondary 부차적인"],h:"prince→가장 중요한 사람",ex:"The _____ reason for the delay was bad weather.",ek:"지연의 [주요한] 원인은 나쁜 날씨였다"},
  {w:"tease",m:"놀리다",s:["mock 조롱하다","taunt 도발하다","kid 농담으로놀리다"],a:["compliment 칭찬하다","encourage 격려하다"],h:"tea+즈→놀리기",ex:"Stop trying to _____ your little sister.",ek:"여동생을 [놀리려고] 하지 마"},
  {w:"gorgeous",m:"멋진, 우아한",s:["stunning 기막히게아름다운","magnificent 장엄한","glamorous 화려한"],a:["hideous 흉측한","ugly 추한","plain 수수한"],h:"고! 져스 멋져!",ex:"The sunset was absolutely _____.",ek:"그 석양은 정말 [멋졌다]"},
  {w:"secular",m:"세속적인",s:["worldly 세속적인","temporal 현세의"],a:["religious 종교적인","sacred 신성한","spiritual 영적인"],h:"세큘+러→종교와 무관",ex:"France is a _____ state.",ek:"프랑스는 [세속] 국가이다"},
  {w:"fluid",m:"유체; 유동적인",s:["liquid 액체","flexible 유연한","dynamic 역동적인"],a:["solid 고체의","rigid 경직된","fixed 고정된"],h:"flu+이드→흐르는 것",ex:"The situation remains _____ and unpredictable.",ek:"상황은 여전히 [유동적]이고 예측 불가능하다"},
  {w:"unbiased",m:"편견 없는",s:["impartial 공정한","objective 객관적인","neutral 중립적인"],a:["biased 편향된","prejudiced 편견가진"],h:"un+bias→편견 없는",ex:"A good journalist should provide _____ reporting.",ek:"좋은 기자는 [편견 없는] 보도를 해야 한다"},
  {w:"envy",m:"부러워하다; 부러움",s:["jealousy 질투","covet 탐내다","desire 갈망"],a:["contentment 만족","admiration 감탄"],h:"엔비디아→부러움",ex:"I _____ people who can speak multiple languages.",ek:"나는 여러 언어를 할 수 있는 사람들이 [부럽다]"},
  {w:"midst",m:"중앙, 한가운데",s:["middle 가운데","center 중심","core 핵심"],a:["edge 가장자리","periphery 주변부"],h:"mid+스트→한가운데",ex:"We are in the _____ of a major crisis.",ek:"우리는 심각한 위기의 [한가운데에] 있다"},
  {w:"improvisation",m:"즉흥",s:["spontaneity 즉흥성","ad-lib 즉흥연기"],a:["preparation 준비","rehearsal 리허설","planning 계획"],h:"재즈 즉흥 연주",ex:"The speech was pure _____; she had no notes.",ek:"그 연설은 순수한 [즉흥]이었다"},
  {w:"stern",m:"엄중한, 근엄한",s:["strict 엄격한","severe 가혹한","solemn 엄숙한"],a:["lenient 관대한","gentle 온화한","easygoing 느긋한"],h:"stun→기 죽을만큼 엄격",ex:"The teacher gave him a _____ warning.",ek:"선생님이 그에게 [엄중한] 경고를 했다"},
  {w:"resolution",m:"해결; 결의안",s:["solution 해결책","settlement 합의","declaration 선언"],a:["problem 문제","conflict 갈등"],h:"resolve 명사형",ex:"The _____ of the conflict took several months.",ek:"그 갈등의 [해결]에 수개월이 걸렸다"},
  {w:"audit",m:"회계 감사; 청강하다",s:["inspection 검사","examination 조사","review 검토"],a:["overlook 간과하다","neglect 소홀히하다"],h:"audi→듣고 검사",ex:"The company is undergoing a financial _____.",ek:"그 회사는 재무 [감사]를 받고 있다"},
  {w:"mayor",m:"시장, 군수",s:["governor 주지사","magistrate 행정관"],a:["citizen 시민","subordinate 부하"],h:"major→가장 주요한 사람",ex:"The _____ announced a plan to improve transportation.",ek:"[시장]은 교통 개선 계획을 발표했다"},
  {w:"invitation",m:"초대(장)",s:["request 요청","summons 소환","offer 제의"],a:["rejection 거절","exclusion 배제"],h:"invite 명사형",ex:"I received an _____ to the wedding.",ek:"나는 결혼식 [초대장]을 받았다"},
  {w:"bring about",m:"일으키다, 야기하다",s:["cause 야기하다","trigger 촉발하다","lead to ~로이어지다"],a:["prevent 방지하다","hinder 방해하다"],h:"bring+about→가져오다",ex:"The new policy will _____ significant changes.",ek:"새 정책은 중대한 변화를 [일으킬] 것이다"},
  {w:"take apart",m:"~을 분해하다",s:["disassemble 분해하다","dismantle 해체하다"],a:["assemble 조립하다","build 짓다"],h:"take+apart→따로 분리",ex:"He decided to _____ the engine to find the problem.",ek:"그는 문제를 찾기 위해 엔진을 [분해하기로] 했다"},
  {w:"tell from",m:"~을 구분하다",s:["distinguish 구별하다","differentiate 구분하다","discern 분간하다"],a:["confuse 혼동하다","mix up 뒤섞다"],h:"tell+from→구분하다",ex:"Can you _____ butter _____ margarine?",ek:"버터와 마가린을 [구분할] 수 있니?"},
  {w:"build up",m:"확립하다, 개발하다",s:["establish 확립하다","develop 개발하다","strengthen 강화하다"],a:["tear down 허물다","destroy 파괴하다","weaken 약화시키다"],h:"build+up→쌓아올리다",ex:"You need to _____ your confidence.",ek:"자신감을 [키워야] 한다"},
  {w:"take ~ into account",m:"~을 고려하다",s:["consider 고려하다","factor in 계산에넣다","bear in mind 염두에두다"],a:["disregard 무시하다","overlook 간과하다"],h:"account 안에 넣다",ex:"You should _____ the weather when planning the trip.",ek:"여행을 계획할 때 날씨를 [고려해야] 한다"},
  {w:"turn on",m:"(전원을) 켜다",s:["switch on 켜다","activate 활성화하다","power on 전원켜다"],a:["turn off 끄다","shut down 종료하다"],h:"turn+on→스위치 켜다",ex:"Please _____ the air conditioner; it's too hot.",ek:"에어컨 좀 [켜] 줘; 너무 덥다"},
];

// ========== Day 2 Main 60 words ==========
const W2 = [ /* full Day 2 as in original */ ];

// ========== Day 3 Main 60 words ==========
const W3 = [ /* full Day 3 as in original */ ];

// ========== Day 4 Main 60 words ==========
const W4 = [ /* full Day 4 as in original */ ];

// Extremely easy words to exclude from SA pools (too basic for the quiz)
const TOO_EASY = new Set([ /* full list as in original */ ]);

const SAE={};
const SA_HINTS={};

const sh=a=>{const b=[...a];for(let i=b.length-1;i>0;i--){const j=0|Math.random()*(i+1);[b[i],b[j]]=[b[j],b[i]];}return b;};
const chunk=(a,n)=>{const r=[];for(let i=0;i<a.length;i+=n)r.push(a.slice(i,i+n));return r;};
const PS=8;
const blue="#007AFF",t1="#1C1C1E",t2="#8E8E93",t3="#C7C7CC",sep="#E5E5EA",bg="#F2F2F7",card="#FFFFFF";
const font='-apple-system,"SF Pro Display",system-ui,sans-serif';

const extractSA=ws=>{
  const m=new Map();
  ws.forEach(v=>{
    const add=(items,type)=>items.forEach(x=>{
      const ki=x.search(/[~가-힣]/);
      if(ki<1)return;
      const word=x.substring(0,ki).trim(),mean=x.substring(ki).trim();
      if(TOO_EASY.has(word.toLowerCase())) return;
      if(!m.has(word)){
        const e=SAE[word];
        const hint=SA_HINTS[word]||(type==="유의어"?`${v.w}와 비슷한 뜻`:`${v.w}의 반대 뜻`);
        m.set(word,{w:word,m:mean,s:[],a:[],h:hint,ex:e?e[0]:"",ek:e?e[1]:""});
      }
    });
    add(v.s,'유의어');
    add(v.a,'반의어');
  });
  return[...m.values()];
};

window.VOCAB = { W, W2, W3, W4, SAE, sh, chunk, PS, extractSA, blue, t1, t2, t3, sep, bg, card, font };
})();
