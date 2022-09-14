import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameEditorFormComponent } from './name-editor-form.component';

describe('NameEditorFormComponent', () => {
  let component: NameEditorFormComponent;
  let fixture: ComponentFixture<NameEditorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NameEditorFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameEditorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
