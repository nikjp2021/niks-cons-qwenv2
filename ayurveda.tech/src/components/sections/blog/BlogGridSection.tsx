"use client";

import BlogCard from "@/components/ui/BlogCard";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";
import { blogPosts, blogCategories } from "@/data/blog";

const otherPosts = blogPosts.filter((p) => !p.featured);

export default function BlogGridSection() {
  return (
    <>
      {/* Category Filters */}
      <ScrollReveal>
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {blogCategories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full font-ui text-ui-sm font-medium transition-colors duration-200 ${
                cat === "All"
                  ? "bg-[var(--color-accent)] text-[var(--color-text-on-accent)]"
                  : "bg-[var(--color-surface-alt)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Blog Grid */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherPosts.map((post) => (
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
    </>
  );
}
