"use client";

import Lottie from "lottie-react";
import ServicesHeroSection from "../../Assets/Contact.json";
import Link from "next/link";

export default function ContactHerosSection() {
  return (
    <div className="h-dvh w-screen">
      <div className="container relative z-20 mx-auto h-dvh">
        <div className="flex w-full flex-row items-center justify-between gap-8 p-4 max-md:flex-col-reverse md:gap-2">
          <div className="w-full md:w-1/3">
            <h2 className="text-5xl font-bold md:text-7xl">Contact</h2>
            <p className="mt-4 text-lg">
              <span className="mr-1 text-xl font-bold">Welcome!</span>
              Got questions or need a free sample of translation, video
              subtitling, or any other linguistic service? Just send an email!
            </p>
            <div className="mt-4 flex max-md:w-[100%] max-sm:flex-col">
              <Link
                className="relative border border-black bg-[#FF4654] p-2 text-center text-sm font-semibold uppercase text-white shadow-[9px_5px_0px_1px_rgba(0,0,0,1)] transition-all duration-500 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] sm:px-14 sm:text-base md:border-2"
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
