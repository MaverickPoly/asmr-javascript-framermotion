import { motion, useMotionValue, useTransform } from "framer-motion";

const BtnDragRotate = () => {
  const x = useMotionValue(0);

  const rotation = useTransform(x, [-800, 800], [0, 360]);

  return (
    <motion.div
      className="w-24 h-24 rounded-lg bg-fuchsia-600 flex items-center justify-center"
      style={{ rotate: rotation, x }}
      dragConstraints={{
        left: -800,
        right: 800,
        top: -400,
        bottom: 400,
      }}
      drag
    >
      Drag
    </motion.div>
  );
};

export default BtnDragRotate;
