(() => {
  const setHtml = (route, selector, html) => {
    const el = document.querySelector(`[data-route-page="${route}"] ${selector}`);
    if (el) el.innerHTML = html;
  };
  const setText = (route, selector, text) => {
    const el = document.querySelector(`[data-route-page="${route}"] ${selector}`);
    if (el) el.textContent = text;
  };

  setHtml('market', '.chapter-title-block h1', 'READ APAC<br><span>BY MARKET & FORMAT.</span>');
  setHtml('kpop', '.chapter-title-block h1', 'GLOBAL REACH.<br><span>CHECK THE CONCENTRATION.</span>');
  setHtml('fandom', '.chapter-title-block h1', 'SIZE THE FANDOM.<br><span>MEASURE PURCHASE DEPTH.</span>');
  setHtml('dsp', '.chapter-title-block h1', 'FROM DISCOVERY<br><span>TO RETENTION.</span>');
  setHtml('method', '.chapter-title-block h1', 'DEFINE THE QUESTION.<br><span>SET THE MEASUREMENT FRAME.</span>');
  setHtml('work', '.chapter-title-block h1', 'FROM RESEARCH<br><span>TO RELEASE STRATEGY.</span>');

  setText('method', '.chapter-title-block p', 'A research note follows one fixed order: question, source, scope, read, data request, and decision note.');
  setText('work', '.chapter-title-block p', 'Selected self-initiated projects translating artist and market research into album briefs, content architecture, release planning, and KPI design.');

  const methodCopy = [
    ['QUESTION', 'Frame the decision question in one sentence.'],
    ['SOURCE STACK', 'Prioritize primary sources, industry bodies, and data providers.'],
    ['DEFINITION', 'Lock the period, market, denominator, and scope.'],
    ['READ', 'Separate what the data shows from what it may imply.'],
    ['DATA REQUEST', 'Flag the gaps that require internal data.'],
    ['DECISION NOTE', 'Close with the current read and the next action.']
  ];
  const methodItems = [...document.querySelectorAll('[data-route-page="method"] .method-list article')];
  methodItems.forEach((item, i) => {
    const pair = methodCopy[i];
    if (!pair) return;
    const label = item.querySelector('b');
    const body = item.querySelector('p');
    if (label) label.textContent = pair[0];
    if (body) body.textContent = pair[1];
  });

  const style = document.createElement('style');
  style.textContent = `
    [data-route-page="market"] .chapter-title-block h1,
    [data-route-page="kpop"] .chapter-title-block h1,
    [data-route-page="fandom"] .chapter-title-block h1,
    [data-route-page="dsp"] .chapter-title-block h1,
    [data-route-page="method"] .chapter-title-block h1,
    [data-route-page="work"] .chapter-title-block h1{
      font-family:-apple-system,BlinkMacSystemFont,"Helvetica Neue",Arial,sans-serif!important;
      font-weight:600!important;
      letter-spacing:-.055em!important;
      line-height:.92!important;
    }
    [data-route-page="method"] .chapter-title-block p,
    [data-route-page="work"] .chapter-title-block p,
    [data-route-page="method"] .method-list p{
      font-family:-apple-system,BlinkMacSystemFont,"Helvetica Neue",Arial,sans-serif!important;
      letter-spacing:-.012em!important;
    }
  `;
  document.head.appendChild(style);
})();
