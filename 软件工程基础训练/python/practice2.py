import sys
from bisect import bisect_left, bisect_right


#bisect 모듈을 이용해 손쉽게 이분탐색 활용 가능,
#bisect_left 는 n의 index, bisect_right 는 n의 오른쪽 index를 가져온다.
import sys

#이분탐색 알고리즘 문제 

#N개의 정수 받기
n = int(sys.stdin.readline())

test = list(map(int, sys.stdin.readline().split(" ")))

#확인해야되는 숫자확인
m = int(sys.stdin.readline())

check = list(map(int, sys.stdin.readline().split(" ")))

#주어진 N개의 정수 오름차순 정렬
test.sort()


# a = [1, 1, 2, 2 ,3]
# l = bisect_left(a, 1)
# r = bisect_right(a, 1)
# print(l)
# print(r)
answer = []

for x in check:
    answer.append(bisect_right(test, x) - bisect_left(test, x))

print(*answer)


