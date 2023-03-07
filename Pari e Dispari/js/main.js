const pariDispari = prompt("Scegli se pari o dispari");
const primoNumero = parseInt(prompt("Inserisci un numero da 1 a 5"));
const numeroRandom = parseInt(Math.floor(Math.random() * 5) + 1);

const somma = primoNumero + numeroRandom;

console.log(somma);

function risultato(numero) {
  console.log(numero);

  if (numero % 2 == 0) {
    return "pari";
  } else {
    return "dispari";
  }
}

let mioRisultato = risultato(somma);

if (mioRisultato == pariDispari) {
  console.log("Hai vinto");
} else {
  console.log("Ha vinto il pc");
}
