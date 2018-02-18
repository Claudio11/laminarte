import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, style, group, animate, state, sequence, animateChild } from '@angular/animations';

import { MenuService } from '../../services/menu-service/menu.service';

const routerTransition = trigger('routerTransition', [
  // TODO: Research angular animations more in depth. It's not finding :leave in child, forcing { optional: true }.
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    query(':enter', style({ transform: 'translateX(100%)' })),
    sequence([
      //TODO: => is not able to call animateChild why?
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
        ], { optional: true }),
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ]),
      ]),
      query(':enter', animateChild()),
    ])
  ])
]);

@Component({
  selector: 'laminarte-site',
  templateUrl: './site.component.html',
  animations: [routerTransition],
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

}
