import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductProvidersComponent } from './product-providers.component';

describe('ProductProvidersComponent', () => {
  let component: ProductProvidersComponent;
  let fixture: ComponentFixture<ProductProvidersComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductProvidersComponent],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(ProductProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
