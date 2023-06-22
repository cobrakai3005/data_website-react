import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
function Navbar() {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="h-20 max-w-[1240px] mx-auto flex justify-between items-center text-white">
      <h1 className="text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
      <ul className="flex hidden  md:flex">
        <li className="p-3">Home</li>
        <li className="p-3">About</li>
        <li className="p-3">Company</li>
        <li className="p-3">Resources</li>
        <li className="p-3">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden mr-4">
        {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      {}
      <div
        className={
          !nav
            ? "fixed left-0 top-[9%] w-[60%] h-[100%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%] ease-in-out duration-500"
        }
      >
        <ul className="pt-12 uppercase p-4">
          <li className="p-5 border-b  border-gray-600">Home</li>
          <li className="p-5 border-b  border-gray-600">About</li>
          <li className="p-5 border-b  border-gray-600">Company</li>
          <li className="p-5 border-b  border-gray-600">Resources</li>
          <li className="p-3">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
