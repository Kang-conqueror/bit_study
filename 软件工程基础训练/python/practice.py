import sys
 

k, n =list(map(int, input().split(sep=" ")))


li = []

sum = 0

global answer 
answer = 0

for i in range(k):

    a = int(input())
    li.append(a)

    sum += a


left = 1

right = sum // n

mid = (left + right) // 2

#print(mid)

def binary_search(left, mid, right):

    global answer


    if left == mid or mid == right:
        # print("returnpoint")
        # print(left, mid, right)
        return

    
    m = 0

    for i in li:
        m += i // mid
    
    # print(m)

    if m >= n:

        if answer < mid:
            answer = mid
        
        # print("R")
        binary_search(mid + 1, (mid + 1 + right) // 2, right)
        

    elif m < n:
        # print("L")
        binary_search(left, (left + mid) // 2, mid)
        



binary_search(left, mid, right)

 


print(answer)





