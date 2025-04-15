import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./pages/products/products.page').then((m) => m.ProductsPage),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.page').then((m) => m.AboutPage),
  },
  {
    path: 'career',
    loadComponent: () =>
      import('./pages/career/career.page').then((m) => m.CareerPage),
  },
  {
    path: 'kontact',
    loadComponent: () =>
      import('./pages/kontact/kontact.page').then((m) => m.KontactPage),
  },
];
