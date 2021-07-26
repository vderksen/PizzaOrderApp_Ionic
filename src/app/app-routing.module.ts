import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MenuPage } from './menu/menu.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'menu',
    component: MenuPage
  },
  {
    path: 'current-order',
    loadChildren: () => import('./current-order/current-order.module').then( m => m.CurrentOrderPageModule)
  },
  {
    path: 'previous-orders',
    loadChildren: () => import('./previous-orders/previous-orders.module').then( m => m.PreviousOrdersPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
