import { Horario } from "./horario";

import { Eleccion } from "./eleccion";

export class Desdoble {
    id: number;
    horario: Horario[];
    creditos: number;
    docencia: Eleccion;
    selected: boolean;

    constructor() {
        this.horario = [new Horario];
        this.docencia = new Eleccion();
    }
}