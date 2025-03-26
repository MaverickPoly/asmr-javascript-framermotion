"use client"
import {motion} from "framer-motion"

const HoverScale = () => {
  return (
    <motion.div 
        className="w-36 h-36 bg-blue-600 rounded-lg"
        whileHover={{scale: 1.2,}}
        transition={{type: "tween", stiffness: 300}}
    />
  )
}

export default HoverScale