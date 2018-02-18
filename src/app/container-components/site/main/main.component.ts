import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../../services/product-service/product.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'laminarte-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.get().subscribe(products => {
      this.products = products;
      //this.mnFullpageService.reBuild();
    });
  }

}
