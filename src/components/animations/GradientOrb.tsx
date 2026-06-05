'use client';

import { motion, useReducedMotion } from 'motion/react';

interface GradientOrbProps {
  color?: string;
  size?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  className?: string;
  delay?: number;
}

export function GradientOrb({
  color = 'rgba(20, 184, 166, 0.15)',
  size = 500,
  top,
  left,
  right,
  bottom,
  className,
  delay = 0,
}: GradientOrbProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 1.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute pointer-events-none ${className || ''}`}
      style={{
        top,
        left,
        right,
        bottom,
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: 'blur(60px)',
      }}
    />
  );
}
