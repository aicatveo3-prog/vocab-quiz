// Quiz mode renderers (Exam / FillBlank / Match) — plain JS, no JSX / no build step.
// Registers window.QuizBody. Reads React + data from window at render time.
// Callbacks: onResult(isCorrect) per answered question; onComplete() once when page finished.
// Progress (ans / matched) is lifted to parent so navigating pages keeps solved state.
(function(){
  function h(){ return window.React.createElement.apply(null, arguments); }

  function StarBtn(saved, onClick){
    var V=window.VOCAB;
    return h('button',{onClick:function(e){ e.stopPropagation(); onClick && onClick(); }, title: saved?'저장 해제':'저장하기', style:{border:'none', background:'none', cursor:'pointer', fontSize:18, lineHeight:1, padding:'2px 4px', color: saved?'#FF9F0A':'#CBCBD1', fontFamily:V.font, flex:'none', transition:'color 0.15s'}}, saved?'\u2605':'\u2606');
  }

  function useComplete(done, total, onComplete){
    var R = window.React;
    var fired = R.useRef(false);
    R.useEffect(function(){
      if(total>0 && done===total && !fired.current){ fired.current=true; if(onComplete) onComplete(); }
    }, [done, total]);
  }

  // Deterministic seeded shuffle so options stay the same when remounting a page
  function seededShuffle(arr, seed){
    var a = arr.slice();
    var s = Math.abs(seed) || 1;
    for(var i=a.length-1;i>0;i--){
      s = (s * 16807) % 2147483647;
      var j = s % (i+1);
      var t=a[i]; a[i]=a[j]; a[j]=t;
    }
    return a;
  }
  function wordSeed(w){
    var s=0; for(var i=0;i<w.length;i++) s = ((s<<5)-s) + w.charCodeAt(i) | 0;
    return Math.abs(s) || 1;
  }

  function ScoreCard(props){
    var V=window.VOCAB, blue=V.blue,t1=V.t1,t2=V.t2,t3=V.t3,card=V.card,font=V.font;
    var sc=props.sc, total=props.total, perfect=sc===total;
    return h('div',{style:{background:card,borderRadius:12,padding:'20px 16px',marginTop:16,textAlign:'center',boxShadow:'0 0.5px 0 rgba(0,0,0,0.04)'}},
      h('p',{style:{fontSize:42,fontWeight:700,color:blue,margin:'0 0 2px',fontFamily:font}}, sc, h('span',{style:{fontSize:18,fontWeight:400,color:t3}}, ' / '+total)),
      h('p',{style:{fontSize:13,color:t2,margin:0}}, perfect?'전부 맞았습니다':(total-sc)+'개 틀림')
    );
  }

  function Exam(props){
    var R=window.React, V=window.VOCAB;
    var words=props.words, pool=props.pool, onResult=props.onResult, onComplete=props.onComplete;
    var savedMap=props.savedMap||{}, onToggleSave=props.onToggleSave;
    var progress=props.progress||{}, onProgress=props.onProgress;
    var sh=V.sh, blue=V.blue,t1=V.t1,t2=V.t2,t3=V.t3,sep=V.sep,card=V.card,font=V.font;

    // Deterministic options so remount keeps same choices
    var opts=R.useMemo(function(){
      return words.map(function(v){
        var wrongs = pool.filter(function(x){return x.w!==v.w && x.m!==v.m;})
          .map(function(x){return x.m;})
          .sort();
        var picked = seededShuffle(wrongs, wordSeed(v.w)).slice(0,3);
        return seededShuffle([v.m].concat(picked), wordSeed(v.w+'opts'));
      });
    }, [words, pool]);

    var as=R.useState(function(){ return progress.ans || {}; }), ans=as[0], setAns=as[1];
    var od=R.useState(null), openD=od[0], setOpenD=od[1];

    // Sync up when progress comes from parent (navigation back)
    R.useEffect(function(){
      if(progress.ans && Object.keys(progress.ans).length > Object.keys(ans).length){
        setAns(progress.ans);
      }
    }, [progress]);

    function pick(q,o){
      if(ans[q]!=null)return;
      var ci=opts[q].indexOf(words[q].m);
      var ok=o===ci;
      var na={}; for(var k in ans)na[k]=ans[k];
      na[q]={oi:o,ok:ok};
      setAns(na);
      setOpenD(q);
      if(onProgress) onProgress({ans:na});
      if(onResult) onResult(ok, words[q]._key);
    }
    var done=Object.keys(ans).length, sc=0; for(var kk in ans){ if(ans[kk].ok)sc++; } var total=words.length;
    useComplete(done,total,onComplete);

    var rows=words.map(function(v,qi){
      var a=ans[qi], answered=a!=null, ci=opts[qi].indexOf(v.m), showD=openD===qi&&answered;
      var head=h('div',{style:{display:'flex',alignItems:'center',gap:8,marginBottom:10}},
        h('span',{style:{width:22,height:22,borderRadius:11,background:!answered?sep:a.ok?'#EEF4EF':'#F5EFEF',color:!answered?t2:a.ok?'#7CB686':'#C08888',fontSize:11,fontWeight:600,display:'flex',alignItems:'center',justifyContent:'center',flex:'none'}}, answered?(a.ok?'O':'X'):(qi+1)),
        h('span',{style:{fontSize:15,fontWeight:600,color:t1}}, v.w),
        v.p?h('span',{style:{fontSize:12,color:t3,fontWeight:400,letterSpacing:'-0.2px'}}, '['+v.p+']'):null,
        h('span',{style:{marginLeft:'auto'}}, StarBtn(!!savedMap[v._key], function(){ onToggleSave && onToggleSave(v._key); }))
      );
      var optBtns=opts[qi].map(function(op,oi){
        var isSel=answered&&a.oi===oi, isOk=answered&&oi===ci, isBad=answered&&isSel&&!a.ok, faded=answered&&!isOk&&!isBad;
        return h('button',{key:oi,onClick:function(){pick(qi,oi);},disabled:answered,style:{padding:'8px 10px',borderRadius:8,textAlign:'left',fontSize:12.5,lineHeight:1.4,fontFamily:font,cursor:answered?'default':'pointer',transition:'all 0.12s',border:isOk?'1.5px solid #B5D4BA':isBad?'1.5px solid #D4AAAA':'1px solid '+sep,background:isOk?'#F5F9F5':isBad?'#FBF5F5':'#FAFAFA',color:isOk?'#5A8A60':isBad?'#A86E6E':faded?t2:t1,fontWeight:isOk?500:400}}, op);
      });
      var grid=h('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:6,paddingLeft:30}}, optBtns);
      var detail=null;
      if(answered&&v.h){
        var body=null;
        if(showD){
          var saCols=[];
          if(v.s.length>0) saCols.push(h('div',{key:'s'}, h('span',{style:{fontSize:11,color:t3,fontWeight:500}},'유의어'), v.s.map(function(x,i){return h('p',{key:i,style:{margin:'2px 0'}},x);})));
          if(v.a.length>0) saCols.push(h('div',{key:'a'}, h('span',{style:{fontSize:11,color:t3,fontWeight:500}},'반의어'), v.a.map(function(x,i){return h('p',{key:i,style:{margin:'2px 0'}},x);})));
          body=h('div',{style:{marginTop:8,fontSize:12.5,lineHeight:1.7,color:t2}},
            h('p',{style:{margin:'0 0 6px',color:'#6a6a6a'}}, v.h),
            (v.s.length>0||v.a.length>0)?h('div',{style:{display:'flex',gap:16,flexWrap:'wrap'}}, saCols):null
          );
        }
        detail=h('div',{style:{paddingLeft:30,marginTop:8}},
          h('button',{onClick:function(){setOpenD(showD?null:qi);},style:{border:'none',background:'none',fontSize:11,color:blue,cursor:'pointer',padding:0,fontFamily:font}}, showD?'접기':'연상법 · 유의어 · 반의어'),
          body
        );
      }
      return h('div',{key:qi,style:{padding:'14px 16px',borderBottom:qi<total-1?'0.5px solid '+sep:'none'}}, head, grid, detail);
    });

    return h('div',null,
      h('div',{style:{background:card,borderRadius:12,overflow:'hidden',boxShadow:'0 0.5px 0 rgba(0,0,0,0.04)'}}, rows),
      done===total?h(ScoreCard,{sc:sc,total:total}):null
    );
  }

  function FillBlank(props){
    var R=window.React, V=window.VOCAB;
    var words=props.words, pool=props.pool, onResult=props.onResult, onComplete=props.onComplete;
    var savedMap=props.savedMap||{}, onToggleSave=props.onToggleSave;
    var progress=props.progress||{}, onProgress=props.onProgress;
    var sh=V.sh, blue=V.blue,t1=V.t1,t2=V.t2,t3=V.t3,sep=V.sep,card=V.card,font=V.font;
    var validWords=words.filter(function(v){return v.ex;});

    var opts=R.useMemo(function(){
      return validWords.map(function(v){
        var wrongs = pool.filter(function(x){return x.w!==v.w;})
          .map(function(x){return x.w;})
          .sort();
        var picked = seededShuffle(wrongs, wordSeed(v.w)).slice(0,3);
        return seededShuffle([v.w].concat(picked), wordSeed(v.w+'fill'));
      });
    }, [validWords, pool]);

    var as=R.useState(function(){ return progress.ans || {}; }), ans=as[0], setAns=as[1];

    R.useEffect(function(){
      if(progress.ans && Object.keys(progress.ans).length > Object.keys(ans).length){
        setAns(progress.ans);
      }
    }, [progress]);

    function pick(q,o){
      if(ans[q]!=null)return;
      var ok=opts[q][o]===validWords[q].w;
      var na={}; for(var k in ans)na[k]=ans[k];
      na[q]={oi:o,ok:ok};
      setAns(na);
      if(onProgress) onProgress({ans:na});
      if(onResult) onResult(ok, validWords[q]._key);
    }
    var done=Object.keys(ans).length, sc=0; for(var kk in ans){ if(ans[kk].ok)sc++; } var total=validWords.length;
    useComplete(done,total,onComplete);
    function renderKor(ek){ if(!ek)return null; return ek.split(/(\[.*?\])/).map(function(p,i){ return p.charAt(0)==='['?h('span',{key:i,style:{color:blue,fontWeight:600}},p.slice(1,-1)):h('span',{key:i},p); }); }
    function findMeaning(w){ var f=pool.find(function(x){return x.w===w;}); return f?f.m:''; }

    var rows=validWords.map(function(v,qi){
      var a=ans[qi], answered=a!=null, ci=opts[qi].indexOf(v.w);
      var exParts=v.ex.split('_____'), sentence=[];
      exParts.forEach(function(part,i){
        var seg=[part];
        if(i<exParts.length-1){ seg.push(h('span',{key:'b'+i,style:{display:'inline-block',borderBottom:'2px solid '+(answered?(a.ok?'#B5D4BA':'#D4AAAA'):blue),minWidth:80,textAlign:'center',padding:'2px 4px',margin:'0 2px',color:answered?(a.ok?'#5A8A60':'#A86E6E'):blue,fontWeight:600,fontSize:13}}, answered?v.w:'?')); }
        sentence.push(h('span',{key:i}, seg));
      });
      var optBtns=opts[qi].map(function(op,oi){
        var isSel=answered&&a.oi===oi, isOk=answered&&oi===ci, isBad=answered&&isSel&&!a.ok;
        var meaning=answered?findMeaning(op):'';
        return h('button',{key:oi,onClick:function(){pick(qi,oi);},disabled:answered,style:{padding:'8px 10px',borderRadius:8,textAlign:'center',fontSize:13,lineHeight:1.4,fontFamily:font,fontWeight:500,cursor:answered?'default':'pointer',transition:'all 0.12s',border:isOk?'1.5px solid #B5D4BA':isBad?'1.5px solid #D4AAAA':'1px solid '+sep,background:isOk?'#F5F9F5':isBad?'#FBF5F5':'#FAFAFA',color:isOk?'#5A8A60':isBad?'#A86E6E':t1}},
          h('span',null, op),
          (answered&&meaning)?h('span',{style:{display:'block',fontSize:11,color:isOk?'#5A8A60':isBad?'#A86E6E':t2,marginTop:3,fontWeight:400}}, meaning):null
        );
      });
      return h('div',{key:qi,style:{padding:'14px 16px',borderBottom:qi<total-1?'0.5px solid '+sep:'none'}},
        h('div',{style:{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:8,margin:'0 0 6px'}},
          h('p',{style:{fontSize:12,color:t2,lineHeight:1.6,margin:0,flex:1}}, renderKor(v.ek)),
          StarBtn(!!savedMap[v._key], function(){ onToggleSave && onToggleSave(v._key); })
        ),
        h('p',{style:{fontSize:13.5,color:t1,margin:'0 0 12px',lineHeight:1.6,fontWeight:500}}, sentence),
        h('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:6}}, optBtns)
      );
    });

    return h('div',null,
      h('div',{style:{background:card,borderRadius:12,overflow:'hidden',boxShadow:'0 0.5px 0 rgba(0,0,0,0.04)'}}, rows),
      done===total?h(ScoreCard,{sc:sc,total:total}):null
    );
  }

  function Match(props){
    var R=window.React, V=window.VOCAB;
    var words=props.words, onResult=props.onResult, onComplete=props.onComplete;
    var progress=props.progress||{}, onProgress=props.onProgress;
    var sh=V.sh, blue=V.blue,t1=V.t1,t2=V.t2,t3=V.t3,sep=V.sep,card=V.card,font=V.font;

    // Deterministic order for meanings
    var ord=R.useMemo(function(){
      var idxs = Array.from({length:words.length},function(_,i){return i;});
      return seededShuffle(idxs, wordSeed(words.map(function(w){return w.w;}).join(',')));
    }, [words]);

    var ss=R.useState(null), sel=ss[0], setSel=ss[1];
    var ms=R.useState(function(){
      return new Set(progress.matched || []);
    }), matched=ms[0], setMatched=ms[1];
    var ws=R.useState(null), wrong=ws[0], setWrong=ws[1];

    R.useEffect(function(){
      if(progress.matched && progress.matched.length > matched.size){
        setMatched(new Set(progress.matched));
      }
    }, [progress]);

    var n=words.length, done=matched.size;
    useComplete(done,n,onComplete);

    function clickW(i){ if(matched.has(i))return; setSel(sel===i?null:i); setWrong(null); }
    function clickM(p){
      if(sel===null)return;
      var a=ord[p];
      if(matched.has(a))return;
      if(sel===a){
        var ns=new Set(matched); ns.add(a); setMatched(ns); setSel(null);
        if(onProgress) onProgress({matched: Array.from(ns)});
        if(onResult)onResult(true, words[a]._key);
      } else {
        setWrong({w:sel,m:p});
        if(onResult)onResult(false, words[sel]&&words[sel]._key);
        setTimeout(function(){setWrong(null);setSel(null);},400);
      }
    }
    function itemS(active,isM,isWr){ return {display:'block',width:'100%',textAlign:'center',padding:'11px 8px',border:'none',borderBottom:'0.5px solid '+(isM?'transparent':sep),fontSize:12.5,fontFamily:font,lineHeight:1.4,cursor:isM?'default':'pointer',transition:'all 0.15s',background:isWr?'#FFEBEE':active?'#F0F5FF':isM?'#F9F9F9':'transparent',color:isWr?'#FF3B30':active?blue:isM?t2:t1,fontWeight:active?600:400,textDecoration:isM?'line-through':'none'}; }
    var dots=words.map(function(_,i){ return h('div',{key:i,style:{width:8,height:8,borderRadius:4,transition:'all 0.2s',background:matched.has(i)?'#34C759':sel===i?blue:sep}}); });
    var leftBtns=words.map(function(v,i){ var st=itemS(sel===i,matched.has(i),wrong&&wrong.w===i); st.fontWeight=sel===i?600:500; st.fontSize=v.w.length>14?11:12.5; st.borderBottom=i<n-1?'0.5px solid '+(matched.has(i)?'transparent':sep):'none'; return h('button',{key:i,onClick:function(){clickW(i);},style:st}, v.w); });
    var rightBtns=ord.map(function(ai,p){ var st=itemS(false,matched.has(ai),wrong&&wrong.m===p); st.borderBottom=p<n-1?'0.5px solid '+(matched.has(ai)?'transparent':sep):'none'; return h('button',{key:p,onClick:function(){clickM(p);},style:st}, words[ai].m); });
    return h('div',null,
      h('div',{style:{display:'flex',justifyContent:'center',gap:4,marginBottom:16}}, dots),
      done===n?h('div',{style:{background:card,borderRadius:12,padding:'20px 16px',marginBottom:16,textAlign:'center',boxShadow:'0 0.5px 0 rgba(0,0,0,0.04)'}}, h('p',{style:{fontSize:15,fontWeight:600,color:t1,margin:0}},'전부 연결했습니다')):null,
      h('p',{style:{fontSize:12,color:t2,textAlign:'center',marginBottom:14}},'단어를 선택하고 뜻을 찾으세요'),
      h('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}},
        h('div',null, h('p',{style:{fontSize:11,color:t3,textAlign:'center',marginBottom:6,fontWeight:500}},'단어'), h('div',{style:{background:card,borderRadius:12,overflow:'hidden',boxShadow:'0 0.5px 0 rgba(0,0,0,0.04)'}}, leftBtns)),
        h('div',null, h('p',{style:{fontSize:11,color:t3,textAlign:'center',marginBottom:6,fontWeight:500}},'뜻'), h('div',{style:{background:card,borderRadius:12,overflow:'hidden',boxShadow:'0 0.5px 0 rgba(0,0,0,0.04)'}}, rightBtns))
      )
    );
  }

  function QuizBody(props){
    var common={ words:props.words, pool:props.pool, onResult:props.onResult, onComplete:props.onComplete, savedMap:props.savedMap, onToggleSave:props.onToggleSave, progress:props.progress, onProgress:props.onProgress };
    if(props.mode==='exam') return h(Exam, Object.assign({key:props.sig}, common));
    if(props.mode==='fill') return h(FillBlank, Object.assign({key:props.sig}, common));
    return h(Match, Object.assign({key:props.sig}, common));
  }

  window.QuizBody = QuizBody;
})();
