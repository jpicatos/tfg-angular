import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from './../auth/auth-guard.service';
import { ProfesoresListComponent } from './profesores-list/profesores-list.component';
import { ProfesoresDetailsComponent } from './profesores-details/profesores-details.component';
import { AnadirProfesorComponent } from './anadir-profesor/anadir-profesor.component';
import { ImportarProfesoresComponent } from './importar-profesores/importar-profesores.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  {
    path: '',
    children: [
      // { path: 'profesores', component: ProfesoresListComponent, data: { title: 'Profesores' }, canActivate: [AuthGuard] }
      { path: 'profesores', component: ProfesoresListComponent, data: { title: 'Profesores' }, canActivate: [AuthGuard] },
      { path: 'profesores/:id', component: ProfesoresDetailsComponent, canActivate: [AuthGuard] },
      { path: 'add-profesor', component: AnadirProfesorComponent, canActivate: [AuthGuard] },
      { path: 'edit-profesor/:id', component: AnadirProfesorComponent, canActivate: [AuthGuard] },
      { path: 'importar-profesores', component: ImportarProfesoresComponent, canActivate: [AuthGuard] },
      { path: 'change-password', component: ChangePasswordComponent, canActivate: [AuthGuard] }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
