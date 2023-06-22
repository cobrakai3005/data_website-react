import React from "react";

function NewsLetter() {
  return (
    <div className="w-full py-16 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className=" p-3 lg:col-span-2">
          <h1 className="md:text-5xl sm:text-4xl  text-xl font-bold py-2">
            Wants tips & tricks to optimize your flow ?{" "}
          </h1>
          <p>Sign up to our Newsletter and stay up to date</p>
        </div>
        <div className="my-2">
          <div className="p-4 flex flex-col md:flex-row items-center justify-between w-full md:mt-4">
            <input
              className="p-3 w-full rounded-md text-black focus:outline-none"
              type="text"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] w-[200px] mx-auto font-medium my-6 px-6  py-3 ml-3 rounded-md text-black">
              Notify Me?
            </button>
          </div>
          <p>
            We care about your data.Read our{" "}
            <span className="text-[#00df9a]">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
