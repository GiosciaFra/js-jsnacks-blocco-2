// Snack 2
// Genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero. 
// Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure "il numero è troppo basso" nel momento in cui il numero detto dall'utente non è perfettamente uguale al numero estratto in modo casuale.
// Quando l'utente trova il numero, fateglielo sapere!


const randomNumber = Math.floor(Math.random() * 100) +1;

let guessedIt;

while (guessedIt != randomNumber) {
    guessedIt = Number(prompt("Indovina il numero da (da 1 a 100): "));

    if (guessedIt == randomNumber) {
        document.getElementById("result").innerHTML = "Grande! Hai indovinato il numero " + randomNumber;
    } else if (guessedIt < randomNumber) {
         alert ("il numero è troppo basso! Riprova.");

    } else if (guessedIt > randomNumber) {
        alert ("il numero è troppo alto! Riprova.")
    }
}


