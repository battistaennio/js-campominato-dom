//generatore numeri random
function randomNumber(minNum, maxNum) {
    let casualNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    return casualNumber; 
}

//il numero è pari o dispari?
function isEvenOrOdd(number) {
    return number % 2 === 0 ? "pari" : "dispari";
}

//crea un elemento HTML con una classe
function createElementWClass(tag, classToAdd) {
    const element = document.createElement(tag);
    element.classList.add(classToAdd);
    return element;
}

//genera un array con all'interno un numero da min a max, in numero generato è in ordine casuale e non può ripetersi
function arrayRandomNumbers (min, max) {
    const genArray = [];
    while (genArray.length < max) {
        let numRand = randomNumber(min, max);
        if(!genArray.includes(numRand)) {
            genArray.push(numRand);
        }
    }
    return genArray;
}