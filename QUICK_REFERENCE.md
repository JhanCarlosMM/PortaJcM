# 📖 Referencia Rápida - Comandos y Funciones

## 🚀 Comandos Principales

```bash
# Desarrollo
npm start                       # Inicia servidor en localhost:4200
npm start -- --port 4300       # Puerto personalizado

# Compilación
npm run build                   # Build producción
npm run build -- --watch       # Watch mode

# Testing
npm test                        # Ejecutar tests
npm test -- --watch           # Watch mode
npm test -- --coverage        # Cobertura

# Linting
ng lint                         # Verificar estilos

# Análisis
npm run analyze                 # Analizar bundle size (si está configurado)

# Limpieza
ng cache clean                  # Limpiar cache Angular
rm -rf .angular/cache          # Forzar limpieza de cache
npm cache clean --force        # Limpiar npm cache

# Git
git add .
git commit -m "Descripción"
git push origin main
```

---

## 🎨 Clases CSS Útiles

### Glassmorphism
```html
<div class="glass">                    <!-- Base glassmorphism -->
<div class="glass-hover">              <!-- Con efecto hover -->
<div class="container-glass rounded-xl p-6">  <!-- Contenedor -->
```

### Botones
```html
<button class="btn-primary">           <!-- Botón principal (Cyan) -->
<button class="btn-secondary">         <!-- Botón secundario (Glass) -->
```

### Texto
```html
<h1 class="heading-tech">              <!-- Título grande -->
<h2 class="section-title">             <!-- Título de sección -->
<div class="terminal-text">            <!-- Efecto terminal -->
```

### Efectos Neón
```html
<div class="glow-cyan">                <!-- Sombra Cyan -->
<div class="glow-emerald">             <!-- Sombra Emerald -->
<div class="glow-purple">              <!-- Sombra Purple -->
```

### Animaciones
```html
<div class="animate-pulse-neon">       <!-- Pulse neón -->
<div class="animate-glow">             <!-- Glow animation -->
```

---

## 🔌 Angular Signals

### Crear Signal
```typescript
import { signal } from '@angular/core';

count = signal(0);
items = signal<Item[]>([]);
```

### Actualizar Signal
```typescript
this.count.set(10);                    // Reemplazar
this.count.update(v => v + 1);         // Actualizar
```

### Computed Property
```typescript
import { computed } from '@angular/core';

total = computed(() => {
  return this.items().reduce((sum, item) => sum + item.price, 0);
});
```

### En Template
```html
<div>{{ count() }}</div>
@for (item of items(); track item.id) {
  <p>{{ item.name }}</p>
}
```

---

## 🔄 Control Flow

### @if
```html
@if (isLoading()) {
  <div>Cargando...</div>
} @else if (error()) {
  <div>Error: {{ error() }}</div>
} @else {
  <div>Contenido</div>
}
```

### @for
```html
@for (item of items(); track item.id) {
  <div>{{ item.name }}</div>
}
```

### @switch
```html
@switch(status()) {
  @case('loading') { Cargando... }
  @case('success') { ✓ Éxito }
  @case('error') { ✗ Error }
  @default { Desconocido }
}
```

---

## 📝 Reactive Forms

### Crear Formulario
```typescript
import { FormBuilder, Validators } from '@angular/forms';

export class MyComponent {
  form: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
}
```

### En Template
```html
<form [formGroup]="form" (ngSubmit)="submit()">
  <input formControlName="name" />
  
  @if (form.get('name')?.hasError('required')) {
    <p>Campo requerido</p>
  }
  
  <button type="submit" [disabled]="form.invalid">Enviar</button>
</form>
```

### Validación Personalizada
```typescript
export function minWordsValidator(min: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const words = control.value?.split(' ').length || 0;
    return words >= min ? null : { minWords: { required: min, actual: words } };
  };
}
```

---

## 🌐 HttpClient

### GET
```typescript
this.http.get<Data>('/api/data').subscribe(data => {
  console.log(data);
});
```

### POST
```typescript
this.http.post<Response>('/api/create', { name: 'test' }).subscribe(res => {
  console.log(res);
});
```

### Con RxJS
```typescript
import { map, catchError } from 'rxjs/operators';

this.http.get<any[]>('/api/items').pipe(
  map(items => items.filter(i => i.active)),
  catchError(err => {
    console.error(err);
    return of([]);
  })
).subscribe(filtered => {
  console.log(filtered);
});
```

---

## 🎯 Utilidades Disponibles

### Formatear Fecha
```typescript
import { formatDate } from '@angular/app/utils/common.utils';

const formatted = formatDate(new Date(), 'es-ES');
// Output: "11 abr 2026"
```

### Calcular Años de Experiencia
```typescript
import { getYearsOfExperience } from '@angular/app/utils/common.utils';

const years = getYearsOfExperience(new Date('2019-01-15'));
// Output: 7
```

### Validar Email
```typescript
import { isValidEmail } from '@angular/app/utils/common.utils';

if (isValidEmail('test@example.com')) {
  // Válido
}
```

### Copiar al Portapapeles
```typescript
import { copyToClipboard } from '@angular/app/utils/common.utils';

await copyToClipboard('texto a copiar');
```

### Smooth Scroll
```typescript
import { smoothScroll } from '@angular/app/utils/common.utils';

smoothScroll('projects');  // Scroll a elemento con id "projects"
```

---

## 🎨 Paleta de Colores en Variables

```css
/* En styles.css o componentes */
var(--neon-cyan)     /* #00d9ff */
var(--neon-emerald)  /* #00ff88 */
var(--neon-purple)   /* #b100ff */
var(--neon-pink)     /* #ff006e */
var(--cyber-dark)    /* #0a0a0a */
var(--cyber-gray)    /* #1a1a2e */
var(--cyber-light)   /* #2d2d44 */
```

---

## 📦 Métodos de Servicio

### PortfolioService
```typescript
import { PortfolioService } from '@angular/app/services/portfolio.service';

constructor(private portfolioService: PortfolioService) {
  // Signals
  const projects = this.portfolioService.getProjects();
  const skills = this.portfolioService.getSkills();
  const experiences = this.portfolioService.getExperiences();
  const socialLinks = this.portfolioService.getSocialLinks();
  
  // Métodos
  const filtered = this.portfolioService.getProjectsByCategory('frontend');
}
```

### GitHubService
```typescript
import { GitHubService } from '@angular/app/services/github.service';

constructor(private githubService: GitHubService) {
  this.githubService.getUserRepositories().subscribe(repos => {
    console.log(repos);
  });
}
```

---

## 🔍 Debug Tips

### Ver valores en template
```html
<!-- Debug binding -->
<div>Debug: {{ variable | json }}</div>

<!-- Ver cambios de signal -->
<div>{{ (mySignal | json) }}</div>
```

### Console logging
```typescript
import { isDevMode } from '@angular/core';

if (isDevMode()) {
  console.log('Debug info');
}
```

### Angular DevTools
1. Instalar extensión Chrome "Angular DevTools"
2. Abierto F12 → Tab "Angular"
3. Ver componentes y servicios en tiempo real

---

## 🚀 Deployment Rápido

### Vercel
```bash
npm i -g vercel
vercel
# Sigue los pasos interactivos
```

### Netlify
```bash
npm i -g netlify-cli
netlify init
netlify deploy --prod
```

### Build Production
```bash
npm run build
# Carpeta dist/ lista para subir
```

---

## 🐛 Errores Comunes

| Error | Solución |
|-------|----------|
| "Cannot find module '@angular/...'" | `npm install` |
| "Property does not exist on type '{}'." | Verificar tipos en interfaces |
| "ngOnInit not called" | Asegúrate que es un componente (selector) |
| "Circular dependency" | Reorganizar imports |
| "Form not updating" | Usar `markAsTouched()` o validar |

---

## 💾 Git Workflow

```bash
# Crear rama
git checkout -b feature/nueva-feature

# Cambios
git add .
git commit -m "feat: descripción del cambio"

# Actualizar repo
git pull origin main
git push origin feature/nueva-feature

# Crear Pull Request en GitHub UI

# Después de merge
git checkout main
git pull origin main
git branch -d feature/nueva-feature
```

---

## 📊 Estructura de Datos

### Project
```typescript
{
  id: '1',
  title: 'Mi Proyecto',
  description: 'Descripción...',
  url: 'https://ejemplo.com',
  technologies: ['Angular', 'TypeScript'],
  category: 'fullstack',
  featured: true,
  startDate: new Date(),
  github: 'https://github.com/...'
}
```

### Skill
```typescript
{
  name: 'Angular',
  category: 'frontend',
  level: 'expert',
  percentage: 95,
  icon: '⚡'
}
```

### Experience
```typescript
{
  title: 'Senior Developer',
  company: 'Tech Corp',
  location: 'Remote',
  startDate: new Date(),
  description: 'Descripción de tareas',
  technologies: ['Angular', 'Node.js']
}
```

---

## ⚙️ Variables de Entorno

```bash
# .env (NO subir a Git)
GITHUB_USERNAME=tu-username
SITE_URL=https://tudominio.com
PRODUCTION_MODE=false
```

```bash
# .env.example (Sí subir a Git - plantilla)
GITHUB_USERNAME=your-username
SITE_URL=https://example.com
PRODUCTION_MODE=false
```

---

## 🔐 Convenciones de Código

### Naming
```typescript
// Componentes
MyComponentComponent → my-component.component.ts

// Servicios
MyService → my.service.ts

// Interfaces
IMyInterface → my.interface.ts

// Variables
camelCase → myVariable

// Constantes
UPPER_SNAKE_CASE → MY_CONSTANT
```

### Estructura
```typescript
// Orden en componentes
@Input() → @Output() → Signals → Constructor → Lifecycle hooks → Methods
```

---

## 📱 Breakpoints Tailwind

```css
sm   640px
md   768px
lg   1024px
xl   1280px
2xl  1536px
```

Uso:
```html
<div class="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

---

## 🎯 Performance Tips

```typescript
// 1. Use OnPush change detection
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})

// 2. Unsubscribe from observables
subscription?.unsubscribe();

// 3. Use trackBy en *ngFor
<div *ngFor="let item of items; trackBy: trackByFn">

// 4. Lazy load images
<img loading="lazy" src="..." />

// 5. Usar Signals en lugar de RxJS cuando sea posible
```

---

**Referencia rápida actualizada al 11 de Abril de 2026** ✨
