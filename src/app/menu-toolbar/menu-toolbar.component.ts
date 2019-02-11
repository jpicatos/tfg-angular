import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'app-menu-toolbar',
  templateUrl: './menu-toolbar.component.html',
  styleUrls: ['./menu-toolbar.component.css']
})

export class MenuToolbarComponent implements OnInit {

  private static routeTitle: string;
  name: string;

  constructor(private route: ActivatedRoute, private authService: AuthenticationService) { 
    MenuToolbarComponent.routeTitle = "";
  }

  ngOnInit() {
    this.authService.name.subscribe(name => this.name = name)
  }

  public static updateTitle(title: string): void {
    MenuToolbarComponent.routeTitle = title;
  }

  get title(): string {
    return MenuToolbarComponent.routeTitle;
  }

}
