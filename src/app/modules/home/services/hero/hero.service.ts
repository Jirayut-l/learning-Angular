import { Injectable } from '@angular/core';
import { Hero } from '@shared/models/Hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  public getHeroes(): Hero[] {
    return [
      { id: 1, name: 'Boothstomper', team: 'avengers' },
      { id: 2, name: 'Drogfisher', team: 'avengers' },
      { id: 3, name: 'Bloodyllips', team: 'avengers' },
      { id: 4, name: 'Mr Bu Moverse', team: 'avengers' },
      { id: 5, name: 'Piranhaelli', team: 'avengers' },
    ];
  }
}
