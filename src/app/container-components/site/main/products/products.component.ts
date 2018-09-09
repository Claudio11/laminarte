import { Component, OnInit, Input } from '@angular/core';

import { SectionComponent } from '../../../../presentational-components/section/section.component';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'laminarte-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends SectionComponent {

  @Input() products: Product[] = [];

  protected key: string = 'productos';

}
