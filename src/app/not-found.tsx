import Link from 'next/link';
import { ArrowRight, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-5">
      <div className="text-center max-w-lg">
        <div className="font-display font-black text-[8rem] leading-none text-[var(--color-brand-500)] mb-4">
          404
        </div>
        <h1 className="font-display font-bold text-3xl sm:text-4xl tracking-tight mb-4 text-[var(--text-100)]">
          Page not found
        </h1>
        <p className="text-lg text-[var(--text-300)] mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-[var(--color-brand-500)] text-white font-semibold rounded-xl text-base hover:bg-[var(--color-brand-400)] transition-colors"
          >
            <Home className="w-4.5 h-4.5" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[var(--surface-4)] text-[var(--text-200)] font-semibold text-base hover:border-[var(--surface-5)] transition-all"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
