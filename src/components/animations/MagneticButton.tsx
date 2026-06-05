'use client';

import { motion, useMotionValue, useSpring } from 'motion/react';
import { ReactNode, useRef, MouseEvent } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export function MagneticButton({ 
  children, 
  className, 
  strength = 0.15, 
  href, 
  onClick, 
  type,
  disabled = false
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    if (!ref.current || disabled) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const motionProps = {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: { 
      x: springX, 
      y: springY,
      cursor: disabled ? 'not-allowed' : 'pointer'
    },
    whileHover: disabled ? {} : { 
      scale: 1.05,
      transition: { type: 'spring' as const, stiffness: 300, damping: 20 }
    },
    whileTap: disabled ? {} : { 
      scale: 0.95,
      transition: { type: 'spring' as const, stiffness: 400, damping: 25 }
    },
    className: `${className} ${disabled ? 'opacity-50 pointer-events-none' : ''}`,
  };

  if (href) {
    return <motion.a {...motionProps} ref={ref as React.Ref<HTMLAnchorElement>} href={href}>{children}</motion.a>;
  }

  return (
    <motion.button 
      {...motionProps} 
      ref={ref as React.Ref<HTMLButtonElement>} 
      onClick={onClick} 
      type={type || 'button'}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
    </motion.button>
  );
}
