"use client";
import { motion } from "framer-motion";

const LoadingSpinner = () => {
  const parentVariants = {
    animate: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const childVariants = {
    animate: {
      scale: [1, 1.3, 1],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div
      className="flex gap-4"
      variants={parentVariants}
      animate="animate"
    >
      <motion.div
        className="w-8 h-8 rounded-full bg-sky-500"
        variants={childVariants}
      />
      <motion.div
        className="w-8 h-8 rounded-full bg-sky-500"
        variants={childVariants}
      />
      <motion.div
        className="w-8 h-8 rounded-full bg-sky-500"
        variants={childVariants}
      />
    </motion.div>
  );
};

export default LoadingSpinner;
