// tslint:disable:max-line-length
// tslint:disable:quotemark
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MnFullpageModule } from 'ngx-fullpage';

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

@NgModule({
  imports: [
    CommonModule,
    SiteRouteModule,
    MnFullpageModule.forRoot()
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
    ServicesComponent
  ],
  exports: [
  ],
  entryComponents: [
  ]
})
export class SiteModule {
}
