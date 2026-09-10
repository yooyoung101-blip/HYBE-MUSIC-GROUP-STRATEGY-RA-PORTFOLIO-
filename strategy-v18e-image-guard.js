(() => {
  const $ = (s, r=document) => r.querySelector(s);

  const set = (img, spec) => {
    if (!img || !spec || !spec.primary) return;
    if (img.dataset.assetId === spec.id && img.getAttribute('src') === spec.primary) return;
    img.dataset.assetId = spec.id;
    img.dataset.artist = spec.artist;
    img.dataset.section = spec.section;
    img.dataset.originalVisual = spec.originalVisual;
    img.dataset.photoSource = spec.source || '';
    img.dataset.sourcePage = spec.sourcePage || '';
    img.dataset.fallbackApplied = '0';
    img.removeAttribute('onerror');
    img.onerror = null;
    img.removeAttribute('srcset');
    img.srcset = '';
    img.loading = 'eager';
    img.decoding = 'async';
    img.src = spec.primary;
    if (spec.fallback) {
      img.addEventListener('error', () => {
        if (img.dataset.fallbackApplied === '1') return;
        img.dataset.fallbackApplied = '1';
        img.src = spec.fallback;
      }, { once:true });
    }
  };

  const specs = {
    tuideHero: {
      selector: '.tuide-hero-media img',
      id:'TUIDE-HERO-SBS-20260803', artist:'TUIDE', section:'Hero',
      originalVisual:'ABD 7-member debut visual / colorful studio letters',
      primary:'https://img.sbs.co.kr/newsnet/etv/upload/2026/08/03/30001078725.jpg',
      fallback:'https://i.ytimg.com/vi/dmx4lrSuRX8/maxresdefault.jpg',
      source:'ABD / SBS',
      sourcePage:'https://news.sbs.co.kr/english/article.do?cooper=SBSNEWSEND&news_id=N1008687557&oaid=N1008694910&plink=POP'
    },
    tuideCompare: {
      selector: '.tuide-compare img[alt="TUIDE group from official video thumbnail"]',
      id:'TUIDE-COMPARE-TUNEPLAY-UNIFORM', artist:'TUIDE', section:'Compare',
      originalVisual:'TUNE & PLAY seven-member courtyard portrait / compare-sized crop',
      primary:'assets/images/tuide-compare-uniform.jpeg',
      fallback:'https://e.usen.com/image/06.%20TUIDE.jpg',
      source:'ABD-provided TUIDE promotional group photo / USEN',
      sourcePage:'https://e.usen.com/news/news-release/tuide-1st-ep-tune-play.html'
    },
    tuideReference: {
      selector: '.ssp-tuide-reference img[alt="TUIDE group"]',
      id:'TUIDE-BENCHMARK-TUNEPLAY-UNIFORM', artist:'TUIDE', section:'Reference Scale',
      originalVisual:'TUNE & PLAY seven-member wall portrait / benchmark-sized crop',
      primary:'assets/images/tuide-benchmark-uniform.jpeg',
      fallback:'https://sportsseoulweb.jp/files/user/2026/ic202608248819045781634081567087699671971656290870008386.jpg',
      source:'TUIDE official promotional group image / Sports Seoul Japan',
      sourcePage:'https://sportsseoulweb.jp/star_topic/id%3D157495'
    },
    ourbirthdayCompare: {
      selector: '.tuide-compare img[alt="OURBIRTHDAY seven-member group"]',
      id:'OURBIRTHDAY-COMPARE-CONCEPT-HQ', artist:'OURBIRTHDAY', section:'Compare',
      originalVisual:'7-member official concept-group portrait / clear full lineup',
      primary:'https://image.idntimes.com/post/20260810/ot7-900x605_16240960-a204-4cca-b5ee-8dbba1752fa6.jpg?tr=w-1200',
      fallback:'https://www.allkpop.com/upload/2026/08/content/151823/1786832639-image.png',
      source:'OURBIRTHDAY official concept group image / editorial high-resolution mirror',
      sourcePage:'https://world.kbs.co.kr/service/contents_view.htm?board_seq=470524&id=&lang=k&menu_cate=enternews&page='
    },
    ourbirthdayReference: {
      selector: '.ssp-tuide-reference img[alt="OURBIRTHDAY group"]',
      id:'OURBIRTHDAY-BENCHMARK-OUTDOOR-UNIFORM', artist:'OURBIRTHDAY', section:'Reference Scale',
      originalVisual:'7-member official outdoor group photo / benchmark-sized crop',
      primary:'assets/images/ourbirthday-benchmark-uniform.jpeg',
      fallback:'https://chukkae.com/media/images/artists/ourbirthday/283477e28cef3ef14661/1280.webp',
      source:'INNIT Entertainment official outdoor group photo via Chukkae',
      sourcePage:'https://chukkae.com/artists/ourbirthday'
    },
    twsJapanBenchmark: {
      selector: '.ssp-tws-benchmark img[alt="TWS group"]',
      id:'TWS-JAPAN-BENCHMARK-PHOTO-B', artist:'TWS', section:'Japan benchmark',
      originalVisual:'TWS JAPAN 1st Single Official Photo B',
      primary:'https://phinf.wevpstatic.net/MjAyNTA1MTVfODYg/MDAxNzQ3MzA0MTcyMzcw.mF7k1_SjAyKTAlmLfirzUi-GCOKiuWxm_zIEpLQNN3cg.RpPmGqJmhSooMiKPe_PBoKT5AkiSCNGNNpv0mjADQ4sg.JPEG/bf0b7ea2-9785-4480-8710-e621d8311238.jpeg?type=w670',
      fallback:'https://phinf.wevpstatic.net/MjAyNTA1MTRfMTUy/MDAxNzQ3MjI1NDUyNDc0.z9FsGtoTi0Cki8_f65aRqYI3yvbqXjtrxaH8LIECBgEg.2ZGY0BSz-aK3u9wqHlTRqAdfdql9wpsWEGKm0vBq2VYg.PNG/f5ded2aa-d31f-41c6-bdea-d7ac758a7ece.png?type=w670',
      source:'Weverse official photo B / photo A fallback',
      sourcePage:'https://weverse.io/tws/media/1-159218393?hl=ko'
    }
  };

  const applyAll = () => {
    const tuide = $('[data-route-page="tuide"]');
    if (tuide) {
      set($(specs.tuideHero.selector, tuide), specs.tuideHero);
      set($(specs.tuideCompare.selector, tuide), specs.tuideCompare);
      set($(specs.tuideReference.selector, tuide), specs.tuideReference);
      set($(specs.ourbirthdayCompare.selector, tuide), specs.ourbirthdayCompare);
      set($(specs.ourbirthdayReference.selector, tuide), specs.ourbirthdayReference);
    }
    const tws = $('[data-route-page="tws"]');
    if (tws) set($(specs.twsJapanBenchmark.selector, tws), specs.twsJapanBenchmark);
  };

  applyAll();
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', applyAll, {once:true});
  window.addEventListener('load', applyAll, {once:true});

  const observer = new MutationObserver((mutations) => {
    if (mutations.some(m => m.addedNodes && m.addedNodes.length)) applyAll();
  });
  observer.observe(document.documentElement, {childList:true, subtree:true});

  document.documentElement.dataset.imageRegistry = '18o-clear-uniform-group-photos';
})();
