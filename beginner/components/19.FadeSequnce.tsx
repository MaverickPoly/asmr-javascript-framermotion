"use client";
import {motion} from "framer-motion";

const FadeSequnce = () => {
  return (
    <motion.div 
        className="bg-neutral-300 rounded-lg w-32 h-32"
        variants={{
            animate: {opacity: [0, 0, 1, 0], x: [0 , 0, 100, 100]}
        }}
        animate={"animate"}
        transition={{repeat: Infinity, duration: 1.3}}
    />
  )
}

export default FadeSequnce