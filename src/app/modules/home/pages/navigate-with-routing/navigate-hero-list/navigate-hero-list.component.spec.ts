import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateHeroListComponent } from './navigate-hero-list.component';

describe('NavigateHeroListComponent', () => {
  let component: NavigateHeroListComponent;
  let fixture: ComponentFixture<NavigateHeroListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigateHeroListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigateHeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
