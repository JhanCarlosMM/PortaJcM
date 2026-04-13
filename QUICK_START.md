# ⚡ Quick Start - Portafolio Angular v21

## 🚀 Inicio Rápido en 5 Minutos

### Prerequisitos
- Node.js 18+
- npm 11+

### Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm start

# 3. Abrir navegador
# Navega a http://localhost:4200
```

¡Eso es! Tu portafolio está corriendo. 🎉

---

## 📝 Personalización

### Cambiar datos personales

**Archivo:** `src/app/constants/portfolio.constants.ts`

```typescript
export const PORTFOLIO_INFO = {
  name: 'TU NOMBRE',
  title: 'TU TÍTULO',
  email: 'tu-email@example.com',
  // ... etc
};
```

### Cambiar GitHub username

**Archivo:** `src/app/services/github.service.ts`

```typescript
private readonly username = 'tu-username-aqui';
```

### Agregar más proyectos

**Archivo:** `src/app/services/portfolio.service.ts`

```typescript
private projects = signal<Project[]>([
  {
    id: '1',
    title: 'Mi Proyecto',
    description: 'Descripción...',
    technologies: ['Angular', 'TypeScript'],
    // ... etc
  },
  // Agrega más aquí
]);
```

### Cambiar colores neón

**Archivo:** `tailwind.config.js`

```javascript
colors: {
  'neon-cyan': '#tu-color-aqui',
  'neon-emerald': '#tu-color-aqui',
  // ... etc
}
```

---

## 🔗 Cambiar links sociales

**Archivo:** `src/app/services/portfolio.service.ts`

```typescript
private socialLinks = signal<SocialLink[]>([
  { name: 'GitHub', url: 'https://github.com/tu-username', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/tu-username', icon: 'linkedin' },
  // ... etc
]);
```

---

## 📦 Scripts disponibles

```bash
# Desarrollo
npm start                 # Inicia servidor en localhost:4200

# Build
npm run build            # Compilar para producción

# Testing
npm test                 # Ejecutar pruebas con Vitest

# Análisis
npm run lint             # Verificar estilos
npm run analyze          # Analizar tamaño del bundle (si está configurado)
```

---

## 🎨 Componentes principales

1. **Navbar** - Navegación responsiva
2. **Hero** - Sección principal con terminal interactiva
3. **Experience** - Timeline de experiencia
4. **Projects** - Grid de proyectos con filtros
5. **Skills** - Habilidades técnicas con barras
6. **Contact** - Formulario de contacto

---

## 🌐 Despliegue

### Opción 1: Vercel (Recomendado)
```bash
npm i -g vercel
vercel
```

### Opción 2: Netlify
Conectar repositorio en netlify.com

### Opción 3: GitHub Pages
```bash
npm run build
# Subir a GitHub
```

Ver [DEPLOYMENT.md](DEPLOYMENT.md) para más opciones.

---

## 📚 Documentación Completa

- **PORTFOLIO_GUIDE.md** - Guía completa del proyecto
- **COMPONENTS_GUIDE.md** - Documentación de componentes
- **DEPLOYMENT.md** - Guías de despliegue

---

## 🐛 Solución de Problemas

### Error: "Module not found"
```bash
npm install
npm cache clean --force
rm -rf node_modules
npm install
```

### Estilos no se aplican
```bash
# Limpiar cache Angular
rm -rf .angular/cache
npm start
```

### Puerto 4200 en uso
```bash
npm start -- --port 4300
```

---

## 💡 Tips Útiles

1. **Usar DevTools de Angular** - Instala extensión de Chrome
2. **Shortcuts de VS Code:**
   - `Ctrl+Shift+B` - Build
   - `Ctrl+K Ctrl+C` - Comentar
3. **Actualizar dependencias:** `npm update`

---

## 🚀 Próximos pasos

1. ✅ Personalizar datos
2. ✅ Agregar más proyectos
3. ✅ Cambiar colores
4. ✅ Configurar dominio
5. ✅ Desplegar a producción

---

## 📞 Soporte

Si tienes problemas:

1. Revisa la documentación completa en `PORTFOLIO_GUIDE.md`
2. Chequea `COMPONENTS_GUIDE.md` para componentes específicos
3. Verifica logs del navegador (F12)
4. Ejecuta `npm run build` para verificar errores

---

**¡Estás listo para compartir tu portafolio con el mundo! 🌍✨**

Para más información, visita:
- [Angular Docs](https://angular.io)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
