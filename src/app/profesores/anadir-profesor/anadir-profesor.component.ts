import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Profesor } from '../../models/profesor';
import { ProfesoresService } from '../../services/profesores.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AvisosService } from 'src/app/services/avisos.service';
import { MenuToolbarComponent } from 'src/app/menu-toolbar/menu-toolbar.component';
import { Categoria } from '../../models/categoria';
import { GlobalConfigService } from 'src/app/services/global-config.service';

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
  error: boolean;
  isAdmin: boolean;

  constructor(private angularService: ProfesoresService, private route: ActivatedRoute, private _formBuilder: FormBuilder,
    private titleService: Title, private avisosService: AvisosService, private globalService: GlobalConfigService) {
    this.isAdmin = globalService.isAdmin();
    this.titleService.setTitle("Añadir un profesor");
    MenuToolbarComponent.updateTitle("Profesores");
    this.profesor = new Profesor();
    this.profesor.usuario.is_staff = false;
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
    if (id !== null) {
      this.actionTitle = "Editar profesor";
      this.angularService.getProfesor(Number(id)).subscribe(
        profesor => {
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
    let id = this.route.snapshot.paramMap.get('id');
    if (id === null) {
      this.profesor.usuario.username = this.profesor.usuario.email;
      this.profesor.usuario.password = this.passwordGenerator();
    }

    if (this.username == this.profesor.usuario.username) {
      delete this.profesor.usuario.username;
    }

    if (this.password == this.profesor.usuario.password) {
      delete this.profesor.usuario.password;
    }
    if (
      !this.profesor.usuario.first_name ||
      !this.profesor.usuario.last_name ||
      !this.profesor.despacho ||
      !this.profesor.usuario.email ||
      !this.profesor.telefono ||
      this.profesor.escalafon === undefined ||
      !this.profesor.categoria ||
      !this.profesor.departamento
    ) {
      this.avisosService.enviarMensaje("Completa los campos antes de continuar");
    }
    else if(this.profesor.escalafon <= 0){
      this.avisosService.enviarMensaje("El escalafón no puede ser menor o igual a 0");
    }
    else if (
      this.profesor.deuda.hace_uno < 0 ||
      this.profesor.deuda.hace_dos < 0 ||
      this.profesor.deuda.hace_tres < 0 ||
      this.profesor.deuda.hace_cuatro < 0 ||
      this.profesor.pda < 0
    ) {
      this.avisosService.enviarMensaje("Revisa la deuda y la PDA");
    }
    else {
      this.angularService.saveProfesor(this.profesor);
    }
  }

  passwordGenerator() {
    var length = Math.floor((Math.random() * 18) + 10);
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.-?¿/#@!¡/*-+.";

    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

}
