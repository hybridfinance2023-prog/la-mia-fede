// =============================================================
//  DATI — La mia fede
//  Tutto è in un unico file per semplicità. Puoi modificarlo
//  liberamente: aggiungi nomi, salmi, dogmi, collegamenti.
// =============================================================

// ---------- 1. GENEALOGIA da Adamo a Gesù ----------
const GENEALOGIA = [
  {
    title: "Da Adamo a Noè",
    ref: "Genesi 5",
    chain: [
      "Adamo", "Set", "Enos", "Kenan", "Maalalel", "Iared",
      "Enoch", "Matusalemme", "Lamech", "Noè"
    ]
  },
  {
    title: "Da Sem ad Abramo",
    ref: "Genesi 11,10-26",
    chain: [
      "Sem", "Arpacsad", "Sela", "Eber", "Peleg", "Reu",
      "Serug", "Nacor", "Terach", "Abramo"
    ]
  },
  {
    title: "Da Abramo a Davide",
    ref: "Matteo 1,2-6 · 1 Cronache 1-2",
    chain: [
      "Abramo", "Isacco", "Giacobbe", "Giuda", "Perez", "Chesron",
      "Ram", "Amminadab", "Nacson", "Salmon", "Boaz", "Obed",
      "Iesse", "Davide"
    ]
  },
  {
    title: "Da Davide all'esilio in Babilonia",
    ref: "Matteo 1,6-11",
    chain: [
      "Davide", "Salomone", "Roboamo", "Abia", "Asaf", "Giosafat",
      "Ioram", "Ozia", "Iotam", "Acaz", "Ezechia", "Manasse",
      "Amos", "Giosia", "Ieconia"
    ]
  },
  {
    title: "Dall'esilio al Cristo",
    ref: "Matteo 1,12-16",
    chain: [
      "Ieconia", "Salatiel", "Zorobabele", "Abiud", "Eliacim", "Azor",
      "Sadoc", "Achim", "Eliud", "Eleazar", "Mattan", "Giacobbe",
      "Giuseppe", "Gesù"
    ],
    highlight: ["Gesù"]
  }
];

// ---------- 2. LIBRI SAPIENZIALI ----------
const SAPIENZIALI = [
  {
    name: "Proverbi",
    period: "X-V sec. a.C.",
    author: "Salomone (attribuzione principale)",
    summary: "Raccolta di sentenze sapienziali sulla vita quotidiana: il timore di Dio è principio della sapienza. Insegna come camminare rettamente.",
    themes: [
      "Timore di Dio = inizio della sapienza",
      "Saggezza pratica: lavoro, parola, famiglia",
      "La via dei giusti vs la via degli stolti",
      "Sapienza personificata (Pr 8)"
    ]
  },
  {
    name: "Giobbe",
    period: "VI-V sec. a.C.",
    author: "Anonimo",
    summary: "Il dramma del giusto sofferente. Giobbe, innocente, perde tutto e discute con Dio sul mistero del male. Culmina nella teofania: Dio non risponde al «perché» ma si rivela.",
    themes: [
      "Sofferenza del giusto",
      "Mistero del male e silenzio di Dio",
      "Amicizia che accusa vs fede che resiste",
      "Teofania: Dio più grande delle nostre domande"
    ]
  },
  {
    name: "Salmi",
    period: "X-III sec. a.C.",
    author: "Davide e altri (150 salmi in 5 libri)",
    summary: "Il grande libro di preghiera d'Israele e della Chiesa. Lode, lamento, ringraziamento, supplica: tutta l'esperienza umana davanti a Dio.",
    themes: [
      "Lode e adorazione",
      "Lamento personale e collettivo",
      "Fiducia e abbandono",
      "Messianismo (salmi regali)"
    ]
  },
  {
    name: "Qoèlet (Ecclesiaste)",
    period: "III sec. a.C.",
    author: "«Il predicatore», tradizionalmente Salomone",
    summary: "«Vanità delle vanità». Riflessione radicale sul senso della vita: tutto passa, eppure godere dei doni di Dio è grazia.",
    themes: [
      "Vanità (hevel): tutto è soffio",
      "Limite e finitezza dell'uomo",
      "Godere dei doni semplici come grazia",
      "Tempo per ogni cosa (Qo 3)"
    ]
  },
  {
    name: "Cantico dei Cantici",
    period: "IV sec. a.C.",
    author: "Attribuito a Salomone",
    summary: "Poema d'amore tra sposo e sposa. Letto allegoricamente: amore tra Dio e Israele, tra Cristo e la Chiesa, tra Dio e l'anima.",
    themes: [
      "Amore sponsale",
      "Desiderio e ricerca reciproca",
      "Bellezza del corpo e del creato",
      "Allegoria mistica: Cristo e la Chiesa"
    ]
  },
  {
    name: "Sapienza",
    period: "I sec. a.C. (Alessandria d'Egitto)",
    author: "Anonimo ebreo ellenista",
    summary: "Deuterocanonico. La Sapienza divina che guida la storia. Annuncia già l'immortalità dell'anima e l'incontro col Verbo.",
    themes: [
      "Immortalità dell'anima",
      "Sapienza personificata, splendore di Dio",
      "Giustizia di Dio nella storia",
      "Sofferenza del giusto perseguitato (Sap 2-3)"
    ]
  },
  {
    name: "Siracide (Ecclesiastico)",
    period: "II sec. a.C.",
    author: "Gesù Ben Sira",
    summary: "Deuterocanonico. Grande manuale di saggezza ebraica: morale, famiglia, lavoro, amicizia, timore di Dio. Elogio dei padri (cap. 44-50).",
    themes: [
      "Timore del Signore come radice della sapienza",
      "Etica pratica: parola, denaro, relazioni",
      "Elogio dei padri nella fede",
      "Sapienza e Torah: un unico dono"
    ]
  }
];

// ---------- 3. SALMI PER CONCETTI ----------
const SALMI = [
  {
    concept: "Lode e adorazione",
    description: "Il cuore che esulta davanti alla grandezza di Dio, creatore e Signore.",
    psalms: [8, 19, 29, 33, 65, 66, 92, 95, 96, 97, 98, 100, 103, 104, 113, 117, 145, 146, 147, 148, 149, 150],
    connections: [
      { text: "I salmi 146-150 chiudono il Salterio con un crescendo di <strong>Hallelujah</strong>: dal singolo (146) a tutto il creato (150)." },
      { text: "Il Salmo 8 e il 104 sono gemelli sulla <strong>creazione</strong>: uno canta l'uomo nel cosmo, l'altro il cosmo abitato da Dio." }
    ]
  },
  {
    concept: "Lamento e grido dal profondo",
    description: "Quando la fede parla nel dolore. Dio ascolta anche il «perché».",
    psalms: [3, 6, 13, 22, 38, 42, 43, 51, 69, 77, 88, 102, 130, 142, 143],
    connections: [
      { text: "Il <strong>Salmo 22</strong> («Dio mio, Dio mio, perché mi hai abbandonato?») è pregato da Gesù in croce — lamento che si apre alla vittoria del giusto sofferente." },
      { text: "Il 42-43 sono <strong>un unico salmo</strong> spezzato: «L'anima mia ha sete di Dio»." },
      { text: "Il 130 («De profundis») e il 51 («Miserere») formano il cuore della preghiera penitenziale." }
    ]
  },
  {
    concept: "Fiducia e abbandono",
    description: "Il riposo dell'anima in Dio come rifugio, pastore, roccia.",
    psalms: [11, 16, 23, 27, 62, 63, 91, 121, 125, 131],
    connections: [
      { text: "Il <strong>trittico 22-23-24</strong>: la sofferenza del giusto (22) → il Pastore che conduce (23) → il Re di gloria che entra (24). Passione, morte, risurrezione." },
      { text: "I salmi 16 e 23 condividono l'immagine del <strong>calice</strong> e dell'eredità: «il Signore è mia parte di eredità»." },
      { text: "Il 131 è un salmo breve di <strong>umiltà</strong>: «come bimbo svezzato in braccio a sua madre»." }
    ]
  },
  {
    concept: "Ringraziamento",
    description: "Memoria grata di ciò che Dio ha fatto. Dall'esperienza personale all'opera storica.",
    psalms: [9, 18, 30, 32, 34, 40, 66, 92, 107, 116, 118, 138],
    connections: [
      { text: "Il <strong>Salmo 118</strong> («Questa è la pietra scartata dai costruttori») è citato da Gesù su sé stesso: chiave di lettura messianica." },
      { text: "Il 107 ha quattro scene di liberazione con il <strong>ritornello</strong>: «Nell'angoscia gridarono al Signore ed egli li salvò dalle loro angustie»." }
    ]
  },
  {
    concept: "Penitenziali",
    description: "I sette salmi della tradizione penitenziale cristiana.",
    psalms: [6, 32, 38, 51, 102, 130, 143],
    connections: [
      { text: "Tradizione liturgica (sec. VI): pregati nei tempi di conversione, specie in <strong>Quaresima</strong>." },
      { text: "Il 51 (<em>Miserere</em>) è la confessione di <strong>Davide</strong> dopo il peccato con Betsabea: modello di contrizione." }
    ]
  },
  {
    concept: "Regali e Messianici",
    description: "Canti per il re di Israele, riletti dalla Chiesa come profezia di Cristo-Re.",
    psalms: [2, 18, 20, 21, 45, 72, 89, 101, 110, 132, 144],
    connections: [
      { text: "Il <strong>Salmo 2</strong> («Tu sei mio figlio, oggi ti ho generato») è rivelato al Battesimo e alla Trasfigurazione di Gesù." },
      { text: "Il <strong>Salmo 110</strong> («Siedi alla mia destra») è il salmo più citato nel Nuovo Testamento — al cuore della fede pasquale." },
      { text: "Il 72 sul re giusto che libera il povero → ritratto del Messia e dei Magi (oro, mirra, tributo dei popoli)." }
    ]
  },
  {
    concept: "Sapienziali",
    description: "Salmi che insegnano le due vie: quella del giusto e quella del malvagio.",
    psalms: [1, 19, 37, 49, 73, 112, 119, 127, 128, 133],
    connections: [
      { text: "Il <strong>Salmo 1</strong> apre il Salterio con la scelta fondamentale: l'uomo beato vs l'empio dissipato." },
      { text: "Il <strong>Salmo 119</strong> è il più lungo (176 versetti): acrostico alfabetico sulla Torah come gioia." },
      { text: "Il 127 e il 128 formano la coppia sulla <strong>casa e la famiglia</strong>: benedizione di Dio su lavoro, figli, pace." }
    ]
  },
  {
    concept: "Storici — la memoria di Israele",
    description: "Rileggono la storia della salvezza come pedagogia divina.",
    psalms: [78, 105, 106, 135, 136],
    connections: [
      { text: "Il <strong>Salmo 136</strong> («Il Grande Hallel») ha il ritornello: «Eterna è la sua misericordia» — pregato nella Pasqua ebraica." },
      { text: "I 105 e 106 sono complementari: uno canta la fedeltà di <strong>Dio</strong>, l'altro confessa l'infedeltà del <strong>popolo</strong>." }
    ]
  },
  {
    concept: "Ascensionali — i Cantici delle Salite",
    description: "Salmi dei pellegrini che salivano a Gerusalemme per le feste.",
    psalms: [120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134],
    connections: [
      { text: "Quindici salmi (120-134) = i <strong>quindici gradini</strong> del Tempio: un gradino per salmo, nella tradizione rabbinica." },
      { text: "Il 122 («Andremo alla casa del Signore») e il 126 («Quando il Signore riportò i prigionieri di Sion») racchiudono la gioia del <strong>ritorno</strong>." }
    ]
  },
  {
    concept: "Hallel — salmi della Pasqua",
    description: "Cantati durante la cena pasquale ebraica e nelle grandi feste.",
    psalms: [113, 114, 115, 116, 117, 118],
    connections: [
      { text: "<strong>Gesù e gli apostoli</strong> pregarono questi salmi nell'Ultima Cena (Mt 26,30): l'inno finale era l'Hallel." },
      { text: "Il 114 canta l'<strong>Esodo</strong> («Quando Israele uscì dall'Egitto»): sfondo della Pasqua cristiana." }
    ]
  }
];

// ---------- 4. VERITÀ, CONCETTI, DOGMI ----------
const DOGMI = [
  {
    group: "Dio Uno e Trino",
    items: [
      {
        name: "Unicità di Dio",
        summary: "Esiste un solo Dio, Creatore del cielo e della terra, eterno, onnipotente, onnisciente.",
        scripture: "Dt 6,4; Is 45,5; 1 Cor 8,6"
      },
      {
        name: "Santissima Trinità",
        summary: "Un solo Dio in tre Persone uguali e distinte: Padre, Figlio, Spirito Santo. Mistero centrale della fede cristiana.",
        scripture: "Mt 28,19; 2 Cor 13,13; Gv 15,26"
      },
      {
        name: "Creazione dal nulla",
        summary: "Dio ha creato l'universo liberamente, dal nulla (ex nihilo), per amore. Tutto ciò che esiste partecipa al suo essere.",
        scripture: "Gen 1,1; 2 Mac 7,28; Col 1,16"
      }
    ]
  },
  {
    group: "Cristo, Verbo Incarnato",
    items: [
      {
        name: "Incarnazione",
        summary: "Il Figlio eterno di Dio ha assunto la natura umana nel grembo di Maria, vero Dio e vero uomo (unione ipostatica).",
        scripture: "Gv 1,14; Fil 2,6-7; Eb 2,14"
      },
      {
        name: "Redenzione e Croce",
        summary: "Gesù ha redento l'umanità con la sua passione, morte e risurrezione. La Croce è sacrificio d'amore che riconcilia con il Padre.",
        scripture: "Rm 5,8-10; 1 Pt 2,24; Eb 9,12"
      },
      {
        name: "Risurrezione di Cristo",
        summary: "Gesù è realmente risorto dai morti il terzo giorno. Fondamento della fede: «Se Cristo non è risorto, vana è la vostra fede»."
        , scripture: "1 Cor 15,14-20; Mt 28; Lc 24"
      },
      {
        name: "Ascensione e seconda venuta",
        summary: "Cristo è salito al cielo e siede alla destra del Padre; verrà nella gloria a giudicare i vivi e i morti.",
        scripture: "At 1,9-11; Mt 25,31-46; Ap 22,20"
      }
    ]
  },
  {
    group: "Lo Spirito Santo e la Chiesa",
    items: [
      {
        name: "Spirito Santo",
        summary: "Terza Persona della Trinità, Signore e datore di vita, che santifica la Chiesa e abita nei credenti.",
        scripture: "Gv 14,26; At 2,1-4; Rm 8,14-16"
      },
      {
        name: "Chiesa una, santa, cattolica, apostolica",
        summary: "Corpo mistico di Cristo, fondata su Pietro e gli apostoli. Le quattro note: unità, santità, universalità, apostolicità.",
        scripture: "Mt 16,18-19; Ef 4,4-6; At 2,42"
      },
      {
        name: "Successione apostolica",
        summary: "I vescovi sono successori degli apostoli. Il Papa, successore di Pietro, è principio di unità.",
        scripture: "Mt 16,18; 2 Tm 2,2"
      },
      {
        name: "Scrittura e Tradizione",
        summary: "La Rivelazione si trasmette attraverso Sacra Scrittura e Sacra Tradizione, interpretate dal Magistero della Chiesa.",
        scripture: "2 Ts 2,15; 2 Tm 3,16"
      }
    ]
  },
  {
    group: "I sette Sacramenti",
    items: [
      {
        name: "Battesimo",
        summary: "Porta della vita cristiana: cancella il peccato originale, fa rinascere in Cristo, incorpora alla Chiesa.",
        scripture: "Mt 28,19; Rm 6,3-4"
      },
      {
        name: "Confermazione (Cresima)",
        summary: "Completa il Battesimo con il dono pieno dello Spirito Santo per essere testimoni di Cristo.",
        scripture: "At 8,14-17; At 19,5-6"
      },
      {
        name: "Eucaristia",
        summary: "«Fonte e culmine» della vita cristiana. Presenza reale di Cristo sotto le specie di pane e vino (transustanziazione).",
        scripture: "Lc 22,19-20; Gv 6,51-58; 1 Cor 11,23-26"
      },
      {
        name: "Riconciliazione (Confessione)",
        summary: "Perdono dei peccati commessi dopo il Battesimo, attraverso la confessione e l'assoluzione del sacerdote.",
        scripture: "Gv 20,22-23; 1 Gv 1,9"
      },
      {
        name: "Unzione degli infermi",
        summary: "Grazia, conforto e, se Dio vuole, guarigione per i malati gravi.",
        scripture: "Gc 5,14-15; Mc 6,13"
      },
      {
        name: "Ordine sacro",
        summary: "Tre gradi: diaconato, presbiterato, episcopato. Configurazione sacramentale a Cristo Capo e Pastore.",
        scripture: "2 Tm 1,6; Eb 5,1-4"
      },
      {
        name: "Matrimonio",
        summary: "Alleanza tra uomo e donna, sacramento dell'amore tra Cristo e la Chiesa. Unità e indissolubilità.",
        scripture: "Gen 2,24; Mt 19,6; Ef 5,31-32"
      }
    ]
  },
  {
    group: "Maria, Madre di Dio",
    items: [
      {
        name: "Maria Theotokos — Madre di Dio",
        summary: "Maria è veramente Madre di Dio perché Madre del Figlio eterno fatto uomo (Concilio di Efeso, 431).",
        scripture: "Lc 1,43; Gal 4,4"
      },
      {
        name: "Immacolata Concezione",
        summary: "Maria è stata preservata immune dal peccato originale fin dal primo istante del suo concepimento (dogma 1854).",
        scripture: "Lc 1,28 — «piena di grazia»"
      },
      {
        name: "Verginità perpetua",
        summary: "Maria è sempre vergine: prima, durante e dopo il parto.",
        scripture: "Lc 1,34; tradizione apostolica"
      },
      {
        name: "Assunzione",
        summary: "Al termine della vita terrena, Maria fu assunta in cielo in anima e corpo (dogma 1950).",
        scripture: "Ap 12,1; tradizione apostolica"
      }
    ]
  },
  {
    group: "Escatologia — le realtà ultime",
    items: [
      {
        name: "Morte, giudizio particolare",
        summary: "Alla morte, ogni anima è giudicata da Cristo riguardo alla sua vita.",
        scripture: "Eb 9,27; Lc 16,22-23"
      },
      {
        name: "Paradiso",
        summary: "Visione beatifica di Dio, comunione di amore con la Trinità, i santi e gli angeli.",
        scripture: "1 Cor 13,12; Ap 21,3-4"
      },
      {
        name: "Purgatorio",
        summary: "Stato di purificazione per coloro che muoiono nell'amicizia di Dio ma non ancora pienamente purificati.",
        scripture: "2 Mac 12,45; 1 Cor 3,15"
      },
      {
        name: "Inferno",
        summary: "Stato di separazione definitiva da Dio per chi muore in peccato mortale non pentito.",
        scripture: "Mt 25,41; 2 Ts 1,9"
      },
      {
        name: "Risurrezione dei morti e giudizio universale",
        summary: "Alla fine dei tempi, tutti risorgeranno e Cristo giudicherà il mondo. Nuovi cieli e nuova terra.",
        scripture: "Gv 5,28-29; Ap 20,11-15; 2 Pt 3,13"
      }
    ]
  },
  {
    group: "L'uomo e la grazia",
    items: [
      {
        name: "Peccato originale",
        summary: "Con la caduta di Adamo la natura umana è ferita e trasmette la condizione di peccato. Cristo ne è il rimedio.",
        scripture: "Gen 3; Rm 5,12-19"
      },
      {
        name: "Grazia",
        summary: "Dono gratuito di Dio: partecipazione alla vita divina. Grazia santificante (abituale) e attuale.",
        scripture: "Ef 2,8-9; Gv 15,5"
      },
      {
        name: "Libertà e cooperazione",
        summary: "L'uomo, liberato dalla grazia, coopera liberamente alla salvezza con la fede e le opere di amore.",
        scripture: "Fil 2,12-13; Gc 2,17"
      }
    ]
  },
  {
    group: "Virtù e doni",
    items: [
      {
        name: "Virtù teologali",
        summary: "Fede, Speranza, Carità. Hanno Dio stesso come origine, motivo e oggetto.",
        scripture: "1 Cor 13,13"
      },
      {
        name: "Virtù cardinali",
        summary: "Prudenza, Giustizia, Fortezza, Temperanza. Fanno da cardine alla vita morale.",
        scripture: "Sap 8,7"
      },
      {
        name: "Doni dello Spirito Santo",
        summary: "Sapienza, Intelletto, Consiglio, Fortezza, Scienza, Pietà, Timore di Dio.",
        scripture: "Is 11,2-3"
      },
      {
        name: "Frutti dello Spirito",
        summary: "Amore, gioia, pace, pazienza, benevolenza, bontà, fedeltà, mitezza, dominio di sé.",
        scripture: "Gal 5,22-23"
      }
    ]
  }
];

// ---------- LIBRI DELLA BIBBIA ----------
// Nome italiano, identificatore API (bible-api.com), numero capitoli,
// categoria (AT/NT), deuterocanonico (true/false).
const LIBRI_BIBBIA = [
  // Antico Testamento
  { it: "Genesi", en: "genesis", ch: 50, cat: "AT" },
  { it: "Esodo", en: "exodus", ch: 40, cat: "AT" },
  { it: "Levitico", en: "leviticus", ch: 27, cat: "AT" },
  { it: "Numeri", en: "numbers", ch: 36, cat: "AT" },
  { it: "Deuteronomio", en: "deuteronomy", ch: 34, cat: "AT" },
  { it: "Giosuè", en: "joshua", ch: 24, cat: "AT" },
  { it: "Giudici", en: "judges", ch: 21, cat: "AT" },
  { it: "Rut", en: "ruth", ch: 4, cat: "AT" },
  { it: "1 Samuele", en: "1 samuel", ch: 31, cat: "AT" },
  { it: "2 Samuele", en: "2 samuel", ch: 24, cat: "AT" },
  { it: "1 Re", en: "1 kings", ch: 22, cat: "AT" },
  { it: "2 Re", en: "2 kings", ch: 25, cat: "AT" },
  { it: "1 Cronache", en: "1 chronicles", ch: 29, cat: "AT" },
  { it: "2 Cronache", en: "2 chronicles", ch: 36, cat: "AT" },
  { it: "Esdra", en: "ezra", ch: 10, cat: "AT" },
  { it: "Neemia", en: "nehemiah", ch: 13, cat: "AT" },
  { it: "Tobia", en: "tobit", ch: 14, cat: "AT", deutero: true },
  { it: "Giuditta", en: "judith", ch: 16, cat: "AT", deutero: true },
  { it: "Ester", en: "esther", ch: 10, cat: "AT" },
  { it: "1 Maccabei", en: "1 maccabees", ch: 16, cat: "AT", deutero: true },
  { it: "2 Maccabei", en: "2 maccabees", ch: 15, cat: "AT", deutero: true },
  { it: "Giobbe", en: "job", ch: 42, cat: "AT" },
  { it: "Salmi", en: "psalms", ch: 150, cat: "AT" },
  { it: "Proverbi", en: "proverbs", ch: 31, cat: "AT" },
  { it: "Qoèlet", en: "ecclesiastes", ch: 12, cat: "AT" },
  { it: "Cantico dei Cantici", en: "song of solomon", ch: 8, cat: "AT" },
  { it: "Sapienza", en: "wisdom", ch: 19, cat: "AT", deutero: true },
  { it: "Siracide", en: "sirach", ch: 51, cat: "AT", deutero: true },
  { it: "Isaia", en: "isaiah", ch: 66, cat: "AT" },
  { it: "Geremia", en: "jeremiah", ch: 52, cat: "AT" },
  { it: "Lamentazioni", en: "lamentations", ch: 5, cat: "AT" },
  { it: "Baruc", en: "baruch", ch: 6, cat: "AT", deutero: true },
  { it: "Ezechiele", en: "ezekiel", ch: 48, cat: "AT" },
  { it: "Daniele", en: "daniel", ch: 14, cat: "AT" },
  { it: "Osea", en: "hosea", ch: 14, cat: "AT" },
  { it: "Gioele", en: "joel", ch: 4, cat: "AT" },
  { it: "Amos", en: "amos", ch: 9, cat: "AT" },
  { it: "Abdia", en: "obadiah", ch: 1, cat: "AT" },
  { it: "Giona", en: "jonah", ch: 4, cat: "AT" },
  { it: "Michea", en: "micah", ch: 7, cat: "AT" },
  { it: "Naum", en: "nahum", ch: 3, cat: "AT" },
  { it: "Abacuc", en: "habakkuk", ch: 3, cat: "AT" },
  { it: "Sofonia", en: "zephaniah", ch: 3, cat: "AT" },
  { it: "Aggeo", en: "haggai", ch: 2, cat: "AT" },
  { it: "Zaccaria", en: "zechariah", ch: 14, cat: "AT" },
  { it: "Malachia", en: "malachi", ch: 4, cat: "AT" },
  // Nuovo Testamento
  { it: "Matteo", en: "matthew", ch: 28, cat: "NT" },
  { it: "Marco", en: "mark", ch: 16, cat: "NT" },
  { it: "Luca", en: "luke", ch: 24, cat: "NT" },
  { it: "Giovanni", en: "john", ch: 21, cat: "NT" },
  { it: "Atti degli Apostoli", en: "acts", ch: 28, cat: "NT" },
  { it: "Romani", en: "romans", ch: 16, cat: "NT" },
  { it: "1 Corinzi", en: "1 corinthians", ch: 16, cat: "NT" },
  { it: "2 Corinzi", en: "2 corinthians", ch: 13, cat: "NT" },
  { it: "Galati", en: "galatians", ch: 6, cat: "NT" },
  { it: "Efesini", en: "ephesians", ch: 6, cat: "NT" },
  { it: "Filippesi", en: "philippians", ch: 4, cat: "NT" },
  { it: "Colossesi", en: "colossians", ch: 4, cat: "NT" },
  { it: "1 Tessalonicesi", en: "1 thessalonians", ch: 5, cat: "NT" },
  { it: "2 Tessalonicesi", en: "2 thessalonians", ch: 3, cat: "NT" },
  { it: "1 Timoteo", en: "1 timothy", ch: 6, cat: "NT" },
  { it: "2 Timoteo", en: "2 timothy", ch: 4, cat: "NT" },
  { it: "Tito", en: "titus", ch: 3, cat: "NT" },
  { it: "Filemone", en: "philemon", ch: 1, cat: "NT" },
  { it: "Ebrei", en: "hebrews", ch: 13, cat: "NT" },
  { it: "Giacomo", en: "james", ch: 5, cat: "NT" },
  { it: "1 Pietro", en: "1 peter", ch: 5, cat: "NT" },
  { it: "2 Pietro", en: "2 peter", ch: 3, cat: "NT" },
  { it: "1 Giovanni", en: "1 john", ch: 5, cat: "NT" },
  { it: "2 Giovanni", en: "2 john", ch: 1, cat: "NT" },
  { it: "3 Giovanni", en: "3 john", ch: 1, cat: "NT" },
  { it: "Giuda", en: "jude", ch: 1, cat: "NT" },
  { it: "Apocalisse", en: "revelation", ch: 22, cat: "NT" }
];

// Traduzioni disponibili tramite bible-api.com
const TRADUZIONI = [
  { id: "web",        label: "World English Bible (EN)",  lang: "EN" },
  { id: "kjv",        label: "King James Version (EN)",   lang: "EN" },
  { id: "bbe",        label: "Bible in Basic English (EN)", lang: "EN" },
  { id: "clementine", label: "Vulgata Clementina (Latino)", lang: "LAT" }
];

// ---------- Versetti di esempio per iniziare i Preferiti ----------
const VERSETTI_SEME = [
  {
    ref: "Giovanni 3,16",
    text: "Dio ha tanto amato il mondo da dare il Figlio unigenito, perché chiunque crede in lui non muoia, ma abbia la vita eterna.",
    tags: ["amore", "salvezza"]
  },
  {
    ref: "Salmo 23,1",
    text: "Il Signore è il mio pastore: non manco di nulla.",
    tags: ["fiducia", "salmi"]
  },
  {
    ref: "Filippesi 4,13",
    text: "Tutto posso in colui che mi dà la forza.",
    tags: ["fortezza", "Paolo"]
  }
];
