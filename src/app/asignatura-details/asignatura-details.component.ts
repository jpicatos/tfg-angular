import { Component, OnInit, Input } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Asignatura } from '../models/asignatura';
import { ActivatedRoute } from '@angular/router';
import { AsignaturasService } from '../asignaturas.service';
import { MenuToolbarComponent } from '../menu-toolbar/menu-toolbar.component';

@Component({
  selector: 'app-asignatura-details',
  templateUrl: './asignatura-details.component.html',
  styleUrls: ['./asignatura-details.component.css']
})
export class AsignaturaDetailsComponent implements OnInit {

  @Input() asignatura: Asignatura;

  constructor(private angularService: AsignaturasService,
    private route: ActivatedRoute, private titleService: Title) {
    this.asignatura = new Asignatura;
  }

  ngOnInit() {
    const id = + this.route.snapshot.paramMap.get('id');
    MenuToolbarComponent.updateTitle("Asignaturas");
    this.angularService.getAsignatura(id).subscribe(asignatura => this.update(asignatura));
    
  }

  update(asignatura) {
    this.asignatura = asignatura;
    this.titleService.setTitle(this.asignatura.nombre)
  }

}
