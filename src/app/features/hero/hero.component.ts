import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      id="hero"
      class="min-h-screen bg-gradient-cyber flex items-center justify-center pt-20 px-4 overflow-hidden relative"
    >
     
      <div
        class="absolute top-20 right-10 w-72 h-72 bg-neon-cyan/20 rounded-full filter blur-3xl opacity-20 md:animate-pulse-neon"
      ></div>
      <div
        class="absolute bottom-20 left-10 w-72 h-72 bg-neon-purple/20 rounded-full filter blur-3xl opacity-20 md:animate-pulse-neon"
        style="animation-delay: 1s"
      ></div>

      <div class="max-w-4xl mx-auto relative z-10">
        
        <div class="text-center mb-12">
          <div class="mb-6 inline-block">
            <div
              class="px-4 py-2 glass rounded-full text-sm text-neon-cyan font-mono flex items-center gap-2 border border-neon-cyan/30"
            >
              <span class="md:animate-pulse">●</span>
              Welcome to my portfolio
            </div>
          </div>

          <h1 class="heading-tech mb-4 text-transparent bg-clip-text bg-gradient-neon">
            Jhan Carlos Mancilla
          </h1>

          <p class="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Systems Engineer | Frontend Developer
          </p>

          <p class="text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Soy un desarrollador frontend Colombiano, enfocado en la creación de Aplicaciones Web Interactivas. 
            Cuento con experiencia práctica aplicando tecnologías modernas 
            como Angular Material, para aplicaciones empresariales que valoran la estabilidad y accesibilidad.
            Mi perfil se complementa con el manejo Angular, TypeScript, 
            Además, tengo conocimientos en Azure, y manejo de
            bases de datos SQL y MySQL, y herramientas esenciales como y Git-GitHub.
            
            Me recibí como Ingeniero de Sistemas y continúo
            capacitándome y adquiriendo nuevos conocimientos por cuenta propia.
          </p>
        </div>

       
        <div class="mb-12 mx-auto max-w-2xl">
          <div class="glass border border-neon-cyan/30 rounded-lg overflow-hidden">
            <div class="bg-cyber-gray/50 px-4 py-3 flex items-center gap-2 border-b border-neon-cyan/20">
              <div class="flex gap-2">
                <div class="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
              <span class="text-xs text-gray-400 ml-auto">terminal</span>
            </div>

            <div class="p-6 space-y-3">
              <div class="text-neon-cyan terminal-text">
                <span class="text-neon-emerald">$</span> whoami
              </div>
              <div class="text-gray-300 terminal-text ml-4">Jhan Carlos | Systems Engineer</div>

              <div class="text-neon-cyan terminal-text mt-4">
                <span class="text-neon-emerald">$</span> cat stack.txt
              </div>
              <div class="space-y-2 ml-4 text-gray-300 terminal-text">
                <div>🔷 Html5 | css3 | TypeScript | JavaScript | Tailwind | Bootstrap</div>
                <div>🟢 Node.js | Express </div>
                <div>☁️ AWS | Azure </div>
                <div>🗄️ SQL | MySQL</div>
                <div>
                  @if (terminalCursor()) {
                    <span class="md:animate-pulse">█</span>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button class="btn-primary group relative overflow-hidden">
            <span class="relative z-10 flex items-center gap-2">
              Ver Proyectos
              <span class="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </button>

          <button
            class="btn-secondary group"
            (click)="scrollToContact()"
          >
            <span class="flex items-center gap-2">
              Contactame
              <span class="group-hover:text-neon-cyan transition-smooth">✉️</span>
            </span>
          </button>
        </div>

        
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
          <div class="text-gray-500 text-sm mb-2">Scroll para continuar</div>
          <div class="flex justify-center md:animate-bounce">
            <svg class="w-5 h-5 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
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
export class HeroComponent implements OnInit {
  terminalCursor = signal(true);

  ngOnInit() {
   
    setInterval(() => {
      this.terminalCursor.update(v => !v);
    }, 500);
  }

  scrollToContact() {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
