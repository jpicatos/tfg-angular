import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  { path: '', loadChildren: './asignaturas/asignaturas.module#AsignaturasModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
