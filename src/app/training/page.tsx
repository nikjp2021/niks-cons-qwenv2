import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, GraduationCap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Training',
  description:
    'Professional AI training programs for teams and individuals. Learn to deploy, manage, and optimize AI systems with hands-on guidance from Nik\'s Consulting.',
};

export default function TrainingPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-5">
      <div className="text-center max-w-2xl">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8"
          style={{
            background: 'color-mix(in srgb, var(--color-brand-500) 12%, transparent)',
          }}
        >
          <GraduationCap
            className="w-10 h-10"
            style={{ color: 'var(--color-brand-500)' }}
          />
        </div>
        <h1
          className="font-black text-4xl sm:text-5xl tracking-tight mb-6"
          style={{
            color: 'var(--text-100)',
            fontFamily: 'var(--font-display)',
          }}
        >
          AI Training Programs
        </h1>
        <p
          className="text-lg leading-relaxed mb-10"
          style={{ color: 'var(--text-300)' }}
        >
          Professional AI training for teams and individuals. Hands-on workshops,
          custom curricula, and ongoing support to build lasting AI capability in
          your organization.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/get-a-quote"
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 text-white font-semibold text-base transition-colors"
            style={{
              background: 'var(--color-brand-500)',
              borderRadius: 'var(--radius-xl)',
            }}
          >
            Book a Training
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-base border transition-all"
            style={{
              borderColor: 'var(--surface-4)',
              color: 'var(--text-200)',
              borderRadius: 'var(--radius-xl)',
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
