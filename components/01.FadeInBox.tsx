"use client";

import { motion } from "framer-motion";

const FadeInBox = () => {
  return (
    <motion.div
      className="box"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{scale: 0}}
      drag
      transition={{
        duration: 1,
        ease: "easeInOut",
        stiffness: 300,
        type: "spring",
      }}
    />
  );
};

export default FadeInBox;
