"use client";

import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";

interface NewsletterFormProps {
  incentive?: string;
  className?: string;
}

export default function NewsletterForm({
  incentive,
  className = "",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup — integration pending
    alert("Newsletter subscription — integration pending. Thank you!");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      {incentive && (
        <p className="font-body text-body-sm text-[var(--color-text-secondary)] mb-3">
          {incentive}
        </p>
      )}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Mail
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="w-full pl-9 pr-3 py-3 bg-[var(--color-surface-card)] border-2 border-[var(--color-border)] rounded-[var(--radius-input)] font-ui text-ui-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:shadow-[0_0_0_3px_rgba(45,106,79,0.15)] transition-all duration-200"
          />
        </div>
        <button
          type="submit"
          className="shrink-0 px-4 py-3 bg-[var(--color-accent)] text-[var(--color-text-on-accent)] rounded-[var(--radius-button)] font-ui text-ui-sm font-semibold hover:bg-[var(--color-accent-hover)] transition-colors duration-200 flex items-center gap-1"
        >
          Subscribe
          <ArrowRight size={16} />
        </button>
      </div>
    </form>
  );
}
