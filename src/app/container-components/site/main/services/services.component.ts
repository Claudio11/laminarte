import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../../../models/product.model';

@Component({
  selector: 'laminarte-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  @Input() products: Product[] = [];

  constructor() { }

  ngOnInit() {
  }

}
