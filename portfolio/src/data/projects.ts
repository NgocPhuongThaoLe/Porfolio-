import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'business-dashboard',
    number: '01',
    title: 'Business Intelligence Dashboard',
    category: 'Business Intelligence',
    description:
      'A reporting workspace for exploring business performance through clear metrics and interactive dashboards.',
    technologies: ['Power BI', 'SQL', 'DAX'],
    status: 'Coming soon',
  },
  {
    id: 'database-design',
    number: '02',
    title: 'Relational Database Design',
    category: 'Data Modelling',
    description:
      'A structured database project exploring entities, relationships and reliable data storage.',
    technologies: ['PostgreSQL', 'Supabase', 'ERD'],
    status: 'Coming soon',
  },
  {
    id: 'web-analytics',
    number: '03',
    title: 'Web Application & Analytics',
    category: 'Development',
    description:
      'A web experience that connects responsive interfaces with useful interaction tracking.',
    technologies: ['React', 'TypeScript', 'GA4'],
    status: 'Coming soon',
  },
]