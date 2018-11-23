import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', loadChildren: './asignaturas/asignaturas.module#AsignaturasModule' },
      { path: '', loadChildren: './auth/auth.module#AuthModule' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
