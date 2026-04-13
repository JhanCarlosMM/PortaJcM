import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span
      [class.bg-neon-cyan]="variant === 'primary'"
      [class.bg-neon-emerald]="variant === 'success'"
      [class.bg-neon-purple]="variant === 'warning'"
      [class.bg-neon-pink]="variant === 'danger'"
      [class.bg-cyber-light]="variant === 'default'"
      [class.text-cyber-dark]="variant !== 'default'"
      [class.text-neon-emerald]="variant === 'default'"
      class="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold transition-smooth hover:shadow-lg"
      [ngClass]="customClass"
    >
      {{ label }}
    </span>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
  `],
})
export class TechBadgeComponent {
  @Input() label: string = '';
  @Input() variant: 'primary' | 'success' | 'warning' | 'danger' | 'default' = 'default';
  @Input() customClass: string = '';
}
