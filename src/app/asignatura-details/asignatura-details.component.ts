import { Component, OnInit, Input } from '@angular/core';
import { Asignatura } from '../models/asignatura';
import { ActivatedRoute } from '@angular/router';
import { AsignaturasService } from '../asignaturas.service';

@Component({
  selector: 'app-asignatura-details',
  templateUrl: './asignatura-details.component.html',
  styleUrls: ['./asignatura-details.component.css']
})
export class AsignaturaDetailsComponent implements OnInit {

  @Input() asignatura: Asignatura;

  constructor(private angularService: AsignaturasService,
    private route: ActivatedRoute) {
    this.asignatura = new Asignatura;
  }

  ngOnInit() {
    const id = + this.route.snapshot.paramMap.get('id');
    this.angularService.getAsignatura(id).subscribe(asignatura => this.asignatura = asignatura);
  }

}
