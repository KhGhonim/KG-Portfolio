"use client";

import { motion, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";

export default function FloatingBoxY({ position }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ y }}
      className={` absolute   h-32  w-32 md:h-56 md:w-56 ${position} transition-all duration-700 rounded-sm `}
    ></motion.div>
  );
}
