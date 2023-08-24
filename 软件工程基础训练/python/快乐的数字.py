#快乐的数字


n = list(map(int, input()))

global answer
answer = False


def kuaile(n):

    global answer

    a = 0

    for i in n:
        a += i**2
    
    if a == 1:
        answer = True
        print(answer)
        return

    else:
        m = list(map(int, str(a)))
        kuaile(m)


try:
    kuaile(n)

except:
    print(answer)





