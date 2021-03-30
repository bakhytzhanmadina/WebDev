import math
import random

def solve(s):
    a = s.split(" ")
    for i in range(0, len(a)):
        a[i] = a[i].capitalize()

    return " ".join(a)

s = input()
result = solve(s)
print(result + '\n')

   