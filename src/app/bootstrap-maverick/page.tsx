import type { Metadata } from 'next';
import { BootstrapMaverickPage } from './BootstrapMaverickPage';

export const metadata: Metadata = {
  title: 'Bootstrap Maverick',
  description:
    'Transform your raw ideas into validated, actionable strategies with Bootstrap Maverick — AI-powered brainstorming built on COT prompting research.',
  openGraph: {
    title: 'Bootstrap Maverick — AI-Powered Entrepreneurial Brainstorming',
    description:
      'Unleash your entrepreneurial genius. Get 3 audacious, low-cost marketing strategies with AI-powered validation.',
  },
};

export default function BootstrapMaverick() {
  return <BootstrapMaverickPage />;
}
