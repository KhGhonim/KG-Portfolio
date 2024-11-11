"use client";
import Lottie from "lottie-react";
import HeroSection from "../Assets/HeroSection.json";
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
        `A dynamic professional blending project management, translation, subtitling, and transcription expertise with a developer's mindset and AI skills to deliver unparalleled quality.`,
      )
      .pauseFor(2000)
      .start();
  }, []);

  return (
    <section className="container mx-auto flex w-screen items-center justify-center">
      <div className="flex h-dvh w-screen flex-col justify-between md:flex-row">
        <div className="relative z-10 flex w-screen flex-col items-center justify-center max-md:p-8 md:w-1/2">
          {/* HeroSection JSON in SM screens */}
          <div className="-z-50 mb-5 hidden w-full max-md:block">
            <Lottie animationData={HeroSection} loop={true} />
          </div>

          {/* Text */}
          <h1
            ref={typewriterElement}
            className="mb-4 text-center text-2xl font-bold md:text-left md:text-4xl"
          ></h1>

          <p ref={typewriterElement2} className="mb-6 text-lg"></p>

          {/* Marquee */}
          <div className="w-[100%]">
            <Marquee pauseOnHover={true} className="flex py-9">
              <Link
                className="mr-4 rounded-2xl px-4 py-2 shadow-xl"
                href={"/Services/Translation"}
              >
                Translation and Localization
              </Link>
              <Link
                className="mr-4 rounded-2xl px-4 py-2 shadow-xl"
                href={"/Services/Subtitling"}
              >
                Subtitling
              </Link>

              <Link
                className="mr-4 rounded-2xl px-4 py-2 shadow-xl"
                href={"/Services/Transcription"}
              >
                Transcription
              </Link>
              <Link
                className="mr-4 rounded-2xl px-4 py-2 shadow-xl"
                href={"/Services/PE"}
              >
                Post Editing
              </Link>

              <Link
                className="mr-4 rounded-2xl px-4 py-2 shadow-xl"
                href={"/Services/Proofreading"}
              >
                Proofreading
              </Link>
            </Marquee>
          </div>

          {/* Contact and Read More buttons */}
          <div className="flex gap-5 pt-4 text-center max-md:w-[100%] max-sm:flex-col md:pt-10">
            <Link
              className="relative border border-black bg-[#FF4654] p-3 text-sm font-semibold uppercase text-black shadow-[9px_5px_0px_1px_rgba(0,0,0,1)] transition-all duration-500 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] sm:p-4 sm:px-14 sm:text-base md:border-2"
              href={"/Contact"}
            >
              Contact
            </Link>
            <Link
              className="relative border border-black bg-gray-100 p-3 text-sm font-semibold uppercase text-black shadow-[9px_5px_0px_1px_rgba(0,0,0,1)] transition-all duration-500 hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] sm:p-4 sm:px-14 sm:text-base md:border-2"
              href={"/Services"}
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="mt-8 hidden md:mt-0 md:block md:w-1/2">
          <Lottie animationData={HeroSection} loop={true} />
        </div>
      </div>
    </section>
  );
}
