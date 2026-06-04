'use client';

import { motion, useMotionValue, useTransform, animate, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

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
  const [hasAnimated, setHasAnimated] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => prefix + Math.round(latest) + suffix);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      animate(count, target, {
        duration,
        ease: [0.16, 1, 0.3, 1],
      });
    }
  }, [isInView, count, target, duration, hasAnimated]);

  return (
    <motion.span
      ref={ref}
      className={className}
      suppressHydrationWarning
    >
      {rounded}
    </motion.span>
  );
}
