import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-eliminar-dialog',
  templateUrl: './eliminar-dialog.component.html',
  styleUrls: ['./eliminar-dialog.component.scss']
})
export class EliminarDialogComponent implements OnInit {

  id: number;

  constructor(
    private dialogRef: MatDialogRef<EliminarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.id = data;
  }

  ngOnInit() {

  }

  delete() {
    this.dialogRef.close(this.id);
  }

  close() {
    this.dialogRef.close();
  }

}
