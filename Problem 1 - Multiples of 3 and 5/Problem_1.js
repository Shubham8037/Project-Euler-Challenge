"use strict";

/*
If we list all the natural numbers below 10 that are
multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of
these multiples is 23. Find the sum of all the multiples
of 3 or 5 below the provided parameter value number
*/

function solLogic(multipleOf, actualRange) {

    // Range is updated since problem says numbers below 10000
    actualRange -= 1

    // Number or terms is calculated
    let number_of_terms = Math.floor(actualRange / multipleOf)

    // Formula for Finite Arithmetic Progression
    let sum_of_terms = (number_of_terms) * (number_of_terms + 1) / 2

    // Sum of series is returned by multiplying the multiple to calculate its sum
    return sum_of_terms * (multipleOf)
}


function sumOfMultiples(number) {

    // Calculates sum of terms up to the given range
    const sumOf3 = solLogic(3, number)
    const sumOf5 = solLogic(5, number)
    const sumOf15 = solLogic(15, number)

    // Multiple of 15 is duplicated so 1 multiple needs to be removed
    const final_value = sumOf3 + sumOf5 - sumOf15

    // Finally Sum is returned
    return final_value
}

console.log(sumOfMultiples(1000))