import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Profesor } from '../models/profesor';
import { ProfesoresService } from '../profesores.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AvisosService } from 'src/app/avisos.service';
import { MenuToolbarComponent } from 'src/app/menu-toolbar/menu-toolbar.component';
import { Categoria } from '../models/categoria';
import { Usuario } from '../models/usuario';
import { Deuda } from '../models/deuda';

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
  categorias: Categoria[];
  loaded: boolean;


  constructor(private angularService: ProfesoresService, private route: ActivatedRoute, private _formBuilder: FormBuilder,
    private titleService: Title, private avisosService: AvisosService) {
    this.titleService.setTitle("Añadir un profesor");
    MenuToolbarComponent.updateTitle("Profesores");
    this.profesor = new Profesor();
    this.editar = false;
    this.loaded = false;
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
        profesor => {
          console.log(profesor);
          this.profesor = profesor
          this.getCategorias();
          this.loaded = true;
        }

      );

      this.editar = true;   // Al existir un ID en la URL es una edición de una asignatura existente
    }

  }

  getCategorias() {
    this.angularService.getCategorias()
      .subscribe(
        categorias => {
          this.categorias = categorias;
        });
  }

  save(): void {
    console.log(this.profesor);

    this.angularService.saveProfesor(this.profesor);

  }

}
