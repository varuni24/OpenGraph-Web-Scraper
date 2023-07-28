import React from 'react'
import "../styles.css";
import AOS from 'aos';
import 'aos/dist/aos.css';


function DocumentationPage() {
    AOS.init();
    return (
      <>
      
      <div className="h-screen pl-[2%] font-mono text-black mb-2">
            <h2 className="text-5xl font-bold pt-[4%] mb-4" data-aos-delay="100" data-aos="fade-right" data-aos-duration="800">
            What the API does
            </h2>
            <p className="text-xl pl-[2%]" data-aos-delay="200" data-aos="fade-right" data-aos-duration="800">
            The API is accessed by sending a link to a website following Open Graph Protocol.<br/>
            The API then returns the information retrieved by the Open Graph tags.
            </p>
            <h3 className="text-2xl font-bold mt-4" data-aos-delay="100" data-aos="fade-right" data-aos-duration="800">
              Example:
              </h3>
            <div className="pl-[2%]">

              <h4 className="italic text-xl mt-2" data-aos-delay="200" data-aos="fade-right" data-aos-duration="800">
                The user provides:
                </h4>
              <p className=" pl-[2%]" data-aos-delay="300" data-aos="fade-right" data-aos-duration="800">
              https://www.apple.com/ae/shop/buy-iphone/iphone-14-pro/6.1-inch-display-256gb-gold
              </p>

              <h4 className="italic text-xl mt-2" data-aos-delay="200" data-aos="fade-right" data-aos-duration="800">
                The API returns:
                </h4>
              <p className=" pl-[2%]" data-aos-delay="300" data-aos="fade-right" data-aos-duration="800">
                  Site Name <br/>
                  Title<br/>
                  Description<br/>
                  URL<br/>
                  Price<br/>
                  Product Image<br/>
                </p>

              </div>

            <h2 className="text-5xl font-bold pt-[4%] mb-4" data-aos-delay="100" data-aos="fade-right" data-aos-duration="800">
              Structure of the API call
              </h2>
            {/* I don't like how this section is worded. Feel free to change it */}
            <p className="text-xl pl-[2%]" data-aos-anchor-placement="center-bottom" data-aos-delay="150" data-aos="fade-right" data-aos-duration="800">
            The API receives a link that follows the Open Graph Procedure, containing Open Graph tags <br/>
            </p>
            
            <h3 className="text-2xl font-bold mt-4 mb-2" data-aos-anchor-placement="center-bottom" data-aos-delay="100" data-aos="fade-right" data-aos-duration="800">
              The API call:
              </h3> 

            {/*  past this is incomplete*/}

            <div className="pl-[2%]">
              /scrape?url=&lt;URL&gt; <br/>
            fetch(`http://127.0.0.1:5000/scrape?url=$&#123;encodeURIComponent(URL)&#125;`)
            </div>

            <h2 className="text-5xl font-bold pt-[4%] mb-4">
              Structure of the API response
            </h2>

            The API returns a JSON (structured as a list) as follows: <br/>
            <br/>
    
            itemDescription: (str) <br/>
            itemImage: (URL) <br/>
            itemTitle: (str) <br/>
            itemType: (str) <br/>
            itemUrl: (URL) <br/>
            itemPrice: (str) <br/>
            siteName: (str) <br/>
        </div>
      </>
    );
}

export default DocumentationPage


