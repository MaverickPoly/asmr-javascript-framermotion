"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const SlideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      {/* SideBar */}
      <motion.nav
        variants={{
          initial: { x: -400 },
          visible: { x: 0 },
        }}
        initial={"initial"}
        animate={isOpen ? "visible" : "initial"}
        transition={{duration: 0.3, ease: "easeIn"}}
        className="w-[350px] bg-neutral-900 h-screen shadow-xl shadow-neutral-700 fixed left-0 top-0 flex flex-col items-start p-5"
      >
        <motion.h4
            className="font-bold text-xl"

        >
            SideBar Content
        </motion.h4>
      </motion.nav>
      <main className="flex flex-col items-center flex-1 h-full justify-center">
        <motion.button
          className="bg-gray-800 px-5 py-3 text-white rounded-lg cursor-pointer hover:bg-gray-900 transition-colors"
          onClick={() => setIsOpen((prev) => !prev)}
          whileTap={{scale: 0.9}}

        >
          Toggle SideBar
        </motion.button>
      </main>
    </div>
  );
};

export default SlideMenu;
