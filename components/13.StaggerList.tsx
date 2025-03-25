"use client";
import { motion } from "framer-motion";

const StaggerList = () => {
  return (
    <motion.div className="flex justify-center gap-3" transition={{ staggerChildren: 0 }}>
      {[...Array(5)].map((_, id) => (
        <motion.div
          key={id}
          className="w-28 h-28 bg-orange-500 rounded"
          initial={{y: 60}}
          animate={{ y: -60 }}
          transition={{ duration: 0.3, delay: id * 0.1, ease: "easeInOut" }}
        />
      ))}
    </motion.div>
  );
};

export default StaggerList;
