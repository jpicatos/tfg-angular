import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
  selector: 'app-filtro-hora',
  templateUrl: './filtro-hora.component.html',
  styleUrls: ['./filtro-hora.component.scss']
})
export class FiltroHoraComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  @Input() hora: string;
  @Input() ayuda: string;
  @Input() isRequired: boolean;
  @Output() horaChange = new EventEmitter<string>();

  constructor() {
    this.createOptions();
    this.isRequired = false;
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
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
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
    this.horaChange.emit(event.option.value);
  }

}
