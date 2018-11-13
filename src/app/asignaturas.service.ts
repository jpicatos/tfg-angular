import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Asignatura, AsignaturaImportar } from "./models/asignatura";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': 'Token d0cddc40af7cb1bf04084d94cda4a4e0dc96c78e'
  })
};


@Injectable()
export class AsignaturasService {

  private asignaturasUrl = 'http://tfg.davidarroyo.es/api/asignaturas/';
  constructor(private http: HttpClient, private router: Router) { }

  getAsignaturas(): Observable<Asignatura[]> {
    return this.http.get<Asignatura[]>(this.asignaturasUrl + '?format=json', httpOptions);
  }
  getAsignatura(id: number): Observable<Asignatura> {
    return this.http.get<Asignatura>(this.asignaturasUrl + id + '/?format=json', httpOptions);
  }
  searchAsignatura(siglas: string, nombre: string, codigo: string, curso: string, cuatrimestre: number, inicio: string, fin: string, dia: string[]): Observable<Asignatura[]> {
    var params = '&siglas=' + siglas +
      '&nombre=' + nombre +
      '&codigo=' + codigo +
      '&curso=' + curso +
      '&inicio=' + inicio +
      '&fin=' + fin;
    if (cuatrimestre) {
      params += '&cuatrimestre=' + cuatrimestre
    }
    dia.forEach(d => {
      params += '&dia=' + d
    });
    return this.http.get<Asignatura[]>(this.asignaturasUrl + '?format=json' + params, httpOptions);
  }
  saveAsignatura(asignatura: Asignatura): void {

    if (asignatura.id != undefined) {
      this.http.put<Asignatura>(this.asignaturasUrl + asignatura.id + '/', asignatura, httpOptions)
        .subscribe(data => {   // data is already a JSON object
          this.router.navigate(['/asignaturas/' + asignatura.id]);
        });
    }
    else {
      this.http.post<Asignatura>(this.asignaturasUrl, asignatura, httpOptions)
        .subscribe(data => {   // data is already a JSON object
          this.router.navigate(['/asignaturas/' + data.id]);
        });
    }

  }

  importar(archivo: File, departamento_siglas: string, departamento_nombre: string): Observable<AsignaturaImportar> {
    const httpOptions =
      new HttpHeaders({
        'Authorization': 'Token d0cddc40af7cb1bf04084d94cda4a4e0dc96c78e'
      });

    const httpUrl = "http://tfg.davidarroyo.es/api/asignaturas/importar/";

    // this.http is the injected HttpClient
    const uploadData = new FormData();
    uploadData.append('excel_file', archivo, archivo.name);
    uploadData.append('departamento_siglas', departamento_siglas);
    uploadData.append('departamento_nombre', departamento_nombre);

    return this.http.post<AsignaturaImportar>(httpUrl, uploadData, {
      headers: httpOptions,
      // reportProgress: true,
      // observe: 'events'
    })
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(`HeroService: ${message}`);
  }
}
