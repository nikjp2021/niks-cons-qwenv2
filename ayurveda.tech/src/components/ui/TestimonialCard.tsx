interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export default function TestimonialCard({
  quote,
  author,
  role,
}: TestimonialCardProps) {
  return (
    <div className="bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-6 md:p-8 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all duration-300 ease-[var(--ease-standard-productive)] flex flex-col">
      <div className="mb-1">
        <svg
          width="32"
          height="24"
          viewBox="0 0 32 24"
          fill="none"
          className="text-[var(--color-accent)]/20"
        >
          <path
            d="M8.8 0C13.6 0 16.8 3.2 16.8 8.8C16.8 17.6 8 24 0 24L2.4 19.2C7.2 17.6 9.6 14.4 9.6 10.4H6.4C4 10.4 2.4 8.8 2.4 6.4C2.4 4 4 2.4 6.4 2.4H8.8V0ZM24 0C28.8 0 32 3.2 32 8.8C32 17.6 23.2 24 15.2 24L17.6 19.2C22.4 17.6 24.8 14.4 24.8 10.4H21.6C19.2 10.4 17.6 8.8 17.6 6.4C17.6 4 19.2 2.4 21.6 2.4H24V0Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <blockquote className="font-body text-body text-[var(--color-text-secondary)] leading-[var(--lh-body)] italic mb-6 flex-1">
        "{quote}"
      </blockquote>
      <div className="pt-4 border-t border-[var(--color-border)]">
        <p className="font-heading text-h4 font-semibold text-[var(--color-text-primary)]">
          {author}
        </p>
        <p className="font-ui text-ui-sm text-[var(--color-text-muted)]">
          {role}
        </p>
      </div>
    </div>
  );
}
