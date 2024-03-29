import { Component, OnInit } from '@angular/core';
import { FakeProductService, ProductService } from '@home/services/hero-squad';
import { Product } from '@shared/models/Product';

@Component({
  selector: 'app-product-providers',
  templateUrl: './product-providers.component.html',
  styleUrls: ['./product-providers.component.scss'],
  providers: [
    {
      provide: ProductService,
      useClass: FakeProductService,
    },
  ],
})
export class ProductProvidersComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProduct();
  }
}
