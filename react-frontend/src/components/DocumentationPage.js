import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function DocumentationPage() {
  const [displayedCode, setDisplayedCode] = useState("javascript");
  AOS.init();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="mt-0 flex items-center justify-center min-h-screen">
        <div className="mx-10 my-20 grid grid-rows-1 gap-10 px-4 py-8">
          {/* What the API does */}
          <div
            className="rounded-lg shadow-md p-4 bg-indigo-950 w-full text-white"
            style={{ boxShadow: "0 0 20px #5D3FD3, 0 0 20px #5D3FD3" }}
            data-aos="flip-left"
            data-aos-offset="0"
            data-aos-delay="150"
          >
            <h2 className="text-3xl font-bold mb-4">Description</h2>
            <div className="text-xl">
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
            className="rounded-lg shadow-md p-4 bg-indigo-950 w-full text-white"
            style={{ boxShadow: "0 0 20px #5D3FD3, 0 0 20px #5D3FD3" }}
            data-aos="flip-left"
            data-aos-offset="0"
            data-aos-delay="150"
          >
            <h2 className="text-3xl font-bold mb-8 ">
              API Parameter and Response
            </h2>

            <div>
              <p className="text-2xl font-bold">Request Parameters:</p>
              <div className="flex flex-row mt-3">
                <p className="text-lg bg-gray-800 px-2 rounded-lg mr-3 font-bold">
                  url
                </p>
                <p className="text-lg px-2 text-orange-300 mr-3"> string </p>
                <p className="text-lg px-2 text-orange-700 mr-3"> Required </p>
              </div>
              <p className="text-md mt-2">
                {" "}
                - URL of the website to be scraped
              </p>
              <br></br>

              <p className="text-2xl font-bold">Response Schema:</p>
              <div className="flex flex-row mt-3">
                <p className="text-lg bg-gray-800 px-2 rounded-lg mr-3 font-bold">
                  title
                </p>
                <p className="text-lg px-2 text-orange-300 mr-3"> string </p>
              </div>
              <p className="text-md mt-2"> - title of the webiste </p>

              <div className="flex flex-row mt-3">
                <p className="text-lg bg-gray-800 px-2 rounded-lg mr-3 font-bold">
                  description
                </p>
                <p className=" text-lg px-2 text-orange-300 mr-3"> string </p>
              </div>
              <p className="text-md mt-2">
                - brief description of the website content
              </p>

              <div className="flex flex-row mt-3">
                <p className="text-lg bg-gray-800 px-2 rounded-lg mr-3 font-bold">
                  {" "}
                  url
                </p>
                <p className="text-lg px-2 text-orange-300 mr-3"> url </p>
              </div>
              <p className="text-md mt-2"> - website url </p>

              <div className="text-lg flex flex-row mt-3">
                <p className="text-lg bg-gray-800 px-2 rounded-lg mr-3 font-bold">
                  image
                </p>
                <p className="px-2 text-orange-300 mr-3"> url </p>
              </div>
              <p className="text-md mt-2">- image link from the website url</p>

              <div className="flex flex-row mt-3">
                <p className="text-lg bg-gray-800 px-2 rounded-lg mr-3 font-bold">
                  type{" "}
                </p>
                <p className="text-lg px-2 text-orange-300 mr-3"> string </p>
              </div>
              <p className="text-md mt-2"> - type of the website </p>

              <div className="flex flex-row mt-3">
                <p className="text-lg bg-gray-800 px-2 rounded-lg mr-3 font-bold">
                  price
                </p>
                <p className="text-lg px-2 text-orange-300 mr-3"> string </p>
              </div>
              <p className="text-md mt-2">
                - price of the product in the website url
              </p>

              <div className="flex flex-row mt-3">
                <p className="bg-gray-800 px-2 rounded-lg mr-3 font-bold">
                  siteName
                </p>
                <p className="px-2 text-orange-300 mr-3"> string </p>
              </div>
              <p className="text-md mt-2"> - name of the website</p>
            </div>
          </div>

          {/* API Call */}
          <div
            className="rounded-lg shadow-md p-4 bg-indigo-950 w-full text-white"
            style={{ boxShadow: "0 0 30px #5D3FD3, 0 0 30px #5D3FD3" }}
            data-aos="flip-left"
            data-aos-offset="0"
          >
            <div className="my-4 ml-2">
              <h2 className="text-3xl font-bold mb-4 "> API Call</h2>

              <div className="text-lg">
                <p className="mt-6 mb-4 text-xl font-bold">API Request:</p>

                <div className="flex flex-row text-md">
                  <code className="px-2 rounded-lg bg-blue-800">GET </code> 
                  <code className="text-white-300">&nbsp;https://webscraperapi.vercel.app/scrape?url=</code>
                  <code className="text-red-400"> https://example.com</code>
                </div>

                <br />

                <p className="my-4 text-xl font-bold">Sample Response:</p>
                <div
                  className="text-md"
                  style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word" }}
                >
                  <p>
                    &#123;
                    <div>
                      <code className="text-green-400"> "title": </code>
                      <code className="text-yellow-300">
                        "Example Website Heading",
                      </code>
                    </div>

                    <div>
                      <code className="text-green-400"> "description": </code>
                      <code className="text-yellow-300">
                        "This is sample description for the website url given.",
                      </code>
                    </div>

                    <div>
                      <code className="text-green-400"> "image": </code>
                      <code className="text-yellow-300">
                        "https://example.com/image1",
                      </code>
                    </div>

                    <div>
                      <code className="text-green-400"> "url": </code>
                      <code className="text-yellow-300">
                        "https://example.com",
                      </code>
                    </div>
                  </p>
                </div>
                <p className="mt-2 ml-10 text-xl">...</p>
                &#125;
              </div>
            </div>
          </div>

          {/* Code Snippet */}
          <div
            className="rounded-lg shadow-md bg-indigo-950 w-full text-white"
            style={{ boxShadow: "0 0 30px #5D3FD3, 0 0 30px #5D3FD3" }}
            data-aos="flip-left"
            data-aos-offset="0"
          >
            <div className="mt-4 ml-2 p-4">
              <h2 className="text-3xl font-bold mb-4"> Code Snippets </h2>
              <div className="my-6 space-x-4">
                <button
                  className={`p-2 rounded-lg font-bold ${
                    displayedCode === "javascript"
                      ? "bg-white text-indigo-600"
                      : "bg-indigo-600 text-white"
                  }`}
                  onClick={() => setDisplayedCode("javascript")}
                >
                  JavaScript
                </button>
                <button
                  className={`p-2 rounded-lg font-bold ${
                    displayedCode === "python"
                      ? "bg-white text-indigo-600"
                      : "bg-indigo-600 text-white"
                  }`}
                  onClick={() => setDisplayedCode("python")}
                >
                  Python
                </button>
              </div>
            </div>

            <div
              className="bg-black text-white text-md rounded-lg p-8 "
              style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word" }}
            >
              <code className="text-green-300">
                {displayedCode === "javascript" ? (
                  <>
                    {`const url = 'https://example.com';

fetch('https://webscraperapi.vercel.app/scrape?url=' + encodeURIComponent(url))
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });`}
                  </>
                ) : (
                  <>
                    {`import requests

url = 'https://example.com'
response = requests.get(f'https://webscraperapi.vercel.app/scrape?url={url}')

if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print('Error occurred:', response.text)`}
                  </>
                )}
              </code>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DocumentationPage;
