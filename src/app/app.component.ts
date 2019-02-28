import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AvisosService } from './services/avisos.service';
import { GlobalConfigService } from './services/global-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tfg-angular';

  constructor(private avisosService: AvisosService, private snackBar: MatSnackBar, private globalConfigService: GlobalConfigService) {
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.avisosService.mensaje.subscribe(mensaje => {
      let snackBarRef = this.snackBar.open(mensaje, 'Cerrar', {
        duration: 3000
      });
    })
    this.globalConfigService.getDepartamento()
      .subscribe(dep => this.globalConfigService.saveDepartamento(dep));
  }
}
