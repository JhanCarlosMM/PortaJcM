import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';
import { DomSanitizer } from '@angular/platform-browser';
import { CONTACT_FORM } from '../../constants/portfolio.constants';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <section id="contact" class="py-20 px-4 md:px-6 bg-gradient-cyber">
      <div class="max-w-4xl mx-auto">
       
        <h2 class="section-title">Contacto</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div>
            <p class="text-gray-300 mb-8 leading-relaxed">
              ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él. Completa el formulario y
              te contactaré lo antes posible.
            </p>

            <!-- Links redes sociales: mostrar solo iconos clicables -->
            <div class="flex items-center gap-3 mb-8">
              @for (link of socialLinks(); track link.name) {
                <a
                  [attr.href]="getHref(link.url)"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="{{ link.name }}"
                  class="inline-flex flex-col items-center justify-center w-16 glass rounded-lg hover:bg-white/5 transition-smooth group mx-1 p-2">
                  <span class="text-xs text-gray-300 mb-1">{{ link.name }}</span>
                  <span class="text-2xl group-hover:scale-110 transition-transform" [innerHTML]="getSocialIcon(link.icon)"></span>
                </a>
              }
            </div>

            <div class="glass rounded-lg p-4 border-neon-emerald/30">
              <p class="text-sm text-gray-400 flex items-center gap-2">
                <span class="w-2 h-2 bg-neon-emerald rounded-full animate-pulse"></span>
                Usualmente respondo en 12 horas
              </p>
            </div>
          </div>

          
          <div>
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-4">
             
              <div>
                <label for="name" class="block text-sm font-medium text-gray-300 mb-2">
                  Nombre Completo
                </label>
                <input
                  id="name"
                  type="text"
                  formControlName="name"
                  placeholder="Juan Pérez"
                  class="w-full px-4 py-2 bg-cyber-gray/50 border border-white/10 rounded-lg focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-smooth text-white placeholder-gray-500"
                />
                @if(isFieldInvalid('name')) {
                  <p class="text-red-400 text-xs mt-1">{{ getFieldError('name') }}</p>
                }
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
                  Correo Electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  formControlName="email"
                  placeholder="juan@example.com"
                  class="w-full px-4 py-2 bg-cyber-gray/50 border border-white/10 rounded-lg focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-smooth text-white placeholder-gray-500"
                />
                @if(isFieldInvalid('email')) {
                  <p class="text-red-400 text-xs mt-1">{{ getFieldError('email') }}</p>
                }
              </div>

              <!-- Subject -->
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-300 mb-2">
                  Asunto
                </label>
                <input
                  id="subject"
                  type="text"
                  formControlName="subject"
                  placeholder="Solicitud de proyecto"
                  class="w-full px-4 py-2 bg-cyber-gray/50 border border-white/10 rounded-lg focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-smooth text-white placeholder-gray-500"
                />
                @if(isFieldInvalid('subject')) {
                  <p class="text-red-400 text-xs mt-1">{{ getFieldError('subject') }}</p>
                }
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  formControlName="message"
                  placeholder="Cuéntame sobre tu proyecto..."
                  rows="4"
                  class="w-full px-4 py-2 bg-cyber-gray/50 border border-white/10 rounded-lg focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-smooth text-white placeholder-gray-500 resize-none"
                ></textarea>
                @if(isFieldInvalid('message')) {
                  <p class="text-red-400 text-xs mt-1">{{ getFieldError('message') }}</p>
                }
              </div>

              <!-- Submit button -->
              <button
                type="submit"
                [disabled]="contactForm.invalid || isSubmitting()"
                class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                @if(isSubmitting()) {
                  <span class="animate-spin">⏳</span>
                  Enviando...
                } @else {
                  <span>Enviar Mensaje</span>
                  <span>→</span>
                }
              </button>

              <!-- Success message -->
              @if(submitSuccess()) {
                <div class="p-4 bg-neon-emerald/10 border border-neon-emerald/30 rounded-lg">
                  <p class="text-neon-emerald text-sm flex items-center gap-2">
                    <span>✅</span>
                    ¡Mensaje enviado! Te contactaré pronto.
                  </p>
                </div>
              }
            </form>
          </div>
        </div>

        <!-- Footer -->
        <div class="mt-16 pt-12 border-t border-white/10 text-center">
          <p class="text-gray-400 mb-4">
            Diseñado y construido con
            <span class="text-neon-cyan">Angular v21</span>
            y
            <span class="text-neon-emerald">Tailwind CSS</span>
          </p>
          <p class="text-sm text-gray-500">
            © 2026 Jhan Carlos Mancilla. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `],
})
export class ContactComponent {
  private portfolioService = new PortfolioService();
  contactForm: FormGroup;
  isSubmitting = signal(false);
  submitSuccess = signal(false);
  submitError = signal<string | null>(null);
  socialLinks = signal<any[]>([]);

  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });

    this.socialLinks.set(this.portfolioService.getSocialLinks()());
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getFieldError(fieldName: string): string {
    const control = this.contactForm.get(fieldName);
    if (control?.hasError('required')) {
      return `${fieldName} es requerido`;
    }
    if (control?.hasError('email')) {
      return 'Email inválido';
    }
    if (control?.hasError('minlength')) {
      const minLength = control.getError('minlength')?.requiredLength;
      return `Mínimo ${minLength} caracteres`;
    }
    return '';
  }

  getSocialIcon(iconName: string): string {
    const svgs: Record<string, string> = {
      github: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" aria-hidden="true">
          <path d="M12 .297a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.47 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0012 .297z" />
        </svg>
      `,
      linkedin: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" aria-hidden="true">
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5V24H0V8zm7.5 0h4.78v2.17h.07c.67-1.26 2.3-2.59 4.73-2.59 5.05 0 6 3.33 6 7.67V24h-5V15.5c0-2.02-.04-4.63-2.82-4.63-2.82 0-3.25 2.2-3.25 4.47V24h-5V8z"/>
        </svg>
      `,
      mail: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" aria-hidden="true">
          <path d="M1.5 4.5h21v15h-21v-15zm2.25 2.25v10.5h16.5V6.75l-8.25 6.375L3.75 6.75z"/>
        </svg>
      `,
    };

    const svg = svgs[iconName] || `<svg xmlns='http://www.w3.org/2000/svg' class='w-6 h-6'><circle cx='12' cy='12' r='10' /></svg>`;
    return this.sanitizer.bypassSecurityTrustHtml(svg) as any;
  }

  getHref(url: string): string {
    if (!url) return '#';
    // Si es un email sin mailto:, convertirlo
    if (url.includes('@') && !url.startsWith('mailto:')) {
      return `mailto:${url}`;
    }
    return url;
  }

  async onSubmit() {
    if (this.contactForm.invalid) return;

    this.isSubmitting.set(true);
    this.submitError.set(null);

    const payload = this.contactForm.value;
    const endpoint = CONTACT_FORM.endpoint;

    if (!endpoint || endpoint === 'REPLACE_WITH_YOUR_FORMSPREE_OR_GETFORM_ENDPOINT') {
      console.warn('CONTACT_FORM.endpoint no está configurado. Revisa portfolio.constants.ts');
      console.log('Formulario (local):', payload);
      this.isSubmitting.set(false);
      this.submitSuccess.set(true);
      this.contactForm.reset();
      setTimeout(() => this.submitSuccess.set(false), 5000);
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        this.submitSuccess.set(true);
        this.contactForm.reset();
      } else {
        const text = await res.text();
        console.error('Error al enviar formulario', res.status, text);
        this.submitError.set('Error al enviar el formulario. Intenta nuevamente.');
        this.submitSuccess.set(false);
      }
    } catch (err) {
      console.error('Error de red al enviar formulario', err);
      this.submitError.set('Error de red. Revisa tu conexión e intenta de nuevo.');
      this.submitSuccess.set(false);
    } finally {
      this.isSubmitting.set(false);
      // Limpiar mensajes luego de 5s
      setTimeout(() => {
        this.submitSuccess.set(false);
        this.submitError.set(null);
      }, 5000);
    }
  }
}
