"use client";
import {motion} from "framer-motion";

const PulseEffect = () => {
  return (
    <motion.div
        className="w-14 h-14 bg-red-400 rounded-full"
        animate={{scale: [0.9, 0.9, 0.9, 1.1, 0.9, 0.9, 0.9]}}
        transition={{repeat: Infinity, duration: 1}}
    />
  )
}

export default PulseEffect