// =============================================================
//  CAPITALI A MAGGIORANZA CRISTIANA (> 50%)
//  FILE STAGED: non ancora agganciato. Dati per un layer della
//  mappa "Diffusione della fede" (oggi nel mondo).
//  % cristiani = stime approssimative (ordine di grandezza,
//  fonti tipo Pew/ARDA); coordinate reali delle capitali.
//  Al publish: aggiungere come layer "Capitali cristiane oggi".
// =============================================================

const CAPITALI_CRISTIANE = [
  // ---------- Europa ----------
  { citta: "Roma", paese: "Italia", lat: 41.90, lon: 12.50, perc: 80, cont: "Europa" },
  { citta: "Madrid", paese: "Spagna", lat: 40.42, lon: -3.70, perc: 60, cont: "Europa" },
  { citta: "Lisbona", paese: "Portogallo", lat: 38.72, lon: -9.14, perc: 83, cont: "Europa" },
  { citta: "Parigi", paese: "Francia", lat: 48.86, lon: 2.35, perc: 58, cont: "Europa" },
  { citta: "Dublino", paese: "Irlanda", lat: 53.35, lon: -6.26, perc: 79, cont: "Europa" },
  { citta: "Londra", paese: "Regno Unito", lat: 51.51, lon: -0.13, perc: 53, cont: "Europa" },
  { citta: "Bruxelles", paese: "Belgio", lat: 50.85, lon: 4.35, perc: 62, cont: "Europa" },
  { citta: "Vienna", paese: "Austria", lat: 48.21, lon: 16.37, perc: 68, cont: "Europa" },
  { citta: "Berlino", paese: "Germania", lat: 52.52, lon: 13.40, perc: 56, cont: "Europa" },
  { citta: "Berna", paese: "Svizzera", lat: 46.95, lon: 7.45, perc: 64, cont: "Europa" },
  { citta: "Varsavia", paese: "Polonia", lat: 52.23, lon: 21.01, perc: 92, cont: "Europa" },
  { citta: "Praga", paese: "Rep. Ceca", lat: 50.08, lon: 14.44, perc: 50, cont: "Europa" },
  { citta: "Bratislava", paese: "Slovacchia", lat: 48.15, lon: 17.11, perc: 76, cont: "Europa" },
  { citta: "Budapest", paese: "Ungheria", lat: 47.50, lon: 19.04, perc: 60, cont: "Europa" },
  { citta: "Zagabria", paese: "Croazia", lat: 45.81, lon: 15.98, perc: 87, cont: "Europa" },
  { citta: "Lubiana", paese: "Slovenia", lat: 46.06, lon: 14.51, perc: 73, cont: "Europa" },
  { citta: "Bucarest", paese: "Romania", lat: 44.43, lon: 26.10, perc: 92, cont: "Europa" },
  { citta: "Sofia", paese: "Bulgaria", lat: 42.70, lon: 23.32, perc: 64, cont: "Europa" },
  { citta: "Atene", paese: "Grecia", lat: 37.98, lon: 23.73, perc: 90, cont: "Europa" },
  { citta: "Belgrado", paese: "Serbia", lat: 44.79, lon: 20.45, perc: 90, cont: "Europa" },
  { citta: "Kiev", paese: "Ucraina", lat: 50.45, lon: 30.52, perc: 85, cont: "Europa" },
  { citta: "Mosca", paese: "Russia", lat: 55.76, lon: 37.62, perc: 63, cont: "Europa" },
  { citta: "Minsk", paese: "Bielorussia", lat: 53.90, lon: 27.57, perc: 71, cont: "Europa" },
  { citta: "Tbilisi", paese: "Georgia", lat: 41.72, lon: 44.79, perc: 88, cont: "Europa" },
  { citta: "Yerevan", paese: "Armenia", lat: 40.18, lon: 44.51, perc: 94, cont: "Europa" },
  { citta: "Helsinki", paese: "Finlandia", lat: 60.17, lon: 24.94, perc: 67, cont: "Europa" },
  { citta: "Stoccolma", paese: "Svezia", lat: 59.33, lon: 18.07, perc: 57, cont: "Europa" },
  { citta: "Oslo", paese: "Norvegia", lat: 59.91, lon: 10.75, perc: 68, cont: "Europa" },
  { citta: "Copenaghen", paese: "Danimarca", lat: 55.68, lon: 12.57, perc: 72, cont: "Europa" },
  { citta: "Reykjavík", paese: "Islanda", lat: 64.15, lon: -21.94, perc: 70, cont: "Europa" },
  { citta: "La Valletta", paese: "Malta", lat: 35.90, lon: 14.51, perc: 90, cont: "Europa" },

  // ---------- America Latina e Caraibi ----------
  { citta: "Città del Messico", paese: "Messico", lat: 19.43, lon: -99.13, perc: 90, cont: "America" },
  { citta: "Guatemala City", paese: "Guatemala", lat: 14.63, lon: -90.51, perc: 88, cont: "America" },
  { citta: "San Salvador", paese: "El Salvador", lat: 13.69, lon: -89.22, perc: 85, cont: "America" },
  { citta: "Tegucigalpa", paese: "Honduras", lat: 14.07, lon: -87.19, perc: 87, cont: "America" },
  { citta: "Managua", paese: "Nicaragua", lat: 12.11, lon: -86.24, perc: 85, cont: "America" },
  { citta: "San José", paese: "Costa Rica", lat: 9.93, lon: -84.08, perc: 88, cont: "America" },
  { citta: "Panama", paese: "Panama", lat: 8.98, lon: -79.52, perc: 90, cont: "America" },
  { citta: "Bogotá", paese: "Colombia", lat: 4.71, lon: -74.07, perc: 92, cont: "America" },
  { citta: "Caracas", paese: "Venezuela", lat: 10.48, lon: -66.90, perc: 88, cont: "America" },
  { citta: "Quito", paese: "Ecuador", lat: -0.18, lon: -78.47, perc: 91, cont: "America" },
  { citta: "Lima", paese: "Perù", lat: -12.05, lon: -77.04, perc: 90, cont: "America" },
  { citta: "La Paz", paese: "Bolivia", lat: -16.50, lon: -68.15, perc: 88, cont: "America" },
  { citta: "Brasília", paese: "Brasile", lat: -15.79, lon: -47.88, perc: 87, cont: "America" },
  { citta: "Asunción", paese: "Paraguay", lat: -25.28, lon: -57.63, perc: 89, cont: "America" },
  { citta: "Santiago", paese: "Cile", lat: -33.45, lon: -70.67, perc: 70, cont: "America" },
  { citta: "Buenos Aires", paese: "Argentina", lat: -34.60, lon: -58.38, perc: 80, cont: "America" },
  { citta: "Montevideo", paese: "Uruguay", lat: -34.90, lon: -56.16, perc: 57, cont: "America" },
  { citta: "L'Avana", paese: "Cuba", lat: 23.11, lon: -82.37, perc: 59, cont: "America" },
  { citta: "Santo Domingo", paese: "Rep. Dominicana", lat: 18.49, lon: -69.93, perc: 88, cont: "America" },
  { citta: "Port-au-Prince", paese: "Haiti", lat: 18.59, lon: -72.31, perc: 87, cont: "America" },

  // ---------- America del Nord ----------
  { citta: "Washington", paese: "Stati Uniti", lat: 38.90, lon: -77.04, perc: 65, cont: "America" },
  { citta: "Ottawa", paese: "Canada", lat: 45.42, lon: -75.70, perc: 53, cont: "America" },

  // ---------- Africa subsahariana ----------
  { citta: "Addis Abeba", paese: "Etiopia", lat: 9.03, lon: 38.74, perc: 63, cont: "Africa" },
  { citta: "Nairobi", paese: "Kenya", lat: -1.29, lon: 36.82, perc: 85, cont: "Africa" },
  { citta: "Kampala", paese: "Uganda", lat: 0.35, lon: 32.58, perc: 84, cont: "Africa" },
  { citta: "Kigali", paese: "Ruanda", lat: -1.94, lon: 30.06, perc: 94, cont: "Africa" },
  { citta: "Kinshasa", paese: "RD Congo", lat: -4.32, lon: 15.31, perc: 95, cont: "Africa" },
  { citta: "Brazzaville", paese: "Congo", lat: -4.27, lon: 15.27, perc: 86, cont: "Africa" },
  { citta: "Luanda", paese: "Angola", lat: -8.84, lon: 13.23, perc: 90, cont: "Africa" },
  { citta: "Lusaka", paese: "Zambia", lat: -15.42, lon: 28.28, perc: 95, cont: "Africa" },
  { citta: "Harare", paese: "Zimbabwe", lat: -17.83, lon: 31.05, perc: 84, cont: "Africa" },
  { citta: "Lilongwe", paese: "Malawi", lat: -13.96, lon: 33.79, perc: 87, cont: "Africa" },
  { citta: "Pretoria", paese: "Sudafrica", lat: -25.75, lon: 28.19, perc: 78, cont: "Africa" },
  { citta: "Windhoek", paese: "Namibia", lat: -22.56, lon: 17.08, perc: 90, cont: "Africa" },
  { citta: "Gaborone", paese: "Botswana", lat: -24.65, lon: 25.91, perc: 79, cont: "Africa" },
  { citta: "Accra", paese: "Ghana", lat: 5.56, lon: -0.20, perc: 71, cont: "Africa" },
  { citta: "Abuja", paese: "Nigeria", lat: 9.06, lon: 7.50, perc: 49, cont: "Africa" },
  { citta: "Yaoundé", paese: "Camerun", lat: 3.85, lon: 11.50, perc: 70, cont: "Africa" },
  { citta: "Libreville", paese: "Gabon", lat: 0.42, lon: 9.47, perc: 76, cont: "Africa" },
  { citta: "Kampala", paese: "Sud Sudan (Giuba)", lat: 4.85, lon: 31.58, perc: 60, cont: "Africa" },

  // ---------- Asia e Oceania ----------
  { citta: "Manila", paese: "Filippine", lat: 14.60, lon: 120.98, perc: 90, cont: "Asia/Oceania" },
  { citta: "Dili", paese: "Timor Est", lat: -8.56, lon: 125.56, perc: 97, cont: "Asia/Oceania" },
  { citta: "Canberra", paese: "Australia", lat: -35.28, lon: 149.13, perc: 52, cont: "Asia/Oceania" },
  { citta: "Wellington", paese: "Nuova Zelanda", lat: -41.29, lon: 174.78, perc: 50, cont: "Asia/Oceania" },
  { citta: "Port Moresby", paese: "Papua N. Guinea", lat: -9.44, lon: 147.18, perc: 95, cont: "Asia/Oceania" },
  { citta: "Suva", paese: "Figi", lat: -18.12, lon: 178.44, perc: 64, cont: "Asia/Oceania" }
];
