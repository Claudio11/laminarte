import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SiteModule } from './container-components/site/site.module';

import { MenuService } from './services/menu-service/menu.service';
import { AppComponent } from './app.component';
import { AppRouteModule } from './app.route';
import { SectionDirective } from './directives/section/section.directive';

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
    SiteModule
  ],
  providers: [
    MenuService
  ],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
