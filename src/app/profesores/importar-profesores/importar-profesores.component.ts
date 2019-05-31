import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AvisosService } from '../../services/avisos.service';
import { MenuToolbarComponent } from '../../menu-toolbar/menu-toolbar.component';
import { ProfesoresService } from "../../services/profesores.service";

@Component({
  selector: 'app-importar-profesores',
  templateUrl: './importar-profesores.component.html',
  styleUrls: ['./importar-profesores.component.scss']
})
@NgModule({
  providers: [ProfesoresService]
})
export class ImportarProfesoresComponent implements OnInit {

  selectedFile: File;
  departamento_siglas: string;
  progreso: boolean;
  sobrescribir: boolean;

  constructor(private profesoresService: ProfesoresService,
    private http: HttpClient, private avisosService: AvisosService) {
    this.progreso = false;
    this.departamento_siglas = "SIC";
  }

  ngOnInit() {
    MenuToolbarComponent.updateTitle("Profesores");
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

  importar() {
    if (this.selectedFile && this.departamento_siglas) {
      this.profesoresService.importar(this.selectedFile, this.departamento_siglas, this.sobrescribir)
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
      this.avisosService.enviarMensaje('Se han importado los profesores correctamente');
    }
  }

  mostrarError() {
    this.progreso = false;
    this.avisosService.enviarMensaje('Ha habido un error al importar los profesores');
  }

}
