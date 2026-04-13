export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  image?: string;
  technologies: string[];
  category: 'frontend' | 'backend' | 'fullstack' | 'cloud' | 'devops';
  featured: boolean;
  startDate: Date;
  endDate?: Date;
  github?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'cloud' | 'devops' | 'tools';
  level: 'expert' | 'advanced' | 'intermediate' | 'beginner';
  percentage: number;
  icon?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  technologies: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
