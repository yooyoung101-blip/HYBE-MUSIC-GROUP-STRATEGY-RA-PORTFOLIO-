(() => {
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];

  /* ---------------------------------------------------------
     01. TUIDE POSITIONING — correct Melon D30 definition
     and remove cross-provider MV ranking.
  --------------------------------------------------------- */
  const pos = $('[data-route-page="tuide"] .fp-tuide-positioning');
  if (pos) {
    const headSmall = $('.fp-scene-head small', pos);
    if (headSmall) headSmall.textContent = 'SAME-CALENDAR PUBLIC PROXY · NOT D+N RETENTION';

    const title = $('.fp-positioning-intro h2', pos);
    if (title) title.innerHTML = 'CURRENT DOMESTIC SIGNAL.<br><i>D+N RETENTION STILL OPEN.</i>';

    const intro = $('.fp-positioning-intro p', pos);
    if (intro) intro.textContent = '8월 27일 Melon Hot100의 발매 30일 이내 곡 범위를 같은 캘린더 시점으로 확인했습니다. 두 팀의 데뷔일이 달라 현재 순위는 동일 경과일 성과가 아니라 시장 내 현재 위치를 읽는 public proxy로 사용했습니다.';

    const confidence = $('.fp-confidence', pos);
    if (confidence) {
      const b = $('b', confidence);
      const p = $('p', confidence);
      if (b) b.textContent = 'MEDIUM / MELON';
      if (p) p.textContent = 'Melon은 동일 provider의 공식 스냅샷입니다. 영상 조회는 provider가 달라 cross-artist score에서 제외했습니다.';
    }

    const mapWrap = $('.fp-map-wrap', pos);
    if (mapWrap) mapWrap.classList.add('fp-single-axis-map');

    const mapTitle = $('.fp-map-title', pos);
    if (mapTitle) {
      const b = $('b', mapTitle);
      const s = $('span', mapTitle);
      if (b) b.textContent = 'CURRENT MELON POSITION';
      if (s) s.textContent = 'HOT100 · RELEASE ≤30 DAYS · 27 AUG 2026 21:00 KST';
    }

    const yLabel = $('.fp-y-label', pos);
    if (yLabel) yLabel.textContent = 'VIDEO REACH / SUPPORTING SNAPSHOT ONLY';
    const yTicks = $('.fp-y-ticks', pos);
    if (yTicks) yTicks.innerHTML = '';

    const xLabel = $('.fp-x-label', pos);
    if (xLabel) xLabel.innerHTML = '<span>NOT LISTED</span><b>CURRENT MELON HOT100 PRESENCE / RELEASE ≤30 DAYS</b><span>#1 →</span>';

    const tuidePoint = $('.fp-map-point.tuide', pos);
    if (tuidePoint) {
      tuidePoint.style.setProperty('--x', '2%');
      tuidePoint.style.setProperty('--y', '50%');
      tuidePoint.dataset.tip = 'TUIDE|Current Melon Hot100: not listed|Chart scope: tracks released within 30 days|Snapshot: 27 Aug 2026 21:00 KST|Source: Melon official|Different debut dates; same-calendar position only';
      const small = $('small', tuidePoint);
      if (small) small.textContent = 'MELON —';
    }

    const obdPoint = $('.fp-map-point.ourbirthday', pos);
    if (obdPoint) {
      obdPoint.style.setProperty('--x', '37%');
      obdPoint.style.setProperty('--y', '50%');
      obdPoint.dataset.tip = 'OURBIRTHDAY|Current Melon Hot100: SQUEEZY #64|Chart scope: tracks released within 30 days|Snapshot: 27 Aug 2026 21:00 KST|Source: Melon official|Different debut dates; same-calendar position only';
      const small = $('small', obdPoint);
      if (small) small.textContent = 'MELON #64';
    }

    const read = $('.fp-map-read', pos);
    if (read) {
      const labels = $$(':scope > span', read);
      const ps = $$(':scope > p', read);
      if (labels[0]) labels[0].textContent = 'READ';
      if (ps[0]) ps[0].textContent = '8월 27일 21:00 KST Melon Hot100(발매 30일 이내 곡)에서 OURBIRTHDAY의 SQUEEZY는 #64를 기록했고, TUIDE의 SUN KISS는 해당 스냅샷에 진입하지 않았습니다.';
      if (labels[1]) labels[1].textContent = 'VIDEO NOTE';
      if (ps[1]) ps[1].textContent = '8월 28일 공개 영상 조회 스냅샷은 아티스트별 provider가 달라 직접 비교에서 제외했습니다. TUIDE의 5.41M 값은 EARLY SIGNALS에서 단독 참고값으로만 유지합니다.';
      if (labels[2]) labels[2].textContent = 'DECISION / KPI';
      if (ps[2]) ps[2].innerHTML = '<b>Strategy + Label Marketing + Data</b> — TUIDE의 D+7·D+14 repeat listening, save/follow conversion, YouTube returning viewers를 우선 확인합니다.';
    }

    const sourceRow = $('.fp-source-row', pos);
    if (sourceRow) {
      const links = $$('a', sourceRow);
      if (links[0]) links[0].textContent = 'MELON HOT100 / OFFICIAL ↗';
      if (links[1]) links[1].textContent = 'TUIDE VIDEO SNAPSHOT / SUPPORTING ↗';
      if (links[2]) links[2].textContent = 'OURBIRTHDAY VIDEO SNAPSHOT / SUPPORTING ↗';
      if (!sourceRow.querySelector('.fp-provider-note')) {
        sourceRow.insertAdjacentHTML('beforeend', '<small class="fp-provider-note">VIDEO SOURCES: DIFFERENT PROVIDERS · NOT CROSS-ARTIST COMPARABLE</small>');
      }
    }

    const method = $('.fp-method-note', pos);
    if (method) method.textContent = 'Melon D30은 D+30 retention을 뜻하지 않습니다. 발매 후 30일 이내 곡을 대상으로 하는 Hot100 범위입니다. 현재 map은 동일 캘린더 시점의 chart presence만 표시합니다.';
  }

  /* ---------------------------------------------------------
     02. RESEARCH SYSTEM — remove job-posting checklist framing.
  --------------------------------------------------------- */
  const role = $('.fp-role-coverage');
  if (role) {
    const head = $('.fp-scene-head', role);
    if (head) {
      const span = $('span', head);
      const small = $('small', head);
      if (span) span.textContent = 'RESEARCH SYSTEM';
      if (small) small.textContent = 'ANALYTICAL SCOPE · OUTPUT STANDARD';
    }
    $$('a', role).forEach(a => {
      if ((a.href || '').includes('careers.hybecorp.com') || /RA POSTING/i.test(a.textContent || '')) a.remove();
    });
  }

  /* ---------------------------------------------------------
     03. IMAGE REGISTRY — unique role per visual.
     AI/generated assets are not used.
  --------------------------------------------------------- */
  const setUniqueImage = (img, src, fallback, assetId, sourceLabel) => {
    if (!img) return;
    img.dataset.fallbackApplied = '1'; // disables older generic fallback listener
    img.dataset.assetId = assetId;
    img.dataset.photoSource = sourceLabel;
    img.removeAttribute('onerror');
    img.src = src;
    img.onerror = null;
    if (fallback) {
      img.addEventListener('error', () => {
        if (img.dataset.uniqueFallback === '1') return;
        img.dataset.uniqueFallback = '1';
        img.src = fallback;
      }, { once:true });
    }
  };

  const tuide = $('[data-route-page="tuide"]');
  if (tuide) {
    const hero = $('.tuide-hero-media img', tuide);
    if (hero) {
      hero.dataset.assetId = 'TUIDE-HERO-SBS-20260803';
      hero.dataset.photoSource = 'SBS / real group photo';
      hero.removeAttribute('onerror');
      hero.onerror = null;
      hero.addEventListener('error', () => {
        if (hero.dataset.uniqueFallback === '1') return;
        hero.dataset.uniqueFallback = '1';
        hero.src = 'https://i.ytimg.com/vi/dmx4lrSuRX8/maxresdefault.jpg';
      }, { once:true });
    }

    const compareTuide = $('.tuide-compare img[alt="TUIDE group from official video thumbnail"]', tuide);
    setUniqueImage(compareTuide,
      'https://i.ytimg.com/vi/gZoIV96ipIk/maxresdefault.jpg',
      null,
      'TUIDE-COMPARE-WEPLAY',
      'Official STEP TWO — WE PLAY #TUIDE video thumbnail'
    );

    const benchmarkTuide = $('.ssp-tuide-reference img[alt="TUIDE group"]', tuide);
    setUniqueImage(benchmarkTuide,
      'https://i.ytimg.com/vi/OeMwAsRgtS4/maxresdefault.jpg',
      null,
      'TUIDE-BENCHMARK-STEPTHREE',
      'Official STEP THREE — How we TUNE & PLAY #TUIDE video thumbnail'
    );

    const compareObd = $('.tuide-compare img[alt="OURBIRTHDAY seven-member group"]', tuide);
    if (compareObd) {
      compareObd.dataset.fallbackApplied = '1';
      compareObd.dataset.assetId = 'OURBIRTHDAY-COMPARE-IDNTIMES';
      compareObd.dataset.photoSource = 'IDN Times real group photo';
      compareObd.removeAttribute('onerror');
      compareObd.onerror = null;
      compareObd.addEventListener('error', () => {
        if (compareObd.dataset.uniqueFallback === '1') return;
        compareObd.dataset.uniqueFallback = '1';
        compareObd.src = 'https://i.ytimg.com/vi/sJKiaojk-to/maxresdefault.jpg';
      }, { once:true });
    }

    const benchmarkObd = $('.ssp-tuide-reference img[alt="OURBIRTHDAY group"]', tuide);
    setUniqueImage(benchmarkObd,
      'https://i.ytimg.com/vi/0B809sqOuDE/maxresdefault.jpg',
      'https://i.ytimg.com/vi/7Yz32duW5us/maxresdefault.jpg',
      'OURBIRTHDAY-BENCHMARK-TEASER1',
      'Official SQUEEZY M/V Teaser 1 thumbnail'
    );
  }

  const tws = $('[data-route-page="tws"]');
  if (tws) {
    const japanBenchmark = $('.ssp-tws-benchmark img[alt="TWS group"]', tws);
    setUniqueImage(japanBenchmark,
      'https://phinf.wevpstatic.net/MjAyNTA1MTVfODYg/MDAxNzQ3MzA0MTcyMzcw.mF7k1_SjAyKTAlmLfirzUi-GCOKiuWxm_zIEpLQNN3cg.RpPmGqJmhSooMiKPe_PBoKT5AkiSCNGNNpv0mjADQ4sg.JPEG/bf0b7ea2-9785-4480-8710-e621d8311238.jpeg?type=w670',
      'https://phinf.wevpstatic.net/MjAyNTA1MTRfMTUy/MDAxNzQ3MjI1NDUyNDc0.z9FsGtoTi0Cki8_f65aRqYI3yvbqXjtrxaH8LIECBgEg.2ZGY0BSz-aK3u9wqHlTRqAdfdql9wpsWEGKm0vBq2VYg.PNG/f5ded2aa-d31f-41c6-bdea-d7ac758a7ece.png?type=w670',
      'TWS-JAPAN-BENCHMARK-PHOTO-B',
      'Weverse TWS JAPAN 1st Single Official Photo B'
    );

    const heroBg = $('.tws-photo', tws);
    if (heroBg) {
      heroBg.dataset.assetId = 'TWS-HERO-NOTRAGEDY';
      heroBg.dataset.photoSource = 'Weverse / official group photo';
    }
  }

  document.documentElement.dataset.finalCorrection = '18e';
})();
