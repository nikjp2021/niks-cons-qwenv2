import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'AI insights, digital transformation strategies, and technical deep-dives from the Nik\'s Consulting team.',
};

export default function BlogPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-5">
      <div className="text-center max-w-2xl">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8"
          style={{
            background: 'color-mix(in srgb, var(--color-cyan) 12%, transparent)',
          }}
        >
          <BookOpen
            className="w-10 h-10"
            style={{ color: 'var(--color-cyan)' }}
          />
        </div>
        <h1
          className="font-black text-4xl sm:text-5xl tracking-tight mb-6"
          style={{
            color: 'var(--text-100)',
            fontFamily: 'var(--font-display)',
          }}
        >
          Blog
        </h1>
        <p
          className="text-lg leading-relaxed mb-10"
          style={{ color: 'var(--text-300)' }}
        >
          Insights on AI, automation, digital transformation, and growth
          strategies for startups and SMEs. Stay ahead with expert perspectives
          from our global team.
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
            Subscribe for Updates
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-base border transition-all"
            style={{
              borderColor: 'var(--surface-4)',
              color: 'var(--text-200)',
              borderRadius: 'var(--radius-xl)',
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
