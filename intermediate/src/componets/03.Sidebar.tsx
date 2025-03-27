import { motion } from "framer-motion";
import {
  X,
  PanelRightClose,
  HomeIcon,
  Info,
  Settings,
  Contact,
} from "lucide-react";
import { useState } from "react";

const AnimatedSideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex w-full h-full">
      {/* SideBar */}
      <motion.div
        className="block items-start flex-col shadow-lg h-screen bg-neutral-900 overflow-hidden"
        variants={{
          closed: { width: "0" },
          open: { width: "300px", padding: "20px" },
        }}
        initial={"closed"}
        animate={isOpen ? "open" : "closed"}
      >
        <div className="flex justify-between items-center w-full mb-8">
          <h3 className="text-2xl font-bold">SideBar</h3>
          <button
            className="w-8 h-8 bg-transparent hover:bg-neutral-800 flex items-center justify-center rounded-md cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <X size={25} />
          </button>
        </div>

        {/* Sidebar content */}
        <div className="flex flex-col gap-1 w-full">
          <a
            href="#"
            className="text-lg flex gap-3 items-center rounded-lg px-3 py-2 hover:bg-neutral-800 w-full"
          >
            <HomeIcon />
            Home
          </a>
          <a
            href="#"
            className="text-lg flex gap-3 items-center rounded-lg px-3 py-2 hover:bg-neutral-800 w-full"
          >
            <Info />
            About
          </a>
          <a
            href="#"
            className="text-lg flex gap-3 items-center rounded-lg px-3 py-2 hover:bg-neutral-800 w-full"
          >
            <Settings />
            Settings
          </a>
          <a
            href="#"
            className="text-lg flex gap-3 items-center rounded-lg px-3 py-2 hover:bg-neutral-800 w-full"
          >
            <Contact />
            Contact
          </a>
        </div>
      </motion.div>

      {/* Main Part */}
      <div className="flex flex-col w-full">
        <button
          className="w-12 h-12 bg-transparent hover:bg-neutral-900 flex items-center justify-center rounded-md cursor-pointer m-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <PanelRightClose size={28} />
        </button>
      </div>
    </div>
  );
};

export default AnimatedSideBar;
