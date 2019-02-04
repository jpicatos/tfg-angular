import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { ResizableModule, ResizeEvent } from 'angular-resizable-element';
import { Asignatura } from 'src/app/models/asignatura';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { MenuToolbarComponent } from 'src/app/menu-toolbar/menu-toolbar.component';
import { Horario } from 'src/app/models/horario';
import { optimizeGroupPlayer } from '@angular/animations/browser/src/render/shared';
import { CastExpr } from '@angular/compiler';
import { EleccionService } from 'src/app/services/eleccion.service';
import { AvisosService } from 'src/app/services/avisos.service';
import { Eleccion } from 'src/app/models/eleccion';
import { ErroresEleccion } from 'src/app/models/erroresEleccion';
import { ProfesoresService } from 'src/app/services/profesores.service';

@Component({
  selector: 'app-eleccion-list',
  templateUrl: './eleccion-list.component.html',
  styleUrls: ['./eleccion-list.component.scss']
})

@NgModule({
  providers: [AsignaturasService, EleccionService]
})
export class EleccionListComponent implements OnInit {
  asignaturas: Asignatura[];
  loading: boolean;
  asignaturasSelected: Asignatura[];
  desdoblesSelected: Asignatura[];
  eleccion: Eleccion;
  valida: boolean;
  errores: ErroresEleccion;

  constructor(private asignaturasService: AsignaturasService, private eleccionService: EleccionService, private avisosService: AvisosService, private profesoresService: ProfesoresService) { }

  ngOnInit() {
    MenuToolbarComponent.updateTitle("Elección Docencia");
    this.loading = true;
    this.valida = true;
    this.asignaturasSelected = [];
    this.desdoblesSelected = [];
    this.getAsignaturas();
  }

  getAsignaturas(): void {
    this.asignaturasService.getAsignaturas()
      .subscribe((asignaturas) => {
        this.asignaturas = asignaturas;
        this.fillSelected();
      })
  }


  fillSelected() {
    var testProfesor = 16;
    this.profesoresService.getProfesor(testProfesor)
      .subscribe(profesor => {
        console.log("profesor", profesor);
        if (profesor.docencia != null) {
          this.eleccionService.getEleccion(profesor.docencia)
            .subscribe({
              next: eleccion => {

                console.log("elecccion", eleccion)
                const { asignaturas, desdobles } = eleccion;
                this.asignaturasSelected = [...asignaturas];
                this.asignaturas.map(asignatura => {
                  this.asignaturasSelected.map(selected => {
                    if (selected.id == asignatura.id) {
                      asignatura.selected = true;
                    }
                  })
                });

                this.eleccion = eleccion;
                this.updateEleccion();
                if (!desdobles.length) this.loading = false;

                desdobles.map(idDesdoble => {
                  this.asignaturasService.getAsignaturaDesdoble(idDesdoble)
                    .subscribe(asignatura => {
                      console.log("asignatura", asignatura)
                      this.desdoblesSelected = [...asignatura];

                      this.asignaturas.map(asignatura => {
                        asignatura.desdobles.map(desdoble => {
                          if (idDesdoble == desdoble.id)
                            desdoble.selected = true;
                        })
                      });
                      this.eleccion = eleccion;
                      this.updateEleccion();
                      this.loading = false;
                    });
                });

              },
              error: err => {
                if (err === "No encontrado") {
                  this.avisosService.enviarMensaje("Es tu primera vez, bienvenid@");
                }
                this.eleccion = new Eleccion;
                this.eleccion.confirmada = false;
                this.eleccion.profesor = testProfesor;

              }
            });
        }
        else {
          this.eleccion = new Eleccion;
          this.eleccion.confirmada = false;
          this.eleccion.profesor = testProfesor;
          this.loading = false;
        }
        
      });
  }
  saveEleccion() {
    if (this.valida && !this.loading) {
      if (this.eleccion.id != undefined) {
        this.eleccionService.saveEleccion(this.eleccion);
      }
      else {
        this.eleccionService.createEleccion(this.eleccion);
      }
    }
    else {
      this.avisosService.enviarMensaje("La elección de docencia contiene errores que debe revisar");
    }
  }

  clearEleccion() {
    this.desdoblesSelected = [];
    this.asignaturasSelected = [];

    this.asignaturas.map(asignatura => {
      asignatura.selected = false;

      asignatura.desdobles.map(desdoble => {
        desdoble.selected = false;
      })
    });

    this.valida = true;
    this.updateEleccion();
  }

  updateEleccion() {
    this.eleccion.asignaturas = [];
    this.eleccion.asignaturas = this.asignaturasSelected.map(asignatura => {
      return asignatura.id
    })

    this.eleccion.desdobles = [];
    this.eleccion.desdobles = this.desdoblesSelected.map(desdoble => {
      return desdoble.desdobles[0].id;
    })
    console.log(this.eleccion);
    return this.eleccion;
  }

  onSelectAsignatura(asignatura, opt) {

    var selected = opt.selected;
    if (selected) {
      this.asignaturasSelected.push(asignatura);
    }
    else {
      let i = 0;
      let found = false;
      while (i < this.asignaturasSelected.length && !found) {
        if (this.asignaturasSelected[i].id == asignatura.id) {
          found = true;
          this.asignaturasSelected.splice(i, 1);
        }
        else i++;
      }
    }
    // Es necesario crear un array nuevo para que ngOnChanges detecte las nuevas asignaturas seleccionadas en el calendario
    let asignaturasNew = this.asignaturasSelected.slice();
    this.asignaturasSelected = asignaturasNew;
    this.eleccionService.comprobarEleccion(this.updateEleccion())
      .subscribe(errores => {
        this.errores = errores;
        this.valida = errores.L == null
          && errores.M == null
          && errores.X == null
          && errores.J == null
          && errores.V == null;

        if (!this.valida) this.avisosService.enviarMensaje("Se han encontrado problemas en la elección")
      });
  }

  onSelectDesdoble(asignatura, opt) {
    var { selected } = opt;
    if (selected) {
      this.desdoblesSelected.push(asignatura);
    }
    else {
      let i = 0;
      let found = false;
      while (i < this.desdoblesSelected.length && !found) {
        if (this.desdoblesSelected[i].id == asignatura.id) {
          found = true;
          this.desdoblesSelected.splice(i, 1);
        }
        else i++;
      }
    }
    // Es necesario crear un array nuevo para que ngOnChanges detecte las nuevas asignaturas seleccionadas en el calendario
    let desdoblesNew = this.desdoblesSelected.slice();
    this.desdoblesSelected = desdoblesNew;
    console.log("asignatura: ", this.asignaturasSelected, "desdobles: ", this.desdoblesSelected);
    this.eleccionService.comprobarEleccion(this.updateEleccion())
      .subscribe(errores => {
        this.errores = errores;
        this.valida = errores.L == null
          && errores.M == null
          && errores.X == null
          && errores.J == null
          && errores.V == null;

        if (!this.valida) this.avisosService.enviarMensaje("Se han encontrado problemas en la elección")
      });
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
