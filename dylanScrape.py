# Scraper for shopify based sites and other low level sites, built to grab OG tags

import requests
from bs4 import BeautifulSoup


def scrape_site(url):
    
    # Send a GET request to the search URL
    response = requests.get(url)

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

    if siteName:
        print(f'Site Name: {siteName["content"]}')

    try:
        if itemTitle:
            print(f'Title: {itemTitle["content"]}')
    except:
        if itemTitle:
            print(f'Title: {itemTitle.text}')

    if itemDescription:
        print(f'Description: {itemDescription["content"]}')
    if itemPrice:
        print(f'Price: {itemPrice["content"]}')
    if itemCurrency:
        print(f'Currency: {itemCurrency["content"]}')        
    if itemType:
        print(f'Type: {itemType["content"]}')
    if itemImage:
        print(f'Image: {itemImage["content"]}')
    
    try:
        if itemUrl:
            print(f'URL: {itemUrl["content"]}')
    except:
        if itemUrl:
            print(f'URL: {itemUrl}')

    
    
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
search_query = 'https://www.adoredvintage.com/collections/dresses/products/sweet-romantic-vintage-inspired-ivory-floral-lace-lace-up-midi-dress'
scrape_site(search_query)