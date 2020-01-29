import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import(`./home/home.module`).then(m => m.HomeModule) },
  { path: 'dashboard', loadChildren: () => import(`./dashboard/dashboard.module`).then(m => m.DashboardModule) },
  { path: 'products', loadChildren: () => import(`./products/products.module`).then(m => m.ProductsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
