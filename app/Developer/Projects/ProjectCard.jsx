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
      <ul className="space-x-4 font-bold text-xl flex justify-center items-center p-4">
        <li
          onClick={() => setSelectCatagory("All")}
          id="all"
          className="border-2 border-white py-2 px-4 rounded-full cursor-pointer text-sm md:text-base hover:bg-white hover:text-black transition-all duration-700 ease-in-out"
        >
          All
        </li>
        <li
          onClick={() => setSelectCatagory("React")}
          id="react"
          className="border-2 border-white  py-2 px-4 rounded-full cursor-pointer text-sm md:text-base hover:bg-white hover:text-black transition-all duration-700 ease-in-out"
        >
          React
        </li>
        <li
          onClick={() => setSelectCatagory("Next.js")}
          id="nextjs"
          className="border-2 border-white  py-2 px-4 rounded-full cursor-pointer text-sm md:text-base hover:bg-white hover:text-black transition-all duration-700 ease-in-out"
        >
          Next.js
        </li>
        <li
          onClick={() => setSelectCatagory("Node.js")}
          id="NE"
          className="border-2 border-white  py-2 px-4 rounded-full cursor-pointer text-sm md:text-base hover:bg-white hover:text-black transition-all duration-700 ease-in-out"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-10 p-6 z-40"
        >
          {Data.map((project, index) => (
            <motion.div
              variants={childVariants}
              key={index}
              className="rounded-lg relative w-72 h-72   group z-40"
            >
              <Image
                src={project.photo}
                alt={project.title}
                width={500}
                height={500}
                quality={100}
                className="w-full h-full  object-cover rounded-md mb-4"
              />

              <div className="opacity-0 text-center group-hover:opacity-100 flex flex-col absolute rounded-lg inset-0 bg-gradient-to-t from-black to-[rgba(0,0,0,0.5)] transition-opacity duration-700 ease-in-out">
                <h1 className="font-bold text-xl text-white py-5">
                  {project.title}
                </h1>
                <h1 className="font-bold text-sm text-white py-5 flex">
                  {project.description}
                </h1>
                <div className="flex justify-around items-center gap-5">
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
                      className="flex flex-wrap items-center  bg-white p-1 rounded-xl text-black text-xs"
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
