# CSS : div.details > a.title

import time
import urllib.request
from bs4 import BeautifulSoup

url  = "https://play.google.com/store/apps/category/GAME/collection/topselling_free"
res = urllib.request.urlopen(url).read()
time.sleep(5)
soup = BeautifulSoup(res, 'html.parser')
results = soup.select('div.details > a.title')
parseResult = []
for result in results:
    parseResult.append(result.text)
print(parseResult)

import json
from collections import OrderedDict

file_data = OrderedDict()
file_data = {
    "game" : []
}
for a in parseResult:
    print(a)
    file_data["game"].append(a)

print(json.dumps(file_data, ensure_ascii=False, indent="\t"))

with open('googleGame.json', 'w', encoding="utf-8") as make_file:
    json.dump(file_data, make_file, ensure_ascii=False, indent="\t")

print('당일 parser 종료')


