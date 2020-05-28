"use strict";

/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

function solLogic(upper_limit) {

    // Loop runs from a to 1000
    for (let a = 1; a < upper_limit; a += 1) {
        // Loop runs from a+1 since a<b to 1000
        for (let b = a + 1; b < upper_limit; b += 1) {
            // If a^2+b^2+((a^2+b^2)^0.5) is 1000 then answer is returned, we could use c but this is much faster
            if (a + b + ((a ** 2 + b ** 2) ** 0.5) == upper_limit) {
                console.log(a, b, upper_limit - a - b)
                return a * b * (upper_limit - a - b)
            }
        }
    }

}


console.log(solLogic(1000))