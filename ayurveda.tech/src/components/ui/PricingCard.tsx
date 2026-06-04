interface PricingCardProps {
  title: string;
  description: string;
  duration: string;
  price: string;
  cta: string;
  featured?: boolean;
}

export default function PricingCard({
  title,
  description,
  duration,
  price,
  cta,
  featured = false,
}: PricingCardProps) {
  return (
    <div
      className={`bg-[var(--color-surface-card)] border rounded-[var(--radius-card)] p-6 shadow-[var(--shadow-sm)] transition-all duration-300 ease-[var(--ease-standard-productive)] ${
        featured
          ? "border-[var(--color-accent)] ring-1 ring-[var(--color-accent)] shadow-[var(--shadow-md)] scale-[1.02]"
          : "border-[var(--color-border)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1"
      }`}
    >
      {featured && (
        <span className="inline-block px-3 py-1 mb-3 rounded-full bg-[var(--color-accent)] text-[var(--color-text-on-accent)] font-ui text-caption font-semibold">
          POPULAR
        </span>
      )}
      <h3 className="font-heading text-h3 font-bold text-[var(--color-text-primary)] mb-1">
        {title}
      </h3>
      <p className="font-body text-body-sm text-[var(--color-text-secondary)] leading-[var(--lh-body)] mb-4">
        {description}
      </p>
      <div className="flex items-baseline gap-2 mb-4">
        <span className="font-heading text-h2 font-bold text-[var(--color-accent)]">
          {price}
        </span>
        <span className="font-ui text-ui-sm text-[var(--color-text-muted)]">
          / {duration}
        </span>
      </div>
      <button
        className={`w-full py-3 px-6 rounded-[var(--radius-button)] font-ui text-ui-sm font-semibold transition-all duration-200 ${
          featured
            ? "bg-[var(--color-accent)] text-[var(--color-text-on-accent)] hover:bg-[var(--color-accent-hover)] shadow-[var(--shadow-button)]"
            : "bg-transparent text-[var(--color-accent)] border-2 border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-text-on-accent)]"
        }`}
      >
        {cta}
      </button>
    </div>
  );
}
