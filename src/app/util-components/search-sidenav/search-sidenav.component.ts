import { Component, OnInit, NgModule, Output, EventEmitter, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Asignatura } from 'src/app/models/asignatura';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { MatSidenav } from '@angular/material';


@Component({
  selector: 'app-search-sidenav',
  templateUrl: './search-sidenav.component.html',
  styleUrls: ['./search-sidenav.component.scss']
})
export class SearchSidenavComponent implements OnChanges, OnInit {
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
  hiddenElements;
  rEvent:Object;

  get researchEvent(): Object {
		return this.rEvent
	}

	@Input() set researchEvent(obj: Object) {
		this.rEvent = obj;
  };
  
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

  ngOnChanges(changes: SimpleChanges): void {
    const id: SimpleChange = changes.researchEvent;
    if (id) {
        this.clear();
    }
  }

  ngOnInit() {
    this.onlySelecteds = false;
    this.onlyAvaliables = false;
    this.hiddenElements = [];
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

  clear(){
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
    this.onlySelecteds = false;
    this.onlyAvaliables = false;
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
      elements[i].classList.add("asign-hidden")
    }
  }

  showHiddenElements() {
    for (let i = 0; i < this.hiddenElements.length; i++) {
      this.hiddenElements[i].classList.remove("asign-hidden")
    }
  }
  updateFilters() {
    this.showHiddenElements()
    var disableds = Array.from(document.getElementsByClassName("disabled"));
    var nonSelected = Array.from(document.getElementsByClassName("non-selected"));
    this.hiddenElements = []
    if (this.onlyAvaliables && this.onlySelecteds) {
      this.hiddenElements = [...disableds, ...nonSelected];
    }
    else if (this.onlySelecteds) {
      this.hiddenElements = [...nonSelected];
    }
    else if (this.onlyAvaliables) {
      this.hiddenElements = [...disableds];
    }
    this.hideElements(this.hiddenElements)
  }
}
