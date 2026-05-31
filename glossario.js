// =============================================================
//  GLOSSARIO DELLA FEDE — termini e concetti
//  File ISOLATO e AUTO-AGGANCIANTE: non modifica app.js né
//  index.html. Rende cliccabili i concetti citati nelle risposte
//  ("Domande sulla fede") e offre un glossario sfogliabile.
//  Caricato dinamicamente da domande-extra.js.
// =============================================================
(function () {
  "use strict";
  if (window.__GLOSS_INIT) return;
  window.__GLOSS_INIT = true;

  /* ---------------- DATI ---------------- */
  var GLOSSARIO = [
    // --- Dio e Trinità ---
    { term: "Trinità", cat: "Dio e Trinità", aka: ["trinitario", "trinitaria", "Santissima Trinità"],
      def: "L'unico Dio in tre Persone — Padre, Figlio e Spirito Santo — che condividono un'unica e identica sostanza divina. Mistero centrale della fede, conoscibile solo per Rivelazione.",
      vedi: ["sostanza", "Persona", "perichóresis", "homooúsios"] },
    { term: "sostanza", cat: "Dio e Trinità", aka: ["ousia", "substantia", "consustanziale"],
      def: "Ciò che una cosa «è» in sé. In Dio c'è una sola sostanza (greco ousia, latino substantia) condivisa dalle tre Persone: per questo non sono tre dèi.",
      vedi: ["Trinità", "Persona", "homooúsios"] },
    { term: "Persona", cat: "Dio e Trinità", noauto: true, aka: ["ipostasi", "hypostasis"],
      def: "Il «chi» distinto e sussistente. Nella Trinità le tre Persone (greco hypostáseis) si distinguono solo per le relazioni di origine — il Padre genera, il Figlio è generato, lo Spirito procede — non per la sostanza.",
      vedi: ["Trinità", "sostanza", "relazioni di origine"] },
    { term: "relazioni di origine", cat: "Dio e Trinità", aka: ["relazione di origine"],
      def: "Ciò che distingue le tre Persone divine: la generazione (Padre→Figlio) e la processione (lo Spirito). Tutto il resto in Dio è comune e indiviso.",
      vedi: ["Trinità", "Persona", "Filioque"] },
    { term: "homooúsios", cat: "Dio e Trinità", aka: ["omoousios", "consustanziale", "della stessa sostanza"],
      def: "Termine greco («della stessa sostanza») proclamato dal Concilio di Nicea (325) per affermare che il Figlio è vero Dio come il Padre, contro Ario.",
      vedi: ["Concilio di Nicea", "arianesimo", "sostanza"] },
    { term: "perichóresis", cat: "Dio e Trinità", aka: ["circumincessione", "pericoresi"],
      def: "La «compenetrazione» reciproca delle tre Persone divine, che dimorano l'una nell'altra in perfetta unità d'amore senza confondersi.",
      vedi: ["Trinità", "Persona"] },
    { term: "modalismo", cat: "Dio e Trinità", aka: ["modalista", "Sabellio", "sabellianesimo"],
      def: "Eresia (Sabellio) secondo cui Dio sarebbe un'unica Persona con «tre maschere» o modi di apparire. Nega la reale distinzione delle Persone. Condannato dalla Chiesa.",
      vedi: ["Trinità", "Persona"] },
    { term: "triteismo", cat: "Dio e Trinità", aka: ["triteista", "tre dèi"],
      def: "Errore che intende le tre Persone come tre dèi separati. Nega l'unica sostanza divina e quindi il monoteismo.",
      vedi: ["Trinità", "monoteismo"] },
    { term: "arianesimo", cat: "Dio e Trinità", aka: ["ariano", "Ario"],
      def: "Eresia di Ario (IV sec.): il Figlio sarebbe una creatura, inferiore al Padre. Respinta dal Concilio di Nicea (325) con il termine homooúsios.",
      vedi: ["Concilio di Nicea", "homooúsios"] },
    { term: "Concilio di Nicea", cat: "Dio e Trinità", aka: ["Nicea"],
      def: "Primo Concilio ecumenico (325): proclamò la piena divinità del Figlio («della stessa sostanza del Padre») contro l'arianesimo. Da qui la prima parte del Credo.",
      vedi: ["homooúsios", "arianesimo", "Concilio di Costantinopoli"] },
    { term: "Concilio di Costantinopoli", cat: "Dio e Trinità", aka: ["Costantinopoli I"],
      def: "Concilio del 381: affermò la piena divinità dello Spirito Santo («Signore e datore di vita») contro i Pneumatomachi. Completa il Credo niceno-costantinopolitano.",
      vedi: ["Trinità", "Concilio di Nicea"] },
    { term: "Filioque", cat: "Dio e Trinità", aka: [],
      def: "Espressione latina («e dal Figlio») aggiunta al Credo in Occidente: lo Spirito procede «dal Padre e dal Figlio». Punto di divergenza con gli ortodossi.",
      vedi: ["Trinità", "relazioni di origine"] },
    { term: "monoteismo", cat: "Dio e Trinità", aka: ["monoteista"],
      def: "Fede in un solo Dio. Cristianesimo, ebraismo e islam sono monoteisti. La Trinità non è politeismo: è l'unico Dio in tre Persone.",
      vedi: ["Trinità", "dualismo", "panteismo"] },
    { term: "dualismo", cat: "Dio e Trinità", aka: ["dualista"],
      def: "Visione che pone due princìpi eterni opposti (bene/male, spirito/materia). Il cristianesimo lo rifiuta: il male non è un «dio», ma assenza di bene.",
      vedi: ["monoteismo", "creatio ex nihilo"] },
    { term: "panteismo", cat: "Dio e Trinità", aka: ["panteista"],
      def: "Idea che il mondo «sia» Dio o parte di Dio. Il cristianesimo distingue Creatore e creatura: Dio è presente in tutto ma non si identifica col mondo.",
      vedi: ["creatio ex nihilo", "monoteismo"] },
    { term: "creatio ex nihilo", cat: "Dio e Trinità", aka: ["creazione dal nulla"],
      def: "Dottrina secondo cui Dio crea «dal nulla», non plasmando una materia preesistente. Esclude dualismo, panteismo ed emanazione necessaria.",
      vedi: ["provvidenza", "dualismo"] },
    { term: "provvidenza", cat: "Dio e Trinità", aka: ["provvidente"],
      def: "L'azione con cui Dio conserva e guida il creato verso il suo fine. Non annulla la libertà né le cause naturali, ma le abbraccia.",
      vedi: ["creatio ex nihilo"] },
    { term: "kenosi", cat: "Dio e Trinità", aka: ["kenosis", "svuotamento"],
      def: "Greco «svuotamento» (Fil 2,7): l'abbassamento del Figlio di Dio che assume la condizione umana fino alla croce. La potenza di Dio che si fa umiltà.",
      vedi: ["Incarnazione", "onnipotenza"] },
    { term: "onnipotenza", cat: "Dio e Trinità", aka: ["onnipotente"],
      def: "Dio può tutto ciò che è realmente possibile (non ciò che è contraddittorio o contrario al suo essere). Si manifesta soprattutto nella misericordia.",
      vedi: ["kenosi"] },

    // --- Cristo ---
    { term: "Incarnazione", cat: "Cristo", aka: ["incarnato", "Verbo si fece carne"],
      def: "Il Figlio eterno di Dio assume una piena natura umana in Gesù di Nazaret. «Il Verbo si fece carne» (Gv 1,14).",
      vedi: ["unione ipostatica", "due nature", "Theotokos"] },
    { term: "unione ipostatica", cat: "Cristo", aka: ["ipostatica"],
      def: "L'unione, in Cristo, della natura divina e di quella umana in un'unica Persona (ipostasi). Definita al Concilio di Calcedonia (451).",
      vedi: ["due nature", "Concilio di Calcedonia", "Incarnazione"] },
    { term: "due nature", cat: "Cristo", aka: ["natura divina e umana"],
      def: "In Cristo sussistono integre la natura divina e quella umana, «senza confusione e senza separazione»: vero Dio e vero uomo.",
      vedi: ["unione ipostatica", "Concilio di Calcedonia"] },
    { term: "Concilio di Calcedonia", cat: "Cristo", aka: ["Calcedonia"],
      def: "Concilio del 451: definì che Cristo è una sola Persona in due nature, divina e umana, senza confusione né separazione.",
      vedi: ["due nature", "unione ipostatica"] },
    { term: "preesistenza", cat: "Cristo", aka: ["preesistente"],
      def: "Il Figlio esisteva come Dio «prima» della creazione e della sua nascita umana: «prima che il mondo fosse» (Gv 17,5).",
      vedi: ["Incarnazione", "Trinità"] },
    { term: "redenzione", cat: "Grazia e salvezza", aka: ["redentore", "redento", "riscatto"],
      def: "L'opera con cui Cristo, con la sua morte e risurrezione, ci «riscatta» dal peccato e dalla morte e ci riconcilia con Dio.",
      vedi: ["salvezza", "espiazione", "grazia"] },
    { term: "espiazione", cat: "Grazia e salvezza", aka: ["espiatorio", "sostitutiva", "satisfazione"],
      def: "Cristo, l'innocente, prende su di sé le conseguenze del peccato per amore, riparando la frattura con Dio. Non un Dio assetato di sangue, ma amore che si fa carico.",
      vedi: ["redenzione", "salvezza"] },
    { term: "protovangelo", cat: "Scrittura", aka: ["proto-vangelo"],
      def: "Gen 3,15: la prima promessa di salvezza dopo la caduta — il «seme» della donna che schiaccerà la testa del serpente. «Primo vangelo».",
      vedi: ["alleanza"] },

    // --- Scrittura e Rivelazione ---
    { term: "Rivelazione", cat: "Scrittura", aka: ["rivelato", "rivelarsi"],
      def: "L'auto-comunicazione di Dio all'uomo, culminata in Cristo. Ci raggiunge tramite Scrittura e Tradizione, interpretate dal Magistero.",
      vedi: ["Tradizione", "Magistero", "ispirazione"] },
    { term: "Tradizione", cat: "Scrittura", aka: ["Sacra Tradizione", "Tradizione vivente"],
      def: "La trasmissione viva del Vangelo nella Chiesa, accanto alla Scrittura, dalla stessa sorgente. Non «aggiunge» verità, ma le custodisce ed esplicita.",
      vedi: ["Rivelazione", "Magistero"] },
    { term: "Magistero", cat: "Scrittura", aka: ["magisteriale"],
      def: "L'autorità di insegnamento della Chiesa (Papa e vescovi), che interpreta autenticamente Scrittura e Tradizione. Non è «sopra» la Parola, ma a suo servizio.",
      vedi: ["Tradizione", "infallibilità", "dogma"] },
    { term: "ispirazione", cat: "Scrittura", aka: ["ispirata", "theópneustos"],
      def: "L'azione dello Spirito Santo che ha guidato gli autori umani della Bibbia, così da insegnare «senza errore» la verità per la salvezza (2 Tm 3,16).",
      vedi: ["Rivelazione", "canone"] },
    { term: "canone", cat: "Scrittura", aka: ["canonico", "canonici"],
      def: "L'elenco ufficiale dei libri ispirati della Bibbia. La Chiesa lo ha «riconosciuto», non inventato, nei sinodi del IV secolo.",
      vedi: ["deuterocanonici", "apocrifi", "Settanta"] },
    { term: "deuterocanonici", cat: "Scrittura", aka: ["deuterocanonico"],
      def: "I sette libri dell'AT (Tobia, Giuditta, Sapienza, Siracide, Baruc, 1-2 Maccabei) presenti nella Bibbia cattolica e ortodossa, esclusi dalla Riforma.",
      vedi: ["canone", "Settanta"] },
    { term: "Settanta", cat: "Scrittura", aka: ["LXX", "septuaginta"],
      def: "Antica traduzione greca dell'AT (III-II sec. a.C.), usata dagli ebrei e citata dal Nuovo Testamento. Conteneva i libri deuterocanonici.",
      vedi: ["canone", "deuterocanonici"] },
    { term: "apocrifi", cat: "Scrittura", aka: ["apocrifo", "vangeli apocrifi"],
      def: "Scritti antichi non riconosciuti come ispirati né apostolici (es. «vangeli apocrifi»). Esclusi dal canone per custodire la purezza della fede.",
      vedi: ["canone"] },
    { term: "sensi della Scrittura", cat: "Scrittura", aka: ["senso letterale", "senso spirituale"],
      def: "La Scrittura ha un senso letterale (ciò che dice il testo) e uno spirituale (alla luce di Cristo): allegorico, morale, anagogico.",
      vedi: ["Rivelazione"] },
    { term: "alleanza", cat: "Scrittura", aka: ["berit", "patto", "alleanze"],
      def: "Il legame solenne che Dio stringe con l'uomo (Noè, Abramo, Mosè, Davide), culminato nella «nuova alleanza» nel sangue di Cristo.",
      vedi: ["protovangelo", "Eucaristia"] },

    // --- Grazia e salvezza ---
    { term: "grazia", cat: "Grazia e salvezza", aka: ["grazia santificante", "grazia attuale"],
      def: "Il dono gratuito che Dio fa di se stesso: la sua vita divina in noi, che ci rende figli. «Santificante» (stato stabile) e «attuale» (aiuti puntuali).",
      vedi: ["giustificazione", "salvezza", "peccato originale"] },
    { term: "salvezza", cat: "Grazia e salvezza", aka: ["salvati", "salvare", "salvato"],
      def: "L'essere liberati dal peccato e dalla morte e introdotti nella comunione eterna con Dio. Dono offerto a tutti in Cristo, da accogliere con fede e vita.",
      vedi: ["grazia", "redenzione", "giustificazione"] },
    { term: "giustificazione", cat: "Grazia e salvezza", aka: ["giustificato", "giustificati"],
      def: "L'atto con cui Dio, per grazia, rende l'uomo giusto, perdonando il peccato e donandogli la sua vita. Si accoglie con la fede che opera nell'amore.",
      vedi: ["grazia", "salvezza"] },
    { term: "peccato originale", cat: "Grazia e salvezza", aka: [],
      def: "La condizione ferita in cui ogni uomo nasce, conseguenza della prima colpa: non una colpa personale, ma una natura indebolita. Cancellato dal Battesimo.",
      vedi: ["concupiscenza", "grazia", "Battesimo"] },
    { term: "concupiscenza", cat: "Grazia e salvezza", aka: [],
      def: "L'inclinazione al male che resta dopo il Battesimo. Non è peccato in sé, ma terreno di lotta spirituale.",
      vedi: ["peccato originale"] },
    { term: "peccato mortale", cat: "Morale", aka: ["peccati mortali"],
      def: "Colpa grave che rompe l'amicizia con Dio: richiede materia grave, piena consapevolezza e deliberato consenso. Si ripara con la Confessione.",
      vedi: ["peccato veniale", "Riconciliazione"] },
    { term: "peccato veniale", cat: "Morale", aka: ["peccati veniali"],
      def: "Colpa più lieve o senza piena avvertenza: indebolisce l'amore ma non lo distrugge. Si rimette anche con preghiera, Eucaristia, carità.",
      vedi: ["peccato mortale"] },
    { term: "coscienza", cat: "Morale", aka: [],
      def: "Il giudizio della ragione che riconosce il bene e il male. Va sempre seguita, ma prima va formata con la Parola, la Chiesa e la preghiera.",
      vedi: ["legge naturale"] },
    { term: "legge naturale", cat: "Morale", aka: ["legge morale naturale"],
      def: "La legge morale «scritta nel cuore» di ogni uomo (Rm 2,15), conoscibile dalla ragione, fondamento dei diritti e dei doveri universali.",
      vedi: ["coscienza"] },
    { term: "virtù teologali", cat: "Morale", aka: ["fede speranza carità"],
      def: "Fede, speranza e carità: doni di Dio che ci orientano direttamente a Lui. La più grande è la carità (1 Cor 13).",
      vedi: ["grazia"] },

    // --- Sacramenti ---
    { term: "sacramento", cat: "Sacramenti", aka: ["sacramenti", "sacramentale"],
      def: "Segno efficace della grazia, istituito da Cristo: non un rito magico, ma un incontro reale con Lui che agisce attraverso segni concreti. Sono sette.",
      vedi: ["grazia", "ex opere operato"] },
    { term: "ex opere operato", cat: "Sacramenti", aka: [],
      def: "Espressione latina: l'efficacia del sacramento viene da Cristo stesso, non dalla santità del ministro. «In forza dell'opera compiuta».",
      vedi: ["sacramento"] },
    { term: "transustanziazione", cat: "Sacramenti", aka: ["transustanziale"],
      def: "Il cambiamento, nell'Eucaristia, della sostanza del pane e del vino nel Corpo e Sangue di Cristo, pur restandone le apparenze.",
      vedi: ["Eucaristia", "presenza reale", "sostanza"] },
    { term: "presenza reale", cat: "Sacramenti", aka: [],
      def: "La presenza vera, reale e sostanziale di Cristo nell'Eucaristia, non solo simbolica. «Questo è il mio corpo» (Lc 22,19).",
      vedi: ["Eucaristia", "transustanziazione"] },
    { term: "Eucaristia", cat: "Sacramenti", aka: ["eucaristico", "Comunione"],
      def: "Sacramento del Corpo e Sangue di Cristo, «fonte e culmine» della vita cristiana. Rende presente l'unico sacrificio della croce.",
      vedi: ["transustanziazione", "presenza reale", "Messa"] },
    { term: "Battesimo", cat: "Sacramenti", aka: ["battezzato", "battezzare", "battesimale"],
      def: "Porta della vita cristiana: cancella il peccato originale, fa rinascere come figli di Dio e inserisce nella Chiesa.",
      vedi: ["peccato originale", "Confermazione", "grazia"] },
    { term: "Confermazione", cat: "Sacramenti", aka: ["Cresima", "cresimato"],
      def: "Sacramento che completa il Battesimo donando la pienezza dello Spirito Santo, come a Pentecoste, per testimoniare la fede da adulti.",
      vedi: ["Battesimo", "doni dello Spirito"] },
    { term: "Riconciliazione", cat: "Sacramenti", aka: ["Confessione", "confessarsi", "Penitenza"],
      def: "Sacramento del perdono: chi è pentito confessa i peccati e riceve l'assoluzione in nome di Cristo. Riconcilia con Dio e con la Chiesa.",
      vedi: ["peccato mortale", "sigillo sacramentale"] },
    { term: "sigillo sacramentale", cat: "Sacramenti", aka: ["sigillo della confessione", "segreto confessionale"],
      def: "Il segreto assoluto e inviolabile a cui è tenuto il sacerdote su tutto ciò che ascolta in confessione.",
      vedi: ["Riconciliazione"] },
    { term: "successione apostolica", cat: "Chiesa", aka: ["successori degli apostoli"],
      def: "La trasmissione ininterrotta dell'autorità e del ministero dagli apostoli ai vescovi, garanzia di continuità con la Chiesa delle origini.",
      vedi: ["Ordine sacro", "Magistero"] },
    { term: "in persona Christi", cat: "Sacramenti", aka: [],
      def: "Espressione latina: il sacerdote agisce «nella persona di Cristo» capo, rappresentandolo nei sacramenti.",
      vedi: ["Ordine sacro", "successione apostolica"] },
    { term: "Ordine sacro", cat: "Sacramenti", aka: ["ordinazione", "sacerdozio"],
      def: "Sacramento che conferisce il ministero di vescovi, presbiteri e diaconi, per servire il popolo di Dio in nome di Cristo.",
      vedi: ["in persona Christi", "successione apostolica"] },

    // --- Maria e santi ---
    { term: "Immacolata Concezione", cat: "Maria e santi", aka: ["Immacolata"],
      def: "Dogma (1854): Maria fu preservata dal peccato originale fin dal concepimento, per una grazia singolare in vista dei meriti di Cristo.",
      vedi: ["verginità perpetua", "Theotokos", "dogma"] },
    { term: "Theotokos", cat: "Maria e santi", aka: ["Madre di Dio"],
      def: "Greco «Colei che genera Dio»: titolo di Maria definito a Efeso (431). Difende la verità su Cristo: chi è nato da lei è una sola Persona, il Figlio di Dio.",
      vedi: ["Incarnazione", "Immacolata Concezione"] },
    { term: "verginità perpetua", cat: "Maria e santi", aka: ["sempre vergine"],
      def: "Fede secondo cui Maria fu vergine prima, durante e dopo il parto. Antichissima, condivisa anche dagli ortodossi.",
      vedi: ["Theotokos", "Immacolata Concezione"] },
    { term: "Assunzione", cat: "Maria e santi", aka: ["assunta"],
      def: "Dogma (1950): Maria, finita la vita terrena, fu assunta in cielo in anima e corpo. Anticipo della risurrezione promessa a tutti.",
      vedi: ["risurrezione della carne"] },
    { term: "latria", cat: "Maria e santi", aka: ["dulia", "iperdulia", "adorazione", "venerazione"],
      def: "Latria = adorazione, dovuta solo a Dio. Dulia = venerazione dei santi. Iperdulia = la venerazione speciale (non adorazione) a Maria.",
      vedi: ["comunione dei santi", "Theotokos"] },
    { term: "comunione dei santi", cat: "Maria e santi", aka: [],
      def: "L'unione di tutti i membri della Chiesa — in terra, in purificazione e in cielo — in un solo corpo in Cristo, che si scambiano beni spirituali.",
      vedi: ["intercessione", "Purgatorio", "canonizzazione"] },
    { term: "intercessione", cat: "Maria e santi", aka: ["intercedere", "intercessore"],
      def: "Il pregare «a favore di» altri. I santi intercedono per noi presso Dio; non sostituiscono Cristo, unico mediatore, ma pregano con noi.",
      vedi: ["comunione dei santi"] },
    { term: "canonizzazione", cat: "Maria e santi", aka: ["canonizzato"],
      def: "Atto con cui la Chiesa riconosce ufficialmente che una persona è in cielo e la propone come modello e intercessore. Constata, non «fabbrica» santi.",
      vedi: ["comunione dei santi"] },

    // --- Ultime realtà ---
    { term: "novissimi", cat: "Ultime realtà", aka: ["escatologia", "ultime realtà"],
      def: "Le «realtà ultime»: morte, giudizio, paradiso, purgatorio, inferno. L'oggetto dell'escatologia.",
      vedi: ["giudizio particolare", "Purgatorio", "Parusia"] },
    { term: "giudizio particolare", cat: "Ultime realtà", aka: [],
      def: "Il giudizio di ciascuno subito dopo la morte, che decide il suo destino eterno. Distinto dal giudizio universale alla fine dei tempi.",
      vedi: ["giudizio universale", "novissimi"] },
    { term: "giudizio universale", cat: "Ultime realtà", aka: ["giudizio finale"],
      def: "Il giudizio alla fine dei tempi, con la risurrezione di tutti, in cui si manifesterà pienamente il senso della storia.",
      vedi: ["giudizio particolare", "Parusia", "risurrezione della carne"] },
    { term: "Purgatorio", cat: "Ultime realtà", aka: ["purgante", "purificazione"],
      def: "Stato di purificazione di chi muore in amicizia con Dio ma non ancora del tutto puro. È già salvezza, non «seconda chance».",
      vedi: ["comunione dei santi", "indulgenza"] },
    { term: "visione beatifica", cat: "Ultime realtà", aka: ["Paradiso"],
      def: "La comunione piena e gioiosa con Dio «faccia a faccia» (1 Cor 13,12): l'essenza del Paradiso, che sazia il cuore senza stancarlo.",
      vedi: ["novissimi"] },
    { term: "Inferno", cat: "Ultime realtà", aka: [],
      def: "Stato eterno di auto-esclusione di chi rifiuta liberamente e definitivamente l'amore di Dio. Non è Dio che «manda»: è la creatura che si chiude.",
      vedi: ["apocatàstasi", "giudizio particolare"] },
    { term: "apocatàstasi", cat: "Ultime realtà", aka: ["apocatastasi", "riconciliazione universale"],
      def: "Tesi (legata a Origene) secondo cui alla fine tutti, anche i dannati, sarebbero salvati. Respinta come dottrina (Costantinopoli II, 553). Si può però sperare.",
      vedi: ["Inferno"] },
    { term: "risurrezione della carne", cat: "Ultime realtà", aka: ["risurrezione dei corpi"],
      def: "Alla fine dei tempi risorgeremo con il corpo, trasformato e glorioso, come Cristo risorto. Non rianimazione, ma vita nuova.",
      vedi: ["Parusia", "giudizio universale"] },
    { term: "Parusia", cat: "Ultime realtà", aka: ["seconda venuta"],
      def: "Il ritorno glorioso di Cristo alla fine dei tempi per giudicare i vivi e i morti. «Vieni, Signore Gesù» (Ap 22,20).",
      vedi: ["giudizio universale", "risurrezione della carne"] },
    { term: "indulgenza", cat: "Ultime realtà", aka: ["indulgenze"],
      def: "Remissione delle «conseguenze» (pena temporale) del peccato già perdonato, attingendo al tesoro spirituale della Chiesa. L'antico abuso di «venderle» fu condannato.",
      vedi: ["Purgatorio", "Riconciliazione"] },

    // --- Chiesa e concetti generali ---
    { term: "dogma", cat: "Chiesa", aka: ["dogmatico", "dogmi"],
      def: "Verità di fede definita solennemente dalla Chiesa come rivelata da Dio, da credere da tutti i fedeli.",
      vedi: ["Magistero", "infallibilità"] },
    { term: "infallibilità", cat: "Chiesa", aka: ["infallibile", "ex cathedra"],
      def: "Il dono per cui il Papa (o il Concilio), quando definisce solennemente una verità di fede o morale, è preservato dall'errore. NON significa impeccabilità.",
      vedi: ["Magistero", "dogma"] },
    { term: "ecumenismo", cat: "Chiesa", aka: ["ecumenico"],
      def: "L'impegno per l'unità di tutti i cristiani (cattolici, ortodossi, protestanti), nel rispetto e nella ricerca della verità. «Che tutti siano una cosa sola» (Gv 17,21).",
      vedi: ["scisma"] },
    { term: "scisma", cat: "Chiesa", aka: ["scismatico"],
      def: "La rottura della comunione con la Chiesa. Lo scisma d'Oriente (1054) separò cattolici e ortodossi.",
      vedi: ["ecumenismo"] },
    { term: "metánoia", cat: "Concetti generali", aka: ["metanoia", "conversione"],
      def: "Greco «cambiare mente»: la conversione come cambiamento profondo del modo di pensare e di vivere, non solo rimorso. «Convertitevi» (Mc 1,15).",
      vedi: ["grazia"] },
    { term: "Regno di Dio", cat: "Concetti generali", aka: ["regno dei cieli", "basileía", "regno di Dio"],
      def: "La regalità/sovranità di Dio «in azione», già cominciata in Gesù — non un luogo né il cielo dopo la morte. «Già e non ancora».",
      vedi: ["metánoia"] },
    { term: "Pasqua", cat: "Concetti generali", aka: ["pasquale", "mistero pasquale"],
      def: "Il «passaggio»: nell'AT la liberazione dall'Egitto; nel NT la morte e risurrezione di Cristo, centro della fede e di ogni sacramento.",
      vedi: ["Eucaristia", "redenzione"] }
  ];

  /* ---------------- INDICE ---------------- */
  var aliasList = [];
  GLOSSARIO.forEach(function (e) {
    // i termini "noauto" (parole troppo comuni) non si auto-collegano col termine nudo,
    // ma restano consultabili nel glossario e raggiungibili tramite gli alias specifici.
    var keys = (e.noauto ? [] : [e.term]).concat(e.aka || []);
    keys.forEach(function (k) {
      if (k && k.trim()) aliasList.push({ key: k.toLowerCase(), canon: e.term });
    });
  });
  // più lunghi prima (per preferire match più specifici)
  aliasList.sort(function (a, b) { return b.key.length - a.key.length; });
  var byTerm = {};
  GLOSSARIO.forEach(function (e) { byTerm[e.term] = e; });

  function isLetter(ch) { return !!ch && /[A-Za-zÀ-ÿͰ-Ͽ]/.test(ch); }

  /* ---------------- STILE ---------------- */
  var css = ''
    + '.gloss-term{color:var(--accent,#8b5a2b);border-bottom:1px dotted var(--accent-soft,#c9a77a);cursor:help;}'
    + '.gloss-term:hover{background:var(--highlight,#fff4dc);}'
    + '#gloss-fab{position:fixed;right:16px;bottom:16px;z-index:99998;background:var(--accent,#8b5a2b);color:#fff;border:none;border-radius:999px;padding:.7rem 1.1rem;font-size:.95rem;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,.2);font-family:inherit;}'
    + '#gloss-fab:hover{filter:brightness(1.08);}'
    + '#gloss-overlay{position:fixed;inset:0;background:rgba(20,16,12,.45);z-index:99999;display:none;align-items:flex-start;justify-content:center;padding:5vh 1rem;}'
    + '#gloss-overlay.open{display:flex;}'
    + '#gloss-box{background:var(--bg-elev,#fff);color:var(--ink,#2b2420);max-width:640px;width:100%;max-height:86vh;overflow:auto;border-radius:16px;padding:1.4rem 1.5rem;box-shadow:0 20px 60px rgba(0,0,0,.3);font-family:var(--sans,-apple-system,Arial,sans-serif);}'
    + '#gloss-box h3{font-family:var(--serif,Georgia,serif);color:var(--accent,#8b5a2b);margin:.1rem 0 .2rem;font-size:1.7rem;}'
    + '#gloss-box .cat{font-size:.72rem;text-transform:uppercase;letter-spacing:.05em;color:#fff;background:var(--accent-soft,#c9a77a);border-radius:999px;padding:.12rem .6rem;display:inline-block;margin-bottom:.6rem;}'
    + '#gloss-box .def{font-size:1.02rem;line-height:1.55;}'
    + '#gloss-box .vedi{margin-top:1rem;font-size:.9rem;color:var(--ink-soft,#6b5f56);}'
    + '#gloss-box .vedi a{color:var(--accent,#8b5a2b);cursor:pointer;text-decoration:underline;margin-right:.5rem;}'
    + '#gloss-box .close{float:right;border:none;background:transparent;font-size:1.5rem;cursor:pointer;color:var(--ink-soft,#6b5f56);line-height:1;}'
    + '.gloss-search{width:100%;padding:.6rem .8rem;border:1px solid var(--line,#e6dccb);border-radius:10px;font-size:1rem;margin:.4rem 0 1rem;font-family:inherit;box-sizing:border-box;}'
    + '.gloss-sub{color:var(--ink-soft,#6b5f56);font-style:italic;margin:.1rem 0 .3rem;font-size:.92rem;}'
    + '.gloss-list .gi{padding:.6rem .2rem;border-bottom:1px solid var(--line,#e6dccb);cursor:pointer;}'
    + '.gloss-list .gi:hover{background:var(--highlight,#fff4dc);}'
    + '.gloss-list .gi b{font-family:var(--serif,Georgia,serif);color:var(--accent,#8b5a2b);font-size:1.1rem;}'
    + '.gloss-list .gi .gc{float:right;font-size:.7rem;text-transform:uppercase;letter-spacing:.04em;color:#fff;background:var(--accent-soft,#c9a77a);border-radius:999px;padding:.05rem .5rem;}'
    + '.gloss-list .gi span.gd{display:block;font-size:.88rem;color:var(--ink-soft,#6b5f56);margin-top:.15rem;}'
    + '#glossario .gloss-intro{font-family:var(--serif,Georgia,serif);font-size:1.6rem;color:var(--accent,#8b5a2b);margin:.1rem 0 .2rem;}'
    + '#glossario h3{font-family:var(--serif,Georgia,serif);color:var(--ink,#2b2420);font-size:1.3rem;}';
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  /* ---------------- MODALE ---------------- */
  var overlay, box;
  function ensureModal() {
    if (overlay) return;
    overlay = document.createElement('div');
    overlay.id = 'gloss-overlay';
    box = document.createElement('div');
    box.id = 'gloss-box';
    overlay.appendChild(box);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) closeModal(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });
    document.body.appendChild(overlay);
  }
  function closeModal() { if (overlay) overlay.classList.remove('open'); }
  function esc(s) { return String(s).replace(/[&<>]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]; }); }

  function openTerm(canon) {
    var e = byTerm[canon]; if (!e) return;
    ensureModal();
    var vedi = (e.vedi || []).filter(function (v) { return byTerm[v]; });
    box.innerHTML = '<button class="close" aria-label="Chiudi">×</button>'
      + '<span class="cat">' + esc(e.cat) + '</span>'
      + '<h3>' + esc(e.term) + '</h3>'
      + '<div class="def">' + esc(e.def) + '</div>'
      + (vedi.length ? '<div class="vedi"><strong>Vedi anche:</strong> ' + vedi.map(function (v) {
          return '<a data-go="' + esc(v) + '">' + esc(v) + '</a>'; }).join('') + '</div>' : '');
    box.querySelector('.close').onclick = closeModal;
    Array.prototype.forEach.call(box.querySelectorAll('[data-go]'), function (a) {
      a.onclick = function () { openTerm(a.getAttribute('data-go')); };
    });
    overlay.classList.add('open');
    box.scrollTop = 0;
  }

  // costruisce l'interfaccia "sfoglia + cerca" in un contenitore qualsiasi (modale o pannello-tab)
  function buildBrowse(container, opts) {
    opts = opts || {};
    var sorted = GLOSSARIO.slice().sort(function (a, b) { return a.term.localeCompare(b.term, 'it'); });
    function rows(filter) {
      var f = (filter || '').toLowerCase();
      return sorted.filter(function (e) {
        if (!f) return true;
        return (e.term + ' ' + (e.aka || []).join(' ') + ' ' + e.def).toLowerCase().indexOf(f) >= 0;
      }).map(function (e) {
        return '<div class="gi" data-go="' + esc(e.term) + '"><b>' + esc(e.term) + '</b>'
          + '<span class="gc">' + esc(e.cat) + '</span>'
          + '<span class="gd">' + esc(e.def) + '</span></div>';
      }).join('') || '<p style="color:#6b5f56">Nessun termine trovato.</p>';
    }
    container.innerHTML = (opts.closeBtn ? '<button class="close" aria-label="Chiudi">×</button>' : '')
      + (opts.bigTitle ? '<p class="gloss-intro">Glossario della fede</p>' : '<h3>Glossario della fede</h3>')
      + '<p class="gloss-sub">' + GLOSSARIO.length + ' voci · cerca un termine o cliccane uno per la definizione e i rimandi.</p>'
      + '<input class="gloss-search" type="search" placeholder="Cerca un termine o concetto…" />'
      + '<div class="gloss-list">' + rows('') + '</div>';
    if (opts.closeBtn) { var c = container.querySelector('.close'); if (c) c.onclick = closeModal; }
    var search = container.querySelector('.gloss-search');
    var list = container.querySelector('.gloss-list');
    function bind() {
      Array.prototype.forEach.call(list.querySelectorAll('.gi'), function (gi) {
        gi.onclick = function () { openTerm(gi.getAttribute('data-go')); };
      });
    }
    bind();
    search.addEventListener('input', function () { list.innerHTML = rows(search.value); bind(); });
    if (opts.focus) setTimeout(function () { try { search.focus(); } catch (e) {} }, 50);
  }

  function openBrowse() {
    ensureModal();
    buildBrowse(box, { closeBtn: true, focus: true });
    overlay.classList.add('open');
    box.scrollTop = 0;
  }

  /* ---------------- AUTO-LINK ---------------- */
  var SKIP = { A: 1, BUTTON: 1, H1: 1, H2: 1, H3: 1, H4: 1, H5: 1, SUMMARY: 1, SCRIPT: 1, STYLE: 1, INPUT: 1, TEXTAREA: 1 };
  function skipNode(node) {
    var p = node.parentNode;
    while (p && p.nodeType === 1) {
      if (SKIP[p.tagName]) return true;
      if (p.classList && (p.classList.contains('gloss-term') || p.id === 'gloss-box' || p.id === 'gloss-overlay')) return true;
      p = p.parentNode;
    }
    return false;
  }
  function findWord(lower, key, from) {
    var i = lower.indexOf(key, from || 0);
    while (i >= 0) {
      var before = i > 0 ? lower.charAt(i - 1) : '';
      var after = lower.charAt(i + key.length);
      if (!isLetter(before) && !isLetter(after)) return i;
      i = lower.indexOf(key, i + 1);
    }
    return -1;
  }
  function linkContainer(root) {
    if (!root) return;
    var linked = {};
    var nodes = [];
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
    var n;
    while ((n = walker.nextNode())) {
      if (n.nodeValue && n.nodeValue.trim().length > 2 && !skipNode(n)) nodes.push(n);
    }
    nodes.forEach(function (node) { scan(node, linked); });
  }
  function scan(node, linked) {
    var text = node.nodeValue, lower = text.toLowerCase();
    var best = -1, bestLen = 0, bestCanon = null;
    for (var k = 0; k < aliasList.length; k++) {
      var a = aliasList[k];
      if (linked[a.canon]) continue;
      var idx = findWord(lower, a.key);
      if (idx >= 0 && (best < 0 || idx < best || (idx === best && a.key.length > bestLen))) {
        best = idx; bestLen = a.key.length; bestCanon = a.canon;
      }
    }
    if (best < 0) return;
    var span = document.createElement('span');
    span.className = 'gloss-term';
    span.setAttribute('data-term', bestCanon);
    span.title = 'Glossario: ' + bestCanon;
    span.textContent = text.slice(best, best + bestLen);
    var after = document.createTextNode(text.slice(best + bestLen));
    var before = document.createTextNode(text.slice(0, best));
    var parent = node.parentNode;
    parent.insertBefore(before, node);
    parent.insertBefore(span, node);
    parent.insertBefore(after, node);
    parent.removeChild(node);
    linked[bestCanon] = true;
    scan(after, linked);
  }

  // delega click sui termini
  document.addEventListener('click', function (e) {
    var t = e.target;
    if (t && t.classList && t.classList.contains('gloss-term')) {
      e.preventDefault();
      openTerm(t.getAttribute('data-term'));
    }
  });

  /* ---------------- OSSERVA E AGGANCIA ---------------- */
  var TARGETS = ['#domande']; // contenitori in cui linkare i concetti
  var scheduled = false, observer = null;
  function run() {
    scheduled = false;
    if (observer) observer.disconnect();
    try {
      TARGETS.forEach(function (sel) {
        var el = document.querySelector(sel);
        if (el && el.textContent && el.textContent.length > 50) linkContainer(el);
      });
    } catch (err) { /* mai bloccare l'app */ }
    if (observer) observe();
  }

  // ---- TAB SUPERIORE "GLOSSARIO" (sempre consultabile) ----
  var navGuardSet = false;
  function activateGlossTab() {
    var btn = document.getElementById('gloss-tab');
    var panel = document.getElementById('glossario');
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
    // pannello
    if (!document.getElementById('glossario')) {
      var panel = document.createElement('section');
      panel.id = 'glossario';
      panel.className = 'panel';
      main.appendChild(panel);
      buildBrowse(panel, { bigTitle: true });
    }
    // bottone-tab
    if (!document.getElementById('gloss-tab')) {
      var btn = document.createElement('button');
      btn.id = 'gloss-tab';
      btn.className = 'tab';
      btn.setAttribute('role', 'tab');
      btn.setAttribute('data-tab', 'glossario');
      btn.textContent = '📖 Glossario';
      btn.addEventListener('click', function (e) { e.preventDefault(); activateGlossTab(); });
      nav.appendChild(btn);
    }
    // se si clicca un'altra tab, nascondi la nostra (rete di sicurezza)
    if (!navGuardSet) {
      navGuardSet = true;
      nav.addEventListener('click', function (e) {
        var t = e.target && e.target.closest ? e.target.closest('.tab') : null;
        if (t && t.id !== 'gloss-tab') {
          var b = document.getElementById('gloss-tab'); var p = document.getElementById('glossario');
          if (b) b.classList.remove('active');
          if (p) p.classList.remove('active');
        }
      });
    }
  }

  function init() {
    ensureModal();
    var fab = document.createElement('button');
    fab.id = 'gloss-fab';
    fab.type = 'button';
    fab.textContent = '📖 Glossario';
    fab.title = 'Apri il glossario della fede';
    fab.onclick = openBrowse;
    document.body.appendChild(fab);
    observe();
    schedule();
  }
  function schedule() { if (!scheduled) { scheduled = true; setTimeout(run, 300); } }
  function observe() {
    var main = document.querySelector('main') || document.body;
    observer = new MutationObserver(function () { schedule(); });
    observer.observe(main, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }

  // esponi per debug
  window.GLOSSARIO = GLOSSARIO;
  window.__glossOpen = openTerm;
})();
