import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from './../auth/auth-guard.service';
import { EleccionListComponent } from './eleccion-list/eleccion-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      // { path: 'profesores', component: ProfesoresListComponent, data: { title: 'Profesores' }, canActivate: [AuthGuard] }
      { path: 'eleccion-docencia', component: EleccionListComponent, data: { title: 'Elección' }, canActivate: [AuthGuard] }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
