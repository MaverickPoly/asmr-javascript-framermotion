"use client";
import { motion } from "framer-motion";

const CircleColor = () => {
  return (
    <motion.div
      variants={{
        initial: { backgroundColor: "red" },
        animate: { backgroundColor: "green" },
      }}
      initial={"initial"}
      animate={"animate"}
      transition={{duration: 1}}
      className="w-64 h-64 rounded-full"
    />
  );
};

export default CircleColor;
