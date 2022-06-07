import { HeroService } from '@home/services/hero';
import { FavoriteHeroesComponent } from './favorite-heroes.component';

describe('FavoriteHeroesComponent', () => {
  let component: FavoriteHeroesComponent;
  beforeEach(() => {
    component = new FavoriteHeroesComponent(new HeroService());
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
