"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { LuLink } from "react-icons/lu";
import { FaChevronUp, FaGithub } from "react-icons/fa";

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
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              key={index}
              className="group relative z-40 h-80 w-80 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl"
            >
              <Image
                src={project.photo}
                alt={project.title}
                width={500}
                height={500}
                quality={100}
                className="mb-4 h-full w-full rounded-md object-cover"
              />

              {/* Project Status Ribbon */}
              <div
                className={`ribbon absolute left-0 top-0 z-50 rounded-tr-lg px-3 py-1 text-xl font-semibold text-white ${
                  project.status === "Completed"
                    ? "bg-emerald-500"
                    : project.status === "Under-construction"
                      ? "bg-red-500"
                      : "bg-orange-500"
                } shadow-md`}
              >
                {project.status}
              </div>

              {/* Project Details Slide-up */}
              <motion.div
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut", type: "tween" }}
                className="group absolute bottom-0 z-40 flex flex-col  bg-gradient-to-t from-black to-[rgba(0,0,0,0.6)] p-5 text-center opacity-0"
              >
                <h1 className="py-3 text-2xl font-bold text-white">
                  {project.title}
                </h1>
                <p className="mb-3 text-sm font-medium text-gray-300">
                  {project.description}
                </p>
                <div className="flex items-center justify-around gap-5 pb-3">
                  <Link href={project.previewLink} target="_blank">
                    <LuLink
                      color="white"
                      size={24}
                      className="transition-colors duration-200 hover:text-gray-300"
                    />
                  </Link>
                  <Link href={project.repoLink} target="_blank">
                    <FaGithub
                      color="white"
                      size={24}
                      className="transition-colors duration-200 hover:text-gray-300"
                    />
                  </Link>
                </div>

                {/* Tools Used */}
                <div className="grid grid-cols-3 gap-2 pt-2">
                  {project.tools.map((tool, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center rounded-md bg-white px-2 py-1 text-xs font-semibold text-black shadow-sm"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
