"use client";

import Lottie from "lottie-react";
import ServicesHeroSection from "../../Assets/Contact.json";
import Link from "next/link";

export default function ContactHerosSection() {
  return (
    <div className="w-screen h-dvh">
      <div className="container mx-auto relative z-20  h-dvh ">
        <div className="flex flex-row max-md:flex-col-reverse items-center justify-between gap-8  md:gap-2  w-full p-4">
          <div className="w-full md:w-1/3">
            <h2 className="text-5xl md:text-7xl  font-bold">Contact</h2>
            <p className="mt-4 text-lg">
              <span className="text-xl font-bold mr-1">Welcome!</span>
              Got questions or need a free sample of translation, video
              subtitling, or any other linguistic service? Just send an email!
            </p>
            <div className="flex  max-sm:flex-col  max-md:w-[100%] mt-4">
              <Link
                className="relative uppercase text-center shadow-[9px_5px_0px_1px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 font-semibold p-2  sm:px-14 text-sm sm:text-base text-white bg-[#FF4654] border md:border-2 border-black "
                href={"#contact"}
              >
                Contact ME!
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Lottie animationData={ServicesHeroSection} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
