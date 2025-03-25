"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const UseScroll2 = () => {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 1000], [1, 0.7]);
  const borderRadius = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <div className="bg-white">
      <motion.img
        src="https://plus.unsplash.com/premium_photo-1661962388409-eb7a041606fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Camel Image"
        className="bg-white"
        style={{ scale, borderRadius }}
      />
      <div className="flex h-[200vh] items-center justify-center bg-neutral-950">
        <h2 className="text-3xl font-bold">Scroll Down</h2>
      </div>
    </div>
  );
};

export default UseScroll2;
