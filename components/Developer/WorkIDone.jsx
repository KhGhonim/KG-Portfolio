"use client";
import { AnimatePresence, motion } from "framer-motion";
import FloatingBoxX from "./FloatingBoxX";
import ProgressBar from "./ProgressBar";
import { DemoHomeprojects } from "../../constants/Arrays";
import Link from "next/link";
import Image from "next/image";
import { LuLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import FloatingBoxY from "./FloatingBoxY";

const parentVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 1.5,
      staggerChildren: 0.2,
    },
  },
  exit: { opacity: 0, y: 100, transition: { duration: 1, ease: "easeInOut" } },
};

const childVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
  exit: { opacity: 0, y: 100, transition: { duration: 1, ease: "easeInOut" } },
};
export default function WorkIDone() {
  return (
    <div>
      <div className="w-full min-h-[100vh] flex bg-[#BA3C3C] flex-col relative py-16">
        <FloatingBoxX position="hidden md:flex left-5 top-[25%] border-4 border- z-10" />
        <div className="w-screen py-8 md:container md:mx-auto  md:p-16">
          <div className="w-full h-full flex flex-col md:flex-row justify-between items-center gap-8">
            <div className=" flex  flex-col space-y-4">
              <p className="text-white font-medium text-xl">My Skills</p>
              <h1 className="text-4xl font-bold text-white">You Can Imagine</h1>
              <h1 className="text-4xl font-bold text-white">I Can Do</h1>
            </div>

            <motion.div
              variants={parentVariants}
              initial="hidden"
              whileInView="visible"
              className="w-4/5 md:w-2/5 flex flex-col space-y-4"
            >
              <motion.div
                variants={childVariants}
                className="w-full flex flex-col"
              >
                <motion.div
                  variants={childVariants}
                  className="w-full flex flex-row justify-between"
                >
                  <h1 className="font-bold text-2xl">React</h1>
                  <h1 className="font-bold text-xl">95%</h1>
                </motion.div>
                <ProgressBar percentage={95} />
              </motion.div>
              <motion.div
                variants={childVariants}
                className="w-full flex flex-col"
              >
                <motion.div
                  variants={childVariants}
                  className="w-full flex flex-row justify-between"
                >
                  <h1 className="font-bold text-2xl">NextJS</h1>
                  <h1 className="font-bold text-xl">83%</h1>
                </motion.div>
                <ProgressBar percentage={83} />
              </motion.div>
              <motion.div
                variants={childVariants}
                className="w-full flex flex-col"
              >
                <motion.div
                  variants={childVariants}
                  className="w-full flex flex-row justify-between"
                >
                  <h1 className="font-bold text-2xl">Node & Express</h1>
                  <h1 className="font-bold text-xl">90%</h1>
                </motion.div>
                <ProgressBar percentage={90} />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="w-full h-dvh relative">
          <div className="absolute top-0 left-0 w-full h-full py-48 text-white text-center space-y-5 md:space-y-9">
            <p className="text-2xl md:text-6xl font-bold">Check my Works</p>

            <AnimatePresence mode="wait">
              <motion.div
                variants={parentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-6 p-6 z-40"
              >
                {DemoHomeprojects.map((project, index) => (
                  <motion.div
                    variants={childVariants}
                    key={index}
                    className="rounded-lg relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-w-80 2xl:w-96 2xl:h-w-96 group z-40"
                  >
                    <Image
                      src={project.photo}
                      alt={project.title}
                      width={500}
                      height={500}
                      quality={100}
                      className="w-full h-full object-cover rounded-md mb-4"
                    />

                    <div className="opacity-0 group-hover:opacity-100 flex flex-col absolute rounded-lg inset-0 bg-gradient-to-t from-black to-[rgba(0,0,0,0.5)] transition-opacity duration-700 ease-in-out">
                      <h1 className="font-bold text-2xl text-white py-5">
                        {project.title}
                      </h1>
                      <h1 className="font-bold text-base text-white py-5 flex">
                        {project.description}
                      </h1>
                      <div className="flex justify-around items-center gap-5">
                        <Link href={project.previewLink} target="_blank">
                          <LuLink color="white" size={35} />
                        </Link>
                        <Link href={project.repoLink} target="_blank">
                          <FaGithub color="white" size={35} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center items-center relative z-30">
              <Link href="/Developer/Projects">
                <button className="w-40 h-10 border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-700 ease-in-out">
                  See More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  relative">
        <FloatingBoxY position="hidden md:flex right-5 -bottom-10 border-4 border- z-10" />
      </div>
    </div>
  );
}
