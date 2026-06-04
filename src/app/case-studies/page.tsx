'use client';

import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerChildren';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { GradientOrb } from '@/components/animations/GradientOrb';
import { Badge } from '@/components/ui/Badge';
import { caseStudies } from '@/data/caseStudies';

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <GradientOrb color="rgba(244, 63, 94, 0.08)" size={500} top="-200px" right="-100px" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal className="max-w-3xl">
            <Badge color="#f43f5e">Case Studies</Badge>
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl tracking-tight mt-6 mb-6 text-[var(--text-100)]">
              Real results,{' '}
              <span className="bg-gradient-to-r from-[#f43f5e] to-[#f59e0b] bg-clip-text text-transparent">
                real impact
              </span>
            </h1>
            <p className="text-xl text-[var(--text-300)] leading-relaxed">
              See how AI-powered solutions have transformed operations and driven growth for businesses across 15+ countries.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <StaggerContainer className="space-y-8" staggerDelay={0.08}>
            {caseStudies.map((cs) => (
              <StaggerItem key={cs.id}>
                <div
                  id={cs.id}
                  className="scroll-mt-28 relative rounded-3xl bg-[var(--surface-1)] border border-[var(--surface-3)]/30 overflow-hidden group hover:border-[var(--surface-4)] transition-all duration-500"
                >
                  {/* Top bar */}
                  <div
                    className="h-1.5"
                    style={{
                      background: `linear-gradient(90deg, ${cs.accentColor}, color-mix(in srgb, ${cs.accentColor} 30%, transparent))`,
                    }}
                  />

                  <div className="p-8 sm:p-12 lg:p-16">
                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold"
                        style={{
                          background: `color-mix(in srgb, ${cs.accentColor} 12%, transparent)`,
                          color: cs.accentColor,
                        }}
                      >
                        {cs.category}
                      </span>
                      <span className="text-xs text-[var(--text-500)]">{cs.location}</span>
                      <span className="text-2xl">{cs.icon}</span>
                    </div>

                    <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight mb-8 text-[var(--text-100)]">
                      {cs.title}
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Challenge */}
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-400)] mb-3">
                          Challenge
                        </h3>
                        <p className="text-[var(--text-300)] leading-relaxed">
                          {cs.challenge}
                        </p>
                      </div>

                      {/* Solution */}
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-400)] mb-3">
                          Solution
                        </h3>
                        <p className="text-[var(--text-300)] leading-relaxed">
                          {cs.solution}
                        </p>
                      </div>

                      {/* Results */}
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-400)] mb-3">
                          Results
                        </h3>
                        <div className="space-y-3">
                          {cs.results.map((result, j) => (
                            <div key={j} className="flex items-start gap-3">
                              <TrendingUp
                                className="w-4 h-4 shrink-0 mt-0.5"
                                style={{ color: cs.accentColor }}
                              />
                              <span className="text-sm text-[var(--text-200)]">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-[var(--surface-3)]/30">
                      {cs.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--surface-2)] text-[var(--text-400)] border border-[var(--surface-3)]/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 lg:py-28 bg-[var(--surface-1)]/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal className="text-center">
            <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight mb-5 text-[var(--text-100)]">
              Want to be our next success story?
            </h2>
            <p className="text-lg text-[var(--text-300)] max-w-xl mx-auto mb-10">
              Let&apos;s discuss your project and create a tailored strategy for your business.
            </p>
            <MagneticButton
              href="/get-a-quote"
              className="group inline-flex items-center gap-2.5 px-10 py-5 bg-gradient-to-r from-[#14b8a6] to-[#06b6d4] text-white font-semibold rounded-xl text-lg hover:shadow-xl hover:shadow-[#14b8a6]/25 transition-shadow"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
