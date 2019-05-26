import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { Location } from '@angular/common';

@Component({
  selector: 'app-filtro-hora',
  templateUrl: './filtro-hora.component.html',
  styleUrls: ['./filtro-hora.component.scss']
})
export class FiltroHoraComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  text: string;
  displayCualquiera: boolean;

  @Input() hora: string;
  @Input() ayuda: string;
  @Input() isRequired: boolean;
  @Output() horaChange = new EventEmitter<string>();

  constructor( private location: Location) {
    this.createOptions();
    this.isRequired = false;
    this.displayCualquiera = false;
    if(this.location.path().indexOf('asignaturas') >= 0){
      this.displayCualquiera = true;
    }
  }

  ngOnInit() {
    // Establecemos una hora cuando estamos editando una asignatura
    this.myControl.setValue(this.hora);

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value;

    return this.options.filter(option => option.includes(filterValue));
  }

  private createOptions(): void {
    let hora = 8, horaStr;

    for (let i = 0; i < 12; i++) {
      hora++;

      if (hora < 10) horaStr = '0' + hora;
      else horaStr = hora;

      horaStr += ':00:00';

      this.options.push(horaStr);
      horaStr = horaStr[0] + horaStr[1] + ':30:00';
      this.options.push(horaStr);
    }
  }

  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    if(event.option.value){
      this.horaChange.emit(event.option.value);
    }
    else {
      this.horaChange.emit("");
      this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    }
  }

}
