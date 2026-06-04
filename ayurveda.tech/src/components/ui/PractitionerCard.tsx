interface PractitionerCardProps {
  name: string;
  credentials: string;
  specialisation: string;
  experience: string;
  bio: string;
  photo?: string;
}

export default function PractitionerCard({
  name,
  credentials,
  specialisation,
  experience,
  bio,
}: PractitionerCardProps) {
  return (
    <div className="bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-6 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all duration-300 ease-[var(--ease-standard-productive)]">
      <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-4">
        <span className="font-heading text-h3 font-bold text-[var(--color-accent)]">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </span>
      </div>
      <h3 className="font-heading text-h4 font-semibold text-[var(--color-text-primary)]">
        {name}
      </h3>
      <p className="font-ui text-ui-sm font-medium text-[var(--color-accent)] mb-2">
        {credentials}
      </p>
      <div className="flex gap-3 mb-3">
        <span className="font-ui text-ui-sm text-[var(--color-text-muted)]">
          {specialisation}
        </span>
        <span className="font-ui text-ui-sm text-[var(--color-text-muted)]">
          · {experience}
        </span>
      </div>
      <p className="font-body text-body-sm text-[var(--color-text-secondary)] leading-[var(--lh-body)] mb-4">
        {bio}
      </p>
      <button className="font-ui text-ui-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors">
        View Profile →
      </button>
    </div>
  );
}
