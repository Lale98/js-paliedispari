// 2 - Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
var primaScelta = 1;
var sceltaUtente;

do {
    if (primaScelta == 1) {
        sceltaUtente = prompt('pari o dispari ?').toLowerCase();
        primaScelta++;
    } else {
        sceltaUtente = prompt('Ho detto pari o dispari ?!').toLowerCase();
    }

} while (sceltaUtente != 'pari' && sceltaUtente !='dispari');
console.log('Utente ha scelto: ' + sceltaUtente);

function numeroRandom (min, max) {
    num = Math.floor(Math.random() * (max - min + 1) + min );
    return num;
}

var numeroPc = numeroRandom(1, 5);
console.log('numero del PC: ' + numeroPc);

var numeroUtente = 0;
var primaVolta = 1;

while (numeroUtente < 1 || numeroUtente > 5) {

    if (primaVolta == 1) {
        numeroUtente = parseInt(prompt('inserisci un numero tra 1 e 5'));
        primaVolta++;
    } else {
        numeroUtente = parseInt(prompt('ho detto un numero tra 1 e 5 !'));
    }
}
console.log('numero Utente: ' + numeroUtente);

var somma = numeroPc + numeroUtente;
console.log('la somma e: ' + somma);

function verificaPari (num) {
    return num % 2 == 0;
}

if (sceltaUtente == 'pari' && verificaPari(somma)) {
    alert('hai vinto');
    console.log('hai vinto');
} else if (sceltaUtente == 'dispari' && verificaPari(somma) == false) {
    alert('hai vinto');
    console.log('hai vinto');
} else {
    alert('hai perso');
    console.log('hai perso');
}


