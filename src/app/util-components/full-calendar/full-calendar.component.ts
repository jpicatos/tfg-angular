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

  events = null;

  constructor() { }
  ngOnChanges(changes: SimpleChanges) {
    const asign: SimpleChange = changes.asignaturasSelected;
    if (asign) {
      this.asignaturas = asign.currentValue;
    }
    this.recurEvents();
  }
  ngOnInit() {
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
      events: []
    }
  }

  recurEvents() {
    let events = [];

    // Creación del array de eventos que posteriormente se establecerá en el calendario
    this.asignaturas.forEach(asignatura => {
      var fechaIni = moment('2018-09-12');
      var fechaFin = moment('2019-01-20');
      while (fechaIni <= fechaFin) {
        asignatura.horario.forEach(dia => {
          var weekDay = this.fetchWeekDay(null, new Date(fechaIni.format('YYYY-MM-DD')).getDay()); //0->Domingo, 1->Lunes...
          if (dia.dia === weekDay) {
            events.push(this.addEvent(fechaIni.format('YYYY-MM-DD'), dia.hora_inicio, dia.hora_fin, asignatura));
          }
        });
        var new_date = fechaIni.add('days', 1);
        fechaIni = new_date;
      }

    });

    this.events = events; // Eventos al calendario
  }

  addEvent(fecha, hora_ini, hora_fin, asignatura: Asignatura) {
    return {
      title: asignatura.nombre,
      start: fecha + " " + hora_ini,
      end: fecha + " " + hora_fin
    };
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
