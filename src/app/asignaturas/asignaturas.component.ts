import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { Asignatura } from "../models/asignatura";
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AsignaturasService } from "../asignaturas.service";
import {Sort, MatPaginator} from '@angular/material';


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
  displayedColumns: string[];
  loading: boolean;

  @ViewChild(MatPaginator) paginator: MatPaginator;
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
    this.loading = true;
    this.numCols = 4;
    this.displayedColumns = ['nombre', 'titulacion', 'grupo'];
    this.getAsignaturas();
  }

  getAsignaturas(): void {
    this.asignaturasService.getAsignaturas()
      .subscribe(asignaturas => {
        this.asignaturas = asignaturas;
        this.loading=false;
      });
  }
  onSelect(asignatura: Asignatura) {
    this.selectedAsignatura = asignatura;
  }
  updateNumCols(col: string) {
    this.displayedColumns = []
    if(this.opts.nombre) this.displayedColumns.push('nombre');
    if(this.opts.titulacion) this.displayedColumns.push('titulacion');
    if(this.opts.grupo) this.displayedColumns.push('grupo');
    if(this.opts.codigo) this.displayedColumns.push('codigo');
    if(this.opts.cuatrimestre) this.displayedColumns.push('cuatrimestre');
    if(this.opts.curso) this.displayedColumns.push('curso');
    if(this.opts.departamento) this.displayedColumns.push('departamento');
    if(this.opts.id) this.displayedColumns.push('identificador');
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
  sortData(sort: Sort) {
    const data = this.asignaturas.slice();
    if (!sort.active || sort.direction === '') {
      this.asignaturas = data;
      return;
    }

    this.asignaturas = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'nombre': return this.compare(a.nombre, b.nombre, isAsc);
        case 'titulacion': return this.compare(a.titulacion, b.titulacion, isAsc);
        case 'grupo': return this.compare(a.grupo, b.grupo, isAsc);
        case 'codigo': return this.compare(a.codigo, b.codigo, isAsc);
        case 'cuatrimestre': return this.compare(a.cuatrimestre, b.cuatrimestre, isAsc);
        case 'curso': return this.compare(a.curso, b.curso, isAsc);
        case 'departamento': return this.compare(a.departamento, b.departamento, isAsc);
        case 'identificador': return this.compare(a.id, b.id, isAsc);
        default: return 0;
      }
    });
  }
  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}
