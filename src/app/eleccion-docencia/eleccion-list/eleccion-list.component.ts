import { Component, OnInit, NgModule, ViewChild, OnDestroy } from '@angular/core';
import { ResizableModule, ResizeEvent } from 'angular-resizable-element';
import { Asignatura, AsignaturaDivisible } from 'src/app/models/asignatura';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { MenuToolbarComponent } from 'src/app/menu-toolbar/menu-toolbar.component';
import { EleccionService } from 'src/app/services/eleccion.service';
import { AvisosService } from 'src/app/services/avisos.service';
import { Eleccion } from 'src/app/models/eleccion';
import { ErroresEleccion } from 'src/app/models/erroresEleccion';
import { ProfesoresService } from 'src/app/services/profesores.service';

import { isMinimiceLeft, minimiceLeft, isMinimiceRight, minimiceRight, fetchDay } from "./utils";
import { SearchSidenavComponent } from 'src/app/util-components/search-sidenav/search-sidenav.component';
import { Profesor } from 'src/app/models/profesor';
import { GlobalConfigService } from 'src/app/services/global-config.service';
import { Usuario } from 'src/app/models/usuario';
import { MatDialog } from '@angular/material';
import { ConfirmEleccionComponent } from '../confirm-eleccion/confirm-eleccion.component';

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
  asignaturas: Asignatura[];
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

  constructor(private asignaturasService: AsignaturasService, private eleccionService: EleccionService, private avisosService: AvisosService, private profesoresService: ProfesoresService, private globalConfigService: GlobalConfigService, public dialog: MatDialog) {
    this.admin = this.globalConfigService.isAdmin()
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
  }

  ngOnInit() {
    MenuToolbarComponent.updateTitle("Elección Docencia");
    this.loading = true;
    this.valida = true;
    this.asignaturasSelected = [];
    this.asignaturasDivisiblesSelected = [];
    this.desdoblesSelected = [];
    this.getAsignaturas();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmEleccionComponent, {
      data: {
        message: "",
        confirm: false,
        admin: this.admin
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result.message, result.confirm);
      if (result.confirm) {
        if (!this.admin) {
          this.eleccion.mensaje = result.message || " ";
        }
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
    this.asignaturas = asignaturas;
    if (refreshSelected) this.fillSelected();
  }

  getAsignaturas(): void {
    this.asignaturasService.getAsignaturas()
      .subscribe((asignaturas) => {
        asignaturas.map(asignatura => {
          if (asignatura.divisible) {
            asignatura.minCreditos = asignatura.creditos / 3;
            var creditosUsados = 0;
            asignatura.docencia_divisible.map(docencia => {
              creditosUsados = creditosUsados + docencia.creditos;
            })
            var creditosDisponibles = asignatura.creditos - creditosUsados;
            if (creditosDisponibles > 0) {
              asignatura.maxCreditos = creditosDisponibles;
            }
            else {
              creditosDisponibles = 0;
              asignatura.maxCreditos = 0;
              asignatura.minCreditos = 0;
            }
          }
          else{
            if(!this.admin){
              asignatura.disponible=this.asignaturaDisponible(asignatura)
            }
            else{
              asignatura.disponible = true;
            }
            
          }
        })
        if (this.admin) {
          this.profesoresService.getProfesores()
            .subscribe((profesores) => {
              this.profesores = profesores;
              this.profesor = profesores[0];
              this.updateAsignaturas(asignaturas, true);
            })
        }
        else {
          this.updateAsignaturas(asignaturas, true);
        }
      })
  }
  asignaturaDisponible(asignatura):boolean{
    if(asignatura.docencia.lenght > 0){
      if(asignatura.docencia.profesor !== this.profesor.usuario.id){
        return false;
      }
    }
    return true;
  }
  fillSelected() {
    this.reset();
    this.eleccion.profesor = this.profesor.usuario.id;
    this.clearEleccion();
    if (this.profesor.docencia !== null) {
      this.eleccionService.getEleccion(this.profesor.docencia)
        .subscribe(eleccion => {
          const { asignaturas, desdobles, asignaturas_divisibles } = eleccion;
          this.fillAsignaturasWithEleccion(asignaturas);

          if (desdobles.length) { // If there are desdobles
            this.fillDesdoblesWithEleccion(desdobles);
          }
          if (asignaturas_divisibles.length) {
            this.fillAsignaturasDivisiblesWithEleccion(asignaturas_divisibles);
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
          this.creditos += selected.creditos;
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
              if (_desdoble.id == desdoble.id) {
                this.creditos += desdoble.creditos;
                desdoble.selected = true;
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
      document.getElementById(`divisible${asignaturaDivisible.asignatura.id}`).setAttribute("value", asignaturaDivisible.creditos.toString());
    });
  }

  saveEleccion() {
    if (this.valida && !this.loading) {
      if (this.admin) {
        this.eleccion.confirmada = true;
      }
      if (this.eleccion.id !== undefined) {
        console.log(this.eleccion)
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

    this.eleccion.asignaturas_divisibles = [];
    this.eleccion.asignaturas_divisibles = this.asignaturasDivisiblesSelected.map(asignatura => {
      return { id: asignatura.id, creditos: asignatura.creditos, asignatura: asignatura.id }
    })

    this.eleccion.desdobles = [];
    this.eleccion.desdobles = this.desdoblesSelected.map(desdoble => desdoble.desdobles[0].id)
    return this.eleccion;
  }

  onSelectAsignatura(asignatura, { selected }) {
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
    this.comprobarEleccion();
  }

  onSelectDesdoble(asignatura, { selected }) {
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
    this.comprobarEleccion();
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
        this.asignaturasDivisiblesSelected = [...[{ id: 0, creditos: credits.valueAsNumber, asignatura: asignatura }]]
      }
      this.creditos += credits.valueAsNumber;
    }
    else {

      let asignaturaD = this.asignaturasDivisiblesSelected.filter(asign => asign.asignatura.id == asignatura.id)
      this.creditos -= asignaturaD[0].creditos;
      this.asignaturasDivisiblesSelected = this.asignaturasDivisiblesSelected.filter(asign => asign.asignatura.id !== asignatura.id)
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

  reset() {
    this.asignaturasSelected = new Array;
    this.desdoblesSelected = new Array;
    this.asignaturasDivisiblesSelected = new Array;
    this.eleccion = new Eleccion;
    this.valida = true;
    this.errores = new ErroresEleccion;
    this.loading = true;
    this.eleccion.confirmada = false;
    this.creditos = 0;
  }

}