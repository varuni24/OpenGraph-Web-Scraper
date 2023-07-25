from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
from beautifulSoup import scrape_site

app = Flask(__name__)
CORS(app, origins='http://localhost:3000') 


def scrape_puppeteer(url):
    server_url = "http://localhost:5002/scrape"
    params = {"url": url}
    try:
        response = requests.get(server_url, params=params)
        return response.json()
    
    except Exception as e:
        return f"Error in Puppeteer: {e}"


def scrape_beautiful_soup(url):
    result = scrape_site(url)

    if isinstance(result, str):
        return {"Error in BeautifulSoup": result}  
    else:
        return result  


@app.route('/scrape', methods=['GET'])
def scrape_site_handler():
    url = request.args.get('url')
    result = scrape_puppeteer(url)  #try with puppeteer scrapper first

    if result == {}:   # if puppeteer fails, scrape using bs
        result = scrape_beautiful_soup(url)
        if result == {}:  #if bs fails, cant scrape the data!
            return jsonify(error=result), 500
        else:
            return jsonify(result), 200
        
    else:
        return jsonify(result), 200


if __name__ == '__main__':
    app.run(debug=True)
