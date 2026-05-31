// =============================================================
//  VERSETTI — testo dei passi citati (resa italiana fedele)
//  Usato per rendere CLICCABILI i riferimenti negli studi:
//  al clic appare il testo del versetto in un popover.
//  Le chiavi devono combaciare con i riferimenti nel testo.
// =============================================================

const VERSETTI = {
  // ---- Proverbi ----
  "Pr 1,7": "Il timore del Signore è il principio della conoscenza; gli stolti disprezzano la sapienza e l'istruzione.",
  "Pr 9,10": "Principio della sapienza è il timore del Signore, e conoscere il Santo è intelligenza.",
  "Pr 1,8": "Ascolta, figlio mio, l'istruzione di tuo padre e non disprezzare l'insegnamento di tua madre.",
  "Pr 3,5": "Confida nel Signore con tutto il cuore e non appoggiarti sulla tua intelligenza.",
  "Pr 4,18": "Il sentiero dei giusti è come la luce dell'alba, che cresce in splendore fino al pieno giorno.",
  "Pr 4,19": "La via degli empi è come l'oscurità: non sanno dove inciampano.",
  "Pr 4,23": "Custodisci il tuo cuore più di ogni altra cosa, perché da esso sgorga la vita.",
  "Pr 8,22": "Il Signore mi ha posseduto come primizia della sua attività, prima di ogni sua opera.",
  "Pr 11,1": "La bilancia falsa è in abominio al Signore, ma il peso giusto gli è gradito.",
  "Pr 11,25": "Chi è generoso sarà saziato e chi disseta gli altri sarà dissetato.",
  "Pr 13,24": "Chi risparmia il bastone odia suo figlio, chi lo ama lo corregge per tempo.",
  "Pr 14,12": "C'è una via che all'uomo sembra diritta, ma alla fine conduce alla morte.",
  "Pr 15,1": "Una risposta gentile calma la collera, una parola pungente eccita l'ira.",
  "Pr 16,8": "Meglio poco con giustizia che grandi rendite senza equità.",
  "Pr 17,17": "Un amico ama in ogni tempo, è un fratello nato per i momenti difficili.",
  "Pr 18,21": "Morte e vita sono in potere della lingua; chi ne fa buon uso ne mangerà i frutti.",
  "Pr 19,17": "Chi ha pietà del povero fa un prestito al Signore, che gli darà la sua ricompensa.",
  "Pr 22,6": "Educa il fanciullo sulla via da seguire; neppure da vecchio se ne allontanerà.",
  "Pr 27,17": "Il ferro si affila con il ferro e l'uomo affina il carattere del suo prossimo.",
  "Pr 31,30": "Fallace è la grazia e vana è la bellezza, ma la donna che teme il Signore è degna di lode.",

  // ---- Giobbe ----
  "Gb 1,21": "Nudo sono uscito dal grembo di mia madre e nudo vi ritornerò. Il Signore ha dato, il Signore ha tolto: sia benedetto il nome del Signore.",
  "Gb 2,10": "Se da Dio accettiamo il bene, perché non dovremmo accettare il male?",
  "Gb 19,25": "Io so che il mio redentore vive e che, ultimo, si leverà sulla polvere.",
  "Gb 42,5": "Io ti conoscevo solo per sentito dire, ma ora i miei occhi ti vedono.",

  // ---- Salmi ----
  "Sal 23,1": "Il Signore è il mio pastore: non manco di nulla.",
  "Sal 22,2": "Dio mio, Dio mio, perché mi hai abbandonato?",
  "Sal 51,12": "Crea in me, o Dio, un cuore puro, rinnova in me uno spirito saldo.",
  "Sal 119,105": "Lampada per i miei passi è la tua parola, luce sul mio cammino.",
  "Sal 19,2": "I cieli narrano la gloria di Dio e l'opera delle sue mani annuncia il firmamento.",
  "Sal 1,6": "Il Signore veglia sul cammino dei giusti, ma la via degli empi va in rovina.",
  "Sal 110,1": "Oracolo del Signore al mio signore: «Siedi alla mia destra finché io ponga i tuoi nemici a sgabello dei tuoi piedi».",

  // ---- Qoèlet ----
  "Qo 1,2": "Vanità delle vanità, tutto è vanità.",
  "Qo 3,1": "Per ogni cosa c'è il suo momento, e un tempo per ogni faccenda sotto il cielo.",
  "Qo 3,11": "Dio ha fatto bella ogni cosa a suo tempo, e ha posto nel loro cuore l'eternità.",
  "Qo 12,13": "Conclusione del discorso, dopo aver ascoltato tutto: temi Dio e osserva i suoi comandamenti, perché questo per l'uomo è tutto.",

  // ---- Cantico ----
  "Ct 2,16": "Il mio amato è mio e io sono sua.",
  "Ct 8,6": "Forte come la morte è l'amore, tenace come gli inferi è la passione: le sue vampe sono vampe di fuoco, una fiamma divina.",

  // ---- Sapienza / Siracide ----
  "Sap 3,1": "Le anime dei giusti sono nelle mani di Dio, nessun tormento li toccherà.",
  "Sap 7,26": "È un riflesso della luce eterna, uno specchio senza macchia dell'attività di Dio e immagine della sua bontà.",
  "Sir 1,14": "Principio di sapienza è temere il Signore; essa fu creata con i fedeli fin dal seno materno.",
  "Sir 28,2": "Perdona l'offesa al tuo prossimo e allora, quando preghi, ti saranno rimessi i peccati.",

  // ---- Genesi / Pentateuco (riferimenti frequenti) ----
  "Gen 1,1": "In principio Dio creò il cielo e la terra.",
  "Gen 3,15": "Porrò inimicizia fra te e la donna, fra la tua stirpe e la sua: questa ti schiaccerà il capo e tu le insidierai il calcagno.",
  "Gen 12,3": "Benedirò coloro che ti benediranno… e in te si diranno benedette tutte le famiglie della terra.",
  "Gen 15,6": "Egli credette al Signore, che glielo accreditò come giustizia.",
  "Es 3,14": "Dio disse a Mosè: «Io sono colui che sono».",
  "Dt 6,5": "Amerai il Signore tuo Dio con tutto il cuore, con tutta l'anima e con tutte le forze.",
  "Dt 30,19": "Ti ho posto davanti la vita e la morte… scegli dunque la vita, perché viva tu e la tua discendenza.",

  // ---- Profeti (chiave) ----
  "Is 7,14": "Ecco: la vergine concepirà e partorirà un figlio, che chiamerà Emmanuele.",
  "Is 9,5": "Un bambino è nato per noi, ci è stato dato un figlio… e il suo nome sarà: Consigliere mirabile, Dio potente, Principe della pace.",
  "Is 53,5": "Egli è stato trafitto per le nostre colpe, schiacciato per le nostre iniquità; per le sue piaghe noi siamo stati guariti.",
  "Ger 31,33": "Porrò la mia legge dentro di loro, la scriverò sul loro cuore; sarò il loro Dio ed essi saranno il mio popolo.",
  "Ez 36,26": "Vi darò un cuore nuovo, metterò dentro di voi uno spirito nuovo, toglierò il cuore di pietra e vi darò un cuore di carne.",
  "Mi 5,1": "E tu, Betlemme di Èfrata, così piccola… da te uscirà per me colui che deve essere il dominatore in Israele.",
  "Dn 7,13": "Ecco venire, sulle nubi del cielo, uno simile a un figlio d'uomo.",

  // ---- Vangeli / NT (chiave) ----
  "Mt 5,3": "Beati i poveri in spirito, perché di essi è il regno dei cieli.",
  "Mt 6,33": "Cercate prima il regno di Dio e la sua giustizia, e tutte queste cose vi saranno date in aggiunta.",
  "Mt 22,37": "Amerai il Signore tuo Dio con tutto il cuore, con tutta la tua anima e con tutta la tua mente.",
  "Gv 1,14": "E il Verbo si fece carne e venne ad abitare in mezzo a noi; e noi abbiamo contemplato la sua gloria.",
  "Gv 3,16": "Dio ha tanto amato il mondo da dare il Figlio unigenito, perché chiunque crede in lui non vada perduto, ma abbia la vita eterna.",
  "Gv 14,6": "Io sono la via, la verità e la vita. Nessuno viene al Padre se non per mezzo di me.",
  "Lc 1,38": "Ecco la serva del Signore: avvenga per me secondo la tua parola.",
  "Rm 8,28": "Tutto concorre al bene di coloro che amano Dio.",
  "1 Cor 13,13": "Ora dunque rimangono queste tre cose: la fede, la speranza e la carità. Ma la più grande di tutte è la carità.",
  "Ap 21,5": "Ecco, io faccio nuove tutte le cose.",

  // ---- Aggiunte: Profeti, Misteri, Studio di Gesù ----
  "Is 6,3": "Santo, santo, santo è il Signore degli eserciti. Tutta la terra è piena della sua gloria.",
  "Is 6,8": "Eccomi, manda me!",
  "Is 40,3": "Una voce grida: «Nel deserto preparate la via al Signore».",
  "Is 61,1": "Lo Spirito del Signore Dio è su di me, perché mi ha consacrato con l'unzione e mi ha mandato a portare il lieto annuncio ai poveri.",
  "Ger 1,5": "Prima di formarti nel grembo materno ti conoscevo, prima che tu uscissi alla luce ti avevo consacrato.",
  "Ger 29,11": "Io ho progetti di pace e non di sventura, per concedervi un futuro pieno di speranza.",
  "Ez 37,5": "Ecco, io faccio entrare in voi lo spirito e rivivrete.",
  "Os 6,6": "Voglio l'amore e non il sacrificio, la conoscenza di Dio più degli olocausti.",
  "Os 11,1": "Quando Israele era fanciullo, io l'ho amato e dall'Egitto ho chiamato mio figlio.",
  "Gl 3,1": "Effonderò il mio spirito sopra ogni uomo e diventeranno profeti i vostri figli e le vostre figlie.",
  "Am 5,24": "Piuttosto scorra come acqua il diritto e la giustizia come un torrente perenne.",
  "Mi 6,8": "Uomo, ti è stato insegnato ciò che è buono: praticare la giustizia, amare la bontà, camminare umilmente con il tuo Dio.",
  "Ab 2,4": "Il giusto vivrà per la sua fede.",
  "Zc 9,9": "Esulta, figlia di Sion: ecco, a te viene il tuo re. Egli è giusto e umile, cavalca un asino.",
  "Ml 3,1": "Ecco, io manderò il mio messaggero a preparare la via davanti a me.",
  "1 Sam 3,10": "Parla, perché il tuo servo ti ascolta.",
  "1 Sam 16,7": "L'uomo guarda l'apparenza, il Signore guarda il cuore.",
  "2 Sam 7,16": "La tua casa e il tuo regno saranno saldi per sempre davanti a me.",
  "1 Re 18,21": "Fino a quando zoppicherete con i due piedi? Se il Signore è Dio, seguitelo!",
  "1 Re 19,12": "Il Signore non era nel vento, né nel terremoto, né nel fuoco; ma dopo il fuoco ci fu il sussurro di una brezza leggera.",
  "Dt 18,15": "Il Signore tuo Dio susciterà per te, in mezzo a te, un profeta come me: a lui darete ascolto.",
  "Gen 50,20": "Voi avevate pensato del male contro di me, ma Dio l'ha mutato in bene.",
  "Mt 4,17": "Convertitevi, perché il regno dei cieli è vicino.",
  "Mt 5,14": "Voi siete la luce del mondo.",
  "Mt 11,28": "Venite a me, voi tutti affaticati e oppressi, e io vi darò ristoro.",
  "Mt 16,18": "Tu sei Pietro e su questa pietra edificherò la mia Chiesa.",
  "Mt 25,40": "Tutto quello che avete fatto a uno solo di questi miei fratelli più piccoli, l'avete fatto a me.",
  "Mt 28,19": "Andate dunque e fate discepoli tutti i popoli, battezzandoli nel nome del Padre e del Figlio e dello Spirito Santo.",
  "Mc 1,15": "Il tempo è compiuto e il regno di Dio è vicino; convertitevi e credete nel Vangelo.",
  "Lc 4,21": "Oggi si è compiuta questa Scrittura che voi avete ascoltato.",
  "Lc 10,18": "Vedevo Satana cadere dal cielo come la folgore.",
  "Lc 15,20": "Mentre era ancora lontano, suo padre lo vide, ebbe compassione, gli corse incontro e lo baciò.",
  "Lc 22,20": "Questo calice è la nuova alleanza nel mio sangue, che è versato per voi.",
  "Lc 23,34": "Padre, perdona loro, perché non sanno quello che fanno.",
  "Gv 8,12": "Io sono la luce del mondo; chi segue me non camminerà nelle tenebre, ma avrà la luce della vita.",
  "Gv 8,32": "Conoscerete la verità e la verità vi farà liberi.",
  "Gv 8,44": "Il diavolo è menzognero e padre della menzogna.",
  "Gv 10,11": "Io sono il buon pastore. Il buon pastore dà la propria vita per le pecore.",
  "Gv 11,25": "Io sono la risurrezione e la vita; chi crede in me, anche se muore, vivrà.",
  "Gv 13,34": "Vi do un comandamento nuovo: che vi amiate gli uni gli altri come io ho amato voi.",
  "Gv 20,28": "Mio Signore e mio Dio!",
  "At 1,8": "Riceverete la forza dallo Spirito Santo… e di me sarete testimoni fino ai confini della terra.",
  "At 2,16": "Questo è ciò che fu detto per mezzo del profeta Gioele.",
  "Rm 1,17": "Il giusto per fede vivrà.",
  "1 Tm 2,4": "Dio vuole che tutti gli uomini siano salvati e giungano alla conoscenza della verità.",
  "Eb 1,3": "Egli è irradiazione della sua gloria e impronta della sua sostanza.",
  "1 Pt 5,8": "Il diavolo, come leone ruggente, va in giro cercando chi divorare.",
  "1 Gv 4,8": "Chi non ama non ha conosciuto Dio, perché Dio è amore.",
  "Ap 12,9": "Il grande drago, il serpente antico, colui che chiamiamo diavolo e Satana, fu precipitato sulla terra.",
  "Ap 21,1": "Vidi un cielo nuovo e una terra nuova… e il mare non c'era più."
};
