import Card from "./Card";
import { LucideIcon, Leaf } from "lucide-react";
import Link from "next/link";
import * as Icons from "lucide-react";

interface EcosystemLinkProps {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export default function EcosystemLink({
  title,
  description,
  href,
  icon,
}: EcosystemLinkProps) {
  const IconComponent = (Icons as unknown as Record<string, LucideIcon>)[icon] || Leaf;
  const isExternal = href.startsWith("http");

  const content = (
    <Card hover className="flex flex-col gap-3 h-full">
      <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)]">
        <IconComponent size={22} />
      </div>
      <div>
        <h3 className="font-heading text-h4 font-semibold text-[var(--color-text-primary)] mb-1">
          {title}
        </h3>
        <p className="font-body text-body-sm text-[var(--color-text-secondary)] leading-[var(--lh-body)]">
          {description}
        </p>
      </div>
      <span className="font-ui text-ui-sm font-medium text-[var(--color-accent)] mt-auto">
        {isExternal ? "Open ↗" : "Learn more →"}
      </span>
    </Card>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block no-underline"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="block no-underline">
      {content}
    </Link>
  );
}
