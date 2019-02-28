import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable, Subject } from 'rxjs';
import { Departamento } from '../models/departamento';
import { Profesor } from '../models/profesor';
import { ProfesoresService } from './profesores.service';

@Injectable()
export class GlobalConfigService {

  private departamentoUrl = '/api/departamento';
  private globalConfig = {
    departamento: new Subject<any>(),
    usuario: new Subject<any>(),
    admin: null,
    user_id: null
  }

  constructor(private http: HttpClient, private profesoresService: ProfesoresService) { 
    console.log(this.globalConfig);
  }

  getDepartamento(): Observable<Departamento> {
    if (this.globalConfig.departamento) {
      return this.globalConfig.departamento.asObservable();
    } else {
      return this.http.get<Departamento>(this.departamentoUrl);
    }
  }

  saveDepartamento(departamento: Departamento) {
    this.globalConfig.departamento.next(departamento);
  }

  getUserinfo(): Observable<any> {
    return this.globalConfig.usuario.asObservable();
  }

  isAdmin(): boolean{
    return this.globalConfig.admin;
  }

  saveUserInfo(user_id, admin): void {
    this.globalConfig.admin = admin;
    this.globalConfig.user_id = user_id;
    this.profesoresService.getProfesor(user_id)
      .subscribe(profe => {
        this.globalConfig.usuario.next(profe);
        console.log('userInfoSaved')
      })
  }

  getConfig() {
    return this.globalConfig;
  }
}
