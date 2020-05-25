"use strict";

/*
The sum of the squares of the first ten natural numbers is,

1^2+2^2+...+10^2=385

The square of the sum of the first ten natural numbers is,

(1+2+...+10)^2=55^2=3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is

3025−385=2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

function solLogic(upper_limit) {

    let sum_of_square = 0
    let sum_of_natural = 0

    // Loop runs for the limit
    for (let number = 1; number <= upper_limit; number++) {
        // Each number is squared and added
        sum_of_square += number ** 2
        // Numbers are just added and squared later
        sum_of_natural += number
    }

    // Added numbers are squared here
    sum_of_natural **= 2
    // Difference of numbers is returned
    return sum_of_natural - sum_of_square

}


console.log(solLogic(100))