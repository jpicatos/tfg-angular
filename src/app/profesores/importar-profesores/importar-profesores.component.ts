import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AvisosService } from '../../avisos.service';
import { MenuToolbarComponent } from '../../menu-toolbar/menu-toolbar.component';
import { ProfesoresService } from "../profesores.service";

@Component({
  selector: 'app-importar-profesores',
  templateUrl: './importar-profesores.component.html',
  styleUrls: ['./importar-profesores.component.scss']
})
@NgModule({
  providers: [ProfesoresService]
})
export class ImportarProfesoresComponent implements OnInit {

  private selectedFile: File;
  private departamento_siglas: string;
  private progreso: boolean;

  constructor(private profesoresService: ProfesoresService,
    private http: HttpClient, private avisosService: AvisosService) {
    this.progreso = false;
  }

  ngOnInit() {
    MenuToolbarComponent.updateTitle("Profesores");
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }

  importar() {
    if (this.selectedFile && this.departamento_siglas) {
      this.profesoresService.importar(this.selectedFile, this.departamento_siglas)
        .subscribe(event => this.ficheroSubido(event),
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
