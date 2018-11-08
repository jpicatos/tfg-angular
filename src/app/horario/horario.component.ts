import { Component, OnInit, Input } from '@angular/core';
import { Horario } from "../models/horario";

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {

  @Input() horarioEntrada: Horario[];

 
  horarioOneDimension:any[];
  horario:any[][];
  
  constructor() {
    
  }

  ngOnInit() {
    this.horarioOneDimension = [];
    this.horario = [['','Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
                    ['09:00:00', undefined, undefined, undefined, undefined, undefined],
                    ['10:00:00', undefined, undefined, undefined, undefined, undefined],
                    ['11:00:00', undefined, undefined, undefined, undefined, undefined],
                    ['12:00:00', undefined, undefined, undefined, undefined, undefined],
                    ['13:00:00', undefined, undefined, undefined, undefined, undefined],
                    ['14:00:00', undefined, undefined, undefined, undefined, undefined],
                    ['15:00:00', undefined, undefined, undefined, undefined, undefined],
                    ['16:00:00', undefined, undefined, undefined, undefined, undefined],
                    ['17:00:00', undefined, undefined, undefined, undefined, undefined],
                    ['18:00:00', undefined, undefined, undefined, undefined, undefined],
                    ['19:00:00', undefined, undefined, undefined, undefined, undefined],
                    ['20:00:00', undefined, undefined, undefined, undefined, undefined]
                  ];
    this.setClass();
  }

  getDay(val: string): number{
    var columnIndex = 0
      switch (val) {
        case 'L':
            columnIndex = 1;
          break;
        case 'M':
          columnIndex = 2;
        break;
        case 'X':
            columnIndex = 3;
          break;
          case 'J':
          columnIndex = 4;
        break;
        case 'V':
            columnIndex = 5;
          break;
        default:
          break;
      }
    return columnIndex;
  }
  setClass(): void{
    for (let index = 0; index < this.horarioEntrada.length; index++) {
      var columnIndex = this.getDay(this.horarioEntrada[index].dia);
      for (let h = 1; h < 12; h++) {
        if (this.horario[h][0]>=  this.horarioEntrada[index].hora_inicio && this.horario[h][0]<this.horarioEntrada[index].hora_fin) {
          this.horario[h][columnIndex] = 'true';
        }
        
      }
    }
    this.transformToOneDimension();
  }
  transformToOneDimension(): void{
    for (let i = 1; i < 13; i++) {
      for (let j = 0; j < 6; j++) {
        this.horarioOneDimension.push(this.horario[i][j]);
      }  
    }
  }

}
