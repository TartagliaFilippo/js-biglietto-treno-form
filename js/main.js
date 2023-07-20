// RICHIESTE UTENTE
// const userAge = parseInt(prompt("inserisci la tua età"));
// const userKm = parseFloat(
//   prompt("inserisci il numero di kilometri che vuoi fare")
// );

// TARIFFARIO FISSO
const priceKm = 0.21;

// DISCOUNT
let discountTicket = 0;

// PREZZO EFFETTIVO DEL BIGLIETTO
const priceTicket = userKm * priceKm;

// DICHIARO LA VARIABILE DISCOUNT
if (userAge < 18) {
  discountTicket = priceTicket * 0.2;
} else if (userAge > 65) {
  discountTicket = priceTicket * 0.4;
}

// DICHIARO IL PREZZO FINALE DEL BIGLIETTO
const finalPrice = priceTicket - discountTicket;

// STAMPO A SCHERMO IL COSTO DEL BIGLIETTO
document.getElementById("final-ticket-price").innerHTML =
  "Il costo del biglietto è: €" + finalPrice.toFixed(2);

// STAMPO A SCHERMO LO SCONTO DEL BIGLIETTO
document.getElementById("ticket-discount").innerHTML =
  "Il sconto del biglietto è: €" + discountTicket.toFixed(2);

// DICHIARO I MIEI INPUT
const userName = document.getElementById("user-name");
const userKm = document.getElementById("user-km");
const userAge = document.getElementById("user-age");

// DICHIARO I MIEI BOTTONI
const sendText = document.getElementById("send-text");
const removeText = document.getElementById("remove-text");

// DICHIARO I MIEI OUTPUT
const ticketName = document.getElementById("ticket-name");
const ticketPrice = document.getElementById("ticket-price");
const ticketDiscount = document.getElementById("ticket-discount");
