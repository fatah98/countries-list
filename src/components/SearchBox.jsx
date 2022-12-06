import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = ({ search, setSearch }) => {
  return (
    <div className="shadow-md px-2 py-4 rounded flex gap-3 items-center text-gray-400 dark:text-LightModeElements">
      <div className="">
        <FaSearch />
      </div>
      <input
        value={search}
        className="ring-0 focus:ring-0 flex-1 bg-transparent outline-none border-none py-0"
        type="search"
        placeholder="Search for a country..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
