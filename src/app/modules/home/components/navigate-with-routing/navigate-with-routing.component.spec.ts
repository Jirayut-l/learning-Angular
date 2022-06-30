import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigateWithRoutingComponent } from './navigate-with-routing.component';

describe('NavigateWithRoutingComponent', () => {
  let component: NavigateWithRoutingComponent;
  let fixture: ComponentFixture<NavigateWithRoutingComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigateWithRoutingComponent]
    })
      .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(NavigateWithRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
