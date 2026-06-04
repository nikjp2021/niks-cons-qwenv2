"use client";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { blogPosts } from "@/data/blog";

const featuredPost = blogPosts.find((p) => p.featured);

export default function FeaturedPostSection() {
  if (!featuredPost) return null;

  return (
    <ScrollReveal>
      <div className="bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-md)] mb-12">
        <div className="md:flex">
          <div className="md:w-2/5 h-64 md:h-auto bg-[var(--color-surface-alt)] flex items-center justify-center">
            <span className="font-ui text-ui-sm text-[var(--color-text-muted)]">Featured Image</span>
          </div>
          <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-center">
            <Badge variant="accent" className="mb-3">{featuredPost.category}</Badge>
            <h2 className="font-heading text-h2 font-bold text-[var(--color-text-primary)] mb-3">
              {featuredPost.title}
            </h2>
            <p className="font-body text-body text-[var(--color-text-secondary)] leading-[var(--lh-body)] mb-4">
              {featuredPost.excerpt}
            </p>
            <p className="font-ui text-ui-sm text-[var(--color-text-muted)] mb-4">
              {featuredPost.author} · {featuredPost.date} · {featuredPost.readTime}
            </p>
            <Button href={`/blog/${featuredPost.slug}`} variant="primary">
              Read Article →
            </Button>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
