import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleAnimationPageComponent } from './toggle-animation-page.component';

describe('ToggleAnimationPageComponent', () => {
  let component: ToggleAnimationPageComponent;
  let fixture: ComponentFixture<ToggleAnimationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleAnimationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleAnimationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
