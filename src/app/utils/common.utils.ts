/**
 * Utilidades comunes para el portafolio
 */

/**
 * Formatea una fecha al formato deseado
 */
export function formatDate(date: Date, locale: string = 'es-ES'): string {
  return new Date(date).toLocaleDateString(locale, {
    month: 'short',
    year: 'numeric',
  });
}

/**
 * Calcula años de experiencia
 */
export function getYearsOfExperience(startDate: Date, endDate?: Date): number {
  const end = endDate ? new Date(endDate) : new Date();
  const start = new Date(startDate);
  return Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365.25));
}

/**
 * Valida email
 */
export function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * Copia texto al portapapeles
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Error copying to clipboard:', err);
    return false;
  }
}

/**
 * Detecta tema oscuro del sistema
 */
export function isDarkModePreferred(): boolean {
  if (typeof window === 'undefined') return true;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/**
 * Genera pegar desde texto
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Trunca texto con ellipsis
 */
export function truncateText(text: string, maxLength: number = 100): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trimEnd() + '...';
}

/**
 * Pausa async (para simulaciones)
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Scroll suave a elemento
 */
export function smoothScroll(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/**
 * Obtiene parámetro de URL
 */
export function getUrlParameter(name: string): string | null {
  if (typeof window === 'undefined') return null;
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

/**
 * Detecta si está en dispositivo móvil
 */
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
