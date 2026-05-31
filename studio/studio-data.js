/* ============================================================
   La mia fede — Modulo "Studio di Gesù + Esplorazione"
   Dati strutturati (standalone, caricato via <script> classico).
   Fonte contenuti: _concetti_staging.md
   NB: questo file è ISOLATO dal core della piattaforma per non
   entrare in conflitto con le modifiche in corso su app.js/data.js.
   ============================================================ */
window.STUDIO_DATA = {

  /* -------------------------------------------------------- */
  /* 1) STUDIO DI GESÙ                                         */
  /* -------------------------------------------------------- */
  studioGesu: {

    // 1A — Le 13 preghiere di Gesù (cammino cronologico)
    preghiere: [
      { n: 1, titolo: "Il battesimo", rif: "Luca 3,21",
        parola: "schízō (squarciarsi)",
        testo: "Mentre prega, il cielo si apre. Marco usa «schízō», squarciare: la stessa parola del velo del tempio alla morte (Mc 15). Il cielo si squarcia all'inizio, il velo si squarcia alla fine." },
      { n: 2, titolo: "L'abitudine", rif: "Luca 5,16",
        parola: "anachōréō (ritiro intenzionale)",
        testo: "«Si ritirava in luoghi solitari e pregava»: imperfetto = azione abituale. Non una fuga, ma un ritmo. La persona più cercata della Galilea sparisce di continuo per pregare." },
      { n: 3, titolo: "La notte sul monte", rif: "Luca 6,12",
        parola: "proseuchē (preghiera)",
        testo: "Una notte intera di preghiera prima di scegliere i Dodici. Una grande decisione preceduta da una lunga attesa — pur sapendo che uno di loro lo avrebbe tradito." },
      { n: 4, titolo: "La preghiera modello", rif: "Luca 11,1; Matteo 6,9-13",
        parola: "Kaddish (radice ebraica)",
        testo: "Il Padre Nostro riformula il Kaddish ebraico. Struttura: prima Dio (nome, regno, volontà), poi pane, perdono, tentazione. Non una formula, ma uno scheletro." },
      { n: 5, titolo: "L'esplosione di gioia", rif: "Luca 10,21",
        parola: "agalliáō (saltare di gioia)",
        testo: "Unica preghiera in cui Gesù appare felice: «esultò». Ringrazia perché il Padre ha rivelato ai piccoli, non ai sapienti. Gratitudine per un capovolgimento." },
      { n: 6, titolo: "La benedizione sui pani", rif: "Matteo 14 e paralleli",
        parola: "eulogéō / eucharistéō",
        testo: "Unica preghiera nei quattro Vangeli. Nella preghiera ebraica si benedice Dio, non il pane. Eco della manna: Dio nutre dove non c'è cibo. Lo straordinario passa per l'ordinario." },
      { n: 7, titolo: "La trasfigurazione", rif: "Luca 9,28",
        parola: "éxodos (esodo/partenza)",
        testo: "«Mentre pregava» il volto cambia. Mosè ed Elia parlano del suo «éxodos» a Gerusalemme: la morte come nuovo esodo, un'uscita cosmica." },
      { n: 8, titolo: "Preghiera per Pietro", rif: "Luca 22,31-32",
        parola: "siniázō (vagliare)",
        testo: "«Satana vi ha cercati per vagliarvi… ma io ho pregato per te, perché la tua fede non venga meno». Pregata prima del rinnegamento: non impedisce la caduta, sostiene il ritorno." },
      { n: 9, titolo: "Davanti alla tomba", rif: "Giovanni 11,41",
        parola: "preghiera come segno",
        testo: "Ringrazia prima del miracolo: «l'ho detto per la folla che mi circonda». La preghiera diventa insegnamento, rivolta a Dio ma per gli altri." },
      { n: 10, titolo: "Il chicco di grano", rif: "Giovanni 12,27-28",
        parola: "scelta ad alta voce",
        testo: "Considera e rifiuta la preghiera di fuga («salvami da quest'ora») e sceglie «Padre, glorifica il tuo nome». Una voce risponde dal cielo." },
      { n: 11, titolo: "Preghiera sacerdotale", rif: "Giovanni 17 (26 vv.)",
        parola: "la più lunga",
        testo: "Struttura come il sommo sacerdote nello Yom Kippur: per sé, per i discepoli, per i futuri credenti. v.5: preesistenza. Richiesta centrale: «siano uno»." },
      { n: 12, titolo: "Getsemani", rif: "Matteo 26 // Marco 14 // Luca 22",
        parola: "potērion (calice dell'ira)",
        testo: "«Abbà, allontana questo calice… ma non ciò che voglio io». Luca (medico) registra l'ematidrosi, sudore come sangue. Pregata tre volte: la consegna non fu istantanea." },
      { n: 13, titolo: "Le tre preghiere sulla croce", rif: "Lc 23,34; Mt 27,46; Lc 23,46",
        parola: "Salmo 22 e Salmo 31",
        testo: "«Padre, perdona loro»; «Eloì Eloì lemà sabactàni» (Sal 22,1, salmo che finisce in vittoria); «Padre, nelle tue mani consegno il mio spirito» (Sal 31,5). L'arco: dal battesimo (discesa dello Spirito) alla croce (consegna dello spirito)." }
    ],

    // 1B — Il Regno di Dio (cosa è davvero)
    regno: {
      tesi: "«Regno» (gr. basileía, ebr. malkut) non è un luogo, un territorio o il cielo dopo la morte: è la regalità/sovranità di Dio in azione, già cominciata in Gesù.",
      punti: [
        { t: "Non un luogo, ma un'azione", d: "Come «presidenza» = la funzione, non l'edificio. Mc 1,15: «il tempo è compiuto, il regno è vicino»." },
        { t: "Già arrivato", d: "«ēngiken» (perfetto attivo): si è avvicinato ed è e resta vicino. Non «arriverà presto», ma «è già qui, in azione»." },
        { t: "Non viene dal mondo", d: "Gv 18,36: «non è ek (da) questo mondo» — altra fonte e logica, ma opera qui. Non «non è in questo mondo»." },
        { t: "La senape", d: "Mt 13: nella cultura giudaica era un'erbaccia infestante, non il cedro maestoso. Il regno cresce scomodo, invasivo, dove nessuno l'ha autorizzato." },
        { t: "Il lievito", d: "Mt 13,33: simbolo di corruzione (Pasqua = azzimo). Penetra e trasforma dall'interno, invisibile." },
        { t: "In mezzo a voi", d: "Lc 17,21: «entòs hymōn» = in mezzo a voi (o dentro di voi). Non spettacolo cosmico." },
        { t: "Le vie d'ingresso", d: "Nascere dall'alto (ánōthen, Gv 3); diventare come bambini (dipendenza/resa, Mt 18,3); tesoro e perla (vale tutto); poveri in spirito (Mt 5,3); cammello e cruna (impossibile agli uomini, possibile a Dio)." },
        { t: "metánoia", d: "«Convertitevi» = meta+nous, cambiare mente/modo di pensare, non solo sentirsi in colpa." },
        { t: "Già e non ancora", d: "Il regno è arrivato (segni) e attende la consumazione (Mt 25; Ap 11,15). Grano e zizzania crescono insieme fino alla mietitura. Fine: «Dio tutto in tutti» (1 Cor 15,28)." }
      ]
    },

    // 1C — Le parole di Gesù (word-study)
    paroleGesu: [
      {
        titolo: "La via stretta (Matteo 7,13-14)",
        sottotitolo: "Sei parole greche in un chiasmo che la traduzione perde",
        carte: [
          { it: "porta", gr: "pýlē", spieg: "Non la porta di casa (thýra, usata da Luca), ma il grande portone della città: luogo pubblico del giudizio. Si entra a testa bassa, uno alla volta." },
          { it: "stretta", gr: "stenós", spieg: "Non «piccola», ma compressa da una pressione laterale (come una gola tra due rocce). Appare solo 3 volte nel NT." },
          { it: "angusta", gr: "tethlimménē", spieg: "Non un aggettivo: verbo al passato passivo. «Essendo stata compressa». Stessa radice di thlîpsis = tribolazione (Rm 5,3; 2 Cor 4,17). La via è stata resa stretta dall'afflizione." },
          { it: "spaziosa", gr: "eurýchōros", spieg: "Una piazza pubblica (agorà). Spazio della folla a proprio agio: inerzia sociale, via della minor resistenza. «Scarsità di compagnia», non di spazio." },
          { it: "perdizione", gr: "apṓleia", spieg: "Non «inferno» tecnico: da apóllymi = perdere/sprecare. Stessa famiglia delle parabole della pecora/moneta/figlio perduti (Lc 15)." },
          { it: "trovano", gr: "heurískō", spieg: "«Pochi la trovano» richiama «cercate e troverete» (Mt 7,7). Pochi trovano perché pochi cercano: cercare = uscire dal flusso della folla." }
        ]
      },
      {
        titolo: "Smetti di portare tutto da solo (Matteo 6,33)",
        sottotitolo: "«Cercate prima il regno» = diagnosi + riorientamento dell'identità",
        carte: [
          { it: "ansia", gr: "merimnáō", spieg: "Da merízō = dividere in pezzi. Mente divisa/frammentata: in tre posti e in nessuno per intero. Ricorre 6 volte in Mt 6,25-34." },
          { it: "cercate", gr: "zēteō", spieg: "Imperativo presente = azione continua, stile di vita («continuate a cercare»). I pagani «inseguono» (epizēteō)." },
          { it: "prima", gr: "prōton", spieg: "Non cronologico ma gerarchico: mettere il regno in cima alla piramide e organizzare il resto sotto." },
          { it: "giustizia", gr: "dikaiosynē / tzedaka", spieg: "Non categoria da tribunale, ma modo giusto di vivere dentro l'alleanza: pagare il salariato lo stesso giorno (Dt 24), aiutare il povero." },
          { it: "aggiungere", gr: "prostíthēmi", spieg: "«Sarà depositato sopra» ciò che già ricevi (come Salomone: chiese sapienza, Dio aggiunse il resto). Il «tutto» = il necessario, non il desiderato." },
          { it: "padre", gr: "pater", spieg: "Nel I sec. = il provveditore che si assume la responsabilità della casa. «Tu sei il figlio, non il padre: smetti di portare il bilancio dell'universo»." }
        ]
      }
    ],

    // 1D — La parabola dei Talenti
    talenti: {
      tesi: "«Talento» (gr. talanton) non significa «dono/attitudine» (senso nato solo nel XIII sec.) ma denaro pesante affidato in amministrazione. La parabola non dice «usa i tuoi talenti» ma «che fai con ciò che ti è stato affidato».",
      punti: [
        { t: "Collocazione", d: "Mt 25,14-30, dentro il Discorso del Monte degli Ulivi. Trittico: 10 vergini (aspettare) → talenti (cosa fare nell'attesa) → pecore/capri (giudizio). Tema: il ritardo del padrone." },
        { t: "talanton", d: "~30-36 kg d'argento, poi ~6000 denari = ~20 anni di salario. Anche 1 solo talento = fiducia enorme, non «poco»." },
        { t: "Il terzo servo non è pigro", d: "Sotterrare era l'opzione giuridicamente più sicura (Mishnah: depositario esente da responsabilità). Ma il padrone aveva chiesto di amministrare (attivo), non custodire (passivo)." },
        { t: "La paura che paralizza", d: "phobētheís (da phobéō → fobia). Vede il padrone come «duro» (sklērós, radice di «sclerosi») e si blocca." },
        { t: "Almeno in banca", d: "trapezítai (cambiavalute): l'opzione a rischio zero che pure avrebbe reso. Il punto è retorico." },
        { t: "Non prosperity gospel", d: "«A chi ha sarà dato» (Mt 25,29): parla di capacità che funziona come un muscolo (si allena/cresce, non si usa/si atrofizza)." },
        { t: "Il vero avvertimento", d: "Condannato non per furto o tradimento, ma per inazione/omissione per paura. Aggancio: Israele «amministratore dell'alleanza» che sotterra invece di moltiplicare." }
      ]
    }
  },

  /* -------------------------------------------------------- */
  /* 2) ESPLORA — Mappa biblica + Termini originali           */
  /* -------------------------------------------------------- */
  esplora: {

    // 2A — Luoghi biblici (mappa schematica regionale)
    // box proiezione: lon 9..49, lat 23..43  ->  x,y in %
    luoghi: [
      { id: "ur", nome: "Ur dei Caldei", epoca: "Patriarchi", lat: 30.96, lon: 46.10, tag: "Origine · ~XIX sec. a.C.",
        desc: "Antica e ricca città-stato sumera, nel sud della Mesopotamia (l'odierno Iraq), famosa per la sua ziggurat e per il culto del dio-luna. È il punto di partenza di tutta la storia della salvezza: da qui Dio chiama Abramo a lasciare la sua terra, la sua parentela e gli dèi dei padri (Gen 11,31; Gs 24,2). La promessa comincia con un uomo anziano e senza figli che, per fede, si mette in cammino verso una terra che ancora non conosce." },
      { id: "carran", nome: "Carran", epoca: "Patriarchi", lat: 36.86, lon: 39.03, tag: "Chiamata · Gen 12",
        desc: "Importante crocevia carovaniero dell'alta Mesopotamia, dove la famiglia di Terach si ferma lungo il viaggio da Ur. Qui Abramo, a 75 anni, riceve la chiamata definitiva: «Vattene dalla tua terra… verso la terra che io ti mostrerò; farò di te una grande nazione… e in te saranno benedette tutte le famiglie della terra» (Gen 12,1-3). È l'inizio dell'alleanza con Abramo, il primo grande «sì» della fede." },
      { id: "canaan", nome: "Terra promessa (Canaan)", epoca: "Patriarchi", lat: 31.90, lon: 35.20, tag: "Alleanza", lp: "below",
        desc: "La terra «dove scorre latte e miele» promessa ad Abramo e alla sua discendenza (Gen 12,7). Sarà conquistata sotto Giosuè dopo l'Esodo e divisa tra le dodici tribù. Più che un semplice territorio, rappresenta il dono di Dio e il luogo dell'incontro con Lui: il suo possesso è legato alla fedeltà all'alleanza, la sua perdita (l'esilio) al tradimento di essa." },
      { id: "egitto", nome: "Egitto", epoca: "Esodo e Conquista", lat: 30.05, lon: 31.23, tag: "Schiavitù → Esodo",
        desc: "Terra del grande fiume Nilo, rifugio nella carestia (Giuseppe, Gen 37-50) e poi luogo della schiavitù del popolo ebraico per 400 anni. Da qui Dio libera Israele con Mosè attraverso le dieci piaghe e il passaggio del Mar Rosso: l'Esodo diventa il modello di ogni liberazione nella Bibbia, immagine della Pasqua e del Battesimo. Anche la Sacra Famiglia vi si rifugerà dalla persecuzione di Erode (Mt 2,13-15)." },
      { id: "sinai", nome: "Monte Sinai (Horeb)", epoca: "Esodo e Conquista", lat: 28.54, lon: 33.97, tag: "Legge · Es 19-24",
        desc: "La «montagna di Dio» nel deserto, dove Mosè aveva già visto il roveto ardente (Es 3). Qui, tre mesi dopo l'uscita dall'Egitto, Dio scende nel fuoco e nel tuono e stringe l'alleanza con il popolo: dona i Dieci Comandamenti e la Legge, e Mosè asperge il popolo con «il sangue dell'alleanza» (Es 24,8). È il cuore dell'Antico Testamento: Israele diventa «un regno di sacerdoti e una nazione santa»." },
      { id: "sittim", nome: "Sittim", epoca: "Esodo e Conquista", lat: 31.80, lon: 35.60, tag: "Fineas · Nm 25", lp: "above",
        desc: "Ultimo accampamento di Israele nelle steppe di Moab, prima di entrare nella Terra promessa attraversando il Giordano. Qui il popolo si lascia sedurre dal culto idolatrico di Baal-Peor e una piaga lo colpisce; lo zelo del sacerdote Fineas ferma il flagello e Dio gli concede «un'alleanza di pace, un sacerdozio perenne» (Nm 25,12-13). Da Sittim parte poi Giosuè per la conquista." },
      { id: "gerico", nome: "Gerico", epoca: "Esodo e Conquista", lat: 31.87, lon: 35.44, tag: "Conquista · Gs 6", lp: "below",
        desc: "Una delle città più antiche del mondo, oasi nella valle del Giordano. Prima tappa della conquista della Terra promessa: le sue mura crollano dopo che il popolo gira attorno alla città per sette giorni con l'arca (Gs 6). Qui Gesù guarirà il cieco Bartimeo e incontrerà Zaccheo (Lc 19), e ne farà lo sfondo della parabola del buon samaritano." },
      { id: "gerusalemme", nome: "Gerusalemme", epoca: "Monarchia", lat: 31.78, lon: 35.23, tag: "Il Centro", lp: "left",
        desc: "La città santa, conquistata da Davide e resa capitale del regno (~1000 a.C.); qui Salomone costruisce il Tempio, dimora del Nome di Dio. È il centro spirituale di tutta la Bibbia: distrutta dai Babilonesi (586 a.C.) e ricostruita, vi si compiono la passione, morte e risurrezione di Gesù e, a Pentecoste, la nascita della Chiesa. L'Apocalisse la trasfigura nella «Gerusalemme nuova» che scende dal cielo (Ap 21)." },
      { id: "betlemme", nome: "Betlemme", epoca: "Vita di Gesù", lat: 31.70, lon: 35.20, tag: "Nascita", lp: "below",
        desc: "Piccolo villaggio a sud di Gerusalemme, «città di Davide», dove il giovane pastore fu unto re. Il profeta Michea annuncia: «Da te uscirà colui che deve governare Israele, le cui origini risalgono ai tempi antichi» (Mi 5,1). Lì nasce Gesù, deposto in una mangiatoia (Lc 2): il Re-Messia viene alla luce non in un palazzo, ma nella povertà del paese di Davide." },
      { id: "nazaret", nome: "Nazaret", epoca: "Vita di Gesù", lat: 32.70, lon: 35.30, tag: "Annunciazione",
        desc: "Villaggio insignificante della Galilea («Da Nazaret può venire qualcosa di buono?», Gv 1,46), dove l'angelo annuncia a Maria la nascita di Gesù (Lc 1,26-38) e dove Gesù trascorre trent'anni di vita nascosta. Nella sinagoga proclama il suo programma leggendo Isaia 61: «Oggi si è compiuta questa Scrittura» (Lc 4,21), e viene rifiutato dai suoi compaesani." },
      { id: "galilea", nome: "Lago di Galilea", epoca: "Vita di Gesù", lat: 32.83, lon: 35.59, tag: "Ministero",
        desc: "Specchio d'acqua dolce attorno al quale si svolge gran parte del ministero di Gesù. Sulle sue rive chiama i primi discepoli pescatori (Pietro, Andrea, Giacomo, Giovanni), insegna dalla barca, calma la tempesta, cammina sulle acque e moltiplica i pani. Una terra di gente semplice e di confine, dove «il popolo che camminava nelle tenebre vide una grande luce» (Is 9,1; Mt 4)." },
      { id: "cafarnao", nome: "Cafarnao", epoca: "Vita di Gesù", lat: 32.88, lon: 35.575, tag: "«Sua città»", lp: "above",
        desc: "Cittadina di pescatori sul lago, base del ministero galilaico di Gesù, tanto da essere chiamata «la sua città» (Mt 9,1). Qui guarisce il paralitico calato dal tetto, la suocera di Pietro e il servo del centurione, e tiene il discorso sul Pane di vita nella sinagoga (Gv 6). Nonostante i tanti miracoli, Gesù la rimprovera per l'incredulità (Mt 11,23)." },
      { id: "cesarea", nome: "Cesarea Marittima", epoca: "Chiesa apostolica", lat: 32.50, lon: 34.89, tag: "Verso le genti · At 10", lp: "left",
        desc: "Grande porto romano costruito da Erode, sede del governatore (qui risiedeva Ponzio Pilato). Tappa decisiva dell'apertura del Vangelo ai pagani: Pietro battezza il centurione romano Cornelio, primo non-ebreo (At 10). Qui Paolo resta prigioniero due anni e fa appello a Cesare, prima di partire per Roma (At 23-26)." },
      { id: "damasco", nome: "Damasco", epoca: "Chiesa apostolica", lat: 33.51, lon: 36.29, tag: "Conversione di Paolo", lp: "above",
        desc: "Antichissima capitale siriana. Sulla strada che vi conduce, Saulo di Tarso — feroce persecutore dei cristiani — è folgorato da una luce e ode la voce: «Saulo, Saulo, perché mi perseguiti?» (At 9,4). Cieco per tre giorni, viene battezzato e diventa Paolo, l'apostolo delle genti: la conversione che cambia la storia della Chiesa." },
      { id: "antiochia", nome: "Antiochia di Siria", epoca: "Chiesa apostolica", lat: 36.20, lon: 36.16, tag: "«Cristiani» · At 11",
        desc: "Terza città dell'impero romano, primo grande centro cristiano fuori dalla Giudea e prima Chiesa mista di ebrei e pagani. Qui «per la prima volta i discepoli furono chiamati cristiani» (At 11,26). Da Antiochia, la comunità invia in missione Barnaba e Paolo: è il trampolino dei grandi viaggi missionari verso il mondo greco-romano." },
      { id: "efeso", nome: "Efeso", epoca: "Chiesa apostolica", lat: 37.94, lon: 27.34, tag: "Paolo e Giovanni",
        desc: "Grande metropoli dell'Asia Minore, celebre per il tempio di Artemide. Paolo vi predica per oltre due anni fondando una fiorente comunità (At 19) e le indirizza una delle sue lettere più alte. La tradizione vi colloca gli ultimi anni dell'apostolo Giovanni e la presenza di Maria; è una delle sette Chiese dell'Apocalisse (Ap 2)." },
      { id: "atene", nome: "Atene", epoca: "Chiesa apostolica", lat: 37.98, lon: 23.73, tag: "Vangelo e filosofia", lp: "below",
        desc: "Capitale della filosofia greca. All'Areòpago Paolo annuncia «il Dio ignoto» ai filosofi epicurei e stoici, citando i loro stessi poeti: «In lui viviamo, ci muoviamo ed esistiamo» (At 17,28). Un primo grande incontro — e scontro — tra il Vangelo e la cultura del mondo greco." },
      { id: "corinto", nome: "Corinto", epoca: "Chiesa apostolica", lat: 37.94, lon: 22.93, tag: "Lettere · At 18",
        desc: "Vivace e dissoluta città portuale greca. Paolo vi resta un anno e mezzo fondando una comunità numerosa e turbolenta, a cui scriverà le due Lettere ai Corinzi — tra cui l'inno alla carità (1 Cor 13) e la più antica testimonianza sulla risurrezione (1 Cor 15)." },
      { id: "babilonia", nome: "Babilonia", epoca: "Profeti ed Esilio", lat: 32.54, lon: 44.42, tag: "Esilio · 586 a.C.",
        desc: "Capitale dell'impero neo-babilonese di Nabucodonosor. Nel 586 a.C. distrugge Gerusalemme e il Tempio e deporta il popolo: è l'esilio, il trauma più grande dell'Antico Testamento, che sembra annullare le promesse. Proprio lì, però, i profeti annunciano la speranza: Geremia parla di una «alleanza nuova» scritta nel cuore (Ger 31) ed Ezechiele del cuore nuovo (Ez 36). Diventa anche simbolo del potere mondano ostile a Dio (Ap)." },
      { id: "patmos", nome: "Patmos", epoca: "Chiesa apostolica", lat: 37.31, lon: 26.55, tag: "Apocalisse",
        desc: "Piccola e rocciosa isola dell'Egeo, luogo di esilio nell'impero romano. Qui l'apostolo Giovanni, «a causa della parola di Dio», riceve le visioni dell'Apocalisse (Ap 1,9). Da quest'isola sperduta proviene la pagina che chiude la Bibbia, con la promessa dei «cieli nuovi e terra nuova» e della Gerusalemme celeste." },
      { id: "roma", nome: "Roma", epoca: "Chiesa apostolica", lat: 41.90, lon: 12.50, tag: "Capitale dell'impero",
        desc: "Centro del mondo antico, meta finale del libro degli Atti: «Come hai testimoniato a Gerusalemme, così dovrai testimoniare anche a Roma» (At 23,11). Paolo vi giunge prigioniero e vi predica; la tradizione vi pone il martirio di Pietro e Paolo sotto Nerone (~64 d.C.). Dalla capitale che perseguitava i cristiani, il Vangelo si diffonderà a tutto l'impero: «da Gerusalemme fino ai confini della terra» (At 1,8)." },

      { id: "ararat", nome: "Monte Ararat", epoca: "Patriarchi", lat: 39.70, lon: 44.30, tag: "L'arca di Noè",
        desc: "Vetta dell'Armenia orientale dove, secondo Genesi 8,4, si posa l'arca di Noè dopo il diluvio. È il luogo del nuovo inizio dell'umanità e dell'alleanza universale con il segno dell'arco nelle nubi (Gen 9): «non maledirò più la terra»." },
      { id: "hebron", nome: "Hebron", epoca: "Patriarchi", lat: 31.53, lon: 35.10, tag: "Tombe dei patriarchi",
        desc: "Una delle città più antiche, legata ad Abramo che vi acquista la grotta di Macpela come sepolcro (Gen 23): vi sono sepolti Abramo, Sara, Isacco, Rebecca, Giacobbe e Lia. Sarà anche la prima capitale di Davide per sette anni (2 Sam 5,5)." },
      { id: "sichem", nome: "Sichem", epoca: "Patriarchi", lat: 32.21, lon: 35.28, tag: "Prima promessa",
        desc: "Prima tappa di Abramo nella terra promessa, dove riceve la promessa «Alla tua discendenza darò questa terra» (Gen 12,6-7). Qui Giacobbe scava un pozzo: presso quel pozzo, secoli dopo, Gesù parlerà con la Samaritana (Gv 4)." },
      { id: "betel", nome: "Betel", epoca: "Patriarchi", lat: 31.93, lon: 35.22, tag: "La scala di Giacobbe",
        desc: "«Casa di Dio»: qui Giacobbe sogna la scala tra cielo e terra e ode la promessa (Gen 28,10-19), erigendo una pietra come altare. Diventerà poi un importante — e conteso — santuario del regno del Nord." },
      { id: "marrosso", nome: "Mar Rosso", epoca: "Esodo e Conquista", lat: 29.50, lon: 32.80, tag: "Il passaggio",
        desc: "Luogo del prodigio centrale dell'Antico Testamento: Dio apre le acque e Israele passa all'asciutto sfuggendo all'esercito egiziano (Es 14). Il «cantico di Mosè» celebra la liberazione (Es 15). Immagine perenne del Battesimo e di ogni liberazione." },
      { id: "nebo", nome: "Monte Nebo", epoca: "Esodo e Conquista", lat: 31.77, lon: 35.73, tag: "Morte di Mosè",
        desc: "Dalla sua cima Mosè contempla la terra promessa in cui non entrerà, e lì muore (Dt 34): «Il Signore gli mostrò tutta la terra… Tu la vedrai con i tuoi occhi, ma non vi entrerai». La fine del grande mediatore, alle soglie del compimento." },
      { id: "silo", nome: "Silo", epoca: "Esodo e Conquista", lat: 32.05, lon: 35.29, tag: "L'arca e Samuele",
        desc: "Primo santuario stabile d'Israele dopo la conquista: qui sosta l'Arca dell'alleanza e qui il piccolo Samuele ode la chiamata di Dio nella notte: «Parla, il tuo servo ti ascolta» (1 Sam 3)." },
      { id: "carmelo", nome: "Monte Carmelo", epoca: "Profeti ed Esilio", lat: 32.73, lon: 35.05, tag: "Elia e i profeti di Baal",
        desc: "Teatro della grande sfida di Elia ai 450 profeti di Baal: il fuoco di Dio scende sull'altare e il popolo grida «Il Signore è Dio!» (1 Re 18). Vittoria del Dio unico contro l'idolatria." },
      { id: "ninive", nome: "Ninive", epoca: "Profeti ed Esilio", lat: 36.36, lon: 43.15, tag: "Giona",
        desc: "Capitale assira, simbolo della grande città pagana. Dio vi invia Giona a predicare; contro ogni attesa la città si converte (Giona 3). Gesù la citerà: «I Niniviti si convertirono… ed ecco qui c'è più di Giona» (Mt 12,41)." },
      { id: "susa", nome: "Susa", epoca: "Profeti ed Esilio", lat: 32.19, lon: 48.26, tag: "Ester · Daniele · Neemia",
        desc: "Capitale dell'impero persiano. Qui la regina Ester salva il suo popolo dallo sterminio (libro di Ester); qui Daniele ha le sue visioni (Dn 8) e Neemia, coppiere del re, ottiene di tornare a ricostruire Gerusalemme (Ne 1-2)." },
      { id: "cana", nome: "Cana di Galilea", epoca: "Vita di Gesù", lat: 32.75, lon: 35.34, tag: "Primo segno",
        desc: "Villaggio del primo «segno» di Gesù: alle nozze trasforma l'acqua in vino su invito di Maria — «Fate quello che vi dirà» (Gv 2,1-11) — manifestando la sua gloria e dando inizio alla fede dei discepoli." },
      { id: "tabor", nome: "Monte Tabor", epoca: "Vita di Gesù", lat: 32.69, lon: 35.39, tag: "Trasfigurazione",
        desc: "Per tradizione il monte della Trasfigurazione: il volto di Gesù risplende, appaiono Mosè ed Elia e la voce del Padre dice «Questi è il Figlio mio prediletto, ascoltatelo» (Mt 17,1-8)." },
      { id: "betania", nome: "Betania", epoca: "Vita di Gesù", lat: 31.77, lon: 35.26, tag: "Lazzaro risorto",
        desc: "Villaggio di Marta, Maria e Lazzaro, amici di Gesù. Qui Gesù piange e risuscita Lazzaro morto da quattro giorni, proclamando: «Io sono la risurrezione e la vita» (Gv 11)." },
      { id: "cesareafilippi", nome: "Cesarea di Filippo", epoca: "Vita di Gesù", lat: 33.25, lon: 35.69, tag: "«Tu sei il Cristo»",
        desc: "Ai piedi del monte Ermon, presso le sorgenti del Giordano, Pietro proclama: «Tu sei il Cristo, il Figlio del Dio vivente», e Gesù risponde: «Tu sei Pietro e su questa pietra edificherò la mia Chiesa» (Mt 16,13-19)." },
      { id: "emmaus", nome: "Emmaus", epoca: "Vita di Gesù", lat: 31.84, lon: 35.00, tag: "Il Risorto riconosciuto",
        desc: "Villaggio verso cui camminano due discepoli sfiduciati la sera di Pasqua: il Risorto li affianca, spiega le Scritture e si fa riconoscere «allo spezzare del pane» (Lc 24,13-35)." },
      { id: "filippi", nome: "Filippi", epoca: "Chiesa apostolica", lat: 41.01, lon: 24.29, tag: "Prima Chiesa d'Europa",
        desc: "Prima comunità cristiana del continente europeo, nata dalla conversione di Lidia (At 16). Qui Paolo e Sila, imprigionati, cantano salmi e un terremoto converte il carceriere. A questa Chiesa Paolo indirizzerà la gioiosa Lettera ai Filippesi." },
      { id: "malta", nome: "Malta", epoca: "Chiesa apostolica", lat: 35.90, lon: 14.40, tag: "Naufragio di Paolo",
        desc: "Isola dove Paolo, diretto a Roma, fa naufragio ed è accolto con umanità; sopravvive al morso di una vipera e guarisce molti malati (At 28,1-10). Una delle più antiche comunità cristiane del Mediterraneo." },
      { id: "smirne", nome: "Smirne", epoca: "Chiesa apostolica", lat: 38.42, lon: 27.14, tag: "Una delle 7 Chiese",
        desc: "Una delle sette Chiese dell'Apocalisse, lodata senza rimproveri: «Sii fedele fino alla morte e ti darò la corona della vita» (Ap 2,8-11). Patria del martire Policarpo, discepolo dell'apostolo Giovanni." }
    ],
    luoghiBox: { lonMin: 9, lonMax: 49, latMin: 23, latMax: 43 },

    // 2B — Termini originali (glossario flip-card)
    termini: [
      { parola: "ruach", lingua: "ebraico", trad: "spirito · vento · soffio",
        spieg: "L'invisibile in movimento, percepito dall'effetto. ~378 volte. Aleggia sulle acque (Gen 1), apre il Mar Rosso (Es 14), risuscita le ossa (Ez 37), spanderò su ogni carne (Gioele 2 → Pentecoste).", modulo: "Ruach" },
      { parola: "neshama", lingua: "ebraico", trad: "respiro corporeo",
        spieg: "Il soffio fisico: Dio soffia nelle narici di Adamo (Gen 2,7). In parallelo con ruach in Giobbe 33,4.", modulo: "Ruach" },
      { parola: "nefesh", lingua: "ebraico", trad: "essere vivente / persona",
        spieg: "Non «anima» alla greca, ma la persona intera che respira: «la mia nefesh ha sete di Dio» (Sal 42).", modulo: "Ruach" },
      { parola: "ruach haqodesh", lingua: "ebraico", trad: "spirito santo",
        spieg: "Rarissimo nell'AT: solo 3 volte (Sal 51,11; Isaia 63 due volte).", modulo: "Ruach" },
      { parola: "berit", lingua: "ebraico", trad: "alleanza / patto",
        spieg: "~290 volte. Non contratto: un giuramento sigillato con la vita. Radice = «tagliare».", modulo: "Le Alleanze" },
      { parola: "karat", lingua: "ebraico", trad: "tagliare",
        spieg: "Non si «fa» un'alleanza, si «taglia». Il rituale del corridoio di sangue (Gen 15): in Gen 15 solo Dio passa.", modulo: "Le Alleanze" },
      { parola: "davar", lingua: "ebraico", trad: "parola · cosa · evento · promessa",
        spieg: "Una sola parola per tutto. Quando Dio parla, la cosa è già in atto (Gen 1; Is 55,11). Lega tutte le promesse.", modulo: "Le promesse collegate" },
      { parola: "zera", lingua: "ebraico", trad: "seme",
        spieg: "Singolare collettivo: un discendente E una stirpe insieme. Filo: Gen 3,15 → Abramo → Davide → Cristo.", modulo: "Le promesse collegate" },
      { parola: "aman", lingua: "ebraico", trad: "rendere fermo → fede, amen",
        spieg: "La fede = appoggiarsi su una parola ferma (Gen 15,6). Da qui emunà (fede) e amen. 2 Cor 1,20: le promesse «sì» in Cristo.", modulo: "Le promesse collegate" },
      { parola: "diathēkē", lingua: "greco", trad: "testamento / disposizione",
        spieg: "La LXX traduce berit così: disposizione unilaterale (chi scrive il testamento decide). Da qui «Vecchio/Nuovo Testamento».", modulo: "I 66 libri" },
      { parola: "basileía", lingua: "greco", trad: "regno / regalità",
        spieg: "L'atto di regnare, non il luogo (come «presidenza» = funzione). Mc 1,15.", modulo: "Il Regno di Dio" },
      { parola: "malkut", lingua: "ebraico", trad: "regno / sovranità",
        spieg: "Equivalente ebraico di basileía: il governo del re in azione, non il territorio (Dn 2,44).", modulo: "Il Regno di Dio" },
      { parola: "ēngiken", lingua: "greco", trad: "si è avvicinato",
        spieg: "Da engízō, perfetto attivo: si è avvicinato ed è e resta vicino. Il regno è già qui.", modulo: "Il Regno di Dio" },
      { parola: "metánoia", lingua: "greco", trad: "cambiare mente",
        spieg: "Meta + nous: cambiare modo di pensare, non solo sentirsi in colpa.", modulo: "Il Regno di Dio" },
      { parola: "talanton", lingua: "greco", trad: "talento (denaro pesante)",
        spieg: "~20 anni di salario affidati in amministrazione, non un «dono» naturale. Mt 25.", modulo: "I Talenti" },
      { parola: "stenós", lingua: "greco", trad: "stretto / compresso",
        spieg: "Compresso da una pressione laterale, non «piccolo». Solo 3 volte nel NT.", modulo: "La via stretta" },
      { parola: "pýlē", lingua: "greco", trad: "portone della città",
        spieg: "Non la porta di casa (thýra). Luogo pubblico del giudizio; si entra uno alla volta.", modulo: "La via stretta" },
      { parola: "thlîpsis", lingua: "greco", trad: "tribolazione / afflizione",
        spieg: "Radice di tethlimménē: la «via angusta» è stata resa stretta dall'afflizione (Rm 5,3).", modulo: "La via stretta" },
      { parola: "eurýchōros", lingua: "greco", trad: "spazioso / piazza",
        spieg: "Una piazza pubblica: la via larga è inerzia della folla, minor resistenza.", modulo: "La via stretta" },
      { parola: "apṓleia", lingua: "greco", trad: "perdizione / perdita",
        spieg: "Da apóllymi = perdere/sprecare. La famiglia di «pecora/moneta/figlio perduti» (Lc 15).", modulo: "La via stretta" },
      { parola: "merimnáō", lingua: "greco", trad: "ansia / mente divisa",
        spieg: "Da merízō = dividere in pezzi. Mente in tre posti e in nessuno per intero. Mt 6.", modulo: "Matteo 6,33" },
      { parola: "zēteō", lingua: "greco", trad: "cercare (di continuo)",
        spieg: "Imperativo presente: stile di vita, non atto isolato. «Continuate a cercare».", modulo: "Matteo 6,33" },
      { parola: "tzedaka", lingua: "ebraico", trad: "giustizia / fedeltà",
        spieg: "Non categoria da tribunale: modo giusto di vivere dentro l'alleanza, cura del povero.", modulo: "Matteo 6,33" },
      { parola: "Abbà", lingua: "aramaico", trad: "papà",
        spieg: "Il modo intimo con cui un bambino chiama il padre. Conservato non tradotto (Mc 14,36; Rm 8,15; Gal 4,6).", modulo: "Le preghiere di Gesù" },
      { parola: "almah", lingua: "ebraico", trad: "giovane donna",
        spieg: "Is 7,14: la LXX (ebrei, III sec. a.C.) traduce parthénos = vergine, ripreso da Mt 1,23.", modulo: "Isaia" },
      { parola: "serafim", lingua: "ebraico", trad: "coloro che bruciano",
        spieg: "Da saraf, bruciare. Cantano «Kadosh, Kadosh, Kadosh» (Is 6): triplice = intensità massima.", modulo: "Isaia" },
      { parola: "nacham", lingua: "ebraico", trad: "consolare (con svolta)",
        spieg: "«Nachamu, nachamu» (Is 40,1): non perdono freddo, ma cambiare postura, «parlare al cuore» (corteggiamento).", modulo: "Isaia" },
      { parola: "theópneustos", lingua: "greco", trad: "soffiata da Dio",
        spieg: "2 Tim 3,16: theos + pneo. Il soffio di Dio attraversa 40 voci in 1500 anni mantenendo coerenza.", modulo: "I 66 libri" },
      { parola: "tetélestai", lingua: "greco", trad: "saldato / pagato per intero",
        spieg: "Gv 19,30: termine delle ricevute commerciali. Il debito della promessa di Gen 15 è pagato.", modulo: "Le promesse collegate" }
    ]
  },

  /* -------------------------------------------------------- */
  /* 3) DIFFUSIONE DELLA FEDE NEL MONDO                        */
  /* -------------------------------------------------------- */
  /* Mappa-mondo schematica: chi ha evangelizzato dove e quando.
     Le attribuzioni apostoliche sono in larga parte TRADIZIONE
     (segnate con "tradizione"). lat/lon reali; proiezione
     equirettangolare sul box mondiale.                        */
  diffusione: {
    mondoBox: { lonMin: -125, lonMax: 145, latMin: -38, latMax: 64 },
    onde: [
      { id: "apostolica", nome: "Età apostolica (I sec.)", colore: "#c0392b" },
      { id: "antica", nome: "Chiesa antica (II-V sec.)", colore: "#b9770e" },
      { id: "medioevo", nome: "Medioevo (V-XI sec.)", colore: "#1e7e6b" },
      { id: "moderna", nome: "Età moderna (XVI-XIX sec.)", colore: "#5b4b8a" },
      { id: "contemporanea", nome: "Età contemporanea (XX-XXI sec.)", colore: "#2c7fb8" }
    ],
    nodi: [
      // --- Età apostolica ---
      { onda: "apostolica", luogo: "Gerusalemme", lat: 31.78, lon: 35.23, da: "Gerusalemme",
        chi: "I Dodici Apostoli · Pentecoste", quando: "~30 d.C.",
        desc: "Tutto comincia qui. Cinquanta giorni dopo la Pasqua, nel giorno di Pentecoste, lo Spirito Santo scende sui discepoli riuniti nel Cenacolo (At 2): cominciano a parlare in lingue diverse e Pietro tiene il primo annuncio pubblico, convertendo circa tremila persone. Nasce la Chiesa, una comunità che spezza il pane, mette i beni in comune e cresce ogni giorno. Da Gerusalemme, secondo il comando di Gesù, il Vangelo dovrà espandersi «in tutta la Giudea e la Samaria e fino ai confini della terra» (At 1,8)." },
      { onda: "apostolica", luogo: "Antiochia di Siria", lat: 36.20, lon: 36.16, da: "Gerusalemme",
        chi: "Barnaba e Paolo", quando: "~40-45 d.C.",
        desc: "Dopo la persecuzione seguita alla morte di Stefano, i credenti si disperdono e fondano ad Antiochia — terza città dell'impero — la prima grande comunità mista di ebrei e pagani. Qui «per la prima volta i discepoli furono chiamati cristiani» (At 11,26). La Chiesa di Antiochia diventa la base operativa di Paolo: è da qui che lo Spirito lo invia, con Barnaba, nei tre grandi viaggi missionari che porteranno il Vangelo in tutto il Mediterraneo." },
      { onda: "apostolica", luogo: "Asia Minore / Efeso", lat: 37.94, lon: 27.34, da: "Antiochia di Siria",
        chi: "Paolo, poi Giovanni", quando: "~50-95 d.C.",
        desc: "Paolo evangelizza sistematicamente le città dell'odierna Turchia (Galazia, Listra, Iconio, Colossi) e si ferma oltre due anni a Efeso, dove la predicazione è così efficace da provocare la rivolta degli argentieri del tempio di Artemide (At 19). La tradizione colloca a Efeso gli ultimi anni dell'apostolo Giovanni e la presenza di Maria. È qui che nasceranno le «sette Chiese» destinatarie dell'Apocalisse." },
      { onda: "apostolica", luogo: "Grecia (Filippi, Atene, Corinto)", lat: 37.98, lon: 23.73, da: "Asia Minore / Efeso",
        chi: "Paolo", quando: "~50-52 d.C.",
        desc: "Guidato da una visione («Passa in Macedonia e aiutaci», At 16,9), Paolo porta per la prima volta il Vangelo in Europa. A Filippi nasce la prima comunità europea attorno a Lidia; ad Atene annuncia «il Dio ignoto» ai filosofi dell'Areòpago (At 17); a Corinto resta un anno e mezzo fondando una Chiesa vivace, a cui scriverà l'inno alla carità e la più antica testimonianza sulla risurrezione. Il cristianesimo mette radici nel cuore della cultura greca." },
      { onda: "apostolica", luogo: "Roma", lat: 41.90, lon: 12.50, da: "Grecia (Filippi, Atene, Corinto)",
        chi: "Pietro e Paolo (martìri)", quando: "~60-67 d.C.",
        desc: "La capitale dell'impero è la meta verso cui converge tutto il libro degli Atti. Esisteva già una comunità (a cui Paolo scrive la Lettera ai Romani) quando l'apostolo vi giunge prigioniero, predicando «con tutta franchezza» pur in catene. La tradizione vi colloca il martirio dei due grandi apostoli sotto la persecuzione di Nerone: Pietro crocifisso, Paolo decapitato. Dalla Roma che perseguita, la fede diventerà il cuore della diffusione cristiana in Occidente." },
      { onda: "apostolica", luogo: "Alessandria d'Egitto", lat: 31.20, lon: 29.90, da: "Gerusalemme",
        chi: "Marco evangelista (tradizione)", quando: "~50-60 d.C.",
        desc: "Seconda città dell'impero e grande centro culturale ebraico ed ellenistico. Un'antica tradizione attribuisce all'evangelista Marco la fondazione della sua Chiesa: è la radice del cristianesimo copto, ancora oggi vivo in Egitto. Alessandria diventerà una delle capitali teologiche dell'antichità, con la sua celebre scuola catechetica (Clemente, Origene)." },
      { onda: "apostolica", luogo: "India (Kerala)", lat: 9.93, lon: 76.27, da: "Gerusalemme",
        chi: "Tommaso apostolo (tradizione)", quando: "~52 d.C.",
        desc: "Una tradizione antichissima e tenace narra che l'apostolo Tommaso raggiunse via mare la costa del Malabar, nel sud dell'India, fondando sette comunità e subendo il martirio presso Madras. I «cristiani di San Tommaso» del Kerala esistono ancora oggi e fanno risalire a lui le loro origini: una testimonianza di quanto presto e quanto lontano si spinse l'annuncio, ben oltre i confini dell'impero romano." },
      { onda: "apostolica", luogo: "Armenia", lat: 40.16, lon: 44.29, da: "Antiochia di Siria",
        chi: "Bartolomeo e Taddeo (tradizione)", quando: "I sec.",
        desc: "La tradizione attribuisce agli apostoli Bartolomeo e Giuda Taddeo la prima evangelizzazione dell'Armenia, ai confini orientali del mondo conosciuto. Quel seme darà un frutto storico straordinario: nel 301 l'Armenia sarà il primo regno della storia a proclamare il cristianesimo religione di Stato, prima ancora dell'impero romano." },

      // --- Chiesa antica ---
      { onda: "antica", luogo: "Armenia cristiana", lat: 40.16, lon: 44.29, da: "Armenia",
        chi: "Gregorio l'Illuminatore", quando: "301 d.C.",
        desc: "Gregorio l'Illuminatore converte il re Tiridate III, che proclama il cristianesimo religione del regno: l'Armenia diventa la prima nazione cristiana della storia. Verrà creato un alfabeto apposito per tradurre la Bibbia e la liturgia in armeno, fondando un'identità cristiana nazionale sopravvissuta fino a oggi attraverso secoli di persecuzioni." },
      { onda: "antica", luogo: "Etiopia / Axum", lat: 14.13, lon: 38.72, da: "Alessandria d'Egitto",
        chi: "Frumenzio", quando: "~330 d.C.",
        desc: "Già negli Atti un funzionario etiope, l'eunuco della regina Candace, era stato battezzato da Filippo (At 8). Nel IV secolo Frumenzio, consacrato vescovo ad Alessandria, converte il regno di Axum: nasce la Chiesa etiope ortodossa, una delle più antiche del mondo, custode di tradizioni uniche e di un proprio canone biblico. Il cristianesimo africano affonda qui radici antichissime." },
      { onda: "antica", luogo: "Edessa / Siria", lat: 37.15, lon: 38.79, da: "Antiochia di Siria",
        chi: "Comunità siriache", quando: "II-III sec.",
        desc: "Edessa è il cuore del cristianesimo di lingua siriaca (un dialetto dell'aramaico, la lingua stessa di Gesù). Da questo centro l'annuncio si irradia verso est, lungo le vie carovaniere, raggiungendo la Mesopotamia e l'impero persiano. La tradizione siriaca produrrà una ricca letteratura e una scuola teologica propria, e i suoi missionari arriveranno fino in Asia centrale e in Cina." },
      { onda: "antica", luogo: "Impero Romano", lat: 41.90, lon: 12.50, da: "Roma",
        chi: "Costantino · Editto di Milano", quando: "313-380 d.C.",
        desc: "Dopo tre secoli di persecuzioni intermittenti, l'imperatore Costantino con l'Editto di Milano (313) concede ai cristiani piena libertà di culto. Nel 325 il Concilio di Nicea definisce la fede contro l'arianesimo; nel 380 l'editto di Tessalonica fa del cristianesimo la religione ufficiale dell'impero. In pochi decenni la fede passa dalle catacombe alle basiliche: una svolta epocale, con luci e ombre." },

      // --- Medioevo ---
      { onda: "medioevo", luogo: "Irlanda", lat: 54.35, lon: -6.65, da: "Impero Romano",
        chi: "San Patrizio", quando: "V sec.",
        desc: "Rapito da ragazzo e portato schiavo in Irlanda, Patrizio vi torna da vescovo per evangelizzare i popoli celtici. La sua opera è così profonda che l'isola, mai stata romana, diventa una terra di santi e di monaci. I monasteri irlandesi custodiranno la cultura classica durante i secoli bui e lanceranno una straordinaria stagione missionaria: monaci come Colombano rievangelizzeranno l'Europa continentale." },
      { onda: "medioevo", luogo: "Inghilterra", lat: 51.28, lon: 1.08, da: "Impero Romano",
        chi: "Agostino di Canterbury", quando: "597 d.C.",
        desc: "Papa Gregorio Magno invia il monaco Agostino con quaranta compagni a evangelizzare gli Anglosassoni pagani. Sbarcati nel Kent, convertono il re Etelberto e fondano la sede di Canterbury, ancora oggi cuore della Chiesa inglese. È un esempio di missione voluta e organizzata direttamente da Roma." },
      { onda: "medioevo", luogo: "Germania", lat: 50.00, lon: 8.27, da: "Inghilterra",
        chi: "San Bonifacio", quando: "VIII sec.",
        desc: "Il monaco inglese Bonifacio, «apostolo dei Germani», evangelizza le tribù germaniche con gesti clamorosi — come l'abbattimento della quercia sacra a Thor — e soprattutto organizzando diocesi e monasteri stabili. Lega strettamente la giovane Chiesa germanica a Roma, ponendo le basi della cristianità europea. Muore martire in Frisia." },
      { onda: "medioevo", luogo: "Popoli slavi (Moravia)", lat: 49.10, lon: 17.40, da: "Impero Romano",
        chi: "Cirillo e Metodio", quando: "IX sec.",
        desc: "I due fratelli di Tessalonica, inviati da Bisanzio, evangelizzano i popoli slavi in modo rivoluzionario: inventano un alfabeto (il glagolitico, poi il cirillico) e traducono la Bibbia e la liturgia nella lingua del popolo, invece di imporre il greco o il latino. «Apostoli degli Slavi» e patroni d'Europa, mostrano un modello di evangelizzazione che rispetta e valorizza la cultura locale." },
      { onda: "medioevo", luogo: "Scandinavia", lat: 59.86, lon: 17.64, da: "Germania",
        chi: "Ansgar e successori", quando: "IX-XI sec.",
        desc: "Ansgar, «apostolo del Nord», avvia nel IX secolo l'evangelizzazione di Danimarca e Svezia. La cristianizzazione dei popoli vichinghi è lenta e prosegue per due secoli, spesso legata alla conversione dei re (come Olav in Norvegia), fino a integrare pienamente la Scandinavia nella cristianità europea." },
      { onda: "medioevo", luogo: "Rus' di Kiev", lat: 50.45, lon: 30.52, da: "Impero Romano",
        chi: "Principe Vladimir", quando: "988 d.C.",
        desc: "Secondo la cronaca, il principe Vladimir di Kiev, cercando una fede per il suo popolo, sceglie il cristianesimo bizantino rimasto folgorato dalla bellezza della liturgia a Santa Sofia di Costantinopoli. Il battesimo collettivo nel Dnepr (988) segna la nascita della cristianità slava orientale: è la radice dell'ortodossia russa, ucraina e bielorussa." },

      // --- Età moderna ---
      { onda: "moderna", luogo: "America Latina (Messico)", lat: 19.43, lon: -99.13, da: "Roma",
        chi: "Francescani e gesuiti", quando: "XVI sec.",
        desc: "Con la scoperta dell'America si apre un continente intero all'annuncio, in un intreccio complesso — e talvolta drammatico — con la conquista coloniale. Accanto agli abusi, sorgono grandi difensori degli indios come Bartolomé de Las Casas. L'apparizione della Vergine di Guadalupe (1531) segna profondamente l'evangelizzazione del Messico: in pochi decenni nasce la più grande area cattolica del mondo." },
      { onda: "moderna", luogo: "California", lat: 32.70, lon: -117.16, da: "America Latina (Messico)",
        chi: "Junípero Serra", quando: "XVIII sec.",
        desc: "Il francescano spagnolo Junípero Serra fonda una catena di missioni lungo la costa pacifica del Nord America (San Diego, San Francisco, Los Angeles…), attorno alle quali nasceranno molte città californiane. Centri di fede, agricoltura e artigianato, ma anche oggetto di dibattito storico per l'impatto sulle popolazioni native." },
      { onda: "moderna", luogo: "India (Goa)", lat: 15.30, lon: 74.08, da: "Roma",
        chi: "Francesco Saverio", quando: "XVI sec.",
        desc: "Il gesuita Francesco Saverio, compagno di sant'Ignazio, fa di Goa la base della missione in Oriente. Instancabile, battezza migliaia di persone lungo le coste dell'India e in tutta l'Asia: è considerato il più grande missionario dell'età moderna, patrono delle missioni insieme a santa Teresa di Lisieux." },
      { onda: "moderna", luogo: "Giappone", lat: 31.60, lon: 130.56, da: "India (Goa)",
        chi: "Francesco Saverio", quando: "1549",
        desc: "Saverio sbarca a Kagoshima nel 1549, primo annuncio del Vangelo in Giappone. Nascono fiorenti comunità cristiane, soprattutto a Nagasaki. Seguiranno violente persecuzioni (i 26 martiri del 1597, poi la repressione totale): i «cristiani nascosti» custodiranno la fede in segreto per oltre due secoli, riemergendo solo nell'Ottocento." },
      { onda: "moderna", luogo: "Cina", lat: 39.90, lon: 116.40, da: "India (Goa)",
        chi: "Matteo Ricci", quando: "XVI-XVII sec.",
        desc: "Il gesuita Matteo Ricci entra in Cina studiandone a fondo la lingua e la cultura, presentandosi come uomo di scienza e dialogando con i dotti confuciani fino a essere accolto alla corte imperiale di Pechino. Il suo metodo di «inculturazione» — annunciare Cristo dentro la cultura locale — resta un modello, pur tra controversie (la disputa sui riti cinesi)." },
      { onda: "moderna", luogo: "Africa subsahariana", lat: 0.32, lon: 32.58, da: "Roma",
        chi: "Missioni cattoliche e protestanti", quando: "XIX sec.",
        desc: "Nell'Ottocento una grande ondata missionaria (Padri Bianchi, comboniani, missioni protestanti) penetra nell'Africa interna, spesso a prezzo di enormi sacrifici per il clima e le malattie. Sorgono i martiri dell'Uganda (Carlo Lwanga e compagni, 1886). Oggi l'Africa subsahariana è una delle aree di più rapida crescita del cristianesimo nel mondo." },

      // --- Altri centri apostolici (I sec.) ---
      { onda: "apostolica", luogo: "Damasco", lat: 33.51, lon: 36.29, da: "Gerusalemme",
        chi: "Anania · Paolo convertito", quando: "~34 d.C.",
        desc: "Sulla via di Damasco Saulo, persecutore, è folgorato e accecato; il discepolo Anania lo battezza e gli ridona la vista (At 9). Da subito Paolo predica nelle sinagoghe «che Gesù è il Figlio di Dio», sfuggendo a un primo complotto calato in una cesta dalle mura. La città è una delle culle del cristianesimo siriaco." },
      { onda: "apostolica", luogo: "Cesarea Marittima", lat: 32.50, lon: 34.89, da: "Gerusalemme",
        chi: "Pietro · centurione Cornelio", quando: "~40 d.C.",
        desc: "Qui avviene la svolta: Pietro, dopo una visione, battezza il centurione romano Cornelio e la sua famiglia — i primi pagani accolti senza passare per la Legge ebraica (At 10). «Dio non fa preferenze di persone»: il Vangelo è ufficialmente per tutti i popoli." },
      { onda: "apostolica", luogo: "Cipro", lat: 34.92, lon: 33.62, da: "Antiochia di Siria",
        chi: "Barnaba e Paolo", quando: "~46 d.C.",
        desc: "Prima tappa del primo viaggio missionario: a Pafo si converte il proconsole romano Sergio Paolo (At 13). Patria di Barnaba, Cipro diventa una delle prime Chiese del Mediterraneo." },
      { onda: "apostolica", luogo: "Filippi", lat: 41.01, lon: 24.29, da: "Asia Minore / Efeso",
        chi: "Paolo, Sila, Lidia", quando: "~50 d.C.",
        desc: "Prima comunità cristiana d'Europa, nata dal cuore aperto di Lidia, commerciante di porpora (At 16). Imprigionati, Paolo e Sila cantano salmi a mezzanotte; un terremoto apre le porte e si converte il carceriere con tutta la famiglia." },
      { onda: "apostolica", luogo: "Babilonia / Persia", lat: 33.10, lon: 44.40, da: "Edessa / Siria",
        chi: "Comunità giudeo-cristiane · tradiz. apostolica", quando: "I sec.",
        desc: "Lungo le rotte verso est, tra le comunità ebraiche della Mesopotamia, il Vangelo penetra presto nell'impero persiano. Nascerà la Chiesa d'Oriente (siro-orientale), che nei secoli si spingerà fino in India e in Cina." },

      // --- Chiesa antica (II-V sec.) ---
      { onda: "antica", luogo: "Cartagine", lat: 36.85, lon: 10.33, da: "Roma",
        chi: "Tertulliano, Cipriano, Perpetua", quando: "II-III sec.",
        desc: "Capitale del cristianesimo latino in Africa del Nord, prima ancora di Roma a scrivere in latino. Patria di Tertulliano («il sangue dei martiri è seme di cristiani»), del vescovo-martire Cipriano e delle martiri Perpetua e Felicita. Grande fucina teologica." },
      { onda: "antica", luogo: "Ippona", lat: 36.90, lon: 7.75, da: "Cartagine",
        chi: "Sant'Agostino", quando: "395-430 d.C.",
        desc: "Sede del vescovo Agostino, il più influente Padre della Chiesa d'Occidente. Le sue «Confessioni» e «La città di Dio» plasmeranno il pensiero cristiano per oltre mille anni. Muore mentre i Vandali assediano la città." },
      { onda: "antica", luogo: "Costantinopoli", lat: 41.01, lon: 28.98, da: "Impero Romano",
        chi: "Concili ecumenici", quando: "330-451 d.C.",
        desc: "Nuova capitale cristiana dell'impero d'Oriente, fondata da Costantino. Sede dei concili che definiscono il Credo (381) e la fede su Cristo. Diventerà il cuore della cristianità ortodossa, con la grande Santa Sofia." },
      { onda: "antica", luogo: "Cappadocia", lat: 38.65, lon: 34.83, da: "Asia Minore / Efeso",
        chi: "Basilio, Gregorio di Nissa e di Nazianzo", quando: "IV sec.",
        desc: "Terra dei tre grandi «Padri Cappadoci», che difendono la divinità dello Spirito Santo e plasmano la teologia trinitaria. Culla del monachesimo orientale e, più tardi, di splendide chiese rupestri." },
      { onda: "antica", luogo: "Milano", lat: 45.46, lon: 9.19, da: "Impero Romano",
        chi: "Sant'Ambrogio", quando: "374-397 d.C.",
        desc: "Da qui il vescovo Ambrogio guida la Chiesa d'Occidente, tiene testa agli imperatori e battezza Agostino (387). Introduce il canto («ambrosiano») e una predicazione che cambia la cultura." },

      // --- Medioevo (V-XI sec.) ---
      { onda: "medioevo", luogo: "Montecassino", lat: 41.49, lon: 13.81, da: "Impero Romano",
        chi: "San Benedetto", quando: "529 d.C.",
        desc: "Benedetto fonda il monastero e scrive la Regola «ora et labora»: i monasteri benedettini diventeranno il motore che ricristianizza e ricostruisce l'Europa dopo le invasioni, custodendo fede, cultura e agricoltura." },
      { onda: "medioevo", luogo: "Bulgaria", lat: 42.70, lon: 23.32, da: "Popoli slavi (Moravia)",
        chi: "Re Boris I", quando: "864 d.C.",
        desc: "Il re Boris adotta il cristianesimo bizantino; grazie ai discepoli di Cirillo e Metodio, la Bulgaria diventa un grande centro della cultura slava cristiana e dell'alfabeto cirillico." },
      { onda: "medioevo", luogo: "Polonia", lat: 52.41, lon: 16.93, da: "Germania",
        chi: "Duca Mieszko I", quando: "966 d.C.",
        desc: "Il battesimo di Mieszko I segna la nascita della Polonia cristiana, saldamente legata a Roma: una scelta che definirà per sempre l'identità del Paese." },
      { onda: "medioevo", luogo: "Ungheria", lat: 47.50, lon: 19.04, da: "Germania",
        chi: "Santo Stefano re", quando: "1000 d.C.",
        desc: "Stefano, primo re cristiano d'Ungheria, organizza le diocesi e riceve la corona dal Papa: il regno magiaro entra nella cristianità latina." },
      { onda: "medioevo", luogo: "Islanda", lat: 64.15, lon: -21.94, da: "Scandinavia",
        chi: "Decisione dell'Althing", quando: "1000 d.C.",
        desc: "Caso unico: il parlamento islandese (Althing) adotta pacificamente il cristianesimo con una decisione collettiva, per non dividere il popolo. Un'evangelizzazione per via di assemblea." },

      // --- Età moderna (XVI-XIX sec.) ---
      { onda: "moderna", luogo: "Brasile", lat: -12.97, lon: -38.51, da: "Roma",
        chi: "Gesuiti (Anchieta, Nóbrega)", quando: "XVI sec.",
        desc: "I gesuiti fondano missioni e difendono gli indigeni; José de Anchieta, «apostolo del Brasile», ne impara le lingue. Nasce il più grande Paese cattolico del mondo per numero di fedeli." },
      { onda: "moderna", luogo: "Perù (Lima)", lat: -12.05, lon: -77.04, da: "Roma",
        chi: "Toribio di Mogrovejo, Rosa da Lima", quando: "XVI-XVII sec.",
        desc: "Lima diventa un centro di santità del Nuovo Mondo: il vescovo Toribio percorre a piedi le Ande, e fioriscono i primi santi americani — Rosa da Lima, Martín de Porres." },
      { onda: "moderna", luogo: "Filippine (Manila)", lat: 14.60, lon: 120.98, da: "India (Goa)",
        chi: "Missionari spagnoli", quando: "XVI sec.",
        desc: "Le Filippine diventano l'unico Paese a maggioranza cristiana dell'Asia e la grande base dell'evangelizzazione dell'Estremo Oriente, con un cattolicesimo popolare vivissimo ancora oggi." },
      { onda: "moderna", luogo: "Vietnam", lat: 21.03, lon: 105.85, da: "India (Goa)",
        chi: "Alexandre de Rhodes", quando: "XVII sec.",
        desc: "Il gesuita de Rhodes evangelizza e crea l'alfabeto latino del vietnamita ancora in uso. La Chiesa vietnamita conoscerà ondate di martìri (oltre 100.000), tra cui i 117 santi martiri canonizzati." },
      { onda: "moderna", luogo: "Canada (Québec)", lat: 46.81, lon: -71.21, da: "Roma",
        chi: "Gesuiti · martiri nordamericani", quando: "XVII sec.",
        desc: "I gesuiti evangelizzano i popoli nativi della Nuova Francia; Jean de Brébeuf e compagni subiscono il martirio tra gli Uroni. Da qui il cattolicesimo si radica nel Nord America francese." },

      // --- Età contemporanea (XX-XXI sec.) ---
      { onda: "contemporanea", luogo: "Corea del Sud", lat: 37.57, lon: 126.98, da: "Cina",
        chi: "Laici coreani · poi missionari", quando: "XVIII-XXI sec.",
        desc: "Caso straordinario: il cristianesimo entra in Corea grazie a laici che lo scoprono attraverso i libri, prima ancora dell'arrivo dei missionari. Dopo migliaia di martiri (canonizzati da Giovanni Paolo II), oggi è una delle Chiese più vivaci e missionarie dell'Asia." },
      { onda: "contemporanea", luogo: "Cina (Chiese domestiche)", lat: 30.59, lon: 114.30, da: "Cina",
        chi: "Comunità cristiane locali", quando: "XX-XXI sec.",
        desc: "Nonostante decenni di restrizioni, il cristianesimo in Cina cresce enormemente, soprattutto nelle «chiese domestiche»: una delle espansioni più rapide e silenziose della storia recente." },
      { onda: "contemporanea", luogo: "Africa (crescita)", lat: -1.29, lon: 36.82, da: "Africa subsahariana",
        chi: "Chiese locali africane", quando: "XX-XXI sec.",
        desc: "L'Africa subsahariana passa da pochi milioni a oltre 600 milioni di cristiani in un secolo: il baricentro del cristianesimo mondiale si sposta verso il Sud del mondo, con un'esplosione di vocazioni e comunità." },
      { onda: "contemporanea", luogo: "America Latina (pentecostali)", lat: -23.55, lon: -46.63, da: "Brasile",
        chi: "Movimenti evangelici e carismatici", quando: "XX-XXI sec.",
        desc: "Accanto al cattolicesimo storico, esplodono le comunità evangeliche e pentecostali: il continente resta il cuore numerico del cristianesimo mondiale." },
      { onda: "contemporanea", luogo: "Oceania (Australia)", lat: -33.87, lon: 151.21, da: "Roma",
        chi: "Missioni e migrazioni", quando: "XIX-XXI sec.",
        desc: "Dall'Ottocento il cristianesimo si radica in Australia, Nuova Zelanda e nelle isole del Pacifico, portato da missionari e migranti: l'annuncio raggiunge davvero «i confini della terra»." }
    ]
  }
};
