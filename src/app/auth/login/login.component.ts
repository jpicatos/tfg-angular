import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: string;
  password: string;
  loading: boolean;
  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this.auth.login(this.usuario, this.password);
  }

}
