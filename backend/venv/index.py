from flask import Flask, jsonify, request
from flask_cors import CORS
from scraper import scrape_site


app = Flask(__name__)
CORS(app, origins='https://open-graph-web-scraper.vercel.app')

@app.route('/scrape', methods=['GET'])
def scrape_site_handler():
    url = request.args.get('url')
    result = scrape_site(url)

    if isinstance(result, str):
        return jsonify(error=result), 500
    else:
        print(result)
        return jsonify(result), 200

if __name__ == '__main__':
    app.run(debug=True)
