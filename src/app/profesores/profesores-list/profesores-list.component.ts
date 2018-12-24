import { Component, OnInit, NgModule } from '@angular/core';
import { ProfesoresService } from '../../services/profesores.service';
import { Profesor } from '../../models/profesor';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MenuToolbarComponent } from 'src/app/menu-toolbar/menu-toolbar.component';
import { Deuda } from '../../models/deuda';
import { PrefixNot } from '@angular/compiler';
import { Usuario } from '../../models/usuario';
import { Categoria } from '../../models/categoria';

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
    escalafon: boolean;
    apellidos: boolean;
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
    apellidos: string,
    email: string,
    telefono: string,
    despacho: number,
    escalafon: number,
    categoria: string
  }
  loading: boolean;

  categorias: Categoria[];

  constructor(private profesoresService: ProfesoresService, private router: Router, private titleService: Title) {
    this.titleService.setTitle("Profesores");
    this.selected = 1;
    this.opts = {
      escalafon: true,
      nombre: true,
      apellidos: true,
      email: true,
      telefono: false,
      despacho: false,
      departamento: false,
      categoria: true,
    };
    this.searchVals = {
      nombre: "",
      apellidos: "",
      email: "",
      telefono: "",
      despacho: undefined,
      escalafon: undefined,
      categoria: ""
    }
  }

  ngOnInit() {
    MenuToolbarComponent.updateTitle("Profesores");
    this.loading = true;
    this.numCols = 5;
    this.getProfesores();

    this.profesoresService.getCategorias()
      .subscribe(
        categorias => {
          this.categorias = categorias;
        });
  }

  getProfesores(): void {
    this.profesoresService.getProfesores()
      .subscribe(
        profesores => {
          this.profesores = profesores.sort((a: Profesor, b: Profesor) => {
            return a.escalafon - b.escalafon;
          });
          this.loading = false;
          console.log(this.profesores);
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
    this.profesoresService.searchProfesor(this.searchVals.nombre, this.searchVals.apellidos, this.searchVals.email, this.searchVals.telefono, this.searchVals.despacho, this.searchVals.escalafon, this.searchVals.categoria)
      .subscribe(profesores => {
        this.profesores = profesores.sort((a: Profesor, b: Profesor) => {
          return a.escalafon - b.escalafon;
        });
        this.highlightResults();
        this.loading = false;
      });
  }
  highlightResults(): void {
    this.profesores.forEach(profe => {
      if (profe.usuario.first_name && this.searchVals.nombre) {
        var regex = new RegExp(this.searchVals.nombre, 'gi')
        profe.usuario.first_name = profe.usuario.first_name.replace(regex, function (str) { return "<span class='highlight'>" + str + "</span>" });
      };
      if (profe.usuario.last_name && this.searchVals.apellidos) {
        var regex = new RegExp(this.searchVals.apellidos, 'gi')
        profe.usuario.last_name = profe.usuario.last_name.replace(regex, function (str) { return "<span class='highlight'>" + str + "</span>" });
      };
      if (profe.usuario.email && this.searchVals.email) {
        var regex = new RegExp(this.searchVals.email, 'gi')
        profe.usuario.email = profe.usuario.email.replace(regex, function (str) { return "<span class='highlight'>" + str + "</span>" });
      };
      if (profe.telefono && this.searchVals.telefono) {
        profe.telefono = profe.telefono.replace(this.searchVals.telefono, "<span class='highlight'>" + this.searchVals.telefono + "</span>");
      };
      if (profe.despacho && String(this.searchVals.despacho)) {
        profe.despacho = profe.despacho.replace(String(this.searchVals.despacho), "<span class='highlight'>" + this.searchVals.despacho + "</span>");
      };
    });
  }
}
