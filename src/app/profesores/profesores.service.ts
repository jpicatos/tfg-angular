import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Profesor} from "./models/profesor";
import { AvisosService } from '../avisos.service';


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
    if (profesor.id != undefined) {
      this.http.put<Profesor>(this.profesoresUrl + profesor.id + '/', profesor)
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

  searchProfesor(nombre: string, email: string, telefono: string, despacho: number, departamento: string, categoria: string): Observable<Profesor[]> {
    var params = '&nombre=' + nombre +
      '&email=' + email +
      '&telefono=' + telefono +
      '&departamento=' + departamento +
      '&categoria=' + categoria;

    if(despacho){
      params += '&despacho=' + despacho;
    }

    console.log(params);
    return this.http.get<Profesor[]>(this.profesoresUrl + '?' + params);
  }

}
