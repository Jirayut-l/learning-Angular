import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { NavigateHeroDetailComponent } from './navigate-hero-detail.component';

describe('NavigateHeroDetailComponent', () => {
  let component: NavigateHeroDetailComponent;
  let activatedRoute: ActivatedRoute;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigateHeroDetailComponent],
    }).compileComponents();
  });
  beforeEach(() => {
    component = new NavigateHeroDetailComponent(activatedRoute);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
