// =============================================================
//  APPROFONDIMENTI — schede complete tratte dai PDF dell'utente
//  Ogni file in pdf-studi/ aggiunge una voce a window.PDF_STUDI
//  (stesso schema di video-studi.js). Qui le mostriamo una alla
//  volta, con un elenco cliccabile in cima e versetti cliccabili.
// =============================================================

function renderApprofondimenti(containerId) {
  const panel = document.getElementById(containerId || 'approfondimenti');
  const studi = (window.PDF_STUDI || []).slice().sort((a, b) => (a.ordine || 99) - (b.ordine || 99));
  if (!panel) return;

  let html = '<div class="study-hero"><h2>Approfondimenti</h2>'
    + '<p class="study-meta">Gli studi completi tratti dai tuoi documenti</p>'
    + '<p class="study-tagline">Scegli un tema dall\'elenco: ogni scheda riporta per intero gli insegnamenti del documento, organizzati a tappe, con le parole originali, i simbolismi e i versetti, che puoi aprire con un clic.</p></div>';

  if (!studi.length) {
    panel.innerHTML = html + '<p class="section-sub">Nessuno studio disponibile al momento.</p>';
    return;
  }

  html += '<nav class="teaching-subnav appro-index">';
  studi.forEach((s, i) => { html += `<button type="button" data-studio="${s.id}">${i + 1}. ${s.titolo}</button>`; });
  html += '</nav>';

  studi.forEach(s => {
    html += `<div class="appro-studio" id="appro-${s.id}" hidden>`;
    html += `<div class="study-hero"><h2>${s.titolo}</h2>`
      + (s.sottotitolo ? `<p class="study-meta">${s.sottotitolo}</p>` : '')
      + (s.tagline ? `<p class="study-tagline">${s.tagline}</p>` : '') + '</div>';

    html += '<div class="cov-meta study-facts">';
    (s.facts || []).forEach(f => { html += `<div><span class="cov-k">${f.k}</span><span class="cov-v">${f.v}</span></div>`; });
    if (s.fonte) html += `<div><span class="cov-k">Fonte</span><span class="cov-v">${s.fonte}</span></div>`;
    html += '</div>';

    html += '<nav class="teaching-subnav">';
    s.sezioni.forEach((x, i) => { html += `<button type="button" data-target="appro-${s.id}-${x.id}">${i + 1}. ${x.title}</button>`; });
    html += '</nav>';

    s.sezioni.forEach((x, i) => {
      html += `<section class="teaching-section" id="appro-${s.id}-${x.id}">`
        + `<div class="study-step">Tappa ${i + 1} di ${s.sezioni.length}</div>`
        + `<h3>${x.title}</h3>`
        + (x.subtitle ? `<p class="section-sub">${x.subtitle}</p>` : '')
        + `<div class="teaching-body">${x.html}</div></section>`;
    });
    html += '</div>';
  });

  panel.innerHTML = html;

  const linked = new Set();
  function mostra(id, scroll) {
    panel.querySelectorAll('.appro-studio').forEach(d => { d.hidden = d.id !== 'appro-' + id; });
    panel.querySelectorAll('.appro-index button').forEach(b => b.classList.toggle('active', b.dataset.studio === id));
    const box = document.getElementById('appro-' + id);
    if (box && !linked.has(id) && typeof linkVersetti === 'function') {
      box.querySelectorAll('.teaching-body').forEach(b => linkVersetti(b));
      linked.add(id);
    }
    if (scroll && box) box.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  panel.querySelectorAll('.appro-index button').forEach(btn => {
    btn.addEventListener('click', () => mostra(btn.dataset.studio, true));
  });
  panel.querySelectorAll('.appro-studio .teaching-subnav button').forEach(btn => {
    btn.addEventListener('click', () => {
      const t = document.getElementById(btn.dataset.target);
      if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  mostra(studi[0].id, false);
}
