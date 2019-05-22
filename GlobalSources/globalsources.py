import re
import requests
from urllib.parse import urljoin, quote_plus

session = requests.session()
base_url = "https://www.globalsources.com/"
headers = {
	'User-Agent':
		'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'
}
search_params = "?point_search=on&page=search%2FSupplierSearchResults&product_search=off&supplier_search=on&" \
				"article_search=off&apclick=&qType=SUPPLIER&type=new&query=shanghai&language=en&point_id" \
				"=3000000149681&catalog_id=2000000003844&from=&loc=t&AGG=N&KWSearchType=SuppSearch&action" \
				"=GetPoint&action=DoFreeTextSearch&querytype=RecentKW&source=GSOLHP_PopularRecentSearch"

url = 'https://www.globalsources.com/gsol/GeneralManager' + search_params
res = session.get(url, headers=headers, verify=False)
print(res.text)

url1 = urljoin(base_url, re.findall('<script type="text/javascript" src="(.*?)" defer><', res.text)[0])
res2 = session.get(url1, headers=headers)

# 浏览器指纹
finger = requests.get("http://127.0.0.1:3000/").text
url3 = "https://www.globalsources.com" + re.findall("path:\"(/rqrykqponpylgsip.*?.js\?PID=.*?)\"", res2.text)[0]
headers['Referer'] = url1
payload = {
	'p': finger
}
res3 = session.post(url3, headers=headers, data=payload)

# UID
UID = res3.headers.get('X-UID')
print(UID)

# httpRefer = encodeUriComment(pathname + search_params) + &uid=uid
pathname = "/gsol/GeneralManager"

httpRefer = "https://www.globalsources.com/distil_identify_cookie.html?httpReferrer='" + quote_plus(
	pathname + search_params) + "&uid={}".format(UID)
res4 = session.get(httpRefer, headers=headers)
print(res4.text)
