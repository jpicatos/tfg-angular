import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AvisosService } from '../avisos.service';

class Credentials {
  username: string;
  password: string;

  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}

class User {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router, private avisosService: AvisosService) { }

  isAuthenticated(): boolean {
    let token = JSON.parse(localStorage.getItem('token'));
    
    return token ? true : false;
  }

  login(usuario, password) {
    let credentials = {
      username: usuario,
      password: password
    }

    this.http.post<User>("/api-token-auth/", credentials).subscribe(
      res => {
        localStorage.setItem('token', JSON.stringify(res.token));
        this.router.navigate(['/asignaturas/']);
        this.avisosService.enviarMensaje("Ha iniciado sesión correctamente");
      },
      error => this.avisosService.enviarMensaje("El usuario o contraseña introducidos no son correctos")
    );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
  }
}
