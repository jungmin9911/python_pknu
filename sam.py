import requests as req
url = "https://finance.naver.com/sise/sise_market_sum.naver"
web = req.get(url)
html = web.text
f1 = html.find('삼성전자')
if __name__ == "__main__":
    print(html[f1:f1+100][19:50].replace('<td class="number">',"").replace('</td>',"").replace('\n',"").replace('\t',"")+"원")