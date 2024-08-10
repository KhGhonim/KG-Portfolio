"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollUp() {
  const [ScrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ScrollUp]);
  return (
    <div
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-10 right-10 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-blue-400 transition-transform duration-700 ${
        ScrollUp ? "translate-y-0" : "-translate-y-[999px]"
      }`}
    >
      <div>
        <FaArrowUp color="white" fontSize="small" />
      </div>
    </div>
  );
}

export default ScrollUp;
