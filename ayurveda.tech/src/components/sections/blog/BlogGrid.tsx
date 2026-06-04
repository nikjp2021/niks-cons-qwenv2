"use client";

import Section from "@/components/ui/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import BlogCard from "@/components/ui/BlogCard";
import SearchInput from "@/components/ui/SearchInput";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { blogPosts } from "@/data/blog";

export default function BlogGrid() {
  return (
    <Section background="alt">
      <ScrollReveal>
        <div className="text-center mb-12">
          <SectionLabel>ARTICLES</SectionLabel>
          <h2 className="font-heading text-h2 font-semibold text-[var(--color-text-primary)] mb-4">
            Latest Articles & Insights.
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="max-w-md mx-auto mb-10">
          <SearchInput placeholder="Search articles..." />
        </div>
      </ScrollReveal>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {blogPosts.map((post) => (
          <StaggerItem key={post.slug}>
            <BlogCard
              title={post.title}
              excerpt={post.excerpt}
              category={post.category}
              author={post.author}
              date={post.date}
              slug={post.slug}
            />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
