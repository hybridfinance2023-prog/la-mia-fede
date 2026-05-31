// =============================================================
//  PROFESSANTI — i grandi Dottori della Chiesa
//  Tab isolata e AUTO-AGGANCIANTE: inietta una tab "Professanti"
//  con il suo pannello (lista + scheda di studio), senza modificare
//  app.js né index.html. Caricato dinamicamente da domande-extra.js.
// =============================================================
(function () {
  "use strict";
  if (window.__PROF_INIT) return;
  window.__PROF_INIT = true;

  /* ---------------- DATI ---------------- */
  var DOTTORI = [
    {
      id: "agostino", nome: "Sant'Agostino d'Ippona", epiteto: "Doctor Gratiae (Dottore della Grazia)",
      anni: "354 – 430", luogo: "Tagaste e Ippona, Nordafrica", epoca: "Padre della Chiesa",
      sommario: "Dalla giovinezza dissoluta alla conversione: il più influente teologo dell'Occidente.",
      bio: `<p>Nato in Nordafrica da padre pagano e dalla madre cristiana <strong>santa Monica</strong>, Agostino visse una giovinezza inquieta e brillante: maestro di retorica, seguace per anni del manicheismo, con una compagna e un figlio (Adeodato). La sua ricerca della verità lo portò a Milano, dove l'incontro con il vescovo <strong>sant'Ambrogio</strong> e la lettura di san Paolo lo condussero alla celebre conversione nel giardino ("<em>tolle, lege</em> — prendi e leggi"), narrata nelle <em>Confessioni</em>.</p>
        <p>Battezzato nel 387, tornò in Africa e divenne <strong>vescovo di Ippona</strong>. Per oltre trent'anni predicò, scrisse e difese la fede contro i manichei, i donatisti e soprattutto i pelagiani (che negavano il bisogno della grazia). Morì mentre i Vandali assediavano la sua città.</p>`,
      contributo: `Ha plasmato il vocabolario stesso della teologia occidentale: la <strong>grazia</strong> (siamo salvati per dono, non per meriti), il <strong>peccato originale</strong>, l'<strong>interiorità</strong> ("non uscire fuori, rientra in te stesso: nell'uomo interiore abita la verità"), la dottrina della <strong>Trinità</strong> e la visione cristiana della storia come lotta tra "due città", quella di Dio e quella dell'uomo.`,
      opere: ["Le Confessioni", "La Città di Dio", "La Trinità (De Trinitate)", "La dottrina cristiana"],
      citazione: "Ci hai fatti per Te, Signore, e il nostro cuore è inquieto finché non riposa in Te.",
      festa: "28 agosto"
    },
    {
      id: "tommaso", nome: "San Tommaso d'Aquino", epiteto: "Doctor Angelicus / Doctor Communis",
      anni: "1225 – 1274", luogo: "Aquino (Italia) e Parigi", epoca: "Medioevo · domenicano",
      sommario: "La grande sintesi tra fede e ragione; il teologo per eccellenza della Chiesa.",
      bio: `<p>Figlio di una nobile famiglia, entrò giovanissimo tra i <strong>domenicani</strong> contro la volontà dei parenti, che arrivarono a sequestrarlo per un anno. Studiò sotto <strong>sant'Alberto Magno</strong> e insegnò a Parigi. Per la sua mole e il suo carattere silenzioso i compagni lo chiamavano "il bue muto"; Alberto profetizzò: "i muggiti di questo bue si sentiranno in tutto il mondo".</p>
        <p>In una vita relativamente breve produsse un'opera immensa. Verso la fine, dopo un'intensa esperienza mistica durante la Messa, smise di scrivere dicendo: "tutto ciò che ho scritto mi sembra paglia rispetto a ciò che ho visto". Morì a 49 anni mentre si recava al Concilio di Lione.</p>`,
      contributo: `Realizzò la grande <strong>sintesi tra fede e ragione</strong>, mostrando che non si contraddicono perché vengono dallo stesso Dio. Integrò la filosofia di Aristotele nella teologia cristiana, elaborò le celebri <strong>"cinque vie"</strong> per mostrare razionalmente l'esistenza di Dio, approfondì la <strong>legge naturale</strong> e la dottrina della <strong>transustanziazione</strong>. Fu anche un grande poeta eucaristico.`,
      opere: ["Summa Theologiae", "Summa contra Gentiles", "Inni eucaristici (Adoro te devote, Pange lingua, Tantum ergo)"],
      citazione: "Signore, nient'altro che Te.",
      festa: "28 gennaio"
    },
    {
      id: "girolamo", nome: "San Girolamo", epiteto: "Doctor Maximus (Dottore dei biblisti)",
      anni: "347 ca. – 420", luogo: "Stridone (Dalmazia) e Betlemme", epoca: "Padre della Chiesa",
      sommario: "Il grande traduttore della Bibbia in latino: la Vulgata.",
      bio: `<p>Uomo di vastissima cultura e temperamento focoso, Girolamo fu segretario di papa Damaso a Roma, poi si ritirò in ascesi e studio a <strong>Betlemme</strong>, presso la grotta della Natività. Imparò l'ebraico per andare alle fonti originali della Scrittura.</p>
        <p>La sua opera monumentale fu la traduzione di gran parte della Bibbia dall'ebraico e dal greco in latino, la <strong>Vulgata</strong>, che divenne il testo di riferimento della Chiesa occidentale per oltre mille anni.</p>`,
      contributo: `Padre della <strong>scienza biblica</strong>: ha insegnato a tornare ai testi originali e a studiare la Scrittura con rigore. La sua frase è diventata un programma per ogni cristiano: l'amore per la Parola è amore per Cristo stesso.`,
      opere: ["La Vulgata (traduzione latina della Bibbia)", "Commentari biblici", "Lettere"],
      citazione: "L'ignoranza delle Scritture è ignoranza di Cristo.",
      festa: "30 settembre"
    },
    {
      id: "ambrogio", nome: "Sant'Ambrogio di Milano", epiteto: "Dottore della Chiesa",
      anni: "339 ca. – 397", luogo: "Milano", epoca: "Padre della Chiesa",
      sommario: "Il vescovo-pastore che battezzò Agostino e tenne testa agli imperatori.",
      bio: `<p>Governatore romano di Milano, fu acclamato vescovo <strong>dal popolo</strong> mentre era ancora soltanto catecumeno: dovette essere battezzato e ordinato in fretta. Pastore instancabile e predicatore affascinante, <strong>battezzò sant'Agostino</strong> nella notte di Pasqua del 387.</p>
        <p>Difese con coraggio la libertà della Chiesa di fronte al potere imperiale: arrivò a imporre la penitenza pubblica all'imperatore Teodosio dopo un massacro, affermando che "l'imperatore è dentro la Chiesa, non sopra la Chiesa".</p>`,
      contributo: `Maestro nella lettura <strong>allegorica</strong> della Scrittura, organizzatore della <strong>liturgia</strong> e dell'innodia (il "canto ambrosiano"), difensore dell'<strong>indipendenza della Chiesa</strong> e avversario dell'arianesimo.`,
      opere: ["Inni liturgici", "De officiis ministrorum", "Trattati sui sacramenti e sulla Scrittura"],
      citazione: "Quando sei a Roma, vivi come i Romani; quando sei altrove, vivi come vivono là.",
      festa: "7 dicembre"
    },
    {
      id: "gregorio", nome: "San Gregorio Magno", epiteto: "Papa e Dottore",
      anni: "540 ca. – 604", luogo: "Roma", epoca: "Padre della Chiesa · Papa",
      sommario: "Il Papa pastore che evangelizzò l'Inghilterra e riformò la liturgia.",
      bio: `<p>Prefetto di Roma, lasciò tutto per farsi <strong>monaco</strong>, ma fu chiamato a diventare <strong>Papa</strong> in un'epoca di crisi (invasioni, pestilenze, carestie). Si definì "servo dei servi di Dio", titolo che i Papi usano ancora.</p>
        <p>Governò con sapienza e carità, soccorse i poveri, trattò con i Longobardi e inviò <strong>sant'Agostino di Canterbury</strong> a evangelizzare gli Anglosassoni.</p>`,
      contributo: `La sua <strong>Regola pastorale</strong> divenne il manuale dei vescovi per secoli. Riorganizzò la liturgia romana (a lui è legata per tradizione la denominazione del "canto gregoriano"). Maestro di vita spirituale concreta col grande commento al libro di Giobbe.`,
      opere: ["Regola pastorale", "Moralia in Iob (commento a Giobbe)", "Dialoghi", "Omelie"],
      citazione: "La Scrittura cresce con chi la legge.",
      festa: "3 settembre"
    },
    {
      id: "crisostomo", nome: "San Giovanni Crisostomo", epiteto: "Boccadoro · Dottore dell'Eucaristia",
      anni: "347 ca. – 407", luogo: "Antiochia e Costantinopoli", epoca: "Padre della Chiesa",
      sommario: "Il più grande predicatore dell'antichità, difensore dei poveri.",
      bio: `<p>Il soprannome greco <em>Chrysóstomos</em> significa "bocca d'oro", per la straordinaria potenza della sua predicazione. Monaco e asceta, divenne <strong>patriarca di Costantinopoli</strong>, dove denunciò senza paura il lusso della corte e l'ipocrisia dei potenti.</p>
        <p>Proprio per questo coraggio fu <strong>esiliato due volte</strong> e morì in esilio, sfinito dai disagi, con le parole: "Sia gloria a Dio per tutto".</p>`,
      contributo: `Maestro di una lettura della Scrittura aderente al testo e applicata alla vita. Insegnò con forza che <strong>l'Eucaristia e il povero sono inseparabili</strong>: "Vuoi onorare il corpo di Cristo? Non disprezzarlo quando è nudo nei poveri". La Divina Liturgia che porta il suo nome è ancora celebrata in Oriente.`,
      opere: ["Omelie sui Vangeli e su san Paolo", "Sul sacerdozio", "Divina Liturgia di san Giovanni Crisostomo"],
      citazione: "Hai onorato l'altare con la seta? Onora prima il povero, che è il vero tempio di Cristo.",
      festa: "13 settembre"
    },
    {
      id: "atanasio", nome: "Sant'Atanasio", epiteto: "Padre dell'Ortodossia",
      anni: "296 ca. – 373", luogo: "Alessandria d'Egitto", epoca: "Padre della Chiesa",
      sommario: "Il campione della divinità di Cristo contro l'arianesimo.",
      bio: `<p>Giovane diacono, partecipò al <strong>Concilio di Nicea (325)</strong>, e da vescovo di Alessandria divenne il difensore più tenace della fede nella piena divinità del Figlio contro l'eresia di Ario, allora dilagante anche tra imperatori e vescovi.</p>
        <p>Per questo fu <strong>esiliato cinque volte</strong>. La sua solitudine nella battaglia ha coniato un detto: "<em>Athanasius contra mundum</em>" (Atanasio contro il mondo intero).</p>`,
      contributo: `Difese il termine di Nicea "<strong>della stessa sostanza del Padre</strong>" (homooúsios). Nel suo <em>De Incarnatione</em> riassunse il senso della salvezza con una formula celebre sulla divinizzazione dell'uomo.`,
      opere: ["Sull'Incarnazione del Verbo", "Vita di sant'Antonio", "Discorsi contro gli ariani"],
      citazione: "Dio si è fatto uomo, perché l'uomo diventasse Dio.",
      festa: "2 maggio"
    },
    {
      id: "basilio", nome: "San Basilio Magno", epiteto: "Padre cappadoce",
      anni: "330 ca. – 379", luogo: "Cesarea di Cappadocia", epoca: "Padre della Chiesa",
      sommario: "Padre del monachesimo orientale e organizzatore della carità.",
      bio: `<p>Uno dei tre grandi <strong>Padri Cappadoci</strong> (con Gregorio di Nazianzo e il fratello Gregorio di Nissa). Vescovo di Cesarea, unì una profonda dottrina a un'azione sociale concreta: fondò la "Basiliade", una vera cittadella della carità con ospedale e ospizio per i poveri.</p>
        <p>Difese la <strong>divinità dello Spirito Santo</strong> contro chi la negava, contribuendo alla fede proclamata poi a Costantinopoli (381).</p>`,
      contributo: `La sua <strong>Regola</strong> è ancora oggi alla base del monachesimo orientale. Insegnò che la fede vera si traduce in <strong>servizio dei poveri</strong> e in giustizia sociale, con parole durissime contro l'accumulo egoistico delle ricchezze.`,
      opere: ["Regole monastiche", "Sullo Spirito Santo", "Omelie sociali"],
      citazione: "Il pane che tieni da parte è del povero; il mantello che custodisci nell'armadio è dell'ignudo.",
      festa: "2 gennaio"
    },
    {
      id: "bonaventura", nome: "San Bonaventura", epiteto: "Doctor Seraphicus",
      anni: "1221 – 1274", luogo: "Bagnoregio (Italia) e Parigi", epoca: "Medioevo · francescano",
      sommario: "Il teologo dell'amore, guida dei francescani e amico di Tommaso.",
      bio: `<p>Frate <strong>francescano</strong>, fu maestro a Parigi negli stessi anni di Tommaso d'Aquino (i due si stimavano pur con stili diversi: più "del cuore" Bonaventura, più "della ragione" Tommaso). Eletto ministro generale dell'Ordine, ne fu in pratica il "secondo fondatore", e scrisse la biografia ufficiale di san Francesco.</p>
        <p>Cardinale, ebbe un ruolo decisivo al Concilio di Lione (1274), durante il quale morì.</p>`,
      contributo: `Per lui ogni vera conoscenza conduce all'<strong>amore di Dio</strong>: la teologia è un cammino, un "<em>Itinerario della mente verso Dio</em>", in cui il creato è come un libro che parla del Creatore e tutto culmina nell'incontro mistico con Cristo crocifisso.`,
      opere: ["Itinerario della mente verso Dio", "Leggenda maggiore (vita di san Francesco)", "Breviloquium"],
      citazione: "Se cerchi come ciò avvenga, interroga la grazia, non la dottrina; il desiderio, non l'intelletto.",
      festa: "15 luglio"
    },
    {
      id: "teresa-avila", nome: "Santa Teresa d'Avila", epiteto: "Dottore della preghiera (prima donna Dottore)",
      anni: "1515 – 1582", luogo: "Avila (Spagna)", epoca: "Età moderna · carmelitana",
      sommario: "La grande maestra di preghiera e riformatrice del Carmelo.",
      bio: `<p>Monaca carmelitana, dopo anni di mediocrità visse una "seconda conversione" e una profonda esperienza mistica. Con <strong>san Giovanni della Croce</strong> riformò l'Ordine carmelitano (i "Carmelitani Scalzi"), fondando numerosi monasteri nonostante ostacoli, malattie e diffidenze — donna concreta, piena di umorismo e di buon senso.</p>
        <p>Nel 1970 Paolo VI la proclamò <strong>prima donna Dottore della Chiesa</strong>.</p>`,
      contributo: `Insegnò la <strong>preghiera mentale</strong> come "trattenersi spesso da soli a tu per tu con Colui da cui sappiamo di essere amati". Il suo <em>Castello interiore</em> descrive il cammino dell'anima attraverso sette "dimore" fino all'unione con Dio.`,
      opere: ["Il castello interiore", "Cammino di perfezione", "Libro della mia vita"],
      citazione: "Nulla ti turbi, nulla ti spaventi: chi ha Dio nulla gli manca. Solo Dio basta.",
      festa: "15 ottobre"
    },
    {
      id: "caterina", nome: "Santa Caterina da Siena", epiteto: "Dottore della Chiesa · patrona d'Europa",
      anni: "1347 – 1380", luogo: "Siena (Italia)", epoca: "Medioevo · domenicana",
      sommario: "Mistica e riformatrice che riportò il Papa a Roma.",
      bio: `<p>Penultima di venticinque figli, terziaria domenicana, non andò mai a scuola eppure dettò pagine altissime di teologia e centinaia di <strong>lettere</strong> a papi, re e gente comune. Donna di intensa vita mistica e di instancabile carità verso malati e poveri.</p>
        <p>Con autorità e franchezza convinse il Papa a <strong>tornare da Avignone a Roma</strong>, e si spese per la pace tra le città e per la riforma della Chiesa. Morì a soli 33 anni.</p>`,
      contributo: `Voce profetica di riforma e di unità della Chiesa. Il suo <em>Dialogo della Divina Provvidenza</em> e l'epistolario uniscono mistica altissima e concretezza, con l'immagine di Cristo "ponte" tra cielo e terra.`,
      opere: ["Il Dialogo della Divina Provvidenza", "Le Lettere", "Le Orazioni"],
      citazione: "Se sarete ciò che dovete essere, metterete fuoco in tutto il mondo.",
      festa: "29 aprile"
    },
    {
      id: "teresa-lisieux", nome: "Santa Teresa di Lisieux", epiteto: "Dottore dell'amore · della 'piccola via'",
      anni: "1873 – 1897", luogo: "Lisieux (Francia)", epoca: "Età moderna · carmelitana",
      sommario: "La 'piccola via' della fiducia: santità a portata di tutti.",
      bio: `<p>Entrò nel Carmelo a soli 15 anni e morì di tubercolosi a <strong>24 anni</strong>, nel nascondimento. Eppure la sua autobiografia, <em>Storia di un'anima</em>, è diventata uno dei libri spirituali più letti al mondo.</p>
        <p>Proclamata Dottore della Chiesa nel 1997 (la più giovane), è anche <strong>patrona delle missioni</strong> — pur non avendo mai lasciato il monastero — perché tutto offriva per la salvezza delle anime.</p>`,
      contributo: `La "<strong>piccola via</strong>" dell'infanzia spirituale: non grandi imprese, ma fiducia totale e amore nelle piccole cose quotidiane, lasciandosi portare da Dio come un bambino. Una santità possibile a chiunque.`,
      opere: ["Storia di un'anima", "Lettere e poesie"],
      citazione: "Nel cuore della Chiesa, mia Madre, io sarò l'amore.",
      festa: "1 ottobre"
    }
  ];

  function esc(s) { return String(s).replace(/[&<>]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]; }); }

  /* ---------------- STILE ---------------- */
  var css = ''
    + '#professanti .prof-intro{font-family:var(--serif,Georgia,serif);font-size:1.7rem;color:var(--accent,#8b5a2b);margin:.1rem 0 .2rem;}'
    + '#professanti .prof-lead{color:var(--ink-soft,#6b5f56);margin:0 0 1.4rem;max-width:70ch;}'
    + '.prof-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:.9rem;}'
    + '.prof-card{background:var(--bg-elev,#fff);border:1px solid var(--line,#e6dccb);border-radius:14px;padding:1rem 1.1rem;cursor:pointer;transition:box-shadow .2s ease,transform .15s ease;}'
    + '.prof-card:hover{box-shadow:0 6px 18px rgba(139,90,43,.14);transform:translateY(-2px);}'
    + '.prof-card h4{margin:.1rem 0 .15rem;font-family:var(--serif,Georgia,serif);font-size:1.25rem;color:var(--accent,#8b5a2b);}'
    + '.prof-card .ep{font-size:.8rem;color:#fff;background:var(--accent-soft,#c9a77a);border-radius:999px;padding:.1rem .55rem;display:inline-block;margin-bottom:.4rem;}'
    + '.prof-card .an{font-size:.82rem;color:var(--ink-soft,#6b5f56);}'
    + '.prof-card .so{font-size:.92rem;margin:.4rem 0 0;}'
    + '.prof-back{background:none;border:none;color:var(--accent,#8b5a2b);cursor:pointer;font-size:.95rem;padding:.2rem 0;margin-bottom:.6rem;font-family:inherit;}'
    + '.prof-back:hover{text-decoration:underline;}'
    + '.prof-detail h3{font-family:var(--serif,Georgia,serif);font-size:2rem;color:var(--accent,#8b5a2b);margin:.2rem 0 .1rem;}'
    + '.prof-detail .ep{font-style:italic;color:var(--ink-soft,#6b5f56);}'
    + '.prof-detail .meta{font-size:.86rem;color:var(--ink-soft,#6b5f56);margin:.3rem 0 1rem;border-bottom:1px solid var(--line,#e6dccb);padding-bottom:.7rem;}'
    + '.prof-detail h5{font-family:var(--serif,Georgia,serif);color:var(--ink,#2b2420);font-size:1.2rem;margin:1.2rem 0 .3rem;}'
    + '.prof-detail p{line-height:1.6;}'
    + '.prof-detail .opere{margin:.2rem 0;padding-left:1.1rem;}'
    + '.prof-detail .opere li{margin:.2rem 0;}'
    + '.prof-quote{background:var(--highlight,#fff4dc);border-left:4px solid var(--accent-soft,#c9a77a);border-radius:8px;padding:.8rem 1rem;font-style:italic;font-size:1.05rem;margin:1rem 0;}'
    + '.prof-festa{font-size:.9rem;color:var(--ink-soft,#6b5f56);}';
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  /* ---------------- RENDER ---------------- */
  function renderList(panel) {
    var cards = DOTTORI.map(function (d) {
      return '<article class="prof-card" data-id="' + d.id + '">'
        + '<span class="ep">' + esc(d.epoca) + '</span>'
        + '<h4>' + esc(d.nome) + '</h4>'
        + '<div class="an">' + esc(d.anni) + ' · ' + esc(d.luogo) + '</div>'
        + '<p class="so">' + esc(d.sommario) + '</p>'
        + '</article>';
    }).join('');
    panel.innerHTML = '<p class="prof-intro">Professanti — i Dottori della Chiesa</p>'
      + '<p class="prof-lead">I grandi maestri della fede riconosciuti dalla Chiesa per la santità della vita e l\'eccellenza della dottrina. Tocca un nome per studiarne la vita, il pensiero e le opere.</p>'
      + '<div class="prof-grid">' + cards + '</div>';
    Array.prototype.forEach.call(panel.querySelectorAll('.prof-card'), function (c) {
      c.addEventListener('click', function () { renderDetail(panel, c.getAttribute('data-id')); });
    });
  }

  function renderDetail(panel, id) {
    var d = DOTTORI.filter(function (x) { return x.id === id; })[0];
    if (!d) return renderList(panel);
    var opere = (d.opere || []).map(function (o) { return '<li>' + esc(o) + '</li>'; }).join('');
    panel.innerHTML = '<div class="prof-detail">'
      + '<button class="prof-back">← Torna all\'elenco</button>'
      + '<h3>' + esc(d.nome) + '</h3>'
      + '<div class="ep">' + esc(d.epiteto) + '</div>'
      + '<div class="meta"><strong>' + esc(d.anni) + '</strong> · ' + esc(d.luogo) + ' · ' + esc(d.epoca) + '</div>'
      + '<h5>Vita</h5>' + d.bio
      + '<h5>Perché è Dottore della Chiesa</h5><p>' + d.contributo + '</p>'
      + '<h5>Opere principali</h5><ul class="opere">' + opere + '</ul>'
      + '<h5>Una frase</h5><div class="prof-quote">« ' + esc(d.citazione) + ' »</div>'
      + '<p class="prof-festa"><strong>Memoria liturgica:</strong> ' + esc(d.festa) + '</p>'
      + '</div>';
    var back = panel.querySelector('.prof-back');
    if (back) back.addEventListener('click', function () { renderList(panel); window.scrollTo({ top: 0, behavior: 'smooth' }); });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ---------------- TAB + PANNELLO (auto-aggancio robusto) ---------------- */
  var navGuardSet = false;
  function activateTab() {
    var btn = document.getElementById('prof-tab');
    var panel = document.getElementById('professanti');
    if (!btn || !panel) return;
    Array.prototype.forEach.call(document.querySelectorAll('.tabs .tab, nav .tab'), function (t) { t.classList.remove('active'); });
    Array.prototype.forEach.call(document.querySelectorAll('.panel'), function (p) { p.classList.remove('active'); });
    btn.classList.add('active');
    panel.classList.add('active');
    try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) {}
  }
  function ensureTab() {
    var nav = document.querySelector('.tabs') || document.querySelector('nav');
    var main = document.querySelector('.content') || document.querySelector('main');
    if (!nav || !main) return;
    if (!document.getElementById('professanti')) {
      var panel = document.createElement('section');
      panel.id = 'professanti';
      panel.className = 'panel';
      main.appendChild(panel);
      renderList(panel);
    }
    if (!document.getElementById('prof-tab')) {
      var btn = document.createElement('button');
      btn.id = 'prof-tab';
      btn.className = 'tab';
      btn.setAttribute('role', 'tab');
      btn.setAttribute('data-tab', 'professanti');
      btn.textContent = 'Professanti';
      btn.addEventListener('click', function (e) { e.preventDefault(); activateTab(); });
      nav.appendChild(btn);
    }
    if (!navGuardSet) {
      navGuardSet = true;
      nav.addEventListener('click', function (e) {
        var t = e.target && e.target.closest ? e.target.closest('.tab') : null;
        if (t && t.id !== 'prof-tab') {
          var b = document.getElementById('prof-tab'); var p = document.getElementById('professanti');
          if (b) b.classList.remove('active');
          if (p) p.classList.remove('active');
        }
      });
    }
  }

  /* ---------------- OSSERVA E AVVIA ---------------- */
  var scheduled = false, observer = null;
  function run() {
    scheduled = false;
    if (observer) observer.disconnect();
    try { ensureTab(); } catch (e) { /* mai bloccare l'app */ }
    if (observer && observer.observe) observe();
  }
  function schedule() { if (!scheduled) { scheduled = true; setTimeout(run, 300); } }
  function observe() {
    var main = document.querySelector('main') || document.body;
    observer = new MutationObserver(function () { schedule(); });
    observer.observe(main, { childList: true, subtree: true });
  }
  function init() { ensureTab(); observe(); schedule(); }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }

  window.PROFESSANTI = DOTTORI;
})();
