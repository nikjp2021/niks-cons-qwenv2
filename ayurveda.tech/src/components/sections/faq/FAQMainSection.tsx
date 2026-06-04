"use client";

import SearchInput from "@/components/ui/SearchInput";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { faqCategories } from "@/data/faq";

export default function FAQMainSection() {
  return (
    <>
      <div className="max-w-2xl mx-auto mb-12">
        <SearchInput placeholder="Search questions..." />
      </div>

      <div className="max-w-2xl mx-auto space-y-10">
        {faqCategories.map((category) => (
          <div key={category.id} id={category.id}>
            <h2 className="font-heading text-h2 font-semibold text-[var(--color-text-primary)] mb-6">
              {category.label}
            </h2>
            <div className="bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-6 md:p-8">
              {category.questions.map((q, i) => (
                <FAQAccordion
                  key={i}
                  question={q.question}
                  answer={q.answer}
                  open={i === 0}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
