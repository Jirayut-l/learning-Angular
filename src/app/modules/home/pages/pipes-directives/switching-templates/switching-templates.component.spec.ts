import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchingTemplatesComponent } from './switching-templates.component';

describe('SwitchingTemplatesComponent', () => {
  let component: SwitchingTemplatesComponent;
  let fixture: ComponentFixture<SwitchingTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchingTemplatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchingTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
