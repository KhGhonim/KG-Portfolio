"use client";

import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

export default function DarkMode({ theme, changeTheme }) {
  const [IsMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const element = document.documentElement;

    if (theme === "dark") {
      element.classList.remove("light");
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      element.classList.add("light");
      localStorage.setItem("theme", "light");
    }

    setIsMounted(true);
  }, [theme]);

  if (!IsMounted) {
    return null;
  }

  return (
    <div className="cursor-pointer" onClick={changeTheme}>
      {theme === "dark" ? <LuMoon size={24} /> : <LuSun  size={24} />}
    </div>
  );
}
