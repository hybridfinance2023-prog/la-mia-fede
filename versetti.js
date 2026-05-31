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
  "Ap 21,5": "Ecco, io faccio nuove tutte le cose."
};
