/**
 * audio.js — 단어 발음 mp3 재생
 *
 * 원어민 TTS로 만들어 둔 단어별 mp3를 재생한다. 파일은 audio/ 폴더에
 * "단어를 슬러그로 바꾼 이름.mp3" 로 들어 있다 (예: "abide by" → abide_by.mp3).
 *
 * 슬러그 규칙은 TTS 분할 도구(tts-splitter/app.py)의 slug()와 같아야 한다.
 *   소문자로 → 영숫자 외 문자는 '_' → 앞뒤 '_' 제거
 *
 * 재생은 사용자 클릭 안에서만 일어난다(자동재생 정책 회피). 버튼을 누르면
 * 같은 단어의 재생 중이던 소리는 멈추고 처음부터 다시 튼다.
 */
window.Audio_ = (function () {
  var BASE = 'audio/';

  function slug(word) {
    return String(word || '')
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_+|_+$/g, '');
  }

  function srcFor(word) {
    var s = slug(word);
    return s ? BASE + s + '.mp3' : null;
  }

  var current = null;   // 재생 중인 Audio — 새 재생 시 멈춘다

  /** 단어 발음을 재생한다. 재생할 수 없으면 조용히 실패한다. */
  function play(word) {
    var src = srcFor(word);
    if (!src) return null;
    try {
      if (current) { current.pause(); current = null; }
      var a = new Audio(src);
      a.preload = 'auto';
      current = a;
      var p = a.play();
      if (p && p.catch) p.catch(function () {});   // 로드 실패·정책 거부 무시
      return a;
    } catch (e) {
      return null;
    }
  }

  /* 버튼 하나를 만들 때 공통으로 쓰는 클래스. 클릭 시에만 재생한다. */
  function buttonHTML(word, extraClass) {
    return '<button type="button" class="spk' + (extraClass ? ' ' + extraClass : '') +
      '" data-say="' + String(word).replace(/"/g, '&quot;') + '" ' +
      'aria-label="발음 듣기"><span aria-hidden="true">🔊</span></button>';
  }

  /* 문서 전체에서 .spk[data-say] 클릭을 위임 처리한다.
     innerHTML로 새로 그려지는 화면도 다시 바인딩할 필요가 없도록. */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('.spk[data-say]') : null;
    if (!btn) return;
    e.preventDefault();
    play(btn.getAttribute('data-say'));
  });

  return { play: play, srcFor: srcFor, slug: slug, buttonHTML: buttonHTML };
})();
