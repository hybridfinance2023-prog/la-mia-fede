// =============================================================
//  DOMANDE SULLA FEDE — catechismo per domande
//  Risposte nella tradizione cattolica, con riferimenti
//  alla Sacra Scrittura e al Catechismo della Chiesa
//  Cattolica (CCC). Raggruppate per tema.
// =============================================================

const DOMANDE = [

  {
    group: "La Rivelazione e la Sacra Scrittura",
    intro: "Da dove viene ciò che sappiamo su Dio, e quanto possiamo fidarci dei testi che lo trasmettono.",
    items: [
      {
        q: "Tutto ciò che sappiamo sulla fede è solo nella Bibbia? In nessun altro posto?",
        a: `
          <p>No. Per la fede cattolica la Rivelazione di Dio ci raggiunge attraverso <strong>due canali inseparabili</strong> della stessa sorgente: la <strong>Sacra Scrittura</strong> e la <strong>Sacra Tradizione</strong> — entrambe interpretate dal <strong>Magistero</strong> della Chiesa.</p>
          <p>La Bibbia stessa lo dice: gli apostoli trasmisero la fede «sia con la parola sia con la lettera» (2 Ts 2,15), e «ci sono ancora molte altre cose compiute da Gesù… che il mondo stesso non basterebbe a contenere i libri» (Gv 21,25). La fede fu prima <em>vissuta e predicata</em>, poi messa per iscritto.</p>
          <p>C'è inoltre una conoscenza di Dio accessibile anche alla <strong>ragione</strong> a partire dal creato: «Dalla creazione del mondo le sue perfezioni invisibili possono essere contemplate» (Rm 1,19-20). E la legge morale è «scritta nel cuore» dell'uomo (Rm 2,15).</p>
          <p><strong>In sintesi:</strong> la Bibbia è normativa e centrale, ma non è un libro «caduto dal cielo» isolato: nasce dentro la Tradizione vivente della Chiesa, che la custodisce e la interpreta. Il principio della «sola Scrittura» è proprio del mondo protestante, non della tradizione cattolica e ortodossa.</p>
        `,
        refs: "2 Ts 2,15 · Gv 21,25 · Rm 1,19-20 · Dei Verbum 7-10 · CCC 74-95"
      },
      {
        q: "Ci sono altri libri, oltre la Bibbia, che hanno impattato su ciò che sappiamo? O tutto fa riferimento alla Bibbia?",
        a: `
          <p>La Bibbia resta la <strong>norma suprema</strong>, ma la comprensione della fede si è approfondita nei secoli attraverso testi e voci autorevoli — tutti «misurati» sulla Scrittura e sulla Tradizione apostolica, mai a essa contrari.</p>
          <ul class="clean-list">
            <li><strong>I Padri della Chiesa</strong> (Ignazio, Ireneo, Agostino, Atanasio…): i primi grandi testimoni e interpreti.</li>
            <li><strong>I Concili ecumenici</strong> (Nicea 325, Costantinopoli, Calcedonia…): hanno formulato il Credo e i dogmi su Trinità e Cristo.</li>
            <li><strong>I dottori della Chiesa</strong>, come Tommaso d'Aquino con la <em>Summa Theologiae</em>.</li>
            <li><strong>Il Catechismo della Chiesa Cattolica</strong> e i documenti del Magistero (encicliche, concili come il Vaticano II).</li>
            <li>Testi cristiani antichi come la <em>Didaché</em>, che mostrano la vita della prima comunità.</li>
          </ul>
          <p>Questi non «aggiungono» nuove verità alla Rivelazione (che si è conclusa con gli apostoli), ma ne <strong>esplicitano e custodiscono</strong> la comprensione. È la «Tradizione vivente».</p>
        `,
        refs: "CCC 11-12 · CCC 66 (Rivelazione conclusa) · CCC 688 · Dei Verbum 8"
      },
      {
        q: "La Bibbia è un testo affidabile? Se sì, perché?",
        a: `
          <p>Sì, ed è affidabile su più piani.</p>
          <p><strong>1. Sul piano storico-documentale.</strong> Il Nuovo Testamento è il testo antico meglio attestato in assoluto: oltre 5.800 manoscritti greci, alcuni a pochi decenni dagli originali — incomparabilmente più di qualsiasi opera classica. Per l'Antico Testamento, i <em>rotoli di Qumran</em> (II sec. a.C.) hanno confermato la straordinaria fedeltà della trasmissione lungo i secoli.</p>
          <p><strong>2. Sul piano della coerenza.</strong> Decine di autori diversi, lungo circa 1.500 anni, raccontano un'unica storia di salvezza che converge su Cristo: una coerenza interna difficile da spiegare con il solo caso.</p>
          <p><strong>3. Sul piano della fede.</strong> Per il credente la Bibbia è <strong>ispirata</strong>: «Tutta la Scrittura è ispirata da Dio» (2 Tm 3,16); «mossi da Spirito Santo parlarono uomini da parte di Dio» (2 Pt 1,21). Dio si è servito di autori umani veri, senza annullarli, garantendo che insegnassero «con fedeltà e senza errore la verità» necessaria alla salvezza.</p>
        `,
        refs: "2 Tm 3,16 · 2 Pt 1,20-21 · Dei Verbum 11 · CCC 105-107"
      },
      {
        q: "Ma la Bibbia non è stata «inquinata» da altri testi nel tempo?",
        a: `
          <p>È una preoccupazione comprensibile, ma la risposta della critica testuale è rassicurante.</p>
          <p><strong>Il testo è notevolmente stabile.</strong> Confrontando le migliaia di manoscritti emergono sì delle varianti, ma sono quasi tutte minime (ortografia, ordine delle parole) e <strong>nessuna mette in discussione una dottrina della fede</strong>. Più copie esistono, più è facile ricostruire il testo originale: la grande quantità di manoscritti è una garanzia, non un problema.</p>
          <p><strong>Il canone è stato discernuto, non inventato.</strong> Di fronte al proliferare di scritti (compresi i «vangeli apocrifi»), la Chiesa ha <strong>riconosciuto</strong> quali libri fossero davvero apostolici e ispirati — nei sinodi di Roma (382), Ippona (393) e Cartagine (397). Gli apocrifi furono esclusi proprio <em>per preservare la purezza</em> della Scrittura, non per nasconderne parti «scomode».</p>
          <p>La Chiesa, dunque, ha fatto da <strong>custode</strong> del testo, non da inquinatrice.</p>
        `,
        refs: "CCC 120 (canone dei libri) · CCC 105-108 · Dei Verbum 8"
      },
      {
        q: "Gesù come ha impattato sulla scrittura del Nuovo Testamento?",
        a: `
          <p>In modo decisivo, anche se — sorprendentemente — <strong>Gesù non ha scritto nulla di proprio pugno</strong>. Il Nuovo Testamento nasce <em>da</em> Lui in tre sensi.</p>
          <p><strong>1. È il contenuto.</strong> Tutto il NT è testimonianza della sua vita, morte e risurrezione. Gesù stesso dice delle Scritture: «Sono esse che rendono testimonianza a me» (Gv 5,39).</p>
          <p><strong>2. È all'origine della testimonianza apostolica.</strong> I Vangeli (scritti tra il 50 e il 100 d.C.) raccolgono la <em>predicazione</em> degli apostoli, testimoni oculari: «Ho deciso di fare ricerche accurate… e scriverne» (Lc 1,1-4); «Questi è il discepolo che attesta queste cose e le ha scritte» (Gv 21,24).</p>
          <p><strong>3. Ha promesso lo Spirito che avrebbe «ricordato».</strong> «Lo Spirito Santo… vi ricorderà tutto ciò che io vi ho detto» (Gv 14,26). La redazione del NT è opera di autori umani <em>mossi dallo Spirito</em>, secondo la promessa di Gesù.</p>
          <p>Così la Chiesa distingue tre tappe: ciò che Gesù <em>fece e insegnò</em> → la <em>predicazione</em> degli apostoli → la <em>redazione</em> scritta dei Vangeli.</p>
        `,
        refs: "Gv 5,39 · Lc 1,1-4 · Gv 14,26 · Gv 21,24-25 · Dei Verbum 18-19 · CCC 124-127"
      }
    ]
  },

  {
    group: "Maria, la Madre del Signore",
    intro: "Perché la Chiesa crede che Maria sia stata preservata dal peccato.",
    items: [
      {
        q: "Perché la Madonna è nata senza peccato (Immacolata Concezione)?",
        a: `
          <p>È un <strong>dogma</strong> definito da Pio IX nel 1854 (bolla <em>Ineffabilis Deus</em>): Maria, fin dal primo istante del suo concepimento, è stata <strong>preservata immune dal peccato originale</strong>, per una grazia singolare di Dio.</p>
          <p><strong>Attenzione a un equivoco frequente:</strong> non significa che Maria si sia «meritata» questo, né che sia divina. È stata salvata <em>anche lei</em> da Cristo — ma in modo <strong>preventivo</strong>: invece di essere liberata dal peccato <em>dopo</em> esserci caduta (come noi nel Battesimo), ne è stata <em>preservata in anticipo</em>, in vista dei meriti di Gesù. La sua purezza è dunque un <strong>dono di Cristo</strong>, non una conquista propria.</p>
          <p><strong>Perché?</strong> Perché doveva diventare la «dimora» del Figlio di Dio. L'angelo la saluta «piena di grazia» (Lc 1,28): il termine greco <em>kecharitoméne</em> indica una pienezza di grazia già operante in lei. Era conveniente che Colui che è la Santità stessa nascesse da un grembo non segnato dal peccato. I Padri la chiamano la <strong>«nuova Eva»</strong>: dove la prima Eva disobbedì, Maria con il suo «sì» (Lc 1,38) coopera alla salvezza.</p>
        `,
        refs: "Lc 1,28 · Lc 1,38 · Gen 3,15 · CCC 490-494 · Ineffabilis Deus (1854)"
      }
    ]
  },

  {
    group: "Libertà, grazia e salvezza",
    intro: "Il libero arbitrio, il rifiuto della grazia, l'inferno e la misericordia di Dio.",
    items: [
      {
        q: "Se rifiutiamo ciò che Dio ci concede, cosa succede? Verremo dannati per sempre?",
        a: `
          <p>Dio offre la sua grazia <strong>liberamente</strong> e rispetta la nostra libertà. Rifiutarla ha conseguenze reali, ma occorre una distinzione importante.</p>
          <p><strong>Un singolo rifiuto, una caduta, un peccato — anche grave — non danna per sempre</strong> chi può ancora pentirsi. Finché si è in vita, la porta della conversione è sempre aperta: lo mostra la parabola del figlio prodigo (Lc 15), in cui il Padre <em>corre incontro</em> a chi torna.</p>
          <p>Ciò che separa definitivamente da Dio è il <strong>rifiuto libero, consapevole e <em>definitivo</em></strong> del suo amore, mantenuto fino alla fine senza pentimento. Questo, e solo questo, è l'inferno: non un castigo arbitrario inflitto da Dio, ma l'<strong>autoesclusione</strong> di chi non vuole la comunione con Lui.</p>
          <p>Dio «vuole che tutti gli uomini siano salvati» (1 Tm 2,4). Per questo, più che temere il singolo errore, il Vangelo invita a <strong>tornare sempre</strong>: «Convertitevi e credete» (Mc 1,15).</p>
        `,
        refs: "Lc 15,11-32 · 1 Tm 2,4 · Mc 1,15 · CCC 1033-1037 · CCC 1861"
      },
      {
        q: "Se ho il libero arbitrio ma Dio mi indica già cosa è giusto e sbagliato, allora non è davvero libero arbitrio?",
        a: `
          <p>È una domanda profonda. La risposta sta nel <strong>cosa intendiamo per libertà</strong>.</p>
          <p>Spesso pensiamo che libertà = «poter fare qualunque cosa, senza criteri». Ma questa è solo <em>indifferenza</em>, e spesso diventa schiavitù (di un vizio, di un istinto, dell'umore del momento). La vera libertà, dice la tradizione, è la <strong>capacità di scegliere e compiere il bene</strong>: «Là dove c'è lo Spirito del Signore, c'è libertà» (2 Cor 3,17).</p>
          <p>Il fatto che Dio mi <em>indichi</em> il bene <strong>non elimina la scelta, la rende possibile in modo pieno</strong>. Un'analogia: conoscere le regole della strada non toglie la libertà di guidare — la rende sicura e reale; ignorarle non ti rende «più libero», ti rende un pericolo. Dio illumina, ma <strong>non costringe</strong>: «Se vuoi, puoi osservare i comandamenti… davanti a te ha posto fuoco e acqua: là dove vuoi puoi stendere la mano» (Sir 15,15-16).</p>
          <p>Dio propone, indica, attira — ma lascia sempre l'ultima parola a te: «Ti ho posto davanti la vita e la morte… scegli dunque la vita» (Dt 30,19). È proprio qui che la libertà è massima.</p>
        `,
        refs: "Sir 15,14-17 · Dt 30,15-19 · 2 Cor 3,17 · Rm 2,15 · CCC 1730-1742"
      },
      {
        q: "Ma se Dio ci ama, come può lasciare anche l'anima peggiore finire all'inferno?",
        a: `
          <p>Il punto-chiave è questo: <strong>Dio non «manda» nessuno all'inferno.</strong> Sembra una sfumatura, ma cambia tutto.</p>
          <p>Dio «vuole che tutti gli uomini siano salvati e arrivino alla conoscenza della verità» (1 Tm 2,4); «non predestina nessuno ad andare all'inferno» (CCC 1037). Il suo amore è offerto a tutti, fino all'ultimo istante, anche al più grande peccatore (basti pensare al «buon ladrone» salvato sulla croce, Lc 23,43).</p>
          <p>Ma l'amore vero <strong>non costringe</strong>. Se Dio forzasse a stare con Lui chi non lo vuole, non sarebbe più amore, sarebbe violenza. L'inferno è la possibilità — reale e drammatica — che una creatura libera <strong>dica no in modo definitivo</strong> e si chiuda da sé alla comunione con Dio (CCC 1033). Non è Dio che chiude la porta: è l'uomo che la sbarra dall'interno.</p>
          <p>In questo senso l'inferno non è la sconfitta dell'amore di Dio, ma il <strong>rispetto estremo della libertà</strong> che Egli stesso ci ha donato.</p>
        `,
        refs: "1 Tm 2,4 · Lc 23,39-43 · CCC 1033 · CCC 1037 · CCC 1861"
      },
      {
        q: "Dio e nostro Signore Gesù Cristo un giorno libererà i peccatori dall'inferno, nonostante i loro peccati?",
        a: `
          <p>L'idea che alla fine <strong>tutti</strong> saranno salvati e l'inferno svuotato si chiama <em>apocatàstasi</em> (riconciliazione universale finale). Fu sostenuta da alcuni nell'antichità (legata al nome di Origene) e la <strong>Chiesa l'ha respinta</strong> come dottrina (Concilio di Costantinopoli II, 553).</p>
          <p>Il motivo: Gesù stesso parla dell'inferno come di una condizione <strong>eterna</strong> per chi lo sceglie definitivamente — «se ne andranno… al supplizio eterno» (Mt 25,46). Se l'esito fosse comunque garantito per tutti, le nostre scelte e la nostra libertà perderebbero senso.</p>
          <p><strong>E però</strong> — ed è importantissimo — la Chiesa:</p>
          <ul class="clean-list">
            <li>non ha <strong>mai dichiarato dannato</strong> nessun essere umano in particolare (mentre proclama molti santi in Paradiso);</li>
            <li>ci invita a <strong>sperare e pregare</strong> per la salvezza di tutti, confidando nella misericordia infinita di Dio, che «usa pazienza… volendo che tutti giungano alla conversione» (2 Pt 3,9);</li>
            <li>nella liturgia prega «perché nessuno vada perduto».</li>
          </ul>
          <p>La posizione equilibrata è dunque: <strong>possiamo sperare</strong> nella salvezza di tutti, ma <strong>non possiamo presumerla</strong> né proclamare automatica la liberazione dall'inferno, perché ciò annullerebbe la libertà e la serietà della vita.</p>
        `,
        refs: "Mt 25,46 · 2 Pt 3,9 · CCC 1035 · CCC 1037 · CCC 1058 · Conc. Costantinopoli II (553)"
      }
    ]
  },

  {
    group: "Lo Spirito Santo",
    intro: "Chi è la terza Persona della Trinità e che cosa fa nella vita del credente.",
    items: [
      {
        q: "Cos'è lo Spirito Santo e che ruolo ha nella mia vita?",
        a: `
          <p>Lo Spirito Santo non è una «forza» impersonale né un'energia: è <strong>Dio stesso, la terza Persona della Santissima Trinità</strong>, della stessa sostanza del Padre e del Figlio. Il Credo lo professa «Signore e datore di vita».</p>
          <p>Nella tua vita concreta, lo Spirito:</p>
          <ul class="clean-list">
            <li><strong>Abita in te.</strong> Dal Battesimo sei «tempio dello Spirito Santo» (1 Cor 6,19): Dio non è solo «fuori», ma dimora dentro di te.</li>
            <li><strong>Ti rende figlio di Dio.</strong> «Avete ricevuto lo Spirito che rende figli adottivi, per mezzo del quale gridiamo: Abbà, Padre!» (Rm 8,15).</li>
            <li><strong>Ti guida e consola.</strong> Gesù lo chiama <em>Paràclito</em>, «Consolatore / Avvocato»: «Vi guiderà a tutta la verità» (Gv 16,13).</li>
            <li><strong>Prega in te</strong> quando non sai pregare: «Lo Spirito intercede con gemiti inesprimibili» (Rm 8,26).</li>
            <li><strong>Produce frutti</strong>: «amore, gioia, pace, pazienza, benevolenza, bontà, fedeltà, mitezza, dominio di sé» (Gal 5,22) e dona i suoi sette doni (Is 11,2).</li>
          </ul>
          <p>In sintesi: è la <strong>presenza viva di Dio in te</strong>, che ti unisce a Cristo, ti trasforma dall'interno e ti accompagna giorno per giorno. Per questo si può, e si deve, <em>invocarlo</em>: «Vieni, Santo Spirito».</p>
        `,
        refs: "Gv 14,16-17 · Gv 16,13 · Rm 8,14-16.26 · Gal 5,22-23 · 1 Cor 6,19 · CCC 683-741"
      }
    ]
  },

  {
    group: "La Chiesa e i Sacramenti",
    intro: "Se i sacramenti vengano da Dio o dagli uomini, e su quale autorità si fonda la Chiesa.",
    items: [
      {
        q: "I sacramenti sono inventati dall'uomo, oppure sono stati comunicati da Dio? Se sì, come?",
        a: `
          <p>I sette sacramenti <strong>non sono invenzioni umane</strong>: sono stati <strong>istituiti da Cristo</strong> e affidati alla Chiesa. Sono definiti «segni efficaci della grazia… per mezzo dei quali ci viene elargita la vita divina» (CCC 1131): non riti magici, ma <strong>incontri reali con Cristo</strong> che agisce attraverso segni concreti.</p>
          <p>Ciascuno ha radici nel Vangelo o negli scritti apostolici:</p>
          <ul class="clean-list">
            <li><strong>Battesimo</strong> — «Andate, fate discepoli… battezzandoli nel nome del Padre, del Figlio e dello Spirito Santo» (Mt 28,19).</li>
            <li><strong>Eucaristia</strong> — «Questo è il mio corpo… fate questo in memoria di me» (Lc 22,19; 1 Cor 11,23-26).</li>
            <li><strong>Riconciliazione (Confessione)</strong> — «Ricevete lo Spirito Santo: a chi rimetterete i peccati saranno rimessi» (Gv 20,22-23).</li>
            <li><strong>Confermazione (Cresima)</strong> — gli apostoli impongono le mani e i credenti ricevono lo Spirito (At 8,14-17).</li>
            <li><strong>Unzione degli infermi</strong> — «Chi è malato… lo si unga con olio… la preghiera della fede salverà il malato» (Gc 5,14-15).</li>
            <li><strong>Ordine sacro</strong> — «Fate questo in memoria di me» (Lc 22,19); «ravviva il dono di Dio che è in te per l'imposizione delle mie mani» (2 Tm 1,6).</li>
            <li><strong>Matrimonio</strong> — «L'uomo… si unirà a sua moglie e i due saranno una sola carne… è un mistero grande riferito a Cristo e alla Chiesa» (Ef 5,31-32; Mt 19,4-6).</li>
          </ul>
          <p><strong>Come «funzionano»?</strong> È Cristo stesso che agisce attraverso il ministro e il segno (l'acqua, il pane e il vino, l'olio, le parole). Per questo la loro efficacia non dipende dalla santità di chi li amministra, ma dalla potenza di Cristo.</p>
        `,
        refs: "Mt 28,19 · Lc 22,19 · Gv 20,22-23 · At 8,14-17 · Gc 5,14-15 · Ef 5,31-32 · CCC 1113-1134"
      },
      {
        q: "Ma la Chiesa: chi le dà l'autorità? È un'invenzione umana o voluta da Dio?",
        a: `
          <p>La Chiesa <strong>non è un'organizzazione nata dal basso</strong>: secondo il Vangelo è <strong>fondata da Cristo stesso</strong>, che le ha dato un'autorità precisa.</p>
          <ul class="clean-list">
            <li><strong>La fonda su Pietro:</strong> «Tu sei Pietro e su questa pietra edificherò la mia Chiesa… a te darò le chiavi del regno» (Mt 16,18-19).</li>
            <li><strong>Le dà il potere di legare e sciogliere</strong> (Mt 18,18) e di rimettere i peccati (Gv 20,23).</li>
            <li><strong>La manda in missione:</strong> «Come il Padre ha mandato me, anch'io mando voi» (Gv 20,21); «chi ascolta voi ascolta me» (Lc 10,16).</li>
            <li><strong>La anima con lo Spirito</strong> a Pentecoste (At 2), perché continui la sua opera nel tempo.</li>
          </ul>
          <p>Questa autorità si trasmette per <strong>successione apostolica</strong>: i vescovi sono i successori degli apostoli, in comunione con il Papa, successore di Pietro. Per questo Paolo chiama la Chiesa «colonna e sostegno della verità» (1 Tm 3,15) e «corpo di Cristo» (1 Cor 12,27).</p>
          <p>La Chiesa è insieme <strong>divina e umana</strong>: divina nella sua origine e nei doni di Cristo (Scrittura, sacramenti, Spirito); umana nei suoi membri, che restano peccatori e bisognosi di conversione. I limiti degli uomini di Chiesa non smentiscono la sua origine divina, ma ricordano che è «santa e insieme sempre bisognosa di purificazione».</p>
        `,
        refs: "Mt 16,18-19 · Mt 18,18 · Gv 20,21-23 · Lc 10,16 · At 2 · 1 Tm 3,15 · 1 Cor 12 · CCC 748-870"
      }
    ]
  }

];
