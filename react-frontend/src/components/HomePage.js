import React from "react";
import "../styles.css";

function HomePage() {
  return (
    <>
      <div id="first page" className="h-screen">
        <h1 className="flex justify-center items-center mb-2 font-mono text-7xl text-black md:text-7xl font-bold pt-[25%]">
          Web Scraping, <br className="block md:hidden" />
          <span className="relative">
            <span className="h-20 pt-5 overflow-x-hidden whitespace-nowrap text-brand-accent text-white font-bold">
              &nbsp;Made Easy.
            </span>
            <span className="cursor absolute -bottom-1 left-0 -top-1 inline-block bg-indigo-400 w-full animate-type will-change"></span>
          </span>
        </h1>
        <div className="flex flex-nowrap justify-center items-center pt-5">
          <button className="text-2xl text-white md:text-4xl hover-underline-animation">
            Learn More.
          </button>
        </div>
      </div>
      <div id="second page" className="h-screen bg-white"></div>
    </>
  );
}

export default HomePage;
