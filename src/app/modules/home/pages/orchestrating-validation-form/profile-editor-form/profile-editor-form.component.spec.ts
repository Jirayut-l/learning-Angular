import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditorFormComponent } from './profile-editor-form.component';

describe('ProfileEditorFormComponent', () => {
  let component: ProfileEditorFormComponent;
  let fixture: ComponentFixture<ProfileEditorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileEditorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
