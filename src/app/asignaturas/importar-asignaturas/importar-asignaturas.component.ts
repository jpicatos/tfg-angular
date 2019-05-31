import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsignaturasService } from "../../services/asignaturas.service";
import { MenuToolbarComponent } from '../../menu-toolbar/menu-toolbar.component';
import { AvisosService } from '../../services/avisos.service';


@Component({
  selector: 'app-importar-asignaturas',
  templateUrl: './importar-asignaturas.component.html',
  styleUrls: ['./importar-asignaturas.component.css']
})
@NgModule({
  providers: [AsignaturasService]
})
export class ImportarAsignaturasComponent implements OnInit {

  selectedFile: File;
  departamento_siglas: string;
  departamento_nombre: string;
  anyo: string;
  progreso: boolean;
  sobrescribir: boolean;

  constructor(private asignaturasService: AsignaturasService,
    private http: HttpClient, private avisosService: AvisosService) {
    this.progreso = false;
    this.departamento_siglas = "SIC"
  }

  ngOnInit() {
    MenuToolbarComponent.updateTitle("Asignaturas");
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

  importar() {
    if (this.selectedFile && this.departamento_siglas && this.departamento_nombre && this.anyo) {
      this.asignaturasService.importar(this.selectedFile,
        this.departamento_siglas,
        this.departamento_nombre, this.anyo, this.sobrescribir)
        .subscribe(event => {
          this.ficheroSubido(event);

          if (this.sobrescribir) {
            let currentUser = localStorage.getItem("currentUser");
            let currentUserRefresh = localStorage.getItem("currentUserRefresh");

            localStorage.clear();

            localStorage.setItem("currentUser", currentUser);
            localStorage.setItem("currentUserRefresh", currentUserRefresh);
          }
        },
          error => this.mostrarError());

      this.progreso = true;
    } else {
      this.avisosService.enviarMensaje('Debe rellenar todos los campos');
    }
  }

  ficheroSubido(event) {
    this.progreso = false;
    if (event.excel_file) {
      this.avisosService.enviarMensaje('Se han importado las asignaturas correctamente');
    }
  }

  mostrarError() {
    this.progreso = false;
    this.avisosService.enviarMensaje('Ha habido un error al importar las asignaturas');
  }

}
