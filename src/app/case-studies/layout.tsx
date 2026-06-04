import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies — Nik's Consulting",
  description:
    "See how AI-powered solutions have transformed operations and driven growth for our clients across 15+ countries.",
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
