(() => {
  const $ = (sel, root=document) => root.querySelector(sel);
  const source = (href, label='SOURCE ↗') => `<a class="ssp-source" href="${href}" target="_blank" rel="noreferrer">${label}</a>`;

  const tuideCompare = $('[data-route-page="tuide"] .tuide-compare');
  if (tuideCompare && !$('.ssp-tuide-reference')) {
    tuideCompare.insertAdjacentHTML('afterend', `
      <section class="ssp-scene ssp-tuide-reference reveal-up">
        <div class="ssp-scene-head"><span>06 / REFERENCE BENCHMARK</span><small>HISTORICAL LAUNCH SCALE · NOT A D+5 RANKING</small></div>
        <div class="ssp-reference-lead">
          <div>
            <h2>REFERENCE SCALE.<br><i>KEEP THE WINDOW CLEAN.</i></h2>
            <p>TUIDE의 일반 CD 7일 집계는 아직 열리지 않았습니다. 현재는 과거 신인 걸그룹의 데뷔 초동을 reference scale로만 두고, TUIDE는 9월 11일 이후 같은 7일 정의로 추가합니다.</p>
          </div>
          <div class="ssp-definition"><span>COMPARABLE METRIC</span><b>HANTEO INITIAL CHODONG / 7 DAYS</b><small>Different release years. Used for scale context, not market-condition-adjusted ranking.</small></div>
        </div>
        <div class="ssp-artist-benchmarks">
          <article class="ssp-artist-card ssp-pending"><div class="ssp-photo-plane"><img src="https://i.ytimg.com/vi/pHciG9_2xXM/maxresdefault.jpg" alt="TUIDE group" loading="lazy"></div><div class="ssp-card-meta"><span>HYBE / ABD</span><b>TUIDE</b><strong>—</strong><p>Regular CD window opens 11 Sep 2026</p></div></article>
          <article class="ssp-artist-card"><div class="ssp-photo-plane"><img src="https://image.idntimes.com/post/20260810/ot7-900x605_16240960-a204-4cca-b5ee-8dbba1752fa6.jpg?tr=w-1200" alt="OURBIRTHDAY group" loading="lazy"></div><div class="ssp-card-meta"><span>JYP / INNIT</span><b>OURBIRTHDAY</b><strong>111,324</strong><p>2026 debut · Hanteo 7-day</p></div></article>
          <article class="ssp-artist-card"><div class="ssp-photo-plane"><img src="https://i.scdn.co/image/ab6761610000e5eb7fabcc2491d95050faa5b710" alt="ILLIT group" loading="lazy"></div><div class="ssp-card-meta"><span>HYBE / BELIFT LAB</span><b>ILLIT</b><strong>380,056</strong><p>2024 debut · Hanteo 7-day</p></div></article>
          <article class="ssp-artist-card"><div class="ssp-photo-plane"><img src="https://hips.hearstapps.com/hmg-prod/images/74e60814-fc0d-403c-b7ea-ae54b8abf1ff.png" alt="Hearts2Hearts group" loading="lazy"></div><div class="ssp-card-meta"><span>SM ENTERTAINMENT</span><b>Hearts2Hearts</b><strong>408,880</strong><p>2025 debut · Hanteo 7-day</p></div></article>
          <article class="ssp-artist-card"><div class="ssp-photo-plane"><img src="https://media.vogue.com.tw/photos/69a9447ab69552aa6bc781ef/master/w_2560%2Cc_limit/Copy%2520of%2520%25E2%2598%2585KiiiKiii-I%2520DO%2520ME-MAIN%2520ARTIST%2520IMAGE.jpg" alt="KiiiKiii group" loading="lazy"></div><div class="ssp-card-meta"><span>STARSHIP</span><b>KiiiKiii</b><strong>206,712</strong><p>2025 debut · Hanteo 7-day</p></div></article>
        </div>
        <div class="ssp-reference-sources">
          ${source('https://www.hanteochart.com/en/honors/initial','OURBIRTHDAY / HANTEO ↗')}
          ${source('https://www.soompi.com/article/1652423wpp/illit-breaks-record-for-highest-1st-week-sales-of-any-girl-group-debut-album-in-hanteo-history','ILLIT / HANTEO VIA SOOMPI ↗')}
          ${source('https://www.soompi.com/article/1727085wpp/hearts2hearts-breaks-record-for-highest-1st-week-sales-of-any-girl-group-debut-album-in-hanteo-history','HEARTS2HEARTS / HANTEO VIA SOOMPI ↗')}
          ${source('https://www.hanteonews.com/en/article/77805','KIIIKIII / HANTEO ↗')}
        </div>
      </section>

      <section class="ssp-scene ssp-tuide-window reveal-up">
        <div class="ssp-scene-head"><span>07 / D+N VELOCITY</span><small>OBSERVED POINTS + FIXED UPDATE WINDOWS</small></div>
        <div class="ssp-window-board">
          <article><div class="ssp-window-label"><b>MELON / SUN KISS</b><span>RANK TRACK</span></div><div class="ssp-window-rail"><i class="observed" style="--x:10%"><em>D+1</em><strong>#16</strong></i><i style="--x:42%"><em>D+7</em><strong>31 AUG</strong></i><i style="--x:68%"><em>D+14</em><strong>07 SEP</strong></i><i style="--x:94%"><em>D+30</em><strong>23 SEP</strong></i></div><p>첫 관측점은 8월 25일 09:00 KST Hot 100 #16. 이후에도 같은 차트·같은 시각으로 다시 수집합니다.</p></article>
          <article><div class="ssp-window-label"><b>YOUTUBE / SUN KISS MV</b><span>VIEW TRACK</span></div><div class="ssp-window-rail"><i class="observed" style="--x:28%"><em>D+4</em><strong>5.59M</strong></i><i style="--x:42%"><em>D+7</em><strong>31 AUG</strong></i><i style="--x:68%"><em>D+14</em><strong>07 SEP</strong></i><i style="--x:94%"><em>D+30</em><strong>23 SEP</strong></i></div><p>D+4 값은 제3자 웹 스냅샷입니다. D+7 이후 판단에는 공식 YouTube Analytics의 returning viewers와 geography가 우선입니다.</p></article>
        </div>
        <div class="ssp-update-log"><span>UPDATE LOG</span><b>29 AUG — D+5 SNAPSHOT</b><b>31 AUG — D+7 RETENTION WINDOW</b><b>07 SEP — D+14 BENCHMARK WINDOW</b><b>23 SEP — D+30 DECISION WINDOW</b></div>
      </section>
    `);
  }

  const tuideImplications = $('[data-route-page="tuide"] .tuide-implications');
  if (tuideImplications && !$('.ssp-tuide-priority')) {
    tuideImplications.insertAdjacentHTML('afterend', `
      <section class="ssp-scene ssp-tuide-priority reveal-up">
        <div class="ssp-scene-head"><span>PRIORITY DECISION</span><small>D+5 READ · OWNER / KPI / TRIGGER</small></div>
        <div class="ssp-priority-grid">
          <article><span>01 / DECISION</span><h3>PRE-DEBUT DISCOVERY IS ALREADY VISIBLE.</h3><p>TikTok 100만 팔로워, 프리데뷔 영상 500만+ 조회, D+1 Melon 전곡 진입이 서로 다른 touchpoint에서 확인됐습니다.</p></article>
          <article><span>02 / PRIORITY</span><h3>RETENTION BEFORE SCALE.</h3><p>D+14까지 repeat listening과 follow conversion을 1순위 KPI로 둡니다. 초기 reach가 실제 아티스트 관계로 남는지 먼저 봅니다.</p></article>
          <article><span>03 / ACTION</span><h3>COHORT THE ENTRY SOURCE.</h3><p>GRLS, team-intro, TikTok, SUN KISS 유입을 분리해 save·follow·repeat listening을 같은 기간으로 비교합니다.</p></article>
          <article><span>04 / OWNER + TRIGGER</span><h3>STRATEGY + LABEL MARKETING + DATA.</h3><p>D+7→D+14 repeat listening과 follow가 함께 약해지면 song-led re-exposure 비중을 높입니다. 유지되면 HK·TW를 우선 해외 validation market으로 확장합니다.</p></article>
        </div>
        <div class="ssp-market-priority"><span>MARKET PRIORITY / CURRENT</span><b>1. KOREA — RETENTION VALIDATION</b><b>2. HONG KONG / TAIWAN — OVERSEAS VALIDATION</b><b>3. SEA — WATCHLIST UNTIL LISTENER SCALE IS VERIFIED</b></div>
      </section>
    `);
  }

  const twsPage = $('[data-route-page="tws"]');
  const twsHero = twsPage && $('.tws-hero', twsPage);
  if (twsPage && twsHero && !$('.ssp-tws-upgrade', twsPage)) {
    const heroP = $('p', twsHero);
    if (heroP) heroP.textContent = '국내 히트로 확보한 인지도와 일본 피지컬 수요가 장기 IP 성장과 지역 확장으로 얼마나 이어졌는지 release trajectory, catalogue, Japan scale, fan read를 함께 봤습니다.';
    twsHero.insertAdjacentHTML('afterend', `
      <section class="ssp-tws-upgrade">
        <div class="ssp-deep-question reveal-up"><span>DEEP-DIVE QUESTION</span><h2>FROM DOMESTIC HIT<br><i>TO REGIONAL IP SCALE.</i></h2><p>국내 대중 히트 이후 팬덤 기반이 얼마나 축적됐는지, 일본에서 확인된 피지컬 수요가 장기 IP 성장으로 이어지는지 확인합니다.</p></div>

        <section class="ssp-scene ssp-tws-trajectory reveal-up">
          <div class="ssp-scene-head light"><span>01 / ARTIST TRAJECTORY</span><small>HANTEO INITIAL CHODONG · 7 DAYS</small></div>
          <div class="ssp-trajectory-chart">
            <article><div><span>JAN 2024</span><b>SPARKLING BLUE</b><small>DEBUT BASE</small></div><strong>260,881</strong><i style="--w:23.4%"></i></article>
            <article><div><span>JUN 2024</span><b>SUMMER BEAT!</b><small>FANDOM STEP-UP</small></div><strong>513,892</strong><i style="--w:46.2%"></i></article>
            <article><div><span>APR 2025</span><b>TRY WITH US</b><small>STEADY GROWTH</small></div><strong>558,720</strong><i style="--w:50.2%"></i></article>
            <article><div><span>OCT 2025</span><b>play hard</b><small>NEW PEAK</small></div><strong>639,787</strong><i style="--w:57.5%"></i></article>
            <article class="focus"><div><span>APR 2026</span><b>NO TRAGEDY</b><small>MILLION-WEEK</small></div><strong>1,112,770</strong><i style="--w:100%"></i></article>
          </div>
          <div class="ssp-readline"><span>READ</span><p>데뷔작 대비 〈NO TRAGEDY〉의 첫 주 판매량은 약 4.27배입니다. 2025년 하반기 639,787장에서 2026년 1,112,770장으로 증가 폭이 다시 커졌습니다.</p></div>
          <div class="ssp-reference-sources">${source('https://www.soompi.com/article/1671533wpp/tws-nearly-doubles-1st-week-sales-record-with-summer-beat','SPARKLING BLUE / SUMMER BEAT ↗')}${source('https://www.soompi.com/article/1739880wpp/tws-breaks-their-1st-week-sales-record-with-try-with-us','TRY WITH US ↗')}${source('https://www.soompi.com/article/1791739wpp/tws-sets-new-personal-record-for-1st-week-sales-with-play-hard','play hard ↗')}${source('https://www.soompi.com/article/1837833wpp/tws-nearly-doubles-1st-week-sales-record-with-no-tragedy','NO TRAGEDY ↗')}</div>
        </section>

        <section class="ssp-scene ssp-tws-market reveal-up">
          <div class="ssp-scene-head light"><span>02 / KOREA × JAPAN × GLOBAL</span><small>DEMAND LAYERS</small></div>
          <div class="ssp-market-depth">
            <article><span>KOREA / MASS AWARENESS</span><strong>#1</strong><h3>2024 MELON ANNUAL</h3><p>〈첫 만남은 계획대로 되지 않아〉가 2024년 Melon 연간 차트 1위를 기록했습니다.</p>${source('https://www.melon.com/chart/age/index.htm?chartDate=2024&chartGenre=KPOP&chartType=YE','MELON ↗')}</article>
            <article><span>JAPAN / LOCAL CONVERSION</span><strong>186,554</strong><h3>JAPAN DEBUT SINGLE / WEEK 1</h3><p>〈はじめまして〉는 Billboard Japan Top Singles Sales 1위와 Japan Hot 100 1위를 기록했습니다.</p>${source('https://www.billboard-japan.com/d_news/detail/151253/2','BILLBOARD JAPAN ↗')}</article>
            <article><span>GLOBAL / CATALOGUE PROXY</span><strong>193.5M</strong><h3>SPARKLING BLUE / SPOTIFY</h3><p>Kworb의 8월 24일 스냅샷에서 데뷔 앨범이 1.93억 회로 가장 큰 누적 스트림을 유지했습니다. 제3자 집계이므로 catalogue direction proxy로만 사용합니다.</p>${source('https://kworb.net/spotify/artist/4GgBKgxhc649frZDHcXIEz_albums.html','KWORB / THIRD-PARTY ↗')}</article>
          </div>
          <div class="ssp-readline light"><span>READ</span><p>한국에서는 대중 히트, 일본에서는 로컬 피지컬 전환, 글로벌에서는 데뷔 카탈로그의 장기 소비가 동시에 보입니다. 다음 우선순위는 세 수요층을 각각의 retention과 cross-market migration으로 나눠 보는 데 있습니다.</p></div>
        </section>

        <section class="ssp-scene ssp-tws-benchmark reveal-up">
          <div class="ssp-scene-head light"><span>03 / JAPAN DEBUT SCALE</span><small>DIRECTIONAL BENCHMARK · DIFFERENT RELEASE YEARS</small></div>
          <div class="ssp-boy-benchmark">
            <article><img src="https://phinf.wevpstatic.net/MjAyNjA0MTNfNTQg/MDAxNzc2MDc3MjIzMTM4.oNYmPJLF2GiL7OGnpnMFUxu5mb0SjZIHbr-E3kyJuA0g.X4NJ4w9ZxA7PNVrU95IPn6rWzwJw_YoWCXrZy-A2AvAg.JPEG/1ed61a0d-b13a-4a47-a13a-a0373b790652.jpeg" alt="TWS group" loading="lazy"><div><span>TWS / 2025</span><b>186,554</b><p>Japan debut single</p><i style="--w:78.1%"></i></div></article>
            <article><img src="https://assets.teenvogue.com/photos/68933cdfc02e2ed6db782950/1%3A1/w_1849%2Ch_1849%2Cc_limit/BOYNEXTDOOR_01.jpg" alt="BOYNEXTDOOR group" loading="lazy"><div><span>BOYNEXTDOOR / 2024</span><b>238,859</b><p>Japan debut single 〈AND,〉</p><i style="--w:100%"></i></div></article>
            <article><img src="https://dimg.donga.com/wps/NEWS/IMAGE/2025/04/14/131407390.1.jpg" alt="NCT WISH group" loading="lazy"><div><span>NCT WISH / 2024</span><b>93,186</b><p>Japan debut single 〈WISH〉</p><i style="--w:39%"></i></div></article>
          </div>
          <div class="ssp-benchmark-note"><b>READ</b><p>TWS의 일본 데뷔 싱글 초동은 NCT WISH의 2024년 〈WISH〉보다 높고, BOYNEXTDOOR의 2024년 〈AND,〉보다 낮았습니다. 발매 연도가 달라 일본 진입 규모의 reference band로만 봅니다.</p></div>
          <div class="ssp-reference-sources">${source('https://www.billboard-japan.com/d_news/detail/151253/2','TWS ↗')}${source('https://www.billboard-japan.com/d_news/detail/152757/2','BOYNEXTDOOR / AND, FIGURE ↗')}${source('https://www.billboard-japan.com/charts/detail?a=sales&day=11&month=03&year=2024','NCT WISH ↗')}</div>
        </section>

        <section class="ssp-scene ssp-tws-qual reveal-up">
          <div class="ssp-scene-head light"><span>04 / QUALITATIVE FAN READ</span><small>4 PUBLIC REDDIT DISCUSSIONS · DIRECTIONAL / NON-REPRESENTATIVE</small></div>
          <div class="ssp-theme-grid">
            <article><span>RECURRING</span><b>REFRESHING / YOUTHFUL</b><p>데뷔 〈plot twist〉 반응에서 밝고 청량한 사운드와 학교 배경의 정서가 반복해서 언급됐습니다.</p></article>
            <article><span>RECURRING</span><b>SIGNATURE SOUND</b><p>〈Countdown!〉에서는 기존 발매와 이어지는 TWS 고유 사운드라는 반응이 반복됐습니다.</p></article>
            <article><span>RISK THEME</span><b>REPETITION</b><p>같은 시기 일부 토론에서는 〈plot twist〉·〈If I’m S...〉와 구조가 비슷하다는 지적도 확인됐습니다.</p></article>
            <article><span>EVOLUTION THEME</span><b>MATURE, STILL FRESH</b><p>〈play hard〉에서는 청량 이미지를 유지하면서 사운드가 성숙해졌다는 반응이 반복됐습니다.</p></article>
          </div>
          <div class="ssp-readline light"><span>READ</span><p>TWS의 acquisition hook은 ‘fresh/youthful’에 강하게 걸려 있습니다. 다음 release에서는 이 인지 자산을 유지하되 편곡·곡 구조·B-side에서 새 소리를 넓혀 repetition risk를 관리합니다.</p></div>
          <div class="ssp-reference-sources">${source('https://www.reddit.com/r/kpop/comments/19crg3j','PLOT TWIST THREAD ↗')}${source('https://www.reddit.com/r/kpop/comments/1k48yr8','COUNTDOWN THREAD ↗')}${source('https://www.reddit.com/r/kpopthoughts/comments/1k4qc66','REPETITION THREAD ↗')}${source('https://www.reddit.com/r/tws/comments/1o5enwy','PLAY HARD THREAD ↗')}</div>
        </section>

        <section class="ssp-scene ssp-tws-priority reveal-up">
          <div class="ssp-scene-head light"><span>05 / THREE PRIORITIES</span><small>EVIDENCE → ACTION → OWNER → KPI</small></div>
          <div class="ssp-priority-stack">
            <article><span>PRIORITY 01</span><h3>EXPAND JAPAN BEYOND PHYSICAL.</h3><p><b>Evidence</b> Japan debut single 186,554 + current 〈NO TRAGEDY〉 Japan album week 231,793.</p><p><b>Action</b> Japan 신규 리스너의 D+30 follow와 catalogue migration을 release-linked event cohort와 분리해 봅니다.</p><p><b>Owner</b> Strategy + PLEDIS Marketing + DSP Partnership + Data</p><p><b>KPI</b> new-listener retention · follow rate · catalogue share</p></article>
            <article><span>PRIORITY 02</span><h3>TURN THE HIT INTO CATALOGUE DEPTH.</h3><p><b>Evidence</b> 〈plot twist〉는 2024 Melon 연간 #1. 2026년 8월 Spotify proxy에서도 〈Sparkling Blue〉가 가장 큰 누적 앨범 스트림을 유지.</p><p><b>Action</b> 신보 campaign cohort가 30일 안에 과거 catalogue로 이동하는 비중을 release마다 같은 정의로 봅니다.</p><p><b>Owner</b> Strategy + PLEDIS A&R/Marketing + Data</p><p><b>KPI</b> non-current catalogue share · repeat listeners · follower retention</p></article>
            <article><span>PRIORITY 03</span><h3>KEEP THE SIGNATURE. WIDEN THE SOUND.</h3><p><b>Evidence</b> 공개 팬 토론에서는 signature sound와 repetition risk가 동시에 반복됐고 〈play hard〉에서는 mature evolution 반응이 확인됐습니다.</p><p><b>Action</b> 다음 타이틀과 B-side의 save·repeat listening을 분리해 사운드 확장의 수용도를 확인합니다.</p><p><b>Owner</b> Strategy + PLEDIS A&R + Content</p><p><b>KPI</b> title/B-side save rate · repeat listening · qualitative theme shift</p></article>
          </div>
        </section>
      </section>
    `);
  }

  const dspFunnel = $('[data-route-page="dsp"] .dsp-funnel');
  if (dspFunnel && !$('.ssp-partners')) {
    dspFunnel.insertAdjacentHTML('afterend', `
      <section class="ssp-scene ssp-partners reveal-up">
        <div class="ssp-scene-head"><span>PARTNER MOVE</span><small>2026 PRODUCT / DISCOVERY CHANGES</small></div>
        <div class="ssp-partner-grid">
          <article><span>SPOTIFY</span><h3>RELEASE RADAR — MORE LISTENER CONTROL</h3><p><b>MOVE</b> Release Radar reaches nearly 9M listeners weekly and added controls such as “Discover new artists”.</p><p><b>ARTIST IMPACT</b> 신규곡 노출의 source mix가 개인화 surface 안에서도 더 세분화됩니다.</p><p><b>HYBE RESPONSE</b> release week에 Source of Streams → save/follow → D+7 repeat를 같은 cohort로 봅니다.</p>${source('https://newsroom.spotify.com/2026-07-10/discovery-playlists-release-radar-control-updates/')}</article>
          <article><span>TIKTOK</span><h3>DISCOVERY → DSP SAVE</h3><p><b>MOVE</b> Add to Music App을 통한 premium DSP 저장이 최근 12개월 60억 건을 넘었습니다.</p><p><b>ARTIST IMPACT</b> short-form discovery와 streaming intent 사이에 직접 측정 가능한 행동이 생깁니다.</p><p><b>HYBE RESPONSE</b> UGC volume보다 Add-to-Music, downstream stream, repeat listening을 campaign KPI로 함께 둡니다.</p>${source('https://newsroom.tiktok.com/tiktoks-add-to-music-app-surpasses-6-billion-track-saves-in-the-past-year?lang=en-GB')}</article>
          <article><span>YOUTUBE</span><h3>SAMPLES + SHORTS PRE-RELEASE</h3><p><b>MOVE</b> Samples에서 음악을 저장·공유·full video로 이동할 수 있고, eligible Shorts preview에는 release notification을 붙일 수 있습니다.</p><p><b>ARTIST IMPACT</b> pre-release discovery와 release-day listening이 같은 플랫폼 안에서 이어집니다.</p><p><b>HYBE RESPONSE</b> preview → notification → full-track view/stream → returning viewer를 release funnel로 추적합니다.</p>${source('https://support.google.com/youtubemusic/answer/13468882?hl=en')}</article>
          <article><span>APPLE MUSIC / SHAZAM</span><h3>DISCOVERY BY PLACE</h3><p><b>MOVE</b> Apple Music for Artists에서 Shazam의 국가·지역·도시별 발견 데이터를 볼 수 있고 Promote·favorite artist 기능을 함께 제공합니다.</p><p><b>ARTIST IMPACT</b> chart 진입 전 지역별 curiosity signal을 더 일찍 확인할 수 있습니다.</p><p><b>HYBE RESPONSE</b> Shazam acceleration을 territory test 신호로 쓰고, Apple listeners·video·social data로 교차 검증합니다.</p>${source('https://artists.apple.com/support/5584-grow-your-fanbase-2026')}</article>
          <article><span>WEVERSE</span><h3>MONTHLY DIGITAL MEMBERSHIP</h3><p><b>MOVE</b> Digital Membership은 커뮤니티 단위 월 구독 상품으로 운영되고 있습니다.</p><p><b>ARTIST IMPACT</b> fandom monetization이 annual membership·commerce 외에 recurring digital subscription까지 넓어집니다.</p><p><b>HYBE RESPONSE</b> join → active use → renewal → shop/live behavior를 하나의 fan-value cohort로 봅니다.</p>${source('https://help.weverse.io/weverse/article?faq-id=000005598')}</article>
        </div>
        <div class="ssp-emerging"><span>EMERGING FACTOR / 6–12M</span><b>SHORT-FORM → STREAM INTENT</b><b>RECURRING FAN SUBSCRIPTION</b><b>AI-PERSONALIZED DISCOVERY</b><p>파트너사의 product change를 release KPI와 fan monetization 설계에 반영합니다.</p></div>
      </section>
    `);
  }

  const methodPage = $('[data-route-page="method"]');
  const methodTitle = methodPage && $('.chapter-title-block', methodPage);
  if (methodPage && methodTitle && !$('.ssp-method-choice', methodPage)) {
    const p = $('p', methodTitle);
    if (p) p.textContent = '같은 질문도 기간, 분모, 비교군, proxy 선택에 따라 결론이 달라집니다. 분석 전에 어떤 방법을 쓸지 정하고, 제외한 방법도 기록합니다.';
    methodTitle.insertAdjacentHTML('afterend', `
      <section class="ssp-scene ssp-method-choice reveal-up">
        <div class="ssp-scene-head"><span>METHOD CHOICE</span><small>WHY THIS METHOD / WHAT I EXCLUDED</small></div>
        <div class="ssp-method-grid">
          <article><span>01</span><b>D+N OVER CUMULATIVE</b><p>데뷔일이 다른 신규 IP는 D+1·D+7·D+30으로 맞춥니다. 누적값에는 관측 기간 차이가 포함됩니다.</p></article>
          <article><span>02</span><b>CONVERSION WITH REACH</b><p>조회수와 follower를 discovery로 보고 save·repeat·follow·purchase를 다음 단계로 둡니다. reach와 fandom depth를 분리합니다.</p></article>
          <article><span>03</span><b>LIKE-FOR-LIKE PRODUCT WINDOW</b><p>초동은 동일 포맷·동일 7일 집계가 열릴 때 비교합니다. QR 버전과 일반 CD 발매일이 다르면 분리합니다.</p></article>
          <article><span>04</span><b>QUANT + QUAL</b><p>정량 지표가 ‘무엇이 변했는지’를 보여주면, 커뮤니티 theme coding은 반응 이유에 대한 가설을 보완합니다.</p></article>
          <article><span>05</span><b>PROXY WITH CONFIDENCE LABEL</b><p>공식 값이 없을 때 proxy를 쓸 수 있습니다. 원본 플랫폼 analytics와 구분해 표기하고 핵심 의사결정의 단독 근거로 쓰지 않습니다.</p></article>
        </div>
        <div class="ssp-alt-method"><span>ALTERNATIVE METHOD / TERRITORY INTEREST</span><div><b>OPTION A</b><p>Google Trends — search curiosity</p></div><i>→</i><div class="selected"><b>OPTION B</b><p>Spotify / Apple / YouTube geography — consumption signal</p></div><i>+</i><div><b>OPTION C</b><p>Shazam geography — early discovery signal</p></div><small>이번 포트폴리오에서는 소비 데이터를 우선하고, search와 Shazam을 보조 신호로 사용합니다.</small></div>
        <div class="ssp-source-stack"><span>SOURCE STACK</span><b>OFFICIAL</b><i>→</i><b>CHART / DSP</b><i>→</i><b>SOCIAL / COMMUNITY</b><i>→</i><b>PRESS</b><em>EVIDENCE → SYNTHESIS → DECISION</em></div>
      </section>
    `);
  }

  const nums = {market:'01',kpop:'02',fandom:'03',dsp:'04',tuide:'05',tws:'06',method:'07',work:'08'};
  Object.entries(nums).forEach(([route,n]) => {
    const foot = $(`[data-route-page="${route}"] .route-foot span`);
    if (foot) foot.textContent = `${n} / 08`;
  });
})();