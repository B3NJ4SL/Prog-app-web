import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'pizza',
    loadChildren: () => import('./pizza/pizza.module').then( m => m.PizzaPageModule)
  },
  {
    path: 'despacho',
    loadChildren: () => import('./despacho/despacho.module').then( m => m.DespachoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
