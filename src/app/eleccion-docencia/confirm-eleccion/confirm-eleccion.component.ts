import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-eleccion',
  templateUrl: './confirm-eleccion.component.html',
  styleUrls: ['./confirm-eleccion.component.scss']
})
export class ConfirmEleccionComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmEleccionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string, confirm: boolean, exit:boolean, admin:boolean }
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
