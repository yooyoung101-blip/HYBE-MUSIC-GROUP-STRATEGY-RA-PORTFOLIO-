
const routes=[...document.querySelectorAll('[data-route-page]')];
const order=routes.map(r=>r.dataset.routePage);
const indexScreen=document.getElementById('indexScreen');
const indexButtons=[...document.querySelectorAll('#indexList [data-route]')];
const indexGhost=document.getElementById('indexGhost');
const curtain=document.querySelector('.page-curtain');
const cursor=document.querySelector('.cursor');
const sourceDrawer=document.getElementById('sourceDrawer');
const sourceBody=document.getElementById('sourceBody');
const progress=document.getElementById('routeProgress');
let current='home',busy=false,revealObserver=null,countObserver=null;

const sources={
  ifpi:{
    title:'IFPI · Global Music Report 2026',
    publisher:'IFPI',date:'18 Mar 2026',
    scope:'Calendar year 2025 / global recorded music revenues',
    definition:'Record-company revenue data supplied through IFPI members and national groups. Figures shown here use the public State of the Industry release.',
    url:'https://www.ifpi.org/global-music-report-2026-global-recorded-music-revenues-grow-6-4-as-record-companies-drive-innovation/',
    note:'Used for $31.7B global revenue, +6.4% growth, 69.6% streaming share, 52.4% paid-subscription share, 837M paid-account users, Asia +10.9%, Asia 45.1% of global physical revenue, Japan +8.9%, China +20.1% and South Korea #7.'
  },
  kpop:{
    title:'Luminate · Beyond K-Pop: Preserving South Korea’s Musical Future',
    publisher:'Luminate',date:'26 May 2026',
    scope:'2025 global streaming / Luminate genre classification',
    definition:'Foreign K-pop streams exclude the Republic of Korea. Luminate describes nearly three of every four global K-pop streams as coming from foreign listeners.',
    url:'https://luminatedata.com/blog/beyond-k-pop-preserving-south-koreas-musical-future/',
    note:'Used for ≈75% overseas share; 48 artists accounting for 39% / ~50B foreign K-pop streams; and the U.S. R&B/Hip-Hop comparator of 112 artists accounting for 36%.'
  },
  superfan:{
    title:'Luminate · 2026 Midyear Report',
    publisher:'Luminate',date:'Jul 2026',
    scope:'U.S. music listeners / H1 2026',
    definition:'Superfan = U.S. music listener engaging with artists/music in five or more ways. CD sales cover the first half of 2026.',
    url:'https://luminatedata.com/blog/luminate-2026-midyear-report-trends-in-music-television-film/',
    note:'Used for 20% U.S. superfans, 22% purchase-based superfans, 17% engagement-based superfans, 11% overlap, and 16.3M U.S. CD sales in H1 2026 (+16.0% YoY).'
  },
  physical:{
    title:'Luminate · Physical Sales in 2025',
    publisher:'Luminate',date:'2026',
    scope:'U.S. 2025 physical/CD sales + U.S. Music 360 survey',
    definition:'Survey result: 27% of U.S. K-pop fans bought a CD in 2025 versus 19% of general U.S. music listeners.',
    url:'https://luminatedata.com/blog/taylor-swift-wasnt-the-only-winner-of-physical-sales-in-2025/',
    note:'Used for 27% vs 19%; nearly a quarter of K-pop CD buyers purchasing 5–9 CDs in the prior 12 months; and seven K-pop titles in the U.S. annual CD Top 10.'
  },
  spotifyDiscovery:{
    title:'Spotify · Music Discovery / Discover Weekly',
    publisher:'Spotify',date:'22 Jan & 30 Jun 2025',
    scope:'Spotify company-reported discovery activity',
    definition:'Spotify describes a music discovery as a listener encountering an artist or track through Spotify discovery surfaces. Discover Weekly statistics refer specifically to that playlist.',
    url:'https://newsroom.spotify.com/2025-06-30/discover-weekly-turns-10-celebrating-100-billion-tracks-streamed-and-a-decade-of-personalized-discovery/',
    note:'Spotify reported nearly 2B music discoveries every 24 hours in Jan 2025. Discover Weekly was reported to generate 56M+ new artist discoveries per week, with 77% coming from emerging artists.'
  },
  spotifyData:{
    title:'Spotify for Artists · How to Read Your Data',
    publisher:'Spotify for Artists',date:'Official resource',
    scope:'Artist-level Spotify analytics',
    definition:'Source of Streams breaks streams out by origins such as artist profile, editorial/personalized playlists and listener libraries/playlists.',
    url:'https://artists.spotify.com/en/blog/how-to-read-your-spotify-for-artists-data',
    note:'Used to define the proposed DSP research flow: source of streams → save/playlist/follow signals → repeat listening → geographic and catalog movement.'
  },
  youtube:{
    title:'YouTube · $8 Billion Music Payout',
    publisher:'YouTube',date:'23 Oct 2025',
    scope:'12 months Jul 2024–Jun 2025',
    definition:'Company-reported payout to the music industry from YouTube’s advertising and subscription businesses.',
    url:'https://blog.youtube/news-and-events/8-billion-youtubes-twin-engine-continues-to-fuel-the-future-of-music/',
    note:'Used for $8B+ payout, 125M+ Music/Premium subscribers including trials, and 2B+ logged-in monthly music-video viewers.'
  },
  twsPhoto:{
    title:'TWS · NO TRAGEDY Official Photo / FINAL MOVE Ver.',
    publisher:'TWS / Weverse',date:'Apr 2026',
    scope:'Official promotional image',
    definition:'Official TWS promotional image published on Weverse.',
    url:'https://weverse.io/tws/media/4-225830840',
    note:'Used only as the artist-case background image. No AI-generated artist image is used.'
  },
  twsJapan:{
    title:'Billboard JAPAN · NO TRAGEDY Top Albums Sales #1',
    publisher:'Billboard JAPAN',date:'11 May 2026',
    scope:'Sales period 4–10 May 2026 / SoundScan Japan',
    definition:'Billboard JAPAN Top Albums Sales uses SoundScan Japan CD sales data.',
    url:'https://www.billboard-japan.com/d_news/detail/161289/2',
    note:'TWS NO TRAGEDY sold 231,793 copies in its first Japanese sales week and ranked #1. Billboard reported a gap of roughly 126K copies versus #2.'
  },
  twsOricon:{
    title:'TWS Japan Official · Oricon weekly double #1',
    publisher:'TWS Japan Official',date:'13 May 2026',
    scope:'Oricon weekly album + combined album rankings dated 18 May 2026',
    definition:'Official artist-site announcement citing Oricon weekly rankings.',
    url:'https://tws-official.jp/news/33bd1e24eb87',
    note:'The official Japanese site reported #1 on both Oricon Weekly Album and Weekly Combined Album rankings and described the Japanese-release first week as TWS’s highest to date.'
  },
  twsOriconLab:{
    title:'Oricon Music Ranking Lab · NO TRAGEDY',
    publisher:'Oricon',date:'Accessed Aug 2026',
    scope:'Weekly album ranking history',
    definition:'Ranking Lab page lists peak rank and number of weekly ranking appearances.',
    url:'https://www.oricon.co.jp/music/rankinglab/ja/30780/',
    note:'As of the 24 Aug 2026 chart shown on the page, NO TRAGEDY had a peak of #1 and 14 ranking appearances; that week it ranked #16 with 2,684 estimated copies.'
  },
  twsActivation:{
    title:'Weverse · NO TRAGEDY Comeback Showcase',
    publisher:'PLEDIS Entertainment / Weverse',date:'Apr 2026',
    scope:'Comeback showcase participation + live distribution',
    definition:'Official event notices for buyer raffle, membership raffle and Weverse LIVE distribution.',
    url:'https://weverse.io/tws/notice/34834',
    note:'Buyer-linked raffle: 600 winners. Membership raffle notice: 340 attendees. Showcase streaming: Weverse, TikTok and HYBE LABELS YouTube. Weverse LIVE notice listed real-time subtitles in eight languages.'
  },
  twsRelease:{
    title:'Weverse · NO TRAGEDY Release and Pre-order',
    publisher:'PLEDIS Entertainment / Weverse',date:'30 Mar 2026',
    scope:'5th Mini Album release / retailer and format notice',
    definition:'Official pre-order notice listing available album formats and retailers.',
    url:'https://weverse.io/tws/notice/34527',
    note:'Formats listed include standard/random set, COMPACT HUSH/RUSH/BLUSH, Weverse Album and KiT, distributed across Weverse Shop and multiple music retailers.'
  }
};

function syncIndex(){
  indexButtons.forEach(b=>b.classList.toggle('active',b.dataset.route===current));
}
function openIndex(){
  syncIndex();
  indexScreen.classList.add('open');
  indexScreen.setAttribute('aria-hidden','false');
}
function closeIndex(){
  indexScreen.classList.remove('open');
  indexScreen.setAttribute('aria-hidden','true');
}
document.querySelectorAll('.js-open-index').forEach(b=>b.addEventListener('click',openIndex));
document.querySelectorAll('.js-close-index').forEach(b=>b.addEventListener('click',closeIndex));

indexButtons.forEach(b=>{
  b.addEventListener('mouseenter',()=>{ if(indexGhost) indexGhost.textContent=b.querySelector('span')?.textContent||'00'; });
  b.addEventListener('focus',()=>{ if(indexGhost) indexGhost.textContent=b.querySelector('span')?.textContent||'00'; });
  b.addEventListener('click',()=>go(b.dataset.route));
});

function setupReveal(page){
  if(revealObserver) revealObserver.disconnect();
  const scroller=page.querySelector('.chapter-scroll')||null;
  const items=[...page.querySelectorAll('.reveal-up')];
  items.forEach(el=>el.classList.remove('in'));
  revealObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting)return;
      const siblings=items.filter(x=>!x.classList.contains('in'));
      const i=Math.max(0,siblings.indexOf(entry.target));
      setTimeout(()=>entry.target.classList.add('in'),Math.min(i,4)*70);
      revealObserver.unobserve(entry.target);
    });
  },{root:scroller,threshold:.10,rootMargin:'0px 0px -6% 0px'});
  items.forEach(el=>revealObserver.observe(el));
  requestAnimationFrame(()=>items.slice(0,2).forEach((el,i)=>setTimeout(()=>el.classList.add('in'),90+i*90)));
  setupCounters(page,scroller);
}
function setupCounters(page,root){
  if(countObserver)countObserver.disconnect();
  const els=[...page.querySelectorAll('[data-count]')];
  countObserver=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(!e.isIntersecting)return;
      animateNumber(e.target);
      countObserver.unobserve(e.target);
    });
  },{root,threshold:.45});
  els.forEach(el=>countObserver.observe(el));
}
function animateNumber(el){
  if(el.dataset.counted)return;
  el.dataset.counted='1';
  const target=Number(el.dataset.count);
  if(!Number.isFinite(target))return;
  const original=el.textContent.trim();
  const explicitSuffix=el.dataset.suffix;
  const prefix=(original.match(/^[^\d\-]+/)||[''])[0].replace(/\s+$/,'');
  const suffix=explicitSuffix ?? (original.match(/[^\d.,]+$/)||[''])[0];
  const comma=el.dataset.format==='comma';
  const decimals=String(target).includes('.')?String(target).split('.')[1].length:0;
  const start=performance.now(),duration=1150;
  function frame(now){
    const t=Math.min(1,(now-start)/duration);
    const eased=1-Math.pow(1-t,3);
    const val=target*eased;
    const body=comma?Math.round(val).toLocaleString('en-US'):val.toFixed(decimals);
    el.textContent=`${prefix}${body}${suffix}`;
    if(t<1)requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

function activePage(){return routes.find(r=>r.dataset.routePage===current)}
function updateProgress(){
  const page=activePage();
  if(!page||current==='home'){progress.style.width='0';return}
  const sc=page.querySelector('.chapter-scroll');
  if(!sc){progress.style.width='0';return}
  const max=sc.scrollHeight-sc.clientHeight;
  progress.style.width=(max>0?(sc.scrollTop/max)*100:0)+'%';
}
routes.forEach(page=>{
  const sc=page.querySelector('.chapter-scroll');
  if(sc)sc.addEventListener('scroll',()=>{if(page.dataset.routePage===current)updateProgress()},{passive:true});
});

function go(route,push=true){
  if(busy||!order.includes(route)){closeIndex();return}
  if(route===current){closeIndex();return}
  busy=true;
  curtain.classList.remove('run');void curtain.offsetWidth;curtain.classList.add('run');
  setTimeout(()=>{
    routes.forEach(r=>r.classList.toggle('active',r.dataset.routePage===route));
    current=route;
    const page=activePage();
    const sc=page.querySelector('.chapter-scroll');if(sc)sc.scrollTop=0;
    if(push)history.pushState({route},'',route==='home'?location.pathname:location.pathname+'#'+route);
    syncIndex();closeIndex();setupReveal(page);updateProgress();
  },405);
  setTimeout(()=>{busy=false;curtain.classList.remove('run')},930);
}
document.querySelectorAll('[data-prev],[data-next]').forEach(b=>b.addEventListener('click',()=>go(b.dataset.prev||b.dataset.next)));

function openSource(key){
  const s=sources[key];if(!s)return;
  sourceBody.innerHTML=`<div class="source-block">
    <h3>${s.title}</h3><p>${s.note}</p>
    <dl>
      <div><dt>PUBLISHER</dt><dd>${s.publisher}</dd></div>
      <div><dt>PUBLISHED</dt><dd>${s.date}</dd></div>
      <div><dt>SCOPE</dt><dd>${s.scope}</dd></div>
      <div><dt>DEFINITION</dt><dd>${s.definition}</dd></div>
    </dl>
    <a href="${s.url}" target="_blank" rel="noreferrer">OPEN ORIGINAL SOURCE ↗</a>
  </div>`;
  sourceDrawer.classList.add('open');sourceDrawer.setAttribute('aria-hidden','false');
}
function closeSource(){sourceDrawer.classList.remove('open');sourceDrawer.setAttribute('aria-hidden','true')}
document.querySelectorAll('[data-source]').forEach(b=>b.addEventListener('click',()=>openSource(b.dataset.source)));
document.querySelectorAll('[data-source-close]').forEach(b=>b.addEventListener('click',closeSource));

document.querySelectorAll('.donut').forEach(d=>d.style.setProperty('--p',d.dataset.value||39));

if(matchMedia('(pointer:fine)').matches){
  let x=innerWidth/2,y=innerHeight/2,tx=x,ty=y;
  addEventListener('mousemove',e=>{
    tx=e.clientX;ty=e.clientY;
    document.documentElement.style.setProperty('--mx',((tx/innerWidth)-.5).toFixed(3));
    document.documentElement.style.setProperty('--my',((ty/innerHeight)-.5).toFixed(3));
  },{passive:true});
  function loop(){x+=(tx-x)*.17;y+=(ty-y)*.17;cursor.style.left=x+'px';cursor.style.top=y+'px';requestAnimationFrame(loop)}loop();
  document.querySelectorAll('button,a').forEach(el=>{
    const label=el.classList.contains('js-open-index')?'INDEX':el.hasAttribute('data-source')?'SOURCE':el.matches('.work-card')?'VIEW':'OPEN';
    el.addEventListener('mouseenter',()=>{cursor.classList.add('link');cursor.dataset.label=label});
    el.addEventListener('mouseleave',()=>{cursor.classList.remove('link');cursor.dataset.label=''});
  });
  const tws=document.querySelector('[data-route-page="tws"] .chapter-scroll');
  const photo=document.querySelector('.tws-photo');
  tws?.addEventListener('mousemove',e=>{
    const dx=(e.clientX/innerWidth-.5)*9,dy=(e.clientY/innerHeight-.5)*5;
    if(photo)photo.style.transform=`scale(1.02) translate(${dx}px,${dy}px)`;
  },{passive:true});
  tws?.addEventListener('mouseleave',()=>{if(photo)photo.style.transform='scale(1.015)'});
}

addEventListener('keydown',e=>{
  if(e.key==='Escape'){closeIndex();closeSource();return}
  if(indexScreen.classList.contains('open')||sourceDrawer.classList.contains('open'))return;
  const i=order.indexOf(current);
  if(['ArrowRight','PageDown'].includes(e.key)&&i<order.length-1)go(order[i+1]);
  if(['ArrowLeft','PageUp'].includes(e.key)&&i>0)go(order[i-1]);
});
addEventListener('popstate',()=>{
  const route=location.hash.replace('#','')||'home';
  if(route!==current&&order.includes(route))go(route,false);
});

const initial=location.hash.replace('#','');
if(initial&&order.includes(initial)){
  current=initial;routes.forEach(r=>r.classList.toggle('active',r.dataset.routePage===initial));
}
syncIndex();setupReveal(activePage());updateProgress();

/* Opening-page refinement */
const opening=document.querySelector('[data-route-page="home"]');
const openingEnter=opening?.querySelector('.home-bottom .enter');
if(openingEnter) openingEnter.remove();
const openingCopy=opening?.querySelector('.home-bottom p');
if(openingCopy){
  openingCopy.innerHTML='<span>글로벌 음악 시장의 규모, K-pop의 해외 소비, 팬덤의 구매 행동, DSP의 발견 구조를 같은 리서치 흐름 안에서 검토했습니다.</span><span>각 수치에는 <b>출처·기간·정의</b>를 붙였고, 공개자료로 확인할 수 없는 항목은 내부 데이터 요청으로 남겼습니다.</span>';
}
const openingStyle=document.createElement('style');
openingStyle.textContent=`
[data-route-page="home"] .hero-title,
[data-route-page="home"] .hero-line,
[data-route-page="home"] .home-topline,
[data-route-page="home"] .home-bottom{
  font-family:-apple-system,BlinkMacSystemFont,"Helvetica Neue","Apple SD Gothic Neo","Noto Sans KR",Arial,sans-serif !important;
}
[data-route-page="home"] .hero-title .hero-line{
  font-weight:600 !important;
  letter-spacing:-.062em !important;
  background:none !important;
  -webkit-background-clip:initial !important;
  background-clip:initial !important;
  -webkit-text-fill-color:currentColor !important;
  text-shadow:none !important;
}
[data-route-page="home"] .hero-title .hero-line:first-child{color:#f1f2f3 !important;}
[data-route-page="home"] .hero-title .hero-line.metal{color:#aeb3b9 !important;}
[data-route-page="home"] .home-bottom{grid-template-columns:1fr !important;}
[data-route-page="home"] .home-bottom p{max-width:760px !important;line-height:1.72 !important;letter-spacing:-.018em !important;}
[data-route-page="home"] .home-bottom p>span{display:block;}
[data-route-page="home"] .home-bottom p>span+span{margin-top:.55em;}
@media(max-width:720px){
  [data-route-page="home"] .hero-title .hero-line{font-size:clamp(52px,15vw,86px) !important;line-height:.9 !important;}
  [data-route-page="home"] .home-bottom p{font-size:12px !important;line-height:1.75 !important;}
}
`;
document.head.appendChild(openingStyle);
