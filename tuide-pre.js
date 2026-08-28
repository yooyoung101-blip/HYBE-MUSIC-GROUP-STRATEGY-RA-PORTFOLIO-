(() => {
  const indexScreen = document.getElementById('indexScreen');
  const indexList = document.getElementById('indexList');
  const app = document.getElementById('app');
  const tws = document.querySelector('[data-route-page="tws"]');
  if (!indexList || !app || !tws || document.querySelector('[data-route-page="tuide"]')) return;

  const indexMeta = indexScreen?.querySelector('.index-meta span');
  if (indexMeta) indexMeta.textContent = 'INDEX / 09 PAGES';

  const twsIndex = indexList.querySelector('[data-route="tws"]');
  const tuideIndex = document.createElement('button');
  tuideIndex.dataset.route = 'tuide';
  tuideIndex.innerHTML = '<span>05</span><strong>TUIDE — Early Signal</strong><em>Launch / D+5</em>';
  indexList.insertBefore(tuideIndex, twsIndex);

  const indexUpdates = [
    ['tws','06','TWS Artist Case','Official / Desk Research'],
    ['method','07','Research Method','Working Standard'],
    ['work','08','Applied Work','Research → Proposal']
  ];
  indexUpdates.forEach(([route,no,title,meta]) => {
    const b = indexList.querySelector(`[data-route="${route}"]`);
    if (!b) return;
    b.querySelector('span').textContent = no;
    b.querySelector('strong').textContent = title;
    b.querySelector('em').textContent = meta;
  });

  const tuide = document.createElement('section');
  tuide.className = 'route tuide-route';
  tuide.dataset.routePage = 'tuide';
  tuide.innerHTML = `
  <div class="chapter-scroll">
    <div class="chapter-shell tuide-shell">
      <header class="chapter-head">
        <div><span class="chapter-no">05</span><span>TUIDE — EARLY SIGNAL</span></div>
        <div class="chapter-source">AS OF 29 AUG 2026 KST · PUBLIC-SOURCE DESK RESEARCH</div>
      </header>

      <section class="tuide-hero reveal-up">
        <figure class="tuide-hero-media">
          <img
            src="https://img.sbs.co.kr/newsnet/etv/upload/2026/08/03/30001078725.jpg"
            alt="TUIDE seven-member group"
            loading="eager"
            onerror="this.onerror=null;this.src='https://i.ytimg.com/vi/pHciG9_2xXM/maxresdefault.jpg';"
          >
          <figcaption>REAL ARTIST PHOTO · ABD (HYBE) / SBS · fallback: official HYBE LABELS video thumbnail</figcaption>
        </figure>
        <div class="tuide-hero-copy">
          <span class="tuide-kicker">HYBE MUSIC GROUP / NEW LABEL ENTRY</span>
          <h1>TUIDE<br><i>EARLY SIGNAL</i></h1>
          <p class="tuide-question">데뷔 직후 어떤 초기 성장 신호가 확인됐고, 같은 시기 시장에 진입한 신규 걸그룹과 비교할 때 HYBE가 지금 추적해야 할 지표는 무엇인지 정리했습니다.</p>
          <div class="tuide-facts">
            <div><span>DEBUT</span><b>24 AUG 2026</b></div>
            <div><span>LABEL</span><b>ABD</b></div>
            <div><span>FORMAT</span><b>7 MEMBERS</b></div>
            <div><span>DEBUT EP</span><b>TUNE & PLAY</b></div>
            <div><span>LEAD</span><b>SUN KISS</b></div>
          </div>
          <button class="tuide-source-link" data-tuide-source="debut">SOURCE / DEBUT FACTS ↗</button>
        </div>
      </section>

      <section class="tuide-why reveal-up">
        <div class="tuide-section-label">WHY NOW</div>
        <div class="tuide-why-grid">
          <article><b>01</b><p>ABD가 처음 선보인 IP입니다. 레이블의 첫 시장 진입 방식과 초기 소비 반응을 함께 볼 수 있는 시점입니다.</p></article>
          <article><b>02</b><p>공식 데뷔 후 닷새가 지난 구간입니다. 인지도와 발견 신호는 보이기 시작했지만 리텐션과 구매 전환은 아직 같은 기간으로 닫히지 않았습니다.</p></article>
          <article><b>03</b><p>같은 8월에 7인조 신인 걸그룹 OURBIRTHDAY가 데뷔했습니다. 현재는 동일 기간으로 맞출 수 있는 데이터만 비교하는 편이 정확합니다.</p></article>
        </div>
      </section>

      <section class="tuide-timeline reveal-up">
        <div class="tuide-section-head"><span>01 / LAUNCH TIMELINE</span><small>VERIFIED EVENTS ONLY</small></div>
        <div class="tuide-timeline-line">
          <article><time>01–02 AUG</time><b>EXCLUSIVE PREVIEW</b><p>PLAYGROUND에서 데뷔 앨범 전곡 무대를 사전 공개.</p></article>
          <article><time>07–13 AUG</time><b>PRE-DEBUT DISCOVERY</b><p>‘Meet my GRLS, TUIDE’가 8월 13일까지 500만 뷰를 넘겼다고 ABD가 밝혔다.</p></article>
          <article><time>08–17 AUG</time><b>PRE-ORDER → SHOWCASE</b><p>Weverse Global 예약 구매자를 대상으로 700명 쇼케이스 응모 구조 운영.</p></article>
          <article><time>24 AUG</time><b>DEBUT / 18:00</b><p>EP 〈TUNE & PLAY〉 발매. 같은 날 20:00 YES24 LIVE HALL 데뷔 쇼케이스 진행.</p></article>
          <article><time>25 AUG / 09:00</time><b>D+1 MELON SNAPSHOT</b><p>ABD 집계 기준 5곡 전부 Hot 100 진입. SUN KISS 16위, GRLS 18위.</p></article>
        </div>
        <button class="tuide-source-link" data-tuide-source="timeline">TIMELINE SOURCES ↗</button>
      </section>

      <section class="tuide-signal-board">
        <div class="tuide-section-head reveal-up"><span>02 / EARLY SIGNALS</span><small>DATA → READ → NEXT CHECK</small></div>

        <article class="tuide-signal tuide-signal-primary reveal-up">
          <div class="tuide-signal-type">MUSIC CONSUMPTION</div>
          <div class="tuide-signal-metric"><strong>#16</strong><span>SUN KISS / MELON HOT 100<br>25 AUG 2026 · 09:00 KST</span></div>
          <div class="tuide-signal-read">
            <b>DATA</b>
            <p>ABD가 8월 25일 오전 9시 기준으로 공개한 Melon Hot 100 순위에서 SUN KISS 16위, GRLS 18위, ABD 54위, Echo 56위, Flip-Flop Girl 57위를 기록했습니다.</p>
            <b>READ</b>
            <p>초기 국내 청취가 타이틀 한 곡에만 모인 형태는 아니었습니다. 선공개곡 GRLS가 타이틀과 가까운 순위에 남아 있었고, EP 전곡이 같은 차트에 진입했습니다.</p>
            <b>NEXT CHECK</b>
            <p>D+3·D+7의 트랙별 순위와 unique listeners를 같은 시각으로 다시 확인합니다. 첫날 진입 이후 소비가 유지되는지 판단할 수 있습니다.</p>
          </div>
          <button data-tuide-source="melon">SOURCE / ABD VIA SEOUL ECONOMIC DAILY ↗</button>
        </article>

        <div class="tuide-signal-pair">
          <article class="tuide-signal reveal-up">
            <div class="tuide-signal-type">DISCOVERY / PRE-DEBUT</div>
            <div class="tuide-signal-metric"><strong>1M</strong><span>TIKTOK FOLLOWERS<br>WITHIN 6 DAYS · COMPANY-REPORTED</span></div>
            <div class="tuide-signal-read">
              <b>DATA</b><p>ABD는 첫 게시물 이후 6일 안에 TikTok 팔로워 100만 명을 확보했다고 밝혔습니다. 같은 기사에서 ‘Meet my GRLS, TUIDE’가 8월 13일까지 YouTube 500만 뷰를 넘겼다고 전했습니다.</p>
              <b>READ</b><p>공식 데뷔 전에 팀 단위 발견량이 먼저 형성됐습니다. 이 숫자는 인지 속도를 보여주지만 데뷔곡의 반복 청취까지 설명하지는 않습니다.</p>
              <b>NEXT CHECK</b><p>GRLS·팀 소개 콘텐츠 유입 cohort가 SUN KISS 청취·팔로우로 얼마나 남았는지 소스별로 추적합니다.</p>
            </div>
            <button data-tuide-source="predebut">SOURCE / ABD VIA KOREA TIMES ↗</button>
          </article>

          <article class="tuide-signal reveal-up">
            <div class="tuide-signal-type">DISCOVERY / DEBUT MV</div>
            <div class="tuide-signal-metric"><strong>5.59M</strong><span>SUN KISS MV<br>WEB SNAPSHOT · 28 AUG 2026</span></div>
            <div class="tuide-signal-read">
              <b>DATA</b><p>제3자 YouTube 스냅샷에서 SUN KISS 공식 MV는 559만 회, 좋아요 약 18.9만 회로 집계됐습니다.</p>
              <b>READ</b><p>발매 직후 영상 유입은 빠르게 발생했습니다. 제3자 스냅샷이므로 내부 YouTube Analytics의 국가·유입경로·재방문 데이터를 함께 봐야 합니다.</p>
              <b>NEXT CHECK</b><p>24시간·72시간·7일 view velocity, Shorts 유입, returning viewers, 국가별 share를 같은 cohort로 확인합니다.</p>
            </div>
            <button data-tuide-source="youtube">SOURCE / THIRD-PARTY YOUTUBE SNAPSHOT ↗</button>
          </article>
        </div>

        <article class="tuide-market reveal-up">
          <div class="tuide-section-label">MARKET PROXY / 25 AUG 2026</div>
          <div class="tuide-market-copy">
            <h2>발매 다음 날 Apple Music 앨범 차트에서 아시아 여러 시장에 진입했습니다.</h2>
            <p>〈TUNE & PLAY〉는 Kworb가 수집한 Apple Music 앨범 차트에서 홍콩·대만 6위, 베트남 13위, 태국 15위, 인도네시아 25위 등을 기록했습니다.</p>
            <p class="tuide-caveat">이 값은 국가별 실청취량이 아니라 차트 진입 여부와 순위입니다. 시장 우선순위를 결정할 때는 Spotify·YouTube의 국가별 리스너와 함께 확인합니다.</p>
          </div>
          <div class="tuide-market-ranks">
            <div><span>HONG KONG</span><b>#6</b></div>
            <div><span>TAIWAN</span><b>#6</b></div>
            <div><span>VIETNAM</span><b>#13</b></div>
            <div><span>THAILAND</span><b>#15</b></div>
            <div><span>INDONESIA</span><b>#25</b></div>
          </div>
          <button class="tuide-source-link" data-tuide-source="market">SOURCE / KWORB APPLE MUSIC SNAPSHOT ↗</button>
        </article>
      </section>

      <section class="tuide-media reveal-up">
        <div class="tuide-section-head"><span>03 / MUSIC + VISUAL EVIDENCE</span><small>OFFICIAL VIDEO · NO AUTOPLAY</small></div>
        <div class="tuide-video-grid">
          <article>
            <div class="tuide-video-frame"><iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/46h0LvDHgIs" title="TUIDE SUN KISS Official MV" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            <div class="tuide-video-meta"><b>SUN KISS</b><span>Official MV · HYBE LABELS · 24 AUG 2026</span></div>
          </article>
          <article>
            <div class="tuide-video-frame"><iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/pHciG9_2xXM" title="Meet my GRLS TUIDE" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            <div class="tuide-video-meta"><b>MEET MY GRLS, TUIDE</b><span>Pre-debut discovery asset · official video</span></div>
          </article>
        </div>
      </section>

      <section class="tuide-conversion reveal-up">
        <div class="tuide-section-head"><span>04 / FANDOM CONVERSION</span><small>OBSERVED TOUCHPOINTS · RATE NOT INFERRED</small></div>
        <div class="tuide-funnel">
          <div><span>01</span><b>DISCOVERY</b><p>GRLS / team video / TikTok / SUN KISS</p></div>
          <i></i>
          <div><span>02</span><b>FOLLOW</b><p>TikTok · Weverse · channel subscription</p></div>
          <i></i>
          <div><span>03</span><b>PURCHASE</b><p>Weverse Album · physical preorder</p></div>
          <i></i>
          <div><span>04</span><b>PARTICIPATION</b><p>700-person preorder-linked debut showcase</p></div>
        </div>
        <div class="tuide-conversion-read">
          <p>공개자료에서는 각 단계의 분모가 확인되지 않습니다. 쇼케이스 700명은 구매 연계 참여 장치를 보여주는 수치이며 구매 전환율로 사용하지 않았습니다.</p>
          <div><span>NEXT DATA</span><b>unique buyers · units/buyer · Weverse join rate · raffle applicants · live viewers · post-showcase stream uplift</b></div>
        </div>
        <button class="tuide-source-link" data-tuide-source="showcase">SOURCE / WEVERSE ↗</button>
      </section>

      <section class="tuide-compare reveal-up">
        <div class="tuide-section-head"><span>05 / TUIDE × OURBIRTHDAY</span><small>SAME-ELAPSED-TIME RULE</small></div>
        <div class="tuide-compare-intro">
          <article class="tuide-artist">
            <div class="tuide-artist-photo">
              <img src="https://i.ytimg.com/vi/pHciG9_2xXM/maxresdefault.jpg" alt="TUIDE group from official video thumbnail" loading="lazy">
            </div>
            <div><span>HYBE / ABD</span><h3>TUIDE</h3><p>7 members · debut 24 Aug 2026</p></div>
          </article>
          <article class="tuide-artist">
            <div class="tuide-artist-photo">
              <img src="https://image.idntimes.com/post/20260810/ot7-900x605_16240960-a204-4cca-b5ee-8dbba1752fa6.jpg?tr=w-1200" alt="OURBIRTHDAY seven-member group" loading="lazy" onerror="this.onerror=null;this.src='https://i.ytimg.com/vi/sJKiaojk-to/maxresdefault.jpg';">
            </div>
            <div><span>JYP / INNIT</span><h3>OURBIRTHDAY</h3><p>7 members · debut 19 Aug 2026</p></div>
          </article>
        </div>

        <div class="tuide-compare-table">
          <div class="tuide-row tuide-row-head"><b>CHECK</b><b>TUIDE</b><b>OURBIRTHDAY</b><b>READ</b></div>
          <div class="tuide-row"><span>NEW-LABEL ENTRY</span><p>ABD 첫 아티스트</p><p>INNIT의 첫 걸그룹</p><p>두 팀 모두 신규/서브 레이블 구조에서 시장에 진입.</p></div>
          <div class="tuide-row"><span>DISCOVERY PLAYLIST</span><p>Spotify K-Pop Rising #6</p><p>Spotify K-Pop Rising #5</p><p>같은 시점의 동일 편집 플레이리스트에 나란히 포함. 순번을 성과 순위로 해석하지 않음.</p></div>
          <div class="tuide-row"><span>PHYSICAL / 7-DAY</span><p>비교 제외</p><p>111,324 copies / Hanteo</p><p>TUIDE 일반 CD의 Weverse 표기 발매일은 9월 11일이고 8월 24일에는 QR 기반 Weverse Album이 먼저 발매됐습니다. 같은 제품·기간 조건이 아니어서 초동 수치를 붙여 비교하지 않음.</p></div>
          <div class="tuide-row"><span>D+N VIDEO / STREAM</span><p>공개 스냅샷 존재</p><p>동일 D+N 스냅샷 미확보</p><p>현재 누적값끼리 비교하면 OURBIRTHDAY에 5일이 더 포함됩니다. 동일 경과일 데이터가 확보될 때 비교.</p></div>
        </div>
        <div class="tuide-compare-note">
          <b>현재 비교에서 얻을 수 있는 정보</b>
          <p>경쟁팀의 절대 수치를 억지로 붙이는 것보다, TUIDE의 D+7·D+14 데이터를 고정한 뒤 OURBIRTHDAY의 같은 경과일을 맞추는 편이 출시 효율을 판단하기에 적합합니다.</p>
        </div>
        <div class="tuide-compare-sources">
          <button data-tuide-source="ourbirthday">OURBIRTHDAY SOURCE ↗</button>
          <button data-tuide-source="hanteo">HANTEO SOURCE ↗</button>
          <button data-tuide-source="rising">SPOTIFY PLAYLIST SOURCE ↗</button>
          <button data-tuide-source="product">TUIDE PRODUCT RELEASE SOURCE ↗</button>
        </div>
      </section>

      <section class="tuide-sro reveal-up">
        <div class="tuide-section-head"><span>06 / SIGNAL · RISK · OPPORTUNITY</span><small>EARLY-STAGE READ</small></div>
        <div class="tuide-sro-grid">
          <article><span>SIGNAL</span><ol>
            <li>공식 데뷔 전 TikTok 100만 팔로워와 500만+ YouTube 영상 조회가 회사 집계로 확인됐습니다.</li>
            <li>D+1 Melon Hot 100에 EP 전곡이 진입했고, 선공개곡 GRLS가 18위에 남았습니다.</li>
            <li>발매 다음 날 Apple Music 앨범 차트가 홍콩·대만·베트남·태국·인도네시아 등에서 확인됐습니다.</li>
          </ol></article>
          <article><span>RISK / WATCH</span><ol>
            <li>현재는 D+5 구간입니다. 초기 발견량이 반복 청취로 남는지 판단할 시간이 짧습니다.</li>
            <li>공개자료에는 follower→stream→purchase의 동일 cohort 분모가 없습니다.</li>
            <li>일반 CD와 Weverse Album의 발매 시점이 다릅니다. 피지컬 성과는 포맷별 집계 조건을 맞춰야 합니다.</li>
          </ol></article>
          <article><span>OPPORTUNITY</span><ol>
            <li>GRLS 유입 cohort가 SUN KISS와 EP 카탈로그로 이동했는지 측정하면 프리데뷔 자산의 효율을 확인할 수 있습니다.</li>
            <li>Apple Music 초기 진입이 확인된 아시아 시장부터 국가별 Spotify·YouTube 청취 share를 붙여 우선시장을 좁힐 수 있습니다.</li>
            <li>멤버별 콘텐츠 조회 분산을 30일간 같은 포맷으로 추적하면 팀 유입과 멤버 유입의 역할을 구분할 수 있습니다.</li>
          </ol></article>
        </div>
      </section>

      <section class="tuide-implications reveal-up">
        <div class="tuide-section-head"><span>07 / WHAT THIS COULD MEAN FOR HYBE</span><small>OBSERVATION → INTERPRETATION → ACTION</small></div>
        <article>
          <span>01 / PRE-DEBUT ACQUISITION</span>
          <div><b>OBSERVATION</b><p>데뷔 전 TikTok 팔로워와 GRLS 기반 영상 조회가 빠르게 쌓였습니다.</p></div>
          <div><b>INTERPRETATION</b><p>팀명과 프리데뷔 콘텐츠가 첫 유입을 만드는 역할을 했습니다. 다음 판단은 이 유입이 데뷔곡 청취로 남았는지에 달려 있습니다.</p></div>
          <div><b>ACTION</b><p>GRLS·team intro·TikTok 유입 cohort의 SUN KISS save, follow, repeat listening, catalog migration을 D+7·D+14로 묶어 봅니다.</p></div>
        </article>
        <article>
          <span>02 / TRACK-LEVEL RETENTION</span>
          <div><b>OBSERVATION</b><p>D+1 Melon Hot 100에 EP 전곡이 들어왔고 SUN KISS와 GRLS가 20위 안에 있었습니다.</p></div>
          <div><b>INTERPRETATION</b><p>초기 국내 청취가 타이틀 외 트랙에도 분산됐습니다. 유지 여부가 확인되면 EP 단위 소비를 설명할 수 있습니다.</p></div>
          <div><b>ACTION</b><p>D+3·D+7·D+14 unique listeners, completion, saves, track-to-track migration을 같은 시각으로 고정해 확인합니다.</p></div>
        </article>
        <article>
          <span>03 / MARKET PRIORITY</span>
          <div><b>OBSERVATION</b><p>발매 다음 날 Apple Music 앨범 차트에서 여러 아시아 시장의 진입이 확인됐습니다.</p></div>
          <div><b>INTERPRETATION</b><p>초기 해외 발견은 한 국가에만 나타나지 않았습니다. 차트 순위만으로 실제 소비 규모를 정할 수는 없습니다.</p></div>
          <div><b>ACTION</b><p>JP·TW·HK·VN·TH·ID의 listeners, stream share, source of streams, social follow growth를 붙여 30일 우선시장 scorecard를 만듭니다.</p></div>
        </article>
      </section>

      <section class="tuide-30d reveal-up">
        <div class="tuide-section-head"><span>08 / 30-DAY TRACKING FRAME</span><small>FIXED WINDOWS</small></div>
        <div class="tuide-30d-grid">
          <article><span>DAY 1–7</span><b>DISCOVERY</b><p>MV view velocity<br>new listeners<br>source of streams</p></article>
          <article><span>DAY 8–14</span><b>RETENTION</b><p>repeat listening<br>save rate<br>catalog migration</p></article>
          <article><span>DAY 15–21</span><b>FANDOM CONVERSION</b><p>unique buyers<br>units / buyer<br>Weverse engagement</p></article>
          <article><span>DAY 22–30</span><b>REPEAT / PARTICIPATION</b><p>listener retention<br>purchase repeat<br>event participation</p></article>
        </div>
        <p class="tuide-30d-note">같은 날짜에 같은 정의로 다시 수집해야 변화율을 비교할 수 있습니다. 공개자료에서 확인할 수 없는 전환율은 내부 데이터 요청으로 분리합니다.</p>
      </section>

      <div class="route-foot">
        <button data-prev="dsp">← PREV</button><span>05 / 08</span><button data-next="tws">NEXT →</button>
      </div>
    </div>
  </div>`;

  tws.parentNode.insertBefore(tuide, tws);

  const dspNext = document.querySelector('[data-route-page="dsp"] [data-next]');
  if (dspNext) dspNext.dataset.next = 'tuide';

  const routeAdjustments = [
    ['tws','06','06 / 08','tuide','method'],
    ['method','07','07 / 08','tws','work'],
    ['work','08','08 / 08','method','home']
  ];
  routeAdjustments.forEach(([route,no,count,prev,next]) => {
    const section = document.querySelector(`[data-route-page="${route}"]`);
    if (!section) return;
    const chapterNo = section.querySelector('.chapter-no');
    if (chapterNo) chapterNo.textContent = no;
    const foot = section.querySelector('.route-foot');
    if (foot) {
      const counter = foot.querySelector('span');
      if (counter) counter.textContent = count;
      const p = foot.querySelector('[data-prev]');
      const n = foot.querySelector('[data-next]');
      if (p) p.dataset.prev = prev;
      if (n) n.dataset.next = next;
    }
  });

  document.querySelectorAll('[data-route-page="market"] .route-foot span,[data-route-page="kpop"] .route-foot span,[data-route-page="fandom"] .route-foot span,[data-route-page="dsp"] .route-foot span').forEach((s, i) => {
    s.textContent = `${String(i+1).padStart(2,'0')} / 08`;
  });

  const sources = {
    debut: {
      title:'TUIDE · Debut / TUNE & PLAY',
      publisher:'Yonhap News Agency',
      date:'24 Aug 2026',
      scope:'Official debut, lineup, album and music positioning',
      definition:'Seven-member TUIDE debuted under HYBE label ABD with the five-track EP TUNE & PLAY and lead single SUN KISS. Soultronic was introduced as the group’s music keyword.',
      url:'https://en.yna.co.kr/view/AEN20260824010400315',
      note:'Used for debut date, ABD first-artist context, seven-member lineup, five-track EP and Soultronic description.'
    },
    timeline: {
      title:'TUIDE · Launch Timeline',
      publisher:'SBS / Weverse / Seoul Economic Daily',
      date:'1–25 Aug 2026',
      scope:'Verified preview, pre-order showcase, debut and D+1 chart events',
      definition:'Only events with a published date and an identifiable source are included.',
      url:'https://weverse.io/tuide/notice/38085',
      note:'PLAYGROUND preview: SBS. Showcase application and 700 winners: Weverse. Debut: Yonhap/Weverse. D+1 Melon snapshot: ABD via Seoul Economic Daily.'
    },
    melon: {
      title:'TUIDE · Melon Hot 100 D+1',
      publisher:'ABD via Seoul Economic Daily',
      date:'25 Aug 2026 · 09:00 KST',
      scope:'Melon Hot 100 rank snapshot',
      definition:'Agency-reported chart positions published by Seoul Economic Daily. This is a fixed snapshot, not a full-day average.',
      url:'https://en.sedaily.com/news/2026/08/25/hybes-new-girl-group-tuide-charts-all-five-debut-tracks',
      note:'SUN KISS #16, GRLS #18, ABD #54, Echo #56, Flip-Flop Girl #57.'
    },
    predebut: {
      title:'TUIDE · Pre-debut Discovery',
      publisher:'ABD via The Korea Times',
      date:'18 Aug 2026 article / metrics stated as of 13 Aug where specified',
      scope:'Company-reported TikTok follower and YouTube video milestones',
      definition:'Secondary press source quoting company-reported figures. Used as discovery signals, not retention or conversion metrics.',
      url:'https://www.koreatimes.co.kr/entertainment/k-pop/20260818/why-did-hybe-create-new-label-just-for-rookie-girl-group-tuide',
      note:'1M TikTok followers within six days of the first post; Meet my GRLS, TUIDE exceeded 5M YouTube views by 13 Aug.'
    },
    youtube: {
      title:'TUIDE · SUN KISS Official MV',
      publisher:'YouTube Trends third-party snapshot',
      date:'Accessed 28 Aug 2026',
      scope:'Public YouTube view/like snapshot for official HYBE LABELS MV',
      definition:'Third-party snapshot of public YouTube metrics. Not used for direct competitor ranking because identical D+N data is not available.',
      url:'https://youtubetrends.sitebrand.online/Video/Details/46h0LvDHgIs',
      note:'Snapshot displayed 5,593,983 views and 188,696 likes.'
    },
    market: {
      title:'TUIDE · Apple Music Market Presence',
      publisher:'Kworb',
      date:'25 Aug 2026 · 15:35 EDT snapshot',
      scope:'Apple Music album chart positions',
      definition:'Chart-position proxy. It indicates chart presence, not territory stream volume or revenue.',
      url:'https://kworb.net/itunes/artist/tuide.html',
      note:'TUNE & PLAY: Hong Kong #6, Taiwan #6, Vietnam #13, Thailand #15, Indonesia #25 in the cited snapshot.'
    },
    showcase: {
      title:'TUIDE · Debut Showcase Pre-order Event',
      publisher:'Weverse Global / ABD',
      date:'8–24 Aug 2026',
      scope:'Pre-order-linked showcase participation structure',
      definition:'700 winners among eligible applicants who bought at least one designated showcase album and completed the application. Applicant denominator is not public.',
      url:'https://weverse.io/tuide/notice/38085',
      note:'Used to describe the purchase-linked participation mechanism. No conversion rate is inferred.'
    },
    ourbirthday: {
      title:'OURBIRTHDAY · Official Debut',
      publisher:'The Korea Times / INNIT Entertainment',
      date:'19 Aug 2026',
      scope:'Official debut, lineup and label context',
      definition:'Seven-member OURBIRTHDAY debuted under INNIT Entertainment with first single Our Birthday and lead track SQUEEZY.',
      url:'https://www.koreatimes.co.kr/entertainment/k-pop/20260819/ourbirthday-debuts-as-1st-jyp-affiliated-girl-group-in-4-years',
      note:'Used only as the primary same-market rookie comparator.'
    },
    hanteo: {
      title:'OURBIRTHDAY · Initial Chodong',
      publisher:'Hanteo Chart',
      date:'19–25 Aug 2026',
      scope:'Seven-day initial physical sales',
      definition:'Hanteo Initial Chodong sales. Shown as a benchmark reference only; TUIDE is not compared because its standard CD and Weverse Album release timing differs.',
      url:'https://www.hanteochart.com/en/honors/initial',
      note:'Our Birthday: 111,324 copies.'
    },
    rising: {
      title:'Spotify · K-Pop Rising',
      publisher:'Spotify',
      date:'Accessed 28 Aug 2026',
      scope:'Editorial playlist snapshot',
      definition:'Playlist order is not treated as a performance ranking.',
      url:'https://open.spotify.com/embed/playlist/37i9dQZF1DX4FcAKI5Nhzq',
      note:'Snapshot showed OURBIRTHDAY SQUEEZY at #5 and TUIDE SUN KISS at #6.'
    },
    product: {
      title:'TUIDE · TUNE & PLAY Product Timing',
      publisher:'Weverse Shop',
      date:'Accessed 28–29 Aug 2026',
      scope:'Official product release dates and formats',
      definition:'Weverse Albums version is listed with 24 Aug release; standard CD Weverse Exclusive listings show 11 Sep release.',
      url:'https://shop.weverse.io/en/shop/KRW/artists/306/sales/65843',
      note:'This timing difference is why a like-for-like first-week physical comparison with OURBIRTHDAY is excluded at this stage.'
    }
  };

  const sourceDrawer = document.getElementById('sourceDrawer');
  const sourceBody = document.getElementById('sourceBody');
  document.querySelectorAll('[data-tuide-source]').forEach(btn => {
    btn.addEventListener('click', () => {
      const s = sources[btn.dataset.tuideSource];
      if (!s || !sourceDrawer || !sourceBody) return;
      sourceBody.innerHTML = `<div class="source-block">
        <h3>${s.title}</h3><p>${s.note}</p>
        <dl>
          <div><dt>PUBLISHER</dt><dd>${s.publisher}</dd></div>
          <div><dt>PUBLISHED / AS OF</dt><dd>${s.date}</dd></div>
          <div><dt>SCOPE</dt><dd>${s.scope}</dd></div>
          <div><dt>DEFINITION</dt><dd>${s.definition}</dd></div>
        </dl>
        <a href="${s.url}" target="_blank" rel="noreferrer">OPEN ORIGINAL SOURCE ↗</a>
      </div>`;
      sourceDrawer.classList.add('open');
      sourceDrawer.setAttribute('aria-hidden','false');
    });
  });
})();
