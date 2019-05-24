import { Component, OnInit, Input, Inject} from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Asignatura } from '../../models/asignatura';
import { AsignaturasService } from '../../services/asignaturas.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Desdoble } from '../../models/desdoble';
import { Horario } from '../../models/horario';
import { Calendario } from '../../models/calendario';
import { MenuToolbarComponent } from '../../menu-toolbar/menu-toolbar.component';
import { AvisosService } from '../../services/avisos.service';

class HorarioDesdoble {

  desdoble: number;
  horario: number;

  constructor(desdoble: number, horario: number) {
    this.desdoble = desdoble;
    this.horario = horario;
  }

}

@Component({
  selector: 'app-anadir-asignatura',
  templateUrl: './anadir-asignatura.component.html',
  styleUrls: ['./anadir-asignatura.component.scss']
})
export class AnadirAsignaturaComponent implements OnInit {

  /* Propiedades necesarias para cuando se edita una asignatura */
  editar: boolean;
  deletedDesdobles: number[];
  deletedHorariosDesdobles: HorarioDesdoble[];
  deletedHorarios: number[];

  asignatura: Asignatura;
  calendarios: Calendario[];

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourFormGroup: FormGroup;

  ayudaHoraIni = "Hora de inicio";
  ayudaHoraFin = "Hora de fin";


  constructor(private angularService: AsignaturasService, private route: ActivatedRoute, private _formBuilder: FormBuilder,
    private titleService: Title, private avisosService: AvisosService) {
    this.titleService.setTitle("Añadir una asignatura")
    MenuToolbarComponent.updateTitle("Asignaturas");
    this.asignatura = new Asignatura;
    this.editar = false;

    this.deletedDesdobles = [];
    this.deletedHorariosDesdobles = [];
    this.deletedHorarios = [];
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


    let id = this.route.snapshot.paramMap.get('id');

    if (id != null) {
      this.titleService.setTitle("Editar asignatura")
      this.angularService.getAsignatura(Number(id)).subscribe(
        asignatura => {
          this.asignatura = asignatura
        }
      );

      this.editar = true;   // Al existir un ID en la URL es una edición de una asignatura existente
    }

    this.angularService.getAllCalendarios().subscribe(calendarios => {
      this.calendarios = calendarios;
    });

  }

  newDesdoble(): void {
    this.asignatura.desdobles.push(new Desdoble);
  }

  removeDesdoble(i: number): void {
    // añadir en la lista para eliminarlo del servidor posteriormente
    this.deletedDesdobles.push(this.asignatura.desdobles[i].id);
    this.asignatura.desdobles.splice(i, 1);
  }

  newHorario(): void {
    this.asignatura.horario.push(new Horario);
  }

  removeHorario(i: number): void {
    this.deletedHorarios.push(this.asignatura.horario[i].id);
    this.asignatura.horario.splice(i, 1);
  }
  newHorarioDesdoble(i: number): void {
    this.asignatura.desdobles[i].horario.push(new Horario);
  }

  removeHorarioDesdoble(i: number, t: number): void {
    this.deletedHorariosDesdobles.push(new HorarioDesdoble(this.asignatura.desdobles[i].id, this.asignatura.desdobles[i].horario[t].id));
    this.asignatura.desdobles[i].horario.splice(t, 1);
  }

  save(): void {
    
    
    if (!(this.asignatura.hasOwnProperty('codigo') && this.asignatura.hasOwnProperty('cuatrimestre')
      && this.asignatura.hasOwnProperty('curso') && this.asignatura.hasOwnProperty('departamento')
      && this.asignatura.hasOwnProperty('grupo') && this.asignatura.hasOwnProperty('nombre')
      && this.asignatura.hasOwnProperty('siglas') && this.asignatura.hasOwnProperty('titulacion'))
      && this.asignatura.hasOwnProperty('calendario') && this.asignatura.hasOwnProperty('creditos')) {
      this.avisosService.enviarMensaje("Debe rellenar todos los campos obligatorios");
    }
    else {
      if (this.editar) {
        // Es necesario eliminar del servidor antes de salvar la asignatura
        this.deletedHorariosDesdobles.forEach(horario => {
          this.angularService.deleteHorarioDesdoble(this.asignatura.id, horario.desdoble, horario.horario);
        });
        this.deletedHorarios.forEach(horario => {
          this.angularService.deleteHorario(this.asignatura.id, horario);
        });
        this.deletedDesdobles.forEach(desdoble => {
          this.angularService.deleteDesdoble(this.asignatura.id, desdoble);
        });

      }
      this.asignatura.siglas = this.asignatura.siglas.toUpperCase();
      this.asignatura.calendario = this.calendarios[this.asignatura.calendario.id]
      this.angularService.saveAsignatura(this.asignatura);
    }
  }

  compareCuatrimestres(c1, c2) {
    return c1 && c2 && c1 == c2;
  }

}
