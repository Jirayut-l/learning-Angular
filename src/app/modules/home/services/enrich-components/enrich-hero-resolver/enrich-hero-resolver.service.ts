import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { EnrichHeroService } from '@home/services/enrich-components';
import { Hero } from '@shared/models/Hero';
import { mergeMap, Observable, of, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EnrichHeroResolverService implements Resolve<Hero> {
  constructor(private enrichHeroService: EnrichHeroService) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<Hero> {
    const id = route.paramMap.get('id') ?? '0';
    return this.enrichHeroService.getHero(+id).pipe(
      take(1),
      mergeMap(hero => of(hero))
    );
  }
}
