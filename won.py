import requests
import json
url = 'https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=53yAHtSc6aBqKhkYRYdq2SAv7Bh6oCWK&data=AP01'
res = requests.get(url).text
data = json.loads(res)
#print(type(data))
result = data[-1]["deal_bas_r"]
#print(result, type(result))
#result2 = float(result.replace(",", ""))
print('='*40)
print(f'오늘의 환율은 1달러에 {result}원 입니다')
print('='*40)
# exc = int(result2)/10
# print(exc)