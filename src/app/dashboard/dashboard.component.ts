import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { RouterModule } from '@angular/router';
import { HeroSearchComponent } from '../hero-search/hero-search.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroSearchComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

}
