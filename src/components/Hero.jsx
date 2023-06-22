import React from "react";
// import Typed from "react-typed";
import ReactTypingEffect from "react-typing-effect";

function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px]  h-screen mt-[-75px] mx-auto text-center flex flex-col justify-center ">
        <p
          className="text-[#00df9a] p-2
        font-bold"
        >
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          GROW WITH DATA.
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl">
            Fast, Felxible Financing, for{" "}
            <ReactTypingEffect
              className="md:text-5xl sm:text-4xl text-xl"
              speed={300}
              typingDelay={200}
              eraseDelay={200}
              text={["BTB", "BTC", "SASS"]}
            />
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold  text-gray-500 py-2">
          Monitor your data analytics to increase revenue for BTB, BTC & SASS
          platforms.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 px-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
