import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './features/hero/hero.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ContactComponent } from './features/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
  ],
  template: `
    <div class="min-h-screen bg-cyber-dark text-white overflow-x-hidden">
      <app-navbar></app-navbar>
      <main class="pt-16 md:pt-20">
        <app-hero></app-hero>
        <app-experience></app-experience>
        <app-projects></app-projects>
        <app-skills></app-skills>
        <app-contact></app-contact>
      </main>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `],
})
export class App {}
