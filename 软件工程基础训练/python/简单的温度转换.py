
f = input()

try:
    f = float(f)

except:
    f = int(f, 16)
    pass

c = (f - 32) / 1.8



print(format(round(c, 2), ".2f"))





