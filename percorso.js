// =============================================================
//  PERCORSO — La mia fede
//  Raccolta di insegnamenti come "tappe" sbloccabili.
//  Ogni insegnamento ha sezioni che si leggono passo-passo.
//  Aggiungi qui nuovi insegnamenti: basta un nuovo oggetto.
// =============================================================

// ---------- INSEGNAMENTO: Matteo 6,33 ----------
const TEACH_MATTEO = [
  {
    id: "merimnao",
    title: "La parola che si ripete sei volte",
    subtitle: "Merimnao: non «ansia», ma mente divisa",
    html: `
      <p>Esiste una parola greca che compare <strong>esattamente sei volte</strong> in un unico paragrafo del Vangelo di Matteo. Non in tutto il libro, non in tutto il discorso della montagna: sei volte in dieci versetti (Mt 6,25-34).</p>

      <p>Le nostre Bibbie la traducono come <em>ansia, preoccupazione, affanno</em>. Ma il greco originale porta un'immagine più cruda. Non è «essere nervosi»: è <strong>essere divisi</strong>.</p>

      <div class="word-card" tabindex="0">
        <div class="word-card-head">
          <span class="word-translit">merimnáo</span>
          <span class="word-greek">μεριμνάω</span>
          <span class="word-tap">tocca per scoprire</span>
        </div>
        <div class="word-card-body">
          <p>Viene dalla radice <strong>merízo</strong>: dividere, separare, strappare in pezzi. Quando il testo ordina «non siate ansiosi» sta descrivendo una <strong>mente tagliata</strong>, una mente a brandelli, che porta tutto da sola perché ha pensato di essere l'unica responsabile.</p>
        </div>
      </div>

      <p>Questo verbo compare 6 volte nella stessa unità letteraria. Non è una coincidenza: questo paragrafo è statisticamente il <strong>cuore tematico</strong> della sezione. Gesù martella la stessa idea da angolazioni diverse.</p>

      <blockquote class="teaching-quote">
        Merimnao non è il nostro «essere preoccupati», che in italiano è un po' vago. È la mente che si trova in tre posti nello stesso momento e in nessuno di essi per intero. Sei a pranzo, ma pensi alla bolletta. Sei con tuo figlio, ma pensi alla riunione di domani. Cerchi di dormire, ma calcoli il bilancio della settimana.
      </blockquote>

      <p>Nessuno di quei pezzi è presente dove si trova il corpo. Gesù non sta descrivendo un problema antico: sta descrivendo il problema che portiamo in tasca ogni giorno. La mente divisa non è una malattia moderna — è la condizione umana standard. Ed è questa condizione che vuole attaccare.</p>
    `
  },
  {
    id: "contesto",
    title: "La folla sul monte",
    subtitle: "Galilea, primo secolo: una situazione economica precisa",
    html: `
      <p>Per capire Matteo 6,33 bisogna capire il paragrafo in cui si trova. Chiude un ragionamento che Gesù costruisce da nove versetti. E quel ragionamento comincia in una scena precisa, con un pubblico preciso.</p>

      <p>Galilea, primo secolo. Una folla seduta sul pendio di un monte. In quella folla <strong>non ci sono teologi professionisti</strong> che discutono questioni raffinate. Ci sono lavoratori, pescatori, braccianti. Piccoli agricoltori che vivono mangiando ciò che piantano e piantando ciò che non possono scegliere.</p>

      <div class="keypoint">
        I ricercatori che hanno studiato l'economia della Galilea romana stimano che circa il <strong>90% della popolazione</strong> del mondo greco-romano vivesse vicino o al di sotto della soglia di sussistenza. Non era retorica. Era la vita.
      </div>

      <p>La Galilea rurale manteneva l'élite urbana di Séffori e di Tiberiade. C'era la tassa di Roma. C'era la decima del Tempio. <strong>Due imposte che uscivano dalla stessa tasca già povera.</strong></p>

      <p>Quindi quando Gesù dice «non siate ansiosi per la vostra vita, di che cosa mangerete o berrete, né per il vostro corpo, di che cosa vi vestirete» (v. 25), non sta parlando di lusso. Sta parlando della <strong>pressione reale</strong> che schiacciava il galileo medio ogni santo giorno: ci sarà da mangiare domani? Ci sarà da vestire i bambini? Ci sarà da pagare quello che il pubblicano chiederà la settimana prossima?</p>

      <p>L'ansia, lì, era fisica. Era viscerale. Era l'ansia di chi non sapeva se il pasto successivo sarebbe esistito. E che cosa fa Gesù davanti a questo? <strong>Non consola. Argomenta.</strong></p>
    `
  },
  {
    id: "struttura",
    title: "L'anatomia del paragrafo",
    subtitle: "Dalla dicotomia alla soluzione",
    html: `
      <p>Il versetto 33 non è sospeso nel vuoto. È incastonato in una struttura precisa, e leggerla cambia tutto.</p>

      <ol class="struct-list">
        <li><span class="struct-ref">v. 24</span> <strong>La dicotomia.</strong> «Nessuno può servire due padroni… Non potete servire Dio e Mammona.» Mammona è la parola aramaica per ricchezza, per accumulo materiale. Gesù la personifica come un <em>dio rivale</em> che esige culto. La scelta non è tra cercare Dio e ignorare la vita materiale: è <strong>quale dei due occupa il trono</strong> della tua ricerca.</li>
        <li><span class="struct-ref">vv. 25-32</span> <strong>La decostruzione dell'ansia.</strong> Attraverso gli uccelli del cielo e i gigli del campo.</li>
        <li><span class="struct-ref">v. 33</span> <strong>La soluzione.</strong> «Cercate prima il regno di Dio e la sua giustizia.»</li>
        <li><span class="struct-ref">v. 34</span> <strong>La chiusura.</strong> «Non siate ansiosi per il domani.»</li>
      </ol>

      <p>Nel mezzo della decostruzione, Gesù usa un'antica tecnica di argomentazione: il ragionamento <strong>dal minore al maggiore</strong> (in latino, <em>a fortiori</em>). Se Dio si prende cura degli uccelli, che non piantano e non raccolgono, a maggior ragione si prenderà cura di voi. Se veste i gigli, che non filano e non cuciono, a maggior ragione vestirà voi. <strong>L'argomento non è sentimentale. È logico.</strong></p>

      <p>E in mezzo a questo ragionamento c'è un nome che non è casuale: <strong>Salomone</strong>. «Neppure Salomone, in tutta la sua gloria, fu vestito come uno di loro» (v. 29).</p>

      <div class="keypoint">
        Perché Salomone e non un altro re? Non Davide, più ammirato. Non Ezechia, più pio. Perché Salomone divenne famoso per una scelta molto precisa — e quella scelta è il segreto del versetto 33.
      </div>
    `
  },
  {
    id: "cercare",
    title: "«Cercate» — un verbo che non si ferma",
    subtitle: "Zeteo: un'azione durativa, uno stile di vita",
    html: `
      <p>Quando arriviamo al versetto 33, ogni parola porta uno strato che l'italiano moderno ha sepolto. Cominciamo dal verbo: <em>cercate</em>.</p>

      <div class="word-card" tabindex="0">
        <div class="word-card-head">
          <span class="word-translit">zetéo</span>
          <span class="word-greek">ζητέω</span>
          <span class="word-tap">tocca per scoprire</span>
        </div>
        <div class="word-card-body">
          <p>«Cercate prima il regno» — in greco <em>zeteîte… prôton</em>. Il verbo è al <strong>presente imperativo</strong>. E nel greco antico il presente imperativo non significa «fallo una volta adesso e basta». Significa <strong>continua a farlo come stile di vita</strong>. È un'azione durativa, continua. Come dire: <em>continuate a cercare</em>, senza fermarvi, senza pause, senza smettere.</p>
        </div>
      </div>

      <p>Gesù non chiede un atto isolato. Sta descrivendo una <strong>postura permanente</strong>. Il verbo zeteo compare 117 volte nel Nuovo Testamento, 14 volte nel solo Matteo. È un verbo «matteano». E si trova nello stesso discorso della montagna: «Chiedete e vi sarà dato. Cercate e troverete» (Mt 7,7) — stessa radice, cercare con perseveranza.</p>

      <p>Poco prima, al versetto 32, c'è un contrasto illuminante. «I pagani cercano tutte queste cose.» Ma lì il greco usa una parola diversa:</p>

      <div class="word-card" tabindex="0">
        <div class="word-card-head">
          <span class="word-translit">epizetéo</span>
          <span class="word-greek">ἐπιζητέω</span>
          <span class="word-tap">tocca per scoprire</span>
        </div>
        <div class="word-card-body">
          <p>Il prefisso <strong>epi-</strong> rafforza: è cercare con intensità, <em>inseguire</em>, correre dietro come chi vive per questo. I pagani — cioè i popoli che non conoscono il Dio d'Israele — passano tutta la vita a correre dietro a cibo, bevanda, vestito, fissando lo stomaco, il bicchiere, le spalle. Al versetto 33 ritorna lo <strong>stesso verbo, ma senza il prefisso</strong>. Non è smettere di cercare: è cercare un'altra cosa, prima.</p>
        </div>
      </div>

      <p>Cercare con tutto il corpo orientato verso la cosa cercata. Quando Gesù ordina di cercare prima il regno, sta descrivendo <strong>un'intera direzione della vita</strong>. Non un momento di meditazione la domenica.</p>
    `
  },
  {
    id: "prima",
    title: "«Prima» — non un orario, una scala",
    subtitle: "Proton: priorità, non cronologia",
    html: `
      <p>La seconda parola è <em>prima</em>. In greco <strong>prôton</strong>. Sembra semplice: leggiamo «prima» e pensiamo a un ordine cronologico. Prima mi sveglio, poi mi lavo i denti. Prima mangio, poi lavo i piatti.</p>

      <p>Ma <em>proton</em>, nel greco del primo secolo, porta con sé un altro strato. Significa primo in ordine, sì — ma anche <strong>primo per importanza, per priorità, per gerarchia</strong>.</p>

      <div class="keypoint">
        Quando Gesù dice «cercate prima», <em>proton</em> non è un cronometro. È una <strong>scala</strong>. Non è «cerca il regno al mattino e poi occupati del resto». È mettere il regno <strong>in cima alla piramide</strong> di ciò che cerchi. E organizzare tutto il resto sotto di esso.
      </div>

      <p>La cronologia conta meno. La priorità conta tutto. E questo cambia la lettura. Di solito ascoltiamo «prima il regno» e pensiamo all'orario: prega prima, lavora dopo; leggi la Bibbia al mattino, paga le bollette nel pomeriggio.</p>

      <p>Ma Gesù non sta parlando di agenda. Sta parlando di <strong>ciò che è al centro della tua ricerca</strong>. Il regno non è la voce in cima alla lista: è la <strong>cornice che dà senso a tutta la lista</strong>.</p>
    `
  },
  {
    id: "regno",
    title: "«Regno» — non un luogo, un'azione",
    subtitle: "Basileia / malkut: la regalità in movimento",
    html: `
      <p>Ed ecco il secondo termine: <em>regno</em>. In greco <strong>basileía</strong>. In ebraico l'equivalente è <strong>malkut</strong>. È una parola che l'italiano appiattisce troppo.</p>

      <p>Leggiamo «regno» e pensiamo a un luogo. A un territorio. A un paese con una mappa, con confini, con una bandiera — il «Regno di Spagna». Oppure pensiamo al regno dei cieli alla fine, dopo la morte.</p>

      <div class="word-card" tabindex="0">
        <div class="word-card-head">
          <span class="word-translit">basileía / malkut</span>
          <span class="word-greek">βασιλεία · מַלְכוּת</span>
          <span class="word-tap">tocca per scoprire</span>
        </div>
        <div class="word-card-body">
          <p>Nel greco e nell'ebraico di fondo non significano primariamente <em>territorio</em>. Significano <strong>regalità, regno attivo</strong>: il fatto che il re stia regnando. È meno un luogo e più un'azione. Non è «dove» Dio governa: è il <strong>governo di Dio in movimento</strong>.</p>
        </div>
      </div>

      <p>Il profeta Isaia lo dice già: «Quanto sono belli sui monti i piedi di chi annuncia… Il tuo Dio regna» (Is 52,7). Nota bene: <em>il tuo Dio regna</em>. Verbo al presente. Azione in corso. Non Dio <em>ha</em> un regno lontano. Non Dio <em>installerà</em> un regno dopo. Dio <strong>regna</strong>.</p>

      <p>E quando Gesù comincia il suo ministero pubblico (Mt 4,17), la prima frase registrata è: «Ravvedetevi, perché il regno dei cieli è vicino.» Vicino — in greco <strong>énghiken</strong>, «si è avvicinato, ha fatto irruzione». Il regno è arrivato camminando. Sta entrando dalla porta. Non è una promessa lontana: è un <strong>arrivo presente</strong>.</p>

      <p>Quindi «cercare prima il regno» non è aspettare il cielo alla fine. È <strong>allineare la vita al governo di Dio che è già in corso</strong>. È cercare il modo in cui Dio sta già regnando adesso: in mezzo alla Galilea, in mezzo alla città, in mezzo al lavoro di ciascuno.</p>
    `
  },
  {
    id: "giustizia",
    title: "«Giustizia» — non un tribunale, un legame",
    subtitle: "Dikaiosune / tzedaka: fedeltà nella relazione",
    html: `
      <p>E poi arriva la terza parola: <em>giustizia</em>. In greco <strong>dikaiosúne</strong>. In ebraico <strong>tzedaká</strong>. Questa è la parola che soffre di più nella traduzione.</p>

      <p>Perché «giustizia», nell'italiano moderno, è diventata quasi sinonimo di tribunale. Sentenza giusta, giudice giusto, processo giusto. Tutto legale. Tutto astratto. Tutto distante.</p>

      <div class="word-card" tabindex="0">
        <div class="word-card-head">
          <span class="word-translit">tzedaká</span>
          <span class="word-greek">צְדָקָה</span>
          <span class="word-tap">tocca per scoprire</span>
        </div>
        <div class="word-card-body">
          <p>Nell'Antico Testamento <em>tzedaka</em> non è una categoria da tribunale. È una <strong>parola di relazione</strong>. È il modo giusto di vivere dentro un'alleanza. È <strong>fedeltà nel legame</strong>. È onorare gli impegni presi con Dio e con le persone intorno.</p>
        </div>
      </div>

      <p>Tzedaka include cose concrete: aiutare il povero, pagare il lavoratore alla fine della giornata. «Non opprimere la vedova. Non falsare il giudizio dello straniero.» Andiamo a Deuteronomio 24,14-15: «Non opprimerai il salariato povero e bisognoso. Gli darai il suo salario il giorno stesso, prima del tramonto.» <strong>Questa è tzedaka applicata.</strong></p>

      <p>Giustizia concreta, vita quotidiana organizzata intorno a ciò che è giusto. Non è teoria morale. È il modo in cui il pane esce dalla tasca del padrone e arriva sulla tavola del dipendente <em>nel giorno in cui</em> il dipendente ne ha bisogno.</p>

      <div class="keypoint">
        Quando Gesù dice «cercate prima il regno di Dio <strong>e la sua giustizia</strong>», le due parole sono incollate. Regno e giustizia. Governo di Dio e modo giusto di vivere dentro quel governo. <em>Regno senza giustizia</em> diventa astrazione. <em>Giustizia senza regno</em> diventa moralismo. I due insieme sono ciò che Gesù sta descrivendo.
      </div>
    `
  },
  {
    id: "aggiunte",
    title: "«Saranno aggiunte» — e la chiave di Salomone",
    subtitle: "Prostithemi: depositato sopra ciò che già ricevi",
    html: `
      <p>E qui compare il quarto verbo, alla fine del versetto: <em>vi saranno aggiunte</em>. In greco <strong>prostíthemi</strong>. Questo verbo è interessante.</p>

      <div class="word-card" tabindex="0">
        <div class="word-card-head">
          <span class="word-translit">prostíthemi</span>
          <span class="word-greek">προστίθημι</span>
          <span class="word-tap">tocca per scoprire</span>
        </div>
        <div class="word-card-body">
          <p>Prefisso <strong>pros-</strong> = «insieme a, verso, sopra». Radice <strong>tithemi</strong> = collocare, porre, depositare. Letteralmente: <strong>mettere insieme, sommare sopra, aggiungere</strong>. L'immagine non è «Dio ti dà tutto ciò che hai chiesto». L'immagine è: <strong>Dio deposita il resto sopra ciò che stai già ricevendo.</strong></p>
        </div>
      </div>

      <p>E questa immagine si sposa direttamente con la storia di Salomone. Ricordi che cosa accadde a Gabaon? Dio appare in sogno a Salomone e gli dice: «Chiedi ciò che vuoi» (1 Re 3,5).</p>

      <p>Salomone avrebbe potuto chiedere una lunga vita. Avrebbe potuto chiedere ricchezza. Avrebbe potuto chiedere la testa dei nemici a terra. <strong>E chiede una sola cosa: sapienza per governare.</strong> Guarda cosa risponde Dio (1 Re 3,12-13): «Ecco, ti do un cuore saggio e intelligente… <em>e ti do anche ciò che non hai chiesto</em>: ricchezza e gloria.»</p>

      <p>Salomone chiese una cosa. Dio diede la cosa richiesta — e in più ciò che lui non aveva nemmeno menzionato. <strong>Questo schema è importante.</strong> Perché ritorna quasi alla lettera pochi versetti dopo, sulla bocca di Gesù: «Cercate prima il regno… e tutte queste cose vi saranno aggiunte.» Matteo sta leggendo Gesù alla luce di Salomone. <strong>Chiedi la cosa giusta. Il resto arriva insieme, come un'aggiunta.</strong></p>

      <div class="keypoint">
        Ma un dettaglio va detto con onestà. <em>Prostithemi</em> non è un assegno in bianco. Gesù non sta promettendo un conto in banca pieno. Guarda che cosa compare nella lista: «tutte queste cose» = <strong>cibo, bevanda, vestito</strong>. Le tre cose fondamentali che sostengono la vita. Il menù della promessa è il menù del <em>necessario</em>, non del desiderato. Esattamente come nel Padre Nostro: «dacci oggi il nostro pane quotidiano» — pane di oggi, non banchetto, non scorte per tutto l'anno.
      </div>
    `
  },
  {
    id: "padre-nostro",
    title: "Il principio del Padre Nostro",
    subtitle: "Prima il regno, poi il pane — e un Padre che provvede",
    html: `
      <p>Questa logica non è sospesa nel vuoto. È tessuta nella stessa preghiera che Gesù aveva insegnato 24 versetti prima, nello stesso capitolo: il <strong>Padre Nostro</strong> (Mt 6,9-13). Nota l'ordine delle richieste.</p>

      <div class="two-cols">
        <div class="col-box">
          <h5>Prima: su Dio</h5>
          <ul>
            <li>Sia santificato il tuo <strong>nome</strong></li>
            <li>Venga il tuo <strong>regno</strong></li>
            <li>Sia fatta la tua <strong>volontà</strong></li>
          </ul>
        </div>
        <div class="col-box">
          <h5>Solo dopo: il necessario</h5>
          <ul>
            <li>Dacci oggi il nostro <strong>pane quotidiano</strong></li>
          </ul>
        </div>
      </div>

      <p>Tre richieste su Dio all'inizio. La richiesta materiale arriva al <strong>quarto posto</strong>. La preghiera aveva già insegnato l'ordine. Il versetto 33 non è una novità: è il principio del Padre Nostro applicato alla vita quotidiana. <em>Prima il regno, poi il pane.</em></p>

      <p>E la chiusura della sezione, al versetto 34, cuce tutto insieme: «Non siate dunque ansiosi per il domani, perché il domani sarà ansioso per se stesso. A ciascun giorno basta il suo male.»</p>

      <div class="keypoint">
        L'ansia di portare tutto da soli nasce dal <strong>tempo</strong>, precisamente dal tempo che ancora non esiste. Non siamo ansiosi per il passato, perché è già passato. Non per il presente puro, perché sta accadendo. Siamo ansiosi <strong>per il domani</strong>: per il mese prossimo, per la bolletta non ancora arrivata, per la malattia non ancora venuta, per la perdita non ancora sofferta. La mente esce dall'oggi e cerca di risolvere il domani in anticipo — e siccome il domani non esiste ancora, gira nel vuoto portando un peso fittizio.
      </div>

      <p>E qui Gesù indica un <strong>Padre</strong>. Al versetto 26: «il Padre vostro celeste li nutre.» Al versetto 32: «il Padre vostro celeste sa che avete bisogno di tutte queste cose.» In greco <strong>patér</strong>. E <em>pater</em>, nel contesto del primo secolo, non è soltanto l'uomo che ti ha generato. È il <strong>provveditore</strong>, colui che sostiene la casa, colui che assume la responsabilità economica dell'intera famiglia.</p>

      <p>Quando Gesù chiama Dio <em>pater</em> sta dicendo che Dio <strong>assume la responsabilità economica della casa</strong>. Non sei solo davanti al conto. C'è qualcuno in casa che si assume la parte che tu non riesci a portare. «Il Padre vostro sa ciò di cui avete bisogno prima che glielo chiediate» (Mt 6,8).</p>
    `
  },
  {
    id: "figlio",
    title: "Smetti di portare tutto da solo",
    subtitle: "Non sei il padre. Sei il figlio.",
    html: `
      <p>Ed è esattamente questo punto che sblocca il senso di tutto. <strong>Smetti di portare tutto da solo.</strong> Perché l'ansia descritta in <em>merimnao</em> è l'ansia di chi si vede come <strong>l'unico responsabile della propria sopravvivenza</strong>.</p>

      <p>Come se la tua tavola dipendesse solo dalla tua forza. Come se i vestiti sul tuo corpo dipendessero solo dal tuo sforzo. Come se Dio fosse una figura distante, occupata con questioni cosmiche, senza tempo per occuparsi del pane di giovedì.</p>

      <p>Gesù smonta questa immagine punto per punto. Gli uccelli non si sostengono da soli: il Padre li nutre. I gigli non si vestono da soli: il Padre li veste. E se il Padre si prende cura del passero e del giglio, <strong>con quanta più cura si prenderà cura del figlio?</strong> L'argomento dal minore al maggiore torna a comparire.</p>

      <p>E il figlio non è una metafora. È un legame familiare. <strong>Tu appartieni alla casa.</strong> La casa ha un provveditore. Il provveditore sa di che cosa hai bisogno (Mt 6,8). La preghiera non è un'informazione che stai passando a Dio: è la postura del figlio che riconosce chi è il Padre.</p>

      <div class="keypoint">
        <em>Merimnao</em> è la mente divisa che cerca di portare tutto. Il regno è il rimedio: un'unica ricerca primaria che riorganizza tutte le altre ricerche sotto di sé. Quando la mente smette di portare tutto, la vita smette di funzionare come se fosse una responsabilità solitaria. Quanta gente passa tutta la vita cercando di essere <strong>padre e figlio allo stesso tempo</strong>? Cercando di essere il provveditore della propria casa mentre è anche il figlio che ha bisogno di ricevere?
      </div>

      <p>Ed è qui che il discorso della montagna rivela il suo cuore. Non è una lista di regole per renderti più stanco. È un <strong>riorientamento dell'identità</strong>. Scendere dal trono di provveditore universale della propria vita. Tornare alla sedia del figlio.</p>

      <p>«Cercate prima il regno» significa: <strong>smetti di trattare la tua vita come se tu ne fossi il re.</strong> C'è un re, c'è un regno — e non sei tu al comando. E questa è la notizia migliore che un ascoltatore galileo, schiacciato da una doppia tassa e da un cattivo raccolto, potesse sentire: <em>non è tutto tuo. Non è tutta colpa tua quando non ce la fai. C'è un provveditore, c'è un Padre, c'è un regno in movimento.</em></p>

      <p>Matteo 6,33, in fin dei conti, non è una promessa di prosperità. È una proposta di riordinamento. <strong>Togli te stesso dal trono. Metti il regno al suo posto. E scopri che quel trono non è mai stato tuo — fin dall'inizio.</strong></p>
    `
  }
];

// ---------- INSEGNAMENTO: Le alleanze ----------
const TEACH_ALLEANZE = [
  {
    id: "berit",
    title: "Tagliare un'alleanza",
    subtitle: "Berit e karat: un giuramento sigillato con la vita",
    html: `
      <p>Immagina due uomini fermi in un deserto. Tra loro, a terra, pezzi di animali tagliati a metà: una giovenca, una capra, un montone. L'odore del sangue nell'aria. Gli uccelli rapaci che tentano di scendere. Uno dei due deve camminare in mezzo ai pezzi.</p>

      <p>Cammina nel sangue e dice, senza parlare ad alta voce: <em>che io diventi così se romperò la mia parola, che io sia tagliato come questi animali.</em> Questa scena non è un film. Si trova in Genesi 15, e non è folclore antico: è esattamente come il mondo dell'antico vicino oriente stipulava un'alleanza.</p>

      <div class="word-card" tabindex="0">
        <div class="word-card-head">
          <span class="word-translit">berit · karat</span>
          <span class="word-greek">בְּרִית · כָּרַת</span>
          <span class="word-tap">tocca per scoprire</span>
        </div>
        <div class="word-card-body">
          <p><strong>Berit</strong> = alleanza. Compare quasi <strong>290 volte</strong> nell'Antico Testamento. Il verbo che le sta sempre accanto è <strong>karat</strong> = tagliare. Non si «faceva» un'alleanza: si <strong>tagliava</strong> un'alleanza. La traduzione «alleanza» nasconde il peso originale. Non è un contratto. Non è un accordo amichevole. Non è partnership. È un <strong>giuramento sigillato con la vita</strong>.</p>
        </div>
      </div>

      <p>E in Genesi 15 c'è già qualcosa di strano. Solo <strong>uno</strong> dei due passa tra le metà. Abramo dorme — un sonno profondo, un grande terrore cade su di lui. Chi cammina nel sangue è <strong>Dio stesso</strong>, sotto forma di una fiaccola fumante e di un forno ardente.</p>

      <div class="keypoint">
        Dio si assume da solo la maledizione condizionata. Abramo non firma nulla: solo assiste. Questa immagine violenta è il cuore della Bibbia, perché la storia delle alleanze è la storia di un Dio che <strong>si è legato</strong>. Da Adamo a Gesù sono sette momenti. Sette volte in cui il cielo si china sulla terra e dice: <em>questo, qui, ora, è impegno.</em>
      </div>
    `
  },
  {
    id: "adamo",
    title: "1 · Adamo",
    subtitle: "Il patto senza nome, e la prima promessa di un vincitore",
    html: `
      <div class="cov-meta">
        <div><span class="cov-k">Dove</span><span class="cov-v">Genesi 2-3 · Osea 6,7</span></div>
        <div><span class="cov-k">Segno</span><span class="cov-v">L'albero della conoscenza</span></div>
        <div><span class="cov-k">Tipo</span><span class="cov-v">Dibattuta (alleanza delle opere)</span></div>
        <div><span class="cov-k">Portata</span><span class="cov-v">L'intera umanità</span></div>
      </div>

      <p>La Bibbia, nella Genesi, non scrive mai la parola <em>berit</em> per descrivere ciò che Dio stabilì con Adamo. Non c'è cerimonia, non c'è rito formale: c'è solo un comando. «Dell'albero della conoscenza del bene e del male non mangerai, perché nel giorno in cui ne mangerai certamente morirai» (Gen 2,17). È alleanza o no?</p>

      <p>Una parte enorme della teologia cristiana afferma di sì: fu alleanza, anche senza il nome. Indicano Osea 6,7, dove il profeta dice «come Adamo essi hanno trasgredito l'alleanza» — l'unica volta nell'Antico Testamento in cui il nome Adamo e la parola alleanza appaiono insieme (versetto dibattuto, perché <em>adam</em> può significare «umanità» o essere un luogo geografico).</p>

      <p>Ma c'è un'osservazione che vale anche senza usare la parola <em>berit</em>: nel giardino ci sono tutti gli elementi di un patto. Un sovrano e un vassallo. Una stipulazione chiara. Una maledizione promessa a chi la rompe. Due rappresentanti — un uomo e una donna — che rispondono per un'intera razza. E quando la regola viene infranta (Gen 3), ciò che segue è esattamente ciò che un'alleanza violata produce: <strong>maledizione, espulsione, morte</strong>.</p>

      <p>Eppure, nell'esatto momento del giudizio, appare una frase che cambia l'intera storia. Genesi 3,15: Dio si volge al serpente e dice: «Porrò inimicizia fra te e la donna, fra la tua discendenza e la sua discendenza: questa ti schiaccerà il capo e tu le ferirai il calcagno.»</p>

      <div class="keypoint">
        È la <strong>prima promessa di un vincitore</strong>. Il primo indizio che il danno non è definitivo. La tradizione cristiana la chiama <strong>protovangelo</strong> — il primo vangelo, la prima scintilla di una storia di redenzione non ancora nemmeno iniziata. Nota bene: prima dell'espulsione completa, prima che la spada del cherubino blocchi il giardino, Dio annuncia già che esiste un seme che schiaccerà il capo del serpente. Non è una promessa isolata: è il <strong>perno</strong>.
      </div>

      <p>La tradizione riformata la chiama «alleanza delle opere»; quella luterana è più riservata; il dispensazionalismo classico la nega; la tradizione ebraica non parla nemmeno di un'alleanza adamica. Ciò che si può dire con sicurezza è che dentro al giardino qualcosa fu stabilito, qualcosa fu rotto, e la prima cucitura di riparazione apparve già prima dell'espulsione.</p>
    `
  },
  {
    id: "noe",
    title: "2 · Noè",
    subtitle: "L'arco da guerra puntato verso il cielo",
    html: `
      <div class="cov-meta">
        <div><span class="cov-k">Dove</span><span class="cov-v">Genesi 9,8-17</span></div>
        <div><span class="cov-k">Segno</span><span class="cov-v">L'arco (keshet) nelle nuvole</span></div>
        <div><span class="cov-k">Tipo</span><span class="cov-v">Unilaterale, incondizionata</span></div>
        <div><span class="cov-k">Portata</span><span class="cov-v">Universale: ogni carne, gli animali, il pianeta</span></div>
      </div>

      <p>Qui il catalogo diventa esplicito. Per la prima volta nella Scrittura la parola <em>berit</em> appare con pieno peso pattizio, e con un dettaglio che cambia tutto. Il contesto è il diluvio.</p>

      <p>Il mondo è finito. Noè esce dall'arca con la famiglia e con gli animali, e la prima cosa che fa (Gen 8,20) è costruire un altare e offrire sacrifici. Dio sente l'odore soave e decide che non maledirà più la terra a causa dell'uomo. E allora, nel capitolo 9, arriva la formalizzazione: Dio stabilisce un'alleanza non solo con l'umanità, ma con <strong>ogni essere vivente uscito dall'arca, con ogni carne</strong>. Gli animali entrano nel contratto. È l'unica alleanza della Bibbia in cui Dio si impegna anche con il regno animale.</p>

      <p>Il contenuto è semplice: <em>mai più un diluvio come quello.</em> La terra continuerà ad avere semina e mietitura, freddo e caldo, estate e inverno, giorno e notte. La stabilità del mondo è garantita — non perché l'essere umano sia migliorato. Il testo è chiaro (Gen 8,21): il cuore dell'uomo rimane malvagio fin dalla giovinezza. <strong>Ma Dio si autovincola a non distruggere più.</strong></p>

      <p>E poi arriva il segno. Genesi 9,13: «Pongo il mio arco nelle nuvole e sarà come segno di alleanza fra me e la terra.» La maggior parte delle traduzioni mette «arcobaleno». Ma la parola ebraica <strong>keshet</strong> non è «arcobaleno»:</p>

      <div class="word-card" tabindex="0">
        <div class="word-card-head">
          <span class="word-translit">keshet</span>
          <span class="word-greek">קֶשֶׁת</span>
          <span class="word-tap">tocca per scoprire</span>
        </div>
        <div class="word-card-body">
          <p><strong>Keshet</strong> = arco, l'<strong>arma da guerra</strong>. La stessa parola che appare quando il testo parla di soldati arcieri. In Genesi 9 Dio descrive un'arma da guerra appesa nel cielo. E qui sta l'osservazione che cambia tutto: Dio appende l'arco <strong>puntato verso l'alto, verso il cielo stesso. Verso se stesso. Non verso la terra.</strong></p>
        </div>
      </div>

      <div class="keypoint">
        È il gesto di chi smette di combattere. Di chi depone le armi. Nell'antico Oriente, appendere l'arma rovesciata significava <strong>tregua, pace, sospensione dell'ostilità</strong>. La Bibbia prende questo vocabolario visivo conosciuto e lo applica a Dio stesso.
      </div>

      <p>E questa è una promessa <strong>unilaterale</strong>: Noè non deve adempiere nulla perché essa funzioni. Dio stesso si obbliga. Ogni volta che piove e l'arco appare, è Dio che si ricorda ad alta voce dell'impegno. Il testo (Gen 9,16) dice che l'arco appare per ricordare l'alleanza eterna — <strong>non è perché Noè ricordi. È perché Dio ricordi.</strong> Senza la stabilità promessa in Genesi 9 non c'è il resto della storia: questa è la fondazione cosmica su cui tutto ciò che verrà dopo sarà costruito.</p>
    `
  },
  {
    id: "abramo",
    title: "3 · Abramo",
    subtitle: "Tre scene: la promessa, il sangue, il segno nel corpo",
    html: `
      <div class="cov-meta">
        <div><span class="cov-k">Dove</span><span class="cov-v">Genesi 12 · 15 · 17</span></div>
        <div><span class="cov-k">Segno</span><span class="cov-v">La circoncisione (brit mila)</span></div>
        <div><span class="cov-k">Tipo</span><span class="cov-v">Unilaterale: solo Dio passa nel sangue</span></div>
        <div><span class="cov-k">Portata</span><span class="cov-v">«Tutte le famiglie della terra»</span></div>
      </div>

      <p>Con Abramo il discorso si fa intenso, perché l'alleanza non avviene in un solo momento. Avviene in <strong>tre scene separate</strong>, in tre capitoli diversi della Genesi. Ognuna aggiunge uno strato.</p>

      <h4>Scena 1 · La promessa (Genesi 12,1-3)</h4>
      <p>Abramo, ancora con il vecchio nome, è un uomo vecchio, senza figli, che vive a Carran. Dio appare dal nulla: «Vattene dalla tua terra, dalla tua parentela e dalla casa di tuo padre, verso la terra che io ti mostrerò.» E poi la promessa, in tre parti concatenate: <em>(1) io farò di te una grande nazione; (2) ti benedirò e renderò grande il tuo nome; (3) in te saranno benedette tutte le famiglie della terra.</em></p>
      <p>Guarda la portata di quest'ultimo punto: ogni famiglia, ogni nazione, ogni etnia umana. La benedizione promessa ad Abramo non si ferma in Abramo: <strong>trabocca, attraversa frontiere e millenni</strong>. Paolo prenderà questa promessa (Gal 3) e dirà che Cristo è il suo compimento, che Gesù è il seme in cui tutte le nazioni sono benedette. Per ora Abramo ha solo udito una promessa: senza garanzia scritta, senza rituale, solo parola.</p>

      <h4>Scena 2 · La ratifica nel sangue (Genesi 15)</h4>
      <p>Abramo si lamenta con Dio: che cosa mi darai, dato che me ne vado senza figli? Dio lo porta fuori, di notte: «Guarda i cieli e conta le stelle, se le puoi contare: così sarà la tua discendenza.» E <strong>Abramo crede</strong>. Il testo (Gen 15,6) scrive la frase che diventerà la bandiera di Paolo: «Abramo credette al Signore, e ciò gli fu accreditato come giustizia.»</p>
      <p>Ma Abramo vuole ancora una garanzia. E allora Dio gli chiede cinque animali: una giovenca, una capra, un montone di tre anni, una tortora, un piccione. Abramo taglia a metà i primi tre e dispone le metà l'una di fronte all'altra, formando un corridoio di sangue (gli uccelli non vengono divisi). Cade su Abramo un sonno profondo, con un grande terrore, e Dio appare come fumo e fiaccola di fuoco che passa tra le metà. Questo rito è <em>karat berit</em> nella forma letterale.</p>
      <div class="keypoint">
        L'usanza era che i due partner del patto passassero <strong>insieme</strong> tra i pezzi, dicendo senza parole «che io diventi così se lo romperò». Ma in Genesi 15 <strong>solo Dio passa</strong>. Abramo resta a dormire fuori dal corridoio. Dio prende su di sé la maledizione condizionata di entrambi i lati. Se Abramo fallisce, Dio paga. Se la discendenza di Abramo fallisce, Dio paga. È il <strong>giuramento più radicale della Bibbia</strong>.
      </div>

      <h4>Scena 3 · Il segno nel corpo (Genesi 17)</h4>
      <p>Quattordici anni dopo. Abramo ha 99 anni. Dio appare di nuovo e rinnova l'alleanza, ora con un segno corporale: la circoncisione. Ogni maschio della casa di Abramo deve essere circonciso l'ottavo giorno.</p>
      <div class="word-card" tabindex="0">
        <div class="word-card-head">
          <span class="word-translit">brit milà</span>
          <span class="word-greek">בְּרִית מִילָה</span>
          <span class="word-tap">tocca per scoprire</span>
        </div>
        <div class="word-card-body">
          <p>Letteralmente «alleanza del taglio». Un segno fisico, permanente, irreversibile: quel corpo appartiene al Dio che è apparso ad Abramo. E perché l'<strong>ottavo giorno</strong>? Altri popoli antichi circoncidevano alla pubertà o al matrimonio, come rito di passaggio alla vita adulta — dopo il merito, dopo la scelta. Israele lo faceva l'ottavo giorno, <strong>prima che il bambino facesse qualsiasi cosa, prima di meritare, prima di scegliere</strong>. Il segno veniva prima: l'appartenenza era anteriore al merito.</p>
        </div>
      </div>
      <p>E lì cambia anche il nome. <strong>Abramo</strong> (padre esaltato) diventa <strong>Abrahamo</strong> (padre di una moltitudine); <strong>Sarai</strong> diventa <strong>Sara</strong>. I nomi cambiano perché l'identità cambia: quando Dio taglia un'alleanza con qualcuno, quel qualcuno non è più la stessa persona, ha un'altra storia ora.</p>
      <p>Promessa di benedizione universale, ratifica nel sangue dove solo Dio passa, segno corporale prima di qualsiasi merito: Romani 4 e Galati 3 prenderanno tutto questo pacchetto e diranno che Abramo è il <strong>prototipo della fede</strong> — dichiarato giusto per la fiducia in Dio, prima della circoncisione, prima della legge.</p>
    `
  },
  {
    id: "mose",
    title: "4 · Mosè / Sinai",
    subtitle: "Il sangue sul popolo, e la legge impossibile",
    html: `
      <div class="cov-meta">
        <div><span class="cov-k">Dove</span><span class="cov-v">Esodo 19-24 · Levitico 26 · Deuteronomio 28</span></div>
        <div><span class="cov-k">Segno</span><span class="cov-v">Il sangue asperso sul popolo · il sabato</span></div>
        <div><span class="cov-k">Tipo</span><span class="cov-v">Condizionata: «se ascolterete…»</span></div>
        <div><span class="cov-k">Portata</span><span class="cov-v">La nazione di Israele</span></div>
      </div>

      <p>I discendenti di Abramo, secoli dopo, sono schiavi in Egitto. E il Dio che ha tagliato un'alleanza con la fiaccola fumante non si è scordato: il sangue vale ancora, la promessa non è scaduta. Il popolo che era 70 persone alla discesa in Egitto ora è una moltitudine. È uscito dalla schiavitù dietro un uomo vecchio con un bastone, ha attraversato un mare, ha mangiato manna, ha bevuto acqua dalla roccia, e ora è accampato ai piedi del Sinai.</p>

      <p>E Dio pronuncia una frase che definisce tutto (Es 19,5-6): «Se ascolterete attentamente la mia voce e osserverete la mia alleanza, allora sarete la mia proprietà particolare fra tutti i popoli… e voi sarete per me un regno di sacerdoti e una nazione santa.»</p>

      <div class="keypoint">
        Qui la parola <em>berit</em> appare di nuovo, ma il tono è cambiato. Con Abramo Dio passò <strong>solo</strong> tra i pezzi. Al Sinai <strong>Israele deve rispondere</strong>: «se ascolterete… se osserverete». È un'alleanza <strong>condizionata</strong>. La montagna è coperta di fumo, trema, tuona, suono di tromba.
      </div>

      <p>L'alleanza non sono solo i dieci comandamenti: è tutto il blocco di leggi da Esodo 20 a 23. E poi, nel capitolo 24, arriva la cerimonia. Mosè scende, costruisce un altare ai piedi della montagna, dodici pietre (una per ogni tribù), sacrifica giovenchi, prende <strong>metà del sangue</strong> e lo versa nei bacini, l'altra metà la asperge sull'altare. Legge a voce alta il libro dell'alleanza, e il popolo risponde (Es 24,7): «Tutto quello che il Signore ha detto, lo faremo e ubbidiremo.» Allora Mosè prende il sangue dai bacini e lo <strong>asperge sul popolo</strong>, dicendo la frase che riecheggerà 1500 anni dopo sulla bocca di Gesù: «Ecco il sangue dell'alleanza che il Signore ha fatto con voi.»</p>

      <p>Questo sangue non è simbolico: è letterale, schizza sui vestiti, macchia, marca. Tutto Israele resta con sangue di bue addosso. Cosa sta dicendo questa scena? Che ora <strong>entrambi i lati sono dentro al patto</strong>: in Genesi 15 solo Dio passò, in Esodo 24 il popolo è incluso nel sangue, ha firmato.</p>

      <p>Ma c'è un'osservazione dura. Questa alleanza è la prima a essere condizionata: la benedizione arriva se il popolo obbedisce, la maledizione se disobbedisce (Levitico 26 e Deuteronomio 28 dettagliano le due liste, fianco a fianco). E la storia di Israele sarà esattamente questo: un ciclo. Obbedire, prosperare, dimenticare, cadere, essere disciplinati, gridare per soccorso, tornare, obbedire di nuovo — il libro dei Giudici è questo ciclo che si ripete sette volte. I profeti chiameranno Israele <em>adultera</em> (Osea userà l'immagine del matrimonio tradito), perché il Sinai è un patto di alleanza matrimoniale e Israele ha rotto la parola.</p>

      <p>E c'è ancora un altro strato. Mentre Mosè è sulla montagna con le tavole, il popolo, là sotto, fa un <strong>vitello d'oro</strong> (Es 32). L'alleanza fu rotta ancor prima che la pietra arrivasse al suolo. Mosè getta le tavole, esse si frantumano. Dio riscrive (cap. 34). Ma il danno ha già rivelato una cosa che diventerà tema dell'intero Antico Testamento: <strong>il cuore umano non riesce ad adempiere il Sinai</strong>. L'alleanza è santa, è giusta, è buona — ed è impossibile. E questa impossibilità non è un difetto: è rivelazione. Serve, tra le altre cose, a far emergere che nessuno raggiunge la giustizia con le proprie forze, aprendo spazio — secoli dopo — a una nuova promessa.</p>
    `
  },
  {
    id: "finees",
    title: "5 · L'alleanza sacerdotale",
    subtitle: "Finees, la pace nel mezzo di una piaga",
    html: `
      <div class="cov-meta">
        <div><span class="cov-k">Dove</span><span class="cov-v">Numeri 25,12-13 · Malachia 2</span></div>
        <div><span class="cov-k">Segno</span><span class="cov-v">Il sacerdozio perenne</span></div>
        <div><span class="cov-k">Tipo</span><span class="cov-v">Berit shalom (alleanza di pace)</span></div>
        <div><span class="cov-k">Portata</span><span class="cov-v">Una linea sacerdotale: Finees e la sua discendenza</span></div>
      </div>

      <p>Questa alleanza molti la dimenticano, ma la Bibbia la racconta a caratteri maiuscoli. Numeri 25. Israele è accampato a Sittim, vicino alla terra promessa, e comincia a mescolarsi con le donne di Moab. Il problema non è etnico: è spirituale. Le donne trascinano il popolo al culto di Baal-Peor. Dio si adira. Una piaga inizia a spazzare l'accampamento. <strong>24.000 persone muoiono.</strong></p>

      <p>E nel mezzo del giudizio, un israelita passa davanti a tutti, prende per mano una donna madianita e la porta dentro alla sua tenda — sopra la piaga, sopra al pianto, davanti alla porta del tabernacolo, mentre Mosè piange. Allora appare un uomo: <strong>Finees</strong>, nipote di Aronne, sacerdote. Prende una lancia, entra nella tenda dietro alla coppia e trafigge entrambi con un solo colpo. La piaga si ferma.</p>

      <p>E Dio parla con Mosè (Numeri 25,12-13): «Ecco, io gli concedo la mia alleanza di pace: essa sarà per lui e per la sua discendenza dopo di lui, l'alleanza di un sacerdozio perenne.»</p>

      <div class="word-card" tabindex="0">
        <div class="word-card-head">
          <span class="word-translit">berit shalom · berit kehunat olam</span>
          <span class="word-greek">בְּרִית שָׁלוֹם</span>
          <span class="word-tap">tocca per scoprire</span>
        </div>
        <div class="word-card-body">
          <p>L'espressione ebraica è <strong>berit shalom</strong> — alleanza di pace — e subito dopo <strong>berit kehunat olam</strong> — alleanza del sacerdozio eterno. Dio sta separando una specifica linea sacerdotale: non un levita qualsiasi, ma <strong>Finees e i suoi discendenti</strong>. La funzione di servire nel santuario, offrire sacrifici, mediare tra il popolo e Dio resta in quella famiglia.</p>
        </div>
      </div>

      <p>Il profeta Malachia, secoli dopo (cap. 2), parlerà di nuovo di questa alleanza: ricorderà che aveva come scopo la vita e la pace, e che il sacerdote doveva avere sulle labbra la <strong>conoscenza di Dio</strong>, perché egli è messaggero del Signore degli eserciti.</p>

      <div class="keypoint">
        E perché tutto ciò conta nella storia delle alleanze? Perché mostra uno <strong>schema</strong>. Dio continua a raffinare, continua a separare: la benedizione <em>universale</em> di Noè diventa la benedizione <em>etnica</em> di Abramo; la benedizione etnica di Abramo diventa la <em>nazione</em> di Mosè; la nazione di Mosè ora ha una <em>famiglia sacerdotale</em> separata al suo interno. Ogni passo più specifico. Ogni passo che punta verso <strong>qualcuno di unico</strong> che ancora deve apparire.
      </div>
    `
  },
  {
    id: "davide",
    title: "6 · Davide",
    subtitle: "Una casa che non finisce, un trono senza fine",
    html: `
      <div class="cov-meta">
        <div><span class="cov-k">Dove</span><span class="cov-v">2 Samuele 7 · Salmi 89 e 132</span></div>
        <div><span class="cov-k">Segno</span><span class="cov-v">La dinastia (bayit)</span></div>
        <div><span class="cov-k">Tipo</span><span class="cov-v">Promessa di un trono eterno</span></div>
        <div><span class="cov-k">Portata</span><span class="cov-v">La casa di Davide → il Messia</span></div>
      </div>

      <p>2 Samuele 7. Davide è re, ha conquistato Gerusalemme, ha portato l'arca dell'alleanza nella città, in un palazzo di cedro. E guarda al tabernacolo, che è ancora una tenda di pelle, e dice al profeta Natan una cosa semplice: «Io abito in una bella casa e l'arca di Dio abita in una tenda. Voglio costruire una casa per il Signore.» Natan, nel primo impulso, dice: vai pure, Dio è con te.</p>

      <p>Ma quella notte la parola del Signore arriva a Natan, e in 2 Samuele 7 c'è un <strong>gioco di parole profondo</strong>. Davide vuole costruire una casa per Dio. Dio risponde: «Sono io che costruirò una casa per te.»</p>

      <div class="word-card" tabindex="0">
        <div class="word-card-head">
          <span class="word-translit">bayit</span>
          <span class="word-greek">בַּיִת</span>
          <span class="word-tap">tocca per scoprire</span>
        </div>
        <div class="word-card-body">
          <p><strong>Casa</strong>, in ebraico <em>bayit</em>, ha un doppio senso: può essere <strong>edificio</strong>, oppure <strong>dinastia, lignaggio, famiglia che attraversa le generazioni</strong>. Dio sta dicendo: Davide, tu non mi costruirai un tempio — tuo figlio lo farà — ma io costruirò qualcosa di molto più grande della pietra: una <strong>dinastia che non finisce</strong>.</p>
        </div>
      </div>

      <p>E poi arriva la promessa (2 Samuele 7,12-13): «Quando i tuoi giorni saranno compiuti… susciterò dopo di te il tuo seme, che uscirà da te, e renderò stabile il suo regno. Egli edificherà una casa al mio nome e io renderò stabile il trono del suo regno per sempre.» Guarda di nuovo la stessa parola del protovangelo, la stessa parola della promessa ad Abramo: <strong>seme</strong>, ora incanalata in un'unica casa. E la frase più pesante arriva al versetto 16: «La tua casa e il tuo regno saranno saldi davanti a te per sempre, il tuo trono sarà stabile per sempre.» Il Salmo 89 e il Salmo 132 prenderanno questa promessa e la canteranno.</p>

      <p>Poi la storia. Salomone succede, costruisce il tempio, poi decade. Il regno si divide. Re buoni, re cattivi. Il tempio è distrutto dai babilonesi nel 586 a.C. La dinastia sembra finire, i discendenti di Davide vanno in esilio. E allora il popolo di Dio si fa la domanda che attraversa l'intero Antico Testamento: <strong>dov'è il figlio di Davide?</strong></p>

      <p>I profeti iniziano a parlare di un re che verrà: Isaia 9 e 11; Geremia 23,5 («susciterò a Davide un germoglio giusto, ed egli regnerà come re e prospererà»); Ezechiele 34; Michea 5 indica persino la <strong>città</strong> in cui questo re nascerà — <em>Betlemme</em>, troppo piccola per entrare nella lista delle città importanti di Giuda, ma da essa uscirà colui che deve governare Israele, le cui origini risalgono ai tempi antichi.</p>

      <div class="keypoint">
        Poi passano secoli. <strong>400 anni di silenzio</strong> dopo l'ultimo profeta. E un angelo appare a una giovane in Galilea (Luca 1,32-33): «Questi sarà grande e sarà chiamato Figlio dell'Altissimo; il Signore Dio gli darà il trono di Davide suo padre e regnerà eternamente sulla casa di Giacobbe, e il suo regno non avrà fine.» L'alleanza con Davide non era morta: <strong>stava aspettando.</strong>
      </div>
    `
  },
  {
    id: "nuova",
    title: "7 · La Nuova Alleanza",
    subtitle: "La legge scritta nel cuore, e il calice della cena",
    html: `
      <div class="cov-meta">
        <div><span class="cov-k">Dove</span><span class="cov-v">Geremia 31,31-34 · Ezechiele 36 · Luca 22,20 · Ebrei 9</span></div>
        <div><span class="cov-k">Segno</span><span class="cov-v">Il calice: «il nuovo patto nel mio sangue»</span></div>
        <div><span class="cov-k">Tipo</span><span class="cov-v">Interiore: la legge scritta sul cuore</span></div>
        <div><span class="cov-k">Portata</span><span class="cov-v">Dal più piccolo al più grande, tutte le nazioni</span></div>
      </div>

      <p>Prima che la nuova alleanza appaia nella pratica, appare in profezia. Geremia è a Gerusalemme e vede la città essere distrutta, il tempio che brucia, il popolo portato via in catene. L'alleanza del Sinai è stata talmente rotta che la punizione di Levitico 26 e Deuteronomio 28 si compie davanti ai suoi occhi.</p>

      <p>E nel mezzo di questo disastro, Geremia riceve una delle parole più dolci della Bibbia (Geremia 31,31-34): «Ecco, vengono i giorni — dice il Signore — in cui farò una <strong>nuova alleanza</strong> con la casa di Israele e con la casa di Giuda, non come l'alleanza che feci con i loro padri… alleanza che essi violarono. <strong>Metterò la mia legge nel loro intimo, la scriverò sul loro cuore</strong>… e non insegnerà più ciascuno al suo prossimo dicendo: "Conoscete il Signore", perché tutti mi conosceranno, dal più piccolo al più grande, perché perdonerò la loro iniquità e non mi ricorderò più del loro peccato.»</p>

      <div class="keypoint">
        Guarda la portata. Al Sinai la legge fu scritta nella <strong>pietra</strong>; ora sarà scritta nel <strong>cuore</strong>. Al Sinai il popolo ebbe bisogno di un mediatore — Mosè salì per la nazione; ora <strong>ognuno conoscerà Dio direttamente</strong>. Al Sinai il sangue fu di giovenco; ora il peccato sarà perdonato in un altro modo. Ezechiele, al capitolo 36, completa il quadro: Dio toglie il cuore di pietra e mette un cuore di carne, mette lo Spirito stesso dentro la persona.
      </div>

      <p>Ma quando e come? Per secoli questo resta sospeso in aria. Profeti che muoiono, popolo che torna dall'esilio, un tempio più piccolo ricostruito, l'attesa di un re che non viene… fino a una notte a Gerusalemme, in una sala in prestito al secondo piano di una casa qualsiasi. Tredici uomini che cenano. Uno di loro prende il pane, lo spezza, lo distribuisce; prende il calice, lo alza e dice una frase che nessuno a quel tavolo si aspettava di udire (Luca 22,20): «<strong>Questo calice è il nuovo patto nel mio sangue, che è versato per voi.</strong>» Anche 1 Corinzi 11 ripete la stessa frase.</p>

      <p>La parola <em>berit</em> di Geremia 31 è <strong>risuscitata sulla voce di Gesù</strong>. E guarda cosa <em>non</em> fa: non prende un giovenco, non asperge sangue di animale sui vestiti dei discepoli. Indica il proprio calice. Dice: questo è il mio sangue, il sangue dell'alleanza. E allora ricorda Genesi 15: gli animali tagliati, il corridoio di sangue, solo Dio che passa tra le metà. <strong>Quella scena aspettava una risposta da duemila anni.</strong> Con Abramo Dio passò da solo, dicendo «se questa alleanza fallisce, pago io». E nella notte della Pasqua, a Gerusalemme, seduto sul tavolo basso di quella cena, è seduto il Dio che aveva promesso di pagare — e la mattina dopo paga.</p>

      <p>Ebrei 9 raccoglie tutti questi fili: Cristo è entrato nel santuario non con sangue di capri e di vitelli, ma con il proprio sangue, e ha ottenuto una redenzione eterna; egli è il mediatore di una nuova alleanza, affinché, mediante la sua morte, i chiamati ricevano l'eredità eterna promessa.</p>

      <ul class="clean-list">
        <li>Il <strong>seme</strong> di Genesi 3,15 schiaccia il capo del serpente, venendo ferito al calcagno su una croce.</li>
        <li>Il Dio che in Genesi 9 puntò l'<strong>arco verso l'alto</strong> mostra che non aveva rinunciato alla terra.</li>
        <li>La promessa di <strong>benedizione per tutte le nazioni</strong> fatta ad Abramo si compie in un uomo che parla con la samaritana, con il romano, con la fenicia, con chiunque.</li>
        <li>La <strong>legge di Mosè</strong> trova compimento nell'unico che è riuscito ad adempierla.</li>
        <li>L'<strong>alleanza di pace di Finees</strong> si compie in un sommo sacerdote definitivo.</li>
        <li>Il <strong>trono di Davide</strong> riceve un re che non muore.</li>
        <li>Il <strong>cuore di pietra</strong> riceve un innesto di carne.</li>
      </ul>
    `
  },
  {
    id: "arco",
    title: "Un unico arco",
    subtitle: "Dalla parola «tagliare» alla parola «nuove»",
    html: `
      <p>La storia delle alleanze non è una lista: è un <strong>unico arco</strong>. Ogni patto è una scintilla della stessa fiamma.</p>

      <ul class="clean-list">
        <li><strong>Adamo</strong> riceve una promessa prima di uscire dal giardino.</li>
        <li><strong>Noè</strong> riceve un arco puntato verso il cielo stesso.</li>
        <li><strong>Abramo</strong> vede una fiaccola passare tra i pezzi.</li>
        <li><strong>Israele</strong> ode una voce nel fumo del Sinai.</li>
        <li><strong>Finees</strong> riceve la pace nel mezzo di una piaga.</li>
        <li><strong>Davide</strong> riceve un trono senza fine.</li>
        <li>Una <strong>sala in prestito</strong> a Gerusalemme riceve la frase che cuce tutto.</li>
      </ul>

      <blockquote class="teaching-quote">
        Berit, alla fine, non è un giuramento umano. È il modo che il Dio della Bibbia ha trovato per dire: <em>io non me ne vado, anche se voi mi lasciate, anche se voi rompete tutto, anche se dovessi essere io a pagare.</em>
      </blockquote>

      <p>E quando si apre l'ultimo libro della Bibbia (Apocalisse 21) e Dio dice «ecco, io faccio nuove tutte le cose», stai vedendo l'<strong>ultima cucitura</strong> di questo arco immenso: il giardino della Genesi che si chiude come <strong>città nuova</strong>, con l'Agnello al centro e il popolo che finalmente abita con il Dio che ha sempre voluto abitare con lui.</p>

      <div class="keypoint">
        Tutto è iniziato con la parola <strong>tagliare</strong> (karat) — un taglio nella carne di animali, in un deserto — e finisce con la parola <strong>nuove</strong>. Da un giuramento sigillato col sangue a <em>tutte le cose fatte nuove</em>.
      </div>
    `
  }
];

// ---------- IL PERCORSO: insieme degli insegnamenti come tappe ----------
const PERCORSO = [
  {
    id: "peccato-grazia",
    title: "Peccato e grazia",
    subtitle: "Capire il peccato alla luce delle Scritture — e il cammino di guarigione che Dio offre.",
    emoji: "⚖️",
    sections: INSEGNAMENTO
  },
  {
    id: "matteo-633",
    title: "Smetti di portare tutto da solo",
    subtitle: "Cosa significa davvero Matteo 6,33 — parola per parola, dal greco e dall'ebraico.",
    emoji: "🕊️",
    sections: TEACH_MATTEO
  },
  {
    id: "alleanze",
    title: "Ogni alleanza di Dio",
    subtitle: "Da Adamo a Gesù: i sette patti, il filo di sangue che attraversa tutta la Bibbia.",
    emoji: "🔥",
    sections: TEACH_ALLEANZE
  }
];
