"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [WebState, setWebState] = useState(true);

  // {Change Between True and False}
  const WebStateHandle = () => {
    setWebState((prev) => !prev);
  };
  return (
    <div>
      {/* Pc Header */}
      <header className=" hidden md:flex items-center justify-between p-4 z-20">
        <div className="flex items-center">
          <div className="w-16 h-16 border-2 border-red-500 rounded-full flex items-center justify-center cursor-pointer  hover:bg-red-500 ">
            <Link
              className="text-red-500 font-semibold flex  hover:text-gray-50 p-4"
              href={"/"}
            >
              K <span className="drop-animate ">G</span>
            </Link>
          </div>
        </div>
        <nav className="flex space-x-8 font-medium">
          <Link href="#" className="relative group">
            <span className="relative z-10">Home</span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
          </Link>
          <Link href="#" className="relative group">
            <span className="relative z-10">Resume</span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
          </Link>
          <Link href="#" className="relative group">
            <span className="relative z-10">Projects</span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
          </Link>
          <Link href="#" className="relative group">
            <span className="relative z-10">Services</span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
          </Link>
          <Link href="#" className="relative group">
            <span className="relative z-10">Contact</span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
          </Link>
        </nav>

        <div
          onClick={WebStateHandle}
          className="w-12 h-12 cursor-pointer   hover:scale-100 transition-all duration-500 ease-in-out"
        >
          <div
            className={`absolute transition-all duration-500 ${
              WebState ? "image-enter" : "image-exit"
            }`}
          >
            {WebState ? (
              <img
                src="/languages.png"
                alt="Translator Switcher"
                className={`w-full h-full object-cover `}
              />
            ) : (
              <img
                src="/app-development.png"
                alt="Developer Switcher"
                className={`w-full h-full object-cover `}
              />
            )}
          </div>
        </div>
      </header>

      {/* Telefon Header */}

      <header className="hidden max-md:flex items-center justify-between p-4 z-20">
        <div className="flex items-center">
          <div className="w-16 h-16 border-2 border-red-500 rounded-full flex items-center justify-center cursor-pointer  hover:bg-red-500 ">
            <Link
              className="text-red-500 font-semibold flex  hover:text-gray-50 p-4"
              href={"/"}
            >
              K <span className="drop-animate ">G</span>
            </Link>
          </div>
        </div>

        {/* <div
          onClick={WebStateHandle}
          className="w-12 h-12 cursor-pointer   hover:scale-100 transition-all duration-500 ease-in-out"
        >
          <div
            className={`absolute transition-all duration-500 ${
              WebState ? "image-enter" : "image-exit"
            }`}
          >
            {WebState ? (
              <img
                src="/languages.png"
                alt="Translator Switcher"
                className={`w-full h-full object-cover `}
              />
            ) : (
              <img
                src="/app-development.png"
                alt="Developer Switcher"
                className={`w-full h-full object-cover `}
              />
            )}
          </div>
        </div> */}
      </header>
    </div>
  );
}
