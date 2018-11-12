import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { AsignaturaDetailsComponent } from './asignatura-details/asignatura-details.component';
import { AnadirAsignaturaComponent } from './anadir-asignatura/anadir-asignatura.component';
import { ImportarAsignaturasComponent } from './importar-asignaturas/importar-asignaturas.component';

const routes: Routes = [
  { path: 'asignaturas', component: AsignaturasComponent, data: { title: 'Asignaturas' }},
  { path: 'asignaturas/:id', component: AsignaturaDetailsComponent},
  { path: 'add-asignatura', component: AnadirAsignaturaComponent},
  { path: 'edit-asignatura/:id', component: AnadirAsignaturaComponent},
  { path: 'importar-asignaturas', component: ImportarAsignaturasComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}