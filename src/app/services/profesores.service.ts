import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Profesor, ProfesorImportar } from "../models/profesor";
import { AvisosService } from './avisos.service';
import { Categoria } from '../models/categoria';
import { Cacheable } from "ngx-cacheable";
import { Usuario } from '../models/usuario';

@Injectable()
export class ProfesoresService {

  private profesoresUrl = '/api/profesores/';
  private profesoresOrder = "?ordering=escalafon";
  constructor(private http: HttpClient, private router: Router, private avisosService: AvisosService) { }
  // @Cacheable()
  getProfesores(): Observable<Profesor[]> {
    return this.http.get<Profesor[]>(this.profesoresUrl + this.profesoresOrder);
  }

  getProfesor(id: number): Observable<Profesor> {
    if (id > 1) {
      return this.http.get<Profesor>(this.profesoresUrl + id + '/');
    }
    return new Observable((observer) => {
      var profesor = new Profesor;
      profesor.usuario = new Usuario;
      profesor.usuario.email = "no-email@no-email.com";
      profesor.usuario.first_name = "Administrador";
      profesor.usuario.id = id;
      profesor.usuario.is_staff = true;
      profesor.usuario.last_name = "administrador";
      observer.next(profesor); 
      observer.complete();
    })
  }

  saveProfesor(profesor: Profesor): void {
    if (profesor.usuario.id != undefined) {
      this.http.patch<Profesor>(this.profesoresUrl + profesor.usuario.id + '/', profesor)
        .subscribe(
          data => {
            this.router.navigate(['/profesores/' + profesor.usuario.id]);
            this.avisosService.enviarMensaje("Se han actualizado los cambios correctamente");
          },
          err => {
            this.avisosService.enviarMensaje("Error al editar el profesor, por favor, revisa los campos");
          }
        );
    }
    else {
      this.http.post<Profesor>(this.profesoresUrl, profesor)
        .subscribe(
          data => {
            this.router.navigate(['/profesores/' + data.usuario.id]);
            this.avisosService.enviarMensaje("Se ha creado la profesor correctamente");
          },
          err => {
            this.avisosService.enviarMensaje("Error al crear el profesor, por favor, revisa los campos");
          }
        );
    }
  }

  deleteProfesor(id: number): void {
    this.http.delete<Profesor>(this.profesoresUrl + id + '/')
      .subscribe(profesor => { 
        let lastProfesor = localStorage.getItem("lastProfesor");
        if (lastProfesor && parseInt(lastProfesor) == id) {
          localStorage.removeItem(id.toString());
          localStorage.removeItem("lastProfesor");
        }

        this.router.navigate(['/profesores']); 
    });
  }

  getCategoria(cate: string): Observable<Categoria> {
    return this.http.get<Categoria>(this.profesoresUrl + "categorias/" + cate + '/');
  }

  @Cacheable()
  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.profesoresUrl + "categorias/");
  }

  searchProfesor(nombre: string, apellidos: string, email: string, telefono: string, despacho: number, escalafon: number, categoria: string): Observable<Profesor[]> {
    var params = 'nombre=' + encodeURIComponent(nombre) +
      '&apellido=' + encodeURIComponent(apellidos) +
      '&usuario=' + encodeURIComponent(email) +
      '&telefono=' + encodeURIComponent(telefono);

    if (despacho) {
      params += '&despacho=' + despacho;
    }
    if (categoria) {
      params += '&categoria=' + encodeURIComponent(categoria);
    }
    if (escalafon) {
      params += '&escalafon=' + escalafon;
    }

    return this.http.get<Profesor[]>(this.profesoresUrl + this.profesoresOrder + '&' + params);
  }

  importar(archivo: File, departamento_siglas: string, sobrescribir: boolean): Observable<ProfesorImportar> {
    const uploadData = new FormData();
    uploadData.append('excel_file', archivo, archivo.name);
    uploadData.append('departamento_siglas', departamento_siglas);
    uploadData.append('sobrescribir', sobrescribir ? "true" : "false");

    return this.http.post<ProfesorImportar>(this.profesoresUrl + 'importar/', uploadData);
  }

  exportar(): Observable<Blob> {
    // this.http refers to HttpClient. Note here that you cannot use the generic get<Blob> as it does not compile: instead you "choose" the appropriate API in this way.
    return this.http.get(this.profesoresUrl + "exportar/", { responseType: 'blob' });
  }

}
