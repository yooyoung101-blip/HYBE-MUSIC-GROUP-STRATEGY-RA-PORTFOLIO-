(() => {
  const $=(s,r=document)=>r.querySelector(s);
  const $$=(s,r=document)=>[...r.querySelectorAll(s)];

  const tuide=$('[data-route-page="tuide"]');
  if(tuide){
    $$('*',tuide).forEach(el=>{
      if(el.children.length===0 && el.textContent.includes('5.59M')) el.textContent=el.textContent.replaceAll('5.59M','5.41M');
    });
    const point=$('.fp-map-point.tuide',tuide);
    if(point) point.style.setProperty('--x','0%');
  }

  const qual=$('[data-route-page="tws"] .ssp-tws-qual');
  if(qual){
    const head=$('.ssp-scene-head small',qual);
    if(head) head.textContent='4 PUBLIC REDDIT THREADS · DIRECTIONAL / NON-REPRESENTATIVE';
    const read=$('.ssp-readline p',qual);
    if(read) read.textContent='영문 표본에서는 fresh/youthful과 signature sound가 반복해서 언급됐습니다. concept shift와 repetition 우려도 함께 나타났습니다. 다음 release에서는 D+7 repeat·save와 qualitative theme shift를 함께 확인합니다.';
    const links=$$('.ssp-reference-sources a',qual);
    const refs=[
      ['https://www.reddit.com/r/kpop/comments/19crg3j','PLOT TWIST THREAD ↗'],
      ['https://www.reddit.com/r/kpop/comments/1k48yr8','COUNTDOWN THREAD ↗'],
      ['https://www.reddit.com/r/kpopthoughts/comments/1kc6a18','SOUND / REPETITION THREAD ↗'],
      ['https://www.reddit.com/r/kpopthoughts/comments/1o7i15m','COMEBACK AWARENESS THREAD ↗']
    ];
    refs.forEach((r,i)=>{if(links[i]){links[i].href=r[0];links[i].textContent=r[1];}});
  }

  const trajectory=$('[data-route-page="tws"] .ssp-tws-trajectory');
  if(trajectory){
    const links=$$('.ssp-reference-sources a',trajectory);
    const tryLink=links.find(a=>(a.textContent||'').toUpperCase().includes('TRY WITH US'));
    if(tryLink) tryLink.textContent='TRY WITH US / HANTEO DATA VIA SOOMPI ↗';
  }

  document.documentElement.dataset.finalQa='18a';
})();