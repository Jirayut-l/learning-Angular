import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EnrichHeroService } from '@home/services/enrich-components';
import { Hero } from '@shared/models/Hero';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EnrichHeroResolverAllService implements Resolve<Hero[]> {
    constructor(private enrichHeroService: EnrichHeroService) {
    }

    resolve(): Observable<Hero[]> {
        return this.enrichHeroService.getHeroes();
    }
}
