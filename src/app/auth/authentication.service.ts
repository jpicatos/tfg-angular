import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AvisosService } from '../services/avisos.service';
import { empty } from 'rxjs';

export class Token {
  access: string;
  refresh: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  refreshed: boolean; // Implementación JWT solo permite un refrescado por cada access token

  constructor(private http: HttpClient, private router: Router, private avisosService: AvisosService) { 
    this.refreshed = false;
  }

  isAuthenticated(): boolean {
    let token = JSON.parse(localStorage.getItem('currentUser'));
    
    return token ? true : false;
  }

  login(usuario, password) {
    let credentials = {
      username: usuario,
      password: password
    }

    this.http.post<Token>("/api/token/", credentials).subscribe(
      res => {
        localStorage.setItem('currentUser', JSON.stringify(res));
        this.router.navigate(['/asignaturas/']);
        this.avisosService.enviarMensaje("Ha iniciado sesión correctamente");
      });
  }

  refresh() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let token = currentUser.refresh;
    this.refreshed = true;

    return this.http.post<Token>("/api/token/refresh/", {"refresh": token})
      .pipe(
        map(res => {
          localStorage.setItem('currentUser', JSON.stringify(res));
          return <Token>res;
        }
        )
    );
  }

  getAuthToken() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser != null) {
      return currentUser.access;
    }
 
    return '';
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login/']);
    return empty();
  }
}