import { Horario } from "./horario";

export class Desdoble {
    id: number;
    horario: Horario[];

    constructor() {
        this.horario = [new Horario];
    }
}