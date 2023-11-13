"use strict"
// Variabile Html
const lista = document.querySelector(".lista");
console.log(lista);

// Array spesa
const spesa = [
    "pane",
    "latte",
    "uova",
    "pasta",
    "riso",
    "olio d'oliva",
    "pomodori",
    "carote",
    "patate",
    "cipolle",
    "aglio",
    "peperoni",
    "zucchine",
    "melanzane",
    "mele"
];
console.log(spesa)

// Variabile Corrente
let i = 0;

//ciclo while
while (i < spesa.length - 1) {
    console.log(`${i + 1} ${spesa[i].toLocaleUpperCase()}`);
    i++;
    const prodotto = document.createElement("li");
    prodotto.textContent = spesa[i];
    prodotto.addEventListener("click", function(){
        prodotto.classList.toggle("prodotto")
    })
    lista.append(prodotto);
}

