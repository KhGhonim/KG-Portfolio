"use client";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { CgMouse } from "react-icons/cg";
import { motion } from "framer-motion";

const parentVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 1.9,
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

export default function HeroSection() {
  return (
    <div className="flex h-dvh w-full pt-36">
      <div className="relative flex h-full w-1/6 flex-col p-2">
        <div className="flex h-full flex-col items-center justify-center space-y-4">
          <FaGithub className="text-2xl font-medium text-[#ffffff] hover:underline" />
          <FaLinkedin className="text-2xl font-medium text-[#0077B5] hover:underline" />
          <FaWhatsapp className="text-2xl font-medium text-[#25D366] hover:underline" />
        </div>
        <Link
          className="absolute bottom-5 left-5 text-xl font-bold"
          href={"mailto:dev@khaledghonim.com"}
        >
          dev@khaledghonim.com
        </Link>
      </div>

      <div className="flex w-full flex-1 flex-col justify-start space-y-4 pt-5 md:w-3/6">
        {" "}
        <p className="text-2xl">Hello, I'm</p>
        <h1 className="text-4xl font-bold text-[#FF4654] md:text-7xl">
          {" "}
          Khaled Ghonim
        </h1>
        <h4 className="text-xl md:text-3xl">
          Creative{" "}
          <span className="text-3xl font-extrabold text-[#FF4654] md:text-5xl">
            Developer
          </span>
        </h4>
        <div className="flex flex-row gap-4">
          <Link
            href="mailto:dev@khaledghonim.com"
            className="flex w-32 flex-row items-center justify-center gap-2 rounded-full bg-red-500 px-4 py-2 transition-all duration-300 ease-in-out hover:bg-red-500/75"
          >
            Say Hello <FaEnvelope />
          </Link>

          <Link
            href="#AboutMe"
            className="group relative flex w-32 flex-row items-center justify-center rounded-full px-4 transition-all duration-300 ease-in-out"
          >
            About Me
            <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-white transition-transform duration-500 group-hover:scale-x-100"></span>
          </Link>
        </div>
        <div className="flex items-center justify-center p-9 md:justify-start">
          <CgMouse className="mouse-wheel-animation h-6 w-6" color="white" />
        </div>
      </div>

      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate="visible"
        className="relative hidden w-3/6 md:flex"
      >
        <motion.div variants={childVariants} className="absolute bottom-0">
          <Image
            src="/ME.png"
            alt="Herosection"
            width={600}
            height={300}
            quality={100}
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div className="absolute bottom-0 top-0 -z-[1] h-full w-56 translate-x-2/4 rounded bg-[#FF4654]"></div>
        <div className="top-1/6 absolute -z-[1] h-96 w-96 translate-x-2/4 rounded border-4 border-white"></div>
        <div className="absolute bottom-20 left-0 -z-[1] h-24 w-16 translate-x-2/4 rounded bg-[#FF4654]"></div>
        <div className="absolute bottom-48 right-20 -z-[1] h-24 w-24 translate-x-2/4 rounded bg-[#FF4654]"></div>
        <div className="absolute right-40 top-24 -z-[2] h-32 w-32 translate-x-2/4 rounded bg-[#FF4654]"></div>
      </motion.div>
    </div>
  );
}
