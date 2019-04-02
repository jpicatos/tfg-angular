import { Component, OnInit } from '@angular/core';
import { GlobalConfigService } from '../services/global-config.service';
import { Departamento } from '../models/departamento';
import { ProfesoresService } from '../services/profesores.service';
import { EleccionService } from '../services/eleccion.service';
import { Title } from '@angular/platform-browser';
import { MenuToolbarComponent } from '../menu-toolbar/menu-toolbar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  admin: boolean;
  tuTurno: boolean;
  departamento: Departamento;
  graficaCreditos = {
    labels: ['Créditos asignados', 'Créditos no asignados', "Creditos desdoble asignados", "Creditos desdoble no asignados"],
    datas: [],
    type: 'doughnut',
  }
  graficaNumCreditos = {
    labels: ['Total de Créditos Carga', 'Créditos fijos', "Resto de Créditos"],
    datas: [],
    type: 'bar',
    colour: ['#ff6384', '#36a2eb', '#cc65fe']
  }
  graficaDeudaPDA = {
    labels: ['Deudas', 'Deudas Carregidas', "PDA"],
    datas: [],
    type: 'horizontalBar',
    colour: ['#ff6384', '#36a2eb', '#ABB2B9']
  }
  graficaProfesores = {
    labels: ['Profesores Pendientes', 'Profesores Confirmados', "Profesores sin Confirmar"],
    datas: [],
    type: 'doughnut',
    colour: ['#ff6384', '#36a2eb', '#ABB2B9']
  }
  options = {
    tooltipEvents: [],
    tooltipCaretSize: 0,
    showTooltips: true,
    duration: 2000,
    responsive: true
  }
  optionsBar = {
    tooltipEvents: [],
    tooltipCaretSize: 0,
    showTooltips: true,
    duration: 2000,
    responsive: true,
    scales: {
      xAxes: [{
        stacked: true
      }],
      yAxes: [{
        stacked: true
      }]
    }
  }
  constructor(private configService: GlobalConfigService, private profesoresService: ProfesoresService, private docenciaService: EleccionService) {
    MenuToolbarComponent.updateTitle("Dashboard");
    this.admin = this.configService.isAdmin();
    this.tuTurno = this.configService.getTurno();
    this.departamento = this.configService.getDepartamento()[0];
    this.getProfesoresDataset();
  }

  ngOnInit() {
    this.graficaCreditos.datas = [{ data: [this.departamento.creditos_asignados, this.departamento.creditos_sin_asignar, this.departamento.creditos_desdoble - this.departamento.creditos_desdobles_sin_asignar, this.departamento.creditos_desdobles_sin_asignar], label: "Créditos" }];
    this.graficaCreditos.labels = ['Créditos asignados: ' + this.departamento.creditos_asignados, 'Créditos no asignados: ' + this.departamento.creditos_sin_asignar, "Creditos desdoble asignados: " + (this.departamento.creditos_desdoble - this.departamento.creditos_desdobles_sin_asignar), "Creditos desdoble no asignados: " + this.departamento.creditos_desdobles_sin_asignar]

    this.graficaNumCreditos.datas = [
      { data: [this.departamento.total_creditos_carga, this.departamento.creditos_fijos, this.departamento.resto_creditos], backgroundColor: this.graficaNumCreditos.colour }
    ];
    this.graficaNumCreditos.labels = ['Total de Créditos carga: ' + this.departamento.total_creditos_carga, 'Créditos fijos: ' + this.departamento.creditos_fijos, "Resto de Créditos: " + this.departamento.resto_creditos]

    this.graficaDeudaPDA.datas = [
      { data: [this.departamento.deudas, this.departamento.deudas_corregidas, this.departamento.pda], backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'] },
    ];
    this.graficaDeudaPDA.labels = ['Deudas: ' + this.departamento.deudas, 'Deudas Corregidas: ' + this.departamento.deudas_corregidas, "PDA: " + this.departamento.pda]
  }

  getProfesoresDataset(){
    this.profesoresService.getProfesores().subscribe(profesores => {
      var profesoresPendientes = profesores.filter(profe => profe.docencia === null).length
      var profesoresDocencia = profesores.filter(profe => profe.docencia)
      // debugger
      var profesoresConfirmada  = 0 ;
      profesoresDocencia.filter(profe =>{
        this.docenciaService.getEleccion(profe.docencia).subscribe(doc => {
          if(doc.confirmada){
            profesoresConfirmada++;
          }
          var profesoresSinConfirmar = profesoresDocencia.length - profesoresConfirmada;
          this.graficaProfesores.datas = [
            {
              data: [profesoresPendientes, profesoresConfirmada, profesoresSinConfirmar],
              backgroundColor: this.graficaProfesores.colour
            }
          ]
          this.graficaProfesores.labels = ['Profesores Pendientes: ' + profesoresPendientes, 'Profesores Confirmados: ' + profesoresConfirmada, "Profesores sin Confirmar: " + profesoresSinConfirmar]
        })
      })

      var profesoresSinConfirmar = profesoresDocencia.length - profesoresConfirmada;

      this.graficaProfesores.datas = [
        {
          data: [profesoresPendientes, profesoresConfirmada, profesoresSinConfirmar],
          backgroundColor: this.graficaProfesores.colour
        }
      ]
      this.graficaProfesores.labels = ['Profesores Pendientes: ' + profesoresPendientes, 'Profesores Confirmados: ' + profesoresConfirmada, "Profesores sin Confirmar: " + profesoresSinConfirmar]
    })
  }

}
