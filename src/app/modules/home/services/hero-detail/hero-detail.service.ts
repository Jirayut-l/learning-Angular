import { Injectable } from '@angular/core';
import { Hero } from '@models/Hero';
import { HeroService } from '../hero';

@Injectable({
  providedIn: 'root'
})
export class HeroDetailService {
  hero: Hero = {} as Hero;

  constructor(private heroService: HeroService) {
  }

  public getHero(id: number): Hero {
    const heroes = this.heroService.getHeroes();
    if (!this.hero) {
      return this.hero;
    }
    return this.hero = heroes.find(hero => hero.id == id) ?? this.hero;
  }
}
