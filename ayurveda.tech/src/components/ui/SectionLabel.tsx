interface SectionLabelProps {
  children: string;
  className?: string;
}

export default function SectionLabel({
  children,
  className = "",
}: SectionLabelProps) {
  return (
    <span
      className={`block font-ui text-ui-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-accent)] mb-2 ${className}`}
    >
      {children}
    </span>
  );
}
