import { Component, OnInit } from '@angular/core';
import { HeroService } from '@home/services/hero';
import { Hero } from '@shared/models/Hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
