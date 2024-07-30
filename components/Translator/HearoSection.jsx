"use client";
import Lottie from "lottie-react";
import HeroSection from "../../Assets/HeroSection.json";
import Marquee from "react-fast-marquee";
import Link from "next/link";

export default function HearoSection() {
  return (
    <section className=" flex flex-col items-center justify-center ">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-screen md:w-1/2 max-md:p-8">
          <div className="hidden max-md:block w-full mb-5 ">
            <Lottie animationData={HeroSection} loop={true} />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-center md:text-left">
            Khaled Ghonim
          </h1>
          <p className="text-lg mb-6">
            I empower your business with state-of-the-art digital solutions,
            such as websites, web applications, and digital marketing, with a
            focus on your specific needs, including web design, web development,
            and more.
          </p>
          <div className="w-full max-md:w-screen ">
            <Marquee
              pauseOnHover={true}
              style={{ marginBottom: "20px" }}
              className="flex py-6"
            >
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

          <div className="flex  max-sm:flex-col gap-3">
            <button className="relative uppercase font-semibold p-3 sm:p-4 sm:px-14 text-sm sm:text-base text-black bg-[#FF4654] border md:border-2 border-black ">
              Contact
              <div className="absolute inset-0 bg-black scale-100 transition-transform duration-300 ease-in-out  -z-10"></div>
            </button>
            <button className="relative  uppercase font-semibold p-3 sm:p-4 sm:px-14 text-sm sm:text-base  text-black bg-gray-100 border md:border-2 border-black ">
              Read More
              <div className="absolute inset-0 bg-black scale-100 transition-transform duration-300 ease-in-out  -z-10"></div>
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
