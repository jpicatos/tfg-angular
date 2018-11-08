import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';

import { Asignatura } from "./models/asignatura";
import { ASIGNATURA } from "./mocked-asignaturas";


const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {

  private asignaturasUrl = 'http://http://tfg.davidarroyo.es/api/asignaturas/';
  constructor() { }

  getAsignaturas(): Observable<Asignatura[]> {
    // return this.http.get<Asignatura[]>(this.asignaturasUrl)
    return of(ASIGNATURA);
  }
  getAsignatura(id: number): Observable<Asignatura> {
    return of(ASIGNATURA.find(hero => hero.id === id));
  }
}
