(() => {
  const fixes = new Map([
    ['https://www.billboard-japan.com/d_news/detail/152757/2','https://www.billboard-japan.com/d_news/detail/139630/2'],
    ['https://www.billboard-japan.com/charts/detail?a=sales&day=11&month=03&year=2024','https://www.billboard-japan.com/d_news/detail/135378/2']
  ]);
  document.querySelectorAll('.ssp-scene a[href]').forEach(a=>{
    const next=fixes.get(a.getAttribute('href'));
    if(next) a.setAttribute('href',next);
  });

  document.querySelectorAll('.ssp-priority-grid h3').forEach(h=>{
    if(h.textContent.trim()==='RETENTION BEFORE SCALE.') h.textContent='RETENTION IS THE D+14 PRIORITY.';
  });

  document.querySelectorAll('.ssp-tws-qual .ssp-readline p').forEach(p=>{
    p.textContent='공개 팬 토론에서는 “fresh/youthful”이 TWS를 설명하는 표현으로 반복됐습니다. 동시에 일부 토론에서 곡 구조의 반복감도 언급됐습니다. 다음 발매에서는 기존 이미지를 유지하면서 타이틀과 B-side의 save·repeat listening을 나눠 사운드 확장에 대한 반응을 확인합니다.';
  });
})();