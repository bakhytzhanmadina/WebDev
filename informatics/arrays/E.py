n = int(input())
numbers = input().split(' ')
bool pair = False

for i in range(1, n):
    if (int(numbers[i]) > 0 and int(numbers[i-1]) > 0) or (int(numbers[i]) < 0 and int(numbers[i-1]) < 0):
        pair = True
        break

if(pair):
    print('YES')
else:
    print('NO')  