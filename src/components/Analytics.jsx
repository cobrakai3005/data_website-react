import React from "react";

function Analytics() {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-[1230px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto p-3 md:p-0"
          src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Laptop"
        />
        <div className="flex flex-col justify-center p-3">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-2xl font-bold py-4">
            Manage Data Analytics Centrally{" "}
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            debitis ipsum a hic. Modi, labore perspiciatis porro nemo ea optio
            minima dolorum eum expedita architecto velit odit quam error id.
          </p>

          <button className="bg-black  w-[200px] mx-auto py-3 text-[#00df9a]  rounded-md mt-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
