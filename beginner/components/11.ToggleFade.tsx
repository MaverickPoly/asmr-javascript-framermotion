"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const ToggleFade = () => {
  const [isVisible, setIsVisible] = useState(false);
  const variants = {
    initial: { scale: 0.6, x: -160, opacity: 0 },
    visible: { scale: 1, x: 0, opacity: 1 },
    invisible: { scale: 0, x: 0 },
  };

  const handleClick = () => setIsVisible((prev) => !prev);

  return (
    <div className="flex items-center flex-col">
      <button
        className="rounded-lg px-4 py-3 bg-stone-600 hover:bg-stone-700 cursor-pointer"
        onClick={handleClick}
      >
        Toggle Visibility
      </button>
      <motion.div
        className="rounded-xl bg-stone-300 h-56 w-40 mt-10 shadow-lg flex items-center justify-center text-neutral-700"
        variants={variants}
        initial={"initial"}
        animate={isVisible ? "visible" : "initial"}
        transition={{duration: 0.4, ease: "easeIn"}}
      >Content...</motion.div>
    </div>
  );
};

export default ToggleFade;
