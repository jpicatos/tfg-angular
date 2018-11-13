import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsignaturasService } from "../asignaturas.service";
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-importar-asignaturas',
  templateUrl: './importar-asignaturas.component.html',
  styleUrls: ['./importar-asignaturas.component.css']
})
@NgModule({
  providers: [AsignaturasService]
})
export class ImportarAsignaturasComponent implements OnInit {

  private selectedFile: File;
  private departamento_siglas: string;
  private departamento_nombre: string;
  private progreso: boolean;

  constructor(private asignaturasService: AsignaturasService,
    private http: HttpClient, private snackBar: MatSnackBar) {
    this.progreso = false;
  }

  ngOnInit() {
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

  importar() {
    if (this.selectedFile && this.departamento_siglas && this.departamento_nombre) {
      this.asignaturasService.importar(this.selectedFile,
        this.departamento_siglas,
        this.departamento_nombre)
        .subscribe(event => this.ficheroSubido(event),
          error => this.mostrarError());

      this.progreso = true;
    } else {
      let snackBarRef = this.snackBar.open('Debe rellenar todos los campos', 'Cerrar');
    }
  }

  ficheroSubido(event) {
    this.progreso = false;
    if (event.excel_file) {
      let snackBarRef = this.snackBar.open('Se han importado las asignaturas correctamente', 'Cerrar');
    }
  }

  mostrarError() {
    this.progreso = false;
    let snackBarRef = this.snackBar.open('Ha habido un error al importar las asignaturas', 'Cerrar');
  }

}
