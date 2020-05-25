#!/bin/python3

"""
The sum of the squares of the first ten natural numbers is,

1^2+2^2+...+10^2=385

The square of the sum of the first ten natural numbers is,

(1+2+...+10)^2=55^2=3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is

3025−385=2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
"""


def solLogic(upper_limit):

    sum_of_square = 0
    sum_of_natural = 0

    # Loop runs for the limit
    for number in (range(1, upper_limit+1)):
        # Each number is squared and added
        sum_of_square += number**2
        # Numbers are just added and squared later
        sum_of_natural += number

    # Added numbers are squared here
    sum_of_natural **= 2
    # Difference of numbers is returned
    return sum_of_natural-sum_of_square


if __name__ == '__main__':
    print(solLogic(100))
