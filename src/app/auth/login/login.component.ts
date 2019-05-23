import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { AvisosService } from 'src/app/services/avisos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: string;
  password: string;
  loading: boolean;
  constructor(private auth: AuthenticationService, private router: Router, private avisosService: AvisosService) { }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this.auth.login(this.usuario, this.password).subscribe(
      res => {
        localStorage.setItem('currentUser', JSON.stringify(res.access));
        localStorage.setItem('currentUserRefresh', JSON.stringify(res.refresh));
        this.router.navigate(['/dashboard/'])
          .then(() => {
            this.avisosService.enviarMensaje("Ha iniciado sesión correctamente");
          });
      },
      err => {
        this.avisosService.enviarMensaje("Error al iniciar sesión, revisa el usuario y la contraseña");
        this.loading = false;
      });
  }

}
