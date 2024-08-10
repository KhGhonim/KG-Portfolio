"use client";
import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import DarkMode from "./DarkMode";
import { useState } from "react";
import Link from "next/link";

export default function Header({ ModalHandle }) {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.getItem("theme") : "light",
  );

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <header className="devHeader container absolute left-1/2 top-10 z-50 flex w-80 -translate-x-1/2 items-center justify-between rounded-full p-3 px-8 md:w-full md:p-4">
      <div className="text-xl font-bold text-white">
        <Link href="/Developer">
          {" "}
          <Image
            priority={true}
            src="/KGLogo.svg"
            alt="Khaled Ghonim Logo"
            width={50}
            height={50}
            className="scale-100 cursor-pointer rounded-xl bg-white object-cover transition-all duration-300 hover:rotate-[30deg] hover:scale-90 max-sm:h-10 max-sm:w-10"
          />
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        {/* <DarkMode theme={theme} changeTheme={changeTheme} /> */}

        <div>
          <button
            onClick={ModalHandle}
            id="menu-toggle"
            className="rounded-3xl bg-gray-800 p-2"
          >
            <IoMdMenu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
