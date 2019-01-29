import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EleccionListComponent } from './eleccion-list/eleccion-list.component';
import { ResizableModule } from 'angular-resizable-element';
import { UtilComponentsModule } from "../util-components/util-components.module";


// Módulo compartido con los componentes de Angular Material
import { MaterialModule } from '../material/material.module';

import { routing } from './eleccion-docencia-routing';

import { FullCalendarModule } from 'ng-fullcalendar';
import { EleccionService } from '../services/eleccion.service';


@NgModule({
  imports: [
    CommonModule,
    routing,
    ResizableModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    UtilComponentsModule
  ],
  providers: [
    EleccionService
  ],
  declarations: [
    EleccionListComponent
  ]
})
export class EleccionDocenciaModule { }
