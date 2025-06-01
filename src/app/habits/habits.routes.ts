import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./habit-list/habit-list.component').then(m => m.HabitListComponent),
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./habit-create/habit-create.component').then(m => m.HabitCreateComponent),
  },
];
