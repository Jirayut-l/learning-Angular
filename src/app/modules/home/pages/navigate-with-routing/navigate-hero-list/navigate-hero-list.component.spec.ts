import { TestBed } from '@angular/core/testing';
import { EnrichHeroService } from '@home/services/enrich-components';
import { NavigateHeroListComponent } from './navigate-hero-list.component';

describe('NavigateHeroListComponent', () => {
  let component: NavigateHeroListComponent;
  let enrichHeroService: EnrichHeroService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigateHeroListComponent],
    }).compileComponents();
  });
  beforeEach(() => {
    component = new NavigateHeroListComponent(enrichHeroService);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
