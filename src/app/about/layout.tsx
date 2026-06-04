import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Nik's Consulting",
  description:
    "Pioneers in AI Solutions & Innovation — empowering businesses worldwide with agentic AI, automation, and digital transformation.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
