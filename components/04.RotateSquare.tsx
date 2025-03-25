"use client";
import { motion } from "framer-motion";

const RotateSquare = () => {
  return (
    <motion.div
      className="w-40 h-40 bg-yellow-400"
      initial={{ rotate: -1000 }}
      animate={{ rotate: 400 }}
      transition={{duration: 3, ease: "backInOut"}}
    />
  );
};

export default RotateSquare;
