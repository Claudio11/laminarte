import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../../services/product-service/product.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'laminarte-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  private products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.get().subscribe(products => this.products = products);
  }

}
