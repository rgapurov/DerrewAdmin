import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { HomeComponent } from './modules/dashboard/home/home.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginGuard } from './core/guards/login.guard';
import { CategoriesComponent } from './modules/dashboard/gelsin/categories/categories.component';
import { ProductsComponent } from './modules/dashboard/gelsin/products/products.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  {
    path: 'login',
    canActivate:[LoginGuard],
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path: 'home',
    component: DefaultLayoutComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
  {
    path: 'categories',
    component: DefaultLayoutComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path: '',
        component: CategoriesComponent,
      },
    ],
  },
  {
    path: 'products',
    component: DefaultLayoutComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path: '',
        component: ProductsComponent,
      },
    ],
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
