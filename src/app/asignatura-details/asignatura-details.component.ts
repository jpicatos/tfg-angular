import { Component, OnInit, Input } from '@angular/core';
import { Title, disableDebugTools } from "@angular/platform-browser";
import { Asignatura } from '../models/asignatura';
import { ActivatedRoute } from '@angular/router';
import { AsignaturasService } from '../asignaturas.service';
import { MenuToolbarComponent } from '../menu-toolbar/menu-toolbar.component';

@Component({
  selector: 'app-asignatura-details',
  templateUrl: './asignatura-details.component.html',
  styleUrls: ['./asignatura-details.component.scss']
})
export class AsignaturaDetailsComponent implements OnInit {

  @Input() asignatura: Asignatura;
  loaded: boolean;
  displayedColumns: string[];
  asignaturaData: any[];

  constructor(private angularService: AsignaturasService,
    private route: ActivatedRoute, private titleService: Title) {
    this.loaded = false;
    this.asignatura = new Asignatura;
    this.asignatura.codigo = '000000';
    this.asignatura.cuatrimestre = 1;
    this.asignatura.curso = '2º';
    this.asignatura.departamento = 'test';
    this.asignatura.grupo = 'B';
    this.asignatura.id = 2;
    this.asignatura.nombre = 'Mocked Nombre';
    this.asignatura.siglas = 'MN';
    this.asignatura.titulacion = 'testTitu';
    
  }

  ngOnInit() {
    this.displayedColumns = ['titles', 'data'];
    const id = + this.route.snapshot.paramMap.get('id');
    MenuToolbarComponent.updateTitle("Asignaturas");
    this.angularService.getAsignatura(id).subscribe(asignatura => {
      this.update(asignatura);
      this.loaded = true;
    }

    );
    this.prepareGeneralData();
    console.log(this.asignaturaData);
    this.loaded = true;

  }

  update(asignatura) {
    this.asignatura = asignatura;
    this.titleService.setTitle(this.asignatura.nombre)
  }

  prepareGeneralData() {
    var titles = ['Código', 'Cuatrimestre', 'Curso', 'Departamento', 'Grupo', 'Identificador', 'Titulación'];
    var data = [];
    data.push(this.asignatura.codigo);
    data.push(this.asignatura.cuatrimestre);
    data.push(this.asignatura.curso);
    data.push(this.asignatura.departamento);
    data.push(this.asignatura.grupo);
    data.push(this.asignatura.id);
    data.push(this.asignatura.titulacion);

    var total = {
      'titles': titles,
      'data': data
    }
    this.asignaturaData = [total];
  }

}
