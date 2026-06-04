"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQAccordionProps {
  question: string;
  answer: string;
  open?: boolean;
}

export default function FAQAccordion({
  question,
  answer,
  open = false,
}: FAQAccordionProps) {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <div className="border-b border-[var(--color-border)] last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left font-heading text-h4 font-medium text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0 text-[var(--color-accent)]"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-5 font-body text-body text-[var(--color-text-secondary)] leading-[var(--lh-body)] max-w-[75ch]">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
