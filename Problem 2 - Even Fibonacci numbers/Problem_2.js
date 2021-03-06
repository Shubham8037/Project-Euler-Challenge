"use strict";

/*
Each new term in the Fibonacci sequence is generated by adding the
previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not
exceed four million, find the sum of the even-valued terms.
*/

function solLogic(actualRange) {

    // First term in Fibonacci Sequence
    let first_term = 1;

    let second_term = 1;
    // Sum of even terms will be stored here
    let sum_of_even_terms = 0;

    // This will be the even terms
    let even_term = first_term + second_term;

    // Loops saves sum of even terms up to the range
    while (even_term < actualRange) {

        sum_of_even_terms += even_term

        first_term = even_term + second_term
        second_term = first_term + even_term
        even_term = first_term + second_term
    }

    // Solution is returned
    return sum_of_even_terms
}


console.log(solLogic(4000000))