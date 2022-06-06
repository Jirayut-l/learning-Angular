import { Injectable } from '@angular/core';
import { Hero } from '@models/Hero';

@Injectable({
  providedIn: 'root'
})
export class EnrichHeroDataService {
  public createDb(): Hero[] {
    return [
      { id: 1, name: 'Boothstomper', team: '' },
      { id: 2, name: 'Drogfisher', team: '' },
      { id: 3, name: 'Bloodyllips', team: '' },
      { id: 4, name: 'Mr Bu Moverse', team: '' },
      { id: 5, name: 'Piranhaelli', team: '' },
    ];
  }
}
