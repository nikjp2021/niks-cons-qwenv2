"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "default" | "glass" | "elevated";
}

export default function Card({
  children,
  className = "",
  hover = true,
  variant = "default",
}: CardProps) {
  const variantStyles = {
    default:
      "bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-6 shadow-[var(--shadow-sm)]",
    glass:
      "bg-[var(--color-surface-card)]/80 backdrop-blur-sm border border-[var(--color-border)] rounded-[var(--radius-card)] p-6 shadow-[var(--shadow-md)]",
    elevated:
      "bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-6 shadow-[var(--shadow-lg)]",
  };

  const base = variantStyles[variant];

  if (hover) {
    return (
      <motion.div
        whileHover={{ y: -4 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className={`${base} transition-shadow duration-[var(--duration-normal)] ease-[var(--ease-standard-productive)] hover:shadow-[var(--shadow-card-hover)] ${className}`}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={`${base} ${className}`}>{children}</div>;
}
