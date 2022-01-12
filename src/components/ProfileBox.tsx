import Image from "next/image";
import GlobeIcon from "./icons/GlobeIcon";
import LinkIcon from "./icons/LinkIcon";
import LocationIcon from "./icons/LocationIcon";
import WorkBagIcon from "./icons/WorkBagIcon";
import { HTMLAttributes, useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";

function ProfileBox(props: HTMLAttributes<HTMLDivElement>) {
  const { userData } = useContext(SearchContext);

  if (!userData)
    return (
      <div
        className={`w-full dark:bg-blue-gray bg-white py-10 px-6 rounded-lg flex
      items-center justify-center mt-6 shadow-xl`}
      >
        <h1 className="dark:text-white text-slate-900 text-xl">Nothing here... yet</h1>
      </div>
    );

  return (
    <div
      className={`w-full dark:bg-blue-gray bg-white py-10 px-6 rounded-lg flex
      items-center justify-between shadow-xl ${props.className}`}
    >
      {/* Profile image side */}
      <div className="max-w-[20%] w-full relative -top-20">
        <div className="rounded-full overflow-hidden h-full">
          <Image
            src={userData.avatar_url}
            width={1000}
            height={1000}
            placeholder="blur"
            blurDataURL="/images/github-icon.png"
          />
        </div>
      </div>

      {/* Profile data side */}
      <div className="max-w-[80%] w-full flex flex-col dark:text-white text-slate-900 px-5">
        <div className="flex justify-between items-center w-full">
          <h1 className="font-bold text-xl tracking-wider">{userData.name}</h1>
          <p className="text-base">Joined 25 Jan 2011</p>
        </div>

        <p className="text-blue-600 text-base mt-1">@{userData.login}</p>

        <p className="text-gray-400 text-base mt-4">{userData.bio}</p>

        <div className="dark:bg-slate-800 bg-gray-100 py-4 rounded-lg mt-5 flex justify-around">
          <div>
            <small className="dark:text-gray-300 text-slate-900 text-lg">Repos</small>
            <p className="font-bold text-xl">{userData.public_repos}</p>
          </div>
          <div>
            <small className="dark:text-gray-300 text-slate-900 text-lg">Followers</small>
            <p className="font-bold text-xl">{userData.followers}</p>
          </div>
          <div>
            <small className="dark:text-gray-300 text-slate-900 text-lg">Following</small>
            <p className="font-bold text-xl">{userData.following}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 mt-8 gap-2">
          <div className="flex items-center">
            <LocationIcon />
            <p
              className={`ml-3 ${
                userData.location ? "dark:text-gray-300 text-gray-500" : "text-gray-400"
              }`}
            >
              {userData.location ?? "Not available"}
            </p>
          </div>
          <div className="flex items-center">
            <GlobeIcon />
            <p
              className={`ml-3 ${
                userData.twitter_username
                  ? "dark:text-gray-300 text-gray-500"
                  : "text-gray-400"
              }`}
            >
              {userData.twitter_username ?? "Not available"}
            </p>
          </div>
          <div className="flex items-center">
            <LinkIcon />
            <p
              className={`ml-3 ${
                userData.blog ? "dark:text-gray-300 text-gray-500" : "text-gray-400"
              }`}
            >
              {userData.blog ? userData.blog : "Not available"}
            </p>
          </div>
          <div className="flex items-center">
            <WorkBagIcon />
            <p
              className={`ml-3 ${
                userData.company ? "dark:text-gray-300 text-gray-500" : "text-gray-400"
              }`}
            >
              {userData.company ?? "Not available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileBox;
