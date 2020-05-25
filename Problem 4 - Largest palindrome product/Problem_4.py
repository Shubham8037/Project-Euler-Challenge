#!/bin/python3

"""
A palindromic number reads the same both ways. The largest palindrome
made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
"""


def solLogic():

    # Stores a list of all Palindrome found
    listofpali = []

    # Checking and saving all the  into the array
    for first_multiple in range(999, 100, -1):
        for second_multiple in range(999, 100, -1):
            number = first_multiple*second_multiple

            # Takes the number and reverses it to check if it is palindrome
            if int("".join([char for char in str(number)][::-1])) == number:
                # If number is palindrome, we save it in array
                listofpali.append(number)

    # Sort the array and return the last value
    listofpali.sort()

    return listofpali[-1]


if __name__ == '__main__':
    print(solLogic())
