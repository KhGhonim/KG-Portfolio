"use client";
import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import DarkMode from "./DarkMode";
import { useState } from "react";
import Link from "next/link";

export default function Header({ ModalHandle }) {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.getItem("theme") : "light"
  );

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <header className="  absolute top-10 container left-1/2 -translate-x-1/2 rounded-full devHeader  w-80  md:w-full flex justify-between items-center  p-3 md:p-4 z-50 px-8">
      <div className="text-white text-xl font-bold ">
        <Link href="/Developer">
          {" "}
          <Image
            priority={true}
            src="/KGLogo.svg"
            alt="Khaled Ghonim Logo"
            width={50}
            height={50}
            className="object-cover max-sm:w-10 max-sm:h-10  bg-white rounded-xl hover:rotate-[30deg] scale-100 hover:scale-90 transition-all cursor-pointer duration-300"
          />
        </Link>
      </div>

      <div className="flex items-center space-x-4 ">
        {/* <DarkMode theme={theme} changeTheme={changeTheme} /> */}

        <div>
          <button
            onClick={ModalHandle}
            id="menu-toggle"
            className="bg-gray-800 rounded-3xl  p-2 "
          >
            <IoMdMenu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
