import { Component, OnInit, Input, Inject } from '@angular/core';
import { Title, disableDebugTools } from "@angular/platform-browser";
import { Asignatura } from '../../models/asignatura';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignaturasService } from '../../services/asignaturas.service';
import { ProfesoresService } from '../../services/profesores.service';
import { MenuToolbarComponent } from '../../menu-toolbar/menu-toolbar.component';
import { EliminarDialogComponent } from '../eliminar-dialog/eliminar-dialog.component';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { DialogDesdobleComponent } from '../dialog-desdoble/dialog-desdoble.component';

@Component({
  selector: 'app-asignatura-details',
  templateUrl: './asignatura-details.component.html',
  styleUrls: ['./asignatura-details.component.scss']
})
export class AsignaturaDetailsComponent implements OnInit {

  @Input() asignatura: Asignatura;
  loaded: boolean;
  displayedColumns: string[];
  profesorTeoria: string;
  profesorTeoriaUrl: string;
  profesorDesdoble: string;
  profesorDesdobleUrl: string;

  constructor(private angularService: AsignaturasService,
    private profesoresService: ProfesoresService, private dialog: MatDialog,
    private route: ActivatedRoute, private titleService: Title) {
    this.loaded = false;
    this.asignatura = new Asignatura;
  }

  ngOnInit() {
    this.displayedColumns = ['titles', 'data'];
    const id = + this.route.snapshot.paramMap.get('id');
    MenuToolbarComponent.updateTitle("Asignaturas");
    this.angularService.getAsignatura(id).subscribe(asignatura => {
      this.update(asignatura);
      console.log(this.asignatura);

      this.getProfesorName();

      this.loaded = true;
    });
  }

  update(asignatura) {
    this.asignatura = asignatura;
    this.titleService.setTitle(this.asignatura.nombre)
  }

  getProfesorName() {
    if (this.asignatura.docencia != null) {
      this.profesoresService.getProfesor(this.asignatura.docencia.profesor).subscribe(
        profesor => {
          this.profesorTeoria = profesor.usuario.first_name + ' ' + profesor.usuario.last_name;
          this.profesorTeoriaUrl = '/profesores/' + profesor.usuario.id;
        }
      );
    }
    else {
      this.profesorTeoria = "Sin docencia";
      this.profesorTeoriaUrl = '/eleccion-docencia/';
    }

    if (this.asignatura.desdobles.length && this.asignatura.desdobles[0].docencia != null) {
      this.profesoresService.getProfesor(this.asignatura.desdobles[0].docencia.profesor).subscribe(
        profesor => {
          this.profesorDesdoble = profesor.usuario.first_name + ' ' + profesor.usuario.last_name;
          this.profesorDesdobleUrl = '/profesores/' + profesor.usuario.id;
        }
      );
    }
    else {
      this.profesorDesdoble = "Sin docencia";
      this.profesorDesdobleUrl = '/eleccion-docencia/';
    }
    
  }

  eliminarDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: this.asignatura.id
    };

    const dialogRef = this.dialog.open(EliminarDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      asignatura => this.eliminarAsignatura(asignatura)
    );
  }

  eliminarAsignatura(asignatura) {
    if (asignatura != undefined) {
      this.angularService.deleteAsignatura(this.asignatura.id);
    }
    else {
      console.log('Cancelada eliminación asignatura');
    }
  }

  openDialog(i: number): void {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      data: this.asignatura.desdobles[i]
    };
    const dialogRef = this.dialog.open(DialogDesdobleComponent, dialogConfig);
  }

}