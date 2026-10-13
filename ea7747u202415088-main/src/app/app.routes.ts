import { Routes } from '@angular/router';

/**
 * Application routes. Views are lazy loaded.
 *
 * @remarks `/` redirects to `/home`; unknown paths render the page-not-found view.
 * @author [Your Full Name]
 */
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadComponent: () =>
      import('./shared/presentation/components/layout/layout').then((m) => m.AppShellComponent)
  },
  {
    path: '**',
    loadComponent: () =>
      import('./shared/presentation/views/page-not-found/page-not-found').then((m) => m.PageNotFoundView)
  }
];
