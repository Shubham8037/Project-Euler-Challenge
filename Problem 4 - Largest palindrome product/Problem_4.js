"use strict";

/*
A palindromic number reads the same both ways. The largest palindrome
made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

function solLogic() {

    // largest_pali keeps updating whenever a new palindrome is found
    let largest_pali = 0

    // Takes the number and reverses it to check if it is palindrome
    const reversedNum = revnum => parseFloat(revnum.toString().split('').reverse().join(''))

    // Checking and saving the highest palindrome
    for (let first_multiple = 999; first_multiple > 100; first_multiple--) {
        for (let second_multiple = 999; second_multiple > 100; second_multiple--) {
            let number = first_multiple * second_multiple

            // Takes the number and reverses it to check if it is palindrome
            if (number == reversedNum(number)) {

                // Checks if this palindrome is higher than the last one
                if (number > largest_pali) {
                    largest_pali = number
                }
            }
        }
    }

    return largest_pali
}


console.log(solLogic())