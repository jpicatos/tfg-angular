import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Módulo compartido con los componentes de Angular Material
import { MaterialModule } from '../material/material.module';

import { routing } from './profesores-routing';
import { ProfesoresListComponent } from './profesores-list/profesores-list.component';
import { ProfesoresService } from '../services/profesores.service';
import { ProfesoresDetailsComponent } from './profesores-details/profesores-details.component';
import { AnadirProfesorComponent } from './anadir-profesor/anadir-profesor.component';
import { ImportarProfesoresComponent } from './importar-profesores/importar-profesores.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProfesoresListComponent,
    ProfesoresDetailsComponent,
    AnadirProfesorComponent,
    ImportarProfesoresComponent,
    ChangePasswordComponent
  ],
  providers: [ProfesoresService],
})
export class ProfesoresModule { }
