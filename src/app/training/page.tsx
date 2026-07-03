import type { Metadata } from 'next';
import { TrainingPageClient } from './TrainingPageClient';
import { trainingPrograms } from '@/data/training';

export const metadata: Metadata = {
  title: 'AI Training',
  description:
    'Professional AI training programs for teams and individuals. Hands-on workshops, custom curricula, and ongoing support to build lasting AI capability.',
  openGraph: {
    title: 'AI Training Programs | Nik\'s Consulting',
    description:
      'Professional AI training programs for teams and individuals. Learn to deploy, manage, and optimize AI systems.',
  },
};

export default function TrainingPage() {
  return <TrainingPageClient programs={trainingPrograms} />;
}
