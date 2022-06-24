import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareCallbackMethodComponent } from './share-callback-method.component';

describe('ShareCallbackMethodComponent', () => {
  let component: ShareCallbackMethodComponent;
  let fixture: ComponentFixture<ShareCallbackMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareCallbackMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareCallbackMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
