import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureInjectionComponent } from './structure-injection.component';

describe('StructureInjectionComponent', () => {
  let component: StructureInjectionComponent;
  let fixture: ComponentFixture<StructureInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructureInjectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
