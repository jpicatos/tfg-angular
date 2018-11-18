import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-toolbar',
  templateUrl: './menu-toolbar.component.html',
  styleUrls: ['./menu-toolbar.component.css']
})

export class MenuToolbarComponent implements OnInit {

  private static routeTitle: string;

  constructor(private route: ActivatedRoute) { 
    MenuToolbarComponent.routeTitle = "";
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
