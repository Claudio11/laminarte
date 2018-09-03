import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SiteModule } from './container-components/site/site.module';

import { MenuService } from './services/menu-service/menu.service';
import { AppComponent } from './app.component';
import { AppRouteModule } from './app.route';
import { ProductService } from './services/product-service/product.service';
import { SectionComponent } from './presentational-components/section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouteModule,
    SiteModule,
    BrowserAnimationsModule
  ],
  providers: [
    MenuService,
    ProductService
  ],
  exports: [
    SectionComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
