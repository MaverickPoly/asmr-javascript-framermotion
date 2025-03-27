import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface SectionProps {
  title: string;
  description: string;
}

const PortfolioSection = ({ title, description }: SectionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.2 1", "0.8 1"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [500, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="w-full max-w-3xl bg-neutral-900/10 backdrop-blur-lg p-6 rounded-xl border border-neutral-600/20 shadow-lg"
    >
      <h2>This is a sample project card</h2>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-neutral-300">{description}</p>
    </motion.div>
  );
};

export default PortfolioSection;
