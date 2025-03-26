"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const ExpandCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div className="w-96 border border-neutral-700">
      <div
        className="p-2 flex justify-between cursor-pointer hover:bg-neutral-900 items-center"
        onClick={handleClick}
      >
        <span className="text-lg">Open Card</span>
        <motion.span
          className="text-2xl"
          animate={{ rotate: isOpen ? -180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ⬆️
        </motion.span>
      </div>
      <motion.div
        className="border-t border-neutral-800 overflow-hidden"
        variants={{
          collapsed: { height: 0, opacity: 0 },
          expanded: { height: "auto", opacity: 1, padding: 12 },
        }}
        initial={"collapsed"}
        animate={isOpen ? "expanded" : "collapsed"}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-semibold mb-2">Card Content</h3>
        <p className="text-neutral-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
          quidem rerum corporis autem nostrum iure!
        </p>
      </motion.div>
    </div>
  );
};

export default ExpandCard;
