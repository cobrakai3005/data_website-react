import React from "react";
import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";
function Cards() {
  return (
    <div className="w-full py-[10rem] bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={single}
            className="w-20 bg-white mx-auto mt-[-3rem]"
            alt=""
          />
          <h2 className="font-bold text-2xl text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold ">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-6 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-6">1 Granted User</p>
            <p className="py-2 border-b mx-6">Send up to 2GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 px-6 mx-auto py-3 text-black">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={double}
            className="w-20 bg-white mx-auto mt-[-3rem]"
            alt=""
          />
          <h2 className="font-bold text-2xl text-center py-8">Two User</h2>
          <p className="text-center text-4xl font-bold ">$449</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-6 mt-8">1TB Storage</p>
            <p className="py-2 border-b mx-6">5 Granted User</p>
            <p className="py-2 border-b mx-6">Send up to 100GB</p>
          </div>
          <button className="text-[#00df9a] w-[200px] rounded-md font-medium my-6 px-6 mx-auto py-3 bg-black">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={triple}
            className="w-20 bg-white mx-auto mt-[-3rem]"
            alt=""
          />
          <h2 className="font-bold text-2xl text-center py-8">Three User</h2>
          <p className="text-center text-4xl font-bold ">$849</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-6 mt-8">2TB GB Storage</p>
            <p className="py-2 border-b mx-6">4 Granted User</p>
            <p className="py-2 border-b mx-6">Send up to 200GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 px-6 mx-auto py-3 text-black">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
