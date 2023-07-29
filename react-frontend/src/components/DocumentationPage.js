import React from "react";
<<<<<<< HEAD
import "../styles.css";
=======
>>>>>>> upstream/main
import AOS from "aos";
import "aos/dist/aos.css";

function DocumentationPage() {
  AOS.init();
<<<<<<< HEAD
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100 pt-20 scroll-smooth">
        <div className="bg-white shadow-md p-8 w-4/5">></div>
        <div
          className="pl-[2%] font-mono text-black mb-2"
          data-aos-duration="800"
        >
          <h2
            className="text-5xl font-bold pt-[10%] mb-4"
            data-aos-delay="100"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            User Manual
          </h2>
          <p
            className="text-xl pl-[2%]"
            data-aos-delay="200"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            The API is accessed by sending a link to a website following Open
            Graph Protocol.
            <br />
            The API then returns the information retrieved by the Open Graph
            tags.
          </p>
          <h3
            className="text-2xl font-bold mt-4"
            data-aos-delay="100"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            Example:
          </h3>
          <div className="pl-[2%]">
            <h4
              className="text-xl mt-2"
              data-aos-delay="200"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              The user provides:
            </h4>
            <p
              className="italic pl-[2%]"
              data-aos-delay="300"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              https://www.apple.com/ae/shop/buy-iphone/iphone-14-pro/6.1-inch-display-256gb-gold
            </p>

            <h4
              className="text-xl mt-2"
              data-aos-delay="200"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              The API returns:
            </h4>
            <p
              className="italic pl-[2%]"
              data-aos-delay="300"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              Site Name <br />
              Title
              <br />
              Description
              <br />
              URL
              <br />
              Price
              <br />
              Product Image
              <br />
            </p>
          </div>

          <h2
            className="text-5xl font-bold pt-[4%] mb-4"
            data-aos-delay="100"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            Structure of the API call
          </h2>
          {/* I don't like how this section is worded. Feel free to change it */}
          <p
            className="text-xl pl-[2%]"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="150"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            The API receives a link that follows the Open Graph Procedure,
            containing Open Graph tags <br />
          </p>

          <h3
            className="text-2xl font-bold mt-4 mb-2"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="100"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            The API call:
          </h3>

          <div
            className="italic pl-[2%]"
            data-aos-delay="100"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            /scrape?url=&lt;URL&gt; <br />
            fetch(`http://127.0.0.1:5000/scrape?url=$&#123;encodeURIComponent(URL)&#125;`)
          </div>

          <h2
            className="text-5xl font-bold pt-[4%] mb-4"
            data-aos-delay="100"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            Structure of the API response
          </h2>
          <p
            className="text-xl pl-[2%]"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay="200"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            The API returns a JSON (structured as a list) as follows: <br />
          </p>
          <p
            className="pl-[4%] mb-5 italic"
            data-aos-delay="300"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            itemDescription: (str) <br />
            itemImage: (URL) <br />
            itemTitle: (str) <br />
            itemType: (str) <br />
            itemUrl: (URL) <br />
            itemPrice: (str) <br />
            siteName: (str) <br />
          </p>
=======

  return (
    <>
      <div className="mt-0 flex items-center justify-center min-h-screen bg-indigo-400">
        <div className="mx-10 my-20 grid grid-rows-1 grid-cols-3 gap-6 px-4 py-8">

          {/* What the API does? */}
          <div
            className="rounded-lg shadow-md p-4 bg-indigo-900 w-full text-white"
            style={{ boxShadow: "0 0 40px #5D3FD3, 0 0 80px #5D3FD3" }}
            data-aos="flip-left"
            data-aos-delay="100"
          >
            <h2 className="text-3xl font-bold mb-4 text-center">
              What the API does?
            </h2>
            <div className="text-lg">
              <p>
                The API is designed to interact with websites that follow the
                Open Graph Protocol. By using the link to a webpage, the API can
                extract the Open Graph tags from the webpage's meta tags, such
                as the title, description, image link, and many more. This saves
                developers from manually parsing HTML and enables them to
                quickly access structured data from different sources.
              </p>
            </div>
          </div>

          {/* API Parameter and Response */}
          <div
            className="rounded-lg shadow-md p-4 bg-indigo-900 w-full text-white"
            style={{ boxShadow: "0 0 40px #5D3FD3, 0 0 80px #5D3FD3" }}
            data-aos="flip-left"
            data-aos-delay="300"
          >
            <h2 className="text-3xl font-bold mb-4 text-center">
              API Parameter and Response
            </h2>
            <div className="text-lg">
              <p>
                <strong>Request Parameters:</strong>
              </p>
              <p>
                The URL of the webpage to be scraped must
                follow the Open Graph Procedure and contain relevant Open Graph
                meta tags.
              </p>
              <br></br>
              <p>
                <strong>Response Format:</strong>
              </p>
              <p>
                The API response is in JSON format and contains the content of the og tags extracted
                from the webpage's Open Graph tags.
              </p>
            </div>
          </div>

          {/* Few Data Fields Returned by API */}
          <div
            className="rounded-lg shadow-md p-4 bg-indigo-900 w-full text-white"
            style={{ boxShadow: "0 0 40px #5D3FD3, 0 0 80px #5D3FD3" }}
            data-aos="flip-left"
            data-aos-delay="200"
          >
            <h2 className="text-3xl font-bold mb-4 text-center">
              Few Data Fields Returned by API
            </h2>
            <div className="text-lg">
              <p>Some of the Open Graph fields extracted by the API includes:</p>
              <p className="pl-4 mb-5 italic">
                description: (str) <br />
                image: (URL) <br />
                title: (str) <br />
                type: (str) <br />
                url: (URL) <br />
                price: (str) <br />
                siteName: (str) <br />
              </p>
            </div>
          </div>

          {/* Sample API Usage */}
          <div
            className="rounded-lg shadow-md p-4 bg-indigo-900 w-full text-white"
            style={{ boxShadow: "0 0 40px #5D3FD3, 0 0 80px #5D3FD3" }}
            data-aos="flip-left"
            data-aos-delay="400"
          >
            <h2 className="text-3xl font-bold mb-4 text-center">
              Sample API Usage
            </h2>
            <div className="text-lg">
              <p>
                <strong>Example API Call:</strong>
              </p>
              
              <div className="text-sm"><code>{`GET /scrape?url=https://example.com`}</code></div>
              <br />
              <p>
                <strong>Example Response:</strong>
              </p>
              <div className="text-sm" style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word" }}>
                <code>
                  {`{
"title": "Example Website Heading",
"description": "This is sample description for the website url given.",
"image": "https://example.com/image1",
"author": "XYZ",
"url": "https://example.com"
}`} </code>
              </div>
              <p className="text-sm"> etc... </p>
            </div>
          </div>

          {/* JavaScript Code Snippet */}
          <div
            className="rounded-lg shadow-md p-4 bg-indigo-900 w-full text-white"
            style={{ boxShadow: "0 0 40px #5D3FD3, 0 0 80px #5D3FD3" }}
            data-aos="flip-left"
            data-aos-delay="500"
          >
            <h2 className="text-3xl font-bold mb-4 text-center">
              JavaScript Code using API
            </h2>
            <div
              className="text-white text-sm"
              style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word" }}
            >
              <code>
                {`const url = 'https://example.com';

fetch('https://....../scrape?url=' + encodeURIComponent(url))
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });`}
              </code>
            </div>
          </div>

          {/* Python Code Snippet */}
          <div
            className="rounded-lg shadow-md p-4 bg-indigo-900 w-full text-white"
            style={{ boxShadow: "0 0 40px #5D3FD3, 0 0 80px #5D3FD3" }}
            data-aos="flip-left"
            data-aos-delay="600"
          >
            <h2 className="text-3xl font-bold mb-4 text-center">
              Python Code using API
            </h2>
            <div
              className="text-white text-sm"
              style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word" }}
            >
              <code>
                {`import requests

url = 'https://example.com'
response = requests.get(f'https://...../scrape?url={url})

if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print('Error occurred:', response.text)`}
              </code>
            </div>
          </div>


>>>>>>> upstream/main
        </div>
      </div>
    </>
  );
}

export default DocumentationPage;
