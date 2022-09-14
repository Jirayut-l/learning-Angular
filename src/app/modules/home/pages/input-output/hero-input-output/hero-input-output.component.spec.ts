import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroInputOutputComponent } from './hero-input-output.component';

describe('HeroInputOutputComponent', () => {
  let component: HeroInputOutputComponent;
  let fixture: ComponentFixture<HeroInputOutputComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroInputOutputComponent],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(HeroInputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
