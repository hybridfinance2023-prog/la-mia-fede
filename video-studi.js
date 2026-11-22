// =============================================================
//  DAI VIDEO — insegnamenti tratti da video YouTube
//  Ogni voce di VIDEO_STUDI è un video: trascrizione rielaborata
//  in italiano, organizzata a tappe, con note di approfondimento
//  e versetti cliccabili (linkVersetti). Per aggiungere un nuovo
//  video basta aggiungere un oggetto all'array.
// =============================================================

const VIDEO_STUDI = [
  {
    id: "altra-guancia",
    titolo: "Porgere l'altra guancia",
    sottotitolo: "Genio strategico o debolezza passiva?",
    autore: "Sam Shamoun",
    canale: "More Sam Shamoun",
    url: "https://youtu.be/t-qYZA2mQWI",
    titoloOriginale: "Jesus' 'Turn the Other Cheek' — Strategic Genius or Passive Weakness?",
    durata: "15 min",
    lingua: "inglese (tradotto e rielaborato)",
    tagline: "«Porgi l'altra guancia» non è un invito a subire: letto nel suo contesto storico, è una strategia d'amore che disarma l'oppressore, restituisce dignità a chi è umiliato e conquista il cuore del nemico.",
    facts: [
      { k: "Passo chiave", v: "Matteo 5,38-42 (Discorso della Montagna)" },
      { k: "Tesi", v: "Non passività, ma amore attivo e intelligente" },
      { k: "Contesto", v: "Israele sotto l'occupazione romana" },
      { k: "Prova", v: "Gesù schiaffeggiato davanti al sommo sacerdote (Gv 18,22-23)" },
      { k: "Formato", v: "Dialogo con un giovane cresciuto in ambiente musulmano" }
    ],
    sezioni: [
      {
        id: "taglione",
        title: "«Occhio per occhio»: il contesto",
        subtitle: "Da che cosa Gesù ci vuole liberare",
        html: `
          <blockquote class="teaching-quote">«Avete inteso che fu detto: Occhio per occhio e dente per dente. Ma io vi dico di non opporvi al malvagio; anzi, se uno ti dà uno schiaffo sulla guancia destra, tu porgigli anche l'altra» (Mt 5,38-39).</blockquote>
          <p>Prima di leggere il resto, Shamoun invita a fermarsi su <strong>che cosa</strong> Gesù sta correggendo. Nel modo di pensare comune, «occhio per occhio» era diventato il linguaggio della <strong>vendetta</strong>: mi hai offeso, quindi voglio rifarmi su di te e riprendermi l'onore che mi hai tolto.</p>
          <p>Il contesto, dunque, è quello di chi viene <strong>offeso e umiliato</strong> e reagisce cercando di «pareggiare i conti». È proprio questa logica che Gesù ribalta.</p>
          <div class="keypoint">
            <strong>Nota di approfondimento.</strong> Nella Legge di Mosè la norma del taglione (Es 21,23-25; Lv 24,19-20) era in origine un <em>limite</em> posto ai giudici: la pena non doveva superare il danno. Era quindi già un freno alla vendetta senza misura. Gesù va oltre: non solo limitare la ritorsione, ma <strong>rinunciare a farsi giustizia da sé</strong> con il male.
          </div>
        `
      },
      {
        id: "miglio",
        title: "Il miglio in più e il mantello",
        subtitle: "Ciò che i Romani potevano pretendere",
        html: `
          <blockquote class="teaching-quote">«A chi vuole portarti in tribunale e toglierti la tunica, tu lascia anche il mantello. E se uno ti costringerà ad accompagnarlo per un miglio, tu con lui fanne due» (Mt 5,40-41).</blockquote>
          <p>Al tempo di Gesù, un soldato romano poteva per legge <strong>obbligare un ebreo a portargli il bagaglio per un miglio</strong>. Gli ebrei odiavano questa umiliazione e i Romani disprezzavano gli ebrei. Opporsi con la forza significava solo essere schiacciati: i Romani avevano il potere di imprigionare e uccidere.</p>
          <p>Un esempio lo troviamo proprio nella Passione: i soldati <strong>costrinsero Simone di Cirene</strong> a portare la croce di Gesù (Mc 15,21).</p>
          <p>Che cosa dice allora Gesù? <em>Fanne due</em>. Il soldato si aspetta rabbia, lamentele, odio — anzi, li cerca, per poter trattare l'altro come un animale. Invece si sente dire: «Signore, lasci che lo porti per un altro miglio». Resta spiazzato.</p>
          <div class="keypoint">
            <strong>Simbolismo del gesto.</strong> Il secondo miglio e il mantello in più sono un'azione <em>libera</em>: il primo miglio è imposto, il secondo è scelto. Chi lo compie smette di essere una vittima e diventa il protagonista, trasformando un sopruso in un dono.
          </div>
          <div class="keypoint">
            <strong>Nota di approfondimento.</strong> Nel testo di Matteo il caso della tunica riguarda una <em>causa in tribunale</em> (v. 40), mentre l'obbligo del miglio (in greco <em>angarèuo</em>, il servizio forzato) è quello imposto dai soldati (v. 41). Il principio è lo stesso: rispondere al sopruso con una generosità che l'altro non si aspetta.
          </div>
        `
      },
      {
        id: "vincere-amore",
        title: "Vincere il nemico con l'amore",
        subtitle: "Spiazzare chi ti odia",
        html: `
          <p>Il principio, spiega Shamoun, è questo: <strong>conquistare con l'amore il nemico che ti odia</strong>, così che il suo atteggiamento verso di te cambi. Il soldato finirà per pensare: «Mi sbagliavo su di loro. Non sono gente spregevole: sono persone buone, decenti, capaci di amare».</p>
          <p>Volete liberarvi dal giogo dell'oppressione? Non ci riuscirete combattendo: perdereste. Ci riuscirete reagendo <strong>in modo opposto</strong> a come l'altro si aspetta.</p>
          <p>C'è anche un aspetto di saggezza: chi provoca spesso <strong>vuole</strong> una reazione violenta, per sentirsi giustificato nel disprezzare e maltrattare. Rispondere con rabbia significa cadere nella trappola e dargli ragione. È come una partita a scacchi.</p>
          <div class="keypoint">
            <strong>Non si tratta di fingere.</strong> Gesù non chiede una gentilezza falsa o calcolata: chiede di perdonare e amare davvero. Ma insieme chiede intelligenza: «Siate dunque prudenti come i serpenti e semplici come le colombe» (Mt 10,16).
          </div>
          <p>Lo stesso insegnamento torna in san Paolo: «Se il tuo nemico ha fame, dagli da mangiare… Non lasciarti vincere dal male, ma vinci il male con il bene» (Rm 12,20-21), e in san Pietro: «Non rendete male per male, né ingiuria per ingiuria, ma rispondete augurando il bene» (1 Pt 3,9).</p>
        `
      },
      {
        id: "storia",
        title: "La storia lo conferma",
        subtitle: "Come i cristiani conquistarono Roma",
        html: `
          <p>Nel dialogo, il giovane chiede: «È vero che l'Impero romano diventò cristiano senza violenza?». Risposta: <strong>sì, è un fatto storico</strong>. Per circa trecento anni i cristiani furono perseguitati, imprigionati, uccisi — eppure conquistarono l'Impero con il loro amore per Gesù e la loro disponibilità a morire per Lui.</p>
          <p>Le fonti antiche raccontano che molti pagani si convertirono proprio <strong>guardando come morivano i cristiani</strong>: dati in pasto alle belve o crocifissi, li vedevano pieni di coraggio e di gioia, mentre lodavano Dio. Gli spettatori restavano sconvolti: «Che cos'ha quest'uomo? Sta per essere divorato da un leone e glorifica Gesù!».</p>
          <div class="keypoint">
            <strong>Il seme dei martiri.</strong> È ciò che Tertulliano (II-III secolo) riassume con la celebre frase: «Il sangue dei martiri è seme di nuovi cristiani». La «strategia» di Mt 5 non è un'idea astratta: ha cambiato la storia.
          </div>
        `
      },
      {
        id: "amore-cristo",
        title: "«L'amore di Cristo ci spinge»",
        subtitle: "La sorgente di questa forza",
        html: `
          <p>Perché un cristiano dovrebbe riuscire ad amare così? Perché <strong>prima è stato conquistato lui</strong>. «Ama i tuoi nemici come Lui ha conquistato me con il suo amore», dice Shamoun, commosso: è la sua compassione che lo rende umile e gli fa desiderare di vivere e morire per Lui.</p>
          <blockquote class="teaching-quote">«L'amore del Cristo infatti ci possiede» (2 Cor 5,14).</blockquote>
          <p>Paolo non dice: «La potenza tirannica di Cristo mi costringe», ma il suo <strong>amore</strong>. Come si può resistere a Qualcuno che ci ama così tanto? E per questo la preghiera: «Spirito Santo, senza di te non ce la faccio: riempimi, perché voglio amare Gesù come merita».</p>
          <p>Il giovane racconta che lui e un amico volevano distruggere il cristianesimo «in ogni modo possibile», ma non ci sono riusciti: l'amore di Gesù, vivo e risorto, li ha vinti.</p>
        `
      },
      {
        id: "guancia-destra",
        title: "Perché proprio la guancia destra?",
        subtitle: "Lo schiaffo col dorso della mano",
        html: `
          <p>Ecco l'intuizione più sorprendente del video. Gesù dice: «se uno ti dà uno schiaffo sulla guancia <strong>destra</strong>». La maggior parte delle persone è destrorsa. Se ti sto di fronte e ti colpisco con la mano destra aperta, ti colpisco sulla guancia <em>sinistra</em>. Come si colpisce la destra? <strong>Con il dorso della mano</strong>.</p>
          <p>Nel mondo antico lo schiaffo col dorso era <strong>l'insulto peggiore</strong>: si dava così a un inferiore, a uno schiavo, a chi non era considerato nemmeno degno di essere colpito come un pari. Era un gesto per sminuire, per «abbassare» l'altro.</p>
          <p>Ora: se porgo anche la guancia <strong>sinistra</strong>, l'altro non può più colpirmi col dorso. Per colpirmi dovrà usare il palmo, o il pugno — cioè trattarmi <strong>da pari</strong>, guardandomi negli occhi.</p>
          <div class="keypoint">
            <strong>Simbolismo.</strong> Il rovescio abbassa la testa di chi lo riceve; porgere l'altra guancia la <em>rialza</em>. Senza rendere insulto per insulto, il discepolo costringe l'oppressore a riconoscerlo come essere umano uguale a lui. Non è passività: è un'azione con cui chi è umiliato <strong>riprende in mano la situazione</strong>.
          </div>
          <div class="keypoint">
            <strong>Fonte dell'interpretazione.</strong> Shamoun attribuisce questa lettura a uno studioso del Nuovo Testamento (pronunciato «N.T. Wright»), pur precisando di non condividerne tutte le posizioni. Questa interpretazione è stata resa celebre soprattutto dal biblista Walter Wink; è una lettura storica autorevole ma discussa, non un insegnamento definito della Chiesa.
          </div>
        `
      },
      {
        id: "non-passivita",
        title: "Non è passività: Gesù si difende",
        subtitle: "La prova del Vangelo di Giovanni",
        html: `
          <p>Che Gesù non intendesse le sue parole in senso letterale, lo dimostra il suo stesso comportamento. Quando fu schiaffeggiato davanti al sommo sacerdote, <strong>non porse l'altra guancia</strong>:</p>
          <blockquote class="teaching-quote">«Una delle guardie presenti diede uno schiaffo a Gesù, dicendo: "Così rispondi al sommo sacerdote?". Gli rispose Gesù: "Se ho parlato male, dimostrami dov'è il male. Ma se ho parlato bene, perché mi percuoti?"» (Gv 18,22-23).</blockquote>
          <p>Gesù difende la verità e la propria dignità, con calma e senza violenza. Dunque Mt 5 <strong>non significa «non difenderti mai»</strong>: significa non diventare il prepotente, non rispondere all'offesa con la vendetta.</p>
          <div class="keypoint">
            <strong>Bullo o mite?</strong> Il giovane confida: «Ho sempre visto che le persone gentili finivano più oppresse; io sono sempre rimasto in silenzio quando venivo preso di mira». Risposta di Shamoun: hai il <strong>diritto di difenderti</strong>. Se qualcuno entra in casa tua o vuole fare del male ai tuoi figli, hai il diritto di proteggere la tua vita e la loro. La differenza è tra essere <em>il prepotente</em> che opprime gli altri e essere una persona gentile e compassionevole che, quando serve, sa fermare chi fa il prepotente — e a volte proprio così se lo fa amico.
          </div>
          <div class="keypoint">
            <strong>Cosa insegna la Chiesa.</strong> Il Catechismo afferma che la <strong>legittima difesa</strong> delle persone è lecita (CCC 2263-2265): l'amore verso se stessi resta un principio fondamentale, e per chi ha la responsabilità della vita altrui difendere gli altri può essere anche un dovere grave. Ciò si accorda con l'insegnamento di Mt 5: rinunciare alla <em>vendetta</em>, non alla <em>giustizia</em> né alla protezione dei deboli.
          </div>
        `
      },
      {
        id: "sintesi",
        title: "Genio strategico, non debolezza",
        subtitle: "Sintesi dell'insegnamento",
        html: `
          <p>Il titolo del video pone una domanda: «porgere l'altra guancia» è genio strategico o debolezza passiva? La risposta è chiara: è un insegnamento <strong>molto più profondo</strong> di quanto sembri.</p>
          <ul>
            <li><strong>Non rendere male per male</strong>: la vendetta alimenta solo l'odio e dà ragione a chi ti disprezza.</li>
            <li><strong>Spiazza l'oppressore</strong>: rispondi in un modo che non si aspetta — il secondo miglio, il mantello in più.</li>
            <li><strong>Riprendi la tua dignità</strong>: l'altra guancia costringe l'altro a guardarti come un pari.</li>
            <li><strong>Vinci con l'amore</strong>: è così che i primi cristiani hanno conquistato Roma.</li>
            <li><strong>Non sei un passivo</strong>: come Gesù davanti alla guardia, puoi difendere la verità, te stesso e chi ti è affidato.</li>
          </ul>
          <blockquote class="teaching-quote">«Amate i vostri nemici e pregate per quelli che vi perseguitano, affinché siate figli del Padre vostro che è nei cieli» (Mt 5,44-45).</blockquote>
          <div class="keypoint">
            <strong>Per la preghiera.</strong> Pensa a una persona che ti ha offeso: qual è il «secondo miglio» che potresti fare per lei? E dove, invece, sei chiamato a dire con calma, come Gesù: «perché mi percuoti?».
          </div>
        `
      }
    ]
  }
];

function renderVideoStudi(containerId) {
  const panel = document.getElementById(containerId || 'video');
  if (!panel || typeof VIDEO_STUDI === 'undefined') return;
  let html = '';

  html += '<div class="study-hero"><h2>Dai video</h2>'
    + '<p class="study-meta">Insegnamenti tratti da video, tradotti e rielaborati</p>'
    + '<p class="study-tagline">Ogni scheda raccoglie il contenuto di un video, organizzato a tappe, con note di approfondimento e i versetti citati, che puoi aprire con un clic.</p></div>';

  if (VIDEO_STUDI.length > 1) {
    html += '<nav class="teaching-subnav">';
    VIDEO_STUDI.forEach(v => { html += `<button type="button" data-target="vid-${v.id}">▶ ${v.titolo}</button>`; });
    html += '</nav>';
  }

  VIDEO_STUDI.forEach(v => {
    html += `<div id="vid-${v.id}" class="video-studio">`;
    html += `<div class="study-hero"><h2>${v.titolo}</h2>`
      + `<p class="study-meta">${v.sottotitolo} · ${v.autore}</p>`
      + `<p class="study-tagline">${v.tagline}</p></div>`;

    html += '<div class="cov-meta study-facts">';
    v.facts.forEach(f => { html += `<div><span class="cov-k">${f.k}</span><span class="cov-v">${f.v}</span></div>`; });
    html += `<div><span class="cov-k">Video</span><span class="cov-v"><a href="${v.url}" target="_blank" rel="noopener">${v.titoloOriginale}</a> · ${v.canale} · ${v.durata} · ${v.lingua}</span></div>`;
    html += '</div>';

    html += '<nav class="teaching-subnav">';
    v.sezioni.forEach((s, i) => { html += `<button type="button" data-target="vid-${v.id}-${s.id}">${i + 1}. ${s.title}</button>`; });
    html += '</nav>';

    v.sezioni.forEach((s, i) => {
      html += `<section class="teaching-section" id="vid-${v.id}-${s.id}">`
        + `<div class="study-step">Tappa ${i + 1} di ${v.sezioni.length}</div>`
        + `<h3>${s.title}</h3>`
        + (s.subtitle ? `<p class="section-sub">${s.subtitle}</p>` : '')
        + `<div class="teaching-body">${s.html}</div></section>`;
    });
    html += '</div>';
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
