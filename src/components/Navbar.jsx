import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";


const Navbar = () => {
  return (
    <nav className="w-full p-7" id="navbar">
      <div className="w-full flex-col">
        <div className="flex w-full items-center justify-center">
          <Link to="/" className="flex w-20">
            <img src={Logo} alt="BookFinder Logo" />
          </Link>
          <p className="text-4xl flex items-center justify-between ml-5">
            BookFinder
          </p>
          <div className="ml-24">
            <ul className="flex items-end mt-2 ml-20 ">
              <li className="mr-5 hover:border-2 hover:border-green-600 ease-in duration-75 hover:bg-green-600 hover:text-white">
                <Link to="/book">Home</Link>
              </li>
              <li className="hover:border-green-600 ease-in duration-75 hover:bg-green-600 hover:text-white">
                <Link to="/About">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
