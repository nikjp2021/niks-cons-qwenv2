interface BadgeProps {
  children: string;
  variant?: "default" | "vata" | "pitta" | "kapha" | "accent";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variantStyles = {
    default:
      "bg-[var(--color-surface-alt)] text-[var(--color-text-secondary)] border border-[var(--color-border)]",
    vata: "bg-[var(--color-vata-light)] text-[var(--color-vata)] border border-[var(--color-vata)]",
    pitta:
      "bg-[var(--color-pitta-light)] text-[var(--color-pitta)] border border-[var(--color-pitta)]",
    kapha:
      "bg-[var(--color-kapha-light)] text-[var(--color-kapha)] border border-[var(--color-kapha)]",
    accent:
      "bg-[var(--color-accent)] text-[var(--color-text-on-accent)] border border-[var(--color-accent)]",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-ui text-ui-sm font-medium tracking-[0.02em] ${variantStyles[variant]} ${className}`}
    >
      {variant === "accent" && (
        <span className="w-1.5 h-1.5 rounded-full bg-current" />
      )}
      {children}
    </span>
  );
}
