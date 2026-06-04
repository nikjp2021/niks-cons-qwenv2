import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { blogPosts } from "@/data/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Ayurveda.Tech Journal`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <Container className="py-16 md:py-20">
      <article className="max-w-3xl mx-auto">
        <header className="mb-10">
          <Badge variant="accent" className="mb-4">{post.category}</Badge>
          <h1 className="font-heading text-h1 font-bold text-[var(--color-text-primary)] leading-[var(--lh-tight)] mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 font-ui text-ui-sm text-[var(--color-text-muted)] mb-6">
            <span>{post.author}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <div className="h-64 md:h-80 bg-[var(--color-surface-alt)] rounded-[var(--radius-card)] flex items-center justify-center">
            <span className="font-ui text-ui-sm text-[var(--color-text-muted)]">Featured Image</span>
          </div>
        </header>

        <div className="font-body text-body text-[var(--color-text-secondary)] leading-[var(--lh-body)] space-y-4 max-w-[75ch]">
          <p>
            This article is part of our ongoing series on Ayurvedic wellness. Content
            will be fully written and published soon. Stay tuned!
          </p>
          <p>
            In the meantime, we invite you to explore our consultations and connect with
            certified Ayurvedic practitioners who can guide you on your wellness journey.
          </p>
        </div>

        <footer className="mt-12 pt-8 border-t border-[var(--color-border)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex gap-3">
              <span className="font-ui text-ui-sm text-[var(--color-text-muted)]">Share:</span>
              <button className="font-ui text-ui-sm text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors">Twitter</button>
              <button className="font-ui text-ui-sm text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors">Facebook</button>
              <button className="font-ui text-ui-sm text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors">Copy Link</button>
            </div>
            <Button href="/blog" variant="ghost" size="sm">← Back to Blog</Button>
          </div>
        </footer>
      </article>
    </Container>
  );
}
