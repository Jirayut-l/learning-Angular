import { Component, OnInit } from '@angular/core';
import { Hero } from '@models/Hero';
import { Observable } from 'rxjs';
import { EnrichHeroService } from '../../../services/enrich-components';

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

  public add(name: string): void {
    this.enrichHeroService.createHero(name).subscribe(hero => this.heroes.push(hero));
  }

  private getHeroes(): void {
    this.enrichHeroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    this.hero2 = this.enrichHeroService.getHeroes();
  }
}
