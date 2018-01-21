import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        children: [
          {
            path: 'public',
            //pathMatch: 'full',
            //canActivate: [],
            loadChildren: './container-components/site/site.module#SiteModule'
          },
          {
            path: '**',
            pathMatch: 'full',
            redirectTo: 'public'
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouteModule { }
