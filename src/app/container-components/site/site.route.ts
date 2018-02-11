import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteComponent } from './site.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: SiteComponent,
    children: [
      // {
      //   path: 'home',
      //   component: HomeComponent
      // }
      {
        path: 'products/:id',
        component: ProductDetailComponent,
        // resolve: {
        //   product: EntityResolver
        // },
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class SiteRouteModule { }
