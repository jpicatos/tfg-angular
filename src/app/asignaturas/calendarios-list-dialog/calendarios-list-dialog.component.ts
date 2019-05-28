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
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { AnadirCalendarioDialogComponent } from '../anadir-calendario-dialog/anadir-calendario-dialog.component';

@Component({
  selector: 'app-calendarios-list-dialog',
  templateUrl: './calendarios-list-dialog.component.html',
  styleUrls: ['./calendarios-list-dialog.component.scss']
})
export class CalendariosListDialogComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'fecha_ini', 'fecha_fin', 'actions'];
  dataSource
  constructor(
    public dialogRef: MatDialogRef<CalendariosListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public calendarios: Calendario[],
    private asignaurasService: AsignaturasService,
    public dialog: MatDialog,
    private avisosService: AvisosService) {

    this.dataSource = this.calendarios;
  }
  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  reloadCalendarios() {
    this.asignaurasService.getAllCalendarios().subscribe(calendarios => {
      this.dataSource = calendarios;
    })
  }
  deleteCalendario(calendario){
    this.asignaurasService.deleteCalendario(calendario).subscribe(()=>{
      this.avisosService.enviarMensaje("Calendario eliminado correctamente")
      this.reloadCalendarios()
    })
  }
  openAnadirCalendario(calendario): void {
    const dialogRef = this.dialog.open(AnadirCalendarioDialogComponent, {
      width: '600px',
      data: calendario
    });

    dialogRef.afterClosed().subscribe(result => {
      this.reloadCalendarios();
    });
  }

}
