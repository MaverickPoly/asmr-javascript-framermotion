import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Content */}
      <div className="flex flex-col items-center">
        <h2 className="text-2xl mb-8 font-semibold">
          Animated Modal with Framer Motion Animations
        </h2>
        <motion.button
          className="px-4 py-2 rounded-lg bg-transparent cursor-pointer border border-neutral-700 hover:bg-neutral-900"
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
        >
          Show Modal
        </motion.button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div className="fixed w-screen h-screen bg-black/85 flex items-center justify-center">
            <motion.div
              className="bg-neutral-900 p-4 rounded-lg flex flex-col gap-2 max-w-lg w-full"
              variants={{
                hidden: { scale: 0.5, opacity: 0, x: -200 },
                visible: { scale: 1, opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={isOpen ? "visible" : "hidden"}
              exit="hidden"
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-semibold">Modal Box</h2>
              <p className="text-neutral-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                qui debitis rem officia consequatur obcaecati commodi numquam
                repellat quibusdam molestiae.
              </p>

              <div className="flex justify-end gap-2">
                <motion.button
                  className="rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer px-4 py-2"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Cancel
                </motion.button>
                <motion.button
                  className="rounded-md bg-neutral-800 hover:bg-neutral-700 cursor-pointer px-4 py-2"
                  whileTap={{ scale: 0.96 }}
                  whileHover={{ scale: 1.02 }}
                >
                  OK
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
