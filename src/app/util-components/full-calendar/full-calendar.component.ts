import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import * as moment from 'moment';
import { Asignatura } from 'src/app/models/asignatura';

@Component({
  selector: 'app-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.scss']
})
export class FullCalendarComponent implements OnChanges, OnInit {
  calendarOptions: Options;

  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  get asignaturasEntrada(): Asignatura[] {
    return this.asignaturas
  }

  @Input() set asignaturasEntrada(asignaturasSelected: Asignatura[]) {
    this.asignaturas = asignaturasSelected;
  };

  asignaturas: Asignatura[] = [];

  events: any[] = [];

  constructor() { }
  ngOnChanges(changes: SimpleChanges) {
    const asign: SimpleChange = changes.asignaturasSelected;
    if (asign) {
      this.asignaturas = asign.currentValue;
    }
    console.log("La asignatura ha cambiado")
    //this.ngOnInit();
  }
  ngOnInit() {

    console.log("Calendar asignaturas", this.asignaturas);
    this.calendarOptions = {
      timeFormat: 'H(:mm)',
      editable: false,
      allDaySlot: false,
      locale: 'es',
      timezone: 'local',
      weekends: false,
      slotDuration: moment.duration(1, 'h'),
      minTime: moment.duration(9, 'h'),
      maxTime: moment.duration(20, 'h'),
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      events: this.events
    }
    this.asignaturas[0] = new Asignatura;
    this.asignaturas[0].nombre = "Asignatura prueba";
    this.asignaturas[0].horario = [
      {
        aula: "Aula 8",
        dia: "M",
        hora_fin: "17:50:00",
        hora_inicio: "16:00:00",
        id: 5,
      },
      {
        aula: "Aula 8",
        dia: "X",
        hora_fin: "17:50:00",
        hora_inicio: "16:00:00",
        id: 6
      }
    ]
    this.recurEvents();
  }

  recurEvents() {
    debugger;
    this.asignaturas.forEach(asignatura => {
      var fechaIni = moment('2018-09-12');
      var fechaFin = moment('2019-01-20');
      while (fechaIni <= fechaFin) {
        asignatura.horario.forEach(dia => {
          var weekDay = this.fetchWeekDay(null, new Date(fechaIni.format('YYYY-MM-DD')).getDay()); //0->Domingo, 1->Lunes...
          if (dia.dia === weekDay) {
            this.addEvent(fechaIni.format('YYYY-MM-DD'), dia.hora_inicio, dia.hora_fin, asignatura);
          }
        });
        var new_date = fechaIni.add('days', 1);
        fechaIni = new_date;
      }
      
    });


  }

  addEvent(fecha, hora_ini, hora_fin, asignatura: Asignatura) {
    this.events.push({
      title: asignatura.nombre,
      start: fecha + " " + hora_ini,
      end: fecha + " " + hora_fin
    });
  }

  fetchWeekDay(dayChar, dayNumber) {
    if (dayChar) {
      switch (dayChar) {
        case 'L':
          return 1;
        case 'M':
          return 2;
        case 'X':
          return 3;
        case 'J':
          return 5;
        case 'V':
          return 6;
      }
    }
    if (dayNumber) {
      switch (dayNumber) {
        case 0:
          return 'D'
        case 1:
          return 'L'
        case 2:
          return 'M'
        case 3:
          return 'X'
        case 4:
          return 'J'
        case 5:
          return 'V'
        case 6:
          return 'S'
      }
    }
  }

}
