"use strict";

/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

function solLogic(number) {

    // 1 is factor of any number
    let highest_prime_factor = 1;

    // We start by checking with first prime number
    let primeCheck = 2;

    // Until number is 1 we keep checking for prime number
    while (number != 1) {

        if (number % primeCheck == 0) {
            number = number / primeCheck
            highest_prime_factor = primeCheck
        } else {
            primeCheck += 1
        }

    }

    // Checks if number received is not prime, if it is not then highest prime factor is returned
    if ((number != 1) && (highest_prime_factor == 1)) {
        return number
    } else {
        return highest_prime_factor
    }
}


console.log(solLogic(600851475143))