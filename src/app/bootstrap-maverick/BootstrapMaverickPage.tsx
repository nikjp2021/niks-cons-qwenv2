'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import {
  ArrowRight, Brain, Lightbulb, CheckCircle2, Star, Download,
  Share2, BarChart3, Zap, Shield, Target, TrendingUp, Users,
  Sparkles, ChevronRight, Rocket, Globe,
} from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerChildren';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { GradientOrb } from '@/components/animations/GradientOrb';
import { Counter } from '@/components/animations/Counter';
import { Marquee } from '@/components/animations/Marquee';
import { TextReveal, FadeIn } from '@/components/animations/TextReveal';

const steps = [
  {
    number: '01',
    title: 'Describe your challenge',
    description: 'Tell us about your business, your goals, and the obstacles you face. Plain language works best.',
    icon: <Target className="w-6 h-6" />,
    color: '#14b8a6',
    detail: 'Our AI understands context, industry nuance, and competitive landscape.',
  },
  {
    number: '02',
    title: 'Get 3 audacious strategies',
    description: 'Receive three low-cost, high-impact marketing and growth strategies, each with scores, case studies, and expert analysis.',
    icon: <Lightbulb className="w-6 h-6" />,
    color: '#f59e0b',
    detail: 'Ideas ranked by feasibility, impact, and cost-effectiveness.',
  },
  {
    number: '03',
    title: 'Validate with AI Reality Checks',
    description: 'Run automated validation tests to assess market viability, problem-solution fit, and real-world feasibility.',
    icon: <Shield className="w-6 h-6" />,
    color: '#10b981',
    detail: 'Data-driven confidence before you invest a single dollar.',
  },
  {
    number: '04',
    title: 'Execute with proof tests',
    description: 'Get concrete, low-cost steps to validate assumptions in the real world. Download as PDF or share with your team.',
    icon: <Rocket className="w-6 h-6" />,
    color: '#8b5cf6',
    detail: 'From idea to action plan in minutes, not months.',
  },
];

const features = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Chain-of-Thought AI',
    description: 'Built on Shizuoka University research using advanced COT prompting. Not generic ChatGPT wrappers.',
    color: '#14b8a6',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Scored Idea Analysis',
    description: 'Each idea scored on feasibility, impact, and cost. Compare options side-by-side with data, not gut feeling.',
    color: '#06b6d4',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Reality Checks',
    description: 'Automated market viability tests. Does this idea solve a real problem? Will people pay for it? AI tells you.',
    color: '#f59e0b',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Numbers Tests',
    description: 'Quick financial viability assessment. What does the unit economics look like? Is this worth pursuing?',
    color: '#10b981',
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: 'Proof Tests',
    description: 'Concrete, low-cost steps to validate assumptions in the real world before committing resources.',
    color: '#8b5cf6',
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: 'Export & Share',
    description: 'Download ideas as PDFs. Share summaries via email or social. Present to co-founders and investors.',
    color: '#ec4899',
  },
];

const testimonials = [
  {
    name: 'James Okafor',
    role: 'Aspiring Entrepreneur, Lagos',
    quote: 'Bootstrap Maverick gave me the breakthrough I needed. I was stuck for weeks, and within 10 minutes I had three validated strategies I could actually execute.',
    rating: 5,
    color: '#14b8a6',
  },
  {
    name: 'Adam Chen',
    role: 'Startup Founder, San Francisco',
    quote: 'The Reality Checks alone are worth it. I was about to waste $5k on a campaign that the AI correctly flagged as low-viability. Saved me months.',
    rating: 5,
    color: '#06b6d4',
  },
  {
    name: 'Ali Rahman',
    role: 'Product Manager, Dubai',
    quote: 'Finally, an AI tool that gives actionable insights, not fluffy ideas. The academic backing from Shizuoka University makes all the difference.',
    rating: 5,
    color: '#8b5cf6',
  },
];

const faqs = [
  {
    question: 'How is this different from ChatGPT?',
    answer: 'Bootstrap Maverick uses Chain-of-Thought prompting developed at Shizuoka University, not generic prompts. It scores ideas, runs validation tests, and provides structured analysis that ChatGPT cannot.',
  },
  {
    question: 'Is it really free?',
    answer: 'Yes. You can brainstorm and validate ideas without a credit card. Premium features unlock as you scale.',
  },
  {
    question: 'What kind of businesses does this work for?',
    answer: 'Any business from side hustles to Series A startups. The AI adapts to your industry, budget, and stage.',
  },
  {
    question: 'Who built this?',
    answer: "Nik's Consulting. The core AI is inspired by Chain-of-Thought prompting research from Shizuoka University's Nagayoshi Lab.",
  },
];

export function BootstrapMaverickPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════
          HERO — Cinematic, full viewport, conversion-optimized
          ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient pt-24">
        <GradientOrb color="rgba(20, 184, 166, 0.15)" size={900} top="-400px" right="-400px" />
        <GradientOrb color="rgba(245, 158, 11, 0.06)" size={600} bottom="-200px" left="-200px" />

        <div className="relative z-10 text-center section-container" style={{ maxWidth: '960px' }}>
          <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-brand-500)]/20 bg-[var(--color-brand-500)]/5 mb-10">
              <Sparkles className="w-4 h-4 text-[var(--color-brand-400)]" />
              <span className="text-sm font-medium text-[var(--color-brand-400)]">Built on COT Prompting Research</span>
            </div>
          </FadeIn>

          <div className="mb-10">
            <TextReveal
              as="h1"
              className="font-display font-extrabold text-[clamp(3rem,9vw,7rem)] leading-[0.92] tracking-[-0.04em] text-[var(--text-100)]"
              delay={0.2}
              staggerDelay={0.06}
            >
              Turn raw ideas into validated business strategies. In minutes.
            </TextReveal>
          </div>

          <FadeIn delay={0.8}>
            <p className="text-xl sm:text-2xl leading-[1.8] max-w-2xl mx-auto mb-14 text-[var(--text-300)] font-light">
              AI-powered brainstorming that scores, validates, and stress-tests your ideas before you invest a single dollar. Built on academic research.
            </p>
          </FadeIn>

          <FadeIn delay={1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
              <MagneticButton
                href="https://nikhil-s-maverick-ai-the-shizuoka-method-805342490336.us-west1.run.app"
                className="glow-button group inline-flex items-center justify-center gap-3 px-14 py-7 sm:px-18 sm:py-8 font-semibold rounded-full text-lg whitespace-nowrap"
              >
                Start Brainstorming Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </MagneticButton>
              <MagneticButton
                href="#how-it-works"
                className="ghost-button group inline-flex items-center justify-center gap-2 px-10 py-7 font-semibold rounded-full text-lg whitespace-nowrap"
              >
                See How It Works
              </MagneticButton>
            </div>
            <p className="text-sm text-[var(--text-400)] flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--color-emerald)]" />
              No credit card required &middot; Free to get started
            </p>
          </FadeIn>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-[var(--surface-4)]/50 flex items-start justify-center p-1.5">
            <div className="w-1 h-2.5 rounded-full bg-[var(--text-400)]" />
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SOCIAL PROOF BAR — Trust signals
          ═══════════════════════════════════════════════════ */}
      <section className="py-8 border-y border-[var(--surface-3)]/20 bg-[var(--surface-1)]/20">
        <div className="section-container">
          <div className="flex items-center justify-center gap-12 sm:gap-20 flex-wrap">
            {[
              { value: 500, suffix: '+', label: 'Ideas Generated' },
              { value: 150, suffix: '+', label: 'Entrepreneurs' },
              { value: 4.9, suffix: '/5', label: 'Avg. Rating', isDecimal: true },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-[var(--color-brand-500)]">
                  {stat.isDecimal ? (
                    <>4.9<span className="text-xl">/5</span></>
                  ) : (
                    <Counter target={stat.value} suffix={stat.suffix} duration={2} />
                  )}
                </div>
                <div className="text-xs text-[var(--text-400)] mt-1 uppercase tracking-[0.1em] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          MARQUEE — Energy & brand reinforcement
          ═══════════════════════════════════════════════════ */}
      <section className="py-6 border-b border-[var(--surface-3)]/20 overflow-hidden">
        <Marquee speed={35}>
          {[
            'AI-Powered Brainstorming', 'Validate Before You Build', 'Academic-Grade Research',
            'Low-Cost Strategies', 'Chain-of-Thought AI', 'Real-World Validation',
            'Bootstrap Friendly', 'Shizuoka University Research', 'Actionable Intelligence',
          ].map((item) => (
            <span key={item} className="inline-flex items-center gap-6 mx-8 text-sm text-[var(--text-400)] font-medium tracking-wide">
              {item}
              <span className="w-1 h-1 rounded-full bg-[var(--color-brand-500)]" />
            </span>
          ))}
        </Marquee>
      </section>

      {/* ═══════════════════════════════════════════════════
          PROBLEM/SOLUTION — Why this matters
          ═══════════════════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden">
        <GradientOrb color="rgba(6, 182, 212, 0.06)" size={600} top="0" right="-200px" />

        <div className="relative section-container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal>
              <span className="badge-pill mb-6 inline-flex">The Problem</span>
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl tracking-[-0.03em] mb-8 text-[var(--text-100)]">
                Most entrepreneurs waste months on ideas that never work.
              </h2>
              <div className="space-y-6 text-[var(--text-300)] text-lg leading-relaxed font-light">
                <p>
                  You have an idea. You spend weeks building it. You launch. Nobody cares.
                </p>
                <p>
                  The problem isn&apos;t effort. It&apos;s validation. You need to know if an idea is worth pursuing <em className="text-[var(--text-100)] not-italic font-medium">before</em> you invest time and money.
                </p>
                <p>
                  Bootstrap Maverick does in 10 minutes what used to take weeks of market research.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                {/* Mockup card showing the AI output */}
                <div className="glass-card p-8 sm:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
                    <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                    <div className="w-3 h-3 rounded-full bg-[#10b981]" />
                    <span className="ml-3 text-xs text-[var(--text-400)] font-mono">bootstrap-maverick.ai</span>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-[var(--surface-2)]/50 border border-[var(--surface-3)]/30">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[var(--color-brand-500)]/10 text-[var(--color-brand-400)]">STRATEGY 01</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[var(--color-emerald)]/10 text-[var(--color-emerald)]">Score: 8.5/10</span>
                      </div>
                      <div className="font-display font-bold text-[var(--text-100)] mb-1">Community-Led Growth via Micro-Influencers</div>
                      <div className="text-sm text-[var(--text-400)]">Partner with 50 nano-influencers in your niche. Cost: $500. Expected reach: 250K. ROI: 4.2x</div>
                    </div>
                    <div className="p-4 rounded-xl bg-[var(--surface-2)]/50 border border-[var(--surface-3)]/30">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[var(--color-brand-500)]/10 text-[var(--color-brand-400)]">STRATEGY 02</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[var(--color-amber)]/10 text-[var(--color-amber)]">Score: 7.8/10</span>
                      </div>
                      <div className="font-display font-bold text-[var(--text-100)] mb-1">Referral Loop with Viral Mechanics</div>
                      <div className="text-sm text-[var(--text-400)]">Build a 2-sided referral program. Cost: $200. Expected conversion: 12%. Viral coefficient: 1.3</div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[var(--surface-3)]/30 flex items-center gap-2 text-sm text-[var(--color-brand-400)]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Reality Check passed: Market size viable</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          HOW IT WORKS — Visual 4-step process
          ═══════════════════════════════════════════════════ */}
      <section id="how-it-works" className="section-padding bg-[var(--surface-1)]/30 relative overflow-hidden">
        <GradientOrb color="rgba(245, 158, 11, 0.04)" size={600} bottom="-200px" left="-200px" />

        <div className="relative section-container">
          <ScrollReveal className="mb-20 text-center max-w-2xl mx-auto">
            <span className="badge-pill mb-4 inline-flex">How It Works</span>
            <h2 className="font-display font-extrabold text-5xl sm:text-6xl tracking-[-0.03em] text-[var(--text-100)]">
              Four steps from idea to action plan
            </h2>
            <p className="text-xl text-[var(--text-300)] mt-6 font-light">
              No PhD required. Just describe your challenge and let the AI do the heavy lifting.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.1}>
                <div className="group relative glass-card p-8 sm:p-10 h-full">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"
                    style={{
                      background: `radial-gradient(circle at 30% 20%, color-mix(in srgb, ${step.color} 6%, transparent) 0%, transparent 60%)`,
                    }}
                  />
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center border-2"
                        style={{
                          borderColor: step.color,
                          background: `color-mix(in srgb, ${step.color} 8%, var(--surface-0))`,
                          color: step.color,
                        }}
                      >
                        {step.icon}
                      </div>
                      <div>
                        <span className="font-mono text-xs font-semibold block tracking-wider" style={{ color: step.color }}>
                          STEP {step.number}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-display font-bold text-2xl mb-3 text-[var(--text-100)]">
                      {step.title}
                    </h3>
                    <p className="text-base leading-relaxed text-[var(--text-400)] mb-4">
                      {step.description}
                    </p>
                    <p className="text-sm text-[var(--text-300)] font-light italic">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          RESEARCH — Academic credibility
          ═══════════════════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden">
        <GradientOrb color="rgba(139, 92, 246, 0.05)" size={600} top="-200px" right="-200px" />

        <div className="relative section-container">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
            <ScrollReveal>
              <div className="glass-card p-10 sm:p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--color-brand-500)]/10 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-[var(--color-brand-500)]" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-xl text-[var(--text-100)]">Shizuoka University</div>
                    <div className="text-sm text-[var(--text-400)]">Research inspiration &middot; Nagayoshi Lab</div>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    'Chain of Thought (COT) prompting',
                    'Advanced reasoning & validation',
                    'Peer-reviewed methodologies',
                    'Production-grade AI systems',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[var(--color-brand-500)]" />
                      <span className="text-sm text-[var(--text-300)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div>
                <span className="badge-pill mb-6 inline-flex">Research Foundation</span>
                <h2 className="font-display font-extrabold text-4xl sm:text-5xl tracking-[-0.03em] mb-6 text-[var(--text-100)]">
                  Not another ChatGPT wrapper.
                </h2>
                <p className="text-xl text-[var(--text-300)] leading-relaxed font-light mb-6">
                  Bootstrap Maverick uses Chain-of-Thought prompting, a technique developed at Shizuoka University that forces the AI to reason step-by-step before generating ideas.
                </p>
                <p className="text-base text-[var(--text-300)] leading-relaxed font-light">
                  This means the AI doesn&apos;t just spit out generic suggestions. It analyzes your specific context, evaluates market conditions, scores feasibility, and provides structured, actionable strategies backed by data.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FEATURES — Premium grid, varied layouts
          ═══════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--surface-1)]/30 relative overflow-hidden">
        <GradientOrb color="rgba(20, 184, 166, 0.06)" size={800} top="0" right="-300px" />

        <div className="relative section-container">
          <ScrollReveal className="mb-20 text-center max-w-2xl mx-auto">
            <span className="badge-pill mb-4 inline-flex">Features</span>
            <h2 className="font-display font-extrabold text-5xl sm:text-6xl tracking-[-0.03em] text-[var(--text-100)]">
              Everything you need to validate ideas
            </h2>
            <p className="text-xl text-[var(--text-300)] mt-6 font-light">
              From brainstorming to execution-ready plans. One tool, complete workflow.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.06}>
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="group glass-card p-8 h-full hover:border-[var(--surface-4)] transition-all duration-300">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{
                      background: `color-mix(in srgb, ${feature.color} 10%, transparent)`,
                      color: feature.color,
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg mb-3 text-[var(--text-100)]">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[var(--text-300)] leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TESTIMONIALS — Social proof with real names
          ═══════════════════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden">
        <GradientOrb color="rgba(16, 185, 129, 0.04)" size={600} bottom="-200px" right="-200px" />

        <div className="relative section-container">
          <ScrollReveal className="mb-16 text-center">
            <span className="badge-pill mb-4 inline-flex">Testimonials</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl tracking-[-0.03em] text-[var(--text-100)]">
              Entrepreneurs love Bootstrap Maverick
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.1}>
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div className="glass-card p-8 h-full flex flex-col">
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-[var(--color-amber)] text-[var(--color-amber)]" />
                    ))}
                  </div>
                  <p className="text-[var(--text-200)] leading-relaxed mb-8 flex-1 text-base">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-[var(--surface-3)]/20">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                      style={{ background: t.color }}
                    >
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[var(--text-100)]">{t.name}</div>
                      <div className="text-xs text-[var(--text-400)]">{t.role}</div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FAQ — Address objections
          ═══════════════════════════════════════════════════ */}
      <section className="section-padding bg-[var(--surface-1)]/30 relative overflow-hidden">
        <div className="relative section-container">
          <ScrollReveal className="mb-16 text-center max-w-2xl mx-auto">
            <span className="badge-pill mb-4 inline-flex">FAQ</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl tracking-[-0.03em] text-[var(--text-100)]">
              Common questions
            </h2>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="glass-card p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[var(--color-brand-500)]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="font-mono text-xs font-semibold text-[var(--color-brand-400)]">Q</span>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-[var(--text-100)] mb-3">{faq.question}</h3>
                      <p className="text-sm text-[var(--text-300)] leading-relaxed font-light">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FINAL CTA — High-conversion section
          ═══════════════════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--surface-0)] via-[var(--surface-1)]/50 to-[var(--surface-0)]" />
        <GradientOrb color="rgba(20, 184, 166, 0.08)" size={800} top="50%" left="-200px" />
        <GradientOrb color="rgba(245, 158, 11, 0.04)" size={600} top="50%" right="-200px" />

        <div className="relative section-container">
          <ScrollReveal>
            <div className="glass-card p-12 sm:p-16 lg:p-24 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-500)]/5 via-transparent to-[var(--color-cyan)]/5" />

              <div className="relative">
                <h2 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-[-0.04em] mb-6 text-[var(--text-100)]">
                  Stop guessing. Start validating.
                </h2>
                <p className="text-xl leading-[1.8] text-[var(--text-300)] mb-12 max-w-xl mx-auto font-light">
                  Join hundreds of entrepreneurs who validate ideas before they build. Free to start.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
                  <MagneticButton
                    href="https://nikhil-s-maverick-ai-the-shizuoka-method-805342490336.us-west1.run.app"
                    className="glow-button group inline-flex items-center justify-center gap-3 px-14 py-7 sm:px-18 sm:py-8 font-semibold rounded-full text-lg whitespace-nowrap"
                  >
                    Start Brainstorming Free
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </MagneticButton>
                </div>

                <div className="flex flex-wrap gap-8 justify-center text-sm text-[var(--text-400)]">
                  {[
                    'No credit card',
                    'Free to get started',
                    'Results in 10 minutes',
                    'Research-backed AI',
                  ].map((badge) => (
                    <span key={badge} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-emerald)]" />
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
