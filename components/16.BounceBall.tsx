"use client"
import {motion} from "framer-motion";

const BounceBall = () => {
  return (
    <motion.div 
    className="bg-purple-500 w-24 h-24 rounded-xl"
        animate={{y: [-10, 0, 10, 0, -10]}}
        transition={{repeat: Infinity, ease: "linear", duration: 0.6}}
    />
  )
}

export default BounceBall