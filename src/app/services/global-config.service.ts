import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable, Subject } from 'rxjs';
import { Departamento } from '../models/departamento';
import { Profesor } from '../models/profesor';
import { ProfesoresService } from './profesores.service';

@Injectable()
export class GlobalConfigService {

  private departamentoUrl = '/api/departamentos';
  private globalConfig = {
    departamento: new Subject<any>(),
    usuario: new Subject<any>(),
    admin: null,
    user_id: null
  }
  private loading = new Subject<any>();

  constructor(private http: HttpClient, private profesoresService: ProfesoresService) {

  }
  getStartLoading() {
    return this.loading.asObservable();
  }

  startLoading() {
    this.loading.next(true);
  }

  getDepartamento(): Observable<Departamento> {
    return this.globalConfig.departamento.asObservable();
  }

  loadDepartamento(): void {
    this.http.get<Departamento>(this.departamentoUrl)
      .subscribe(departamento => {
        this.globalConfig.departamento.next(departamento[0]);
      });
  }

  getUserinfo(): Observable<any> {
    return this.globalConfig.usuario.asObservable();
  }

  isAdmin(): boolean {
    return this.globalConfig.admin;
  }

  saveUserInfo(user_id, admin): void {
    this.globalConfig.admin = admin;
    this.globalConfig.user_id = user_id;
    this.startLoading();
    if (!admin) {
      this.profesoresService.getProfesor(user_id)
        .subscribe(profe => {
          this.globalConfig.usuario.next(profe);
        })
    }
  }

  dataLoaded(): boolean {
    return (this.globalConfig.admin !== null || this.globalConfig.user_id !== null)
  }

  getConfig() {
    return this.globalConfig;
  }
}
