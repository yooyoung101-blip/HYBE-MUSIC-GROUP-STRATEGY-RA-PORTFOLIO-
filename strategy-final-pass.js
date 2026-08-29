(() => {
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];
  const link = (href, label='SOURCE ↗') => `<a class="fp-source" href="${href}" target="_blank" rel="noreferrer">${label}</a>`;

  /* ---------------------------------------------------------
     01. SOURCE HIERARCHY — replace secondary with primary
  --------------------------------------------------------- */
  const trajectoryLinks = $$('[data-route-page="tws"] .ssp-tws-trajectory .ssp-reference-sources a');
  if (trajectoryLinks.length) {
    const sourceMap = [
      ['https://www.hanteonews.com/en/article/61162','SPARKLING BLUE / HANTEO ↗'],
      null,
      ['https://www.hanteonews.com/en/article/84485','play hard / HANTEO ↗'],
      ['https://www.hanteonews.com/ko/article/90981','NO TRAGEDY / HANTEO ↗']
    ];
    sourceMap.forEach((v,i)=>{ if(v && trajectoryLinks[i]){ trajectoryLinks[i].href=v[0]; trajectoryLinks[i].textContent=v[1]; }});
    const srcBox = $('[data-route-page="tws"] .ssp-tws-trajectory .ssp-reference-sources');
    if (srcBox && !srcBox.querySelector('[data-fp-summer]')) {
      srcBox.insertAdjacentHTML('beforeend', `<a data-fp-summer class="ssp-source" href="https://www.hanteonews.com/en/article/66061" target="_blank" rel="noreferrer">SUMMER BEAT! / HANTEO ↗</a>`);
    }
  }
  $$('.ssp-tuide-reference .ssp-reference-sources a').forEach(a=>{
    const t=(a.textContent||'').toUpperCase();
    if(t.includes('HEARTS2HEARTS')){a.href='https://www.hanteonews.com/en/article/76508';a.textContent='HEARTS2HEARTS / HANTEO ↗';}
    if(t.includes('KIIIKIII')){a.href='https://www.hanteonews.com/en/article/77805';a.textContent='KIIIKIII / HANTEO ↗';}
    if(t.includes('OURBIRTHDAY')){a.href='https://www.hanteochart.com/en/honors/initial';a.textContent='OURBIRTHDAY / HANTEO ↗';}
    if(t.includes('ILLIT')){a.textContent='ILLIT / HANTEO DATA VIA SOOMPI ↗';}
  });

  const emerging = $('.ssp-emerging');
  if (emerging) {
    $$('b', emerging).forEach(b=>{
      if(b.textContent.trim()==='AI-PERSONALIZED DISCOVERY') b.textContent='PERSONALIZED DISCOVERY';
    });
  }

  /* ---------------------------------------------------------
     02. TUIDE — directional positioning map
     Same-calendar snapshot, explicitly not same D+N.
  --------------------------------------------------------- */
  const tuideRef = $('[data-route-page="tuide"] .ssp-tuide-reference');
  if (tuideRef && !$('.fp-tuide-positioning')) {
    tuideRef.insertAdjacentHTML('afterend', `
      <section class="fp-scene fp-tuide-positioning reveal-up">
        <div class="fp-scene-head"><span>07 / COMPETITIVE POSITIONING</span><small>DIRECTIONAL PUBLIC PROXIES · SAME-CALENDAR SNAPSHOT</small></div>
        <div class="fp-positioning-intro">
          <div>
            <h2>DISCOVERY IS AHEAD.<br><i>DOMESTIC RETENTION IS THE OPEN QUESTION.</i></h2>
            <p>8월 27일 Melon 발매 30일 Hot100과 8월 28일 공개 MV 조회 스냅샷을 같은 화면에 놓았습니다. 두 팀의 데뷔일이 달라 launch-efficiency 비교에는 사용하지 않습니다.</p>
          </div>
          <div class="fp-confidence"><span>CONFIDENCE</span><b>LOW–MEDIUM</b><p>Melon은 1차 자료입니다. MV 조회는 제3자 공개 스냅샷이며 관측 경과일도 다릅니다.</p></div>
        </div>

        <div class="fp-map-wrap" aria-label="Directional positioning based on public proxies">
          <div class="fp-map-title"><b>DIRECTIONAL POSITIONING</b><span>DATA SCALE = FLAT / PRESENTATION = SPATIAL</span></div>
          <div class="fp-map">
            <div class="fp-y-label">TITLE MV PUBLIC VIEWS / SNAPSHOT</div>
            <div class="fp-y-ticks"><span>6M</span><span>4M</span><span>2M</span><span>0</span></div>
            <div class="fp-x-label"><span>NO TOP100 LISTING</span><b>MELON HOT100 PERSISTENCE PROXY (101 − RANK)</b><span>STRONGER →</span></div>
            <div class="fp-grid-lines" aria-hidden="true"></div>

            <button class="fp-map-point tuide" style="--x:3%;--y:90.1%" data-tip="TUIDE|Melon D30 Hot100: not listed in Aug 27 21:00 snapshot|SUN KISS MV: 5.41M public snapshot|Melon: 27 Aug 2026 21:00 / MV: 28 Aug 2026|Melon official + third-party video snapshot|Not same D+N; video count lower-confidence"><i></i><strong>TUIDE</strong><small>5.41M / MELON —</small></button>
            <button class="fp-map-point ourbirthday" style="--x:37%;--y:52.8%" data-tip="OURBIRTHDAY|Melon D30 Hot100: #64 → persistence score 37|SQUEEZY MV: 3.17M public snapshot|Melon: 27 Aug 2026 21:00 / MV: 28 Aug 2026|Melon official + third-party JYP channel snapshot|Not same D+N; video count lower-confidence"><i></i><strong>OURBIRTHDAY</strong><small>3.17M / #64</small></button>
          </div>
          <div class="fp-map-tooltip" id="fpMapTooltip" aria-live="polite"></div>
        </div>

        <div class="fp-map-read">
          <span>READ</span>
          <p>TUIDE는 같은 날짜 기준 공개 영상 reach가 더 큽니다. Melon 발매 30일 Hot100 스냅샷에는 이름이 없었습니다. OURBIRTHDAY는 SQUEEZY가 #64에 남아 있었습니다.</p>
          <span>DECISION</span>
          <p>현재 우선순위는 discovery를 더 키우는 것보다 TUIDE의 국내 repeat listening과 follow conversion을 D+7·D+14에서 확인하는 데 둡니다.</p>
          <span>ACTION / KPI</span>
          <p><b>Strategy + Label Marketing + Data</b> — Melon D+7/D+14, repeat listening, save/follow conversion, YouTube returning viewers를 같은 cohort로 업데이트합니다.</p>
        </div>
        <div class="fp-source-row">
          ${link('https://www.melon.com/chart/hot100/index.htm?chartType=D30','MELON HOT100 / 27 AUG ↗')}
          ${link('https://video.korea.com/view/?id=46h0LvDHgIs','TUIDE MV SNAPSHOT ↗')}
          ${link('https://my.youtubers.me/jypentertainment/youtube-videos-stats/en','OURBIRTHDAY MV SNAPSHOT ↗')}
        </div>
        <p class="fp-method-note">ILLIT · Hearts2Hearts · KiiiKiii는 동일한 2026년 8월 관측 창을 확보하지 못해 이 map에는 배치하지 않았습니다. 과거 초동은 위 REFERENCE SCALE에서만 사용합니다.</p>
      </section>
    `);
  }

  /* Renumber TUIDE scenes after insertion without removing existing work. */
  const windowHead = $('.ssp-tuide-window .ssp-scene-head span');
  if(windowHead) windowHead.textContent='08 / D+N VELOCITY';

  /* ---------------------------------------------------------
     03. TWS — qualitative method + fan motivation
  --------------------------------------------------------- */
  const twsQual = $('[data-route-page="tws"] .ssp-tws-qual');
  if (twsQual && !$('.fp-tws-qual-method')) {
    twsQual.insertAdjacentHTML('afterend', `
      <section class="fp-scene fp-tws-qual-method reveal-up">
        <div class="fp-scene-head light"><span>05 / FAN MOTIVATION</span><small>MANUAL CODING · DIRECTIONAL / NON-REPRESENTATIVE</small></div>

        <div class="fp-qual-meta">
          <div><span>ENGLISH SAMPLE</span><b>12 COMMENT UNITS</b><p>4 Reddit threads · Jan 2024–Oct 2025 · English</p></div>
          <div><span>JAPAN SAMPLE</span><b>6 NARRATIVE UNITS</b><p>4 public fan reports · Mar 2025–Apr 2026 · Japanese</p></div>
          <div><span>INCLUSION</span><b>EXPERIENCE + REASON</b><p>song/concept/live/member에 대한 이유가 포함된 문장</p></div>
          <div><span>EXCLUSION</span><b>LOGISTICS / BOT / DUPLICATE</b><p>공지, 단순 일정, 중복 인용, 관리자 문구 제외</p></div>
        </div>

        <div class="fp-coding-rail">
          <div class="fp-coding-market en">
            <div class="fp-market-tag"><b>EN / GLOBAL</b><span>12 units</span></div>
            <div class="fp-code"><strong>5</strong><span>MUSIC / SONG</span><i style="--w:100%"></i></div>
            <div class="fp-code"><strong>4</strong><span>CONCEPT / IDENTITY</span><i style="--w:80%"></i></div>
            <div class="fp-code"><strong>2</strong><span>DISCOVERY / PROMOTION</span><i style="--w:40%"></i></div>
            <div class="fp-code"><strong>1</strong><span>FUTURE LISTENING INTENT</span><i style="--w:20%"></i></div>
          </div>
          <div class="fp-coding-market jp">
            <div class="fp-market-tag"><b>JP / LIVE FAN</b><span>6 units</span></div>
            <div class="fp-code"><strong>3</strong><span>LIVE / COMMUNITY</span><i style="--w:100%"></i></div>
            <div class="fp-code"><strong>2</strong><span>LOCALIZATION / LANGUAGE</span><i style="--w:66.7%"></i></div>
            <div class="fp-code"><strong>1</strong><span>MEMBER AFFINITY</span><i style="--w:33.3%"></i></div>
          </div>
        </div>

        <div class="fp-motivation-flow">
          <article>
            <span>EN / GLOBAL</span>
            <div><small>MOTIVATION SIGNAL</small><b>SONG SATISFACTION + CONCEPT FIT</b></div><i>→</i>
            <div><small>OBSERVED BEHAVIOR</small><b>REPEAT LISTENING / FUTURE COMEBACK INTENT</b></div><i>→</i>
            <div><small>BUSINESS READ</small><p>signature sound는 유입 이유로 반복해서 언급됐습니다. 사운드 변화가 커진 시기에는 comeback awareness와 concept fit에 대한 우려도 함께 나타났습니다.</p></div><i>→</i>
            <div><small>STRATEGY QUESTION</small><p>타이틀 사운드를 확장할 때 D+7 repeat와 save가 어느 수준까지 유지되는가?</p></div>
          </article>
          <article>
            <span>JP / LIVE FAN</span>
            <div><small>MOTIVATION SIGNAL</small><b>LIVE COMMUNITY + LOCALIZED COMMUNICATION</b></div><i>→</i>
            <div><small>OBSERVED BEHAVIOR</small><b>FANMEETING / TOUR / MERCH / PEER SHARING</b></div><i>→</i>
            <div><small>BUSINESS READ</small><p>일본 표본에서는 일본어 소통, 현장 참여, 42 간 교류가 같은 후기 안에서 함께 나타났습니다. 인과관계가 아니라 현장형 fandom depth를 설명하는 동시 신호로 봅니다.</p></div><i>→</i>
            <div><small>STRATEGY QUESTION</small><p>localized live touchpoint가 membership, ticket sell-through, catalogue migration과 함께 움직이는가?</p></div>
          </article>
        </div>

        <div class="fp-qual-methodology">
          <div><span>CODING RULE</span><p>한 unit에 primary code 1개를 부여했습니다. 같은 문장에 여러 이유가 있어도 분석 질문과 가장 직접적인 이유 하나만 기록했습니다.</p></div>
          <div><span>DUPLICATES</span><p>같은 작성자의 반복 문장과 기사 안에 재인용된 팬 문구는 1회만 셌습니다.</p></div>
          <div><span>BIAS</span><p>자발적으로 글을 남긴 이용자 표본이라 적극 팬 비중이 높습니다. 시장 전체 팬덤 비율로 일반화하지 않습니다.</p></div>
          <div><span>USE</span><p>정량 KPI의 원인을 확정하는 자료가 아니라, 다음 release에서 검증할 행동 가설을 좁히는 directional evidence로 사용했습니다.</p></div>
        </div>

        <div class="fp-source-row wrap">
          ${link('https://www.reddit.com/r/kpop/comments/19crg3j','REDDIT / PLOT TWIST ↗')}
          ${link('https://www.reddit.com/r/kpop/comments/1k48yr8','REDDIT / COUNTDOWN ↗')}
          ${link('https://www.reddit.com/r/kpopthoughts/comments/1kc6a18','REDDIT / SOUND DISCUSSION ↗')}
          ${link('https://www.reddit.com/r/kpopthoughts/comments/1o7i15m','REDDIT / COMEBACK AWARENESS ↗')}
          ${link('https://note.com/sandsp1t/n/n0e301ed3949e','JP FAN REPORT 01 ↗')}
          ${link('https://note.com/s2_tws/n/nd644e8ec2c56','JP FAN REPORT 02 ↗')}
          ${link('https://note.com/s2_tws/n/n408ce846b606','JP FAN REPORT 03 ↗')}
          ${link('https://note.com/yukidaruma_drm/n/nd457e8c4c6c6','JP FAN REPORT 04 ↗')}
        </div>
      </section>
    `);
  }

  const twsPriorityHead = $('[data-route-page="tws"] .ssp-tws-priority .ssp-scene-head span');
  if(twsPriorityHead) twsPriorityHead.textContent='06 / THREE PRIORITIES';

  /* ---------------------------------------------------------
     04. DSP — emerging business / technology factors
  --------------------------------------------------------- */
  const partners = $('[data-route-page="dsp"] .ssp-partners');
  if (partners && !$('.fp-emerging-factors')) {
    partners.insertAdjacentHTML('afterend', `
      <section class="fp-scene fp-emerging-factors reveal-up">
        <div class="fp-scene-head"><span>EMERGING FACTORS / 6–12M</span><small>OFFICIAL PRODUCT / LICENSING SOURCES</small></div>
        <div class="fp-factor-rail">
          <article>
            <span>01 / PERSONALIZED DISCOVERY</span>
            <h3>RELEASE RADAR IS BECOMING MORE CONTROLLABLE.</h3>
            <p><b>MOVE</b> Spotify는 Release Radar에 new-to-you artist 등 session control을 추가했고, 주간 약 900만 명이 이용한다고 밝혔습니다.</p>
            <p><b>IMPACT</b> 개인화 노출 안에서도 listener intent에 따라 discovery source가 달라집니다.</p>
            <p><b>RESPONSE</b> playlist exposure 자체보다 source → save/follow → D+7 repeat를 같은 release cohort로 봅니다.</p>
            <div><b>KPI</b><span>personalized-source share · save rate · follow rate · D+7 repeat</span></div>
            ${link('https://newsroom.spotify.com/2026-07-10/discovery-playlists-release-radar-control-updates/','SPOTIFY NEWSROOM ↗')}
          </article>
          <article>
            <span>02 / RECURRING FAN SUBSCRIPTION</span>
            <h3>D2F MONETIZATION NOW HAS A MONTHLY LAYER.</h3>
            <p><b>MOVE</b> Weverse Digital Membership은 커뮤니티 단위 월 구독형 유료 서비스로 운영됩니다.</p>
            <p><b>IMPACT</b> 팬 가치 측정에 연간 membership과 commerce 외에 recurring digital revenue가 추가됩니다.</p>
            <p><b>RESPONSE</b> 가입 수보다 active use → renewal → shop/live 행동을 한 cohort로 연결합니다.</p>
            <div><b>KPI</b><span>join rate · 30/60-day renewal · active-use rate · shop/live overlap</span></div>
            ${link('https://help.weverse.io/weverse/article?faq-id=000005598','WEVERSE HELP ↗')}
          </article>
          <article>
            <span>03 / LICENSED FAN CREATION</span>
            <h3>FAN-MADE COVERS / REMIXES ARE MOVING INTO A LICENSED PAID MODEL.</h3>
            <p><b>MOVE</b> Spotify와 UMG는 참여 아티스트·송라이터의 동의, 크레딧, 보상을 전제로 생성형 AI 커버·리믹스 유료 add-on을 발표했습니다.</p>
            <p><b>IMPACT</b> UGC가 discovery 도구에서 rights-cleared monetization product로 확장될 수 있습니다.</p>
            <p><b>RESPONSE</b> 참여 여부를 IP별로 판단하고 original-track return, incremental revenue, rights workload를 함께 측정합니다.</p>
            <div><b>KPI</b><span>creation→original return · paid attach · incremental royalty · opt-in rate</span></div>
            ${link('https://newsroom.spotify.com/2026-05-21/universal-music-group-spotify-licensing-agreements-fan-made-covers-remixes/','SPOTIFY × UMG ↗')}
          </article>
        </div>
      </section>
    `);
  }

  /* ---------------------------------------------------------
     05. METHOD / ROLE COVERAGE — evidence, not self-praise
  --------------------------------------------------------- */
  const methodChoice = $('[data-route-page="method"] .ssp-method-choice');
  if (methodChoice && !$('.fp-role-coverage')) {
    methodChoice.insertAdjacentHTML('afterend', `
      <section class="fp-scene fp-role-coverage reveal-up">
        <div class="fp-scene-head"><span>ROLE COVERAGE / EVIDENCE</span><small>HYBE MUSIC GROUP APAC · RA POSTING</small></div>
        <div class="fp-role-rail">
          <div><b>ARTIST / MARKET QUANT + QUAL</b><span>TUIDE · TWS · external benchmark · qualitative coding</span></div>
          <div><b>FANDOM BEHAVIOR + MOTIVATION</b><span>Fandom Economics + TWS EN/JP motivation sample</span></div>
          <div><b>DSP / PARTNER MOVE</b><span>Spotify · TikTok · YouTube · Apple/Shazam · Weverse</span></div>
          <div><b>EMERGING MODEL / TECH</b><span>monthly D2F subscription · licensed fan creation · personalized discovery</span></div>
          <div><b>DEEP-DIVE / IMPLICATION</b><span>TUIDE discovery→retention · TWS hit→regional IP scale</span></div>
          <div><b>METHOD / ADAPTATION</b><span>D+N window · proxy confidence · alternative method · update log</span></div>
        </div>
        <div class="fp-role-output"><span>OUTPUT STANDARD</span><b>DECISION</b><i>→</i><b>PRIORITY</b><i>→</i><b>ACTION</b><i>→</i><b>OWNER / KPI / TRIGGER</b></div>
        ${link('https://careers.hybecorp.com/ko/o/204246','HYBE RA POSTING ↗')}
      </section>
    `);
  }

  /* ---------------------------------------------------------
     06. SPATIAL DEPTH — no data distortion
  --------------------------------------------------------- */
  const home = $('[data-route-page="home"]');
  if(home){
    home.classList.add('fp-spatial-home');
    const hero=$('.hero-title',home);
    if(hero) hero.classList.add('fp-home-depth');
    const copy=$('.home-bottom',home); if(copy) copy.classList.add('fp-home-foreground');
  }
  const tuideHero = $('[data-route-page="tuide"] .tuide-hero');
  if(tuideHero){
    tuideHero.classList.add('fp-depth-hero','fp-tuide-depth');
    const media=$('.tuide-hero-media',tuideHero), copy=$('.tuide-hero-copy',tuideHero);
    if(media) media.classList.add('fp-depth-back');
    if(copy) copy.classList.add('fp-depth-mid');
    const facts=$('.tuide-facts',tuideHero); if(facts) facts.classList.add('fp-depth-front');
  }
  const twsPage=$('[data-route-page="tws"]');
  if(twsPage){
    twsPage.classList.add('fp-tws-spatial');
    const kpis=$('.tws-kpis',twsPage); if(kpis) kpis.classList.add('fp-tws-kpi-plane');
    const traj=$('.ssp-tws-trajectory',twsPage); if(traj) traj.classList.add('fp-tws-trajectory-plane');
    const market=$('.ssp-tws-market',twsPage); if(market) market.classList.add('fp-market-selector');
  }

  /* Market depth selection — keeps values unchanged. */
  $$('.fp-market-selector .ssp-market-depth article').forEach((card,i,arr)=>{
    card.tabIndex=0;
    const activate=()=>arr.forEach((x,j)=>x.classList.toggle('fp-active-market',j===i));
    card.addEventListener('mouseenter',activate);
    card.addEventListener('focus',activate);
  });

  /* Positioning map tooltip. */
  const tip=$('#fpMapTooltip');
  $$('.fp-map-point').forEach(p=>{
    const show=()=>{
      if(!tip)return;
      const a=(p.dataset.tip||'').split('|');
      tip.innerHTML=`<b>${a[0]||''}</b><dl><div><dt>X PROXY</dt><dd>${a[1]||''}</dd></div><div><dt>Y PROXY</dt><dd>${a[2]||''}</dd></div><div><dt>PERIOD</dt><dd>${a[3]||''}</dd></div><div><dt>SOURCE</dt><dd>${a[4]||''}</dd></div><div><dt>LIMITATION</dt><dd>${a[5]||''}</dd></div></dl>`;
      tip.classList.add('show');
    };
    p.addEventListener('mouseenter',show); p.addEventListener('focus',show);
    p.addEventListener('mouseleave',()=>tip?.classList.remove('show'));
    p.addEventListener('blur',()=>tip?.classList.remove('show'));
  });

  /* Pointer depth is tiny and disabled on touch/reduced-motion. */
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine=matchMedia('(pointer:fine)').matches;
  if(fine && !reduce){
    const homeWrap=$('[data-route-page="home"] .home-wrap');
    homeWrap?.addEventListener('pointermove',e=>{
      const r=homeWrap.getBoundingClientRect();
      const nx=(e.clientX-r.left)/r.width-.5, ny=(e.clientY-r.top)/r.height-.5;
      homeWrap.style.setProperty('--fp-x',nx.toFixed(3));
      homeWrap.style.setProperty('--fp-y',ny.toFixed(3));
    },{passive:true});
    const tuideScroll=$('[data-route-page="tuide"] .chapter-scroll');
    tuideScroll?.addEventListener('scroll',()=>{
      const y=Math.min(1,tuideScroll.scrollTop/700);
      tuideScroll.style.setProperty('--fp-scroll',y.toFixed(3));
    },{passive:true});
    const twsScroll=$('[data-route-page="tws"] .chapter-scroll');
    twsScroll?.addEventListener('scroll',()=>{
      const y=Math.min(1,twsScroll.scrollTop/900);
      twsScroll.style.setProperty('--fp-scroll',y.toFixed(3));
    },{passive:true});
  }

  /* Explicit source labels for secondary or proxy evidence. */
  $$('.ssp-tws-market a').forEach(a=>{
    if(a.href.includes('kworb.net')) a.textContent='KWORB / THIRD-PARTY PROXY ↗';
  });

  document.documentElement.dataset.finalPass='18';
})();