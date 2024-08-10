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
      <div className="relative flex min-h-[100vh] w-full flex-col bg-[#BA3C3C] py-16">
        <FloatingBoxX position="hidden md:flex left-5 top-[25%] border-4 border- z-10" />
        <div className="w-screen py-8 md:container md:mx-auto md:p-16">
          <div className="flex h-full w-full flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex flex-col space-y-4">
              <p className="text-xl font-medium text-white">My Skills</p>
              <h1 className="text-4xl font-bold text-white">You Can Imagine</h1>
              <h1 className="text-4xl font-bold text-white">I Can Do</h1>
            </div>

            <motion.div
              variants={parentVariants}
              initial="hidden"
              whileInView="visible"
              className="flex w-4/5 flex-col space-y-4 md:w-2/5"
            >
              <motion.div
                variants={childVariants}
                className="flex w-full flex-col"
              >
                <motion.div
                  variants={childVariants}
                  className="flex w-full flex-row justify-between"
                >
                  <h1 className="text-2xl font-bold">React</h1>
                  <h1 className="text-xl font-bold">95%</h1>
                </motion.div>
                <ProgressBar percentage={95} />
              </motion.div>
              <motion.div
                variants={childVariants}
                className="flex w-full flex-col"
              >
                <motion.div
                  variants={childVariants}
                  className="flex w-full flex-row justify-between"
                >
                  <h1 className="text-2xl font-bold">NextJS</h1>
                  <h1 className="text-xl font-bold">83%</h1>
                </motion.div>
                <ProgressBar percentage={83} />
              </motion.div>
              <motion.div
                variants={childVariants}
                className="flex w-full flex-col"
              >
                <motion.div
                  variants={childVariants}
                  className="flex w-full flex-row justify-between"
                >
                  <h1 className="text-2xl font-bold">Node & Express</h1>
                  <h1 className="text-xl font-bold">90%</h1>
                </motion.div>
                <ProgressBar percentage={90} />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="relative h-dvh w-full">
          <div className="absolute left-0 top-0 h-full w-full space-y-5 py-48 text-center text-white md:space-y-9">
            <p className="text-2xl font-bold md:text-6xl">Check my Works</p>

            <AnimatePresence mode="wait">
              <motion.div
                variants={parentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="z-40 grid grid-cols-1 place-items-center gap-60 p-6 md:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4"
              >
                {DemoHomeprojects.map((project, index) => (
                  <motion.div
                    variants={childVariants}
                    whileHover={{ scale: 1.1, y: -10 }}
                    whileTap={{ scale: 0.9, y: 0 }}
                    key={index}
                    className="group relative z-40 h-72 w-72 rounded-lg md:h-80 md:w-80"
                  >
                    <div className="overflow-hidden rounded-lg bg-[#1A1A27] p-3 shadow-md">
                      <Image
                        src={project.photo}
                        alt={project.title}
                        width={500}
                        height={500}
                        quality={100}
                        className="h-64 w-full rounded-md object-cover"
                      />
                      <div className="w-full bg-[#1A1A27] p-4">
                        <h2 className="mb-2 text-xl font-bold">
                          {" "}
                          {project.title}
                        </h2>
                        <p className="text-muted-foreground mb-4">
                          {" "}
                          {project.description}
                        </p>
                        <div className="mb-4 flex items-center justify-between">
                          <Link href={project.previewLink} target="_blank">
                            <LuLink color="white" size={35} />
                          </Link>
                          <Link href={project.repoLink} target="_blank">
                            <FaGithub color="white" size={35} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
            <div className="relative z-30 flex items-center justify-center py-60">
              <Link href="/Developer/Projects">
                <button className="h-10 w-40 rounded-full border-2 border-white text-white transition-all duration-700 ease-in-out hover:bg-white hover:text-black">
                  See More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        <FloatingBoxY position="hidden md:flex right-5 -bottom-10 border-4 border- z-10" />
      </div>
    </div>
  );
}
