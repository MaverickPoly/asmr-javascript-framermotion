import { motion, useMotionValue, useSpring } from "framer-motion";
import { ChangeEvent, useEffect, useState } from "react";
import { Carrot } from "lucide-react";

const CustomCursor = () => {
  // Need to set `cursor: none` in settings.
  const mouseSize = useMotionValue(30);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isIconHovering, setIsIconHovering] = useState(false);

  const smoothX = useSpring(x);
  const smoothY = useSpring(y);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [x, y]);

  const handleHoverStart = () => {
    mouseSize.set(40);
    setIsIconHovering(true);
  };
  const handleHoverEnd = () => {
    mouseSize.set(20);
    setIsIconHovering(false);
  };

  return (
    <>
      {/* Custom Cursor: */}
      <motion.div
        // className="fixed top-0 left-0 rounded-full bg-fuchsia-500 pointer-events-none z-50"
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50"
        style={{
          //   width: mouseSize,
          //   height: mouseSize,
          x: x,
          y: y,
          //   x: smoothX,
          //   y: smoothY,
        }}
      >
        <motion.div animate={{ rotate: isIconHovering ? 270 : 90 }}>
          <Carrot size={30} width={mouseSize.get()} height={mouseSize.get()} />
        </motion.div>{" "}
      </motion.div>

      {/* Other Contents */}
      <div className="flex flex-col items-center">
        <div className="flex gap-8 items-center">
          <motion.button
            className="px-5 py-3 rounded-lg border border-neutral-800 bg-transparent hover:bg-neutral-900"
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Hover me
          </motion.button>

          <motion.div
            className="w-40 h-40 rounded-lg flex items-center justify-center shadow-xl bg-sky-700 hover:bg-sky-600"
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
          >
            This is Box
          </motion.div>
        </div>
        <p className="max-w-xl mt-8 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
          praesentium culpa facere iste aut deleniti molestiae animi debitis,
          ipsum error enim esse. Facere odio fugiat id impedit libero cum
          deleniti.
        </p>
      </div>
    </>
  );
};

export default CustomCursor;
