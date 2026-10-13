import { motion } from "framer-motion";

const glassEffect = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.02,
        y: -5,
      }}
      className={`
        rounded-3xl
        border
        border-slate-700/50
        bg-white/5
        backdrop-blur-lg
        shadow-xl
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default glassEffect;