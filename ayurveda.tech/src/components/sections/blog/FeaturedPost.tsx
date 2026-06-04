"use client";

import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { blogPosts } from "@/data/blog";

const featuredPost = blogPosts.find((p) => p.featured);

export default function FeaturedPost() {
  if (!featuredPost) return null;

  return (
    <Section background="light">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-surface-card)] border border-[var(--color-border)]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <Badge variant="accent" className="mb-4 self-start">FEATURED</Badge>
              <h2 className="font-heading text-h2 font-bold text-[var(--color-text-primary)] mb-4">
                {featuredPost.title}
              </h2>
              <p className="font-body text-body-lg text-[var(--color-text-secondary)] leading-[var(--lh-body)] mb-3">
                {featuredPost.excerpt}
              </p>
              <p className="font-ui text-ui-sm text-[var(--color-text-muted)] mb-6">
                {featuredPost.date} · {featuredPost.readTime}
              </p>
              <Button href={`/blog/${featuredPost.slug}`} variant="primary">
                Read Article →
              </Button>
            </div>
            <div className="bg-[var(--color-surface-alt)] min-h-[240px] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-[var(--color-accent)]">
                    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                  </svg>
                </div>
                <span className="font-body text-body-sm text-[var(--color-text-muted)]">Featured Article</span>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
