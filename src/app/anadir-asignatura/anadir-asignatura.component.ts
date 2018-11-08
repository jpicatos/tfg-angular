import { Component, OnInit } from '@angular/core';
import { Asignatura } from '../models/asignatura';
import { AsignaturasService } from '../asignaturas.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Departamento } from '../models/departamento';
import { Desdoble } from '../models/desdoble';
import { Horario } from '../models/horario';

@Component({
  selector: 'app-anadir-asignatura',
  templateUrl: './anadir-asignatura.component.html',
  styleUrls: ['./anadir-asignatura.component.css']
})
export class AnadirAsignaturaComponent implements OnInit {

  asignatura: Asignatura;
  departamento: Departamento;
  test: string;
  desdobles: Desdoble[];
  horario: Horario[];

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourFormGroup: FormGroup;

  
  constructor(private angularService: AsignaturasService,
    private route: ActivatedRoute, private _formBuilder: FormBuilder) {
      
    }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourFormGroup = this._formBuilder.group({
      fourCtrl: ['', Validators.required]
    });
    const id =+ this.route.snapshot.paramMap.get('id');
    if(id){
      this.angularService.getAsignatura(id).subscribe(asignatura => this.asignatura = asignatura);
      this.departamento = this.asignatura.departamento;
      this.desdobles = this.asignatura.desdobles;
      this.horario = this.asignatura.horario;
    }
    else{
      this.asignatura = new Asignatura;
      this.departamento = new Departamento;
      this.desdobles = [new Desdoble];
      this.horario = [new Horario];
    }
    
  }
  newDesdoble():void{
    this.desdobles.push(new Desdoble);
  }
  removeDesdoble():void{
    this.desdobles.pop();
  }
  newHorario():void{
    this.horario.push(new Horario);
  }
  removeHorario():void{
    this.horario.pop();
  }
  save():void{
    this.asignatura.departamento = this.departamento;
    this.asignatura.desdobles = this.desdobles;
    this.asignatura.horario = this.horario;
    this.angularService.saveAsignatura(this.asignatura);
  }

}
