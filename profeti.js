// =============================================================
//  PROFETI — studio interattivo e dettagliato di tutti i profeti
//  Per ogni profeta: periodo di predicazione, unicità, contesto,
//  cosa ha profetizzato, insegnamenti, versetti importanti e come
//  ha preparato la venuta di Gesù. Autosufficiente (stile .pf-*).
// =============================================================

const PROFETI = [
  {
    gruppo: "Profeti Maggiori",
    nota: "I quattro grandi libri profetici per estensione e influenza.",
    profeti: [
      {
        nome: "Isaia",
        periodo: "~740-700 a.C. — sotto i re di Giuda Ozia, Iotam, Acaz ed Ezechia (vocazione «nell'anno della morte di re Ozia», Is 6,1).",
        unicita: "È «il profeta-evangelista»: nessun altro annuncia il Messia con tanta precisione e ampiezza. Il libro (66 capitoli) è una piccola Bibbia: Is 1-39 (giudizio, «Primo Isaia»), Is 40-55 (consolazione dell'esilio), Is 56-66 (la nuova Gerusalemme).",
        contesto: "Profeta colto e di corte a Gerusalemme, opera mentre l'Assiria minaccia e travolge il regno del Nord (722 a.C.). Chiama alla fiducia in Dio invece che nelle alleanze politiche, denuncia il culto vuoto e l'ingiustizia, e tiene accesa la speranza di un Re e di un Servo che salveranno il popolo.",
        profezie: [
          "L'Emmanuele: «La vergine concepirà e partorirà un figlio» (Is 7,14), segno dato al re Acaz.",
          "Il Re-bambino dal regno eterno: «Un bambino è nato per noi… Consigliere mirabile, Dio potente, Principe della pace» (Is 9,5-6).",
          "Il germoglio dal tronco di Iesse su cui riposano i sette doni dello Spirito, e la pace messianica del lupo col agnello (Is 11).",
          "I quattro «Canti del Servo del Signore» (Is 42; 49; 50; 52,13-53,12): il giusto che, sofferente e silenzioso, porta i peccati di molti.",
          "Il ritorno dall'esilio e una «via nel deserto» (Is 40); cieli nuovi e terra nuova (Is 65,17)."
        ],
        insegnamenti: [
          "La santità di Dio: di fronte al «tre volte Santo» l'uomo scopre il proprio peccato e riceve il perdono (Is 6).",
          "La fede come fiducia, non calcolo politico: «Se non crederete, non avrete stabilità» (Is 7,9).",
          "Il culto è vano senza la giustizia: «Smettete di fare il male, imparate a fare il bene, soccorrete l'oppresso» (Is 1,16-17).",
          "Dio consola e porta sulle spalle il suo popolo come un pastore (Is 40,11) e non si stanca mai (Is 40,28-31)."
        ],
        versetti: [
          { r: "Is 6,3", t: "«Santo, santo, santo è il Signore degli eserciti. Tutta la terra è piena della sua gloria»." },
          { r: "Is 7,14", t: "«Ecco: la vergine concepirà e partorirà un figlio, che chiamerà Emmanuele»." },
          { r: "Is 9,5", t: "«Un bambino è nato per noi, ci è stato dato un figlio… Principe della pace»." },
          { r: "Is 40,3", t: "«Una voce grida: nel deserto preparate la via al Signore»." },
          { r: "Is 53,5", t: "«Egli è stato trafitto per le nostre colpe… per le sue piaghe noi siamo stati guariti»." },
          { r: "Is 61,1", t: "«Lo Spirito del Signore Dio è su di me… per portare il lieto annuncio ai poveri»." }
        ],
        cristo: "È il profeta più citato dai Vangeli. Is 7,14 è applicato alla nascita verginale (Mt 1,23); il Battista è «la voce che grida nel deserto» (Is 40,3; Gv 1,23); Gesù a Nazaret legge Is 61 e dice «oggi si è compiuta» (Lc 4,21); e soprattutto il Servo sofferente di Is 53 è la più nitida profezia della passione, letta dalla Chiesa nel Venerdì Santo e applicata a Gesù già negli Atti (At 8,32-35)."
      },
      {
        nome: "Geremia",
        periodo: "~627-586 a.C. — dal re Giosia fino alla distruzione di Gerusalemme; predica per oltre 40 anni.",
        unicita: "«Il profeta piangente» e il più autobiografico: nelle sue «confessioni» litiga con Dio, si sente sedotto e tradito, eppure non può tacere. Annuncia la promessa più dolce dell'AT: la nuova alleanza.",
        contesto: "Chiamato giovanissimo, vive il crollo di Giuda sotto Babilonia. Predica la sottomissione a Babilonia come volontà di Dio: per questo è accusato di tradimento, imprigionato e gettato in una cisterna. Vede realizzarsi tutto ciò che aveva annunciato.",
        profezie: [
          "La distruzione di Gerusalemme e del Tempio e l'esilio a Babilonia, con il ritorno dopo 70 anni (Ger 25,11; 29,10).",
          "La NUOVA ALLEANZA scritta nei cuori, non più sulla pietra (Ger 31,31-34).",
          "Il «germoglio giusto» di Davide, re sapiente e giusto (Ger 23,5-6)."
        ],
        insegnamenti: [
          "Dio ci conosce e ci consacra fin dal grembo materno (Ger 1,5).",
          "Affidarsi a Dio è essere «albero piantato lungo l'acqua»; confidare nell'uomo è un arbusto nel deserto (Ger 17,5-8).",
          "Dio ha «progetti di pace e non di sventura» anche nella prova (Ger 29,11).",
          "La religione è relazione del cuore, non rito esteriore (Ger 7: il discorso del Tempio)."
        ],
        versetti: [
          { r: "Ger 1,5", t: "«Prima di formarti nel grembo materno, ti conoscevo, prima che tu uscissi alla luce, ti avevo consacrato»." },
          { r: "Ger 31,33", t: "«Porrò la mia legge dentro di loro, la scriverò sul loro cuore»." },
          { r: "Ger 29,11", t: "«Io ho progetti di pace e non di sventura, per concedervi un futuro pieno di speranza»." }
        ],
        cristo: "La «nuova alleanza» di Ger 31 è proclamata da Gesù nell'Ultima Cena — «questo calice è la nuova alleanza nel mio sangue» (Lc 22,20) — e commentata per intero dalla Lettera agli Ebrei (Eb 8). Geremia, giusto perseguitato e rifiutato dai suoi, è egli stesso figura di Cristo sofferente."
      },
      {
        nome: "Ezechiele",
        periodo: "~593-571 a.C. — sacerdote deportato, profetizza fra gli esuli a Babilonia.",
        unicita: "Il profeta delle grandi visioni e dei gesti simbolici: il carro della gloria di Dio, le ossa inaridite, il nuovo Tempio. Mostra che Dio è presente anche lontano dalla terra santa.",
        contesto: "Tra gli ebrei deportati che hanno perso tutto — terra, re, Tempio — annuncia prima il giudizio (la gloria di Dio lascia il Tempio) e poi, dopo la caduta di Gerusalemme, una speranza potente di rinascita: Dio stesso radunerà e rinnoverà il suo popolo.",
        profezie: [
          "La risurrezione del popolo dalla «valle delle ossa inaridite» (Ez 37).",
          "Il cuore nuovo e lo Spirito nuovo dentro la persona (Ez 36,26-27).",
          "Il nuovo Tempio da cui sgorga un fiume che dà vita (Ez 47), ripreso dall'Apocalisse."
        ],
        insegnamenti: [
          "Responsabilità personale: ciascuno risponde delle proprie scelte, non delle colpe dei padri (Ez 18).",
          "Dio è il «buon pastore» che cerca le pecore disperse e fascia quella ferita (Ez 34).",
          "Dio non gode della morte del peccatore, ma che si converta e viva (Ez 33,11)."
        ],
        versetti: [
          { r: "Ez 36,26", t: "«Vi darò un cuore nuovo, metterò dentro di voi uno spirito nuovo, toglierò il cuore di pietra e vi darò un cuore di carne»." },
          { r: "Ez 37,5", t: "«Ecco, io faccio entrare in voi lo spirito e rivivrete»." },
          { r: "Ez 34,11", t: "«Io stesso cercherò le mie pecore e ne avrò cura»." }
        ],
        cristo: "Il «buon pastore» di Ez 34 si compie in Gesù («Io sono il buon pastore», Gv 10). Il cuore nuovo e lo Spirito (Ez 36) sono donati nel Battesimo e a Pentecoste; il fiume del Tempio (Ez 47) diventa l'acqua viva che sgorga dal costato di Cristo (Gv 7,38; 19,34)."
      },
      {
        nome: "Daniele",
        periodo: "VI sec. a.C. (ambientazione) — alla corte di Babilonia e di Persia, durante l'esilio.",
        unicita: "Profeta «apocalittico»: unisce racconti di fede eroica a visioni grandiose sui regni del mondo e sul Regno eterno di Dio. Apre con forza l'attesa della risurrezione.",
        contesto: "Giovane ebreo fedele alla corte pagana, rifiuta ogni compromesso con l'idolatria. I suoi racconti (la fornace, la fossa dei leoni, i sogni del re) insegnano che Dio è Signore della storia e protegge i fedeli sotto persecuzione.",
        profezie: [
          "Il «Figlio dell'uomo» che riceve un regno eterno che non sarà mai distrutto (Dn 7,13-14).",
          "I regni del mondo che passano e la «pietra» — il Regno di Dio — che riempie la terra (Dn 2).",
          "La risurrezione dei morti: «Molti si risveglieranno, gli uni alla vita eterna» (Dn 12,2)."
        ],
        insegnamenti: [
          "Fedeltà assoluta a Dio anche a costo della vita: «il nostro Dio può salvarci… ma anche se non lo facesse, non serviremo i tuoi dèi» (Dn 3,17-18).",
          "La vera sapienza viene da Dio, che rivela i misteri (Dn 2,20-22).",
          "I potenti del mondo rendono conto a Dio (la mano che scrive sul muro, Dn 5)."
        ],
        versetti: [
          { r: "Dn 7,13-14", t: "«Veniva, sulle nubi del cielo, uno simile a un figlio d'uomo… gli furono dati potere, gloria e regno»." },
          { r: "Dn 12,2", t: "«Molti che dormono nella polvere si risveglieranno: gli uni alla vita eterna»." },
          { r: "Dn 3,17-18", t: "«Anche se [Dio] non ci liberasse, sappi, o re, che noi non serviremo i tuoi dèi»." }
        ],
        cristo: "«Figlio dell'uomo» (Dn 7) è il titolo che Gesù usa più spesso per sé, e lo cita davanti al sommo sacerdote nel processo (Mc 14,62). Daniele apre l'attesa della risurrezione e del Regno eterno che Gesù annuncia e inaugura."
      }
    ]
  },
  {
    gruppo: "Profeti Minori",
    nota: "I «Dodici»: minori solo per lunghezza, non per importanza.",
    profeti: [
      {
        nome: "Osea",
        periodo: "~750-722 a.C. — regno del Nord (Israele), poco prima della caduta di Samaria.",
        unicita: "Fa del proprio matrimonio con una donna infedele la parabola vivente dell'amore di Dio per un popolo adultero.",
        contesto: "In un'epoca di idolatria e instabilità, Osea sperimenta nella propria vita il dolore del tradimento e la forza del perdono, e lo proclama come immagine del legame tra Dio e Israele.",
        profezie: ["Dopo il castigo, Dio «riconquisterà» la sposa nel deserto e la renderà sua per sempre (Os 2).", "«Dall'Egitto ho chiamato mio figlio» (Os 11,1)."],
        insegnamenti: ["Dio vuole «l'amore e non il sacrificio, la conoscenza di Dio più degli olocausti» (Os 6,6).", "La tenerezza di Dio Padre che insegna a camminare al figlio (Os 11)."],
        versetti: [
          { r: "Os 6,6", t: "«Voglio l'amore e non il sacrificio, la conoscenza di Dio più degli olocausti»." },
          { r: "Os 11,1", t: "«Quando Israele era fanciullo, io l'ho amato e dall'Egitto ho chiamato mio figlio»." }
        ],
        cristo: "Matteo applica Os 11,1 al ritorno di Gesù bambino dall'Egitto (Mt 2,15). Os 6,6 è citato due volte da Gesù a difesa della misericordia (Mt 9,13; 12,7). L'immagine di Dio-Sposo culmina in Cristo, Sposo della Chiesa."
      },
      {
        nome: "Gioele",
        periodo: "incerto (forse V-IV sec. a.C.) — Giuda.",
        unicita: "Da una catastrofe naturale (un'invasione di cavallette) trae l'annuncio del «giorno del Signore» e dell'effusione universale dello Spirito.",
        contesto: "Invita a una conversione sincera del cuore e promette che Dio riverserà il suo Spirito non su pochi, ma su «ogni carne».",
        profezie: ["Effusione dello Spirito «sopra ogni uomo», con sogni e profezie (Gl 3,1-2).", "Il «giorno del Signore», di giudizio e di salvezza."],
        insegnamenti: ["Convertirsi nel profondo: «Laceratevi il cuore e non le vesti» (Gl 2,13).", "Dio è «misericordioso e pietoso, lento all'ira e di grande amore»."],
        versetti: [
          { r: "Gl 3,1", t: "«Effonderò il mio spirito sopra ogni uomo e diventeranno profeti i vostri figli e le vostre figlie»." },
          { r: "Gl 2,13", t: "«Ritornate a me con tutto il cuore… laceratevi il cuore e non le vesti»." }
        ],
        cristo: "Pietro, il giorno di Pentecoste, dichiara compiuta la profezia di Gioele: «Questo è ciò che fu detto per mezzo del profeta Gioele» (At 2,16-21). Lo Spirito promesso è quello che Cristo dona alla Chiesa."
      },
      {
        nome: "Amos",
        periodo: "~760 a.C. — pastore di Tekoa (Giuda) inviato a profetizzare nel Nord (Israele).",
        unicita: "Il profeta della giustizia sociale: il primo a gridare con forza che il culto senza giustizia è un'offesa a Dio.",
        contesto: "In un periodo di prosperità e disuguaglianza, denuncia i ricchi che opprimono i poveri «per un paio di sandali» e frequentano i santuari con la coscienza sporca.",
        profezie: ["La caduta del regno del Nord per la sua ingiustizia.", "La ricostruzione finale della «capanna di Davide» caduta (Am 9,11)."],
        insegnamenti: ["Dio rifiuta il culto di chi calpesta il povero: «Lontano da me il frastuono dei tuoi canti» (Am 5,23).", "La religione vera scorre come «un fiume di giustizia»."],
        versetti: [
          { r: "Am 5,24", t: "«Piuttosto scorra come acqua il diritto e la giustizia come un torrente perenne»." },
          { r: "Am 5,21", t: "«Io detesto, respingo le vostre feste… ma fate scorrere la giustizia»." }
        ],
        cristo: "La sete di giustizia di Amos risuona nelle Beatitudini («beati gli affamati di giustizia») e nel giudizio finale, dove Gesù si identifica con l'affamato e il carcerato (Mt 25). Giacomo cita la «capanna di Davide» ricostruita (At 15,16)."
      },
      {
        nome: "Abdia",
        periodo: "~VI sec. a.C. — dopo la caduta di Gerusalemme (587 a.C.).",
        unicita: "Il libro più breve dell'Antico Testamento (un solo capitolo): oracolo contro Edom, che gioì della rovina di Gerusalemme.",
        contesto: "Edom (i discendenti di Esaù) approfittò della disgrazia del «fratello» Giacobbe-Israele. Abdia annuncia che l'orgoglio dei potenti sarà abbattuto e il Regno apparterrà a Dio.",
        profezie: ["La rovina di Edom per la sua superbia.", "«Il regno apparterrà al Signore» (Abd 1,21)."],
        insegnamenti: ["L'orgoglio inganna e precede la caduta (Abd 1,3).", "Chi gode della sventura altrui ne risponde."],
        versetti: [
          { r: "Abd 1,15", t: "«Come hai fatto, così sarà fatto a te; la tua condotta ricadrà sul tuo capo»." },
          { r: "Abd 1,21", t: "«E il regno apparterrà al Signore»." }
        ],
        cristo: "Annuncia il rovesciamento dei superbi e l'esaltazione degli umili che Maria canterà nel Magnificat (Lc 1,52) e che si compie nel Regno di Cristo."
      },
      {
        nome: "Giona",
        periodo: "~VIII sec. a.C. (figura) — missione verso Ninive, capitale assira.",
        unicita: "L'unico libro profetico che è un racconto su un profeta riluttante: Giona fugge da Dio e si arrabbia perché Dio è troppo misericordioso.",
        contesto: "Giona non vuole predicare ai nemici di Israele. Inghiottito da un grande pesce e poi vomitato, predica controvoglia e Ninive si converte. Il libro insegna che la misericordia di Dio non ha confini etnici.",
        profezie: ["La conversione possibile anche dei pagani e dei nemici.", "Il «segno» dei tre giorni nel ventre del pesce."],
        insegnamenti: ["Non si può fuggire da Dio (Gn 1).", "Dio ha pietà di tutti, anche di chi noi escludiamo (Gn 4)."],
        versetti: [
          { r: "Gn 2,1", t: "«Giona restò nel ventre del pesce tre giorni e tre notti»." },
          { r: "Gn 4,2", t: "«So che tu sei un Dio misericordioso e pietoso, lento all'ira, di grande amore»." }
        ],
        cristo: "Gesù richiama il «segno di Giona»: «Come Giona rimase tre giorni nel ventre del pesce, così il Figlio dell'uomo resterà tre giorni nel cuore della terra» (Mt 12,40): la sua morte e risurrezione."
      },
      {
        nome: "Michea",
        periodo: "~740-700 a.C. — Giuda, contemporaneo di Isaia.",
        unicita: "Unisce la denuncia sociale all'annuncio preciso del luogo di nascita del Messia: Betlemme.",
        contesto: "Profeta di campagna che difende i contadini sfruttati e attacca i capi corrotti e i falsi profeti, ma annuncia anche il pastore che verrà da Betlemme a pascere il popolo.",
        profezie: ["Il Messia nascerà a Betlemme, «le cui origini sono dall'antichità» (Mi 5,1).", "La pace messianica: «spade trasformate in aratri» (Mi 4,3)."],
        insegnamenti: ["L'essenza della religione: «praticare la giustizia, amare la bontà, camminare umilmente con il tuo Dio» (Mi 6,8)."],
        versetti: [
          { r: "Mi 5,1", t: "«E tu, Betlemme di Èfrata… da te uscirà colui che deve essere il dominatore in Israele»." },
          { r: "Mi 6,8", t: "«Uomo, ti è stato insegnato ciò che è buono: praticare la giustizia, amare la bontà, camminare umilmente con il tuo Dio»." }
        ],
        cristo: "Mi 5,1 è la profezia citata dai sommi sacerdoti per indicare ai Magi dove nasce il Messia (Mt 2,5-6): si compie nella nascita di Gesù a Betlemme."
      },
      {
        nome: "Naum",
        periodo: "~VII sec. a.C. — poco prima della caduta di Ninive (612 a.C.).",
        unicita: "Annuncia con immagini potenti la fine dell'oppressore assiro: Dio è giudice della storia e i tiranni non durano.",
        contesto: "Mentre Ninive sembra invincibile, Naum proclama che la sua violenza sarà fermata. È una parola di consolazione per i popoli oppressi.",
        profezie: ["La distruzione di Ninive, la «città di sangue»."],
        insegnamenti: ["Dio è rifugio per chi si fida nel giorno dell'angoscia (Na 1,7), ma giudica i violenti."],
        versetti: [
          { r: "Na 1,7", t: "«Buono è il Signore, rifugio nel giorno dell'angoscia: conosce quelli che confidano in lui»." }
        ],
        cristo: "Mostra Dio come giudice giusto della storia, tema che culmina nel ritorno glorioso di Cristo a giudicare i vivi e i morti."
      },
      {
        nome: "Abacuc",
        periodo: "~600 a.C. — Giuda, all'ascesa di Babilonia.",
        unicita: "Invece di parlare al popolo, dialoga e discute con Dio sul problema del male: perché i malvagi prosperano e il giusto soffre?",
        contesto: "Abacuc porta a Dio le sue domande senza risposta e riceve un invito alla fiducia che attende: «il giusto vivrà per la sua fede».",
        profezie: ["La caduta dell'oppressore babilonese e il trionfo finale della gloria di Dio (Ab 2,14)."],
        insegnamenti: ["Si può portare a Dio il «perché» del male.", "La fede che resta anche senza risposte e senza raccolti (Ab 3,17-18)."],
        versetti: [
          { r: "Ab 2,4", t: "«Il giusto vivrà per la sua fede»." },
          { r: "Ab 3,18", t: "«Anche se il fico non germoglierà… io gioirò nel Signore, esulterò in Dio mio salvatore»." }
        ],
        cristo: "«Il giusto vivrà per fede» (Ab 2,4) diventa il cuore del Vangelo annunciato da Paolo: siamo giustificati per la fede in Cristo (Rm 1,17; Gal 3,11; Eb 10,38)."
      },
      {
        nome: "Sofonia",
        periodo: "~640-620 a.C. — Giuda, sotto re Giosia, prima della riforma.",
        unicita: "Profeta del «giorno del Signore» (il celebre Dies irae), ma anche della gioia del «resto» umile salvato da Dio.",
        contesto: "Denuncia l'idolatria e l'indifferenza, ma promette che Dio conserverà un popolo povero e umile che confiderà nel suo nome.",
        profezie: ["Il giudizio purificatore del «giorno del Signore».", "Un «resto» umile che sarà salvato (Sof 3,12)."],
        insegnamenti: ["Cercare il Signore con umiltà e giustizia (Sof 2,3).", "Dio esulta di gioia per il suo popolo."],
        versetti: [
          { r: "Sof 3,17", t: "«Il Signore tuo Dio è in mezzo a te… gioirà per te, ti rinnoverà con il suo amore, esulterà per te con grida di gioia»." },
          { r: "Sof 2,3", t: "«Cercate il Signore, voi tutti, umili della terra»." }
        ],
        cristo: "Il «resto» povero e umile anticipa i «poveri in spirito» delle Beatitudini; Maria, l'umile serva del Signore, ne è la figura perfetta."
      },
      {
        nome: "Aggeo",
        periodo: "520 a.C. — dopo il ritorno dall'esilio, a Gerusalemme.",
        unicita: "Profeta della ricostruzione: con poche e dirette parole sprona il popolo scoraggiato a riedificare il Tempio.",
        contesto: "Tornati dall'esilio, gli ebrei pensano alle proprie case e trascurano la casa di Dio. Aggeo li richiama a rimettere Dio al primo posto.",
        profezie: ["La gloria del nuovo Tempio sarà più grande del primo (Ag 2,9).", "Zorobabele, «sigillo» e segno della speranza davidica (Ag 2,23)."],
        insegnamenti: ["Rimettere Dio al primo posto riordina tutto il resto (Ag 1,4-9)."],
        versetti: [
          { r: "Ag 1,4", t: "«È forse tempo per voi di abitare nelle vostre case… mentre questa casa è in rovina?»" },
          { r: "Ag 2,9", t: "«La gloria futura di questa casa sarà più grande di quella passata»." }
        ],
        cristo: "La «gloria maggiore» del Tempio si compie quando Gesù — il vero Tempio (Gv 2,19-21) — vi entra: Dio stesso visita il suo santuario."
      },
      {
        nome: "Zaccaria",
        periodo: "520-518 a.C. — dopo l'esilio, contemporaneo di Aggeo.",
        unicita: "Ricco di visioni notturne e di oracoli messianici sorprendentemente precisi sulla passione del Messia.",
        contesto: "Incoraggia la ricostruzione del Tempio e apre lo sguardo al re umile che verrà, al pastore colpito e alla sorgente che purifica dal peccato.",
        profezie: [
          "Il re mite che entra a Gerusalemme su un asino (Zc 9,9).",
          "I trenta sicli d'argento, prezzo del pastore (Zc 11,12-13).",
          "Lo sguardo a «colui che hanno trafitto» e la sorgente che lava il peccato (Zc 12,10; 13,1)."
        ],
        insegnamenti: ["L'opera di Dio si compie «non con la potenza né con la forza, ma con il mio Spirito» (Zc 4,6)."],
        versetti: [
          { r: "Zc 9,9", t: "«Esulta, figlia di Sion… ecco, a te viene il tuo re. Egli è giusto e umile, cavalca un asino»." },
          { r: "Zc 12,10", t: "«Volgeranno lo sguardo a colui che hanno trafitto»." }
        ],
        cristo: "È tra i profeti più citati nella Passione: l'ingresso a Gerusalemme (Mt 21,5), i trenta denari di Giuda (Mt 27,9-10), il pastore percosso e le pecore disperse (Mt 26,31), il costato trafitto (Gv 19,37)."
      },
      {
        nome: "Malachia",
        periodo: "~450 a.C. — l'ultimo profeta dell'Antico Testamento.",
        unicita: "Chiude l'Antico Testamento e fa da ponte verso il Nuovo, annunciando il messaggero che preparerà la via al Signore.",
        contesto: "In un tempo di fede tiepida e culto trascurato, richiama i sacerdoti e il popolo alla fedeltà — nel culto, nelle offerte e nel matrimonio — e annuncia la venuta del «sole di giustizia».",
        profezie: ["Il messaggero (Elia) che precede il Signore (Ml 3,1.23).", "Il «sole di giustizia» che sorgerà con raggi di guarigione (Ml 3,20)."],
        insegnamenti: ["Dio è Padre e Creatore di tutti: perché tradirsi tra fratelli? (Ml 2,10).", "La fedeltà a Dio si misura anche nell'onestà delle offerte e nella fedeltà coniugale."],
        versetti: [
          { r: "Ml 3,1", t: "«Ecco, io manderò il mio messaggero a preparare la via davanti a me»." },
          { r: "Ml 3,23", t: "«Ecco, io invierò il profeta Elia prima che giunga il giorno del Signore»." }
        ],
        cristo: "Gesù identifica il «messaggero/Elia» annunciato da Malachia con Giovanni il Battista (Mt 11,14; 17,12). Dopo Malachia seguono circa 400 anni di silenzio, fino alla voce del Battista che prepara la via a Gesù."
      }
    ]
  },
  {
    gruppo: "Profeti senza libro (dell'azione)",
    nota: "Grandi profeti che non hanno lasciato uno scritto proprio, ma la cui voce attraversa la storia di Israele.",
    profeti: [
      {
        nome: "Mosè",
        periodo: "~XIII sec. a.C. — dall'Esodo ai quarant'anni nel deserto.",
        unicita: "Più che un profeta: il mediatore dell'alleanza del Sinai, «con cui il Signore parlava faccia a faccia, come uno parla con un amico» (Es 33,11). Modello di ogni profeta successivo.",
        contesto: "Chiamato al roveto ardente, guida Israele fuori dall'Egitto, riceve la Legge sul Sinai e conduce il popolo fino alle soglie della terra promessa.",
        profezie: ["L'annuncio di «un profeta come me» a cui dare ascolto (Dt 18,15)."],
        insegnamenti: ["Ascolta, Israele: ama il Signore con tutto il cuore (Dt 6,4-5).", "Davanti a vita e morte, «scegli la vita» (Dt 30,19)."],
        versetti: [
          { r: "Dt 18,15", t: "«Il Signore tuo Dio susciterà per te, in mezzo a te, un profeta come me: a lui darete ascolto»." },
          { r: "Es 3,14", t: "«Io sono colui che sono»: il Nome di Dio rivelato a Mosè." }
        ],
        cristo: "Gesù è il «nuovo Mosè»: dona la nuova Legge sul monte (le Beatitudini), compie una nuova Pasqua e un nuovo Esodo. La profezia del «profeta come me» (Dt 18,15) è riferita a Cristo (At 3,22). Con Elia, Mosè appare nella Trasfigurazione."
      },
      {
        nome: "Samuele",
        periodo: "~XI sec. a.C. — ultimo dei giudici e primo dei grandi profeti.",
        unicita: "Figura di transizione: profeta, giudice e sacerdote, unge i primi due re d'Israele, Saul e Davide.",
        contesto: "Chiamato da bambino nel santuario di Silo, guida Israele nel passaggio dai giudici alla monarchia, sempre richiamando alla fedeltà a Dio.",
        profezie: ["L'instaurazione della monarchia e l'unzione del re scelto da Dio."],
        insegnamenti: ["Pronti all'ascolto: «Parla, il tuo servo ti ascolta» (1 Sam 3,10).", "«Obbedire vale più del sacrificio» (1 Sam 15,22).", "«Dio guarda il cuore», non l'apparenza (1 Sam 16,7)."],
        versetti: [
          { r: "1 Sam 3,10", t: "«Parla, perché il tuo servo ti ascolta»." },
          { r: "1 Sam 16,7", t: "«L'uomo guarda l'apparenza, il Signore guarda il cuore»." }
        ],
        cristo: "Unge Davide, dando inizio alla dinastia regale da cui nascerà il Messia, «figlio di Davide»: prepara così la linea regale del Cristo."
      },
      {
        nome: "Natan",
        periodo: "~X sec. a.C. — profeta alla corte di Davide.",
        unicita: "Il profeta che osa rimproverare il re per il suo peccato e gli trasmette la promessa di una dinastia eterna.",
        contesto: "Consigliere di Davide, gli annuncia l'alleanza davidica e poi, con la parabola della pecora, lo conduce al pentimento dopo il peccato con Betsabea.",
        profezie: ["La «casa» (dinastia) di Davide stabile per sempre (2 Sam 7,16)."],
        insegnamenti: ["La verità va detta anche ai potenti: «Tu sei quell'uomo!» (2 Sam 12,7).", "Il pentimento sincero ottiene il perdono (cfr. Salmo 51)."],
        versetti: [
          { r: "2 Sam 7,16", t: "«La tua casa e il tuo regno saranno saldi per sempre davanti a me»." },
          { r: "2 Sam 12,13", t: "«Ho peccato contro il Signore! — Il Signore ha perdonato il tuo peccato»." }
        ],
        cristo: "La promessa di Natan (2 Sam 7) di un trono eterno per la casa di Davide si compie in Cristo Re, al quale «il Signore Dio darà il trono di Davide suo padre» (Lc 1,32-33)."
      },
      {
        nome: "Elia",
        periodo: "~IX sec. a.C. — regno del Nord, sotto re Acab e la regina Gezabele.",
        unicita: "Il più grande profeta dell'azione: difende il culto dell'unico Dio contro Baal, ed è rapito al cielo su un carro di fuoco senza morire.",
        contesto: "In un'epoca di idolatria di Stato, Elia sfida i profeti di Baal sul monte Carmelo e incontra Dio non nel fragore, ma in una «brezza leggera».",
        profezie: ["È atteso come precursore del «giorno del Signore» (cfr. Malachia)."],
        insegnamenti: ["Decidersi per Dio senza tentennare: «Fino a quando zoppicherete con i due piedi?» (1 Re 18,21).", "Dio si fa trovare nel silenzio e nella mitezza, non nella violenza (1 Re 19,12)."],
        versetti: [
          { r: "1 Re 18,21", t: "«Fino a quando zoppicherete con i due piedi? Se il Signore è Dio, seguitelo!»." },
          { r: "1 Re 19,12", t: "«Il Signore non era nel vento, né nel terremoto, né nel fuoco… ma in una voce di sottile silenzio»." }
        ],
        cristo: "Appare con Mosè nella Trasfigurazione di Gesù (Mt 17,3). Giovanni il Battista viene «nello spirito e nella potenza di Elia» (Lc 1,17) a preparare la via al Signore."
      },
      {
        nome: "Eliseo",
        periodo: "~IX-VIII sec. a.C. — discepolo e successore di Elia nel regno del Nord.",
        unicita: "Il profeta dei molti miracoli di guarigione e di vita: riceve «due terzi» (la porzione del primogenito) dello spirito di Elia.",
        contesto: "Eredita il mantello di Elia e accompagna la vita del popolo con segni concreti della compassione di Dio: guarigioni, cibo moltiplicato, morti restituiti alla vita.",
        profezie: ["Annuncia vittorie, guarigioni e la fine di carestie per parola del Signore."],
        insegnamenti: ["La grazia di Dio raggiunge anche lo straniero: guarisce il siro Naaman dalla lebbra (2 Re 5).", "Dio si prende cura dei piccoli e dei poveri."],
        versetti: [
          { r: "2 Re 2,9", t: "«Due terzi del tuo spirito diventino miei»." },
          { r: "2 Re 4,43", t: "«Ne mangeranno e ne avanzerà»: la moltiplicazione dei pani per cento persone." }
        ],
        cristo: "I suoi miracoli — pani moltiplicati, lebbrosi guariti, morti risuscitati — prefigurano i segni di Gesù, che li richiama esplicitamente a Nazaret (Lc 4,27: «molti lebbrosi… ma nessuno fu guarito se non Naaman il Siro»)."
      }
    ]
  }
];

// --------- Render autosufficiente (stile incapsulato .pf-*) ---------
function renderProfeti(containerId) {
  const panel = document.getElementById(containerId || 'profeti');
  if (!panel) return;

  if (!document.getElementById('pf-styles')) {
    const st = document.createElement('style');
    st.id = 'pf-styles';
    st.textContent = `
      #${panel.id} .pf-intro{font-family:var(--serif,'Georgia',serif);font-style:italic;color:var(--ink-soft,#6b5f56);max-width:72ch;margin:0 0 1.6rem}
      .pf-group{margin-bottom:2rem}
      .pf-group-title{font-family:var(--serif,serif);font-size:1.6rem;color:var(--accent,#8b5a2b);border-bottom:2px solid var(--accent-soft,#c9a77a);padding-bottom:.4rem;margin:0 0 .2rem;font-weight:500}
      .pf-group-note{color:var(--ink-soft,#6b5f56);font-style:italic;font-family:var(--serif,serif);margin:.3rem 0 1rem}
      .pf-item{background:var(--bg-elev,#fff);border:1px solid var(--line,#e6dccb);border-radius:10px;margin:.6rem 0;overflow:hidden;transition:box-shadow .15s,border-color .15s}
      .pf-item.open{border-color:var(--accent-soft,#c9a77a);box-shadow:0 6px 18px rgba(110,68,32,.10)}
      .pf-q{width:100%;display:flex;align-items:center;justify-content:space-between;gap:1rem;text-align:left;background:transparent;border:none;cursor:pointer;padding:1rem 1.2rem}
      .pf-name{font-family:var(--serif,serif);font-size:1.35rem;color:var(--ink,#2b2420)}
      .pf-item.open .pf-name{color:var(--accent,#8b5a2b);font-weight:600}
      .pf-tag{font-family:var(--serif,serif);font-style:italic;color:var(--ink-soft,#6b5f56);font-size:.95rem}
      .pf-icon{flex-shrink:0;width:1.8rem;height:1.8rem;border-radius:50%;background:var(--highlight,#fff4dc);color:var(--accent,#8b5a2b);display:flex;align-items:center;justify-content:center;font-size:1.3rem;transition:transform .25s}
      .pf-item.open .pf-icon{transform:rotate(45deg);background:var(--accent,#8b5a2b);color:#fff7ec}
      .pf-body{max-height:0;overflow:hidden;transition:max-height .5s ease}
      .pf-item.open .pf-body{max-height:4000px}
      .pf-body-in{padding:0 1.2rem 1.2rem;border-top:1px solid var(--line,#e6dccb);font-family:var(--serif,serif)}
      .pf-field{margin:.8rem 0 .2rem}
      .pf-lab{font-family:sans-serif;font-size:.7rem;letter-spacing:.06em;text-transform:uppercase;font-weight:700;color:var(--accent-soft,#c9a77a);display:block;margin:.7rem 0 .2rem}
      .pf-body-in p{font-size:1.05rem;line-height:1.6;margin:.2rem 0}
      .pf-body-in ul{margin:.3rem 0;padding-left:1.2rem}
      .pf-body-in li{margin:.3rem 0;line-height:1.55}
      .pf-meta-box{display:flex;flex-wrap:wrap;gap:.5rem;margin:.6rem 0}
      .pf-meta-pill{background:var(--highlight,#fff4dc);border:1px solid var(--accent-soft,#c9a77a);border-radius:8px;padding:.5rem .8rem;font-size:.95rem;flex:1;min-width:230px}
      .pf-meta-pill b{display:block;font-family:sans-serif;font-size:.68rem;letter-spacing:.05em;text-transform:uppercase;color:var(--accent-soft,#c9a77a);margin-bottom:.15rem}
      .pf-vers{background:var(--highlight,#fff4dc);border-left:3px solid var(--accent-soft,#c9a77a);border-radius:6px;padding:.7rem 1rem;margin:.5rem 0}
      .pf-vers div{font-size:1.02rem;margin:.3rem 0}
      .pf-vers .r{font-family:sans-serif;font-size:.72rem;font-weight:700;color:var(--accent,#8b5a2b);margin-right:.4rem}
      .pf-cristo{background:var(--bg-elev,#fff);border:1px solid var(--line,#e6dccb);border-left:4px solid #5c7a42;border-radius:8px;padding:.8rem 1.1rem;margin-top:.6rem;font-size:1.04rem;line-height:1.55}
      .pf-cristo .pf-lab{color:#5c7a42}
    `;
    document.head.appendChild(st);
  }

  let html = '<h2>I Profeti</h2>';
  html += '<p class="pf-intro">I profeti parlano a nome di Dio: scuotono le coscienze, difendono i poveri, consolano gli afflitti e tengono accesa l’attesa del Messia. Per ognuno trovi il periodo di predicazione, l’unicità, cosa ha profetizzato, i suoi insegnamenti, i versetti importanti e come ha preparato la venuta di Gesù. Tocca un nome per aprire.</p>';

  PROFETI.forEach(g => {
    html += '<div class="pf-group">';
    html += `<h3 class="pf-group-title">${g.gruppo}</h3>`;
    if (g.nota) html += `<p class="pf-group-note">${g.nota}</p>`;
    g.profeti.forEach(p => {
      html += '<div class="pf-item">';
      html += `<button type="button" class="pf-q"><span class="pf-name">${p.nome}</span><span class="pf-icon">+</span></button>`;
      html += '<div class="pf-body"><div class="pf-body-in">';
      html += '<div class="pf-meta-box">';
      if (p.periodo) html += `<div class="pf-meta-pill"><b>Periodo di predicazione</b>${p.periodo}</div>`;
      if (p.unicita) html += `<div class="pf-meta-pill"><b>Unicità del profeta</b>${p.unicita}</div>`;
      html += '</div>';
      if (p.contesto) html += `<p>${p.contesto}</p>`;
      if (p.profezie && p.profezie.length) {
        html += '<span class="pf-lab">Cosa ha profetizzato</span><ul>';
        p.profezie.forEach(x => html += `<li>${x}</li>`); html += '</ul>';
      }
      if (p.insegnamenti && p.insegnamenti.length) {
        html += '<span class="pf-lab">Insegnamenti principali</span><ul>';
        p.insegnamenti.forEach(x => html += `<li>${x}</li>`); html += '</ul>';
      }
      if (p.versetti && p.versetti.length) {
        html += '<span class="pf-lab">Versetti importanti</span><div class="pf-vers">';
        p.versetti.forEach(v => html += `<div><span class="r">${v.r}</span>${v.t}</div>`);
        html += '</div>';
      }
      if (p.cristo) html += `<div class="pf-cristo"><span class="pf-lab">Come ha preparato la venuta di Gesù</span>${p.cristo}</div>`;
      html += '</div></div></div>';
    });
    html += '</div>';
  });

  panel.innerHTML = html;
  panel.querySelectorAll('.pf-item .pf-q').forEach(btn => {
    btn.addEventListener('click', () => btn.closest('.pf-item').classList.toggle('open'));
  });
}
