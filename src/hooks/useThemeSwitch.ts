import { useEffect, useState } from "react";

export function useThemeSwitch() {
  const [theme, setTheme] = useState("");

  function changeTheme() {
    setTheme(() => {
      return theme === "dark" ? "light" : "dark";
    });
  }

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");

    if (savedTheme) return setTheme(savedTheme);

    // In case it's the first time the user opened the website,
    // we set a default theme, which is dark.
    setTheme("dark");
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      window.localStorage.setItem("theme", theme);
    }

    if (theme === "dark") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return {
    theme,
    changeTheme,
  };
}
