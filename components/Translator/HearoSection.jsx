"use client";
import Lottie from "lottie-react";
import HeroSection from "../../Assets/HeroSection.json";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import Typewriter from "typewriter-effect/dist/core";
import { useEffect, useRef } from "react";

export default function HearoSection() {
  const typewriterElement = useRef(null);
  const typewriterElement2 = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterElement.current, {
      loop: false,
    });
    const typewriter2 = new Typewriter(typewriterElement2.current, {
      loop: false,
      delay: 50,
    });

    typewriter.typeString("Hello, I'm Khaled Ghonim!").pauseFor(2000).start();
    typewriter2
      .typeString(
        `A dynamic professional blending project management, translation, subtitling, and transcription expertise with a developer's mindset and AI skills to deliver unparalleled quality.`
      )
      .pauseFor(2000)
      .start();
  }, []);

  return (
    <section className=" flex items-center justify-center w-screen container mx-auto z-20  ">
      <div className="flex flex-col md:flex-row justify-between w-screen h-dvh  ">
        <div className="w-screen md:w-1/2 max-md:p-8 flex flex-col justify-center items-center">
          {/* HeroSection JSON in SM screens */}
          <div className="hidden max-md:block w-full mb-5 ">
            <Lottie animationData={HeroSection} loop={true} />
          </div>

          {/* Text */}
          <h1
            ref={typewriterElement}
            className="text-2xl md:text-4xl font-bold mb-4 text-center md:text-left"
          ></h1>

          <p ref={typewriterElement2} className="text-lg mb-6"></p>

          {/* Marquee */}
          <div className=" w-[100%]">
            <Marquee pauseOnHover={true} className="flex py-9">
              <Link
                className="shadow-xl mr-4 px-4 py-2 rounded-2xl"
                href={"/Translation"}
              >
                Translation and Localization
              </Link>
              <Link
                className="shadow-xl  mr-4  px-4 py-2 rounded-2xl"
                href={"Subtitling&Transcription"}
              >
                Subtitling and Transcription
              </Link>
              <Link
                className="shadow-xl  mr-4  px-4 py-2 rounded-2xl"
                href={"Postediting&Proofreading"}
              >
                Post Editing and Proofreading
              </Link>
            </Marquee>
          </div>

          {/* Contact and Read More buttons */}
          <div className="flex  pt-4 md:pt-10  max-sm:flex-col gap-5 max-md:w-[100%]">
            <button className="relative uppercase  shadow-[9px_5px_0px_1px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 font-semibold p-3 sm:p-4 sm:px-14 text-sm sm:text-base text-black bg-[#FF4654] border md:border-2 border-black ">
              Contact
            </button>
            <button className="relative shadow-[9px_5px_0px_1px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all duration-500  uppercase font-semibold p-3 sm:p-4 sm:px-14 text-sm sm:text-base  text-black bg-gray-100 border md:border-2 border-black">
              Read More
            </button>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2 mt-8 md:mt-0">
          <Lottie animationData={HeroSection} loop={true} />
        </div>
      </div>
    </section>
  );
}
