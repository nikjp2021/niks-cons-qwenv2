export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  accentColor: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 'agentic-ai-small-business',
    title: 'How Agentic AI Is Transforming Small Business Operations',
    excerpt: 'Agentic AI goes beyond chatbots — autonomous agents that handle complex workflows, make decisions, and execute tasks without human intervention. Here\'s how SMEs can leverage this technology.',
    category: 'AI Strategy',
    date: 'Jun 2026',
    readTime: '5 min read',
    accentColor: '#14b8a6',
    tags: ['Agentic AI', 'Automation', 'SME'],
  },
  {
    id: 'digital-transformation-roadmap',
    title: 'The Lean Digital Transformation Roadmap for Startups',
    excerpt: 'Most digital transformation frameworks are built for enterprises. Here\'s a lean, startup-friendly approach that delivers results in weeks, not years.',
    category: 'Digital Transformation',
    date: 'May 2026',
    readTime: '7 min read',
    accentColor: '#f59e0b',
    tags: ['DX', 'Startups', 'Strategy'],
  },
  {
    id: 'ai-social-media-strategy',
    title: 'AI-Powered Social Media: From Zero to 10K Followers in 90 Days',
    excerpt: 'A step-by-step breakdown of how we use AI tools to create, schedule, and optimize social media content that actually drives engagement and conversions.',
    category: 'Social Media',
    date: 'May 2026',
    readTime: '6 min read',
    accentColor: '#f43f5e',
    tags: ['AI', 'Social Media', 'Growth'],
  },
  {
    id: 'whatsapp-automation-brazil',
    title: 'WhatsApp Automation: How We Helped a Bakery Scale from Zero to 60% Online Orders',
    excerpt: 'When Dona Gi Bolos had zero digital presence, we built an AI-powered WhatsApp automation system that transformed their entire business model.',
    category: 'Case Study',
    date: 'Apr 2026',
    readTime: '4 min read',
    accentColor: '#10b981',
    tags: ['Automation', 'Case Study', 'WhatsApp'],
  },
  {
    id: 'llm-integration-guide',
    title: 'Integrating LLMs into Your Business: A Practical Guide',
    excerpt: 'From choosing the right model to building production-ready pipelines — everything you need to know about deploying Large Language Models in real business applications.',
    category: 'Technical',
    date: 'Apr 2026',
    readTime: '8 min read',
    accentColor: '#8b5cf6',
    tags: ['LLM', 'Technical', 'AI'],
  },
  {
    id: 'agile-ai-teams',
    title: 'Building Agile Teams for AI-First Development',
    excerpt: 'Traditional Scrum doesn\'t fit AI projects. Here\'s how we adapted agile methodologies for machine learning workflows and rapid iteration cycles.',
    category: 'Project Management',
    date: 'Mar 2026',
    readTime: '6 min read',
    accentColor: '#0ea5e9',
    tags: ['Agile', 'Teams', 'AI'],
  },
];
