import { Component, OnInit } from '@angular/core';
import { EnrichHeroService } from '@home/services/enrich-components';
import { Hero } from '@shared/models/Hero';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-enrich-hero-list',
  templateUrl: './enrich-hero-list.component.html',
  styleUrls: ['./enrich-hero-list.component.scss']
})
export class EnrichHeroListComponent implements OnInit {
  heroes: Hero[] = [];
  hero2: Observable<Hero[]> = new Observable<Hero[]>();

  constructor(private enrichHeroService: EnrichHeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  public addValue(name: string): void {
    this.enrichHeroService.createHero(name).subscribe(hero => this.heroes.push(hero));
  }

  public rename(hero: Hero): void {
    const existingHero: Hero = { id: hero.id, name: 'Pricezog', team: '' };
    this.enrichHeroService.editHero(hero.id, existingHero).subscribe(() => {
      const hero = this.heroes.find(val => val.id === existingHero.id);
      if (hero) {
        hero.name = 'Pricezog';
      }
    });
  }

  public remove(hero: Hero): void {
    this.enrichHeroService.deleteHero(hero.id).subscribe(() => {
      this.heroes = this.heroes.filter(selected => selected !== hero);
    });
  }

  private getHeroes(): void {
    this.enrichHeroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    this.hero2 = this.enrichHeroService.getHeroes();
  }
}
