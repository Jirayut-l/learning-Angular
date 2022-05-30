import { Injectable } from '@angular/core';
import { Hero } from 'src/app/shared/models/Hero';
import { HeroService } from '../hero';

@Injectable({
  providedIn: 'root'
})
export class HeroFavoriteService extends HeroService {

  constructor() {
    super();
  }

  override getHeroes(): Hero[] {
    return super.getHeroes().slice(0, 3);
  }
}
