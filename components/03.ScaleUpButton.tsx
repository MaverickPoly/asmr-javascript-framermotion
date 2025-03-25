"use client";
import { motion } from "framer-motion";

const ScaleUpButton = () => {
  const variants = {
    initial: { scale: 0.7 },
    animate: { scale: 1 },
  };

  const handleClick = () => {
    console.log("Framer Motion Button clicked!");
    // alert("Clicked!");
  };

  return (
    <motion.button
      variants={variants}
      initial={"initial"}
      animate={"animate"}
      className="bg-amber-600 rounded px-5 py-2 hover:bg-amber-700 transition-colors"
      transition={{duration: 0.5, type: "spring", stiffness: 300}}
      whileHover={{rotate: 50}}
      whileTap={{scale: 0.7}}
      onClick={handleClick}
    >
      Click Me!
    </motion.button>
  );
};

export default ScaleUpButton;
