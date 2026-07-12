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
      url: '',
      image: 'https://via.placeholder.com/400x250?text=Cloud+Mgmt',
      technologies: ['Angular', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
      category: 'fullstack',
      featured: true,
      startDate: new Date('2024-01-15'),
      github: '',
    },
    {
      id: '2',
      title: 'API REST Climatológica',
      description: 'App que muestra el clima con mi ubicación, desde una API.',
      url: 'https://example.com/microservices',
      technologies: ['Node.js', 'Kafka', 'MongoDB', 'Docker', 'Kubernetes'],
      category: 'backend',
      featured: true,
      startDate: new Date('2023-08-10'),
      github: 'https://github.com/JhanCarlosMM/Clima-App.git',
    },
    {
      id: '3',
      title: 'Dashboard Analítico',
      description: 'Visualización de datos en tiempo real con gráficos interactivos y filtros dinámicos.',
      url: '',
      technologies: ['Angular', 'TypeScript', 'Html5', 'Bootstrap'],
      category: 'frontend',
      featured: true,
      startDate: new Date('2024-03-01'),
      github: '',
    },
    {
      id: '4',
      title: 'App',
      description: 'Aplicación web interactiva.',
      url: 'https://example.com/iac',
      technologies: ['JavaScript', 'css3', 'Html5'],
      category: 'devops',
      featured: false,
      startDate: new Date('2024-02-20'),
      github: 'https://github.com/JhanCarlosMM/App-JavaScript.git',
    },
    {
      id: '5',
      title: 'Librería de Componentes',
      description: 'Componentes reutilizables con TypeScript, Storybook y pruebas E2E.',
      url: '',
      technologies: ['Angular', 'TypeScript', 'Storybook', 'Cypress'],
      category: 'frontend',
      featured: false,
      startDate: new Date('2023-11-05'),
      github: '',
    },
    {
      id: '6',
      title: 'Optimización de Base de Datos',
      description: 'Mejora de rendimiento en queries complejos y indexación estratégica.',
      url: '',
      technologies: ['PostgreSQL', 'SQL', 'Redis', 'DBeaver'],
      category: 'backend',
      featured: false,
      startDate: new Date('2024-01-30'),
      github: '',
    },
  ]);

  private skills = signal<Skill[]>([
    // Frontend
    { name: 'Angular', category: 'frontend', level: 'expert', percentage: 75, icon: '⚡' },
    { name: 'TypeScript', category: 'frontend', level: 'expert', percentage: 40, icon: '🔷' },
    { name: 'JavaScript', category: 'frontend', level: 'expert', percentage: 60, icon: '🔷' },
    { name: 'Bootstrap', category: 'frontend', level: 'advanced', percentage: 55, icon: '🎨' },
    { name: 'HTML5-CSS3', category: 'frontend', level: 'advanced', percentage: 95, icon: '🌊' },

    // Backend
    { name: 'Node.js', category: 'backend', level: 'expert', percentage: 30, icon: '🟢' },
    { name: 'MySQL', category: 'backend', level: 'advanced', percentage: 60, icon: '⚙️' },
    { name: 'SQL', category: 'backend', level: 'advanced', percentage: 35, icon: '🗄️' },
    

    // Cloud
    { name: 'Azure', category: 'cloud', level: 'intermediate', percentage: 20, icon: '☁️' },

    // DevOps
    { name: 'GitHub Actions', category: 'devops', level: 'advanced', percentage: 35, icon: '🤖' },
    { name: 'Linux', category: 'devops', level: 'advanced', percentage: 40, icon: '🐧' },

    // Tools
    { name: 'Git-GitHub', category: 'tools', level: 'expert', percentage: 95, icon: '📝' },
    { name: 'VS Code', category: 'tools', level: 'expert', percentage: 90, icon: '💻' },
    { name: 'Figma', category: 'tools', level: 'intermediate', percentage: 60, icon: '🎯' },
    { name: 'Postman', category: 'tools', level: 'advanced', percentage: 50, icon: '📋' },
    { name: 'Postgresql', category: 'tools', level: 'advanced', percentage: 50, icon: '📋' },
    { name: 'MySQL Workbench', category: 'tools', level: 'advanced', percentage: 85, icon: '📋' },
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
      title: 'Desarrollador Junior',
      company: 'Suncolombia S.A.S',
      location: 'Bogotá, Colombia (Remoto)',
      startDate: new Date('2024-05-20'),
      endDate: new Date('2026-06-07'),
      description: 'Colaboré en el desarrollo de plataformas web complejas con Angular y Node.js, y una aplicacion movil en Ionic. Implementé mejoras de rendimiento que redujeron loading time.',
      technologies: ['Angular', 'Node.js', 'MySQL', 'Bootstrap CSS', 'TypeScript', 'Ionic'],
    },
    {
      title: 'Ingeniero de Desarrollo',
      company: 'Finesa S.A',
      location: 'Cali, Colombia (Remoto)',
      startDate: new Date('202-06-16'),
      endDate: new Date('0000-00-00'),
      description: 'Apoyo en el equipo de desarrollo Frontend.',
      technologies: ['Angular', 'Node.js', 'MySQL', 'Bootstrap CSS', 'TypeScript'],
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
