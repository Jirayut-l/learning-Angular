import { Injectable } from '@angular/core';
import { Product } from '@shared/models/Product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class FakeProductService extends ProductService {
  override getProduct(): Product[] {
    return [
      { productId: 1, name: 'Memory Card', price: 500 },
      { productId: 2, name: 'Pen Drive', price: 750 },
      { productId: 3, name: 'Power Bank', price: 100 },
      { productId: 4, name: 'Laptop', price: 10000 },
      { productId: 5, name: 'Desktop', price: 25600 },
    ]
  }
}
