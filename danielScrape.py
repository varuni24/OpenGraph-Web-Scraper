from selenium.webdriver import Chrome, ChromeOptions
from selenium.webdriver.common.by import By

def get_data (url)->list:
    browser_options = ChromeOptions()
    #browser_options.headless = True

    driver = Chrome(options=browser_options)
    driver.get(url)

    items = driver.find_elements(By.CSS_SELECTOR,".info")
    data = []
    for item in items:
        title = item.find_element(By.CSS_SELECTOR, "a")
        price = item.find_element(By.CSS_SELECTOR,".price")

        object_item = {
            'title':title.get_attribute("title "),
            'price':price.text
        }
        data.append(object_item)
    
    driver.quit()
    return data

def main():
    data = get_data("https://www.kijiji.ca/b-ontario/iphone-11/k0l9004")
    print(data)

if __name__ == '__main__':
    main()