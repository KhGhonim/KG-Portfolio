"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { LuLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

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

export default function ProjectCard({ DevProjects }) {
  const [Data, setData] = useState(DevProjects);
  const [SelectCatagory, setSelectCatagory] = useState("All");

  useEffect(() => {
    if (SelectCatagory === "All") {
      setData(DevProjects);
    } else {
      const filteredData = DevProjects.filter((project) => {
        return (
          project.category === SelectCatagory ||
          project.tools.some((tool) => tool === SelectCatagory)
        );
      });
      setData(filteredData);
    }
  }, [SelectCatagory]);
  return (
    <div className="container mx-auto py-36">
      <ul className="flex items-center justify-center space-x-4 p-4 text-xl font-bold">
        <li
          onClick={() => setSelectCatagory("All")}
          id="all"
          className="cursor-pointer rounded-full border-2 border-white px-4 py-2 text-sm transition-all duration-700 ease-in-out hover:bg-white hover:text-black md:text-base"
        >
          All
        </li>
        <li
          onClick={() => setSelectCatagory("React")}
          id="react"
          className="cursor-pointer rounded-full border-2 border-white px-4 py-2 text-sm transition-all duration-700 ease-in-out hover:bg-white hover:text-black md:text-base"
        >
          React
        </li>
        <li
          onClick={() => setSelectCatagory("Next.js")}
          id="nextjs"
          className="cursor-pointer rounded-full border-2 border-white px-4 py-2 text-sm transition-all duration-700 ease-in-out hover:bg-white hover:text-black md:text-base"
        >
          Next.js
        </li>
        <li
          onClick={() => setSelectCatagory("Node.js")}
          id="NE"
          className="cursor-pointer rounded-full border-2 border-white px-4 py-2 text-sm transition-all duration-700 ease-in-out hover:bg-white hover:text-black md:text-base"
        >
          Node & Express
        </li>
      </ul>

      <AnimatePresence mode="wait">
        <motion.div
          key={SelectCatagory}
          variants={parentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="z-40 grid grid-cols-1 place-items-center gap-10 p-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {Data.map((project, index) => (
            <motion.div
              variants={childVariants}
              whileHover={{ scale: 1.1, y: -10 }}
              key={index}
              className="group relative z-40 h-72 w-72 rounded-lg"
            >
              <Image
                src={project.photo}
                alt={project.title}
                width={500}
                height={500}
                quality={100}
                className="mb-4 h-full w-full rounded-md object-cover"
              />

              <div className="absolute inset-0 flex flex-col rounded-lg bg-gradient-to-t from-black to-[rgba(0,0,0,0.5)] text-center opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100">
                <h1 className="py-5 text-xl font-bold text-white">
                  {project.title}
                </h1>
                <h1 className="flex py-5 text-sm font-bold text-white">
                  {project.description}
                </h1>
                <div className="flex items-center justify-around gap-5">
                  <Link href={project.previewLink} target="_blank">
                    <LuLink color="white" size={20} />
                  </Link>
                  <Link href={project.repoLink} target="_blank">
                    <FaGithub color="white" size={20} />
                  </Link>
                </div>

                <div className="grid grid-cols-5 place-items-center gap-1 pt-3">
                  {project.tools.map((tool, index) => (
                    <div
                      key={index}
                      className="flex flex-wrap items-center rounded-xl bg-white p-1 text-xs text-black"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
