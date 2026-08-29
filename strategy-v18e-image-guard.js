(() => {
  const $ = (s, r=document) => r.querySelector(s);

  const set = (img, spec) => {
    if (!img || !spec || !spec.primary) return;
    img.dataset.assetId = spec.id;
    img.dataset.artist = spec.artist;
    img.dataset.section = spec.section;
    img.dataset.originalVisual = spec.originalVisual;
    img.dataset.photoSource = spec.source || '';
    img.dataset.fallbackApplied = '0';
    img.removeAttribute('onerror');
    img.onerror = null;
    img.src = spec.primary;
    if (spec.fallback) {
      img.addEventListener('error', () => {
        if (img.dataset.fallbackApplied === '1') return;
        img.dataset.fallbackApplied = '1';
        img.src = spec.fallback;
      }, { once:true });
    }
  };

  const tuide = $('[data-route-page="tuide"]');
  if (tuide) {
    set($('.tuide-hero-media img', tuide), {
      id:'TUIDE-HERO-SBS-20260803', artist:'TUIDE', section:'Hero',
      originalVisual:'ABD 7-member debut visual / colorful studio letters',
      primary:'https://img.sbs.co.kr/newsnet/etv/upload/2026/08/03/30001078725.jpg',
      fallback:'https://i.ytimg.com/vi/dmx4lrSuRX8/maxresdefault.jpg',
      source:'ABD / SBS'
    });

    set($('.tuide-compare img[alt="TUIDE group from official video thumbnail"]', tuide), {
      id:'TUIDE-COMPARE-WEPLAY', artist:'TUIDE', section:'Compare',
      originalVisual:'STEP TWO — WE PLAY / Thailand street visual',
      primary:'https://i.ytimg.com/vi/gZoIV96ipIk/maxresdefault.jpg',
      fallback:null,
      source:'ABD official STEP TWO — WE PLAY'
    });

    set($('.ssp-tuide-reference img[alt="TUIDE group"]', tuide), {
      id:'TUIDE-BENCHMARK-WEPLAY-BRIGHT', artist:'TUIDE', section:'Benchmark',
      originalVisual:'WE PLAY bright outdoor seven-member group photo',
      primary:'https://e.usen.com/image/06.%20TUIDE.jpg',
      fallback:'https://i.ytimg.com/vi/r0KCLM79ab8/maxresdefault.jpg',
      source:'ABD-provided WE PLAY promotional group photo / USEN'
    });

    set($('.tuide-compare img[alt="OURBIRTHDAY seven-member group"]', tuide), {
      id:'OURBIRTHDAY-COMPARE-UPLOADED-A', artist:'OURBIRTHDAY', section:'Compare',
      originalVisual:'Uploaded 7-member close group portrait / white background',
      primary:window.__OBD_COMPARE_VISUAL__,
      fallback:null,
      source:'User-supplied real 7-member group photo A'
    });

    set($('.ssp-tuide-reference img[alt="OURBIRTHDAY group"]', tuide), {
      id:'OURBIRTHDAY-BENCHMARK-UPLOADED-B', artist:'OURBIRTHDAY', section:'Benchmark',
      originalVisual:'Uploaded 7-member blue OBD group photo',
      primary:window.__OBD_BENCHMARK_VISUAL__,
      fallback:null,
      source:'User-supplied real 7-member group photo B'
    });
  }

  const tws = $('[data-route-page="tws"]');
  if (tws) {
    set($('.ssp-tws-benchmark img[alt="TWS group"]', tws), {
      id:'TWS-JAPAN-BENCHMARK-PHOTO-B', artist:'TWS', section:'Japan benchmark',
      originalVisual:'TWS JAPAN 1st Single Official Photo B',
      primary:'https://phinf.wevpstatic.net/MjAyNTA1MTVfODYg/MDAxNzQ3MzA0MTcyMzcw.mF7k1_SjAyKTAlmLfirzUi-GCOKiuWxm_zIEpLQNN3cg.RpPmGqJmhSooMiKPe_PBoKT5AkiSCNGNNpv0mjADQ4sg.JPEG/bf0b7ea2-9785-4480-8710-e621d8311238.jpeg?type=w670',
      fallback:'https://phinf.wevpstatic.net/MjAyNTA1MTRfMTUy/MDAxNzQ3MjI1NDUyNDc0.z9FsGtoTi0Cki8_f65aRqYI3yvbqXjtrxaH8LIECBgEg.2ZGY0BSz-aK3u9wqHlTRqAdfdql9wpsWEGKm0vBq2VYg.PNG/f5ded2aa-d31f-41c6-bdea-d7ac758a7ece.png?type=w670',
      source:'Weverse official photo B / photo A fallback'
    });
  }

  document.documentElement.dataset.imageRegistry = '18f-visual-final';
})();