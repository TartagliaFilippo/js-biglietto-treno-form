// RICHIESTE UTENTE
const alertErrorElement = document.getElementById("error-element");
const userName = document.getElementById("user-name");
const userSurname = document.getElementById("user-surname");
const userKm = document.getElementById("user-km");
const userAge = document.getElementById("user-age");

// DICHIARO I MIEI BOTTONI
const buttonSend = document.getElementById("buttom-send");
const buttonRemove = document.getElementById("button-remove");

// DICHIARO I MIEI OUTPUT
const ticketSection = document.getElementById("ticket-section");
const ticketName = document.getElementById("ticket-name");
const ticketSurname = document.getElementById("ticket-surname");
const ticketPrice = document.getElementById("ticket-price");
const discontPrice = document.getElementById("discount-price-real");
const ticketDiscount = document.getElementById("ticket-discount");

// COLLEGO L INPUT NAME AL TICKET
buttonSend.addEventListener("click", function () {
  // INPUT NAME
  const inputName = userName.value;
  ticketName.innerHTML = inputName;
  console.log(inputName);

  // INPUT SURNAME
  const inputSurname = userSurname.value;
  ticketSurname.innerHTML = inputSurname;
  console.log(inputSurname);

  const inputKm = userKm.value;

  const inputAge = userAge.value;

  if (isNaN(inputKm) || isNaN(inputAge) || !ticketName || !ticketSurname) {
    alertErrorElement.classList.remove("d-none");
  } else {
    ticketSection.classList.remove("d-none");
  }

  // TARIFFARIO FISSO
  const priceKm = 0.21;

  // DISCOUNT
  let discountTicket = 0;

  // PREZZO EFFETTIVO DEL BIGLIETTO
  const priceTicket = inputKm * priceKm;

  // DICHIARO LA VARIABILE DISCOUNT
  if (inputAge < 18) {
    discountTicket = priceTicket * 0.2;
  } else if (inputAge > 65) {
    discountTicket = priceTicket * 0.4;
  }

  // QUANDO MOSTRO LA VARIABIE DISCOUNT
  if (discountTicket > 0) {
    discontPrice.classList.remove("d-none");
  }

  // DICHIARO IL PREZZO FINALE DEL BIGLIETTO
  const finalPrice = priceTicket - discountTicket;
  console.log(finalPrice);

  // STAMPO A SCHERMO IL COSTO DEL BIGLIETTO
  const outputPrice = (document.getElementById("final-ticket-price").innerHTML =
    "€" + finalPrice.toFixed(2));
  // STAMPO A SCHERMO LO SCONTO DEL BIGLIETTO
  const outputDiscount = (document.getElementById("ticket-discount").innerHTML =
    "€" + discountTicket.toFixed(2));
});
