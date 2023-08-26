

#두 소수의 곲
x = int(input())

n = int(input())

i = 2
y = 0

# answer = ["WHUT"]
# answer2 = []
z = 0

def prime(i):

    for x in range(2, int(i**0.5) + 1):
        if i % x == 0:
            return False
    
    return True


while True:


    if prime(i) == True:
        
        if x % i == 0:

            y = x // i

            if prime(y) == True:
                # answer.append(str(max(i, y)))
                # answer.append(str(min(i, y)))
                # answer2.append(str(max(i, y)))
                # answer2.append(str(min(i, y)))

                a = str(max(i, y))
                b = str(min(i, y))
                ans2 = a + b
                ans = "WHUT" + a + b

                break


    i += 1


# ans = "".join(answer)

print(ans)

#------------------------------

# ans2 = "".join(answer2)


for i in range(1, int(ans2) + 1):

    # for j in str(i):

    #     if str(n) == j :
    #         z += 1

    if str(i).find(str(n)) != -1:

        z += str(i).count(str(n))

print(z)



