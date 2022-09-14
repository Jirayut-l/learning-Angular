import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAnimationComponent } from './about-animation.component';

describe('AboutAnimationComponent', () => {
  let component: AboutAnimationComponent;
  let fixture: ComponentFixture<AboutAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutAnimationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
