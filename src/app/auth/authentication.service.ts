import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, ChildActivationStart } from '@angular/router';
import { empty, Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AvisosService } from '../services/avisos.service';
import * as jwt_decode from 'jwt-decode';
import { GlobalConfigService } from '../services/global-config.service';
import { MenuToolbarComponent } from '../menu-toolbar/menu-toolbar.component';

export class Token {
  access: string;
  refresh: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  name: BehaviorSubject<string>;

  constructor(private http: HttpClient, private router: Router, private avisosService: AvisosService, private configService: GlobalConfigService) {
    this.name = new BehaviorSubject("Iniciar sesión");
   }

  isAuthenticated(): boolean {
    let token = JSON.parse(localStorage.getItem('currentUser'));

    try {
      var decoded = jwt_decode(token);
      if(!this.configService.dataLoaded()){
        this.configService.saveUserInfo(decoded.user_id, decoded.staff);
        this.configService.loadDepartamento();
      }
      this.name.next(decoded.name);
    }
    catch (error) { console.log("Invalid token") }
    

    return token ? true : false;
  }

  login(usuario, password) {
    let credentials = {
      username: usuario,
      password: password
    }

    this.http.post<Token>("/api/token/", credentials).subscribe(
      res => {
        localStorage.setItem('currentUser', JSON.stringify(res.access));
        localStorage.setItem('currentUserRefresh', JSON.stringify(res.refresh));
        this.router.navigate(['/asignaturas/']);
        this.avisosService.enviarMensaje("Ha iniciado sesión correctamente");
      });
  }

  refresh() {
    let token = JSON.parse(localStorage.getItem('currentUserRefresh'));

    return this.http.post<Token>("/api/token/refresh/", {"refresh": token})
      .pipe(
        map(res => {
          localStorage.setItem('currentUser', JSON.stringify(res.access));
          return <Token>res;
        }
        )
    );
  }

  getAuthToken() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser != null) {
      return currentUser;
    }
 
    return '';
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUserRefresh');
    this.router.navigate(['/login/']);
    this.name.next("Iniciar sesión");
    return empty();
  }
}