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

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router: Router, private avisosService: AvisosService) { }

  login(usuario, password) {
    let credentials = {
      username: usuario,
      password: password
    }

    this.http.post("/api-token-auth/", credentials).subscribe(
      res => {
        localStorage.setItem('user', JSON.stringify(res));
        this.router.navigate(['/asignaturas/']);
        this.avisosService.enviarMensaje("Ha iniciado sesión correctamente");
      },
      error => this.avisosService.enviarMensaje("El usuario o contraseña introducidos no son correctos")
    );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
  }
}
