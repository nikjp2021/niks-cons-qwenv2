import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import { BlogPageClient } from './BlogPageClient';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'AI insights, digital transformation strategies, and technical deep-dives from the Nik\'s Consulting team.',
  openGraph: {
    title: 'Blog | Nik\'s Consulting',
    description:
      'AI insights, digital transformation strategies, and technical deep-dives from the Nik\'s Consulting team.',
  },
};

export default function BlogPage() {
  return <BlogPageClient posts={blogPosts} />;
}
