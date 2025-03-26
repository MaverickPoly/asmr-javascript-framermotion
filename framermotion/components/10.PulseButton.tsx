"use client";
import { motion } from "framer-motion";

const PulseButton = () => {
  return (
    <motion.button
        className="px-4 py-3 rounded-lg bg-sky-600 hover:bg-sky-700 cursor-pointer transition-colors"
        whileTap={{scale: [1, 1.2, 1, 1.05, 1]}}
        >
      Pulse Button
    </motion.button>
  );
};

export default PulseButton;
