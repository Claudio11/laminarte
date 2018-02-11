import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteComponent } from './site.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: SiteComponent,
    children: [
      {
        path: '',
        component: MainComponent
      },
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
