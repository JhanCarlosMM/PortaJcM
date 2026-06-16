import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Experience } from '../../interfaces/portfolio.interface';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="py-20 px-4 md:px-6 bg-cyber-dark">
      <div class="max-w-4xl mx-auto">
  
        <h2 class="section-title">Experiencia Profesional</h2>

        <div class="relative">
         
          <div
            class="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 md:w-0.5 bg-gradient-to-b from-neon-cyan to-neon-emerald md:-translate-x-1/2"
          ></div>

       
          @for (exp of experiences(); track exp.title; let isEven = $even) {
            <div
              [class.md:text-right]="isEven"
              class="mb-12 md:mb-8 relative"
            >
             
              <div
                class="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-neon-cyan border-4 border-cyber-dark top-2 md:top-6"
              ></div>

              <!-- Contenido -->
              <div
                [class.md:mr-auto]="isEven"
                [class.md:ml-auto]="!isEven"
                class="ml-8 md:ml-0 md:w-1/2 md:px-8"
              >
                <div class="glass rounded-xl p-6 hover:border-neon-cyan/50 transition-smooth">
                  <div class="flex items-start justify-between mb-2">
                    <h3 class="text-xl font-bold text-white">{{ exp.title }}</h3>
                    <span class="text-xs text-neon-emerald font-mono whitespace-nowrap ml-4">
                      {{ formatDate(exp.startDate) }} -
                      @if(exp.endDate) {
                        {{ formatDate(exp.endDate) }}
                      } @else {
                        Present
                      }
                    </span>
                  </div>

                  <p class="text-neon-cyan font-medium mb-3">
                    {{ exp.company }} • {{ exp.location }}
                  </p>

                  <p class="text-gray-300 text-sm leading-relaxed mb-4">
                    {{ exp.description }}
                  </p>

                  <!-- Technologies used -->
                  <div class="flex flex-wrap gap-2">
                    @for (tech of exp.technologies; track tech) {
                      <span
                        class="px-2 py-1 text-xs rounded bg-cyber-light text-neon-emerald font-mono border border-neon-emerald/30"
                      >
                        {{ tech }}
                      </span>
                    }
                  </div>
                </div>
              </div>
            </div>
          }
        </div>

        <!-- Additional info -->
        <div class="mt-16 pt-12 border-t border-white/10">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="glass rounded-lg p-6 text-center">
              <div class="text-3xl mb-2">🎓</div>
              <h4 class="font-bold text-white mb-2">Educación</h4>
              <p class="text-sm text-gray-400">Ingeniería de Sistemas</p>
              <p class="text-xs text-neon-cyan mt-1">Universidad Uniconfacauca</p>
            </div>

            <div class="glass rounded-lg p-6 text-center">
              <div class="text-3xl mb-2">🏆</div>
              <h4 class="font-bold text-white mb-2">Certificaciones</h4>
              <p class="text-sm text-gray-400">Diplomado en Internet de las cosas</p>
              <p class="text-xs text-neon-cyan mt-1">Uniconfacauca</p>
            </div>
            <div class="glass rounded-lg p-6 text-center">
              <div class="text-3xl mb-2">🏆</div>
              <h4 class="font-bold text-white mb-2">Certificaciones</h4>
              <p class="text-sm text-gray-400">Diplomado en Uso Potencial de las TIC</p>
              <p class="text-xs text-neon-cyan mt-1">Universidad Tecnológica de Pereira</p>
            </div>
            <div class="glass rounded-lg p-6 text-center">
              <div class="text-3xl mb-2">🏆</div>
              <h4 class="font-bold text-white mb-2">Certificaciones</h4>
              <p class="text-sm text-gray-400">Curso básico de Python</p>
              <p class="text-xs text-neon-cyan mt-1">Platzi</p>
            </div>
            <div class="glass rounded-lg p-6 text-center">
              <div class="text-3xl mb-2">🏆</div>
              <h4 class="font-bold text-white mb-2">Certificaciones</h4>
              <p class="text-sm text-gray-400">Curso Programación Básica</p>
              <p class="text-xs text-neon-cyan mt-1">Platzi</p>
            </div>
            <div class="glass rounded-lg p-6 text-center">
              <div class="text-3xl mb-2">🏆</div>
              <h4 class="font-bold text-white mb-2">Certificaciones</h4>
              <p class="text-sm text-gray-400">Ingles B2</p>
              <p class="text-xs text-neon-cyan mt-1">Universidad Tecnológica de Pereira</p>
            </div>

            <div class="glass rounded-lg p-6 text-center">
              <div class="text-3xl mb-2">🌍</div>
              <h4 class="font-bold text-white mb-2">Idiomas</h4>
              <p class="text-sm text-gray-400">Español • Inglés</p>
              <p class="text-xs text-neon-cyan mt-1">Nativo - Básico</p>
            </div>
          </div>
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
export class ExperienceComponent implements OnInit {
  private portfolioService = new PortfolioService();
  experiences = signal<Experience[]>([]);

  ngOnInit() {
    this.experiences.set(this.portfolioService.getExperiences()());
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('es-ES', {
      month: 'short',
      year: 'numeric',
    });
  }
}
