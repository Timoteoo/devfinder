import { useThemeSwitch } from "../hooks/useThemeSwitch";
import SunIcon from "./icons/SunIcon";

function ToggleThemeButton() {
  const { setTheme, theme } = useThemeSwitch();

  function handleClick() {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }

  return (
    <button className="flex items-center" onClick={handleClick}>
      <p className="mr-4 text-sm tracking-widest font-bold">LIGHT</p>
      <SunIcon />
    </button>
  );
}

export default ToggleThemeButton;
