"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { navLinks, VARIANTS } from "../constants/Arrays";

const parentVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 1.5,
      staggerChildren: 0.2,
    },
  },
  exit: { opacity: 0, y: 100, transition: { duration: 1, ease: "easeInOut" } },
};

const childVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
  exit: { opacity: 0, y: 100, transition: { duration: 1, ease: "easeInOut" } },
};

export default function Header() {
  const [active, setActive] = useState(false);
  const [Menu, setMenu] = useState("hidden");
  const toggleMenu = () => {
    setMenu((prevMenu) => (prevMenu === "hidden" ? "block" : "hidden"));
  };
  const CloseHeader = () => {
    setActive(false);
    setMenu("hidden");
  };

  const ref = useRef(null);
  useEffect(() => {
    // Event handler for clicking outside the SignUp modal
    const HandleModelCloser = (eo) => {
      // Check if the click is not inside the SignUp div
      if (ref.current && !ref.current.contains(eo.target)) {
        // Close the modal
        CloseHeader();
      }
    };

    // Add the event listener for clicking outside the modal
    document.addEventListener("mousedown", HandleModelCloser);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("mousedown", HandleModelCloser);
    };
  }, []);

  return (
    <div className="container relative z-50 mx-auto w-screen">
      {/* Pc Header */}
      <header className="relative z-50 hidden items-center justify-between p-4 md:flex">
        <div className="flex items-center">
          <div className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-2 border-red-500 transition-all duration-300 ease-linear hover:bg-red-500">
            <Link
              className="flex p-4 font-semibold text-red-500 hover:text-gray-50"
              href={"/"}
            >
              K <span className="drop-animate">G</span>
            </Link>
          </div>
        </div>
        <nav className="flex space-x-8 font-medium">
          {navLinks.map((link, index) => {
            return (
              <Link
                key={index}
                href={`${link.href}`}
                className="group relative"
              >
                <span className="font-blod relative z-10 hover:font-extrabold">
                  {link.text}
                </span>
                <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-black transition-transform duration-500 group-hover:scale-x-100"></span>
              </Link>
            );
          })}
        </nav>

        <div className="h-12 w-12 cursor-pointer">
          {/* <Link
            className={`absolute transition-all duration-500 hover:scale-90`}
            href={"/Developer"}
          >
            <Tippy content="Go To Developer Website">
              <img
                src="/app-development.png"
                alt="Translator Switcher"
                className={`h-full w-full cursor-pointer object-cover`}
              />
            </Tippy>
          </Link> */}
        </div>
      </header>

      {/* Telefon Header */}
      <header className="relative z-50 hidden items-center justify-between p-4 max-md:flex">
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-2 border-red-500 hover:bg-red-500">
            <Link
              className="flex p-4 font-semibold text-red-500 hover:text-gray-50"
              href={"/"}
            >
              K <span className="drop-animate">G</span>
            </Link>
          </div>
        </div>

        {/* Menu */}
        <div
          onClick={toggleMenu}
          className="relative flex h-12 w-12 cursor-pointer justify-center rounded border-2 border-black bg-[--background-color]"
        >
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
              className="relative h-10 w-10 rounded-full transition-colors"
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

          {/* Menu Items for Phone */}

          <div
            ref={ref}
            className={`absolute z-50 origin-top-right ${Menu} top-full w-44 rounded-lg border border-black bg-[--background-color] shadow-lg`}
          >
            <motion.div
              key={active ? "open" : "closed"}
              variants={parentVariants}
              animate="visible"
              initial="hidden"
              className="flex flex-col items-center gap-3 px-4 py-5"
              role="none"
            >
              {navLinks.map((link, index) => {
                return (
                  <motion.div
                    variants={childVariants}
                    className="group relative"
                    key={index}
                  >
                    <Link href={`${link.href}`} className="group relative">
                      <span className="font-blod relative hover:font-extrabold">
                        {link.text}
                      </span>
                      <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-black transition-transform duration-500 group-hover:scale-x-100"></span>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Translator and Developer Switcher */}
        <div className="h-12 w-12 cursor-pointer">
          {/* <Link
            className={`absolute pr-2 transition-all duration-500 hover:scale-90`}
            href={"/Developer"}
          >
            <Tippy content="Go To Developer Website">
              <img
                src="/app-development.png"
                alt="Translator Switcher"
                className={`h-full w-full cursor-pointer object-cover`}
              />
            </Tippy>
          </Link> */}
        </div>
      </header>
    </div>
  );
}
