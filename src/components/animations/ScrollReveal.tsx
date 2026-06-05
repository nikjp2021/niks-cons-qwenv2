'use client';

import { motion, useReducedMotion } from 'motion/react';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  distance?: number;
}

const directionMap = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
};

export function ScrollReveal({ children, delay = 0, direction = 'up', className, distance = 40 }: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const offset = { ...directionMap[direction] };
  if ('x' in offset) offset.x = distance * Math.sign(offset.x!);
  if ('y' in offset) offset.y = distance * Math.sign(offset.y!);

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={shouldReduceMotion ? { duration: 0 } : {
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
