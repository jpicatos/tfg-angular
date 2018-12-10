import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Profesor} from "./models/profesor";
import { AvisosService } from '../avisos.service';
import { Categoria } from './models/categoria';


@Injectable()
export class ProfesoresService {

  private profesoresUrl = '/api/profesores/';

  constructor(private http: HttpClient, private router: Router, private avisosService: AvisosService) { }

  getProfesores(): Observable<Profesor[]> {
    return this.http.get<Profesor[]>(this.profesoresUrl);
  }

  getProfesor(id: number): Observable<Profesor> {
    return this.http.get<Profesor>(this.profesoresUrl + id);
  }

  saveProfesor(profesor: Profesor): void {
    if (profesor.usuario.id != undefined) {
      this.http.put<Profesor>(this.profesoresUrl + profesor.usuario.id + '/', profesor)
        .subscribe(data => {   // data is already a JSON object
          this.router.navigate(['/profesores/' + profesor.id]);
          this.avisosService.enviarMensaje("Se han actualizado los cambios correctamente");
        });
    }
    else {
      this.http.post<Profesor>(this.profesoresUrl, profesor)
        .subscribe(data => {   // data is already a JSON object
          this.router.navigate(['/profesores/' + data.id]);
          this.avisosService.enviarMensaje("Se ha creado la profesor correctamente");
        });
    }

  }

  deleteProfesor(id: number): void {
    this.http.delete<Profesor>(this.profesoresUrl + id)
      .subscribe(profesor => { this.router.navigate(['/profesores']); });
  }

  getCategoria(cate: string): Observable<Categoria>{
    return this.http.get<Categoria>(this.profesoresUrl +"categorias/"+ cate);
  }

  getCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.profesoresUrl +"categorias");
  }

  searchProfesor(nombre: string, email: string, telefono: string, despacho: number, departamento: string): Observable<Profesor[]> {
    var params = 'nombre=' + nombre +
      '&username=' + email +
      '&telefono=' + telefono +
      '&departamento=' + departamento

    if(despacho){
      params += '&despacho=' + despacho;
    }

    console.log(params);
    return this.http.get<Profesor[]>(this.profesoresUrl + '?' + params);
  }

}
