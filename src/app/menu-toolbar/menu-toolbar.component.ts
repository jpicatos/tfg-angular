import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../auth/authentication.service';
import { GlobalConfigService } from '../services/global-config.service';
import { Profesor } from '../models/profesor';
import { Usuario } from '../models/usuario';
import { ProfesoresService } from '../services/profesores.service';

@Component({
  selector: 'app-menu-toolbar',
  templateUrl: './menu-toolbar.component.html',
  styleUrls: ['./menu-toolbar.component.css']
})

export class MenuToolbarComponent implements OnInit {
  admin: boolean;
  private static routeTitle: string;
  usuario: Profesor;
  loading: boolean;
  tuTurno: boolean;

  constructor(private route: ActivatedRoute, private authService: AuthenticationService, private globalConfigService: GlobalConfigService, private profesoresService: ProfesoresService) {
    MenuToolbarComponent.routeTitle = "";
    this.usuario = new Profesor;
    this.usuario.usuario = new Usuario;
    this.initData();
  }

  ngOnInit() {}

  public static updateTitle(title: string): void {
    MenuToolbarComponent.routeTitle = title;
  }

  get title(): string {
    return MenuToolbarComponent.routeTitle;
  }

  initData(): void {
    this.globalConfigService.getStartLoading().subscribe(loading => {
      console.log("initData");
      this.loading = true;
      this.admin = this.globalConfigService.isAdmin();
      var userid = this.globalConfigService.userId();
      this.tuTurno = false;
      if (!this.admin) {
        this.profesoresService.getProfesor(userid).subscribe(usuario => {
          this.globalConfigService.saveProfeInfo(usuario);
          this.usuario = usuario;

          if (!this.usuario.docencia) {
            if (this.usuario.escalafon - 1 < 1) {
              this.tuTurno = true;
              this.loading = false;
            }
            else {
              this.profesoresService.searchProfesor("", "", "", "", null, this.usuario.escalafon - 1, null).subscribe(profesores => {
                if (profesores[0].docencia) {
                  this.tuTurno = true;
                }
                this.loading = false;
              })
            }
          }
          else {
            this.loading = false;
          }
        });
      }
      else {
        this.usuario.usuario.first_name = "Administrador";
        this.tuTurno = true;
        this.globalConfigService.loadDepartamento().subscribe(departamento => {
          this.globalConfigService.saveDepartamento(departamento);
          // setTimeout(()=> { this.loading = false }, 5000);
          this.loading = false;
        });
      }
    })
  }
}
