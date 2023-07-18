# Scraper for shopify based sites and other low level sites, built to grab OG tags

import requests
from bs4 import BeautifulSoup

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.1234.5678 Safari/537.36",
}

def scrape_site(url):
    
    # Send a GET request to the search URL
    response = requests.get(url, headers=headers)

    # Create a BeautifulSoup object to parse the HTML content
    soup = BeautifulSoup(response.content, 'html.parser')

    # Using head tag of the site
    siteHead = soup.find('head')

    # Grabbing the main properties
    siteName = siteHead.find('meta', {'property': 'og:site_name'})
    itemTitle = siteHead.find('meta', {'property': 'og:title'})
    itemType = siteHead.find('meta', {'property': 'og:type'})
    itemImage = siteHead.find('meta', {'property': 'og:image'})
    itemDescription = siteHead.find('meta', {'property': 'og:description'})
    itemUrl = siteHead.find('meta', {'property': 'og:url'})
    itemPrice = siteHead.find('meta', {'property': 'og:price:amount'})
    itemCurrency = siteHead.find('meta', {'property': 'og:price:currency'})

    # Some potential work arounds
    if not itemDescription:
        itemDescription = siteHead.find('meta', {'name': 'description'})
    if not itemUrl:
        itemUrl = url
    if not itemTitle:
        itemTitle = siteHead.find('title')


    # Regular print statements 
    try:
        if siteName:
            print(f'Site Name: {siteName["content"]}')

        if itemTitle:
            try:
                print(f'Title: {itemTitle["content"]}')
            except:
                print(f'Title: {itemTitle.text}')

        if itemDescription:
            try:
                print(f'Description: {itemDescription["content"]}')
            except:
                print(f'Description: {itemDescription}')
        
        if itemPrice:
            print(f'Price: {itemPrice["content"]}')
        if itemCurrency:
            print(f'Currency: {itemCurrency["content"]}')        
        if itemType:
            print(f'Type: {itemType["content"]}')
        if itemImage:
            print(f'Image: {itemImage["content"]}')
        
        if itemUrl:
            try:
                print(f'URL: {itemUrl["content"]}')
            except:
                print(f'URL: {itemUrl}')

    except:
        print("There was an error getting the OG tags from this site")

    
    
    # Testing a different method using a dictionary

    # siteProperties = {
    #     "site_name": None,
    #     "title": None,
    #     "type": None,
    #     "image": None,
    #     "description": None,
    #     "url": None,
    #     "price:amount": None,
    #     "price:currency": None
    # }

    # for property in siteProperties:
    #     siteProperties[property] = siteHead.find('meta', {'property': f'og:{property}'})
    
    # for x, y in siteProperties.items():
    #     if y:
    #         print(x, ":", y["content"])



#Test
search_query = 'https://www.walmart.ca/en/ip/sony-mdr-xb550apb-on-ear-extra-bass-headphones-black/6000196928351'
scrape_site(search_query)