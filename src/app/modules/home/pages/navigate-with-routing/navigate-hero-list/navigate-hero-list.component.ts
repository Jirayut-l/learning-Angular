import { Component, OnDestroy, OnInit } from '@angular/core';
import { EnrichHeroService } from '@home/services/enrich-components';
import { Hero } from '@shared/models/Hero';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-navigate-hero-list',
  templateUrl: './navigate-hero-list.component.html',
  styleUrls: ['./navigate-hero-list.component.scss']
})
export class NavigateHeroListComponent implements OnInit, OnDestroy {
  heroes: Hero[] = [];
  destroy$ = new Subject();

  constructor(private enrichHeroService: EnrichHeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  public add(name: string): void {
    this.enrichHeroService.createHero(name)
      .pipe(takeUntil(this.destroy$))
      .subscribe(hero => this.heroes.push(hero));
  }

  public rename(hero: Hero): void {
    const existingHero: Hero = { id: hero.id, name: 'Pricezog', team: '' };
    this.enrichHeroService.editHero(hero.id, existingHero)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        const hero = this.heroes.find(hero => hero.id);
        if (hero) {
          hero.name = 'Pricezog';
        }
      });
  }

  public remove(hero: Hero): void {
    this.enrichHeroService.deleteHero(hero.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.heroes = this.heroes.filter(selected => selected !== hero);
      });
  }

  private getHeroes(): void {
    this.enrichHeroService.getHeroes()
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => this.heroes = res);
  }
}
