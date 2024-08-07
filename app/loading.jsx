"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

const leftDoorVariants = {
  hidden: { x: "-100%" },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.5,
    },
  },
  exit: {
    x: "-100%",
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const rightDoorVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.5,
    },
  },
  exit: {
    x: "100%",
    transition: { duration: 1, ease: "easeInOut" },
  },
};

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div className="loading-screen">
          <motion.div
            className="loading-door left-0"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={leftDoorVariants}
          />
          <motion.div
            className="loading-door right-0"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={rightDoorVariants}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
