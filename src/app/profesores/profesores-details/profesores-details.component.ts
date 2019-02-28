import { Component, OnInit, Input } from '@angular/core';
import { Profesor } from '../../models/profesor';
import { ProfesoresService } from '../../services/profesores.service';
import { AsignaturasService } from '../../services/asignaturas.service';
import { EleccionService } from '../../services/eleccion.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MenuToolbarComponent } from 'src/app/menu-toolbar/menu-toolbar.component';
import { EliminarDialogComponent } from 'src/app/asignaturas/eliminar-dialog/eliminar-dialog.component';
import { Categoria } from '../../models/categoria';
import { Eleccion } from '../../models/eleccion';
import { Desdoble } from '../../models/desdoble';
import { Asignatura } from 'src/app/models/asignatura';
import { GlobalConfigService } from 'src/app/services/global-config.service';

@Component({
  selector: 'app-profesores-details',
  templateUrl: './profesores-details.component.html',
  styleUrls: ['./profesores-details.component.scss']
})
export class ProfesoresDetailsComponent implements OnInit {
  admin: boolean;

  @Input() profesor: Profesor;
  loaded: boolean;
  displayedColumns: string[];
  docencia: Eleccion;
  docenciaDesdobles: Asignatura[];
  categorias: Categoria[];

  constructor(private angularService: ProfesoresService,
    private asignaturasService: AsignaturasService,
    private eleccionService: EleccionService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private titleService: Title,
    private globalConfigService: GlobalConfigService) {
      this.admin = this.globalConfigService.isAdmin();
      this.loaded = false;
      this.profesor = new Profesor;
      this.docenciaDesdobles = [];  
  }

  ngOnInit() {
    this.displayedColumns = ['titles', 'data'];
    const id = + this.route.snapshot.paramMap.get('id');
    MenuToolbarComponent.updateTitle("Profesores");
    this.angularService.getProfesor(id).subscribe(profesor => {
      this.getCategoria(profesor.categoria);
      this.update(profesor);

      if (this.profesor.docencia != null) {
        this.eleccionService.getEleccion(this.profesor.docencia).subscribe(eleccion => {
          this.docencia = eleccion;
          eleccion.desdobles.map(desdoble => {
            this.asignaturasService.getAsignaturaDesdoble(desdoble.id).subscribe(
              asignaturaDesdoble => {
                asignaturaDesdoble[0].horario = desdoble.horario;
                this.docenciaDesdobles.push(asignaturaDesdoble[0]);
              }
            );
          });
          this.loaded = true;
        });
      }
      else this.loaded = true;

    });
  }

  update(profesor) {
    this.profesor = profesor;
    this.titleService.setTitle(this.profesor.usuario.first_name);
  }

  eliminarDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: this.profesor.usuario.id
    };

    const dialogRef = this.dialog.open(EliminarDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      profesor => {
        this.eliminarProfesor(profesor)
      }
    );
  }

  getCategoria(cate) {
    this.angularService.getCategoria(cate)
      .subscribe(categoria => {
        this.profesor.categoria = categoria.categoria;
      });
  }
  getCategorias() {
    this.angularService.getCategorias()
      .subscribe(categorias => {
        this.categorias = categorias;
      });
  }

  eliminarProfesor(profesor) {
    if (profesor != undefined) {
      this.angularService.deleteProfesor(this.profesor.usuario.id);
    }
    else {
      console.log('Cancelada eliminación profesor');
    }
  }
}