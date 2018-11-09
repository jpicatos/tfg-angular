import { Component, OnInit } from '@angular/core';
import { AsignaturasService } from '../asignaturas.service';
import { ActivatedRoute } from '@angular/router';
import { Asignatura } from '../models/asignatura';

@Component({
  selector: 'app-anadir-editar-asignatura',
  templateUrl: './anadir-editar-asignatura.component.html',
  styleUrls: ['./anadir-editar-asignatura.component.css']
})
export class AnadirEditarAsignaturaComponent implements OnInit {

  asignatura: Asignatura;

  constructor(private angularService: AsignaturasService,
    private route: ActivatedRoute) {  }

  ngOnInit() {
    const id =+ this.route.snapshot.paramMap.get('id');
    if(id){
      // this.angularService.getAsignatura(id).subscribe(asignatura => this.asignatura = asignatura);
    }
  }
  save():void{
    if(!this.asignatura){
      
    }
  }

}
