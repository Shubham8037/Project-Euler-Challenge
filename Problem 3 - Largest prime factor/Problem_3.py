#!/bin/python3

"""
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
"""


def solLogic(number):

    # 1 is factor of any number
    highest_prime_factor = 1

    # We start by checking with first prime number
    primeCheck = 2

    # Until number is 1 we keep checking for prime number
    while number != 1:

        if number % primeCheck == 0:
            number /= primeCheck
            highest_prime_factor = primeCheck
        else:
            primeCheck += 1

    # Checks if number received is not prime, if it is not then highest prime factor is returned
    if number != 1 and highest_prime_factor == 1:
        return number
    else:
        return highest_prime_factor


if __name__ == '__main__':
    print(solLogic(600851475143))
