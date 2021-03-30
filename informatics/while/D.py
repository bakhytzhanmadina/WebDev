n = int(input())
b = 0
i = 1
while (i <= n):
    if (i == n):
        b = b + 1
    i = i * 2

if (b == 1):
    print('YES')
else:
    print('NO')