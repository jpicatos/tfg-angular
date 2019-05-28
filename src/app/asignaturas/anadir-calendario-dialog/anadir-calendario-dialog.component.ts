import { Component, OnInit, Input, Inject } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Asignatura } from '../../models/asignatura';
import { AsignaturasService } from '../../services/asignaturas.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Desdoble } from '../../models/desdoble';
import { Horario } from '../../models/horario';
import { Calendario } from '../../models/calendario';
import { MenuToolbarComponent } from '../../menu-toolbar/menu-toolbar.component';
import { AvisosService } from '../../services/avisos.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-anadir-calendario-dialog',
  templateUrl: './anadir-calendario-dialog.component.html',
  styleUrls: ['./anadir-calendario-dialog.component.scss']
})
export class AnadirCalendarioDialogComponent implements OnInit {
  fecha_ini: Date;
  fecha_fin: Date;
  constructor(
    public dialogRef: MatDialogRef<AnadirCalendarioDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public calendario: Calendario,
    private asignaurasService: AsignaturasService,
    private avisosService: AvisosService) {

    if (!this.calendario) {
      this.calendario = new Calendario;
    }
    else{
      this.fecha_ini = new Date(this.calendario.fecha_ini);
      this.fecha_fin = new Date(this.calendario.fecha_fin)
    }
  }
  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  checkAndSave() {
    if (this.calendario.nombre && this.calendario.fecha_fin && this.calendario.fecha_ini) {
      this.save();
    }
    else {
      this.avisosService.enviarMensaje("Rellena todos los campos antes de continuar")
    }
  }
  save() {
    if (this.calendario.id !== undefined) {
      this.asignaurasService.updateCalendario(this.calendario).subscribe(() => {
        this.avisosService.enviarMensaje("Calendario editado correctamente")
        this.dialogRef.close();
      })
    }
    else {
      this.asignaurasService.createCalendario(this.calendario).subscribe(() => {
        this.avisosService.enviarMensaje("Calendario creado correctamente")
        this.dialogRef.close();
      })
    }
  }
}
