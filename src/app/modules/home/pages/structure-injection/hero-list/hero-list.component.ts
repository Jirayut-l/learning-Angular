import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/shared/models/Hero';
import { HeroService } from '../../../services/hero';

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
