import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreviousOrdersPage } from './previous-orders.page';
import { MenuPage } from '../menu/menu.page';

const routes: Routes = [
  {
    path: '',
    component: PreviousOrdersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreviousOrdersPageRoutingModule {}
