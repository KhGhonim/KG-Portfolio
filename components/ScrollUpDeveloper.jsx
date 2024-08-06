"use client";
import { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function ScrollUpDeveloper() {
  const [ScrollUp, setScrollUp] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
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
      className={`fixed bottom-10
        ${ScrollUp ? "translate-x-0" : "translate-x-[99999px]"} 
        right-10 z-50 bg-[#FF4654] rounded-full w-10 h-10 flex justify-center items-center cursor-pointer transition-all duration-700`}
    >
      <FaArrowAltCircleUp className="w-5 h-5" />
    </div>
  );
}
