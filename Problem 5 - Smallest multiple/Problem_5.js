"use strict";

/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

function solLogic(upper_limit) {

    let number = 1

    // This loop returns a number that is divisible by first 20 numbers
    for (let outer_loop = 1; outer_loop <= upper_limit; outer_loop++) {

        if (number % outer_loop != 0) {

            //If number is not divisible we try a combination of multiples to find least divisible number
            for (let inner_loop = 1; inner_loop <= upper_limit; inner_loop++) {

                if ((number * inner_loop) % outer_loop == 0) {

                    //Update the number with with least multiple
                    number *= inner_loop
                    break
                }
            }
        }
    }

    return number
}


console.log(solLogic(20))