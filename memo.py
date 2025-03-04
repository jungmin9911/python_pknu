# 메모장 만들기
# 메모 추가, 조회기능
# 메모 내용, 프로그램 실행 옵션 입력받기
# 텍스트 파일로 출력
import sys

option = sys.argv[1]

if option == '-a':
    memo = sys.argv[2]
    f = open('memo.txt','a')
    f.write(memo)
    f.write('\n')
    f.close
elif option == '-v':
    f = open('memo.txt')
    memo = f.read()
    f.close()
    print(memo)
