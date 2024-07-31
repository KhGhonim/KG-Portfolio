"use client";
import Link from "next/link";
import { useState } from "react";
import Tippy from "@tippyjs/react";
import { MotionConfig, motion } from "framer-motion";
import { navLinks, VARIANTS } from "../../constants/Arrays";
import { usePathname } from "next/navigation";

export default function Header() {
  const [Translator, setTranslator] = useState(false);
  const [Developer, setDeveloper] = useState(true);
  const [active, setActive] = useState(false);
  const location = usePathname();
  console.log(location);

  const WebStatusHandler = () => {
    setTranslator((prev) => !prev);
    setDeveloper((prev) => !prev);
  };
  return (
    <div className=" w-screen container mx-auto z-20">
      {/* Pc Header */}
      <header className=" hidden md:flex items-center justify-between p-4 z-20 relative">
        <div className="flex items-center">
          <div className="w-16 h-16 border-2 border-red-500 rounded-full flex items-center justify-center cursor-pointer  hover:bg-red-500 transition-all duration-300 ease-linear ">
            <Link
              className="text-red-500 font-semibold flex  hover:text-gray-50 p-4"
              href={"/"}
            >
              K <span className="drop-animate ">G</span>
            </Link>
          </div>
        </div>
        <nav className="flex space-x-8 font-medium">
          {navLinks.map((link, index) => {
            return (
              <Link
                key={index}
                href={`${link.href}`}
                className="relative group"
              >
                <span className="relative z-10 font-blod hover:font-extrabold">
                  {link.text}
                </span>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
              </Link>
            );
          })}
        </nav>

        <div onClick={WebStatusHandler} className="w-12 h-12 cursor-pointer  ">
          <div className={`absolute transition-all duration-500 `}>
            {Translator && (
              <Tippy content="Go To Translator Website">
                <img
                  src="/languages.png"
                  alt="Translator Switcher"
                  className={`w-full h-full object-cover ${
                    Translator ? "image-enter" : "image-exit"
                  }`}
                />
              </Tippy>
            )}

            {Developer && (
              <Tippy content="Go To Developer Website">
                <img
                  src="/app-development.png"
                  alt="Translator Switcher"
                  className={`w-full h-full object-cover ${
                    Developer ? "image-enter" : "image-exit"
                  }`}
                />
              </Tippy>
            )}
          </div>
        </div>
      </header>

      {/* Telefon Header */}
      <header className="hidden max-md:flex items-center justify-between p-4 z-20 relative">
        {/* Logo */}
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

        {/* Menu */}
        <div className="relative flex justify-center border-2 border-black rounded bg-[--background-color] w-12 h-12 cursor-pointer">
          <MotionConfig
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <motion.button
              initial={false}
              animate={active ? "open" : "closed"}
              onClick={() => setActive((pv) => !pv)}
              className="relative h-10 w-10 rounded-full  transition-colors "
            >
              <motion.span
                variants={VARIANTS.top}
                className="absolute h-0.5 w-5 bg-black"
                style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
              />
              <motion.span
                variants={VARIANTS.middle}
                className="absolute h-0.5 w-5 bg-black"
                style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
              />
              <motion.span
                variants={VARIANTS.bottom}
                className="absolute h-0.5 w-5 bg-black"
                style={{
                  x: "-50%",
                  y: "50%",
                  bottom: "35%",
                  left: "calc(50% + 10px)",
                }}
              />
            </motion.button>
          </MotionConfig>
          <div className="absolute transition-all duration-500"></div>
        </div>

        {/* Menu Items */}
        {/* Menu Items for PC */}
        <div></div>
        {/* Menu Items for Phone */}

        {/* Translator and Developer Switcher */}
        <div
          onClick={WebStatusHandler}
          className=" relative w-12 h-12 cursor-pointer pr-6 "
        >
          <div className={`absolute transition-all duration-500 `}>
            {Translator && (
              <Tippy content="Go To Developer Website">
                <img
                  src="/languages.png"
                  alt="Translator Switcher"
                  className={`w-full h-full object-cover ${
                    Translator ? "image-enter" : "image-exit"
                  }`}
                />
              </Tippy>
            )}

            {Developer && (
              <Tippy content="Go To Translator Website">
                <img
                  src="/app-development.png"
                  alt="Translator Switcher"
                  className={`w-full h-full object-cover ${
                    Developer ? "image-enter" : "image-exit"
                  }`}
                />
              </Tippy>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}
