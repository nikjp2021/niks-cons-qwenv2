import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gifted Internship Program',
  description:
    'Join the Nik\'s Consulting Gifted Internship — real-world AI projects, mentorship, and career acceleration for aspiring tech professionals.',
};

export default function InternshipPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-5">
      <div className="text-center max-w-2xl">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8"
          style={{
            background: 'color-mix(in srgb, var(--color-violet) 12%, transparent)',
          }}
        >
          <Users
            className="w-10 h-10"
            style={{ color: 'var(--color-violet)' }}
          />
        </div>
        <h1
          className="font-black text-4xl sm:text-5xl tracking-tight mb-6"
          style={{
            color: 'var(--text-100)',
            fontFamily: 'var(--font-display)',
          }}
        >
          Gifted Internship Program
        </h1>
        <p
          className="text-lg leading-relaxed mb-10"
          style={{ color: 'var(--text-300)' }}
        >
          Work on real AI projects alongside our global team. Gain hands-on
          experience in agentic AI, automation, digital transformation, and more.
          Mentorship from PhD-level experts and industry veterans.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 text-white font-semibold text-base transition-colors"
            style={{
              background: 'var(--color-brand-500)',
              borderRadius: 'var(--radius-xl)',
            }}
          >
            Apply Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-base border transition-all"
            style={{
              borderColor: 'var(--surface-4)',
              color: 'var(--text-200)',
              borderRadius: 'var(--radius-xl)',
            }}
          >
            Meet the Team
          </Link>
        </div>
      </div>
    </section>
  );
}
