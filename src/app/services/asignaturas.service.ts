import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Asignatura, AsignaturaImportar } from "../models/asignatura";
import { Desdoble } from "../models/desdoble";
import { Horario } from "../models/horario";
import { AvisosService } from './avisos.service';
import { Calendario } from '../models/calendario';


@Injectable()
export class AsignaturasService {

  private asignaturasUrl = '/api/asignaturas/';
  private calendariosUrl = '/api/asignaturas/calendarios/';

  constructor(private http: HttpClient, private router: Router, private avisosService: AvisosService) { }

  getAsignaturas(): Observable<Asignatura[]> {
    return this.http.get<Asignatura[]>(this.asignaturasUrl);
  }

  getAsignatura(id: number): Observable<Asignatura> {
    return this.http.get<Asignatura>(this.asignaturasUrl + id);
  }
  getAsignaturaDesdoble(idDesdoble: number): Observable<Asignatura[]> {
    return this.http.get<Asignatura[]>(`${this.asignaturasUrl}?desdoble=${idDesdoble}`);
  }

  getCalendarios(id: number): Observable<Calendario> {
    return this.http.get<Calendario>(this.calendariosUrl + id);
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
    return this.http.get<Asignatura[]>(this.asignaturasUrl + '?' + params);
  }

  saveAsignatura(asignatura: Asignatura): void {

    if (asignatura.id != undefined) {
      this.http.put<Asignatura>(this.asignaturasUrl + asignatura.id + '/', asignatura)
        .subscribe(data => {   // data is already a JSON object
          this.router.navigate(['/asignaturas/' + asignatura.id]);
          this.avisosService.enviarMensaje("Se han actualizado los cambios correctamente");
        });
    }
    else {
      this.http.post<Asignatura>(this.asignaturasUrl, asignatura)
        .subscribe(data => {   // data is already a JSON object
          this.router.navigate(['/asignaturas/' + data.id]);
          this.avisosService.enviarMensaje("Se ha creado la asignatura correctamente");
        });
    }

  }

  deleteAsignatura(id: number): void {
    this.http.delete<Asignatura>(this.asignaturasUrl + id)
      .subscribe(asignatura => { this.router.navigate(['/asignaturas']); });
  }

  deleteHorario(idAsignatura: number, idHorario: number): void {
    this.http.delete<Horario>(this.asignaturasUrl + idAsignatura + '/horarios/' + idHorario)
      .subscribe(res => { });
  }

  deleteDesdoble(idAsignatura: number, idDesdoble: number): void {
    this.http.delete<Desdoble>(this.asignaturasUrl + idAsignatura + '/desdobles/' + idDesdoble)
      .subscribe(res => { });
  }

  deleteHorarioDesdoble(idAsignatura: number, idDesdoble: number, idHorario: number): void {
    this.http.delete<Horario>(this.asignaturasUrl + idAsignatura + '/desdobles/' + idDesdoble + '/horarios/' + idHorario)
      .subscribe(res => { });
  }

  importar(archivo: File, departamento_siglas: string, departamento_nombre: string, anyo: string): Observable<AsignaturaImportar> {

    // this.http is the injected HttpClient
    const uploadData = new FormData();
    uploadData.append('excel_file', archivo, archivo.name);
    uploadData.append('departamento_siglas', departamento_siglas);
    uploadData.append('departamento_nombre', departamento_nombre);
    uploadData.append('anyo', anyo);

    return this.http.post<AsignaturaImportar>(this.asignaturasUrl + '/importar/', uploadData);
  }

}
