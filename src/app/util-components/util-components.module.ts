import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorarioComponent } from "./horario/horario.component";
import { FullCalendarComponent } from './full-calendar/full-calendar.component';
import { FullCalendarModule } from 'ng-fullcalendar';

@NgModule({
  imports: [
    CommonModule,
    FullCalendarModule
  ],
  declarations: [
    HorarioComponent,
    FullCalendarComponent,
  ],
  exports: [
    HorarioComponent,
    FullCalendarComponent
  ]
})
export class UtilComponentsModule { }
