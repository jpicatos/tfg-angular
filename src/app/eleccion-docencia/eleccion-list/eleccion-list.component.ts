import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { ResizableModule, ResizeEvent } from 'angular-resizable-element';
import { Asignatura } from 'src/app/models/asignatura';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { MenuToolbarComponent } from 'src/app/menu-toolbar/menu-toolbar.component';
import { Horario } from 'src/app/models/horario';
import { optimizeGroupPlayer } from '@angular/animations/browser/src/render/shared';
import { CastExpr } from '@angular/compiler';

@Component({
  selector: 'app-eleccion-list',
  templateUrl: './eleccion-list.component.html',
  styleUrls: ['./eleccion-list.component.scss']
})

@NgModule({
  providers: [AsignaturasService]
})
export class EleccionListComponent implements OnInit {
  asignaturas: Asignatura[];
  loading: boolean;
  asignaturasSelected: Asignatura[];
  desdoblesSelected: Asignatura[];

  constructor(private asignaturasService: AsignaturasService) { }

  ngOnInit() {
    MenuToolbarComponent.updateTitle("Elección Docencia");
    this.loading = true;
    this.getAsignaturas();
    this.asignaturasSelected = [];
    this.desdoblesSelected = [];
  }

  getAsignaturas(): void {
    this.asignaturasService.getAsignaturas()
      .subscribe(asignaturas => {
        this.asignaturas = asignaturas;
        
        asignaturas.map((asignatura) =>{
          this.asignaturasService.getCalendarios(asignatura.calendario)
            .subscribe(calendario =>{
              asignatura.calendario = calendario;
            })
        });
        console.log(this.asignaturas);
        this.loading = false;
      })
  }

  onSelectAsignatura(asignatura, opt) {
    var selected = opt.selected;
    if (selected) {
      this.asignaturasSelected.push(asignatura);
    }
    else {
      var index = this.asignaturasSelected.indexOf(asignatura);
      if (index > -1) {
        this.asignaturasSelected.splice(index, 1);
      }
    }
    // Es necesario crear un array nuevo para que ngOnChanges detecte las nuevas asignaturas seleccionadas en el calendario
    let asignaturasNew = this.asignaturasSelected.slice();
    this.asignaturasSelected = asignaturasNew;
    console.log("asignatura: ", this.asignaturasSelected, "desdobles: ", this.desdoblesSelected);
  }

  onSelectDesdoble(asignatura, opt) {
    var selected = opt.selected;
    if (selected) {
      this.desdoblesSelected.push(asignatura);
    }
    else {
      var index = this.desdoblesSelected.indexOf(asignatura);
      if (index > -1) {
        this.desdoblesSelected.splice(index, 1);
      }
    }
    // Es necesario crear un array nuevo para que ngOnChanges detecte las nuevas asignaturas seleccionadas en el calendario
    let desdoblesNew = this.desdoblesSelected.slice();
    this.desdoblesSelected = desdoblesNew;
    console.log("asignatura: ", this.asignaturasSelected, "desdobles: ", this.desdoblesSelected);
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

  minimiceLeft() {
    console.log("Minimice Left");
    var minimizable = document.getElementById('minimizable-container');
    if (this.isMinimiceLeft()) {
      minimizable.classList.remove("left-minimiced");
    }
    else {
      if (this.isMinimiceRight) {
        minimizable.classList.remove("right-minimiced");
      }
      minimizable.classList.add("left-minimiced");
    }

  }

  minimiceRight() {
    console.log("Minimice Left");
    var minimizable = document.getElementById('minimizable-container');
    if (this.isMinimiceRight()) {
      minimizable.classList.remove("right-minimiced");
    }
    else {
      if (this.isMinimiceLeft) {
        minimizable.classList.remove("left-minimiced");
      }
      minimizable.classList.add("right-minimiced");
    }
  }

  isMinimiceRight(): boolean {
    return document.getElementById('minimizable-container').classList.contains("right-minimiced")
  }

  isMinimiceLeft(): boolean {
    return document.getElementById('minimizable-container').classList.contains("left-minimiced")
  }

}
