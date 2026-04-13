# 🚀 Guía de Despliegue - Portafolio Angular v21

## Opciones de Despliegue

Este portafolio puede desplegarse en múltiples plataformas. Elige la que mejor se adapte a tus necesidades.

---

## 1. Vercel (Recomendado)

**Ventajas:**
- Hosting gratis con edge functions
- Despliegue automático desde Git
- CDN global
- SSL automático
- Excelente para SSR

**Pasos:**

1. Push código a GitHub
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Ir a [Vercel.com](https://vercel.com)
3. Conectar cuenta GitHub
4. Seleccionar repositorio
5. Configurar:
   - Build command: `npm run build`
   - Output directory: `dist/porta-jc-m/browser`
   - Install command: `npm install`

6. Deploy
```bash
# O usar CLI
npm i -g vercel
vercel
```

**Archivo vercel.json (opcional):**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist/porta-jc-m/browser",
  "env": {
    "GITHUB_USERNAME": "@github_username"
  }
}
```

---

## 2. Netlify

**Ventajas:**
- Hosting gratuito
- Despliegue automático
- Funciones serverless
- Formularios nativos

**Pasos:**

1. Conectar en [Netlify.com](https://netlify.com)
2. Autorizar GitHub
3. Configurar:
   - Build command: `npm run build`
   - Publish directory: `dist/porta-jc-m/browser`

**netlify.toml:**
```toml
[build]
  command = "npm run build"
  publish = "dist/porta-jc-m/browser"

[context.production]
  environment = { NODE_VERSION = "18.0.0" }

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 3. GitHub Pages

**Ventajas:**
- Gratis
- Directamente desde GitHub
- Buen performance

**Pasos:**

1. Crear repositorio público
2. Configurar en `angular.json`:
```json
{
  "outputHashing": "all",
  "baseHref": "/repo-name/"
}
```

3. Compilar:
```bash
npm run build -- --configuration production
```

4. Usar `angular-cli-ghpages`:
```bash
npm i -g angular-cli-ghpages
ngh --dir=dist/porta-jc-m/browser
```

---

## 4. AWS S3 + CloudFront

**Ventajas:**
- Control total
- Altamente escalable
- CloudFront para CDN

**Pasos:**

1. Crear bucket S3:
```bash
aws s3 mb s3://jcmendez.dev
```

2. Compilar:
```bash
npm run build
```

3. Subir a S3:
```bash
aws s3 sync dist/porta-jc-m/browser/ s3://jcmendez.dev/
```

4. Crear distribución CloudFront
5. Asignar dominio personalizado

**Script de despliegue:**
```bash
#!/bin/bash
npm run build
aws s3 sync dist/porta-jc-m/browser/ s3://jcmendez.dev/ --delete
aws cloudfront create-invalidation --distribution-id E123456 --paths "/*"
```

---

## 5. Docker + Heroku

**Pasos:**

1. Crear `Dockerfile`:
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist/porta-jc-m/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

2. Crear `nginx.conf`:
```nginx
server {
  listen 80;
  location / {
    root /usr/share/nginx/html;
    try_files $uri $uri/ /index.html;
  }
}
```

3. Desplegar:
```bash
heroku create tu-app
heroku container:push web
heroku container:release web
```

---

## 6. Docker Local

**Build y ejecutar localmente:**

```bash
# Build
docker build -t jcmendez-portfolio .

# Run
docker run -p 8080:80 jcmendez-portfolio

# Navegar a http://localhost:8080
```

---

## Configuración SEO para Producción

### 1. Enable SSR (Server-Side Rendering)

```bash
ng add @angular/ssr
npm run build
```

**Beneficios:**
- SEO mejorado
- Meta tags dinámicos
- Loading más rápido

### 2. Sitemap y robots.txt

**public/sitemap.xml:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://jcmendez.dev/</loc>
    <lastmod>2026-04-11</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://jcmendez.dev/#projects</loc>
    <priority>0.8</priority>
  </url>
</urlset>
```

**public/robots.txt:**
```
User-agent: *
Allow: /
Sitemap: https://jcmendez.dev/sitemap.xml
```

### 3. Google Analytics

Agrega a `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### 4. Open Graph Tags

Ya están en `index.html`:
```html
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
```

---

## Optimizaciones para Producción

### 1. Build optimizado

```bash
npm run build -- --configuration production
```

Automáticamente incluye:
- Minificación
- Tree-shaking
- Code splitting
- Lazy loading

### 2. Comprensión Gzip

**Vercel/Netlify:** Automático

**AWS S3:**
```bash
aws s3 sync dist/ s3://bucket/ --exclude "*" --include "*.js" --content-encoding gzip
```

### 3. Cache busting

Ya configurado en `angular.json`:
```json
"outputHashing": "all"
```

---

## Monitoreo y Debugging

### 1. Logs en producción

```typescript
import { isDevMode } from '@angular/core';

if (!isDevMode()) {
  // Enviar logs a servicio externo
}
```

### 2. Error tracking con Sentry

```bash
npm install @sentry/angular
```

```typescript
import * as Sentry from "@sentry/angular";

Sentry.init({
  dsn: "YOUR_DSN",
  environment: "production",
});
```

### 3. Performance monitoring

```typescript
import { web } from 'web-vitals';

web.getCLS(metric => console.log('CLS:', metric));
web.getFID(metric => console.log('FID:', metric));
web.getFCP(metric => console.log('FCP:', metric));
```

---

## Dominios Personalizados

### 1. GoDaddy / NameCheap

1. Compra dominio
2. Actualiza nameservers según plataforma:
   - **Vercel:** ns1.vercel.com, ns2.vercel.com
   - **Netlify:** dns1.netlify.com, dns2.netlify.com
   - **AWS:** Ver Route 53

### 2. SSL Certificado

- Vercel/Netlify: Automático
- AWS: AWS Certificate Manager (gratis)

---

## Checklist de Despliegue

- [ ] Cambiar `username` en `github.service.ts`
- [ ] Actualizar links sociales
- [ ] Cambiar datos personales en `portfolio.service.ts`
- [ ] Actualizar URLs en `index.html` (og:url, canonical)
- [ ] Verificar mobile responsive
- [ ] Test en navegadores modernos
- [ ] Lighthouse audit
- [ ] Speed test en PageSpeed Insights
- [ ] Configurar analytics
- [ ] Backup del código en Git

---

## Comandos Útiles

```bash
# Desarrollo
npm start

# Build producción
npm run build

# Serve producción localmente
npm run server:ssr

# Tests
npm test

# Lint
ng lint

# Análisis de bundle
npm run analyze
```

---

## Recursos

- [Angular Deployment](https://angular.io/guide/deployment)
- [Vercel Angular](https://vercel.com/docs/frameworks/angular)
- [Netlify Angular](https://www.netlify.com/with/angular/)
- [Web Vitals](https://web.dev/vitals/)

---

**¡Tu portafolio está listo para ir al mundo! 🌍🚀**
