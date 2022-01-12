import { useEffect, useState } from "react";

export function useThemeSwitch() {
  var storedTheme;
  if (typeof window !== "undefined") storedTheme = window.localStorage.getItem("theme");

  const [theme, setTheme] = useState(storedTheme ?? "dark");

  function storeTheme(theme: string) {
    if (theme === "light") {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");

      return setTheme(theme);
    }

    window.localStorage.setItem("theme", "dark");
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");

    return setTheme(theme);
  }

  useEffect(() => {
    storeTheme(theme);
  }, [theme]);

  return {
    theme,
    setTheme,
  };
}
