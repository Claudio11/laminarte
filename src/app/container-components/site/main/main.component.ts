import { Component, OnInit, NgZone } from '@angular/core';
import { MnFullpageService } from 'ngx-fullpage';

import { ProductService } from '../../../services/product-service/product.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'laminarte-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private products: Product[] = [];

  constructor(
    private productService: ProductService,
    private mnFullpageService: MnFullpageService,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.productService.get().subscribe(products => {
      this.products = products;
      this.ngZone.onStable.first().subscribe(() => {
        //this.mnFullpageService.reBuild(); // Still failing because of "getPaddings is not defined" issue.
      });
    });
  }

  ngOnDestroy() {
    this.mnFullpageService.destroy('all');
  }

}
