import { ButtonHTMLAttributes } from "react";

function SearchButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`bg-light-blue py-3 px-5 text-white rounded-lg font-bold text-base transition-all hover:brightness-90 ${props.className}`}
      {...props}
    >
      Search
    </button>
  );
}

export default SearchButton;
