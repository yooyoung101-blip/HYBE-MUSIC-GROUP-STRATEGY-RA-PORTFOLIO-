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

    const mapRead=$('.fp-map-read',tuide);
    if(mapRead){
      const rows=$$('p',mapRead);
      if(rows[0]) rows[0].textContent='같은 날짜의 공개 스냅샷에서 TUIDE의 SUN KISS MV는 5.41M, OURBIRTHDAY의 SQUEEZY는 3.17M을 기록했습니다. Melon D30 Hot100에서는 SQUEEZY가 #64에 남아 있었고 SUN KISS는 해당 스냅샷에 진입하지 않았습니다.';
      if(rows[1]) rows[1].textContent='현재 1순위는 TUIDE의 국내 repeat listening과 follow conversion 확인입니다. D+7·D+14에서 retention 신호를 확인한 뒤 추가 discovery 투입 규모를 결정합니다.';
      if(rows[2]) rows[2].innerHTML='<b>Strategy + Label Marketing + Data</b> — Melon D+7/D+14, repeat listening, save/follow conversion, YouTube returning viewers를 같은 cohort로 업데이트합니다.';
    }

    const intro=$('.fp-positioning-intro p',tuide);
    if(intro) intro.textContent='8월 27일 Melon 발매 30일 Hot100과 8월 28일 공개 MV 조회 스냅샷을 같은 화면에 놓았습니다. 두 팀은 데뷔일이 달라 이 값은 현재 위치를 읽는 public proxy로만 사용했습니다.';
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

  const motivation=$('[data-route-page="tws"] .fp-tws-qual-method');
  if(motivation){
    const reads=$$('.fp-motivation-flow article',motivation);
    if(reads[0]){
      const p=$$('.fp-motivation-flow article:first-child p',motivation);
      if(p[0]) p[0].textContent='영문 표본에서는 signature sound가 유입 이유로 반복해서 언급됐습니다. 사운드 변화가 커진 시기에는 comeback awareness와 concept fit에 대한 우려도 함께 나타났습니다.';
      if(p[1]) p[1].textContent='타이틀 사운드 확장 뒤 D+7 repeat와 save가 어느 수준까지 유지되는가?';
    }
    if(reads[1]){
      const p=$$('.fp-motivation-flow article:nth-child(2) p',motivation);
      if(p[0]) p[0].textContent='일본 표본에서는 일본어 소통, 현장 참여, 팬들 간 교류가 같은 후기에서 함께 나타났습니다. 현장형 fandom depth를 설명하는 동시 신호로 기록했습니다.';
      if(p[1]) p[1].textContent='localized live touchpoint와 membership, ticket sell-through, catalogue migration이 같은 기간에 함께 움직이는가?';
    }
    const bias=$$('.fp-qual-methodology>div',motivation).find(x=>x.querySelector('span')?.textContent.trim()==='BIAS');
    if(bias){const p=$('p',bias);if(p)p.textContent='자발적으로 글을 남긴 이용자를 수집해 적극 팬 비중이 높습니다. 시장 전체 팬덤을 대표하는 표본으로 해석하지 않았습니다.';}
  }

  const trajectory=$('[data-route-page="tws"] .ssp-tws-trajectory');
  if(trajectory){
    const links=$$('.ssp-reference-sources a',trajectory);
    const tryLink=links.find(a=>(a.textContent||'').toUpperCase().includes('TRY WITH US'));
    if(tryLink) tryLink.textContent='TRY WITH US / HANTEO DATA VIA SOOMPI ↗';
  }

  /* Image src/fallback ownership is centralized in strategy-v18e-image-guard.js. */
  document.documentElement.dataset.finalQa='18e-visual-final';
})();