(() => {
  const $=(s,r=document)=>r.querySelector(s);
  const set=(img,primary,fallback,id)=>{
    if(!img)return;
    img.dataset.fallbackApplied='1';
    img.dataset.assetId=id;
    img.removeAttribute('onerror');
    img.onerror=null;
    img.src=primary;
    if(fallback){
      img.addEventListener('error',()=>{
        if(img.dataset.uniqueFallback==='1')return;
        img.dataset.uniqueFallback='1';
        img.src=fallback;
      },{once:true});
    }
  };

  const tuide=$('[data-route-page="tuide"]');
  if(tuide){
    set($('.tuide-hero-media img',tuide),
      'https://img.sbs.co.kr/newsnet/etv/upload/2026/08/03/30001078725.jpg',
      'https://i.ytimg.com/vi/dmx4lrSuRX8/maxresdefault.jpg',
      'TUIDE-HERO-SBS-20260803');
    set($('.tuide-compare img[alt="TUIDE group from official video thumbnail"]',tuide),
      'https://i.ytimg.com/vi/gZoIV96ipIk/maxresdefault.jpg',null,'TUIDE-COMPARE-WEPLAY');
    set($('.ssp-tuide-reference img[alt="TUIDE group"]',tuide),
      'https://i.ytimg.com/vi/OeMwAsRgtS4/maxresdefault.jpg',null,'TUIDE-BENCHMARK-STEPTHREE');
    set($('.tuide-compare img[alt="OURBIRTHDAY seven-member group"]',tuide),
      'https://image.idntimes.com/post/20260810/ot7-900x605_16240960-a204-4cca-b5ee-8dbba1752fa6.jpg?tr=w-1200',
      'https://i.ytimg.com/vi/sJKiaojk-to/maxresdefault.jpg','OURBIRTHDAY-COMPARE-IDNTIMES');
    set($('.ssp-tuide-reference img[alt="OURBIRTHDAY group"]',tuide),
      'https://i.ytimg.com/vi/0B809sqOuDE/maxresdefault.jpg',
      'https://i.ytimg.com/vi/7Yz32duW5us/maxresdefault.jpg','OURBIRTHDAY-BENCHMARK-TEASER1');
  }

  const tws=$('[data-route-page="tws"]');
  if(tws){
    set($('.ssp-tws-benchmark img[alt="TWS group"]',tws),
      'https://phinf.wevpstatic.net/MjAyNTA1MTVfODYg/MDAxNzQ3MzA0MTcyMzcw.mF7k1_SjAyKTAlmLfirzUi-GCOKiuWxm_zIEpLQNN3cg.RpPmGqJmhSooMiKPe_PBoKT5AkiSCNGNNpv0mjADQ4sg.JPEG/bf0b7ea2-9785-4480-8710-e621d8311238.jpeg?type=w670',
      'https://phinf.wevpstatic.net/MjAyNTA1MTRfMTUy/MDAxNzQ3MjI1NDUyNDc0.z9FsGtoTi0Cki8_f65aRqYI3yvbqXjtrxaH8LIECBgEg.2ZGY0BSz-aK3u9wqHlTRqAdfdql9wpsWEGKm0vBq2VYg.PNG/f5ded2aa-d31f-41c6-bdea-d7ac758a7ece.png?type=w670',
      'TWS-JAPAN-BENCHMARK-PHOTO-B');
  }
})();
