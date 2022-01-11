import type { NextPage } from "next";
import ProfileBox from "../components/ProfileBox";
import SearchBar from "../components/SearchBar";
import TitleBar from "../components/TitleBar";

const Home: NextPage = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] px-4">
      <TitleBar />
      <SearchBar className="mt-8" />
      <ProfileBox className="mt-6" />
    </div>
  );
};

export default Home;
