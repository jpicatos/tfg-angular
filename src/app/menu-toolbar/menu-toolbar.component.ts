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
    this.admin = this.globalConfigService.isAdmin();
    this.usuario = new Profesor;
    this.usuario.usuario = new Usuario;

    this.loading = true;
  }

  ngOnInit() {
    this.tuTurno = false;
    this.globalConfigService.getUserinfo().subscribe(u => {
      this.tuTurno = false;
      this.usuario = u;
      if (!this.usuario.docencia) {
        if (this.usuario.escalafon - 1 < 1) {
          this.tuTurno = true;
          this.loading = false;
        }
        else {
          console.log(this.usuario.escalafon - 1)
          this.profesoresService.searchProfesor("", "", "", "", null, this.usuario.escalafon - 1, null).subscribe(profesores => {
            if (profesores[0].docencia) {
              this.tuTurno = true;
            }
            this.loading = false;
          })
        }
      }

    });
    if (this.loading) {
      this.usuario.usuario.first_name = "Administrador";
      this.tuTurno = true;
      this.loading = false;
    }

  }

  public static updateTitle(title: string): void {
    MenuToolbarComponent.routeTitle = title;
  }

  get title(): string {
    return MenuToolbarComponent.routeTitle;
  }

}
