import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnrichComponentsComponent } from './enrich-components.component';

describe('EnrichComponentsComponent', () => {
  let component: EnrichComponentsComponent;
  let fixture: ComponentFixture<EnrichComponentsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnrichComponentsComponent],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(EnrichComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
