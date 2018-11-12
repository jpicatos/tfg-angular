import { Component, OnInit, NgModule } from '@angular/core';
import { Asignatura } from "../models/asignatura";
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AsignaturasService } from "../asignaturas.service";

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css'],

})

@NgModule({
  providers: [AsignaturasService]
})
export class AsignaturasComponent implements OnInit {
  asignaturas: Asignatura[];
  selectedAsignatura: Asignatura;
  selected: number;
  opts: {
    codigo: boolean,
    cuatrimestre: boolean,
    curso: boolean,
    departamento: boolean,
    id: boolean,
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
  constructor(private asignaturasService: AsignaturasService, private router: Router, private titleService: Title) {
    this.titleService.setTitle("Asignaturas");
    this.selected = 1;
    this.opts = {
      codigo: false,
      cuatrimestre: false,
      curso: false,
      departamento: false,
      id: false,
      nombre: true,
      titulacion: true,
      grupo: true
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
    this.numCols = 4;
    this.getAsignaturas();
  }

  getAsignaturas(): void {
    this.asignaturasService.getAsignaturas()
      .subscribe(asignaturas => { this.asignaturas = asignaturas });
  }
  onSelect(asignatura: Asignatura) {
    this.selectedAsignatura = asignatura;
  }
  updateNumCols(menosUno, num) {
    console.log(this.numCols + '|' + menosUno);
    if (menosUno) {
      this.numCols = this.numCols - num;
    }
    else {
      this.numCols = this.numCols + num;
    }
    console.log(this.numCols + '|' + menosUno);
  }
  updateDias(dia: string) {
    console.log(dia);
    var index = this.searchVals.dias.indexOf(dia);
    console.log(index);
    if (index === -1) {
      this.searchVals.dias.push(dia);
    }
    else {
      this.searchVals.dias.splice(index, 1);
    }
  }
  search(): void {
    console.log(this.searchVals);
    var diasAux = []
    if (this.searchVals.dias.length < 5) {
      diasAux = this.searchVals.dias;
    }
    this.asignaturasService.searchAsignatura(this.searchVals.siglas, this.searchVals.nombre, this.searchVals.codigo, this.searchVals.curso, this.searchVals.cuatrimestre, this.searchVals.ini, this.searchVals.fin, diasAux)
      .subscribe(asignaturas => { this.asignaturas = asignaturas });
  }

}
