import { Component, OnInit } from '@angular/core';
import { Hero } from '@shared/models/Hero';
import { HeroService } from '@home/services/hero';
import { heroSquadFactory } from '@home/services/hero-squad';

@Component({
  selector: 'app-favorite-heroes',
  templateUrl: './favorite-heroes.component.html',
  styleUrls: ['./favorite-heroes.component.scss'],
  providers: [{
    provide: HeroService,
    useFactory: heroSquadFactory(true),
  }]
})
export class FavoriteHeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
