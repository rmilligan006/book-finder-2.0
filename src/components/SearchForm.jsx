import React, { useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef("");
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("Jade War");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/book");
  };
  return (
    <div className="w-full">
      <form action="" className="p-12" onSubmit={handleSubmit}>
        <div className="flex items-center justify-center">
          <input
            type="text"
            className="p-6 w-[300px] text-black outline-none focus:shadow-2xl ease-in duration-300 rounded-l-3xl"
            placeholder="Search for your next book!"
            ref={searchText}
          />
          <div>
            <button
              type="submit"
              className="flex items-center bg-gray-700 p-8 rounded-r-xl hover:bg-black ease-out duration-500"
              onClick={handleSubmit}
            >
              <FaSearch size={20} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
