"use client";
import { motion } from "framer-motion";

const RotateHover = () => {
  return (
    <motion.div
      initial={{ scale: 1.5 }}
      className="w-0 h-0 border-l-48 border-r-48 border-b-96 border-transparent border-b-blue-500"
      whileHover={{rotate: 45}}
      transition={{duration: 0.8, type: "spring", stiffness: 400}}
    />
  );
};

export default RotateHover;
