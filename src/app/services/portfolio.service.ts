import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { Project, Skill, Experience, SocialLink } from '../interfaces/portfolio.interface';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private projects = signal<Project[]>([
    {
      id: '1',
      title: 'Sistema de Gestión en Nube',
      description: 'Plataforma escalable para gestión de infraestructura multi-cloud con dashboard en tiempo real.',
      url: 'https://example.com/cloud-mgmt',
      image: 'https://via.placeholder.com/400x250?text=Cloud+Mgmt',
      technologies: ['Angular', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
      category: 'fullstack',
      featured: true,
      startDate: new Date('2024-01-15'),
      github: 'https://github.com/user/cloud-mgmt',
    },
    {
      id: '2',
      title: 'API REST Microservicios',
      description: 'Arquitectura de microservicios con patrón CQRS y Event Sourcing.',
      url: 'https://example.com/microservices',
      technologies: ['Node.js', 'Kafka', 'MongoDB', 'Docker', 'Kubernetes'],
      category: 'backend',
      featured: true,
      startDate: new Date('2023-08-10'),
      github: 'https://github.com/user/microservices',
    },
    {
      id: '3',
      title: 'Dashboard Analítico',
      description: 'Visualización de datos en tiempo real con gráficos interactivos y filtros dinámicos.',
      url: 'https://example.com/analytics',
      technologies: ['Angular', 'D3.js', 'RxJS', 'Tailwind CSS'],
      category: 'frontend',
      featured: true,
      startDate: new Date('2024-03-01'),
      github: 'https://github.com/user/analytics-dashboard',
    },
    {
      id: '4',
      title: 'Infraestructura como Código',
      description: 'Automatización completa de infraestructura en AWS usando Terraform y CDK.',
      url: 'https://example.com/iac',
      technologies: ['Terraform', 'AWS CDK', 'Python', 'GitHub Actions'],
      category: 'devops',
      featured: false,
      startDate: new Date('2024-02-20'),
      github: 'https://github.com/user/infrastructure-as-code',
    },
    {
      id: '5',
      title: 'Librería de Componentes',
      description: 'Componentes reutilizables con TypeScript, Storybook y pruebas E2E.',
      url: 'https://example.com/ui-lib',
      technologies: ['Angular', 'TypeScript', 'Storybook', 'Cypress'],
      category: 'frontend',
      featured: false,
      startDate: new Date('2023-11-05'),
      github: 'https://github.com/user/component-library',
    },
    {
      id: '6',
      title: 'Optimización de Base de Datos',
      description: 'Mejora de rendimiento en queries complejos y indexación estratégica.',
      url: 'https://example.com/db-optimization',
      technologies: ['PostgreSQL', 'SQL', 'Redis', 'DBeaver'],
      category: 'backend',
      featured: false,
      startDate: new Date('2024-01-30'),
      github: 'https://github.com/user/db-optimization',
    },
  ]);

  private skills = signal<Skill[]>([
    // Frontend
    { name: 'Angular', category: 'frontend', level: 'expert', percentage: 95, icon: '⚡' },
    { name: 'TypeScript', category: 'frontend', level: 'expert', percentage: 90, icon: '🔷' },
    { name: 'Tailwind CSS', category: 'frontend', level: 'advanced', percentage: 85, icon: '🎨' },
    { name: 'RxJS', category: 'frontend', level: 'advanced', percentage: 88, icon: '🌊' },

    // Backend
    { name: 'Node.js', category: 'backend', level: 'expert', percentage: 92, icon: '🟢' },
    { name: 'Express', category: 'backend', level: 'advanced', percentage: 87, icon: '⚙️' },
    { name: 'PostgreSQL', category: 'backend', level: 'advanced', percentage: 85, icon: '🗄️' },
    { name: 'MongoDB', category: 'backend', level: 'intermediate', percentage: 75, icon: '📊' },

    // Cloud
    { name: 'AWS', category: 'cloud', level: 'advanced', percentage: 88, icon: '☁️' },
    { name: 'Azure', category: 'cloud', level: 'intermediate', percentage: 70, icon: '☁️' },
    { name: 'Docker', category: 'cloud', level: 'advanced', percentage: 86, icon: '🐳' },
    { name: 'Kubernetes', category: 'cloud', level: 'intermediate', percentage: 72, icon: '⚓' },

    // DevOps
    { name: 'GitHub Actions', category: 'devops', level: 'advanced', percentage: 85, icon: '🤖' },
    { name: 'Jenkins', category: 'devops', level: 'intermediate', percentage: 75, icon: '🔧' },
    { name: 'Terraform', category: 'devops', level: 'advanced', percentage: 83, icon: '🏗️' },
    { name: 'Linux', category: 'devops', level: 'advanced', percentage: 84, icon: '🐧' },

    // Tools
    { name: 'Git', category: 'tools', level: 'expert', percentage: 94, icon: '📝' },
    { name: 'VS Code', category: 'tools', level: 'expert', percentage: 96, icon: '💻' },
    { name: 'Figma', category: 'tools', level: 'intermediate', percentage: 72, icon: '🎯' },
    { name: 'Jira', category: 'tools', level: 'advanced', percentage: 82, icon: '📋' },
  ]);

  private experiences = signal<Experience[]>([
    {
      title: 'Junior Systems Engineer',
      company: 'CAM (Alcaldía de Santander de Quilichao)',
      location: 'Presencial',
      startDate: new Date('2021-08-04'),
      endDate: new Date('2022-01-04'),
      description: 'Arquitecto, desarrollador, documentación de soluciones y técnico. Diseñé e implementé infraestructura escalable para soportar mas de 300 usuarios concurrentes.',
      technologies: ['Ashure', 'Html5, CSS, JavaScript', 'Node.js'],
    },
    {
      title: 'Junior Developer',
      company: 'Suncolombia S.A.S',
      location: 'Bogotá, Colombia (Remoto)',
      startDate: new Date('2024-05-20'),
      endDate: new Date('2024-05-31'),
      description: 'Colaboré en el desarrollo de plataformas web complejas con Angular y Node.js, y una aplicacion movil en Ionic. Implementé mejoras de rendimiento que redujeron loading time.',
      technologies: ['Angular', 'Node.js', 'MySQL', 'Bootstrap CSS', 'TypeScript', 'Ionic'],
    },
  ]);

  private socialLinks = signal<SocialLink[]>([
    { name: 'GitHub', url: 'https://github.com/JhanCarlosMM', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jhancarlosmancillamena/', icon: 'linkedin' },
    { name: 'Email', url: 'jhancarlosmena@gmail.com', icon: 'mail' },
  ]);

  getProjects() {
    return this.projects;
  }

  getSkills() {
    return this.skills;
  }

  getExperiences() {
    return this.experiences;
  }

  getSocialLinks() {
    return this.socialLinks;
  }

  getProjectsByCategory(category: string) {
    return this.projects()
      .filter(p => p.category === category)
      .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }
}
