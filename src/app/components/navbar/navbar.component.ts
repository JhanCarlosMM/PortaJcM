import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="fixed top-0 w-full z-50 glass border-b border-white/10">
      <div class="max-w-7xl mx-auto px-4 md:px-6">
        <div class="flex items-center justify-between h-16 md:h-20">
          <!-- Logo -->
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 bg-gradient-neon rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-lg">JC</span>
            </div>
            <span class="text-xl font-bold hidden md:inline">
              <span class="text-neon-cyan">Jhan</span
              ><span class="text-white">Carlos</span>
            </span>
          </div>

          <div class="hidden md:flex items-center gap-8">
            <a
              *ngFor="let link of navLinks()"
              [href]="'#' + link.id"
              class="text-sm font-medium hover:text-neon-cyan transition-smooth relative group"
            >
              {{ link.label }}
              <span
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-neon group-hover:w-full transition-all duration-300"
              ></span>
            </a>
          </div>

          <button
            (click)="toggleMobile()"
            class="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center"
            [attr.aria-label]="'Menu ' + (mobileOpen() ? 'cerrado' : 'abierto')"
          >
            <span
              class="h-0.5 bg-neon-cyan transition-all duration-300"
              [class.rotate-45]="mobileOpen()"
              [class.translate-y-2]="mobileOpen()"
            ></span>
            <span
              class="h-0.5 bg-neon-cyan transition-all duration-300"
              [class.opacity-0]="mobileOpen()"
            ></span>
            <span
              class="h-0.5 bg-neon-cyan transition-all duration-300"
              [class.-rotate-45]="mobileOpen()"
              [class.-translate-y-2]="mobileOpen()"
            ></span>
          </button>
        </div>

        <!-- Mobile Menu -->
        @if (mobileOpen()) {
          <div class="md:hidden pb-4 space-y-3 border-t border-white/10 pt-4">
            @for (link of navLinks(); track link.id) {
              <a
                [href]="'#' + link.id"
                (click)="toggleMobile()"
                class="block px-4 py-2 rounded-lg hover:bg-white/10 transition-smooth text-neon-cyan"
              >
                {{ link.label }}
              </a>
            }
          </div>
        }
      </div>
    </nav>
  `,
  styles: [`
    :host {
      display: block;
    }
  `],
})
export class NavbarComponent {
  mobileOpen = signal(false);
  navLinks = signal([
    { id: 'hero', label: 'Inicio' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'contact', label: 'Contacto' },
  ]);

  toggleMobile() {
    this.mobileOpen.update(v => !v);
  }
}
