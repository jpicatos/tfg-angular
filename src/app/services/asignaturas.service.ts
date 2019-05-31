import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Asignatura, AsignaturaImportar } from "../models/asignatura";
import { Desdoble } from "../models/desdoble";
import { Horario } from "../models/horario";
import { AvisosService } from './avisos.service';
import { Calendario } from '../models/calendario';
import { Cacheable } from 'ngx-cacheable';


@Injectable()
export class AsignaturasService {

  private asignaturasUrl = '/api/asignaturas/';
  private calendariosUrl = '/api/asignaturas/calendarios/';
  private asignaturasOrder = "?ordering=nombre"

  constructor(private http: HttpClient, private router: Router, private avisosService: AvisosService) { }

  getAsignaturas(): Observable<Asignatura[]> {
    return this.http.get<Asignatura[]>(this.asignaturasUrl + this.asignaturasOrder);
  }

  getAsignatura(id: number): Observable<Asignatura> {
    return this.http.get<Asignatura>(this.asignaturasUrl + id + '/');
  }
  getAsignaturaDesdoble(idDesdoble: number): Observable<Asignatura[]> {
    return this.http.get<Asignatura[]>(`${this.asignaturasUrl}?desdoble=${idDesdoble}`);
  }

  getCalendarios(id: number): Observable<Calendario> {
    return this.http.get<Calendario>(this.calendariosUrl + id + '/');
  }

  getAllCalendarios(): Observable<Calendario[]> {
    return this.http.get<Calendario[]>(this.calendariosUrl);
  }

  createCalendario(calendario): Observable<Calendario> {
    return this.http.post<Calendario>(this.calendariosUrl, calendario)
  }

  updateCalendario(calendario): Observable<Calendario> {
    return this.http.put<Calendario>(this.calendariosUrl + calendario.id + '/', calendario)
  }

  deleteCalendario(calendario): Observable<Calendario> {
    return this.http.delete<Calendario>(this.calendariosUrl + calendario.id + '/')
  }

  searchAsignatura(siglas: string, nombre: string, codigo: string, curso: string, cuatrimestre: number, inicio: string, fin: string, dia: string[]): Observable<Asignatura[]> {
    inicio ? null : inicio = ""
    fin ? null : fin = ""
    var params = '&siglas=' + siglas +
      '&nombre=' + nombre +
      '&curso=' + curso +
      '&inicio=' + inicio +
      '&fin=' + fin;
    if (cuatrimestre) {
      params += '&cuatrimestre=' + cuatrimestre
    }
    if (codigo) {
      params += '&codigo=' + codigo
    }
    dia.forEach(d => {
      params += '&dia=' + d
    });
    return this.http.get<Asignatura[]>(this.asignaturasUrl + this.asignaturasOrder + params);
  }

  saveAsignatura(asignatura: Asignatura): void {

    if (asignatura.id != undefined) {
      this.http.put<Asignatura>(this.asignaturasUrl + asignatura.id + '/', asignatura)
        .subscribe(
          data => {   // data is already a JSON object
            this.router.navigate(['/asignaturas/' + asignatura.id]);
            this.avisosService.enviarMensaje("Se han actualizado los cambios correctamente");
          },
          err => {
            this.avisosService.enviarMensaje("Error al editar la asignatura, por favor, revisa el formulario");
          }
        );
    }
    else {
      this.http.post<Asignatura>(this.asignaturasUrl, asignatura)
        .subscribe(data => {   // data is already a JSON object
          this.router.navigate(['/asignaturas/' + data.id]);
          this.avisosService.enviarMensaje("Se ha creado la asignatura correctamente");
        },
          err => {
            this.avisosService.enviarMensaje("Error al crear la asignatura, por favor, revisa el formulario");
          });
    }

  }

  deleteAsignatura(id: number): void {
    this.http.delete<Asignatura>(this.asignaturasUrl + id)
      .subscribe(asignatura => {
        let currentUser = localStorage.getItem("currentUser");
        let currentUserRefresh = localStorage.getItem("currentUserRefresh");

        localStorage.clear();

        localStorage.setItem("currentUser", currentUser);
        localStorage.setItem("currentUserRefresh", currentUserRefresh);
        this.router.navigate(['/asignaturas']);
      });
  }

  deleteHorario(idAsignatura: number, idHorario: number): void {
    this.http.delete<Horario>(this.asignaturasUrl + idAsignatura + '/horarios/' + idHorario + '/')
      .subscribe(res => { });
  }

  deleteDesdoble(idAsignatura: number, idDesdoble: number): void {
    this.http.delete<Desdoble>(this.asignaturasUrl + idAsignatura + '/desdobles/' + idDesdoble + '/')
      .subscribe(res => { });
  }

  deleteHorarioDesdoble(idAsignatura: number, idDesdoble: number, idHorario: number): void {
    this.http.delete<Horario>(this.asignaturasUrl + idAsignatura + '/desdobles/' + idDesdoble + '/horarios/' + idHorario + '/')
      .subscribe(res => { });
  }

  importar(archivo: File, departamento_siglas: string, departamento_nombre: string, anyo: string, sobrescribir: boolean): Observable<AsignaturaImportar> {

    // this.http is the injected HttpClient
    const uploadData = new FormData();
    uploadData.append('excel_file', archivo, archivo.name);
    uploadData.append('departamento_siglas', departamento_siglas);
    uploadData.append('departamento_nombre', departamento_nombre);
    uploadData.append('anyo', anyo);
    uploadData.append('sobrescribir', sobrescribir ? "true" : "false");

    return this.http.post<AsignaturaImportar>(this.asignaturasUrl + 'importar/', uploadData);
  }

  exportar(): Observable<Blob> {
    // this.http refers to HttpClient. Note here that you cannot use the generic get<Blob> as it does not compile: instead you "choose" the appropriate API in this way.
    return this.http.get(this.asignaturasUrl + "exportar/", { responseType: 'blob' });
  }

}
