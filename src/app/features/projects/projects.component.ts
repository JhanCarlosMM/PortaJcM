import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Project } from '../../interfaces/portfolio.interface';

type ProjectCategory = 'frontend' | 'backend' | 'fullstack' | 'cloud' | 'devops' | 'all';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-20 px-4 md:px-6 bg-cyber-dark">
      <div class="max-w-6xl mx-auto">
        <!-- Section Title -->
        <h2 class="section-title">Proyectos Destacados</h2>

        <!-- Filter buttons -->
        <div class="flex flex-wrap gap-3 mb-12 justify-center md:justify-start">
          <button
            *ngFor="let filter of filters()"
            (click)="setFilter(filter.value)"
            [class.active]="selectedFilter() === filter.value"
            class="px-4 py-2 rounded-lg font-medium transition-smooth border"
            [class.bg-neon-cyan]="selectedFilter() === filter.value"
            [class.text-cyber-dark]="selectedFilter() === filter.value"
            [class.border-neon-cyan]="selectedFilter() === filter.value"
            [class.glass]="selectedFilter() !== filter.value"
            [class.text-gray-300]="selectedFilter() !== filter.value"
          >
            {{ filter.label }}
          </button>
        </div>

        <!-- Projects grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          @for (project of filteredProjects(); track project.id) {
            <div
              class="group glass rounded-xl overflow-hidden hover:shadow-neon-cyan transition-smooth hover:border-neon-cyan/50 cursor-pointer transform hover:scale-105"
            >
              <!-- Project image/placeholder -->
              <div class="relative h-40 bg-gradient-to-br from-cyber-gray to-cyber-light overflow-hidden">
                <div
                  class="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-10 transition-opacity"
                ></div>
                <div class="flex items-center justify-center h-full">
                  <span class="text-6xl group-hover:scale-110 transition-transform">
                    @switch(project.category) {
                      @case('frontend') {
                        🎨
                      }
                      @case('backend') {
                        ⚙️
                      }
                      @case('fullstack') {
                        🚀
                      }
                      @case('cloud') {
                        ☁️
                      }
                      @case('devops') {
                        🔧
                      }
                    }
                  </span>
                </div>
              </div>

              <!-- Project content -->
              <div class="p-6">
                <div class="flex items-start justify-between mb-3">
                  <h3 class="text-lg font-bold text-white group-hover:text-neon-cyan transition-smooth">
                    {{ project.title }}
                  </h3>
                  @if(project.featured) {
                    <span class="px-2 py-1 bg-neon-cyan/20 text-neon-cyan text-xs rounded font-medium">
                      Featured
                    </span>
                  }
                </div>

                <p class="text-sm text-gray-400 mb-4 line-clamp-2">
                  {{ project.description }}
                </p>

                <!-- Technologies -->
                <div class="flex flex-wrap gap-2 mb-4">
                  @for (tech of project.technologies.slice(0, 3); track tech) {
                    <span
                      class="px-2 py-1 text-xs rounded bg-cyber-light text-neon-emerald font-mono border border-neon-emerald/20"
                    >
                      {{ tech }}
                    </span>
                  }
                  @if(project.technologies.length > 3) {
                    <span class="px-2 py-1 text-xs rounded bg-cyber-light text-gray-400">
                      +{{ project.technologies.length - 3 }}
                    </span>
                  }
                </div>

                <!-- Links -->
                <div class="flex gap-2 pt-4 border-t border-white/10">
                  @if(project.github) {
                    <a
                      [href]="project.github"
                      target="_blank"
                      rel="noopener"
                      class="flex-1 py-2 text-center text-sm rounded-lg glass hover:bg-white/20 transition-smooth text-neon-cyan"
                    >
                      GitHub
                    </a>
                  }
                  <a
                    [href]="project.url"
                    target="_blank"
                    rel="noopener"
                    class="flex-1 py-2 text-center text-sm rounded-lg bg-neon-cyan text-cyber-dark font-medium hover:shadow-neon-cyan transition-smooth"
                  >
                    Ver más
                  </a>
                </div>
              </div>
            </div>
          }
        </div>

        @if(filteredProjects().length === 0) {
          <div class="text-center py-12">
            <p class="text-gray-400">No hay proyectos en esta categoría</p>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `],
})
export class ProjectsComponent implements OnInit {
  private portfolioService = new PortfolioService();
  projects = signal<Project[]>([]);
  selectedFilter = signal<ProjectCategory>('all');
  
  filters = signal([
    { label: 'Todos', value: 'all' as ProjectCategory },
    { label: 'Frontend', value: 'frontend' as ProjectCategory },
    { label: 'Backend', value: 'backend' as ProjectCategory },
    { label: 'Full Stack', value: 'fullstack' as ProjectCategory },
    { label: 'Cloud', value: 'cloud' as ProjectCategory },
    { label: 'DevOps', value: 'devops' as ProjectCategory },
  ]);

  filteredProjects = computed(() => {
    const filter = this.selectedFilter();
    if (filter === 'all') {
      return this.projects().sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    return this.projects()
      .filter(p => p.category === filter)
      .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  });

  constructor() {}

  ngOnInit() {
    this.projects.set(this.portfolioService.getProjects()());
  }

  setFilter(filter: ProjectCategory) {
    this.selectedFilter.set(filter);
  }
}
