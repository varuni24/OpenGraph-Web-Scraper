import requests
from bs4 import BeautifulSoup

headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
}

def scrape_site(url):
    ogContent = {}

    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.content, 'html.parser')
    siteHead = soup.find('head')

    siteName = siteHead.find('meta', {'property': 'og:site_name'})
    itemTitle = siteHead.find('meta', {'property': 'og:title'})
    itemType = siteHead.find('meta', {'property': 'og:type'})
    itemImage = siteHead.find('meta', {'property': 'og:image'})
    itemImageHeight = siteHead.find('meta', {'property': 'og:image:height'})
    itemImageWidth = siteHead.find('meta', {'property': 'og:image:width'})
    itemDescription = siteHead.find('meta', {'property': 'og:description'})
    itemUrl = siteHead.find('meta', {'property': 'og:url'})
    itemPrice = siteHead.find('meta', {'property': 'og:price:amount'})
    itemCurrency = siteHead.find('meta', {'property': 'og:price:currency'})

    if not itemDescription:
        itemDescription = siteHead.find('meta', {'name': 'description'})
    if not itemUrl:
        itemUrl = url
    if not itemTitle:
        itemTitle = siteHead.find('title')

    try:
        if siteName:
            ogContent['siteName'] = siteName["content"]

        if itemTitle:
            try:
                ogContent['itemTitle'] = itemTitle["content"]
            except:
                ogContent['itemTitle'] = itemTitle.text

        if itemDescription:
            try:
                ogContent['itemDescription'] = itemDescription["content"]
            except:
                ogContent['itemDescription'] = itemDescription

        if itemUrl:
            try:
                ogContent['itemUrl'] = itemUrl["content"]  
            except:
                ogContent['itemUrl'] = itemUrl

        if itemPrice:
            ogContent['itemPrice'] = itemPrice["content"]
        if itemCurrency:
            ogContent['itemCurrency'] = itemCurrency["content"]
        if itemType:
            ogContent['itemType'] = itemType["content"]
        if itemImage:
            ogContent['itemImage'] = itemImage["content"]
        if itemImageHeight:
            ogContent['itemImageHeight'] = itemImageHeight["content"]
        if itemImageWidth:
            ogContent['itemImageWidth'] = itemImageWidth["content"]

        return ogContent

    except:
        return "Error: There was an error getting the OG tags from this site"

# search_query = 'https://www.apple.com/ae/shop/buy-iphone/iphone-14-pro/6.1-inch-display-256gb-gold'
# result = scrape_site(search_query)
# print(result)
