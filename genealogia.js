// =============================================================
//  PERSONE DELLA GENEALOGIA — da Adamo a Gesù
//  Per ogni persona: significato del nome, ruolo, cosa
//  rappresenta, insegnamento, e come prepara la via a Cristo.
//  Chiave = nome come appare nelle catene di GENEALOGIA.
// =============================================================

const PERSONE_GENEALOGIA = {

  "Adamo": {
    meaning: "«uomo / tratto dalla terra» (adam ↔ adamah, suolo)",
    ref: "Genesi 1-3 · Romani 5 · 1 Corinzi 15",
    role: "Il primo uomo, capostipite dell'umanità, posto da Dio nel giardino come custode del creato.",
    represents: "L'umanità intera nella sua origine e nella sua caduta: creato a immagine di Dio, ma autore del primo peccato.",
    teaching: "Siamo creature, non creatori: la vita è dono ricevuto, non possesso. Il peccato nasce quando la creatura vuole prendere il posto del Creatore.",
    toward: "Paolo lo chiama «figura di colui che doveva venire» (Rm 5,14). Cristo è il «nuovo Adamo»: dove il primo Adamo disobbedì portando morte, il secondo obbedisce portando vita (1 Cor 15,22). Già in Gen 3,15 risuona la prima promessa del Salvatore."
  },
  "Set": {
    meaning: "«posto, stabilito» — Eva: «Dio mi ha concesso un altro discendente»",
    ref: "Genesi 4,25-26 · 5,3-8",
    role: "Terzo figlio di Adamo ed Eva, dato al posto di Abele ucciso. Da lui parte la linea dei giusti.",
    represents: "Il ricominciare di Dio dopo la tragedia: la promessa non muore con Abele, riparte con Set.",
    teaching: "Dio sa rialzare la storia dopo ogni fallimento; la sua promessa non è interrotta dalla violenza degli uomini.",
    toward: "Ai suoi giorni «si cominciò a invocare il nome del Signore» (Gen 4,26): nasce il culto, la linea da cui verrà il Messia."
  },
  "Enos": {
    meaning: "«uomo mortale, fragile»",
    ref: "Genesi 5,6-11",
    role: "Figlio di Set; al suo tempo si diffonde l'invocazione del nome del Signore.",
    represents: "La consapevolezza della fragilità umana che spinge a cercare Dio.",
    teaching: "Riconoscere di essere mortali e deboli è l'inizio della preghiera: chi si sa fragile invoca il nome del Signore.",
    toward: "Custode silenzioso della linea della promessa che condurrà a Cristo, il solo che vince la mortalità."
  },
  "Kenan": {
    meaning: "«acquisto, possesso»",
    ref: "Genesi 5,9-14",
    role: "Anello della discendenza di Set, tra Enos e Maalalel.",
    represents: "La fedeltà nascosta delle generazioni che trasmettono la fede senza clamore.",
    teaching: "Anche chi non compie gesti memorabili ha un posto nel disegno di Dio: trasmettere la vita e la fede è già grande.",
    toward: "Un anello indispensabile della catena che, di padre in figlio, arriva fino al Salvatore."
  },
  "Maalalel": {
    meaning: "«lode di Dio / Dio è splendore»",
    ref: "Genesi 5,12-17",
    role: "Discendente di Set, padre di Iared.",
    represents: "La vita umana orientata alla lode del Creatore.",
    teaching: "Il senso ultimo dell'esistenza, già scritto in un nome, è lodare Dio.",
    toward: "Porta avanti la linea benedetta verso Noè e, oltre, verso Cristo nostra lode al Padre."
  },
  "Iared": {
    meaning: "«discesa»",
    ref: "Genesi 5,15-20",
    role: "Padre di Enoch, anello della genealogia antidiluviana.",
    represents: "Le generazioni che custodiscono la promessa in un mondo che si allontana da Dio.",
    teaching: "La fedeltà va trasmessa di padre in figlio, anche quando il mondo «discende» nel male.",
    toward: "Tiene viva la linea che genererà Enoch, Noè e infine il Cristo, vera «discesa» di Dio fra gli uomini."
  },
  "Enoch": {
    meaning: "«dedicato, iniziato»",
    ref: "Genesi 5,21-24 · Ebrei 11,5 · Giuda 14",
    role: "Settimo da Adamo. «Camminò con Dio, poi non fu più, perché Dio l'aveva preso»: non conobbe la morte.",
    represents: "L'uomo che vive in intimità con Dio in mezzo a un mondo corrotto.",
    teaching: "La fede non è solo credere: è «camminare con Dio» ogni giorno. Una vita così piace a Dio (Eb 11,5) e non finisce nel nulla.",
    toward: "Segno anticipato della vittoria sulla morte: prefigura la risurrezione e l'ascensione che Cristo realizzerà pienamente."
  },
  "Matusalemme": {
    meaning: "tradiz. «quando egli morirà, (verrà)» — l'uomo più longevo (969 anni)",
    ref: "Genesi 5,21-27",
    role: "Figlio di Enoch, nonno di Noè; muore nell'anno stesso del diluvio.",
    represents: "La pazienza di Dio: la sua lunghissima vita è il tempo concesso all'umanità prima del giudizio.",
    teaching: "Dio è paziente e rimanda il giudizio per dare spazio alla conversione (cfr. 2 Pt 3,9). Ma il tempo della misericordia non è infinito.",
    toward: "La sua morte apre la stagione del diluvio e della salvezza dell'arca: prefigura il giudizio e la salvezza che si compiono in Cristo."
  },
  "Lamech": {
    meaning: "incerto; profetizza consolazione",
    ref: "Genesi 5,28-31",
    role: "Padre di Noè. Alla sua nascita dice: «Costui ci consolerà del nostro lavoro» (Gen 5,29).",
    represents: "L'attesa di un liberatore dalla fatica e dalla maledizione della terra.",
    teaching: "Il cuore dell'uomo attende sempre un consolatore, qualcuno che alleggerisca il peso della vita segnata dal peccato.",
    toward: "La sua attesa di «consolazione» trova in Noè un primo compimento, ma punta al vero Consolatore: Cristo, che dà riposo agli affaticati (Mt 11,28)."
  },
  "Noè": {
    meaning: "«riposo, consolazione»",
    ref: "Genesi 6-9 · Ebrei 11,7 · 1 Pietro 3,20-21",
    role: "Il giusto che, per fede, costruisce l'arca e salva la sua famiglia e ogni specie vivente dal diluvio.",
    represents: "Il resto fedele in mezzo a un'umanità corrotta; il nuovo inizio dell'umanità dopo il giudizio.",
    teaching: "La fede obbedisce anche quando non vede (costruì l'arca prima della pioggia). In un mondo che affonda, restare giusti salva.",
    toward: "Con lui Dio stringe la prima alleanza esplicita (l'arco deposto, Gen 9). L'arca che salva attraverso l'acqua prefigura il Battesimo e Cristo, unica arca di salvezza (1 Pt 3,21)."
  },

  "Sem": {
    meaning: "«nome»",
    ref: "Genesi 9,26-27 · 11,10-11",
    role: "Figlio benedetto di Noè, capostipite dei popoli semiti.",
    represents: "La linea della benedizione scelta tra i figli di Noè: «Benedetto il Signore, Dio di Sem».",
    teaching: "Dio sceglie e benedice una linea non per privilegio, ma per farne un canale di benedizione per tutti.",
    toward: "Da Sem discendono Abramo, Israele e infine Cristo, il «Nome» sopra ogni nome (Fil 2,9) in cui ogni popolo è benedetto."
  },
  "Arpacsad": {
    meaning: "nome di origine incerta",
    ref: "Genesi 11,10-13",
    role: "Figlio di Sem, nato dopo il diluvio; anello verso Eber e Abramo.",
    represents: "La continuità silenziosa della linea benedetta nel mondo nuovo dopo il diluvio.",
    teaching: "Dio scrive la storia della salvezza anche attraverso nomi che noi dimentichiamo: nessuna generazione è inutile.",
    toward: "Custodisce il filo che, da Sem, condurrà fino al Messia."
  },
  "Sela": {
    meaning: "«germoglio, invio»",
    ref: "Genesi 11,12-15",
    role: "Discendente di Sem, padre di Eber.",
    represents: "L'anello nascosto ma necessario della genealogia post-diluviana.",
    teaching: "La fedeltà di Dio passa anche per le generazioni di cui sappiamo solo il nome.",
    toward: "Anello della catena che porta ad Abramo e a Cristo."
  },
  "Eber": {
    meaning: "«colui che attraversa» — da qui «ebreo» (ivri)",
    ref: "Genesi 11,14-17",
    role: "Antenato eponimo degli «Ebrei», la stirpe di chi «passa oltre».",
    represents: "Il popolo pellegrino, chiamato ad attraversare confini per seguire Dio.",
    teaching: "La fede è un cammino di passaggio: come Abramo, l'uomo di Dio «attraversa» dal vecchio mondo verso la promessa.",
    toward: "Dà il nome al popolo ebraico, dal quale, «secondo la carne, proviene il Cristo» (Rm 9,5)."
  },
  "Peleg": {
    meaning: "«divisione» — «ai suoi giorni la terra fu divisa»",
    ref: "Genesi 10,25 · 11,16-19",
    role: "Discendente di Eber; al suo tempo l'umanità si disperde (cfr. Babele).",
    represents: "La frammentazione dei popoli e delle lingue, segno della superbia di Babele.",
    teaching: "La superbia divide; l'orgoglio di «farsi un nome» da soli (Babele) disperde l'umanità.",
    toward: "Alla divisione di Babele risponderà la Pentecoste: lo Spirito di Cristo riunisce i popoli divisi in un'unica famiglia."
  },
  "Reu": {
    meaning: "«amico / pastore»",
    ref: "Genesi 11,18-21",
    role: "Anello della discendenza di Eber, verso Abramo.",
    represents: "Le generazioni fedeli che custodiscono la promessa in attesa della chiamata di Abramo.",
    teaching: "Dio prepara con pazienza, lungo i secoli, ciò che porterà a compimento al momento giusto.",
    toward: "Tassello della linea che sfocia in Abramo, padre dei credenti."
  },
  "Serug": {
    meaning: "«ramo / intreccio»",
    ref: "Genesi 11,20-23",
    role: "Bisnonno di Abramo.",
    represents: "Il legame tra le generazioni che intreccia la storia della salvezza.",
    teaching: "Ogni vita si «intreccia» con quelle che la precedono e la seguono: siamo parte di una storia più grande di noi.",
    toward: "Antenato prossimo di Abramo e dunque della stirpe del Messia."
  },
  "Nacor": {
    meaning: "«sbuffo / ardente»",
    ref: "Genesi 11,22-25",
    role: "Nonno di Abramo (da non confondere con il fratello di Abramo, anch'egli Nacor).",
    represents: "L'ultima generazione prima della grande chiamata.",
    teaching: "Dio conosce per nome anche coloro che la storia quasi dimentica: il suo disegno non salta nessun anello.",
    toward: "Immediato predecessore della famiglia da cui Dio chiamerà Abramo."
  },
  "Terach": {
    meaning: "incerto; forse «luna / ritardo»",
    ref: "Genesi 11,26-32 · Giosuè 24,2",
    role: "Padre di Abramo; parte da Ur dei Caldei verso Canaan ma si ferma a Carran.",
    represents: "L'uomo a metà strada: si mette in viaggio ma non arriva alla meta. Giosuè 24,2 ricorda che «serviva altri dèi».",
    teaching: "Si può iniziare il cammino verso Dio e fermarsi a metà. La fede chiede di non accontentarsi delle tappe intermedie.",
    toward: "Da lui Dio chiama Abramo a completare il viaggio: dall'idolatria alla fede, primo passo verso il popolo del Messia."
  },

  "Abramo": {
    meaning: "Abram «padre eccelso» → Abrahamo «padre di una moltitudine»",
    ref: "Genesi 12-25 · Romani 4 · Galati 3",
    role: "Il padre dei credenti: lascia tutto per seguire la chiamata di Dio verso una terra e una promessa.",
    represents: "La fede che si fida della parola di Dio anche contro ogni evidenza umana.",
    teaching: "«Credette al Signore e gli fu accreditato come giustizia» (Gen 15,6): si è graditi a Dio non per i meriti, ma per la fiducia.",
    toward: "A lui è promesso che «in te saranno benedette tutte le famiglie della terra» (Gen 12,3): promessa che Paolo riferisce a Cristo, il «seme» di Abramo in cui tutti i popoli sono benedetti (Gal 3,16)."
  },
  "Isacco": {
    meaning: "«egli ride / riso» (la gioia per il figlio insperato)",
    ref: "Genesi 21-22 · Ebrei 11,17-19",
    role: "Il figlio della promessa, nato per miracolo da Sara anziana; offerto e «restituito» sul monte Moria.",
    represents: "Il dono di Dio che supera l'impossibile; il figlio amato condotto al sacrificio.",
    teaching: "Dio mantiene le promesse anche quando sembrano impossibili. E chiede di consegnargli ciò che amiamo di più, fidandoci di Lui.",
    toward: "Il «figlio unico e amato» portato al monte, che carica il legno del sacrificio, prefigura nitidamente Cristo che porta la croce; l'ariete sostitutivo annuncia l'Agnello di Dio."
  },
  "Giacobbe": {
    meaning: "«egli tiene il calcagno / soppianta» → Israele, «forte con Dio / lotta con Dio»",
    ref: "Genesi 25-35 · 32,23-33",
    role: "Patriarca dai dodici figli, capostipiti delle dodici tribù d'Israele. Lotta con Dio e riceve un nome nuovo. (In Mt 1,16 un altro Giacobbe è il padre di Giuseppe.)",
    represents: "L'uomo trasformato dalla grazia: da ingannatore a «Israele», il popolo di Dio.",
    teaching: "Dio non sceglie i perfetti ma trasforma chi incontra. Anche dalla lotta con Lui si esce benedetti, seppur «zoppicanti».",
    toward: "Dai suoi dodici figli nasce Israele; profetizza che da Giuda non si allontanerà lo scettro «finché verrà colui al quale appartiene» (Gen 49,10): il Messia."
  },
  "Giuda": {
    meaning: "«lode»",
    ref: "Genesi 29,35 · 38 · 49,8-12",
    role: "Quarto figlio di Giacobbe; tribù regale d'Israele. Da lui (e da Tamar) nasce la linea di Davide.",
    represents: "La tribù della regalità e della lode, scelta per il trono messianico.",
    teaching: "Da una storia anche segnata da colpe (Giuda e Tamar, Gen 38) Dio sa far nascere la linea del Salvatore: la grazia lavora dentro le nostre fragilità.",
    toward: "«Leone di Giuda» (Gen 49,9; Ap 5,5): è il titolo regale di Gesù. Lo scettro promesso a Giuda culmina nel Re Messia."
  },
  "Perez": {
    meaning: "«breccia, rottura»",
    ref: "Genesi 38 · Rut 4,18 · Matteo 1,3",
    role: "Figlio di Giuda e Tamar, nato da una vicenda irregolare; capostipite del casato di Davide.",
    represents: "La grazia che irrompe («apre una breccia») attraverso storie umane disordinate.",
    teaching: "Dio scrive dritto sulle righe storte degli uomini: anche nascite irregolari entrano nel disegno di salvezza.",
    toward: "Tamar è la prima delle donne nominate nella genealogia di Matteo: segno che il Messia viene anche per gli esclusi e i peccatori."
  },
  "Chesron": {
    meaning: "«recinto, cortile»",
    ref: "Rut 4,18-19 · Matteo 1,3",
    role: "Figlio di Perez, anello tra i patriarchi e la monarchia.",
    represents: "Le generazioni oscure che custodiscono la promessa regale.",
    teaching: "La promessa di Dio attraversa anche i secoli silenziosi: ciò che conta è la fedeltà, non la fama.",
    toward: "Trasmette la linea di Giuda verso Davide e il Messia."
  },
  "Ram": {
    meaning: "«elevato, esaltato»",
    ref: "Rut 4,19 · Matteo 1,3-4",
    role: "Discendente di Perez, antenato di Amminadab.",
    represents: "Anello della linea regale prima dell'Esodo.",
    teaching: "Dio «innalza» la sua opera attraverso persone che il mondo non ricorda.",
    toward: "Custode della linea davidica e messianica."
  },
  "Amminadab": {
    meaning: "«il mio popolo è generoso / nobile»",
    ref: "Esodo 6,23 · Numeri 1,7 · Matteo 1,4",
    role: "Antenato della tribù di Giuda al tempo dell'Esodo; suocero di Aronne.",
    represents: "Il legame tra la linea regale e la storia della liberazione dall'Egitto.",
    teaching: "La storia della salvezza intreccia famiglie e generazioni in un unico disegno.",
    toward: "Anello che conduce a Nacson, capo di Giuda nel deserto, e quindi a Davide e a Cristo."
  },
  "Nacson": {
    meaning: "«piccolo serpente / incantatore»",
    ref: "Numeri 1,7 · 2,3 · Matteo 1,4",
    role: "Capo della tribù di Giuda durante l'Esodo, alla guida nell'attraversamento del deserto.",
    represents: "La leadership della tribù regale nel cammino verso la Terra promessa.",
    teaching: "Guidare il popolo di Dio è servizio e responsabilità, non privilegio.",
    toward: "Suo discendente sarà Davide; la sua guida prefigura il Re-Pastore Gesù."
  },
  "Salmon": {
    meaning: "«veste / completo»",
    ref: "Rut 4,20-21 · Matteo 1,5",
    role: "Padre di Boaz; secondo Matteo sposa Raab, la prostituta di Gerico salvata per la fede.",
    represents: "L'accoglienza dello straniero credente dentro il popolo di Dio.",
    teaching: "La fede, non l'origine etnica o il passato, fa entrare nella famiglia di Dio: Raab, pagana e peccatrice, diventa antenata del Messia.",
    toward: "Raab è la seconda donna della genealogia di Matteo: il Salvatore viene anche per chi era «fuori»."
  },
  "Boaz": {
    meaning: "«in lui è la forza»",
    ref: "Rut 2-4 · Matteo 1,5",
    role: "Possidente di Betlemme che riscatta e sposa Rut la moabita: il «go'el», il parente-redentore.",
    represents: "Il redentore che paga per riscattare e dà un futuro a chi è povero e straniero.",
    teaching: "L'amore vero si fa responsabile: riscatta, protegge, include. La bontà concreta cambia il destino delle persone.",
    toward: "Figura del go'el, il «redentore»: prefigura Cristo, lo Sposo che riscatta la sua sposa, la Chiesa, anche dai popoli stranieri."
  },
  "Obed": {
    meaning: "«servo (di Dio)»",
    ref: "Rut 4,13-17 · Matteo 1,5",
    role: "Figlio di Boaz e Rut, nonno di Davide.",
    represents: "Il frutto della fedeltà e della redenzione: dalla storia di Rut nasce la stirpe regale.",
    teaching: "Servire Dio è la vera nobiltà; da gesti umili e fedeli nascono grandi cose.",
    toward: "Nonno di Davide: un altro anello decisivo verso il Re Messia."
  },
  "Iesse": {
    meaning: "«il Signore esiste / dono»",
    ref: "1 Samuele 16 · Isaia 11,1 · Matteo 1,5-6",
    role: "Padre di Davide, il betlemita tra i cui figli Dio sceglie il più piccolo come re.",
    represents: "Lo sguardo di Dio che non giudica le apparenze ma il cuore (1 Sam 16,7).",
    teaching: "«L'uomo guarda l'apparenza, il Signore guarda il cuore»: Dio sceglie chi il mondo scarta.",
    toward: "Isaia annuncia: «Un germoglio spunterà dal tronco di Iesse» (Is 11,1). La «radice di Iesse» è uno dei grandi titoli messianici di Cristo."
  },
  "Davide": {
    meaning: "«amato, diletto»",
    ref: "1-2 Samuele · Salmi · 2 Samuele 7 · Matteo 1,6",
    role: "Il pastorello unto re, vincitore di Golia, fondatore della dinastia regale di Gerusalemme, autore di salmi.",
    represents: "Il re secondo il cuore di Dio: forte e fragile insieme, peccatore e penitente (Sal 51).",
    teaching: "La grandezza nasce dalla fiducia in Dio (contro Golia) e dall'umiltà del pentimento dopo la caduta. Dio usa anche i nostri peccati riconosciuti.",
    toward: "A lui Dio promette un trono «per sempre» (2 Sam 7). Gesù è «Figlio di Davide», il Re la cui dinastia non finisce: l'angelo lo annuncia a Maria (Lc 1,32-33)."
  },

  "Salomone": {
    meaning: "«pace» (da shalom)",
    ref: "1 Re 1-11 · Proverbi · Matteo 1,6",
    role: "Figlio di Davide e Betsabea; costruisce il Tempio di Gerusalemme; celebre per la sapienza.",
    represents: "Il re saggio e il tempo della pace, ma anche il pericolo del cuore che si divide tra Dio e gli idoli.",
    teaching: "Chiedere la sapienza più che la ricchezza è la scelta giusta (1 Re 3); ma neppure il più saggio è al riparo dalla caduta se il cuore si allontana da Dio.",
    toward: "Costruisce il Tempio; Gesù è il Tempio nuovo e definitivo (Gv 2,19-21) e «qui c'è più di Salomone» (Mt 12,42)."
  },
  "Roboamo": {
    meaning: "«il popolo si allarga»",
    ref: "1 Re 12 · Matteo 1,7",
    role: "Figlio di Salomone; sotto di lui il regno si divide in Giuda e Israele.",
    represents: "Le conseguenze della durezza e dell'orgoglio nel governo.",
    teaching: "La superbia e il rifiuto di ascoltare spaccano le comunità: chi guida deve servire, non opprimere.",
    toward: "La divisione del regno fa crescere l'attesa di un Re che riunisca finalmente il popolo: Cristo, principe della pace."
  },
  "Abia": {
    meaning: "«il Signore è mio padre»",
    ref: "1 Re 15 · 2 Cronache 13 · Matteo 1,7",
    role: "Re di Giuda, figlio di Roboamo.",
    represents: "La linea davidica che prosegue tra alti e bassi nella fedeltà.",
    teaching: "Anche in tempi incerti, Dio mantiene «una lampada» alla casa di Davide per amore della promessa (1 Re 15,4).",
    toward: "Custodisce la dinastia regale verso il Messia, nonostante le infedeltà."
  },
  "Asaf": {
    meaning: "«(Dio) raduna» — nel testo corrisponde al re Asa",
    ref: "1 Re 15,9-24 · Matteo 1,7-8",
    role: "Re Asa di Giuda, riformatore che toglie gli idoli e si appoggia al Signore.",
    represents: "Il governante che riforma e purifica il culto.",
    teaching: "Riformare comincia dal togliere gli idoli e affidarsi a Dio nelle prove, non agli eserciti.",
    toward: "Ogni riforma del culto prepara il vero culto «in spirito e verità» che Cristo inaugura (Gv 4,23-24)."
  },
  "Giosafat": {
    meaning: "«il Signore ha giudicato / governato»",
    ref: "1 Re 22 · 2 Cronache 17-20 · Matteo 1,8",
    role: "Re pio di Giuda; promuove l'insegnamento della Legge nel popolo.",
    represents: "Il re che cerca Dio e fa istruire il popolo nelle Scritture.",
    teaching: "Davanti al nemico, «la battaglia è di Dio»: la fede prega prima di combattere (2 Cr 20).",
    toward: "L'amore per la Parola e la fiducia in Dio anticipano il Regno che Cristo annuncerà."
  },
  "Ioram": {
    meaning: "«il Signore è eccelso»",
    ref: "2 Re 8 · 2 Cronache 21 · Matteo 1,8",
    role: "Re di Giuda, sposa una figlia della casa di Acab e introduce l'idolatria.",
    represents: "Il declino quando si mescola la fede di Israele con i culti pagani.",
    teaching: "Le alleanze sbagliate corrompono il cuore: anche un discendente di Davide può tradire.",
    toward: "Nonostante l'infedeltà, Dio non spezza la promessa: la linea verso il Messia resiste alla colpa degli uomini."
  },
  "Ozia": {
    meaning: "«il Signore è la mia forza» (= Azaria)",
    ref: "2 Cronache 26 · Isaia 6,1 · Matteo 1,8-9",
    role: "Re lungo e prospero, poi punito con la lebbra per aver usurpato il sacerdozio per orgoglio.",
    represents: "La forza che diventa superbia: il successo che inganna il cuore.",
    teaching: "«Quando divenne potente, il suo cuore si insuperbì fino a rovinarlo» (2 Cr 26,16): l'orgoglio è la tentazione dei forti.",
    toward: "Nell'anno della sua morte Isaia ha la visione del vero Re, il Signore (Is 6): oltre i re umani si attende il Re divino, Cristo."
  },
  "Iotam": {
    meaning: "«il Signore è perfetto / integro»",
    ref: "2 Re 15 · 2 Cronache 27 · Matteo 1,9",
    role: "Re retto di Giuda, «divenne potente perché camminò con costanza davanti al Signore».",
    represents: "La forza che nasce dalla coerenza con Dio.",
    teaching: "La vera solidità di una vita viene dal camminare con costanza davanti a Dio.",
    toward: "Anello fedele nella linea che attende il Re giusto e integro per eccellenza."
  },
  "Acaz": {
    meaning: "«(il Signore) ha afferrato»",
    ref: "2 Re 16 · Isaia 7 · Matteo 1,9",
    role: "Re infedele che rifiuta di confidare in Dio e si allea con l'Assiria.",
    represents: "L'incredulità che preferisce le sicurezze umane alla fiducia in Dio.",
    teaching: "Rifiutare di fidarsi di Dio per affidarsi ai potenti del mondo porta alla rovina.",
    toward: "Proprio a lui Isaia dà il segno: «La vergine concepirà e partorirà un figlio: Emmanuele» (Is 7,14), profezia compiuta in Cristo (Mt 1,23)."
  },
  "Ezechia": {
    meaning: "«il Signore rafforza»",
    ref: "2 Re 18-20 · 2 Cronache 29-32 · Isaia 36-39 · Matteo 1,9-10",
    role: "Grande re riformatore: purifica il Tempio, distrugge gli idoli, confida in Dio contro l'invasione assira.",
    represents: "Il re che si affida totalmente a Dio nella prova e prega con fiducia.",
    teaching: "Nella crisi, «portare la lettera davanti al Signore» e pregare (Is 37): la fede consegna a Dio le proprie paure.",
    toward: "Modello del fedele che confida; la sua devozione prefigura il Re che salva non con le armi ma con l'abbandono al Padre."
  },
  "Manasse": {
    meaning: "«(Dio) fa dimenticare»",
    ref: "2 Re 21 · 2 Cronache 33 · Matteo 1,10",
    role: "Il re più malvagio di Giuda; ma in esilio si pente e Dio lo perdona e lo ripristina.",
    represents: "L'abisso del male e l'altezza della misericordia: nessun peccato è troppo grande per il perdono.",
    teaching: "Anche il peggiore, se si umilia e si converte, trova misericordia: Dio «si lasciò commuovere» dalla sua preghiera (2 Cr 33,13).",
    toward: "Vivente parabola del perdono che Cristo porterà a tutti: per i peccatori c'è sempre una via di ritorno."
  },
  "Amos": {
    meaning: "«portato (da Dio)» — nel testo corrisponde al re Amon",
    ref: "2 Re 21,18-26 · Matteo 1,10",
    role: "Re Amon di Giuda, figlio di Manasse, idolatra, ucciso in una congiura.",
    represents: "Chi imita il male dei padri senza imitarne il pentimento.",
    teaching: "Manasse si convertì; suo figlio no: l'esempio buono non basta se non si fa propria la conversione.",
    toward: "Persino attraverso re indegni Dio custodisce la promessa che culminerà in Cristo."
  },
  "Giosia": {
    meaning: "«il Signore sostiene / guarisce»",
    ref: "2 Re 22-23 · 2 Cronache 34-35 · Matteo 1,10-11",
    role: "Re santo che, ritrovato il Libro della Legge nel Tempio, guida una grande riforma religiosa.",
    represents: "Il ritorno alla Parola di Dio come cuore di ogni rinnovamento.",
    teaching: "Quando si riscopre e si ascolta la Scrittura, il cuore e il popolo si convertono: la Parola riforma la vita.",
    toward: "Il suo zelo per la Parola prepara la venuta del Verbo, la Parola fatta carne."
  },
  "Ieconia": {
    meaning: "«il Signore stabilisce» (= Ioiachìn)",
    ref: "2 Re 24-25 · Geremia 22,24-30 · Matteo 1,11-12",
    role: "Re deportato a Babilonia: con lui la genealogia tocca il fondo dell'esilio.",
    represents: "La fine apparente della dinastia: il trono perduto, il popolo in catene.",
    teaching: "Anche quando tutto sembra finito e «maledetto» (Ger 22,30), Dio sa riaprire una via che gli uomini credevano chiusa.",
    toward: "Cerniera tra la gloria perduta e la speranza nuova: dalla radice apparentemente morta della dinastia spunterà il germoglio, Cristo."
  },

  "Salatiel": {
    meaning: "«ho chiesto a Dio»",
    ref: "Aggeo 1,1 · Matteo 1,12",
    role: "Figlio di Ieconia, anello della linea davidica nell'esilio.",
    represents: "La preghiera del popolo che, in esilio, «chiede a Dio» un futuro.",
    teaching: "Nell'esilio si impara a invocare Dio: la fede sopravvive anche lontano da casa.",
    toward: "Padre di Zorobabele, custodisce la promessa davidica durante la deportazione."
  },
  "Zorobabele": {
    meaning: "«germoglio / nato a Babilonia»",
    ref: "Esdra 3 · Aggeo 2,20-23 · Zaccaria 4 · Matteo 1,12-13",
    role: "Governatore di Giuda che guida il ritorno dall'esilio e ricostruisce il Tempio.",
    represents: "La rinascita del popolo dopo l'esilio: la promessa davidica che riparte.",
    teaching: "«Non con la potenza né con la forza, ma con il mio Spirito» (Zc 4,6): l'opera di Dio si compie con lo Spirito, non con i mezzi umani.",
    toward: "Dio lo chiama «mio servo... ti renderò come un sigillo» (Ag 2,23): in lui rivive la speranza messianica che si compirà in Cristo."
  },
  "Abiud": {
    meaning: "«mio padre è maestà»",
    ref: "Matteo 1,13",
    role: "Discendente di Zorobabele nelle generazioni post-esiliche di cui la Scrittura conserva solo i nomi.",
    represents: "Le generazioni nascoste dei «quattro secoli di silenzio» tra Antico e Nuovo Testamento.",
    teaching: "Dio lavora anche nel silenzio della storia: i secoli «muti» non sono vuoti, preparano la pienezza del tempo.",
    toward: "Anello segreto della catena che, lontano dai riflettori, conduce fino a Giuseppe e a Gesù."
  },
  "Eliacim": {
    meaning: "«Dio fa sorgere / stabilisce»",
    ref: "Matteo 1,13",
    role: "Antenato di Gesù nel periodo post-esilico, noto solo dalla genealogia.",
    represents: "La fedeltà di Dio che «fa sorgere» discendenti anche nei tempi oscuri.",
    teaching: "Ciò che Dio stabilisce, nessuno lo cancella: la promessa resta in piedi anche senza testimoni illustri.",
    toward: "Custode silenzioso della linea verso il Messia."
  },
  "Azor": {
    meaning: "«soccorso, aiuto»",
    ref: "Matteo 1,14",
    role: "Anello della genealogia post-esilica.",
    represents: "Le famiglie fedeli che, senza fama, attendono la salvezza di Israele.",
    teaching: "Il vero «aiuto» della storia viene da Dio, che non abbandona il suo popolo.",
    toward: "Tassello della discendenza che porta a Cristo, vero soccorso del suo popolo."
  },
  "Sadoc": {
    meaning: "«giusto»",
    ref: "Matteo 1,14",
    role: "Antenato di Gesù nelle generazioni post-esiliche.",
    represents: "L'attesa giusta del popolo che spera nel Messia.",
    teaching: "La giustizia, anche nascosta, prepara il terreno alla venuta del Giusto.",
    toward: "Porta avanti la linea verso «il Giusto» per eccellenza, Cristo."
  },
  "Achim": {
    meaning: "«il Signore stabilisce»",
    ref: "Matteo 1,14",
    role: "Anello oscuro della genealogia di Matteo.",
    represents: "La continuità della promessa nei secoli di attesa.",
    teaching: "La fede si trasmette anche quando sembra che «non accada nulla»: Dio sta preparando il compimento.",
    toward: "Generazione che avvicina la pienezza del tempo in cui nascerà il Salvatore."
  },
  "Eliud": {
    meaning: "«Dio è la mia lode»",
    ref: "Matteo 1,14-15",
    role: "Antenato di Gesù nel tardo periodo post-esilico.",
    represents: "Il popolo che continua a lodare Dio nell'attesa.",
    teaching: "La lode tiene viva la speranza: chi loda Dio non smette di attendere la sua salvezza.",
    toward: "Anello che conduce verso Giacobbe, padre di Giuseppe, e quindi a Gesù."
  },
  "Eleazar": {
    meaning: "«Dio ha soccorso»",
    ref: "Matteo 1,15",
    role: "Discendente davidico nelle ultime generazioni prima di Cristo.",
    represents: "La fiducia che Dio interverrà a salvare il suo popolo.",
    teaching: "Il nome stesso è una professione di fede: la salvezza viene da Dio.",
    toward: "Avvicina la nascita di Colui in cui «Dio soccorre» definitivamente il mondo."
  },
  "Mattan": {
    meaning: "«dono»",
    ref: "Matteo 1,15",
    role: "Nonno di Giuseppe, sposo di Maria.",
    represents: "Le ultime generazioni che custodiscono la promessa fino alla soglia del compimento.",
    teaching: "Tutto, nella storia della salvezza, è «dono»: la vita stessa prepara il Dono più grande.",
    toward: "Bisnonno legale di Gesù: la linea è ormai vicinissima al Messia."
  },
  "Giuseppe": {
    meaning: "«(Dio) aggiunga / accresca»",
    ref: "Matteo 1,16.18-25 · Luca 2",
    role: "Falegname di Nazaret, della casa di Davide; sposo di Maria e padre legale di Gesù.",
    represents: "L'uomo giusto e silenzioso che obbedisce a Dio e custodisce la Santa Famiglia.",
    teaching: "La giustizia vera è obbedienza fidente e amore discreto: Giuseppe agisce senza pronunciare una sola parola nei Vangeli, ma fa tutto ciò che Dio gli chiede.",
    toward: "Dando il nome a Gesù e accogliendolo come figlio, gli trasmette legalmente la discendenza di Davide: è lui che innesta Gesù nella stirpe regale promessa."
  },
  "Gesù": {
    meaning: "«il Signore salva» (Yeshua) — il Cristo, l'Emmanuele, «Dio con noi»",
    ref: "Matteo 1,16-23 · Luca 1-2 · tutto il Nuovo Testamento",
    role: "Il Messia, Figlio di Dio e figlio di Davide e di Abramo: il fine di tutta la genealogia.",
    represents: "Il compimento di ogni promessa: nuovo Adamo, vero Isacco, leone di Giuda, germoglio di Iesse, Re davidico eterno, Tempio definitivo.",
    teaching: "Tutta la storia, con i suoi santi e i suoi peccatori, convergeva verso di Lui: «Dio salva». In Lui ogni vita umana trova senso e redenzione.",
    toward: "È la meta: «da Adamo a Gesù». Tutte le generazioni — illustri e oscure, fedeli e infedeli — hanno spianato la strada al Signore Dio nostro Gesù Cristo, in cui «tutte le famiglie della terra sono benedette»."
  },

  // ====== DOPO GESÙ — la Chiesa nascente ======
  // post: true → la scheda usa l'etichetta «Come continua l'opera di Cristo»
  "Maria": {
    meaning: "«Miryam» — amata, signora", post: true,
    ref: "Luca 1-2 · Giovanni 19,25-27 · Atti 1,14",
    role: "Madre di Gesù e Madre della Chiesa; la prima credente, presente dall'Annunciazione alla Pentecoste.",
    represents: "Il «sì» perfetto della creatura a Dio: «Avvenga di me secondo la tua parola» (Lc 1,38).",
    teaching: "La fede è accoglienza e fiducia: Maria custodisce e medita ogni cosa nel cuore (Lc 2,19), e indica Gesù: «Fate quello che vi dirà» (Gv 2,5).",
    toward: "Ai piedi della croce diventa Madre di tutti i discepoli (Gv 19,27); con gli apostoli nel Cenacolo attende lo Spirito: è la Madre della Chiesa nascente."
  },
  "Pietro": {
    meaning: "«Kefa / pietra» — Simone rinominato da Gesù", post: true,
    ref: "Matteo 16,16-19 · Giovanni 21 · Atti 1-12",
    role: "Capo degli Apostoli, «la roccia» su cui Cristo edifica la Chiesa; primo a guidare la comunità.",
    represents: "Il discepolo fragile e amato: rinnega, piange, è perdonato e confermato («pasci le mie pecore», Gv 21).",
    teaching: "La fede non è non cadere mai, ma rialzarsi e amare di nuovo: «Tu sei il Cristo» (Mt 16,16) resta la sua confessione.",
    toward: "Riceve le «chiavi del Regno» (Mt 16,19): apre la Chiesa con il discorso di Pentecoste (At 2) e la testimonia fino al martirio a Roma."
  },
  "Andrea": {
    meaning: "«virile, coraggioso»", post: true,
    ref: "Giovanni 1,40-42 · Marco 1,16-18",
    role: "Fratello di Pietro, pescatore; il «protòclito», primo chiamato da Gesù.",
    represents: "Chi, trovato Cristo, corre subito a condurvi un altro: «Abbiamo trovato il Messia» (Gv 1,41).",
    teaching: "La prima cosa della fede è portare qualcuno a Gesù; Andrea conduce Pietro e presenta il ragazzo dei pani (Gv 6,8-9).",
    toward: "La tradizione lo dice evangelizzatore della Grecia e dell'area del Mar Nero, martire sulla croce a forma di X."
  },
  "Giacomo il Maggiore": {
    meaning: "«Yaaqov» — figlio di Zebedeo", post: true,
    ref: "Marco 1,19-20 · Atti 12,1-2",
    role: "Apostolo, fratello di Giovanni; con Pietro e Giovanni nel gruppo più vicino a Gesù (Trasfigurazione, Getsemani).",
    represents: "Lo zelo ardente («figlio del tuono») trasformato in dono totale.",
    teaching: "Seguire Cristo può costare tutto: bere «il suo calice» (Mc 10,38-39) non era una metafora vuota.",
    toward: "È il primo degli Apostoli a subire il martirio (At 12,2); la tradizione lega il suo nome a Compostela."
  },
  "Giovanni": {
    meaning: "«Dio fa grazia» — figlio di Zebedeo", post: true,
    ref: "Vangelo di Giovanni · 1-3 Giovanni · Apocalisse",
    role: "L'apostolo «che Gesù amava»; evangelista e veggente dell'Apocalisse.",
    represents: "L'amore contemplativo: posa il capo sul petto di Gesù (Gv 13,25), resta sotto la croce.",
    teaching: "«Dio è amore» (1 Gv 4,8): conoscere Dio è amare. Il suo Vangelo scava il mistero del Verbo.",
    toward: "Custodisce Maria, guida la Chiesa di Efeso e, esule a Patmos, scrive l'Apocalisse: la meta finale della storia in Cristo."
  },
  "Filippo": {
    meaning: "«amico dei cavalli»", post: true,
    ref: "Giovanni 1,43-46 · 14,8-9",
    role: "Apostolo della prima ora, di Betsàida.",
    represents: "Chi cerca e invita: «Vieni e vedi» (Gv 1,46).",
    teaching: "«Mostraci il Padre»: Gesù risponde «Chi ha visto me ha visto il Padre» (Gv 14,9) — Cristo è il volto di Dio.",
    toward: "La tradizione lo pone evangelizzatore in Asia Minore (Frigia)."
  },
  "Bartolomeo": {
    meaning: "«figlio di Tolmai» — forse il Natanaele di Gv", post: true,
    ref: "Giovanni 1,45-51",
    role: "Apostolo; identificato con Natanaele, «israelita senza falsità».",
    represents: "La sincerità che, vinto lo scetticismo, riconosce: «Tu sei il Figlio di Dio» (Gv 1,49).",
    teaching: "Dio ci conosce prima che lo cerchiamo («ti ho visto sotto il fico»): la fede nasce dal sentirsi conosciuti e amati.",
    toward: "La tradizione lo dice missionario fino all'Armenia, dove subisce il martirio."
  },
  "Tommaso": {
    meaning: "«Dìdimo» — gemello", post: true,
    ref: "Giovanni 11,16 · 20,24-29",
    role: "Apostolo; passato alla storia come «l'incredulo».",
    represents: "Il dubbio onesto che cerca prove e arriva alla fede più alta: «Mio Signore e mio Dio!» (Gv 20,28).",
    teaching: "Le domande non sono nemiche della fede; e «beati quelli che non hanno visto e hanno creduto» (Gv 20,29).",
    toward: "Antichissima tradizione lo porta fino all'India (i «cristiani di San Tommaso» del Kerala)."
  },
  "Matteo": {
    meaning: "«dono di Dio» — Levi, il pubblicano", post: true,
    ref: "Matteo 9,9 · Vangelo di Matteo",
    role: "Esattore delle tasse chiamato da Gesù; apostolo ed evangelista.",
    represents: "Il peccatore pubblico che si alza e segue: «Misericordia io voglio» (Mt 9,13).",
    teaching: "Nessun passato esclude dalla chiamata di Dio; il primo Vangelo mostra Gesù compimento delle Scritture.",
    toward: "Il suo Vangelo, rivolto ai Giudei, presenta Gesù come il Messia atteso, nuovo Mosè."
  },
  "Giacomo il Minore": {
    meaning: "«figlio di Alfeo»", post: true,
    ref: "Marco 3,18 · (cfr. Lettera di Giacomo)",
    role: "Apostolo; tradizionalmente legato alla guida della Chiesa di Gerusalemme.",
    represents: "La fede concreta che si fa opere.",
    teaching: "«La fede senza le opere è morta» (Gc 2,17): credere si dimostra nella vita.",
    toward: "Figura di stabilità per la prima comunità giudeo-cristiana di Gerusalemme."
  },
  "Giuda Taddeo": {
    meaning: "«Taddeo» — lodato; per distinguerlo dall'Iscariota", post: true,
    ref: "Giovanni 14,22 · (Lettera di Giuda)",
    role: "Apostolo; invocato come patrono dei casi difficili e disperati.",
    represents: "La domanda del discepolo: «Perché ti manifesti a noi e non al mondo?» (Gv 14,22).",
    teaching: "Dio si rivela a chi lo ama e custodisce la sua parola, non con clamore ma nell'intimità.",
    toward: "La tradizione lo associa alla missione in Mesopotamia e Persia, con Simone."
  },
  "Simone": {
    meaning: "«lo Zelota / il Cananeo»", post: true,
    ref: "Luca 6,15 · Atti 1,13",
    role: "Apostolo, in passato legato al movimento zelota (zelo per la Legge).",
    represents: "Lo zelo politico convertito in zelo per il Regno di Dio.",
    teaching: "Gesù chiama insieme un pubblicano (Matteo) e uno zelota (Simone): il Regno riconcilia opposti.",
    toward: "La tradizione lo unisce a Giuda Taddeo nella missione in Persia."
  },
  "Mattia": {
    meaning: "«dono di Dio»", post: true,
    ref: "Atti 1,15-26",
    role: "Scelto per sorteggio al posto di Giuda Iscariota, per ricostituire i Dodici.",
    represents: "La continuità del collegio apostolico e la fedeltà nascosta dei discepoli della prima ora.",
    teaching: "Si era fatto «testimone della risurrezione» seguendo Gesù dal battesimo: la fedeltà costante prepara alle chiamate.",
    toward: "Subentra a Giuda Iscariota (il traditore): il numero dodici, segno delle tribù d'Israele, viene ricomposto prima della Pentecoste."
  },
  "Paolo": {
    meaning: "«Saulo» di Tarso → Paolo, «piccolo»", post: true,
    ref: "Atti 9 · Lettere paoline · Galati 1",
    role: "Persecutore convertito sulla via di Damasco; l'Apostolo delle genti.",
    represents: "La grazia che capovolge una vita: «Per grazia di Dio sono quello che sono» (1 Cor 15,10).",
    teaching: "Si è salvati per fede in Cristo, dono gratuito (Rm, Gal); «non sono più io che vivo, ma Cristo vive in me» (Gal 2,20).",
    toward: "Porta il Vangelo a tutto il mondo greco-romano e ne fissa la teologia nelle Lettere: il cristianesimo diventa universale."
  },
  "Maria Maddalena": {
    meaning: "«di Màgdala»", post: true,
    ref: "Luca 8,2 · Giovanni 20,11-18",
    role: "Discepola guarita da Gesù, presente alla croce e prima testimone della risurrezione.",
    represents: "L'amore fedele che resta e cerca: piange al sepolcro e per prima incontra il Risorto.",
    teaching: "Cristo si rivela a chi lo cerca con amore e chiama per nome: «Maria!» (Gv 20,16).",
    toward: "Inviata ad annunciare la risurrezione agli apostoli, è detta «apostola degli apostoli»: la prima evangelizzatrice della Pasqua."
  },
  "Stefano": {
    meaning: "«corona»", post: true,
    ref: "Atti 6-7",
    role: "Uno dei primi diaconi; primo martire cristiano (protomartire).",
    represents: "La testimonianza fino al sangue, nello stile di Gesù.",
    teaching: "Muore perdonando i suoi uccisori: «Signore, non imputare loro questo peccato» (At 7,60), come Cristo in croce.",
    toward: "Alla sua lapidazione assiste Saulo (il futuro Paolo): il sangue dei martiri diventa seme di nuovi cristiani."
  },
  "Barnaba": {
    meaning: "«figlio della consolazione»", post: true,
    ref: "Atti 4,36 · 11 · 13-15",
    role: "Levita di Cipro, generoso, che introduce Paolo tra gli apostoli e lo affianca nelle missioni.",
    represents: "Chi sa fidarsi e incoraggiare: dà fiducia a Paolo quando tutti diffidano di lui.",
    teaching: "La Chiesa cresce anche grazie a chi «fa da ponte» e incoraggia i fratelli.",
    toward: "Con Paolo apre la missione ai pagani: il primo grande viaggio missionario parte da Antiochia (At 13)."
  },
  "Marco": {
    meaning: "«Giovanni Marco»", post: true,
    ref: "Atti 12,12 · Vangelo di Marco · 1 Pietro 5,13",
    role: "Discepolo, compagno di Paolo e «interprete» di Pietro; evangelista.",
    represents: "Chi cade e si riprende: lascia la missione, poi torna utile (2 Tm 4,11).",
    teaching: "Il suo Vangelo, il più breve e immediato, mostra Gesù come il Figlio di Dio servo e sofferente.",
    toward: "Raccoglie la predicazione di Pietro nel secondo Vangelo; la tradizione lo lega alla Chiesa di Alessandria."
  },
  "Luca": {
    meaning: "«Lukas» — il medico", post: true,
    ref: "Vangelo di Luca · Atti degli Apostoli · Colossesi 4,14",
    role: "Medico, compagno di Paolo; autore del terzo Vangelo e degli Atti.",
    represents: "Lo storico accurato della misericordia: raccoglie le parabole della tenerezza di Dio.",
    teaching: "Il Vangelo della misericordia e dei poveri (figliol prodigo, buon samaritano) e dello Spirito Santo.",
    toward: "Con gli Atti racconta la nascita e la diffusione della Chiesa da Gerusalemme fino a Roma: la storia continua dopo Gesù."
  }

};

// ---------- FIGURE DOPO GESÙ — la Chiesa nascente (rami) ----------
const FIGURE_DOPO_GESU = [
  {
    group: "I Dodici Apostoli",
    note: "Il collegio scelto da Gesù, fondamento della Chiesa (con Mattia al posto di Giuda Iscariota).",
    membri: ["Pietro", "Andrea", "Giacomo il Maggiore", "Giovanni", "Filippo", "Bartolomeo",
             "Tommaso", "Matteo", "Giacomo il Minore", "Giuda Taddeo", "Simone", "Mattia"]
  },
  {
    group: "L'Apostolo delle genti e gli evangelisti",
    note: "Chi ha portato il Vangelo al mondo e lo ha messo per iscritto.",
    membri: ["Paolo", "Marco", "Luca"]
  },
  {
    group: "Testimoni e primi santi",
    note: "I primi a vivere, annunciare e testimoniare il Risorto.",
    membri: ["Maria", "Maria Maddalena", "Stefano", "Barnaba"]
  }
];

// ---------- I SANTI NEI SECOLI — in ordine temporale ----------
// La «comunione dei santi»: come la linea della fede continua dopo gli
// apostoli, di secolo in secolo, fino a oggi.
const SANTI_NEI_SECOLI = [
  {
    epoca: "Padri della Chiesa (II-V sec.)",
    santi: [
      { nome: "Sant'Ignazio di Antiochia", anni: "† ~107", desc: "Vescovo martire, sbranato dalle fiere a Roma; primo a usare il termine «Chiesa cattolica»." },
      { nome: "San Policarpo", anni: "† ~155", desc: "Discepolo dell'apostolo Giovanni, vescovo di Smirne, martire: «86 anni servo Cristo, non mi ha fatto mai torto»." },
      { nome: "Sant'Ireneo di Lione", anni: "† ~202", desc: "Grande teologo contro le eresie (gnosticismo); «la gloria di Dio è l'uomo vivente»." },
      { nome: "Sant'Antonio abate", anni: "† 356", desc: "Padre del monachesimo: si ritira nel deserto d'Egitto, modello di vita ascetica." },
      { nome: "Sant'Atanasio", anni: "† 373", desc: "Vescovo di Alessandria, difensore della divinità di Cristo contro l'arianesimo a Nicea." },
      { nome: "San Basilio Magno", anni: "† 379", desc: "Padre cappadoce, organizza il monachesimo orientale e la carità verso i poveri." },
      { nome: "Sant'Ambrogio", anni: "† 397", desc: "Vescovo di Milano, maestro e battezzatore di Agostino; tiene testa agli imperatori." },
      { nome: "San Girolamo", anni: "† 420", desc: "Traduce la Bibbia in latino (la Vulgata); «ignorare le Scritture è ignorare Cristo»." },
      { nome: "Sant'Agostino", anni: "† 430", desc: "Vescovo d'Ippona, il più influente Padre d'Occidente: «Confessioni», «La città di Dio»." }
    ]
  },
  {
    epoca: "Medioevo (VI-XIV sec.)",
    santi: [
      { nome: "San Benedetto", anni: "† 547", desc: "Padre del monachesimo occidentale, la Regola «ora et labora»: patrono d'Europa." },
      { nome: "San Gregorio Magno", anni: "† 604", desc: "Papa e dottore; invia missionari in Inghilterra, riforma la liturgia (canto gregoriano)." },
      { nome: "San Francesco d'Assisi", anni: "† 1226", desc: "Il poverello, sposa «Madonna Povertà», ama il creato; riceve le stimmate. Patrono d'Italia." },
      { nome: "San Domenico", anni: "† 1221", desc: "Fonda l'Ordine dei Predicatori (domenicani) per annunciare la verità con lo studio." },
      { nome: "Sant'Antonio di Padova", anni: "† 1231", desc: "Frate francescano, dottore della Chiesa, predicatore instancabile." },
      { nome: "San Tommaso d'Aquino", anni: "† 1274", desc: "Il «doctor angelicus»: con la «Summa» unisce fede e ragione; massimo teologo della Chiesa." },
      { nome: "Santa Caterina da Siena", anni: "† 1380", desc: "Mistica e dottore della Chiesa; riporta il papa da Avignone a Roma. Compatrona d'Europa." }
    ]
  },
  {
    epoca: "Età moderna (XVI-XVIII sec.)",
    santi: [
      { nome: "Sant'Ignazio di Loyola", anni: "† 1556", desc: "Fonda i Gesuiti e gli Esercizi spirituali; al servizio del Papa «ad maiorem Dei gloriam»." },
      { nome: "San Francesco Saverio", anni: "† 1552", desc: "Grande missionario in India e Giappone; patrono delle missioni." },
      { nome: "Santa Teresa d'Avila", anni: "† 1582", desc: "Riforma il Carmelo, maestra di preghiera («Il castello interiore»), dottore della Chiesa." },
      { nome: "San Giovanni della Croce", anni: "† 1591", desc: "Mistico e poeta della «notte oscura» dell'anima; dottore della Chiesa." },
      { nome: "San Filippo Neri", anni: "† 1595", desc: "L'«apostolo di Roma», santo della gioia; fonda l'Oratorio." },
      { nome: "San Vincenzo de' Paoli", anni: "† 1660", desc: "Apostolo della carità verso poveri e abbandonati; fonda opere assistenziali." }
    ]
  },
  {
    epoca: "Età contemporanea (XIX-XXI sec.)",
    santi: [
      { nome: "Santa Bernadette", anni: "† 1879", desc: "A Lourdes vede la Vergine Immacolata; semplice e umile testimone." },
      { nome: "San Giovanni Bosco", anni: "† 1888", desc: "Padre e maestro dei giovani; fonda i Salesiani con il metodo preventivo." },
      { nome: "Santa Teresa di Lisieux", anni: "† 1897", desc: "La «piccola via» dell'infanzia spirituale; dottore della Chiesa e patrona delle missioni." },
      { nome: "San Massimiliano Kolbe", anni: "† 1941", desc: "Francescano, dà la vita ad Auschwitz al posto di un padre di famiglia: «martire della carità»." },
      { nome: "San Padre Pio", anni: "† 1968", desc: "Frate cappuccino con le stimmate; confessore instancabile e uomo di preghiera." },
      { nome: "Santa Teresa di Calcutta", anni: "† 1997", desc: "Serve i più poveri tra i poveri; «fare cose piccole con grande amore»." },
      { nome: "San Giovanni Paolo II", anni: "† 2005", desc: "«Non abbiate paura!»: papa missionario, testimone fino alla sofferenza, santo dei giovani." }
    ]
  }
];
