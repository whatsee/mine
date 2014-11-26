__author__ = 'Егор'

# Работа с выводом

print('Hello!')

# Работа с float

print(3.1542 ** 2)

# Работа с импортируемые библиотеками

import math
print(math.pi)
print(math.sqrt(25))
import random
print(random.random())
print(random.choice([1,2,3,4,5,6,7,8,9,10]))

# Работа со строками + индексация + "нарезки"

S = 'Spam'
print(len(S))
print(S[-1])
print(S * 3)

# S[0] = 'z'
# тут будет ошибка из-за того что нельзя переписать значение в imutable objects
S = 'z' + S[1:]
print(S)

