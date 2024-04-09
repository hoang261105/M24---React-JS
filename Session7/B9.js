"use strict";
function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i < Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
function arrPrime(number) {
    for (let i = 0; i < number.length; i++) {
        if (!isPrime(number[i])) {
            return false;
        }
    }
    return true;
}
const result = [3, 5, 7, 11, 13];
console.log(arrPrime(result));
