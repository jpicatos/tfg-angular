import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AvisosService } from './avisos.service';
import { Eleccion } from '../models/eleccion';
import { ErroresEleccion } from '../models/erroresEleccion';

@Injectable()
export class EleccionService {
  private docenciaUrl = '/api/docencias/';

  constructor(private http: HttpClient, private router: Router, private avisosService: AvisosService) { }

  getElecciones(): Observable<Eleccion[]> {
    return this.http.get<Eleccion[]>(this.docenciaUrl);
  }
  getEleccion(id: number): Observable<Eleccion> {
    return this.http.get<Eleccion>(this.docenciaUrl + id);
  }
  saveEleccion(eleccion: Eleccion): void {
    eleccion = this.parseEleccion(eleccion)
    console.log("eleccion: ", eleccion)
    this.http.patch<Eleccion>(this.docenciaUrl + eleccion.id + '/', eleccion)
      .subscribe(data => {   // data is already a JSON object
        this.avisosService.enviarMensaje("Elección de docencia guardada correctamente");
        window.location.reload()
      });
  }
  createEleccion(eleccion: Eleccion): Observable<Eleccion> {
    eleccion = this.parseEleccion(eleccion)
    return this.http.post<Eleccion>(this.docenciaUrl, eleccion)
  }
  comprobarEleccion(eleccion: Eleccion): Observable<ErroresEleccion> {
    eleccion = this.parseEleccion(eleccion)
    return this.http.post<ErroresEleccion>(this.docenciaUrl + "comprobar/", eleccion);
  }

  parseEleccion(eleccion: Eleccion): Eleccion {
    eleccion.asignaturas_divisibles.map(asignatura => {
      delete asignatura.id;
    })
    var asignaturasAux = eleccion.asignaturas.map(asignatura => asignatura.id)
    eleccion.asignaturas = asignaturasAux;

    var asignaturasDivisiblesAux = eleccion.asignaturas_divisibles.map(asignatura => {
      return { creditos: asignatura.creditos, asignatura: asignatura.asignatura.id }
    });
    eleccion.asignaturas_divisibles = asignaturasDivisiblesAux;

    var desdoblesAux = eleccion.desdobles.map(desdoble => {
      if(desdoble.desdobles){
        return desdoble.desdobles[0].id;
      }
      return desdoble.id;
    })
    eleccion.desdobles = desdoblesAux;

    return eleccion;
  }

  deleteEleccion(id: number): void {
    this.http.delete<Eleccion>(this.docenciaUrl + id)
      .subscribe(docencia => {
        this.avisosService.enviarMensaje("Elección de docencia eliminada correctamente");
        window.location.reload()
      });;
  }

}

