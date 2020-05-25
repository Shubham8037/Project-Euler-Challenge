#!/bin/python3

"""
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
"""


# Check if number is prime or not
def prime_check(number):
    if number == 2:
        return True
    for pointer in range(2, int(number ** 0.5) + 1):
        if number % pointer == 0:
            return False
    return True


def solLogic(upper_limit):

    # Count is set to 1 because of 2
    count = 1
    # Checks if number is prime or not
    is_prime = 3
    # Until we find our prime number, loop runs
    while count < upper_limit:
        # If number is prime, count is increased
        if prime_check(is_prime):
            count += 1
        # When we find our prime number, we break off loop
        if count == upper_limit:
            break
        # Skips multiples of 2
        is_prime += 2

    return is_prime


if __name__ == '__main__':
    print(solLogic(10001))
