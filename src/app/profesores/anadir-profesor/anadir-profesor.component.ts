import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Profesor } from '../models/profesor';
import { ProfesoresService } from '../profesores.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AvisosService } from 'src/app/avisos.service';
import { MenuToolbarComponent } from 'src/app/menu-toolbar/menu-toolbar.component';

@Component({
  selector: 'app-anadir-profesor',
  templateUrl: './anadir-profesor.component.html',
  styleUrls: ['./anadir-profesor.component.scss']
})
export class AnadirProfesorComponent implements OnInit {

  /* Propiedades necesarias para cuando se edita una asignatura */
  editar: boolean;

  profesor: Profesor;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;


  constructor(private angularService: ProfesoresService, private route: ActivatedRoute, private _formBuilder: FormBuilder,
    private titleService: Title, private avisosService: AvisosService) {
    this.titleService.setTitle("Añadir un profesor")
    MenuToolbarComponent.updateTitle("Profesores");
    this.profesor = new Profesor;
    this.editar = false;
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });


    let id = this.route.snapshot.paramMap.get('id');

    if (id != null) {
      this.angularService.getProfesor(Number(id)).subscribe(
        profesor => this.profesor = profesor
      );

      this.editar = true;   // Al existir un ID en la URL es una edición de una asignatura existente
    }

  }
  save(): void {
    console.log(this.profesor);

    if (!(this.profesor.hasOwnProperty('categoria') && this.profesor.hasOwnProperty('telefono')
      && this.profesor.hasOwnProperty('pda') && this.profesor.hasOwnProperty('departamento')
      && this.profesor.hasOwnProperty('grupo') && this.profesor.hasOwnProperty('nombre'))) {
      this.avisosService.enviarMensaje("Debe rellenar todos los campos obligatorios");
    }
    else {
      this.angularService.saveProfesor(this.profesor);
    }
  }

}
