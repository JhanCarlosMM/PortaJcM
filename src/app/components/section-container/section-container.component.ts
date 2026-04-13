import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-container',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [id]="sectionId" [ngClass]="containerClass" class="py-20 px-4 md:px-6">
      <div class="max-w-6xl mx-auto">
        <ng-content></ng-content>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `],
})
export class SectionContainerComponent {
  @Input() sectionId: string = '';
  @Input() containerClass: string = 'bg-cyber-dark';
  @Input() variant: 'dark' | 'gradient' | 'glass' = 'dark';

  ngOnInit() {
    if (this.variant === 'gradient') {
      this.containerClass = 'bg-gradient-cyber';
    } else if (this.variant === 'glass') {
      this.containerClass = 'bg-cyber-dark/50 backdrop-blur-sm';
    }
  }
}
