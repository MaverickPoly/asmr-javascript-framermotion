"use client";
import {motion} from "framer-motion";

const PathAnimation = () => {
  return (
    <div className="relative">
        <div className="absolute top-1/2 left-1/2 border border-neutral-800 w-64 h-64 -translate-x-1/2 -translate-y-1/2" />

    <motion.div 
        className="w-20 h-20 rounded-md bg-pink-400"
        initial={{x: 128, y: -128}}
        animate={{x: [128, 128, -128, -128, 128], y: [-128, 128, 128, -128, -128] }}
        transition={{ease: "linear", repeat: Infinity, duration: 4}}
        />
        </div>
  )
}

export default PathAnimation