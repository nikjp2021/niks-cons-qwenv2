'use client';

import { motion, useMotionValue, useTransform, animate, useInView } from 'motion/react';
import { useEffect, useRef } from 'react';

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}

export function Counter({ target, suffix = '', prefix = '', className, duration = 2 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => prefix + Math.round(latest) + suffix);

  useEffect(() => {
    if (isInView) {
      animate(count, target, {
        duration,
        ease: [0.16, 1, 0.3, 1],
      });
    }
  }, [isInView, count, target, duration]);

  return <motion.span ref={ref} className={className}>{rounded}</motion.span>;
}
