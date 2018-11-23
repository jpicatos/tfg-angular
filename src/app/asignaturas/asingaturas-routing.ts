import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignaturasListComponent } from './asignaturas-list/asignaturas-list.component';
import { AsignaturaDetailsComponent } from './asignatura-details/asignatura-details.component';
import { AnadirAsignaturaComponent } from './anadir-asignatura/anadir-asignatura.component';
import { ImportarAsignaturasComponent } from './importar-asignaturas/importar-asignaturas.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: AsignaturasListComponent, data: { title: 'Asignaturas' } },
      { path: 'asignaturas', component: AsignaturasListComponent, data: { title: 'Asignaturas' } },
      { path: 'asignaturas/:id', component: AsignaturaDetailsComponent },
      { path: 'add-asignatura', component: AnadirAsignaturaComponent },
      { path: 'edit-asignatura/:id', component: AnadirAsignaturaComponent },
      { path: 'importar-asignaturas', component: ImportarAsignaturasComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
