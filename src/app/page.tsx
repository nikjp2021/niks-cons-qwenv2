'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';
import {
  ArrowRight, Brain, Bot, Zap, Globe, Share2, Kanban,
  Search, Target, Hammer, TrendingUp, Star, ChevronRight,
  MessageSquare, MessageCircle, Send, Headphones, Workflow,
  Sparkles, Calendar, BarChart3, ArrowUpRight,
} from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerChildren';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { Counter } from '@/components/animations/Counter';
import { TextReveal, FadeIn } from '@/components/animations/TextReveal';
import { GradientOrb } from '@/components/animations/GradientOrb';
import { Marquee } from '@/components/animations/Marquee';
import { Badge } from '@/components/ui/Badge';
import { services } from '@/data/services';
import { caseStudies } from '@/data/caseStudies';
import { testimonials } from '@/data/testimonials';
import { processSteps, tools } from '@/data/stats';

const serviceIcons: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-6 h-6" />,
  Bot: <Bot className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Share2: <Share2 className="w-6 h-6" />,
  Kanban: <Kanban className="w-6 h-6" />,
};

const processIcons: Record<string, React.ReactNode> = {
  Search: <Search className="w-5 h-5" />,
  Target: <Target className="w-5 h-5" />,
  Hammer: <Hammer className="w-5 h-5" />,
  TrendingUp: <TrendingUp className="w-5 h-5" />,
};

const toolIcons: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare className="w-5 h-5" />,
  MessageCircle: <MessageCircle className="w-5 h-5" />,
  Send: <Send className="w-5 h-5" />,
  Headphones: <Headphones className="w-5 h-5" />,
  Workflow: <Workflow className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Calendar: <Calendar className="w-5 h-5" />,
  BarChart3: <BarChart3 className="w-5 h-5" />,
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[100]"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #14b8a6, #7c3aed, #f59e0b)',
        }}
      />

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect fill='%2307070b'/%3E%3C/svg%3E"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[var(--surface-0)]/75" />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--surface-0)]" />
        </div>

        {/* Decorative orbs */}
        <GradientOrb color="rgba(20, 184, 166, 0.12)" size={700} top="-200px" left="-200px" delay={0.5} />
        <GradientOrb color="rgba(124, 58, 237, 0.08)" size={500} bottom="-100px" right="-100px" delay={0.8} />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-32 pb-20">
          <div className="max-w-4xl">
            <FadeIn delay={0}>
              <Badge color="#14b8a6">AI-First Consulting</Badge>
            </FadeIn>

            <div className="mt-8 mb-8">
              <TextReveal
                as="h1"
                className="font-display font-black text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.03em] text-[var(--text-100)]"
                delay={0.2}
                staggerDelay={0.05}
              >
                We build AI solutions that actually ship.
              </TextReveal>
            </div>

            <FadeIn delay={0.8}>
              <p className="text-lg sm:text-xl leading-relaxed max-w-2xl mb-12 text-[var(--text-300)]">
                Digital transformation partner for startups and SMEs. Agentic AI, automation, and lean strategies
                that turn complexity into growth.
              </p>
            </FadeIn>

            <FadeIn delay={1}>
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <MagneticButton
                  href="/get-a-quote"
                  className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#14b8a6] to-[#06b6d4] text-white font-semibold rounded-xl text-base hover:shadow-xl hover:shadow-[#14b8a6]/25 transition-shadow duration-500"
                >
                  Get a Free Quote
                  <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
                <MagneticButton
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[var(--surface-4)] text-[var(--text-200)] font-semibold rounded-xl text-base hover:border-[var(--surface-5)] hover:text-[var(--text-100)] transition-all duration-300"
                >
                  Explore Services
                </MagneticButton>
              </div>
            </FadeIn>

            <FadeIn delay={1.2}>
              <div className="grid grid-cols-3 gap-8 max-w-lg">
                {[
                  { value: 300, suffix: '%', label: 'Average ROI' },
                  { value: 15, suffix: '+', label: 'Countries' },
                  { value: 50, suffix: '+', label: 'Projects' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display font-black text-3xl sm:text-4xl text-[var(--text-100)]">
                      <Counter target={stat.value} suffix={stat.suffix} duration={2.5} />
                    </div>
                    <div className="text-sm text-[var(--text-400)] mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-[var(--surface-4)] flex items-start justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-500)]"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* ===== MARQUEE ===== */}
      <section className="py-6 border-y border-[var(--surface-3)]/30 bg-[var(--surface-1)]/50">
        <Marquee speed={35}>
          {[
            'AI-First Consulting', 'Digital Transformation', 'Agentic AI', 'Automation',
            'Web Development', 'Social Media Strategy', 'Agile Management', 'Growth Engineering',
          ].map((item) => (
            <span key={item} className="inline-flex items-center gap-4 mx-6 text-sm font-medium text-[var(--text-400)] uppercase tracking-widest">
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-500)]/40" />
            </span>
          ))}
        </Marquee>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <GradientOrb color="rgba(124, 58, 237, 0.06)" size={600} top="0" right="-200px" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal className="mb-16 max-w-2xl">
            <Badge color="#7c3aed">What We Do</Badge>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight mt-6 mb-5 text-[var(--text-100)]">
              AI-powered solutions for modern businesses
            </h2>
            <p className="text-lg text-[var(--text-300)] leading-relaxed">
              From intelligent automation to full digital transformation — we deliver measurable results, not just slide decks.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.06}>
            {services.map((service, i) => (
              <StaggerItem key={service.id}>
                <Link
                  href={`/services#${service.id}`}
                  className="group relative block p-7 rounded-2xl bg-[var(--surface-1)] border border-[var(--surface-3)]/40 hover:border-[var(--surface-4)] transition-all duration-500 hover:-translate-y-1 overflow-hidden h-full"
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `radial-gradient(circle at 30% 20%, color-mix(in srgb, ${service.accentColor} 8%, transparent) 0%, transparent 60%)`,
                    }}
                  />

                  <div className="relative">
                    {/* Number + Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                        style={{
                          background: `color-mix(in srgb, ${service.accentColor} 12%, transparent)`,
                          color: service.accentColor,
                        }}
                      >
                        {serviceIcons[service.icon]}
                      </span>
                      <span className="font-mono text-xs text-[var(--text-500)]">
                        0{i + 1}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl mb-3 text-[var(--text-100)] group-hover:text-[var(--text-100)] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--text-400)] mb-5">
                      {service.shortDesc}
                    </p>

                    <span
                      className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-300 group-hover:gap-2.5"
                      style={{ color: service.accentColor }}
                    >
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== TOOLS MARQUEE ===== */}
      <section className="py-10 border-y border-[var(--surface-3)]/20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-500)] text-center">
            Integrated with the tools you already use
          </p>
        </div>
        <Marquee speed={40}>
          {tools.map((tool) => (
            <span key={tool.name} className="inline-flex items-center gap-2.5 mx-8 text-[var(--text-400)]">
              {toolIcons[tool.icon]}
              <span className="text-sm font-medium">{tool.name}</span>
            </span>
          ))}
        </Marquee>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <GradientOrb color="rgba(245, 158, 11, 0.05)" size={500} bottom="-100px" left="-200px" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal className="text-center mb-16">
            <Badge color="#0ea5e9">Process</Badge>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight mt-6 mb-5 text-[var(--text-100)]">
              How we work
            </h2>
            <p className="text-lg text-[var(--text-300)] max-w-xl mx-auto leading-relaxed">
              A proven process enhanced by AI. Four steps from discovery to scale.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {processSteps.map((step) => (
              <StaggerItem key={step.step}>
                <div className="relative p-7 rounded-2xl bg-[var(--surface-1)] border border-[var(--surface-3)]/30 group hover:border-[var(--surface-4)] transition-all duration-500 hover:-translate-y-1">
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: `linear-gradient(90deg, transparent, ${step.color}, transparent)` }}
                  />
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                    style={{
                      background: `color-mix(in srgb, ${step.color} 12%, transparent)`,
                      color: step.color,
                    }}
                  >
                    {processIcons[step.icon]}
                  </div>
                  <span className="font-mono text-xs font-semibold block mb-2" style={{ color: step.color }}>
                    {step.step}
                  </span>
                  <h3 className="font-display font-bold text-lg mb-2 text-[var(--text-100)]">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--text-400)]">
                    {step.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== CASE STUDIES ===== */}
      <section className="relative py-24 lg:py-32 bg-[var(--surface-1)]/50 overflow-hidden">
        <GradientOrb color="rgba(244, 63, 94, 0.05)" size={500} top="-100px" right="-200px" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <Badge color="#f43f5e">Results</Badge>
              <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight mt-6 mb-5 text-[var(--text-100)]">
                Real businesses, real outcomes
              </h2>
              <p className="text-lg text-[var(--text-300)] leading-relaxed">
                See how AI-powered solutions have transformed operations and driven growth for our clients.
              </p>
            </div>
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand-500)] hover:gap-3 transition-all shrink-0"
            >
              View all case studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
            {caseStudies.slice(0, 3).map((cs) => (
              <StaggerItem key={cs.id}>
                <Link
                  href={`/case-studies#${cs.id}`}
                  className="group block rounded-2xl bg-[var(--surface-2)] border border-[var(--surface-3)]/30 overflow-hidden hover:border-[var(--surface-4)] transition-all duration-500 hover:-translate-y-1 h-full"
                >
                  {/* Color bar */}
                  <div className="h-1" style={{ background: `linear-gradient(90deg, ${cs.accentColor}, color-mix(in srgb, ${cs.accentColor} 40%, transparent))` }} />

                  <div className="p-7">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="px-2.5 py-1 rounded-md text-xs font-semibold"
                        style={{
                          background: `color-mix(in srgb, ${cs.accentColor} 12%, transparent)`,
                          color: cs.accentColor,
                        }}
                      >
                        {cs.category}
                      </span>
                      <span className="text-xs text-[var(--text-500)]">{cs.location}</span>
                    </div>

                    <h3 className="font-display font-bold text-lg mb-3 text-[var(--text-100)] group-hover:text-[var(--color-brand-500)] transition-colors leading-tight">
                      {cs.title}
                    </h3>

                    <p className="text-sm text-[var(--text-400)] leading-relaxed mb-5">
                      {cs.challenge.slice(0, 120)}...
                    </p>

                    <div className="space-y-2">
                      {cs.results.slice(0, 2).map((result, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <TrendingUp className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: cs.accentColor }} />
                          <span className="text-sm text-[var(--text-300)]">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <GradientOrb color="rgba(16, 185, 129, 0.05)" size={500} bottom="-100px" right="-100px" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal className="text-center mb-16">
            <Badge color="#10b981">Testimonials</Badge>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight mt-6 text-[var(--text-100)]">
              What clients say
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.1}>
            {testimonials.map((t, i) => (
              <StaggerItem key={t.id}>
                <div className="relative p-7 rounded-2xl bg-[var(--surface-1)] border border-[var(--surface-3)]/30 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-[var(--color-amber)] text-[var(--color-amber)]" />
                    ))}
                  </div>

                  <blockquote className="text-[var(--text-200)] leading-relaxed mb-6 flex-1">
                    &ldquo;{t.content}&rdquo;
                  </blockquote>

                  <div className="flex items-center gap-3 pt-5 border-t border-[var(--surface-3)]/30">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                      style={{ background: t.accentColor }}
                    >
                      {t.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[var(--text-100)]">{t.name}</div>
                      <div className="text-xs text-[var(--text-400)]">{t.role}, {t.company}</div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--surface-0)] via-[var(--surface-1)] to-[var(--surface-0)]" />
        <GradientOrb color="rgba(20, 184, 166, 0.1)" size={600} top="50%" left="50%" className="-translate-x-1/2 -translate-y-1/2" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="relative rounded-3xl border border-[var(--surface-3)]/30 p-10 sm:p-16 lg:p-24 text-center overflow-hidden bg-[var(--surface-1)]">
              {/* Animated gradient border */}
              <div
                className="absolute inset-0 rounded-3xl animate-gradient opacity-30"
                style={{
                  background: 'linear-gradient(135deg, #14b8a6, #7c3aed, #f59e0b, #14b8a6)',
                  backgroundSize: '300% 300%',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'exclude',
                  WebkitMaskComposite: 'xor',
                  padding: '1px',
                  borderRadius: 'inherit',
                }}
              />

              <div className="relative">
                <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6 text-[var(--text-100)]">
                  Ready to build something{' '}
                  <span className="bg-gradient-to-r from-[#14b8a6] to-[#7c3aed] bg-clip-text text-transparent">
                    extraordinary?
                  </span>
                </h2>
                <p className="text-lg max-w-lg mx-auto mb-12 leading-relaxed text-[var(--text-300)]">
                  Book a free consultation. We&apos;ll show you exactly how AI can transform your operations.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                  <MagneticButton
                    href="/get-a-quote"
                    className="group inline-flex items-center justify-center gap-2.5 px-10 py-5 bg-gradient-to-r from-[#14b8a6] to-[#06b6d4] text-white font-semibold rounded-xl text-lg hover:shadow-xl hover:shadow-[#14b8a6]/25 transition-shadow duration-500"
                  >
                    Get a Free Quote
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </MagneticButton>
                  <MagneticButton
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-10 py-5 border border-[var(--surface-4)] text-[var(--text-200)] font-semibold rounded-xl text-lg hover:border-[var(--surface-5)] transition-all duration-300"
                  >
                    Get in Touch
                  </MagneticButton>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--text-400)]">
                  {['Free consultation', 'No commitment', 'Response within 24h'].map((badge) => (
                    <span key={badge} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[var(--color-emerald)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
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
