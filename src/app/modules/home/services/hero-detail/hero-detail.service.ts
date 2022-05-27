import { Injectable } from '@angular/core';
import { Hero } from 'src/app/shared/models/Hero';
import { HeroService } from '../hero/hero.service';

@Injectable({
  providedIn: 'root'
})
export class HeroDetailService {

  private hero: Hero = {} as Hero;

  constructor(private heroService: HeroService) {
  }

  public getHero(id: number): Hero {
    const heroes = this.heroService.getHeroes();
    if (!this.hero) {
      this.hero = heroes.find(hero => hero.id === id) ?? this.hero;
    }
    return this.hero;
  }
}
