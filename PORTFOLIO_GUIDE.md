# 🚀 Portafolio Profesional - Angular v21

Portafolio web moderno y profesional para un Ingeniero de Sistemas, diseñado con **Dark Tech Minimalist** estética y acentos en colores neón (Cyan y Esmeralda).

## 📋 Características

- ✨ Diseño moderno con **Glassmorphism** y efectos neón
- 🎨 Tema oscuro profesional optimizado para ingenieros
- 📱 Completamente responsive (Mobile-first)
- ⚡ Performance optimizado con Angular v21 standalone components
- 🔄 Control Flow moderno (`@if`, `@for`, `@switch`)
- 📊 Signals para reactividad eficiente
- 🎯 Filtros dinámicos en proyectos
- 📝 Formulario de contacto con validación
- 🌙 Dark mode nativo del sistema
- ♿ Accesibilidad (A11y) considerada
- 🔗 Integración lista para GitHub API

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   └── navbar/                    # Barra de navegación responsiva
│   │       └── navbar.component.ts
│   ├── features/
│   │   ├── hero/                      # Sección principal con terminal
│   │   │   └── hero.component.ts
│   │   ├── experience/                # Timeline de experiencia
│   │   │   └── experience.component.ts
│   │   ├── projects/                  # Grid de proyectos con filtros
│   │   │   └── projects.component.ts
│   │   ├── skills/                    # Barras de progreso de skills
│   │   │   └── skills.component.ts
│   │   └── contact/                   # Formulario de contacto
│   │       └── contact.component.ts
│   ├── interfaces/
│   │   └── portfolio.interface.ts     # Tipos y interfaces
│   ├── services/
│   │   ├── portfolio.service.ts       # Datos del portafolio
│   │   └── github.service.ts          # Integración GitHub API
│   ├── app.ts                         # Componente raíz
│   ├── app.config.ts                  # Configuración
│   └── app.routes.ts                  # Rutas
├── assets/                            # Imágenes y recursos
├── styles.css                         # Estilos globales de Tailwind
├── main.ts                            # Entry point
└── index.html                         # HTML principal

Configuración:
├── tailwind.config.js                 # Configuración de Tailwind
├── postcss.config.js                  # Configuración PostCSS
├── tsconfig.json                      # TypeScript config
├── angular.json                       # Angular CLI config
└── package.json                       # Dependencias
```

## 🛠️ Instalación

### Prerequisitos
- Node.js 18+ 
- npm 11+
- Angular CLI 21+

### Pasos

1. **Instalar dependencias**
```bash
npm install
```

2. **Instalar Tailwind CSS y dependencias dev**
```bash
npm install tailwindcss autoprefixer postcss @tailwindcss/forms
```

3. **Iniciar servidor de desarrollo**
```bash
npm start
```

4. **Navegar a**
```
http://localhost:4200
```

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Cyber Dark | `#0a0a0a` | Background principal |
| Cyber Gray | `#1a1a2e` | Componentes secundarios |
| Cyber Light | `#2d2d44` | Borders y acentos oscuros |
| Neon Cyan | `#00d9ff` | Primary accent |
| Neon Emerald | `#00ff88` | Success & highlights |
| Neon Purple | `#b100ff` | Secondary accent |
| Neon Pink | `#ff006e` | Tertiary accent |

## 📦 Componentes Principales

### 1. **Navbar** (`navbar.component.ts`)
- Navegación fija con glassmorphism
- Menú responsive para mobile
- Links suave a cada sección
- Logo animado con gradiente

**Uso:**
```html
<app-navbar></app-navbar>
```

### 2. **Hero** (`hero.component.ts`)
- Sección impactante con saludo
- Terminal interactiva simulada
- Botones CTA (Call-to-Action)
- Efectos de fondo animados

**Características:**
- Animación typewriter en terminal
- Cursor parpadeante
- Gradientes neón en titulo
- Botones con efectos hover

### 3. **Experience** (`experience.component.ts`)
- Timeline vertical de experiencia
- Tarjetas con glassmorphism
- Información de educación y certificaciones
- Responsive timeline

### 4. **Projects** (`projects.component.ts`)
- Grid responsivo de proyectos (1-3 columnas)
- Filtros dinámicos por categoría usando Signals
- Badges de tecnologías
- Links a GitHub y proyecto

**Categorías:**
- Frontend
- Backend
- Full Stack
- Cloud
- DevOps

**Uso de Signals:**
```typescript
selectedFilter = signal<ProjectCategory>('all');
filteredProjects = computed(() => {
  // Filtering logic
});
```

### 5. **Skills** (`skills.component.ts`)
- Barras de progreso animadas
- Tabs para categorías
- Niveles: Expert, Advanced, Intermediate, Beginner
- Estadísticas resumen

### 6. **Contact** (`contact.component.ts`)
- Formulario validado con Reactive Forms
- Campos: Nombre, Email, Asunto, Mensaje
- Links a redes sociales
- Mensajes de éxito/error

**Validación:**
- Email format
- Longitud mínima de campos
- Requeridos

## 🔧 Configuración de Tailwind CSS

El archivo `tailwind.config.js` incluye:
- Colores personalizados (tema neón)
- Animaciones custom (pulse-neon, glow, typewriter)
- Efectos de glassmorphism
- Sombras neón
- Configuración dark mode

**Clases útiles definidas:**
```css
.glass              /* Glassmorphism effect */
.glass-hover        /* Hover con glassmorphism */
.glow-cyan          /* Sombra neón cyan */
.glow-emerald       /* Sombra neón emerald */
.glow-purple        /* Sombra neón purple */
.terminal-text      /* Efecto terminal */
.btn-primary        /* Botón primario */
.btn-secondary      /* Botón secundario */
```

## 🔌 Servicios

### PortfolioService
Proporciona datos del portafolio usando Angular Signals:
```typescript
getProjects()       // Retorna signal de proyectos
getSkills()         // Retorna signal de habilidades
getExperiences()    // Retorna signal de experiencias
getSocialLinks()    // Retorna signal de links sociales
```

### GitHubService
Integración con GitHub API (modo fallback con mock data):
```typescript
getUserRepositories()  // Fetch repos del usuario
```

## 📝 Interfaces

```typescript
// Project
interface Project {
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

// Skill
interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'cloud' | 'devops' | 'tools';
  level: 'expert' | 'advanced' | 'intermediate' | 'beginner';
  percentage: number;
  icon?: string;
}

// Experience
interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  technologies: string[];
}

// ContactForm
interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// SocialLink
interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
```

## 🚀 Features Avanzados

### 1. Control Flow Moderno
```typescript
// @if
@if (mobileOpen()) {
  <div>...</div>
}

// @for
@for (project of filteredProjects(); track project.id) {
  <app-project-card [project]="project"></app-project-card>
}

// @switch
@switch(project.category) {
  @case('frontend') { 🎨 }
  @case('backend') { ⚙️ }
}
```

### 2. Computed Properties
```typescript
filteredProjects = computed(() => {
  return this.projects()
    .filter(p => p.category === this.selectedFilter())
    .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
});
```

### 3. Glassmorphism Effect
```html
<div class="glass border-neon-cyan/30 rounded-lg">
  <!-- Content with blur effect -->
</div>
```

## 📱 Responsive Breakpoints

- **Mobile:** < 640px (SM)
- **Tablet:** 640px - 1024px (MD)
- **Desktop:** > 1024px (LG)

Todos los componentes son completamente responsive.

## ⚡ Performance Tips

1. **Lazy Loading:** Las imágenes se cargan bajo demanda
2. **Signals:** Reactividad granular sin RxJS (cuando es posible)
3. **Standalone Components:** Menos bundle size
4. **CSS Optimizado:** Tailwind purge innecesarios

## 🔄 Integración GitHub API

Para conectar tu GitHub real:

1. Abre `src/app/services/github.service.ts`
2. Cambia `username` por tu usuario de GitHub
3. Opta (opcional): Usa token para mayor rate limit

```typescript
private readonly username = 'tu-username-aqui';
```

## 🌐 SEO & SSR

Para habilitar SSR (Server-Side Rendering):

```bash
ng add @angular/ssr
ng build
```

Esto permite:
- Mejor indexación en Google
- Metadata dinámico
- Performance mejorado

## 🎯 Customización

### Cambiar Colores Neón
Edita `tailwind.config.js`:
```javascript
colors: {
  'neon-cyan': '#tu-color-aqui',
  'neon-emerald': '#tu-color-aqui',
  // ...
}
```

### Agregar Más Proyectos
Edita `src/app/services/portfolio.service.ts`:
```typescript
private projects = signal<Project[]>([
  // Agrega más proyectos aquí
]);
```

### Cambiar Fonts
Edita `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Tu-Font', 'system-ui', 'sans-serif'],
  mono: ['Tu-Font-Mono', 'monospace'],
}
```

## 📚 Recursos Útiles

- [Angular v21 Docs](https://angular.io)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [RxJS](https://rxjs.dev)

## 🤝 Contribuir

Para mejorar este portafolio:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo licencia MIT.

## 👨‍💼 Sobre el Autor

**Juan Carlos Méndez**
- Systems Engineer
- Cloud Architect
- Full Stack Developer

### Conecta conmigo:
- 🐙 [GitHub](https://github.com/username)
- 💼 [LinkedIn](https://linkedin.com/in/username)
- 🐦 [Twitter](https://twitter.com/username)
- ✉️ [Email](mailto:email@example.com)

---

**Hecho con ❤️ usando Angular v21 + Tailwind CSS**

### Versiones

- Angular: 21.2.0
- TypeScript: 5.9.2
- Tailwind CSS: 4.0.0-alpha.13
- Node: 18+

### Última Actualización
Abril 11, 2026

---

## 🐛 Troubleshooting

### Error: "Module not found: '@tailwindcss/forms'"
```bash
npm install @tailwindcss/forms
```

### Error: "CORS" al conectar GitHub API
- Usa un backend proxy
- O implementa GitHub Actions para cache
- O usa token de autenticación

### Performance lento en Mobile
- Verifica que Tailwind CSS esté purificado
- Comprime imágenes
- Habilita compresión gzip

### Estilos no aplican
- Limpia cache de Angular: `npm run clean` o `rm -rf .angular/cache`
- Reinicia servidor: `npm start`
- Verifica que `styles.css` tenga `@tailwind` directives

---

**¡Disfruta tu nuevo portafolio! 🚀**
