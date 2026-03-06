"use client";

import { motion } from "framer-motion";

export default function AnimatedGrid() {
  return (
    <motion.div
      className="animated-grid pointer-events-none fixed inset-0 z-0 h-full w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      aria-hidden="true"
    />
  );
}
