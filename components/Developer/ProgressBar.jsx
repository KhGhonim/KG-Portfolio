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
    <div className="h-4 w-full overflow-hidden rounded-full bg-gray-200">
      <motion.div
        className="h-full rounded-full bg-slate-800"
        initial="hidden"
        animate="visible"
        variants={variants}
      />
    </div>
  );
}
