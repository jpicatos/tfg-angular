import { Component, OnInit, NgModule, Output, EventEmitter, Input } from '@angular/core';
import { Asignatura } from 'src/app/models/asignatura';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { MatSidenav } from '@angular/material';


@Component({
  selector: 'app-search-sidenav',
  templateUrl: './search-sidenav.component.html',
  styleUrls: ['./search-sidenav.component.scss']
})
export class SearchSidenavComponent implements OnInit {
  asignaturas: Asignatura[];
  selectedAsignatura: Asignatura;
  selected: number;
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
  @Input() sidenav: MatSidenav;

  constructor(private asignaturasService: AsignaturasService) {
    this.asignaturas = [];
    this.selected = 1;

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
  }
  @Output()
  updateLoading = new EventEmitter<boolean>();

  @Output()
  updateAsignaturas = new EventEmitter<Asignatura[]>();

  search(): void {
    this.updateLoading.emit(true);
    var diasAux = []
    if (this.searchVals.dias.length < 5) {
      diasAux = this.searchVals.dias;
    }
    this.asignaturasService.searchAsignatura(this.searchVals.siglas, this.searchVals.nombre, this.searchVals.codigo, this.searchVals.curso, this.searchVals.cuatrimestre, this.searchVals.ini, this.searchVals.fin, diasAux)
      .subscribe(asignaturas => {
        this.updateAsignaturas.emit(asignaturas);
        this.updateLoading.emit(false);
      });
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

  mostrarOnlyAvailable(event) {
    if (event.checked) {
      this.asignaturasService.getAsignaturas()
        .subscribe(asignaturas => {
          this.asignaturas = asignaturas;
          this.asignaturas = this.asignaturas.filter(asignatura => {
            if (asignatura.desdobles.length && asignatura.desdobles[0].disponible) {
              return true
            }
            if (asignatura.disponible && asignatura.desdobles.length && !asignatura.desdobles[0].disponible) {
              asignatura.desdobles.pop();
              return true
            }
            if (asignatura.disponible && !asignatura.desdobles.length) {
              return true;
            }
          })
        })
    }
    else {
      this.search();
    }
  }
}
