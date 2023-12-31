import { motion } from "framer-motion";
import "./index.css";

export const Spinner = () => (
  <motion.div
    className="box"
    initial={{ opacity: 0 }}
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 360, 360, 360],
      borderRadius: ["0%", "0%", "50%", "50%", "0%"],
      opacity: 1,
    }}
    exit={{ opacity: 0 }}
    transition={{
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 2,
    }}
  />
);
