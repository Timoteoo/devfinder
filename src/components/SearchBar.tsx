import { LabelHTMLAttributes, useRef } from "react";
import { useSearch } from "../hooks/useSearch";
import MagnifierIcon from "./icons/MagnifierIcon";
import SearchButton from "./SearchButton";

function SearchBar(props: LabelHTMLAttributes<HTMLLabelElement>) {
  const { handleSearch } = useSearch();
  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <label
      htmlFor="searchInput"
      className={`bg-blue-gray py-2 flex justify-between items-center 
      rounded-lg pl-6 pr-3 cursor-text ${props.className}`}
    >
      <MagnifierIcon />
      <input
        autoComplete="off"
        ref={searchInputRef}
        type="text"
        id="searchInput"
        placeholder="Search GitHub username..."
        className="w-full px-6 bg-transparent outline-none text-lg text-white placeholder:text-gray-300"
      />
      <SearchButton onClick={() => handleSearch(searchInputRef.current?.value ?? "")} />
    </label>
  );
}

export default SearchBar;
