#!/bin/python3

""" 
If we list all the natural numbers below 10 that are
multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of
these multiples is 23. Find the sum of all the multiples
of 3 or 5 below the provided parameter value number
"""


def solLogic(multipleOf, actualRange):

    # Range is updated since problem says numbers below 10000
    actualRange -= 1

    # Number or terms is calculated
    number_of_terms = actualRange//multipleOf

    # Formula for Finite Arithmetic Progression
    sum_of_terms = (number_of_terms)*(number_of_terms+1)/2

    # Sum of series is returned by multiplying the multiple to calculate its sum
    return int(sum_of_terms*(multipleOf))


def sumOfMultiples(number):

    # Calculates sum of terms up to the given range
    sumOf3 = solLogic(3, number)
    sumOf5 = solLogic(5, number)
    sumOf15 = solLogic(15, number)

    # Multiple of 15 is duplicated so 1 multiple needs to be removed
    final_value = sumOf3+sumOf5-sumOf15

    # Finally Sum is returned
    return final_value


if __name__ == '__main__':
    print(sumOfMultiples(1000))
