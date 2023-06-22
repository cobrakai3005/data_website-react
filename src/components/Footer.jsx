import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-3 grid lg:grid-cols-3 text-gray-300 gap-8">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, eum.
        </p>
        <div className=" flex gap-8 my-5 md:w-[75%] justify-between">
          <FaDribbbleSquare size={30} />
          <FaFacebookSquare size={30} />
          <FaGithubSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-2">
        <div>
          <h6 className="font-md text-gray-400">Soultions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insight</li>
            <li></li>
          </ul>
        </div>
        <div>
          <h6 className="font-md text-gray-400">Supports</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guids</li>
            <li className="py-2 text-sm">API status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-md text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li>Carrers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-md text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claims</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
