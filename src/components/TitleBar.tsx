import ChangeThemeButton from "./ChangeThemeButton";

function TitleBar() {
  return (
    <header className="flex justify-between">
      <h1 className="dark:text-white text-slate-900 text-2xl font-bold">devfinder</h1>
      <ChangeThemeButton />
    </header>
  );
}

export default TitleBar;
