import { Component, OnInit, NgModule, ViewChild, OnDestroy, Input } from '@angular/core';
import { ResizableModule, ResizeEvent } from 'angular-resizable-element';
import { Asignatura, AsignaturaDivisible } from 'src/app/models/asignatura';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { MenuToolbarComponent } from 'src/app/menu-toolbar/menu-toolbar.component';
import { EleccionService } from 'src/app/services/eleccion.service';
import { AvisosService } from 'src/app/services/avisos.service';
import { Eleccion } from 'src/app/models/eleccion';
import { ErroresEleccion } from 'src/app/models/erroresEleccion';
import { ProfesoresService } from 'src/app/services/profesores.service';

import { isMinimiceLeft, minimiceLeft, isMinimiceRight, minimiceRight, fetchDay, addCreditListener } from "./utils";
import { SearchSidenavComponent } from 'src/app/util-components/search-sidenav/search-sidenav.component';
import { Profesor } from 'src/app/models/profesor';
import { GlobalConfigService } from 'src/app/services/global-config.service';
import { Usuario } from 'src/app/models/usuario';
import { MatDialog } from '@angular/material';
import { ConfirmEleccionComponent } from '../confirm-eleccion/confirm-eleccion.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-eleccion-list',
  templateUrl: './eleccion-list.component.html',
  styleUrls: ['./eleccion-list.component.scss']
})

@NgModule({
  providers: [AsignaturasService, EleccionService]
})
export class EleccionListComponent implements OnInit {
  admin: boolean;
  tuTurno: boolean;
  docenciaIniciada: boolean;

  asignaturas: Asignatura[];
  todasAsignaturas: Asignatura[];
  loading: boolean;
  asignaturasSelected: Asignatura[];
  desdoblesSelected: Asignatura[];
  asignaturasDivisiblesSelected: AsignaturaDivisible[];
  eleccion: Eleccion;
  valida: boolean;
  errores: ErroresEleccion;
  profesor: Profesor;
  profesores: Profesor[];
  creditos: number;
  creditosDeuda: number;
  @ViewChild(SearchSidenavComponent) child: SearchSidenavComponent;
  searchVals: {
    nombre: string
  };

  // utils functions are declared because the view code need to call them
  isMinimiceLeft;
  minimiceLeft;
  isMinimiceRight;
  minimiceRight;
  fetchDay;

  constructor(private router: Router, private asignaturasService: AsignaturasService, private location: Location, private route: ActivatedRoute, private eleccionService: EleccionService, private avisosService: AvisosService, private profesoresService: ProfesoresService, private globalConfigService: GlobalConfigService, public dialog: MatDialog, private titleService: Title) {
    this.titleService.setTitle("Elección de docencia");
    this.admin = this.globalConfigService.isAdmin();
    this.tuTurno = this.globalConfigService.getTurno();
    if (this.globalConfigService.getUserinfo().telefono) {
      this.profesor = this.globalConfigService.getUserinfo()
    } else {
      this.profesor = new Profesor;
      this.profesor.usuario = new Usuario;
    }
    this.isMinimiceLeft = isMinimiceLeft;
    this.minimiceLeft = minimiceLeft;
    this.isMinimiceRight = isMinimiceRight;
    this.minimiceRight = minimiceRight;
    this.fetchDay = fetchDay;
    this.searchVals = {
      nombre: ''
    }

    this.creditos = 0;
    this.creditosDeuda = 0;
    addCreditListener()
  }

  ngOnInit() {
    MenuToolbarComponent.updateTitle("Elección Docencia");
    this.loading = true;
    this.valida = true;
    this.asignaturasSelected = [];
    this.asignaturasDivisiblesSelected = [];
    this.desdoblesSelected = [];
    if (this.admin) {
      const id = + this.route.snapshot.paramMap.get('id');
      this.profesoresService.getProfesores()
        .subscribe((profesores) => {
          this.profesores = profesores.filter(profe => !profe.usuario.is_staff);
          this.profesor = profesores.find(profe => profe.usuario.id === id) || profesores[0];
          this.getAsignaturas();
        })
    }
    else {
      this.getAsignaturas();
    }

  }
  onPreventKey(event) {
    event.preventDefault();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmEleccionComponent, {
      data: {
        message: this.eleccion.mensaje,
        confirm: false,
        admin: this.admin
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result.message, result.confirm);
      if (result.confirm) {
        this.eleccion.mensaje = result.message || this.eleccion.mensaje || ".";
        this.saveEleccion();
      }
    });
  }

  search(): void {
    this.loading = true;
    this.asignaturasService.searchAsignatura("", this.searchVals.nombre, "", "", 0, "", "", [])
      .subscribe(asignaturas => {
        this.updateAsignaturas(asignaturas, false);
        this.loading = false;
      });
  }

  updateLoading(state: boolean) {
    this.loading = state;
  }

  updateAsignaturas(asignaturas: Asignatura[], refreshSelected: boolean) {
    asignaturas.map(asignatura => {
      if (asignatura.divisible) {
        asignatura.minCreditos = asignatura.creditos / 3;
        var creditosUsados = 0;
        asignatura.docencia_divisible.map(docencia => {
          if (docencia.profesor !== this.profesor.usuario.id) {
            creditosUsados = creditosUsados + docencia.creditos;
          }
        })
        var creditosDisponibles = asignatura.creditos - creditosUsados;
        if (creditosDisponibles) {
          asignatura.maxCreditos = creditosDisponibles;
        }
        else {
          creditosDisponibles = asignatura.maxCreditos = asignatura.minCreditos = 0;
        }
        asignatura.disponible = this.asignaturaDisponible(asignatura) || asignatura.maxCreditos > 0

      }
      else {
        this.checkDisponibilidad(asignatura)
      }
    })
    this.asignaturas = asignaturas;
    if (!refreshSelected) {
      this.fillSelected(this.eleccion);
    }
    else {
      if (this.profesor.docencia !== null) {
        this.eleccionService.getEleccion(this.profesor.docencia)
          .subscribe(eleccion => {
            this.fillSelected(eleccion);
          });
      }
      else {
        this.eleccion = new Eleccion;
        this.eleccion.profesor = this.profesor.usuario.id;
        this.loading = false;
      }
    }
  }

  getAsignaturas(): void {
    this.location.go('eleccion-docencia/' + this.profesor.usuario.id);
    this.asignaturasService.getAsignaturas()
      .subscribe((asignaturas) => {
        this.updateAsignaturas(asignaturas, true);
        this.todasAsignaturas = asignaturas;
      })
  }

  checkDisponibilidad(asignatura) {
    asignatura.disponible = this.asignaturaDisponible(asignatura)
    asignatura.desdobles.map(desdoble => {
      desdoble.disponible = this.asignaturaDisponible(desdoble);
    })
  }

  asignaturaDisponible(asignatura): boolean {
    if (asignatura.docencia.length > 0 && asignatura.docencia[0].profesor !== this.profesor.usuario.id) {
      return false;
    }
    else if (asignatura.docencia_divisible && asignatura.docencia_divisible.length > 0) {
      var userInDocencia = false
      asignatura.docencia_divisible.map(docencia => {
        userInDocencia = true ? docencia.profesor === this.profesor.usuario.id : null;
      });
      return userInDocencia
    }
    return true;
  }

  fillSelected(eleccion) {
    this.creditos = 0;
    this.eleccion = eleccion;
    this.eleccion.profesor = this.profesor.usuario.id;

    eleccion.mensaje ? eleccion.mensaje : eleccion.mensaje = ".";
    const { asignaturas, desdobles, asignaturas_divisibles, deuda } = eleccion;
    this.creditosDeuda = deuda + this.profesor.pda;
    this.creditos += this.creditosDeuda;
    this.fillAsignaturasWithEleccion(asignaturas);

    if (desdobles.length) { // If there are desdobles
      this.fillDesdoblesWithEleccion(desdobles);
    }
    if (asignaturas_divisibles.length) {
      this.fillAsignaturasDivisiblesWithEleccion(asignaturas_divisibles);
    }

    this.eleccion = eleccion;
    console.log(this.asignaturas)
    this.comprobarEleccion(eleccion);
    this.loading = false;
  }

  fillAsignaturasWithEleccion(asignaturas) {
    this.asignaturasSelected = [...asignaturas];
    this.todasAsignaturas.map(asignatura => {
      this.asignaturasSelected.map(selected => {
        if (selected.id === asignatura.id) {
          this.creditos += selected.creditos;
          asignatura.selected = true;
          var index = this.asignaturas.indexOf(this.asignaturas.find(a => a.id === asignatura.id))
          if (index > -1) {
            this.asignaturas[index] = asignatura
          }
        }
      })
    });
  }

  fillDesdoblesWithEleccion(desdobles) {
    this.desdoblesSelected = [];
    desdobles.map(_desdoble => {
      _desdoble.desdobles ? _desdoble = _desdoble.desdobles[0] : null
      this.asignaturasService.getAsignaturaDesdoble(_desdoble.id)
        .subscribe(asignatura => {
          this.desdoblesSelected = [...this.desdoblesSelected, asignatura[0]];
          this.todasAsignaturas.map(asignatura => {
            asignatura.desdobles.map(desdoble => {
              if (_desdoble.id == desdoble.id) {
                this.creditos += desdoble.creditos;
                desdoble.selected = true;
                var index = this.asignaturas.indexOf(this.asignaturas.find(a => a.id === asignatura.id))
                if (index > -1) {
                  this.asignaturas[index].desdobles = asignatura.desdobles;
                }
              }

            })
          });
        });
    });
  }

  fillAsignaturasDivisiblesWithEleccion(asignaturasDivisibles) {
    this.asignaturasDivisiblesSelected = [...asignaturasDivisibles];
    this.asignaturasDivisiblesSelected.map(asignaturaDivisible => {
      this.creditos += asignaturaDivisible.creditos;
      setTimeout(() => {
        if (document.getElementById(`divisible${asignaturaDivisible.asignatura.id}`)) {
          document.getElementById(`divisible${asignaturaDivisible.asignatura.id}`).setAttribute("value", asignaturaDivisible.creditos.toString());
        }
      }, 0);

    });
  }

  saveEleccion() {
    this.updateEleccion();
    if (!this.loading) {
      if (this.admin) {
        this.eleccion.confirmada = true;
      }
      if (this.eleccion.id !== undefined) {
        this.eleccionService.saveEleccion(this.eleccion);
      }
      else {
        this.eleccionService.createEleccion(this.eleccion).subscribe(data => {
          this.avisosService.enviarMensaje("Elección de docencia guardada correctamente");
          window.location.reload()
        });
      }
    }
  }

  clearEleccion() {
    this.desdoblesSelected = [];
    this.asignaturasSelected = [];
    this.asignaturasDivisiblesSelected = []

    var asignaturasDivisibles = document.getElementsByClassName("divisible");
    for (let index = 0; index < asignaturasDivisibles.length; index++) {
      asignaturasDivisibles[index].setAttribute("value", '')
    }

    this.asignaturas.map(asignatura => {
      asignatura.selected = false;

      asignatura.desdobles.map(desdoble => {
        desdoble.selected = false;
      })

    });

    this.valida = true;
    this.updateEleccion();
  }

  deleteEleccion() {
    this.clearEleccion();
    this.eleccionService.deleteEleccion(this.eleccion.id).subscribe(() => {
      this.avisosService.enviarMensaje("Elección de docencia eliminada correctamente");
      window.location.reload();
    });
  }

  updateEleccion() {
    this.eleccion.asignaturas = [];
    this.eleccion.asignaturas = this.asignaturasSelected;

    this.eleccion.asignaturas_divisibles = [];
    this.eleccion.asignaturas_divisibles = this.asignaturasDivisiblesSelected;

    this.eleccion.desdobles = [];
    this.eleccion.desdobles = this.desdoblesSelected;
    return this.eleccion;
  }

  onSelectAsignatura(asignatura, { selected }) {
    if (this.asignaturaDisponible(asignatura)) {
      if (selected) {
        this.asignaturasSelected = [...this.asignaturasSelected, asignatura];
        this.asignaturas[this.asignaturas.indexOf(asignatura)].selected = true;
        this.creditos += asignatura.creditos;

      }
      else {
        this.asignaturasSelected = this.asignaturasSelected.filter(asign => asign.id !== asignatura.id);
        this.asignaturas[this.asignaturas.indexOf(asignatura)].selected = true;
        this.creditos -= asignatura.creditos;
      }
      this.comprobarEleccion(this.updateEleccion());
    }
  }

  onSelectDesdoble(asignatura, { selected }) {

    if (this.asignaturaDisponible(asignatura.desdobles[0])) {
      if (selected) {
        this.desdoblesSelected = [...this.desdoblesSelected, asignatura];
        this.asignaturas.map(asignaturaMap => {
          if (asignatura === asignaturaMap) {
            asignatura.desdobles.map(desdoble => {
              this.creditos += desdoble.creditos;
              desdoble.selected = true;
            })
          }
        });
      }
      else {
        this.desdoblesSelected = this.desdoblesSelected.filter(asign => asign.id !== asignatura.id);
        this.creditos -= asignatura.desdobles[0].creditos;
      }
      this.comprobarEleccion(this.updateEleccion());
    }
  }

  updateConDeuda(deudaInput) {
    this.creditos -= this.creditosDeuda;
    this.creditosDeuda = deudaInput.valueAsNumber;
    this.creditos += this.creditosDeuda;
  }

  changeCreditVal(credits, asignatura) {
    if (credits.valueAsNumber) {
      let asignaturaD;

      this.asignaturasDivisiblesSelected.map(a => {
        if (a.asignatura === asignatura) {
          this.creditos -= a.creditos;
          a.creditos = credits.valueAsNumber;
          asignaturaD = a;
        }
      });
      if (!asignaturaD) {
        this.asignaturasDivisiblesSelected = [...this.asignaturasDivisiblesSelected, { id: 0, creditos: credits.valueAsNumber, asignatura: asignatura, profesor: this.profesor.usuario.id }]
      }
      this.creditos += credits.valueAsNumber;
    }
    else {

      let asignaturaD = this.asignaturasDivisiblesSelected.filter(asign => asign.asignatura.id == asignatura.id)
      this.creditos -= asignaturaD[0].creditos;
      this.asignaturasDivisiblesSelected = this.asignaturasDivisiblesSelected.filter(asign => asign.asignatura.id !== asignatura.id)
    }
    this.comprobarEleccion(this.updateEleccion());
  }

  comprobarEleccion(eleccion) {
    const { asignaturas, desdobles, asignaturas_divisibles, deuda } = eleccion;
    this.eleccionService.comprobarEleccion(eleccion)
      .subscribe(errores => {
        this.errores = errores;
        const { L, M, X, J, V } = errores;
        this.valida = L == null
          && M == null
          && X == null
          && J == null
          && V == null;

        if (!this.valida) this.avisosService.enviarMensaje("Se han encontrado problemas en la elección")
        this.eleccion.asignaturas = asignaturas;
        this.eleccion.desdobles = desdobles;
        this.eleccion.asignaturas_divisibles = asignaturas_divisibles;
      });
  }

  reset() {
    this.asignaturasSelected = new Array;
    this.desdoblesSelected = new Array;
    this.asignaturasDivisiblesSelected = new Array;
    this.eleccion = new Eleccion;
    this.valida = true;
    this.errores = new ErroresEleccion;
    this.loading = true;
    this.eleccion.confirmada = false;
    this.creditos = 0 + this.profesor.pda;
  }

  puedesElegir(): boolean {
    return this.admin || this.tuTurno
  }
}