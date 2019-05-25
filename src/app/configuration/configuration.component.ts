import { Component, OnInit, Input, Inject } from '@angular/core';
import { GlobalConfigService } from '../services/global-config.service';
import { Departamento } from '../models/departamento';
import { MenuToolbarComponent } from '../menu-toolbar/menu-toolbar.component';
import { EleccionService } from '../services/eleccion.service';
import { AvisosService } from '../services/avisos.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Title } from '@angular/platform-browser';


export interface DialogData {
  confirm: boolean;
}


@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
  departamento: Departamento;
  animal: string;
  name: string;
  loading: boolean;
  constructor(private configService: GlobalConfigService, private eleccionService: EleccionService, private avisosService: AvisosService, public dialog: MatDialog, private titleService: Title) {
    this.titleService.setTitle("Configuración")
    MenuToolbarComponent.updateTitle("Configuración");
    this.loading = true;
    this.configService.loadDepartamento().subscribe(departamentos => {
      this.departamento = departamentos[0]
      this.loading = false;
    });
  }

  ngOnInit() {
  }

  save() {
    console.log(this.departamento)
    this.configService.setDepartamento(this.departamento);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ResetConfirm, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      result ? this.reiniciar() : null;
    });
  }

  reiniciar() {
    this.eleccionService.reiniciar()
      .subscribe(result => {
        this.avisosService.enviarMensaje("Docencia reiniciada")
      })
  }

}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'reset-confirm.html',
})
export class ResetConfirm {

  constructor(
    public dialogRef: MatDialogRef<ResetConfirm>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

