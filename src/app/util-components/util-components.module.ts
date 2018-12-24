import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorarioComponent } from "./horario/horario.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HorarioComponent
  ],
  exports: [
    HorarioComponent
  ]
})
export class UtilComponentsModule { }
