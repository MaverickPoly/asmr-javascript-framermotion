"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";

const ColorDragBox = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const backgroundColor = useTransform(x, [-400, 400], ["#f00", "#00f"]);
  const scale = useTransform(y, [-200, 200], [0.5, 1.5]);

  return (
    <motion.div
      className="w-32 h-32 rounded-lg text-sm flex items-center justify-center"
      drag
      dragConstraints={{
        left: -400,
        right: 400,
        top: -200,
        bottom: 200,
      }}
      style={{ backgroundColor, x, scale, y }}
    >
      {backgroundColor}
    </motion.div>
  );
};

export default ColorDragBox;
