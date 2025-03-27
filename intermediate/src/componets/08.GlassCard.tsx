import { motion } from "framer-motion";

interface GlassCardProp {
  title: string;
  description: string;
}

const GlassCard = ({ title, description }: GlassCardProp) => {
  return (
    <motion.div
      className="w-80 p-6 bg-neutral-900/10 backdrop-blur-lg shadow-lg border border-white/20 rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </motion.div>
  );
};

export default GlassCard;
