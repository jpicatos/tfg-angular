import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignaturasListComponent } from './asignaturas-list/asignaturas-list.component';
import { AsignaturaDetailsComponent } from './asignatura-details/asignatura-details.component';
import { AnadirAsignaturaComponent } from './anadir-asignatura/anadir-asignatura.component';
import { ImportarAsignaturasComponent } from './importar-asignaturas/importar-asignaturas.component';
import { AuthGuardService as AuthGuard } from './../auth/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: AsignaturasListComponent, data: { title: 'Asignaturas' }, canActivate: [AuthGuard] },
      { path: 'asignaturas', component: AsignaturasListComponent, data: { title: 'Asignaturas' }, canActivate: [AuthGuard] },
      { path: 'asignaturas/:id', component: AsignaturaDetailsComponent, canActivate: [AuthGuard] },
      { path: 'add-asignatura', component: AnadirAsignaturaComponent, canActivate: [AuthGuard] },
      { path: 'edit-asignatura/:id', component: AnadirAsignaturaComponent, canActivate: [AuthGuard] },
      { path: 'importar-asignaturas', component: ImportarAsignaturasComponent, canActivate: [AuthGuard] }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
