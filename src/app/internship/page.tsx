import type { Metadata } from 'next';
import { InternshipPageClient } from './InternshipPageClient';

export const metadata: Metadata = {
  title: 'Gifted Internship',
  description:
    'Join Nik\'s Consulting as a gifted intern. Work on real AI projects, learn from industry experts, and build your portfolio with cutting-edge technology.',
  openGraph: {
    title: 'Gifted Internship | Nik\'s Consulting',
    description:
      'Work on real AI projects, learn from industry experts, and build your portfolio with cutting-edge technology.',
  },
};

export default function InternshipPage() {
  return <InternshipPageClient />;
}
