import { Component, OnInit, NgModule, ViewChild, OnDestroy } from '@angular/core';
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

import { isMinimiceLeft, minimiceLeft, isMinimiceRight, minimiceRight, fetchDay } from "./utils";
import { SearchSidenavComponent } from 'src/app/util-components/search-sidenav/search-sidenav.component';
import { BootstrapOptions } from '@angular/core/src/application_ref';
import { Profesor } from 'src/app/models/profesor';

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
  profesor: Profesor;
  profesores: Profesor[];
  @ViewChild(SearchSidenavComponent) child: SearchSidenavComponent;
  searchVals: {
    nombre: string
  }

  // utils functions are declared because the view code need to call them
  isMinimiceLeft;
  minimiceLeft;
  isMinimiceRight;
  minimiceRight;
  fetchDay;

  constructor(private asignaturasService: AsignaturasService, private eleccionService: EleccionService, private avisosService: AvisosService, private profesoresService: ProfesoresService) {
    this.isMinimiceLeft = isMinimiceLeft;
    this.minimiceLeft = minimiceLeft;
    this.isMinimiceRight = isMinimiceRight;
    this.minimiceRight = minimiceRight;
    this.fetchDay = fetchDay;
    this.searchVals = {
      nombre: ''
    }
  }

  ngOnInit() {
    MenuToolbarComponent.updateTitle("Elección Docencia");
    this.loading = true;
    this.valida = true;
    this.asignaturasSelected = [];
    this.desdoblesSelected = [];
    this.getAsignaturas();
    this.profesoresService.getProfesores()
      .subscribe((profesores) => {
        this.profesores = profesores;
      })
  }

  search(): void {
    this.loading = true;
    this.asignaturasService.searchAsignatura("", this.searchVals.nombre, "", "", 0, "", "", [])
      .subscribe(asignaturas => {
        this.updateAsignaturas(asignaturas);
        this.loading = false;
      });
  }

  updateLoading(state: boolean) {
    this.loading = state;
  }

  updateAsignaturas(asignaturas: Asignatura[]) {
    this.asignaturas = asignaturas;
    this.fillSelected();
  }

  getAsignaturas(): void {
    this.asignaturasService.getAsignaturas()
      .subscribe((asignaturas) => {
        this.asignaturas = asignaturas;

        this.profesoresService.getProfesores()
          .subscribe((profesores) => {
            this.profesores = profesores;
            !this.profesor ? this.profesor = this.profesores[0] : null;
            this.fillSelected();
          })
      })
  }

  fillSelected() {
    this.loading = true;
    MenuToolbarComponent.updateTitle(`Elección Docencia (${this.profesor.usuario.first_name} ${this.profesor.usuario.last_name})`);
    this.eleccion = new Eleccion;
    this.eleccion.asignaturas = new Array;
    this.eleccion.desdobles = new Array;
    this.eleccion.confirmada = false;
    this.eleccion.profesor = this.profesor.usuario.id;
    this.clearEleccion();
    if (this.profesor.docencia !== null) {
      this.eleccionService.getEleccion(this.profesor.docencia)
        .subscribe(eleccion => {
          const { asignaturas, desdobles } = eleccion;
          this.fillAsignaturasWithEleccion(asignaturas);

          if (desdobles.length) { // If there are desdobles
            this.fillDesdoblesWithEleccion(desdobles);
          }
          this.loading = false;
          this.updateEleccion();
          this.eleccion = eleccion;
        });
    }
    else {
      this.loading = false;
    }
  }

  fillAsignaturasWithEleccion(asignaturas) {
    this.asignaturasSelected = [...asignaturas];
    this.asignaturas.map(asignatura => {
      this.asignaturasSelected.map(selected => {
        if (selected.id === asignatura.id) {
          asignatura.selected = true;
        }
      })
    });
  }

  fillDesdoblesWithEleccion(desdobles) {
    desdobles.map(_desdoble => {

      this.asignaturasService.getAsignaturaDesdoble(_desdoble.id)
        .subscribe(asignatura => {
          this.desdoblesSelected = [...asignatura];
          this.asignaturas.map(asignatura => {
            asignatura.desdobles.map(desdoble => {
              if (_desdoble.id == desdoble.id)
                desdoble.selected = true;
            })
          });
        });

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
    this.eleccion.asignaturas = this.asignaturasSelected.map(asignatura => asignatura.id)

    this.eleccion.desdobles = [];
    this.eleccion.desdobles = this.desdoblesSelected.map(desdoble => desdoble.desdobles[0].id)

    return this.eleccion;
  }

  onSelectAsignatura(asignatura, { selected }) {
    if (selected) {
      this.asignaturasSelected = [...this.asignaturasSelected, asignatura];
      this.asignaturas[this.asignaturas.indexOf(asignatura)].selected = true;

    }
    else {
      this.asignaturasSelected = this.asignaturasSelected.filter(asign => asign.id !== asignatura.id);
      this.asignaturas[this.asignaturas.indexOf(asignatura)].selected = true;
    }

    this.comprobarEleccion();
  }

  onSelectDesdoble(asignatura, { selected }) {
    if (selected) {
      this.desdoblesSelected = [...this.desdoblesSelected, asignatura];
      this.asignaturas.map(asignaturaMap => {
        if (asignatura === asignaturaMap) {
          asignatura.desdobles.map(desdoble => {
            desdoble.selected = true;
          })
        }
      });
    }
    else {
      this.desdoblesSelected = this.desdoblesSelected.filter(asign => asign.id !== asignatura.id);
    }
    this.comprobarEleccion();
  }

  comprobarEleccion() {
    this.eleccionService.comprobarEleccion(this.updateEleccion())
      .subscribe(errores => {
        this.errores = errores;
        const { L, M, X, J, V } = errores;
        this.valida = L == null
          && M == null
          && X == null
          && J == null
          && V == null;

        if (!this.valida) this.avisosService.enviarMensaje("Se han encontrado problemas en la elección")
      });
  }

}