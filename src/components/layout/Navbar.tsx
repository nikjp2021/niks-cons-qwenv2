'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { Menu, X, Sun, Moon, ChevronDown, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Our Services', href: '/services' },
      { label: 'Case Studies', href: '/case-studies' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[var(--surface-0)]/80 backdrop-blur-xl border-b border-[var(--surface-3)]/30'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#14b8a6] to-[#06b6d4] flex items-center justify-center font-display font-black text-white text-sm tracking-tight">
              N
            </div>
            <span className="font-display font-bold text-[var(--text-100)] text-lg tracking-tight">
              Nik&apos;s
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[var(--text-300)] hover:text-[var(--text-100)] transition-colors duration-200"
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3.5 h-3.5 opacity-50" />}
                </Link>
                <AnimatePresence>
                  {link.children && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="bg-[var(--surface-2)] border border-[var(--surface-3)] rounded-xl p-2 min-w-[180px] shadow-lg">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-[var(--text-300)] hover:text-[var(--text-100)] hover:bg-[var(--surface-3)]/50 rounded-lg transition-all duration-200"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-[var(--text-400)] hover:text-[var(--text-100)] hover:bg-[var(--surface-2)] transition-all duration-200"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                  <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Sun className="w-4.5 h-4.5" />
                  </motion.div>
                ) : (
                  <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Moon className="w-4.5 h-4.5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <Link
              href="/get-a-quote"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#14b8a6] to-[#06b6d4] text-white text-sm font-semibold hover:shadow-lg hover:shadow-[#14b8a6]/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get a Quote
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center text-[var(--text-300)] hover:text-[var(--text-100)] hover:bg-[var(--surface-2)] transition-all"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[var(--surface-0)]/95 backdrop-blur-2xl pt-24 px-8 lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 text-2xl font-display font-bold text-[var(--text-100)] border-b border-[var(--surface-3)]/30"
                  >
                    {link.label}
                  </Link>
                  {link.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 pl-4 text-base text-[var(--text-300)] hover:text-[var(--text-100)]"
                    >
                      {child.label}
                    </Link>
                  ))}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="pt-8"
              >
                <Link
                  href="/get-a-quote"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#14b8a6] to-[#06b6d4] text-white font-semibold text-lg"
                >
                  Get a Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
