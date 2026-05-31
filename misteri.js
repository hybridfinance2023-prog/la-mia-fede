// =============================================================
//  MISTERI E ASPETTI CONTROVERSI
//  Satana, Lucifero, Baal, i demoni, il male, l'oltretomba…
//  Trattati con sobrietà e riferimenti biblici, distinguendo
//  dato rivelato, tradizione ed equivoci diffusi.
//  Autosufficiente (stile .ms-*). Render: renderMisteri('misteri').
// =============================================================

const MISTERI = [
  {
    titolo: "Satana — «l'accusatore»",
    tag: "Il nemico",
    intro: "In ebraico ha-satan significa «l'avversario, l'accusatore»: all'inizio è quasi un ruolo (il «pubblico ministero» della corte celeste), come nel libro di Giobbe e in Zaccaria 3, dove accusa l'uomo davanti a Dio. Nel corso della rivelazione la figura si precisa fino a diventare, nel Nuovo Testamento, il «diavolo» (dal greco diábolos, «colui che divide/calunnia»): una creatura personale, spirituale e decaduta, che si oppone a Dio e tenta l'uomo.",
    punti: [
      "Non è un «anti-dio» pari a Dio: è una creatura, potente ma limitata e già vinta da Cristo.",
      "Agisce con la menzogna e l'accusa: «è menzognero e padre della menzogna» (Gv 8,44).",
      "La sua sconfitta è certa: «Ho visto Satana cadere dal cielo come folgore» (Lc 10,18)."
    ],
    versetti: [
      { r: "Gb 1,6-12", t: "Il satàn accusa Giobbe e chiede di metterlo alla prova." },
      { r: "1 Pt 5,8", t: "«Il diavolo, come leone ruggente, va in giro cercando chi divorare»." },
      { r: "Ap 12,9", t: "«Il grande drago, il serpente antico, colui che chiamiamo diavolo e Satana»." }
    ],
    nota: "Equivoco da evitare: il dualismo. Bene e male NON sono due principi eterni alla pari. Dio solo è eterno; il male è opposizione di creature libere, destinata a essere vinta."
  },
  {
    titolo: "Lucifero — il grande equivoco",
    tag: "Stella del mattino",
    intro: "«Lucifero» (latino: «portatore di luce») non è un nome proprio nella Bibbia ebraica. Nasce dalla traduzione latina (Vulgata) di Isaia 14,12, dove il profeta canta la caduta del re di Babilonia chiamandolo ironicamente Helel ben-Shachar, «astro del mattino, figlio dell'aurora» (il pianeta Venere). Era un oracolo contro un tiranno superbo, non contro il diavolo.",
    punti: [
      "Il testo di Is 14 (e parallelamente Ez 28 sul re di Tiro) parla di re umani orgogliosi che vogliono «salire al cielo» e farsi simili a Dio.",
      "I Padri della Chiesa vi lessero, in trasparenza, anche la caduta dell'angelo per superbia: così «Lucifero» divenne popolarmente un nome di Satana.",
      "Curiosità: nel Nuovo Testamento «astro del mattino» è invece un titolo di Cristo (Ap 22,16)!"
    ],
    versetti: [
      { r: "Is 14,12", t: "«Come mai sei caduto dal cielo, astro del mattino, figlio dell'aurora?»" },
      { r: "Ez 28,17", t: "«Il tuo cuore si era inorgoglito per la tua bellezza»." },
      { r: "Lc 10,18", t: "«Vedevo Satana cadere dal cielo come la folgore»." }
    ],
    nota: "Da ricordare: il peccato all'origine della caduta — degli angeli come di Adamo — è sempre lo stesso, la superbia: voler essere come Dio senza Dio."
  },
  {
    titolo: "Il serpente antico",
    tag: "Genesi 3 → Apocalisse",
    intro: "Nel giardino di Eden il tentatore prende la forma del serpente, l'animale «più astuto» (Gen 3,1), che insinua il dubbio su Dio: «È vero che Dio ha detto…?». La Bibbia non spiega subito chi sia; sarà l'Apocalisse a fare il collegamento esplicito tra il serpente delle origini e il diavolo.",
    punti: [
      "La tentazione lavora sul sospetto verso Dio e sulla promessa «sarete come Dio» (Gen 3,5).",
      "Subito dopo la caduta risuona la prima promessa di salvezza (il «protovangelo», Gen 3,15): la discendenza della donna schiaccerà il capo del serpente.",
      "L'Apocalisse identifica: «il serpente antico, il diavolo e Satana» (Ap 12,9; 20,2)."
    ],
    versetti: [
      { r: "Gen 3,1", t: "«Il serpente era il più astuto di tutti gli animali»." },
      { r: "Gen 3,15", t: "«Porrò inimicizia… essa ti schiaccerà il capo e tu le insidierai il calcagno»." },
      { r: "Ap 20,2", t: "«Afferrò il drago, il serpente antico, che è il diavolo e Satana»." }
    ],
    nota: "Il «protovangelo» (Gen 3,15) è letto dalla tradizione come prima profezia di Cristo (la discendenza) e di Maria (la donna): il male è reale, ma fin dall'inizio è annunciata la sua sconfitta."
  },
  {
    titolo: "Baal e gli dèi di Canaan",
    tag: "Il falso dio rivale",
    intro: "Baal («signore/padrone») era il dio cananeo della tempesta e della fertilità, il grande rivale del Signore nella storia di Israele. Il suo culto prometteva pioggia e raccolti tramite riti, talvolta orgiastici o crudeli. L'Antico Testamento è in gran parte la lotta perché Israele non «zoppichi tra due opinioni» tra il Signore e Baal.",
    punti: [
      "La sfida del Carmelo: Elia smaschera l'impotenza di Baal; il fuoco di Dio scende sull'altare (1 Re 18).",
      "Baal-Peor: a Sittim il popolo cade nell'idolatria e nell'immoralità, fermato dallo zelo di Fineas (Nm 25).",
      "Da Baal-Zebùb («signore delle mosche», 2 Re 1) deriva «Beelzebùl», nome con cui nel Vangelo si indica il principe dei demoni (Mt 12,24)."
    ],
    versetti: [
      { r: "1 Re 18,21", t: "«Fino a quando zoppicherete con i due piedi? Se il Signore è Dio, seguitelo!»" },
      { r: "Ger 19,5", t: "Condanna dei sacrifici a Baal: «cose che non avevo mai comandato»." },
      { r: "Mt 12,27", t: "Gesù risponde all'accusa di scacciare i demoni «per mezzo di Beelzebùl»." }
    ],
    nota: "Gli idoli biblici (Baal, Astarte/Asherah, Molok, Dagon…) rappresentano sempre la stessa tentazione: mettere qualcosa — potere, sesso, denaro, sicurezza — al posto di Dio. Per questo Paolo chiama l'avidità «idolatria» (Col 3,5)."
  },
  {
    titolo: "Molok e i sacrifici proibiti",
    tag: "L'orrore dell'idolatria",
    intro: "Molok era una divinità a cui alcuni popoli — e talvolta Israele nei momenti più bui — sacrificavano i bambini «facendoli passare per il fuoco», nella valle della Geenna presso Gerusalemme. La Bibbia lo condanna con orrore assoluto: è l'estremo a cui può arrivare l'idolatria quando l'uomo crede di doversi «comprare» il favore di un dio.",
    punti: [
      "Dio lo proibisce nel modo più severo (Lv 18,21; 20,2-5).",
      "La valle dei sacrifici (Hinnom → Geenna) diventerà l'immagine stessa dell'inferno.",
      "Contrasto luminoso: il «sacrificio di Isacco» (Gen 22) si conclude con Dio che FERMA la mano di Abramo — Dio non vuole il sangue dei figli."
    ],
    versetti: [
      { r: "Lv 18,21", t: "«Non concederai alcuno dei tuoi figli per farlo passare a Molok»." },
      { r: "Ger 7,31", t: "«Cosa che io non avevo comandato e che non mi era mai venuta in mente»." }
    ],
    nota: "Il vero Dio non chiede sacrifici umani: è Lui, in Cristo, a dare la vita per l'uomo. Il sangue scorre dalla parte di Dio verso di noi, non viceversa."
  },
  {
    titolo: "I demoni e gli esorcismi",
    tag: "Il combattimento",
    intro: "Il Nuovo Testamento presenta spiriti maligni che opprimono le persone; Gesù li scaccia con autorità, come segno che il Regno di Dio è arrivato e libera l'uomo dal potere del male. Non è folklore: è il «più forte» (Cristo) che entra nella casa dell'«uomo forte» (il maligno) e lo lega (Mc 3,27).",
    punti: [
      "L'indemoniato di Gerasa: la «Legione» è scacciata; l'uomo torna «sano di mente» (Mc 5).",
      "La liberazione dal male è opera del «dito di Dio»: «allora è giunto a voi il regno di Dio» (Lc 11,20).",
      "Gesù dà ai discepoli autorità sugli spiriti, ma avverte: rallegratevi piuttosto perché i vostri nomi sono scritti nei cieli (Lc 10,20)."
    ],
    versetti: [
      { r: "Mc 1,27", t: "«Comanda persino agli spiriti impuri e gli obbediscono!»" },
      { r: "Lc 11,20", t: "«Se io scaccio i demòni con il dito di Dio, allora è giunto a voi il regno di Dio»." },
      { r: "Ef 6,12", t: "«La nostra battaglia non è contro la carne e il sangue, ma contro… gli spiriti del male»." }
    ],
    nota: "La Chiesa è prudente: distingue tra male morale, disturbi psichici e fenomeni straordinari, e affida l'esorcismo solo a ministri autorizzati. L'arma ordinaria del cristiano resta la fede, la preghiera, i sacramenti."
  },
  {
    titolo: "Sheol, Ade, Geenna: i nomi dell'oltretomba",
    tag: "Chiarire le parole",
    intro: "Spesso confusi sotto la parola «inferno», nella Bibbia indicano realtà diverse. Distinguerli aiuta a capire.",
    punti: [
      "Sheol (ebraico) / Ade (greco): il «regno dei morti», il soggiorno comune dei defunti nell'Antico Testamento, ombroso e silenzioso — non ancora l'inferno della dannazione.",
      "Geenna: dalla valle di Hinnom presso Gerusalemme (luogo dei sacrifici a Molok, poi immondezzaio bruciante); Gesù la usa come immagine della perdizione eterna.",
      "Tàrtaro (2 Pt 2,4) e Abisso (Ap): luoghi di custodia degli angeli ribelli.",
      "Il «discendere agli inferi» del Credo: Cristo, morto, raggiunge i giusti dell'AT per portarli alla salvezza."
    ],
    versetti: [
      { r: "Mt 10,28", t: "«Temete colui che può far perire l'anima e il corpo nella Geenna»." },
      { r: "Lc 16,22-23", t: "Il ricco e Lazzaro: «negli inferi, tra i tormenti…»." }
    ],
    nota: "L'inferno, dottrinalmente, non è anzitutto un «luogo» geografico ma lo stato di chi si esclude definitivamente e liberamente dalla comunione con Dio (Catechismo 1033). Dio non vi destina nessuno."
  },
  {
    titolo: "Gli angeli caduti e Genesi 6",
    tag: "Un passo discusso",
    intro: "La tradizione parla di angeli creati buoni che, per superbia, si sono ribellati a Dio diventando demoni (Catechismo 391-395). Un testo molto dibattuto è Genesi 6,1-4: i «figli di Dio» che si uniscono alle «figlie degli uomini», generando i «Nefilìm» (giganti).",
    punti: [
      "Tre interpretazioni dei «figli di Dio»: (1) angeli ribelli; (2) la stirpe pia di Set mescolata a quella di Caino; (3) i potenti/re tirannici dell'epoca.",
      "Alcuni testi del Nuovo Testamento sembrano alludere ad angeli «che non conservarono la loro dignità» (Gd 6; 2 Pt 2,4).",
      "Il libro (non canonico) di Enoch sviluppò molto questo tema, influenzando l'immaginario, ma la Chiesa non lo considera Scrittura."
    ],
    versetti: [
      { r: "Gen 6,4", t: "«C'erano sulla terra i giganti a quei tempi… i figli di Dio si univano alle figlie degli uomini»." },
      { r: "Gd 1,6", t: "«Gli angeli che non conservarono il loro grado… Dio li tiene in catene»." }
    ],
    nota: "Su questi versetti la Chiesa lascia libertà di interpretazione: è materia oscura. Il punto fermo è che il male spirituale esiste, ma è già vinto da Cristo."
  },
  {
    titolo: "L'Anticristo e la Bestia (666)",
    tag: "Apocalisse",
    intro: "«Anticristo» compare solo nelle lettere di Giovanni, e indica chiunque nega che Gesù è il Cristo: uno spirito di menzogna già all'opera nel mondo, oltre a una figura attesa alla fine. L'Apocalisse usa l'immagine della «Bestia» e del numero 666 come simboli del potere idolatrico che si oppone a Dio e perseguita i fedeli.",
    punti: [
      "Per Giovanni «molti anticristi sono già venuti» (1 Gv 2,18): non solo un personaggio futuro, ma ogni negazione di Cristo.",
      "Il 666 è un numero simbolico (numerologia ebraica, probabile riferimento a Nerone): l'imperfezione che imita ma non raggiunge la pienezza (il 7).",
      "Il messaggio dell'Apocalisse non è terrore ma speranza: «l'Agnello vincerà» (Ap 17,14)."
    ],
    versetti: [
      { r: "1 Gv 4,3", t: "«Ogni spirito che non riconosce Gesù non è da Dio: è lo spirito dell'anticristo»." },
      { r: "Ap 13,18", t: "«Il suo numero è seicentosessantasei»." }
    ],
    nota: "Sconsigliato il «decifrare» nomi di personaggi attuali: l'Apocalisse è un libro di consolazione per i perseguitati, non un oroscopo della fine del mondo."
  },
  {
    titolo: "Leviatàn e i mostri del caos",
    tag: "Il caos domato",
    intro: "Leviatàn e Behemòt (Giobbe 40-41), il «drago» e il «mare» mostruoso, sono immagini delle forze del caos e del male che spaventano l'uomo. La Bibbia le riprende dalla cultura antica per dire una cosa sola: sono creature, e solo Dio le tiene a freno.",
    punti: [
      "In Giobbe, Dio mostra Leviatàn per dire che il caos del mondo è nelle Sue mani, non nelle nostre.",
      "Nei Salmi e in Isaia, Dio «spezza il capo» dei mostri marini: il male non è onnipotente (Sal 74,14; Is 27,1).",
      "L'Apocalisse trasforma l'immagine: alla fine «il mare non c'è più» (Ap 21,1), cioè il caos è definitivamente vinto."
    ],
    versetti: [
      { r: "Gb 41,1", t: "Dio descrive Leviatàn, che nessun uomo può domare — ma Lui sì." },
      { r: "Is 27,1", t: "«In quel giorno il Signore punirà… il Leviatàn, il serpente guizzante»." }
    ],
    nota: "Messaggio di fondo: il male e il caos esistono e fanno paura, ma non sono divinità né forze incontrollabili. C'è un solo Signore, e il caos è già sotto i suoi piedi."
  },
  {
    titolo: "Magia, divinazione e occulto",
    tag: "La linea da non superare",
    intro: "La Bibbia vieta con fermezza magia, divinazione, negromanzia, oroscopi e ogni tentativo di manipolare il sacro o di conoscere il futuro fuori da Dio. Non perché siano «innocui giochi», ma perché spostano la fiducia da Dio a poteri oscuri e illudono di controllare ciò che appartiene a Dio.",
    punti: [
      "Deuteronomio elenca e proibisce indovini, maghi, incantatori, negromanti (Dt 18,10-12).",
      "A Efeso i nuovi cristiani bruciano pubblicamente i loro libri di magia (At 19,19).",
      "Il re Saul, consultando una negromante a Endor, segna la sua rovina (1 Sam 28)."
    ],
    versetti: [
      { r: "Dt 18,10-12", t: "«Non si trovi presso di te… chi pratica la magia… chiunque fa questo è in abominio al Signore»." },
      { r: "At 19,19", t: "«Molti… portarono i loro libri e li bruciarono davanti a tutti»." }
    ],
    nota: "Il Catechismo (2115-2117) ribadisce: il futuro appartiene a Dio; l'atteggiamento giusto è la fiducia nella Provvidenza, non la ricerca di poteri occulti."
  },
  {
    titolo: "Perché Dio permette il male?",
    tag: "La grande domanda",
    intro: "È la domanda più difficile. La fede non dà una «formula» che spieghi ogni dolore, ma offre una direzione: Dio non crea il male, lo permette perché ha creato esseri liberi — e dal male sa trarre un bene più grande. La risposta ultima non è una teoria, ma un volto: la Croce.",
    punti: [
      "Il male morale nasce dalla libertà delle creature (angeli e uomini), non da Dio (Catechismo 311).",
      "Dio rispetta la libertà perché senza libertà non c'è amore.",
      "Giobbe non riceve spiegazioni, ma la presenza di Dio; e questo gli basta.",
      "In Cristo, Dio non resta fuori dal dolore: lo attraversa, lo condivide e lo vince con la risurrezione."
    ],
    versetti: [
      { r: "Gen 50,20", t: "«Voi avevate pensato del male contro di me, ma Dio l'ha mutato in bene»." },
      { r: "Rm 8,28", t: "«Tutto concorre al bene di coloro che amano Dio»." },
      { r: "Gv 16,33", t: "«Nel mondo avrete tribolazioni, ma abbiate coraggio: io ho vinto il mondo»." }
    ],
    nota: "Sant'Agostino: «Dio, essendo sommamente buono, non permetterebbe mai che esistesse il male nelle sue opere, se non fosse abbastanza potente e buono da trarre il bene dallo stesso male»."
  }
];

// --------- Render autosufficiente (stile incapsulato .ms-*) ---------
function renderMisteri(containerId) {
  const panel = document.getElementById(containerId || 'misteri');
  if (!panel) return;

  if (!document.getElementById('ms-styles')) {
    const st = document.createElement('style');
    st.id = 'ms-styles';
    st.textContent = `
      #${panel.id} .ms-intro{font-family:var(--serif,'Georgia',serif);font-style:italic;color:var(--ink-soft,#6b5f56);max-width:72ch;margin:0 0 1.6rem}
      .ms-item{background:var(--bg-elev,#fff);border:1px solid var(--line,#e6dccb);border-left:4px solid #7a2e2e;border-radius:10px;margin:.6rem 0;overflow:hidden;transition:box-shadow .15s,border-color .15s}
      .ms-item.open{box-shadow:0 6px 18px rgba(60,20,20,.12)}
      .ms-q{width:100%;display:flex;align-items:center;justify-content:space-between;gap:1rem;text-align:left;background:transparent;border:none;cursor:pointer;padding:1rem 1.2rem}
      .ms-tit{font-family:var(--serif,serif);font-size:1.3rem;color:#7a2e2e}
      .ms-tag{display:block;font-family:sans-serif;font-size:.68rem;letter-spacing:.06em;text-transform:uppercase;font-weight:700;color:var(--accent-soft,#c9a77a);margin-top:.15rem}
      .ms-icon{flex-shrink:0;width:1.8rem;height:1.8rem;border-radius:50%;background:#f3e2e2;color:#7a2e2e;display:flex;align-items:center;justify-content:center;font-size:1.3rem;transition:transform .25s}
      .ms-item.open .ms-icon{transform:rotate(45deg);background:#7a2e2e;color:#fff}
      .ms-body{max-height:0;overflow:hidden;transition:max-height .5s ease}
      .ms-item.open .ms-body{max-height:2600px}
      .ms-in{padding:0 1.2rem 1.2rem;border-top:1px solid var(--line,#e6dccb);font-family:var(--serif,serif)}
      .ms-in p{font-size:1.05rem;line-height:1.6;margin:.7rem 0}
      .ms-in ul{margin:.3rem 0;padding-left:1.2rem}
      .ms-in li{margin:.3rem 0;line-height:1.55}
      .ms-lab{font-family:sans-serif;font-size:.7rem;letter-spacing:.06em;text-transform:uppercase;font-weight:700;color:var(--accent-soft,#c9a77a);display:block;margin:.8rem 0 .2rem}
      .ms-vers{background:var(--highlight,#fff4dc);border-left:3px solid var(--accent-soft,#c9a77a);border-radius:6px;padding:.7rem 1rem;margin:.4rem 0}
      .ms-vers div{font-size:1.02rem;margin:.3rem 0}
      .ms-vers .r{font-family:sans-serif;font-size:.72rem;font-weight:700;color:var(--accent,#8b5a2b);margin-right:.4rem}
      .ms-nota{background:#f7f0e6;border:1px dashed var(--accent-soft,#c9a77a);border-radius:8px;padding:.7rem 1rem;margin-top:.7rem;font-size:1rem;line-height:1.5}
      .ms-nota b{color:#7a2e2e}
      .ms-disc{background:var(--bg-elev,#fff);border:1px solid var(--line,#e6dccb);border-radius:10px;padding:1rem 1.2rem;margin:0 0 1.4rem;font-family:var(--serif,serif);font-style:italic;color:var(--ink-soft,#6b5f56)}
    `;
    document.head.appendChild(st);
  }

  let html = '<h2>Misteri e aspetti controversi</h2>';
  html += '<p class="ms-intro">I temi più «scuri» e discussi della Scrittura — il male, Satana, Lucifero, gli idoli come Baal, i demoni, l’oltretomba — affrontati con sobrietà: che cosa dice davvero la Bibbia, quali sono gli equivoci diffusi e come la fede li legge alla luce di Cristo.</p>';
  html += '<div class="ms-disc">Nota: questi argomenti vanno trattati con prudenza e senza morbosità. Il fine non è la paura, ma capire — e ricordare che, nella fede cristiana, il male è reale ma <strong>già vinto</strong> da Cristo.</div>';

  MISTERI.forEach(m => {
    html += '<div class="ms-item">';
    html += `<button type="button" class="ms-q"><span><span class="ms-tit">${m.titolo}</span><span class="ms-tag">${m.tag}</span></span><span class="ms-icon">+</span></button>`;
    html += '<div class="ms-body"><div class="ms-in">';
    if (m.intro) html += `<p>${m.intro}</p>`;
    if (m.punti && m.punti.length) { html += '<span class="ms-lab">Punti chiave</span><ul>'; m.punti.forEach(x => html += `<li>${x}</li>`); html += '</ul>'; }
    if (m.versetti && m.versetti.length) {
      html += '<span class="ms-lab">Riferimenti biblici</span><div class="ms-vers">';
      m.versetti.forEach(v => html += `<div><span class="r">${v.r}</span>${v.t}</div>`);
      html += '</div>';
    }
    if (m.nota) html += `<div class="ms-nota"><b>Per capire:</b> ${m.nota}</div>`;
    html += '</div></div></div>';
  });

  panel.innerHTML = html;
  panel.querySelectorAll('.ms-item .ms-q').forEach(btn => {
    btn.addEventListener('click', () => btn.closest('.ms-item').classList.toggle('open'));
  });
}
