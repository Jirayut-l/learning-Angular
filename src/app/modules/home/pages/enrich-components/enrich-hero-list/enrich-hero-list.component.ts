import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnrichHeroService } from '@home/services/enrich-components';
import { Hero } from '@shared/models/Hero';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-enrich-hero-list',
    templateUrl: './enrich-hero-list.component.html',
    styleUrls: ['./enrich-hero-list.component.scss']
})
export class EnrichHeroListComponent implements OnInit, OnDestroy {
    //public properties
    heroes: Hero[] = [];
    hero2: Observable<Hero[]> = new Observable<Hero[]>();
    destroy$ = new Subject();

    // constructor
    constructor(private enrichHeroService: EnrichHeroService,
                private route: ActivatedRoute) {
    }

    //lifecycle hook
    ngOnInit(): void {
        this.heroes = this.route.snapshot.data['hero'];
        //this.getHeroes();
        console.log(this.heroes);
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.complete();
    }

    //public methods
    public addValue(name: string): void {
        this.enrichHeroService.createHero(name)
            .pipe(takeUntil(this.destroy$))
            .subscribe(hero => this.heroes.push(hero));
    }

    public rename(hero: Hero): void {
        const existingHero: Hero = { id: hero.id, name: 'Pricezog', team: '' };
        this.enrichHeroService.editHero(hero.id, existingHero)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                const hero = this.heroes.find(val => val.id === existingHero.id);
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

    //private methods
    // private getHeroes(): void {
    //     this.enrichHeroService.getHeroes()
    //         .pipe(takeUntil(this.destroy$))
    //         .subscribe(res => this.heroes = res);
    //     this.hero2 = this.enrichHeroService.getHeroes();
    // }
}
