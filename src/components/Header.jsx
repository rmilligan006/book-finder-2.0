import React from "react";
import Navbar from "./Navbar";
import lib from "../images/library-reader.jpg";
import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <div className="shadow-xl">
      <header>
        <Navbar />
        <div className="max-w-[1640] mx-auto">
          <div className="max-h-[500px] relative">
            {/* Overlay */}
            <div className="absolute w-full h-full max-h-[500px] bg-green-700/70 flex flex-col justify-center text-center text-white shadow-xl">
              <h2 className="text-2xl sm:text-5xl font-semibold">
                Find your next book to love!
              </h2>
              <br />
              <p className=" mt-5 text-lg sm:text-2xl">
                Using BookFinder is the easiest way to search for your next
                book. Just enter a Title, or Author and click search!
              </p>
              <SearchForm />
            </div>

            <img
              src={lib}
              alt=" picture of food"
              className="w-full max-h-[500px] "
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
