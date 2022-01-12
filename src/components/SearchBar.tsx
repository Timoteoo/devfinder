import { LabelHTMLAttributes, useRef } from "react";
import { useSearch } from "../hooks/useSearch";
import SearchButton from "./SearchButton";
import { SearchOutline } from "@graywolfai/react-heroicons";

function SearchBar(props: LabelHTMLAttributes<HTMLLabelElement>) {
  const { handleSearch } = useSearch();
  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <label
      htmlFor="searchInput"
      className={`dark:bg-blue-gray bg-white shadow-xl py-2 flex justify-between items-center 
      rounded-lg pl-6 pr-3 cursor-text ${props.className}`}
    >
      <SearchOutline width={30} color="#225291" />
      <input
        autoComplete="off"
        ref={searchInputRef}
        type="text"
        id="searchInput"
        placeholder="Search GitHub username..."
        className="w-full px-6 bg-transparent outline-none text-lg dark:text-white text-slate-900 placeholder:text-gray-300"
      />
      <SearchButton onClick={() => handleSearch(searchInputRef.current?.value ?? "")} />
    </label>
  );
}

export default SearchBar;
