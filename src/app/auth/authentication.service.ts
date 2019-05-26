import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, ChildActivationStart } from '@angular/router';
import { empty, Observable, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AvisosService } from '../services/avisos.service';
import * as jwt_decode from 'jwt-decode';
import { GlobalConfigService } from '../services/global-config.service';

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
      this.name.next(decoded.name);
    }
    catch (error) {
    }

    if (token) {
      if (!this.configService.getUserinfo() || this.configService.getUserinfo().usuario.id !== decoded.user_id) {
        this.configService.saveUserInfo(decoded.user_id, decoded.staff);
        this.configService.startLoading();
      }
      return true
    }
    return false;
  }

  login(usuario, password) {
    let credentials = {
      username: usuario,
      password: password
    }

    return this.http.post<Token>("/api/token/", credentials);
  }

  refresh() {
    let token = JSON.parse(localStorage.getItem('currentUserRefresh'));
    return this.http.post<Token>("/api/token/refresh/", { "refresh": token })
      .pipe(
        map(res => {
          localStorage.setItem('currentUser', JSON.stringify(res.access));
          return <Token>res;
        })
      );
  }

  getAuthToken() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser != null) {
      return currentUser;
    }

    return '';
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUserRefresh');
    this.router.navigate(['/dashboard/'])
    this.name.next("Iniciar sesión");
    return empty();
  }
}