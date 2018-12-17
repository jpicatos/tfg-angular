import { Component, OnInit, Input } from '@angular/core';
import { Horario } from "../models/horario";
import { Desdoble } from '../models/desdoble';
import { Asignatura } from '../models/asignatura';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.scss']
})
export class HorarioComponent implements OnInit {

  @Input() asignatura: Asignatura;
  horarioEntrada: Horario[];
  horarioDesdoble: Horario[];


  horarioOneDimension: any[];
  horario: any[][];
  hDesdoble: Horario[];

  constructor() {
    
  }

  ngOnInit() {
    this.horarioEntrada = this.asignatura.horario;
    this.horarioDesdoble = this.asignatura.desdobles[0].horario;
    this.horarioOneDimension = [];
    this.horario = [
    [[{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }]],
    [[{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }]],
    [[{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }]],
    [[{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }]],
    [[{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }]],
    [[{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }]],
    [[{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }]],
    [[{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }]],
    [[{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }]],
    [[{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }]],
    [[{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }]],
    [[{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }], [{ horarioNormal: undefined, horarioDesdoble: undefined }]]
    ];
    this.setClass();
    this.setDesdoble();
    console.log(this.horario);
  }

  fetchDay(val: string): string {
    switch (val) {
      case 'L':
        return "Lunes";
        break;
      case 'M':
        return "Martes";
        break;
      case 'X':
        return "Miércoles";
        break;
      case 'J':
        return "Jueves";
        break;
      case 'V':
        return "Viernes";
        break;
      default:
        break;
    }
    return;
  }
  getDay(val: string): number {
    var columnIndex = 0
    switch (val) {
      case 'L':
        columnIndex = 0;
        break;
      case 'M':
        columnIndex = 1;
        break;
      case 'X':
        columnIndex = 2;
        break;
      case 'J':
        columnIndex = 3;
        break;
      case 'V':
        columnIndex = 4;
        break;
      default:
        break;
    }
    return columnIndex;
  }
  setClass(): void {
    for (let index = 0; index < this.horarioEntrada.length; index++) {
      var columnIndex = this.getDay(this.horarioEntrada[index].dia);
      for (let h = 0; h < 11; h++) {
        if (this.getHoraFromNumber(h) >= this.horarioEntrada[index].hora_inicio && this.getHoraFromNumber(h) < this.horarioEntrada[index].hora_fin) {
          this.horario[h][columnIndex].horarioNormal = this.horarioEntrada[index];
        }

      }
    }
  }
  setDesdoble(): void {
    for (let index = 0; index < this.horarioDesdoble.length; index++) {
      var columnIndex = this.getDay(this.horarioDesdoble[index].dia);
      for (let h = 0; h < 11; h++) {
        if (this.getHoraFromNumber(h) >= this.horarioDesdoble[index].hora_inicio && this.getHoraFromNumber(h) < this.horarioDesdoble[index].hora_fin) {
          this.horario[h][columnIndex].horarioDesdoble = this.horarioDesdoble[index];
        }

      }
    }
  }
  getHoraFromNumber(n: number): string {
    n = n + 9;
    if (n === 9) {
      return ("0" + n + ":00:00");
    }
    return (n + ":00:00")
  }


}

