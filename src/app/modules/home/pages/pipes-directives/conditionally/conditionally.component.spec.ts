import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConditionallyComponent } from './conditionally.component';

describe('ConditionallyComponent', () => {
  let component: ConditionallyComponent;
  let fixture: ComponentFixture<ConditionallyComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConditionallyComponent]
    })
      .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
