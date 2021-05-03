// 1 - Palindroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


function parolaAlContrario(parola) {
    var parolaAlContrario = "";
    for (var i = parola.length - 1; i >= 0; i--) {
        parolaAlContrario += parola[i];
    }
    return parolaAlContrario;
}

var parolaUtente = prompt('inserisci una parola');

if (parolaUtente == parolaAlContrario(parolaUtente)) {
    alert('la parola è Palindroma')
} else {
    alert('la parola non è Palindroma')

}