import { createContext, useState } from "react";
import { SearchContextValues, UserData } from "../types";

interface SearchContextProviderProps {
  children: React.ReactNode;
}

export const SearchContext = createContext<SearchContextValues>(
  {} as SearchContextValues
);

export function SearchContextProvider({ children }: SearchContextProviderProps) {
  const [userData, setUserData] = useState<UserData | null>(null);

  return (
    <SearchContext.Provider value={{ userData, setUserData }}>
      {children}
    </SearchContext.Provider>
  );
}
