import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./core/components/home/home.component').then(
        (c) => c.HomeComponent
      ),
  },
  {
    path: 'works',
    loadComponent: () =>
      import('./core/components/works/works.component').then(
        (c) => c.WorksComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./core/components/about/about.component').then(
        (c) => c.AboutComponent
      ),
  },
  {
    path: 'contacts',
    loadComponent: () =>
      import('./core/components/contacts/contacts.component').then(
        (c) => c.ContactsComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./core/components/notfound/notfound.component').then(
        (c) => c.NotfoundComponent
      ),
  },
];
