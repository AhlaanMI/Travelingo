import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="flex items-center bg-white rounded-full px-5 py-2 shadow-sm w-full max-w-xs ml-auto">
      <FaSearch className="text-gray-400 mr-2" />
      <input
        type="text"
        placeholder="Search direction"
        className="outline-none bg-transparent flex-1 text-gray-700 text-base"
      />
    </div>
  );
}

export default SearchBar;
