//
// Documentation for the API
//

export default function Documentation() {
  return (
    <div>
      <p>
        <h2>What the API does</h2>
        The API is accessed by sending a link to a website following Open Graph Protocol.
        The API then returns the information retrieved by the OG tags.
        <h3> Example:</h3>
        <h4>The user provides:</h4>
        https://www.apple.com/ae/shop/buy-iphone/iphone-14-pro/6.1-inch-display-256gb-gold
        <h4>The API returns:</h4>
        Site Name <br/>
        Title <br/>
        Description <br/>
        URL <br/>
        Price <br/>
        Product Image
        <h2>Structure of the API call</h2>
        {/* I don't like how this section is worded. Feel free to change it */}
        The API receives a link that follows the Open Graph Procedure, containing Open Graph tags <br/>
        <h3> The API call:</h3> 
        /scrape?url=&lt;URL&gt; <br/>
        fetch(`http://127.0.0.1:5000/scrape?url=$&#123;encodeURIComponent(URL)&#125;`)
        <h2>Structure of the API response</h2>

        The API returns a JSON (structured as a list) as follows: <br/>
        <br/>

        itemDescription: (str) <br/>
        itemImage: (URL) <br/>
        itemTitle: (str) <br/>
        itemType: (str) <br/>
        itemUrl: (URL) <br/>
        itemPrice: (str) <br/>
        siteName: (str) <br/>
      </p>
    </div>
  );
}


/* 
describe the structure of the api call

/scrape?url=<URL></URL>
fetch(`http://127.0.0.1:5000/scrape?url=${encodeURIComponent(URL)}`)

the API receives a link that follows the Open Graph Procedure, containing
Open Graph tags


describe the structure of the return call

the API returns a JSON structured as 

itemDescription: (str)
itemImage: (URL)
itemTitle: (str)
itemType: (str)
itemUrl: (URL)
itemPrice: (str)
siteName: (str)

*/


