import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {ListCurrencyComponent} from './list-currency/list-currency.component';
import {DetailCurrencyComponent} from './detail-currency/detail-currency.component';
import {LayoutComponent} from './layout/layout.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ListCurrencyComponent
      },
      {
        path: 'currency/:id',
        component: DetailCurrencyComponent,
      }
    ]
  }
];
export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, {
  preloadingStrategy: PreloadAllModules
});
