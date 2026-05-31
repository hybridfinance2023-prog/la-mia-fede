// =============================================================
//  STUDI SAPIENZIALI — approfondimenti dettagliati per libro
//  Chiave = nome del libro (come in SAPIENZIALI, data.js).
//  Ogni studio è un array di sezioni { id, title, subtitle, html }.
//  Riusa le classi: word-card, keypoint, cov-meta, two-cols,
//  col-box, clean-list, struct-list, teaching-quote.
// =============================================================

const STUDI_SAPIENZIALI = {

  // ============================================================
  //  PROVERBI
  // ============================================================
  "Proverbi": {
    tagline: "Il manuale della sapienza pratica: imparare a vivere bene davanti a Dio e tra gli uomini.",
    facts: [
      { k: "Titolo ebraico", v: "Mishlè (מִשְׁלֵי) — «proverbi, similitudini»" },
      { k: "Capitoli", v: "31 · circa 915 sentenze" },
      { k: "Autori", v: "Salomone, «i saggi», Agur, Lemuel" },
      { k: "Genere", v: "Letteratura sapienziale (chokmah)" },
      { k: "Periodo", v: "X-V sec. a.C. (raccolta finale post-esilica)" },
      { k: "Versetto-chiave", v: "«Il timore del Signore è principio della conoscenza» (Pr 1,7)" }
    ],
    sections: [

      {
        id: "cos-e",
        title: "Che cos'è il libro dei Proverbi",
        subtitle: "Non promesse magiche, ma saggezza per vivere",
        html: `
          <p>Proverbi è il libro più «terra terra» della Bibbia. Non parla di liturgia, non racconta grandi eventi della salvezza: parla di <strong>come si vive bene</strong>. Come usare la lingua, come gestire il denaro, come scegliere gli amici, come educare i figli, come lavorare, come dormire la notte con la coscienza pulita.</p>

          <p>La parola ebraica del titolo dà già la chiave di lettura.</p>

          <div class="word-card" tabindex="0">
            <div class="word-card-head">
              <span class="word-translit">mashal</span>
              <span class="word-greek">מָשָׁל</span>
              <span class="word-tap">tocca per scoprire</span>
            </div>
            <div class="word-card-body">
              <p>Da cui il plurale <em>mishlè</em>, il titolo del libro. <strong>Mashal</strong> non significa solo «proverbio»: significa <em>paragone, similitudine, sentenza che governa</em>. La stessa radice indica «dominare, governare». Un proverbio è una frase breve che <strong>mette ordine</strong> nel caos dell'esperienza: due righe che catturano una verità sulla vita e ti danno una presa su di essa.</p>
            </div>
          </div>

          <p>I proverbi sono <strong>osservazioni</strong>, non garanzie matematiche. «Educa il fanciullo secondo la via da seguire; anche quando sarà vecchio non se ne allontanerà» (Pr 22,6) non è una formula automatica: è una regola generale, ciò che <em>di norma</em> accade. È sapienza, non magia.</p>

          <div class="keypoint">
            Proverbi descrive il <strong>mondo così come funziona di solito</strong> sotto il governo di Dio. Per questo va letto insieme a <em>Giobbe</em> e <em>Qoèlet</em>, che mostrano le eccezioni dolorose: il giusto che soffre, lo sciocco che prospera. I tre libri insieme formano un dialogo. Proverbi dà la regola; Giobbe e Qoèlet custodiscono il mistero.
          </div>

          <p>L'obiettivo dichiarato è scritto nel prologo (Pr 1,2-6): dare <strong>prudenza ai semplici, conoscenza e riflessione ai giovani</strong>, e rendere il saggio ancora più saggio. È un libro pensato originariamente per <strong>educare i giovani</strong> alla vita adulta — e per questo conserva il tono affettuoso di un padre che parla al figlio.</p>
        `
      },

      {
        id: "struttura",
        title: "La struttura del libro",
        subtitle: "Sette raccolte, una sola scuola di sapienza",
        html: `
          <p>Proverbi non è un blocco unico: è un'<strong>antologia</strong>, cucita insieme da più raccolte di epoche diverse. Conoscerne le parti aiuta a non leggerlo come un elenco disordinato.</p>

          <ol class="struct-list">
            <li><span class="struct-ref">cc. 1-9</span> <strong>I discorsi del padre.</strong> Lunghe esortazioni di un padre al figlio, e i grandi poemi sulla <em>Sapienza personificata</em>. È il «portale» del libro, la chiave interpretativa di tutto il resto.</li>
            <li><span class="struct-ref">10,1 - 22,16</span> <strong>I proverbi di Salomone.</strong> Centinaia di sentenze brevi, per lo più di due righe in contrasto («il giusto… ma l'empio…»). Il cuore statistico del libro.</li>
            <li><span class="struct-ref">22,17 - 24,22</span> <strong>«Parole dei saggi».</strong> Trenta detti, con sorprendenti paralleli nella sapienza egiziana (l'<em>Insegnamento di Amenemope</em>).</li>
            <li><span class="struct-ref">24,23-34</span> <strong>Altri detti dei saggi.</strong> Una piccola appendice, con il celebre ritratto del pigro.</li>
            <li><span class="struct-ref">cc. 25-29</span> <strong>Proverbi di Salomone raccolti «dagli uomini di Ezechia».</strong> Una seconda collezione salomonica, riordinata secoli dopo alla corte del re Ezechia.</li>
            <li><span class="struct-ref">c. 30</span> <strong>Le parole di Agur.</strong> Tono umile e quasi mistico; i celebri «proverbi numerici» («tre cose… anzi quattro»).</li>
            <li><span class="struct-ref">c. 31</span> <strong>Le parole di Lemuel</strong> (consigli di una madre al re) e il poema acrostico della <em>donna forte</em> (31,10-31), che sigilla il libro.</li>
          </ol>

          <div class="keypoint">
            Nota il disegno d'insieme: il libro <strong>si apre</strong> con la Sapienza che chiama come una donna per le strade (c. 1, 8, 9) e <strong>si chiude</strong> con il ritratto di una donna concreta, la <em>eshet chayil</em> (c. 31). La Sapienza astratta dell'inizio prende carne nella vita reale alla fine. È una cornice voluta.
          </div>
        `
      },

      {
        id: "timore",
        title: "«Il timore del Signore»",
        subtitle: "Il principio di tutto: Pr 1,7 e 9,10",
        html: `
          <p>Tutto il libro ruota attorno a una sola frase, ripetuta come un ritornello all'inizio e al centro: «Il timore del Signore è il principio della conoscenza» (Pr 1,7) e «principio della sapienza» (Pr 9,10).</p>

          <div class="word-card" tabindex="0">
            <div class="word-card-head">
              <span class="word-translit">yir'at YHWH</span>
              <span class="word-greek">יִרְאַת יְהוָה</span>
              <span class="word-tap">tocca per scoprire</span>
            </div>
            <div class="word-card-body">
              <p>«Timore del Signore». <strong>Yir'ah</strong> non è terrore, paura schiacciante, ansia. È <strong>riverenza, stupore, rispetto profondo</strong> davanti a Chi è infinitamente più grande di te. È la posizione giusta della creatura davanti al Creatore: <em>non sono io il centro</em>. È la consapevolezza di vivere in un mondo che non ho fatto io e che obbedisce a un ordine che non ho stabilito io.</p>
            </div>
          </div>

          <p>La parola tradotta «principio» è <strong>reshìt</strong>: significa sia <em>inizio</em> (il primo passo, la porta d'ingresso) sia <em>fondamento, parte migliore, principio-cardine</em>. È la stessa parola che apre la Genesi: <em>bereshìt</em>, «in principio».</p>

          <div class="keypoint">
            Senza il timore del Signore, l'intelligenza diventa solo furbizia. Proverbi è radicale su questo: <strong>la vera sapienza non è un quoziente intellettivo, è una postura del cuore.</strong> Si può essere brillanti e stolti allo stesso tempo. La conoscenza tecnica senza riverenza per Dio produce l'uomo astuto che rovina se stesso e gli altri. La sapienza comincia quando smetti di metterti al centro.
          </div>

          <p>Per questo Proverbi non è un libro «laico» di buone maniere: è profondamente teologico. La saggezza pratica più concreta — pagare i debiti, tenere a freno la lingua, lavorare con onestà — affonda le radici in una relazione con Dio. Il <em>come vivere</em> dipende dal <em>davanti a Chi vivo</em>.</p>
        `
      },

      {
        id: "due-vie",
        title: "Le due vie",
        subtitle: "Ogni vita è un cammino — e porta da qualche parte",
        html: `
          <p>L'immagine portante di tutto il libro è il <strong>cammino</strong>. La vita è una strada, e ogni scelta è un passo che ti orienta in una direzione. Proverbi conosce <strong>due sole vie</strong>, e le contrappone in continuazione.</p>

          <div class="two-cols">
            <div class="col-box">
              <h5>La via del giusto <span class="muted">— derek tzaddiq</span></h5>
              <ul>
                <li>«Il sentiero dei giusti è come la luce dell'alba, che risplende sempre più fino a giorno pieno» (Pr 4,18)</li>
                <li>Conduce alla <strong>vita</strong>, alla pace, alla stabilità</li>
                <li>Si percorre con rettitudine, onestà, ascolto, umiltà</li>
              </ul>
            </div>
            <div class="col-box">
              <h5>La via dell'empio <span class="muted">— derek resha'im</span></h5>
              <ul>
                <li>«La via degli empi è come l'oscurità: non sanno dove inciampano» (Pr 4,19)</li>
                <li>Conduce alla <strong>morte</strong>, alla rovina, alla dispersione</li>
                <li>Si imbocca con menzogna, violenza, avidità, presunzione</li>
              </ul>
            </div>
          </div>

          <p>Non esiste, in Proverbi, una terza via neutra. Anche il non scegliere è una scelta. «C'è una via che all'uomo sembra diritta, ma sbocca in sentieri di morte» (Pr 14,12; ripetuto in 16,25): l'avvertimento più solenne del libro. <strong>Si può sbagliare strada in perfetta buona fede</strong> — ecco perché serve la sapienza, e non basta l'istinto.</p>

          <div class="keypoint">
            Il tema delle «due vie» attraversa tutta la Scrittura: il Salmo 1 («beato l'uomo che non segue il consiglio degli empi»), e nel Nuovo Testamento Gesù che parla della via larga e della via stretta (Mt 7,13-14). Gesù dirà di se stesso: «Io sono la via» (Gv 14,6). Proverbi prepara questa grammatica: <strong>la vita è un cammino, e conta dove conduce.</strong>
          </div>
        `
      },

      {
        id: "personaggi",
        title: "La galleria dei personaggi",
        subtitle: "Saggio, stolto, ingenuo, beffardo, pigro",
        html: `
          <p>Proverbi popola le sue pagine di <strong>tipi umani</strong> ricorrenti. Non sono persone reali, ma «maschere» che descrivono atteggiamenti del cuore. L'ebraico distingue con precisione ciò che l'italiano appiattisce in «stolto».</p>

          <div class="word-card" tabindex="0">
            <div class="word-card-head">
              <span class="word-translit">chakam</span>
              <span class="word-greek">חָכָם</span>
              <span class="word-tap">tocca per scoprire</span>
            </div>
            <div class="word-card-body">
              <p><strong>Il saggio.</strong> Non il più colto, ma chi sa <em>vivere bene</em>: ascolta la correzione, sceglie le parole, conosce il momento giusto. La sua qualità-chiave è l'<strong>ascolto</strong>: «Il saggio ascolta e aumenta il sapere» (Pr 1,5).</p>
            </div>
          </div>

          <div class="word-card" tabindex="0">
            <div class="word-card-head">
              <span class="word-translit">kesìl / evìl</span>
              <span class="word-greek">כְּסִיל</span>
              <span class="word-tap">tocca per scoprire</span>
            </div>
            <div class="word-card-body">
              <p><strong>Lo stolto.</strong> Non l'ignorante, ma chi <em>rifiuta</em> la correzione perché crede di sapere già tutto. «Lo stolto ritiene giusta la sua condotta» (Pr 12,15). Ripete i suoi errori: «Come il cane torna al suo vomito, così lo stolto ripete le sue follie» (Pr 26,11). È stolto per scelta, non per limite.</p>
            </div>
          </div>

          <div class="word-card" tabindex="0">
            <div class="word-card-head">
              <span class="word-translit">petì</span>
              <span class="word-greek">פֶּתִי</span>
              <span class="word-tap">tocca per scoprire</span>
            </div>
            <div class="word-card-body">
              <p><strong>Il semplice / ingenuo.</strong> Il «porta aperta»: crede a tutto, non ha ancora scelto da che parte stare. «Il semplice crede a ogni parola» (Pr 14,15). Non è ancora perduto — è il destinatario privilegiato del libro: può ancora diventare saggio. È il giovane a un bivio.</p>
            </div>
          </div>

          <div class="word-card" tabindex="0">
            <div class="word-card-head">
              <span class="word-translit">letz</span>
              <span class="word-greek">לֵץ</span>
              <span class="word-tap">tocca per scoprire</span>
            </div>
            <div class="word-card-body">
              <p><strong>Il beffardo / schernitore.</strong> Il più pericoloso: non solo sbaglia, ma <em>deride</em> chi cerca di correggerlo. «Non rimproverare il beffardo, perché ti odierà» (Pr 9,8). Trasforma in ridicolo ogni cosa sacra. È quasi irrecuperabile, perché ha chiuso la porta all'ascolto.</p>
            </div>
          </div>

          <div class="word-card" tabindex="0">
            <div class="word-card-head">
              <span class="word-translit">atzèl</span>
              <span class="word-greek">עָצֵל</span>
              <span class="word-tap">tocca per scoprire</span>
            </div>
            <div class="word-card-body">
              <p><strong>Il pigro.</strong> Ritratto comico e impietoso: «Il pigro tuffa la mano nel piatto e non ce la fa a portarla alla bocca» (Pr 19,24). «Dice: "C'è un leone là fuori!"» per non uscire (Pr 22,13). Rimanda sempre — e la povertà arriva «come un vagabondo» (Pr 6,11).</p>
            </div>
          </div>

          <div class="keypoint">
            La differenza decisiva non è tra chi sa e chi non sa, ma tra chi <strong>accetta la correzione</strong> e chi la rifiuta. Il semplice può salvarsi, il saggio cresce, lo stolto resiste, il beffardo deride. Proverbi misura l'uomo dalla sua reazione al rimprovero: «Chi ama la correzione ama la conoscenza, ma chi odia il rimprovero è uno stupido» (Pr 12,1).
          </div>
        `
      },

      {
        id: "chokmah",
        title: "La Sapienza personificata",
        subtitle: "Pr 8: la donna Sapienza accanto a Dio nella creazione",
        html: `
          <p>Nei capitoli 1, 8 e 9 accade qualcosa di sorprendente: la <strong>Sapienza diventa una persona</strong>. Una donna che grida nelle piazze, sta alle porte della città, invita i passanti. Non è un'idea astratta: ha una voce, una casa, un banchetto.</p>

          <div class="word-card" tabindex="0">
            <div class="word-card-head">
              <span class="word-translit">chokmah</span>
              <span class="word-greek">חָכְמָה</span>
              <span class="word-tap">tocca per scoprire</span>
            </div>
            <div class="word-card-body">
              <p>«Sapienza». In ebraico è un sostantivo <strong>femminile</strong>, e il libro la rappresenta come <em>Donna Sapienza</em> (in greco <em>Sophía</em>). Non è un dio accanto a Dio — Israele è rigorosamente monoteista — ma una <strong>personificazione poetica</strong>: il modo in cui Dio ha ordinato il mondo, reso quasi una compagna che invita l'uomo a entrare in quell'ordine.</p>
            </div>
          </div>

          <p>Il vertice è il <strong>poema di Proverbi 8</strong>. La Sapienza parla in prima persona e racconta la sua origine: «Il Signore mi ha posseduta come primizia della sua attività, prima di ogni sua opera… quando non esistevano gli abissi, io fui generata» (Pr 8,22-24). Era presente <strong>prima della creazione</strong>, e accanto a Dio mentre Egli faceva i cieli e la terra:</p>

          <blockquote class="teaching-quote">
            «Quando egli fissava i cieli, io ero là… io ero presso di lui come artefice, ero la sua delizia ogni giorno, giocando davanti a lui in ogni istante, giocando sul globo terrestre» (Pr 8,27-31).
          </blockquote>

          <p>La parola tradotta «artefice» (ebraico <strong>amòn</strong>) è discussa: può significare <em>architetto, maestro d'opera</em>, oppure <em>bambino prediletto</em> che gioca. Entrambe le immagini sono potenti: la Sapienza come <strong>progetto con cui Dio costruisce il cosmo</strong>, e come <strong>gioia che danza</strong> nella creazione. Il mondo non è nato dal caos o dalla noia, ma da un atto sapiente e gioioso.</p>

          <div class="keypoint">
            <strong>Lettura cristiana.</strong> La tradizione ha visto in questa Sapienza preesistente una prefigurazione di <strong>Cristo</strong>. Paolo lo chiama «Cristo, potenza di Dio e sapienza di Dio» (1 Cor 1,24); l'inno di Colossesi 1,15-17 («in lui tutto è stato creato») e il prologo di Giovanni («In principio era il Verbo… tutto è stato fatto per mezzo di lui») rileggono Proverbi 8. La Donna Sapienza che giocava davanti a Dio diventa, per i cristiani, il volto del Figlio per mezzo del quale tutto è stato fatto.
          </div>
        `
      },

      {
        id: "due-donne",
        title: "I due banchetti",
        subtitle: "Pr 9: Donna Sapienza e Donna Follia",
        html: `
          <p>Il capitolo 9 chiude il «portale» del libro con una scena drammatica e simmetrica. Due donne hanno costruito una casa, preparato un banchetto e mandato i loro inviti <strong>alle stesse persone</strong>: i semplici che passano per strada. La scelta tra le due decide la vita.</p>

          <div class="two-cols">
            <div class="col-box">
              <h5>Donna Sapienza <span class="muted">— Pr 9,1-6</span></h5>
              <ul>
                <li>«Ha costruito la sua casa, ha intagliato le sue sette colonne»</li>
                <li>Ha imbandito la mensa, mescolato il vino: <strong>lavoro, preparazione, abbondanza</strong></li>
                <li>Invito: «Venite, mangiate il mio pane… abbandonate l'inesperienza e vivrete»</li>
                <li>Promette <strong>vita e intelligenza</strong></li>
              </ul>
            </div>
            <div class="col-box">
              <h5>Donna Follia <span class="muted">— Pr 9,13-18</span></h5>
              <ul>
                <li>«Donna irrequieta, sciocca, che non sa nulla»</li>
                <li>Siede alla porta senza aver preparato nulla: <strong>pigrizia e inganno</strong></li>
                <li>Invito: «Le acque furtive sono dolci, il pane mangiato di nascosto è gustoso»</li>
                <li>Nasconde la verità: «i suoi invitati sono nel profondo degli inferi»</li>
              </ul>
            </div>
          </div>

          <div class="keypoint">
            Le due chiamate usano <strong>quasi le stesse parole</strong> («Chi è inesperto venga qui!»). La differenza non sta nell'invito, ma in ciò che c'è dietro la porta: <em>vita</em> o <em>morte</em>. Follia offre il piacere immediato e rubato; Sapienza offre il nutrimento vero ma chiede di crescere. Proverbi mette il lettore esattamente in quella strada, costretto a scegliere a quale banchetto sedersi.
          </div>

          <p>L'immagine del <strong>banchetto della Sapienza</strong> riecheggia nel Nuovo Testamento: Gesù che offre il suo pane e il suo vino, le parabole del banchetto del Regno, l'Eucaristia. La casa dalle «sette colonne» è stata letta dai Padri come immagine della Chiesa.</p>
        `
      },

      {
        id: "lingua",
        title: "Il potere della lingua",
        subtitle: "Morte e vita sono in potere della parola",
        html: `
          <p>Nessun tema occupa Proverbi quanto l'<strong>uso della parola</strong>. Decine di sentenze parlano di bocca, labbra, lingua. Per la sapienza ebraica le parole non descrivono soltanto la realtà: la <strong>creano e la distruggono</strong>.</p>

          <blockquote class="teaching-quote">
            «Morte e vita sono in potere della lingua; chi ne fa buon uso ne mangerà i frutti» (Pr 18,21).
          </blockquote>

          <ul class="clean-list">
            <li><strong>La risposta dolce.</strong> «Una risposta gentile calma la collera, una parola pungente eccita l'ira» (Pr 15,1). Il modo conta quanto il contenuto.</li>
            <li><strong>Il silenzio saggio.</strong> «Anche lo stolto, se tace, passa per saggio» (Pr 17,28). «Chi sorveglia la sua bocca conserva la sua vita» (Pr 13,3).</li>
            <li><strong>La parola al momento giusto.</strong> «Come pomi d'oro su vassoio d'argento è una parola detta a suo tempo» (Pr 25,11): la sapienza è anche <em>tempismo</em>.</li>
            <li><strong>La calunnia e il pettegolezzo.</strong> «Le parole del calunniatore sono come ghiotti bocconi che scendono in fondo alle viscere» (Pr 18,8). Il chiacchiericcio ferisce in profondità e «separa gli amici intimi» (Pr 16,28).</li>
            <li><strong>La menzogna.</strong> Tra le «sette cose che il Signore detesta» (Pr 6,16-19) ci sono «la lingua bugiarda» e «il falso testimone che diffonde menzogne».</li>
          </ul>

          <div class="keypoint">
            La lingua è il <strong>termometro del cuore</strong>: «la bocca parla dalla pienezza del cuore» dirà Gesù, e Giacomo (cap. 3) svilupperà tutto un trattato sulla lingua «piccolo timone che dirige una grande nave». Proverbi insegna che <strong>non esistono parole neutre</strong>: ogni frase costruisce o demolisce, dà vita o uccide.
          </div>
        `
      },

      {
        id: "denaro-lavoro",
        title: "Denaro, lavoro e pigrizia",
        subtitle: "Onestà, operosità e cura del povero",
        html: `
          <p>Proverbi è straordinariamente concreto sull'economia. Non disprezza la ricchezza, ma la <strong>subordina all'integrità</strong>: «Meglio poco con giustizia che grandi rendite senza equità» (Pr 16,8).</p>

          <h4>Il lavoro e la formica</h4>
          <p>Il pigro viene mandato a scuola da un insetto: «Va' dalla formica, o pigro, osserva le sue abitudini e diventa saggio. Essa non ha né capo né sorvegliante né padrone, eppure d'estate si provvede il cibo» (Pr 6,6-8). La sapienza è <strong>previdenza</strong>: lavorare oggi pensando a domani. «La mano pigra fa impoverire, la mano operosa arricchisce» (Pr 10,4).</p>

          <h4>L'onestà negli affari</h4>
          <blockquote class="teaching-quote">
            «La bilancia falsa è in abominio al Signore, ma il peso giusto gli è gradito» (Pr 11,1).
          </blockquote>
          <p>Nel mondo antico si imbrogliava truccando i pesi della bilancia. Proverbi alza la posta: la frode commerciale non è solo un reato civile, è <strong>«in abominio al Signore»</strong>. L'integrità negli affari è un atto religioso.</p>

          <h4>Il povero e il prestito a Dio</h4>
          <div class="keypoint">
            «Chi ha pietà del povero fa un prestito al Signore, che gli ripagherà la buona azione» (Pr 19,17). È una delle frasi più audaci della Bibbia: aiutare un povero significa rendere <strong>Dio stesso tuo debitore</strong>. «Chi è generoso sarà saziato, chi disseta sarà dissetato» (Pr 11,25). E un avvertimento: «Chi chiude l'orecchio al grido del povero, griderà a sua volta e non avrà risposta» (Pr 21,13).</p>
          </div>

          <p>La sapienza economica di Proverbi tiene insieme tre cose che oggi spesso separiamo: <strong>operosità</strong> (lavora con impegno), <strong>onestà</strong> (non frodare nessuno) e <strong>generosità</strong> (apri la mano al bisognoso). Né accumulo cieco né disprezzo dei beni: amministrazione saggia davanti a Dio.</p>
        `
      },

      {
        id: "relazioni",
        title: "Amicizia, famiglia, educazione",
        subtitle: "Le relazioni che formano una vita",
        html: `
          <h4>L'amicizia</h4>
          <p>Proverbi ha le pagine più belle della Bibbia sull'amicizia. «L'amico ama in ogni tempo, è un fratello nato per i momenti difficili» (Pr 17,17). E la celebre immagine della crescita reciproca:</p>
          <blockquote class="teaching-quote">
            «Il ferro si affila con il ferro e l'uomo affina il carattere del suo prossimo» (Pr 27,17).
          </blockquote>
          <p>L'amico vero non è chi ti adula, ma chi ti corregge: «Sono leali le ferite di un amico, ma sono ingannevoli i baci di un nemico» (Pr 27,6). Meglio una verità che fa male da chi ti vuole bene, che mille complimenti interessati.</p>

          <h4>La famiglia e l'educazione</h4>
          <p>Il libro nasce come istruzione di un <strong>padre al figlio</strong> («Ascolta, figlio mio, l'istruzione di tuo padre e non disprezzare l'insegnamento di tua madre», Pr 1,8 — entrambi i genitori, fin dal primo capitolo). L'educazione include la <strong>disciplina</strong>: «Chi risparmia il bastone odia suo figlio, chi lo ama lo corregge per tempo» (Pr 13,24).</p>

          <div class="keypoint">
            Va letto con sapienza, non come licenza alla durezza. Nel contesto, la «verga» (ebraico <em>shevet</em>) è il <strong>bastone del pastore</strong>, che guida e protegge il gregge più che colpirlo. Il punto non è la punizione fisica, ma la <strong>correzione amorevole che non abdica</strong>: amare qualcuno significa anche correggerlo, perché lasciarlo sbagliare senza dire nulla è, in fondo, indifferenza. «Educa il fanciullo secondo la via da seguire» (Pr 22,6).
          </div>

          <h4>Il matrimonio e i suoi pericoli</h4>
          <p>I primi capitoli mettono ripetutamente in guardia il giovane dalla «donna straniera», la seduttrice (Pr 5; 7) — immagine concreta dell'adulterio e, insieme, simbolo di ogni infedeltà. Per contrasto, esaltano la gioia della fedeltà coniugale: «Trova la tua gioia nella sposa della tua giovinezza» (Pr 5,18).</p>
        `
      },

      {
        id: "cuore",
        title: "Custodisci il tuo cuore",
        subtitle: "Pr 4,23: la sorgente di tutta la vita",
        html: `
          <p>Sotto tutti i consigli pratici c'è un'unica radice. Proverbi la indica in un versetto che è quasi il centro nascosto del libro:</p>

          <blockquote class="teaching-quote">
            «Custodisci il tuo cuore più di ogni altra cosa, perché da esso sgorga la vita» (Pr 4,23).
          </blockquote>

          <div class="word-card" tabindex="0">
            <div class="word-card-head">
              <span class="word-translit">lev / levav</span>
              <span class="word-greek">לֵב</span>
              <span class="word-tap">tocca per scoprire</span>
            </div>
            <div class="word-card-body">
              <p>«Cuore». Nell'ebraico non è la sede dei sentimenti (quella, semmai, sono le viscere), ma il <strong>centro della persona</strong>: la mente, la volontà, le decisioni, i desideri profondi. Il «cuore» è il <em>quartier generale</em> da cui parte tutto. Per questo va sorvegliato «più di ogni altra cosa»: ciò che entra e abita nel cuore determina la direzione di tutta la vita.</p>
            </div>
          </div>

          <p>L'immagine è quella di una <strong>sorgente</strong>: se la fonte è limpida, tutto il fiume è limpido; se è avvelenata alla sorgente, ogni cosa a valle è contaminata. Per questo Proverbi insiste tanto su parole, denaro, relazioni: sono i <em>ruscelli</em> che rivelano la qualità della <em>sorgente</em>.</p>

          <div class="keypoint">
            Qui Proverbi tocca il limite di se stesso e apre verso il Vangelo. Si può «custodire il cuore» con le proprie forze fino a un certo punto. I profeti annunceranno che serve un <strong>cuore nuovo</strong>: «Vi darò un cuore nuovo, toglierò il cuore di pietra e vi darò un cuore di carne» (Ez 36,26). La sapienza pratica dei Proverbi prepara il desiderio di una trasformazione che solo Dio può compiere.
          </div>
        `
      },

      {
        id: "donna-forte",
        title: "La donna forte",
        subtitle: "Pr 31,10-31: il sigillo del libro",
        html: `
          <p>Il libro si chiude con un poema celebre: il ritratto della <strong>donna di valore</strong> (Pr 31,10-31). Non è un'appendice sul «ruolo della moglie»: è il <strong>sigillo</strong> dell'intero libro, la Sapienza che finalmente prende carne in una vita concreta.</p>

          <div class="word-card" tabindex="0">
            <div class="word-card-head">
              <span class="word-translit">eshet chàyil</span>
              <span class="word-greek">אֵשֶׁת חַיִל</span>
              <span class="word-tap">tocca per scoprire</span>
            </div>
            <div class="word-card-body">
              <p>«Donna forte / di valore». <strong>Chayil</strong> è una parola militare ed eroica: indica <em>forza, valore, potenza, esercito</em>. La stessa parola usata per i «uomini valorosi», i guerrieri. Chiamare questa donna <em>eshet chayil</em> è come definirla un'<strong>eroina</strong>. Tutt'altro che una figura passiva.</p>
            </div>
          </div>

          <p>Il testo è un <strong>acrostico alfabetico</strong>: ognuno dei 22 versetti inizia con una lettera successiva dell'alfabeto ebraico, da <em>aleph</em> a <em>taw</em>. È un modo per dire: <em>la sapienza incarnata, dalla A alla Z</em>. Una composizione raffinatissima posta non a caso a chiusura del libro.</p>

          <p>Il ritratto è sorprendentemente <strong>attivo ed economico</strong>: questa donna compra campi, pianta vigne, fa commercio («è come una nave di mercante»), tesse e vende, soccorre i poveri, parla con sapienza, e «non teme per la sua casa l'arrivo della neve». E il versetto-chiave smaschera il segreto di tutto:</p>

          <blockquote class="teaching-quote">
            «Fallace è la grazia e vana è la bellezza, ma la donna che teme il Signore è da lodare» (Pr 31,30).
          </blockquote>

          <div class="keypoint">
            Nota la cornice perfetta: il libro <strong>era cominciato</strong> con «il timore del Signore è principio della sapienza» (1,7) e <strong>si chiude</strong> con «la donna che teme il Signore è da lodare» (31,30). La stessa frase apre e sigilla tutto. La <em>eshet chayil</em> non è solo una moglie ideale: è la <strong>Sapienza diventata vita quotidiana</strong>, e i Padri vi hanno letto anche un'immagine di Israele, della Chiesa, dell'anima fedele.
          </div>
        `
      },

      {
        id: "oggi",
        title: "Come leggere Proverbi oggi",
        subtitle: "Sapienza, non superstizione — e il suo compimento",
        html: `
          <p>Tre avvertenze per non tradire il libro, e una conclusione.</p>

          <ol class="struct-list">
            <li><span class="struct-ref">1</span> <strong>Non sono promesse automatiche.</strong> «Affida al Signore le tue opere e i tuoi progetti riusciranno» (Pr 16,3) non è una formula magica per il successo. Sono <em>verità generali</em> sul modo in cui la vita tende a funzionare. Il giusto può ancora soffrire (lo grida Giobbe). Leggi Proverbi come saggezza, non come contratto.</li>
            <li><span class="struct-ref">2</span> <strong>Va tenuto in tensione con Giobbe e Qoèlet.</strong> Proverbi dice: «vivi bene e di norma ti andrà bene». Giobbe risponde: «ma a volte il giusto soffre senza colpa». Qoèlet aggiunge: «e tutto sembra vano sotto il sole». Insieme custodiscono <em>la regola e il mistero</em>: la Bibbia è abbastanza onesta da mettere i tre libri uno accanto all'altro.</li>
            <li><span class="struct-ref">3</span> <strong>Si applica con discernimento.</strong> Alcuni proverbi sembrano contraddirsi («Non rispondere allo stolto secondo la sua follia… Rispondi allo stolto secondo la sua follia», Pr 26,4-5). Non è un errore: insegna che la sapienza è <em>saper scegliere il proverbio giusto per il momento giusto</em>. Sapienza è discernimento, non meccanica applicazione di regole.</li>
          </ol>

          <div class="keypoint">
            <strong>Il compimento.</strong> Proverbi cerca una Sapienza che dia vita, custodisca il cuore, indichi la via. Il Nuovo Testamento annuncia che quella Sapienza ha un volto: «In lui sono nascosti tutti i tesori della sapienza e della conoscenza» (Col 2,3). Gesù è insieme <em>la Sapienza</em> che parlava in Proverbi 8, <em>la Via</em> delle due strade, e <em>il banchetto</em> a cui Donna Sapienza invitava. Studiare Proverbi, per un cristiano, è imparare a riconoscere i lineamenti di Cristo già disegnati nella sapienza quotidiana.
          </div>

          <p>Un ultimo consiglio di metodo, in puro stile sapienziale: <strong>leggi un capitolo al giorno</strong>. Proverbi ha 31 capitoli, quasi uno per ogni giorno del mese. È il modo in cui generazioni di credenti lo hanno fatto entrare nelle ossa: non tutto in una volta, ma una manciata di sentenze al giorno, lasciate decantare nella vita reale.</p>
        `
      }
    ]
  },

  // ============================================================
  //  GIOBBE
  // ============================================================
  "Giobbe": {
    tagline: "Il dramma del giusto che soffre senza colpa: la domanda più scomoda della Bibbia, e una risposta che non ti aspetti.",
    facts: [
      { k: "Titolo ebraico", v: "Iyyòb (אִיּוֹב)" },
      { k: "Capitoli", v: "42 · prosa che incornicia un grande poema" },
      { k: "Autore", v: "Anonimo (uno dei testi più antichi e più alti)" },
      { k: "Genere", v: "Letteratura sapienziale · dramma poetico" },
      { k: "Tema", v: "La sofferenza dell'innocente e il silenzio di Dio" },
      { k: "Versetto-chiave", v: "«Io so che il mio redentore vive» (Gb 19,25)" }
    ],
    sections: [

      {
        id: "cos-e",
        title: "Che cos'è il libro di Giobbe",
        subtitle: "La domanda che nessuno osa fare ad alta voce",
        html: `
          <p>Giobbe affronta a viso aperto la domanda che tutti, prima o poi, ci portiamo dentro: <strong>perché il giusto soffre?</strong> Perché il dolore colpisce anche chi non se lo merita? È considerato uno dei vertici della letteratura mondiale, e uno dei testi più audaci della Bibbia: non offre consolazioni facili, e non ha paura di mettere Dio stesso «sotto accusa».</p>

          <p>Il protagonista è descritto fin dalla prima riga con due parole decisive.</p>

          <div class="word-card" tabindex="0">
            <div class="word-card-head">
              <span class="word-translit">tam we-yashàr</span>
              <span class="word-greek">תָּם וְיָשָׁר</span>
              <span class="word-tap">tocca per scoprire</span>
            </div>
            <div class="word-card-body">
              <p>«Integro e retto» (Gb 1,1). <strong>Tam</strong> significa <em>integro, completo, senza doppiezza</em> — un uomo «tutto d'un pezzo». <strong>Yashar</strong> significa <em>diritto, onesto</em>. Il testo è categorico: Giobbe <strong>non soffre per una colpa</strong>. Questo toglie subito di mezzo la spiegazione più comoda («se soffri, te lo sei meritato») e rende il problema insolubile alla maniera umana.</p>
            </div>
          </div>

          <div class="keypoint">
            Giobbe è il contrappeso dei <em>Proverbi</em>. Proverbi dice: «vivi bene e di norma ti andrà bene». Giobbe risponde: «e quando il giusto crolla nella sventura?». La Bibbia è abbastanza onesta da mettere i due libri uno accanto all'altro: la regola e l'eccezione, la sapienza e il mistero.
          </div>

          <p>Attenzione a cosa <em>non</em> è questo libro: non è un trattato filosofico che «spiega» il male. È il racconto di un uomo che, nel dolore, non smette di parlare con Dio — anche urlando. E proprio in questo sta la sua grandezza spirituale.</p>
        `
      },

      {
        id: "struttura",
        title: "La struttura del libro",
        subtitle: "Una cornice in prosa, un cuore in poesia",
        html: `
          <p>Giobbe ha una costruzione raffinatissima: due parti in prosa narrativa («terra») racchiudono un grande poema in versi («cielo» del dibattito). Conoscerla evita di perdersi.</p>

          <ol class="struct-list">
            <li><span class="struct-ref">cc. 1-2</span> <strong>Prologo in prosa.</strong> La scena in cielo, le prove, la perdita di tutto. Qui il lettore sa ciò che Giobbe ignorerà fino alla fine.</li>
            <li><span class="struct-ref">c. 3</span> <strong>Il lamento di apertura.</strong> Giobbe maledice il giorno della sua nascita: il dolore prende la parola.</li>
            <li><span class="struct-ref">cc. 4-27</span> <strong>I tre cicli di dialoghi</strong> con gli amici Elifaz, Bildad e Sofar: accuse e repliche che si rincorrono.</li>
            <li><span class="struct-ref">c. 28</span> <strong>L'inno alla Sapienza.</strong> «Dove si trova la sapienza?»: una pausa contemplativa.</li>
            <li><span class="struct-ref">cc. 29-31</span> <strong>L'ultima difesa di Giobbe</strong> e il suo «giuramento di innocenza».</li>
            <li><span class="struct-ref">cc. 32-37</span> <strong>I discorsi di Eliu</strong>, il giovane che interviene per ultimo.</li>
            <li><span class="struct-ref">cc. 38-41</span> <strong>Dio risponde dal turbine.</strong> Il vertice del libro: la teofania.</li>
            <li><span class="struct-ref">c. 42</span> <strong>Epilogo in prosa.</strong> La risposta di Giobbe, il rimprovero agli amici, la restaurazione.</li>
          </ol>

          <div class="keypoint">
            Il disegno è voluto: il dramma si apre e si chiude «a terra», nella vita concreta di un uomo, ma il suo cuore è un lungo dibattito poetico che sale fino al cielo. E la vera risposta non arriva dagli uomini che parlano <em>di</em> Dio, ma da Dio che alla fine parla in prima persona.
          </div>
        `
      },

      {
        id: "prologo",
        title: "Il prologo: una scommessa in cielo",
        subtitle: "Cc. 1-2: Giobbe perde tutto",
        html: `
          <p>Il libro si apre con una scena sconcertante. In cielo, davanti a Dio, si presenta una figura misteriosa che mette in dubbio la sincerità di Giobbe: «Forse che Giobbe teme Dio per nulla?» (Gb 1,9). Cioè: <em>è facile essere fedeli quando si è benedetti; togligli tutto e vedrai che ti maledirà.</em></p>

          <p>Dio permette la prova. In un solo giorno Giobbe perde i beni, i servi e i dieci figli. Eppure la sua reazione è una delle vette della fede biblica:</p>

          <blockquote class="teaching-quote">
            «Nudo sono uscito dal grembo di mia madre e nudo vi ritornerò. Il Signore ha dato, il Signore ha tolto: sia benedetto il nome del Signore!» (Gb 1,21).
          </blockquote>

          <p>Una seconda prova lo colpisce nel corpo, con piaghe da capo a piedi. La moglie lo incalza: «Maledici Dio e muori!». Lui risponde: «Se da Dio accettiamo il bene, perché non dovremmo accettare il male?» (Gb 2,10).</p>

          <div class="keypoint">
            Il lettore sa una cosa che Giobbe <strong>non saprà mai</strong> dentro il racconto: che la sua sofferenza non è un castigo, ma una posta in gioco sulla gratuità della fede. Questo «sapere» del lettore è la chiave: ci insegna che <strong>dietro al dolore può esserci un senso che noi non vediamo</strong>, e che le spiegazioni degli amici (e le nostre) sono spesso fuori bersaglio.
          </div>
        `
      },

      {
        id: "accusatore",
        title: "Chi è «il satàn»",
        subtitle: "L'accusatore e la vera domanda del libro",
        html: `
          <p>La figura che in cielo provoca la prova è chiamata in ebraico <em>ha-satan</em>. Va capita bene per non fraintendere tutto il libro.</p>

          <div class="word-card" tabindex="0">
            <div class="word-card-head">
              <span class="word-translit">ha-satàn</span>
              <span class="word-greek">הַשָּׂטָן</span>
              <span class="word-tap">tocca per scoprire</span>
            </div>
            <div class="word-card-body">
              <p>Non è ancora «Satana» come nome proprio, ma <strong>«l'accusatore, l'avversario»</strong> — quasi un ruolo: il <em>pubblico ministero</em> della corte celeste. Il suo compito è <strong>mettere in dubbio</strong>. La domanda che solleva non è «Giobbe è colpevole?», ma una molto più profonda: <strong>«Si può amare Dio gratis?»</strong> Ovvero: la fede è solo un calcolo interessato («ti servo perché mi premi»), o esiste un amore che resta anche quando tutto crolla?</p>
            </div>
          </div>

          <div class="keypoint">
            Qui sta il cuore segreto del libro. Non è in gioco la sorte di Giobbe, ma la <strong>possibilità stessa di una fede disinteressata</strong>. L'accusatore dice che la religione è un commercio. Giobbe, restando fedele nella rovina («sia benedetto il nome del Signore»), dimostra che <strong>si può amare Dio per Dio stesso</strong>, e non per i suoi doni. È la differenza tra servire un padrone per il salario e amare un padre per ciò che è.
          </div>
        `
      },

      {
        id: "amici",
        title: "I tre amici",
        subtitle: "Quando la teologia diventa crudele",
        html: `
          <p>Arrivano tre amici: <strong>Elifaz, Bildad e Sofar</strong>. La prima cosa che fanno è la più bella: «sedettero accanto a lui per terra, sette giorni e sette notti, senza dirgli una parola» (Gb 2,13). La vicinanza silenziosa è vera compassione.</p>

          <p>Il problema comincia quando <strong>aprono bocca</strong>. Per tre lunghi cicli di discorsi difendono una sola idea: <em>se soffri, è perché hai peccato; confessa la tua colpa e Dio ti guarirà.</em> È una teologia logica, ordinata… e completamente fuori bersaglio nel caso di Giobbe.</p>

          <blockquote class="teaching-quote">
            «Consolatori molesti siete voi tutti!» (Gb 16,2). Giobbe rovescia su di loro l'accusa: le loro parole, invece di curare, feriscono.
          </blockquote>

          <div class="keypoint">
            Gli amici non sono atei né cattivi: sono <strong>credenti con una teologia troppo piccola</strong>. Hanno una formula che spiega tutto («colpa → castigo, virtù → premio») e la difendono anche a costo di schiacciare l'amico. Insegnamento bruciante: <strong>davanti a chi soffre, le spiegazioni possono fare più male del dolore stesso</strong>. A volte la compassione vera è restare in silenzio accanto, non «giustificare Dio» a parole.
          </div>

          <p>Non a caso, alla fine, sarà proprio questa pretesa di «spiegare» che Dio rimprovererà agli amici (Gb 42,7), mentre loderà Giobbe — che ha parlato male, ma <em>a</em> Dio e non <em>su</em> di Lui.</p>
        `
      },

      {
        id: "retribuzione",
        title: "Il nodo: la dottrina della retribuzione",
        subtitle: "«Soffri perché hai peccato» — è vero?",
        html: `
          <p>Tutto il dibattito ruota intorno a una convinzione antica, la <strong>teologia della retribuzione</strong>: Dio premia i giusti con la prosperità e punisce i malvagi con la sventura. Una regola rassicurante — perché rende il mondo prevedibile e controllabile.</p>

          <div class="two-cols">
            <div class="col-box">
              <h5>La tesi degli amici</h5>
              <ul>
                <li>Il dolore è sempre un castigo per un peccato</li>
                <li>Quindi Giobbe deve aver peccato</li>
                <li>Basta confessare e tutto si aggiusterà</li>
                <li>Dio funziona come una bilancia automatica</li>
              </ul>
            </div>
            <div class="col-box">
              <h5>La realtà di Giobbe</h5>
              <ul>
                <li>So di essere innocente: non è un castigo</li>
                <li>La formula non spiega la mia situazione</li>
                <li>Allora il mondo non è così semplice</li>
                <li>Voglio una spiegazione da Dio stesso</li>
              </ul>
            </div>
          </div>

          <div class="keypoint">
            Giobbe <strong>non nega Dio</strong>: nega la <em>formula</em> su Dio. Si rifiuta di mentire dicendo di aver peccato solo per far quadrare i conti. Il libro smonta così l'idea che si possa «ingabbiare» Dio in un meccanismo: la realtà è più grande delle nostre teologie. Gesù stesso confermerà questo rovesciamento: sul cieco nato dirà «né lui né i suoi genitori hanno peccato» (Gv 9,3), e ricorderà che il sole sorge «sui buoni e sui cattivi» (Mt 5,45).
          </div>
        `
      },

      {
        id: "lamento",
        title: "Il diritto di gridare",
        subtitle: "La preghiera che osa lottare con Dio",
        html: `
          <p>Per gran parte del libro Giobbe <strong>protesta</strong>. Maledice il giorno in cui è nato (c. 3), accusa Dio di essersi accanito contro di lui, chiede conto, esige un processo. Eppure — ed è sorprendente — non viene mai condannato per questo.</p>

          <p>La sua non è bestemmia: è <strong>lotta</strong>. Giobbe continua a rivolgersi a Dio, non gli volta le spalle. Cerca disperatamente qualcuno che faccia da ponte:</p>

          <ul class="clean-list">
            <li><strong>Un arbitro:</strong> «Non c'è fra noi un arbitro che ponga la mano su noi due» (Gb 9,33) — qualcuno che possa stare tra l'uomo e Dio.</li>
            <li><strong>Un testimone:</strong> «Ecco, fin d'ora il mio testimone è nei cieli, il mio difensore è lassù» (Gb 16,19).</li>
          </ul>

          <div class="keypoint">
            Giobbe ci insegna che si può <strong>portare a Dio anche la rabbia e il perché</strong>. La fede non è far finta che vada tutto bene: è continuare a parlare con Dio anche quando non si capisce, anche gridando. I Salmi di lamento e Gesù stesso sulla croce («Dio mio, perché mi hai abbandonato?») raccolgono questa stessa libertà. <strong>Pregare la propria sofferenza è già fede.</strong>
          </div>
        `
      },

      {
        id: "goel",
        title: "«Io so che il mio redentore vive»",
        subtitle: "Gb 19,25: la speranza che irrompe nel buio",
        html: `
          <p>Nel punto più nero del libro, Giobbe pronuncia una frase folgorante, che sembra superare ogni disperazione:</p>

          <blockquote class="teaching-quote">
            «Io so che il mio redentore vive e che, ultimo, si ergerà sulla polvere! Dopo che questa mia pelle sarà distrutta, senza la mia carne, vedrò Dio. Io lo vedrò, io stesso, e i miei occhi lo contempleranno non da straniero» (Gb 19,25-27).
          </blockquote>

          <div class="word-card" tabindex="0">
            <div class="word-card-head">
              <span class="word-translit">go'èl</span>
              <span class="word-greek">גֹּאֵל</span>
              <span class="word-tap">tocca per scoprire</span>
            </div>
            <div class="word-card-body">
              <p>«Redentore». Il <strong>go'el</strong> era il <em>parente più stretto</em> che aveva il dovere di <strong>riscattare</strong> un familiare caduto in schiavitù o in rovina, di vendicarne il sangue, di difenderne i diritti (è il ruolo di Boaz con Rut). Giobbe, abbandonato da tutti, grida la certezza che <strong>qualcuno lo riscatterà</strong> — un difensore che starà dalla sua parte e che vedrà con i propri occhi, persino oltre la morte della sua carne.</p>
            </div>
          </div>

          <div class="keypoint">
            In mezzo al dolore più cieco, Giobbe ha un'intuizione che va oltre ciò che lui stesso può comprendere: esiste un <strong>Redentore vivente</strong>, e lui «vedrà Dio» con i suoi occhi. La tradizione cristiana vi ha letto un balenare della <strong>risurrezione</strong> e il volto di <strong>Cristo Redentore</strong>, il go'el definitivo che riscatta l'uomo dalla morte. Per questo questo versetto è cantato nelle liturgie funebri: la sofferenza non ha l'ultima parola.
          </div>
        `
      },

      {
        id: "teofania",
        title: "Dio risponde dal turbine",
        subtitle: "Cc. 38-41: non una spiegazione, ma una rivelazione",
        html: `
          <p>Dopo decine di capitoli di domande, finalmente <strong>Dio parla</strong> — dal cuore di una tempesta (Gb 38,1). Ma accade qualcosa di inatteso: <strong>Dio non risponde al «perché».</strong> Non spiega la sofferenza di Giobbe. Invece, lo porta in un vertiginoso viaggio dentro la creazione.</p>

          <p>«Dov'eri tu quando ponevo le fondamenta della terra?» (Gb 38,4). E poi le stelle, il mare, l'alba, la pioggia, la neve, gli animali selvatici, lo struzzo, il cavallo, l'aquila… decine di domande che Giobbe non può che subire in silenzio. Fino alle due grandi creature misteriose:</p>

          <div class="word-card" tabindex="0">
            <div class="word-card-head">
              <span class="word-translit">Behemòt &amp; Liwyatàn</span>
              <span class="word-greek">בְּהֵמוֹת · לִוְיָתָן</span>
              <span class="word-tap">tocca per scoprire</span>
            </div>
            <div class="word-card-body">
              <p><strong>Behemot</strong> e <strong>Leviatan</strong> (cc. 40-41): due creature colossali e indomabili, simbolo delle forze del caos che <em>solo Dio</em> può tenere a freno. Il messaggio: il mondo contiene potenze enormi e misteriose; l'uomo non le governa e spesso non le comprende — ma <strong>Dio sì</strong>. Il caos non è fuori controllo: è nelle mani del Creatore.</p>
            </div>
          </div>

          <div class="keypoint">
            La «risposta» di Dio non è una teoria sul male, è un <strong>incontro</strong>. Dio non dice <em>perché</em>, dice <em>chi</em>: «Io sono il Creatore, il mondo è più grande e più sapiente di quanto tu possa misurare; fidati di Me anche in ciò che non capisci». A Giobbe non viene data una spiegazione: gli viene data la <strong>presenza di Dio</strong>. E si scopre che basta.
          </div>
        `
      },

      {
        id: "risposta",
        title: "Dal sentito dire al vederti",
        subtitle: "Gb 42,1-6: la trasformazione di Giobbe",
        html: `
          <p>Davanti a Dio, Giobbe non riceve risposte ai suoi perché — eppure è <strong>guarito nel profondo</strong>. La sua replica finale è una delle frasi più dense di tutta la Scrittura:</p>

          <blockquote class="teaching-quote">
            «Io ti conoscevo solo per sentito dire, ma ora i miei occhi ti vedono» (Gb 42,5).
          </blockquote>

          <div class="keypoint">
            È il cuore del libro. Giobbe passa da una <strong>religione «di seconda mano»</strong> — ciò che aveva imparato sugli altri, le formule, il «sentito dire» — a un <strong>incontro personale</strong> con Dio. Il problema non era cambiato (i suoi «perché» restano senza risposta), ma è cambiato <em>lui</em>: ora <strong>conosce Dio, non solo cose su Dio</strong>. La sofferenza, paradossalmente, lo ha condotto più vicino a Dio di quanto la prosperità avesse mai fatto.
          </div>

          <p>«Perciò mi ricredo e mi pento sopra polvere e cenere» (Gb 42,6): non si pente di colpe che non aveva, ma <strong>depone la pretesa di capire tutto</strong> e si affida. È l'umiltà di chi ha visto quanto è grande Dio e quanto piccola la propria misura.</p>
        `
      },

      {
        id: "epilogo",
        title: "L'epilogo e i suoi paradossi",
        subtitle: "Gb 42: il rimprovero, l'intercessione, la restaurazione",
        html: `
          <p>Il finale riserva tre sorprese.</p>

          <ul class="clean-list">
            <li><strong>Dio dà ragione a Giobbe, non agli amici.</strong> «Non avete parlato di me rettamente come il mio servo Giobbe» (Gb 42,7). Sorprendente: chi ha protestato e gridato è lodato; chi ha «difeso Dio» con belle formule è ripreso. Dio preferisce <strong>la sincerità che lotta</strong> alla teologia che consola a vuoto.</li>
            <li><strong>Giobbe prega per i suoi accusatori.</strong> Dio chiede agli amici di andare da Giobbe perché interceda per loro (Gb 42,8). Il sofferente diventa <strong>mediatore</strong> di perdono per chi lo aveva ferito: anticipa il giusto che intercede per i colpevoli.</li>
            <li><strong>La restaurazione.</strong> Dio ridona a Giobbe il doppio dei beni e nuovi figli (Gb 42,10-17).</li>
          </ul>

          <div class="keypoint">
            La restaurazione finale <strong>non va letta come «premio»</strong>: sarebbe ricadere nella formula degli amici. È piuttosto un <strong>dono gratuito</strong>, un segno che Dio non abbandona. E resta una ferita: i primi dieci figli sono morti, e nessun «raddoppio» li sostituisce. Il libro non cancella il dolore con un lieto fine facile: lascia il mistero aperto, ma dentro la fiducia ritrovata in Dio.
          </div>
        `
      },

      {
        id: "cristo",
        title: "Giobbe e Cristo",
        subtitle: "Il giusto sofferente e la risposta della Croce",
        html: `
          <p>Giobbe è la grande domanda; Cristo è la risposta — ma non come ce l'aspetteremmo.</p>

          <p>La tradizione cristiana ha sempre visto in Giobbe una <strong>prefigurazione di Cristo</strong>: il giusto innocente che soffre, abbandonato dagli amici, deriso, coperto di piaghe, che continua a rivolgersi a Dio. Giobbe cercava un <em>arbitro</em> e un <em>testimone</em> tra sé e Dio (Gb 9,33; 16,19): in Cristo, «unico mediatore tra Dio e gli uomini» (1 Tm 2,5), quel mediatore ha un volto.</p>

          <div class="keypoint">
            La differenza è decisiva. Giobbe <strong>subisce</strong> una sofferenza che non capisce; Cristo <strong>sceglie</strong> di entrarvi per amore. E soprattutto: al problema del male Dio non risponde, alla fine, con una spiegazione, ma <strong>condividendolo</strong>. In Gesù, Dio stesso entra nel dolore, nell'ingiustizia, nella morte. La domanda di Giobbe — «dov'è Dio quando soffro?» — riceve la risposta della Croce: <strong>Dio è lì, dentro, con te.</strong>
          </div>

          <p>Sulla croce Gesù grida un lamento (Sal 22: «Dio mio, perché mi hai abbandonato?») nello stesso spirito di Giobbe — e poi si affida: «Padre, nelle tue mani consegno il mio spirito». La risurrezione mostra che l'intuizione di Giobbe era vera: «il mio redentore vive», e l'ultima parola non è il dolore, ma la vita.</p>
        `
      },

      {
        id: "oggi",
        title: "Come leggere Giobbe oggi",
        subtitle: "Stare nel mistero senza risposte facili",
        html: `
          <p>Giobbe non ci consegna una teoria sul male, ci consegna un <strong>modo di attraversarlo</strong>. Ecco cosa insegna a chi soffre — e a chi sta accanto a chi soffre.</p>

          <ol class="struct-list">
            <li><span class="struct-ref">1</span> <strong>Diffida delle risposte facili.</strong> «Te lo sei meritato», «Dio ti sta mettendo alla prova», «c'è un motivo per tutto»: Giobbe smaschera le spiegazioni che pretendono di chiudere il mistero. Spesso feriscono più del dolore.</li>
            <li><span class="struct-ref">2</span> <strong>Accanto a chi soffre, prima il silenzio.</strong> La cosa più bella che fanno gli amici sono i sette giorni di silenzio condiviso. La presenza vale più delle parole.</li>
            <li><span class="struct-ref">3</span> <strong>Si può pregare anche la rabbia.</strong> Dio loda Giobbe che ha gridato, non gli amici che hanno teorizzato. Portare a Dio il proprio dolore, anche con durezza, è fede, non mancanza di fede.</li>
            <li><span class="struct-ref">4</span> <strong>Cerca la presenza, non solo la spiegazione.</strong> Giobbe non ottiene il «perché», ma ottiene Dio. E scopre che incontrare Dio è più della risposta che cercava.</li>
          </ol>

          <div class="keypoint">
            Giobbe ci libera dal bisogno di «giustificare» tutto. Ci sono dolori che restano senza spiegazione in questa vita. Ma il libro testimonia che <strong>la fede può sopravvivere senza risposte</strong>, perché non si fonda su una formula, ma su una <strong>relazione</strong>: «Io so che il mio redentore vive». E quel Redentore, per il cristiano, è entrato Lui stesso nel buio per attraversarlo con noi.
          </div>
        `
      }
    ]
  },

  // ============================================================
  //  SALMI
  // ============================================================
  "Salmi": {
    tagline: "Il libro di preghiera di Israele e della Chiesa: tutta l'esperienza umana — gioia, dolore, dubbio, lode — portata davanti a Dio.",
    extraConcetti: true,
    facts: [
      { k: "Titolo ebraico", v: "Tehillìm (תְּהִלִּים) — «lodi»" },
      { k: "Numero", v: "150 salmi in 5 libri" },
      { k: "Autori", v: "Davide e altri (Asaf, Core, Mosè, Salomone…)" },
      { k: "Genere", v: "Poesia · preghiera cantata" },
      { k: "Uso", v: "Cuore della liturgia ebraica e cristiana" },
      { k: "Versetto-chiave", v: "«Il Signore è il mio pastore: non manco di nulla» (Sal 23,1)" }
    ],
    sections: [
      {
        id: "cos-e",
        title: "Che cos'è il libro dei Salmi",
        subtitle: "La preghiera che Dio stesso ci mette in bocca",
        html: `
          <p>I Salmi sono il <strong>grande libro di preghiera</strong> della Bibbia. La cosa straordinaria è questa: non sono parole che salgono dall'uomo verso Dio e basta, ma <strong>parole che Dio stesso ispira</strong> perché l'uomo sappia come rivolgersi a Lui. Sono insieme Parola di Dio e parola dell'uomo.</p>
          <div class="word-card" tabindex="0">
            <div class="word-card-head">
              <span class="word-translit">Tehillìm</span>
              <span class="word-greek">תְּהִלִּים</span>
              <span class="word-tap">tocca per scoprire</span>
            </div>
            <div class="word-card-body">
              <p>Il titolo ebraico significa «<strong>lodi</strong>», benché molti salmi siano lamenti: perché anche il grido, portato a Dio, diventa lode. Il titolo greco <em>psalmoí</em> indica canti accompagnati da uno strumento a corde (lo <em>psaltèrion</em>): i salmi erano <strong>cantati</strong>, non solo recitati.</p>
            </div>
          </div>
          <p>Qui trovi <strong>tutta l'esperienza umana</strong>: l'estasi della lode e la disperazione, la fiducia del bambino e la rabbia di chi si sente abbandonato, il pentimento e la sete di giustizia. Per questo i Salmi sono lo specchio dell'anima: qualunque cosa tu stia vivendo, c'è un salmo che la dice a Dio.</p>
          <div class="keypoint">
            Sant'Atanasio diceva che mentre le altre Scritture ci parlano, nei Salmi <strong>noi parliamo</strong>: diventano la nostra voce. Gesù stesso li ha pregati, fino all'ultimo respiro sulla croce. Per la Chiesa restano la preghiera quotidiana per eccellenza (la Liturgia delle Ore).
          </div>
        `
      },
      {
        id: "cinque-libri",
        title: "I cinque libri",
        subtitle: "Un piccolo Pentateuco di preghiera",
        html: `
          <p>I 150 salmi non sono un mucchio disordinato: sono raccolti in <strong>cinque libri</strong>, ognuno chiuso da una dossologia («Benedetto il Signore… Amen, amen»). La tradizione ebraica vi ha visto un <strong>specchio del Pentateuco</strong>: cinque libri di preghiera che rispondono ai cinque libri della Legge.</p>
          <ol class="struct-list">
            <li><span class="struct-ref">Libro I</span> Sal 1-41 — prevalentemente di Davide; domina il giusto di fronte ai nemici.</li>
            <li><span class="struct-ref">Libro II</span> Sal 42-72 — salmi dei figli di Core e di Davide; si chiude con Salomone.</li>
            <li><span class="struct-ref">Libro III</span> Sal 73-89 — di Asaf e altri; la grande crisi (esilio, trono di Davide in pericolo).</li>
            <li><span class="struct-ref">Libro IV</span> Sal 90-106 — «il Signore regna»: risposta alla crisi, Dio è il vero re.</li>
            <li><span class="struct-ref">Libro V</span> Sal 107-150 — ritorno, salmi delle salite e grande Hallel finale di lode.</li>
          </ol>
          <div class="keypoint">
            Il Salterio ha una <strong>regìa</strong>: si apre con il Salmo 1 (le due vie, come Proverbi) e si chiude con il Salmo 150, pura esplosione di lode. Il cammino del credente va <strong>dal discernimento alla lode</strong>, attraversando ogni dolore.
          </div>
        `
      },
      {
        id: "parallelismo",
        title: "Come è fatta la poesia dei Salmi",
        subtitle: "Non la rima dei suoni, ma la rima dei pensieri",
        html: `
          <p>La poesia ebraica non usa la rima né la metrica come la nostra. Il suo motore è il <strong>parallelismo</strong>: il pensiero del primo verso viene ripreso nel secondo. È una «rima di idee», e per questo <strong>non si perde nella traduzione</strong> — funziona in ogni lingua.</p>
          <div class="two-cols">
            <div class="col-box">
              <h5>Sinonimo</h5>
              <p>Il secondo verso ripete il primo con altre parole: «I cieli narrano la gloria di Dio, / l'opera delle sue mani annuncia il firmamento» (Sal 19,2).</p>
            </div>
            <div class="col-box">
              <h5>Antitetico</h5>
              <p>Il secondo verso dice il contrario: «Il Signore veglia sul cammino dei giusti, / ma la via degli empi va in rovina» (Sal 1,6).</p>
            </div>
          </div>
          <div class="keypoint">
            Capire il parallelismo cambia il modo di pregare: i due versi non sono ripetizione inutile, ma due <strong>angolazioni</strong> della stessa verità. Fermarsi su entrambe fa «respirare» la preghiera. Esistono anche salmi <em>acrostici</em> (ogni verso inizia con una lettera dell'alfabeto, come il Sal 119): un modo per dire «lodo Dio dalla A alla Z».
          </div>
        `
      },
      {
        id: "generi",
        title: "I generi dei salmi",
        subtitle: "Lode, lamento, ringraziamento, fiducia",
        html: `
          <p>Ogni salmo ha una sua «forma». Riconoscerla aiuta a capire cosa stai pregando.</p>
          <ul class="clean-list">
            <li><strong>Inni di lode</strong> — celebrano Dio creatore e re (Sal 8; 19; 103; 145-150).</li>
            <li><strong>Lamenti</strong> — il gruppo <em>più numeroso</em>: il grido nel dolore, personale (Sal 22; 51; 130) o di tutto il popolo (Sal 74; 137).</li>
            <li><strong>Ringraziamento</strong> — dopo essere stati salvati (Sal 30; 116).</li>
            <li><strong>Fiducia</strong> — l'abbandono sereno (Sal 23; 27; 91; 131).</li>
            <li><strong>Salmi regali e messianici</strong> — il re e il futuro Messia (Sal 2; 72; 110).</li>
            <li><strong>Sapienziali</strong> — vicini ai Proverbi (Sal 1; 37; 73; 119).</li>
            <li><strong>Salmi delle salite</strong> — cantati salendo a Gerusalemme (Sal 120-134).</li>
          </ul>
          <div class="keypoint">
            Sorpresa che consola: <strong>i lamenti sono più numerosi delle lodi</strong>. La Bibbia non censura il dolore — gli dà parole. C'è perfino spazio per la protesta e per il «perché?». Pregare i salmi insegna che <strong>si può portare a Dio tutto</strong>, anche ciò che non oseremmo dire.
          </div>
        `
      },
      {
        id: "lamento",
        title: "Il lamento: il coraggio di gridare",
        subtitle: "La struttura che porta dal buio alla fiducia",
        html: `
          <p>Quasi un terzo del Salterio è fatto di <strong>lamenti</strong>. E quasi tutti seguono un movimento sorprendente: cominciano nel buio e, senza negarlo, sfociano nella fiducia.</p>
          <ol class="struct-list">
            <li><span class="struct-ref">1</span> <strong>Invocazione</strong> — ci si rivolge a Dio per nome.</li>
            <li><span class="struct-ref">2</span> <strong>Lamento</strong> — si dice il dolore senza filtri: «fino a quando, Signore?» (Sal 13).</li>
            <li><span class="struct-ref">3</span> <strong>Richiesta</strong> — si chiede aiuto, salvezza, giustizia.</li>
            <li><span class="struct-ref">4</span> <strong>Motivo di fiducia</strong> — si ricorda chi è Dio e cosa ha già fatto.</li>
            <li><span class="struct-ref">5</span> <strong>Voto di lode</strong> — si promette di ringraziare: la fede rinasce.</li>
          </ol>
          <div class="keypoint">
            Il Salmo 22 ne è il vertice: comincia con «Dio mio, Dio mio, perché mi hai abbandonato?» e finisce con la lode all'assemblea. È lo stesso salmo che <strong>Gesù prega sulla croce</strong>: non un grido di disperazione finale, ma l'inizio di una preghiera che sa già come va a finire — nella vittoria di Dio.
          </div>
        `
      },
      {
        id: "messianici",
        title: "I salmi che annunciano Cristo",
        subtitle: "Pregati da Gesù, riletti dalla Chiesa",
        html: `
          <p>Alcuni salmi, nati per il re d'Israele, sono diventati <strong>profezia del Messia</strong>. Il Nuovo Testamento cita i Salmi più di ogni altro libro dell'Antico Testamento.</p>
          <ul class="clean-list">
            <li><strong>Salmo 2</strong> — «Tu sei mio figlio, oggi ti ho generato»: applicato a Gesù nel battesimo e nella risurrezione (At 13,33).</li>
            <li><strong>Salmo 22</strong> — «Hanno forato le mie mani e i miei piedi… si dividono le mie vesti»: la passione, scritta secoli prima.</li>
            <li><strong>Salmo 110</strong> — «Siedi alla mia destra»: il salmo più citato nel NT, sul Cristo re e sacerdote (Eb 1; 7).</li>
            <li><strong>Salmo 118</strong> — «La pietra scartata è divenuta testata d'angolo»: Gesù lo riferisce a sé (Mt 21,42).</li>
            <li><strong>Salmo 16</strong> — «Non lascerai che il tuo fedele veda la fossa»: la risurrezione (At 2,25-31).</li>
          </ul>
          <div class="keypoint">
            Gesù stesso disse che «doveva compiersi tutto ciò che è scritto di me… nei Salmi» (Lc 24,44). Pregare i Salmi, per un cristiano, è pregare <strong>con</strong> Cristo e <strong>in</strong> Cristo: è Lui la voce più profonda di ogni salmo.
          </div>
        `
      },
      {
        id: "concetti",
        title: "I Salmi per concetti",
        subtitle: "I 150 salmi raggruppati per tema spirituale",
        html: `
          <p>Ecco i Salmi raccolti non per ordine canonico, ma <strong>per tema</strong> — con le connessioni che li legano tra loro, alla liturgia e alla vita di Cristo. Una bussola per trovare il salmo giusto nel momento giusto.</p>
          <div data-salmi-concetti></div>
        `
      },
      {
        id: "oggi",
        title: "Come pregare i Salmi oggi",
        subtitle: "Farli diventare la propria voce",
        html: `
          <ol class="struct-list">
            <li><span class="struct-ref">1</span> <strong>Prega con il salmo che corrisponde al tuo stato</strong>, ma anche con quelli che non senti: pregando un lamento quando sei sereno, intercedi per chi soffre; pregando una lode quando sei a terra, ti aggrappi alla verità più che al sentimento.</li>
            <li><span class="struct-ref">2</span> <strong>Lentamente, una riga alla volta.</strong> Il parallelismo invita a fermarsi e ripetere.</li>
            <li><span class="struct-ref">3</span> <strong>Ad alta voce</strong>, se puoi: erano canti. La voce coinvolge il corpo nella preghiera.</li>
            <li><span class="struct-ref">4</span> <strong>Con Cristo.</strong> Chiediti: come ha pregato Lui questo salmo? Spesso il salmo si illumina.</li>
          </ol>
          <div class="keypoint">
            Un consiglio antico: <strong>impara a memoria qualche salmo</strong> (il 23, il 51, il 91, il 121). Diventeranno la tua preghiera quando non avrai parole tue — di notte, nella paura, nella gioia. È così che i Salmi smettono di essere un libro e diventano la tua voce davanti a Dio.
          </div>
        `
      }
    ]
  },

  // ============================================================
  //  QOÈLET (ECCLESIASTE)
  // ============================================================
  "Qoèlet (Ecclesiaste)": {
    tagline: "Il libro più spiazzante della Bibbia: «tutto è soffio». Una lucida demolizione delle illusioni — che apre, paradossalmente, alla gioia e a Dio.",
    facts: [
      { k: "Titolo ebraico", v: "Qohélet (קֹהֶלֶת) — «colui che raduna / il Predicatore»" },
      { k: "Capitoli", v: "12" },
      { k: "Tradizione", v: "Attribuito a Salomone" },
      { k: "Genere", v: "Letteratura sapienziale (riflessione)" },
      { k: "Parola-chiave", v: "hével (soffio, vapore) — 38 volte" }
    ],
    sections: [
      {
        id: "cos-e",
        title: "Che cos'è il libro di Qoèlet",
        subtitle: "La voce più disincantata della Scrittura",
        html: `
          <p>Qoèlet sorprende: è un libro <strong>radicalmente onesto</strong>, quasi spietato. Guarda in faccia la fatica di vivere, l'ingiustizia, la morte che livella tutto, e ripete come un ritornello: «<em>Vanità delle vanità, tutto è vanità</em>» (Qo 1,2). Sembra quasi un libro «laico» — eppure è Parola di Dio.</p>
          <p>Perché c'è nella Bibbia? Perché la fede non ha paura delle domande dure. Qoèlet fa le pulizie: <strong>demolisce le false sicurezze</strong> (ricchezza, successo, piacere, persino la sapienza umana) per lasciare spazio all'unica cosa che regge.</p>
          <div class="keypoint">
            Qoèlet è il «terzo lato» della sapienza biblica: i <em>Proverbi</em> danno la regola, <em>Giobbe</em> grida l'eccezione del dolore innocente, <em>Qoèlet</em> denuncia il limite di ogni sapienza umana. Insieme dicono: la vita non si lascia ingabbiare in una formula. Solo Dio le dà senso.
          </div>
        `
      },
      {
        id: "hevel",
        title: "«Vanità»: la parola che inganna",
        subtitle: "Hével non è nichilismo, è fugacità",
        html: `
          <p>Tutto dipende da una parola, ripetuta 38 volte e quasi sempre tradotta «vanità».</p>
          <div class="word-card" tabindex="0">
            <div class="word-card-head">
              <span class="word-translit">hével</span>
              <span class="word-greek">הֶבֶל</span>
              <span class="word-tap">tocca per scoprire</span>
            </div>
            <div class="word-card-body">
              <p>Letteralmente <strong>«soffio, vapore, fiato, fumo»</strong>. Non significa «inutile» in senso nichilista, ma <strong>inafferrabile, fugace, impossibile da trattenere</strong> — come il respiro in una mattina fredda: lo vedi un istante e svanisce. (È anche il nome di <em>Abele</em>, la vita stroncata in un soffio.)</p>
            </div>
          </div>
          <p>Quindi «vanità delle vanità» non vuol dire «niente ha valore», ma: <strong>nulla di ciò che afferri quaggiù lo puoi trattenere</strong>. La ricchezza, i piaceri, la fama, la vita stessa: tutto ti scivola tra le dita come vapore. È una constatazione, non una disperazione.</p>
        `
      },
      {
        id: "sotto-il-sole",
        title: "«Sotto il sole»",
        subtitle: "La prospettiva dell'uomo senza il cielo",
        html: `
          <p>Un'altra espressione ritorna come un martello: «<strong>sotto il sole</strong>» (circa 30 volte). È la chiave per capire tutto il libro.</p>
          <div class="keypoint">
            «Sotto il sole» significa: guardando la vita <strong>dal solo punto di vista terreno</strong>, con la sola ragione, senza alzare gli occhi al cielo. In quell'orizzonte chiuso, tutto è davvero hével: si lavora e si muore, si accumula e si lascia tutto ad altri, il saggio e lo stolto finiscono nella stessa tomba (Qo 2,16). Qoèlet ti porta fino in fondo a questa logica — per mostrarti che <strong>non basta</strong>.
          </div>
          <p>È un libro «apologetico» a rovescio: invece di dimostrarti che Dio esiste, ti fa <strong>toccare il vuoto di una vita senza Dio</strong>. Chi vive solo «sotto il sole» prima o poi sbatte contro l'assurdo. La domanda di senso che ne nasce è la porta verso «ciò che sta sopra il sole».</p>
        `
      },
      {
        id: "tempo",
        title: "Un tempo per ogni cosa",
        subtitle: "Qo 3 e l'eternità nel cuore",
        html: `
          <p>Il brano più celebre è il poema dei tempi: «<em>C'è un tempo per nascere e un tempo per morire… un tempo per piangere e un tempo per ridere</em>» (Qo 3,1-8). Non è fatalismo: è il riconoscimento che <strong>i tempi della vita non sono nelle nostre mani</strong>.</p>
          <p>E proprio lì arriva una delle frasi più profonde della Bibbia:</p>
          <blockquote class="teaching-quote">
            «Dio ha fatto bella ogni cosa a suo tempo; ha posto nel loro cuore <strong>l'eternità</strong>, senza però che l'uomo possa comprendere l'opera di Dio dal principio alla fine» (Qo 3,11).
          </blockquote>
          <div class="keypoint">
            Ecco la chiave: Dio ha messo <strong>l'eternità nel cuore</strong> dell'uomo. Per questo le cose fugaci «sotto il sole» non ci bastano mai: siamo fatti per qualcosa che non passa. La nostra inquietudine non è un difetto, è una <strong>bussola</strong> che punta oltre il sole. (Sant'Agostino: «ci hai fatti per Te, e il nostro cuore è inquieto finché non riposa in Te».)
          </div>
        `
      },
      {
        id: "godere",
        title: "Mangia il tuo pane con gioia",
        subtitle: "Il dono nascosto del presente",
        html: `
          <p>Sorprendentemente, il libro più «amaro» della Bibbia è anche quello che più invita alla <strong>gioia semplice</strong>. Sette volte ritorna lo stesso invito:</p>
          <blockquote class="teaching-quote">
            «Non c'è di meglio per l'uomo che mangiare e bere e godere del suo lavoro. Ma anche questo viene dalla mano di Dio» (Qo 2,24).
          </blockquote>
          <div class="keypoint">
            Se tutto è fugace, allora il presente — il pane, il vino, il lavoro, gli affetti — va accolto come <strong>dono di Dio da gustare ora</strong>, non da idolatrare né da rimandare. Non è l'edonismo del «mangiamo e beviamo perché domani moriremo», ma il suo contrario: <em>ricevi con gratitudine il momento presente dalle mani di Dio</em>. È un «carpe diem» redento, vissuto davanti al Creatore.
          </div>
        `
      },
      {
        id: "conclusione",
        title: "La conclusione di tutto",
        subtitle: "Temi Dio e osserva i suoi comandamenti",
        html: `
          <p>Dopo dodici capitoli di domande, Qoèlet tira le somme con una frase che capovolge l'apparente pessimismo:</p>
          <blockquote class="teaching-quote">
            «Conclusione del discorso, dopo che si è ascoltato tutto: <strong>temi Dio e osserva i suoi comandamenti</strong>, perché questo per l'uomo è tutto» (Qo 12,13).
          </blockquote>
          <div class="keypoint">
            Ecco «ciò che sta sopra il sole». Quando tutto è fugace, l'unica cosa che non è hével è la <strong>relazione con Dio</strong>: temerlo (la riverenza dei Proverbi), camminare con Lui. Qoèlet non finisce nel nulla, finisce in ginocchio. La lucidità sul vuoto del mondo diventa la spinta a cercare l'Eterno.
          </div>
        `
      },
      {
        id: "cristo",
        title: "Qoèlet e Cristo",
        subtitle: "La risposta al «soffio»",
        html: `
          <p>Qoèlet lascia una domanda aperta: se tutto «sotto il sole» è vapore, dove trovo ciò che non passa? Il Nuovo Testamento risponde con un evento: la <strong>risurrezione</strong>.</p>
          <p>San Paolo ragiona esattamente come Qoèlet: «Se i morti non risorgono, mangiamo e beviamo, perché domani moriremo» (1 Cor 15,32) — cioè: senza risurrezione, tutto è davvero hével. <strong>Ma Cristo è risorto</strong>, e questo cambia tutto: «la vostra fatica non è vana nel Signore» (1 Cor 15,58). Ciò che Qoèlet non poteva vedere — una vita che vince la morte — in Cristo è apparso.</p>
          <div class="keypoint">
            Gesù riprende il tema: «Che giova all'uomo guadagnare il mondo intero, se poi perde la sua vita?» (Mc 8,36). È Qoèlet in una frase. La risposta è Lui: l'unico «tesoro che non si consuma» (Lc 12,33), ciò che riempie l'eternità posta nel nostro cuore.
          </div>
        `
      }
    ]
  },

  // ============================================================
  //  CANTICO DEI CANTICI
  // ============================================================
  "Cantico dei Cantici": {
    tagline: "Un poema d'amore audace e sensuale — e insieme il più alto canto mistico: l'amore tra Dio e l'uomo, tra Cristo e la Chiesa.",
    facts: [
      { k: "Titolo ebraico", v: "Shir ha-Shirìm (שִׁיר הַשִּׁירִים) — «il Cantico dei Cantici», cioè il più sublime" },
      { k: "Capitoli", v: "8" },
      { k: "Tradizione", v: "Attribuito a Salomone" },
      { k: "Genere", v: "Poesia d'amore (epitalamio)" },
      { k: "Versetto-chiave", v: "«Forte come la morte è l'amore» (Ct 8,6)" }
    ],
    sections: [
      {
        id: "cos-e",
        title: "Che cos'è il Cantico dei Cantici",
        subtitle: "Un libro d'amore nel cuore della Bibbia",
        html: `
          <p>È il libro più inatteso della Scrittura: un <strong>poema d'amore</strong> tra un uomo e una donna, fatto di desiderio, attesa, baci, profumi, corpi descritti senza pudore. Non vi compare mai esplicitamente il nome di Dio. Eppure il titolo lo dice tutto: «<strong>il Cantico dei Cantici</strong>», cioè <em>il più bello di tutti i canti</em> — un superlativo ebraico, come «Re dei re».</p>
          <p>Rabbi Aqiva, nel I secolo, disse che «tutti i Cantici sono santi, ma il Cantico dei Cantici è il <strong>santo dei santi</strong>». Non un libro marginale, dunque, ma un vertice.</p>
          <div class="keypoint">
            Che un poema così sensuale sia Parola di Dio dice una cosa enorme: <strong>l'amore umano, il corpo, il desiderio sono buoni</strong>, voluti dal Creatore. La Bibbia non disprezza la carne. E al tempo stesso, quell'amore diventa la <em>lingua</em> per dire l'amore più grande: quello tra Dio e l'uomo.
          </div>
        `
      },
      {
        id: "due-letture",
        title: "Le due letture",
        subtitle: "Letterale e allegorica — entrambe vere",
        html: `
          <p>Il Cantico si legge da sempre su due piani, che non si escludono ma si illuminano.</p>
          <div class="two-cols">
            <div class="col-box">
              <h5>Letterale</h5>
              <p>Canto dell'<strong>amore sponsale</strong> tra uomo e donna: la bellezza, il desiderio, la fedeltà, la gioia dei corpi. Dio benedice l'amore degli sposi (cfr. Gen 2,24).</p>
            </div>
            <div class="col-box">
              <h5>Allegorica</h5>
              <p>Canto dell'amore tra <strong>Dio e Israele</strong> (i profeti usano il matrimonio per dirlo: Osea), tra <strong>Cristo e la Chiesa</strong> (Ef 5), tra <strong>Dio e l'anima</strong> di ogni credente.</p>
            </div>
          </div>
          <div class="keypoint">
            Le due letture si tengono insieme: proprio perché l'amore tra gli sposi è reale e bello, può <strong>raccontare</strong> l'amore di Dio. Non è un codice da decifrare, ma un'esperienza — l'innamoramento — che diventa finestra sul mistero di Dio che ci ama come uno sposo.
          </div>
        `
      },
      {
        id: "appartenenza",
        title: "«Io sono del mio amato»",
        subtitle: "Il cuore del Cantico: l'appartenenza reciproca",
        html: `
          <p>Il ritornello del libro dice tutto dell'amore vero:</p>
          <blockquote class="teaching-quote">
            «Il mio amato è mio e io sono sua» (Ct 2,16); «Io sono del mio amato e il mio amato è mio» (Ct 6,3).
          </blockquote>
          <div class="word-card" tabindex="0">
            <div class="word-card-head">
              <span class="word-translit">dodì</span>
              <span class="word-greek">דּוֹדִי</span>
              <span class="word-tap">tocca per scoprire</span>
            </div>
            <div class="word-card-body">
              <p>«Il mio amato / il mio diletto»: è la parola con cui la sposa chiama lo sposo lungo tutto il poema. Indica un amore <strong>personale e reciproco</strong>: non «un» amato, ma «<em>il mio</em>». L'amore biblico non è un sentimento generico, è un <strong>legame di appartenenza</strong> tra due persone che si scelgono.</p>
            </div>
          </div>
          <p>Questa reciprocità è l'immagine di ciò che Dio desidera con noi: non sudditi, ma uno sposo e una sposa che si appartengono. «Sarò il vostro Dio e voi sarete il mio popolo» è la versione dell'alleanza della stessa frase d'amore.</p>
        `
      },
      {
        id: "amore-forte",
        title: "Forte come la morte",
        subtitle: "Ct 8,6-7: il sigillo del libro",
        html: `
          <p>Verso la fine, il Cantico si solleva al suo vertice, in versi tra i più potenti della letteratura di ogni tempo:</p>
          <blockquote class="teaching-quote">
            «Mettimi come sigillo sul tuo cuore… perché <strong>forte come la morte è l'amore</strong>, tenace come gli inferi è la passione: le sue vampe sono vampe di fuoco, una fiamma divina. Le grandi acque non possono spegnere l'amore né i fiumi travolgerlo» (Ct 8,6-7).
          </blockquote>
          <div class="word-card" tabindex="0">
            <div class="word-card-head">
              <span class="word-translit">shalhèvetyah</span>
              <span class="word-greek">שַׁלְהֶבֶתְיָה</span>
              <span class="word-tap">tocca per scoprire</span>
            </div>
            <div class="word-card-body">
              <p>«Fiamma di Yah», cioè <strong>una fiamma di Dio</strong>: è l'unica volta in tutto il libro in cui compare (nascosto) il nome di Dio. L'amore vero ha in sé una scintilla divina: non è solo emozione umana, è <strong>partecipazione al fuoco di Dio</strong>, che è Amore.
          </p>
            </div>
          </div>
          <div class="keypoint">
            «Forte come la morte»: l'amore è l'unica forza che regge il confronto con la morte. E il Cantico, letto con gli occhi del Vangelo, profetizza l'amore <strong>più forte</strong> della morte: quello di Cristo che, per la sua sposa, attraversa la morte e la vince. «Le grandi acque non possono spegnerlo».
          </div>
        `
      },
      {
        id: "ricerca",
        title: "Cercare l'amato",
        subtitle: "Assenza, desiderio, mistica",
        html: `
          <p>Il Cantico non è un idillio tranquillo: è fatto anche di <strong>assenza e ricerca</strong>. La sposa si alza di notte, percorre la città, chiede alle guardie: «<em>Avete visto l'amato del mio cuore?</em>» (Ct 3,1-4). Lo cerca, lo perde, lo ritrova.</p>
          <div class="keypoint">
            I grandi mistici cristiani — Bernardo di Chiaravalle, Giovanni della Croce, Teresa d'Ávila — hanno letto qui la <strong>storia dell'anima che cerca Dio</strong>: il desiderio, la notte oscura dell'assenza, la gioia dell'incontro. La sete di Dio, le sue «sparizioni» che fanno crescere il desiderio, la ricerca instancabile: il Cantico dà parole all'esperienza spirituale più profonda.
          </div>
          <p>Per questo è il libro più amato dalla mistica: dice che pregare non è anzitutto «fare cose», ma <strong>cercare un Volto</strong>, desiderare Qualcuno, lasciarsi cercare e trovare.</p>
        `
      },
      {
        id: "cristo-chiesa",
        title: "Cristo sposo, la Chiesa sposa",
        subtitle: "Dal Cantico alle nozze dell'Agnello",
        html: `
          <p>Tutta la Scrittura si chiude con un matrimonio. Il filo che parte dal Cantico arriva fino all'ultima pagina della Bibbia.</p>
          <ul class="clean-list">
            <li><strong>I profeti</strong> chiamano Israele la «sposa» di Dio (Osea, Ezechiele 16, Isaia 62).</li>
            <li><strong>Gesù</strong> si presenta come lo «sposo» (Mc 2,19; Mt 25, le vergini e lo sposo).</li>
            <li><strong>San Paolo</strong>: «Cristo ha amato la Chiesa e ha dato se stesso per lei… questo mistero è grande» (Ef 5,25-32).</li>
            <li><strong>L'Apocalisse</strong> culmina nelle «nozze dell'Agnello» (Ap 19,7; 21,2): la Gerusalemme nuova «come una sposa adorna per il suo sposo».</li>
          </ul>
          <div class="keypoint">
            La storia della salvezza è, dall'inizio alla fine, una <strong>storia d'amore sponsale</strong> che si conclude con un matrimonio eterno. Il Cantico dei Cantici ne è il poema nascosto al centro della Bibbia: ci ricorda che Dio non ci vuole come servi, ma come <strong>sposa amata per sempre</strong>.
          </div>
        `
      }
    ]
  },

  // ============================================================
  //  SAPIENZA
  // ============================================================
  "Sapienza": {
    tagline: "Scritto in greco ad Alessandria, getta un ponte tra Bibbia e cultura greca — e annuncia per la prima volta con chiarezza l'immortalità dell'anima e il giusto perseguitato.",
    facts: [
      { k: "Titolo", v: "Sapienza di Salomone (deuterocanonico)" },
      { k: "Lingua", v: "Greco" },
      { k: "Periodo", v: "I sec. a.C., Alessandria d'Egitto" },
      { k: "Autore", v: "Anonimo ebreo ellenista (a nome di Salomone)" },
      { k: "Versetto-chiave", v: "«Le anime dei giusti sono nelle mani di Dio» (Sap 3,1)" }
    ],
    sections: [
      {
        id: "cos-e",
        title: "Che cos'è il libro della Sapienza",
        subtitle: "Un ponte tra Gerusalemme e Atene",
        html: `
          <p>È uno degli ultimi libri dell'Antico Testamento, scritto in <strong>greco</strong> nella grande città di <strong>Alessandria d'Egitto</strong>, dove viveva una numerosa comunità ebraica immersa nella cultura greca. È <strong>deuterocanonico</strong>: accolto nel canone cattolico e ortodosso, non in quello ebraico ed evangelico.</p>
          <p>L'autore scrive a nome di Salomone (il re saggio per eccellenza) e si rivolge a ebrei tentati di <strong>abbandonare la fede</strong> per lo scetticismo e i culti pagani che li circondano. Vuole mostrare che la sapienza vera non è quella dei filosofi pagani, ma quella che viene da Dio.</p>
          <div class="keypoint">
            La Sapienza è un libro «di frontiera»: parla il linguaggio della cultura greca (immortalità, virtù cardinali, provvidenza) per dire la fede di Israele. È un modello di come <strong>il Vangelo dialoga con ogni cultura</strong> senza diluirsi — la stessa cosa che farà la Chiesa dei primi secoli.
          </div>
        `
      },
      {
        id: "immortalita",
        title: "Dio non ha creato la morte",
        subtitle: "La novità: l'immortalità dei giusti",
        html: `
          <p>La Sapienza fa un passo che gran parte dell'Antico Testamento non aveva ancora fatto con chiarezza: afferma l'<strong>immortalità</strong> e la sorte beata dei giusti dopo la morte.</p>
          <blockquote class="teaching-quote">
            «Dio non ha creato la morte e non gode per la rovina dei viventi… Le anime dei giusti sono nelle mani di Dio, nessun tormento li toccherà. Agli occhi degli stolti parve che morissero… ma essi sono nella pace» (Sap 1,13; 3,1-3).
          </blockquote>
          <div class="keypoint">
            È una svolta enorme. Mentre molti testi antichi vedevano solo lo <em>sheol</em> (il regno oscuro dei morti), qui appare la speranza piena: la morte non è l'ultima parola, il giusto è custodito da Dio. Questa luce prepara direttamente l'annuncio cristiano della <strong>risurrezione</strong> e della vita eterna.
          </div>
        `
      },
      {
        id: "giusto",
        title: "Il giusto perseguitato",
        subtitle: "Sap 2: una profezia impressionante della Passione",
        html: `
          <p>Nel capitolo 2 l'autore mette in bocca agli empi un ragionamento agghiacciante: poiché non credono nell'aldilà, decidono di godere e di <strong>opprimere il giusto</strong>, la cui sola esistenza li accusa. E dicono parole che ogni cristiano riconosce:</p>
          <blockquote class="teaching-quote">
            «Tendiamo insidie al giusto, perché ci è di imbarazzo… Si vanta di possedere la conoscenza di Dio e si proclama <strong>figlio del Signore</strong>… Vediamo se le sue parole sono vere… Condanniamolo a una morte infamante, perché, secondo le sue parole, <strong>il soccorso gli verrà</strong>» (Sap 2,12-20).
          </blockquote>
          <div class="keypoint">
            Scritto circa un secolo <strong>prima</strong> di Cristo, questo brano descrive con precisione sconcertante la Passione di Gesù: il giusto innocente, deriso perché si dice Figlio di Dio, condannato a morte infamante, sfidato a farsi salvare da Dio (cfr. Mt 27,41-43). La Chiesa lo legge nella Settimana Santa: l'Antico Testamento «sapeva» più di quanto sospettasse.
          </div>
        `
      },
      {
        id: "sophia",
        title: "La Sapienza, riflesso di Dio",
        subtitle: "Sap 7: dalla Sapienza al Verbo",
        html: `
          <p>Come in Proverbi 8, anche qui la <strong>Sapienza è personificata</strong>, ma con accenti ancora più alti. È descritta come una realtà che viene da Dio e lo rispecchia:</p>
          <blockquote class="teaching-quote">
            «È un <strong>effluvio della potenza di Dio</strong>, un'emanazione purissima della gloria dell'Onnipotente… è un <strong>riflesso della luce eterna</strong>, uno specchio senza macchia dell'attività di Dio e immagine della sua bontà» (Sap 7,25-26).
          </blockquote>
          <div class="keypoint">
            Il Nuovo Testamento usa quasi le stesse parole per <strong>Cristo</strong>: «irradiazione della sua gloria e impronta della sua sostanza» (Eb 1,3); «immagine del Dio invisibile» (Col 1,15). La Sapienza personificata di questo libro è uno dei gradini che preparano la rivelazione del <strong>Verbo</strong>, la Sapienza di Dio fatta carne (1 Cor 1,24).
          </div>
        `
      },
      {
        id: "storia",
        title: "La Sapienza nella storia",
        subtitle: "Da Adamo all'Esodo, e la follia degli idoli",
        html: `
          <p>Nella seconda parte (cc. 10-19) l'autore rilegge la <strong>storia della salvezza</strong> mostrando come la Sapienza di Dio abbia guidato e protetto i giusti: Adamo, Noè, Abramo, Giuseppe, e soprattutto Mosè e l'Esodo. La storia non è caos: è governata dalla sapiente provvidenza di Dio.</p>
          <p>Al centro c'è anche una lucida <strong>critica dell'idolatria</strong> (cc. 13-15): l'autore analizza con ironia come nasce un idolo — l'uomo che adora il prodotto delle proprie mani, un pezzo di legno avanzato dopo aver fatto un mobile (Sap 13,11-19). Dietro l'idolo c'è sempre l'uomo che mette qualcosa al posto di Dio.</p>
          <div class="keypoint">
            San Paolo riprenderà quasi alla lettera questa analisi in Romani 1: l'uomo che, potendo conoscere Dio dalle opere create, «ha adorato la creatura al posto del Creatore». La Sapienza fornisce il vocabolario alla teologia cristiana sulla conoscenza naturale di Dio e sull'idolatria.
          </div>
        `
      }
    ]
  },

  // ============================================================
  //  SIRACIDE (ECCLESIASTICO)
  // ============================================================
  "Siracide (Ecclesiastico)": {
    tagline: "Il grande manuale della saggezza ebraica: come vivere bene in famiglia, nel lavoro, nelle amicizie e davanti a Dio. E la grande identità: Sapienza = Parola di Dio.",
    facts: [
      { k: "Titolo", v: "Siracide / Ecclesiastico (deuterocanonico)" },
      { k: "Autore", v: "Gesù figlio di Sira (Ben Sira), Gerusalemme" },
      { k: "Periodo", v: "~II sec. a.C. (tradotto in greco dal nipote)" },
      { k: "Genere", v: "Manuale sapienziale" },
      { k: "Versetto-chiave", v: "«Principio di sapienza è temere il Signore» (Sir 1,14)" }
    ],
    sections: [
      {
        id: "cos-e",
        title: "Che cos'è il Siracide",
        subtitle: "La saggezza pratica messa per iscritto",
        html: `
          <p>Il Siracide è il <strong>più lungo dei libri sapienziali</strong> e una vera enciclopedia di saggezza per la vita quotidiana. L'autore — <strong>Gesù figlio di Sira</strong>, un maestro di Gerusalemme — raccoglie l'insegnamento di una vita. Suo nipote lo traduce poi in greco in Egitto, lasciandoci nel <strong>prologo</strong> una delle prime testimonianze sulla divisione della Bibbia ebraica («la Legge, i Profeti e gli altri scritti»).</p>
          <p>Il nome latino «Ecclesiastico» significa «libro della Chiesa»: era usatissimo per istruire i catecumeni. È <strong>deuterocanonico</strong> (canone cattolico e ortodosso).</p>
          <div class="keypoint">
            Mentre Qoèlet smonta e Giobbe grida, il Siracide <strong>costruisce</strong>: è il più sereno e concreto. Tocca tutto — denaro, salute, educazione dei figli, amicizia, medici, banchetti, lingua, lutto — sempre con un principio: vivere ogni cosa <strong>nel timore del Signore</strong>.
          </div>
        `
      },
      {
        id: "timore",
        title: "Il timore del Signore",
        subtitle: "Radice, pienezza e corona della sapienza",
        html: `
          <p>Come i Proverbi, il Siracide poggia tutto sul <strong>timore del Signore</strong> — ma lo sviluppa con un'immagine bellissima, quella di un albero:</p>
          <blockquote class="teaching-quote">
            «Il timore del Signore è <strong>principio</strong> di sapienza… è <strong>pienezza</strong> di sapienza… è <strong>corona</strong> di sapienza… è <strong>radice</strong> di sapienza» (Sir 1,14-20).
          </blockquote>
          <div class="keypoint">
            Il timore del Signore (riverenza, non paura) non è solo l'<em>inizio</em> del cammino, ma lo accompagna tutto: ne è la radice nascosta, il pieno sviluppo e il frutto finale. Tutta la saggezza pratica del libro — su soldi, parole, relazioni — nasce da questa unica radice: <strong>vivere alla presenza di Dio</strong>.
          </div>
        `
      },
      {
        id: "sapienza-torah",
        title: "La Sapienza pianta la tenda",
        subtitle: "Sir 24: Sapienza = Torah, e un'eco del Vangelo",
        html: `
          <p>Il capitolo 24 è il vertice: la <strong>Sapienza parla in prima persona</strong> (come in Proverbi 8), racconta di essere uscita dalla bocca di Dio e di aver cercato una dimora tra gli uomini. E Dio le indica dove abitare:</p>
          <blockquote class="teaching-quote">
            «Allora il Creatore mi diede un ordine… e disse: <strong>Fissa la tenda in Giacobbe</strong>… Prima dei secoli, fin dal principio, egli mi creò» (Sir 24,8-9).
          </blockquote>
          <p>Poi il libro fa un'identificazione decisiva: questa Sapienza è «<strong>il libro dell'alleanza, la Legge che Mosè ci ha prescritto</strong>» (Sir 24,23). La Sapienza eterna di Dio ha preso forma nella <strong>Torah</strong>, donata a Israele.</p>
          <div class="word-card" tabindex="0">
            <div class="word-card-head">
              <span class="word-translit">kataskēnóō</span>
              <span class="word-greek">«pose la tenda»</span>
              <span class="word-tap">tocca per scoprire</span>
            </div>
            <div class="word-card-body">
              <p>Il greco di Sir 24 dice che la Sapienza «<strong>piantò la tenda</strong>» (kataskēnóō) in mezzo al popolo. È esattamente il verbo che Giovanni userà: «Il Verbo si fece carne e <strong>pose la sua tenda</strong> in mezzo a noi» (Gv 1,14). La Sapienza che in Siracide abita nella Torah, nel Vangelo abita in una <strong>Persona</strong>: Gesù.</p>
            </div>
          </div>
          <div class="keypoint">
            Qui Antico e Nuovo Testamento si toccano: la Sapienza-Torah del Siracide prepara la Sapienza-Verbo del prologo di Giovanni. In Cristo la Sapienza eterna non è più solo un libro, ma un volto che si può incontrare.
          </div>
        `
      },
      {
        id: "etica",
        title: "Saggezza per la vita di ogni giorno",
        subtitle: "Lingua, denaro, amicizia, perdono",
        html: `
          <p>Il grosso del libro è <strong>consiglio pratico</strong>, spesso sorprendentemente attuale.</p>
          <ul class="clean-list">
            <li><strong>La lingua:</strong> «Chi sfugge alla spada finisce nelle grinfie della lingua» (Sir 28,18). Custodire la bocca è custodire la vita.</li>
            <li><strong>Il denaro e i poveri:</strong> «Non distogliere lo sguardo dal bisognoso» (Sir 4,5); onestà negli affari e generosità.</li>
            <li><strong>L'amicizia:</strong> pagine bellissime: «Un amico fedele è un balsamo di vita» (Sir 6,16); ma va provato nel tempo.</li>
            <li><strong>L'umiltà:</strong> «Quanto più sei grande, tanto più fatti umile» (Sir 3,18).</li>
            <li><strong>Il perdono:</strong> ecco l'anticipo più chiaro del Padre Nostro.</li>
          </ul>
          <blockquote class="teaching-quote">
            «<strong>Perdona l'offesa al tuo prossimo e allora, quando preghi, ti saranno rimessi i peccati</strong>… Se l'uomo nutre rancore verso un altro uomo, come può chiedere la guarigione al Signore?» (Sir 28,2-5).
          </blockquote>
          <div class="keypoint">
            Due secoli prima del Vangelo, il Siracide lega già il <strong>perdono ricevuto al perdono dato</strong>: è il cuore del «rimetti a noi i nostri debiti come noi li rimettiamo» (Mt 6,12). La sapienza di Israele preparava il terreno alle parole di Gesù.
          </div>
        `
      },
      {
        id: "elogio-padri",
        title: "L'Elogio dei padri",
        subtitle: "Sir 44-50: «Lodiamo gli uomini illustri»",
        html: `
          <p>Il libro culmina in una grande galleria della memoria (cc. 44-50), che si apre con un verso celebre: «<strong>Facciamo ora l'elogio degli uomini illustri</strong>, dei nostri antenati per generazione» (Sir 44,1).</p>
          <p>L'autore ripercorre la storia sacra attraverso i suoi protagonisti — Enoch, Noè, Abramo, Mosè, Aronne, Davide, i profeti, fino al sommo sacerdote del suo tempo — celebrando come Dio ha agito attraverso di loro.</p>
          <div class="keypoint">
            È una lezione sulla <strong>memoria e la tradizione</strong>: la fede non si inventa da zero, si riceve da una catena di testimoni. «Il loro nome vive per sempre» (Sir 44,14). Lo stesso sguardo grato sui «padri nella fede» tornerà in Ebrei 11, la grande galleria dei credenti dell'Antico Testamento. Onorare chi ci ha preceduto è parte della sapienza.
          </div>
        `
      }
    ]
  }

};
