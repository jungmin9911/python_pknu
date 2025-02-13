import requests as req
import sys
url = "https://finance.naver.com/sise/sise_market_sum.naver"
web = req.get(url)
html = web.text
jongmok = sys.argv

def sam2(jongmok):
    f1 = html.find(jongmok)
    num = html[f1:f1 + 100].find('<td class="number">')
    return(html[f1:f1+100][num:50].replace('<td class="number">',"").replace('</td>',"").replace('\n',"").replace('\t',"")+"원")

if __name__ == "__main__":
    print(jongmok[1])
    print(sam2(jongmok[1]))
