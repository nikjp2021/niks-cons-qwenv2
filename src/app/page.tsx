'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight, Brain, Bot, Zap, Globe, Share2, Kanban,
  Search, Target, Hammer, TrendingUp, Star,
  MessageSquare, MessageCircle, Send, Headphones, Workflow,
  Sparkles, Calendar, BarChart3, ArrowUpRight, Quote,
} from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerChildren';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { Counter } from '@/components/animations/Counter';
import { TextReveal, FadeIn } from '@/components/animations/TextReveal';
import { GradientOrb } from '@/components/animations/GradientOrb';
import { Marquee } from '@/components/animations/Marquee';
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

      {/* ===== HERO — Asymmetric split layout ===== */}
      <section className="relative min-h-screen overflow-hidden">
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
          <div className="absolute inset-0 bg-[var(--surface-0)]/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--surface-0)]/95 via-[var(--surface-0)]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-0)] via-transparent to-[var(--surface-0)]/30" />
        </div>

        <GradientOrb color="rgba(20, 184, 166, 0.12)" size={700} top="-200px" left="-200px" delay={0.5} />
        <GradientOrb color="rgba(124, 58, 237, 0.08)" size={500} bottom="-100px" right="200px" delay={0.8} />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-32 lg:pt-40 pb-20">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
            {/* Left — Content */}
            <div>
              <FadeIn delay={0}>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-[var(--color-brand-500)]/10 text-[var(--color-brand-500)] mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-500)] animate-pulse" />
                  AI-First Consulting
                </span>
              </FadeIn>

              <div className="mb-6">
                <TextReveal
                  as="h1"
                  className="font-display font-black text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[-0.03em] text-[var(--text-100)]"
                  delay={0.2}
                  staggerDelay={0.05}
                >
                  We build AI solutions that actually ship.
                </TextReveal>
              </div>

              <FadeIn delay={0.8}>
                <p className="text-lg sm:text-xl leading-relaxed max-w-xl mb-10 text-[var(--text-300)]">
                  Digital transformation partner for startups and SMEs. Agentic AI, automation, and lean strategies
                  that turn complexity into growth.
                </p>
              </FadeIn>

              <FadeIn delay={1}>
                <div className="flex flex-col sm:flex-row gap-4 mb-16">
                  <MagneticButton
                    href="/get-a-quote"
                    className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[var(--color-brand-500)] text-white font-semibold rounded-xl text-base hover:bg-[var(--color-brand-400)] transition-colors duration-300"
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

              {/* Stats — horizontal strip, not hero-metric template */}
              <FadeIn delay={1.2}>
                <div className="flex gap-10 lg:gap-14">
                  {[
                    { value: 300, suffix: '%', label: 'Average ROI' },
                    { value: 15, suffix: '+', label: 'Countries' },
                    { value: 50, suffix: '+', label: 'Projects' },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="font-display font-black text-2xl sm:text-3xl text-[var(--text-100)]">
                        <Counter target={stat.value} suffix={stat.suffix} duration={2.5} />
                      </div>
                      <div className="text-xs text-[var(--text-400)] mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right — Hero image */}
            <FadeIn delay={0.4} className="hidden lg:block">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                  <Image
                    src="/images/ai-dashboard.webp"
                    alt="AI-powered analytics dashboard showing real-time business intelligence"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-0)]/60 via-transparent to-transparent" />
                </div>
                {/* Floating stat card */}
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-[var(--surface-1)] border border-[var(--surface-3)]/40 rounded-xl p-5 shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-emerald)]/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-[var(--color-emerald)]" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[var(--text-100)]">+300% ROI</div>
                      <div className="text-xs text-[var(--text-400)]">Average client return</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <section className="py-5 border-y border-[var(--surface-3)]/20 bg-[var(--surface-1)]/30">
        <Marquee speed={35}>
          {[
            'AI-First Consulting', 'Digital Transformation', 'Agentic AI', 'Automation',
            'Web Development', 'Social Media Strategy', 'Agile Management', 'Growth Engineering',
          ].map((item) => (
            <span key={item} className="inline-flex items-center gap-4 mx-6 text-sm text-[var(--text-500)]">
              {item}
              <span className="w-1 h-1 rounded-full bg-[var(--surface-4)]" />
            </span>
          ))}
        </Marquee>
      </section>

      {/* ===== SERVICES — Featured + Grid layout ===== */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <GradientOrb color="rgba(124, 58, 237, 0.06)" size={600} top="0" right="-200px" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[var(--text-100)]">
                What we build
              </h2>
              <p className="text-lg text-[var(--text-300)] leading-relaxed mt-4">
                From intelligent automation to full digital transformation — we deliver measurable results, not slide decks.
              </p>
            </div>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand-500)] hover:gap-3 transition-all shrink-0"
            >
              All services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>

          {/* Featured service — full width image + content */}
          <ScrollReveal className="mb-8">
            <Link
              href={`/services#${services[0].id}`}
              className="group relative block rounded-2xl overflow-hidden bg-[var(--surface-1)] border border-[var(--surface-3)]/40 hover:border-[var(--surface-4)] transition-all duration-500"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative aspect-[16/9] lg:aspect-auto">
                  <Image
                    src="/images/ai-automation.webp"
                    alt="AI-powered data processing and automation in action"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: `color-mix(in srgb, ${services[0].accentColor} 12%, transparent)`,
                      color: services[0].accentColor,
                    }}
                  >
                    {serviceIcons[services[0].icon]}
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl mb-4 text-[var(--text-100)]">
                    {services[0].title}
                  </h3>
                  <p className="text-[var(--text-300)] leading-relaxed mb-6 max-w-md">
                    {services[0].shortDesc}
                  </p>
                  <span
                    className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all"
                    style={{ color: services[0].accentColor }}
                  >
                    Explore this service
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* Remaining services — varied grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.06}>
            {services.slice(1).map((service) => (
              <StaggerItem key={service.id}>
                <Link
                  href={`/services#${service.id}`}
                  className="group relative block p-7 rounded-2xl bg-[var(--surface-1)] border border-[var(--surface-3)]/40 hover:border-[var(--surface-4)] transition-all duration-500 hover:-translate-y-1 overflow-hidden h-full"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `radial-gradient(circle at 30% 20%, color-mix(in srgb, ${service.accentColor} 8%, transparent) 0%, transparent 60%)`,
                    }}
                  />

                  <div className="relative">
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

      {/* ===== TOOLS — Left-aligned with image ===== */}
      <section className="relative py-20 border-y border-[var(--surface-3)]/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
            <div>
              <ScrollReveal>
                <p className="text-sm font-semibold text-[var(--color-brand-500)] mb-3">Integrated ecosystem</p>
                <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tight mb-4 text-[var(--text-100)]">
                  The tools you already use, supercharged with AI
                </h2>
                <p className="text-[var(--text-300)] leading-relaxed mb-8">
                  We don&apos;t replace your stack — we make it smarter. Every integration is battle-tested across 50+ client deployments.
                </p>
              </ScrollReveal>
              <ScrollReveal>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool) => (
                    <span
                      key={tool.name}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--surface-1)] border border-[var(--surface-3)]/30 text-[var(--text-300)] text-sm font-medium hover:border-[var(--surface-4)] hover:text-[var(--text-200)] transition-all"
                    >
                      {toolIcons[tool.icon]}
                      {tool.name}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/data-analytics.webp"
                  alt="Analytics dashboard showing integrated tools and performance metrics"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[var(--surface-0)]/30" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== PROCESS — Horizontal timeline ===== */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <GradientOrb color="rgba(245, 158, 11, 0.05)" size={500} bottom="-100px" left="-200px" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal className="mb-16 max-w-2xl">
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[var(--text-100)]">
              How we work
            </h2>
            <p className="text-lg text-[var(--text-300)] mt-4 leading-relaxed">
              A proven process enhanced by AI. Four steps from discovery to scale.
            </p>
          </ScrollReveal>

          <StaggerContainer className="relative" staggerDelay={0.1}>
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--surface-4)] to-transparent" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step) => (
                <StaggerItem key={step.step}>
                  <div className="relative">
                    {/* Step number */}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mb-6 border-2"
                      style={{
                        borderColor: step.color,
                        background: `color-mix(in srgb, ${step.color} 12%, var(--surface-0))`,
                        color: step.color,
                      }}
                    >
                      {processIcons[step.icon]}
                    </div>

                    <span className="font-mono text-xs font-semibold block mb-2" style={{ color: step.color }}>
                      {step.step}
                    </span>
                    <h3 className="font-display font-bold text-xl mb-3 text-[var(--text-100)]">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--text-400)]">
                      {step.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* ===== CASE STUDIES — Large image cards ===== */}
      <section className="relative py-24 lg:py-32 bg-[var(--surface-1)]/50 overflow-hidden">
        <GradientOrb color="rgba(244, 63, 94, 0.05)" size={500} top="-100px" right="-200px" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[var(--text-100)]">
                Real businesses, real outcomes
              </h2>
              <p className="text-lg text-[var(--text-300)] leading-relaxed mt-4">
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

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6" staggerDelay={0.1}>
            {caseStudies.slice(0, 4).map((cs, i) => {
              const images = [
                '/images/workspace.webp',
                '/images/team-collab.webp',
                '/images/ai-network.webp',
                '/images/ai-dashboard.webp',
              ];
              const altTexts = [
                'Data analytics dashboard for logistics optimization',
                'Clean workspace representing streamlined business operations',
                'Team collaborating on AI-powered digital transformation',
                'Business intelligence dashboard showing growth metrics',
              ];
              return (
                <StaggerItem key={cs.id}>
                  <Link
                    href={`/case-studies#${cs.id}`}
                    className="group block rounded-2xl overflow-hidden bg-[var(--surface-2)] border border-[var(--surface-3)]/30 hover:border-[var(--surface-4)] transition-all duration-500 hover:-translate-y-1 h-full"
                  >
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={images[i % images.length]}
                        alt={altTexts[i % altTexts.length]}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-2)] via-transparent to-transparent" />
                      <span
                        className="absolute top-4 left-4 px-3 py-1.5 rounded-lg text-xs font-semibold backdrop-blur-sm"
                        style={{
                          background: `color-mix(in srgb, ${cs.accentColor} 20%, transparent)`,
                          color: cs.accentColor,
                        }}
                      >
                        {cs.category}
                      </span>
                    </div>

                    <div className="p-7">
                      <h3 className="font-display font-bold text-lg mb-2 text-[var(--text-100)] group-hover:text-[var(--color-brand-500)] transition-colors leading-tight">
                        {cs.title}
                      </h3>
                      <p className="text-sm text-[var(--text-400)] leading-relaxed mb-4">
                        {cs.challenge.slice(0, 100)}...
                      </p>

                      <div className="flex items-center gap-4">
                        {cs.results.slice(0, 2).map((result, j) => (
                          <span key={j} className="flex items-center gap-1.5 text-xs font-medium" style={{ color: cs.accentColor }}>
                            <TrendingUp className="w-3 h-3" />
                            {result.length > 30 ? result.slice(0, 30) + '...' : result}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== TESTIMONIAL — Single large quote ===== */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <GradientOrb color="rgba(16, 185, 129, 0.05)" size={500} bottom="-100px" right="-100px" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-center">
            {/* Left — Image */}
            <ScrollReveal className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                <Image
                  src="/images/team-collab.webp"
                  alt="Client team celebrating successful AI implementation results"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>

            {/* Right — Quote */}
            <ScrollReveal>
              <Quote className="w-12 h-12 text-[var(--color-brand-500)]/30 mb-6" />
              <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug text-[var(--text-100)] mb-8">
                &ldquo;{testimonials[0].content}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4 mb-10">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold"
                  style={{ background: testimonials[0].accentColor }}
                >
                  {testimonials[0].name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[var(--text-100)]">{testimonials[0].name}</div>
                  <div className="text-xs text-[var(--text-400)]">{testimonials[0].role}, {testimonials[0].company}</div>
                </div>
              </div>

              {/* Mini testimonials */}
              <div className="flex flex-col sm:flex-row gap-4">
                {testimonials.slice(1).map((t) => (
                  <div key={t.id} className="flex-1 p-5 rounded-xl bg-[var(--surface-1)] border border-[var(--surface-3)]/30">
                    <div className="flex gap-0.5 mb-3">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 fill-[var(--color-amber)] text-[var(--color-amber)]" />
                      ))}
                    </div>
                    <p className="text-sm text-[var(--text-300)] leading-relaxed mb-3">
                      &ldquo;{t.content.slice(0, 100)}...&rdquo;
                    </p>
                    <div className="text-xs text-[var(--text-400)]">
                      <span className="font-semibold text-[var(--text-200)]">{t.name}</span>, {t.company}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== CTA — No gradient text ===== */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--surface-0)] via-[var(--surface-1)] to-[var(--surface-0)]" />
        <GradientOrb color="rgba(20, 184, 166, 0.1)" size={600} top="50%" left="50%" className="-translate-x-1/2 -translate-y-1/2" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="relative rounded-3xl border border-[var(--surface-3)]/30 overflow-hidden">
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src="/images/ai-dashboard.webp"
                  alt=""
                  fill
                  className="object-cover opacity-10"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-[var(--surface-1)]/95" />
              </div>

              <div className="relative p-10 sm:p-16 lg:p-24 text-center">
                <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6 text-[var(--text-100)]">
                  Ready to build something extraordinary?
                </h2>
                <p className="text-lg max-w-lg mx-auto mb-12 leading-relaxed text-[var(--text-300)]">
                  Book a free consultation. We&apos;ll show you exactly how AI can transform your operations.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                  <MagneticButton
                    href="/get-a-quote"
                    className="group inline-flex items-center justify-center gap-2.5 px-10 py-5 bg-[var(--color-brand-500)] text-white font-semibold rounded-xl text-lg hover:bg-[var(--color-brand-400)] transition-colors duration-300"
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
