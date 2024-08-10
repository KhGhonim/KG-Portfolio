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
      className={`fixed bottom-10 ${ScrollUp ? "translate-x-0" : "translate-x-[99999px]"} right-10 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#FF4654] transition-all duration-700`}
    >
      <FaArrowAltCircleUp className="h-5 w-5" />
    </div>
  );
}
