import { Horario } from "./horario";

export class Desdoble {
    id: number;
    horario: Horario[];
    selected: boolean;

    constructor() {
        this.horario = [new Horario];
    }
}