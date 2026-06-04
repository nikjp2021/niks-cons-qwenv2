"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external = false,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-ui font-semibold rounded-[var(--radius-button)] transition-all duration-[var(--duration-fast)] ease-[var(--ease-standard-productive)] cursor-pointer no-underline leading-none border";

  const variantStyles = {
    primary:
      "bg-[var(--color-accent)] text-[var(--color-text-on-accent)] border-none shadow-[var(--shadow-button)] hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow-button-hover)]",
    secondary:
      "bg-transparent text-[var(--color-accent)] border-2 border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-text-on-accent)]",
    outline:
      "bg-transparent text-[var(--color-text-primary)] border-2 border-[var(--color-border)] hover:bg-[var(--color-surface-alt)] hover:border-[var(--color-text-secondary)]",
    ghost:
      "bg-transparent text-[var(--color-text-primary)] border-none hover:bg-[var(--color-surface-alt)]",
  };

  const sizeStyles = {
    sm: "px-5 py-2.5 text-ui-sm",
    md: "px-8 py-3.5 text-ui",
    lg: "px-10 py-4.5 text-body",
  };

  const combinedClass = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.02, y: -1 },
    whileTap: disabled ? {} : { scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 300, damping: 30 },
  };

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClass}
          {...motionProps}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <Link href={href} passHref legacyBehavior>
        <motion.a className={combinedClass} {...motionProps}>
          {children}
        </motion.a>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClass}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
