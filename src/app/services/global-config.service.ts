import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable, Subject } from 'rxjs';
import { Departamento } from '../models/departamento';
import { Profesor } from '../models/profesor';
import { ProfesoresService } from './profesores.service';
import { AvisosService } from './avisos.service';

@Injectable()
export class GlobalConfigService {

  private departamentoUrl = '/api/departamentos/';
  private globalConfig = {
    departamento: new Departamento,
    usuario: new Profesor,
    admin: null,
    user_id: null,
    tuTurno: null
  }
  private loading = new Subject<any>();

  constructor(private http: HttpClient, private profesoresService: ProfesoresService, private avisosService: AvisosService) {

  }
  getStartLoading() {
    return this.loading.asObservable();
  }

  startLoading() {
    this.loading.next(true);
  }

  getDepartamento(): Departamento {
    return this.globalConfig.departamento;
  }

  loadDepartamento(): Observable<Departamento> {
    return this.http.get<Departamento>(this.departamentoUrl)
  }

  saveDepartamento(departamento: Departamento): void {
    this.globalConfig.departamento = departamento;
  }

  setDepartamento(departamento:Departamento): void {
    this.http.patch<Departamento>(this.departamentoUrl + departamento.siglas + '/', departamento)
        .subscribe(data => {
          this.avisosService.enviarMensaje("Se han actualizado los cambios correctamente");
        });
  }

  getUserinfo(): Profesor {
    return this.globalConfig.usuario;
  }

  isAdmin(): boolean {
    return this.globalConfig.admin;
  }

  userId(): number {
    return this.globalConfig.user_id;
  }

  saveUserInfo(user_id, admin): void {
    this.globalConfig.admin = admin;
    this.globalConfig.user_id = user_id;
  }

  saveProfeInfo(profesor): void {
    this.globalConfig.usuario = profesor;
  }

  saveTurno(turno): void {
    this.globalConfig.tuTurno = turno;
  }

  getTurno(): boolean{
    return this.globalConfig.tuTurno;
  }

  dataLoaded(): boolean {
    return (this.globalConfig.admin !== null || this.globalConfig.user_id !== null)
  }

  getConfig() {
    return this.globalConfig;
  }
}
