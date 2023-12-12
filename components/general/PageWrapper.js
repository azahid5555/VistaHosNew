"use client";
import { motion } from "framer-motion";

export const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 30 }}
  >
    {children}
  </motion.div>
);
