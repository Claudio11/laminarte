import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { Product } from '../../models/product.model';

@Injectable()
export class ProductService {

  constructor() { }

  get() {
    // For now emulating the http request....
    const products: Product[] = [
      new Product('deco', 'Laminarte deco', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit eleifend ligula eget pharetra. Nunc suscipit tellus sit amet odio ornare, in varius nulla imperdiet. Etiam sed interdum augue, vel luctus purus. Morbi id turpis nisl. Sed dignissim sapien quis enim varius, at suscipit mauris bibendum.', '/assets/img/products/deco.jpg', ['/assets/img/products/deco.jpg']),
      new Product('fest', 'Laminarte fest', 'Nulla vel consectetur lorem. Integer in rutrum ligula, at interdum enim. Nulla in ante vitae purus eleifend tempus. Vivamus justo purus, efficitur eu elit in, ultrices condimentum magna.', '/assets/img/products/fest.jpg', ['/assets/img/products/fest.jpg']),
      new Product('digital', 'Laminarte digital', 'Cras faucibus ante eros, id blandit sapien porttitor eu. Phasellus a tincidunt lacus, et accumsan mauris. Donec viverra varius dui mollis elementum. Ut tincidunt, turpis ac eleifend auctor, diam lorem accumsan turpis, eu tempor lorem turpis in sem. Donec pharetra augue molestie, ullamcorper turpis eu, gravida quam.', '/assets/img/products/diseno_digital.jpg', ['/assets/img/products/diseno_digital.jpg']),
      new Product('carteleria', 'Laminarte carteleria', 'In in interdum lectus. Ut placerat ultrices elit, feugiat dapibus neque facilisis vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec est a sem commodo consectetur ut vitae leo.', '/assets/img/products/carteleria.jpg', ['/assets/img/products/carteleria.jpg']),
      new Product('tarjeteria', 'Laminarte tarjeteria', 'descripcion tarjeteria', '/assets/img/products/tarjeteria.jpg', ['/assets/img/products/tarjeteria.jpg']),
      new Product('personalizados', 'Laminarte personalizados', 'descripcion personalizados', '/assets/img/products/personalizados.jpg', ['/assets/img/products/personalizados.jpg']),
      new Product('imanes', 'Laminarte imanes', 'descripcion imanes', '/assets/img/products/imanes.jpg', ['/assets/img/products/imanes.jpg']),
      new Product('vinilos', 'Laminarte vinilos', 'descripcion vinilos', '/assets/img/products/vinilos.jpg', ['/assets/img/products/vinilos.jpg']),
      new Product('sellos', 'Laminarte sellos', 'descripcion sellos', '/assets/img/products/sellos.jpg', ['/assets/img/products/sellos.jpg']),
      new Product('regalos', 'Laminarte regalos', 'descripcion regalos', '/assets/img/products/regalos_personalizados.jpg', ['/assets/img/products/regalos_personalizados.jpg']),
      new Product('foil', 'Laminarte foil', 'descripcion foil', '/assets/img/products/foil_stamping.jpg', ['/assets/img/products/foil_stamping.jpg'])
    ];
    return of(products);
  }

}
