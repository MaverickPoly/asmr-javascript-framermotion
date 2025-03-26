"use client";
import { animate, motion } from "framer-motion";

const SlideInText = () => {
  return (
    <motion.div
      className="bg-emerald-600 px-5 py-3 rounded hover:bg-emerald-700 shadow-2xl shadow-neutral-200"
      variants={{
        initial: {x: -80, opacity: 0},
        animate: {x: 0, opacity: 1}
      }}
      initial={"initial"}
      animate={"animate"}
      transition={{duration: 0.6, ease: "easeInOut"}}
      drag
      dragConstraints={{top: 0, left: -300, right: 100, bottom: 0}}
    >
      My Text
    </motion.div>
  );
};

export default SlideInText;
