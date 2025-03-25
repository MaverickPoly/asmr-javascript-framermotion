"use client";
import {motion, useScroll, useTransform} from "framer-motion";

const UseScroll1 = () => {
    const {scrollY} = useScroll();

    const scale = useTransform(scrollY, [0, 800], [1, 0])
    const opacity = useTransform(scrollY, [0, 800], [1, 0])

  return (
    <div className="h-[200vh] flex items-center justify-center">
        <motion.div 
            className="w-32 h-40 bg-blue-500 rounded-xl shadow-2xl"
            style={{scale, opacity}}
        />
    </div>
  )
}

export default UseScroll1