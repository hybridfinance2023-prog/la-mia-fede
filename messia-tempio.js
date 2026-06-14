// =============================================================
//  IL MESSIA NEL TEMPIO — da una conferenza di Roger Liebi
//  Il Secondo Tempio (struttura e archeologia) come grande
//  simbolo che parla di Cristo. Contenuto rielaborato e
//  corretto dalla trascrizione. Autosufficiente (riusa le
//  classi del tema) + versetti cliccabili (linkVersetti).
// =============================================================

const MESSIA_TEMPIO = {
  tagline: "Il Secondo Tempio al tempo di Gesù — la sua struttura, la sua archeologia, il suo culto — è un immenso simbolo che, in ogni dettaglio, parla del Messia. (Da una conferenza di Roger Liebi.)",
  facts: [
    { k: "Tema", v: "Il simbolismo del Secondo Tempio alla luce del Nuovo Testamento" },
    { k: "Luogo", v: "Gerusalemme · spianata di ~144.000 m²" },
    { k: "Epoca", v: "Tempio di Erode, dal 19 a.C. fino al 70 d.C." },
    { k: "Chiave", v: "«Distruggete questo tempio…» (Gv 2,19) — il vero Tempio è Cristo" },
    { k: "Fonte", v: "Conferenza «Il Messia nel Tempio», Roger Liebi" }
  ],
  sezioni: [
    {
      id: "intro",
      title: "Un solo Tempio, un solo Dio",
      subtitle: "Perché il Tempio rimanda alla persona di Cristo",
      html: `
        <p>Torniamo indietro di duemila anni, al Tempio di Gerusalemme al tempo di Gesù. Era uno degli edifici più grandi del mondo antico: la sua spianata copriva circa <strong>144.000 metri quadrati</strong>, quasi un decimo della città. Israele, secondo la Legge, poteva avere <strong>un solo Tempio</strong> (Dt 12,13-14): un'unica casa per l'unico vero Dio, alla crocevia di tre continenti.</p>
        <p>Ma qual è il significato profondo di questo edificio? Lo dice Gesù stesso quando, sfidato dopo aver purificato il Tempio, risponde:</p>
        <blockquote class="teaching-quote">«Distruggete questo tempio e in tre giorni lo farò risorgere»… ma egli parlava del tempio del suo corpo (Gv 2,19-21).</blockquote>
        <div class="keypoint">
          <strong>La chiave di tutto.</strong> Il Tempio di pietra rimanda, in ultima analisi, alla <strong>persona di Cristo</strong>: in Lui, vero Dio e vero uomo, Dio viene ad «abitare» in mezzo agli uomini. Visitare il Tempio, allora, è imparare a riconoscere Gesù in ogni suo dettaglio.
        </div>
      `
    },
    {
      id: "tre-livelli",
      title: "I tre livelli del simbolo",
      subtitle: "Tempio celeste → Messia, Chiesa, singolo credente",
      html: `
        <p>La Bibbia parla di un <strong>Tempio celeste</strong>, l'originale: «Si aprì il tempio di Dio nel cielo e apparve nel tempio l'arca della sua alleanza» (Ap 11,19). Il Tempio di Gerusalemme ne era una <em>riproduzione</em> terrena.</p>
        <p>E quella riproduzione punta, nel Nuovo Testamento, a tre realtà:</p>
        <ul class="clean-list">
          <li><strong>Il Messia</strong>: «in lui abita corporalmente tutta la pienezza della divinità» — il Tempio è Cristo (Gv 2,21).</li>
          <li><strong>La Chiesa</strong>: «Non sapete che siete tempio di Dio e che lo Spirito di Dio abita in voi?» (1 Cor 3,16).</li>
          <li><strong>Il singolo credente</strong>: «Il vostro corpo è tempio dello Spirito Santo che è in voi» (1 Cor 6,19).</li>
        </ul>
        <div class="keypoint">
          <strong>Schema.</strong> Tempio celeste (archetipo) → Tempio terreno (riproduzione) → <em>Cristo</em>, la <em>Chiesa</em>, il <em>credente</em>. È la chiave per leggere tutto il simbolismo che segue.
        </div>
      `
    },
    {
      id: "struttura",
      title: "La struttura del Tempio",
      subtitle: "Una breve passeggiata sulla spianata",
      html: `
        <p>Al centro sorgeva l'<strong>edificio del Santuario</strong>, in marmo bianco, alto circa 52 metri (come un palazzo di venti piani). Attorno, il cortile interno con la presenza di Dio, la <strong>Shekhinah</strong>; poi il cortile delle donne; il tutto attorno a un sacro <strong>quadrato di 500 cubiti</strong> per lato, già del Tempio di Salomone.</p>
        <p>Nel periodo precedente la nascita di Cristo, <strong>il re Erode</strong> (dal 19 a.C.) ampliò enormemente la spianata verso sud, ovest e soprattutto nord — non verso est, dove scende ripida la <strong>valle del Cedron</strong>. Sorsero immensi portici tutto intorno, e il <strong>Cortile dei Gentili</strong>, dove anche i non-ebrei potevano venire ad adorare il Dio d'Israele.</p>
        <p>A sud, il magnifico <strong>Portico Reale</strong> (una basilica: tribunale e mercato insieme). Nell'angolo nord-occidentale, la <strong>Fortezza Antonia</strong>, sede della guarnigione romana: nelle grandi feste fino a 600 legionari vi sorvegliavano dall'alto.</p>
        <div class="keypoint">
          <strong>Oggi.</strong> Quella spianata di 144.000 m² è il luogo dove sorgono la <em>Cupola della Roccia</em> e la moschea <em>Al-Aqsa</em>; del Tempio resta il celebre <em>muro occidentale</em> (il «Muro del Pianto»), parte del muro di sostegno di Erode, oggi ampiamente documentato dagli scavi (circa 485 m a ovest).
        </div>
      `
    },
    {
      id: "muro",
      title: "Il muro che divideva",
      subtitle: "Efesini 2,14 — Cristo lo ha abbattuto",
      html: `
        <p>All'interno del Cortile dei Gentili correva una bassa transenna di pietra, il <strong>soreg</strong>: il «muro divisorio» che separava i non-ebrei dagli ebrei. Iscrizioni in greco avvertivano che ogni straniero che lo avesse oltrepassato sarebbe stato responsabile della propria morte (tre di queste tavole sono state ritrovate dagli archeologi).</p>
        <p>San Paolo, scrivendo nel 62 d.C. — quando quel muro esisteva ancora ed era in uso — annuncia qualcosa di sconvolgente:</p>
        <blockquote class="teaching-quote">«Egli, Cristo, è la nostra pace, colui che dei due ha fatto una cosa sola, abbattendo il muro di separazione» (Ef 2,14).</blockquote>
        <div class="keypoint">
          <strong>Simbolismo e storia.</strong> Cristo, con la sua morte, ha abbattuto il muro che separava ebrei e pagani. E la storia lo conferma in modo impressionante: nel <strong>70 d.C.</strong> i Romani rasero al suolo Gerusalemme e il Tempio, e quel muro divisorio <strong>non fu mai più ricostruito</strong>. In quasi duemila anni il Vangelo ha raggiunto tutti i continenti: Dio accoglie un popolo «da ogni nazione».
        </div>
      `
    },
    {
      id: "bella-porta",
      title: "La Bella Porta e lo zoppo",
      subtitle: "Atti 3 — un incontro che fa camminare",
      html: `
        <p>Tra gli ingressi più sontuosi c'era la <strong>Porta Bella</strong> (Speciosa), con le prime cupole della storia dell'architettura, scolpite nella pietra. Presso quella porta accadde un episodio celebre:</p>
        <blockquote class="teaching-quote">Pietro e Giovanni salivano al tempio per la preghiera dell'ora nona; un uomo zoppo dalla nascita, deposto ogni giorno alla porta detta Bella, chiese loro l'elemosina. Pietro disse: «Non possiedo né argento né oro, ma quello che ho te lo do: nel nome di Gesù Cristo il Nazareno, àlzati e cammina» (At 3,1-6).</blockquote>
        <div class="keypoint">
          <strong>Simbolismo.</strong> Lo zoppo, incapace di camminare e fermo «fuori» dalla porta, è l'immagine di ogni uomo: incapace, da solo, di camminare secondo i comandamenti di Dio. È l'<strong>incontro con Cristo</strong> a rimetterlo in piedi. Curiosità: gli ebrei salivano al Tempio entrando «a destra» e uscendo «a sinistra»; chi era nel dolore poteva entrare «a sinistra», così gli altri gli chiedevano «come stai?». Una vera <em>cura delle anime</em> dentro la comunità — ciò che Paolo chiede ai cristiani: «consolatevi a vicenda ed edificatevi gli uni gli altri» (1 Ts 5,11.14).
        </div>
      `
    },
    {
      id: "bagni",
      title: "La scalinata e i bagni rituali",
      subtitle: "Via larga e via stretta, conversione e battesimo",
      html: `
        <p>Una grande scalinata larga 64 metri saliva al Tempio (Sal 122,1: «Quale gioia, quando mi dissero: andremo alla casa del Signore!»). Sotto e attorno ad essa gli archeologi hanno scoperto <strong>decine di bagni rituali</strong> (miqva'ot): ci si purificava prima di salire.</p>
        <p>Vi si scendeva per gradini larghi (la «via larga»), ci si immergeva, e si risaliva purificati per gradini stretti (la «via stretta»): una <strong>conversione di 180 gradi</strong>. Gesù dice: «Larga è la porta e spaziosa la via che conduce alla perdizione… stretta è la porta e angusta la via che conduce alla vita» (Mt 7,13-14).</p>
        <div class="keypoint">
          <strong>Simbolismo.</strong> L'acqua è immagine della Parola di Dio che purifica: «Cristo ha amato la Chiesa e ha dato se stesso per lei, per renderla santa, purificandola con il lavacro dell'acqua mediante la parola» (Ef 5,25-26). Lasciarsi correggere dalla Scrittura è immergersi in quel «bagno». E proprio quei bagni spiegano come, a <strong>Pentecoste</strong>, si poterono battezzare <strong>3000 persone</strong> in un giorno (At 2,41): c'erano innumerevoli vasche davanti al Tempio.
        </div>
      `
    },
    {
      id: "porte-giustizia",
      title: "Le porte della giustizia",
      subtitle: "Le porte di Hulda e il Salmo 118",
      html: `
        <p>Dalla scalinata si entrava attraverso le <strong>porte di Hulda</strong> (in ebraico <em>hulda</em> = «talpa»: si passava sotto, in un tunnel, come una talpa, per riemergere sulla spianata). Salendo, i pellegrini cantavano:</p>
        <blockquote class="teaching-quote">«Apritemi le porte della giustizia: vi entrerò per ringraziare il Signore. È questa la porta del Signore: per essa entrano i giusti» (Sal 118,19-20).</blockquote>
        <div class="keypoint">
          <strong>Chi sono «i giusti».</strong> Non chi si crede migliore degli altri, ma chi <em>si è umiliato</em> e ha ricevuto la giustizia da Dio — proprio come, prima di entrare, ci si girava di 180 gradi nel bagno della purificazione. Il Tempio, con le sue molte porte aperte, mostra un <strong>Dio che invita</strong>: vuole che veniamo a Lui così come siamo.
        </div>
      `
    },
    {
      id: "dodicenne",
      title: "Gesù dodicenne tra i dottori",
      subtitle: "Luca 2 — sulla terrazza dei maestri",
      html: `
        <p>Sul lato sud del cortile interno c'era una terrazza (in ebraico <em>chel</em>) e la <strong>Sala delle pietre squadrate</strong>, sede del <strong>Sinedrio</strong>, il Supremo Tribunale d'Israele (fino a circa il 30 d.C.). Nei giorni di festa i grandi maestri sedevano lì e rispondevano pubblicamente alle domande del popolo.</p>
        <p>È lo sfondo del racconto di Luca: Gesù dodicenne, salito per la Pasqua, resta nel Tempio.</p>
        <blockquote class="teaching-quote">«Dopo tre giorni lo trovarono nel tempio, seduto in mezzo ai maestri, mentre li ascoltava e li interrogava. E tutti… erano pieni di stupore per la sua intelligenza e le sue risposte» (Lc 2,46-47).</blockquote>
        <div class="keypoint">
          <strong>Simbolismo.</strong> Alla festa di Pasqua le domande vertevano sull'<em>agnello pasquale</em>. Già a dodici anni Gesù sapeva di essere venuto a morire come il <strong>vero Agnello pasquale</strong>: «Ecco l'agnello di Dio, che toglie il peccato del mondo» (Gv 1,29). Il bambino tra i dottori è il Maestro che insegna ai maestri.
        </div>
      `
    },
    {
      id: "processo",
      title: "Il portico reale e il processo",
      subtitle: "Il vero Sacrificio condannato nel luogo dei sacrifici",
      html: `
        <p>Il <strong>Portico Reale</strong>, a sud, era una basilica grandiosa: colonne così imponenti che tre uomini con le braccia tese a stento le abbracciavano, alte circa 15 metri, ciascuna da un unico blocco di pietra. Vi avevano sede il tribunale e il mercato.</p>
        <p>Qui, davanti al Sinedrio, si decise la condanna di Gesù:</p>
        <blockquote class="teaching-quote">«Venuto il mattino, tutti i capi dei sacerdoti e gli anziani del popolo tennero consiglio contro Gesù per farlo morire. Poi… lo consegnarono al governatore Ponzio Pilato» (Mt 27,1-2).</blockquote>
        <div class="keypoint">
          <strong>Simbolismo impressionante.</strong> Il <strong>vero Sacrificio</strong> — Colui che solo poteva espiare il nostro peccato — fu condannato a morte proprio nel <em>luogo dei sacrifici</em>, dal sommo sacerdote. Poiché il Sinedrio non aveva più il diritto di eseguire la pena di morte, lo consegnarono ai Romani.
        </div>
      `
    },
    {
      id: "golgota",
      title: "Fuori della porta: il Golgota",
      subtitle: "La pietra scartata diventa testata d'angolo",
      html: `
        <p>Condannato da Pilato, Gesù fu condotto fuori città:</p>
        <blockquote class="teaching-quote">«Anche Gesù, per santificare il popolo con il proprio sangue, patì fuori della porta» (Eb 13,12).</blockquote>
        <p>Il <strong>Golgota</strong> era una cava di pietra dismessa: vi era rimasta in piedi una rupe alta circa 12 metri perché quella pietra era troppo tenera per essere usata in costruzione — <strong>scartata</strong> dai costruttori. E lì fu innalzata la croce.</p>
        <div class="keypoint">
          <strong>Il compimento.</strong> «La pietra che i costruttori hanno scartato è divenuta la pietra d'angolo» (Sal 118,22): la rupe scartata della cava diventa il luogo della salvezza, immagine del Cristo rifiutato e divenuto fondamento. La stessa profezia che i pellegrini cantavano salendo al Tempio si compie, alla lettera, a pochi passi da esso.
        </div>
      `
    },
    {
      id: "timing",
      title: "L'ora dei sacrifici",
      subtitle: "La crocifissione coincide col culto del Tempio",
      html: `
        <p>Nel Tempio si offrivano ogni giorno due olocausti perpetui: quello del <strong>mattino, verso le ore 9</strong>, e quello della <strong>sera, verso le ore 15</strong>. Tutti gli altri sacrifici si svolgevano tra queste due ore.</p>
        <div class="keypoint">
          <strong>La coincidenza.</strong> I Vangeli annotano che Gesù fu crocifisso «all'ora terza» (le <strong>9 del mattino</strong>, Mc 15,25) e morì «all'ora nona» (le <strong>15</strong>, Mc 15,34-37). L'intero evento della crocifissione coincide <em>esattamente</em> con il servizio sacrificale quotidiano del Tempio: mentre l'agnello del mattino e quello della sera venivano offerti, il vero Agnello di Dio era sulla croce. Persino l'orologio del Tempio annunciava il Messia.
        </div>
      `
    },
    {
      id: "sintesi",
      title: "Tutto il Tempio parla di Lui",
      subtitle: "Sintesi",
      html: `
        <p>Pietra dopo pietra, il Secondo Tempio annunciava Cristo:</p>
        <ul class="clean-list">
          <li>L'edificio stesso → il <strong>corpo del Messia</strong> (Gv 2,21).</li>
          <li>Il muro divisorio → <strong>abbattuto</strong> dalla croce (Ef 2,14).</li>
          <li>La Bella Porta → l'<strong>incontro che rimette in piedi</strong> (At 3).</li>
          <li>I bagni rituali → la <strong>conversione</strong> e il battesimo, l'acqua della Parola (Ef 5,26).</li>
          <li>Le porte della giustizia → l'ingresso degli <strong>umili</strong> (Sal 118,19-20).</li>
          <li>L'agnello pasquale → l'<strong>Agnello di Dio</strong> (Gv 1,29).</li>
          <li>Il luogo del giudizio e dei sacrifici → la <strong>condanna del vero Sacrificio</strong>.</li>
          <li>La pietra scartata della cava → la <strong>pietra d'angolo</strong> (Sal 118,22).</li>
          <li>L'ora dei sacrifici → l'ora della <strong>croce</strong>.</li>
        </ul>
        <div class="keypoint">
          Per chi ha occhi per vedere, il Tempio non era soltanto un edificio: era una grande <strong>profezia di pietra</strong>, tutta orientata verso Gesù, il Messia. «Voi scrutate le Scritture… ed esse danno testimonianza di me» (Gv 5,39).
        </div>
      `
    }
  ]
};

function renderMessiaTempio(containerId) {
  const panel = document.getElementById(containerId || 'tempio');
  if (!panel || typeof MESSIA_TEMPIO === 'undefined') return;
  const D = MESSIA_TEMPIO;
  let html = '';

  html += '<div class="study-hero"><h2>Il Messia nel Tempio</h2>'
    + '<p class="study-meta">Il simbolismo del Secondo Tempio · da Roger Liebi</p>'
    + `<p class="study-tagline">${D.tagline}</p></div>`;

  html += '<div class="cov-meta study-facts">';
  D.facts.forEach(f => { html += `<div><span class="cov-k">${f.k}</span><span class="cov-v">${f.v}</span></div>`; });
  html += '</div>';

  html += '<nav class="teaching-subnav">';
  D.sezioni.forEach((s, i) => { html += `<button type="button" data-target="tmp-${s.id}">${i + 1}. ${s.title}</button>`; });
  html += '</nav>';

  D.sezioni.forEach((s, i) => {
    html += `<section class="teaching-section" id="tmp-${s.id}">`
      + `<div class="study-step">Tappa ${i + 1} di ${D.sezioni.length}</div>`
      + `<h3>${s.title}</h3>`
      + (s.subtitle ? `<p class="section-sub">${s.subtitle}</p>` : '')
      + `<div class="teaching-body">${s.html}</div></section>`;
  });

  panel.innerHTML = html;

  panel.querySelectorAll('.teaching-subnav button').forEach(btn => {
    btn.addEventListener('click', () => {
      const t = document.getElementById(btn.dataset.target);
      if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  if (typeof linkVersetti === 'function') {
    panel.querySelectorAll('.teaching-body').forEach(b => linkVersetti(b));
  }
}
