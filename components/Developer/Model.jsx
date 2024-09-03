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
            ? "fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-70 backdrop-blur-md"
            : "hidden"
        }
      >
        <motion.div
          variants={parentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          ref={ref}
          className="flex w-full max-w-3xl items-center justify-between gap-5 rounded-lg bg-[#171720] p-6 shadow-lg max-sm:flex-col md:p-5"
        >
          <motion.div variants={childVariants} className="w-full space-y-4">
            <div
              className="block w-full cursor-pointer rounded-lg bg-[#1c1c27] p-4 duration-500 ease-in-out hover:bg-[#24242f]"
              onClick={() => {
                handleClick("/Developer/Projects");
              }}
            >
              <h2 className="text-primary text-lg font-semibold">
                {" "}
                My Projects
              </h2>
              <p className="text-xs md:text-sm">
                Check out all the awesome Projects
              </p>
            </div>

            <div
              className="block w-full cursor-pointer rounded-lg bg-[#1c1c27] p-4 duration-500 ease-in-out hover:bg-[#24242f]"
              onClick={() => {
                handleClick("/Translator");
              }}
            >
              <h2 className="text-primary text-lg font-semibold">
                {" "}
                Translator Portfolio
              </h2>
              <p className="text-xs md:text-sm">
                Are you looking for a professional translator?
              </p>
            </div>
          </motion.div>

          <motion.div variants={childVariants} className="w-full space-y-4">
            <Link
              className="block w-full rounded-lg bg-[#1c1c27] p-4 duration-500 ease-in-out hover:bg-[#24242f]"
              href={"mailto:dev@khaledghonim.com"}
            >
              <h2 className="text-primary text-lg font-semibold">Let's Talk</h2>
              <p className="text-xs md:text-sm">Send me a message.</p>
            </Link>
            <div
              className="block w-full cursor-pointer rounded-lg bg-[#1c1c27] p-4 duration-500 ease-in-out hover:bg-[#24242f]"
              onClick={() => {
                handleClick("#form-contact");
              }}
            >
              <h2 className="text-primary text-lg font-semibold">
                Form Contact
              </h2>
              <p className="text-xs md:text-sm">Send me a message.</p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex w-full items-center justify-center gap-4 py-6"
          variants={parentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div variants={childVariants}>
            <Link href={"https://www.linkedin.com/in/khaled-ghonim-4a4007147/"}>
              <FaLinkedin color="#0e76a8" size={24} />
            </Link>
          </motion.div>
          <motion.div variants={childVariants}>
            <Link href={"https://github.com/LoDaBeY"}>
              <FaGithub color="white" size={24} />
            </Link>
          </motion.div>
          <motion.div variants={childVariants}>
            <Link href={"https://join.skype.com/invite/kqyhKpADi29m"}>
              <FaSkype color="#00aff0" size={24} />
            </Link>
          </motion.div>
          <motion.div variants={childVariants}>
            <Link href={"https://wa.me/905319045891"}>
              <FaWhatsapp color="#25d366" size={24} />
            </Link>
          </motion.div>
          <motion.div variants={childVariants}>
            <Link href={"https://t.me/MrPoDGK"}>
              <FaTelegram color="#0088cc" size={24} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
