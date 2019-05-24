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
  onlyAvaliables: boolean;
  onlySelecteds: boolean;


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
    this.onlySelecteds = false;
    this.onlyAvaliables = false;
  }
  @Output()
  updateLoading = new EventEmitter<boolean>();

  @Output()
  updateAsignaturas = new EventEmitter<Asignatura[]>();

  search(): void {
    this.updateLoading.emit(true);
    this.loading = true;
    var diasAux = []
    if (this.searchVals.dias.length < 5) {
      diasAux = this.searchVals.dias;
    }
    this.asignaturasService.searchAsignatura(this.searchVals.siglas, this.searchVals.nombre, this.searchVals.codigo, this.searchVals.curso, this.searchVals.cuatrimestre, this.searchVals.ini, this.searchVals.fin, diasAux)
      .subscribe(asignaturas => {
        this.updateAsignaturas.emit(asignaturas);
        setTimeout(() => {
          this.updateFilters();
          this.loading = false;
          this.updateLoading.emit(false);
        });
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

  hideElements(elements) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add("hidden")
      }
  }

  showHiddenElements() {
    var elements = document.getElementsByClassName("hidden");

      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("hidden")
      }
  }
  updateFilters(){
    this.showHiddenElements()
    var disableds = Array.from(document.getElementsByClassName("disabled"));
    var nonSelected = Array.from(document.getElementsByClassName("non-selected"));
    var elements = []
    if(this.onlyAvaliables && this.onlySelecteds){
      elements = [...disableds, ...nonSelected];
    }
    else if (this.onlySelecteds) {
      elements = [...nonSelected];
    }
    else if(this.onlyAvaliables){
      elements = [...disableds];
    }
    this.hideElements(elements)
  }
}
