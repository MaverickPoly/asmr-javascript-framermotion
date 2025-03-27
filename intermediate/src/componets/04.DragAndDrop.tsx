import { motion } from "framer-motion";

const containerVariants = {
  initial: { opacity: 1 },
  animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  initial: { y: -50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const DragAndDrop = () => {
  return (
    <motion.div
      className="flex gap-3"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div
        variants={cardVariants}
        drag
        dragConstraints={{ top: -200, left: -200, right: 200, bottom: 200 }}
        className="rounded-xl w-52 h-72 shadow-lg cursor-pointer bg-gradient-to-br from-orange-700 to-orange-200 flex items-center justify-center"
      >
        Item 1
      </motion.div>
      <motion.div
        variants={cardVariants}
        drag
        dragConstraints={{ top: -200, left: -200, right: 200, bottom: 200 }}
        className="rounded-xl w-52 h-72 shadow-lg cursor-pointer bg-gradient-to-br from-blue-700 to-blue-200 flex items-center justify-center"
      >
        Item 2
      </motion.div>
      <motion.div
        variants={cardVariants}
        drag
        dragConstraints={{ top: -200, left: -200, right: 200, bottom: 200 }}
        className="rounded-xl w-52 h-72 shadow-lg cursor-pointer bg-gradient-to-br from-purple-700 to-purple-200 flex items-center justify-center"
      >
        Item 3
      </motion.div>
      <motion.div
        variants={cardVariants}
        drag
        dragConstraints={{ top: -200, left: -200, right: 200, bottom: 200 }}
        className="rounded-xl w-52 h-72 shadow-lg cursor-pointer bg-gradient-to-br from-emerald-700 to-emerald-200 flex items-center justify-center"
      >
        Item 4
      </motion.div>
      <motion.div
        variants={cardVariants}
        drag
        dragConstraints={{ top: -200, left: -200, right: 200, bottom: 200 }}
        className="rounded-xl w-52 h-72 shadow-lg cursor-pointer bg-gradient-to-br from-red-700 to-red-200 flex items-center justify-center"
      >
        Item 5
      </motion.div>
    </motion.div>
  );
};

export default DragAndDrop;
