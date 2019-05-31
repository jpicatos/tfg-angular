import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../auth/authentication.service';
import { GlobalConfigService } from '../services/global-config.service';
import { Profesor } from '../models/profesor';
import { Usuario } from '../models/usuario';
import { ProfesoresService } from '../services/profesores.service';
import { EleccionService } from '../services/eleccion.service';
import { finalize } from 'rxjs/operators';
import { Departamento } from '../models/departamento';

@Component({
  selector: 'app-menu-toolbar',
  templateUrl: './menu-toolbar.component.html',
  styleUrls: ['./menu-toolbar.component.scss']
})

export class MenuToolbarComponent implements OnInit {
  admin: boolean;
  private static routeTitle: string;
  usuario: Profesor;
  loading: boolean;
  tuTurno: boolean;
  departamento: Departamento;
  miCuenta: boolean;
  profesoresLength: boolean;

  constructor(private route: ActivatedRoute, private authService: AuthenticationService, private globalConfigService: GlobalConfigService, private profesoresService: ProfesoresService, private eleccionService: EleccionService, private router: Router) {
    MenuToolbarComponent.routeTitle = "";
    this.usuario = new Profesor;
    this.usuario.usuario = new Usuario;
    this.miCuenta = true;
    this.profesoresLength = true;
    this.profesoresService.getProfesores().subscribe(profesores => {
      var profes = profesores.filter(profe => !profe.usuario.is_staff);
      if (!profes.length) {
        this.profesoresLength = false;
      }
    })
    this.initData();
  }

  ngOnInit() {
  }

  public static updateTitle(title: string): void {
    MenuToolbarComponent.routeTitle = title;
  }

  get title(): string {
    return MenuToolbarComponent.routeTitle;
  }

  initData(): void {
    this.globalConfigService.getStartLoading().subscribe(loading => {
      setTimeout(() => {
        if (this.loading) {
          window.location.reload();
        }
      }, 10000);
      this.loading = true;
      this.admin = this.globalConfigService.isAdmin();
      var userid = this.globalConfigService.userId();
      userid === 1 ? this.miCuenta = false : this.miCuenta = true;
      this.tuTurno = false;
      this.globalConfigService.saveTurno(false);
      this.globalConfigService.loadDepartamento().subscribe(departamento => {
        this.globalConfigService.saveDepartamento(departamento);
        this.departamento = departamento[0];
        if (userid !== null) {
          this.profesoresService.getProfesor(userid)
            .pipe(finalize(() => {
              if (this.admin) {
                this.usuario.usuario.first_name = "Administrador";
                this.usuario.usuario.last_name = "";
                this.tuTurno = true;
                this.globalConfigService.saveTurno(true);
                this.endLoading();
              }
            }))
            .subscribe(
              usuario => {
                this.globalConfigService.saveProfeInfo(usuario);
                this.usuario = usuario;
                if (!this.admin) {
                  this.globalConfigService.calculateTurno(this.departamento, usuario).subscribe(turno => {
                    turno ? this.tuTurno = true : this.tuTurno = false;
                    this.endLoading()
                  })
                }
              },
              error => {
                if (error.status === 404) {
                  var profesor = new Profesor;
                  profesor.usuario = new Usuario;
                  profesor.usuario.email = "no-email@no-email.com";
                  profesor.usuario.first_name = "Undefined";
                  profesor.usuario.id = userid;
                  profesor.usuario.is_staff = this.admin;
                  profesor.usuario.last_name = "undefined";
                  this.globalConfigService.saveProfeInfo(profesor);
                  this.usuario = profesor;
                  this.endLoading();
                }
              }
            );
        }

      });
    })
  }

  endLoading() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

}