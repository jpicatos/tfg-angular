import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../auth/authentication.service';
import { GlobalConfigService } from '../services/global-config.service';
import { Profesor } from '../models/profesor';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-menu-toolbar',
  templateUrl: './menu-toolbar.component.html',
  styleUrls: ['./menu-toolbar.component.css']
})

export class MenuToolbarComponent implements OnInit {
  admin: boolean;
  private static routeTitle: string;
  usuario: Profesor;

  constructor(private route: ActivatedRoute, private authService: AuthenticationService, private globalConfigService: GlobalConfigService) {
    MenuToolbarComponent.routeTitle = "";
    this.admin = this.globalConfigService.isAdmin();
    this.usuario = new Profesor;
    this.usuario.usuario = new Usuario;
    this.globalConfigService.getUserinfo().subscribe(u => this.usuario = u);
  }

  ngOnInit() {

  }

  public static updateTitle(title: string): void {
    MenuToolbarComponent.routeTitle = title;
  }

  get title(): string {
    return MenuToolbarComponent.routeTitle;
  }

}
