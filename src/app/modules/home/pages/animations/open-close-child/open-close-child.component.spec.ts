import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCloseChildComponent } from './open-close-child.component';

describe('OpenCloseChildComponent', () => {
  let component: OpenCloseChildComponent;
  let fixture: ComponentFixture<OpenCloseChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpenCloseChildComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenCloseChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
