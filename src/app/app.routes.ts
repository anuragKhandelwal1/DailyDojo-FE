import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.routes').then(m => m.routes)
  },
  {
    path: 'habits',
    loadChildren: () =>
      import('./habits/habits.routes').then((m) => m.routes),
  },
];
