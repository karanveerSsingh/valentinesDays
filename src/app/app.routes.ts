import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/valentines',
    pathMatch: 'full',
  },

  // 🔓 PUBLIC ROUTES (NOT LOGGED IN)
  {
    path: 'valentines',
    loadComponent: () =>
      import('./modules/components/valentines-component/valentines-component').then(
        (m) => m.ValentinesComponent,
      ),
  },
];
