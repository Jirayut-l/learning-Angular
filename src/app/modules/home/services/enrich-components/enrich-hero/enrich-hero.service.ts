import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from '@shared/models/Hero';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnrichHeroService {
  private heroesUrl = 'api/heroes/';

  constructor(private http: HttpClient) {
  }

  public getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(() => error);
      })
    );
  }

  public createHero(name: string): Observable<Hero> {
    const hero = { name };
    return this.http.post<Hero>(this.heroesUrl, hero);
  }

  public editHero(id: number, hero: Hero): Observable<unknown> {
    return this.http.put(`${this.heroesUrl}${id}`, hero);
  }

  public deleteHero(id: number): Observable<unknown> {
    return this.http.delete(`${this.heroesUrl}${id}`);
  }
}
