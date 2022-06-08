import { Injectable } from '@angular/core';
import { Hero } from '@shared/models/Hero';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class EnrichHeroDataService implements InMemoryDbService {
  public createDb(): { heroes: Hero[] } {
    const heroes: Hero[] = [
      { id: 1, name: 'Boothstomper', team: '' },
      { id: 2, name: 'Drogfisher', team: '' },
      { id: 3, name: 'Bloodyllips', team: '' },
      { id: 4, name: 'Mr Bu Moverse', team: '' },
      { id: 5, name: 'Piranhaelli', team: '' },
    ];
    return { heroes }
  }
}
