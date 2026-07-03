'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles, Code, Users, Globe, Rocket, BookOpen } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerChildren';
import { MagneticButton } from '@/components/animations/MagneticButton';
import { GradientOrb } from '@/components/animations/GradientOrb';

const benefits = [
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Real Project Work',
    description: 'Work on live client projects — not simulated tasks. Your code ships to production.',
    color: 'var(--color-brand-500)',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Mentorship',
    description: 'Direct mentorship from senior engineers and AI specialists with 10+ years of experience.',
    color: 'var(--color-cyan)',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Global Team',
    description: 'Collaborate with team members across 15+ countries. Build your international network.',
    color: 'var(--color-emerald)',
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Portfolio Building',
    description: 'Build a portfolio of real AI projects that demonstrate your skills to future employers.',
    color: 'var(--color-amber)',
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Learning Path',
    description: 'Structured learning path covering AI, automation, web development, and project management.',
    color: 'var(--color-violet)',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Certificate',
    description: 'Receive a certificate of completion and a recommendation letter from Nik\'s Consulting.',
    color: 'var(--color-pink)',
  },
];

const tracks = [
  {
    title: 'AI & Automation Track',
    description: 'Build AI agents, automation pipelines, and intelligent systems. Work with LLMs, APIs, and production ML.',
    duration: '3 months',
    skills: ['Python', 'LLM APIs', 'Agent Frameworks', 'Automation Tools'],
    color: 'var(--color-brand-500)',
  },
  {
    title: 'Full-Stack Development Track',
    description: 'Build modern web applications with Next.js, React, and AI-first features. Ship real products.',
    duration: '3 months',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    color: 'var(--color-cyan)',
  },
  {
    title: 'UI/UX & Design Track',
    description: 'Design beautiful, accessible interfaces for AI-powered products. Learn modern design systems.',
    duration: '3 months',
    skills: ['Figma', 'Design Systems', 'Accessibility', 'Motion Design'],
    color: 'var(--color-amber)',
  },
];

export function InternshipPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 lg:pt-40 pb-20 lg:pb-24 overflow-hidden hero-gradient">
        <GradientOrb color="rgba(139, 92, 246, 0.08)" size={800} top="-300px" right="-300px" />

        <div className="relative section-container">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 items-center">
            <ScrollReveal>
              <span className="badge-pill mb-6 inline-flex">
                <Sparkles className="w-3 h-3 mr-1" />
                Internship
              </span>
              <h1 className="font-display font-extrabold text-6xl sm:text-7xl lg:text-8xl tracking-[-0.04em] mb-8 text-[var(--text-100)]">
                Build the future with real AI projects
              </h1>
              <p className="text-2xl text-[var(--text-300)] leading-relaxed font-light mb-12">
                Join our gifted internship program. Work on live client projects, learn from industry experts, and build a portfolio that stands out.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <MagneticButton
                  href="/get-a-quote"
                  className="glow-button group inline-flex items-center justify-center gap-3 px-10 py-5 font-semibold rounded-full text-base text-white"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
                <MagneticButton
                  href="/contact"
                  className="ghost-button group inline-flex items-center justify-center gap-2 px-10 py-5 font-semibold rounded-full text-base"
                >
                  Ask a Question
                </MagneticButton>
              </div>
            </ScrollReveal>
            <ScrollReveal className="hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-violet)]/10 to-[var(--color-brand-500)]/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="w-16 h-16 text-[var(--color-violet)]/30 mx-auto mb-4" />
                    <div className="font-display font-bold text-3xl text-[var(--text-100)]">Join Us</div>
                    <div className="text-sm text-[var(--text-400)] mt-2">Gifted Internship</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="section-padding">
        <div className="section-container">
          <ScrollReveal className="mb-20">
            <span className="badge-pill mb-4 inline-flex">Tracks</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl tracking-[-0.03em] text-[var(--text-100)]">
              Choose your track
            </h2>
            <p className="text-xl text-[var(--text-300)] mt-6 font-light max-w-2xl">
              Three specialized tracks designed to build real skills with real projects. Pick the one that matches your interests.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.1}>
            {tracks.map((track) => (
              <StaggerItem key={track.title}>
                <div className="group relative glass-card p-10 h-full flex flex-col">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"
                    style={{
                      background: `radial-gradient(circle at 30% 20%, color-mix(in srgb, ${track.color} 5%, transparent) 0%, transparent 60%)`,
                    }}
                  />
                  <div className="relative flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ background: track.color }}
                      />
                      <span className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-[var(--surface-2)] text-[var(--text-300)] border border-[var(--surface-3)]/30">
                        {track.duration}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-xl mb-4 text-[var(--text-100)]">{track.title}</h3>
                    <p className="text-sm text-[var(--text-300)] leading-relaxed mb-8 flex-1 font-light">{track.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {track.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-full text-xs font-medium bg-[var(--surface-2)] text-[var(--text-400)] border border-[var(--surface-3)]/30"
                        >
                          {skill}
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

      {/* Benefits */}
      <section className="section-padding bg-[var(--surface-1)]/30">
        <div className="section-container">
          <ScrollReveal className="mb-16">
            <span className="badge-pill mb-4 inline-flex">Benefits</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl tracking-[-0.03em] text-[var(--text-100)]">
              What you&apos;ll gain
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.08}>
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div className="glass-card p-8 h-full">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                    style={{
                      background: `color-mix(in srgb, ${benefit.color} 10%, transparent)`,
                      color: benefit.color,
                    }}
                  >
                    {benefit.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg mb-3 text-[var(--text-100)]">{benefit.title}</h3>
                  <p className="text-sm text-[var(--text-300)] leading-relaxed font-light">{benefit.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <span className="badge-pill mb-6 inline-flex">Requirements</span>
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl tracking-[-0.03em] mb-8 text-[var(--text-100)]">
                Who we&apos;re looking for
              </h2>
              <div className="space-y-4">
                {[
                  'Passion for technology and AI',
                  'Basic programming knowledge (any language)',
                  'Eagerness to learn and build real projects',
                  'Strong communication skills',
                  'Availability for 15-20 hours per week',
                  'Remote-friendly — work from anywhere',
                ].map((req) => (
                  <div key={req} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-[var(--color-brand-500)]" />
                    <span className="text-lg text-[var(--text-300)]">{req}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="glass-card p-10">
                <h3 className="font-display font-bold text-2xl mb-6 text-[var(--text-100)]">
                  Application Process
                </h3>
                <div className="space-y-6">
                  {[
                    { step: '01', title: 'Apply', desc: 'Submit your application with a brief intro and portfolio' },
                    { step: '02', title: 'Interview', desc: '30-minute casual chat about your interests and goals' },
                    { step: '03', title: 'Trial Task', desc: 'A small project to assess your skills and learning ability' },
                    { step: '04', title: 'Onboard', desc: 'Join the team and start working on real projects' },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-5">
                      <span className="font-mono text-sm font-semibold text-[var(--color-brand-500)] shrink-0 mt-0.5">
                        {item.step}
                      </span>
                      <div>
                        <div className="font-semibold text-[var(--text-100)] mb-1">{item.title}</div>
                        <p className="text-sm text-[var(--text-400)]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[var(--surface-1)]/30 relative overflow-hidden">
        <GradientOrb color="rgba(139, 92, 246, 0.06)" size={600} bottom="-200px" left="-200px" />

        <div className="relative section-container">
          <ScrollReveal>
            <div className="glass-card p-12 sm:p-16 text-center">
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl tracking-[-0.03em] mb-6 text-[var(--text-100)]">
                Ready to start your AI journey?
              </h2>
              <p className="text-xl text-[var(--text-300)] mb-10 max-w-lg mx-auto font-light">
                Apply now and join a team that&apos;s building the future of AI-powered business solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton
                  href="/get-a-quote"
                  className="glow-button group inline-flex items-center justify-center gap-3 px-10 py-5 font-semibold rounded-full text-base text-white"
                >
                  Apply for Internship
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
                <MagneticButton
                  href="/contact"
                  className="ghost-button group inline-flex items-center justify-center gap-2 px-10 py-5 font-semibold rounded-full text-base"
                >
                  Ask a Question
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
