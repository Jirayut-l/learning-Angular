import { Injectable } from '@angular/core';
import { Hero } from '@shared/models/Hero';
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
    const findIdHero = heroes.find(hero => hero.id === id) ?? this.hero;
    return this.hero ? findIdHero : this.hero;
  }
}
