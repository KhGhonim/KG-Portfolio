"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaSkype,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";

const parentVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export default function Model({ IsModelOpen, setIsModelOpen }) {
  const ref = useRef(null);
  useEffect(() => {
    const HandleModelCloser = (eo) => {
      if (ref.current && !ref.current.contains(eo.target)) {
        setIsModelOpen(false);
      }
    };

    document.addEventListener("mousedown", HandleModelCloser);

    return () => {
      document.removeEventListener("mousedown", HandleModelCloser);
    };
  }, []);
  const router = useRouter();

  const handleClick = (href) => {
    setIsModelOpen(false);
    router.push(href);
  };

  return (
    <AnimatePresence mode="wait">
      <div
        key={IsModelOpen}
        className={
          IsModelOpen
            ? "fixed inset-0 flex flex-col items-center justify-center z-50 bg-black bg-opacity-70 backdrop-blur-md"
            : "hidden"
        }
      >
        <motion.div
          variants={parentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          ref={ref}
          className=" flex max-sm:flex-col justify-between items-center rounded-lg p-6 md:p-5 gap-5 bg-[#171720] shadow-lg max-w-3xl w-full"
        >
          <motion.div variants={childVariants} className="space-y-4  w-full">
            <div
              className="bg-[#1c1c27] p-4 rounded-lg w-full block cursor-pointer hover:bg-[#24242f] duration-500 ease-in-out"
              onClick={() => {
                handleClick("/Developer/Projects");
              }}
            >
              <h2 className="text-lg font-semibold text-primary">
                {" "}
                My Projects
              </h2>
              <p className="text-xs md:text-sm">
                Check out all the awesome Projects
              </p>
            </div>
          </motion.div>

          <motion.div variants={childVariants} className="space-y-4  w-full">
            <Link
              className="bg-[#1c1c27] p-4 rounded-lg w-full block hover:bg-[#24242f] duration-500 ease-in-out"
              href={"mailto:khaledonem89@gmail.com"}
            >
              <h2 className="text-lg font-semibold text-primary">Let's Talk</h2>
              <p className="text-xs md:text-sm">Send me a message.</p>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-full flex justify-center items-center gap-4 py-6"
          variants={parentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div variants={childVariants}>
            <Link href={""}>
              <FaLinkedin color="#0e76a8" size={24} />
            </Link>
          </motion.div>
          <motion.div variants={childVariants}>
            <Link href={""}>
              <FaGithub color="white" size={24} />
            </Link>
          </motion.div>
          <motion.div variants={childVariants}>
            <Link href={""}>
              <FaSkype color="#00aff0" size={24} />
            </Link>
          </motion.div>
          <motion.div variants={childVariants}>
            <Link href={""}>
              <FaWhatsapp color="#25d366" size={24} />
            </Link>
          </motion.div>
          <motion.div variants={childVariants}>
            <Link href={""}>
              <FaTelegram color="#0088cc" size={24} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
