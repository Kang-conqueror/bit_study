

n = int(input())


answer = []

i = 10


def prime(i):


    for x in range(2, int(i**0.5) + 1):

        if i % x == 0:
            return False
    
    return True


def reverse(i):

    return str(i)[::-1]







while len(answer) < n*2:

    if prime(i) == True:
        r_i = reverse(i)

        if len(r_i) >= 2 and i != int(r_i) and prime(int(r_i)) == True:
            answer.append(i)
            answer.append(int(r_i))
            answer = list(set(answer))

    
    i += 1



answer.sort()

print(*answer[:n])

print(" ".join(map(str,answer[:n]))+" ")
