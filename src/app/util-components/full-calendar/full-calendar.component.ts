import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import * as moment from 'moment';
import { Asignatura } from 'src/app/models/asignatura';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { getRandomColor } from './colors';

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

  get desdoblesEntrada(): Asignatura[] {
    return this.desdobles
  }

  @Input() set desdoblesEntrada(desdoblesSelected: Asignatura[]) {
    this.desdobles = desdoblesSelected;
  };

  asignaturas: Asignatura[] = [];
  desdobles: Asignatura[] = [];

  events = null;
  showDate = null;

  constructor(private angularService: AsignaturasService) { }
  ngOnChanges(changes: SimpleChanges) {
    const asign: SimpleChange = changes.asignaturasEntrada;
    console.log(changes);
    if (asign) {
      this.asignaturas = asign.currentValue;
      if (this.asignaturas.length > 0) {
        this.updateCalendarDateView(this.asignaturas[this.asignaturas.length- 1 ].calendario.fecha_ini)
      }

    }

    const desd: SimpleChange = changes.desdoblesEntrada;
    if (desd) {
      this.desdobles = desd.currentValue;
      if (this.desdobles.length > 0) {
        this.updateCalendarDateView(this.desdobles[this.desdobles.length -1].calendario.fecha_ini)
      }
    }
    this.recurEvents(this.asignaturas, this.desdobles);
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
      maxTime: moment.duration(21, 'h'),
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      events: []
    }

  }

  recurEvents(asignaturas, desdobles) {
    console.log("asignaturas", asignaturas);
    var events = [];
    var asignaturasEvents = this.fillEvents(asignaturas, false);
    var desdoblesEvents = this.fillEvents(desdobles, true);
    events= asignaturasEvents.concat(desdoblesEvents);
    this.events = events;
  }

  fillEvents(asignaturas, desdobles : boolean){
    var events = [];

    asignaturas.forEach(asignatura => {
      var fechaIni = moment(asignatura.calendario.fecha_ini);
      var fechaFin = moment(asignatura.calendario.fecha_fin);

      !asignatura.color ? asignatura.color = getRandomColor() : null;

      var horario = asignatura.horario;
      if (desdobles) {
        horario = asignatura.desdobles[0].horario;
      }
      while (fechaIni <= fechaFin) {
        horario.forEach(dia => {
          var weekDay = this.fetchWeekDay(null, new Date(fechaIni.format('YYYY-MM-DD')).getDay()); //0->Domingo, 1->Lunes...
          if (dia.dia === weekDay) {
            events.push(this.addEvent(fechaIni.format('YYYY-MM-DD'), dia.hora_inicio, dia.hora_fin, asignatura, desdobles));
          }
        });
        var new_date = fechaIni.add('days', 1);
        fechaIni = new_date;
      }
    });
    return events;
  }
  addEvent(fecha, hora_ini, hora_fin, asignatura: Asignatura, desdobles) {
    return {
      title: `[${asignatura.siglas}] ${asignatura.nombre}`,
      start: fecha + " " + hora_ini,
      end: fecha + " " + hora_fin,
      backgroundColor: asignatura.color,
      borderColor: desdobles ? "red" : asignatura.color,
      textColor: "#454545"
    }
  }

  updateCalendarDateView(fecha) {
    if (this.ucCalendar.fullCalendar('getView').name === 'month') {
      this.ucCalendar.fullCalendar('changeView', 'agenda');
      this.ucCalendar.fullCalendar('gotoDate', moment(fecha));
      this.ucCalendar.fullCalendar('changeView', 'month');
      this.ucCalendar.fullCalendar('gotoDate', moment(fecha));
    }
    else {
      this.ucCalendar.fullCalendar('changeView', 'month');
      this.ucCalendar.fullCalendar('gotoDate', moment(fecha));
      this.ucCalendar.fullCalendar('changeView', 'agenda');
      this.ucCalendar.fullCalendar('gotoDate', moment(fecha));
    }

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
