import { Component, OnInit } from '@angular/core';
import { Asignatura } from "../models/asignatura";
import { AsignaturasService } from "../asignaturas.service";

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {

  asignaturas: Asignatura[];
  selectedAsignatura: Asignatura;
  selected: number;
  opts : {
    codigo: boolean,
    cuatrimestre: boolean,
    curso: boolean,
    departamento: boolean,
    id: boolean,
    nombre: boolean,
    titulacion: boolean,
    grupo: boolean
  };
  constructor(private asignaturasService: AsignaturasService) {
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
   }

  ngOnInit() {
    this.getAsignaturas();
    console.log(this.asignaturas);
  }

  getAsignaturas(): void{
    this.asignaturasService.getAsignaturas()
      .subscribe(asignaturas => this.asignaturas = asignaturas);
  }
  onSelect(asignatura: Asignatura){
    this.selectedAsignatura = asignatura;
  }

}
