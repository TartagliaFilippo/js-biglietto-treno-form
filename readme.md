# CALCOLO BIGLIETTO TRENO

## TRACCIA

Descrizione:
Scrivere un programma che chieda all'utente:

- Il numero di chilometri da percorrere
- Età del passeggero
  Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

- MILESTONE 1:
  Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch'essa da scrivere in console.
- MILESTONE 2:
  Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l'utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
  Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

## ESECUZIONE TEORICA

- chiedo all'utente di inserire

  - lunghezza del viaggio
  - età del passeggero

- dichiaro il tarifarrio fisso per km (0.21)

- dichiaro una variabile sconto

- inserisco l'operazione che mi calcolerà il prezzo effettivo del biglietto

- inserisco 2 sconti **SE** l'età del passeggero lo rende possibile e lo sottraggo al prezzo effettivo
  - -20% ai minorenni
  - -40% over65
- **SE** lo sconto applicato è > 0

  - scrivo il prezzo dello sconto

- inserico 3 input dove vado a dichiarare

  - nome e cognome
  - kilometraggio
  - età (minorenne,maggiorenne o over65)

- inserico 2 bottoni

  - uno che "invia" gli input
  - uno "pulirà" gli input

- inserisco una copia virtuale del biglietto dove vedo il nome,prezzo e sconto effettivo del mio biglietto.

- collego gli input con gli output
