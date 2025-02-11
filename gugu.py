import sys
dan = sys.argv[1:]
for i in range(int(dan[0][:-1]),int(dan[0][:-1]) + int(dan[1])):
    print(i, "단========")
    for j in range(1,10):
        print(f"{i} x {j} = {i*j}")