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
  },

  // -----------------------------------------------------------
  {
    id: "attacchi-satana",
    titolo: "Perché Satana attacca quando sei più vicino a Dio",
    sottotitolo: "La paura come arma del nemico",
    autore: "Sam Shamoun",
    canale: "More Sam Shamoun",
    url: "https://youtu.be/p4gMqyVi_Fw",
    titoloOriginale: "Satan Attacks Believers When They're Closest to God... Here's why",
    durata: "14 min",
    lingua: "inglese (tradotto e rielaborato)",
    tagline: "Quando la tua fede è più forte, per il nemico diventi una minaccia. La sua arma preferita è la paura, perché ti distoglie lo sguardo da Gesù. La risposta non è fermarsi, ma avvicinarsi ancora di più a Dio.",
    facts: [
      { k: "Domanda", v: "«Perché gli attacchi arrivano proprio quando sono più vicina a Dio?»" },
      { k: "Passi chiave", v: "2 Tm 1,7-12 · Gc 4,7-8 · Mt 14,22-33" },
      { k: "Tesi", v: "La paura paralizza e allontana da Cristo: è la strategia del nemico" },
      { k: "Simbolo", v: "Pietro che cammina sulle acque e affonda quando guarda il vento" },
      { k: "Formato", v: "Risposta alla domanda di una giovane in diretta" }
    ],
    sezioni: [
      {
        id: "minaccia",
        title: "Sei una minaccia per il nemico",
        subtitle: "La domanda e la risposta",
        html: `
          <p>Una giovane racconta: «Mi sembra che gli attacchi arrivino proprio quando il mio rapporto con Dio è più forte, quando leggo costantemente la Bibbia e prego». Shamoun risponde: <strong>hai già risposto da sola</strong>.</p>
          <p>Quando sei più vicino al Signore e la tua fede è forte, Satana ti vede come <strong>una minaccia</strong>. Il mondo spirituale è reale, e il nemico cerca di manipolarti e intimidirti.</p>
          <p>Shamoun immagina il ragionamento del nemico: «Questa ragazza è pericolosa: più adora il Signore, più gli obbedisce, più si innamora di Lui, più distrugge i miei piani. Devo distrarla, perché si indebolisca nella fede e si allontani da Dio».</p>
          <div class="keypoint">
            <strong>Che cosa può e che cosa non può fare.</strong> Secondo Shamoun, il nemico non può costringere chi appartiene a Cristo a fare il male. Può però fare di tutto per <em>influenzarlo</em>: spingerlo a peccare, fargli perdere fiducia in Dio, distogliergli lo sguardo da Gesù. E quando riesce a distogliere lo sguardo da Cristo, ha vinto.
          </div>
        `
      },
      {
        id: "paura",
        title: "La paura: l'arma preferita",
        subtitle: "«Dio non ci ha dato uno spirito di timidezza»",
        html: `
          <p>La paura è una <strong>tattica di Satana</strong>. La paura paralizza, blocca, fa perdere la fiducia in Cristo. E se il nemico vede che funziona, continua a fare pressione: più hai paura, meno ti concentri su Dio; più ti concentri sulla paura, più ti allontani da Lui e ti indebolisci.</p>
          <blockquote class="teaching-quote">«Dio infatti non ci ha dato uno spirito di timidezza, ma di forza, di carità e di prudenza» (2 Tm 1,7).</blockquote>
          <p>Quindi, se qualcosa ti lascia nella paura anche dopo aver chiesto a Gesù di liberartene, <strong>non viene da Dio</strong>. Paolo prosegue (2 Tm 1,8-12): non vergognarti della testimonianza, soffri per il Vangelo con la forza di Dio, che ci ha salvati non per le nostre opere ma per la sua grazia. E conclude:</p>
          <blockquote class="teaching-quote">«So infatti in chi ho posto la mia fede e sono convinto che egli è capace di custodire fino a quel giorno ciò che mi è stato affidato» (2 Tm 1,12).</blockquote>
          <div class="keypoint">
            <strong>L'atteggiamento del credente.</strong> «Ho affidato a Lui la mia vita e non ho dubbi su chi Egli sia: è onnipotente nel salvarmi». Satana sa che, se riesce a farti dubitare di questo e a farti avere paura, ti indebolisce e non hai più la forza di resistergli.
          </div>
        `
      },
      {
        id: "due-motivi",
        title: "I due motivi degli attacchi",
        subtitle: "Il peccato oppure la santità",
        html: `
          <p>Shamoun distingue due ragioni per cui Dio può permettere un attacco del nemico:</p>
          <ul>
            <li><strong>Per il peccato.</strong> C'è un peccato nella tua vita e il Signore permette la prova per richiamare la tua attenzione e portarti al pentimento.</li>
            <li><strong>Per la santità.</strong> Sei così vicino al Signore che il nemico prova a farti cadere da quella unione con Dio.</li>
          </ul>
          <div class="keypoint">
            <strong>Nota di approfondimento.</strong> Il secondo caso ha un grande esempio biblico: Giobbe, uomo «integro e retto», messo alla prova proprio per la sua giustizia (Gb 1,8-12). E san Pietro avverte: «Il vostro nemico, il diavolo, come leone ruggente va in giro cercando chi divorare. Resistetegli saldi nella fede» (1 Pt 5,8-9). Nulla però accade senza il permesso di Dio, che non permette prove oltre le nostre forze (1 Cor 10,13).
          </div>
        `
      },
      {
        id: "resistete",
        title: "Sottomettetevi a Dio, resistete al diavolo",
        subtitle: "La strategia del credente",
        html: `
          <blockquote class="teaching-quote">«Sottomettetevi dunque a Dio; resistete al diavolo, ed egli fuggirà lontano da voi. Avvicinatevi a Dio ed egli si avvicinerà a voi. Peccatori, purificate le vostre mani; uomini dall'animo indeciso, santificate i vostri cuori» (Gc 4,7-8).</blockquote>
          <p>Il nemico <strong>deve fuggire</strong> se ti sottometti a Dio, perché lo Spirito Santo che è in te ti dà la forza di vincerlo. Ma il modo per vincere è duplice: <em>sottomettersi</em> a Dio e <em>resistere</em> al diavolo.</p>
          <p>Più adori, lodi, canti, studi la Scrittura e la vivi, più diventi forte e più facilmente gli resisti. Per questo il nemico diventa disperato e prova la carta della paura: perché tu passi meno tempo alla presenza di Dio e più tempo concentrato sui problemi.</p>
        `
      },
      {
        id: "sulle-acque",
        title: "Pietro sulle acque",
        subtitle: "Ogni miracolo rivela una verità spirituale",
        html: `
          <p>I discepoli attraversano il lago di notte, con vento e onde. Alla quarta veglia Gesù viene verso di loro camminando sul mare. Non lo riconoscono: «È un fantasma!», e gridano per la paura (Mt 14,25-26).</p>
          <blockquote class="teaching-quote">«Coraggio, sono io, non abbiate paura!» (Mt 14,27).</blockquote>
          <div class="keypoint">
            <strong>«Io sono».</strong> In greco Gesù non dice semplicemente «sono io», ma <em>egō eimi</em>, «Io sono»: l'eco del nome divino rivelato a Mosè (Es 3,14) e delle parole del Signore: «Ora vedete che io, io lo sono, e nessun altro è dio accanto a me» (Dt 32,39; cf. Is 43,10). Camminando sulle acque, Gesù si mostra come il Dio dell'Antico Testamento, Signore del vento e del mare.
          </div>
          <p>Pietro chiede: «Signore, se sei tu, comandami di venire verso di te sulle acque». Gesù risponde: «Vieni!». Pietro cammina… ma <strong>vedendo che il vento era forte, si impaurì</strong> e cominciò ad affondare (Mt 14,28-30).</p>
          <div class="keypoint">
            <strong>Simbolismo.</strong> Dio non compie miracoli per spettacolo: ogni miracolo fisico rivela una verità spirituale. Pietro affonda quando <em>distoglie lo sguardo da Gesù</em> e guarda vento e onde: le tempeste della vita. Se fissi le tempeste, la tua fede affonda; se fissi Gesù, cammini sopra di esse.
          </div>
          <p>Un ascoltatore suggerisce in diretta un versetto in sintonia: «La sua mente è salda; tu gli assicurerai la pace, pace perché in te ha fiducia» (Is 26,3).</p>
        `
      },
      {
        id: "salvami",
        title: "«Signore, salvami!»",
        subtitle: "La misericordia di Gesù",
        html: `
          <p>Mentre affonda, Pietro grida: «Signore, salvami!». E subito Gesù tende la mano, lo afferra e gli dice: «Uomo di poca fede, perché hai dubitato?» (Mt 14,30-31).</p>
          <p>Il senso, spiega Shamoun: «Non vedi che cammino sulle acque? Io sono il Dio che governa le tempeste della tua vita, vento e onde mi obbediscono. Perché hai guardato la tempesta invece di guardare me?».</p>
          <div class="keypoint">
            <strong>La compassione di Cristo.</strong> Pietro stava perdendo la fede, eppure appena grida di nuovo verso il Signore, Gesù lo salva. Non c'è caduta da cui un grido sincero non possa essere ascoltato.
          </div>
          <p>Quando salgono sulla barca, il vento cessa. E quelli che erano sulla barca <strong>si prostrarono davanti a lui</strong>, dicendo: «Davvero tu sei Figlio di Dio!» (Mt 14,32-33). La tempesta finisce in adorazione.</p>
        `
      },
      {
        id: "non-fermarti",
        title: "Non fermarti: intensifica",
        subtitle: "Il caso concreto della paralisi nel sonno",
        html: `
          <p>La giovane racconta di episodi notturni in cui vorrebbe parlare ma sente la lingua «legata»: la cosiddetta <strong>paralisi nel sonno</strong>. Dal punto di vista medico è un fenomeno noto; lei però la sente anche come un attacco spirituale.</p>
          <p>Il consiglio di Shamoun è netto: <strong>non smettere</strong> quello che stai facendo, <strong>fallo ancora di più</strong>. Se il nemico vede che l'attacco funziona — preghi meno, leggi meno la Bibbia, obbedisci meno — continuerà, anzi aumenterà l'intensità. Se vede che non funziona, smetterà.</p>
          <ul>
            <li>Prega di più, nel nome di Gesù.</li>
            <li>Adora, canta, leggi la Scrittura di più.</li>
            <li>Obbedisci di più e servi di più gli altri.</li>
          </ul>
          <div class="keypoint">
            <strong>Nota di prudenza.</strong> La Chiesa insegna a distinguere con discernimento ciò che è naturale da ciò che è spirituale: per disturbi del sonno è giusto consultare anche un medico. Sul piano spirituale, i mezzi ordinari sono la preghiera, i <strong>sacramenti</strong> (confessione ed Eucaristia), i sacramentali e il dialogo con un sacerdote; i casi straordinari si affidano a un esorcista autorizzato dal vescovo (CCC 1673).
          </div>
        `
      },
      {
        id: "sintesi",
        title: "Sintesi",
        subtitle: "Gli occhi fissi su Gesù",
        html: `
          <ul>
            <li><strong>Gli attacchi nei momenti più alti</strong> non sono un caso: sei diventato una minaccia per il regno delle tenebre.</li>
            <li><strong>La paura è l'arma del nemico</strong>: Dio non ci ha dato uno spirito di timidezza ma di forza (2 Tm 1,7).</li>
            <li><strong>Sottomettiti a Dio e resisti</strong>: il diavolo fuggirà (Gc 4,7).</li>
            <li><strong>Guarda Gesù, non la tempesta</strong>: Pietro affonda solo quando distoglie lo sguardo.</li>
            <li><strong>Grida a Lui</strong>: anche quando affondi, la sua mano ti afferra.</li>
            <li><strong>Non arretrare</strong>: rispondi all'attacco con più preghiera e più amore.</li>
          </ul>
          <blockquote class="teaching-quote">«Tenendo fisso lo sguardo su Gesù, colui che dà origine alla fede e la porta a compimento» (Eb 12,2).</blockquote>
          <div class="keypoint">
            <strong>Per la preghiera.</strong> Qual è oggi il «vento forte» che ti fa distogliere lo sguardo da Gesù? Prova a dirgli, come Pietro: «Signore, salvami», e a fare un passo in più nella preghiera proprio lì dove senti più resistenza.
          </div>
        `
      }
    ]
  },

  // -----------------------------------------------------------
  {
    id: "caduta-satana",
    titolo: "La caduta di Satana: che cosa dice davvero la Bibbia",
    sottotitolo: "Isaia 14, Ezechiele 28 e l'unico testo esplicito",
    autore: "Sam Shamoun",
    canale: "More Sam Shamoun",
    url: "https://youtu.be/m-03BR4f6CM",
    titoloOriginale: "The TRUTH About Satan's Fall No one Tells you",
    durata: "15 min",
    lingua: "inglese (tradotto e rielaborato)",
    tagline: "I testi più citati sulla caduta di Satana parlano, alla lettera, di due re umani. Possono riferirsi a Satana solo in modo indiretto. L'unico passo esplicito dice una cosa sola: fu condannato per la superbia. Del resto, Dio non ha voluto rivelarci di più.",
    facts: [
      { k: "Testi discussi", v: "Is 14 (re di Babilonia) · Ez 28 (re di Tiro)" },
      { k: "Chiave", v: "Dietro i re umani agiscono potenze spirituali (Dn 10; Ef 6,12)" },
      { k: "Sorpresa", v: "La Settanta legge Ez 28 in modo diverso dal testo ebraico" },
      { k: "Testo esplicito", v: "1 Tm 3,6: la condanna del diavolo per superbia" },
      { k: "Principio", v: "Le cose nascoste appartengono al Signore (Dt 29,28)" }
    ],
    sezioni: [
      {
        id: "contesto",
        title: "Isaia 14 ed Ezechiele 28 nel loro contesto",
        subtitle: "Due re che si credevano dèi",
        html: `
          <p>Quando si parla della caduta di Satana si citano quasi sempre due capitoli: <strong>Isaia 14</strong> («Come mai sei caduto dal cielo, astro del mattino…») ed <strong>Ezechiele 28</strong> (il «cherubino» cacciato dal monte di Dio).</p>
          <p>La conclusione di Shamoun: letti nel loro contesto, questi capitoli <strong>non parlano direttamente di Satana</strong>. Parlano del <strong>re di Babilonia</strong> (Is 14,4) e del <strong>re di Tiro</strong> (Ez 28,2.12) e della rovina che Dio manderà loro per la loro arroganza: si credevano dèi sulla terra, figli degli dèi dei loro pantheon, capaci di opporsi al vero Dio impunemente.</p>
          <p>Dio li descrive con linguaggio grandioso <strong>per deriderli</strong>: «Vi credete dèi? Siete solo vermi, e morirete» (cf. Is 14,11; Ez 28,9).</p>
        `
      },
      {
        id: "spiriti-dietro",
        title: "Spiriti che agiscono dietro i re",
        subtitle: "Perché si possono applicare a Satana",
        html: `
          <p>Questo significa che non c'entrano nulla con Satana? No. Quello che si dice di questi re <strong>può essere applicato per estensione</strong> allo spirito malvagio che agiva in loro e attraverso di loro.</p>
          <p>La Bibbia infatti insegna che dietro i governanti umani agiscono <strong>esseri spirituali</strong>. L'angelo dice a Daniele: «Fin dal primo giorno la tua preghiera è stata ascoltata… ma il principe del regno di Persia mi si è opposto per ventun giorni» (Dn 10,12-13; cf. Dn 10,20-21). Quale re umano potrebbe trattenere un angelo potente e invisibile? Non il re, ma <strong>lo spirito che agiva attraverso di lui</strong>.</p>
          <blockquote class="teaching-quote">«La nostra battaglia infatti non è contro la carne e il sangue, ma contro i Principati e le Potenze, contro i dominatori di questo mondo tenebroso, contro gli spiriti del male che abitano nelle regioni celesti» (Ef 6,12).</blockquote>
          <div class="keypoint">
            <strong>Simbolismo.</strong> Paolo dice ai cristiani: non fissatevi sull'uomo che avete davanti, su Cesare. La vera battaglia è contro le potenze delle tenebre che usano gli uomini come strumenti. Se si disarmano quelle potenze, anche gli uomini vengono liberati.
          </div>
        `
      },
      {
        id: "settanta",
        title: "Ezechiele 28: ebraico e Settanta",
        subtitle: "«Eri un cherubino» oppure «eri con il cherubino»?",
        html: `
          <p>C'è un dettaglio che pochi conoscono. Nel <strong>testo ebraico</strong> il re di Tiro è chiamato egli stesso cherubino:</p>
          <blockquote class="teaching-quote">«Eri come un cherubino ad ali spiegate a difesa; io ti posi sul monte santo di Dio… perciò ti ho scacciato dal monte di Dio e ti ho fatto perire, cherubino protettore» (Ez 28,14.16).</blockquote>
          <p>Nella <strong>Settanta</strong>, l'antica traduzione greca dell'Antico Testamento usata dalla Chiesa ortodossa e spesso citata dagli Apostoli, il testo dice invece: dal giorno in cui fosti creato <strong>eri con il cherubino</strong>… e <strong>il cherubino ti ha cacciato</strong> di mezzo alle pietre di fuoco.</p>
          <p>La differenza è enorme. Nella versione greca il re <strong>non è un cherubino</strong>: è un uomo che stava con il cherubino nel <strong>giardino di Dio</strong>, l'Eden (Ez 28,13). È paragonato ad <strong>Adamo</strong>: creato perfetto e sapiente, si corruppe e fu cacciato, e i cherubini furono posti a custodia dell'albero della vita (Gen 3,24).</p>
          <div class="keypoint">
            <strong>Simbolismo.</strong> Il re di Tiro, come Adamo, si credeva perfetto e sapiente, ma si corruppe con l'orgoglio e fu cacciato dal giardino di Dio. Secondo Shamoun, la Settanta si basa su una forma del testo ebraico più antica.
          </div>
        `
      },
      {
        id: "supposizioni",
        title: "Troppe supposizioni",
        subtitle: "Perché non si può essere dogmatici",
        html: `
          <p>Per usare questi testi come racconto dell'origine e della caduta di Satana bisogna fare molte supposizioni:</p>
          <ul>
            <li>che, pur parlando di re umani, i testi si riferiscano allo <strong>spirito</strong> che agiva in loro;</li>
            <li>che dietro il re di Babilonia e dietro il re di Tiro agisse <strong>lo stesso spirito</strong>, e non due demoni diversi;</li>
            <li>che il testo giusto di Ez 28 sia quello ebraico («eri un cherubino») e non quello greco («eri con il cherubino»).</li>
          </ul>
          <p>Si può leggere Satana in questi testi in modo <strong>implicito</strong>, non esplicito. Se ti convince, va bene, dice Shamoun, ma non si può essere dogmatici: chi legge criticamente potrà obiettare «io non lo vedo», e avrà un argomento valido.</p>
        `
      },
      {
        id: "esplicito",
        title: "L'unico testo esplicito: 1 Timoteo 3,6",
        subtitle: "La superbia",
        html: `
          <p>Tra le qualità richieste a chi guida la comunità, Paolo scrive:</p>
          <blockquote class="teaching-quote">«Inoltre non sia un convertito da poco tempo, perché, accecato dall'orgoglio, non cada nella stessa condanna del diavolo» (1 Tm 3,6).</blockquote>
          <p>Il testo si può leggere in due modi: il diavolo userà l'orgoglio per far condannare quella persona; oppure, <strong>come il diavolo fu condannato per la superbia</strong>, così sarà condannato anche chi si insuperbisce. Molte traduzioni (come la NIV e la New King James) scelgono la seconda lettura: «la stessa condanna del diavolo».</p>
          <div class="keypoint">
            <strong>Ciò che la Scrittura dice chiaramente.</strong> Il diavolo fu condannato per <strong>orgoglio e superbia</strong>: si rovinò da solo diventando arrogante. Da qui un avvertimento per ogni cristiano: custodisci il cuore dalla superbia, soprattutto quando ricevi onore e responsabilità.
          </div>
          <p>Ma di che cosa si insuperbì esattamente? Secondo Shamoun, nessun libro della Scrittura, deuterocanonici compresi, lo spiega.</p>
        `
      },
      {
        id: "cose-nascoste",
        title: "Le cose nascoste appartengono a Dio",
        subtitle: "Non aggiungere, non togliere",
        html: `
          <blockquote class="teaching-quote">«Le cose occulte appartengono al Signore, nostro Dio, ma le cose rivelate appartengono a noi e ai nostri figli, per sempre, perché pratichiamo tutte le parole di questa legge» (Dt 29,28; 29,29 in altre traduzioni).</blockquote>
          <p>Quello che Dio non ha rivelato appartiene a Lui. A noi spetta ciò che ha rivelato: comprenderlo con la forza dello Spirito, annunciarlo e viverlo. Se Dio avesse voluto farci sapere di più sulla caduta di Satana, ce lo avrebbe rivelato. <strong>Non aggiungere alla sua Parola e non toglierle nulla</strong>.</p>
        `
      },
      {
        id: "chiesa",
        title: "Che cosa insegna la Chiesa",
        subtitle: "Integrazione cattolica",
        html: `
          <p>L'approccio prudente di Shamoun sui singoli testi è condiviso da molti biblisti. Il Magistero cattolico però insegna con chiarezza alcuni punti, fondati sull'insieme della Scrittura e della Tradizione:</p>
          <ul>
            <li><strong>Satana fu creato buono</strong>: «Il diavolo e gli altri demoni sono stati creati da Dio naturalmente buoni, ma da se stessi si sono trasformati in malvagi» (Concilio Lateranense IV, 1215; CCC 391).</li>
            <li><strong>La caduta fu una libera scelta</strong>, un rifiuto radicale e irrevocabile di Dio e del suo Regno (CCC 392-393).</li>
            <li>Altri testi della Scrittura parlano del diavolo e della sua caduta: «Per l'invidia del diavolo la morte è entrata nel mondo» (Sap 2,24); egli «non stava saldo nella verità» ed è «menzognero e padre della menzogna» (Gv 8,44); Gesù dice: «Vedevo Satana cadere dal cielo come una folgore» (Lc 10,18); Dio «non risparmiò gli angeli che avevano peccato» (2 Pt 2,4); la guerra in cielo e il grande drago «precipitato sulla terra» (Ap 12,7-9).</li>
            <li>Molti Padri della Chiesa (come Origene, Agostino, Gregorio Magno) hanno letto Isaia 14 ed Ezechiele 28 anche in senso spirituale, riferito a Satana: da qui il nome «Lucifero» («portatore di luce», la traduzione latina di «astro del mattino» in Is 14,12).</li>
          </ul>
          <div class="keypoint">
            <strong>In sintesi.</strong> Il senso letterale di Is 14 ed Ez 28 riguarda due re. La lettura «spirituale» riferita a Satana è antica e venerabile, ma non va presentata come l'unico significato. La fede della Chiesa sulla caduta del diavolo poggia sull'insieme della Rivelazione. Per approfondire Lucifero e il male, vedi anche la tab <strong>Misteri</strong>.
          </div>
        `
      },
      {
        id: "sintesi",
        title: "Sintesi",
        subtitle: "Che cosa possiamo dire con certezza",
        html: `
          <ul>
            <li><strong>Is 14 ed Ez 28</strong> parlano alla lettera dei re di Babilonia e di Tiro, derisi da Dio per la loro arroganza.</li>
            <li><strong>Dietro i re agiscono potenze spirituali</strong> (Dn 10; Ef 6,12): per questo i testi si possono applicare indirettamente a Satana.</li>
            <li><strong>La Settanta</strong> legge Ez 28 diversamente: il re «era con il cherubino», come Adamo nell'Eden.</li>
            <li><strong>Il testo esplicito</strong> è 1 Tm 3,6: la condanna del diavolo fu dovuta alla superbia.</li>
            <li><strong>Il resto è nascosto</strong> e appartiene a Dio (Dt 29,28).</li>
          </ul>
          <div class="keypoint">
            <strong>Per la preghiera.</strong> La prima caduta nel mondo spirituale nasce dalla superbia. Chiedi al Signore il dono dell'umiltà: «Dio resiste ai superbi, agli umili invece dà la sua grazia» (1 Pt 5,5).
          </div>
        `
      }
    ]
  },

  // -----------------------------------------------------------
  {
    id: "peccare-in-cielo",
    titolo: "Si potrà peccare in Paradiso?",
    sottotitolo: "Se Adamo ed Eva peccarono nell'Eden, che cosa ci garantisce il cielo?",
    autore: "Sam Shamoun",
    canale: "The Best of Shamoun",
    url: "https://youtu.be/NiUxbpPJJ7I",
    titoloOriginale: "Can We Still Sin in Heaven If Adam and Eve Sinned in Paradise?",
    durata: "14 min",
    lingua: "inglese (tradotto e rielaborato)",
    tagline: "Dio ci ha creati liberi perché l'amore vero non si può imporre. Chi in questa vita sceglie di amarlo riceverà un dono: in cielo sarà trasformato e non potrà più né desiderare né commettere il peccato.",
    facts: [
      { k: "Domanda", v: "Se nell'Eden c'era il libero arbitrio e si è peccato, in cielo potremo ricadere?" },
      { k: "Risposta", v: "No: saremo trasformati, e non vorremo né potremo più peccare" },
      { k: "Chiave", v: "«Dio è amore» (1 Gv 4,8.16) e l'amore non costringe" },
      { k: "Tema collegato", v: "I «gradi» di gloria nel Regno (Mt 5,19; 11,11; 20,20-28)" },
      { k: "Formato", v: "Domanda di un ascoltatore in diretta" }
    ],
    sezioni: [
      {
        id: "domanda",
        title: "La domanda",
        subtitle: "Libertà nell'Eden, libertà in cielo?",
        html: `
          <p>Un ascoltatore chiede: Adamo ed Eva vivevano in un mondo senza peccato, eppure hanno peccato perché erano liberi. In cielo avremo ancora il libero arbitrio? Se sì, potremmo rovinare tutto di nuovo e ricominciare da capo questo «inferno». Se no, saremo meno liberi?</p>
          <p>La risposta di Shamoun: <strong>è proprio per questo che saremo trasformati</strong>. Dio cambierà i credenti in modo tale che non desidereranno più, né potranno più desiderare, di andare contro di Lui.</p>
        `
      },
      {
        id: "perfetti-mutabili",
        title: "Creati perfetti, ma capaci di corrompersi",
        subtitle: "Come il peccato è potuto entrare nel mondo",
        html: `
          <p>Ciò che esce direttamente dalle mani di Dio è <strong>senza difetti</strong>. Ma Dio ha creato le creature razionali con la <em>possibilità</em> di corrompersi, se scelgono di non seguire la sua via.</p>
          <p>Shamoun usa un paragone imperfetto: un'auto esce dalla fabbrica perfetta (motore, trasmissione, gomme), ma con l'uso sbagliato e l'abuso si consuma, arrugginisce, si rompe. La possibilità di guastarsi fa parte del suo progetto.</p>
          <p>Lo stesso vale per tutti gli esseri capaci di ragionare, desiderare e scegliere: gli <strong>uomini</strong> e anche gli <strong>angeli</strong>. Tutti hanno ricevuto la possibilità di scegliere contro Dio, con la conseguenza di corrompere se stessi.</p>
        `
      },
      {
        id: "amore-libero",
        title: "Perché Dio ci ha dato la libertà",
        subtitle: "L'amore non si impone",
        html: `
          <blockquote class="teaching-quote">«Dio è amore; chi rimane nell'amore rimane in Dio e Dio rimane in lui» (1 Gv 4,16; cf. 1 Gv 4,8).</blockquote>
          <p>Dal modo in cui Dio ama impariamo due cose sull'amore:</p>
          <ul>
            <li><strong>L'amore si dona all'altro</strong> e desidera il bene dell'amato, non il proprio vantaggio. Amare qualcuno solo perché ci torna utile non è amore: è egoismo.</li>
            <li><strong>L'amore non si impone</strong>. Costringere qualcuno ad amare è oppressione, tirannia, schiavitù.</li>
          </ul>
          <p>Anche l'esperienza lo conferma: più si cerca di forzare qualcuno ad amarci, più quella persona si allontana. Pensa a una donna finita in una relazione con un uomo violento: obbedisce per paura e per sopravvivere, non per amore.</p>
          <div class="keypoint">
            <strong>Il cuore della risposta.</strong> Come potrebbe Dio creare esseri capaci di ricevere amore e di ricambiarlo davvero senza dare loro la possibilità di scegliere? Sarebbe impossibile: senza libertà non c'è amore vero, ma solo paura. Per questo, dice Shamoun, «siamo nel caos in cui siamo».
          </div>
        `
      },
      {
        id: "ricompensa",
        title: "La ricompensa: non poter più peccare",
        subtitle: "La trasformazione dei salvati",
        html: `
          <p>Ecco il premio di Dio per chi, in questa vita, sceglie liberamente di amarlo: chi resta fedele, lotta contro la propria carne e, quando cade, <strong>riconosce il peccato senza nasconderlo né giustificarlo</strong>.</p>
          <p>A costoro Dio dice: «Nel mondo che verrà ti trasformerò. Non avrai più né il desiderio né la possibilità di peccare, così non dovremo ripetere tutto questo».</p>
          <div class="keypoint">
            <strong>Nota di approfondimento: le quattro condizioni di sant'Agostino.</strong> La tradizione esprime questa verità con una formula di sant'Agostino:
            <ul>
              <li>Adamo prima della caduta: <em>posse non peccare</em> (poteva non peccare);</li>
              <li>l'uomo decaduto: <em>non posse non peccare</em> (non riesce a non peccare da solo);</li>
              <li>l'uomo redento dalla grazia: <em>posse non peccare</em> (con la grazia può di nuovo non peccare);</li>
              <li>i beati in cielo: <strong><em>non posse peccare</em></strong> (non possono più peccare).</li>
            </ul>
            Non è una libertà più piccola, ma più grande: vedendo Dio «faccia a faccia» (1 Cor 13,12), la volontà è ormai unita per sempre al Bene, e non lo vuole più lasciare. È la «visione beatifica» (CCC 1023-1029).
          </div>
          <p>San Paolo descrive questa trasformazione: «Bisogna infatti che questo corpo corruttibile si vesta d'incorruttibilità e questo corpo mortale si vesta d'immortalità» (1 Cor 15,53). E san Giovanni: «Sappiamo però che quando egli si sarà manifestato, noi saremo simili a lui, perché lo vedremo così come egli è» (1 Gv 3,2).</p>
        `
      },
      {
        id: "gradi",
        title: "Ci saranno «gradi» in cielo?",
        subtitle: "Più grandi e più piccoli nel Regno",
        html: `
          <p>L'ascoltatore chiede anche dei «ranghi» in cielo. Shamoun risponde onestamente: <strong>che ci siano lo dice la Scrittura; come funzioneranno, non lo so</strong>.</p>
          <p>Da un lato, tutti i salvati saranno trasformati, gloriosi, immortali, incapaci di peccare; tutti regneranno con Cristo, e nessuno sarà padrone dei fratelli. Dall'altro, la Bibbia parla chiaramente di grandi e piccoli nel Regno:</p>
          <ul>
            <li>«Chi trasgredirà uno solo di questi minimi precetti… sarà considerato minimo nel regno dei cieli. Chi invece li osserverà e li insegnerà, sarà considerato grande» (Mt 5,19).</li>
            <li>«Fra i nati da donna non è sorto alcuno più grande di Giovanni il Battista; ma il più piccolo nel regno dei cieli è più grande di lui» (Mt 11,11).</li>
            <li>La madre dei figli di Zebedeo chiede i primi posti; Gesù risponde: «Chi vuole diventare grande tra voi, sarà vostro servitore» (Mt 20,20-28).</li>
            <li>L'opera di ciascuno sarà messa alla prova dal fuoco e riceverà la ricompensa (1 Cor 3,10-15; cf. 1 Cor 4,3-5; Rm 14,9-12; 2 Cor 5,10).</li>
          </ul>
          <div class="keypoint">
            <strong>Cosa insegna la Chiesa.</strong> Il Concilio di Firenze (1439) insegna che i beati vedono Dio «chi più perfettamente, chi meno, secondo la diversità dei meriti». Eppure ciascuno è pienamente felice: un bicchiere e una brocca possono essere entrambi colmi, anche se contengono quantità diverse. Nessuna invidia: la grandezza degli altri è gioia per tutti.
          </div>
        `
      },
      {
        id: "sintesi",
        title: "Sintesi",
        subtitle: "Liberi per amare, trasformati per sempre",
        html: `
          <ul>
            <li><strong>Dio ha creato esseri liberi</strong> perché l'amore vero non si può imporre (1 Gv 4,8).</li>
            <li><strong>La libertà comportava il rischio</strong> della corruzione: così il peccato è entrato nel mondo.</li>
            <li><strong>Chi sceglie di amare Dio</strong>, lotta contro il peccato e lo confessa, riceverà un dono.</li>
            <li><strong>In cielo non potremo più peccare</strong>: non per costrizione, ma perché la volontà sarà unita per sempre al Bene.</li>
            <li><strong>Ci saranno gradi di gloria</strong>, ma ognuno sarà pienamente felice, e il più grande sarà chi ha servito.</li>
          </ul>
          <div class="keypoint">
            <strong>Per la preghiera.</strong> Oggi la tua libertà è il luogo dove puoi dire a Dio «ti amo». Prova a trasformare una lotta contro un peccato in un atto d'amore: «Signore, non voglio ferirti».
          </div>
        `
      }
    ]
  },

  // -----------------------------------------------------------
  {
    id: "giuda-satana",
    titolo: "All'Ultima Cena Gesù parlava a Giuda o a Satana?",
    sottotitolo: "«Quello che vuoi fare, fallo presto»",
    autore: "Sam Shamoun",
    canale: "The Best of Shamoun",
    url: "https://youtu.be/WS47nsEXes8",
    titoloOriginale: "Was Jesus Talking to Judas or to Satan at the Last Supper?",
    durata: "12 min",
    lingua: "inglese (tradotto e rielaborato)",
    tagline: "Dietro il tradimento di Giuda c'era Satana. Ma è Gesù a concedergli di agire, ed è proprio sulla croce, al «luogo del cranio», che il serpente viene schiacciato.",
    facts: [
      { k: "Domanda", v: "Chi ha voluto la morte di Gesù?" },
      { k: "Passi chiave", v: "Lc 22,1-5 · Gv 13,2.27 · Gv 12,1-6 · Gen 3,15 · Gv 19,17" },
      { k: "Dettaglio", v: "Il «tu» di Gv 13,27 è singolare" },
      { k: "Avvertimento", v: "Il peccato non confessato apre la porta al nemico" },
      { k: "Simbolo", v: "La croce piantata sul Golgota, «luogo del cranio»" }
    ],
    sezioni: [
      {
        id: "chi",
        title: "Chi ha voluto la morte di Gesù?",
        subtitle: "Il nemico dietro il tradimento",
        html: `
          <blockquote class="teaching-quote">«Si avvicinava la festa degli Azzimi, chiamata Pasqua, e i capi dei sacerdoti e gli scribi cercavano in che modo toglierlo di mezzo, ma temevano il popolo. Allora Satana entrò in Giuda, detto Iscariota, che era uno dei Dodici» (Lc 22,1-3).</blockquote>
          <p>Giuda va dai capi dei sacerdoti e si accorda con loro per consegnare Gesù; essi, contenti, gli promettono del denaro (Lc 22,4-5). E Giovanni aggiunge: «Durante la cena, quando il diavolo aveva già messo in cuore a Giuda, figlio di Simone Iscariota, di tradirlo…» (Gv 13,2).</p>
          <div class="keypoint">
            <strong>La risposta.</strong> Dietro i sacerdoti e dietro Giuda c'era <strong>il diavolo</strong>. Satana pensava di porre fine a Cristo uccidendolo sulla croce: è il serpente che morde il calcagno.
          </div>
        `
      },
      {
        id: "fallo-presto",
        title: "«Quello che vuoi fare, fallo presto»",
        subtitle: "A chi era rivolta quella frase?",
        html: `
          <blockquote class="teaching-quote">«Allora, dopo il boccone, Satana entrò in lui. Gli disse dunque Gesù: "Quello che vuoi fare, fallo presto"» (Gv 13,27).</blockquote>
          <p>Shamoun fa notare che nel greco il pronome è <strong>singolare</strong>: «tu». Le traduzioni inglesi antiche come la King James e la Douay-Rheims lo mostrano bene, perché distinguono <em>thou/thee/thy</em> (singolare) da <em>you/ye</em> (plurale). Anche in italiano la distinzione tra «tu» e «voi» si conserva.</p>
          <p>Ma se Satana era appena entrato in Giuda e lo controllava, a chi parlava Gesù? A Giuda, o <strong>a Satana</strong>? È come se Gesù dicesse: «Va', fai quello che vuoi: <em>io ti permetto</em> di mettermi a morte». Perché Satana non può muoversi né agire se Dio non lo permette (cf. Gb 1,12).</p>
          <div class="keypoint">
            <strong>Gesù resta il Signore della sua Passione.</strong> Anche nell'ora delle tenebre, nulla sfugge a Cristo: «Nessuno me la toglie: io la do da me stesso» (Gv 10,18). Non è Satana a decidere, ma Gesù che offre liberamente la sua vita.
          </div>
        `
      },
      {
        id: "avvertimento",
        title: "Un avvertimento: il peccato non confessato",
        subtitle: "Come il nemico prese possesso di Giuda",
        html: `
          <p>Giuda era stato con Cristo: lo aveva visto, abbracciato, toccato, e aveva perfino compiuto miracoli nel suo nome. Eppure era un <strong>ladro</strong>:</p>
          <blockquote class="teaching-quote">«Questo egli disse non perché gli importasse dei poveri, ma perché era un ladro e, siccome teneva la cassa, prendeva quello che vi mettevano dentro» (Gv 12,6).</blockquote>
          <p>L'episodio è quello di Betania: Maria unge i piedi di Gesù con un profumo di nardo prezioso, e Giuda protesta che si poteva venderlo per trecento denari, quasi un anno di salario, e darli ai poveri (Gv 12,1-5). Gesù lo sapeva, eppure non lo smascherò davanti a tutti.</p>
          <div class="keypoint">
            <strong>Il principio.</strong> Il peccato non confessato e non pentito è come <strong>una porta lasciata aperta</strong>. Più si pecca e meno ci si pente, più il nemico guadagna potere, fino a impadronirsi della persona, come accadde a Giuda. San Paolo avverte: «Non date spazio al diavolo» (Ef 4,27).
          </div>
          <div class="keypoint">
            <strong>La via d'uscita.</strong> La differenza tra Giuda e Pietro, che pure rinnegò Gesù, non sta nella gravità della colpa ma nel ritorno: Pietro pianse e tornò (Lc 22,61-62). Per il cattolico la porta si chiude soprattutto con la <strong>Confessione</strong>: «Se confessiamo i nostri peccati, egli è fedele e giusto tanto da perdonarci» (1 Gv 1,9).
          </div>
        `
      },
      {
        id: "calcagno",
        title: "Il serpente morde il calcagno",
        subtitle: "La prima promessa della Bibbia",
        html: `
          <blockquote class="teaching-quote">«Io porrò inimicizia fra te e la donna, fra la tua stirpe e la sua stirpe: questa ti schiaccerà la testa e tu le insidierai il calcagno» (Gen 3,15).</blockquote>
          <p>Il morso di un serpente velenoso al calcagno è mortale. Ma quando il serpente si avvicina tanto da mordere, chi viene morso può <strong>schiacciargli la testa</strong> con quello stesso piede.</p>
          <div class="keypoint">
            <strong>Simbolismo.</strong> Il Signore lascia che Satana si avvicini abbastanza da colpirlo al calcagno (la croce) perché proprio in quel momento gli schiaccia la testa. Il colpo con cui il nemico pensava di vincere diventa la sua sconfitta. Questo versetto è chiamato «Protovangelo»: il primo annuncio della salvezza.
          </div>
        `
      },
      {
        id: "golgota",
        title: "Il luogo del cranio",
        subtitle: "La croce piantata nella «testa»",
        html: `
          <blockquote class="teaching-quote">«Ed egli, portando la croce, si avviò verso il luogo detto del Cranio, in ebraico Gòlgota» (Gv 19,17).</blockquote>
          <p>Shamoun chiede: è un caso che il colle della crocifissione fosse chiamato «cranio», forse per la sua forma di testa? Da lontano, la croce piantata nel terreno sarebbe sembrata un palo conficcato in una testa.</p>
          <div class="keypoint">
            <strong>Simbolismo.</strong> Il serpente ha colpito la stirpe della donna con i chiodi, ma la croce è diventata lo strumento con cui Cristo gli ha schiacciato la testa sotto il piede. La croce sul «Cranio» è l'immagine visibile di Gen 3,15 che si compie.
          </div>
          <div class="keypoint">
            <strong>Nota di approfondimento.</strong> La forma del colle è un'ipotesi: il nome potrebbe venire anche dal fatto che era un luogo di esecuzioni. C'è poi un'antica tradizione, già in Origene, secondo cui sul Golgota sarebbe stato sepolto <strong>il cranio di Adamo</strong>. Per questo nelle icone e nei crocifissi si vede spesso un teschio ai piedi della croce: il sangue del nuovo Adamo scende a lavare il primo Adamo.
          </div>
        `
      },
      {
        id: "sintesi",
        title: "Sintesi",
        subtitle: "Il serpente schiacciato",
        html: `
          <ul>
            <li><strong>Dietro il tradimento</strong> c'era Satana, entrato in Giuda (Lc 22,3; Gv 13,2.27).</li>
            <li><strong>«Fallo presto»</strong>: un «tu» singolare, rivolto forse a Satana stesso, che può agire solo con il permesso di Dio.</li>
            <li><strong>Gesù dà la vita liberamente</strong>: è Lui il Signore della Passione (Gv 10,18).</li>
            <li><strong>Il peccato nascosto apre la porta</strong> al nemico: Giuda rubava e non si è mai pentito (Gv 12,6).</li>
            <li><strong>Il calcagno ferito e la testa schiacciata</strong>: la croce sul «Cranio» compie Gen 3,15.</li>
          </ul>
          <div class="keypoint">
            <strong>Per la preghiera.</strong> C'è una «porta aperta» nella tua vita, un peccato tenuto nascosto? Portalo alla luce nella Confessione: è lì che il serpente perde la presa.
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
