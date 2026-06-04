interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  slug: string;
}

export default function BlogCard({
  title,
  excerpt,
  category,
  author,
  date,
  slug,
}: BlogCardProps) {
  const categoryColors: Record<string, string> = {
    "Dosha Guides": "bg-[var(--color-vata-light)] text-[var(--color-vata)] border-[var(--color-vata)]",
    "Wellness Tips": "bg-[var(--color-pitta-light)] text-[var(--color-pitta)] border-[var(--color-pitta)]",
    "Seasonal Routines": "bg-[var(--color-kapha-light)] text-[var(--color-kapha)] border-[var(--color-kapha)]",
    "Practitioner Insights": "bg-[var(--color-accent)]/10 text-[var(--color-accent)] border-[var(--color-accent)]",
    "Recipes & Remedies": "bg-[var(--color-primary-light)]/20 text-[var(--color-primary)] border-[var(--color-primary)]",
  };

  return (
    <article className="bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all duration-300 ease-[var(--ease-standard-productive)]">
      <div className="h-48 bg-[var(--color-surface-alt)] flex items-center justify-center">
        <span className="font-ui text-ui-sm text-[var(--color-text-muted)]">
          Featured Image
        </span>
      </div>
      <div className="p-6">
        <span
          className={`inline-block px-3 py-1 rounded-full font-ui text-caption font-medium border ${categoryColors[category] || categoryColors["Dosha Guides"]} mb-3`}
        >
          {category}
        </span>
        <h3 className="font-heading text-h4 font-semibold text-[var(--color-text-primary)] mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="font-body text-body-sm text-[var(--color-text-secondary)] leading-[var(--lh-body)] mb-4 line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-ui text-ui-sm text-[var(--color-text-muted)]">
            {author} · {date}
          </span>
          <span className="font-ui text-ui-sm font-medium text-[var(--color-accent)]">
            Read Article →
          </span>
        </div>
      </div>
    </article>
  );
}
