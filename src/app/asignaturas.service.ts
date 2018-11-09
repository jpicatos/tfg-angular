import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Asignatura } from "./models/asignatura";



const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
  })
};
@Injectable()
export class AsignaturasService {

  private asignaturasUrl = 'http://tfg.davidarroyo.es/api/asignaturas/';
  constructor(private http: HttpClient) { }

  getAsignaturas(): Observable<Asignatura[]> {
    return this.http.get<Asignatura[]>(this.asignaturasUrl+'?format=json');
  }
  getAsignatura(id: number): Observable<Asignatura> {
    return this.http.get<Asignatura>(this.asignaturasUrl+id+'/?format=json');
  }
  saveAsignatura(asignatura: Asignatura):void{
    console.log('[Smocked]Guardada')
  }
  private handleError<T> (operation = 'operation', result?: T) {
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
