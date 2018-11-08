import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { AsignaturaDetailsComponent } from './asignatura-details/asignatura-details.component';

const routes: Routes = [
  { path: 'asignaturas', component: AsignaturasComponent},
  { path: 'asignaturas/:id', component: AsignaturaDetailsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}