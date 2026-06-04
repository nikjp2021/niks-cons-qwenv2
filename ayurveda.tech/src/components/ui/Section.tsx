import { ReactNode } from "react";
import Container from "./Container";
import ScrollReveal from "../animations/ScrollReveal";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "light" | "alt" | "dark" | "gradient" | "hero";
  id?: string;
  animate?: boolean;
}

export default function Section({
  children,
  className = "",
  background = "light",
  id,
  animate = true,
}: SectionProps) {
  const bgStyles = {
    light: "bg-[var(--color-surface)]",
    alt: "bg-[var(--color-surface-alt)]",
    dark: "bg-[var(--color-surface-inverted)] text-[var(--color-text-on-dark)]",
    gradient: "cta-gradient",
    hero: "hero-gradient",
  };

  const content = (
    <Container className="py-16 md:py-20 lg:py-24">{children}</Container>
  );

  return (
    <section id={id} className={`${bgStyles[background]} ${className}`}>
      {animate ? <ScrollReveal>{content}</ScrollReveal> : content}
    </section>
  );
}
