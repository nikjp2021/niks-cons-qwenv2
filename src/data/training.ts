export interface TrainingProgram {
  id: string;
  title: string;
  description: string;
  duration: string;
  format: string;
  icon: string;
  features: string[];
  accentColor: string;
}

export const trainingPrograms: TrainingProgram[] = [
  {
    id: 'ai-fundamentals',
    title: 'AI Fundamentals for Business Leaders',
    description: 'Understand AI, machine learning, and agentic systems without the technical jargon. Perfect for decision-makers who need to evaluate AI opportunities.',
    duration: '2 Days',
    format: 'Online / In-Person',
    icon: 'Brain',
    features: [
      'AI & ML concepts explained for business',
      'Identifying AI opportunities in your workflow',
      'Evaluating AI vendors and tools',
      'Building an AI adoption roadmap',
      'Hands-on with AI assistants (ChatGPT, Claude)',
    ],
    accentColor: '#14b8a6',
  },
  {
    id: 'agentic-ai-workshop',
    title: 'Building Agentic AI Systems',
    description: 'Deep-dive workshop on building autonomous AI agents that handle complex workflows. From prompt engineering to production deployment.',
    duration: '3 Days',
    format: 'Online / In-Person',
    icon: 'Bot',
    features: [
      'Agent architecture patterns',
      'Tool use and function calling',
      'Multi-agent orchestration',
      'Evaluation and testing strategies',
      'Production deployment best practices',
    ],
    accentColor: '#0ea5e9',
  },
  {
    id: 'automation-masterclass',
    title: 'AI Automation Masterclass',
    description: 'Learn to build intelligent automation pipelines that reduce costs and eliminate manual errors. Covers RPA, AI integration, and workflow optimization.',
    duration: '2 Days',
    format: 'Online',
    icon: 'Zap',
    features: [
      'Process mapping and optimization',
      'No-code automation tools (Zapier, Make)',
      'AI-powered workflow orchestration',
      'Integration with CRM and business tools',
      'Measuring automation ROI',
    ],
    accentColor: '#f59e0b',
  },
  {
    id: 'digital-strategy',
    title: 'Digital Transformation Strategy',
    description: 'A hands-on program for building your digital transformation roadmap. Assess your digital maturity, prioritize initiatives, and build a phased execution plan.',
    duration: '1 Day',
    format: 'Online / In-Person',
    icon: 'Globe',
    features: [
      'Digital maturity assessment framework',
      'Competitive digital benchmarking',
      'Prioritization using ICE scoring',
      'Change management playbook',
      'KPI dashboard design',
    ],
    accentColor: '#10b981',
  },
];
