export const PORTFOLIO_INFO = {
  name: 'Jhan Carlos Mancilla',
  title: 'Systems Engineer',
  subtitle: 'Edition Full | Frontend Developer',
  description: 'Especializado en diseño de arquitecturas escalables, cloud computing y soluciones frontend.',
  email: 'jhancarlosmena@gmail.com',
  phone: '+57 3117590093',
  location: 'Remote',
  yearsOfExperience: 3,
};

// Links sociales
export const SOCIAL_LINKS = {
  github: 'https://github.com/JhanCarlosMM',
  linkedin: 'https://www.linkedin.com/in/jhancarlosmancillamena/',
  email: 'jhancarlosmena@gmail.com',
};

// Stack tecnológico
export const TECH_STACK = {
  frontend: ['Html5', 'CSS3', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Bootstrap'],
  backend: ['Node.js', 'SQL','MySQL'],
  cloud: ['Azure',],
  devops: ['GitHub Actions', 'Linux'],
  tools: ['Git-GitHub', 'VS Code', 'Figma', 'Postman', 'Pstgresql', 'MySQL Workbench'],
};

// Configuración de animaciones
export const ANIMATION_CONFIG = {
  duration: {
    fast: 200,
    normal: 300,
    slow: 500,
  },
  easing: {
    linear: 'linear',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
};

// Breakpoints responsive
export const BREAKPOINTS = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

// Colores del tema
export const THEME_COLORS = {
  primary: '#00d9ff',      
  secondary: '#00ff88',    
  accent: '#b100ff',       
  danger: '#ff006e',       
  background: '#0a0a0a',   
  surface: '#1a1a2e',      
  surfaceLight: '#2d2d44',
};

// URLs de APIs
export const API_URLs = {
  github: 'https://api.github.com',
  
};

// Configuración de envío de formulario de contacto (Formspree / Getform)
export const CONTACT_FORM = {
  // Reemplaza por tu endpoint de Formspree o Getform, por ejemplo: 'https://formspree.io/f/xxxxxx'
  endpoint: 'https://formspree.io/f/xwvgegrp',
};

// Mensajes de validación
export const VALIDATION_MESSAGES = {
  required: 'Este campo es requerido',
  email: 'Por favor ingresa un email válido',
  minLength: (length: number) => `Mínimo ${length} caracteres`,
  maxLength: (length: number) => `Máximo ${length} caracteres`,
  pattern: 'Formato inválido',
  passwordMismatch: 'Las contraseñas no coinciden',
};

// Mensajes de éxito/error
export const FEEDBACK_MESSAGES = {
  success: '¡Operación exitosa!',
  error: 'Algo salió mal. Intenta de nuevo.',
  loading: 'Cargando...',
  saved: 'Guardado correctamente',
  copied: 'Copiado al portapapeles',
  deleted: 'Eliminado correctamente',
};

// Configuración de SEO
export const SEO_CONFIG = {
  siteName: 'Jhan Carlos Mancilla - Portfolio',
  siteUrl: 'https://jhancarlosmm.dev',
  siteDescription: 'Portafolio profesional de Jhan Carlos Mancilla - Ingeniero de Sistemas, Diseño web y Desarrollador Frontend.',
  socialImage: 'https://jhancarlosmm.dev/og-image.png',
};

// Categorías de proyectos
export const PROJECT_CATEGORIES = [
  { label: 'Todos', value: 'all' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'Cloud', value: 'cloud' },
  { label: 'DevOps', value: 'devops' },
] as const;

// Niveles de habilidad
export const SKILL_LEVELS = [
  { label: 'EXPERT', value: 'expert', color: 'text-neon-emerald' },
  { label: 'ADVANCED', value: 'advanced', color: 'text-neon-cyan' },
  { label: 'INTERMEDIATE', value: 'intermediate', color: 'text-yellow-400' },
  { label: 'BEGINNER', value: 'beginner', color: 'text-gray-400' },
] as const;

// Versión de la aplicación
export const APP_VERSION = '1.1.0';

// Cambio de versión
export const LAST_UPDATE = new Date('2026-07-12');
