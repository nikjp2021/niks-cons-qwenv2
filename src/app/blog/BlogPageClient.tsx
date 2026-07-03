'use client';

import Link from 'next/link';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerChildren';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { GradientOrb } from '@/components/animations/GradientOrb';
import type { BlogPost } from '@/data/blog';

interface BlogPageClientProps {
  posts: BlogPost[];
}

export function BlogPageClient({ posts }: BlogPageClientProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 lg:pt-40 pb-20 lg:pb-24 overflow-hidden hero-gradient">
        <GradientOrb color="rgba(6, 182, 212, 0.08)" size={800} top="-300px" right="-300px" />

        <div className="relative section-container">
          <ScrollReveal className="max-w-3xl">
            <span className="badge-pill mb-6 inline-flex">Blog</span>
            <h1 className="font-display font-extrabold text-6xl sm:text-7xl lg:text-8xl tracking-[-0.04em] mb-8 text-[var(--text-100)]">
              Insights on AI & digital transformation
            </h1>
            <p className="text-2xl text-[var(--text-300)] leading-relaxed font-light">
              Expert perspectives on AI strategy, automation, and growth for startups and SMEs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="section-container">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.08}>
            {posts.map((post) => (
              <StaggerItem key={post.id}>
                <article className="group relative block glass-card overflow-hidden h-full">
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `radial-gradient(circle at 30% 20%, color-mix(in srgb, ${post.accentColor} 6%, transparent) 0%, transparent 60%)`,
                    }}
                  />

                  <div className="relative p-10 sm:p-12 flex flex-col h-full">
                    {/* Category + Meta */}
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className="px-3 py-1.5 rounded-xl text-xs font-semibold"
                        style={{
                          background: `color-mix(in srgb, ${post.accentColor} 15%, transparent)`,
                          color: post.accentColor,
                        }}
                      >
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-[var(--text-400)]">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="font-display font-bold text-xl mb-4 text-[var(--text-100)] leading-tight group-hover:text-[var(--color-brand-400)] transition-colors">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm leading-relaxed text-[var(--text-300)] mb-8 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Tags + Date */}
                    <div className="flex items-center justify-between pt-6 border-t border-[var(--surface-3)]/20">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-[var(--surface-2)] text-[var(--text-400)] border border-[var(--surface-3)]/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs text-[var(--text-400)]">{post.date}</span>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-[var(--surface-1)]/30 relative overflow-hidden">
        <GradientOrb color="rgba(20, 184, 166, 0.06)" size={600} bottom="-200px" left="-200px" />

        <div className="relative section-container">
          <ScrollReveal>
            <div className="glass-card p-12 sm:p-16 text-center">
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-brand-500)]/10 flex items-center justify-center mx-auto mb-8">
                <BookOpen className="w-8 h-8 text-[var(--color-brand-500)]" />
              </div>
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl tracking-[-0.03em] mb-6 text-[var(--text-100)]">
                Stay ahead with AI insights
              </h2>
              <p className="text-xl text-[var(--text-300)] mb-10 max-w-lg mx-auto font-light">
                Get expert perspectives on AI, automation, and digital transformation delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-5 py-4 bg-[var(--surface-2)] border border-[var(--surface-3)] text-[var(--text-100)] placeholder:text-[var(--text-500)] focus:outline-none focus:border-[var(--color-brand-500)] transition-colors text-sm"
                  style={{ borderRadius: 'var(--radius-xl)' }}
                  aria-label="Email address for newsletter"
                />
                <MagneticButton
                  className="glow-button group inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-full text-sm text-white whitespace-nowrap"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
