import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Profesor } from '../../models/profesor';
import { ProfesoresService } from '../../services/profesores.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AvisosService } from 'src/app/services/avisos.service';
import { MenuToolbarComponent } from 'src/app/menu-toolbar/menu-toolbar.component';
import { Categoria } from '../../models/categoria';

@Component({
  selector: 'app-anadir-profesor',
  templateUrl: './anadir-profesor.component.html',
  styleUrls: ['./anadir-profesor.component.scss']
})
export class AnadirProfesorComponent implements OnInit {
  profesor: Profesor;
  
  username: string; // Atributo para comparar si el nombre de usuario ha sido cambiado
  password: string; // Lo mismo que el anterior. La petición HTTP cambia si se cambian estos valores

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  categorias: Categoria[];
  actionTitle: string;


  constructor(private angularService: ProfesoresService, private route: ActivatedRoute, private _formBuilder: FormBuilder,
    private titleService: Title, private avisosService: AvisosService) {
    this.titleService.setTitle("Añadir un profesor");
    MenuToolbarComponent.updateTitle("Profesores");
    this.profesor = new Profesor();
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.actionTitle = "Añadir profesor";

    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.angularService.getProfesor(Number(id)).subscribe(
        profesor => {
          console.log(profesor);
          this.profesor = profesor;
          this.username = profesor.usuario.username;
          this.password = profesor.usuario.password;
        }

      );
      this.actionTitle = "Editar profesor";
    }

    this.getCategorias();

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

    /*
    La petición a la API no debe llevar el username ni el password si no han sido modificados
    */

    if (this.username == this.profesor.usuario.username) {
      delete this.profesor.usuario.username;
    }

    if (this.password == this.profesor.usuario.password) {
      delete this.profesor.usuario.password;
    }

    this.angularService.saveProfesor(this.profesor);

  }

}
