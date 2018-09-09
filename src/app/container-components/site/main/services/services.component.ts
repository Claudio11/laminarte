import { Component, OnInit, Input } from '@angular/core';

import { SectionComponent } from '../../../../presentational-components/section/section.component';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'laminarte-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent extends SectionComponent {

  @Input() products: Product[] = [];

  protected key: string = 'servicios';

}
