import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Asignatura } from '../models/asignatura';
import { AsignaturasService } from '../asignaturas.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Desdoble } from '../models/desdoble';
import { Horario } from '../models/horario';
import { MenuToolbarComponent } from '../../menu-toolbar/menu-toolbar.component';
import { AvisosService } from '../../avisos.service';

@Component({
  selector: 'app-anadir-asignatura',
  templateUrl: './anadir-asignatura.component.html',
  styleUrls: ['./anadir-asignatura.component.scss']
})
export class AnadirAsignaturaComponent implements OnInit {

  asignatura: Asignatura;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourFormGroup: FormGroup;


  constructor(private angularService: AsignaturasService, private route: ActivatedRoute, private _formBuilder: FormBuilder,
    private titleService: Title, private avisosService: AvisosService) {
    this.titleService.setTitle("Añadir una asignatura")
    MenuToolbarComponent.updateTitle("Asignaturas");
    this.asignatura = new Asignatura;
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourFormGroup = this._formBuilder.group({
      fourCtrl: ['', Validators.required]
    });


    let id = this.route.snapshot.paramMap.get('id');

    if (id != null) {
      this.angularService.getAsignatura(Number(id)).subscribe(
        asignatura => this.asignatura = asignatura
      );
    }

  }

  newDesdoble(): void {
    this.asignatura.desdobles.push(new Desdoble);
  }

  removeDesdoble(i: number): void {
    this.asignatura.desdobles.splice(i, 1);
  }

  newHorario(): void {
    this.asignatura.horario.push(new Horario);
  }

  removeHorario(i: number): void {
    this.asignatura.horario.splice(i, 1);
  }
  newHorarioDesdoble(i: number): void {
    this.asignatura.desdobles[i].horario.push(new Horario);
  }

  removeHorarioDesdoble(i: number, t: number): void {
    this.asignatura.desdobles[i].horario.splice(t, 1);
  }

  save(): void {
    console.log(this.asignatura);

    if (!(this.asignatura.hasOwnProperty('codigo') && this.asignatura.hasOwnProperty('cuatrimestre')
    && this.asignatura.hasOwnProperty('curso') && this.asignatura.hasOwnProperty('departamento')
    && this.asignatura.hasOwnProperty('grupo') && this.asignatura.hasOwnProperty('nombre')
    && this.asignatura.hasOwnProperty('siglas') && this.asignatura.hasOwnProperty('titulacion'))) {
      this.avisosService.enviarMensaje("Debe rellenar todos los campos obligatorios");
    }
    else {
      this.angularService.saveAsignatura(this.asignatura);
    }
  }

}
