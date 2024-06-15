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