import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';

import { MainComponent } from './main/main.component';
import { NewProductDataComponent } from './new-product-data/new-product-data.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'catalog/add', component: NewProductDataComponent },
  { path: 'catalog/edit/:id', component: NewProductDataComponent },


  { path: '**', redirectTo: '/main' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
