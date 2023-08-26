



sentence = input()
answer = []


ls = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]



for x in sentence:

    if x == " ":

        answer.append(" ")
    
    else:
        answer.append(ls[ord(x.lower()) - 97])



print("".join(answer))







