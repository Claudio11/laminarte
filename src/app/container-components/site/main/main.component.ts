import { Component, OnInit, NgZone, HostListener } from '@angular/core';
import { ProductService } from '../../../services/product-service/product.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'laminarte-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public products: Product[] = [];

  @HostListener('window:resize', ['$event'])
  onResize(event) {

  }

  constructor(
    private productService: ProductService,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.productService.get().subscribe(products => {
      this.products = products;
    });
  }

  ngOnDestroy() {

  }

}
