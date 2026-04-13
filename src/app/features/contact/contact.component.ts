import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <section id="contact" class="py-20 px-4 md:px-6 bg-gradient-cyber">
      <div class="max-w-4xl mx-auto">
        <!-- Section Title -->
        <h2 class="section-title">Contacto</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Left side - Info -->
          <div>
            <p class="text-gray-300 mb-8 leading-relaxed">
              ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él. Completa el formulario y
              te contactaré lo antes posible.
            </p>

            <!-- Social Links -->
            <div class="space-y-4 mb-8">
              @for (link of socialLinks(); track link.name) {
                <a
                  [href]="link.url"
                  target="_blank"
                  rel="noopener"
                  class="flex items-center gap-3 glass rounded-lg p-4 hover:border-neon-cyan/50 hover:bg-white/20 transition-smooth group"
                >
                  <span class="text-2xl group-hover:scale-110 transition-transform">
                    {{ getSocialIcon(link.icon) }}
                  </span>
                  <div>
                    <p class="text-sm text-gray-400">{{ link.name }}</p>
                    <p class="text-neon-cyan font-mono text-sm">{{ link.url.replace('https://', '').replace('mailto:', '') }}</p>
                  </div>
                  <svg
                    class="w-5 h-5 text-neon-cyan ml-auto group-hover:translate-x-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    ></path>
                  </svg>
                </a>
              }
            </div>

            <!-- Response time -->
            <div class="glass rounded-lg p-4 border-neon-emerald/30">
              <p class="text-sm text-gray-400 flex items-center gap-2">
                <span class="w-2 h-2 bg-neon-emerald rounded-full animate-pulse"></span>
                Usualmente respondo en 12 horas
              </p>
            </div>
          </div>

          <!-- Right side - Form -->
          <div>
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-4">
              <!-- Name -->
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
  socialLinks = signal<any[]>([]);

  constructor(private fb: FormBuilder) {
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
    const icons: Record<string, string> = {
      github: '🐙',
      linkedin: '💼',
      mail: '✉️',
    };
    return icons[iconName] || '🔗';
  }

  onSubmit() {
    if (this.contactForm.invalid) return;

    this.isSubmitting.set(true);

    // Simular envío
    setTimeout(() => {
      console.log('Formulario enviado:', this.contactForm.value);
      this.isSubmitting.set(false);
      this.submitSuccess.set(true);

      // Reset form
      this.contactForm.reset();

      // Hide success message after 5 seconds
      setTimeout(() => {
        this.submitSuccess.set(false);
      }, 5000);
    }, 1500);
  }
}
