const parola = prompt("Inserisci una parola per verificare se è palindroma")

function palindroma (){
    const parolaArray = parola.split('')
    const parolaContrario = parolaArray.reverse()

    if (parolaArray = parolaContrario){
        console.log("La parola è palindroma");
    }
    else{
        console.log("La parola non è palindroma");
    }
}

palindroma()