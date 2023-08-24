import turtle
import random

#left, right를 통해 각도 전환
#fd를 통해 전진
#colormode 를 통해 색 변경도 가능
#penup 을 통해 펜을 들은 효과, 이동 시 흔적 없음
#pendown 을 통해 펜을 내린 효과, 이동 시 흔적 있음
#circle(반지름, 각도)를 통해 반지름의 크기를 가진 원을 일정 각도만큼 그릴 수 있음



turtle.penup()
turtle.forward(-100)
turtle.pendown()
turtle.pendown()
turtle.pensize(20) #pensize를 통해 펜 크기 설정


def main():
    turtle.tracer(False)
    turtle.bgcolor("black")
    turtle.tracer(True)


def snow():
    pass

def ground():
    pass


