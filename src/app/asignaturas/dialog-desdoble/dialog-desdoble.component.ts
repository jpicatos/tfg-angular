import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Desdoble } from '../../models/desdoble';
import { Horario } from '../../models/horario';

@Component({
  selector: 'app-dialog-desdoble',
  templateUrl: './dialog-desdoble.component.html',
  styleUrls: ['./dialog-desdoble.component.scss']
})
export class DialogDesdobleComponent implements OnInit {
  horario: Horario[];
  constructor(
    public dialogRef: MatDialogRef<DialogDesdobleComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      
      this.horario = data.data.horario;
    }


  ngOnInit() {
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

}
