import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import { UserData } from "../types";

export function useSearch() {
  const { setUserData } = useContext(SearchContext);

  async function handleSearch(username: string) {
    // In case there's nothing to search for
    if (!username || !username.trim()) return;

    const res = await fetch(`https://api.github.com/users/${username}`);
    const data: UserData = await res.json();

    // The API retunrns a message in case the user does not exist
    if (data.message) return setUserData(null);

    setUserData(data);
  }

  return {
    handleSearch,
  };
}
