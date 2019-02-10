import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorarioComponent } from "./horario/horario.component";
import { FullCalendarComponent } from './full-calendar/full-calendar.component';
import { FullCalendarModule } from 'ng-fullcalendar';
import { SearchSidenavComponent } from './search-sidenav/search-sidenav.component';
import { MaterialModule } from "../material/material.module";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FullCalendarModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HorarioComponent,
    FullCalendarComponent,
    SearchSidenavComponent
  ],
  exports: [
    HorarioComponent,
    FullCalendarComponent,
    SearchSidenavComponent
  ]
})
export class UtilComponentsModule { }
