import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../auth/authentication.service';
import { GlobalConfigService } from '../services/global-config.service';
import { Profesor } from '../models/profesor';
import { Usuario } from '../models/usuario';
import { ProfesoresService } from '../services/profesores.service';
import { EleccionService } from '../services/eleccion.service';

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

  constructor(private route: ActivatedRoute, private authService: AuthenticationService, private globalConfigService: GlobalConfigService, private profesoresService: ProfesoresService, private eleccionService: EleccionService, private router: Router) {
    MenuToolbarComponent.routeTitle = "";
    this.usuario = new Profesor;
    this.usuario.usuario = new Usuario;
    this.initData();
  }

  ngOnInit() { }

  public static updateTitle(title: string): void {
    MenuToolbarComponent.routeTitle = title;
  }

  get title(): string {
    return MenuToolbarComponent.routeTitle;
  }

  initData(): void {
    this.globalConfigService.getStartLoading().subscribe(loading => {
      this.loading = true;
      this.admin = this.globalConfigService.isAdmin();
      var userid = this.globalConfigService.userId();
      this.tuTurno = false;
      this.globalConfigService.saveTurno(false);
      this.globalConfigService.loadDepartamento().subscribe(departamento => {
        this.globalConfigService.saveDepartamento(departamento);
        if(userid !== null){
          this.profesoresService.getProfesor(userid).subscribe(usuario => {
            this.globalConfigService.saveProfeInfo(usuario);
            this.usuario = usuario;
            if (!this.admin) {
              this.turno();
            }
            else{
              this.endLoading();
            }
          });
        }
        if (this.admin) {
          this.usuario.usuario.first_name = "Administrador" || this.usuario.usuario.first_name;
          this.tuTurno = true;
          this.globalConfigService.saveTurno(true);
          if(userid === null){
            this.endLoading();
          }
        }
      });
    })
  }

  turno(): void {
    if (!this.usuario.docencia) {
      if (this.usuario.escalafon - 1 < 1) {
        this.endLoading();
        this.tuTurno = true;
        this.globalConfigService.saveTurno(true);
      }
      else {
        this.profesoresService.searchProfesor("", "", "", "", null, this.usuario.escalafon - 1, null).subscribe(profesores => {
          if (profesores[0].docencia) {
            this.eleccionService.getEleccion(profesores[0].docencia).subscribe(docencia => {
              this.endLoading();
              if (docencia.confirmada) {
                this.tuTurno = true;
                this.globalConfigService.saveTurno(true);
              }
            });
          }
          else {
            this.endLoading();
          }
        })
      }
    }
    else {
      this.eleccionService.getEleccion(this.usuario.docencia).subscribe(docencia => {
        docencia.confirmada ? this.tuTurno = false : this.tuTurno = true;
        this.globalConfigService.saveTurno(this.tuTurno);
        this.endLoading();
        // this.loading = false;
      })

    }
  }

  endLoading(){
    setTimeout(() => {
      this.loading = false;
    }, 4000);
  }

}
