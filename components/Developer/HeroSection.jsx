"use client";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { CgMouse } from "react-icons/cg";

export default function HeroSection() {
  return (
    <div className="w-full h-dvh flex pt-36">
      <div className="w-1/6 h-full flex flex-col p-2 relative">
        <div className="flex h-full flex-col space-y-4 items-center justify-center ">
          <FaGithub className="text-2xl text-[#ffffff] hover:underline font-medium " />
          <FaLinkedin className="text-2xl text-[#0077B5] hover:underline font-medium" />
          <FaWhatsapp className="text-2xl text-[#25D366] hover:underline font-medium" />
        </div>
        <Link
          className="text-xl font-bold absolute bottom-5 left-5"
          href={"mailto:khaledonem89@gmail.com"}
        >
          Khaledonem89@gmail.com
        </Link>
      </div>

      <div className="w-full md:w-3/6 flex flex-1 flex-col justify-start pt-5 space-y-4">
        {" "}
        <p className="text-2xl">Hello, I'm</p>
        <h1 className="text-4xl md:text-7xl font-bold text-[#FF4654]">
          {" "}
          Khaled Ghonim
        </h1>
        <h4 className="text-xl md:text-3xl">
          Creative{" "}
          <span className="text-[#FF4654] font-extrabold text-3xl md:text-5xl">
            Developer
          </span>
        </h4>
        <div className="flex flex-row gap-4">
          <Link
            href="mailto:khaledonem89@gmail"
            className="flex flex-row bg-red-500 px-4 py-2 rounded-full w-32 justify-center items-center gap-2 hover:bg-red-500/75  transition-all duration-300 ease-in-out"
          >
            Say Hello <FaEnvelope />
          </Link>

          <Link
            href="#AboutMe"
            className="group flex flex-row  px-4  rounded-full w-32 justify-center items-center  transition-all duration-300 ease-in-out relative"
          >
            About Me
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
          </Link>
        </div>
        <div className="  flex justify-center md:justify-start items-center p-9">
          <CgMouse className="w-6 h-6 mouse-wheel-animation" color="white" />
        </div>
      </div>

      <div className="hidden md:flex w-3/6 relative">
        <div className="absolute bottom-0">
          <Image
            src="/ME.png"
            alt="Herosection"
            width={600}
            height={300}
            quality={100}
            className=" object-cover w-full h-full "
          />
        </div>

        <div className="absolute bottom-0 top-0 w-56 h-full translate-x-2/4 bg-[#FF4654] -z-[1]"></div>
        <div className="absolute top-1/6 translate-x-2/4 w-96 h-96 border-4 border-white -z-[1]"></div>
        <div className="absolute left-0 bottom-20 w-16 h-24 translate-x-2/4 bg-[#FF4654] -z-[1]"></div>
        <div className="absolute right-20 bottom-48 w-24 h-24 translate-x-2/4 bg-[#FF4654] -z-[1]"></div>
        <div className="absolute right-40 top-24 w-32 h-32 translate-x-2/4 bg-[#FF4654] -z-[2]"></div>
      </div>
    </div>
  );
}
