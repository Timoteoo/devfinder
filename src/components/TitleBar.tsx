import ToggleThemeButton from "./ToggleThemeButton";

function TitleBar() {
  return (
    <header className="dark:text-white text-slate-900 flex justify-between">
      <h1 className="text-2xl font-bold">devfinder</h1>
      <ToggleThemeButton />
    </header>
  );
}

export default TitleBar;
