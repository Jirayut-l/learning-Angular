import { HeroService } from '@home/services/hero';
import { HeroDetailService } from '@home/services/hero-detail';
import { HeroDetailComponent } from './hero-detail.component';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let heroDetailService: HeroDetailService;
  let heroService: HeroService;
  beforeEach(() => {
    heroService = new HeroService();
    heroDetailService = new HeroDetailService(heroService);
    component = new HeroDetailComponent(heroDetailService);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
