import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/shared/models/Hero';
import { HeroService } from '../../../services/hero/hero.service';

@Component({
  selector: 'app-favorite-heroes',
  templateUrl: './favorite-heroes.component.html',
  styleUrls: ['./favorite-heroes.component.scss']
})
export class FavoriteHeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes();
  }

}
