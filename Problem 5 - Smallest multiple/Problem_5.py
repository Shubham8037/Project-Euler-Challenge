#!/bin/python3

"""
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
"""


def solLogic(upper_limit):

    number = 1

    lower_limit = 1

    # Checks if the number is divisible by what is in the range
    while(lower_limit <= upper_limit):

        # If the number is divisible, loop continues to check for rest of the rest of the numbers
        if (number % lower_limit == 0):
            lower_limit += 1
        # Else number is increased by 1 and while loop runs again
        else:
            number += 1
            lower_limit = 1

    return number


if __name__ == '__main__':
    print(solLogic(20))
