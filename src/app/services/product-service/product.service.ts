import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { Product } from '../../models/product.model';

@Injectable()
export class ProductService {

  constructor() { }

  get() {
    // For now emulating the http request....
    const products: Product[] = [
      new Product('deco', 'Laminarte deco', 'descripcion deco', 'thumbnail1.png', ['image1.png']),
      new Product('fest', 'Laminarte fest', 'descripcion fest', 'thumbnail1fest.png', ['image1fest.png']),
      new Product('digital', 'Laminarte digital', 'descripcion digital', 'thumbnail1digital.png', ['image1digital.png']),
      new Product('carteleria', 'Laminarte carteleria', 'descripcion carteleria', 'thumbnail1carteleria.png', ['image1carteleria.png']),
      new Product('tarjeteria', 'Laminarte tarjeteria', 'descripcion tarjeteria', 'thumbnail1tarjeteria.png', ['image1tarjeteria.png']),
      new Product('personalizados', 'Laminarte personalizados', 'descripcion personalizados', 'thumbnail1personalizados.png', ['image1personalizados.png']),
      new Product('imanes', 'Laminarte imanes', 'descripcion imanes', 'thumbnail1imanes.png', ['image1imanes.png']),
      new Product('vinilos', 'Laminarte vinilos', 'descripcion vinilos', 'thumbnail1vinilos.png', ['image1vinilos.png']),
      new Product('sellos', 'Laminarte sellos', 'descripcion sellos', 'thumbnail1sellos.png', ['image1sellos.png']),
      new Product('regalos', 'Laminarte regalos', 'descripcion regalos', 'thumbnail1regalos.png', ['image1regalos.png']),
      new Product('foil', 'Laminarte foil', 'descripcion foil', 'thumbnail1foil.png', ['image1foil.png'])
    ];
    return of(products);
  }

}
