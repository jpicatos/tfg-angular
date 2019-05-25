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
  dataLoaded = false;
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
  constructor(private configService: GlobalConfigService, private profesoresService: ProfesoresService, private docenciaService: EleccionService, private titleService: Title) {
    MenuToolbarComponent.updateTitle("Dashboard");
    this.titleService.setTitle("Dashboard");
    this.admin = this.configService.isAdmin();
    this.tuTurno = this.configService.getTurno();
    this.departamento = this.configService.getDepartamento()[0];
    this.configService.loadDepartamento().subscribe(departamentos => {
      this.departamento = departamentos[0]
      this.setDepartamentoData()
    })
    this.getProfesoresDataset();
  }

  ngOnInit() {
    this.setDepartamentoData()
  }

  setDepartamentoData(){
    this.graficaCreditos.datas = [{ data: [this.departamento.creditos_asignados.toFixed(2), this.departamento.creditos_sin_asignar.toFixed(2), (this.departamento.creditos_desdoble - this.departamento.creditos_desdobles_sin_asignar).toFixed(2), this.departamento.creditos_desdobles_sin_asignar.toFixed(2)], label: "Créditos" }];
    this.graficaCreditos.labels = ['Créditos asignados: ' + this.departamento.creditos_asignados.toFixed(2), 'Créditos no asignados: ' + this.departamento.creditos_sin_asignar.toFixed(2), "Creditos desdoble asignados: " + (this.departamento.creditos_desdoble - this.departamento.creditos_desdobles_sin_asignar).toFixed(2), "Creditos desdoble no asignados: " + this.departamento.creditos_desdobles_sin_asignar.toFixed(2)]

    this.graficaNumCreditos.datas = [
      { data: [this.departamento.total_creditos_carga.toFixed(2), this.departamento.creditos_fijos.toFixed(2), this.departamento.resto_creditos.toFixed(2)], backgroundColor: this.graficaNumCreditos.colour }
    ];
    this.graficaNumCreditos.labels = ['Total de Créditos carga: ' + this.departamento.total_creditos_carga.toFixed(2), 'Créditos fijos: ' + this.departamento.creditos_fijos.toFixed(2), "Resto de Créditos: " + this.departamento.resto_creditos.toFixed(2)]

    this.graficaDeudaPDA.datas = [
      { data: [this.departamento.deudas.toFixed(2), this.departamento.deudas_corregidas.toFixed(2), this.departamento.pda.toFixed(2)], backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'] },
    ];
    this.graficaDeudaPDA.labels = ['Deudas: ' + this.departamento.deudas.toFixed(2), 'Deudas Corregidas: ' + this.departamento.deudas_corregidas.toFixed(2), "PDA: " + this.departamento.pda.toFixed(2)]
  }

  getProfesoresDataset(){
    this.profesoresService.getProfesores().subscribe(profesores => {
      var profesoresPendientes = profesores.filter(profe => profe.docencia === null).length
      var profesoresDocencia = profesores.filter(profe => profe.docencia)
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
      this.dataLoaded = true;
    })
  }

}
