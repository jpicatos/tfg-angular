import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvisosService {

  @Output() mensaje: EventEmitter<string> = new EventEmitter();

  constructor() { }

  enviarMensaje(mensaje: string): void {
    this.mensaje.emit(mensaje);
  }
}
