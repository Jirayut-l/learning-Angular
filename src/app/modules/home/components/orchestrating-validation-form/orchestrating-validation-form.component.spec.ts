import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrchestratingValidationFormComponent } from './orchestrating-validation-form.component';

describe('OrchestratingValidationFormComponent', () => {
  let component: OrchestratingValidationFormComponent;
  let fixture: ComponentFixture<OrchestratingValidationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrchestratingValidationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrchestratingValidationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
