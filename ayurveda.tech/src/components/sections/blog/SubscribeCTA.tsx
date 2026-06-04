"use client";

import Section from "@/components/ui/Section";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

export default function SubscribeCTA() {
  return (
    <Section background="light">
      <StaggerContainer className="max-w-xl mx-auto text-center bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-8 md:p-12">
        <StaggerItem>
          <h2 className="font-heading text-h2 font-semibold text-[var(--color-text-primary)] mb-4">
            Stay Inspired.
          </h2>
        </StaggerItem>
        <StaggerItem>
          <p className="font-body text-body-lg text-[var(--color-text-secondary)] leading-[var(--lh-body-lg)] mb-6">
            Get weekly Ayurvedic insights, tips, and updates delivered to your inbox.
          </p>
        </StaggerItem>
        <StaggerItem>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <label htmlFor="email-subscribe" className="sr-only">Email address</label>
            <input
              id="email-subscribe"
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] font-body text-body placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-[var(--color-accent)] text-white font-ui text-ui-sm font-semibold hover:bg-[var(--color-accent-hover)] transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </StaggerItem>
        <StaggerItem>
          <p className="font-ui text-ui-sm text-[var(--color-text-muted)] mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </StaggerItem>
      </StaggerContainer>
    </Section>
  );
}
