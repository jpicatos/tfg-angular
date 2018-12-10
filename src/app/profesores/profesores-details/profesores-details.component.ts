import { Component, OnInit, Input } from '@angular/core';
import { Profesor } from '../models/profesor';
import { ProfesoresService } from '../profesores.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MenuToolbarComponent } from 'src/app/menu-toolbar/menu-toolbar.component';
import { EliminarDialogComponent } from 'src/app/asignaturas/eliminar-dialog/eliminar-dialog.component';
import { Categoria } from '../models/categoria';

@Component({
  selector: 'app-profesores-details',
  templateUrl: './profesores-details.component.html',
  styleUrls: ['./profesores-details.component.scss']
})
export class ProfesoresDetailsComponent implements OnInit {
  @Input() profesor: Profesor;
  loaded: boolean;
  displayedColumns: string[];
  profesorData: any[];
  categorias: Categoria[];

  constructor(private angularService: ProfesoresService, private dialog: MatDialog,
    private route: ActivatedRoute, private titleService: Title) {
    this.loaded = false;
    this.profesor = new Profesor;

  }

  ngOnInit() {
    this.displayedColumns = ['titles', 'data'];
    const id = + this.route.snapshot.paramMap.get('id');
    MenuToolbarComponent.updateTitle("Profesores");
    this.angularService.getProfesor(id).subscribe(profesor => {
      this.getCategoria(profesor.categoria);
      this.update(profesor);
      console.log(this.profesor);
      this.loaded = true;
    }

    );

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
      idProfesor: this.profesor.usuario.id
    };

    const dialogRef = this.dialog.open(EliminarDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      profesor => {
        this.eliminarProfesor(this.profesor)
      }
    );
  }

  getCategoria(cate){
    this.angularService.getCategoria(cate)
      .subscribe(categoria => {
        this.profesor.categoria = categoria.categoria;
      });
  }
  getCategorias(){
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
