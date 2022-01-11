import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SearchContextProvider } from "../contexts/SearchContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SearchContextProvider>
      <Component {...pageProps} />
    </SearchContextProvider>
  );
}

export default MyApp;
