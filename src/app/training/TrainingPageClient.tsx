'use client';

import Link from 'next/link';
import { ArrowRight, Clock, Users, CheckCircle2, Brain, Bot, Zap, Globe } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerChildren';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { GradientOrb } from '@/components/animations/GradientOrb';
import type { TrainingProgram } from '@/data/training';

const programIcons: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-8 h-8" />,
  Bot: <Bot className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  Globe: <Globe className="w-8 h-8" />,
};

interface TrainingPageClientProps {
  programs: TrainingProgram[];
}

export function TrainingPageClient({ programs }: TrainingPageClientProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 lg:pt-40 pb-20 lg:pb-24 overflow-hidden hero-gradient">
        <GradientOrb color="rgba(20, 184, 166, 0.08)" size={800} top="-300px" left="-300px" />

        <div className="relative section-container">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 items-center">
            <ScrollReveal>
              <span className="badge-pill mb-6 inline-flex">Training</span>
              <h1 className="font-display font-extrabold text-6xl sm:text-7xl lg:text-8xl tracking-[-0.04em] mb-8 text-[var(--text-100)]">
                Build lasting AI capability in your team
              </h1>
              <p className="text-2xl text-[var(--text-300)] leading-relaxed font-light mb-12">
                Professional training programs designed to upskill your team with practical AI knowledge — from fundamentals to advanced agentic systems.
              </p>
              <div className="flex flex-wrap gap-6">
                {[
                  { icon: <Users className="w-5 h-5" />, label: 'Group & 1-on-1 options' },
                  { icon: <Clock className="w-5 h-5" />, label: 'Flexible scheduling' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2.5 text-sm text-[var(--text-300)]">
                    <span className="text-[var(--color-brand-500)]">{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal className="hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-500)]/10 to-[var(--color-cyan)]/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-display font-extrabold text-8xl text-[var(--color-brand-500)]/20">AI</div>
                    <div className="font-display font-bold text-2xl text-[var(--text-100)] -mt-4">Training</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding">
        <div className="section-container">
          <ScrollReveal className="mb-20">
            <span className="badge-pill mb-4 inline-flex">Programs</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl tracking-[-0.03em] text-[var(--text-100)]">
              Choose your learning path
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.1}>
            {programs.map((program) => (
              <StaggerItem key={program.id}>
                <div className="group relative glass-card p-10 sm:p-12 h-full flex flex-col">
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"
                    style={{
                      background: `radial-gradient(circle at 30% 20%, color-mix(in srgb, ${program.accentColor} 5%, transparent) 0%, transparent 60%)`,
                    }}
                  />

                  <div className="relative flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-8">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{
                          background: `color-mix(in srgb, ${program.accentColor} 10%, transparent)`,
                          color: program.accentColor,
                        }}
                      >
                        {programIcons[program.icon]}
                      </div>
                      <div className="flex gap-3">
                        <span className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-[var(--surface-2)] text-[var(--text-300)] border border-[var(--surface-3)]/30">
                          {program.duration}
                        </span>
                        <span className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-[var(--surface-2)] text-[var(--text-300)] border border-[var(--surface-3)]/30">
                          {program.format}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="font-display font-bold text-2xl mb-4 text-[var(--text-100)]">
                      {program.title}
                    </h3>
                    <p className="text-base text-[var(--text-300)] leading-relaxed mb-8 font-light">
                      {program.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-10 flex-1">
                      {program.features.map((feature, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <CheckCircle2
                            className="w-4 h-4 shrink-0 mt-0.5"
                            style={{ color: program.accentColor }}
                          />
                          <span className="text-sm text-[var(--text-300)]">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href="/get-a-quote"
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-all group/link hover:gap-3"
                      style={{ color: program.accentColor }}
                    >
                      Book this program
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Train With Us */}
      <section className="section-padding bg-[var(--surface-1)]/30">
        <div className="section-container">
          <ScrollReveal className="mb-16">
            <span className="badge-pill mb-4 inline-flex">Why Us</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl tracking-[-0.03em] text-[var(--text-100)]">
              Why train with Nik&apos;s Consulting
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Real-World Focus',
                description: 'Every program is built from actual client projects — not theoretical textbooks. You learn what works in production.',
                color: 'var(--color-brand-500)',
              },
              {
                title: 'Global Perspective',
                description: 'Our team has delivered AI solutions across 15+ countries. You get insights from diverse industries and markets.',
                color: 'var(--color-cyan)',
              },
              {
                title: 'Ongoing Support',
                description: 'Training doesn\'t end when the workshop does. We provide follow-up support and resources for 30 days.',
                color: 'var(--color-amber)',
              },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <div className="glass-card p-10 h-full">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                    style={{
                      background: `color-mix(in srgb, ${item.color} 10%, transparent)`,
                    }}
                  >
                    <div className="w-3 h-3 rounded-full" style={{ background: item.color }} />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3 text-[var(--text-100)]">{item.title}</h3>
                  <p className="text-base text-[var(--text-300)] leading-relaxed font-light">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container">
          <ScrollReveal>
            <div className="glass-card p-12 sm:p-16 text-center">
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl tracking-[-0.03em] mb-6 text-[var(--text-100)]">
                Ready to upskill your team?
              </h2>
              <p className="text-xl text-[var(--text-300)] mb-10 max-w-lg mx-auto font-light">
                Book a free consultation to discuss your training needs. We&apos;ll create a custom program for your team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton
                  href="/get-a-quote"
                  className="glow-button group inline-flex items-center justify-center gap-3 px-10 py-5 font-semibold rounded-full text-base text-white"
                >
                  Book a Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
                <MagneticButton
                  href="/contact"
                  className="ghost-button group inline-flex items-center justify-center gap-2 px-10 py-5 font-semibold rounded-full text-base"
                >
                  Contact Us
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
