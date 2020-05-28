#!/bin/python3

"""
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
"""


def solLogic(upper_limit):

    # Loop runs from a to 1000
    for a in range(1, upper_limit):
        # Loop runs from a+1 since a<b to 1000
        for b in range(a+1, upper_limit):
            # If a^2+b^2+((a^2+b^2)^0.5) is 1000 then answer is returned, we could use c but this is much faster
            if a+b+((a**2+b**2)**0.5) == upper_limit:
                print(a, b, upper_limit-a-b)
                return a*b*(upper_limit-a-b)


if __name__ == '__main__':
    print(solLogic(1000))
