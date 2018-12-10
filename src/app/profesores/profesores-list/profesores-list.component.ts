import { Component, OnInit, NgModule } from '@angular/core';
import { ProfesoresService } from '../profesores.service';
import { Profesor } from '../models/profesor';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MenuToolbarComponent } from 'src/app/menu-toolbar/menu-toolbar.component';
import { Deuda } from '../models/deuda';
import { PrefixNot } from '@angular/compiler';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-profesores-list',
  templateUrl: './profesores-list.component.html',
  styleUrls: ['./profesores-list.component.scss']
})
@NgModule({
  providers: [ProfesoresService]
})
export class ProfesoresListComponent implements OnInit {
  profesores: Profesor[];
  selectedProfesor: Profesor;
  selected: number;
  opts: {
    nombre: boolean,
    email: boolean,
    telefono: boolean,
    despacho: boolean,
    departamento: boolean,
    categoria: boolean,
  };
  numCols: number;
  searchVals: {
    nombre: string,
    email: string,
    telefono: string,
    despacho: number,
    departamento: string,
    categoria: string
  }
  loading: boolean;

  constructor(private profesoresService: ProfesoresService, private router: Router, private titleService: Title) {
    this.titleService.setTitle("Profesores");
    this.selected = 1;
    this.opts = {
      nombre: true,
      email: true,
      telefono: false,
      despacho: false,
      departamento: false,
      categoria: true,
    };
    this.searchVals = {
      nombre: '',
      email: "",
      telefono: '',
      despacho: undefined,
      departamento: '',
      categoria: ''
    }
  }

  ngOnInit() {
    MenuToolbarComponent.updateTitle("Profesores");
    this.loading = true;
    this.numCols = 3;
    this.getProfesores();
  }

  getProfesores(): void {
    this.profesoresService.getProfesores()
      .subscribe(
        profesores => {
          this.profesores = profesores;
          this.loading = false;
          console.log(this.profesores);
        },
        error => {
          var profe = new Profesor();
          profe.id = 1;
          profe.categoria = "categoría de prueba";
          profe.departamento = "departamento de prueba";
          profe.despacho = "1234";
          profe.deuda = new Deuda;
          profe.deuda.id = 0;
          profe.deuda.hace_uno = 0;
          profe.deuda.hace_dos = 0;
          profe.deuda.hace_tres = 0;
          profe.deuda.hace_cuatro = 0;
          profe.escalafon = 0;
          profe.pda = 1;
          profe.telefono = "123456789";
          profe.usuario = new Usuario();
          profe.usuario.id = 0;
          profe.usuario.first_name = "Nombre Prueba";
          profe.usuario.last_name = "Apellido Prueba";
          profe.usuario.password = "";
          profe.usuario.username = "nombreusuario";
          profe.usuario.email = "emailprueba@prueba.com";
          this.profesores = [profe];
          this.loading = false;
        }
      )
  }
  onSelect(profesor: Profesor) {
    this.selectedProfesor = profesor;
  }
  updateNumCols(menosUno, num) {
    console.log(this.numCols + '|' + menosUno);
    if (menosUno) {
      this.numCols = this.numCols - num;
    }
    else {
      this.numCols = this.numCols + num;
    }
    console.log(this.numCols + '|' + menosUno);
  }
  search(): void {
    this.loading = true;
    this.profesoresService.searchProfesor(this.searchVals.nombre, this.searchVals.email, this.searchVals.telefono, this.searchVals.despacho, this.searchVals.departamento, this.searchVals.categoria)
      .subscribe(profesores => {
        this.profesores = profesores;
        this.loading = false;
      });
  }
}
