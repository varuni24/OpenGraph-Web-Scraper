import React from "react";
import "../styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router";

function HomePage() {
  AOS.init();
  const navigate = useNavigate();

  return (
    <>
      <div id="first_page" className="h-screen scroll-smooth">
        <h1 className="flex justify-center items-center mb-2 font-mono text-7xl text-black md:text-7xl font-bold pt-[25%]">
          Web Scraping,&nbsp;
          <br className="block md:hidden" />
          <span className="relative">
            <span className="h-20 pt-5 overflow-x-hidden whitespace-nowrap text-brand-accent text-white font-bold">
              Made Easy.
            </span>
            <span className="cursor absolute -bottom-1 left-0 -top-1 inline-block bg-indigo-400 w-full animate-type will-change"></span>
          </span>
        </h1>
        <div className="flex flex-nowrap justify-center items-center pt-5">
          <button className="scroll-smooth text-2xl font-serif text-white md:text-4xl hover-underline-animation-white">
            <a href="#second_page">Learn More</a>
          </button>
        </div>
      </div>

      <div id="second_page" className="h-screen g-indigo-400 scroll-smooth">
        <div className="flex items-center justify-center h-screen pt-20">
          <div
            className="bg-gray-800 shadow-md p-8 w-4/5 rounded-2xl"
            data-aos="zoom-in"
          >
            <h2
              className="flex justify-center items-center font-serif text-4xl text-white md:text-4xl font-bold pb-8"
              data-aos-delay="100"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              OpenGraph Tags, At Your Fingertips
            </h2>
            <div class="flex items-center justify-center pb-8">
              <img
                src="https://cdn.shopify.com/s/files/1/0533/2089/files/shopify-online-store.jpg?v=1624557750"
                class="h-auto w-4/5 border-black border-4"
                alt="shopify-website"
                data-aos-delay="200"
                data-aos="fade-up"
                data-aos-duration="800"
              />
            </div>
            <div class="flex items-center justify-center pb-8">
              <h3
                className="font-serif text-xl text-white text-center md:text-xl"
                data-aos-delay="300"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-offset="0"
              >
                Our API successfully scrapes Open Graph tags off of thousands of
                Shopify websites so that you don't have to. Built using Flask
                and Python's BeautifulSoup library, the OG tags are scraped and
                compiled from the target URL and is available just one simple
                API call away.
              </h3>
            </div>
            <div class="flex items-center justify-center">
              <div
                class="font-serif text-xl text-white font-bold text-center md:text-xl"
                data-aos-delay="300"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-offset="0"
              >
                &lt;&nbsp;
              </div>
              <button
                class="font-serif text-xl text-white font-bold text-center md:text-xl hover-underline-animation-white"
                data-aos-delay="300"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-offset="0"
                onClick={() => navigate("/documentation")}
              >
                Explore
              </button>
              <div
                class="font-serif text-xl text-white font-bold text-center md:text-xl"
                data-aos-delay="300"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-offset="0"
              >
                &nbsp;&gt;
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
