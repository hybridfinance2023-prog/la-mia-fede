// =============================================================
//  DAVIDE — la storia dettagliata, con i simbolismi
//  Re, pastore, peccatore e penitente, poeta, profeta del Messia.
//  Autosufficiente: dati + render. Riusa le classi del tema
//  (.study-hero, .teaching-section, .teaching-body, .keypoint…)
//  e i versetti cliccabili (linkVersetti, chiamato da app.js).
// =============================================================

const STORIA_DAVIDE = {
  tagline: "Pastorello e re, eroe e peccatore, poeta e profeta: la parabola di un uomo «secondo il cuore di Dio» in cui tutto l'Antico Testamento punta verso il Messia.",
  facts: [
    { k: "Chi", v: "Davide, figlio di Iesse, di Betlemme" },
    { k: "Regno", v: "~1010-970 a.C. (7 anni a Hebron, 33 a Gerusalemme)" },
    { k: "Fonti", v: "1 Samuele 16 – 1 Re 2 · 1 Cronache · Salmi" },
    { k: "Titolo", v: "«Un uomo secondo il cuore di Dio» (1 Sam 13,14)" },
    { k: "Eredità", v: "La dinastia da cui nascerà Gesù, «figlio di Davide»" }
  ],
  sezioni: [
    {
      id: "intro",
      title: "Il pastore che divenne re",
      subtitle: "Una vita in cui Dio scrive dritto sulle righe storte dell'uomo",
      html: `
        <p>Davide è il personaggio più raccontato dell'Antico Testamento dopo Mosè: oltre 60 capitoli parlano di lui. La sua vicenda è insieme una grande storia umana — ascesa, gloria, caduta, perdono, dolore — e una <strong>profezia in azione</strong>: ogni tappa, riletta dai Vangeli, anticipa qualcosa di Gesù, «il figlio di Davide».</p>
        <p>Nasce ultimo di otto fratelli a <strong>Betlemme</strong>, fa il pastore di pecore: il mestiere più umile, che diventerà l'immagine del re ideale e del Messia («Io sono il buon pastore», Gv 10,11). La Scrittura lo definisce «un uomo secondo il cuore di Dio» (1 Sam 13,14): non perché perfetto — anzi, cadrà gravemente — ma perché, anche nel peccato, <strong>torna sempre a Dio</strong> con cuore sincero.</p>
        <div class="keypoint">
          <strong>Il filo simbolico.</strong> Pastore → Re → Messia. In ebraico «Messia» (mashìach) significa «unto», e Davide è l'unto per eccellenza. Da lui parte l'attesa di un «unto» definitivo: Cristo (in greco Christòs = unto). La storia di Davide è la culla della speranza messianica.
        </div>
      `
    },
    {
      id: "unzione",
      title: "L'unzione segreta",
      subtitle: "1 Samuele 16 — «Dio guarda il cuore»",
      html: `
        <p>Dio invia il profeta Samuele a Betlemme per ungere un nuovo re tra i figli di Iesse, perché il re Saul è stato rigettato. Samuele vede i fratelli maggiori, alti e prestanti, e pensa di aver trovato l'eletto. Ma Dio lo corregge con una delle frasi più importanti della Bibbia:</p>
        <blockquote class="teaching-quote">«Non guardare al suo aspetto né alla sua alta statura… L'uomo guarda l'apparenza, il Signore guarda il cuore» (1 Sam 16,7).</blockquote>
        <p>Viene chiamato l'ultimo, il più piccolo, lasciato a pascolare il gregge: Davide. Samuele lo unge con l'olio «in mezzo ai suoi fratelli, e lo Spirito del Signore irruppe su Davide da quel giorno in poi» (1 Sam 16,13).</p>
        <div class="keypoint">
          <strong>Simbolismi.</strong> L'<em>olio</em> dell'unzione è segno dello <em>Spirito Santo</em> che scende e consacra. La scelta del «più piccolo» è la logica di Dio che capovolge il mondo: sceglie gli ultimi (la stessa logica del Magnificat e delle Beatitudini). L'unzione «in mezzo ai fratelli» prefigura il Battesimo di Gesù, quando lo Spirito scende su di Lui.
        </div>
        <p>Subito dopo, Davide entra alla corte di Saul proprio come <strong>musicista</strong>: la sua arpa calma lo spirito tormentato del re (1 Sam 16,23). Il futuro re comincia servendo e consolando.</p>
      `
    },
    {
      id: "golia",
      title: "Davide e Golia",
      subtitle: "1 Samuele 17 — la fede contro la forza bruta",
      html: `
        <p>I Filistei schierano il gigante <strong>Golia</strong>, che per quaranta giorni sfida e umilia Israele. Nessun soldato osa affrontarlo. Arriva Davide, ragazzo, portando provviste ai fratelli, e si indigna che «questo Filisteo incirconciso» insulti «le schiere del Dio vivente». Si offre di combattere.</p>
        <p>Rifiuta l'armatura di Saul (troppo grande, non sua) e va incontro al gigante con la fionda e <strong>cinque pietre lisce</strong> del torrente. La sua arma vera, però, è un'altra:</p>
        <blockquote class="teaching-quote">«Tu vieni a me con la spada, con la lancia e con l'asta. Io vengo a te nel nome del Signore degli eserciti» (1 Sam 17,45).</blockquote>
        <p>Una sola pietra in fronte, e il gigante cade. Davide vince «senza spada» (17,50).</p>
        <div class="keypoint">
          <strong>Simbolismi.</strong> Il <em>piccolo</em> che abbatte il <em>gigante</em> è l'immagine perenne di Dio che salva non con la potenza ma con la fede (cfr. «la potenza si manifesta nella debolezza», 2 Cor 12,9). I Padri vi hanno letto Cristo che, apparentemente debole sulla croce, schiaccia il vero gigante: il male e la morte. La pietra che colpisce alla testa richiama Genesi 3,15 («ti schiaccerà il capo»).
        </div>
      `
    },
    {
      id: "saul",
      title: "Fuga e fedeltà: Davide e Saul",
      subtitle: "1 Samuele 18–26 — l'invidia, l'amicizia, il rispetto",
      html: `
        <p>Dopo la vittoria, le donne cantano: «Saul ne ha uccisi mille, Davide diecimila». L'<strong>invidia</strong> divora Saul, che cerca più volte di uccidere Davide. Comincia una lunga fuga nel deserto.</p>
        <p>In questi anni emergono due cose bellissime:</p>
        <ul class="clean-list">
          <li>L'<strong>amicizia con Gionata</strong>, figlio di Saul: «Gionata amava Davide come se stesso» (1 Sam 18,1). Un amore fedele che mette la verità davanti al proprio interesse di erede al trono.</li>
          <li>Il <strong>rispetto per «l'unto del Signore»</strong>: per due volte Davide ha Saul in suo potere e potrebbe ucciderlo, ma si rifiuta: «Non stenderò la mano contro l'unto del Signore» (1 Sam 24; 26). Preferisce aspettare i tempi di Dio.</li>
        </ul>
        <div class="keypoint">
          <strong>Insegnamento e simbolismo.</strong> Davide non «si prende» il trono con la violenza: lo riceve da Dio, con pazienza. È il rifiuto della logica del potere a ogni costo. Prefigura Cristo, che rifiuta le tentazioni del potere (Mt 4) e riceve il Regno dal Padre, non strappandolo.
        </div>
      `
    },
    {
      id: "re",
      title: "Re a Hebron e a Gerusalemme",
      subtitle: "2 Samuele 2–5 — l'ascesa e la città di Davide",
      html: `
        <p>Morto Saul, Davide è proclamato re di Giuda a <strong>Hebron</strong> (regna lì 7 anni), e poi re di tutto Israele. La sua mossa decisiva è conquistare <strong>Gerusalemme</strong>, città neutrale tra le tribù, facendone la capitale: da allora «città di Davide».</p>
        <p>Unisce le tribù divise, sconfigge i Filistei, porta pace e stabilità. Il pastorello è ora il re più amato della storia d'Israele.</p>
        <div class="keypoint">
          <strong>Simbolismo.</strong> <em>Gerusalemme</em> diventa il cuore geografico e spirituale della fede: lì sorgerà il Tempio, lì Gesù morirà e risorgerà, e l'Apocalisse la trasfigurerà nella «Gerusalemme nuova» (Ap 21,2). Davide è colui che «fonda» la città santa della salvezza.
        </div>
      `
    },
    {
      id: "arca",
      title: "La danza davanti all'arca",
      subtitle: "2 Samuele 6 — la gioia umile del re",
      html: `
        <p>Davide riporta a Gerusalemme l'<strong>Arca dell'alleanza</strong>, segno della presenza di Dio. E fa una cosa sorprendente per un re: <strong>danza</strong> con tutte le sue forze davanti all'Arca, vestito semplicemente, in mezzo al popolo.</p>
        <p>Sua moglie Mikal (figlia di Saul) lo disprezza per essersi «abbassato». Davide risponde: «Danzerò davanti al Signore… mi renderò ancora più vile» (2 Sam 6,21-22). Per lui l'onore non è la dignità regale, ma l'adorazione di Dio.</p>
        <div class="keypoint">
          <strong>Simbolismo.</strong> Il re che <em>danza e si abbassa</em> davanti a Dio è il ritratto dell'umiltà del vero culto. Anticipa Gesù che, Re dei re, si abbassa fino a lavare i piedi (Gv 13) e a dare la vita. La gioia di Davide è il modello della lode che dimentica se stessa.
        </div>
      `
    },
    {
      id: "alleanza",
      title: "L'alleanza eterna",
      subtitle: "2 Samuele 7 — una «casa» che non finisce",
      html: `
        <p>Davide vuole costruire una «casa» (un Tempio) per Dio. Ma Dio, tramite il profeta Natan, ribalta tutto con un gioco di parole: sarà Lui a costruire una «casa» (una <em>dinastia</em>) per Davide.</p>
        <blockquote class="teaching-quote">«La tua casa e il tuo regno saranno saldi per sempre davanti a me; il tuo trono sarà reso stabile per sempre» (2 Sam 7,16).</blockquote>
        <p>È l'<strong>alleanza davidica</strong>, cantata nei Salmi 89 e 132: la promessa di un discendente il cui regno non avrà fine. Anche quando, secoli dopo, la dinastia sembrerà spegnersi con l'esilio, questa promessa terrà accesa l'attesa.</p>
        <div class="keypoint">
          <strong>Simbolismo cristologico.</strong> La parola ebraica <em>bayit</em> («casa») significa sia edificio sia dinastia: Dio promette non pietre ma una stirpe eterna. L'angelo a Maria riprende parola per parola questa promessa: «Il Signore Dio gli darà il trono di Davide suo padre… e il suo regno non avrà fine» (Lc 1,32-33). Gesù è il «figlio di Davide» che la compie.
        </div>
      `
    },
    {
      id: "peccato",
      title: "La caduta: Betsabea e Natan",
      subtitle: "2 Samuele 11–12 — il grande re diventa il grande penitente",
      html: `
        <p>Al culmine del successo, Davide cade. Vede <strong>Betsabea</strong>, moglie del soldato Uria, e commette adulterio. Per coprire il peccato, fa mandare Uria in prima linea perché muoia: all'adulterio aggiunge l'<strong>omicidio</strong>.</p>
        <p>Dio invia il profeta <strong>Natan</strong>, che racconta la parabola del ricco che ruba l'unica pecora del povero. Davide si indigna contro quell'uomo, e Natan lo inchioda:</p>
        <blockquote class="teaching-quote">«Tu sei quell'uomo!» (2 Sam 12,7).</blockquote>
        <p>Davide non si giustifica, non fa uccidere il profeta (come farebbe un tiranno): crolla e confessa: «Ho peccato contro il Signore». La tradizione mette sulle sue labbra il <strong>Salmo 51</strong>, il «Miserere», la più grande preghiera di pentimento: «Pietà di me, o Dio, secondo la tua misericordia… crea in me un cuore puro».</p>
        <div class="keypoint">
          <strong>Insegnamento.</strong> La grandezza di Davide non è non aver peccato, ma il modo in cui <em>torna</em>: riconosce la colpa, non incolpa altri, accetta le conseguenze. Mostra che davanti a Dio conta il cuore contrito (Sal 51,19). Il perdono è reale, ma il peccato lascia ferite: «la spada non si allontanerà mai dalla tua casa» (2 Sam 12,10).
        </div>
      `
    },
    {
      id: "famiglia",
      title: "Le spade in casa: Assalonne",
      subtitle: "2 Samuele 13–19 — le conseguenze e il dolore del padre",
      html: `
        <p>Le parole di Natan si avverano nella famiglia di Davide: violenza tra i figli (Amnon e Tamar), poi la <strong>ribellione del figlio Assalonne</strong>, che usurpa il trono e costringe il padre a fuggire da Gerusalemme, scalzo e in lacrime.</p>
        <p>Quando Assalonne muore in battaglia — contro gli ordini di Davide di risparmiarlo — il re scoppia nel lamento più straziante della Bibbia:</p>
        <blockquote class="teaching-quote">«Figlio mio Assalonne! Assalonne, figlio mio! Fossi morto io al posto tuo!» (2 Sam 18,33).</blockquote>
        <div class="keypoint">
          <strong>Simbolismo.</strong> Davide che lascia Gerusalemme salendo il monte degli Ulivi in pianto, tradito da un intimo (il consigliere Achitòfel, che poi si impicca), prefigura in modo impressionante Gesù: anche Lui sul monte degli Ulivi, tradito da un amico (Giuda, che si impicca). E il padre che vorrebbe morire al posto del figlio anticipa il Padre che dà il Figlio — e il Figlio che muore al posto nostro.
        </div>
      `
    },
    {
      id: "salmi",
      title: "Davide poeta: i Salmi",
      subtitle: "La preghiera che dà voce a tutto il cuore umano",
      html: `
        <p>Davide è ricordato come «il dolce cantore d'Israele» (2 Sam 23,1). A lui la tradizione attribuisce gran parte dei <strong>Salmi</strong>: lode e lamento, fiducia e grido, pentimento e ringraziamento. Nei Salmi la sua esperienza diventa preghiera di tutti.</p>
        <ul class="clean-list">
          <li><strong>Salmo 23</strong> — «Il Signore è il mio pastore»: il re-pastore che si fa pecora affidata a Dio.</li>
          <li><strong>Salmo 51</strong> — il «Miserere» del pentimento.</li>
          <li><strong>Salmo 22</strong> — «Dio mio, perché mi hai abbandonato?»: il grido che Gesù farà suo sulla croce.</li>
          <li><strong>Salmo 110</strong> — «Siedi alla mia destra»: il più citato dal Nuovo Testamento sul Cristo re e sacerdote.</li>
        </ul>
        <div class="keypoint">
          <strong>Simbolismo.</strong> Pregando i suoi Salmi, la Chiesa prega «con» Davide e «in» Cristo. Molti salmi davidici diventano profezie della passione e della gloria di Gesù: la voce di Davide presta le parole al Messia.
        </div>
      `
    },
    {
      id: "cristo",
      title: "Davide, figura di Cristo",
      subtitle: "Tutti i fili che convergono sul «Figlio di Davide»",
      html: `
        <p>Più di ogni altro personaggio, Davide è «tipo» (figura anticipatrice) di Gesù. Ecco i simbolismi raccolti:</p>
        <ul class="clean-list">
          <li><strong>Pastore</strong> → Gesù «buon pastore» (Gv 10).</li>
          <li><strong>Unto (Messia)</strong> → Gesù il Cristo, l'Unto definitivo nello Spirito.</li>
          <li><strong>Nato a Betlemme</strong> → anche Gesù nasce a Betlemme, «città di Davide» (Lc 2,4-11).</li>
          <li><strong>Vince il gigante senza spada</strong> → Cristo vince il male con la croce, non con la forza.</li>
          <li><strong>Re umile e perseguitato</strong> → Gesù, re mite, rifiutato e tradito.</li>
          <li><strong>Tradito da un amico sul monte degli Ulivi</strong> → Achitòfel/Giuda.</li>
          <li><strong>Trono eterno promesso</strong> → «il suo regno non avrà fine» (Lc 1,33).</li>
        </ul>
        <div class="keypoint">
          Per questo i Vangeli aprono chiamando Gesù «figlio di Davide» (Mt 1,1) e i ciechi e le folle lo invocano così. Davide non è solo un antenato biologico: è la <strong>profezia vivente</strong> del Re-Messia. In Lui Davide trova il suo compimento — e il «figlio di Davide» è anche, misteriosamente, il «Signore di Davide» (Mt 22,41-45).
        </div>
      `
    },
    {
      id: "eredita",
      title: "Le ultime parole e l'eredità",
      subtitle: "1 Re 1–2 — la dinastia che porta al Messia",
      html: `
        <p>Anziano, Davide assicura la successione al figlio <strong>Salomone</strong>, che costruirà il Tempio che lui aveva sognato. Le sue ultime parole sono un testamento di fede nella fedeltà di Dio all'alleanza.</p>
        <p>Muore dopo aver regnato quarant'anni. Ma la sua vera eredità non è un impero — che si dividerà e cadrà — bensì una <strong>promessa</strong>: la dinastia da cui, mille anni dopo, nascerà Gesù.</p>
        <div class="keypoint">
          <strong>Conclusione.</strong> La storia di Davide insegna che Dio costruisce la salvezza con persone reali — coraggiose e fragili, sante e peccatrici. Non cerca eroi perfetti, ma cuori che tornano a Lui. E attraverso un pastorello di Betlemme tiene una promessa che attraversa i secoli fino alla mangiatoia di un altro bambino di Betlemme.
        </div>
      `
    }
  ]
};

function renderDavide(containerId) {
  const panel = document.getElementById(containerId || 'davide');
  if (!panel || typeof STORIA_DAVIDE === 'undefined') return;
  const D = STORIA_DAVIDE;
  let html = '';

  // Hero
  html += '<div class="study-hero"><h2>Davide</h2>'
    + '<p class="study-meta">Re d\'Israele · ~1010-970 a.C.</p>'
    + `<p class="study-tagline">${D.tagline}</p></div>`;

  // Scheda dati
  html += '<div class="cov-meta study-facts">';
  D.facts.forEach(f => { html += `<div><span class="cov-k">${f.k}</span><span class="cov-v">${f.v}</span></div>`; });
  html += '</div>';

  // Subnav a salti
  html += '<nav class="teaching-subnav">';
  D.sezioni.forEach((s, i) => { html += `<button type="button" data-target="dav-${s.id}">${i + 1}. ${s.title}</button>`; });
  html += '</nav>';

  // Sezioni
  D.sezioni.forEach((s, i) => {
    html += `<section class="teaching-section" id="dav-${s.id}">`
      + `<div class="study-step">Tappa ${i + 1} di ${D.sezioni.length}</div>`
      + `<h3>${s.title}</h3>`
      + (s.subtitle ? `<p class="section-sub">${s.subtitle}</p>` : '')
      + `<div class="teaching-body">${s.html}</div></section>`;
  });

  panel.innerHTML = html;

  // Subnav: scorrimento alle sezioni
  panel.querySelectorAll('.teaching-subnav button').forEach(btn => {
    btn.addEventListener('click', () => {
      const t = document.getElementById(btn.dataset.target);
      if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Versetti cliccabili (se disponibile la funzione globale)
  if (typeof linkVersetti === 'function') {
    panel.querySelectorAll('.teaching-body').forEach(b => linkVersetti(b));
  }
}
