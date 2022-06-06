import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnrichHeroListComponent } from './enrich-hero-list.component';

describe('EnrichHeroListComponent', () => {
  let component: EnrichHeroListComponent;
  let fixture: ComponentFixture<EnrichHeroListComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnrichHeroListComponent]
    })
      .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(EnrichHeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
