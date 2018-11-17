import { Component, OnInit, Input } from '@angular/core';
import { Horario } from "../models/horario";

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.scss']
})
export class HorarioComponent implements OnInit {

  @Input() horarioEntrada: Horario[];

 
  horarioOneDimension:any[];
  horario:any[][];
  
  constructor() {
    
  }

  ngOnInit() {
    this.horarioOneDimension = [];
    this.horario = [[undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined],
                    [undefined, undefined, undefined, undefined, undefined]
                  ];
    this.setClass();
    console.log(this.horario);
  }

  getDay(val: string): number{
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
  setClass(): void{
    console.log('EMPIEZA', this.horarioEntrada, this.horarioEntrada);
    for (let index = 0; index < this.horarioEntrada.length; index++) {
      var columnIndex = this.getDay(this.horarioEntrada[index].dia);
      console.log("Indice columna", columnIndex);
      for (let h = 0; h < 11; h++) {
        console.log("Hora", this.horario[h][0]);
        console.log("Hora Entrada", this.horarioEntrada[index].hora_inicio);
        if (this.getHoraFromNumber(h) >=  this.horarioEntrada[index].hora_inicio && this.getHoraFromNumber(h)<this.horarioEntrada[index].hora_fin) {
          this.horario[h][columnIndex] = this.horarioEntrada[index];
        }
        
      }
    }
  }
  getHoraFromNumber(n: number): string{
    n = n+9;
    return (n + ":00:00")
  }
  

}

