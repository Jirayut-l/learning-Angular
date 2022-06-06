import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/models/Product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public getProduct(): Product[] {
    return [
      { productId: 1, name: 'Memory Card', price: 500 },
      { productId: 2, name: 'Pen Drive', price: 750 },
      { productId: 3, name: 'Power Bank', price: 100 },
    ]
  }
}
