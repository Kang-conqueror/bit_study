#重复元素判定

#map을 줄이고, strip 대신 replace 통과??
#strip과 replace는 극단적 시간 차이는 없다고 알고있는데..
# a = list(map(int, input().lstrip("[").rstrip("]").split(sep=", ")))
a = input().replace("[", "").replace("]", "").split(sep=", ")
b = set(a)

if len(a) == len(b):
    print(False)

else:
    print(True)



