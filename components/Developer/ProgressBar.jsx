import { motion } from "framer-motion";

export default function ProgressBar({ percentage }) {
  const variants = {
    hidden: { width: "0%" },
    visible: {
      width: `${percentage}%`,
      transition: {
        duration: 2,
      },
    },
  };
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
      <motion.div
        className="bg-slate-800 h-full rounded-full"
        initial="hidden"
        animate="visible"
        variants={variants}
      />
    </div>
  );
}
