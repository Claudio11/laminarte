// tslint:disable:max-line-length
// tslint:disable:quotemark
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MnFullpageModule } from 'ngx-fullpage';

import { HomeComponent } from './home/home.component';
import { MenuContainerComponent } from './menu-container/menu-container.component';
import { MenuOpenerComponent } from '../../presentational-components/menu-opener/menu-opener.component';
import { SiteRouteModule } from './site.route';
import { SiteComponent } from './site.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { CardComponent } from '../../presentational-components/card/card.component';

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
    CardComponent
  ],
  exports: [
  ],
  entryComponents: [
  ]
})
export class SiteModule {
}
