// Snack 3
// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. 
// (Se iniziate con un array da 3 elementi e l'altro da 5, eseguite istruzioni sinchè non ne hanno entrambi 5


let arrayShort = [1, 2, 3, 4]
let arrayLong = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

let number;

while (arrayShort.length < arrayLong.length) {
   number = prompt("inserisci un numero")
   arrayShort.push(number);
}

document.getElementById("firstarray").innerHTML = arrayShort;
document.getElementById("secondarray").innerHTML = arrayLong;