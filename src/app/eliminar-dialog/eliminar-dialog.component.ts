import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-eliminar-dialog',
  templateUrl: './eliminar-dialog.component.html',
  styleUrls: ['./eliminar-dialog.component.scss']
})
export class EliminarDialogComponent implements OnInit {

  idAsignatura: number;

  constructor(
    private dialogRef: MatDialogRef<EliminarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.idAsignatura = data.idAsignatura;
  }

  ngOnInit() {

  }

  delete() {
    this.dialogRef.close(this.idAsignatura);
  }

  close() {
    this.dialogRef.close();
  }

}
