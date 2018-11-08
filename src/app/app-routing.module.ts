import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { AsignaturaDetailsComponent } from './asignatura-details/asignatura-details.component';
import { AnadirEditarAsignaturaComponent } from './anadir-editar-asignatura/anadir-editar-asignatura.component';
import { AnadirAsignaturaComponent } from './anadir-asignatura/anadir-asignatura.component';

const routes: Routes = [
  { path: 'asignaturas', component: AsignaturasComponent},
  { path: 'asignaturas/:id', component: AsignaturaDetailsComponent},
  { path: 'add-asignatura', component: AnadirAsignaturaComponent},
  { path: 'add-asignatura/:id', component: AnadirAsignaturaComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}