"use client";
import {motion} from "framer-motion";

const DragBox = () => {
  return (
    <motion.div
        className="w-36 h-36 bg-lime-600 rounded-4xl"
        drag
        dragConstraints={{
            top: -100,
            left: -100,
            right: 100,
            bottom: 100,
        }}
    />
  )
}

export default DragBox;