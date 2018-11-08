import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-toolbar',
  templateUrl: './menu-toolbar.component.html',
  styleUrls: ['./menu-toolbar.component.css']
})
export class MenuToolbarComponent implements OnInit {

  routeTitle : string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.routeTitle = this.route.toString();
  }
  updateTitle(title: string) :void{
    this.routeTitle = title;
  }

}
