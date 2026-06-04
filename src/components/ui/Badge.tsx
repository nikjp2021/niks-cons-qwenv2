import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  color?: string;
  className?: string;
  dot?: boolean;
}

export function Badge({ children, color = '#14b8a6', className, dot = true }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase ${className || ''}`}
      style={{
        background: `color-mix(in srgb, ${color} 12%, transparent)`,
        border: `1px solid color-mix(in srgb, ${color} 25%, transparent)`,
        color,
      }}
    >
      {dot && (
        <span
          className="w-1.5 h-1.5 rounded-full animate-pulse"
          style={{ background: color }}
        />
      )}
      {children}
    </span>
  );
}
