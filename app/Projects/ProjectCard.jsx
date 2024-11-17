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
  const [hoveredIndex, setHoveredIndex] = useState(null);
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

  const handleCardClick = (index) => {
    if (hoveredIndex === index) {
      setHoveredIndex(null);
    } else {
      setHoveredIndex(index);
    }
  };

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
          className="cursor-pointer rounded-full border-2 border-white px-4 py-2 text-xs transition-all duration-700 ease-in-out hover:bg-white hover:text-black md:text-base"
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
              className="group relative z-10 h-72 w-72 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl"
              onMouseEnter={() => setHoveredIndex(index)} // Hover for desktops
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleCardClick(index)} // Click for touch devices
            >
              {/* Project Image */}
              <Image
                src={project.photo}
                alt={project.title}
                width={500}
                height={500}
                quality={100}
                className="mb-4 h-full w-full rounded-md object-cover"
              />

              {/* Project Status Ribbon - Set a higher z-index and no overflow restriction */}
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

              {/* Project Details */}
              <motion.div
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  y: hoveredIndex === index ? 0 : 30,
                }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 z-30 flex flex-col justify-end bg-gradient-to-t from-black via-black to-transparent p-3 text-white ${
                  hoveredIndex === index
                    ? "pointer-events-auto"
                    : "pointer-events-none"
                }`}
              >
                <h2 className="mb-2 text-center text-xl font-bold">
                  {project.title}
                </h2>
                <p className="mb-4 text-sm text-gray-300">
                  {project.description}
                </p>
                <div className="flex items-center justify-end gap-4">
                  <Link href={project.previewLink} target="_blank">
                    <LuLink
                      size={24}
                      className="transition-transform duration-200 hover:scale-110"
                    />
                  </Link>
                  <Link href={project.repoLink} target="_blank">
                    <FaGithub
                      size={24}
                      className="transition-transform duration-200 hover:scale-110"
                    />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
