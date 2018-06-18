import { Component, OnInit, NgZone, HostListener } from '@angular/core';
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

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.mnFullpageService.reBuild();
  }

  constructor(
    private productService: ProductService,
    private mnFullpageService: MnFullpageService,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.productService.get().subscribe(products => {
      this.products = products;
      this.ngZone.onStable.first().subscribe(() => {
        console.log(this.mnFullpageService);

        //TODO => Add fix to "getPaddings" issue, (for now working because library is modified manually
        // (https://github.com/alvarotrigo/fullPage.js/commit/f0bcdd59393723d075b6c9544a69a434d510d3a5) from https://github.com/alvarotrigo/fullPage.js/issues/3095,
        // to avoid blocking of further development).
        this.mnFullpageService.reBuild(); // Here failing because of "getPaddings is not defined" issue.
      });
    });
  }

  ngOnDestroy() {
    this.mnFullpageService.destroy('all');
  }

}
