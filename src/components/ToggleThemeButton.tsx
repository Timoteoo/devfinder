import SunIcon from "./icons/SunIcon";

function ToggleThemeButton() {
  return (
    <button className="flex items-center">
      <p className="mr-4 text-sm tracking-widest font-bold">LIGHT</p>
      <SunIcon />
    </button>
  );
}

export default ToggleThemeButton;
