'use client';

import { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function Marquee({ children, speed = 30, className }: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className || ''}`}>
      <div
        className="animate-marquee flex whitespace-nowrap"
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
