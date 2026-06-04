interface DoshaCardProps {
  dosha: "vata" | "pitta" | "kapha";
  name: string;
  elements: string;
  description: string;
  characteristics: string;
  focusAreas: string;
  cta: string;
}

export default function DoshaCard({
  dosha,
  name,
  elements,
  description,
  characteristics,
  focusAreas,
  cta,
}: DoshaCardProps) {
  const colorMap = {
    vata: {
      bg: "bg-[var(--color-vata-light)]",
      text: "text-[var(--color-vata)]",
      border: "border-[var(--color-vata)]",
      dot: "bg-[var(--color-vata)]",
    },
    pitta: {
      bg: "bg-[var(--color-pitta-light)]",
      text: "text-[var(--color-pitta)]",
      border: "border-[var(--color-pitta)]",
      dot: "bg-[var(--color-pitta)]",
    },
    kapha: {
      bg: "bg-[var(--color-kapha-light)]",
      text: "text-[var(--color-kapha)]",
      border: "border-[var(--color-kapha)]",
      dot: "bg-[var(--color-kapha)]",
    },
  };

  const colors = colorMap[dosha];

  return (
    <div className="bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-6 md:p-8 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all duration-300 ease-[var(--ease-standard-productive)]">
      <div className="flex items-center gap-3 mb-4">
        <span
          className={`inline-block px-3 py-1 rounded-full font-ui text-ui-sm font-medium ${colors.bg} ${colors.text}`}
        >
          {elements}
        </span>
      </div>
      <h3 className={`font-heading text-h3 font-bold text-[var(--color-text-primary)] mb-3 ${colors.text}`}>
        {name}
      </h3>
      <p className="font-body text-body text-[var(--color-text-secondary)] leading-[var(--lh-body)] mb-4">
        {description}
      </p>
      <div className="space-y-2 mb-4">
        <div className="flex items-start gap-2">
          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${colors.dot}`} />
          <span className="font-body text-body-sm text-[var(--color-text-primary)]">
            <strong>Characteristics:</strong> {characteristics}
          </span>
        </div>
        <div className="flex items-start gap-2">
          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${colors.dot}`} />
          <span className="font-body text-body-sm text-[var(--color-text-primary)]">
            <strong>Focus areas:</strong> {focusAreas}
          </span>
        </div>
      </div>
      <button
        className={`font-ui text-ui-sm font-semibold ${colors.text} hover:opacity-80 transition-opacity`}
      >
        {cta}
      </button>
    </div>
  );
}
