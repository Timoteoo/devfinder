import { LabelHTMLAttributes, useContext, useRef } from "react";
import { SearchContext } from "../contexts/SearchContext";
import { UserData } from "../types";
import MagnifierIcon from "./icons/MagnifierIcon";
import SearchButton from "./SearchButton";

function SearchBar(props: LabelHTMLAttributes<HTMLLabelElement>) {
  const { setUserData } = useContext(SearchContext);
  const searchInputRef = useRef<HTMLInputElement>(null);

  async function handleSearch() {
    const username = searchInputRef.current?.value;

    // In case there's nothing to search for
    if (!username) return;

    const res = await fetch(`https://api.github.com/users/${username}`);
    const data: UserData = await res.json();

    // The API retunrns a message in case the user does not exist
    if (data.message) return setUserData(null);

    setUserData(data);
  }

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
      <SearchButton onClick={handleSearch} />
    </label>
  );
}

export default SearchBar;
