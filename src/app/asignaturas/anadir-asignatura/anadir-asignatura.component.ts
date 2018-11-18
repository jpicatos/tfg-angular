import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Asignatura } from '../models/asignatura';
import { AsignaturasService } from '../asignaturas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Desdoble } from '../models/desdoble';
import { Horario } from '../models/horario';
import { MenuToolbarComponent } from '../menu-toolbar/menu-toolbar.component';

@Component({
  selector: 'app-anadir-asignatura',
  templateUrl: './anadir-asignatura.component.html',
  styleUrls: ['./anadir-asignatura.component.scss']
})
export class AnadirAsignaturaComponent implements OnInit {

  asignatura: Asignatura;

  isLinear: boolean;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  desdobles: FormArray;
  thirdFormGroup: FormGroup;
  fourFormGroup: FormGroup;

  constructor(private angularService: AsignaturasService,
    private route: ActivatedRoute, private router: Router, private _formBuilder: FormBuilder,
    private titleService: Title) {
    this.titleService.setTitle("Añadir una asignatura")
    MenuToolbarComponent.updateTitle("Asignaturas");
    this.asignatura = new Asignatura;
    this.isLinear = false;
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      nombre: ['', Validators.required],
      codigo: ['', Validators.required],
      cuatrimestre: ['', Validators.required],
      curso: ['', Validators.required],
      grupo: ['', Validators.required],
      siglas: ['', Validators.required],
      titulacion: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      departamento: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      desdobles: this._formBuilder.array([this.createDesdoble()])
    });
    this.fourFormGroup = this._formBuilder.group({
      horario: this._formBuilder.array([this.createHorario()])
    });

    let id = this.route.snapshot.paramMap.get('id');

    if (id != null) {
      this.angularService.getAsignatura(Number(id)).subscribe(
        asignatura => this.fillFormulario(asignatura)
      );
    }

  }

  createHorario(): FormGroup {
    return this._formBuilder.group({
      aula: '',
      dias: '',
      hora_inicio: '',
      hora_fin: ''
    });
  }

  createDesdoble(): FormGroup {
    return this._formBuilder.group({
      aula: '',
      dias: '',
      hora_inicio: '',
      hora_fin: ''
    });
  }

  fillFormulario(asignatura): void {
    this.firstFormGroup.setValue({
      nombre: asignatura.nombre,
      codigo: asignatura.codigo,
      cuatrimestre: asignatura.cuatrimestre,
      curso: asignatura.curso,
      grupo: asignatura.grupo,
      siglas: asignatura.siglas,
      titulacion: asignatura.titulacion
    });

    this.secondFormGroup.setValue({
      departamento: asignatura.departamento
    });

    this.desdobles = this.thirdFormGroup.get('desdobles') as FormArray;

    let horario = this.fourFormGroup.get('horario') as FormArray;

    asignatura.desdobles.forEach(element => {
      console.log(element);
      element.horario.forEach(element2 => {
        let form = this.createDesdoble();
        console.log(element2);
        form.setValue({
          aula: element2.aula,
          dias: element2.dia,
          hora_inicio: element2.hora_inicio,
          hora_fin: element2.hora_fin
        });
        this.desdobles.push(form);
      });
    });
/*
    asignatura.horario.forEach(element => {
      let form = this.createHorario();
      form.setValue({
        aula: element.aula,
        dias: element.dia,
        hora_inicio: element.hora_inicio,
        hora_fin: element.hora_fin
      });
      horario.push(form);
    });
*/
    this.thirdFormGroup.setValue({
      desdobles: this.desdobles
    })
/*
    this.fourFormGroup.setValue({
      horario: horario
    });*/
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
    this.angularService.saveAsignatura(this.asignatura);

  }

}
