// Chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
var kmViaggio = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
var etaViaggiatore = parseInt(prompt("Quanti anni hai?"));

/* Calcolare il prezzo totale del viaggio:
- prezzo del biglietto definito in base ai km (0.21 € al km)
- sconto del 20% per i minorenni
- sconto del 40% per gli over 65.

Output con prezzo finale massimo due decimali*/

var bigliettoIntero = (kmViaggio * 0.21).toFixed(2);

if (etaViaggiatore <= 18 || etaViaggiatore >= 65) {
  if (etaViaggiatore <= 18) {
    var scontoUnder = bigliettoIntero * 0.2;
    var prezzoScontatoUnder = (bigliettoIntero - scontoUnder).toFixed(2);
    console.log("Il prezzo del biglietto per percorrere " + kmViaggio + "km, con uno sconto del 20%, è: " + prezzoScontatoUnder + "€");
  } else {
    var scontoOver = bigliettoIntero * 0.4;
    var prezzoScontatoOver = (bigliettoIntero - scontoOver).toFixed(2);
    console.log("Il prezzo del biglietto per percorrere " + kmViaggio + "km, con uno sconto del 40%, è: " + prezzoScontatoOver + "€");
  }
} else {
  console.log("Il prezzo del biglietto intero, per percorrere " + kmViaggio + "km, è: " + bigliettoIntero + "€");
}



// debug
// console.log("kmViaggio: " + kmViaggio);
// console.log(kmViaggio);
// console.log("etaViaggiatore: " + etaViaggiatore);
// console.log(etaViaggiatore);
// console.log("bigliettoIntero: " + bigliettoIntero);
// console.log(bigliettoIntero);
// console.log("scontoUnder: " + scontoUnder);
// console.log(scontoUnder);
// console.log("prezzoScontatoUnder: " + prezzoScontatoUnder);
// console.log(prezzoScontatoUnder);
// console.log("scontoOver: " + scontoOver);
// console.log(scontoOver);
// console.log("prezzoScontatoOver: " + prezzoScontatoOver);
// console.log(prezzoScontatoOver);