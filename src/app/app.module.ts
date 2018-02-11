import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { MnFullpageModule } from 'ngx-fullpage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SiteModule } from './container-components/site/site.module';

import { MenuService } from './services/menu-service/menu.service';
import { AppComponent } from './app.component';
import { AppRouteModule } from './app.route';
import { SectionDirective } from './directives/section/section.directive';
import { ProductService } from './services/product-service/product.service';

@NgModule({
  declarations: [
    AppComponent,
    SectionDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouteModule,
    SiteModule,
    BrowserAnimationsModule
    //MnFullpageModule.forRoot()
  ],
  providers: [
    MenuService,
    ProductService
  ],
  exports: [
    //MnFullpageModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
