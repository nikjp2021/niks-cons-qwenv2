import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  accentColor?: string;
}

export function Card({ children, className, hover = true, accentColor }: CardProps) {
  return (
    <div
      className={`relative rounded-2xl border border-[var(--surface-3)]/50 bg-[var(--surface-1)] overflow-hidden ${
        hover ? 'transition-all duration-500 hover:-translate-y-1 hover:border-[var(--surface-4)]' : ''
      } ${className || ''}`}
      style={accentColor ? {
        boxShadow: `0 0 0 0 transparent`,
      } : undefined}
    >
      {accentColor && (
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-100"
          style={{
            background: `radial-gradient(circle at 50% 0%, color-mix(in srgb, ${accentColor} 8%, transparent) 0%, transparent 60%)`,
          }}
        />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}
