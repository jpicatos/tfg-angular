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
  constructor(private asignaturasService: AsignaturasService) { }

  ngOnInit() {
    this.getAsignaturas();
    console.log(this.asignaturas);
  }

  getAsignaturas(): void{
    this.asignaturasService.getAsignaturas()
      .subscribe(asignaturas => this.asignaturas = asignaturas);
  }

}
