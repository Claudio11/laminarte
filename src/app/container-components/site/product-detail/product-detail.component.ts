import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, style, group, animate, state } from '@angular/animations';

const productDetailTransition = trigger('productDetailTransition', [
  transition(':enter', [
    // query(':enter', style({ opacity: 0 }), { optional: true }),
    // query(':leave', style({ opacity: 1 }), { optional: true }),
    // group([  // block executes in parallel
    //   query(':enter', [
    //style({ opacity: 1 }),
    // animate('2s ease-in-out', style({ opacity: 1 }))
    query(':enter', [
      style({ opacity: 0 }),
      animate('2s ease-in-out', style({ opacity: 1 }))
    ], { optional: true }),
    //   ], { optional: true }),
    //   query(':leave', [
    //     //style({ opacity: 0 }),
    //     animate('2s ease-in-out', style({ opacity: 0 }))
    //   ], { optional: true })
    // ])
  ]),
  transition(':leave', [
    // query(':leave', style({ opacity: 1 })
    //   , { optional: true }),
    // group([  // block executes in parallel
    //   query(':enter', [
    //     style({ opacity: 1 }),
    //     animate('2s ease-in-out', style({ opacity: 1 }))
    //   ], { optional: true }),
    //   query(':leave', [
    //     style({ opacity: 1 }),
    //     animate('2s ease-in-out', style({ opacity: 1 }))
    //   ], { optional: true })
    // ])

    query(':leave', [
      style({ opacity: 1 }),
      animate('2s ease-in-out', style({ opacity: 0 }))
    ], { optional: true }),
  ])
]);

@Component({
  selector: 'laminarte-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
