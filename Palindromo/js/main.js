var parola = prompt("Inserisci una parola per verificare se è palindroma");

function palindroma(word) {
  var parolaArray = parola.split("");
  var parolaContrario = parolaArray.reverse();
  var ritornoParola = parolaContrario.join();

  if (ritornoParola == parola) {
    console.log("La parola è palindroma");
  } else {
    console.log("La parola non è palindroma");
  }
}

palindroma(parola);
