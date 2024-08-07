"use client";

import { motion, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";

export default function FloatingBoxX({ position }) {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ x }}
      className={`flex absolute   h-32  w-32 md:h-56 md:w-56 ${position} transition-all duration-700 rounded-sm z-20`}
    ></motion.div>
  );
}
