"use client";

import Container from "@/components/ui/Container";
import NewsletterForm from "@/components/ui/NewsletterForm";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function BlogSubscribeCTA() {
  return (
    <section className="cta-gradient relative overflow-hidden">
      <Container className="py-16 md:py-20 text-center">
        <ScrollReveal>
          <h2 className="font-heading text-h2 font-bold text-white mb-4">
            Stay Inspired, Stay Balanced.
          </h2>
          <p className="font-body text-body-lg text-white/80 leading-[var(--lh-body-lg)] max-w-xl mx-auto mb-8">
            Get Ayurvedic wellness tips, seasonal guides, and practitioner insights
            delivered to your inbox. No spam — just wisdom.
          </p>
          <div className="max-w-md mx-auto">
            <NewsletterForm incentive="Subscribe and get your free Dosha Guide PDF." />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
