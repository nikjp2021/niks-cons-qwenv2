'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Send, CheckCircle2 } from 'lucide-react';

const serviceLinks = [
  { label: 'AI Solutions & Agentic AI', href: '/services#ai-solutions' },
  { label: 'AI Automation', href: '/services#ai-automation' },
  { label: 'Digital Transformation', href: '/services#digital-transformation' },
  { label: 'Website & App Development', href: '/services#website-development' },
  { label: 'AI-Powered Social Media', href: '/services#ai-social-media' },
  { label: 'Agile Project Management', href: '/services#agile-management' },
];

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Gifted Internship', href: '/internship' },
  { label: 'AI Training', href: '/training' },
  { label: 'Contact', href: '/contact' },
  { label: 'Get a Quote', href: '/get-a-quote' },
  { label: 'Blog', href: '/blog' },
];

const socialLinks = [
  { label: 'Twitter', href: 'https://twitter.com/niksconsulting', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/niksconsulting', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { label: 'Instagram', href: 'https://instagram.com/niksconsulting', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer
      className="border-t"
      style={{
        background: 'var(--surface-0)',
        borderColor: 'color-mix(in srgb, var(--surface-4) 30%, transparent)',
      }}
    >
      <div
        className="mx-auto px-[var(--space-6)] sm:px-[var(--space-10)] lg:px-[var(--space-16)]"
        style={{
          maxWidth: 'var(--container-max)',
          paddingTop: 'var(--space-20)',
          paddingBottom: 'var(--space-12)',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand + Newsletter */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5" aria-label="Nik&apos;s Consulting — Home">
              <div
                className="w-9 h-9 flex items-center justify-center font-black text-white text-sm tracking-tight"
                style={{
                  background: 'var(--color-brand-500)',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                N
              </div>
              <span
                className="font-bold text-[var(--text-100)] text-lg tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Nik&apos;s Consulting
              </span>
            </Link>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: 'var(--text-300)' }}
            >
              Pioneers in AI Solutions & Innovation. We deliver AI-powered
              solutions, agentic workflows, and digital transformation for
              startups and SMEs.
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <h4
                className="font-semibold text-sm mb-3"
                style={{
                  color: 'var(--text-100)',
                  fontFamily: 'var(--font-display)',
                }}
              >
                Stay Updated
              </h4>
              <p
                className="text-xs mb-3"
                style={{ color: 'var(--text-400)' }}
              >
                Get AI insights delivered to your inbox.
              </p>
              {subscribed ? (
                <div
                  className="flex items-center gap-2 text-sm"
                  style={{ color: 'var(--color-emerald)' }}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Thanks! We&apos;ll keep you updated.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    aria-label="Email address for newsletter"
                    className="flex-1 px-3 py-2 text-sm bg-[var(--surface-2)] border border-[var(--surface-3)] text-[var(--text-100)] placeholder:text-[var(--text-500)] focus:outline-none focus:border-[var(--color-brand-500)] transition-colors"
                    style={{ borderRadius: 'var(--radius-lg)' }}
                  />
                  <button
                    type="submit"
                    className="min-w-[48px] min-h-[48px] px-4 py-3 text-white text-sm font-semibold transition-colors flex items-center justify-center"
                    style={{
                      background: 'var(--color-brand-500)',
                      borderRadius: 'var(--radius-lg)',
                    }}
                    aria-label="Subscribe to newsletter"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center text-[var(--text-400)] hover:text-[var(--text-100)] hover:bg-[var(--surface-2)] transition-all"
                  style={{ borderRadius: 'var(--radius-lg)' }}
                  aria-label={social.label}
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4
              className="font-semibold text-sm mb-4 uppercase tracking-wider"
              style={{
                color: 'var(--text-100)',
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-xs)',
              }}
            >
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[var(--text-100)] transition-colors duration-[var(--duration-fast)]"
                    style={{ color: 'var(--text-300)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4
              className="font-semibold text-sm mb-4 uppercase tracking-wider"
              style={{
                color: 'var(--text-100)',
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-xs)',
              }}
            >
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[var(--text-100)] transition-colors duration-[var(--duration-fast)]"
                    style={{ color: 'var(--text-300)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4
              className="font-semibold text-sm mb-4 uppercase tracking-wider"
              style={{
                color: 'var(--text-100)',
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-xs)',
              }}
            >
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@niksconsulting.com"
                  className="text-sm hover:text-[var(--text-100)] transition-colors duration-[var(--duration-fast)]"
                  style={{ color: 'var(--text-300)' }}
                >
                  info@niksconsulting.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-sm hover:text-[var(--text-100)] transition-colors duration-[var(--duration-fast)]"
                  style={{ color: 'var(--text-300)' }}
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <span
                  className="text-sm"
                  style={{ color: 'var(--text-300)' }}
                >
                  Global Remote | Serving 15+ Countries
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            borderTop:
              '1px solid color-mix(in srgb, var(--surface-4) 30%, transparent)',
          }}
        >
          <p className="text-sm" style={{ color: 'var(--text-400)' }}>
            &copy; {new Date().getFullYear()} Nik&apos;s Consulting. All rights
            reserved.
          </p>
          <p className="text-sm" style={{ color: 'var(--text-500)' }}>
            Built with passion by Nik&apos;s Consulting.
          </p>
        </div>
      </div>
    </footer>
  );
}
