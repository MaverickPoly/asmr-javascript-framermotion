"use client";
import { motion } from "framer-motion";

const WhileInView = () => {
  return (
    <>
      <div className="h-[300vh]"></div>
      <motion.div
        className="bg-amber-300 rounded-lg p-3 flex flex-col items-center"
        initial={{ scale: 0.5, opacity: 0 }}
        transition={{duration: 0.6}}
        whileInView={{ scale: 1, opacity: 1 }}
      >
        <h2>While In View</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fugit
          rem eius illo commodi! Saepe nobis repudiandae voluptatum officia
          aperiam!
        </p>
      </motion.div>
    </>
  );
};

export default WhileInView;
