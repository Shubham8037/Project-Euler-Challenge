"use strict";

/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

function solLogic(upper_limit) {

    // Starting number count from 2 to check each number if it is prime
    let number = 2
    let count = 0
    // Defining initial set of known prime numbers
    let prime_numbers = [2, 3, 5]

    // While loop runs till we find the prime number we looking for
    while (count != upper_limit) {

        // Loop runs for the length of the list
        for (let outer_loop = 0; outer_loop < prime_numbers.length; outer_loop++) {

            // If number is divisible by any of prime numbers then number is increased by one
            if (number % prime_numbers[outer_loop] == 0) {
                number += 1
                break
            }
            // If not divisible, number is added to the list of prime numbers
            if (outer_loop == prime_numbers.length - 1) {
                count += 1
                prime_numbers.push(number)
                break
            }
        }
    }

    return prime_numbers[upper_limit - 1]

}


console.log(solLogic(10001))