import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/shared/models/Hero';
import { HeroService } from '../../../services/hero';
import { heroSquadFactory } from '../../../services/hero-squad';


@Component({
  selector: 'app-favorite-heroes',
  templateUrl: './favorite-heroes.component.html',
  styleUrls: ['./favorite-heroes.component.scss'],
  providers :[{
    provide:HeroService,
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
