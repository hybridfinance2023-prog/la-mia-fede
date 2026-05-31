// =============================================================
//  APP — La mia fede
// =============================================================

// ---- Navigazione tra tab ----
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    tabs.forEach(t => t.classList.toggle('active', t === tab));
    panels.forEach(p => p.classList.toggle('active', p.id === target));
    // le mappe Leaflet vanno inizializzate/ridimensionate quando il pannello è visibile
    if (target === 'esplora') {
      if (typeof ensureEsploraMap === 'function') ensureEsploraMap();
      if (typeof ensureDiffMap === 'function') ensureDiffMap();
    }
  });
});

// ---- Helper ----
function h(tag, attrs = {}, children = []) {
  const el = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === 'class') el.className = v;
    else if (k === 'html') el.innerHTML = v;
    else el.setAttribute(k, v);
  });
  (Array.isArray(children) ? children : [children]).forEach(c => {
    if (c == null) return;
    el.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
  });
  return el;
}

// ---- 1. GENEALOGIA (mappa interattiva dall'alto verso il basso) ----

// Spina dorsale unica (Adamo → Gesù), senza duplicati consecutivi
function genSpine() {
  const spine = [];
  GENEALOGIA.forEach(section => {
    section.chain.forEach(name => {
      if (spine[spine.length - 1] !== name) spine.push(name);
    });
  });
  return spine;
}

// Ordine completo per la navigazione prev/next: spina + figure dopo Gesù
function genFullOrder() {
  const post = (typeof FIGURE_DOPO_GESU !== 'undefined')
    ? FIGURE_DOPO_GESU.flatMap(g => g.membri) : [];
  return [...genSpine(), ...post];
}

function hasPersona(name) {
  return typeof PERSONE_GENEALOGIA !== 'undefined' && !!PERSONE_GENEALOGIA[name];
}

function openPersona(name) {
  const p = PERSONE_GENEALOGIA[name];
  if (!p) return;
  const order = genFullOrder();
  const spineLen = genSpine().length;
  const idx = order.indexOf(name);

  let overlay = document.getElementById('gen-overlay');
  if (!overlay) {
    overlay = h('div', { id: 'gen-overlay', class: 'gen-overlay' });
    overlay.addEventListener('click', e => { if (e.target === overlay) closePersona(); });
    document.body.appendChild(overlay);
  }
  overlay.innerHTML = '';

  const card = h('div', { class: 'gen-modal' + (p.post ? ' post' : '') });

  const close = h('button', { class: 'gen-close', type: 'button', 'aria-label': 'Chiudi' }, '×');
  close.addEventListener('click', closePersona);
  card.appendChild(close);

  const step = p.post
    ? 'Dopo Gesù · la Chiesa nascente'
    : (idx >= 0 ? `Tappa ${idx + 1} di ${spineLen} · da Adamo a Gesù` : '');
  card.appendChild(h('div', { class: 'gen-step' }, step));
  card.appendChild(h('h3', { class: 'gen-name' }, name));
  if (p.meaning) card.appendChild(h('p', { class: 'gen-meaning' }, p.meaning));
  if (p.ref) card.appendChild(h('p', { class: 'gen-ref' }, p.ref));

  const fields = [
    ['Ruolo', p.role],
    ['Cosa rappresenta', p.represents],
    ['Che insegnamento ci dà', p.teaching],
    [p.post ? 'Come continua l’opera di Cristo' : 'Come prepara la via a Cristo', p.toward]
  ];
  fields.forEach(([label, val]) => {
    if (!val) return;
    const block = h('div', { class: 'gen-field' });
    block.appendChild(h('span', { class: 'gen-field-label' }, label));
    block.appendChild(h('p', { class: 'gen-field-text', html: val }));
    card.appendChild(block);
  });

  // Navigazione lungo tutta la storia
  const nav = h('div', { class: 'gen-nav' });
  const prev = h('button', { class: 'nav-btn', type: 'button' }, '← Precedente');
  prev.disabled = idx <= 0;
  prev.addEventListener('click', () => openPersona(order[idx - 1]));
  const next = h('button', { class: 'nav-btn', type: 'button' }, 'Successivo →');
  next.disabled = idx < 0 || idx >= order.length - 1;
  next.addEventListener('click', () => openPersona(order[idx + 1]));
  nav.append(prev, next);
  card.appendChild(nav);

  overlay.appendChild(card);
  overlay.classList.add('show');
  card.scrollTop = 0;
}

function closePersona() {
  const overlay = document.getElementById('gen-overlay');
  if (overlay) overlay.classList.remove('show');
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closePersona();
});

function genPill(name, highlight) {
  const clickable = hasPersona(name);
  const btn = h('button', {
    type: 'button',
    class: 'gen-pill' + (highlight ? ' highlight' : '') + (clickable ? ' clickable' : '')
  }, name);
  if (clickable) btn.addEventListener('click', () => openPersona(name));
  else btn.disabled = true;
  return btn;
}

function renderGenealogia() {
  const panel = document.getElementById('genealogia');
  panel.innerHTML = '';
  panel.appendChild(h('h2', {}, 'Genealogia: da Adamo a Cristo e oltre'));
  panel.appendChild(h('p', { class: 'intro' },
    'La linea della promessa scorre dall’alto verso il basso, da Adamo fino al «nuovo Adamo» Gesù Cristo — e da Lui si apre nella Chiesa. ' +
    'Tocca ogni nome per scoprire chi era, cosa rappresenta, quale insegnamento ci dà e come prepara (o continua) l’opera del Signore.'
  ));

  // ----- Spina dorsale verticale, raggruppata per epoca -----
  const tree = h('div', { class: 'gen-tree' });
  let lastRendered = null;
  GENEALOGIA.forEach(section => {
    const era = h('div', { class: 'gen-era' });
    const label = h('div', { class: 'gen-era-label' });
    label.appendChild(h('span', { class: 'gen-era-title' }, section.title));
    label.appendChild(h('span', { class: 'gen-era-ref' }, section.ref));
    era.appendChild(label);

    section.chain.forEach(name => {
      if (name === lastRendered) return; // evita il duplicato di confine
      lastRendered = name;
      const isHighlight = section.highlight && section.highlight.includes(name);
      const node = h('div', { class: 'gen-node' + (isHighlight ? ' is-goal' : '') });
      node.appendChild(genPill(name, isHighlight));
      era.appendChild(node);
    });
    tree.appendChild(era);
  });
  panel.appendChild(tree);

  // ----- Ramificazione dopo Gesù -----
  if (typeof FIGURE_DOPO_GESU !== 'undefined') {
    const after = h('div', { class: 'gen-after' });
    after.appendChild(h('div', { class: 'gen-branch-connector' }));
    after.appendChild(h('h3', { class: 'gen-after-title' }, 'Dopo Gesù — la Chiesa nascente'));
    after.appendChild(h('p', { class: 'gen-after-lead' },
      'Da Cristo la linea non finisce: si apre e si moltiplica. Gli apostoli, gli evangelisti e i primi testimoni portano il Vangelo al mondo.'
    ));
    FIGURE_DOPO_GESU.forEach(group => {
      const g = h('div', { class: 'gen-after-group' });
      g.appendChild(h('div', { class: 'gen-after-label' }, group.group));
      if (group.note) g.appendChild(h('p', { class: 'gen-after-note' }, group.note));
      const fan = h('div', { class: 'gen-fan' });
      group.membri.forEach(name => fan.appendChild(genPill(name, false)));
      g.appendChild(fan);
      after.appendChild(g);
    });
    panel.appendChild(after);
  }

  // ----- I santi nei secoli (linea temporale) -----
  if (typeof SANTI_NEI_SECOLI !== 'undefined') {
    const sec = h('div', { class: 'gen-saints' });
    sec.appendChild(h('div', { class: 'gen-branch-connector' }));
    sec.appendChild(h('h3', { class: 'gen-after-title' }, 'I santi nei secoli'));
    sec.appendChild(h('p', { class: 'gen-after-lead' },
      'La «comunione dei santi»: la linea della fede non si ferma agli apostoli, ma continua di secolo in secolo fino a oggi. Ecco alcuni testimoni, in ordine temporale.'
    ));
    SANTI_NEI_SECOLI.forEach(era => {
      const block = h('div', { class: 'gen-era-saints' });
      block.appendChild(h('div', { class: 'gen-saints-era' }, era.epoca));
      const grid = h('div', { class: 'gen-saints-grid' });
      era.santi.forEach(s => {
        const card = h('div', { class: 'gen-saint' });
        const head = h('div', { class: 'gen-saint-head' });
        head.appendChild(h('span', { class: 'gen-saint-name' }, s.nome));
        head.appendChild(h('span', { class: 'gen-saint-anni' }, s.anni));
        card.appendChild(head);
        card.appendChild(h('p', { class: 'gen-saint-desc' }, s.desc));
        grid.appendChild(card);
      });
      block.appendChild(grid);
      sec.appendChild(block);
    });
    panel.appendChild(sec);
  }
}

// ---- 2. SAPIENZIALI ----
const SapienzialiState = { view: 'list', bookName: null };

function hasStudio(book) {
  return typeof STUDI_SAPIENZIALI !== 'undefined' && !!STUDI_SAPIENZIALI[book.name];
}

function renderSapienziali() {
  const panel = document.getElementById('sapienziali');
  panel.innerHTML = '';
  if (SapienzialiState.view === 'detail') return renderSapienzialeDetail(panel);

  panel.appendChild(h('h2', {}, 'Libri Sapienziali'));
  panel.appendChild(h('p', { class: 'intro' },
    'Sette libri che custodiscono la sapienza di Israele: come vivere davanti a Dio, come pregare, come riconoscere il senso della vita. Ogni libro può essere studiato nel dettaglio.'
  ));

  SAPIENZIALI.forEach(book => {
    const studio = hasStudio(book);
    const card = h('div', { class: 'book-card' + (studio ? ' has-study' : '') });
    card.appendChild(h('h3', {}, book.name));
    card.appendChild(h('p', { class: 'meta' },
      `${book.period} · ${book.author}`
    ));
    card.appendChild(h('p', {}, book.summary));

    const list = h('ul', { class: 'theme-list' });
    book.themes.forEach(t => list.appendChild(h('li', {}, t)));
    card.appendChild(list);

    if (studio) {
      const n = STUDI_SAPIENZIALI[book.name].sections.length;
      const btn = h('button', { class: 'btn', type: 'button' }, `Studia nel dettaglio · ${n} sezioni`);
      btn.addEventListener('click', () => {
        SapienzialiState.view = 'detail';
        SapienzialiState.bookName = book.name;
        renderSapienziali();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      card.appendChild(btn);
    } else {
      card.appendChild(h('p', { class: 'study-soon' }, 'Approfondimento dettagliato in arrivo'));
    }

    panel.appendChild(card);
  });
}

function renderSapienzialeDetail(panel) {
  const book = SAPIENZIALI.find(b => b.name === SapienzialiState.bookName);
  const studio = STUDI_SAPIENZIALI[SapienzialiState.bookName];
  if (!book || !studio) { SapienzialiState.view = 'list'; return renderSapienziali(); }

  // Top bar
  const top = h('div', { class: 'reader-top' });
  const back = h('button', { class: 'btn-soft', type: 'button' }, '← Tutti i libri');
  back.addEventListener('click', () => {
    SapienzialiState.view = 'list';
    renderSapienziali();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  top.appendChild(back);
  panel.appendChild(top);

  // Hero del libro
  const hero = h('div', { class: 'study-hero' });
  hero.appendChild(h('h2', {}, book.name));
  hero.appendChild(h('p', { class: 'study-meta' }, `${book.period} · ${book.author}`));
  if (studio.tagline) hero.appendChild(h('p', { class: 'study-tagline' }, studio.tagline));
  panel.appendChild(hero);

  // Scheda dati (facts)
  if (studio.facts && studio.facts.length) {
    const grid = h('div', { class: 'cov-meta study-facts' });
    studio.facts.forEach(f => {
      const cell = h('div', {});
      cell.appendChild(h('span', { class: 'cov-k' }, f.k));
      cell.appendChild(h('span', { class: 'cov-v', html: f.v }));
      grid.appendChild(cell);
    });
    panel.appendChild(grid);
  }

  // Subnav a salti
  const subnav = h('nav', { class: 'teaching-subnav' });
  studio.sections.forEach((s, i) => {
    const btn = h('button', { type: 'button', 'data-target': s.id }, `${i + 1}. ${s.title}`);
    btn.addEventListener('click', () => {
      const target = document.getElementById(`study-${s.id}`);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    subnav.appendChild(btn);
  });
  panel.appendChild(subnav);

  // Sezioni (lettura long-form)
  studio.sections.forEach((section, i) => {
    const secEl = h('section', { class: 'teaching-section', id: `study-${section.id}` });
    secEl.appendChild(h('div', { class: 'study-step' }, `Sezione ${i + 1} di ${studio.sections.length}`));
    secEl.appendChild(h('h3', {}, section.title));
    if (section.subtitle) secEl.appendChild(h('p', { class: 'section-sub' }, section.subtitle));
    secEl.appendChild(h('div', { class: 'teaching-body', html: section.html }));
    panel.appendChild(secEl);
  });

  // Riempi l'eventuale blocco "Salmi per concetti" (studio del libro Salmi)
  const concettiHost = panel.querySelector('[data-salmi-concetti]');
  if (concettiHost) concettiHost.innerHTML = salmiConcettiHTML();

  // Rende cliccabili i riferimenti biblici (al clic appare il versetto)
  if (typeof linkVersetti === 'function') {
    panel.querySelectorAll('.teaching-body').forEach(b => linkVersetti(b));
  }

  // Scroll-spy sulla subnav
  const subnavButtons = subnav.querySelectorAll('button');
  const sections = studio.sections.map(s => document.getElementById(`study-${s.id}`));
  function updateActiveSubnav() {
    if (!document.getElementById('sapienziali').classList.contains('active')) return;
    if (SapienzialiState.view !== 'detail') return;
    const scrollPos = window.scrollY + 200;
    let activeIdx = 0;
    sections.forEach((sec, i) => { if (sec && sec.offsetTop <= scrollPos) activeIdx = i; });
    subnavButtons.forEach((b, i) => b.classList.toggle('active', i === activeIdx));
  }
  window.addEventListener('scroll', updateActiveSubnav, { passive: true });
  updateActiveSubnav();
}

// ---- 3. SALMI PER CONCETTI (integrato nello studio del libro «Salmi») ----
function salmiConcettiHTML() {
  if (typeof SALMI === 'undefined') return '';
  let html = '';
  SALMI.forEach(theme => {
    html += '<div class="theme-block">';
    html += `<h4>${theme.concept}</h4>`;
    html += `<p>${theme.description}</p>`;
    html += '<div class="psalm-list">';
    theme.psalms.forEach(n => { html += `<span class="psalm-chip">Sal ${n}</span>`; });
    html += '</div>';
    theme.connections.forEach(c => { html += `<div class="connection">${c.text}</div>`; });
    html += '</div>';
  });
  return html;
}

// ---- 4. DOGMI ----
function renderDogmi() {
  const panel = document.getElementById('dogmi');
  panel.appendChild(h('h2', {}, 'Verità, concetti e dogmi della fede'));
  panel.appendChild(h('p', { class: 'intro' },
    'Le verità fondamentali della fede cattolica, organizzate per aree tematiche. Ogni voce ha un riferimento sintetico alle Scritture.'
  ));

  DOGMI.forEach(group => {
    const section = h('div', { class: 'dogma-group' });
    section.appendChild(h('h3', {}, group.group));

    group.items.forEach(item => {
      const card = h('div', { class: 'dogma-card' });
      card.appendChild(h('h4', {}, item.name));
      card.appendChild(h('p', {}, item.summary));
      if (item.scripture) {
        card.appendChild(h('p', { class: 'scripture' }, `Riferimenti: ${item.scripture}`));
      }
      section.appendChild(card);
    });

    panel.appendChild(section);
  });
}

// =============================================================
//  STORAGE — localStorage wrapper
// =============================================================
const Store = {
  get(key, fallback) {
    try {
      const v = localStorage.getItem(key);
      return v ? JSON.parse(v) : fallback;
    } catch { return fallback; }
  },
  set(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
  }
};

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('it-IT', {
    day: 'numeric', month: 'long', year: 'numeric'
  });
}

// ---- 5. DIARIO ----
function renderDiario() {
  const panel = document.getElementById('diario');
  panel.innerHTML = '';

  panel.appendChild(h('h2', {}, 'Diario spirituale'));
  panel.appendChild(h('p', { class: 'intro' },
    'Raccogli le tue riflessioni sulle Scritture. Titolo, riferimento biblico, il tuo pensiero. Tutto resta salvato sul tuo dispositivo.'
  ));

  const form = h('form', { class: 'diary-form' });
  const title = h('input', { type: 'text', placeholder: 'Titolo della riflessione', required: 'true' });
  const ref = h('input', { type: 'text', placeholder: 'Riferimento biblico (es. Salmo 23, Mt 5,3-12)' });
  const body = h('textarea', { placeholder: 'Scrivi qui la tua riflessione...', required: 'true' });
  const submit = h('button', { type: 'submit', class: 'btn' }, 'Salva riflessione');

  form.append(title, ref, body, submit);
  form.addEventListener('submit', e => {
    e.preventDefault();
    const entries = Store.get('diary', []);
    entries.unshift({
      id: Date.now(),
      date: todayISO(),
      title: title.value.trim(),
      ref: ref.value.trim(),
      body: body.value.trim()
    });
    Store.set('diary', entries);
    title.value = ''; ref.value = ''; body.value = '';
    renderDiario();
  });
  panel.appendChild(form);

  const entries = Store.get('diary', []);
  if (entries.length === 0) {
    panel.appendChild(h('div', { class: 'empty-state' },
      'Nessuna riflessione ancora. Inizia con la prima qui sopra.'
    ));
    return;
  }

  entries.forEach(e => {
    const entry = h('div', { class: 'entry' });
    const head = h('div', { class: 'entry-head' });
    head.appendChild(h('h3', { class: 'entry-title' }, e.title || 'Senza titolo'));
    head.appendChild(h('span', { class: 'entry-date' }, formatDate(e.date)));
    entry.appendChild(head);

    if (e.ref) entry.appendChild(h('p', { class: 'entry-ref' }, e.ref));
    entry.appendChild(h('div', { class: 'entry-body' }, e.body));

    const del = h('button', { class: 'btn-soft' }, 'Elimina');
    del.addEventListener('click', () => {
      if (!confirm('Eliminare questa riflessione?')) return;
      Store.set('diary', entries.filter(x => x.id !== e.id));
      renderDiario();
    });
    entry.appendChild(del);
    panel.appendChild(entry);
  });
}

// ---- 6. PREFERITI ----
function getFavorites() {
  let favs = Store.get('favorites', null);
  if (favs === null) {
    favs = VERSETTI_SEME.map((v, i) => ({ id: Date.now() + i, ...v }));
    Store.set('favorites', favs);
  }
  return favs;
}

let activeTagFilter = null;

function renderPreferiti() {
  const panel = document.getElementById('preferiti');
  panel.innerHTML = '';

  panel.appendChild(h('h2', {}, 'Versetti preferiti'));
  panel.appendChild(h('p', { class: 'intro' },
    'La tua raccolta personale di versetti. Organizzali per temi (tag) e filtrali per quando ne hai bisogno.'
  ));

  const form = h('form', { class: 'fav-form' });
  const ref = h('input', { type: 'text', placeholder: 'Riferimento (es. Rm 8,28)', required: 'true' });
  const text = h('input', { type: 'text', placeholder: 'Testo del versetto', required: 'true' });
  const tags = h('input', { type: 'text', placeholder: 'Tag separati da virgola (es. speranza, prova)' });
  const submit = h('button', { type: 'submit', class: 'btn' }, 'Aggiungi versetto');

  form.append(ref, text, tags, submit);
  form.addEventListener('submit', e => {
    e.preventDefault();
    const favs = getFavorites();
    favs.unshift({
      id: Date.now(),
      ref: ref.value.trim(),
      text: text.value.trim(),
      tags: tags.value.split(',').map(t => t.trim()).filter(Boolean)
    });
    Store.set('favorites', favs);
    ref.value = ''; text.value = ''; tags.value = '';
    renderPreferiti();
  });
  panel.appendChild(form);

  const favs = getFavorites();
  const allTags = [...new Set(favs.flatMap(f => f.tags))].sort();

  if (allTags.length > 0) {
    const filter = h('div', { class: 'tag-filter' });
    const allBtn = h('button', {
      class: activeTagFilter ? 'tag' : 'tag active', type: 'button'
    }, 'Tutti');
    allBtn.addEventListener('click', () => { activeTagFilter = null; renderPreferiti(); });
    filter.appendChild(allBtn);

    allTags.forEach(t => {
      const btn = h('button', {
        class: activeTagFilter === t ? 'tag active' : 'tag', type: 'button'
      }, t);
      btn.addEventListener('click', () => { activeTagFilter = t; renderPreferiti(); });
      filter.appendChild(btn);
    });
    panel.appendChild(filter);
  }

  const visible = activeTagFilter
    ? favs.filter(f => f.tags.includes(activeTagFilter))
    : favs;

  if (visible.length === 0) {
    panel.appendChild(h('div', { class: 'empty-state' },
      'Nessun versetto con questo tag.'
    ));
    return;
  }

  visible.forEach(f => {
    const card = h('div', { class: 'entry' });
    const head = h('div', { class: 'entry-head' });
    head.appendChild(h('h3', { class: 'entry-title' }, f.ref));
    card.appendChild(head);
    card.appendChild(h('p', { class: 'fav-verse' }, `« ${f.text} »`));
    if (f.tags.length) {
      const tagRow = h('div', { class: 'tag-filter' });
      f.tags.forEach(t => tagRow.appendChild(h('span', { class: 'tag' }, t)));
      card.appendChild(tagRow);
    }
    const del = h('button', { class: 'btn-soft' }, 'Rimuovi');
    del.addEventListener('click', () => {
      if (!confirm('Rimuovere questo versetto?')) return;
      Store.set('favorites', favs.filter(x => x.id !== f.id));
      renderPreferiti();
    });
    card.appendChild(del);
    panel.appendChild(card);
  });
}

// ---- 7. DOMANDE SULLA FEDE ----
const DomandeState = { query: '' };

function renderDomande() {
  const panel = document.getElementById('domande');
  panel.innerHTML = '';

  panel.appendChild(h('h2', {}, 'Domande sulla fede'));
  panel.appendChild(h('p', { class: 'intro' },
    'Le grandi domande — sulla Bibbia, Maria, la libertà, l\'inferno, lo Spirito Santo, i sacramenti, la Chiesa — con risposte ragionate nella tradizione cattolica e i riferimenti alla Scrittura e al Catechismo. Tocca una domanda per leggere la risposta.'
  ));

  // Ricerca
  const search = h('input', {
    type: 'text',
    class: 'faq-search',
    placeholder: 'Cerca tra le domande...',
    value: DomandeState.query
  });
  search.addEventListener('input', () => {
    DomandeState.query = search.value;
    renderFaqList(listWrap);
    // mantiene il focus
    const again = document.querySelector('.faq-search');
    if (again) { again.focus(); again.setSelectionRange(again.value.length, again.value.length); }
  });
  panel.appendChild(search);

  const listWrap = h('div', { class: 'faq-wrap' });
  panel.appendChild(listWrap);
  renderFaqList(listWrap);
}

function renderFaqList(listWrap) {
  listWrap.innerHTML = '';
  const q = DomandeState.query.trim().toLowerCase();

  let matches = 0;
  DOMANDE.forEach(group => {
    const items = group.items.filter(it =>
      !q || it.q.toLowerCase().includes(q) || it.a.toLowerCase().includes(q) || (it.refs || '').toLowerCase().includes(q)
    );
    if (items.length === 0) return;
    matches += items.length;

    const groupEl = h('div', { class: 'faq-group' });
    groupEl.appendChild(h('h3', { class: 'faq-group-title' }, group.group));
    if (group.intro) groupEl.appendChild(h('p', { class: 'faq-group-intro' }, group.intro));

    items.forEach(it => {
      const item = h('div', { class: 'faq-item' });
      const qBtn = h('button', { type: 'button', class: 'faq-q' });
      qBtn.appendChild(h('span', { class: 'faq-q-text' }, it.q));
      qBtn.appendChild(h('span', { class: 'faq-q-icon' }, '+'));

      const ans = h('div', { class: 'faq-a' });
      const inner = h('div', { class: 'faq-a-inner' });
      inner.appendChild(h('div', { class: 'teaching-body', html: it.a }));
      if (it.refs) {
        const refs = h('div', { class: 'faq-refs' });
        refs.appendChild(h('span', { class: 'faq-refs-label' }, 'Riferimenti'));
        refs.appendChild(h('span', { class: 'faq-refs-text' }, it.refs));
        inner.appendChild(refs);
      }
      ans.appendChild(inner);

      qBtn.addEventListener('click', () => {
        item.classList.toggle('open');
      });

      item.append(qBtn, ans);
      groupEl.appendChild(item);
    });

    listWrap.appendChild(groupEl);
  });

  if (matches === 0) {
    listWrap.appendChild(h('div', { class: 'empty-state' },
      'Nessuna domanda trovata. Prova con un\'altra parola.'
    ));
  }
}

// =============================================================
//  8. BIBBIA — lettura, ricerca, confronto traduzioni
// =============================================================
const BibleState = {
  bookIdx: 45,     // Matteo (indice nell'array LIBRI_BIBBIA)
  chapter: 5,
  translation: 'web',
  compare: false,
  searchTerm: '',
  lastFetch: null
};

async function fetchChapter(book, chapter, translation) {
  // bible-api.com: https://bible-api.com/matthew+5?translation=web
  const ref = encodeURIComponent(`${book.en} ${chapter}`);
  const url = `https://bible-api.com/${ref}?translation=${translation}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Errore ${res.status}`);
  return await res.json();
}

function highlightText(text, term) {
  if (!term) return text;
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text.replace(new RegExp(escaped, 'gi'), m => `<mark>${m}</mark>`);
}

function renderChapterText(container, data, searchTerm = '') {
  container.innerHTML = '';
  if (!data || !data.verses || data.verses.length === 0) {
    container.appendChild(h('p', { class: 'empty-state' }, 'Nessun versetto.'));
    return;
  }
  data.verses.forEach(v => {
    const verse = h('span', { class: 'verse' });
    verse.appendChild(h('span', { class: 'verse-num' }, String(v.verse)));
    const textSpan = h('span', { html: highlightText(v.text.trim(), searchTerm) });
    verse.appendChild(textSpan);
    container.appendChild(verse);
  });
}

async function renderBibbia() {
  const panel = document.getElementById('bibbia');
  panel.innerHTML = '';

  panel.appendChild(h('h2', {}, 'Bibbia — lettura e confronto'));
  panel.appendChild(h('p', { class: 'intro' },
    'Seleziona libro, capitolo e traduzione. Cerca parole nel capitolo corrente o attiva il confronto per vedere 3 traduzioni affiancate.'
  ));

  // Controls
  const controls = h('div', { class: 'reader-controls' });

  const bookSel = h('select', { 'aria-label': 'Libro' });
  LIBRI_BIBBIA.forEach((b, i) => {
    const opt = h('option', { value: String(i) },
      b.deutero ? `${b.it} †` : b.it
    );
    if (i === BibleState.bookIdx) opt.selected = true;
    bookSel.appendChild(opt);
  });
  bookSel.addEventListener('change', () => {
    BibleState.bookIdx = parseInt(bookSel.value, 10);
    BibleState.chapter = 1;
    renderBibbia();
  });

  const chapSel = h('select', { 'aria-label': 'Capitolo' });
  const book = LIBRI_BIBBIA[BibleState.bookIdx];
  for (let c = 1; c <= book.ch; c++) {
    const opt = h('option', { value: String(c) }, `Cap. ${c}`);
    if (c === BibleState.chapter) opt.selected = true;
    chapSel.appendChild(opt);
  }
  chapSel.addEventListener('change', () => {
    BibleState.chapter = parseInt(chapSel.value, 10);
    renderBibbia();
  });

  const transSel = h('select', { 'aria-label': 'Traduzione' });
  TRADUZIONI.forEach(t => {
    const opt = h('option', { value: t.id }, t.label);
    if (t.id === BibleState.translation) opt.selected = true;
    transSel.appendChild(opt);
  });
  transSel.addEventListener('change', () => {
    BibleState.translation = transSel.value;
    renderBibbia();
  });

  const compareBtn = h('button', {
    class: BibleState.compare ? 'btn' : 'nav-btn',
    type: 'button'
  }, BibleState.compare ? 'Chiudi confronto' : 'Confronta');
  compareBtn.addEventListener('click', () => {
    BibleState.compare = !BibleState.compare;
    renderBibbia();
  });

  controls.append(bookSel, chapSel, transSel, compareBtn);
  panel.appendChild(controls);

  // Deutero note
  if (book.deutero) {
    panel.appendChild(h('div', { class: 'deutero-note' },
      '† Libro deuterocanonico — disponibile solo nella Vulgata Clementina (Latino). Le versioni protestanti non lo includono.'
    ));
  }

  // Nav toolbar
  const toolbar = h('div', { class: 'reader-toolbar' });
  const navBtns = h('div', { class: 'nav-buttons' });

  const prevBtn = h('button', { class: 'nav-btn', type: 'button' }, '← Precedente');
  prevBtn.disabled = BibleState.chapter <= 1 && BibleState.bookIdx === 0;
  prevBtn.addEventListener('click', () => {
    if (BibleState.chapter > 1) {
      BibleState.chapter--;
    } else if (BibleState.bookIdx > 0) {
      BibleState.bookIdx--;
      BibleState.chapter = LIBRI_BIBBIA[BibleState.bookIdx].ch;
    }
    renderBibbia();
  });

  const nextBtn = h('button', { class: 'nav-btn', type: 'button' }, 'Successivo →');
  nextBtn.disabled = BibleState.chapter >= book.ch && BibleState.bookIdx === LIBRI_BIBBIA.length - 1;
  nextBtn.addEventListener('click', () => {
    if (BibleState.chapter < book.ch) {
      BibleState.chapter++;
    } else if (BibleState.bookIdx < LIBRI_BIBBIA.length - 1) {
      BibleState.bookIdx++;
      BibleState.chapter = 1;
    }
    renderBibbia();
  });

  navBtns.append(prevBtn, nextBtn);
  toolbar.appendChild(navBtns);

  const searchInput = h('input', {
    type: 'text',
    class: 'search-in-chapter',
    placeholder: 'Cerca nel capitolo...',
    value: BibleState.searchTerm
  });
  searchInput.addEventListener('input', () => {
    BibleState.searchTerm = searchInput.value;
    if (BibleState.lastFetch) {
      const container = document.getElementById('chapter-text-container');
      if (container) renderChapterText(container, BibleState.lastFetch, BibleState.searchTerm);
    }
  });
  toolbar.appendChild(searchInput);
  panel.appendChild(toolbar);

  // Content area
  if (BibleState.compare) {
    const grid = h('div', { class: 'comparison-grid cols-3' });
    panel.appendChild(grid);

    const translations = TRADUZIONI.slice(0, 3);
    translations.forEach(t => {
      const col = h('div', { class: 'comparison-col' });
      col.appendChild(h('h4', {}, t.label));
      const body = h('div', {});
      col.appendChild(h('div', { class: 'loading' }, 'Caricamento...'));
      grid.appendChild(col);

      fetchChapter(book, BibleState.chapter, t.id)
        .then(data => {
          col.innerHTML = '';
          col.appendChild(h('h4', {}, t.label));
          const inner = h('div', {});
          renderChapterText(inner, data);
          col.appendChild(inner);
        })
        .catch(err => {
          col.innerHTML = '';
          col.appendChild(h('h4', {}, t.label));
          col.appendChild(h('div', { class: 'error' },
            book.deutero && t.id !== 'clementine'
              ? 'Non disponibile (libro deuterocanonico).'
              : `Errore: ${err.message}`
          ));
        });
    });
  } else {
    const chapBox = h('div', { class: 'chapter-text', id: 'chapter-text-container' });
    chapBox.appendChild(h('h3', {}, `${book.it} ${BibleState.chapter}`));
    chapBox.appendChild(h('div', { class: 'loading' }, 'Caricamento del capitolo...'));
    panel.appendChild(chapBox);

    try {
      const data = await fetchChapter(book, BibleState.chapter, BibleState.translation);
      BibleState.lastFetch = data;
      chapBox.innerHTML = '';
      chapBox.appendChild(h('h3', {}, `${book.it} ${BibleState.chapter}`));
      renderChapterText(chapBox, data, BibleState.searchTerm);
    } catch (err) {
      chapBox.innerHTML = '';
      chapBox.appendChild(h('h3', {}, `${book.it} ${BibleState.chapter}`));
      chapBox.appendChild(h('div', { class: 'error' },
        book.deutero && BibleState.translation !== 'clementine'
          ? 'Questo libro (deuterocanonico) è disponibile solo nella Vulgata Clementina. Cambia traduzione dal menu.'
          : `Impossibile caricare il capitolo: ${err.message}. Controlla la connessione.`
      ));
    }
  }
}

// =============================================================
//  10. PERCORSO — insegnamenti come tappe (gaming)
// =============================================================
const XP_PER_SECTION = 10;

const PercorsoState = {
  view: 'hub',        // 'hub' | 'reader'
  teachingId: null,
  sectionIdx: 0
};

function getProgress() {
  return Store.get('percorso_progress', {});
}

function sectionDone(teachingId, sectionId) {
  const p = getProgress();
  return !!(p[teachingId] && p[teachingId][sectionId]);
}

function markSectionDone(teachingId, sectionId) {
  const p = getProgress();
  if (!p[teachingId]) p[teachingId] = {};
  if (p[teachingId][sectionId]) return false; // già fatto, niente XP nuovo
  p[teachingId][sectionId] = true;
  Store.set('percorso_progress', p);
  return true;
}

function teachingDoneCount(teaching) {
  return teaching.sections.filter(s => sectionDone(teaching.id, s.id)).length;
}

function teachingCompleted(teaching) {
  return teachingDoneCount(teaching) >= teaching.sections.length;
}

function teachingUnlocked(idx) {
  if (idx === 0) return true;
  return teachingCompleted(PERCORSO[idx - 1]);
}

function totalXP() {
  return PERCORSO.reduce((sum, t) => sum + teachingDoneCount(t), 0) * XP_PER_SECTION;
}

function levelInfo() {
  const xp = totalXP();
  const level = Math.floor(xp / 100) + 1;
  const into = xp % 100;
  return { xp, level, into, toNext: 100 - into };
}

// SVG anello di progresso
function progressRing(percent, label) {
  const r = 26, c = 2 * Math.PI * r;
  const off = c * (1 - percent / 100);
  const wrap = h('div', { class: 'ring-wrap' });
  wrap.innerHTML = `
    <svg class="ring" viewBox="0 0 60 60" width="60" height="60">
      <circle class="ring-bg" cx="30" cy="30" r="${r}"></circle>
      <circle class="ring-fg" cx="30" cy="30" r="${r}"
        style="stroke-dasharray:${c};stroke-dashoffset:${off}"></circle>
    </svg>
    <span class="ring-label">${label}</span>`;
  return wrap;
}

function renderHub(panel) {
  panel.innerHTML = '';

  const { xp, level, into, toNext } = levelInfo();

  // Header con livello e XP
  const hero = h('div', { class: 'percorso-hero' });
  hero.appendChild(h('div', { class: 'level-badge' }, `Lv ${level}`));
  const heroText = h('div', { class: 'percorso-hero-text' });
  heroText.appendChild(h('h2', {}, 'Percorso'));
  heroText.appendChild(h('p', {},
    'Attraversa gli insegnamenti come tappe di un cammino. Completa le sezioni, sblocca le tappe successive, accumula esperienza.'
  ));
  const xpBar = h('div', { class: 'xp-bar' });
  xpBar.appendChild(h('div', { class: 'xp-fill', style: `width:${into}%` }));
  heroText.appendChild(xpBar);
  heroText.appendChild(h('p', { class: 'xp-text' }, `${xp} XP · ancora ${toNext} XP al livello ${level + 1}`));
  hero.appendChild(heroText);
  panel.appendChild(hero);

  // Sentiero a tappe
  const path = h('div', { class: 'tappe-path' });
  PERCORSO.forEach((t, i) => {
    const unlocked = teachingUnlocked(i);
    const done = teachingDoneCount(t);
    const total = t.sections.length;
    const completed = teachingCompleted(t);
    const pct = Math.round((done / total) * 100);

    const node = h('div', {
      class: 'tappa' + (unlocked ? '' : ' locked') + (completed ? ' completed' : '')
    });

    const numBubble = h('div', { class: 'tappa-num' },
      unlocked ? (completed ? '✓' : t.emoji || String(i + 1)) : '🔒'
    );
    node.appendChild(numBubble);

    const card = h('div', { class: 'tappa-card' });
    card.appendChild(h('div', { class: 'tappa-step' }, `Tappa ${i + 1}`));
    card.appendChild(h('h3', {}, t.title));
    card.appendChild(h('p', { class: 'tappa-sub' }, t.subtitle));

    const footer = h('div', { class: 'tappa-footer' });
    footer.appendChild(progressRing(unlocked ? pct : 0, `${done}/${total}`));

    const action = h('div', { class: 'tappa-action' });
    if (!unlocked) {
      action.appendChild(h('span', { class: 'tappa-hint' },
        `Completa «${PERCORSO[i - 1].title}» per sbloccare`));
    } else {
      const btn = h('button', { class: 'btn', type: 'button' },
        done === 0 ? 'Inizia' : (completed ? 'Rileggi' : 'Continua')
      );
      btn.addEventListener('click', () => {
        PercorsoState.view = 'reader';
        PercorsoState.teachingId = t.id;
        // riprende dalla prima sezione non completata
        let resume = t.sections.findIndex(s => !sectionDone(t.id, s.id));
        PercorsoState.sectionIdx = resume < 0 ? 0 : resume;
        renderCammino();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      action.appendChild(btn);
    }
    footer.appendChild(action);
    card.appendChild(footer);
    node.appendChild(card);
    path.appendChild(node);
  });
  panel.appendChild(path);
}

function renderReader(panel) {
  panel.innerHTML = '';

  const teaching = PERCORSO.find(t => t.id === PercorsoState.teachingId);
  if (!teaching) { PercorsoState.view = 'hub'; return renderHub(panel); }

  const total = teaching.sections.length;
  let idx = Math.max(0, Math.min(PercorsoState.sectionIdx, total - 1));
  const section = teaching.sections[idx];

  // Barra superiore
  const top = h('div', { class: 'reader-top' });
  const back = h('button', { class: 'btn-soft', type: 'button' }, '← Torna al percorso');
  back.addEventListener('click', () => {
    PercorsoState.view = 'hub';
    renderCammino();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  top.appendChild(back);
  top.appendChild(h('span', { class: 'reader-teaching' }, `${teaching.emoji || ''} ${teaching.title}`));
  panel.appendChild(top);

  // Progresso
  const prog = h('div', { class: 'reader-progress' });
  const bar = h('div', { class: 'reader-bar' });
  bar.appendChild(h('div', { class: 'reader-bar-fill', style: `width:${((idx + 1) / total) * 100}%` }));
  prog.appendChild(bar);
  prog.appendChild(h('span', { class: 'reader-count' }, `Sezione ${idx + 1} di ${total}`));
  panel.appendChild(prog);

  // Pallini di navigazione rapida
  const dots = h('div', { class: 'reader-dots' });
  teaching.sections.forEach((s, i) => {
    const isDone = sectionDone(teaching.id, s.id);
    const dot = h('button', {
      type: 'button',
      class: 'rdot' + (i === idx ? ' current' : '') + (isDone ? ' done' : ''),
      title: s.title
    });
    dot.addEventListener('click', () => {
      PercorsoState.sectionIdx = i;
      renderCammino();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    dots.appendChild(dot);
  });
  panel.appendChild(dots);

  // Contenuto della sezione
  const secEl = h('section', { class: 'teaching-section reader-section' });
  secEl.appendChild(h('h3', {}, section.title));
  if (section.subtitle) secEl.appendChild(h('p', { class: 'section-sub' }, section.subtitle));
  const tbody = h('div', { class: 'teaching-body', html: section.html });
  secEl.appendChild(tbody);
  panel.appendChild(secEl);
  if (typeof linkVersetti === 'function') linkVersetti(tbody);

  // Navigazione inferiore
  const nav = h('div', { class: 'reader-nav' });
  const prevBtn = h('button', { class: 'nav-btn', type: 'button' }, '← Indietro');
  prevBtn.disabled = idx === 0;
  prevBtn.addEventListener('click', () => {
    PercorsoState.sectionIdx = idx - 1;
    renderCammino();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  nav.appendChild(prevBtn);

  const isLast = idx === total - 1;
  const nextLabel = isLast ? 'Completa l’insegnamento ✓' : 'Completa e avanti →';
  const nextBtn = h('button', { class: 'btn', type: 'button' }, nextLabel);
  nextBtn.addEventListener('click', () => {
    const gained = markSectionDone(teaching.id, section.id);
    if (isLast) {
      if (gained) showXpToast(`+${XP_PER_SECTION} XP · insegnamento completato!`);
      PercorsoState.view = 'hub';
      renderCammino();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (gained) showXpToast(`+${XP_PER_SECTION} XP`);
      PercorsoState.sectionIdx = idx + 1;
      renderCammino();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
  nav.appendChild(nextBtn);
  panel.appendChild(nav);
}

function showXpToast(text) {
  const toast = h('div', { class: 'xp-toast' }, text);
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 1600);
}

function renderCammino() {
  const panel = document.getElementById('cammino');
  if (PercorsoState.view === 'reader') renderReader(panel);
  else renderHub(panel);
}

// ---- Versetti cliccabili: rende i riferimenti dei link e mostra il testo ----
function linkVersetti(rootEl) {
  if (typeof VERSETTI === 'undefined' || !rootEl) return;
  const keys = Object.keys(VERSETTI).sort((a, b) => b.length - a.length);
  const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp('(' + keys.map(esc).join('|') + ')(?![\\w,\\-])', 'g');
  const walker = document.createTreeWalker(rootEl, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    if (node.parentElement && node.parentElement.closest('.vref, a, button, .pf-vers, .ms-vers, .rif, .meta, .pf-meta-pill, .study-facts, .cov-meta, .sgx-ins')) return;
    const txt = node.nodeValue;
    re.lastIndex = 0;
    if (!re.test(txt)) return;
    re.lastIndex = 0;
    const frag = document.createDocumentFragment();
    let last = 0, m;
    while ((m = re.exec(txt))) {
      if (m.index > last) frag.appendChild(document.createTextNode(txt.slice(last, m.index)));
      const span = document.createElement('span');
      span.className = 'vref';
      span.dataset.ref = m[1];
      span.textContent = m[1];
      frag.appendChild(span);
      last = m.index + m[1].length;
    }
    if (last < txt.length) frag.appendChild(document.createTextNode(txt.slice(last)));
    node.parentNode.replaceChild(frag, node);
  });
}

// Applica i versetti cliccabili ai contenitori di testo di un pannello
function linkVersettiPanel(panelOrId) {
  const root = typeof panelOrId === 'string' ? document.getElementById(panelOrId) : panelOrId;
  if (!root || typeof linkVersetti !== 'function') return;
  root.querySelectorAll('.pf-body-in, .ms-in, .sgx-parab, .sgx-ev, .teaching-body, .faq-a-inner').forEach(el => linkVersetti(el));
}

function showVersettoPopover(refEl) {
  const ref = refEl.dataset.ref;
  const testo = (typeof VERSETTI !== 'undefined') ? VERSETTI[ref] : null;
  let pop = document.getElementById('vref-pop');
  if (!pop) {
    pop = document.createElement('div');
    pop.id = 'vref-pop';
    pop.className = 'vref-pop';
    document.body.appendChild(pop);
    document.addEventListener('click', e => {
      if (!e.target.closest('.vref') && !e.target.closest('#vref-pop')) pop.classList.remove('show');
    });
  }
  pop.innerHTML = `<span class="vref-pop-ref">${ref}</span><p>${testo ? '«' + testo + '»' : 'Testo non disponibile per questo riferimento.'}</p>`;
  const r = refEl.getBoundingClientRect();
  pop.style.top = (window.scrollY + r.bottom + 8) + 'px';
  pop.style.left = Math.max(10, Math.min(window.scrollX + r.left, window.scrollX + document.documentElement.clientWidth - 330)) + 'px';
  pop.classList.add('show');
}

// Carte interattive "tocca per scoprire" + versetti cliccabili (event delegation)
document.addEventListener('click', e => {
  const vref = e.target.closest('.vref');
  if (vref) { e.stopPropagation(); showVersettoPopover(vref); return; }
  const card = e.target.closest('.word-card');
  if (card) card.classList.toggle('revealed');
});
document.addEventListener('keydown', e => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.classList && e.target.classList.contains('word-card')) {
    e.preventDefault();
    e.target.classList.toggle('revealed');
  }
});

// =============================================================
//  11. STUDIO DI GESÙ · ESPLORA · DIFFUSIONE (modulo integrato)
//  Dati in window.STUDIO_DATA (studio/studio-data.js).
//  Markup avvolto in .studio-scope per isolare lo stile.
// =============================================================
function escHtml(s) {
  return String(s).replace(/[&<>"]/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

// ===== MAPPE INTERATTIVE (Leaflet + tile satellitari, zoom e trascinamento) =====
const ERA_COLORS = {
  'Patriarchi': '#e0892b',
  'Esodo e Conquista': '#caa12e',
  'Monarchia': '#b8602b',
  'Profeti ed Esilio': '#7d5230',
  'Ritorno dall’esilio': '#3f8f7a',
  'Vita di Gesù': '#c0392b',
  'Chiesa apostolica': '#3b6ea5'
};

function tileSatellite() {
  return L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    { attribution: 'Imagery © Esri, NASA, USGS', maxZoom: 16 });
}
function tileMappa() {
  return L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    { attribution: '© OpenStreetMap', maxZoom: 19 });
}
function legendSwatch(color) {
  return `<i class="leg-sw" style="background:${color}"></i>`;
}
function mapPopup(title, sub, subColor, desc) {
  return `<div class="map-pop"><h4>${escHtml(title)}</h4>`
    + `<span class="ep" style="color:${subColor}">${escHtml(sub)}</span>`
    + `<p>${escHtml(desc)}</p></div>`;
}

// Mostra il dettaglio nel pannello "superdettaglio" sotto la mappa (non in popup)
function fillMapDetail(id, title, sub, subColor, desc) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = `<h4 style="color:${subColor}">${escHtml(title)}</h4>`
    + `<div class="md-sub" style="color:${subColor}">${escHtml(sub)}</div>`
    + `<p>${escHtml(desc)}</p>`;
  el.classList.add('filled');
}

// ----- ESPLORA: mappa dei luoghi biblici -----
let esploraMap = null, esploraMapInit = false;
function ensureEsploraMap() {
  if (esploraMapInit) { if (esploraMap) setTimeout(() => esploraMap.invalidateSize(), 30); return; }
  if (typeof L === 'undefined' || typeof STUDIO_DATA === 'undefined') return;
  const cont = document.getElementById('esplora-map');
  if (!cont) return;
  esploraMapInit = true;
  const sat = tileSatellite(), osm = tileMappa();
  // Default = mappa stradale OSM (sempre disponibile); satellite come opzione
  esploraMap = L.map(cont, { layers: [osm], scrollWheelZoom: true, worldCopyJump: true });
  const E = STUDIO_DATA.esplora;
  const groups = {}, overlays = {}, pts = [];
  E.luoghi.forEach(l => {
    const ep = l.epoca || 'Vita di Gesù';
    const color = ERA_COLORS[ep] || '#e0892b';
    if (!groups[ep]) groups[ep] = L.layerGroup();
    const m = L.circleMarker([l.lat, l.lon], { radius: 7, color: '#fff', weight: 1.5, fillColor: color, fillOpacity: 1 });
    m.on('click', () => fillMapDetail('esplora-detail', l.nome, `${ep} · ${l.tag || ''}`, color, l.desc));
    m.bindTooltip(l.nome, { direction: 'top' });
    m.addTo(groups[ep]);
    pts.push([l.lat, l.lon]);
  });
  // ordina le epoche come nella cronologia
  Object.keys(ERA_COLORS).forEach(ep => {
    if (!groups[ep]) return;
    groups[ep].addTo(esploraMap);
    overlays[legendSwatch(ERA_COLORS[ep]) + ep] = groups[ep];
  });
  L.control.layers({ 'Satellite': sat, 'Mappa stradale': osm }, overlays, { collapsed: false }).addTo(esploraMap);
  setTimeout(() => {
    esploraMap.invalidateSize();
    if (pts.length) esploraMap.fitBounds(pts, { padding: [40, 40], maxZoom: 9 });
  }, 90);
}

// ----- DIFFUSIONE: mappa-mondo dell'evangelizzazione -----
let diffMap = null, diffMapInit = false;
function ensureDiffMap() {
  if (diffMapInit) { if (diffMap) setTimeout(() => diffMap.invalidateSize(), 30); return; }
  if (typeof L === 'undefined' || typeof STUDIO_DATA === 'undefined') return;
  const cont = document.getElementById('diff-map');
  if (!cont) return;
  diffMapInit = true;
  const sat = tileSatellite(), osm = tileMappa();
  diffMap = L.map(cont, { layers: [sat], worldCopyJump: true });
  const F = STUDIO_DATA.diffusione;
  const colorOf = {}; F.onde.forEach(o => { colorOf[o.id] = o.colore; });
  const byName = {}; F.nodi.forEach(n => { byName[n.luogo] = n; });
  const groups = {}, overlays = {};
  F.onde.forEach(o => { groups[o.id] = L.layerGroup(); });
  F.nodi.forEach(n => {
    const color = colorOf[n.onda] || '#c0392b';
    const g = groups[n.onda]; if (!g) return;
    if (n.da && byName[n.da]) {
      L.polyline([[byName[n.da].lat, byName[n.da].lon], [n.lat, n.lon]],
        { color, weight: 2, opacity: 0.55, dashArray: '4,8' }).addTo(g);
    }
    const m = L.circleMarker([n.lat, n.lon], { radius: 6, color: '#fff', weight: 1.2, fillColor: color, fillOpacity: 1 });
    m.on('click', () => fillMapDetail('diff-detail', n.luogo, `${n.chi} · ${n.quando}`, color, n.desc));
    m.bindTooltip(n.luogo, { direction: 'top' });
    m.addTo(g);
  });
  F.onde.forEach(o => {
    groups[o.id].addTo(diffMap);
    overlays[legendSwatch(o.colore) + o.nome] = groups[o.id];
  });

  // Layer "Capitali cristiane oggi (>50%)"
  if (typeof CAPITALI_CRISTIANE !== 'undefined') {
    const capColor = '#e8c84a';
    const capGroup = L.layerGroup();
    CAPITALI_CRISTIANE.forEach(c => {
      const m = L.circleMarker([c.lat, c.lon], { radius: 5, color: '#3b2c12', weight: 1, fillColor: capColor, fillOpacity: 1 });
      const desc = `Capitale di ${c.paese} (${c.cont}). Si stima che circa il ${c.perc}% della popolazione sia cristiana.`;
      m.on('click', () => fillMapDetail('diff-detail', `${c.citta} — ${c.paese}`, `Capitale cristiana oggi · ~${c.perc}%`, '#9a7b1f', desc));
      m.bindTooltip(`${c.citta} · ~${c.perc}%`, { direction: 'top' });
      m.addTo(capGroup);
    });
    overlays[legendSwatch(capColor) + 'Capitali cristiane oggi (>50%)'] = capGroup;
    // non attivo di default per non sovraccaricare: si accende dal pannello
  }

  L.control.layers({ 'Satellite': sat, 'Mappa stradale': osm }, overlays, { collapsed: false }).addTo(diffMap);
  setTimeout(() => { diffMap.invalidateSize(); diffMap.setView([28, 28], 2); }, 90);
}

function renderStudioGesu() {
  if (typeof STUDIO_DATA === 'undefined') return;
  const S = STUDIO_DATA.studioGesu;
  let html = '';
  html += '<p class="section-intro">Studio di Gesù</p>';
  html += '<p class="section-lead">Le sue preghiere, il regno che ha annunciato, le sue parole nell\'originale e le sue parabole — non un archivio, ma un cammino.</p>';

  html += '<h3 class="block-title">Le 13 preghiere di Gesù</h3>';
  html += '<div class="cammino-studio">';
  S.preghiere.forEach(p => {
    html += `<article class="tappa-st" data-n="${p.n}">`
      + `<h4>${escHtml(p.titolo)}<span class="rif">${escHtml(p.rif)}</span></h4>`
      + `<span class="parola">${escHtml(p.parola)}</span>`
      + `<div class="testo">${escHtml(p.testo)}</div>`
      + '</article>';
  });
  html += '</div>';

  html += '<h3 class="block-title">Il Regno di Dio non è quello che pensi</h3>';
  html += `<div class="thesis">${escHtml(S.regno.tesi)}</div>`;
  html += '<div class="cardgrid">';
  S.regno.punti.forEach(p => {
    html += `<div class="infocard"><h5>${escHtml(p.t)}</h5><p>${escHtml(p.d)}</p></div>`;
  });
  html += '</div>';

  html += '<h3 class="block-title">Le parole di Gesù</h3>';
  S.paroleGesu.forEach((ws, wi) => {
    html += '<div class="wordstudy">';
    html += `<h4>${escHtml(ws.titolo)}</h4><p class="sub">${escHtml(ws.sottotitolo)}</p>`;
    html += '<div class="flipgrid">';
    ws.carte.forEach((c, ci) => {
      html += `<div class="flip" data-flip="${wi}-${ci}"><div class="flip-inner">`
        + `<div class="flip-face flip-front"><span class="it">«${escHtml(c.it)}»</span><span class="gr">${escHtml(c.gr)}</span><span class="hint">tocca per girare</span></div>`
        + `<div class="flip-face flip-back"><p>${escHtml(c.spieg)}</p></div>`
        + '</div></div>';
    });
    html += '</div></div>';
  });

  html += '<h3 class="block-title">La parabola dei Talenti</h3>';
  html += `<div class="thesis">${escHtml(S.talenti.tesi)}</div>`;
  html += '<div class="cardgrid">';
  S.talenti.punti.forEach(p => {
    html += `<div class="infocard"><h5>${escHtml(p.t)}</h5><p>${escHtml(p.d)}</p></div>`;
  });
  html += '</div>';

  const el = document.getElementById('gesu');
  el.innerHTML = `<div class="studio-scope">${html}</div>`;
  el.querySelectorAll('.tappa-st').forEach(t =>
    t.addEventListener('click', () => t.classList.toggle('open')));
  el.querySelectorAll('.flip').forEach(f =>
    f.addEventListener('click', () => f.classList.toggle('flipped')));
}

function renderEsplora() {
  if (typeof STUDIO_DATA === 'undefined') return;
  const E = STUDIO_DATA.esplora;
  let html = '';
  html += '<p class="section-intro">Esplora</p>';
  html += '<p class="section-lead">I luoghi dove la storia accade e le parole originali (ebraico, greco, aramaico) che la traduzione non riesce a contenere.</p>';

  html += '<h3 class="block-title">Mappa dei luoghi biblici</h3>';
  html += '<p class="note" style="margin-top:0">Mappa satellitare interattiva: <strong>zoom</strong> con rotellina/dita, <strong>trascina</strong> per spostarti, <strong>tocca un punto</strong> per la storia completa. I colori indicano l’epoca; usa il pannello in alto a destra per filtrare per epoca o cambiare mappa.</p>';
  html += '<div id="esplora-map" class="leaflet-map"></div>';
  html += '<div id="esplora-detail" class="map-detail"><span class="md-ph">Tocca un luogo sulla mappa per leggere qui sotto la sua storia completa.</span></div>';

  html += '<h3 class="block-title">La diffusione della fede nel mondo</h3>';
  html += '<p class="note" style="margin-top:0">Da Gerusalemme al mondo: chi ha portato il Vangelo, dove, quando e a quale prezzo. <strong>Zoom</strong> e <strong>trascinamento</strong> liberi; le linee tratteggiate sono le rotte dell’annuncio. Dal pannello accendi/spegni le epoche, mostra le «capitali cristiane oggi» o cambia mappa. <strong>Tocca un punto</strong> per i dettagli qui sotto.</p>';
  html += '<div id="diff-map" class="leaflet-map"></div>';
  html += '<div id="diff-detail" class="map-detail"><span class="md-ph">Tocca un punto sulla mappa per leggere qui sotto chi ha evangelizzato, come e con quali martiri.</span></div>';

  html += '<h3 class="block-title">Termini originali</h3>';
  html += '<div class="filterbar" id="lang-filter">'
    + '<span class="chip active" data-lang="*">tutti</span>'
    + '<span class="chip" data-lang="ebraico">ebraico</span>'
    + '<span class="chip" data-lang="greco">greco</span>'
    + '<span class="chip" data-lang="aramaico">aramaico</span></div>';
  html += '<div class="cardgrid" id="termini-grid"></div>';

  const el = document.getElementById('esplora');
  el.innerHTML = `<div class="studio-scope">${html}</div>`;

  function renderTermini(lang) {
    let g = '';
    E.termini.forEach(t => {
      if (lang !== '*' && t.lingua !== lang) return;
      g += `<div class="term-st"><div class="head"><span class="w">${escHtml(t.parola)}</span>`
        + `<span class="lang">${escHtml(t.lingua)}</span></div>`
        + `<div class="trad">${escHtml(t.trad)}</div>`
        + `<p class="sp">${escHtml(t.spieg)}</p>`
        + `<span class="mod">↳ ${escHtml(t.modulo)}</span></div>`;
    });
    el.querySelector('#termini-grid').innerHTML = g;
  }
  renderTermini('*');
  el.querySelectorAll('#lang-filter .chip').forEach(c => {
    c.addEventListener('click', () => {
      el.querySelectorAll('#lang-filter .chip').forEach(x => x.classList.remove('active'));
      c.classList.add('active');
      renderTermini(c.dataset.lang);
    });
  });

  // le mappe vengono inizializzate quando la tab Esplora è visibile (vedi handler delle tab)
}

// ---- Avvio ----
renderGenealogia();
renderSapienziali();
renderDogmi();
renderCammino();
renderStudioGesu();
if (typeof renderStudioGesuExtra === 'function') renderStudioGesuExtra();
renderEsplora();
renderDiario();
renderPreferiti();
renderDomande();
if (typeof renderProfeti === 'function') { renderProfeti('profeti'); linkVersettiPanel('profeti'); }
if (typeof renderMisteri === 'function') { renderMisteri('misteri'); linkVersettiPanel('misteri'); }
linkVersettiPanel('gesu');
linkVersettiPanel('domande');
renderBibbia();
