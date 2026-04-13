# 📦 Documentación de Componentes

## Componentes Disponibles

### 1. NavbarComponent (`components/navbar/navbar.component.ts`)

Barra de navegación responsiva con menú mobile y efectos glassmorphism.

**Props:**
- (Ninguno - utiliza signals internos)

**Signals:**
- `mobileOpen`: Boolean para controlar menú mobile
- `navLinks`: Array de links de navegación

**Ejemplo de uso:**
```html
<app-navbar></app-navbar>
```

**Características:**
- Navegación fija (sticky)
- Menú responsive para mobile
- Animación de hamburguesa
- Links suave a secciones

---

### 2. HeroComponent (`features/hero/hero.component.ts`)

Sección hero con terminal interactiva simulada y botones CTA.

**Props:**
- (Ninguno)

**Signals:**
- `terminalCursor`: Cursor parpadeante de terminal

**Ejemplo de uso:**
```html
<app-hero></app-hero>
```

**Características:**
- Terminal interactiva con efecto typewriter
- Saludo impactante con gradiente neón
- Botones CTA con efectos hover
- Fondos animados

---

### 3. ExperienceComponent (`features/experience/experience.component.ts`)

Timeline de experiencia profesional.

**Props:**
- (Ninguno)

**Signals:**
- `experiences`: Array de experiencias

**Ejemplo de uso:**
```html
<app-experience></app-experience>
```

**Características:**
- Timeline vertical responsivo
- Tarjetas con glassmorphism
- Información de educación y certificaciones
- Fechas formateadas automáticamente

---

### 4. ProjectsComponent (`features/projects/projects.component.ts`)

Grid de proyectos con filtros dinámicos.

**Props:**
- (Ninguno)

**Signals:**
- `projects`: Array de proyectos
- `selectedFilter`: Filtro actual
- `filters`: Opciones de filtros

**Computed:**
- `filteredProjects`: Proyectos filtrados y ordenados

**Ejemplo de uso:**
```html
<app-projects></app-projects>
```

**Características:**
- Grid responsivo (1-3 columnas)
- Filtros dinámicos por categoría
- Badges de tecnologías
- Links a GitHub y proyecto

---

### 5. SkillsComponent (`features/skills/skills.component.ts`)

Visualización de habilidades técnicas con barras de progreso.

**Props:**
- (Ninguno)

**Signals:**
- `skills`: Array de habilidades
- `selectedCategory`: Categoría activa

**Computed:**
- `filteredSkills`: Habilidades filtradas
- `summaryStats`: Estadísticas de resumen

**Ejemplo de uso:**
```html
<app-skills></app-skills>
```

**Características:**
- Tabs por categoría
- Barras de progreso animadas
- Niveles de experiencia
- Estadísticas resumen

---

### 6. ContactComponent (`features/contact/contact.component.ts`)

Formulario de contacto con validación y links sociales.

**Props:**
- (Ninguno)

**FormGroup:**
- `name`: string (requerido, min 3)
- `email`: string (requerido, email)
- `subject`: string (requerido, min 5)
- `message`: string (requerido, min 10)

**Signals:**
- `isSubmitting`: Boolean para estado de envío
- `submitSuccess`: Mensaje de éxito
- `socialLinks`: Links sociales

**Ejemplo de uso:**
```html
<app-contact></app-contact>
```

**Características:**
- Validación reactiva
- Mensajes de error personalizados
- Links a redes sociales
- Respuesta simulada (integra con backend)

---

### 7. TechBadgeComponent (`components/tech-badge/tech-badge.component.ts`)

Badge de tecnología reutilizable.

**Props:**
- `label`: string - Texto del badge
- `variant`: 'primary' | 'success' | 'warning' | 'danger' | 'default' - Color
- `customClass`: string - Clases CSS adicionales

**Ejemplo de uso:**
```html
<app-tech-badge 
  label="Angular" 
  variant="primary"
></app-tech-badge>
```

---

### 8. SectionContainerComponent (`components/section-container/section-container.component.ts`)

Contenedor reutilizable para secciones.

**Props:**
- `sectionId`: string - ID de la sección (para links)
- `containerClass`: string - Clases CSS personalizadas
- `variant`: 'dark' | 'gradient' | 'glass' - Estilo

**Ejemplo de uso:**
```html
<app-section-container 
  sectionId="projects" 
  variant="gradient"
>
  <!-- Content -->
</app-section-container>
```

---

## Patrones de Uso

### Signals en componentes
```typescript
import { Component, signal, computed } from '@angular/core';

export class MyComponent {
  items = signal([]);
  filter = signal('all');
  
  filteredItems = computed(() => {
    return this.items().filter(item => item.category === this.filter());
  });
}
```

### Control Flow
```html
<!-- @if -->
@if (isLoading()) {
  <div>Cargando...</div>
}

<!-- @for -->
@for (item of items(); track item.id) {
  <div>{{ item.name }}</div>
}

<!-- @switch -->
@switch (status()) {
  @case('success') { ✓ }
  @case('error') { ✗ }
}
```

### Reactive Forms
```typescript
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

export class MyComponent {
  form: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }
}
```

---

## Personalización de Estilos

### Usar clases globales
```html
<div class="glass rounded-lg p-6">
  <!-- Content -->
</div>
```

### Clases disponibles
- `.glass` - Efecto glassmorphism
- `.glass-hover` - Glassmorphism con hover
- `.glow-cyan`, `.glow-emerald`, `.glow-purple` - Sombras neón
- `.terminal-text` - Efecto terminal
- `.btn-primary`, `.btn-secondary` - Botones
- `.heading-tech` - Títulos grandes
- `.section-title` - Títulos de sección

---

## Integración de Servicios

### PortfolioService
```typescript
import { PortfolioService } from './services/portfolio.service';

export class MyComponent {
  constructor(private portfolioService: PortfolioService) {
    this.projects = portfolioService.getProjects();
    this.skills = portfolioService.getSkills();
  }
}
```

### GitHubService
```typescript
import { GitHubService } from './services/github.service';

export class MyComponent {
  constructor(private githubService: GitHubService) {
    this.githubService.getUserRepositories().subscribe(repos => {
      console.log(repos);
    });
  }
}
```

---

## Testing

### Estructura de archivos de test
```
src/app/components/navbar/navbar.component.spec.ts
src/app/features/projects/projects.component.spec.ts
```

### Ejecutar tests
```bash
npm test
```

---

## Mejores Prácticas

1. **Siempre usar `track` en `@for`**
```html
@for (item of items(); track item.id) {
  <!-- Content -->
}
```

2. **Usar `computed` para datos derivados**
```typescript
filteredItems = computed(() => {
  return this.items().filter(condition);
});
```

3. **Mantener componentes small y enfocados**
- Máximo 200 líneas por componente
- Una responsabilidad por componente

4. **Usar Reactive Forms para validación**
```typescript
this.form = this.fb.group({
  field: ['', Validators.required]
});
```

5. **Aprovechar Angular Signals**
- Mejor performance que RxJS
- Más fácil de leer y mantener

---

## Troubleshooting

### "Cannot find module" error
```bash
npm install
# o
ng cache clean
```

### Estilos no aplican
- Verifica que `styles.css` tenga directivas `@tailwind`
- Reinicia servidor: `npm start`

### TypeScript errors
```bash
ng build
# Verifica tsconfig.json
```

---

## Recursos Adicionales

- [Angular Docs](https://angular.io)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

**¡Disfruta desarrollando tu portafolio! 🚀**
