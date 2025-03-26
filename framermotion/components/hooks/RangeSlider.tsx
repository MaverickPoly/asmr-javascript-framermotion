"use client";
import {motion, useMotionValue, useSpring} from "framer-motion";
import { ChangeEvent } from "react";

const RangeSlider = () => {
    // const scale = useMotionValue(1);
    const scale = useSpring(1);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        scale.set(parseFloat(e.target.value));
    }

  return (
    <div className="flex flex-col items-center justify-between">
        <motion.div className="w-24 h-24 bg-stone-400 rounded-full" style={{scale}}/>

        <div className="mt-44">
            <input type="range" min={0.5} onChange={handleChange} defaultValue={1} max={5} step={0.01} />

        </div>
    </div>
  )
}

export default RangeSlider
