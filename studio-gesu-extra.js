// =============================================================
//  STUDIO DI GESÙ — ESPANSIONE
//  FILE STAGED: non ancora agganciato a index.html/app.js.
//  Aggiunge: tutte le parabole (con versetti), le gesta in
//  sequenza (timeline-mappa), più «parole di Gesù» e 100
//  insegnamenti. Stile incapsulato (.sgx-*) + riuso .studio-scope.
//  Al publish: caricare il file e chiamare renderStudioGesuExtra().
// =============================================================

const STUDIO_GESU_EXTRA = {

  // ---------- LE PARABOLE ----------
  parabole: [
    { t: "Il seminatore", r: "Mt 13,3-23 · Mc 4 · Lc 8", d: "Il seme è la Parola; conta il terreno del cuore: strada, sassi, spine, terra buona. Solo chi accoglie porta frutto." },
    { t: "La zizzania", r: "Mt 13,24-30.36-43", d: "Grano e zizzania crescono insieme fino alla mietitura: Dio è paziente, il giudizio è alla fine, non spetta a noi strappare." },
    { t: "Il granello di senape", r: "Mt 13,31-32", d: "Il Regno comincia minuscolo e diventa un albero: cresce in modo sproporzionato e inatteso, dal piccolo." },
    { t: "Il lievito", r: "Mt 13,33", d: "Una donna nasconde il lievito nella farina: il Regno trasforma tutto dall'interno, invisibile ma efficace." },
    { t: "Il tesoro nascosto", r: "Mt 13,44", d: "Chi lo trova vende tutto con gioia per comprare il campo: il Regno vale ogni cosa." },
    { t: "La perla preziosa", r: "Mt 13,45-46", d: "Il mercante vende tutto per l'unica perla: vale più di ogni altro bene." },
    { t: "La rete", r: "Mt 13,47-50", d: "La rete raccoglie pesci buoni e cattivi: la separazione avverrà alla fine dei tempi." },
    { t: "Il seme che cresce da solo", r: "Mc 4,26-29", d: "Il contadino dorme e il seme germoglia da sé: il Regno cresce per forza propria, dono di Dio, non solo nostro sforzo." },
    { t: "Il servo spietato", r: "Mt 18,23-35", d: "Perdonato di un debito enorme, non perdona un debito minimo: chi è stato perdonato deve perdonare." },
    { t: "Gli operai della vigna", r: "Mt 20,1-16", d: "Tutti ricevono lo stesso salario, anche gli ultimi: la grazia di Dio non è calcolo ma generosità. «Gli ultimi saranno primi»." },
    { t: "I due figli", r: "Mt 21,28-32", d: "Uno dice no e poi va, l'altro dice sì e non va: contano i fatti, non le parole." },
    { t: "I vignaioli omicidi", r: "Mt 21,33-44", d: "I contadini uccidono i servi e infine il figlio: storia d'Israele e rifiuto del Messia; «la pietra scartata è divenuta testata d'angolo»." },
    { t: "Il banchetto di nozze", r: "Mt 22,1-14", d: "Gli invitati rifiutano, si chiamano i poveri delle strade: l'invito al Regno è per tutti, ma chiede la «veste nuziale» della conversione." },
    { t: "Le dieci vergini", r: "Mt 25,1-13", d: "Cinque sagge con olio, cinque stolte senza: «Vegliate», siate pronti per l'arrivo dello Sposo." },
    { t: "I talenti", r: "Mt 25,14-30", d: "Conta cosa fai di ciò che ti è affidato: la paura che sotterra è condannata; la fiducia che rischia e moltiplica è lodata." },
    { t: "Il giudizio finale (pecore e capri)", r: "Mt 25,31-46", d: "«L'avete fatto a me»: saremo giudicati sull'amore concreto ai piccoli — fame, sete, carcere, malattia." },
    { t: "Il buon samaritano", r: "Lc 10,25-37", d: "Il disprezzato samaritano è il vero prossimo del ferito: «Va' e anche tu fa' lo stesso». L'amore non guarda l'etnia." },
    { t: "L'amico importuno", r: "Lc 11,5-8", d: "Chi bussa di notte ottiene per insistenza: pregare con perseveranza, senza scoraggiarsi." },
    { t: "Il ricco stolto", r: "Lc 12,16-21", d: "Accumula granai per anni, ma muore quella notte: «Stolto, questa notte ti sarà richiesta la vita». Arricchire «davanti a Dio»." },
    { t: "Il fico sterile", r: "Lc 13,6-9", d: "Il padrone vuole tagliarlo, il vignaiolo chiede un altro anno: la pazienza di Dio dà ancora tempo per portare frutto." },
    { t: "La pecora smarrita", r: "Lc 15,1-7", d: "Il pastore lascia le 99 e cerca l'una: il cielo fa festa per un solo peccatore che si converte." },
    { t: "La moneta smarrita", r: "Lc 15,8-10", d: "La donna spazza la casa per una dramma: la gioia di Dio quando ritrova ciò che era perduto." },
    { t: "Il padre misericordioso (figliol prodigo)", r: "Lc 15,11-32", d: "Il padre corre incontro al figlio che torna e fa festa, e supplica il maggiore: il cuore di Dio Padre, che perdona e attende." },
    { t: "L'amministratore scaltro", r: "Lc 16,1-13", d: "Lodato per la sua scaltrezza nel provvedere al futuro: usate i beni per farvi amici per il cielo. «Non potete servire Dio e ricchezza»." },
    { t: "Il ricco e Lazzaro", r: "Lc 16,19-31", d: "Il ricco ignora il povero alla sua porta: nell'aldilà le sorti si rovesciano. «Hanno Mosè e i profeti: ascoltino quelli»." },
    { t: "Il giudice iniquo e la vedova", r: "Lc 18,1-8", d: "La vedova ottiene giustizia a forza di insistere: «pregare sempre, senza stancarsi»." },
    { t: "Il fariseo e il pubblicano", r: "Lc 18,9-14", d: "Il fariseo si vanta, il pubblicano si batte il petto: «O Dio, abbi pietà di me peccatore». Tornò giustificato l'umile." },
    { t: "Le mine", r: "Lc 19,11-27", d: "Versione lucana dei talenti: fedeltà nel poco mentre il re è lontano, in attesa del suo ritorno." },
    { t: "I due debitori", r: "Lc 7,41-43", d: "Chi è perdonato di più ama di più: detto alla peccatrice che bagna i piedi di Gesù." },
    { t: "La torre e il re in guerra", r: "Lc 14,28-33", d: "Si calcola prima di costruire o combattere: seguire Cristo va valutato fino in fondo, rinunciando a tutto." },
    { t: "Il servo fedele e prudente", r: "Mt 24,45-51", d: "Beato il servo che il padrone trova al lavoro al suo ritorno: vigilanza e responsabilità nell'attesa." },
    { t: "La casa sulla roccia", r: "Mt 7,24-27", d: "Chi ascolta e mette in pratica costruisce sulla roccia: regge alla tempesta. Le sole parole non bastano." }
  ],

  // ---------- LE GESTA IN SEQUENZA (timeline) ----------
  gesta: [
    { n: 1, t: "Annunciazione", luogo: "Nazaret", r: "Lc 1,26-38", d: "L'angelo Gabriele annuncia a Maria la nascita di Gesù; il «sì» di Maria apre la storia della salvezza." },
    { n: 2, t: "Natività", luogo: "Betlemme", r: "Lc 2,1-20", d: "Gesù nasce e viene deposto in una mangiatoia; gli angeli annunciano ai pastori la nascita del Salvatore." },
    { n: 3, t: "Adorazione dei Magi", luogo: "Betlemme", r: "Mt 2,1-12", d: "I sapienti d'Oriente seguono la stella e adorano il re dei Giudei: il Vangelo è già per tutte le genti." },
    { n: 4, t: "Presentazione al Tempio", luogo: "Gerusalemme", r: "Lc 2,22-38", d: "Simeone ed Anna riconoscono nel bambino «luce per le genti» e «gloria d'Israele»." },
    { n: 5, t: "Fuga in Egitto", luogo: "Egitto", r: "Mt 2,13-23", d: "Per sfuggire a Erode la famiglia ripara in Egitto: «Dall'Egitto ho chiamato mio figlio»." },
    { n: 6, t: "Gesù dodicenne al Tempio", luogo: "Gerusalemme", r: "Lc 2,41-52", d: "Ritrovato tra i dottori: «Non sapevate che devo occuparmi delle cose del Padre mio?»." },
    { n: 7, t: "Battesimo nel Giordano", luogo: "Fiume Giordano", r: "Mt 3,13-17", d: "Giovanni lo battezza; lo Spirito scende come colomba e la voce del Padre: «Questi è il Figlio mio prediletto»." },
    { n: 8, t: "Tentazioni nel deserto", luogo: "Deserto di Giuda", r: "Mt 4,1-11", d: "Quaranta giorni di digiuno; respinge le tre tentazioni con la Parola: «Sta scritto…»." },
    { n: 9, t: "Nozze di Cana (primo segno)", luogo: "Cana", r: "Gv 2,1-11", d: "Trasforma l'acqua in vino su invito di Maria: «Fate quello che vi dirà». Manifesta la sua gloria." },
    { n: 10, t: "Chiamata dei primi discepoli", luogo: "Lago di Galilea", r: "Mc 1,16-20", d: "«Seguitemi, vi farò pescatori di uomini»: Pietro, Andrea, Giacomo e Giovanni lasciano le reti." },
    { n: 11, t: "Discorso della Montagna", luogo: "Monte (Galilea)", r: "Mt 5-7", d: "Le Beatitudini e la nuova Legge del Regno: il cuore del messaggio di Gesù." },
    { n: 12, t: "Guarigioni a Cafarnao", luogo: "Cafarnao", r: "Mc 1,21-34", d: "Indemoniato nella sinagoga, suocera di Pietro, folle di malati: autorità sulla malattia e sul male." },
    { n: 13, t: "Il paralitico calato dal tetto", luogo: "Cafarnao", r: "Mc 2,1-12", d: "«Ti sono perdonati i peccati»: guarisce per mostrare che il Figlio dell'uomo ha potere di perdonare." },
    { n: 14, t: "Tempesta sedata", luogo: "Lago di Galilea", r: "Mc 4,35-41", d: "«Taci, calmati!»: comanda al vento e al mare. «Chi è costui?»." },
    { n: 15, t: "L'indemoniato di Gerasa", luogo: "Gerasa", r: "Mc 5,1-20", d: "Libera l'uomo posseduto dalla «Legione»: potere di Dio anche in terra pagana." },
    { n: 16, t: "Emorroissa e figlia di Giairo", luogo: "Cafarnao", r: "Mc 5,21-43", d: "Guarisce la donna che tocca il mantello e risuscita la bambina: «Talità kum» (fanciulla, àlzati)." },
    { n: 17, t: "Moltiplicazione dei pani", luogo: "Presso Betsaida", r: "Mt 14,13-21", d: "Sazia cinquemila uomini con cinque pani e due pesci: anticipo dell'Eucaristia." },
    { n: 18, t: "Cammina sulle acque", luogo: "Lago di Galilea", r: "Mt 14,22-33", d: "Va incontro ai discepoli sull'acqua; Pietro affonda per poca fede: «Coraggio, sono io»." },
    { n: 19, t: "Confessione di Pietro", luogo: "Cesarea di Filippo", r: "Mt 16,13-20", d: "«Tu sei il Cristo»; «Tu sei Pietro e su questa pietra edificherò la mia Chiesa»." },
    { n: 20, t: "Trasfigurazione", luogo: "Monte Tabor", r: "Mt 17,1-8", d: "Il volto risplende, appaiono Mosè ed Elia; «Questi è il Figlio mio, ascoltatelo»." },
    { n: 21, t: "Risurrezione di Lazzaro", luogo: "Betania", r: "Gv 11,1-44", d: "«Io sono la risurrezione e la vita»; richiama Lazzaro morto da quattro giorni." },
    { n: 22, t: "Ingresso a Gerusalemme", luogo: "Gerusalemme", r: "Mt 21,1-11", d: "Acclamato «Osanna» mentre entra umile su un asino: la Domenica delle Palme." },
    { n: 23, t: "Cacciata dei venditori dal Tempio", luogo: "Gerusalemme", r: "Mt 21,12-17", d: "«La mia casa sarà casa di preghiera»: rovescia i banchi dei cambiavalute." },
    { n: 24, t: "Ultima Cena", luogo: "Cenacolo (Gerusalemme)", r: "Lc 22,14-20", d: "Istituisce l'Eucaristia: «Questo è il mio corpo… questo calice è la nuova alleanza nel mio sangue». Lava i piedi ai discepoli." },
    { n: 25, t: "Agonia nel Getsemani", luogo: "Getsemani", r: "Mt 26,36-46", d: "«Padre, allontana questo calice… ma non come voglio io». Sudore di sangue, abbandono degli amici." },
    { n: 26, t: "Arresto e processo", luogo: "Gerusalemme", r: "Mt 26,47-27,26", d: "Tradito da Giuda, rinnegato da Pietro, condannato dal sinedrio e da Pilato." },
    { n: 27, t: "Crocifissione e morte", luogo: "Golgota", r: "Lc 23,33-46", d: "«Padre, perdona loro»; «Tutto è compiuto». Muore in croce; il velo del Tempio si squarcia." },
    { n: 28, t: "Sepoltura", luogo: "Gerusalemme", r: "Gv 19,38-42", d: "Giuseppe d'Arimatea depone il corpo in un sepolcro nuovo nel giardino." },
    { n: 29, t: "Risurrezione", luogo: "Gerusalemme", r: "Lc 24,1-12", d: "Il sepolcro è vuoto; «Non è qui, è risorto». Maria di Màgdala è la prima testimone." },
    { n: 30, t: "Discepoli di Emmaus", luogo: "Emmaus", r: "Lc 24,13-35", d: "Il Risorto spiega le Scritture e si fa riconoscere «allo spezzare del pane»." },
    { n: 31, t: "Apparizioni e mandato", luogo: "Galilea / Gerusalemme", r: "Mt 28,16-20", d: "«Andate, fate discepoli tutti i popoli… Io sono con voi tutti i giorni»." },
    { n: 32, t: "Ascensione", luogo: "Monte degli Ulivi", r: "At 1,6-11", d: "Sale al cielo benedicendo i discepoli, promettendo lo Spirito Santo." }
  ],

  // ---------- PAROLE DI GESÙ (word-study aggiuntivi) ----------
  paroleExtra: [
    {
      titolo: "«Io sono» (Vangelo di Giovanni)", sottotitolo: "egó eimí: le sette autodefinizioni e il Nome di Dio",
      carte: [
        { it: "Io sono", gr: "egó eimí", spieg: "È il Nome che Dio rivela a Mosè (Es 3,14, «Io sono»). Gesù lo usa di sé: «Prima che Abramo fosse, Io sono» (Gv 8,58): per questo vogliono lapidarlo." },
        { it: "il pane di vita", gr: "Gv 6,35", spieg: "«Chi viene a me non avrà più fame»: nutre la vita eterna, eco della manna." },
        { it: "la luce del mondo", gr: "Gv 8,12", spieg: "«Chi segue me non camminerà nelle tenebre»." },
        { it: "la porta / il buon pastore", gr: "Gv 10", spieg: "«Il buon pastore dà la vita per le pecore»." },
        { it: "la risurrezione e la vita", gr: "Gv 11,25", spieg: "Detto a Marta prima di risuscitare Lazzaro." },
        { it: "la via, la verità e la vita", gr: "Gv 14,6", spieg: "«Nessuno viene al Padre se non per mezzo di me»." },
        { it: "la vera vite", gr: "Gv 15,1", spieg: "«Senza di me non potete far nulla»: restare uniti a Lui come tralci." }
      ]
    },
    {
      titolo: "Le parole aramaiche di Gesù", sottotitolo: "Frasi conservate non tradotte: l'eco della sua voce",
      carte: [
        { it: "Abbà", gr: "Abbà", spieg: "«Papà»: l'intimità con cui Gesù — e poi i cristiani — si rivolge al Padre (Mc 14,36; Rm 8,15)." },
        { it: "Talità kum", gr: "ταλιθὰ κούμ", spieg: "«Fanciulla, àlzati!»: alla figlia di Giairo (Mc 5,41)." },
        { it: "Effatà", gr: "ἐφφαθά", spieg: "«Apriti!»: al sordomuto (Mc 7,34)." },
        { it: "Eloì Eloì lemà sabactàni", gr: "Mc 15,34", spieg: "«Dio mio, perché mi hai abbandonato?»: l'inizio del Salmo 22 sulla croce." }
      ]
    },
    {
      titolo: "«Beati» (le Beatitudini)", sottotitolo: "makàrioi: la felicità capovolta del Regno",
      carte: [
        { it: "beati", gr: "makàrioi", spieg: "Non «sarete premiati», ma «siete già felici/benedetti»: una gioia presente, paradossale, dentro la prova (Mt 5,3-12)." },
        { it: "poveri in spirito", gr: "ptōchoì", spieg: "Chi è povero davanti a Dio, che riconosce di aver bisogno di tutto da Lui." },
        { it: "miti", gr: "praeîs", spieg: "Non i deboli, ma i forti che rinunciano alla violenza: «erediteranno la terra»." },
        { it: "operatori di pace", gr: "eirēnopoioí", spieg: "Chi «fa» la pace, non solo la desidera: «saranno chiamati figli di Dio»." }
      ]
    },
    {
      titolo: "«Amare» (Gv 21: ami tu me?)", sottotitolo: "agapáō e philéō: due verbi nel dialogo con Pietro",
      carte: [
        { it: "agápē", gr: "agapáō", spieg: "L'amore oblativo, totale, che si dona. È ciò che Gesù chiede a Pietro per primo." },
        { it: "philía", gr: "philéō", spieg: "L'amore di amicizia, affettivo. Pietro, dopo il rinnegamento, risponde con umiltà con questo verbo: «ti voglio bene»." },
        { it: "pasci le mie pecore", gr: "Gv 21,17", spieg: "Per tre volte (quanti i rinnegamenti) Gesù lo riabilita e gli affida il gregge." }
      ]
    }
  ],

  // ---------- 100 INSEGNAMENTI ----------
  insegnamenti: [
    { tema: "Regno", t: "Convertitevi, perché il regno dei cieli è vicino.", r: "Mt 4,17" },
    { tema: "Regno", t: "Cercate prima il regno di Dio e la sua giustizia, e tutto il resto vi sarà dato in aggiunta.", r: "Mt 6,33" },
    { tema: "Regno", t: "Il regno di Dio è in mezzo a voi.", r: "Lc 17,21" },
    { tema: "Regno", t: "Se non diventerete come bambini, non entrerete nel regno dei cieli.", r: "Mt 18,3" },
    { tema: "Regno", t: "Lasciate che i bambini vengano a me: a chi è come loro appartiene il regno.", r: "Mc 10,14" },
    { tema: "Regno", t: "È più facile che un cammello passi per la cruna di un ago…", r: "Mc 10,25" },
    { tema: "Regno", t: "Il mio regno non è di questo mondo.", r: "Gv 18,36" },
    { tema: "Beatitudini", t: "Beati i poveri in spirito, perché di essi è il regno dei cieli.", r: "Mt 5,3" },
    { tema: "Beatitudini", t: "Beati gli afflitti, perché saranno consolati.", r: "Mt 5,4" },
    { tema: "Beatitudini", t: "Beati i miti, perché erediteranno la terra.", r: "Mt 5,5" },
    { tema: "Beatitudini", t: "Beati gli affamati e assetati di giustizia, perché saranno saziati.", r: "Mt 5,6" },
    { tema: "Beatitudini", t: "Beati i misericordiosi, perché troveranno misericordia.", r: "Mt 5,7" },
    { tema: "Beatitudini", t: "Beati i puri di cuore, perché vedranno Dio.", r: "Mt 5,8" },
    { tema: "Beatitudini", t: "Beati gli operatori di pace, perché saranno chiamati figli di Dio.", r: "Mt 5,9" },
    { tema: "Beatitudini", t: "Beati i perseguitati per la giustizia, perché di essi è il regno dei cieli.", r: "Mt 5,10" },
    { tema: "Amore", t: "Amerai il Signore Dio tuo con tutto il cuore… e il prossimo tuo come te stesso.", r: "Mt 22,37-39" },
    { tema: "Amore", t: "Amate i vostri nemici e pregate per i vostri persecutori.", r: "Mt 5,44" },
    { tema: "Amore", t: "Vi do un comandamento nuovo: che vi amiate gli uni gli altri come io ho amato voi.", r: "Gv 13,34" },
    { tema: "Amore", t: "Nessuno ha un amore più grande di chi dà la vita per i propri amici.", r: "Gv 15,13" },
    { tema: "Amore", t: "Da questo tutti sapranno che siete miei discepoli: se avete amore gli uni per gli altri.", r: "Gv 13,35" },
    { tema: "Amore", t: "Tutto quanto volete che gli uomini facciano a voi, anche voi fatelo a loro.", r: "Mt 7,12" },
    { tema: "Amore", t: "Amatevi come io vi ho amati.", r: "Gv 15,12" },
    { tema: "Prossimo", t: "Va' e anche tu fa' lo stesso.", r: "Lc 10,37" },
    { tema: "Prossimo", t: "Tutto quello che avete fatto a uno solo di questi miei fratelli più piccoli, l'avete fatto a me.", r: "Mt 25,40" },
    { tema: "Prossimo", t: "Date e vi sarà dato: una misura buona, pigiata, scossa e traboccante.", r: "Lc 6,38" },
    { tema: "Perdono", t: "Perdona non fino a sette volte, ma fino a settanta volte sette.", r: "Mt 18,22" },
    { tema: "Perdono", t: "Se perdonerete agli uomini le loro colpe, il Padre vostro perdonerà anche a voi.", r: "Mt 6,14" },
    { tema: "Perdono", t: "Padre, perdona loro, perché non sanno quello che fanno.", r: "Lc 23,34" },
    { tema: "Perdono", t: "Chi di voi è senza peccato getti per primo la pietra.", r: "Gv 8,7" },
    { tema: "Perdono", t: "Neppure io ti condanno: va' e d'ora in poi non peccare più.", r: "Gv 8,11" },
    { tema: "Giudizio", t: "Non giudicate, per non essere giudicati.", r: "Mt 7,1" },
    { tema: "Giudizio", t: "Perché guardi la pagliuzza nell'occhio del fratello e non vedi la trave nel tuo?", r: "Mt 7,3" },
    { tema: "Giudizio", t: "Con la misura con cui misurate sarà misurato a voi.", r: "Mc 4,24" },
    { tema: "Preghiera", t: "Quando pregate, dite: Padre nostro che sei nei cieli…", r: "Mt 6,9" },
    { tema: "Preghiera", t: "Chiedete e vi sarà dato, cercate e troverete, bussate e vi sarà aperto.", r: "Mt 7,7" },
    { tema: "Preghiera", t: "Quando preghi, entra nella tua camera e prega il Padre tuo nel segreto.", r: "Mt 6,6" },
    { tema: "Preghiera", t: "Dove sono due o tre riuniti nel mio nome, lì sono io in mezzo a loro.", r: "Mt 18,20" },
    { tema: "Preghiera", t: "Tutto quello che chiederete con fede nella preghiera, lo otterrete.", r: "Mt 21,22" },
    { tema: "Preghiera", t: "Bisogna pregare sempre, senza stancarsi.", r: "Lc 18,1" },
    { tema: "Preghiera", t: "Vegliate e pregate per non entrare in tentazione.", r: "Mt 26,41" },
    { tema: "Fede", t: "Tutto è possibile per chi crede.", r: "Mc 9,23" },
    { tema: "Fede", t: "La tua fede ti ha salvato; va' in pace.", r: "Lc 7,50" },
    { tema: "Fede", t: "Se aveste fede come un granello di senape, direste a questo monte: spostati!", r: "Mt 17,20" },
    { tema: "Fede", t: "Non temere, soltanto abbi fede.", r: "Mc 5,36" },
    { tema: "Fede", t: "Beati quelli che non hanno visto e hanno creduto.", r: "Gv 20,29" },
    { tema: "Fiducia", t: "Non angustiatevi per la vostra vita… guardate gli uccelli del cielo.", r: "Mt 6,25-26" },
    { tema: "Fiducia", t: "A ciascun giorno basta la sua pena.", r: "Mt 6,34" },
    { tema: "Fiducia", t: "Venite a me, voi tutti affaticati e oppressi, e io vi darò ristoro.", r: "Mt 11,28" },
    { tema: "Fiducia", t: "Il mio giogo è dolce e il mio carico leggero.", r: "Mt 11,30" },
    { tema: "Fiducia", t: "Non sia turbato il vostro cuore: abbiate fede in Dio e abbiate fede anche in me.", r: "Gv 14,1" },
    { tema: "Fiducia", t: "Vi lascio la pace, vi do la mia pace.", r: "Gv 14,27" },
    { tema: "Fiducia", t: "Nel mondo avrete tribolazioni, ma abbiate coraggio: io ho vinto il mondo.", r: "Gv 16,33" },
    { tema: "Ricchezza", t: "Non potete servire Dio e la ricchezza.", r: "Mt 6,24" },
    { tema: "Ricchezza", t: "Accumulate tesori nel cielo, dove né tarlo né ruggine consumano.", r: "Mt 6,20" },
    { tema: "Ricchezza", t: "Dov'è il tuo tesoro, là sarà anche il tuo cuore.", r: "Mt 6,21" },
    { tema: "Ricchezza", t: "Guardatevi da ogni cupidigia: la vita non dipende dai beni.", r: "Lc 12,15" },
    { tema: "Ricchezza", t: "Vendi ciò che hai, dàllo ai poveri, e avrai un tesoro nei cieli; poi vieni e seguimi.", r: "Mc 10,21" },
    { tema: "Ricchezza", t: "Date a Cesare ciò che è di Cesare e a Dio ciò che è di Dio.", r: "Mc 12,17" },
    { tema: "Ricchezza", t: "Gratuitamente avete ricevuto, gratuitamente date.", r: "Mt 10,8" },
    { tema: "Umiltà", t: "Chi si esalta sarà umiliato e chi si umilia sarà esaltato.", r: "Lc 14,11" },
    { tema: "Umiltà", t: "Chi vuol essere il primo sia il servo di tutti.", r: "Mc 10,44" },
    { tema: "Umiltà", t: "Il Figlio dell'uomo non è venuto per essere servito, ma per servire.", r: "Mc 10,45" },
    { tema: "Umiltà", t: "Vi ho dato l'esempio: come ho fatto io, fate anche voi.", r: "Gv 13,15" },
    { tema: "Umiltà", t: "Imparate da me che sono mite e umile di cuore.", r: "Mt 11,29" },
    { tema: "Umiltà", t: "Molti dei primi saranno ultimi e gli ultimi primi.", r: "Mt 19,30" },
    { tema: "Sequela", t: "Seguimi, e lascia che i morti seppelliscano i loro morti.", r: "Mt 8,22" },
    { tema: "Sequela", t: "Chi vuol venire dietro a me rinneghi se stesso, prenda la sua croce e mi segua.", r: "Mt 16,24" },
    { tema: "Sequela", t: "Chi avrà perduto la propria vita per causa mia, la troverà.", r: "Mt 16,25" },
    { tema: "Sequela", t: "Nessuno che mette mano all'aratro e poi si volge indietro è adatto al regno.", r: "Lc 9,62" },
    { tema: "Sequela", t: "Chi non prende la sua croce e non mi segue, non è degno di me.", r: "Mt 10,38" },
    { tema: "Sequela", t: "Chi ama padre o madre più di me non è degno di me.", r: "Mt 10,37" },
    { tema: "Discepoli", t: "Voi siete il sale della terra.", r: "Mt 5,13" },
    { tema: "Discepoli", t: "Voi siete la luce del mondo.", r: "Mt 5,14" },
    { tema: "Discepoli", t: "Così risplenda la vostra luce davanti agli uomini.", r: "Mt 5,16" },
    { tema: "Discepoli", t: "La messe è abbondante, ma sono pochi gli operai.", r: "Mt 9,37" },
    { tema: "Discepoli", t: "Ecco, io vi mando come pecore in mezzo ai lupi.", r: "Mt 10,16" },
    { tema: "Discepoli", t: "Chi accoglie voi accoglie me.", r: "Mt 10,40" },
    { tema: "Verità", t: "Conoscerete la verità e la verità vi farà liberi.", r: "Gv 8,32" },
    { tema: "Verità", t: "Io sono la via, la verità e la vita.", r: "Gv 14,6" },
    { tema: "Verità", t: "Il cielo e la terra passeranno, ma le mie parole non passeranno.", r: "Mc 13,31" },
    { tema: "Verità", t: "La tua parola è verità.", r: "Gv 17,17" },
    { tema: "Verità", t: "Sì, sì; no, no: il di più viene dal maligno.", r: "Mt 5,37" },
    { tema: "Cuore", t: "Dal cuore provengono i propositi malvagi: è questo che rende impuro l'uomo.", r: "Mt 15,19-20" },
    { tema: "Cuore", t: "La bocca parla dalla pienezza del cuore.", r: "Lc 6,45" },
    { tema: "Cuore", t: "Chi guarda una donna per desiderarla ha già commesso adulterio nel suo cuore.", r: "Mt 5,28" },
    { tema: "Cuore", t: "Non ciò che entra nella bocca rende impuro l'uomo, ma ciò che ne esce.", r: "Mt 15,11" },
    { tema: "Misericordia", t: "Non sono i sani che hanno bisogno del medico, ma i malati.", r: "Mc 2,17" },
    { tema: "Misericordia", t: "Non sono venuto a chiamare i giusti, ma i peccatori.", r: "Mc 2,17" },
    { tema: "Misericordia", t: "Misericordia io voglio e non sacrificio.", r: "Mt 9,13" },
    { tema: "Misericordia", t: "Siate misericordiosi come è misericordioso il Padre vostro.", r: "Lc 6,36" },
    { tema: "Misericordia", t: "Il Figlio dell'uomo è venuto a cercare e salvare ciò che era perduto.", r: "Lc 19,10" },
    { tema: "Vigilanza", t: "Vegliate, perché non sapete né il giorno né l'ora.", r: "Mt 25,13" },
    { tema: "Vigilanza", t: "State pronti, perché nell'ora che non immaginate viene il Figlio dell'uomo.", r: "Mt 24,44" },
    { tema: "Vigilanza", t: "Quello che dico a voi, lo dico a tutti: vegliate!", r: "Mc 13,37" },
    { tema: "Vita eterna", t: "Io sono la risurrezione e la vita: chi crede in me, anche se muore, vivrà.", r: "Gv 11,25" },
    { tema: "Vita eterna", t: "Questa è la vita eterna: che conoscano te, l'unico vero Dio, e colui che hai mandato.", r: "Gv 17,3" },
    { tema: "Vita eterna", t: "Chi mangia la mia carne e beve il mio sangue ha la vita eterna.", r: "Gv 6,54" },
    { tema: "Vita eterna", t: "Nella casa del Padre mio ci sono molte dimore.", r: "Gv 14,2" },
    { tema: "Vita eterna", t: "Oggi sarai con me in paradiso.", r: "Lc 23,43" },
    { tema: "Missione", t: "Andate in tutto il mondo e predicate il Vangelo a ogni creatura.", r: "Mc 16,15" },
    { tema: "Missione", t: "Fate discepoli tutti i popoli, battezzandoli nel nome del Padre e del Figlio e dello Spirito Santo.", r: "Mt 28,19" },
    { tema: "Missione", t: "Io sono con voi tutti i giorni, fino alla fine del mondo.", r: "Mt 28,20" },
    { tema: "Missione", t: "Riceverete forza dallo Spirito Santo e sarete miei testimoni fino ai confini della terra.", r: "At 1,8" }
  ]
};

// --------- Render: aggiunge le sezioni alla tab «Studio di Gesù» ---------
function renderStudioGesuExtra() {
  const host = document.querySelector('#gesu .studio-scope') || document.getElementById('gesu');
  if (!host || typeof STUDIO_GESU_EXTRA === 'undefined') return;
  if (host.querySelector('.sgx-root')) return; // evita doppioni

  if (!document.getElementById('sgx-styles')) {
    const st = document.createElement('style');
    st.id = 'sgx-styles';
    st.textContent = `
      .sgx-parab{background:var(--bg-elev);border:1px solid var(--line);border-left:4px solid var(--accent);border-radius:10px;padding:.9rem 1.1rem;margin:.6rem 0}
      .sgx-parab h5{margin:0 0 .15rem;font-family:var(--serif);font-size:1.2rem;color:var(--accent)}
      .sgx-parab .rif{font-family:sans-serif;font-size:.72rem;letter-spacing:.04em;text-transform:uppercase;color:var(--accent-soft);font-weight:700}
      .sgx-parab p{margin:.35rem 0 0;font-family:var(--serif);font-size:1.02rem;line-height:1.55}
      .sgx-timeline{position:relative;margin:1rem 0 0 .4rem;padding-left:1.7rem;border-left:2px solid var(--accent-soft)}
      .sgx-ev{position:relative;background:var(--bg-elev);border:1px solid var(--line);border-radius:12px;padding:.8rem 1rem;margin:0 0 .8rem}
      .sgx-ev::before{content:attr(data-n);position:absolute;left:-2.55rem;top:.8rem;width:1.7rem;height:1.7rem;border-radius:50%;background:var(--accent);color:#fff;display:flex;align-items:center;justify-content:center;font-size:.8rem;box-shadow:0 0 0 4px var(--bg)}
      .sgx-ev h5{margin:0;font-family:var(--serif);font-size:1.15rem;color:var(--accent)}
      .sgx-ev .meta{font-family:sans-serif;font-size:.72rem;color:var(--ink-soft);margin:.1rem 0 .3rem}
      .sgx-ev .meta b{color:var(--ink)}
      .sgx-ev p{margin:0;font-family:var(--serif);font-size:1rem;line-height:1.5}
      .sgx-ins-filter{display:flex;flex-wrap:wrap;gap:.4rem;margin:.6rem 0 1rem}
      .sgx-chip{border:1px solid var(--line);background:var(--bg-elev);color:var(--ink-soft);border-radius:999px;padding:.3rem .8rem;font-size:.8rem;cursor:pointer;font-family:sans-serif}
      .sgx-chip.active{background:var(--accent);color:#fff;border-color:var(--accent)}
      .sgx-ins-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:.7rem}
      .sgx-ins{background:var(--bg-elev);border:1px solid var(--line);border-radius:10px;padding:.8rem .9rem}
      .sgx-ins p{margin:0 0 .35rem;font-family:var(--serif);font-size:1.02rem;line-height:1.45}
      .sgx-ins .rif{font-family:sans-serif;font-size:.72rem;font-weight:700;color:var(--accent)}
      .sgx-ins .tema{float:right;font-family:sans-serif;font-size:.66rem;text-transform:uppercase;letter-spacing:.05em;color:var(--accent-soft)}
      .sgx-count{font-family:sans-serif;font-size:.85rem;color:var(--ink-soft);margin:.2rem 0 1rem}
    `;
    document.head.appendChild(st);
  }

  const D = STUDIO_GESU_EXTRA;
  const root = document.createElement('div');
  root.className = 'sgx-root';
  let html = '';

  // Parabole
  html += '<h3 class="block-title">Tutte le parabole di Gesù</h3>';
  html += `<p class="sgx-count">${D.parabole.length} parabole, con i riferimenti ai Vangeli.</p>`;
  D.parabole.forEach(p => {
    html += `<div class="sgx-parab"><h5>${p.t} <span class="rif">${p.r}</span></h5><p>${p.d}</p></div>`;
  });

  // Gesta in sequenza
  html += '<h3 class="block-title">Le gesta di Gesù in sequenza</h3>';
  html += `<p class="sgx-count">Dalla nascita all'Ascensione: ${D.gesta.length} tappe, ognuna con luogo e riferimento.</p>`;
  html += '<div class="sgx-timeline">';
  D.gesta.forEach(g => {
    html += `<div class="sgx-ev" data-n="${g.n}"><h5>${g.t}</h5><div class="meta"><b>${g.luogo}</b> · ${g.r}</div><p>${g.d}</p></div>`;
  });
  html += '</div>';

  // Parole di Gesù (flip aggiuntive)
  html += '<h3 class="block-title">Le parole di Gesù (approfondimento)</h3>';
  D.paroleExtra.forEach((ws, wi) => {
    html += '<div class="wordstudy"><h4>' + ws.titolo + '</h4><p class="sub">' + ws.sottotitolo + '</p><div class="flipgrid">';
    ws.carte.forEach((c, ci) => {
      html += `<div class="flip" data-flip="x${wi}-${ci}"><div class="flip-inner">`
        + `<div class="flip-face flip-front"><span class="it">«${c.it}»</span><span class="gr">${c.gr}</span><span class="hint">tocca per girare</span></div>`
        + `<div class="flip-face flip-back"><p>${c.spieg}</p></div></div></div>`;
    });
    html += '</div></div>';
  });

  // 100 insegnamenti con filtro per tema
  const temi = [...new Set(D.insegnamenti.map(i => i.tema))];
  html += '<h3 class="block-title">100 insegnamenti di Gesù</h3>';
  html += `<p class="sgx-count">${D.insegnamenti.length} detti del Signore, filtrabili per tema.</p>`;
  html += '<div class="sgx-ins-filter"><span class="sgx-chip active" data-tema="*">tutti</span>';
  temi.forEach(t => html += `<span class="sgx-chip" data-tema="${t}">${t}</span>`);
  html += '</div><div class="sgx-ins-grid" id="sgx-ins-grid"></div>';

  root.innerHTML = html;
  host.appendChild(root);

  // flip handlers (solo sui nuovi)
  root.querySelectorAll('.flip').forEach(f => f.addEventListener('click', () => f.classList.toggle('flipped')));

  // insegnamenti render + filtro
  function renderIns(tema) {
    const grid = root.querySelector('#sgx-ins-grid');
    grid.innerHTML = D.insegnamenti
      .filter(i => tema === '*' || i.tema === tema)
      .map(i => `<div class="sgx-ins"><span class="tema">${i.tema}</span><p>«${i.t}»</p><span class="rif">${i.r}</span></div>`)
      .join('');
  }
  renderIns('*');
  root.querySelectorAll('.sgx-chip').forEach(c => c.addEventListener('click', () => {
    root.querySelectorAll('.sgx-chip').forEach(x => x.classList.remove('active'));
    c.classList.add('active');
    renderIns(c.dataset.tema);
  }));
}
