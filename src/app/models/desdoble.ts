import { Horario } from "./horario";
import { Docencia } from "./asignatura";

export class Desdoble {
    id: number;
    horario: Horario[];
    creditos: number;
    docencia: Docencia;
    selected: boolean;

    constructor() {
        this.horario = [new Horario];
        this.docencia = new Docencia();
    }
}