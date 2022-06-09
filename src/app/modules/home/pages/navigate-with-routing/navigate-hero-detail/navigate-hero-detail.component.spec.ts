import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateHeroDetailComponent } from './navigate-hero-detail.component';

describe('NavigateHeroDetailComponent', () => {
  let component: NavigateHeroDetailComponent;
  let fixture: ComponentFixture<NavigateHeroDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigateHeroDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigateHeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
