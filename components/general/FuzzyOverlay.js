"use client";
import { motion } from "framer-motion";
export default function FuzzyOverla() {
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{
        transform: "translateX(10%) translateY(10%)",
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "mirror",
      }}
      style={{
        backgroundImage: 'url("/assets/imgs/black-noise.png")',
      }}
      className="pointer-events-none position-absolute inset-N100 opacity-10 fuzzOverlay"
    />
  );
}
