import type { Metadata } from "next";
import BlogHeroSection from "@/components/sections/blog/BlogHeroSection";
import FeaturedPostSection from "@/components/sections/blog/FeaturedPostSection";
import BlogGridSection from "@/components/sections/blog/BlogGridSection";
import BlogSubscribeCTA from "@/components/sections/blog/BlogSubscribeCTA";

export const metadata: Metadata = {
  title: "The Ayurveda.Tech Journal — Dosha Guides, Wellness Tips & Seasonal Routines",
  description:
    "Explore Ayurvedic wisdom for modern life. Read dosha guides, seasonal wellness tips, and practitioner insights from certified Ayurvedic experts.",
  openGraph: {
    title: "The Ayurveda.Tech Journal | Ayurvedic Wellness Blog",
    description: "Dosha guides, seasonal routines, and wellness wisdom from certified Ayurvedic practitioners.",
  },
};

export default function BlogPage() {
  return (
    <>
      <BlogHeroSection />
      <FeaturedPostSection />
      <BlogGridSection />
      <BlogSubscribeCTA />
    </>
  );
}
