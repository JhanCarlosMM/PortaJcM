import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Skill } from '../../interfaces/portfolio.interface';

type SkillCategory = 'frontend' | 'backend' | 'cloud' | 'devops' | 'tools';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="py-20 px-4 md:px-6 bg-gradient-cyber">
      <div class="max-w-6xl mx-auto">
        <!-- Section Title -->
        <h2 class="section-title">Habilidades Técnicas</h2>

        <!-- Tabs/Categories -->
        <div class="flex flex-wrap gap-2 mb-12 justify-center md:justify-start">
          @for (category of categories(); track category.value) {
            <button
              (click)="setCategory(category.value)"
              [class.bg-neon-cyan]="selectedCategory() === category.value"
              [class.text-cyber-dark]="selectedCategory() === category.value"
              [class.glass]="selectedCategory() !== category.value"
              [class.text-gray-300]="selectedCategory() !== category.value"
              class="px-4 py-2 rounded-lg font-medium transition-smooth"
            >
              {{ category.icon }} {{ category.label }}
            </button>
          }
        </div>

        <!-- Skills Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          @for (skill of filteredSkills(); track skill.name) {
            <div class="group">
              <div class="flex justify-between items-center mb-3">
                <div class="flex items-center gap-2">
                  <span class="text-2xl">{{ skill.icon }}</span>
                  <div>
                    <h4 class="font-bold text-white">{{ skill.name }}</h4>
                    <span
                      class="text-xs text-neon-cyan font-mono"
                      [class]="getLevelClass(skill.level)"
                    >
                      {{ getLevelLabel(skill.level) }}
                    </span>
                  </div>
                </div>
                <span class="text-lg font-bold text-neon-emerald">{{ skill.percentage }}%</span>
              </div>

              <!-- Progress bar with animation -->
              <div class="relative h-2.5 bg-cyber-gray rounded-full overflow-hidden">
                <div
                  class="absolute inset-y-0 left-0 bg-gradient-to-r from-neon-cyan to-neon-emerald rounded-full transition-all duration-1000 ease-out"
                  [style.width.%]="skill.percentage"
                  [class.animate-pulse]="skill.level === 'expert'"
                ></div>
              </div>

              <!-- Decorative glow on hover -->
              <div
                class="absolute inset-0 bg-gradient-to-r from-neon-cyan/0 to-neon-emerald/0 group-hover:from-neon-cyan/20 group-hover:to-neon-emerald/20 rounded-lg transition-all duration-300 -z-10 blur-lg"
              ></div>
            </div>
          }
        </div>

        <!-- Skills Summary Cards -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/10">
          @for (summary of summaryStats(); track summary.label) {
            <div class="glass rounded-lg p-6 text-center group hover:border-neon-cyan/50 transition-smooth">
              <div class="text-3xl mb-2 group-hover:scale-110 transition-transform">
                {{ summary.icon }}
              </div>
              <div class="text-2xl font-bold text-neon-cyan mb-1">
                {{ summary.count }}
              </div>
              <div class="text-sm text-gray-400">{{ summary.label }}</div>
            </div>
          }
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
export class SkillsComponent implements OnInit {
  private portfolioService = new PortfolioService();
  skills = signal<Skill[]>([]);
  selectedCategory = signal<SkillCategory>('frontend');

  categories = signal([
    { label: 'Frontend', value: 'frontend' as SkillCategory, icon: '🎨' },
    { label: 'Backend', value: 'backend' as SkillCategory, icon: '⚙️' },
    { label: 'Cloud', value: 'cloud' as SkillCategory, icon: '☁️' },
    { label: 'DevOps', value: 'devops' as SkillCategory, icon: '🔧' },
    { label: 'Tools', value: 'tools' as SkillCategory, icon: '🛠️' },
  ]);

  filteredSkills = computed(() => {
    return this.skills().filter(s => s.category === this.selectedCategory());
  });

  summaryStats = computed(() => [
    {
      label: 'Skill Experts',
      icon: '⭐',
      count: this.skills().filter(s => s.level === 'expert').length,
    },
    {
      label: 'Avg. Level',
      icon: '📈',
      count: (
        this.skills().reduce((acc, s) => acc + s.percentage, 0) / this.skills().length
      ).toFixed(0) + '%',
    },
    {
      label: 'Total Skills',
      icon: '🎯',
      count: this.skills().length,
    },
    {
      label: 'Years Exp.',
      icon: '📅',
      count: '3+',
    },
  ]);

  ngOnInit() {
    this.skills.set(this.portfolioService.getSkills()());
  }

  setCategory(category: SkillCategory) {
    this.selectedCategory.set(category);
  }

  getLevelClass(level: string): string {
    const classes: Record<string, string> = {
      expert: 'text-neon-emerald font-bold',
      advanced: 'text-neon-cyan',
      intermediate: 'text-yellow-400',
      beginner: 'text-gray-400',
    };
    return classes[level] || '';
  }

  getLevelLabel(level: string): string {
    const labels: Record<string, string> = {
      expert: 'EXPERT',
      advanced: 'ADVANCED',
      intermediate: 'INTERMEDIATE',
      beginner: 'BEGINNER',
    };
    return labels[level] || '';
  }
}
