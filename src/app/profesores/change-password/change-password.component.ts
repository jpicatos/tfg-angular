import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/models/profesor';
import { GlobalConfigService } from 'src/app/services/global-config.service';
import { FormGroup } from '@angular/forms';
import { notEqual } from 'assert';
import { HttpClient } from '@angular/common/http';
import { AvisosService } from 'src/app/services/avisos.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  profesor: Profesor;
  actualPass: string;
  newPass: string;
  newPass2: string;
  equal: boolean;
  requiredData: boolean;
  sortPass: boolean;
  constructor(private globalService: GlobalConfigService, private http: HttpClient, private avisosService: AvisosService) {
    this.profesor = this.globalService.getUserinfo();
    this.equal = false;
    console.log(this.profesor)
    this.requiredData = false;
    this.sortPass = true;
    this.actualPass = this.newPass = this.newPass2 = "";
  }

  ngOnInit() {
  }

  checkErrors() {
    this.equal = this.newPass === this.newPass2;
    this.requiredData = this.actualPass.length > 0 && this.newPass.length > 0 && this.newPass2.length > 0;
    this.sortPass = this.newPass.length < 9;
  }

  changePassword() {
    console.log(this.actualPass, this.newPass, this.newPass2)
    console.log(this.profesor.usuario.id)
    if (this.equal || this.requiredData || !this.sortPass) {
      this.http.post('/api/profesores/password/', {
        profesor: this.profesor.usuario.id,
        old_password: this.actualPass,
        new_password: this.newPass
      }).subscribe(data => {
        this.avisosService.enviarMensaje("Se ha creado la asignatura correctamente");
      },
        error => {
          console.log(error)
        });
    }


  }

}
