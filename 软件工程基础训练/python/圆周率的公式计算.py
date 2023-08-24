



a = 0

n = int(input())


c = 0
k = 0

try:
    while k <= n:

        c += (4/(8*k + 1) - (2/(8*k + 4)) - 1/(8*k + 5) - 1/(8*k + 6))/(16**k)
        k += 1
    print(round(c, 8))
except:

    print(round(c, 8))


