"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const TapColorChange = () => {
    const getRandomInt = (max: number) => {
        return Math.floor(Math.random() * max);
    }
  const getRandomColor = () => {
    const alpha = Math.random().toFixed(2);
    return `rgba(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)}, ${alpha})`;
  };

  const [bgColor, setBgColor] = useState("rgba(200, 0, 0, 0.8)");

  return (
    <motion.div
      className="w-40 h-40 rounded-md"
      style={{background: bgColor, boxShadow: "0 0px 20px rgba(255, 255, 255, 0.3)"}}
      whileTap={{scale: 0.97}}
      onTap={() => setBgColor(getRandomColor())}
    />
  );
};

export default TapColorChange;
