// Snack 1
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50


let array = [];
let sum = 0;

while (sum < 50) {

    let inputNumber = prompt("inserisci un numero")

    array.push(inputNumber);

    for (let i = 0; i < array.length; i++) {
        sum += Number(array[i]);
    }
    
    document.getElementById("arrayElements").innerText = "i numeri da te inseriti sono : " + array;
    document.getElementById("result").innerHTML = "la somma è: " + sum;


}



