import Link from "next/link";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-20 md:py-32 flex flex-col items-center justify-center text-center">
      <span className="font-heading text-[8rem] md:text-[12rem] font-bold text-[var(--color-border)] leading-none mb-4">
        404
      </span>
      <h1 className="font-heading text-h1 font-bold text-[var(--color-text-primary)] mb-4">
        Page Not Found
      </h1>
      <p className="font-body text-body-lg text-[var(--color-text-secondary)] leading-[var(--lh-body-lg)] max-w-md mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let us help you find your way back.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="px-8 py-3.5 bg-[var(--color-accent)] text-[var(--color-text-on-accent)] rounded-[var(--radius-button)] font-ui text-ui font-semibold shadow-[var(--shadow-button)] hover:bg-[var(--color-accent-hover)] transition-all duration-200 no-underline"
        >
          Back to Home
        </Link>
        <Link
          href="/consultation"
          className="px-8 py-3.5 bg-transparent text-[var(--color-accent)] border-2 border-[var(--color-accent)] rounded-[var(--radius-button)] font-ui text-ui font-semibold hover:bg-[var(--color-accent)] hover:text-[var(--color-text-on-accent)] transition-all duration-200 no-underline"
        >
          Book a Consultation
        </Link>
      </div>
    </Container>
  );
}
