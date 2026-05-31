/* ============================================================
   La mia fede — Studio di Gesù + Esplorazione (standalone)
   Logica di rendering e interazioni. Vanilla JS, nessuna dipendenza.
   ============================================================ */
(function () {
  var D = window.STUDIO_DATA;
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  /* ---------- Navigazione a tab ---------- */
  function initTabs() {
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function (t) {
      t.addEventListener('click', function () {
        tabs.forEach(function (x) { x.classList.remove('active'); });
        document.querySelectorAll('.panel').forEach(function (p) { p.classList.remove('active'); });
        t.classList.add('active');
        document.getElementById(t.dataset.tab).classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
  }

  /* ---------- 1) STUDIO DI GESÙ ---------- */
  function renderStudioGesu() {
    var S = D.studioGesu, h = '';

    h += '<p class="section-intro">Studio di Gesù</p>';
    h += '<p class="section-lead">Le sue preghiere, il regno che ha annunciato, le sue parole nell\'originale e le sue parabole — non un archivio, ma un cammino.</p>';

    // Preghiere (cammino)
    h += '<h3 class="block-title">Le 13 preghiere di Gesù</h3>';
    h += '<div class="cammino">';
    S.preghiere.forEach(function (p) {
      h += '<article class="tappa" data-n="' + p.n + '">'
        + '<h4>' + esc(p.titolo) + '<span class="rif">' + esc(p.rif) + '</span></h4>'
        + '<span class="parola">' + esc(p.parola) + '</span>'
        + '<div class="testo">' + esc(p.testo) + '</div>'
        + '</article>';
    });
    h += '</div>';

    // Regno
    h += '<h3 class="block-title">Il Regno di Dio non è quello che pensi</h3>';
    h += '<div class="thesis">' + esc(S.regno.tesi) + '</div>';
    h += '<div class="cardgrid">';
    S.regno.punti.forEach(function (p) {
      h += '<div class="infocard"><h5>' + esc(p.t) + '</h5><p>' + esc(p.d) + '</p></div>';
    });
    h += '</div>';

    // Parole di Gesù (word-study flip)
    h += '<h3 class="block-title">Le parole di Gesù</h3>';
    S.paroleGesu.forEach(function (ws, wi) {
      h += '<div class="wordstudy">';
      h += '<h4>' + esc(ws.titolo) + '</h4><p class="sub">' + esc(ws.sottotitolo) + '</p>';
      h += '<div class="flipgrid">';
      ws.carte.forEach(function (c, ci) {
        h += '<div class="flip" data-flip="' + wi + '-' + ci + '">'
          + '<div class="flip-inner">'
          + '<div class="flip-face flip-front"><span class="it">«' + esc(c.it) + '»</span><span class="gr">' + esc(c.gr) + '</span><span class="hint">tocca per girare</span></div>'
          + '<div class="flip-face flip-back"><p>' + esc(c.spieg) + '</p></div>'
          + '</div></div>';
      });
      h += '</div></div>';
    });

    // Talenti
    h += '<h3 class="block-title">La parabola dei Talenti</h3>';
    h += '<div class="thesis">' + esc(S.talenti.tesi) + '</div>';
    h += '<div class="cardgrid">';
    S.talenti.punti.forEach(function (p) {
      h += '<div class="infocard"><h5>' + esc(p.t) + '</h5><p>' + esc(p.d) + '</p></div>';
    });
    h += '</div>';

    var el = document.getElementById('gesu');
    el.innerHTML = h;

    // interazioni
    el.querySelectorAll('.tappa').forEach(function (t) {
      t.addEventListener('click', function () { t.classList.toggle('open'); });
    });
    el.querySelectorAll('.flip').forEach(function (f) {
      f.addEventListener('click', function () { f.classList.toggle('flipped'); });
    });
  }

  /* ---------- proiezione equirettangolare ---------- */
  function projector(box, w, h, padX, padY) {
    return function (lat, lon) {
      var x = padX + (lon - box.lonMin) / (box.lonMax - box.lonMin) * (w - 2 * padX);
      var y = padY + (box.latMax - lat) / (box.latMax - box.latMin) * (h - 2 * padY);
      return { x: x, y: y };
    };
  }

  function graticule(w, h, stepX, stepY) {
    var g = '', x, y;
    for (x = 0; x <= w; x += stepX) g += '<line class="graticule" x1="' + x + '" y1="0" x2="' + x + '" y2="' + h + '"/>';
    for (y = 0; y <= h; y += stepY) g += '<line class="graticule" x1="0" y1="' + y + '" x2="' + w + '" y2="' + y + '"/>';
    return g;
  }

  /* ---------- 2) ESPLORA: mappa biblica + termini ---------- */
  function renderEsplora() {
    var E = D.esplora, h = '';
    var W = 900, H = 460;

    h += '<p class="section-intro">Esplora</p>';
    h += '<p class="section-lead">I luoghi dove la storia accade e le parole originali (ebraico, greco, aramaico) che la traduzione non riesce a contenere.</p>';

    // Mappa biblica
    h += '<h3 class="block-title">Mappa dei luoghi biblici</h3>';
    var proj = projector(E.luoghiBox, W, H, 40, 30);
    var svg = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Mappa dei luoghi biblici">';
    svg += graticule(W, H, 90, 76);
    // blob decorativo (Mediterraneo/Levante) puramente visivo
    svg += '<path class="landblob" d="M60,210 Q200,150 360,180 T720,150 L840,210 L820,330 Q620,300 460,330 T120,320 Z"/>';
    E.luoghi.forEach(function (l) {
      var p = proj(l.lat, l.lon);
      svg += '<g class="node" data-kind="luogo" data-id="' + l.id + '" transform="translate(' + p.x.toFixed(1) + ',' + p.y.toFixed(1) + ')">'
        + '<circle class="dot" r="5.5" fill="#e0a851"/>'
        + '<text x="8" y="4">' + esc(l.nome) + '</text>'
        + '</g>';
    });
    svg += '</svg>';
    h += '<div class="mapwrap">' + svg + '</div>';
    h += '<div class="mappanel" id="luogo-panel"><span class="ph">Tocca un luogo sulla mappa per scoprirlo.</span></div>';
    h += '<p class="note">Mappa schematica: le posizioni sono approssimate, pensate per orientarsi nel racconto.</p>';

    // Termini
    h += '<h3 class="block-title">Termini originali</h3>';
    h += '<div class="filterbar" id="lang-filter">'
      + '<span class="chip active" data-lang="*">tutti</span>'
      + '<span class="chip" data-lang="ebraico">ebraico</span>'
      + '<span class="chip" data-lang="greco">greco</span>'
      + '<span class="chip" data-lang="aramaico">aramaico</span></div>';
    h += '<div class="cardgrid" id="termini-grid"></div>';

    var el = document.getElementById('esplora');
    el.innerHTML = h;

    // termini render + filtro
    function renderTermini(lang) {
      var g = '';
      E.termini.forEach(function (t) {
        if (lang !== '*' && t.lingua !== lang) return;
        g += '<div class="term"><div class="head"><span class="w">' + esc(t.parola) + '</span>'
          + '<span class="lang">' + esc(t.lingua) + '</span></div>'
          + '<div class="trad">' + esc(t.trad) + '</div>'
          + '<p class="sp">' + esc(t.spieg) + '</p>'
          + '<span class="mod">↳ ' + esc(t.modulo) + '</span></div>';
      });
      document.getElementById('termini-grid').innerHTML = g;
    }
    renderTermini('*');
    el.querySelectorAll('#lang-filter .chip').forEach(function (c) {
      c.addEventListener('click', function () {
        el.querySelectorAll('#lang-filter .chip').forEach(function (x) { x.classList.remove('active'); });
        c.classList.add('active');
        renderTermini(c.dataset.lang);
      });
    });

    // click sui luoghi
    var lp = document.getElementById('luogo-panel');
    el.querySelectorAll('.node[data-kind="luogo"]').forEach(function (n) {
      n.addEventListener('click', function () {
        var l = E.luoghi.filter(function (x) { return x.id === n.dataset.id; })[0];
        lp.innerHTML = '<h5>' + esc(l.nome) + '</h5>'
          + '<div class="meta"><b>' + esc(l.tag) + '</b></div>'
          + '<p>' + esc(l.desc) + '</p>';
      });
    });
  }

  /* ---------- 3) DIFFUSIONE DELLA FEDE ---------- */
  function renderDiffusione() {
    var F = D.diffusione, h = '';
    var W = 960, H = 520;

    h += '<p class="section-intro">La diffusione della fede</p>';
    h += '<p class="section-lead">Da Gerusalemme al mondo: chi ha portato il Vangelo, dove e quando. Le attribuzioni più antiche sono spesso tradizione.</p>';

    var proj = projector(F.mondoBox, W, H, 30, 24);

    var svg = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Mappa della diffusione della fede">';
    svg += graticule(W, H, 80, 74);
    // blob decorativi dei continenti (orientativi, non cartografici)
    svg += '<path class="landblob" d="M250,70 Q360,40 470,80 Q520,120 470,170 Q360,200 270,160 Q220,110 250,70 Z"/>'; // Europa
    svg += '<path class="landblob" d="M330,200 Q470,180 520,260 Q560,360 470,440 Q380,470 330,400 Q300,300 330,200 Z"/>'; // Africa
    svg += '<path class="landblob" d="M520,70 Q760,40 900,120 Q930,210 820,250 Q650,230 540,180 Q500,120 520,70 Z"/>'; // Asia
    svg += '<path class="landblob" d="M760,250 Q860,250 900,330 Q870,400 800,380 Q740,330 760,250 Z"/>'; // India/SE
    svg += '<path class="landblob" d="M40,120 Q150,90 190,200 Q210,330 150,440 Q70,470 50,360 Q20,230 40,120 Z"/>'; // Americhe
    svg += '<text class="region-label" x="300" y="60">Europa</text>';
    svg += '<text class="region-label" x="360" y="430">Africa</text>';
    svg += '<text class="region-label" x="700" y="70">Asia</text>';
    svg += '<text class="region-label" x="60" y="110">Americhe</text>';

    // mappa nodi per nome (per tracciare le rotte "da -> a")
    var byName = {};
    F.nodi.forEach(function (n) { byName[n.luogo] = n; });
    var colorOf = {};
    F.onde.forEach(function (o) { colorOf[o.id] = o.colore; });

    // rotte
    var routes = '';
    F.nodi.forEach(function (n) {
      if (!n.da || !byName[n.da]) return;
      var a = proj(byName[n.da].lat, byName[n.da].lon);
      var b = proj(n.lat, n.lon);
      var mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2 - Math.abs(b.x - a.x) * 0.18 - 20;
      routes += '<path class="route" data-onda="' + n.onda + '" stroke="' + colorOf[n.onda]
        + '" d="M' + a.x.toFixed(1) + ',' + a.y.toFixed(1) + ' Q' + mx.toFixed(1) + ',' + my.toFixed(1)
        + ' ' + b.x.toFixed(1) + ',' + b.y.toFixed(1) + '"/>';
    });
    svg += routes;

    // nodi
    F.nodi.forEach(function (n, i) {
      var p = proj(n.lat, n.lon);
      svg += '<g class="node" data-kind="diff" data-i="' + i + '" data-onda="' + n.onda + '" transform="translate(' + p.x.toFixed(1) + ',' + p.y.toFixed(1) + ')">'
        + '<circle class="dot" r="5" fill="' + colorOf[n.onda] + '"/>'
        + '<text x="7" y="3">' + esc(n.luogo) + '</text>'
        + '</g>';
    });
    svg += '</svg>';

    h += '<div class="mapwrap">' + svg + '</div>';

    // legenda onde (toggle)
    h += '<div class="legend" id="onde-legend">';
    F.onde.forEach(function (o) {
      h += '<span class="it on" data-onda="' + o.id + '"><span class="sw" style="background:' + o.colore + '"></span>' + esc(o.nome) + '</span>';
    });
    h += '</div>';

    h += '<div class="mappanel" id="diff-panel"><span class="ph">Tocca un punto per vedere chi ha evangelizzato, dove e quando.</span></div>';
    h += '<p class="note">Mappa schematica e divulgativa: posizioni indicative; molte attribuzioni apostoliche sono tradizione, non cronaca storica certa.</p>';

    var el = document.getElementById('diffusione');
    el.innerHTML = h;

    // click nodi
    var dp = document.getElementById('diff-panel');
    el.querySelectorAll('.node[data-kind="diff"]').forEach(function (n) {
      n.addEventListener('click', function () {
        var d = F.nodi[+n.dataset.i];
        dp.innerHTML = '<h5>' + esc(d.luogo) + '</h5>'
          + '<div class="meta"><b>' + esc(d.chi) + '</b> · ' + esc(d.quando) + '</div>'
          + '<p>' + esc(d.desc) + '</p>';
      });
    });

    // toggle onde + animazione rotte
    function applyOnde() {
      var on = {};
      el.querySelectorAll('#onde-legend .it').forEach(function (it) {
        on[it.dataset.onda] = it.classList.contains('on');
      });
      el.querySelectorAll('.route').forEach(function (r) {
        var vis = on[r.dataset.onda];
        r.style.display = vis ? '' : 'none';
        r.classList.toggle('animate', vis);
      });
      el.querySelectorAll('.node[data-kind="diff"]').forEach(function (nd) {
        nd.style.display = on[nd.dataset.onda] ? '' : 'none';
      });
    }
    el.querySelectorAll('#onde-legend .it').forEach(function (it) {
      it.addEventListener('click', function () { it.classList.toggle('on'); applyOnde(); });
    });
    applyOnde();
  }

  /* ---------- init ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    initTabs();
    renderStudioGesu();
    renderEsplora();
    renderDiffusione();
  });
})();
