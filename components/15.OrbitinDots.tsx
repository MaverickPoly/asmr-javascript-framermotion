"use client";
import { motion } from "framer-motion";

const OrbitinDots = () => {
  return (
    <motion.div
      className="relative h-52 w-52 flex"
      animate={{ rotate: [0, 360] }}
      transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
    >
      <div className="w-16 h-16 bg-teal-300 rounded-full absolute top-0 left-1/2" />
      <div className="w-16 h-16 bg-teal-300 rounded-full absolute left-0 bottom-1/2" />
      <div className="w-16 h-16 bg-teal-300 rounded-full absolute right-0 top-1/2" />
      <div className="w-16 h-16 bg-teal-300 rounded-full absolute bottom-0 right-1/2" />
    </motion.div>
  );
};

export default OrbitinDots;
