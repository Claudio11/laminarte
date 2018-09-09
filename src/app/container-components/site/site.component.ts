import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, style, group, animate, state, sequence, animateChild } from '@angular/animations';

import { MenuService } from '../../services/menu-service/menu.service';
import { SectionsDataService } from '../../services/sections-data/sections-data.service';
import { MenuItem } from "../../models/menu-item.model";

const detailTransition = trigger('detailTransition', [
  // TODO: Research angular animations more in depth. It's not finding :leave in child, forcing { optional: true }.
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
    query(':enter', style({ transform: 'translateX(100%)' })),
    sequence([
      //TODO: => is not able to call animateChild why?
      query(':leave', animateChild(), { optional: true }),
      //query(':enter', animateChild(), { optional: true }),

      query(':leave', [
        style({ position: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
      ], { optional: true }),
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' })),
      ]),

      //query(':enter', style({ transform: 'translateX(100%)' })),


    ])
  ])
]);

@Component({
  selector: 'laminarte-site',
  templateUrl: './site.component.html',
  animations: [detailTransition],
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  constructor(
    public menuService: MenuService,
    public sectionsDataService: SectionsDataService
  ) {
    this.sectionsDataService.menuItems = [ // Hardcoding it for now, later make an observable data service for this.
      new MenuItem('inicio', '', '', 'Inicio'),
      new MenuItem('nosotros', 'Acerca de laminarte', 'Te contamos quiénes somos, a qué nos dedicamos y cuáles son nuestros objetivos.', 'Nosotros'),
      new MenuItem('productos', 'Productos', 'Nuestros productos son 100% personalizados!', 'Productos'),
      new MenuItem('servicios', 'Servicios', 'Contamos con una amplia gama de servicios, te invitamos a concerlos.', 'Servicios'),
      new MenuItem('contacto', '', '', 'Contacto'),
    ];
  }

  ngOnInit() {
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

}
