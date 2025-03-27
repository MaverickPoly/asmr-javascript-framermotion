import { motion } from "framer-motion";
import { useState } from "react";

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className=" w-52 h-72 perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full rounded-lg shadow-md cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center rounded-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <h2>Front Side</h2>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center rounded-lg"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h2>Back Side</h2>
        </div>
      </motion.div>
    </div>
  );
};

export default CardFlip;
