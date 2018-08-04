// tslint:disable:max-line-length
// tslint:disable:quotemark
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './main/home/home.component';
import { MenuContainerComponent } from './menu-container/menu-container.component';
import { MenuOpenerComponent } from '../../presentational-components/menu-opener/menu-opener.component';
import { SiteRouteModule } from './site.route';
import { SiteComponent } from './site.component';
import { AboutComponent } from './main/about/about.component';
import { ProductsComponent } from './main/products/products.component';
import { ContactComponent } from './main/contact/contact.component';
import { CardComponent } from '../../presentational-components/card/card.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MainComponent } from './main/main.component';
import { BasicCardComponent } from '../../presentational-components/basic-card/basic-card.component';
import { ServicesComponent } from './main/services/services.component';
import { ScrollerDirective } from '../../directives/scroller/scroller.directive';
import { ScrollerItemDirective } from '../../directives/scroller/scroller-item/scroller-item.directive';

@NgModule({
  imports: [
    CommonModule,
    SiteRouteModule
  ],
  declarations: [
    HomeComponent,
    MenuContainerComponent,
    MenuOpenerComponent,
    SiteComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
    CardComponent,
    ProductDetailComponent,
    MainComponent,
    BasicCardComponent,
    ServicesComponent,
    ScrollerDirective,
    ScrollerItemDirective
  ],
  exports: [
    ScrollerDirective,
    ScrollerItemDirective
  ],
  entryComponents: [
  ]
})
export class SiteModule {
}
