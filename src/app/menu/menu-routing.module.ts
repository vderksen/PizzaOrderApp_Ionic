import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentOrderPage } from '../current-order/current-order.page';

import { MenuPage } from './menu.page';
import { HomePage } from '../home/home.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage
  },
  {
    path: '/current-order',
    component: CurrentOrderPage
  },
  {
    path: 'home',
    component: HomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
