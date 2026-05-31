// =============================================================
//  INSEGNAMENTO — Peccato e grazia
//  Contenuto strutturato in 10 sezioni con sottonavigazione.
// =============================================================

const INSEGNAMENTO = [
  // --------------------------------------------------------
  {
    id: "intro",
    title: "Cos'è il peccato",
    subtitle: "Le quattro parole bibliche che illuminano la realtà",
    html: `
      <p>Nella Bibbia <em>peccato</em> non è un concetto unico ma una realtà stratificata. L'ebraico e il greco usano più parole, e ciascuna illumina un aspetto diverso.</p>

      <div class="term-grid">
        <div class="term">
          <h4>Chattat <span class="lang">(ebr.) / hamartia (gr.)</span></h4>
          <p>Letteralmente <em>«mancare il bersaglio»</em>. L'immagine è dell'arciere che tira e sbaglia. Il peccato è fallire lo scopo per cui siamo fatti.</p>
        </div>
        <div class="term">
          <h4>Pesha <span class="lang">(ebraico)</span></h4>
          <p><em>Ribellione, trasgressione</em>. Rottura volontaria di un patto. Più grave del semplice errore.</p>
        </div>
        <div class="term">
          <h4>Avon <span class="lang">(ebraico)</span></h4>
          <p><em>Iniquità, distorsione, colpa che pesa</em>. Indica la <strong>deformazione interiore</strong> che il peccato produce — non solo l'atto, ma la piega storta che lascia nell'anima.</p>
        </div>
        <div class="term">
          <h4>Resha <span class="lang">(ebraico)</span></h4>
          <p><em>Empietà, malvagità attiva</em>. Chi fa il male sapendo di farlo.</p>
        </div>
      </div>

      <blockquote class="teaching-quote">
        Quando nei Salmi leggi «perdona il mio peccato, la mia iniquità, la mia trasgressione» (Sal 51) non è ridondanza retorica: sono tre livelli diversi.
        <strong>Peccato</strong> = ho mancato. <strong>Iniquità</strong> = sono deformato dentro. <strong>Trasgressione</strong> = ho rotto la relazione.
      </blockquote>
    `
  },
  // --------------------------------------------------------
  {
    id: "radice",
    title: "Il principio-radice",
    subtitle: "Voler essere come Dio senza Dio",
    html: `
      <p>Alla base di tutto, secondo la Scrittura, c'è <strong>un unico peccato originario di struttura</strong>: voler essere come Dio <em>senza</em> Dio.</p>

      <p>Genesi 3 lo mostra nell'immagine del frutto: <em>«sarete come Dio»</em> (Gen 3,5). Non è il desiderio di crescere — è il rifiuto della propria condizione di creatura, la pretesa di essere fondamento di se stessi.</p>

      <p>Da qui discende tutto. Ogni peccato successivo è una declinazione di questo:</p>

      <ul class="clean-list">
        <li><strong>Mettere se stessi al posto di Dio</strong>,</li>
        <li>o <strong>mettere qualcos'altro al posto di Dio</strong> — è ciò che la Bibbia chiama <em>idolatria</em>, considerata la radice di tutti i mali.</li>
      </ul>
    `
  },
  // --------------------------------------------------------
  {
    id: "mappe",
    title: "Le grandi mappe del peccato",
    subtitle: "Decalogo, vizi capitali, peccati che gridano al cielo",
    html: `
      <p>La tradizione biblica e cristiana ha prodotto più «cataloghi». Ecco i principali.</p>

      <h4>1. Il Decalogo (Esodo 20, Deuteronomio 5)</h4>
      <p>La prima grande mappa. Dieci comandamenti divisi in due tavole:</p>

      <div class="two-cols">
        <div class="col-box">
          <h5>Verso Dio <span class="muted">— la verticalità</span></h5>
          <ul>
            <li><strong>Non avere altri dèi</strong> → idolatria, superstizione, magia</li>
            <li><strong>Non fare immagini</strong> → ridurre Dio a ciò che controlliamo</li>
            <li><strong>Non nominare il nome invano</strong> → bestemmia, spergiuro, uso manipolatorio del sacro</li>
            <li><strong>Santificare il giorno del Signore</strong> → rifiutare il riposo, il culto, il tempo di Dio</li>
          </ul>
        </div>
        <div class="col-box">
          <h5>Verso il prossimo <span class="muted">— l'orizzontalità</span></h5>
          <ul>
            <li><strong>Onorare padre e madre</strong> → rompere la catena delle generazioni</li>
            <li><strong>Non uccidere</strong> → omicidio, violenza, odio (Gesù lo estende all'ira, Mt 5)</li>
            <li><strong>Non commettere adulterio</strong> → tradimento, uso dell'altro come oggetto</li>
            <li><strong>Non rubare</strong> → furto, frode, sfruttamento, ingiustizia economica</li>
            <li><strong>Non dire falsa testimonianza</strong> → menzogna, calunnia, manipolazione</li>
            <li><strong>Non desiderare</strong> → invidia, cupidigia: il peccato del <em>cuore</em></li>
          </ul>
        </div>
      </div>

      <p class="note">Gli ultimi due toccano il <strong>desiderio interiore</strong>, non solo l'azione. La Bibbia sa che il male nasce dentro prima di manifestarsi fuori.</p>

      <h4>2. I sette vizi capitali</h4>
      <p>Non è una lista biblica esplicita, ma una sintesi elaborata dai Padri del deserto (Evagrio Pontico, IV sec.) e poi da Gregorio Magno. Si chiamano «capitali» non perché siano i peggiori, ma perché sono <strong>radici</strong> da cui germogliano gli altri peccati.</p>
      <ol class="numbered">
        <li><strong>Superbia</strong> — mettere se stessi al centro. Il peccato-madre.</li>
        <li><strong>Avarizia</strong> — amore disordinato per il possesso. Paolo la chiama «radice di tutti i mali» (1 Tm 6,10).</li>
        <li><strong>Lussuria</strong> — uso disordinato della sessualità.</li>
        <li><strong>Invidia</strong> — tristezza per il bene altrui.</li>
        <li><strong>Gola</strong> — incapacità di porre misura al piacere.</li>
        <li><strong>Ira</strong> — desiderio di vendetta, rabbia distruttiva.</li>
        <li><strong>Accidia</strong> — la <em>tristezza del bene spirituale</em>: «che senso ha?» che paralizza.</li>
      </ol>

      <h4>3. I peccati che gridano al cielo</h4>
      <p>La tradizione individua peccati di particolare gravità sociale, che <em>«gridano vendetta al cospetto di Dio»</em>:</p>
      <ul>
        <li><strong>Omicidio volontario</strong> (Gen 4,10: «il sangue di Abele grida dal suolo»)</li>
        <li><strong>Il peccato di Sodoma</strong> — nella Scrittura è <em>violenza sistemica contro ospiti, poveri, stranieri</em> (Ez 16,49)</li>
        <li><strong>Oppressione di stranieri, vedove, orfani</strong> (Es 22,20-23)</li>
        <li><strong>Salario negato al lavoratore</strong> (Dt 24,14-15; Gc 5,4)</li>
      </ul>
      <p class="note"><strong>Principio:</strong> Dio si schiera con la vittima. I peccati più gravi sono quelli commessi dal forte contro il debole.</p>

      <h4>4. I cataloghi del Nuovo Testamento</h4>
      <p>In <strong>Galati 5,19-21</strong> Paolo contrappone le «opere della carne» ai «frutti dello Spirito»: fornicazione, impurità, dissolutezza, idolatria, stregoneria, inimicizie, discordia, gelosia, dissensi, divisioni, fazioni, invidie, ubriachezze, orge.</p>
      <p class="note">Noterai qualcosa di importante: <strong>più della metà sono peccati relazionali</strong> (inimicizie, discordia, divisioni, fazioni). Per Paolo, rompere la comunità è gravissimo quanto i peccati «carnali».</p>
      <p>In <strong>Mc 7,21-23</strong> Gesù elenca ciò che esce dal cuore: «propositi malvagi, fornicazioni, furti, omicidi, adulteri, cupidigie, malvagità, inganno, dissolutezza, invidia, calunnia, superbia, stoltezza.»</p>

      <h4>5. La distinzione cattolica: mortale / veniale</h4>
      <div class="two-cols">
        <div class="col-box">
          <h5>Peccato mortale</h5>
          <p>Rompe la relazione con Dio. Richiede <strong>tre condizioni contemporanee</strong>: materia grave, piena avvertenza, deliberato consenso. Se manca anche solo una, non è mortale.</p>
        </div>
        <div class="col-box">
          <h5>Peccato veniale</h5>
          <p>Ferisce la relazione ma non la spezza. Sono le negligenze, le durezze quotidiane, le piccole infedeltà.</p>
        </div>
      </div>
    `
  },
  // --------------------------------------------------------
  {
    id: "rotture",
    title: "Perché il peccato è sbagliato",
    subtitle: "Le quattro rotture",
    html: `
      <p>Il peccato non è sbagliato perché è vietato. È <strong>vietato perché è sbagliato</strong>, cioè perché <em>ferisce la realtà</em>.</p>

      <p>Dio non ha stabilito regole arbitrarie; ha indicato le dinamiche che distruggono l'uomo, gli altri, il creato, la relazione con lui.</p>

      <p>Ogni peccato, a uno sguardo profondo, fa <strong>quattro rotture</strong>:</p>

      <ol class="rupture-list">
        <li>
          <h5>Rottura con Dio</h5>
          <p>Chi pecca mette qualcosa al posto di Dio — se stesso, il denaro, il piacere, il potere.</p>
        </li>
        <li>
          <h5>Rottura con sé</h5>
          <p>Il peccato deforma chi lo compie. L'iniquità (<em>avon</em>) è la distorsione interiore che resta anche dopo l'atto. Chi mente diventa mendace, chi odia diventa odioso.</p>
        </li>
        <li>
          <h5>Rottura con gli altri</h5>
          <p>Ogni peccato, anche nascosto, ha conseguenze sociali. Il peccato personale genera <em>strutture di peccato</em>: corruzione sistemica, ingiustizie economiche, culture violente.</p>
        </li>
        <li>
          <h5>Rottura col creato</h5>
          <p>La Scrittura vede un legame tra disordine morale e disordine cosmico. Rm 8,20-22: la creazione «geme e soffre».</p>
        </li>
      </ol>

      <p class="highlight-box">Per questo il peccato è «sbagliato»: non come infrazione di un codice, ma come <strong>ferita quadrupla</strong> inferta alla trama dell'essere.</p>
    `
  },
  // --------------------------------------------------------
  {
    id: "vizi",
    title: "I sette vizi in profondità",
    subtitle: "Dinamica psicologica e antidoti",
    html: `
      <p>Li tratto con la loro <strong>dinamica psicologica profonda</strong>, non solo come «cose brutte». La tradizione monastica (Evagrio, Cassiano, poi Tommaso d'Aquino) li ha studiati con una finezza che anticipa molta psicologia moderna.</p>

      <div class="vice-card">
        <h4>1. Superbia <span class="greek">superbia · ὑπερηφανία</span></h4>
        <p><strong>Cos'è davvero:</strong> non è autostima. È la pretesa di essere il fondamento di se stessi, di non dover nulla a nessuno — né a Dio, né agli altri. È il peccato di Genesi 3 («sarete come Dio») e di Lucifero («non servirò»).</p>
        <p><strong>Dinamica interiore:</strong> chi è superbo <em>non riesce a ricevere</em>. Non accetta correzioni, non chiede aiuto, non sa dire grazie in senso profondo, non sa dire scusa.</p>
        <p><strong>Segni sottili:</strong> il falso umile, il perfezionista (che non accetta il limite), il critico perenne (che si eleva abbassando gli altri), chi «non si fida di nessuno».</p>
        <p class="antidote"><strong>Antidoto:</strong> l'umiltà — che non è umiliazione, ma <em>verità su di sé</em>. Agostino: «Cosa hai che tu non abbia ricevuto?»</p>
      </div>

      <div class="vice-card">
        <h4>2. Avarizia <span class="greek">avaritia · φιλαργυρία</span></h4>
        <p><strong>Cos'è davvero:</strong> non è avere soldi, è <em>dipendere</em> dai soldi. È il bisogno di accumulare come protezione contro la vulnerabilità della vita. Dietro l'avarizia c'è sempre <strong>paura</strong>: del futuro, della mancanza, della morte.</p>
        <p><strong>Dinamica interiore:</strong> l'avaro sostituisce le relazioni con i beni. I beni sono più controllabili delle persone, non tradiscono, non invecchiano, non muoiono (crede lui).</p>
        <p><strong>Segni sottili:</strong> l'accumulo che non serve mai, l'incapacità di godere, la durezza verso i bisogni altrui, il calcolare tutto in termini economici anche nelle relazioni.</p>
        <p class="antidote"><strong>Antidoto:</strong> la generosità e il distacco. Non la miseria, ma la libertà di <em>dare</em>. Gesù: «Dove è il tuo tesoro, lì sarà anche il tuo cuore» (Mt 6,21).</p>
      </div>

      <div class="vice-card">
        <h4>3. Lussuria <span class="greek">luxuria · πορνεία</span></h4>
        <p><strong>Cos'è davvero:</strong> non è la sessualità in sé (che è dono di Dio, vedi il Cantico dei Cantici). È l'uso disordinato dell'eros, in cui l'altro viene ridotto a <em>oggetto di godimento</em> invece che riconosciuto come persona.</p>
        <p><strong>Dinamica interiore:</strong> la lussuria <em>frammenta</em>. Separa il corpo dall'anima, il piacere dalla relazione, il desiderio dal dono. Chi la coltiva finisce per non riuscire più a integrare sessualità e amore.</p>
        <p><strong>Segni sottili:</strong> la pornografia come norma (riprogramma il desiderio a rispondere a immagini e non a persone), la seduttività compulsiva, l'incapacità di intimità non sessuale.</p>
        <p class="antidote"><strong>Antidoto:</strong> la castità — che <strong>non è repressione</strong> ma <em>integrazione</em>. Saper amare con tutto se stessi: corpo, cuore, mente, spirito.</p>
      </div>

      <div class="vice-card">
        <h4>4. Invidia <span class="greek">invidia · φθόνος</span></h4>
        <p><strong>Cos'è davvero:</strong> <em>tristezza per il bene altrui</em>. Non è desiderare ciò che l'altro ha (quello è il desiderio) — è soffrire che l'altro lo abbia. Kierkegaard la chiamava «ammirazione infelice».</p>
        <p><strong>Dinamica interiore:</strong> l'invidioso vive l'esistenza come gioco a somma zero. Se tu hai, io ho meno. Paradosso crudele: <strong>l'invidia non dà nemmeno piacere al peccatore</strong>. È solo veleno.</p>
        <p><strong>Segni sottili:</strong> gioire segretamente dei fallimenti altrui (<em>Schadenfreude</em>), sminuire i successi («sì, ma ha avuto fortuna»), il commento acido mascherato da battuta.</p>
        <p class="antidote"><strong>Antidoto:</strong> la gratitudine e la <em>misericordia del cuore largo</em> — capace di gioire del bene altrui come se fosse proprio. Paolo: «Gioire con chi gioisce» (Rm 12,15).</p>
      </div>

      <div class="vice-card">
        <h4>5. Gola <span class="greek">gula · γαστριμαργία</span></h4>
        <p><strong>Cos'è davvero:</strong> molto più del mangiare troppo. È l'incapacità di porre misura al piacere sensoriale, il bisogno di riempirsi per non sentire. Oggi la chiameremmo <em>dipendenza</em> in senso ampio.</p>
        <p><strong>Dinamica interiore:</strong> usa il piacere come anestesia contro un vuoto. Non mangia perché ha fame — mangia perché ha paura, è solo, è ansioso, è annoiato.</p>
        <p><strong>Segni sottili:</strong> l'alimentazione come terapia emotiva, l'incapacità di digiunare, il pensiero ossessivo del prossimo pasto/acquisto/gratificazione, il perdere il gusto reale.</p>
        <p class="antidote"><strong>Antidoto:</strong> il digiuno — non come punizione, ma come allenamento alla <em>libertà interiore</em>. Chi digiuna riscopre il sapore vero delle cose.</p>
      </div>

      <div class="vice-card">
        <h4>6. Ira <span class="greek">ira · ὀργή</span></h4>
        <p><strong>Cos'è davvero:</strong> attenzione alla distinzione. Esiste un'ira giusta — Gesù rovescia i tavoli nel tempio. L'ira-vizio è diversa: è il <em>desiderio di male per l'altro</em>, la rabbia che vuole distruggere, non correggere.</p>
        <p><strong>Dinamica interiore:</strong> l'iracondo ha un <em>nucleo ferito</em> che percepisce ogni contraddizione come aggressione. Spesso la rabbia esplosiva nasconde paura, insicurezza, sofferenza antica non elaborata.</p>
        <p><strong>Segni sottili:</strong> il rancore (l'ira che cova per anni), il sarcasmo distruttivo, il silenzio punitivo, la vendetta lucida e fredda.</p>
        <p class="antidote"><strong>Antidoto:</strong> la mitezza — che <strong>non è debolezza</strong>, ma forza sotto controllo. Pr 16,32: «Chi domina se stesso vale più di chi espugna una città.» Gesù: «Beati i miti» (Mt 5,5).</p>
      </div>

      <div class="vice-card">
        <h4>7. Accidia <span class="greek">acedia · ἀκηδία</span></h4>
        <p><strong>Cos'è davvero:</strong> il vizio più sottile e più moderno. <strong>Non è pigrizia fisica</strong> — si può essere iperattivi e accidiosi insieme. È la <em>tristezza del bene</em>, il «non-mi-importa» esistenziale.</p>
        <p><strong>Dinamica interiore:</strong> ha perso il senso. Sa quello che dovrebbe fare (pregare, amare, impegnarsi) ma non <em>sente</em> più niente verso di esso. Forma attiva: fuga nel lavoro, nel rumore, nella distrazione perpetua.</p>
        <p><strong>Segni sottili moderni:</strong> il doom-scrolling infinito, l'incapacità di raccoglimento, il «tanto non cambia niente», l'abbandono silenzioso di ciò che si amava.</p>
        <p class="antidote"><strong>Antidoto:</strong> la <em>magnanimità</em> (letteralmente «grande-animo») e la disciplina del presente. I Padri: «Resta nella tua cella, e la tua cella ti insegnerà tutto.»</p>
      </div>

      <h4>Il filo che li unisce</h4>
      <p>Ogni vizio è una <strong>buona pulsione deviata</strong>:</p>
      <table class="teaching-table">
        <thead><tr><th>Vizio</th><th>Pulsione buona deviata</th></tr></thead>
        <tbody>
          <tr><td>Superbia</td><td>Il desiderio di grandezza</td></tr>
          <tr><td>Avarizia</td><td>Il bisogno di sicurezza</td></tr>
          <tr><td>Lussuria</td><td>Il desiderio d'amore e unione</td></tr>
          <tr><td>Invidia</td><td>La tensione a migliorarsi</td></tr>
          <tr><td>Gola</td><td>Il piacere come gratitudine</td></tr>
          <tr><td>Ira</td><td>La passione per la giustizia</td></tr>
          <tr><td>Accidia</td><td>Il bisogno di senso</td></tr>
        </tbody>
      </table>
      <p class="highlight-box">Il vizio non è un'aggiunta aliena — è un bene disordinato. La guarigione non è <em>sopprimere</em> la pulsione, ma <em>ri-ordinarla</em>.</p>
    `
  },
  // --------------------------------------------------------
  {
    id: "sociali",
    title: "I peccati sociali nei profeti",
    subtitle: "Amos, Isaia, Michea, Gesù",
    html: `
      <p>Questa parte sorprende sempre. Molti pensano che la Bibbia sia principalmente preoccupata di sessualità e pietà personale. <strong>Non è così</strong>. Se metti insieme tutti i versetti profetici, la denuncia più frequente è contro <strong>l'ingiustizia sociale, economica, politica</strong>.</p>

      <h4>Il principio teologico</h4>
      <p>Dio nella Bibbia non è neutrale. Si schiera. Si dichiara <strong>difensore di quattro categorie</strong>:</p>
      <ul class="four-cats">
        <li>l'<strong>orfano</strong> (<em>yatom</em>)</li>
        <li>la <strong>vedova</strong> (<em>almanah</em>)</li>
        <li>lo <strong>straniero</strong> (<em>ger</em>)</li>
        <li>il <strong>povero</strong> (<em>ani, ebyon</em>)</li>
      </ul>
      <p>Sono i «senza voce» della società antica — chi non ha un uomo adulto israelita a difenderlo in tribunale. Dio dichiara: <em>«io sono il loro goel»</em> (riscattatore, difensore). Chi li opprime, opprime Dio.</p>
      <blockquote class="teaching-quote">
        «Il Signore è il Dio degli dèi, il Signore dei signori… che rende giustizia all'orfano e alla vedova, ama il forestiero e gli dà pane e vestito.» (Dt 10,17-18)
      </blockquote>

      <h4>Amos — il profeta della giustizia sociale</h4>
      <p>Pastore semplice dell'VIII sec. a.C., va nel regno del Nord in un periodo di prosperità economica. Vede che la ricchezza è concentrata nelle mani di pochi mentre i poveri sono schiacciati.</p>
      <blockquote class="teaching-quote">
        «Vendono il giusto per denaro e il povero per un paio di sandali. Essi calpestano come polvere della terra la testa dei poveri.» (Am 2,6-7)
      </blockquote>
      <blockquote class="teaching-quote">
        «Voi che dite: "Quando sarà passato il novilunio per poter vendere il grano? E il sabato perché si possa smerciare il frumento, diminuendo l'efa e aumentando il siclo e usando bilance false?"» (Am 8,4-6)
      </blockquote>
      <p><strong>Traduzione:</strong> pesi truccati, salari non pagati, sfruttamento del debole, speculazione sul cibo di base. Tutto questo è <em>abominio</em> per Dio.</p>
      <p>Il colpo finale (Am 5,21-24): Dio dice <em>«Io detesto le vostre feste religiose. Non tollero i vostri sacrifici. Ma scorra come acqua il diritto e la giustizia come torrente perenne.»</em> Il culto è inutile, anzi disgustoso, se nella vita sociale si calpestano i poveri.</p>

      <h4>Isaia — la stessa linea</h4>
      <blockquote class="teaching-quote">
        «Quando stendete le mani, io distolgo gli occhi; anche se moltiplicate le preghiere, io non ascolto. Le vostre mani grondano sangue… Cercate la giustizia, soccorrete l'oppresso, rendete giustizia all'orfano.» (Is 1,15-17)
      </blockquote>
      <p>Il celebre <strong>Isaia 58</strong> sul digiuno: «Non è piuttosto questo il digiuno che voglio: sciogliere le catene inique, togliere i legami del giogo, rimandare liberi gli oppressi… dividere il pane con l'affamato, introdurre in casa i miseri, senza tetto, vestire chi è nudo?»</p>

      <h4>Michea — la sintesi</h4>
      <p><strong>Mi 6,8</strong> è forse il versetto che meglio riassume tutta la tradizione profetica:</p>
      <blockquote class="teaching-quote big">
        «Uomo, ti è stato insegnato ciò che è buono e ciò che richiede il Signore da te: <strong>praticare la giustizia, amare la misericordia, camminare umilmente con il tuo Dio</strong>.»
      </blockquote>

      <h4>Catalogo dei peccati sociali</h4>
      <ol class="numbered">
        <li><strong>Accumulo fondiario</strong> — Is 5,8: «Guai a voi che aggiungete casa a casa e unite campo a campo.»</li>
        <li><strong>Pesi e misure falsati</strong> — frode commerciale sistematica.</li>
        <li><strong>Salario del lavoratore trattenuto</strong> — Ger 22,13; Gc 5,4: «Il salario dei lavoratori che voi avete frodato, grida.»</li>
        <li><strong>Corruzione della giustizia</strong> — giudici che si fanno comprare.</li>
        <li><strong>Sfruttamento dei poveri indebitati</strong> — pignoramento del mantello (Es 22,25).</li>
        <li><strong>Oppressione dello straniero</strong> — Es 22,20: «Non molesterai il forestiero, perché anche voi siete stati forestieri in Egitto.»</li>
        <li><strong>Violenza dei potenti</strong> — dai re che uccidono per vigne (Acab e Nabot, 1 Re 21) ai governanti che «sbranano il popolo mio» (Mi 3,3).</li>
        <li><strong>Religione come copertura</strong> — il peccato forse più denunciato: culto impeccabile, vita sociale oppressiva.</li>
      </ol>

      <h4>Gesù nella stessa linea</h4>
      <p>Il discorso programmatico (Lc 4,18) cita Isaia 61: «lo Spirito del Signore mi ha mandato a portare ai poveri il lieto annuncio, a proclamare ai prigionieri la liberazione.»</p>
      <p>Il <strong>giudizio finale in Mt 25,31-46</strong>: il criterio è unico — <em>«avevo fame e mi avete dato da mangiare… ero straniero e mi avete accolto… ero in carcere e siete venuti a trovarmi.»</em> Chi è escluso non è chi aveva dottrine sbagliate, ma chi non ha visto Cristo nel povero.</p>

      <p class="highlight-box">I versetti biblici sul <strong>denaro, la giustizia economica, il trattamento del povero</strong> sono <em>di ordini di grandezza</em> più numerosi di quelli sulla sessualità. Nella predicazione popolare spesso è il contrario — un <em>bias</em> che i profeti smaschererebbero con durezza.</p>
    `
  },
  // --------------------------------------------------------
  {
    id: "guarigione",
    title: "Il cammino di guarigione",
    subtitle: "Sei tappe bibliche e psicologicamente profonde",
    html: `
      <p>La Bibbia non parla di peccato per condannare, ma per guarire. Ecco il percorso in <strong>sei tappe</strong>.</p>

      <div class="step-card">
        <div class="step-num">1</div>
        <div class="step-body">
          <h4>Riconoscimento <span class="hebrew">hakkarah</span></h4>
          <p>Prima di tutto: <strong>vedere</strong>. Il peccato più insidioso è quello negato. «Se diciamo di essere senza peccato, inganniamo noi stessi» (1 Gv 1,8).</p>
          <p>È il momento in cui Davide, messo davanti al suo peccato dal profeta Natan, smette di dirsi che «era il re, aveva i suoi diritti» e dice semplicemente: <em>«Ho peccato contro il Signore»</em> (2 Sam 12).</p>
          <p><strong>Ostacolo:</strong> la razionalizzazione («tutti lo fanno», «non è stato così grave», «è colpa di…»).</p>
          <p><strong>Chiave:</strong> la <em>preghiera della verità</em>. Sal 139,23-24: «Scrutami, o Dio, e conosci il mio cuore.»</p>
        </div>
      </div>

      <div class="step-card">
        <div class="step-num">2</div>
        <div class="step-body">
          <h4>Contrizione <span class="hebrew">nicham · metanoia</span></h4>
          <p>Non è senso di colpa patologico. È <em>dolore sano</em> per aver ferito qualcuno che ami.</p>
          <div class="two-cols">
            <div class="col-box">
              <h5>Attrizione</h5>
              <p>Dispiacere per paura delle conseguenze («se no vado all'inferno»). È un inizio, ma è centrato su di sé.</p>
            </div>
            <div class="col-box">
              <h5>Contrizione</h5>
              <p>Dispiacere per <em>aver ferito Dio</em> che è amore. È centrata sulla relazione.</p>
            </div>
          </div>
          <p>La parola greca <strong>metanoia</strong> significa letteralmente <em>«cambiare mente/cuore»</em>. Non è rimorso, è <strong>riorientamento profondo</strong> — girare il volante dell'esistenza.</p>
        </div>
      </div>

      <div class="step-card">
        <div class="step-num">3</div>
        <div class="step-body">
          <h4>Confessione <span class="hebrew">vidduy · exomologesis</span></h4>
          <p>Dire. Mettere in parola.</p>
          <blockquote class="teaching-quote">
            «Tacevo e si logoravano le mie ossa… Ti ho manifestato il mio peccato, non ho coperto la mia colpa… tu hai tolto la mia colpa.» (Sal 32,3-5)
          </blockquote>
          <p>Dire il peccato a qualcuno — a Dio nella preghiera, a un confessore, a un accompagnatore — ha un potere di liberazione che il solo pensarlo non ha. <strong>Il peccato taciuto marcisce; il peccato detto si apre alla luce.</strong></p>
          <p>Gc 5,16: «Confessate gli uni agli altri i vostri peccati e pregate gli uni per gli altri per essere guariti.»</p>
        </div>
      </div>

      <div class="step-card">
        <div class="step-num">4</div>
        <div class="step-body">
          <h4>Riparazione <span class="hebrew">tikkun · teshuvah</span></h4>
          <p>Non basta dire «mi dispiace». Dove possibile, <strong>si ripara</strong>.</p>
          <p><strong>Zaccheo</strong> (Lc 19,8): «Ecco, Signore, io do la metà di ciò che possiedo ai poveri; e se ho frodato qualcuno, restituisco quattro volte tanto.»</p>
          <p class="highlight-box">Per i peccati contro Dio, basta il pentimento davanti a Dio. Per i peccati contro il prossimo, il pentimento davanti a Dio non basta — devi prima riconciliarti con chi hai ferito (Mt 5,23-24).</p>
        </div>
      </div>

      <div class="step-card">
        <div class="step-num">5</div>
        <div class="step-body">
          <h4>Accoglienza della grazia</h4>
          <p>La più difficile per molti: <strong>lasciarsi perdonare</strong>.</p>
          <p>Spesso chi ha fatto le prime quattro tappe si ferma qui. Resta nel rimorso. Non riesce a credere di essere stato davvero perdonato. <em>Questo è un peccato ulteriore — la sfiducia nella misericordia.</em></p>
          <p><strong>Giuda e Pietro</strong> tradiscono entrambi Gesù. La differenza: Pietro piange e torna; Giuda non crede che possa essere perdonato e si impicca. Il peccato ultimo non è tradire, è <em>non credere al perdono</em>.</p>
          <p>L'immagine più bella: il padre del figliol prodigo (Lc 15) vede il figlio ancora lontano, gli <em>corre incontro</em>, lo abbraccia, fa festa. Non lo lascia nemmeno finire il discorsetto preparato. <strong>La misericordia è sempre più rapida del pentimento.</strong></p>
        </div>
      </div>

      <div class="step-card">
        <div class="step-num">6</div>
        <div class="step-body">
          <h4>Trasformazione <span class="hebrew">kainē ktisis</span></h4>
          <p>L'ultima tappa è la più lunga: diventare diversi. «Se uno è in Cristo, è una nuova creatura» (2 Cor 5,17).</p>
          <ul>
            <li>è <strong>graduale</strong> (la tradizione orientale la chiama <em>theosis</em> — divinizzazione progressiva)</li>
            <li>richiede <strong>pratica</strong> (preghiera, Scrittura, sacramenti, comunità, digiuno, carità)</li>
            <li>include <strong>ricadute</strong> — i Padri dicevano «cadere e rialzarsi è la vita del monaco»</li>
            <li>produce <strong>frutti visibili</strong> — quelli dello Spirito (Gal 5,22-23)</li>
          </ul>
          <p>Il segno che la guarigione sta avvenendo non è <em>non sentire più tentazione</em>, ma: reagire in modo sempre più libero, amare più largamente, perdonare più facilmente, godere di più del bene semplice.</p>
        </div>
      </div>

      <p class="highlight-box big">
        <strong>Il principio nascosto:</strong> la misericordia <em>precede</em> il pentimento, non lo segue.<br><br>
        Nelle religioni della prestazione: prima ti penti, poi vieni perdonato. Nel Vangelo: <strong>sei perdonato, e questo ti rende capace di pentirti</strong>. Zaccheo cambia vita <em>perché</em> Gesù è entrato in casa sua, non per ottenere che entrasse.
      </p>
    `
  },
  // --------------------------------------------------------
  {
    id: "conseguenze",
    title: "Le conseguenze dei peccati",
    subtitle: "Cosa produce realmente ogni vizio",
    html: `
      <p>Il peccato porta in sé la sua conseguenza. Non è che Dio aspetta dietro l'angolo per punire; è che <strong>le azioni hanno effetti intrinseci</strong>. Come la gravità: non è una regola arbitraria, è come funziona la realtà.</p>
      <p>Paolo lo dice in Romani 1: Dio «li abbandona» al loro desiderio — cioè lascia che le conseguenze facciano il loro corso. <strong>Il castigo del peccato è <em>essere diventati</em> ciò che il peccato ti fa diventare.</strong></p>

      <div class="consequence-card">
        <h4>Superbia</h4>
        <ul>
          <li><strong>Nella persona:</strong> isolamento crescente. Durezza interiore. Incapacità di dire «non lo so», «mi sono sbagliato», «ho bisogno di te».</li>
          <li><strong>Nelle relazioni:</strong> attrae adulatori e allontana persone vere. Finisce circondato da <em>yes-men</em> o da solo.</li>
          <li><strong>Esito lungo:</strong> <em>durezza del cuore</em>. Il cuore indurito non è più in grado di sentire, pentirsi, convertirsi. Si autoalimenta: più sei indurito, meno vedi di esserlo.</li>
          <li class="scripture">«Prima della rovina viene l'orgoglio, prima della caduta lo spirito altero.» (Pr 16,18)</li>
        </ul>
      </div>

      <div class="consequence-card">
        <h4>Avarizia</h4>
        <ul>
          <li><strong>Nella persona:</strong> ansia cronica. Non ha mai abbastanza perché il suo bisogno non è razionale — è esistenziale.</li>
          <li><strong>Nelle relazioni:</strong> strumentalizza. Le persone diventano utili o inutili secondo il bilancio.</li>
          <li><strong>Esito lungo:</strong> un cuore-cassaforte. Chi passa la vita ad accumulare arriva spesso alla morte da solo e scoprendo di non aver mai vissuto.</li>
          <li class="scripture">«Stolto, questa notte ti sarà richiesta la tua vita. E quello che hai preparato di chi sarà?» (Lc 12, ricco stolto)</li>
        </ul>
      </div>

      <div class="consequence-card">
        <h4>Lussuria</h4>
        <ul>
          <li><strong>Nella persona:</strong> frammentazione interiore. Il desiderio diventa sempre più intenso e sempre meno saziante — legge di qualunque dipendenza.</li>
          <li><strong>Nelle relazioni:</strong> incapacità di intimità reale. L'eros disordinato consuma la capacità di amare.</li>
          <li><strong>Esito lungo:</strong> solitudine profonda anche in mezzo a molti partner. Un mondo interiore in cui l'altro non esiste davvero come persona.</li>
        </ul>
      </div>

      <div class="consequence-card">
        <h4>Invidia</h4>
        <ul>
          <li><strong>Nella persona:</strong> tristezza cronica. L'invidioso <em>non gode mai</em>. Se gli va male soffre; se gli va bene, qualcun altro sta meglio, e soffre comunque.</li>
          <li><strong>Nelle relazioni:</strong> incapacità di amicizia vera. L'amicizia richiede gioire del bene dell'altro; l'invidia lo rende impossibile.</li>
          <li><strong>Esito lungo:</strong> un'anima grigia. Tutto è valutato comparativamente, nulla è gustato per sé.</li>
          <li class="scripture">«Per l'invidia del diavolo la morte è entrata nel mondo.» (Sap 2,24)</li>
        </ul>
      </div>

      <div class="consequence-card">
        <h4>Gola (e dipendenze)</h4>
        <ul>
          <li><strong>Nella persona:</strong> schiavitù da ciò che doveva servire. La persona perde libertà progressivamente: non decide più lei, lo decide il bisogno.</li>
          <li><strong>Nelle relazioni:</strong> assenza. Si è fisicamente con gli altri ma mentalmente altrove — col pensiero fisso sulla sostituzione gratificante.</li>
          <li><strong>Esito lungo:</strong> l'anestesia generalizzata. Non si sente più niente a fondo — né dolore né gioia.</li>
        </ul>
      </div>

      <div class="consequence-card">
        <h4>Ira</h4>
        <ul>
          <li><strong>Nella persona:</strong> usura nervosa e fisica. Vive due volte ogni offesa (rumina il passato).</li>
          <li><strong>Nelle relazioni:</strong> terra bruciata. Una parola detta nell'ira può ferire per vent'anni.</li>
          <li><strong>Esito lungo:</strong> amarezza cristallizzata. La sua storia è diventata una lista di torti subiti.</li>
          <li class="scripture">«Non tramonti il sole sopra la vostra ira, e non date occasione al diavolo.» (Ef 4,26-27)</li>
        </ul>
      </div>

      <div class="consequence-card">
        <h4>Accidia</h4>
        <ul>
          <li><strong>Nella persona:</strong> vuoto progressivo. Perde gradualmente la capacità di desiderare. Tutto sembra «non vale la pena».</li>
          <li><strong>Nelle relazioni:</strong> tiepidezza. Non ama fortemente, non odia fortemente, non si impegna.</li>
          <li><strong>Esito lungo:</strong> la <strong>disperazione</strong> — perdita della speranza. Il vizio che uccide silenziosamente il desiderio stesso.</li>
          <li class="scripture">«Conosco le tue opere: tu non sei né freddo né caldo. Magari tu fossi freddo o caldo! Ma poiché sei tiepido… sto per vomitarti dalla mia bocca.» (Ap 3,15-16)</li>
        </ul>
      </div>

      <p class="highlight-box big">
        <strong>Il filo comune delle conseguenze:</strong><br>
        • Perdita di libertà — ogni vizio rende schiavi di ciò che prometteva libertà<br>
        • Perdita di gusto — tutto diventa progressivamente insipido<br>
        • Perdita di relazione — ci si ritrova soli<br>
        • Perdita di sé — si diventa sconosciuti a se stessi<br><br>
        Gesù: <em>«Che giova all'uomo guadagnare il mondo intero se poi perde se stesso?»</em> (Lc 9,25)<br><br>
        Il peccato non è sbagliato perché proibito. <strong>È proibito perché ti disfa.</strong>
      </p>
    `
  },
  // --------------------------------------------------------
  {
    id: "frutti",
    title: "I frutti del cammino con Dio",
    subtitle: "Dieci trasformazioni concrete",
    html: `
      <p class="intro-note">Il cammino con Dio <strong>non esente dalla sofferenza</strong>. Giobbe soffre, i profeti soffrono, Gesù soffre. Ciò che cambia non è l'assenza di dolore, ma la <em>qualità profonda dell'esistenza</em> dentro ogni circostanza.</p>

      <div class="fruit-card">
        <div class="fruit-num">1</div>
        <div>
          <h4>Pace interiore <span class="hebrew">shalom · eirene</span></h4>
          <p>Non è assenza di problemi, è <strong>integrità interiore</strong>. <em>Shalom</em> significa <em>pienezza, interezza, tutto al suo posto</em>.</p>
          <p>Gv 14,27: «Vi lascio la pace, vi do la mia pace. <strong>Non come la dà il mondo</strong>, io la do a voi.»</p>
        </div>
      </div>

      <div class="fruit-card">
        <div class="fruit-num">2</div>
        <div>
          <h4>Libertà interiore</h4>
          <p>Chi cammina viene gradualmente <strong>sciolto dalle catene</strong> — compulsioni, paure, bisogni ossessivi.</p>
          <p>Gal 5,1: «Cristo ci ha liberati perché restassimo liberi.»</p>
          <p class="muted">Segno: riuscire a fare a meno di cose che prima sembravano indispensabili. Poter dire «no» a sé per dire «sì» a qualcosa di più grande.</p>
        </div>
      </div>

      <div class="fruit-card">
        <div class="fruit-num">3</div>
        <div>
          <h4>Gioia <span class="hebrew">simchah · chara</span></h4>
          <p>Va distinta dal piacere e dall'euforia. La gioia biblica è <strong>profonda, stabile, e convive col dolore</strong>. Paolo la vive in carcere: «Rallegratevi sempre nel Signore» (Fil 4,4) — da una cella.</p>
          <p class="muted">Segno: ridere ancora, stupirsi ancora, gustare ancora — anche nei periodi difficili.</p>
        </div>
      </div>

      <div class="fruit-card">
        <div class="fruit-num">4</div>
        <div>
          <h4>Capacità di amare</h4>
          <p>Forse il frutto più decisivo. Si diventa <em>capaci di amare persone difficili</em>. Non per eroismo, ma perché si scopre di essere stati amati gratuitamente.</p>
          <p>1 Gv 4,19: «Noi amiamo perché egli ci ha amati per primo.»</p>
          <p class="muted">L'amore biblico (<em>agape</em>) non è sentimento, è decisione che persevera.</p>
        </div>
      </div>

      <div class="fruit-card">
        <div class="fruit-num">5</div>
        <div>
          <h4>Chiarezza sulla propria identità</h4>
          <p>Il cammino rivela <strong>chi sei davvero</strong>. Non chi gli altri dicono che sei, non le tue prestazioni — ma il tuo nome vero davanti a Dio.</p>
          <p>Is 43,1: «Ti ho chiamato per nome, tu mi appartieni.»</p>
          <p class="muted">Segno: non dipendere più ossessivamente dall'approvazione altrui. Un'identità che non oscilla col vento.</p>
        </div>
      </div>

      <div class="fruit-card">
        <div class="fruit-num">6</div>
        <div>
          <h4>Senso</h4>
          <p>Risposta a <em>perché esisto, cosa vale la pena, dove va tutto questo</em>. Non come teoria, come esperienza vissuta.</p>
          <p>Rm 8,28: «Tutto concorre al bene di coloro che amano Dio.» <em>Non che tutto sia bene — ma tutto può essere integrato in un disegno di bene.</em></p>
        </div>
      </div>

      <div class="fruit-card">
        <div class="fruit-num">7</div>
        <div>
          <h4>Consistenza</h4>
          <p>Chi cammina con Dio <em>tiene</em> nei momenti difficili. Ha radici. Non si fa travolgere dalle mode, dalle crisi, dagli umori.</p>
          <p>Sal 1,3: «Sarà come albero piantato lungo corsi d'acqua… le sue foglie non appassiscono.»</p>
        </div>
      </div>

      <div class="fruit-card">
        <div class="fruit-num">8</div>
        <div>
          <h4>Capacità di attraversare il dolore</h4>
          <p>Non l'assenza di dolore, ma la capacità di attraversarlo <em>senza esserne distrutti</em>, e di trasformarlo in qualcosa di fecondo.</p>
          <p class="muted">Il Venerdì Santo non è l'ultima parola. Persone che hanno passato lutti devastanti ne escono più profonde, più tenere, più sagge.</p>
        </div>
      </div>

      <div class="fruit-card">
        <div class="fruit-num">9</div>
        <div>
          <h4>Speranza <span class="hebrew">elpis</span></h4>
          <p>Il contrario esatto dell'accidia. Non ottimismo ingenuo: è la certezza che <strong>la storia ha un senso, che il male non ha l'ultima parola, che l'amore vince</strong>.</p>
          <p>1 Pt 1,3: «Una speranza viva.»</p>
        </div>
      </div>

      <div class="fruit-card">
        <div class="fruit-num">10</div>
        <div>
          <h4>Crescita <span class="hebrew">theosis</span></h4>
          <p>La tradizione orientale ha una parola splendida: <em>theosis</em>, «divinizzazione». Non diventare Dio, ma essere <strong>reso partecipe della vita divina</strong> — sempre più capace di amare come Dio ama.</p>
          <p>2 Pt 1,4: «diventiate partecipi della natura divina.»</p>
          <p class="muted">Cammino infinito, senza punto di arrivo in questa vita. Ma crescita reale, verificabile nel tempo.</p>
        </div>
      </div>

      <h4>Un'avvertenza onesta</h4>
      <div class="warning-box">
        <p><strong>Primo:</strong> il cammino con Dio <em>non è lineare</em>. Aridità, notti oscure, periodi di fatica, ricadute. I santi stessi ne parlano. La crescita è a spirale, non a retta.</p>
        <p><strong>Secondo:</strong> ci sono credenti che vivono male e non credenti che vivono bene. Il cammino con Dio non è garanzia automatica. Dio opera in modi più ampi di quanto le nostre categorie prevedano.</p>
        <p><strong>Terzo:</strong> i frutti non sono il motivo per cui si cammina con Dio. Sono conseguenze, non scopi. Ci si avvicina a Dio <em>perché Dio è Dio</em>, non per ottenere pace e senso. Paradossalmente, i frutti arrivano proprio quando smetti di inseguirli.</p>
      </div>
    `
  },
  // --------------------------------------------------------
  {
    id: "confronto",
    title: "Il confronto radicale",
    subtitle: "Cammino del peccato vs cammino con Dio",
    html: `
      <p>Metto in colonna il contrasto essenziale tra i due cammini.</p>

      <table class="teaching-table compare">
        <thead>
          <tr>
            <th>Cammino del peccato</th>
            <th>Cammino con Dio</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Schiavitù crescente</td><td>Libertà crescente</td></tr>
          <tr><td>Gusto delle cose che si spegne</td><td>Gusto che si affina</td></tr>
          <tr><td>Solitudine (anche in mezzo agli altri)</td><td>Comunione (anche nella solitudine)</td></tr>
          <tr><td>Ansia cronica</td><td>Pace che non dipende dalle circostanze</td></tr>
          <tr><td>Frammentazione interiore</td><td>Integrazione di sé</td></tr>
          <tr><td>Tristezza spenta o piaceri violenti</td><td>Gioia stabile</td></tr>
          <tr><td>Durezza di cuore</td><td>Cuore sempre più capace di amare</td></tr>
          <tr><td>Ruminazione, rancore</td><td>Perdono, apertura</td></tr>
          <tr><td>Identità fragile (dipende dall'approvazione)</td><td>Identità radicata (so chi sono)</td></tr>
          <tr><td>Vita senza senso o senso costruito</td><td>Senso ricevuto, partecipato</td></tr>
          <tr><td>Il dolore distrugge</td><td>Il dolore trasforma</td></tr>
          <tr><td>Paura della morte</td><td>Speranza oltre la morte</td></tr>
        </tbody>
      </table>

      <div class="final-box">
        <h4>Il principio nascosto</h4>
        <p class="big-quote">
          <strong>Il peccato promette libertà e dà schiavitù.<br>
          Il cammino con Dio chiede obbedienza e dà libertà.</strong>
        </p>
        <p>Il peccato dice «fai ciò che vuoi» e ti rende incapace di volere davvero. Il Vangelo chiede di «rinnegare se stessi» e ti restituisce a te stesso finalmente vero.</p>
        <p>È il grande paradosso di Mc 8,35:</p>
        <blockquote class="teaching-quote big">
          «Chi vorrà salvare la propria vita la perderà; ma chi perderà la propria vita per causa mia e del Vangelo, la salverà.»
        </blockquote>
        <p>Non è retorica. È una descrizione precisa di come funziona l'esistenza umana. <strong>La vita vera comincia quando smetto di essere al centro di me stesso.</strong></p>
      </div>
    `
  }
];
