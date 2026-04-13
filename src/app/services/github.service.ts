import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  languages_url: string;
  topics: string[];
  stars: number;
  forks: number;
}

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  private readonly apiUrl = 'https://api.github.com/users';
  private readonly username = 'JhanCarlosMM';

  constructor(private http: HttpClient) {}

  getUserRepositories(): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}/${this.username}/repos?sort=stars&per_page=10`)
      .pipe(
        map((repos) =>
          repos.map((repo) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description || 'Sin descripción',
            url: repo.html_url,
            technologies: repo.topics || [],
            stars: repo.stargazers_count || 0,
            forks: repo.forks_count || 0,
          }))
        ),
        catchError(() => {
          console.warn('Error fetching GitHub repos - using mock data');
          return of(this.getMockRepositories());
        })
      );
  }

  private getMockRepositories(): any[] {
    return [
      {
        id: 1,
        name: 'angular-portfolio',
        description: 'Portafolio profesional con Angular v21 y Tailwind CSS',
        url: 'https://github.com/username/angular-portfolio',
        technologies: ['Angular', 'TypeScript', 'Tailwind CSS'],
        stars: 42,
        forks: 8,
      },
      {
        id: 2,
        name: 'cloud-infrastructure',
        description: 'Infraestructura en la nube con Terraform y AWS',
        url: 'https://github.com/username/cloud-infrastructure',
        technologies: ['Terraform', 'AWS', 'Docker'],
        stars: 28,
        forks: 5,
      },
      {
        id: 3,
        name: 'api-gateway',
        description: 'Gateway API con Node.js y PostgreSQL',
        url: 'https://github.com/username/api-gateway',
        technologies: ['Node.js', 'PostgreSQL', 'Express'],
        stars: 35,
        forks: 7,
      },
    ];
  }
}
