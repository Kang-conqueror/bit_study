

n = int(input())


start = 0

answer = []



def up(start, n, steps):

  
    

    one_step = start + 1
    two_step = start + 2

    steps += 1


    if one_step < n :
        up(one_step, n, steps)

    else:
        answer.append(steps)
        return
    
    if two_step < n :
        up(two_step, n, steps)
    
    else:
        answer.append(steps)
        return



up(start, n, 0)

#print(answer)

print(len(answer))











