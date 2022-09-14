import { Component, OnInit } from '@angular/core';
import { HeroService } from '@home/services/hero';
import { heroSquadFactory } from '@home/services/hero-squad';
import { Hero } from '@shared/models/Hero';

@Component({
  selector: 'app-favorite-heroes',
  templateUrl: './favorite-heroes.component.html',
  styleUrls: ['./favorite-heroes.component.scss'],
  providers: [
    {
      provide: HeroService,
      useFactory: heroSquadFactory(true),
    },
  ],
})
export class FavoriteHeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
