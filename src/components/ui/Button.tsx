import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Button({ children, variant = 'primary', size = 'md', className, ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[--color-brand-500]';

  const variants = {
    primary: 'bg-[var(--text-100)] text-[var(--surface-0)] hover:opacity-90',
    secondary: 'border border-[var(--surface-4)] text-[var(--text-200)] hover:border-[var(--surface-5)] hover:text-[var(--text-100)]',
    ghost: 'text-[var(--text-300)] hover:text-[var(--text-100)] hover:bg-[var(--surface-2)]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className || ''}`} {...props}>
      {children}
    </button>
  );
}
