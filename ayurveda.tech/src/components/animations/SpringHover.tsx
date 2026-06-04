"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface SpringHoverProps {
  children: ReactNode;
  className?: string;
  y?: number;
  scale?: number;
}

export default function SpringHover({
  children,
  className = "",
  y = -4,
  scale = 1.02,
}: SpringHoverProps) {
  return (
    <motion.div
      whileHover={{ y, scale }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
