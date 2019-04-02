import { Component, OnInit, NgModule } from '@angular/core';
import { Asignatura } from "../../models/asignatura";
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AsignaturasService } from "../../services/asignaturas.service";
import { MenuToolbarComponent } from '../../menu-toolbar/menu-toolbar.component';
import { GlobalConfigService } from 'src/app/services/global-config.service';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas-list.component.html',
  styleUrls: ['./asignaturas-list.component.css'],

})

@NgModule({
  providers: [AsignaturasService]
})
export class AsignaturasListComponent implements OnInit {
  admin: boolean;

  asignaturas: Asignatura[];
  selectedAsignatura: Asignatura;
  selected: number;
  opts: {
    codigo: boolean,
    cuatrimestre: boolean,
    curso: boolean,
    departamento: boolean,
    nombre: boolean,
    titulacion: boolean,
    grupo: boolean
  };
  numCols: number;
  searchVals: {
    nombre: string,
    siglas: string,
    codigo: string,
    curso: string,
    cuatrimestre: number,
    dias: string[],
    ini: string,
    fin: string
  }
  loading: boolean;

  ayudaHoraIni = "A partir de la hora...";
  ayudaHoraFin = "Antes de la hora...";

  constructor(private asignaturasService: AsignaturasService, private router: Router, private titleService: Title, private globalConfigservice: GlobalConfigService) {
    this.titleService.setTitle("Asignaturas");
    this.admin = this.globalConfigservice.isAdmin();

    this.selected = 1;
    this.opts = {
      codigo: true,
      cuatrimestre: false,
      curso: true,
      departamento: false,
      nombre: true,
      titulacion: true,
      grupo: false
    };
    this.searchVals = {
      nombre: '',
      siglas: '',
      codigo: '',
      curso: '',
      cuatrimestre: undefined,
      dias: ['L', 'M', 'X', 'J', 'V'],
      ini: '',
      fin: ''
    }
  }

  ngOnInit() {
    MenuToolbarComponent.updateTitle("Asignaturas");
    this.loading = true;
    this.numCols = 5;
    this.getAsignaturas();
  }

  getAsignaturas(): void {
    this.asignaturasService.getAsignaturas()
      .subscribe(asignaturas => {
        this.asignaturas = asignaturas;
        this.loading = false;
      });
  }
  onSelect(asignatura: Asignatura) {
    this.selectedAsignatura = asignatura;
  }
  updateNumCols(menosUno, num) {
    if (menosUno) {
      this.numCols = this.numCols - num;
    }
    else {
      this.numCols = this.numCols + num;
    }
  }
  updateDias(dia: string) {
    var index = this.searchVals.dias.indexOf(dia);
    if (index === -1) {
      this.searchVals.dias.push(dia);
    }
    else {
      this.searchVals.dias.splice(index, 1);
    }
  }
  search(): void {
    this.loading = true;
    var diasAux = []
    if (this.searchVals.dias.length < 5) {
      diasAux = this.searchVals.dias;
    }
    this.asignaturasService.searchAsignatura(this.searchVals.siglas, this.searchVals.nombre, this.searchVals.codigo, this.searchVals.curso, this.searchVals.cuatrimestre, this.searchVals.ini, this.searchVals.fin, diasAux)
      .subscribe(asignaturas => {
        this.asignaturas = asignaturas;
        this.loading = false;
        this.highlightResults();
      });
  }

  highlightResults(): void {
    this.asignaturas.forEach(asignatura => {
      if (asignatura.nombre && this.searchVals.nombre) {
        var regex = new RegExp(this.searchVals.nombre, 'gi')
        asignatura.nombre = asignatura.nombre.replace(regex, function (str) { return "<span class='highlight'>" + str + "</span>" });
      };
      if (asignatura.siglas && this.searchVals.siglas) {
        var regex = new RegExp(this.searchVals.siglas, 'gi')
        asignatura.siglas = asignatura.siglas.replace(regex, function (str) { return "<span class='highlight'>" + str + "</span>" });
      };
      if (asignatura.codigo && this.searchVals.codigo) {
        var regex = new RegExp(this.searchVals.codigo, 'gi')
        asignatura.codigo = asignatura.codigo.replace(regex, function (str) { return "<span class='highlight'>" + str + "</span>" });
      };
    });
  }

  horaIni($event): void {
    this.searchVals.ini = $event;
  }

  horaFin($event): void {
    this.searchVals.fin = $event;
  }

  exportarAsignaturas(): void {
    this.asignaturasService.exportar()
      .subscribe(x => {
        // It is necessary to create a new blob object with mime-type explicitly set
        // otherwise only Chrome works like it should
        var newBlob = new Blob([x], { type: "application/xlsx" });

        // IE doesn't allow using a blob object directly as link href
        // instead it is necessary to use msSaveOrOpenBlob
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(newBlob);
          return;
        }

        // For other browsers: 
        // Create a link pointing to the ObjectURL containing the blob.
        const data = window.URL.createObjectURL(newBlob);

        var link = document.createElement('a');
        link.href = data;
        link.download = "horarios.xlsx";
        // this is necessary as link.click() does not work on the latest firefox
        link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));

        setTimeout(function () {
          // For Firefox it is necessary to delay revoking the ObjectURL
          window.URL.revokeObjectURL(data);
          link.remove();
        }, 100);
      });
  }



}
